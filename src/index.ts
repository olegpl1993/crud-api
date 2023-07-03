import http from 'http';
import { router } from './router';
import dotenv from 'dotenv';
import { balancer } from './balancer';

dotenv.config();
const PORT = Number(process.env.PORT) || 4000;
const { API_MODE } = process.env;
const isBalancer = API_MODE === 'cluster';

const server = http.createServer(isBalancer ? balancer(PORT) : router());

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}, mode: ${API_MODE}`);
});
