import React from "react";
import styles from "./ProfileMenu.module.css";
import image from "../../assets/images/profile-img.jpg";

const ProfileMenu = () => {
  return (
    <div className={styles["profile-wrapper"]}>
      <div className={styles["bell-wrapper"]}>
        <i className={`far fa-bell ${styles.icon}`}></i>
        <span className={styles.status}></span>
      </div>
      <img src={image} alt="" className={styles["profile-image"]} />
      <p className={styles.username}>Adrean Ramires</p>
      <i className="fas fa-chevron-down"></i>

      <nav className={styles["nav-menu"]}>
        <ul className={styles["nav-ul"]}>
          <li className={styles["nav-li"]}>
            <i className={`${"far fa-envelope"} ${styles.icon}`}></i>
            <a href="" className={styles.link}>
              messages
            </a>
          </li>

          <li className={styles["nav-li"]}>
            <i className={`fas fa-users ${styles.icon}`}></i>
            <a href="" className={styles.link}>
              friends
            </a>
          </li>

          <li className={styles["nav-li"]}>
            <i className={`far fa-address-card ${styles.icon}`}></i>
            <a href="" className={styles.link}>
              profile
            </a>
          </li>

          <li className={styles["nav-li"]}>
            <i className={`fas fa-sign-out-alt ${styles.icon}`}></i>
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
