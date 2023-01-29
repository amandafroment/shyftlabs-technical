import React from "react";
import "./StudentList.css";

export default function StudentList({ students }) {
  return (
    <>
      <h2 className="StudentListHeader">Student List</h2>
      <div>
        {students.map((student, idx) => {
          return (
            <>
              <div className="StudentListContainer">
                <p>{student.firstName}</p>
                <p>{student.familyName}</p>
                <p>{student.birthOfDate}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
