import { ServerResponse } from 'http';
import { users } from './users';
import uuid from 'uuid';

export const getUserByID = (res: ServerResponse, id: string | undefined) => {
  try {
    if (!id) {
      res.statusCode = 400;
      res.end('userId is invalid');
    } else if (uuid.validate(id)) {
      res.statusCode = 404;
      res.end('Not Found user');
    } else {
      const userData = users.find((user) => user.id === id);
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.end(JSON.stringify(userData));
    }
  } catch {
    res.statusCode = 400;
    res.end('Bad Request');
  }
};
