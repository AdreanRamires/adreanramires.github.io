import React from "react";
import styles from "./Common.module.css";
import individual from "./Exercise.module.css";

const Exercise = () => {
  return (
    <div className={styles.card}>
      <div
        className={`${styles["icon-wrapper"]} ${individual["icon-wrapper"]}`}
      >
        <i className={`fas fa-dumbbell ${styles.icon} ${individual.icon}`}></i>
      </div>
      <div className={styles.content}>
        <p className={styles.title}>Exercise</p>
        <p className={styles.value}>
          1<span className={individual.time}> h </span>23<span className={individual.time}> min </span>
        </p>
        <p className={styles.average}>daily average</p>
      </div>
    </div>
  );
};

export default Exercise;
