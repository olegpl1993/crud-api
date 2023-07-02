import { IncomingMessage, ServerResponse } from 'http';

export const putRequest = (req: IncomingMessage, res: ServerResponse) => {
  console.log(req.method, req.url);
  res.statusCode = 200;
};
