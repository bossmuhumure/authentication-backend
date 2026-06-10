import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import mainRouter from "../Routers/indexRouter.js";

dotenv.config();
const server=express();
server.use(express.json());
const Port= process.env.PORT;
const database= process.env.MONGO_URL;

server.listen(Port,()=>{
    console.log(`server is running on port ${Port}`);    
})

mongoose.connect(database)
  .then(()=>{
     console.log("server is connected successfully");
     
  })

  server.get("/",(req,res) =>{
   res.send("database")
  })

  server.use("/api/v1",mainRouter);
  
  

