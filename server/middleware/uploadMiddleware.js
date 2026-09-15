import multer from 'multer';
import path from 'path';
import fs from 'fs';

const uploadsDir = path.resolve(process.cwd(), 'uploads');

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const sanitizedName = file.originalname.replace(/[^a-zA-Z0-9.-]/g, '_');
    cb(null, `${uniqueSuffix}-${sanitizedName}`);
  }
});

const fileFilter = (req, file, cb) => {
  // Disallow dangerous executable extensions
  const dangerousExts = ['.exe', '.bat', '.cmd', '.sh', '.vbs', '.msi', '.ps1', '.dll', '.scr'];
  const ext = path.extname(file.originalname).toLowerCase();
  
  if (dangerousExts.includes(ext)) {
    return cb(new Error('Executable and script file uploads are prohibited for security.'), false);
  }

  // Accept documents, specs (json, csv, txt, md), archives, and media
  cb(null, true);
};

export const upload = multer({
  storage: storage,
  limits: { fileSize: 15 * 1024 * 1024 }, // 15 MB
  fileFilter: fileFilter
});
