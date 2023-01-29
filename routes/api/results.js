const express = require("express");
const router = express.Router();
const resultsCtrl = require("../../controllers/results");

//remember: BASE_URL in students-api is "api/students"

router.post("/create", resultsCtrl.createResult);
router.get("/results", resultsCtrl.getAllResults);

module.exports = router;
