import gql from 'graphql-tag';

export default gql`
mutation Signup(
  $username: String!,
  $password: String!,
  $firstName: String,
  $lastName: String,
  $email: String
) {
  signup(username: $username, password: $password, firstName: $firstName, lastName: $lastName, email: $email) {
    id
  }
}
`;
