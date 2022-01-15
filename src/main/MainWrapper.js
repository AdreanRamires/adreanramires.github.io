import React, { useState } from "react";
import styles from "./MainWrapper.module.css";
import Aside from "./Aside/Aside";
import InnerWrapper from "./InnerWrapper";
import NavMenu from "./Mobile/NavMenu";

const MainWrapper = () => {
  const [downState, setDownState] = useState(false);

  const upStateHandler = (upState) => {
    setDownState((prevState) => {
      return prevState ? false : true;
    });
  };

  return (
    <div className={styles["main-wrapper"]}>
      <NavMenu stateDown={downState} upState={upStateHandler} />
      <Aside />
      <InnerWrapper upState={upStateHandler} />
    </div>
  );
};

export default MainWrapper;
