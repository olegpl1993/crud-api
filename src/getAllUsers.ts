import { ServerResponse } from 'http';
import { users } from './users';

export const getAllUsers = (res: ServerResponse) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.end(JSON.stringify(users));
};
