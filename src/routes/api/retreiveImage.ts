'use strict';
export {};
import express, { query } from 'express';
import {promises as fsPromises} from 'fs';
import path from 'path';   
import sharp from 'sharp';
import app from '../..';
import imageProcess from './imageProcess';
const retreiveImage = express.Router();
const imagePath: string = 'src/images';
const resizedImagePath: string = 'src/images/resized';
const absoluteResizedImagePath: string = path.resolve(resizedImagePath);
const absoluteImagePath: string = path.resolve(imagePath);


retreiveImage.use('/', express.static('src/images'));


retreiveImage.get('/',imageProcess, async (req, res) => {
console.log(absoluteResizedImagePath)
   let imageName: string = req.query.image as string;
   let heightString: string = (req.query.height) as string ;
   let heightN: number = parseInt(heightString);
   let widthString: string = req.query.width as string;
   let widthN: number = parseInt(widthString);
   let resizedImage: string = `${resizedImagePath}/${imageName}W${widthN}H${heightN}.jpg`
   let originalImage: string = `${imagePath}/${imageName}.jpg`
   


   
   if(!imageName) {
      return res.status(400).send("Please type the image name")
   }
   if(!widthN) {
      return res.status(400).send("Please type the width")
   }

   if(!heightN) {
      return res.status(400).send("Please type the height")
   }

  
   
// Resize the Image

 /*(async function resizeImage(): Promise<void> {	
   try{	
            
            await sharp(`${originalImage}`)
            .resize(Number(heightN), Number(widthN))
           .toFile(resizedImage) 
           
                   
         } catch (error) { 
                     console.log(error + ' error with sharp');
         }
   })();  */
         const imageProcess= sharp(`${originalImage}`) 
            .resize(Number(heightN), Number(widthN))
            .toFile(resizedImage, (err:Error)=>{
               if(err) {res.status(400).send(err) }
               else {
                  const relative:string = resizedImage
                  const absolute:string = path.resolve(relative)
                  console.log(absolute)
               //   res.readFile(absolute, (err: Error)=> {
                //     res.status(200).send('well done. Resized image loaded successfuly')
               //   })
               }
            })
        // res.readFile(resizedImage, (err: Error)=> {
          //  res.status(400).send(err)
        // })
        // .then(() =>{
        //    res.readFile(resizedImage)
       //  })
         

        // const absolImg = path.resolve(`/home/reem/Image-Processing-API/src/images/resized/$${imageName}W${widthN}H${heightN}.jpg}`)
       //  res.readFile(absolImg) 

     /*  function readImage(outtputFile: any) {
         try {
            const readFile = fsPromises.readFile(resizedImage);
         } catch (error) {
            console.log(error + ':readImage()');
         }  
   };
       readImage(resizedImage);     */                    
 
});




export {
   absoluteResizedImagePath,
   absoluteImagePath,
}
export default retreiveImage;