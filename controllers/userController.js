let { User } = require("../models/index");
let { comparePassword } = require("../helpers/bcrypt");
let { createToken, verifyToken } = require("../helpers/jwt");
class UserController {
  static async register(req, res, next) {
    try {
      let { email, password } = req.body;
      let regis = await User.create({ email, password });
      res.status(201).json({ id: regis.id, email: regis.email });
    } catch (error) {
      next(error);
    }
  }
  static async login(req, res, next) {
    try {
      let { email, password } = req.body;
      let findUser = await User.findOne({ where: { email } });
      // console.log(findUser);
      if (!findUser) {
        throw { name: "Invalid email or password" };
      }
      let pw = await comparePassword(password, findUser.password);
      if (!pw) {
        throw { name: "Invalid email or password" };
      }
      let payload = { id: findUser.id, email: findUser.email };
      let access_token = createToken(payload);
      res
        .status(200)
        .json({ access_token: access_token, email: findUser.email });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
