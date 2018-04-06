import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';

import { UserType } from '../types';
// import currentUserQuery from '../queries/CurrentUser';

export default (WrappedComponent) => {
  class RequireAuth extends Component {
    componentWillUpdate(nextProps) {
      if (!nextProps.user || nextProps.user.loginError) {
        nextProps.history.push('/login');
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  RequireAuth.propTypes = {
    user: UserType,
    history: PropTypes.shape({}).isRequired,
  };

  RequireAuth.defaultProps = {
    user: null,
  };

  const mapStateToProps = state => state;
  return connect(mapStateToProps)(RequireAuth);
};
