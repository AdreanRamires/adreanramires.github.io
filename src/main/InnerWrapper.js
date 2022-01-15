import React from "react";
import styles from './InnerWrapper.module.css';
import Header from "./Header/Header";
import DashBoardWrapper from "./Dashboard/DashBoardWrapper";

const InnerWrapper = () => {
    return (
        <div className={styles['inner-wrapper']}>
            <Header/>
            <DashBoardWrapper/>
        </div>
    );
}

export default InnerWrapper;