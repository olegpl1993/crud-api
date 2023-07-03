import os from 'os';
import { IncomingMessage, ServerResponse } from 'http';

const cpus = os.cpus();
const numCPUs = cpus.length;

export const balancer = (PORT: number) => {
  console.log('Start balancer, numCPUs: ', numCPUs);
  const ports = Array.from(cpus, (_, index) => PORT + index);
  ports.forEach((port, index) => {
    console.log(`Worker #${index} on port: ${port}`);
  });
  return (req: IncomingMessage, res: ServerResponse) => {
    console.log(req, res);
    // TODO
  };
};
