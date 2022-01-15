import React from "react";
import styles from "./AsideNav.module.css";
import Dashboard from "./Dashboard";
import PersonalTips from "./PersonalTips";
import Profile from "./Profile";

const AsideNav = () => {
  return (
    <nav className={styles["aside-nav"]}>
      <Profile />
      <Dashboard />
      <PersonalTips />
    </nav>
  );
};

export default AsideNav;
