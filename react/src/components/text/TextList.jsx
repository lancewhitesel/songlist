import React from 'react';

import withList from '../../hoc/withList';

import TextListItem from './TextListItem.jsx';

const TextList = (props) => {
  return withList('Text List!', TextListItem)(props);
}

export default TextList;

        {/* <div ng-if="!$ctrl.songs.length">No songs yet</div>
          <table class="song-bullets">
            <tr>
              <th>Title</th>
              <th>Artist</th>
            </tr>
              <tr ng-repeat="song in $ctrl.songs">
                <td><a href="{{song.url}}" target="_blank">{{$ctrl.getSource(song.url)}} | {{song.title}}</a> </td>
                <td>{{song.artist}}</td>
            </tr>
          </table>
        </div> */}