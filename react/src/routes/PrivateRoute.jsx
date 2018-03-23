import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

/*
const PrivateRoute = ({ user, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      user
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
    )}
  />
);
*/
class PrivateRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { user, ...rest } = this.props;
    console.log('location =====: ', this.props);

    if (user) {
      return <div />;
    }

    return (
      <Redirect to={{
        pathname: '/login',
        state: { from: this.props.location },
        }}
      />
    );
  }
}

PrivateRoute.propTypes = {
  location: PropTypes.object,
  user: PropTypes.object,
};

PrivateRoute.defaultProps = {
  user: null,
  location: null,
};

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(PrivateRoute);
