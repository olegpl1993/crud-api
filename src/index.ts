import http, { IncomingMessage, ServerResponse } from 'http';

// import uuid from 'uuid';
// const id = uuid.v4();
// console.log(id);

// Интерфейс пользователя
interface User {
  id: string;
  name: string;
  email: string;
  hobbies: string[];
}

// Массив для хранения пользователей
const users: User[] = [];

// Создаем сервер
const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    if (req.method === 'GET' && req.url === '/users') {
      // Чтение списка пользователей
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(users));
    } else if (req.method === 'POST' && req.url === '/users') {
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
  },
);

// Запускаем сервер на порте 3000
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
