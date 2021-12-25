'use strict';
import express from 'express';
import path from 'path';
import { isAbsolute } from 'path/posix';
import imageProcess from '../../utilities/imageProcess';
const retreiveImage = express.Router();

const absoluteResizedImagePath: string = path.resolve('./') + '/src/images/resized';
const absoluteImagePath: string = path.resolve('./') + '/src/images';

retreiveImage.use('/', express.static('src/images'));

retreiveImage.get('/', async (req, res) => {
  try {
    const imageName: string = req.query.image as string;
    const heightString: string = req.query.height as string;
    const heightN: number = parseInt(heightString);
    const widthString: string = req.query.width as string;
    const widthN: number = parseInt(widthString);

    if (!imageName) {
      return res.status(400).send('Please type the image name');
    }
    if (!widthN) {
      return res.status(400).send('Please type the width');
    }

    if (!heightN) {
      return res.status(400).send('Please type the height');
    }

    imageProcess(imageName, widthN, heightN);
    const resizedImage: string = path.resolve(
      `${absoluteResizedImagePath}/${imageName}W${widthN}H${heightN}.jpg`
    );
    //console.log(`absoluteImagePath,${isAbsolute(absoluteImagePath)} '' ${absoluteImagePath}, absolute resized image path: ' '  ${absoluteResizedImagePath}, ${isAbsolute(absoluteResizedImagePath)} `)
     try {
      res.sendFile(resizedImage);
      res.status(200);
    } catch (error) {
      console.log(error + 'sendFile code');
     } 
  } catch (error) {
    res.status(400);
    console.log(error);
  } 
});

export { absoluteResizedImagePath, absoluteImagePath };
export default retreiveImage;
