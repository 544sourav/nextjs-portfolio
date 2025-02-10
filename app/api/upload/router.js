import { NextRequest, NextResponse } from "next/server";
import cloudinary, { cloudinaryConnect } from "@/lib/cloudinary";
import formidable from "formidable";

// Initialize Cloudinary connection
cloudinaryConnect();

// Middleware to handle file uploads
export async function POST(request) {
  const form = new formidable.IncomingForm();
  form.uploadDir = "/tmp"; // Temporary folder for uploads

  return new Promise((resolve, reject) => {
    form.parse(request.body, async (err, fields, files) => {
      if (err) {
        return reject(
          NextResponse.json(
            { error: "Error parsing form data" },
            { status: 500 }
          )
        );
      }

      // Extract the file from the form data
      const file = files.file?.[0]; // Assuming only one file is uploaded under 'file' field
      if (!file) {
        return reject(
          NextResponse.json({ error: "No file provided" }, { status: 400 })
        );
      }

      try {
        // Upload the file to Cloudinary
        const result = await uploadImageToCloudinary(
          file,
          "portfolio-images",
          80
        );
        resolve(NextResponse.json({ url: result.secure_url }));
      } catch (uploadError) {
        reject(
          NextResponse.json(
            { error: "Error uploading to Cloudinary", details: uploadError },
            { status: 500 }
          )
        );
      }
    });
  });
}

// Function to upload the image to Cloudinary
async function uploadImageToCloudinary(file, folder, quality) {
  const options = { folder };

  if (quality) {
    options.quality = quality;
  }
  options.resource_type = "auto"; // Auto-detect the type of resource (image, video, etc.)

  return cloudinary.uploader.upload(file.filepath, options); // Upload the file to Cloudinary
}
