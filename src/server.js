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
  // Add this temporarily right after your mongoose.connect(...)
mongoose.connection.once('open', async () => {
    try {
        await mongoose.connection.db.collection('usertables').dropIndex('userRole_1');
        console.log("Old userRole index dropped successfully!");
    } catch (err) {
        console.log("Index might already be gone or doesn't exist:", err.message);
    }
});

  server.get("/",(req,res) =>{
   res.send("database")
  })

  server.use("/api/v1",mainRouter);
  
  

