const express = require("express");
const router = express.Router();
const connection = require("../db");

router.get("/api/generateBatch", (req, res) => {
  const date = new Date();
  const month = date.getMonth() + 1;
  const query = `SELECT * FROM batches WHERE MONTH(starttime) = ${month}`;
  connection.query(query, (error, results) => {
    if (error) {
      console.error("Error inserting data into MySQL:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
    console.log("Batch data fetched successfully", results);
    res.status(201).json({
      message: "Batch data fetched successfully",
      results,
    });
  });
});

// (0 0  1 *  *, "/api/generateBatch") -- CRON JOB scheduler
//  M H DM M DW

module.exports = router;
