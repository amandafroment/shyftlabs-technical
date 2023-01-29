const Result = require("../models/result");

async function createResult(req, res) {
  const result = await Result.create(req.body);

  res.json(
    await Result.findById(result._id)
      .populate("student")
      .populate("course")
  );
}

async function getAllResults(req, res) {
  const results = await Result.find({})
    .populate("student")
    .populate("course");
  if (!results) {
    res.send("controller results api has an error");
  } else {
    res.json(results);
  }
}

module.exports = {
  createResult,
  getAllResults,
};
