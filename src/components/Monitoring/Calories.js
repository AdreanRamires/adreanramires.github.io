import React from "react";
import styles from "./Common.module.css";
import individual from "./Calories.module.css";

const Calories = () => {
  return (
    <div className={styles.card}>
      <div className={`${styles["icon-wrapper"]} ${individual['icon-wrapper']}`}>
        <i className={`fas fa-carrot ${styles.icon} ${individual.icon}`}></i>
      </div>
      <div className={styles.content}>
        <p className={styles.title}>Calories</p>
        <p className={styles.value}>2814</p>
        <p className={styles.average}>daily average</p>
      </div>
    </div>
  );
};

export default Calories;
