import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import jwtSecret from './jwtSecret';

import { User } from './databaseConfig';

const SALT_SUFFIX = 'songListApp';

export default [{
  route: ['login'],
  call: (callPath, args) => {
    const { username, password } = args[0];

    const saltedPassword = password + SALT_SUFFIX;
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
},
{  
  route: ['register'],
  call: (callPath, args) => {
    const newUserObj = args[0];
    newUserObj.password = newUserObj.password + SALT_SUFFIX;
    newUserObj.password = crypto
      .createHash('sha256')
      .update(newUserObj.password)
      .digest('hex');

    const newUser = new User(newUserObj);
    return newUser.save().then((newRes) => {
      // got new obj data, now let's get count: 
      const newUserDetail = newRes.toObject();
      const newUserId = newUserDetail._id.toString();

      if (newUserDetail._id) {
        return [{
          path: ['register', 'newUserId'],
          value: newUserId
        }, {
          path: ['register', 'error'],
          value: false
        }]; 
      } else {
        // registration failed
        return [{
          path: ['register', 'newUserId'],
          value: 'INVALID'
        }, {
          path: ['register', 'error'],
          value: 'Registration failed - no id has been created' 
        }];
      }
    }).catch((reason) => {
      console.error(reason)
      return [{
        path: ['register', 'newUserId'],
        value: 'INVALID'
      }, {
        path: ['register', 'error'],
        value: 'Registration failed - ' + reason.errmsg
      }];
    }); 
  }
}];