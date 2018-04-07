// import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { makeExecutableSchema } from 'graphql-tools';

import resolvers from '../resolvers';
import playlistSchema from './playlistSchema';
import songSchema from './songSchema';
import userSchema from './userSchema';

const typeDefs = `
  ${playlistSchema.type}
  ${songSchema.type}
  ${userSchema.type}
  
# This type specifies the entry points into our API
  type Query {
    ${playlistSchema.queries}
    ${songSchema.queries}
    ${userSchema.queries}
  }

# The Mutation root type, used to define all mutations
  type Mutation {
    ${playlistSchema.mutations}
    ${songSchema.mutations}
    ${userSchema.mutations}
  }

# The Subscription root type, used to define all ws subscriptions
  type Subscription {
    ${playlistSchema.subscriptions}
    ${songSchema.subscriptions}
    ${userSchema.subscriptions}
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
// addMockFunctionsToSchema({ schema });
export default schema;