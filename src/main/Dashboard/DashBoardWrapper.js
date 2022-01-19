import React from "react";
import styles from "./DashBoardWrapper.module.css";
import Daily from "../../components/Monitoring/DailyMonitoring";
import MidSectionWrapper from "./MidSectionWrapper";
import Challenge from "../../components/Challenge/Challenge";
import Tips from "../../components/Tips/Tips";

const DashBoardWrapper = () => {
  return (
    <section className={styles["wrapper"]}>
      <Daily />
      <MidSectionWrapper />
    </section>
  );
};

export default DashBoardWrapper;
