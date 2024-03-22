import React from "react";
import FetchUsername from "../components/FetchUsername";
import ShowPersonnel from "../components/ShowPersonnel";
import "../css/ActiveProjects.css";

const Manager = () => {
  return (
    <div>
      <FetchUsername />
      <div className="Employee-container">
        <div className="project-cards">
          <ShowPersonnel></ShowPersonnel>
        </div>
      </div>
    </div>
  );
};

export default Manager;
