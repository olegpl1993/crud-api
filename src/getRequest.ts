import { IncomingMessage, ServerResponse } from 'http';
import { users } from './users';

export const getRequest = (req: IncomingMessage, res: ServerResponse) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(users));
};
