import User from "../models/userModel.js";
import { accessToken } from "../utils/generateToken.js";
import bcrypt from "bcrypt"

export const register=async(req,res)=>{
    try{
    const{firstName,lastName,email,userRole,password}=req.body;
    if(!firstName || !lastName ||  !email || !password){
     return res.status(400).json({message:"please fill all field"});
    } 
    const existinguser=await User.findOne({email});
    if(existinguser){
        return res.status(400).json({message:"user already exists"});
    }
    const hashedPassword=await bcrypt.hash(password,10);
    const newUser=new User({
        firstName,
        lastName,
        email,
        password:hashedPassword,
        userRole
    });
    await newUser.save();
    const token=accessToken(newUser);
    return res.status(201).json({newUser,token,message:"user registered successfully"});

    }
    catch (error){
        return res.status(500).json({message:error.message});
    }
}
export const login=async(req,res)=>{
    try{
      const{email,password}=req.body;
      const userEmail= await User.findOne({email});
      const userPassword= await User.findOne({password});
      if(!email && !password){
        return res.status(400).json({message:"invalid email and password"});
        console.log(userEmail);
      }
      const token=accessToken(userEmail);
      const loggedInUse={
        id:userEmail._id,
        firstName:userEmail.firstName,
        lastName:üserEmail.lastName,
        email:userEmail.email,
        userRole:userEmail.userRole,
      }
      res.status (200).json({token,loggedInUse, message:"log in successfully"});
    } catch (error){
        return res.status(500).json({message:error.message});
    }
    
}