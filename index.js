//import "dotenv/config"
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoutes.js");
const productRoute = require("./routes/productRoutes.js");

const compass_string = process.env.COMPASS_STRING;
const atlas_string = process.env.ATLAS_STRING;

mongoose
  .connect(atlas_string)
  .then(() => console.log("MondoDB connected"))
  .catch((err) => console.error("Connection Error: ", err));

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is active!");
});

app.use("/users", userRoute);
app.use("/products", productRoute);

app.listen(port, () => {
  console.log(`Server is up and running on port : ${port}`);
});
