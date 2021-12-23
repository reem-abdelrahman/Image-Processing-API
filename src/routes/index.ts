import express from 'express';   
import retreiveImage from './api/retreiveImage';
import newImage from './api/newImage';
const routes = express.Router();

routes.get('/', (req, res) => { 
  res.send("hello main api");
  
});

routes.use('/oldImage', retreiveImage);
routes.use('/newImage', newImage);
//routes.use('/images', express.static());


//async function getMetadata() {
//    const metadata = await sharp("sammy.png").metadata();
//    console.log(metadata);
//  }


export default routes;