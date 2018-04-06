import jwt from 'jsonwebtoken';
import crypto from 'crypto';

import jwtSecret from './jwtSecret';

const SALT_SUFFIX = 'songListApp';

const saltPassword = (password) => {
  const saltedPassword = password + SALT_SUFFIX;
  return crypto.createHash('sha256').update(saltedPassword).digest('hex');
}

const createToken = hash => jwt.sign(hash, jwtSecret);

export {
  saltPassword,
  createToken,
};