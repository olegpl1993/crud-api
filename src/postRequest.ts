import { IncomingMessage, ServerResponse } from 'http';
import { users, User } from './users';
import { v4 as uuidv4 } from 'uuid';

const isValidUserData = (user: User) =>
  user.username &&
  typeof user.username === 'string' &&
  user.age &&
  typeof user.age === 'number' &&
  user.hobbies &&
  Array.isArray(user.hobbies) &&
  user.hobbies.every((item) => typeof item === 'string') &&
  Object.keys(user).length === 3;

export const postRequest = (req: IncomingMessage, res: ServerResponse) => {
  let body = '';

  req.on('data', (chunk) => {
    body += chunk;
  });

  req.on('end', () => {
    const newUser: User = JSON.parse(body);
    if (isValidUserData(newUser)) {
      const newdId = uuidv4();
      newUser.id = newdId;
      users.push(newUser);
      res.statusCode = 201;
      res.end('User created');
    } else {
      res.statusCode = 400;
      res.end('Bad Request');
    }
  });
};
