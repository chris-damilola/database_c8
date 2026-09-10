const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoutes.js");
const productRoute = require("./routes/productRoutes.js");

const compass_string = "mongodb://localhost:27017/cohort8_db";
const atlas_string =
  "mongodb+srv://damilolaogunleye420_db_user:Hollyguy1@cluster0.r3erp6x.mongodb.net/cohort8_db?appName=Cluster0";

mongoose
  .connect(atlas_string)
  .then(() => console.log("MondoDB connected"))
  .catch((err) => console.error("Connection Error: ", err));

const app = express();
const port = 8888;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is active!");
});

app.use("/users", userRoute);
app.use("/products", productRoute);

app.listen(port, () => {
  console.log(`Server is up and running on port : ${port}`);
});
