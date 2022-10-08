import "./App.css";
import * as MuiMaterial from "@mui/material";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import WelcomeScreenDskpt from "./components/WelcomeScreenDskpt";
import WelcomeScreen from "./components/WelcomeScreen";

function App() {
  return (
    <MuiMaterial.ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/welcome-screen-dskpt">
            <WelcomeScreenDskpt
              overlapGroup="/img/gradient-pomp-4@1x.png"
              menu="/img/menu-1@2x.png"
              logoFinalBlanco3="/img/logo-final-blanco-3-1@1x.png"
              subtitle={
                <React.Fragment>
                  Find your web3 peer <br />
                  to embark in this journey
                </React.Fragment>
              }
            />
          </Route>
          <Route path="/welcome-screen-mob">
            <WelcomeScreen
              welcomeScreen="/img/gradient-pomp-3@1x.png"
              menu="/img/menu@2x.png"
              logoFinalBlanco3="/img/logo-final-blanco-3@2x.png"
              subtitle={
                <React.Fragment>
                  Find your web3 peer <br />
                  to embark in this journey
                </React.Fragment>
              }
              inputProps={welcomeScreen1Data.inputProps}
              mainButton1Props={welcomeScreen1Data.mainButton1Props}
              mainButton2Props={welcomeScreen1Data.mainButton2Props}
            />
          </Route>
          <Route path="/:path(|welcome-screen)">
            <WelcomeScreen
              welcomeScreen="/img/gradient-pomp-3@1x.png"
              menu="/img/menu@2x.png"
              logoFinalBlanco3="/img/logo-final-blanco-3@2x.png"
              subtitle={
                <React.Fragment>
                  Find your web3 peer <br />
                  to embark in this journey
                </React.Fragment>
              }
              inputProps={welcomeScreen2Data.inputProps}
              mainButton1Props={welcomeScreen2Data.mainButton1Props}
              mainButton2Props={welcomeScreen2Data.mainButton2Props}
            />
          </Route>
        </Switch>
      </Router>
    </MuiMaterial.ThemeProvider>
  );
}

export default App;
const theme = MuiMaterial.createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#B484CB",
    },
    error: {
      main: "#d32f2f",
    },
    warning: {
      main: "#fe943d",
    },
    info: {
      main: "#0ca1f1",
    },
    success: {
      main: "#68c86d",
    },
    text: {
      primary: "#ffffff",
    },
  },
  typography: {
    fontSize: 14,
  },
  shape: {
    borderRadius: 4,
  },
});
const input2Data = {
    className: "input-1",
};

const mainButton3Data = {
    className: "main-button-1",
};

const mainButton22Data = {
    className: "main-button-4",
};

const welcomeScreen1Data = {
    welcomeScreen: "/img/gradient-pomp-3@1x.png",
    menu: "/img/menu@2x.png",
    logoFinalBlanco3: "/img/logo-final-blanco-3@2x.png",
    subtitle: <React.Fragment>Find your web3 peer <br />to embark in this journey</React.Fragment>,
    inputProps: input2Data,
    mainButton1Props: mainButton3Data,
    mainButton2Props: mainButton22Data,
};

const input3Data = {
    className: "input-2",
};

const mainButton4Data = {
    className: "main-button-2",
};

const mainButton23Data = {
    className: "main-button-5",
};

const welcomeScreen2Data = {
    welcomeScreen: "/img/gradient-pomp-3@1x.png",
    menu: "/img/menu@2x.png",
    logoFinalBlanco3: "/img/logo-final-blanco-3@2x.png",
    subtitle: <React.Fragment>Find your web3 peer <br />to embark in this journey</React.Fragment>,
    inputProps: input3Data,
    mainButton1Props: mainButton4Data,
    mainButton2Props: mainButton23Data,
};

