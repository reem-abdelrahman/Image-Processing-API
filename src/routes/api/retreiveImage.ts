'use strict';
export {};
import express, { query } from 'express';
import {promises as fsPromises} from 'fs';
import path from 'path';   
import sharp from 'sharp';
const retreiveImage = express.Router();
const imagePath: string = 'src/images';
const resizedImagePath: string = 'src/images/resized';
retreiveImage.use('/', express.static('src/images'));
retreiveImage.get('/', async (req, res, next) =>

{

   let imageName: string = req.query.image as string;
   let heightString: string = (req.query.height) as string ;
   let heightN: number = parseInt(heightString);
   let widthString: string = req.query.width as string;
   let widthN: number = parseInt(widthString);
   let resizedImage= `${resizedImagePath}/${imageName}W${widthN}H${heightN}.jpg`
   let originalImage = `${imagePath}/${imageName}.jpg`
   


   
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

 (async function resizeImage(): Promise<void> {	
   try{	
   
            await sharp(`${originalImage}`)
            .resize(Number(heightN), Number(widthN))
            
            .toFile(resizedImage)         
         } catch (error) { 
                     console.log(error + ' error with sharp');
                     
                  
               }
   })();         
           
       function readImage(outtputFile: any) {
         try {
            const readFile = fsPromises.readFile(resizedImage);
         } catch (error) {
            console.log(error + ':readImage()');
         }  
   };
       readImage(resizedImage);                        
 next();
});





export default retreiveImage;