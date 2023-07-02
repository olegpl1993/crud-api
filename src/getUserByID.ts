import { ServerResponse } from 'http';
import { users } from './users';
import { uuidValidateV4 } from './uuidValidateV4';

export const getUserByID = (res: ServerResponse, id: string | undefined) => {
  if (!id || !uuidValidateV4(id)) {
    res.statusCode = 400;
    res.end('Invalid userId');
  } else {
    const userData = users.find((user) => user.id === id);
    if (userData) {
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      res.end(JSON.stringify(userData));
    } else {
      res.statusCode = 404;
      res.end('Not Found');
    }
  }
};
