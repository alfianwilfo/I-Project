"use strict";
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
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
