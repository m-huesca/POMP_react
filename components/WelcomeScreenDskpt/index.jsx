import React from "react";
import Input from "../Input";
import MainButton from "../MainButton";
import MainButton2 from "../MainButton2";
import "./WelcomeScreenDskpt.css";

function WelcomeScreenDskpt(props) {
  const { overlapGroup, menu, logoFinalBlanco3, subtitle } = props;

  return (
    <div className="container-center-horizontal">
      <div className="welcome-screen-dskpt screen">
        <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup})` }}>
          <img className="menu" src={menu} alt="Menu" />
          <div className="overlap-group1">
            <img className="logo-final-blanco-3" src={logoFinalBlanco3} alt="LOGO FINAL-blanco 3" />
            <h1 className="subtitle">{subtitle}</h1>
            <Input />
            <MainButton />
          </div>
          <img className="line-1" src="/img/line-1-1@1x.svg" alt="Line 1" />
          <MainButton2 />
        </div>
      </div>
    </div>
  );
}

export default WelcomeScreenDskpt;
