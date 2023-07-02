import { IncomingMessage, ServerResponse } from 'http';
import { users, User } from './users';
import { v4 as uuidv4 } from 'uuid';

export const postRequest = (req: IncomingMessage, res: ServerResponse) => {
  let body = '';

  req.on('data', (chunk) => {
    body += chunk;
  });

  req.on('end', () => {
    const newUser: User = JSON.parse(body);
    if (
      newUser.username &&
      typeof newUser.username === 'string' &&
      newUser.age &&
      typeof newUser.age === 'number' &&
      newUser.hobbies &&
      Array.isArray(newUser.hobbies) &&
      newUser.hobbies.every((item) => typeof item === 'string') &&
      Object.keys(newUser).length === 3
    ) {
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
