const express = require("express");
const app = express();
let UserController = require("../controllers/userController");
let IndexController = require("../controllers/index");
let PaymentController = require("../controllers/payment");
app.post("/register", UserController.register);
app.post("/login", UserController.login);
app.get("/news", IndexController.getNews);
app.get("/payment", PaymentController.getPayRequest);
app.post("/payment", PaymentController.postPayment);
// app.("/status", UserController.changeStatus);
module.exports = app;
