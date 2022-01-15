import React, { useState } from "react";
import styles from "./Navigation.module.css";

const Navigation = (props) => {
  const [menuStatus, setMenuStatus] = useState(false);

  const menuOnClickHandler = (event) => {
    props.upState("sucks");
  };

  return (
    <nav className={styles["nav-wrapper"]} onClick={menuOnClickHandler}>
      <span className={styles.span}></span>
      <span className={styles.span}></span>
      <span className={styles.span}></span>
    </nav>
  );
};

export default Navigation;
