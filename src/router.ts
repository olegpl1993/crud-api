import { IncomingMessage, ServerResponse } from 'http';
import { getAllUsers } from './getAllUsers';
import { postRequest } from './postRequest';
import { putRequest } from './putRequest';
import { deleteRequest } from './deleteRequest';
import { getUserByID } from './getUserByID';

export const router = () => (req: IncomingMessage, res: ServerResponse) => {
  if (req.method === 'GET' && req.url) {
    if (req.url === '/api/users') {
      getAllUsers(res);
    }
    if (req.url.startsWith('/api/users/')) {
      getUserByID(req, res);
    }
  } else if (req.method === 'POST' && req.url === '/api/users') {
    postRequest(req, res);
  } else if (req.method === 'PUT' && req.url === '/api/users/') {
    putRequest(req, res);
  } else if (req.method === 'DELETE ' && req.url === '/api/users/') {
    deleteRequest(req, res);
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
};
