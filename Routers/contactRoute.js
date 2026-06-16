import express from "express";
import { createContact,getContactById,deleteContactById,putContactById } from "../controllers/contactController.js";
import upload from "../middleWare/fileUpload.js";

const contactRoute=express.Router();
contactRoute.post("/createContact",createContact);
contactRoute.get("/getContact/:id", getContactById);
contactRoute.delete("/deleteContact/:id", deleteContactById);
contactRoute.put("/updateContact/:id", putContactById);


export default contactRoute