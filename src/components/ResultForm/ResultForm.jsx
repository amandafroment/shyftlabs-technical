import React, { useState } from "react";
import * as resultsAPI from "../../utilities/results-api";
import "./ResultForm.css";

export default function ResultForm({ students, courses, results, setResults }) {
  const [submitMsg, setSubmitMsg] = useState("");
  const [course, setCourse] = useState("");
  const [student, setStudent] = useState("");
  const [grade, setGrade] = useState("");
  const [popup, setPopup] = useState(false);

  const handlePopup = () => {
    setPopup(true);
  };
  const handleClosePopup = () => {
    setPopup(false);
    setSubmitMsg("");
  };

  function handleChangeCourse(evt) {
    setCourse(evt.target.value);
  }
  function handleChangeStudent(evt) {
    setStudent(evt.target.value);
  }
  function handleChangeGrade(evt) {
    setGrade(evt.target.value);
  }

  function emptyForm() {
    setCourse("");
    setStudent("");
    setGrade("");
  }

  async function handleSubmitForm(evt) {
    evt.preventDefault();
    try {
      let result = await resultsAPI.createResult({ course, student, grade });
      emptyForm();
      handlePopup(true);
      setSubmitMsg("A new result has been added below.");
      setResults([...results, result]);
    } catch (err) {
      setSubmitMsg("Create Result Failed - Try Again");
    }
  }

  return (
    <>
      <div className="ResultFormContainer">
        {popup && (
          <div className="submit-message">
            {submitMsg}
            <button onClick={handleClosePopup}>X</button>
          </div>
        )}
        <h1>Result Form</h1>
        <form onSubmit={handleSubmitForm} className="ResultForm">
          <label>Course Name</label>
          <select value={course} onChange={handleChangeCourse}>
            <option value="">Select your course</option>
            {courses.map((course, idx) => {
              return <option value={course._id}>{course.course}</option>;
            })}
          </select>
          <label>Student Name</label>
          <select value={student} onChange={handleChangeStudent}>
            <option value="">Select your student</option>
            {students.map((student, idx) => {
              return (
                <option value={student._id}>
                  {student.firstName} {student.familyName}
                </option>
              );
            })}
          </select>
          <label>Grade</label>
          <select name="grade" value={grade} onChange={handleChangeGrade}>
            <option value="">Select your grade</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
            <option>E</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
