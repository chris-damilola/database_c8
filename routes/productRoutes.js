const express = require("express");
const productRoute = express.Router();
const upload = require("../config/multer");

const {
  uploadProduct,
  getAllProduct,
} = require("../controller/productController");

productRoute.post("/upload/:userId", upload.single("image"), uploadProduct);
productRoute.get("/getall", getAllProduct);

module.exports = productRoute;
