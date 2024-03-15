import React from "react";
import FetchUsername from "../components/FetchUsername";
import MyNavbar from "../components/navbar";
import ActiveProjectsEmployee from "../components/ActiveProjectsEmployee";

const Employee = () => {
  return (
    <div>
      <MyNavbar></MyNavbar>
      <FetchUsername />
      <ActiveProjectsEmployee></ActiveProjectsEmployee>
    </div>
  );
};

export default Employee;
