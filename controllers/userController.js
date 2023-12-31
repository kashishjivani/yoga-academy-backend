const User = require("../models/User");

const userController = async (req, res, next) => {   // Logic for insertion of user details
  const userData = req.body;
  const { firstName, lastName, age, contactNo, email } = userData;

  if (!firstName) {                           // Verifying some details before inserting
    return res.status(400).json({ error: "First Name is required" });
  } else if (age < 18 && age > 65) {
    return res.status(400).json({ error: "Age should be between 18 and 65" });
  }
  try {                               // Inserting in DB using create function of Sequelize
    const user = await User.create({
      firstName,
      lastName,
      age,
      contactNo,
      email,
    });

    console.log("User data inserted successfully", user);
    res.status(201).json({
      message: "Registered Successfully!",
      userID: user.dataValues.userId,
    });
  } catch (error) {                            // Logging the error if any
    console.error("Error inserting data into MySQL:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = userController;
