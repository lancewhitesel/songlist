import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import { Snackbar } from 'material-ui';
import PropTypes from 'prop-types';

import LoginForm from '../components/form/LoginForm';
import login from '../actions/login';
import { ClassesType, LocationType } from '../types';

const styles = theme => ({
  loginContainer: {
    maxWidth: 450,
    margin: '0 auto',
  },
});

class LoginView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectToReferrer: false,
      error: null,
      defaultPath: props.defaultPath || '/mysongs',
    };
  }

  componentWillMount() {
    // This call will check to see if user info is stored in localStorage
    //  and re-log the user in based on that info if it is.
    this.props.login();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
      if (nextProps.user.token) {
        this.setState({ redirectToReferrer: true });
      } else if (nextProps.user.loginError) {
        this.setState({ error: this.props.user.loginError });
      }
    }
  }

  render() {
    const { classes: { loginContainer }, location } = this.props;
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
          <LoginForm onSubmit={this.props.login} />
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
  classes: ClassesType.isRequired,
  location: LocationType.isRequired,
  login: PropTypes.func.isRequired,
  user: PropTypes.objectOf(PropTypes.string),
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
