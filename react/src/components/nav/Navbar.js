import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
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

const PATHS_TO_VALUE = {
  '/mysongs': 0,
  '/youtube': 1,
  '/playlists': 2,
  '/addplaylist': 2,
};

class Navbar extends Component {
  constructor(props) {
    super(props);

    const { pathname } = props.location;
    this.state = {
      value: PATHS_TO_VALUE[pathname],
    };
  }

  handleChange(e, value) {
    this.setState({ value });
  }

  render() {
    const { classes: { appBar, button }, user } = this.props;

    if (!user) {
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
          <Tab label="Play Lists" component={Link} to="/playlists" />
        </Tabs>
        <Link to="/logout" className={button}>
          <Button variant="raised">
            Logout
          </Button>
        </Link>
      </AppBar>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  user: PropTypes.objectOf(PropTypes.string),
  location: PropTypes.objectOf(PropTypes.string).isRequired,
};

Navbar.defaultProps = {
  user: null,
};

const mapStateToProps = ({ user }) => ({
  user,
});

export default withRouter(withStyles(styles)(connect(mapStateToProps)(Navbar)));
