import ProgressBar from "react-bootstrap/ProgressBar";
import React from "react";

//Progressbar that takes in props
function ProjectProgressBar(props) {
  return (
    <div>
      <h7>{props.percent}% av projektet avklarat</h7>
      <ProgressBar
        variant={props.variant}
        now={props.percent}
      />
    </div>
  );
}

export default ProjectProgressBar;
