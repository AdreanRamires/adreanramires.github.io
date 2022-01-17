import React from "react";
import styles from "./DashBoardWrapper.module.css";
import Daily from "../../components/Monitoring/DailyMonitoring";
import MidSectionWrapper from "./MidSectionWrapper";

const DashBoardWrapper = () => {
  return (
    <section className={styles["wrapper"]}>
      <Daily />
      <MidSectionWrapper />
    </section>
  );
};

export default DashBoardWrapper;
