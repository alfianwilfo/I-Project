let { User } = require("../models/index");
class UserController {
  static async register(req, res) {
    try {
      let { email, password } = req.body;
      let regis = await User.create({ email, password });
      res.status(201).json({ id: regis.id, email: regis.email });
    } catch (error) {
      if (error.name === "SequelizeUniqueConstraintError") {
        res.status(400).json({ message: "Email has been registered" });
      }
    }
  }
}

module.exports = UserController;
