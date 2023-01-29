import React, { useState } from "react";
import * as coursesAPI from "../../utilities/courses-api";
import "./CourseForm.css";

export default function CourseForm({ setCourses, courses }) {
  const [submitMsg, setSubmitMsg] = useState("");
  const [emptyForm, setEmptyForm] = useState({
    course: "",
  });
  const [formData, setFormData] = useState(emptyForm);
  const [popup, setPopup] = useState(false);

  const handlePopup = () => {
    setPopup(true);
  };
  const handleClosePopup = () => {
    setPopup(false);
    setSubmitMsg("");
  };

  function handleChangeForm(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  }

  async function handleSubmitForm(evt) {
    evt.preventDefault();
    try {
      let course = await coursesAPI.createCourse(formData);
      setFormData(emptyForm);
      handlePopup(true);
      setSubmitMsg("A new course has been added below.");
      setCourses([...courses, course]);
    } catch (err) {
      setSubmitMsg("Create Course Failed - Try Again");
    }
  }

  return (
    <>
      <div className="CourseFormContainer">
        {popup && (
          <div className="submit-message">
            {submitMsg}
            <button onClick={handleClosePopup}>X</button>
          </div>
        )}
        <h1>Course Form</h1>
        <form onSubmit={handleSubmitForm} className="CourseForm">
          <label>Course Name</label>
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChangeForm}
            required
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
