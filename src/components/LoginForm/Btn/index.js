import React from "react";
import "./style.css";

function button(props) {
  const { name, onClick, labelTxt } = props;
  return (
    <button className="btnReg" name={name} onClick={onClick}>
      {labelTxt}
    </button>
  );
}
export default button;
