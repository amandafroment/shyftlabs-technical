const Course = require("../models/course");

async function createCourse(req, res) {
  const course = await Course.create(req.body);
  res.json(course);
  console.log("Course is created");
}

async function getAllCourses(req, res) {
  const courses = await Course.find({});
  if (!courses) {
    res.send("controller course api has an error");
  } else {
    res.json(courses);
  }
}

module.exports = {
  createCourse,
  getAllCourses,
};
