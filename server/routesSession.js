import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import jwtSecret from './jwtSecret';

import { User } from './databaseConfig';

export default [{
  route: ['login'],
  call: (callPath, args) => {
    const { username, password } = args[0];

    const saltedPassword = password + 'songListApp';
    const saltedPassHash = crypto.createHash('sha256')
                                 .update(saltedPassword)
                                 .digest('hex');
    const userQuery = {
      $and: [
        { username },
        { password: saltedPassHash },
      ]
    }

    return User.find(userQuery, (err, user) => {
      if (err) throw err;
    }).then((result) => {
      if (result.length > 0) {
        console.log('success!');
        const { role } = result[0];
        const userDetailsHash = username + role;
        const token = jwt.sign(userDetailsHash, jwtSecret);
        return [{
          path: ['login', 'token'],
          value: token,
        }, {
          path: ['login', 'username'],
          value: username,
        }, {
          path: ['login', 'role'],
          value: role,
        }, {
          path: ['login', 'error'],
          value: false,
        }]
      } else {
        return [{
          path: ['login', 'token'],
          value: 'INVALID',
        }, {
          path: ['login', 'error'],
          value: 'NO USER FOUND, incorrect login information',
        }];
      }

      return result;
    });
  }
}];