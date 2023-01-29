import React from "react";
import ResultForm from "../../components/ResultForm/ResultForm";
import ResultTable from "../../components/ResultTable/ResultTable";
import "./Results.css";

export default function Results({ students, courses, results, setResults }) {
  return (
    <>
      <div className="ResultPageContainer">
        <ResultForm
          courses={courses}
          students={students}
          results={results}
          setResults={setResults}
        />
        <ResultTable results={results} />
      </div>
    </>
  );
}
