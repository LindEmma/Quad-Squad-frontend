import React from "react";
import ActiveProjectsPM from "../components/ActiveProjectsPM";
import "../css/ActiveProjects.css";

const ProjectManager = () => {
  return (
    <div>
      <div className="Employee-container">
        <ActiveProjectsPM></ActiveProjectsPM>
      </div>
    </div>
  );
};

export default ProjectManager;
