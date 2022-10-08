import React from "react";
import "./MainButton2.css";

function MainButton2(props) {
  const { className } = props;

  return (
    <div className={`main-button-3 ${className || ""}`}>
      <div className="title-3 inter-bold-porsche-16px">Log in</div>
    </div>
  );
}

export default MainButton2;
