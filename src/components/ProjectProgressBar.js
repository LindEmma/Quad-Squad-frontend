import ProgressBar from "react-bootstrap/ProgressBar";
import React from "react";

//Progressbar that takes in props for how many percent and which variant (default or danger)
function ProjectProgressBar(props) {
  return (
    <div>
      <h7>{props.percent}% av projektet avklarat</h7>
      <ProgressBar
        variant={props.variant} // will be red if more than 100%
        now={props.percent}
      />
    </div>
  );
}

export default ProjectProgressBar;
