import http from 'http';
import { router } from './router';
import dotenv from 'dotenv';

dotenv.config();

const { PORT } = process.env;

const server = http.createServer(router());

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
