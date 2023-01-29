import React from "react";
import "./CourseList.css";

export default function CourseList({ courses }) {
  return (
    <>
      <h2 className="CourseListHeader">Course List</h2>
      <div>
        {courses.map((course, idx) => {
          return (
            <>
              <div className="CourseListContainer">
                <p>{course.course}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
