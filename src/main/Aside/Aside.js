import React from "react";
import styles from "./Aside.module.css";
import AsideNav from './AsideNav';

const Aside = () => {
  return (
    <aside className={styles["aside"]}>
      <AsideNav />
    </aside>
  );
};

export default Aside;
