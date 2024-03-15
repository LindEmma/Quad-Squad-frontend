import React, { useState, useEffect } from "react";
import Axios from "axios";

function ProjectTable() {
  const [APIData, setAPIData] = useState([]);

  const getAPIdata = (e) => {
    Axios.post("http://localhost:8000/ActiveProjects")
      .then((response) => {
        setAPIData(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAPIdata();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="Data">
          <p>API DATA</p>
          {APIData.map((data) => {
            return (
              <div key={data.id}>
                <div className="card">
                  <div className="card-body">
                    <h2 className="card-title">
                      {data.properties.Projectname.title[0]?.plain_text}
                    </h2>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <div className="text-end">
                      <a
                        href="#"
                        class="btn btn-success"
                      >
                        Tidsrapportera
                      </a>
                    </div>
                  </div>
                </div>
                <br></br>
              </div>
            );
          })}
        </div>
      </header>
    </div>
  );
}
export default ProjectTable;
