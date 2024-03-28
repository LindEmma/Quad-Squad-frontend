import React from "react";
import ActiveProjectsPM from "../components/ActiveProjectsPM";
import "../css/ActiveProjects.css";

const ProjectManager = () => {
  return (
    <div>
      <div className="Employee-container">
        <div className="project-cards">
          <ActiveProjectsPM></ActiveProjectsPM>
        </div>
      </div>
    </div>
  );
};

export default ProjectManager;
