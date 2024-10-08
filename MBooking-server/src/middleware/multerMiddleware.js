const path = require("path");
const multer = require("multer");

// Middleware configuration object

const upload = multer({
  // Destination folder where uploaded files will be stored
  dest: "src/uploads/",
  // Limit the file size to 10GB 
  // limits: { fileSize: 10 * 1024 * 1024 },
  // Define the storage settings using multer.diskStorage
  storage: multer.diskStorage({
    // Set the destination folder for storing uploaded files
    destination: "src/uploads/",
    // Define the filename for the uploaded file
    filename: (_req, file, cb) => {
      cb(null, file.originalname);
    },
  }),
  // Define the file filter to allow only specific file types
  fileFilter: (_req, file, cb) => {
    // Get the file extension from the original filename
    let ext = path.extname(file.originalname);

    // List of allowed file extensions
    const allowedExtensions = [".jpg", ".jpeg", ".webp", ".png", ".mp4"];

    // Check if the file extension is in the allowedExtensions array
    if (!allowedExtensions.includes(ext)) {
      // If the file extension is not allowed, return an error
      cb(new Error(`Unsupported file type: ${ext}`), false);
      return;
    }
    // If the file extension is allowed, continue with the upload
    cb(null, true);
  },
});

module.exports = upload;
