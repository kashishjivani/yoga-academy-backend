const Sequelize = require("sequelize");

const sequelize = require("../utils/db");

const User = sequelize.define("users", {
  userId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  firstName: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },

  lastName: {
    type: Sequelize.STRING(255),
    allowNull: true,
  },

  age: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

  contactNo: {
    type: Sequelize.STRING(15),
    allowNull: false,
  },

  email: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
}, {
  timestamps: false
});

module.exports = User;
