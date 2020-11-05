import React from "react";
import "./style.css";

function button(props) {
  const { name, onClick, labelTxt } = props;
  return (
    <button className="btnRegister" name={name} onClick={onClick}>
      {labelTxt}
    </button>
  );
}
export default button;
