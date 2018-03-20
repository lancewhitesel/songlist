import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

import Input from 'material-ui/Input';
import Button from 'material-ui/Button';
import DEFAULT_FN from '../../utils';

const styles = theme => ({
  searchBar: {
    margin: 15,
    textAlign: 'center',
    width: '60%',
  },
  button: {
    margin: theme.spacing.unit,
  },
});

const renderSubmitButton = buttonClass => (
  <Button
    type="submit"
    className={buttonClass}
    color="primary"
    variant="raised"
  >
    Submit
  </Button>
);

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  handleInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  handleSubmit(e, term) {
    e.preventDefault();

    this.props.onSubmit(this.state.term);
  }

  render() {
    const { classes: { searchBar, button }, onSubmit, placeholder } = this.props;

    return (
      <form onSubmit={e => this.handleSubmit(e, this.state.term)}>
        <Input
          placeholder={placeholder || 'Search For Songs'}
          className={searchBar}
          value={this.state.term}
          onChange={e => this.handleInputChange(e.target.value)}
        />
        {onSubmit && renderSubmitButton(button)}
      </form>
    );
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
  onSearchTermChange: PropTypes.func,
  onSubmit: PropTypes.func,
  placeholder: PropTypes.string,
};

SearchBar.defaultProps = {
  onSearchTermChange: DEFAULT_FN,
  onSubmit: DEFAULT_FN,
  placeholder: null,
};

export default withStyles(styles)(SearchBar);
