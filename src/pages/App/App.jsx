import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Students from "../Students/Students";
import Home from "../Home/Home";
import Courses from "../Courses/Courses";

export default function App() {
  return (
    <>
      <main className="App">
        <NavBar />
        <Routes>
          <Route path="" element={<Home />}></Route>
          <Route path="/students" element={<Students />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
        </Routes>
      </main>
    </>
  );
}
