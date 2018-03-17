import React from 'react';
import ReactDOM from 'react-dom';

import SongList from './components/SongList';

// Keeping this around temporarily until I really grasp JSS
require('./components/global.scss');

ReactDOM.render(<SongList />, document.getElementById('root'));
