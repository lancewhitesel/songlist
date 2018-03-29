import { Song } from './databaseConfig';
import sessionRoutes from './routesSession';
import songRoutes from './songRoutes';
import playlistRoutes from './playlistRoutes';
import jsonGraph from 'falcor-json-graph';
import jwt from 'jsonwebtoken';
import jwtSecret from './jwtSecret';
import socketHandler from './socketHandler';

let $atom = jsonGraph.atom;
let $ref = jsonGraph.ref;

const Routes = [
  ...sessionRoutes,
  ...songRoutes,
  ...playlistRoutes,
];

export default (req, res) => {
  const { token, role, username } = req.headers;
  const userDetailsToHash = username + role;
  const authSignToken = jwt.sign(userDetailsToHash, jwtSecret);
  const isAuthorized = authSignToken === token;
  const sessionObject = { isAuthorized, role, username };

  console.info(`The ${username} is authorized === `, isAuthorized);

  return Routes;
};