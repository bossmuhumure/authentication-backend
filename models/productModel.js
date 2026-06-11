import mongoose, {Schema} from "mongoose";

const productSchema=new mongoose.Schema({
    productName:{
        type:String,
        required:[true,"please! fill this field"],
    },
    productPrice:{
        type:Number,
        required:true,
    },
   
    productDescription: {
       type:String,
       required:true
    },
    productCategory:{
        type:String,
        required:true,
    },
    productImage:{
        type:String,
        required:false,
    }
  
},
{
    timestamps:true,
});
const product=mongoose.model("products",productSchema)
export default product