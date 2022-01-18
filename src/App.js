import "./App.css";
import React, { useState } from "react";
import MainWrapper from "./main/MainWrapper";
import Login from "./main/Login/Login";

function App() {
  const [signedIn, setSignedIn] = useState(true);

  return (
    <React.Fragment>{signedIn ? <Login /> : <MainWrapper />}</React.Fragment>
  );
}

export default App;
