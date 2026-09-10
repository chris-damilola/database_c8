const express = require("express");
const productRoute = express.Router();
const {
  uploadProduct,
  getAllProduct,
} = require("../controller/productController");

productRoute.post("/upload/:userId", uploadProduct);
productRoute.get("/getall", getAllProduct);
module.exports = productRoute;
