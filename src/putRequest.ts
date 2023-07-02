import { IncomingMessage, ServerResponse } from 'http';
import { users, User } from './users';
import { uuidValidateV4 } from './uuidValidateV4';
import { isValidUserData } from './isValidUserData';

export const putRequest = (req: IncomingMessage, res: ServerResponse) => {
  let body = '';

  req.on('data', (chunk) => {
    body += chunk;
  });

  req.on('end', () => {
    try {
      const newUser: User = JSON.parse(body);
      const id = req.url?.replace('/api/users/', '');
      if (!id || !uuidValidateV4(id)) {
        res.statusCode = 400;
        res.end('Invalid userId');
      } else if (!isValidUserData(newUser)) {
        res.statusCode = 400;
        res.end('Invalid user data');
      } else {
        const userData = users.find((user) => user.id === id);
        if (userData) {
          userData.username = newUser.username;
          userData.age = newUser.age;
          userData.hobbies = newUser.hobbies;
          res.statusCode = 200;
          res.end('User updated');
        } else {
          res.statusCode = 404;
          res.end('Not Found');
        }
      }
    } catch {
      res.statusCode = 400;
      res.end('Bad Request');
    }
  });
};
