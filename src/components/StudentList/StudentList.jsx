import React from "react";
import "./StudentList.css";
import dateFormat from "dateformat";

export default function StudentList({ students }) {
  return (
    <>
      <h2 className="StudentListHeader">Student List</h2>
      <div>
        {students.map((student, idx) => {
          return (
            <div className="StudentListContainer" key={idx}>
              <p>{student.firstName}</p>
              <p>{student.familyName}</p>
              <p>{dateFormat(student.dateOfBirth, "mmmm dS, yyyy")}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
