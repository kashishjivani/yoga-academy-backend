const Payment = require("../models/Payment");
const UserBatchPayment = require("../models/UserBatchPayment");

const detailsController = async (req, res, next) => {
  // Logic for inserting batch and payment details

  const { userID: userId, selectedBatch: batchId } = await req.body; // UserId and BatchId will be fetched from the req body
  const completePayment = (amount) => {
    if (amount === 500);
    return true;
  };
  const paymentDate = new Date();
  const amount = 500;                          // Hardcoded values for payment
  const paymentStatus = completePayment(amount);
  const response = null;

  if (paymentStatus) {                       // If payment is successful the data will be inserted
    try {
      const paymentDetail = await Payment.create({
        paymentDate,
        amount,
        paymentStatus,
        response,
        userId,
      });

      const paymentId = paymentDetail.dataValues.paymentId;  // Retrieving paymentId for inserting it in user_batch_payment table

      await UserBatchPayment.create({  // Inserting in the user_batch_payment table
        userId,
        batchId: parseInt(batchId),
        paymentId,
      });

      res.status(201).json({ message: "Payment Successful" });
    } catch (error) {
      console.error("Error inserting data into MySQL:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
};

module.exports = detailsController;