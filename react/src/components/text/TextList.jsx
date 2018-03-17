import PropTypes from 'prop-types';
import asList from '../../hoc/asList';
import TextListItem from './TextListItem';

const TextList = props => asList(
  'Text List!',
  TextListItem,
  selectedSong => props.onSelect(selectedSong)
)(props);

TextList.propTypes = {
  onSelect: PropTypes.func
};

export default TextList;

/* <div ng-if="!$ctrl.songs.length">No songs yet</div>
  <table class="song-bullets">
    <tr>
      <th>Title</th>
      <th>Artist</th>
    </tr>
      <tr ng-repeat="song in $ctrl.songs">
        <td><a href="{{song.url}}" target="_blank">
          {{$ctrl.getSource(song.url)}} | {{song.title}}</a>
        </td>
        <td>{{song.artist}}</td>
    </tr>
  </table>
</div> */
