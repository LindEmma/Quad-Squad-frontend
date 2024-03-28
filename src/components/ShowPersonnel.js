import React, { useState, useEffect } from "react";
import Axios from "axios";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

function ShowPersonnel() {
  const [personnelData, setPersonnelData] = useState([]);
  const [openState, setOpenState] = useState({});

  useEffect(() => {
    const getPersonneldata = async () => {
      try {
        const response = await Axios.post(
          "http://localhost:8001/PersonnelInfo"
        );
        setPersonnelData(response.data.results);
      } catch (error) {
        console.error("Error fetching personnel data:", error);
      }
    };

    getPersonneldata();
  }, []);

  const toggleOpen = (id) => {
    //makes sure the collapse button does not open several at once (same name on personnel for example)
    setOpenState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const hasTimeReports = (project) => {
    //checks if there is any timereports for the project
    return project.timereport.length > 0;
  };

  if (personnelData.length === 0) {
    return <p>Sidan laddas...</p>;
  }

  return (
    <div className="Data">
      <h1 className="Projects-h1">Anställda</h1>
      <br></br>

      {personnelData.map(
        (
          person // maps through each persons name, id and role
        ) => (
          <div key={person.id}>
            <div className="card row">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="col-auto">
                    {person.properties.Role.multi_select[0]?.name}
                    <h2 className="card-title">
                      {person.properties.Name.title[0]?.plain_text} (
                      {person.properties.EmployeID.rich_text[0]?.plain_text})
                    </h2>
                  </div>
                  <div className="col-auto">
                    <Button
                      onClick={() => toggleOpen(person.id)}
                      aria-controls={`project-collapse-${person.id}`}
                      aria-expanded={openState[person.id]}
                      disabled={person.projects.length === 0}
                    >
                      {openState[person.id] ? (
                        <p className="p-0 mb-2 mt-0">Stäng tidsrapporter</p> //button text changes depending of openState
                      ) : (
                        <p className="p-0 mb-2 mt-0">Se tidsrapporter</p>
                      )}
                    </Button>
                  </div>
                </div>
                <br />
                <Collapse in={openState[person.id]}>
                  <div id={`project-collapse-${person.id}`}>
                    {person.projects.map(
                      (
                        project,
                        index //maps through the projectnames each person is linked to
                      ) => (
                        <div key={project.id}>
                          <div className="d-flex  justify-content-between">
                            <div className="col">
                              <h5>
                                {
                                  project.properties.Projectname.title[0]
                                    ?.plain_text
                                }
                              </h5>
                            </div>
                            <div className="col">
                              {hasTimeReports(project) ? (
                                project.timereport.map(
                                  (
                                    report,
                                    index //maps through the timereports for each project and person
                                  ) => (
                                    <div
                                      key={report.id}
                                      className={`d-flex ${
                                        index !== project.timereport.length - 1
                                          ? "mb-2" //adds marginal if it's not the last timereport on the list
                                          : ""
                                      }`}
                                    >
                                      <p>
                                        {report.properties.Date.date.start}
                                        :&nbsp;
                                      </p>
                                      <p>
                                        {report.properties.Hours.number} timmar
                                      </p>
                                    </div>
                                  )
                                )
                              ) : (
                                <p>Det finns inga rapporterade tider</p>
                              )}
                            </div>
                          </div>
                          {index !== person.projects.length - 1 && (
                            // adds a line under each project except for the last one
                            <hr className="my-3" />
                          )}
                        </div>
                      )
                    )}
                  </div>
                </Collapse>
              </div>
            </div>
            <br />
          </div>
        )
      )}
    </div>
  );
}
export default ShowPersonnel;
