// import cloudinary  from "cloudinary";


// export function cloudinaryConnect() {
//   try {
//     cloudinary.v2.config({
//       //Configuring the Cloudinary to Upload MEDIA ########
//       cloud_name: process.env.CLOUD_NAME,
//       api_key: process.env.API_KEY,
//       api_secret: process.env.API_SECRET,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }
// export default cloudinary;

// lib/cloudinary.js
//import cloudinary from 'cloudinary';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// export async function uploadImageToCloudinary(file, folder = "Portfolio", quality = 80) {
//   // const arrayBuffer = await file.arrayBuffer();
//   // const buffer = new Uint8Array(arrayBuffer);
//   const options = { folder };

//   if (quality) {
//     options.quality = quality;
//   }
//   options.resource_type = "auto"; // This will automatically handle different types (image, video, etc.)

//   return await cloudinary.uploader.upload(file, options); 
// }
export async function uploadImageToCloudinary(
  file,
  folder = "Portfolio",
  quality = 80
) {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  const options = { folder, resource_type: "auto" };
  if (quality) {
    options.quality = quality;
  }

  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      options,
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );

    uploadStream.end(buffer);
  });
}

