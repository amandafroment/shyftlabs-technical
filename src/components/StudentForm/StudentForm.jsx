import React, { useState } from "react";
import * as studentsAPI from "../../utilities/students-api";

export default function StudentForm() {
  const [submitMsg, setSubmitMsg] = useState("");
  const [emptyForm, setEmptyForm] = useState({
    firstName: "",
    familyName: "",
    dateOfBirth: new Date(),
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
      let student = await studentsAPI.createStudent(formData);
      setFormData(emptyForm);
      handlePopup(true);
      setSubmitMsg("Congratulations!");
    } catch (err) {
      setSubmitMsg("Create Student Failed - Try Again");
    }
  }

  function getMinDate() {
    let date = new Date();
    let year = date.getFullYear() - 10;
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (day < 10) {
      day = "0" + day;
    }

    if (month < 10) {
      month = "0" + month;
    }

    return year + "-" + month + "-" + day;
  }

  return (
    <>
      <div>
        {popup && (
          <div>
            {submitMsg}
            <button onClick={handleClosePopup}>X</button>
          </div>
        )}

        <form onSubmit={handleSubmitForm}>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChangeForm}
            required
          ></input>
          <label>Family Name</label>
          <input
            type="text"
            name="familyName"
            value={formData.familyName}
            onChange={handleChangeForm}
            required
          ></input>
          <label>Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            max={getMinDate()}
            onChange={handleChangeForm}
            required
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
