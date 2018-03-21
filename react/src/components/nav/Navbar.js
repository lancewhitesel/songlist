import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  handleChange(e, value) {
    this.setState({ value });
  }

  render() {
    return (
      <AppBar position="static">
        <Tabs value={this.state.value} onChange={(e, v) => this.handleChange(e, v)}>
          <Tab label="Home" component={Link} to="/mysongs" />
          <Tab label="Search" component={Link} to="/youtube" />
          <Tab label="Play Lists" component={Link} to="playlists" />
        </Tabs>
      </AppBar>
    );
  }
}

export default Navbar;
