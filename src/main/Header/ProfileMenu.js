import React, { useState } from "react";
import styles from "./ProfileMenu.module.css";
import image from "../../assets/images/profile-img.jpg";

const ProfileMenu = () => {
  const [menuState, setMenuState] = useState(false);

  const menuStateHandler = () => {
    setMenuState((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className={styles["profile-wrapper"]}>
      <div className={styles["bell-wrapper"]}>
        <i className={`far fa-bell ${styles.icon}`}></i>
        <span className={styles.status}></span>
      </div>
      <img src={image} alt="" className={styles["profile-image"]} />
      <p className={styles.username}>Adrean Ramires</p>
      <i
        id="nav-btn"
        className={`${menuState ? `fas fa-times` : "fas fa-chevron-down"} ${
          menuState ? styles["chevron-open"] : styles["chevron-closed"]
        }`}
        onClick={menuStateHandler}
      ></i>

      <nav
        id="nav-menu"
        className={`${styles["nav-menu"]} ${menuState ? styles.active : ""}`}
      >
        <ul className={styles["nav-ul"]}>
          <li className={styles["nav-li"]}>
            <i className={`${"far fa-envelope"} ${styles["icon-menu"]}`}></i>
            <a href="" className={styles.link}>
              messages
            </a>
          </li>

          <li className={styles["nav-li"]}>
            <i className={`fas fa-users ${styles["icon-menu"]}`}></i>
            <a href="" className={styles.link}>
              friends
            </a>
          </li>

          <li className={styles["nav-li"]}>
            <i className={`far fa-address-card ${styles["icon-menu"]}`}></i>
            <a href="" className={styles.link}>
              profile
            </a>
          </li>

          <li className={styles["nav-li"]}>
            <i className={`fas fa-sign-out-alt ${styles["icon-menu"]}`}></i>
            <a href="" className={styles.link}>
              sign out
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ProfileMenu;
