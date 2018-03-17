import React, { Component } from 'react';
import Tabs, { Tab } from 'material-ui/Tabs';
import PropTypes from 'prop-types';
import TextList from './text/TextList';
import VideoList from './video/VideoList';

class TypeTabs extends Component {
  constructor(props) {
    super(props);

    this.state.songs = props.songs;
  }

  state = {
    value: 0,
    songs: []
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value, songs } = this.state;
    const { onSelect } = this.props;

    return (
      <div>
        <Tabs onChange={this.handleChange}>
          <Tab label="Text" />
          <Tab label="Video" />
        </Tabs>
        {value === 0 && <TextList songs={songs} onSelect={onSelect} />}
        {value === 1 && <VideoList songs={songs} onSelect={onSelect} />}
      </div>
    );
  }
}

TypeTabs.propTypes = {
  songs: PropTypes.array.isRequired,
  onSelect: PropTypes.func
};

TypeTabs.defaultProps = {
  onSelect: () => {}
};

export default TypeTabs;
