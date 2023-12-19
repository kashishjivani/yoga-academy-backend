const express = require("express");
const userController = require('../controllers/userController');
const detailsController = require('../controllers/detailsController');
const fetchBatches  = require('../controllers/fetchBatchController');
const generateBatches = require('../controllers/generateBatchController');

const router = express.Router();

router.route("/user").post(userController);
router.route("/details").post(detailsController);
router.route("/fetchBatches").get(fetchBatches);
router.route("/generateBatches").post(generateBatches);

module.exports=router;