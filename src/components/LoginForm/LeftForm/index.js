import React from "react";
import Gamers from "../Gamers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import img from "../img/superscene.png";
import "./style.css";

function LeftForm() {
  return (
    <div className="Left_form">
      <Gamers />
      <div className="main_left">
        <FontAwesomeIcon className="icon" icon={faQuoteLeft} />
        <p className="paragraph">
          I always observe the people who pass by when I<br />
          ride an escalator. I'll never see most of them
          <br />
          again, so I imagine a lot of things about their
          <br />
          lives... about the day ahead of them.
        </p>
      </div>
      <h5>Hideo Kojima</h5>
      <img src={img} alt="super" className="super" />
    </div>
  );
}

export default LeftForm;
