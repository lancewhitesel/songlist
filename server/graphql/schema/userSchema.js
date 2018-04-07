export default {
  type: `
    type User {
      id: ID!
      username: String!
      password: String!
      firstName: String
      lastName: String
      email: String
      role: String
      verified: Boolean
      imageUrl: String
      token: String
    }
  `,
  queries: ``,
  mutations: `
    login(username: String!, password: String!): User
    signup(
      username: String!,
      password: String!,
      firstName: String,
      lastName: String,
      email: String,
      role: String,
      verified: Boolean,
      imageUrl: String,
      token: String
    ): User
  `,
  subscriptions: ``,
};