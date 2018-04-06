import songResolvers from './songResolvers';
import playlistResolvers from './playlistResolvers';
import userResolvers from './userResolvers';

export default {
  Query: {
    ...songResolvers.Query,
    ...playlistResolvers.Query,
    ...userResolvers.Query,
  },
  Mutation: {
    ...songResolvers.Mutation,
    ...playlistResolvers.Mutation,
    ...userResolvers.Mutation,
  },
};