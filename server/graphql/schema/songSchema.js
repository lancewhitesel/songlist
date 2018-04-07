export default {
  type: `
    type Song {
      id: ID!
      title: String
      artist: String
      description: String
      videoId: String
      imageUrl: String
    }
  `,
  queries: `
    songList: [Song]
    song(id: ID!): Song
  `,
  mutations: `
    addSong(title: String!, artist: String, description: String, videoId: String!, imageUrl: String): Song
    deleteSong(id: ID!): Song
  `,
  subscriptions: `
    songAdded: Song
  `,
};
