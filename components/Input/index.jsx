import React from "react";
import "./Input.css";

function Input(props) {
  const { className } = props;

  return (
    <div className={`input ${className || ""}`}>
      <div className="text-field">
        <p className="enter-your-community-code-here inter-normal-black-15px">Enter your community code here...</p>
      </div>
    </div>
  );
}

export default Input;
