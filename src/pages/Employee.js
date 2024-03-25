import React from "react";
import ActiveProjectsEmployee from "../components/ActiveProjectsEmployee";
import "../css/ActiveProjects.css";

const Employee = () => {
  return (
    <div>
      <div className="Employee-container">
        <div className="project-cards">
          <ActiveProjectsEmployee></ActiveProjectsEmployee>
        </div>
      </div>
    </div>
  );
};

export default Employee;
