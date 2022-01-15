import React from "react";
import styles from "./Common.module.css";
import individual from './Steps.module.css';

const Steps = () => {
  return (
    <div className={styles.card}>
      <div className={`${styles["icon-wrapper"]} ${individual['icon-wrapper']}`}>
        <i className={`fas fa-walking ${styles.icon} ${individual.icon}`}></i>
      </div>
      <div className={styles.content}>
        <p className={styles.title}>Steps</p>
        <p className={styles.value}>7462</p>
        <p className={styles.average}>daily average</p>
      </div>
    </div>
  );
};

export default Steps;
