function errorHandler(err, req, res, next) {
  //   console.log(err, "??");
  if (err.name === "SequelizeUniqueConstraintError") {
    res.status(400).json({ message: err.errors[0].message });
  } else if (err.name === "Invalid email or password") {
    // console.log("masuk kesini");
    res.status(401).json({ message: "Invalid Email or password" });
  } else if (
    err.message === `WHERE parameter "email" has invalid "undefined" value`
  ) {
    res.status(401).json({ message: "Enter your email" });
  } else if (
    err.errors[0].message === "Validation notEmpty on email failed" ||
    err.errors[0].message === "User.email cannot be null"
  ) {
    res.status(401).json({ message: "Enter your email" });
  } else if (
    err.errors[0].message === "Validation notEmpty on password failed" ||
    err.errors[0].message === "User.password cannot be null"
  ) {
    res.status(401).json({ message: "Enter your password" });
  }
}
module.exports = errorHandler;
