import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const render = (props) => {
  const isAuthenticated = localStorage && localStorage.token && localStorage.username;
  const { from } = props.location.state || { from: { pathname: '/' } };
  console.log('from, ', from);
  console.log('props, ', props);

  if (isAuthenticated) {
    console.log('redirecting to my songs ...');
    return (
      <Redirect
        to={{
          pathname: '/mysongs',
          state: { from: props.location },
        }}
      />
    );
  }

  console.log('rendering rediret...');
  return (
    <Redirect
      to={{
        pathname: '/login',
        state: { from: props.location },
      }}
    />
  );
};

const LoginRoute = ({ ...rest }) => (
  <Route
    {...rest}
    render={props => render(props)}
  />
);

render.propTypes = {
  location: PropTypes.string.isRequired,
};

export default LoginRoute;
