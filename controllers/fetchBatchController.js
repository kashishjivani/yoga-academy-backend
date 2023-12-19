const Sequelize = require("sequelize");
const Batch = require("../models/Batch");

const fetchBatches = async (req, res, next) => {   // Logic for fetching current batches from DB
  const date = new Date();
  const month = date.getMonth() + 1;
  try {

    const batches = await Batch.findAll({
      where: Sequelize.literal(`MONTH(startTime) = ${month}`),     // Retrieving field only of current month
    });

    const fetchedBatches = batches.map(batch => {  // Sending the batches to display on the page
      const { dataValues } = batch;
      return dataValues;
    });

    console.log("Batch data fetched successfully");
    res.status(201).json({
      message: "Batch data fetched successfully",
      batches: fetchedBatches,
    });
  }
  catch (error) {
    console.error("Error fetching batches from MySQL:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = fetchBatches;