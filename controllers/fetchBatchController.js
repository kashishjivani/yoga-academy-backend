const Sequelize = require("sequelize");
const Batch = require("../models/Batch");

const fetchBatches = async (req, res, next) => {
  const date = new Date();
  const month = date.getMonth() + 1;
  try {

    const batches = await Batch.findAll({
      where: Sequelize.literal(`MONTH(startTime) = ${month}`),
    });

    const fetchedBatches = batches.map(batch => {
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
    console.error("Error inserting data into MySQL:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// (0 0  1 *  *, "/api/generateBatch") -- CRON JOB scheduler
//  M H DM M DW

// router.post("/api/generateBatches",

// export const generateBatches = async (req, res, next) => {
//   const { a, b, c, d } = req.body;
//   const query =
//     "INSERT INTO batches (starttime, endtime) VALUES (?, ?), (?, ?), (?, ?), (?, ?)";
//   const values = [[a, b], [c, d], [], []];
//   connection.query(query, values.flat(), (error, results) => {
//     if (error) {
//       console.error("Error inserting data into MySQL:", error);
//       return res.status(500).json({ error: "Internal server error" });
//     }

//     console.log("Batches data inserted successfully");
//     res.status(201).json({
//       message: "Batches data inserted successfully",
//     });
//   });
// };

module.exports = fetchBatches;