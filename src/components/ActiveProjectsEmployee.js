import React, { useState, useEffect } from "react";
import ModalPopUp from "./ModalPopUp.js";
import axios from "axios";

function ActiveProjectsEmployee() {
  const [currentUser, setCurrentUser] = useState(null);
  const [activeProjects, setActiveProjects] = useState(null);

  useEffect(() => {
    const storedUserID = JSON.parse(localStorage.getItem("userID")); // hämtar userID från localstorage
  
    async function fetchUsername(){
      try {
        const response = await axios.get(
          "http://localhost:4000/usernameAndRole"
        );
        if (response.status === 200) {
          const userData = response.data;
          setCurrentUser(userData.userName);
        } else {
          console.log("Failed to fetch user name");
        }
      } catch (error) {
        console.log("Error fetching user name: ", error);
      }
    }
    fetchUsername();
  
    async function getActiveProjects() {
      try {
        const response = await axios.post("http://localhost:8000/ActiveProjects", { storedUserID });
        if (response.status === 200) {
          const userProjects = response.data.results.filter((project) => {
            const isActive = project.properties.Status.select.name === "Active";
            return isActive;
          });

          if (userProjects.length > 0) {
            setActiveProjects(userProjects);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
    
    getActiveProjects();
  }, []);

  if (!activeProjects) {
    return <p>Det finns inga aktiva projekt för {currentUser} just nu</p>;
  }
  
  return (
    <div className="Data">
      <h1 className="Projects-h1">Aktiva projekt för {currentUser}</h1>

      {activeProjects.map((data) => {
        return (
          <div key={data.id}>
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">
                  {data.properties.Projectname.title[0]?.plain_text}
                </h2>

                <div className="row">
                  <div className="date-container col-md-3">
                    <h6>Startdatum</h6>
                    <p className="date">
                      {data.properties.Timespan.date.start}
                    </p>
                  </div>
                  <div className="date-container col-md-3">
                    <h6>Planerat slutdatum</h6>
                    <p className="date">{data.properties.Timespan.date.end}</p>
                  </div>
                  <div className="col-md-3"></div>
                  <div className="btn-container text-end col-md-3">
                    <ModalPopUp data={data}></ModalPopUp>
                  </div>
                  <div className="text-end">
                    <button className="btn">Gamla tidsrapporter</button>
                  </div>
                </div>
              </div>
            </div>
            <br></br>
          </div>
        );
      })}
    </div>
  );
}

export default ActiveProjectsEmployee;