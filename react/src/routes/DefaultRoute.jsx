import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

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
  location: PropTypes.object,
  user: PropTypes.object,
};

DefaultRoute.defaultProps = {
  user: null,
  location: null,
};

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(DefaultRoute);
