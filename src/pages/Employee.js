import React from "react";
import ActiveProjectsEmployee from "../components/ActiveProjectsEmployee";
import "../css/ActiveProjects.css";

const Employee = () => {
  return (
    <div>
      <div className="Employee-container">
        <ActiveProjectsEmployee></ActiveProjectsEmployee>
      </div>
    </div>
  );
};

export default Employee;
