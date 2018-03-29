import React, { Component } from 'react';
import Tabs, { Tab } from 'material-ui/Tabs';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';

import TextList from './text/TextList';
import VideoList from './video/VideoList';
import DEFAULT_FN, { CLASSES_TYPE } from '../utils';

const styles = theme => ({
  tabs: {
    marginLeft: '15px',
  },
});

class TypeTabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    const {
      onSelect,
      onSaveToMyList,
      onRemoveFromMyList,
      classes,
      songs,
    } = this.props;

    return (
      <div>
        <Tabs className={classes.tabs} onChange={this.handleChange} value={value}>
          <Tab label="Video" />
          <Tab label="Text" />
        </Tabs>
        {value === 0 &&
          <VideoList
            songs={songs}
            onSelect={onSelect}
            onSaveToMyList={onSaveToMyList}
            onRemoveFromMyList={onRemoveFromMyList}
          />}
        {value === 1 &&
          <TextList
            songs={songs}
            onSelect={onSelect}
            onSaveToMyList={onSaveToMyList}
            onRemoveFromMyList={onRemoveFromMyList}
          />}
      </div>
    );
  }
}

TypeTabs.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  classes: CLASSES_TYPE.isRequired,
  onSelect: PropTypes.func,
  onSaveToMyList: PropTypes.func,
  onRemoveFromMyList: PropTypes.func,
};

TypeTabs.defaultProps = {
  onSelect: DEFAULT_FN,
  onSaveToMyList: null,
  onRemoveFromMyList: null,
};

export default withStyles(styles)(TypeTabs);
