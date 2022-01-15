import React from "react";
import styles from "./MidSectionWrapper.module.css";
import Challenge from "../../components/Challenge/Challenge";
import Tips from "../../components/Tips/Tips";

const MidSectionWrapper = () => {
  return (
    <div className={styles.wrapper}>
      <Challenge />
      <Tips />
    </div>
  );
};

export default MidSectionWrapper;
