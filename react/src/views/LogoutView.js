import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Paper } from 'material-ui';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import logout from '../actions/logout';
import { ClassesType, UserType } from '../types';

const styles = theme => ({
  root: {
    width: 400,
    margin: 'auto',
  },
});

class LogoutView extends Component {
  componentWillMount() {
    this.props.logout();
  }

  render() {
    if (this.props.user) {
      return <h1>Logging out ... </h1>;
    }

    return (
      <div className={this.props.classes.root}>
        <Paper elevation={3} style={{ padding: 32, margin: 32 }}>
          Logout successful.
        </Paper>
      </div>
    );
  }
}

LogoutView.propTypes = {
  user: UserType,
  logout: PropTypes.func.isRequired,
  classes: ClassesType.isRequired,
};

LogoutView.defaultProps = {
  user: null,
};

const mapStateToProps = ({ user }) => ({
  user,
});

export default withStyles(styles)(connect(mapStateToProps, { logout })(LogoutView));
