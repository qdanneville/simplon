import express, { Request, Response } from 'express';
import bookRoutes from '../api/book/config/routes';

const Router = (app: express.Application) => {
  const apiRoutes = express.Router();

  app.get('/api/v1/', (req: Request, resp: Response) => {
    resp.json({ message: 'Hello world !' });
  });

  app.use('/api/v1/', apiRoutes);
  app.use('/api/v1/books', bookRoutes);
};

export default Router;
