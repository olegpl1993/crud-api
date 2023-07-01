import http from 'http';
import { router } from './router';

// Создаем сервер
const server = http.createServer(router());

// Запускаем сервер на порте 4000
server.listen(4000, () => {
  console.log('Server is running on port 4000');
});
