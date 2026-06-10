import Product from "../models/productModel.js";
export const createProduct = async (req, res) => {
    try {
        const {
            productName,
            productPrice,
            productDescription,
            productCategory
        } = req.body;
        const newProduct = new Product({
            productName,
            productPrice,
            productDescription,
            productCategory
        });
        const savedProduct = await newProduct.save();
        res.status(201).json({
            message: "product created are successfully",
            data: savedProduct
        });

    } catch (error) {
        res.status(500).json({
            message: "Error creating product",
            error: error.message
        });
    }

};
export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;

        const oneProduct = await Product.findById(id);

        if (!oneProduct) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.status(200).json({
            message: "Product retrieved successfully",
            data: oneProduct
        });

    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};
export const deleteProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteProduct = await Product.findByIdAndDelete(id);
        if (!deleteProduct) {
            return res.status(404).json({
                message: "product not found"
            });
        }
        res.status(200).json({
            message: "product are deleted ",
        });
    } catch (error) {
        res.status(500).json({
            message: "server error",
            error: error.message
        });
    }
};
export const putProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body
        const putProduct = await Product.findByIdAndUpdate(id, updatedData, { new: true, runValidators: true });
        if (!putProduct) {
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