const express = require("express");
const userRoute = express.Router();
const {
  createUser,
  deleteUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  loginUser,
} = require("../controller/userController");
userRoute.post("/new-user", createUser);
userRoute.get("/all-users", getAllUsers);
userRoute.get("/get-one-user/:id", getSingleUser);
userRoute.delete("/delete-user/:id", deleteUser);
userRoute.patch("/update-user/:id", updateUser);
userRoute.get("/login", loginUser);

module.exports = userRoute;
