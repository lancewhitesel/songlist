// import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { makeExecutableSchema } from 'graphql-tools';

import resolvers from './resolvers';

const typeDefs = `
  type Song {
    id: ID!
    title: String
    artist: String
    description: String
    videoId: String
    imageUrl: String
  }
  
  type Playlist {
    id: ID!
    title: String
    description: String
    songs: [Song]
  }

  type User {
    id: ID!
    username: String
    password: String
    firstName: String
    lastName: String
    email: String
    role: String
    verified: Boolean
    imageUrl: String
  }
  
# This type specifies the entry points into our API
  type Query {
    songList: [Song]
    song(id: ID!): Song
    playlistList: [Playlist]
    playlist(id: ID!): Playlist
  }

# The mutation root type, used to define all mutations
  type Mutation {
    addSong(title: String!, artist: String, description: String, videoId: String!, imageUrl: String): Song
    deleteSong(id: ID!): Song
    addPlaylist(title: String!, description: String, songs: [ID]!): Playlist
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
// addMockFunctionsToSchema({ schema });
export default schema;