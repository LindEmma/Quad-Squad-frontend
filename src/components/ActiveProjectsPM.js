import React, { useState, useEffect } from "react";
import Axios from "axios";
import ProjectProgressBar from "./ProjectProgressBar";

function ActiveProjectsPM() {
  const [APIData, setAPIData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [filter, setFilter] = useState("active");

  useEffect(() => {
    //collects logged in users userID
    const storedUserID = JSON.parse(localStorage.getItem("userID"));

    //collects the data for projects connected to logged in user (server2)
    async function getAPIdata() {
      try {
        const response = await Axios.post(
          "http://localhost:8000/ActiveProjects",
          { storedUserID } //sends userID to server
        );
        const data = response.data.results;
        setAPIData(data);
        setOriginalData(data);
      } catch (error) {
        console.log(error);
      }
    }

    getAPIdata();
  }, []);

  //different filters for active, upcoming and done projects
  const filterData = () => {
    const filters = {
      active: (item) =>
        item.properties.Status.select &&
        item.properties.Status.select.name === "Active",
      done: (item) =>
        item.properties.Status.select &&
        item.properties.Status.select.name === "Done",
      nextUp: (item) =>
        item.properties.Status.select &&
        item.properties.Status.select.name === "Next up",
    };

    const filteredData = originalData.filter(filters[filter]);
    setAPIData(filteredData); // updates filtered results
  };

  useEffect(() => {
    filterData();
  }, [filter, originalData]);

  if (!APIData) {
    return <p>Det finns inga aktiva projekt just nu</p>;
  }

  return (
    <div className="Data">
      <h1 className="Projects-h1">Projekt du är projektledare för</h1>
      <br></br>

      <div className="text-end">
        {/* dropdown that lets user filter between active, upcoming and done projects */}
        <select
          id="filter"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="active">Aktiva projekt</option>
          <option value="done">Färdiga projekt</option>
          <option value="nextUp">Kommande projekt</option>
        </select>
        <br></br>
      </div>
      {APIData.map((data) => {
        //maps through the data in server2: projects connected to logged in user
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
                    <h6 className="fw-bold">Planerat slutdatum</h6>
                    <p className="date">{data.properties.Timespan.date.end}</p>
                  </div>
                  <div className="col-md-2"></div>
                  <div className="card-text col-md-4 rounded-3">
                    <h6>Summering</h6>

                    <ul className="list-group">
                      <li className="list-group-item">
                        Totalt arbetade timmar:
                        <span className="badge">
                          {data.properties.WorkedHours.rollup.number}
                        </span>
                        <span className="badge">
                          Senaste veckan:{" "}
                          {data.properties.HoursLastWeek.rollup.number}
                        </span>
                      </li>

                      <li className="list-group-item">
                        Totalt planerade timmar:{" "}
                        <span className="badge">
                          {" "}
                          {data.properties.Hours.number}
                        </span>
                      </li>
                      <li className="list-group-item">
                        Timmar kvar i projektet:{" "}
                        <span className="badge">
                          {data.properties.HoursLeft.formula.number}
                        </span>
                      </li>
                    </ul>
                    <br></br>
                    <ProjectProgressBar //Progress bar shows the advancement of a project
                      percent={data.properties.PercentFinished.formula.number}
                      variant={data.properties.ProgressBarColour.formula.string}
                    ></ProjectProgressBar>
                    <br></br>
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
export default ActiveProjectsPM;
