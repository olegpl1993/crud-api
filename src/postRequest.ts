import { IncomingMessage, ServerResponse } from 'http';
import { users, User } from './users';
import { v4 as uuidv4 } from 'uuid';
import { isValidUserData } from './isValidUserData';

export const postRequest = (req: IncomingMessage, res: ServerResponse) => {
  let body = '';

  req.on('data', (chunk) => {
    body += chunk;
  });

  req.on('end', () => {
    try {
      const newUser: User = JSON.parse(body);
      if (isValidUserData(newUser)) {
        const newdId = uuidv4();
        newUser.id = newdId;
        users.push(newUser);
        res.statusCode = 201;
        res.end('User created');
      } else {
        res.statusCode = 400;
        res.end('Invalid user data');
      }
    } catch {
      res.statusCode = 500;
      res.end('Server error');
    }
  });
};
