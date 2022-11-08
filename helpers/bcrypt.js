var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);

var hash = (password) => bcrypt.hashSync(password, salt);

let comparePassword = (password, passwordDB) =>
  bcrypt.compareSync(password, passwordDB);

module.exports = { hash, comparePassword };
