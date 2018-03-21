import React, { Component } from 'react';
import Falcor from 'falcor';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
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
      // error: null,
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

    console.info('props: ', this.props);

    this.setState({ redirectToReferrer: true });
    this.props.login(credentials);
  }

  render() {
    const { classes: { loginContainer }, location } = this.props;
    console.log('render!');

    const { from } = location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <h1>Login View</h1>
        <div className={loginContainer}>
          <LoginForm onSubmit={this.login} />
        </div>
      </div>
    );
  }
}

LoginView.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  state
);

export default withStyles(styles)(connect(mapStateToProps, { login })(LoginView));
