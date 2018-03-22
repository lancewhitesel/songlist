import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { AppBar, Button } from 'material-ui';
import Tabs, { Tab } from 'material-ui/Tabs';
import { withStyles } from 'material-ui/styles';
import Home from 'material-ui-icons/Home';
import PropTypes from 'prop-types';

const styles = theme => ({
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'white',
  },
  button: {
    margin: 10,
    padding: '0 5px',
  },
});

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      userLoggedIn: localStorage && localStorage.token && localStorage.username,
    };

    // this.props.history.replace('/mysongs');
  }

  handleChange(e, value) {
    this.setState({ value });
  }

  handleLogout() {
    this.setState({ userLoggedIn: false });
  }

  render() {
    this.setState = {
      userLoggedIn: localStorage && localStorage.token && localStorage.username,
    };

    const { classes: { appBar, button } } = this.props;
    if (!this.state.userLoggedIn) {
      return (
        <AppBar position="static" className={appBar}>
          <Link to="/" component="div">
            <Button size="small" variant="raised" className={button}>
              <Home />
            </Button>
          </Link>
          <span>
            <Link to="/register" component="div">
              <Button size="small" variant="raised" className={button}>
                Register
              </Button>
            </Link>
            <Link to="/login" component="div">
              <Button size="small" variant="raised" className={button}>
                Login
              </Button>
            </Link>
          </span>
        </AppBar>
      );
    }

    return (
      <AppBar position="static" className={appBar}>
        <Tabs value={this.state.value} onChange={(e, v) => this.handleChange(e, v)}>
          <Tab label="Home" component={Link} to="/mysongs" />
          <Tab label="Search" component={Link} to="/youtube" />
          <Tab label="Play Lists" component={Link} to="playlists" />
        </Tabs>
        <Link to="/logout" className={button}>
          <Button
            variant="raised"
            onClick={e => this.handleLogout()}
          >
            Logout
          </Button>
        </Link>
      </AppBar>
    );
  }
}

Navbar.propTypes = {
  // history: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
