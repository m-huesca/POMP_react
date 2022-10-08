import React from "react";
import "./MainButton.css";

function MainButton(props) {
  const { className } = props;

  return (
    <div className={`main-button ${className || ""}`}>
      <div className="title inter-bold-white-18px">Start</div>
    </div>
  );
}

export default MainButton;
