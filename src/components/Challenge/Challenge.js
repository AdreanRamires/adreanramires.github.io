import React from "react";
import styles from "./Challenge.module.css";

const Challenge = () => {
  return (
    <div className={styles["challenge"]}>
      <p className={styles.title}>Challenge</p>

      <section className={styles.content}>
        <div className={styles.overlay}></div>
        <h3 className={styles["content-title"]}>
          <i className="fas fa-apple-alt"></i> early morning smoothie
        </h3>

        <p className={styles.details}>
          Start your day with energy. For breakfast, prepare a powerful and
          healthy smoothie rich in potassium and vitamin C. It will boost your
          metabolism.
        </p>

        <article className={styles.instructions}>
          <p className={styles["instructions-title"]}>recipe:</p>
          <div className={styles["instructions-wrapper"]}>
            <ul className={styles["instructions-ul"]}>
              <li>130g banana</li>

              <li>1 whole kiwi</li>

              <li>250mL orange juice</li>

              <li>3 spoons of yogurt</li>
            </ul>
            <p className={styles.calories}>420 cal</p>
          </div>
        </article>

        <div className={styles["btn-wrapper"]}>
          <a href="" className={styles["add-btn"]}>
            add challenge
          </a>
          <a href="" className={styles["challenge-btn"]}>
            challenge friend
          </a>
        </div>
      </section>
    </div>
  );
};

export default Challenge;
