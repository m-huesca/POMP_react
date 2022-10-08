import React from "react";
import Input from "../Input";
import MainButton from "../MainButton";
import MainButton2 from "../MainButton2";
import "./WelcomeScreen.css";

function WelcomeScreen(props) {
  const { welcomeScreen, menu, logoFinalBlanco3, subtitle, inputProps, mainButton1Props, mainButton2Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="welcome-screen-mob screen" style={{ backgroundImage: `url(${welcomeScreen})` }}>
        <img className="menu-1" src={menu} alt="Menu" />
        <img className="logo-final-blanco-3-1" src={logoFinalBlanco3} alt="LOGO FINAL-blanco 3" />
        <p className="subtitle-1 inter-bold-white-16px">{subtitle}</p>
        <Input className={inputProps.className} />
        <MainButton className={mainButton1Props.className} />
        <img className="line-1-1" src="/img/line-1@2x.svg" alt="Line 1" />
        <MainButton2 className={mainButton2Props.className} />
        <img className="social-footer" src="/img/social-footer@2x.svg" alt="Social Footer" />
      </div>
    </div>
  );
}

export default WelcomeScreen;
