import { User } from '../../database';
import { saltPassword, createToken } from '../../auth';

export default {
  Query: {},
  Mutation: {
    login(root, args) {
      const { username, password } = args;

      const saltedPassword = saltPassword(password);
      const userQuery = {
        $and: [
          { username },
          { password: saltedPassword },
        ]
      };

      return User.find(userQuery, (err, user) => {
        if (err) throw err;
      }).then((result) => {
        if (result.length > 0) {
          const userResult = result[0];
          const { _id, username, role } = result[0];
          const userDetailsHash = username + role;
          const token = createToken(userDetailsHash);

          return {
            id: _id,
            username,
            token,
            role,
          };
        } else {
          throw new Error('Invalid username or password.');
        }
      });
    },
    signup(root, args) {
      const newUserObj = args;
      newUserObj.password = saltPassword(newUserObj.password);
  
      const newUser = new User(newUserObj);
      return newUser.save().catch(({ code, message }) => {
        if (code === 11000) {
          const isUsername = message.indexOf('username') > 0;
          const isEmail = message.indexOf('email') > 0;
          if (isUsername) {
            throw new Error('Username is not unique.  Please choose another.');
          }
          if (isEmail) {
            throw new Error('Email is not unique.  Please choose another.');
          }
        }
        throw new Error(message);
      });
    },
  },
  Subscription: {},
};
