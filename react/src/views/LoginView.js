import React, { Component } from 'react';
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
});

class LoginView extends Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
    this.state = {
      redirectToReferrer: false,
      error: null,
      defaultPath: props.defaultPath || '/mysongs',
    };
  }

  componentWillMount() {
    if (localStorage && localStorage.token && localStorage.username && localStorage.role) {
      this.setState({ redirectToReferrer: true });
      this.props.login({ username: localStorage.username });
    }
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

      this.setState({ redirectToReferrer: true });
      this.props.login(credentials);
    }
  }

  render() {
    const { classes: { button, loginContainer }, location } = this.props;
    let { from } = (location && location.state) || this.state.defaultPath;
    if (!from || (from && from.pathname === '/')) {
      from = this.state.defaultPath;
    }

    let { redirectToReferrer } = this.state;
    redirectToReferrer = !!this.props.user || redirectToReferrer;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <div className={loginContainer}>
          <LoginForm onSubmit={this.login} />
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
  user: PropTypes.object,
  defaultPath: PropTypes.string,
};

LoginView.defaultProps = {
  user: null,
  defaultPath: null,
};

const mapStateToProps = state => (
  state
);

export default withStyles(styles)(connect(mapStateToProps, { login })(LoginView));
