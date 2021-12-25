import sharp from 'sharp';
import path from 'path';
import {
  absoluteImagePath,
  absoluteResizedImagePath,
} from '../routes/api/retreiveImage';

const imageProcess = async (
  imageName: string,
  width: number,
  height: number
): Promise<boolean | void> => {
  const imagePath: string = path.join(
    `${absoluteImagePath}`,
    `${imageName}.jpg`
  );
  const resizedImage: string = path.join(
    `${absoluteResizedImagePath}`,
    `${imageName}W${width}H${height}.jpg`
  );
  try {
    await sharp(imagePath).resize(width, height).toFile(resizedImage);
    return true;
  } catch (error) {
    console.log(error);
  }
};

export default imageProcess;
