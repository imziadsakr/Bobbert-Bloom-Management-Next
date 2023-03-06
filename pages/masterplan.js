import React, { useState } from "react";

import styles from "~styles/pages/masterplan.module.scss";

import Sidebar from "~components/Sidebar";
import Calendar from "~components/masterplan/Calendar";
import List from "~components/masterplan/List";
import ByPlant from "~components/masterplan/ByPlant";

const MasterPlan = () => {
  const [activeTab, setActiveTab] = useState("calendar");

  return (
    <div className={styles.screen}>
      <Sidebar />
      <div className={styles.container}>
        <h1 className={styles.header}>2022 Season</h1>
        <h2 className={styles.subHeader}>Master Plan</h2>

        <div className={styles.tabsContainer}>
          <div
            onClick={() => setActiveTab("calendar")}
            className={`${styles.tab} ${
              activeTab === "calendar" ? styles.active : null
            }`}
          >
            <h2>Calendar</h2>
          </div>
          <div
            onClick={() => setActiveTab("list")}
            className={`${styles.tab} ${
              activeTab === "list" ? styles.active : null
            }`}
          >
            <h2>List</h2>
          </div>
          <div
            onClick={() => setActiveTab("plant")}
            className={`${styles.tab} ${
              activeTab === "plant" ? styles.active : null
            }`}
          >
            <h2>By Plant</h2>
          </div>
        </div>

        <div className={styles.contentContainer}>
          {activeTab === "calendar" && <Calendar />}
          {activeTab === "list" && <List />}
          {activeTab === "plant" && <ByPlant />}
        </div>
      </div>
    </div>
  );
};

export default MasterPlan;
