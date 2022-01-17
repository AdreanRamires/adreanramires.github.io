import React from "react";
import styles from "./MidSectionWrapper.module.css";
import Challenge from "../../components/Challenge/Challenge";
import Tips from "../../components/Tips/Tips";

const MidSectionWrapper = () => {
  return (
    <section className={styles.wrapper}>
      <Challenge />
      <Tips />
    </section>
  );
};

export default MidSectionWrapper;
