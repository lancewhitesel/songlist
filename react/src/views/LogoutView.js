import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Paper } from 'material-ui';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import logout from '../actions/logout';

const styles = theme => ({
  toast: {
    width: 400,
    margin: 'auto',
  },
});

class LogoutView extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.logout();
  }

  render() {
    if (this.props.user) {
      return <h1>Logging out ... </h1>;
    }

    return (
      <div className={this.props.classes.toast}>
        <Paper elevation={3} style={{ padding: 32, margin: 32 }}>
          Logout successful.
        </Paper>
      </div>
    );
  }
}

LogoutView.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

LogoutView.defaultProps = {
  user: null,
};

const mapStateToProps = ({ user }) => ({
  user,
});

export default withStyles(styles)(connect(mapStateToProps, { logout })(LogoutView));
