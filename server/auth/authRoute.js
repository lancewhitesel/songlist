//  This is some test code to potentially auth every call to the backend
import jwt from 'jsonwebtoken';
import jwtSecret from './jwtSecret';

export default (req, res) => {
  const { token, role, username } = req.headers;
  const userDetailsToHash = username + role;
  const authSignToken = jwt.sign(userDetailsToHash, jwtSecret);
  const isAuthorized = authSignToken === token;
  const sessionObject = { isAuthorized, role, username };

  console.info(`The ${username} is authorized === `, isAuthorized);

  return true;
};