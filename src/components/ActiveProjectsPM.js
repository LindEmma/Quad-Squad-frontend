import React, { useState, useEffect } from "react";
import Axios from "axios";
import ProjectProgressBar from "./ProjectProgressBar";

function ActiveProjectsPM() {
  const [APIData, setAPIData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [filter, setFilter] = useState("active");

  const getAPIdata = (e) => {
    Axios.post("http://localhost:8000/ActiveProjects")
      .then((response) => {
        const data = response.data.results;
        setAPIData(data);
        setOriginalData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
    getAPIdata();
  }, []);
  useEffect(() => {
    filterData();
  }, [filter, originalData]);

  if (!APIData) {
    return <p>Det finns inga aktiva projekt just nu</p>;
  }

  return (
    <div className="Data">
      <h1 className="Projects-h1">Projekt</h1>

      <div className="text-end">
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
                  <div className="card-text col-md-3 rounded-3">
                    <h6>Summering</h6>

                    <ul className="list-group">
                      <li className="list-group-item">
                        Arbetade timmar:
                        <span className="badge">
                          {data.properties.WorkedHours.rollup.number}
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
                    <ProjectProgressBar
                      percent={data.properties.PercentFinished.formula.number}
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
