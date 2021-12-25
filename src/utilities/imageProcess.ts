import sharp from 'sharp';
import path from 'path';
import { absoluteImagePath, absoluteResizedImagePath } from '../routes/api/retreiveImage';
import { isAbsolute } from 'path/posix';

const imageProcess = async (
  imageName: string,
  width: number,
  height: number
): Promise<boolean> => {
  const imagePath: string = path.join(
    `${absoluteImagePath}/${imageName}.jpg`
  );
  const resizedImage: string = path.join(
    `${absoluteResizedImagePath}`,
    `${imageName}W${width}H${height}.jpg`
  );
  try {
    sharp(imagePath).resize(width, height).toFile(resizedImage);
    return true
  } catch (error) {
    throw new Error(`${error} Check imageProcess`);
  }
};

export default imageProcess;
