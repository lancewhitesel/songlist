import PropTypes from 'prop-types';

export const ClassesType = PropTypes.objectOf(PropTypes.string);

export const ChildrenType = PropTypes.objectOf(PropTypes.oneOfType([
  PropTypes.object,
  PropTypes.symbol,
  PropTypes.func,
  PropTypes.node,
]));

export const LocationType = PropTypes.objectOf(PropTypes.oneOfType([
  PropTypes.object,
  PropTypes.node,
]));

export const SongType = PropTypes.objectOf(PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.bool,
]));

export const SongListType = PropTypes.arrayOf(SongType);

export const PlaylistType = PropTypes.objectOf(PropTypes.oneOfType([
  PropTypes.objectOf(PropTypes.string),
  PropTypes.string,
]));

export const PlaylistListType = PropTypes.arrayOf(PlaylistType);

export const HistoryType = PropTypes.objectOf(PropTypes.oneOfType([
  PropTypes.node,
  PropTypes.func,
  LocationType,
]));

export const RegistrationType = PropTypes.objectOf(PropTypes.string);

export const UserType = PropTypes.objectOf(PropTypes.string);
