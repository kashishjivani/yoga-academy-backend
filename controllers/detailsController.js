const Payment = require("../models/Payment");
const UserBatchPayment = require("../models/UserBatchPayment");

const detailsController = async (req, res, next) => {
  const { userID, selectedBatch } = await req.body;
  const paymentDate = new Date();
  const amount = 500;
  const paymentStatus = true;
  const response = null;

  console.log(userID, "UI");
  Payment.create({
    paymentDate,
    amount,
    paymentStatus,
    response,
    userID
  }).then((paymentDetail) => {
    const paymentID = paymentDetail.dataValues.paymentId;
  
    UserBatchPayment.create({
      userID,
      selectedBatch,
      paymentID
    }).then(() => {
      console.log("Details inserted successfully");
      res.status(201).json({ message: "Payment Successful" });
    }).catch((error) => {
      console.error("Error inserting data into MySQL:", error);
      res.status(500).json({ error: "Internal server error" });
    });
  }).catch((error) => {
    console.error("Error inserting data into MySQL:", error);
    res.status(500).json({ error: "Internal server error" });
  });
 

  // const insertQuery =
  //   "INSERT INTO payments (paymentDate, amount, paymentStatus, response, userID) VALUES (?, ?, ?, ?, ?)";
  // const paymentValues = [paymentDate, amount, paymentStatus, response, userID];

  // connection.query(insertQuery, paymentValues, (error, paymentResults) => {
  //   if (error) {
  //     console.error("Error inserting data into MySQL:", error);
  //     return res.status(500).json({ error: "Internal server error" });
  //   }

  //   const paymentID = paymentResults.insertId;

  //   const userBatchPaymentQuery =
  //     "INSERT INTO user_batch_payment VALUES (?, ?, ?)";
  //   const values = [userID, selectedBatch, paymentID];

  //   connection.query(userBatchPaymentQuery, values, (error, results) => {
  //     if (error) {
  //       console.error("Error inserting data into MySQL:", error);
  //       return res.status(500).json({ error: "Internal server error" });
  //     }

  //     console.log("Details inserted successfully");
  //     res.status(201).json({ message: "Payment Successful", results });
  //   });
  // });
};

module.exports = detailsController;