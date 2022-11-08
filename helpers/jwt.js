var jwt = require("jsonwebtoken");

const createToken = (payload) => jwt.sign(payload, "SECRET");
const verifyToken = (token) => jwt.verify(token, "SECRET");

module.exports = { createToken, verifyToken };
