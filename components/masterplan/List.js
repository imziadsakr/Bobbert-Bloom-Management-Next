import React from "react";
import moment from "moment";

import { list } from "~lib/dummy";

import styles from "~styles/components/masterplan/list.module.scss";

const List = () => {
  return (
    <div className={styles.container}>
      <div className={styles.tasksContainer}>
        <h2 className={`${styles.tasksContainerTitle} ${styles.overdue}`}>
          Overdue
        </h2>
        <div className={styles.tasksScrollContainer}>
          {list.overdue.map((task, i) => (
            <div className={styles.taskContainer} key={i}>
              <div className={styles.taskInfo}>
                <h2>{task.name}</h2>
                <h3 className={styles.overdue}>
                  {moment(task.date).fromNow()}
                </h3>
              </div>
              <div className={`${styles.taskCap} ${styles.overdue}`}></div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.tasksContainer}>
        <h2 className={`${styles.tasksContainerTitle} `}>Today</h2>
        <div className={styles.tasksScrollContainer}>
          {list.today.map((task, i) => (
            <div className={styles.taskContainer} key={i}>
              <div className={styles.taskInfo}>
                <h2>{task.name}</h2>
                <h3>Today</h3>
              </div>
              <div className={`${styles.taskCap} ${styles.today}`}></div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.tasksContainer}>
        <h2 className={`${styles.tasksContainerTitle} `}>Tomorrow</h2>
        <div className={styles.tasksScrollContainer}>
          {list.tomorrow.map((task, i) => (
            <div className={styles.taskContainer} key={i}>
              <div className={styles.taskInfo}>
                <h2>{task.name}</h2>
                <h3>Tomorrow</h3>
              </div>
              <div className={`${styles.taskCap} ${styles.tomorrow}`}></div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.thisWeekContainer}>
        <h2>This Week</h2>
        <div className={styles.thisWeekScrollContainer}>
          {list.thisWeek.map((task, i) => (
            <div className={styles.thisWeekTaskContainer} key={i}>
              <h3>{task.name}</h3>
              <h4>{moment(task.date).format("dddd t\\h\\e Do")}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
