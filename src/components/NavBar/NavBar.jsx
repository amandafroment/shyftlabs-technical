import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <>
      <nav>
        <div>
          <Link to="/">Home</Link>
          <Link to="/students">Students</Link>
          <Link to="/courses">Courses</Link>
        </div>
      </nav>
    </>
  );
}
