import React, { useState } from "react";
import moment from "moment";

import { weather, accountStats, progress } from "~lib/dummy";

import styles from "~styles/pages/dashboard.module.scss";

import Sidebar from "~components/Sidebar";

const Dashboard = () => {
  const [name, setName] = useState("Noah");

  return (
    <div className={styles.screen}>
      <Sidebar />
      <div className={styles.container}>
        <h1 className={styles.header}>2022 Season</h1>
        <h2 className={styles.subHeader}>Dashboard</h2>
        <div className={styles.dashboardRow}>
          <div className={styles.greetingContainer}>
            <h3>Welcome back, {name}!</h3>
            <h4>{moment().format("MMMM Do, YYYY")}</h4>
          </div>
          {weather.map((stat, i) => (
            <div className={styles.weatherContainer} key={i}>
              <i className={`wi ${stat.icon} ${styles.weatherIcon}`}></i>
              <h5>{stat.temp}°</h5>
              <h6>
                {stat.percent}% of {stat.mm}mm
              </h6>
            </div>
          ))}
        </div>
        <div className={styles.dashboardRow}>
          <div className={styles.statContainer}>
            <h2>{accountStats.tasksToday}</h2>
            <h3>TASKS TODAY</h3>
          </div>
          <div className={`${styles.statContainer} ${styles.tomorrow}`}>
            <h2>{accountStats.tasksTomorrow}</h2>
            <h3>TASKS TOMORROW</h3>
          </div>
          <div className={`${styles.statContainer} ${styles.overdue}`}>
            <h2>{accountStats.tasksOverdue}</h2>
            <h3>OVERDUE TASKS</h3>
          </div>
          <div className={`${styles.statContainer} ${styles.wide}`}>
            <h2>{accountStats.plants.toLocaleString()}</h2>
            <h3>PLANTS THIS SEASON</h3>
          </div>
        </div>
        <div className={styles.dashboardRow}>
          <div className={styles.progressContainer}>
            <h2>PROGRESS</h2>

            <div className={styles.progressBarsContainer}>
              {progress.map((category, i) => (
                <React.Fragment key={i}>
                  <h5>{category.title}</h5>
                  <div className={styles.progressBarContainer}>
                    <div
                      className={styles.progressBarProgress}
                      style={{ width: `${category.progress}%` }}
                    ></div>
                  </div>
                </React.Fragment>
              ))}
            </div>

            <button className={styles.shareButton}>SHARE</button>
          </div>

          <div className={styles.dashboardImagesContainer}>
            <div className={styles.dashboardImage}></div>
            <div className={styles.dashboardImage}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
