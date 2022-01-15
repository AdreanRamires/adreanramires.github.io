import React from "react";

import styles from "./MainWrapper.module.css";
import Aside from "./Aside/Aside";
import InnerWrapper from "./InnerWrapper";

const MainWrapper = () => {
  return (
    <div className={styles["main-wrapper"]}>
      <Aside />
      <InnerWrapper/>
    </div>
  );
};

export default MainWrapper;
