import React from "react";
import styles from "./Common.module.css";
import individual from "./Sleeping.module.css";

const Sleeping = () => {
  return (
    <div className={styles.card}>
      <div
        className={`${styles["icon-wrapper"]} ${individual["icon-wrapper"]}`}
      >
        <i className={`fas fa-moon ${styles.icon} ${individual.icon}`}></i>
      </div>
      <div className={styles.content}>
        <p className={styles.title}>Sleep</p>
        <p className={styles.value}>
          7<span className={individual.time}> h </span>47
          <span className={individual.time}> min </span>
        </p>
        <p className={styles.average}>daily average</p>
      </div>
    </div>
  );
};

export default Sleeping;
