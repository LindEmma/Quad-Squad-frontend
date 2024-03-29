import React from "react";
import ActiveProjectsPM from "../components/ActiveProjectsPM";
import MyNavbar from "../components/navbar";
import "../css/ActiveProjects.css";
import Footer from "../components/Footer"; 



const ProjectManager = () => {
  return (
    <div>
      <MyNavbar></MyNavbar>
      <div className="Employee-container">
        <div className="project-cards">
          <ActiveProjectsPM></ActiveProjectsPM>
        </div>
      </div>
      <Footer /> 
    </div>
    
  );
};

export default ProjectManager;
