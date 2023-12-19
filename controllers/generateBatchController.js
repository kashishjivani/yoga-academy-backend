const Sequelize = require("sequelize");
const Batch = require("../models/Batch");

const generateBatches = async (req, res, next) => {

  // (0 0  1 *  *, "/api/generateBatches") -- CRON JOB scheduler 
  //  M H DM M DW

  // Above is the CRON JOB Scheduler for calling this API once every month (more info in documentation)

  try {
    const currentDate = new Date();

    const batchData = [                            // Generating batches once in a month
      {
        startTime: new Date(currentDate.setHours(6, 0, 0)),
        endTime: new Date(currentDate.setHours(7, 0, 0)),
      },
      {
        startTime: new Date(currentDate.setHours(7, 0, 0)),
        endTime: new Date(currentDate.setHours(8, 0, 0)),
      },
      {
        startTime: new Date(currentDate.setHours(8, 0, 0)),
        endTime: new Date(currentDate.setHours(9, 0, 0)),
      },
      {
        startTime: new Date(currentDate.setHours(17, 0, 0)),
        endTime: new Date(currentDate.setHours(18, 0, 0)),
      },
    ];

    await Batch.bulkCreate(batchData);    // Creating bulk insert

    console.log("Batches data inserted successfully");
    res.status(201).json({
      message: "Batches data inserted successfully",
    });
  } catch (error) {
    console.error("Error inserting data into MySQL:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = generateBatches;