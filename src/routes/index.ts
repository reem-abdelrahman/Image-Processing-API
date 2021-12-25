import express from 'express';
import retreiveImage from './api/retreiveImage';
//import imageProcess from './api/imageProcess';
const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('hello main api');
  res.status(200);
});

routes.use('/resizedImage', retreiveImage);


export default routes;
