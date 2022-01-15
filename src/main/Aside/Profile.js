import React from "react";
import styles from "./Profile.module.css";
import image from "../../assets/images/profile-img.jpg";

const Profile = () => {
  return (
    <div className={styles.div}>
      <img src={image} alt="" className={styles.image} />
      <p className={styles.p}>daily points</p>
      <span className={styles.span}>2,466</span>
    </div>
  );
};

export default Profile;
