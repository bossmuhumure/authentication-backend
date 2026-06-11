import multer from "multer";
import path from "path";
import fs from "fs";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + "-" + file.originalname;
        cb(null, uniqueName);
    },
});
const deleteFile = (filepath) => {
    if 
       (filePath && fs.existsSync(filePath)){
        fs.unlinkSync(filePath);
       } 
}
const upload=multer ({storage})
upload.deleteFile=deleteFile;

export default upload;