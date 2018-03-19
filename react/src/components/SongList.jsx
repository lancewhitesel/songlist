import React from 'react';
import PropTypes from 'prop-types';

import TypeTabs from '../components/TypeTabs';
import DEFAULT_FN from '../utils';

const SongList = (props) => {
  const { songs, onSelect } = props;

  return (
    <div>
      <TypeTabs songs={songs} onSelect={s => onSelect(s)} />
    </div>
  );
};

SongList.propTypes = {
  songs: PropTypes.array,
  onSelect: PropTypes.func,
};

SongList.defaultProps = {
  songs: [],
  onSelect: DEFAULT_FN,
};

export default SongList;
