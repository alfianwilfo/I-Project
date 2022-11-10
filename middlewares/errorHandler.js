function errorHandler(err, req, res, next) {
  // console.log(err);
  if (err.name === "email null") {
    res.status(401).json({ message: "Enter your email" });
  } else if (err.name === "password null") {
    res.status(401).json({ message: "Enter your password" });
  } else if (err.name === "SequelizeUniqueConstraintError") {
    res.status(400).json({ message: err.errors[0].message });
  } else if (err.name === "Invalid email or password") {
    res.status(401).json({ message: "Invalid Email or password" });
  } else if (err.errors[0].validatorName === "notEmpty") {
    console.log("masuk sini");
    res.status(401).json({ message: "Enter your email" });
  } else if (err.errors[0].validatorName === "isEmail") {
    res.status(401).json({ message: "Enter your email in email format" });
  } else if (
    err.errors[0].message === "Validation notEmpty on password failed" ||
    err.errors[0].message === "User.password cannot be null"
  ) {
    res.status(401).json({ message: "Enter your password" });
  } else {
    res.status(500).json({ message: "Internal server error" });
  }
}
module.exports = errorHandler;
