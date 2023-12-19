const express = require("express");
const router = express.Router();
const connection = require("../db");

router.post("/api/user", (req, res) => {
  const userData = req.body;
  const { firstName, lastName, age, contactNo, email } = userData;

  if (!firstName) {
    return res.status(400).json({ error: "First Name is required" });
  } else if (age < 18 && age > 65) {
    return res.status(400).json({ error: "Age should be between 18 and 65" });
  }

  const insertQuery =
    "INSERT INTO users (firstName, lastName, age, contactNo, email) VALUES (?, ?, ?, ?, ?)";
  const values = [
    firstName,
    lastName,
    age,
    contactNo,
    email,
  ];

  connection.query(insertQuery, values, (error, results) => {
    if (error) {
      console.error("Error inserting data into MySQL:", error);
      return res.status(500).json({ error: "Internal server error" });
    }

    console.log("User data inserted successfully");
    res
      .status(201)
      .json({
        message: "Registered Successfully!",
        userID: results.insertId,
      });
  });
});

module.exports = router;