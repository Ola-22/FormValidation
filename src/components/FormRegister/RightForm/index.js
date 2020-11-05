import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import { withRouter } from "react-router-dom";

function RightForm(props) {
  return (
    <div className="main_right">
      <div className="back">
        <FontAwesomeIcon className="angle_left" icon={faAngleLeft} />
        <p onClick={() => props.history.goBack()}>back</p>
      </div>
      <div className="form_box">
        <h2 className="form_title">Register Individual Account!</h2>
        <p>
          For the purpose of gamers regulation, your
          <br />
          details are required.
        </p>
      </div>
    </div>
  );
}
export default withRouter(RightForm);

// export default RightForm;
