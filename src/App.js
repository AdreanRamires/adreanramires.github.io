import "./App.css";
import React, { useState } from "react";
import MainWrapper from "./main/MainWrapper";
import Login from "./main/Login/Login";

function App() {
  const [signedIn, setSignedIn] = useState(true);

  const onSignedInHandler = (props) => {
    setSignedIn((prevState) => {
      return !prevState
    })
  }

  return (
    <React.Fragment>
      <h1 style={{ "textAlign": "center", color: "white", 'margin': '10px' }}>
        Design Alpha Test 1.04
      </h1>
      {signedIn ? <Login signedIn={onSignedInHandler} /> : <MainWrapper />}
    </React.Fragment>
  );
}

export default App;
