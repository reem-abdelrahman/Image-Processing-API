'use strict';
import express, { Response, Request, Router } from 'express';
import path from 'path';
import imageProcess from '../../utilities/imageProcess';

const retreiveImage: Router = express();

const absoluteResizedImagePath: string = path.resolve('./') + '/images/resized';
const absoluteImagePath: string = path.resolve('./') + '/images';

retreiveImage.get(
  '/',
  async (
    req: Request,
    res: Response
  ): Promise<void | string | boolean | never | undefined | null | number> => {
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
        console.log(error + 'sendFile code');
      }
    } catch (error) {
      res.status(400);
      res.send(error);
    }
  }
);

export { absoluteResizedImagePath, absoluteImagePath };
export default retreiveImage;
