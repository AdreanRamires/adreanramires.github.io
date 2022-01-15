import React from "react";
import styles from "./Common.module.css";

const PersonalTips = () => {
  return (
    <div className={styles.div}>
      <p className={styles.p}>personal tips</p>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <i className={`fas fa-utensils ${styles.i}`}></i>
          <a href="" className={styles.a}>nutrition</a>
        </li>
        <li className={styles.li}>
          <i className={`fas fa-futbol ${styles.i}`}></i>
          <a href="" className={styles.a}>sport</a>
        </li>
        <li className={styles.li}>
          <i className={`fas fa-spa ${styles.i}`}></i>
          <a href="" className={styles.a}>beauty</a>
        </li>
        <li className={styles.li}>
          <i className={`far fa-heart ${styles.i}`}></i>
          <a href="" className={styles.a}>health</a>
        </li>
        <li className={styles.li}>
          <i className={`fas fa-brain ${styles.i}`}></i>
          <a href="" className={styles.a}>mindfulness</a>
        </li>
      </ul>
    </div>
  );
};

export default PersonalTips;
