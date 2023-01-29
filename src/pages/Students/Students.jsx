import React from "react";
import StudentForm from "../../components/StudentForm/StudentForm";
import StudentList from "../../components/StudentList/StudentList";
import { useEffect, useState } from "react";
import * as studentsAPI from "../../utilities/students-api";

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(function() {
    async function getStudents() {
      let getStudents = await studentsAPI.getAllStudents();
      setStudents(getStudents);
    }

    getStudents();
  }, []);

  return (
    <>
      <StudentForm setStudents={setStudents} students={students} />
      <StudentList students={students} />
    </>
  );
}
