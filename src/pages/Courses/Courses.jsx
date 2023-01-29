import React from "react";
import CourseForm from "../../components/CourseForm/CourseForm";
import CourseList from "../../components/CourseList/CourseList";

export default function Courses({ courses, setCourses }) {
  return (
    <>
      <CourseForm setCourses={setCourses} courses={courses} />
      <CourseList courses={courses} />
    </>
  );
}
