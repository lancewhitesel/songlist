import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

import fetchMyPlaylists from '../actions/fetchMyPlaylists';
import searchMyPlaylists from '../actions/searchMyPlaylists';
import selectPlaylist from '../actions/selectPlaylist';

import SearchBar from '../components/search/SearchBar';
import PlaylistList from '../components/playlist/PlaylistList';
import PlaylistDetail from '../components/playlist/PlaylistDetail';

import { ClassesType, PlaylistType, PlaylistListType } from '../types';

const styles = t => ({
  content: {
    display: 'flex',
    flexDirection: 'row',
  },
});

class MyPlaylists extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.fetchMyPlaylists();
  }

  render() {
    const {
      classes: { content },
      playlists,
      selectedPlaylist,
    } = this.props;

    return (
      <div>
        <SearchBar
          onSearchTermChange={term => this.props.searchMyPlaylists(term)}
          placeholder="Search For Playlists"
        />
        <div className={content}>
          <PlaylistDetail list={selectedPlaylist} />
          <PlaylistList lists={playlists} onSelect={list => this.props.selectPlaylist(list)} />
        </div>
      </div>
    );
  }
}

MyPlaylists.propTypes = {
  classes: ClassesType.isRequired,
  playlists: PlaylistListType.isRequired,
  selectedPlaylist: PlaylistType,
  fetchMyPlaylists: PropTypes.func.isRequired,
  searchMyPlaylists: PropTypes.func.isRequired,
  selectPlaylist: PropTypes.func.isRequired,
};

MyPlaylists.defaultProps = {
  selectedPlaylist: null,
};

function mapStateToProps({ playlists, selectedPlaylist }) {
  return { playlists, selectedPlaylist };
}

const connectedComponent = connect(mapStateToProps, {
  fetchMyPlaylists,
  selectPlaylist,
  searchMyPlaylists,
})(MyPlaylists);

export default withStyles(styles)(connectedComponent);

