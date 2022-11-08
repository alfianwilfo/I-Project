const express = require("express");
const app = express();
let UserController = require("../controllers/userController");

app.post("/register", UserController.register);
module.exports = app;
