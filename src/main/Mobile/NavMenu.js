import React, { useState } from "react";
import styles from "./NavMenu.module.css";

const NavMenu = (props) => {
  let display = props.stateDown;

  const btnOnClickHandler = () => {
    props.upState(false);
  };

  return (
    <div
      className={`${styles["nav-menu-wrapper"]} ${
        display ? `${styles.active}` : ""
      }`}
    >
      <button className={styles.btn} onClick={btnOnClickHandler}>
        X
      </button>
    </div>
  );
};

export default NavMenu;
