import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

import Input from 'material-ui/Input';

const styles = theme => ({
  searchBar: {
    margin: 20,
    textAlign: 'center',
    width: '75%',
  },
});

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  handleInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render() {
    const { classes: { searchBar } } = this.props;

    return (
      <Input
        placeholder="Type Search Text Here"
        className={searchBar}
        value={this.state.term}
        onChange={e => this.handleInputChange(e.target.value)}
      />
    );
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
  onSearchTermChange: PropTypes.func,
};

SearchBar.defaultProps = {
  onSearchTermChange: () => {}
};

export default withStyles(styles)(SearchBar);
