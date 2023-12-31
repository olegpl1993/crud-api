import { IncomingMessage, ServerResponse } from 'http';
import { users } from './users';
import { uuidValidateV4 } from './uuidValidateV4';

export const deleteRequest = (req: IncomingMessage, res: ServerResponse) => {
  try {
    const id = req.url?.replace('/api/users/', '');
    if (!id || !uuidValidateV4(id)) {
      res.statusCode = 400;
      res.end('Invalid userId');
    } else {
      const index = users.findIndex((user) => user.id === id);
      if (index !== -1) {
        users.splice(index, 1);
        res.statusCode = 204;
        res.end();
      } else {
        res.statusCode = 404;
        res.end('Not found user');
      }
    }
  } catch {
    res.statusCode = 500;
    res.end('Server error');
  }
};
