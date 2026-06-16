import product from "../models/productModel.js";
import cloudinary from "../dbconfig/claudinaryConfig.js";
import upload from "../middleWare/fileUpload.js";
import fs from "fs"
import Contact from "../models/contactModel.js";
export const createContact=async(req,res)=>{
    try{
      const{
        contactNumber,
        contactName,
        contactLocation,
        contactDescription
      } = req.body;
          
const newContact= new Contact({
    contactNumber,
        contactName,
        contactLocation,
        contactDescription
});
       const savedContact= await newContact.save();
        res.status(201).json({
            message: "Contact created are successfully",
            data: savedContact
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating product",
            error: error.message
        });
    }
};
export const getContactById = async (req, res) => {
    try {
        const { id } = req.params;

        const oneContact = await Contact.findById(id);

        if (!oneContact) {
            return res.status(404).json({
                message: "Contact not found"
            });
        }

        res.status(200).json({
            message: "Contact retrieved successfully",
            data: oneContact
        });

    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};
export const deleteContactById = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteContact = await Contact.findByIdAndDelete(id);
        if (!deleteContact) {
            return res.status(404).json({
                message: "Contact not found"
            });
        }
        res.status(200).json({
            message: "Contact are deleted ",
        });
    } catch (error) {
        res.status(500).json({
            message: "server error",
            error: error.message
        });
    }
};
export const putContactById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body
        const putContact = await Contact.findByIdAndUpdate(id, updatedData, { new: true, runValidators: true });
        if (!putContact) {
            return res.status(404).json({
                message: "not available",
            });

        }
        res.status(200).json({
            message: "update are successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: "server error",
            error: error.message
        });
    }

};