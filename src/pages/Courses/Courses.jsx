import React from "react";
import CourseForm from "../../components/CourseForm/CourseForm";
import CourseList from "../../components/CourseList/CourseList";
import { useEffect, useState } from "react";
import * as coursesAPI from "../../utilities/courses-api";

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(function() {
    async function getCourses() {
      let getCourses = await coursesAPI.getAllCourses();
      setCourses(getCourses);
    }
  }, []);

  return (
    <>
      <CourseForm setCourses={setCourses} courses={courses} />
      <CourseList courses={courses} />
    </>
  );
}
