export default {
  type: `
    type Playlist {
      id: ID!
      title: String
      description: String
      songs: [Song]
    }
  `,
  queries: `
    playlistList: [Playlist]
    playlist(id: ID!): Playlist
  `,
  mutations: `
    addPlaylist(title: String!, description: String, songs: [ID]!): Playlist
  `,
};