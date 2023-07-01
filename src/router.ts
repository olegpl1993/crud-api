import { IncomingMessage, ServerResponse } from 'http';
import { users, User } from './users';

// import uuid from 'uuid';
// const id = uuid.v4();
// console.log(id);

export const router = () => (req: IncomingMessage, res: ServerResponse) => {
  if (req.method === 'GET' && req.url === '/api/users') {
    // Чтение списка пользователей
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(users));
  } else if (req.method === 'POST' && req.url === '/api/users') {
    // Создание нового пользователя
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
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
};
