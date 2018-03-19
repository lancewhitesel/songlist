import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import searchYoutube from '../../actions/searchYoutube';
import SearchBar from '../search/SearchBar';

class YoutubeSearch extends Component {
  componentWillMount() {
    const { starterTerm } = this.props;

    if (starterTerm) {
      this.props.searchYoutube(starterTerm);
    }
  }

  handleSubmit(term) {
    this.props.searchYoutube(term);
  }

  render() {
    return <SearchBar placeholder="Search Youtube For Songs" onSubmit={term => this.handleSubmit(term)} />;
  }
}

YoutubeSearch.propTypes = {
  searchYoutube: PropTypes.func.isRequired,
  starterTerm: PropTypes.string,
};

YoutubeSearch.defaultProps = {
  starterTerm: null,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchYoutube }, dispatch);
}

export default connect(null, mapDispatchToProps)(YoutubeSearch);
