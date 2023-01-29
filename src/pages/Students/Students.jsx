import React from "react";
import StudentForm from "../../components/StudentForm/StudentForm";
import StudentList from "../../components/StudentList/StudentList";
import "./Students.css";

export default function Students({ students, setStudents }) {
  return (
    <>
      <div className="StudentsPageContainer">
        <StudentForm setStudents={setStudents} students={students} />
        <StudentList students={students} />
      </div>
    </>
  );
}
