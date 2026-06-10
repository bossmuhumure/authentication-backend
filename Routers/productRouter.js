import { createProduct, getProductById,deleteProductById,putProductById} from "../controllers/productControllers.js";
import express from "express";

const productRouter=express.Router();
productRouter.post("/createProduct",createProduct);
productRouter.get("/product/:id",getProductById);
productRouter.delete("/delete-product/:id",deleteProductById);
productRouter.put("/update-product/:id",putProductById);

export default productRouter
