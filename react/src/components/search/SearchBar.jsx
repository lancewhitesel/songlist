import React, { Component } from 'react';

import Input from 'material-ui/Input';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: 'Sugar' };
    // console.log(this.state);
  }

  // handleInputChange(e) {
  // console.log(e);
  // }

  render() {
    // return <Input onChange={this.handleInputChange} />;
    // return <Input onChange={(e) => this.setState({ term: e.target.value })} />;
    return (
      <Input
        value={this.state.term}
        onChange={e => this.setState({ term: e.target.value })}
      />
    );
  }
}

export default SearchBar;
