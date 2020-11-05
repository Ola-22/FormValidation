import React from "react";
import "./style.css";
import google from "../img/google.png";
import twitter from "../img/twitter.png";
import linkedin from "../img/linkedin.png";
import github from "../img/github.png";

function JoinGame() {
  return (
    <div className="game">
      <h1 className="title">Join the game!</h1>
      <p className="content">Go inside the best gamers social network!</p>
      <div className="shuffle-img">
        <div className="images">
          <img src={google} alt="google" />
        </div>
        <div className="images">
          <img src={twitter} alt="twitter" />
        </div>
        <div className="images">
          <img src={linkedin} alt="linkedin" />
        </div>
        <div className="images">
          <img src={github} alt="github" />
        </div>
      </div>
    </div>
  );
}

export default JoinGame;
