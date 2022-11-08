let { User } = require("../models/index");
let { comparePassword } = require("../helpers/bcrypt");
let { createToken, verifyToken } = require("../helpers/jwt");
class UserController {
  static async register(req, res) {
    try {
      let { email, password } = req.body;
      let regis = await User.create({ email, password });
      res.status(201).json({ id: regis.id, email: regis.email });
    } catch (error) {
      if (error.name === "SequelizeUniqueConstraintError") {
        res.status(400).json({ name: "Email has been registered" });
      } else if (
        error.errors[0].message === "Validation notEmpty on email failed"
      ) {
        res.status(400).json({ name: "Email can't be empty" });
      } else if (
        error.errors[0].message === "Validation notEmpty on password failed"
      ) {
        res.status(400).json({ name: "Password can't be empty" });
      } else {
        res.status(500).json({ name: "Internal server error" });
      }
    }
  }
  static async login(req, res) {
    try {
      let { email, password } = req.body;
      let findUser = await User.findOne({ where: { email } });
      // console.log(findUser);
      if (!findUser) {
        throw { name: "Invalid username or password" };
      }
      let pw = await comparePassword(password, findUser.password);
      if (!pw) {
        throw { name: "Invalid username or password" };
      }
      let payload = { id: findUser.id, email: findUser.email };
      let access_token = createToken(payload);
      res
        .status(200)
        .json({ access_token: access_token, email: findUser.email });
    } catch (error) {
      console.log("masuk kesini");
      if (error.name === "Invalid username or password") {
        res.status(400).json(error);
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  }
}

module.exports = UserController;
