import express from 'express';

import router from './router';

export const createServer = async () => {
  const server = express();

  //Using json as http response & request object
  server.use(express.json());

  //Initializing the router
  router(server);

  return server;
};
