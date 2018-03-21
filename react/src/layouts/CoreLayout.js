import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CoreLayout = props => (
  <div>
    <span>
      Links: <Link to="/login">Login</Link> | <Link to="/">Home Page</Link>
    </span>
    <br />
    {props.children}
  </div>
);

CoreLayout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default CoreLayout;
