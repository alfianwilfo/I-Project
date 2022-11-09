"use strict";
const { hash } = require("../helpers/bcrypt");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: { message: "Email has been registered" },
        validate: {
          isEmail: { message: "Email must be in email format" },
          notNull: { message: `Email can't be null` },
          notEmpty: { message: `Email can't be null` },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { message: `Password can't be null` },
          notEmpty: { message: `Password can't be null` },
        },
      },
      status: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  User.beforeCreate(async (user) => {
    user.password = hash(user.password);
    user.status = "Basic";
  });
  return User;
};
