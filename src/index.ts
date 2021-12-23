import express from 'express';
import {promises as fsPromises} from 'fs';
import routes from './routes/index';
import path from 'path';
const sharp = require('sharp');
const app = express();
const port = process.env.PORT || 9000;
//const middle = [imageHandler];
app.use('/api', routes);

//console.log(imageDir);
//app.get('/images/:id/:length/:width', (req, res) => {
  //  let image = fsPromises.readFile(/images/req.params.id);
   // res.send('your image is' + req.image)
// });
//app.get('/images/:id/:length/:width', (req, res) => {
 //   req.params.id
    //res.send(
 //       sharp('input.jpg')
 // .rotate()
 // .resize(200)
 // .jpeg({ mozjpeg: true })
 // .toBuffer()
 // .then( data => { ... })
 // .catch( err => { ... });
  //  );
 //  });

app.listen(port, ()=> {
    console.log(`server started at localhost:${port}`)
   });
   
