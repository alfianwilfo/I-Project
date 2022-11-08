let { User } = require("../models/index");
class UserController {
  static async register(req, res) {
    try {
      let { email, password } = req.body;
      if (!email) {
        res.status(400).json({ message: "Email can't be empty" });
      }
      if (!password) {
        res.status(400).json({ message: "Password can't be empty" });
      }
      let regis = await User.create({ email, password });
      res.status(201).json({ id: regis.id, email: regis.email });
    } catch (error) {
      if (error.name === "SequelizeUniqueConstraintError") {
        res.status(400).json({ message: "Email has been registered" });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  }
  static async login(req, res) {
    try {
      let { email, password } = req.body;
      if (!email) {
        res.status(400).json({ message: "Email can't be empty" });
      }
      if (!password) {
        res.status(400).json({ message: "Password can't be empty" });
      }
      console.log(email, password);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

module.exports = UserController;
