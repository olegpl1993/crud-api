import { ServerResponse } from 'http';
import { users } from './users';

export const getAllUsers = (res: ServerResponse) => {
  try {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify(users));
  } catch {
    res.statusCode = 500;
    res.end('Server error');
  }
};
