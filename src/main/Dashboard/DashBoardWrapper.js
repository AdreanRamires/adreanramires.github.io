import React from "react";
import styles from "./DashBoardWrapper.module.css";
import Daily from "../../components/Monitoring/DailyMonitoring";
import MidSectionWrapper from "./MidSectionWrapper";

const DashBoardWrapper = () => {
  return (
    <div className={styles["wrapper"]}>
      <Daily />
      <MidSectionWrapper />
    </div>
  );
};

export default DashBoardWrapper;
