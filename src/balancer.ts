import os from 'os';
import { router } from './router';

const cpus = os.cpus();
const numCPUs = cpus.length;

export const balancer = (PORT: number) => {
  console.log('Start balancer, numCPUs: ', numCPUs);
  const ports = Array.from(cpus, (_, index) => PORT + index);
  ports.forEach((port, index) => {
    console.log(`Worker #${index} on port: ${port}`);
  });
  return router();
  // TODO: Implement balancer
};
