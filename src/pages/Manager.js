import React from "react";
import ShowPersonnel from "../components/ShowPersonnel";
import "../css/ActiveProjects.css";

const Manager = () => {
  return (
    <div>
      <div className="Employee-container">
        <ShowPersonnel></ShowPersonnel>
      </div>
    </div>
  );
};

export default Manager;
