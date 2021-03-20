import express, { Request, Response } from 'express';

const Router = (app: express.Application) => {
  const apiRoutes = express.Router();

  app.get('/', (req: Request, resp: Response) => {
    resp.json({ message: 'Hello world !' });
  });

  app.use('/api/', apiRoutes);
};

export default Router;
