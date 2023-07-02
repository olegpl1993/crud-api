import { IncomingMessage, ServerResponse } from 'http';

export const deleteRequest = (req: IncomingMessage, res: ServerResponse) => {
  console.log(req.method, req.url);
  res.statusCode = 200;
};
