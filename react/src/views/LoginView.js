import React, { Component } from 'react';
import Falcor from 'falcor';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import { Button, Snackbar } from 'material-ui';
import PropTypes from 'prop-types';

import falcorModel from '../model/falcorModel';
import LoginForm from '../components/form/LoginForm';
import login from '../actions/login';

const styles = theme => ({
  loginContainer: {
    maxWidth: 450,
    margin: '0 auto',
  },
  button: {
    margin: '0 auto',
    display: 'block',
    width: 150,
  },
});

class LoginView extends Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
    this.state = {
      redirectToReferrer: false,
      error: null,
    };
  }

  async login(credentials) {
    const x = this;
    console.info('login: credentials: ', credentials);

    await falcorModel
      .call(['login'], [credentials])
      .then(result => result);

    const tokenRes = await falcorModel.getValue('login.token');
    console.info('login: tokenRes: ', tokenRes);
    if (tokenRes === 'INVALID') {
      const errorRes = await falcorModel.getValue('login.error');
      this.setState({ error: errorRes });
      return;
    }

    if (tokenRes) {
      const username = await falcorModel.getValue('login.username');
      const role = await falcorModel.getValue('login.role');

      localStorage.setItem('token', tokenRes);
      localStorage.setItem('username', username);
      localStorage.setItem('role', role);

      console.info('props: ', this.props);

      this.setState({ redirectToReferrer: true });
      this.props.login(credentials);
    }
  }

  render() {
    const { classes: { button, loginContainer }, location } = this.props;
    console.log('render!');

    const { from } = location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <h1>Login</h1>
        <div className={loginContainer}>
          <LoginForm onSubmit={this.login} />
        </div>
        <h1>OR</h1>
        <div className={loginContainer}>
          <Button
            variant="raised"
            color="secondary"
            onClick={e => this.props.history.push('/register')}
            className={button}
          >
            Register
          </Button>
        </div>
        <Snackbar
          autoHideDuration={4000}
          open={!!this.state.error}
          message={this.state.error || ''}
          onClose={() => null}
        />
      </div>
    );
  }
}

LoginView.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = state => (
  state
);

export default withStyles(styles)(connect(mapStateToProps, { login })(LoginView));
