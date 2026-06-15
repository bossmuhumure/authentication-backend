import productRouter from "./productRouter.js";
import { Router } from "express";
import authRouter from "./userRouters.js";


const mainRouter=Router();
mainRouter.use("/product",productRouter)
mainRouter.use("/auth",authRouter)
export default mainRouter