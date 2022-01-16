import React, { useState } from "react";
import styles from "./MainWrapper.module.css";
import Aside from "./Aside/Aside";
import InnerWrapper from "./InnerWrapper";
import NavMenu from "./Mobile/NavMenu";

const MainWrapper = () => {
  return (
    <div className={styles["main-wrapper"]}>
      <Aside />
      <InnerWrapper />
    </div>
  );
};

export default MainWrapper;
