//! password midtrans Test@123321
let { User } = require("../models/index");
let { comparePassword } = require("../helpers/bcrypt");
let { createToken, verifyToken } = require("../helpers/jwt");
let path = require("path");
const nodemailer = require("nodemailer");
class UserController {
  static async register(req, res, next) {
    try {
      let em = "litavue@gmail.com";
      let pa = "test@123321";
      let pwApp = "ltgeyizotxvapxkw";

      let { email, password } = req.body;
      if (!email) {
        throw { name: "email null" };
      }
      if (!password) {
        throw { name: "password null" };
      }
      let regis = await User.create({ email, password });

      // set up nodemailer
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // use SSL
        auth: {
          user: em,
          pass: pwApp,
        },
      });

      // https://upload.wikimedia.org/wikipedia/id/e/ed/Nyan_cat_250px_frame.PNG

      var mailOptions = {
        from: em,
        to: email,
        subject: "Welcome mate !",
        html: `<h1>Welcome ${email}</h1>
        <p>Akunmu sudah terdaftar dan bisa digunakan!</p>
        <img src="cid:Nyan">`,
        attachments: [
          {
            filename: "Nyan.png",
            path: path.join(__dirname, "../assets/Nyan_cat_250px_frame.png"),
            cid: "Nyan", //my mistake was putting "cid:logo@cid" here!
          },
        ],
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });

      res.status(201).json({ id: regis.id, email: regis.email });
    } catch (error) {
      next(error);
    }
  }
  static async login(req, res, next) {
    try {
      let { email, password } = req.body;
      if (!email) {
        throw { name: "email null" };
      }
      if (!password) {
        throw { name: "password null" };
      }
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
      res.status(200).json({
        access_token: access_token,
        email: findUser.email,
        status: findUser.status,
      });
    } catch (error) {
      next(error);
    }
  }
  static async changeStatus(req, res, send) {
    try {
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
