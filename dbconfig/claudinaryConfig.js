import dotenv from "dotenv";
dotenv.config();
import { v2 as cloudinary } from "cloudinary";
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_API_Name,
    api_key:process.env.CLOUDINARY_API_Key,
    api_secret:process.env.CLOUDINARY_API_Secret,
});
export default cloudinary