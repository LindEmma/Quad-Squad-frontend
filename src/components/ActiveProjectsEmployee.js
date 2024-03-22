import React, { useState, useEffect } from "react";
import Axios from "axios";
import ModalPopUp from "./ModalPopUp.js";

function ActiveProjectsEmployee() {
  const [APIData, setAPIData] = useState([]);

  const getAPIdata = (e) => {
    Axios.post("http://localhost:8000/ActiveProjects")
      .then((response) => {
        const filteredData = response.data.results.filter((item) => {
          return item.properties.Status.select.name === "Active";
        });
        setAPIData(filteredData);
        console.log(filteredData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAPIdata();
  }, []);

  if (!APIData) {
    return <p>Det finns inga aktiva projekt just nu</p>;
  }

  return (
    <div className="Data">
      <h1 className="Projects-h1">Aktiva projekt</h1>

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
