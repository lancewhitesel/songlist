import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import searchMySongs from '../actions/searchMySongs';
import SearchBar from './SearchBar';

class MySongsSearch extends Component {
  handleSearchTermChange(term) {
    this.props.searchMySongs(term);
  }

  render() {
    return <SearchBar onSearchTermChange={term => this.handleSubmit(term)} />;
  }
}

MySongsSearch.propTypes = {
  searchYoutube: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchMySongs }, dispatch);
}

export default connect(null, mapDispatchToProps)(MySongsSearch);
