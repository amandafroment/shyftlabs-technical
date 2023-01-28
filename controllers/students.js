const Student = require("../models/student");

async function createStudent(req, res) {
  const student = await Student.create(req.body);
  res.json(student);
  console.log("Student is created");
}

async function getAllStudents(req, res) {
  const students = await Student.find({});
  if (!students) {
    res.send("controller students api has an error");
  } else {
    res.json(students);
  }
}

module.exports = {
  createStudent,
  getAllStudents,
};
