import React from 'react';
import PropTypes from 'prop-types';

import TypeTabs from '../components/TypeTabs';
import DEFAULT_FN from '../utils';

const SongList = (props) => {
  const { songs, onSelect, onSaveToMyList } = props;

  return (
    <div>
      <TypeTabs songs={songs} onSelect={s => onSelect(s)} onSaveToMyList={onSaveToMyList} />
    </div>
  );
};

SongList.propTypes = {
  songs: PropTypes.array,
  onSelect: PropTypes.func,
  onSaveToMyList: PropTypes.func,
};

SongList.defaultProps = {
  songs: [],
  onSelect: DEFAULT_FN,
  onSaveToMyList: null,
};

export default SongList;
