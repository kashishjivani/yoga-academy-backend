const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const sequelize = require('./utils/db');
const infoRoute = require('./routes/InfoRoute');
const UserBatchPayment = require('./models/UserBatchPayment');

dotenv.config();

const port = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(bodyParser.json());

sequelize.sync();

UserBatchPayment.sync((res) => {
    console.log(res);
})

app.use("/api", infoRoute);

app.listen(3001, () => {
    console.log(`Server is running on port ${port}`);
})