const express = require("express");
const router = express.Router();
const studentsCtrl = require("../../controllers/students");

//remember: BASE_URL in students-api is "api/students"

router.post("/create", studentsCtrl.createStudent);
router.get("/students", studentsCtrl.getAllStudents);

module.exports = router;
