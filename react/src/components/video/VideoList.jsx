import PropTypes from 'prop-types';
import asList from '../../hoc/asList';
import VideoListItem from './VideoListItem';

const VideoList = props => asList(
  'Video List!',
  VideoListItem,
  selectedSong => props.onSelect(selectedSong)
)(props);

VideoList.propTypes = {
  onSelect: PropTypes.func
};

export default VideoList;
