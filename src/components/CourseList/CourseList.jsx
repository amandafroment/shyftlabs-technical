import React from "react";
import "./CourseList.css";

export default function CourseList({ courses }) {
  return (
    <>
      <h2 className="StudentListHeader">Course List</h2>
      <div>
        {courses.map((course, idx) => {
          return (
            <>
              <div className="StudentListContainer">
                <p>{course.course}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
