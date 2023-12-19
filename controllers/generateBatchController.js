const Sequelize = require("sequelize");
const Batch = require("../models/Batch");

const generateBatches = async (req, res, next) => {

// (0 0  1 *  *, "/api/generateBatch") -- CRON JOB scheduler
//  M H DM M DW

// router.post("/api/generateBatches",

const generateBatches = async (req, res, next) => {
  const { a, b, c, d } = req.body;
  const query =
    "INSERT INTO batches (starttime, endtime) VALUES (?, ?), (?, ?), (?, ?), (?, ?)";
  const values = [[a, b], [c, d], [], []];
  connection.query(query, values.flat(), (error, results) => {
    if (error) {
      console.error("Error inserting data into MySQL:", error);
      return res.status(500).json({ error: "Internal server error" });
    }

    console.log("Batches data inserted successfully");
    res.status(201).json({
      message: "Batches data inserted successfully",
    });
  });
};

};

module.exports = generateBatches;