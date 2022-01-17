import React from "react";
import styles from "./DailyMonitoring.module.css";
import Calories from "./Calories";
import Steps from "./Steps";
import Exercise from "./Exercise";
import Sleeping from "./Sleeping";

const DailyMonitoring = () => {
  return (
    <React.Fragment>
      <p className={styles.title}>daily monitoring</p>
      <section className={styles["daily-cards"]}>
        <Calories />
        <Steps />
        <Exercise />
        <Sleeping />
      </section>
    </React.Fragment>
  );
};

export default DailyMonitoring;
