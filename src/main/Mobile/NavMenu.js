import React, { useState } from "react";
import styles from "./NavMenu.module.css";

const NavMenu = (props) => {
  const visible = props.menuState;

  return (
    <nav
      className={`${styles["nav-menu"]} ${visible ? `${styles.active}` : ""}`}
    >
      <ul className={styles["nav-ul"]}>
        <li className={styles["nav-li"]}>
          <i className={`fas fa-home ${styles.icon}`}></i>{" "}
          <a href="" className={styles.link}>
            home
          </a>
        </li>

        <li className={styles["nav-li"]}>
          <i className={`fas fa-chart-line ${styles.icon}`}></i>{" "}
          <a href="" className={styles.link}>
            daily plan
          </a>
        </li>

        <li className={styles["nav-li"]}>
          <i className={`far fa-calendar-check ${styles.icon}`}></i>{" "}
          <a href="" className={styles.link}>
            progress
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
