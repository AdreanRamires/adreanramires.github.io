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
    </div>
  );
};

export default ProfileMenu;
