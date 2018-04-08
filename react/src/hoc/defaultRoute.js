import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { UserType } from '../types';

export default (WrappedComponent) => {
  const DefaultRoute = ({ user }) => {
    if (user && !user.loginError) {
      return <WrappedComponent {...this.props} />;
    }

    return <Redirect to="/login" />;
  };

  DefaultRoute.propTypes = {
    user: UserType,
  };

  DefaultRoute.defaultProps = {
    user: null,
  };

  const mapStateToProps = ({ user }) => ({
    user,
  });

  return connect(mapStateToProps)(DefaultRoute);
};
