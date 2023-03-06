import React from "react";

import { availablePlans } from "~lib/dummy";

import styles from "~styles/components/modifyplan/availableplans.module.scss";

const AvailablePlans = () => {
  return (
    <>
      <div className={styles.headerContainer}>
        <h2>Available</h2>
        <button className={styles.searchButton}>Search</button>
      </div>
      <div className={styles.plansContainer}>
        {availablePlans.map((plan, i) => (
          <div className={styles.planContainer} key={i}>
            <div className={styles.planImage}></div>
            <div className={styles.planInfoContainer}>
              <h3>{plan.name}</h3>
              <h4>{plan.variety}</h4>
              <h5>{plan.description}</h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AvailablePlans;
