'use strict';
import express, { query } from 'express';
import path from 'path';
import imageProcess from './imageProcess';
const retreiveImage = express.Router();
const imagePath: string = 'src/images';
const resizedImagePath: string = 'src/images/resized';
const absoluteResizedImagePath: string = path.resolve(resizedImagePath);
const absoluteImagePath: string = path.resolve(imagePath);

retreiveImage.use('/', express.static('src/images'));

retreiveImage.get('/', async (req, res) => {
  try {
    let imageName: string = req.query.image as string;
    let heightString: string = req.query.height as string;
    let heightN: number = parseInt(heightString);
    let widthString: string = req.query.width as string;
    let widthN: number = parseInt(widthString);

    if (!imageName) {
      return res.status(400).send('Please type the image name');
    }
    if (!widthN) {
      return res.status(400).send('Please type the width');
    }

    if (!heightN) {
      return res.status(400).send('Please type the height');
    }

    await imageProcess(imageName, widthN, heightN);
    const resizedImage: string = path.resolve(
      `${absoluteResizedImagePath}/${imageName}W${widthN}H${heightN}.jpg`
    );
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
