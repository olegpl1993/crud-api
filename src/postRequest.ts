import { IncomingMessage, ServerResponse } from 'http';
import { users, User } from './users';

export const postRequest = (req: IncomingMessage, res: ServerResponse) => {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  });
  req.on('end', () => {
    const newUser: User = JSON.parse(body);
    users.push(newUser);
    res.statusCode = 201;
    res.end('User created');
  });
};
