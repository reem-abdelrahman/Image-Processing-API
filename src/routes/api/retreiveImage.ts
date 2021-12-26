'use strict';
import express, { Response, Request, Router } from 'express';
import path from 'path';
import imageProcess from '../../utilities/imageProcess';

const retreiveImage: Router = express();

const absoluteResizedImagePath: string = path.resolve('./') + '/images/resized';
const absoluteImagePath: string = path.resolve('./') + '/images';
const images: string[] = [
  'fjord',
  'encenadaport',
  'icelandwaterfall',
  'palmtunnel',
  'santamonica',
];
retreiveImage.get(
  '/',
  async (req: Request, res: Response): Promise<void | unknown> => {
    const imageName: string = req.query.image as string;
    const heightString: string = req.query.height as string;
    const heightN: number = parseInt(heightString);
    const widthString: string = req.query.width as string;
    const widthN: number = parseInt(widthString);
    //validate the inputs
    if (
      !imageName ||
      (!images.includes(imageName) &&
        (isNaN(heightN) || heightN <= 0 || !heightN) &&
        (widthN || widthN <= 0 || !widthN))
    ) {
      return res
        .status(400)
        .send('Please type the image name, height, and width');
    }
    if (
      (isNaN(heightN) || heightN <= 0 || !heightN) &&
      (widthN || widthN <= 0 || !widthN)
    ) {
      return res
        .status(400)
        .send('Please type a valid height and width that is not less than 1');
    }

    if (!imageName || !images.includes(imageName)) {
      return res.status(400).send('Please type the image name');
    }
    
    if (isNaN(widthN) || widthN <= 0 || !widthN) {
      return res
        .status(400)
        .send('Please type a valid width that is not less than 1');
    }
    if (isNaN(heightN) || heightN <= 0 || !heightN) {
      return res
        .status(400)
        .send('Please type a valid height that is not less than 1');
    }

    try {
      // parameters
      const imageName: string = req.query.image as string;
      const heightString: string = req.query.height as string;
      const heightN: number = parseInt(heightString);
      const widthString: string = req.query.width as string;
      const widthN: number = parseInt(widthString);

      // resizing the image by using a module
      await imageProcess(imageName, widthN, heightN);
      const resizedImage = `${absoluteResizedImagePath}/${imageName}W${widthN}H${heightN}.jpg`;
      // view the image in the browser
      try {
        res.sendFile(resizedImage);
      } catch (error) {
        res.send(error);
      }
    } catch (error) {
      res.status(400);
      res.send(error);
    }
  }
);

export { absoluteResizedImagePath, absoluteImagePath };
export default retreiveImage;
