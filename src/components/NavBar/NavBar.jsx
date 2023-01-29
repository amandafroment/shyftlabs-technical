import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <>
      <nav className="NavBar">
        <div className="NavBarContainer">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/students" className="link">
            Students
          </Link>
          <Link to="/courses" className="link">
            Courses
          </Link>
          <Link to="/results" className="link">
            Results
          </Link>
        </div>
      </nav>
    </>
  );
}
