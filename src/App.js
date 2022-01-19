import "./App.css";
import React, { useState } from "react";
import MainWrapper from "./main/MainWrapper";
import Login from "./main/Login/Login";

function App() {
  const [signedIn, setSignedIn] = useState(true);

  const onSignedInHandler = (props) => {
    setSignedIn((prevState) => {
      return !prevState;
    });
  };

  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center", color: "white", margin: "10px" }}>
        Design Test Version
        <p style={{ fontSize: "15px" }}>
          {signedIn
            ? "Press 'Sign in' to get to next page"
            : "Refresh the page to go back"}
        </p>
      </h1>

      {signedIn ? <Login signedIn={onSignedInHandler} /> : <MainWrapper />}
    </React.Fragment>
  );
}

export default App;
