import express  from "express";
import { register,login } from "../controllers/authenticationController.js";

const authRouter=express();

authRouter.post("/register",register);
authRouter.post("/login",login)

export default authRouter;