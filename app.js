const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const userController = require('./controllers/userController');
const detailsController = require('./controllers/detailsController');
const batchController = require('./controllers/batchController');


dotenv.config();
const port = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(userController);
app.use(detailsController);
app.use(batchController);

app.listen(3001, () => {
    console.log(`Server is running on port ${port}`);
})