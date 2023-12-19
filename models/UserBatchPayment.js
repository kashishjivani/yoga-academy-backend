const Sequelize = require("sequelize");
const sequelize = require("../utils/db");
const User = require("./User");
const Payment = require("./Payment");
const Batch = require("./Batch");

const UserBatchPayment = sequelize.define("user_batch_payment", {
  userId: {
    type: Sequelize.INTEGER
  },

  batchId: {
    type: Sequelize.INTEGER
  },
  
  paymentId: {
    type: Sequelize.INTEGER
  }

}, {
  timestamps: false,
  freezeTableName: true,
  primarykey: false
});

UserBatchPayment.belongsTo(User, { foreignKey: 'userId' });
UserBatchPayment.belongsTo(Batch, { foreignKey: 'batchId' });
UserBatchPayment.belongsTo(Payment, { foreignKey: 'paymentId' });

module.exports = UserBatchPayment;