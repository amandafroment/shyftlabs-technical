import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Students from "../Students/Students";
import Home from "../Home/Home";
import Courses from "../Courses/Courses";
import Results from "../Results/Results";
import { useEffect, useState } from "react";
import * as studentsAPI from "../../utilities/students-api";
import * as coursesAPI from "../../utilities/courses-api";
import * as resultsAPI from "../../utilities/results-api";

export default function App() {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(function() {
    async function getStudents() {
      let getStudents = await studentsAPI.getAllStudents();
      setStudents(getStudents);
    }

    getStudents();
  }, []);

  useEffect(function() {
    async function getCourses() {
      let getCourses = await coursesAPI.getAllCourses();
      setCourses(getCourses);
    }

    getCourses();
  }, []);

  useEffect(function() {
    async function getResults() {
      let getResults = await resultsAPI.getAllResults();
      setResults(getResults);
    }

    getResults();
  }, []);

  return (
    <>
      <main className="App">
        <NavBar />
        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route
            path="/students"
            element={<Students setStudents={setStudents} students={students} />}
          ></Route>
          <Route
            path="/courses"
            element={<Courses setCourses={setCourses} courses={courses} />}
          ></Route>
          <Route
            path="/results"
            element={
              <Results
                courses={courses}
                students={students}
                results={results}
                setResults={setResults}
              />
            }
          ></Route>
        </Routes>
      </main>
    </>
  );
}
