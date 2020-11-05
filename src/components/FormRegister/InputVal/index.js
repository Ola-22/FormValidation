import React from "react";
import "./style.css";

function InputVal(props) {
  const { name, type, onChange, value, placeholder, id, error } = props;
  return (
    <div className="input">
      <input
        name={name}
        type={type}
        id={id}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className="inputVal"
      />
      {error && <div className="errors">{error}</div>}
    </div>
  );
}
export default InputVal;
