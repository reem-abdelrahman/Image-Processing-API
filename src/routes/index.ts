import express, { Router, Request, Response } from 'express';
import retreiveImage from './api/retreiveImage';

const routes: Router = express.Router();

routes.get('/', (req: Request, res: Response) => {
  res.send('hello route api');
});

routes.use('/resizedImage', retreiveImage);
routes.use('/', express.static('./images'));

export default routes;
