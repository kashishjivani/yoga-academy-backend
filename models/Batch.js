const Sequelize = require("sequelize");

const sequelize = require("../utils/db");

const Batch = sequelize.define("batches", {
  batchId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  startTime: {
    type: Sequelize.DATE,
    allowNull: false,
  },

  endTime: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  
}, {
  timestamps: false
});

module.exports = Batch;