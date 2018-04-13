import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { UserType } from '../types';

export default (WrappedComponent) => {
  class RequireAuth extends Component {
    componentWillUpdate(nextProps) {
      if (!nextProps.user || nextProps.user.loginError) {
        nextProps.history.push('/login', {
          from: this.props.location.pathname,
        });
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  RequireAuth.propTypes = {
    user: UserType,
    history: PropTypes.shape({}).isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
  };

  RequireAuth.defaultProps = {
    user: null,
  };

  const mapStateToProps = state => state;
  return connect(mapStateToProps)(RequireAuth);
};
