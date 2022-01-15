import React from "react";
import styles from "./Tips.module.css";

const Tips = () => {
  return (
    <div className={styles.tips}>
      <p className={styles.heading}>Daily Tips</p>

      <section className={styles.section}>
        <article className={styles.article}>
          <h3 className={styles.title}>Mindfulness</h3>
          <p className={styles.content}>
            Do one-hour yoga improving your body balance, flexibility and
            strength.
          </p>
          <a href="" className={styles.link}>
            <i className={`${"fas fa-chevron-right"} ${styles.icon}`}></i> Find
            out more
          </a>
        </article>

        <article className={styles.article}>
          <h3 className={styles.title}>Get more of your day</h3>
          <p className={styles.content}>
            Wake up 40 min before the usual and go for a morning walk in the
            park.
          </p>
          <a href="" className={styles.link}>
            <i className={`${"fas fa-chevron-right"} ${styles.icon}`}></i> Find
            out more
          </a>
        </article>

        <article className={styles.article}>
          <h3 className={styles.title}>Early bedtime</h3>
          <p className={styles.content}>
            Go to sleep more at the same hour every night.
          </p>
          <a href="" className={styles.link}>
            <i className={`${"fas fa-chevron-right"} ${styles.icon}`}></i> Find
            out more
          </a>
        </article>
      </section>
    </div>
  );
};

export default Tips;
