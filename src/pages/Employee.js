import React from "react";
import FetchUsername from "../components/FetchUsername";
import Modalpopup from '../components/ModalPopUp'
import ActiveProjectsEmployee from "../components/ActiveProjectsEmployee";
import "../css/ActiveProjects.css";


const Employee = () => {
  return (
    <div>
      <FetchUsername />
      <div className="Employee-container">
        <div className="project-cards">
          <ActiveProjectsEmployee></ActiveProjectsEmployee>
        </div>
      </div>
    </div>
  );
};

export default Employee;
