import React from "react";
import ShowPersonnel from "../components/ShowPersonnel";
import MyNavbar from "../components/navbar";
import "../css/ActiveProjects.css";
import Footer from "../components/Footer"; 

const Manager = () => {
  return (
    <div>
      <MyNavbar></MyNavbar>
      <div className="Employee-container">
        <div className="project-cards">
          <ShowPersonnel></ShowPersonnel>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Manager;
