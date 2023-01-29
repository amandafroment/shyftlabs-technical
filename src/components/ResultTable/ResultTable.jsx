import React from "react";
import "./ResultTable.css";

export default function ResultTable({ results }) {
  return (
    <>
      <h2 className="ResultListHeader">Result List</h2>
      <div className="ResultListContainer">
        <table border="1" cellpadding="5" cellspacing="5">
          <tr>
            <th className="title">Course Name</th>
            <th className="title">Student Name</th>
            <th className="title">Grade</th>
          </tr>
          {results.map((result, idx) => {
            return (
              <>
                <tr>
                  <th>
                    {result.student.firstName} {result.student.familyName}
                  </th>
                  <th>{result.course.course}</th>
                  <th>{result.grade}</th>
                </tr>
              </>
            );
          })}
        </table>
      </div>
    </>
  );
}
