import productRouter from "./productRouter.js";
import { Router } from "express";
import authRouter from "./userRouters.js";
import contactRoute from "./contactRoute.js";


const mainRouter=Router();
mainRouter.use("/product",productRouter)
mainRouter.use("/auth",authRouter)
mainRouter.use("/contact", contactRoute)
export default mainRouter