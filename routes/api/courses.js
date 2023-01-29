const express = require("express");
const router = express.Router();
const coursesCtrl = require("../../controllers/courses");

//remember: BASE_URL in students-api is "api/students"

router.post("/create", coursesCtrl.createCourse);
router.get("/courses", coursesCtrl.getAllCourses);

module.exports = router;
