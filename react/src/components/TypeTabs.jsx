import React, { Component } from 'react';
import Tabs, { Tab } from 'material-ui/Tabs';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import TextList from './text/TextList';
import VideoList from './video/VideoList';

const styles = theme => ({
  tabs: {
    marginLeft: '15px'
  },
});

class TypeTabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    const { onSelect, classes, songs } = this.props;

    return (
      <div>
        <Tabs className={classes.tabs} onChange={this.handleChange} value={value}>
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
  classes: PropTypes.object.isRequired,
  onSelect: PropTypes.func,
};

TypeTabs.defaultProps = {
  onSelect: () => {}
};

export default withStyles(styles)(TypeTabs);
