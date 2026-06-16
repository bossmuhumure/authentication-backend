import mongoose, {Schema} from "mongoose";

const contactSchema=new mongoose.Schema({
    contactNumber:{
        type:String,
        required:[true,"please! fill this field"],
    },
    contactName:{
        type:String,
        required:true,
    },
   
    contactLocation: {
       type:String,
       required:true
    },
  contactDescription:{
        type:String,
        required:true,
    }
},
{
    timestamps:true,
});

const Contact=mongoose.model("contactTable",contactSchema)
export default Contact