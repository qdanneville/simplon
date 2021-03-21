import express from 'express';

//Router
import router from './router';

//Swagger - Documentation
// import swaggerJsdoc from 'swagger-jsdoc';
// import swaggerUi from 'swagger-ui-express';
// import swaggerOption from '../config/swagger';

export const createServer = async () => {
  const server = express();

  //Initializing our documentation
  // const specs = swaggerJsdoc(swaggerOption);
  // server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

  //Using json as http response & request object
  server.use(express.json());

  //Initializing the router
  router(server);

  return server;
};
