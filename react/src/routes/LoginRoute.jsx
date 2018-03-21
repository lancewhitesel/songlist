import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const render = (Component, props, user) => {
  const isAuthenticated = !!user;
  console.log('props in login route: ', props);
  console.log('props in login auth? ', isAuthenticated);

  if (isAuthenticated) {
    return (
      <Component {...props} />
    );
  }

  return (
    <Redirect
      to={{
        pathname: '/login',
        state: { from: props.location }
      }}
    />
  );
};

const LoginRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => render(Component, props, rest.user)}
  />
);

LoginRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

render.propTypes = {
  location: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
};

function mapStateToProps({ user }) {
  console.log('mapState: ', user);
  return {
    user
  };
}

export default connect(mapStateToProps)(LoginRoute);
