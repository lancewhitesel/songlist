import React, { Component } from 'react';
import { connect } from 'react-redux';

class MyPlaylists extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        My PlayLists!
      </div>
    );
  }
}

function mapStateToProps({ playlists }) {
  return { playlists };
}

export default connect(mapStateToProps)(MyPlaylists);
