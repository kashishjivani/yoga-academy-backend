const Sequelize = require("sequelize");

const sequelize = require("../utils/db");
const User = require("./User");

const Payment = sequelize.define(
  "payments",
  {
    paymentId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },

    paymentDate: {
      type: Sequelize.DATE,
    },

    amount: {
      type: Sequelize.INTEGER,
    },

    paymentStatus: {
      type: Sequelize.BOOLEAN,
    },

    response: {
      type: Sequelize.JSON,
    },

    userId: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);

Payment.belongsTo(User, { foreignKey: 'userId' });

module.exports = Payment;
