import React from "react";
import styles from "./DailyMonitoring.module.css";
import Calories from "./Calories";
import Steps from "./Steps";
import Exercise from "./Exercise";
import Sleeping from "./Sleeping";

const DailyMonitoring = () => {
  return (
    <section className={styles.wrapper}>
      <p className={styles.title}>daily monitoring</p>
      <article className={styles["daily-cards"]}>
        <Calories />
        <Steps />
        <Exercise />
        <Sleeping />
      </article>
    </section>
  );
};

export default DailyMonitoring;
