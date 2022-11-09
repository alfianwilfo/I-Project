const express = require("express");
const app = express();
let UserController = require("../controllers/userController");
let IndexController = require("../controllers/index");
app.post("/register", UserController.register);
app.post("/login", UserController.login);
app.get("/news", IndexController.getNews);
module.exports = app;
