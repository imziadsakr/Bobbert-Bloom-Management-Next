import React, { useState } from "react";

import { currentPlan } from "~lib/dummy";

import styles from "~styles/components/modifyplan/currentplan.module.scss";

const CurrentPlan = () => {
  const [pinchCheckbox, setPinchCheckbox] = useState(false);
  const [potCheckbox, setPotCheckbox] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.currentPlanContainer}>
        <div className={styles.planDetailsContainer}>
          <div className={styles.planImage}></div>
          <div className={styles.planInfoContainer}>
            <h3>{currentPlan.name}</h3>
            <h4>{currentPlan.variety}</h4>
            <h5>{currentPlan.description}</h5>
          </div>
        </div>
        <div className={styles.planOptionsContainer}>
          <div className={styles.seedingRow}>
            <h4>Seeding</h4>
            <button>Direct Sow</button>
            <button>Direct Indoors</button>
          </div>
          <div className={styles.quantityRow}>
            <h4>Quantity</h4>
            <button># of seeds</button>
          </div>
          <div className={styles.harvestRow}>
            <h4>Harvest</h4>
            <button>Early</button>
            <button>Regular</button>
            <button>Late</button>
          </div>
          <div className={styles.successionContainer}>
            <div className={styles.successionTextContainer}>
              <h4>Sucessions</h4>
              <h5>You can always adjust spacing later.</h5>
            </div>
            <div className={styles.successionButtonsContainer}>
              <button># Plantings</button>
              <button>Days Between</button>
            </div>
            <div className={styles.successionCheckboxesContainer}>
              <div className={styles.successionCheckboxRow}>
                <h6>Pinch</h6>
                <div
                  onClick={() => setPinchCheckbox(!pinchCheckbox)}
                  className={`${styles.checkbox} ${
                    pinchCheckbox ? styles.active : null
                  }`}
                ></div>
              </div>
              <div className={styles.successionCheckboxRow}>
                <h6>Pot On</h6>
                <div
                  onClick={() => setPotCheckbox(!potCheckbox)}
                  className={`${styles.checkbox} ${
                    potCheckbox ? styles.active : null
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttonsContainer}>
        <button>Save</button>
        <button>Reset</button>
      </div>
    </div>
  );
};

export default CurrentPlan;
