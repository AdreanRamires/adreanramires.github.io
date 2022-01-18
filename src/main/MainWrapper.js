import React, { useState } from "react";
import styles from "./MainWrapper.module.css";
import Aside from "./Aside/Aside";
import InnerWrapper from "./InnerWrapper";
import Login from "./Login/Login";

const MainWrapper = () => {
  return (
    <section className={styles["main-wrapper"]}>
      <Aside />
      <InnerWrapper />
    </section>
  );
};

export default MainWrapper;
