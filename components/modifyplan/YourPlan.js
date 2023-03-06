import React from "react";

import { yourPlan } from "~lib/dummy";

import styles from "~styles/components/modifyplan/yourplan.module.scss";

const YourPlan = () => {
  return (
    <div className={styles.container}>
      <h2>Your Plan</h2>

      <div className={styles.scrollContainer}>
        {yourPlan.map((plan, i) => (
          <div className={styles.planContainer} key={i}>
            <div className={styles.planHeader}>
              <h3>{plan.name}</h3>
              <h3>{plan.count}ct</h3>
            </div>
            <h4 className={styles.planSpecies}>{plan.species}</h4>
            <div className={styles.planOptionsContainer}>
              <h5>Start</h5>
              <h5>Regular</h5>
              <h5>Pinch</h5>
              <h5>Pot On</h5>
            </div>
            {plan.notes && <h6 className={styles.planNotes}>{plan.notes}</h6>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourPlan;
