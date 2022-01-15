import React from "react";
import styles from "./DailyMonitoring.module.css";
import Calories from "./Calories";
import Steps from "./Steps";
import Exercise from "./Exercise";
import Sleeping from "./Sleeping";

const DailyMonitoring = () => {
  return (
    <div>
      <p className={styles.title}>daily monitoring</p>
      <div className={styles["daily-cards"]}>
        <Calories />
        <Steps />
        <Exercise />
        <Sleeping />
      </div>
    </div>
  );
};

export default DailyMonitoring;
