import React, { useState } from "react";
import styles from "./Navigation.module.css";
import NavMenu from "./NavMenu";

const Navigation = (props) => {
  const [menuState, setMenuState] = useState(false);

  const menuOnClickHandler = () => {
    setMenuState((prevState) => {
      return !prevState
    })
  };

  return (
    <div>
      <nav className={styles["nav-wrapper"]} onClick={menuOnClickHandler}>
        <span className={styles["mobile-menu-lines"]}></span>
        <span className={styles["mobile-menu-lines"]}></span>
        <span className={styles["mobile-menu-lines"]}></span>
      </nav>
      <NavMenu menuState={menuState}/>
    </div>
  );
};

export default Navigation;
