import React from "react";
import styles from "./InnerWrapper.module.css";
import Header from "./Header/Header";
import DashBoardWrapper from "./Dashboard/DashBoardWrapper";

const InnerWrapper = (props) => {
  const upStateHanlder = (upState) => {
    props.upState(upState)
  };

  return (
    <div className={styles["inner-wrapper"]}>
      <Header upState={upStateHanlder} />
      <DashBoardWrapper />
    </div>
  );
};

export default InnerWrapper;
