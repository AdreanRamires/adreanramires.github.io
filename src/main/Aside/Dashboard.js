import React from "react";
import styles from "./Common.module.css";

const Dashboard = () => {
  return (
    <div className={styles.div}>
      <p className={styles.p}>dashboard</p>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <i className={`fas fa-home ${styles.i}`}></i>
          <a href="" className={styles.a}>home</a>
        </li>
        <li className={styles.li}>
          <i className={`far fa-calendar-check ${styles.i}`}></i>
          <a href="" className={styles.a}>daily plan</a>
        </li>
        <li className={styles.li}>
          <i className={`fas fa-chart-line ${styles.i}`}></i>
          <a href="" className={styles.a}>progress</a>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
