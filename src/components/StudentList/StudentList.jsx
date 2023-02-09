import React from "react";
import "./StudentList.css";
import dateFormat from "dateformat";

export default function StudentList({ students }) {
  return (
    <>
      <h2 className="StudentListHeader">Student List</h2>
      <div className="StudentListContainer">
        <table border="1" cellpadding="5" cellspacing="5">
          <tr>
            <th className="title">First Name</th>
            <th className="title">Family Name</th>
            <th className="title">Date of Birth</th>
          </tr>
          {students.map((student, idx) => {
            return (
              <>
                <tr>
                  <td>{student.firstName}</td>
                  <td>{student.familyName}</td>
                  <td>
                    {dateFormat(student.dateOfBirth, "mmmm dS, yyyy", true)}
                  </td>
                </tr>
              </>
            );
          })}
        </table>
      </div>
    </>
  );
}
