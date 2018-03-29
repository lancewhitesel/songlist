import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { LocationType, UserType } from '../types';

const DefaultRoute = ({ user, ...rest, location }) => {
  if (user) {
    return <Redirect to="/mysongs" />;
  }

  return (
    <Redirect to={{
      pathname: '/login',
      state: { from: location },
      }}
    />
  );
};

DefaultRoute.propTypes = {
  location: LocationType,
  user: UserType,
};

DefaultRoute.defaultProps = {
  user: null,
  location: null,
};

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(DefaultRoute);
