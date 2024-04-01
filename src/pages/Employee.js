import React from "react";
import ActiveProjectsEmployee from "../components/ActiveProjectsEmployee";
import "../css/ActiveProjects.css";
import MyNavbar from "../components/navbar";
import Footer from "../components/Footer"; // Corrected import path

const Employee = () => {
  return (
    <div>
      <MyNavbar></MyNavbar>
      <div className="Employee-container">
        <ActiveProjectsEmployee></ActiveProjectsEmployee>
      </div>
      <Footer /> {/* Ensure to include the Footer component like this */}
    </div>
    
  );
};

export default Employee;
