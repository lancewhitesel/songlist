export default function (state = {}, action) {
  if (action.type === 'SONGS') {
    return [
      { id: '1', title: 'Who You Say I Am' },
      { id: '2', title: 'Our God' },
      { id: '3', title: 'In Christ Alone' },
      { id: '4', title: 'Desert Song' },
      { id: '5', title: 'Cornerstone' },
    ];
  }
  return [
    {
      id: '1',
      title: 'Who You Say I Am',
      videoId: 'F8umfBRlwW8',
      description: 'Cool!',
    },
  ];
}
