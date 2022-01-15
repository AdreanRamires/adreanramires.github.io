import React from "react";
import styles from "./Navigation.module.css";

const Navigation = (props) => {
  const menuOnClickHandler = (event) => {};

  return (
    <nav className={styles["nav-wrapper"]} onClick={menuOnClickHandler}>
      <span className={styles.span}></span>
      <span className={styles.span}></span>
      <span className={styles.span}></span>
    </nav>
  );
};

export default Navigation;
