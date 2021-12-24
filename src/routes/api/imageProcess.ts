import express, { Response, Request } from 'express';
import sharp from 'sharp';
import path from 'path';
import { absoluteImagePath, absoluteResizedImagePath } from './retreiveImage';

const imageProcess = async (
  imageName: string,
  width: number,
  height: number
): Promise<void> => {
  const imagePath: string = path.resolve(
    `${absoluteImagePath}/${imageName}.jpg`
  ); //n
  const resizedImage: string = path.resolve(
    `${absoluteResizedImagePath}`,
    `${imageName}W${width}H${height}.jpg`
  );
  try {
    sharp(imagePath).resize(width, height).toFile(resizedImage);
    console.log(path.isAbsolute(resizedImage));
  } catch (error) {
    throw new Error(`${error} Check imageProcess`);
  }
};

export default imageProcess;
