import React from "react";
import ShowPersonnel from "../components/ShowPersonnel";
import "../css/ActiveProjects.css";

const Manager = () => {
  return (
    <div>
      <div className="Employee-container">
        <div className="project-cards">
          <ShowPersonnel></ShowPersonnel>
        </div>
      </div>
    </div>
  );
};

export default Manager;
