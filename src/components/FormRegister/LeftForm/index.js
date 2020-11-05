import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import img1 from "../img.jpg";
import Gamers from "../Gamers";
// import RightForm from "../RightForm";
import Vector from "../Vector";

function LeftForm() {
  return (
    <div className="main">
      <div className="left">
        <div className="overlay"></div>

        <img src={img1} alt="img" className="imageOne" />
        <div className="left_box">
          <Gamers />
          <div className="main_par">
            <FontAwesomeIcon className="quote" icon={faQuoteLeft} />
            <p className="para">
              I always observe the people who pass by when I<br />
              ride an escalator. I'll never see most of them
              <br />
              again, so I imagine a lot of things about their
              <br />
              lives... about the day ahead of them.
            </p>
            <p className="para_hideo">Hideo Kojima</p>
          </div>
          <div className="vector">
            <Vector />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftForm;
