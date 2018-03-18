import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import TypeTabs from '../components/TypeTabs';

// import searchYoutube from '../actions/searchYoutube';
import selectSong from '../actions/index';

class SongList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    // searchYoutube()();
  }

  render() {
    const { songs } = this.props;

    return (
      <div>
        <TypeTabs songs={songs} onSelect={s => this.props.selectSong(s)} />
      </div>
    );
  }
}

SongList.propTypes = {
  songs: PropTypes.array.isRequired,
  selectSong: PropTypes.func
};

SongList.defaultProps = {
  selectSong: () => {}
};

// Map our _application_ state to our local props via Redux
function mapStateToProps(state) {
  // Whatever is returned from here is mapped to this.props
  return {
    songs: state.songs
  };
}

// Anything returned from this function will end up as props
//   on the SongList container.
function mapDispatchToProps(dispatch) {
  // This wires up our selectSong action creator
  //  to all of our reducers.
  return bindActionCreators({ selectSong }, dispatch);
}

// Promote SongList from a componen to a container - it needs to know
//  about this new dispatch method, selectSong.  Make it available
//  as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(SongList);
