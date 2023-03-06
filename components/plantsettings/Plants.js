import React from "react";

import { settingsPlants } from "~lib/dummy";

import styles from "~styles/components/plantsettings/plants.module.scss";

const Plants = () => {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.addCustomContainer}>
          <h2>Plants</h2>
          <button>Add New Custom</button>
        </div>
        <button className={styles.searchButton}>Search</button>
      </div>
      <div className={styles.plantsContainer}>
        {settingsPlants.map((plant, i) => (
          <div className={styles.plantContainer} key={i}>
            <div className={styles.plantImage}></div>
            <div className={styles.plantInfoContainer}>
              <h3>{plant.name}</h3>
              <h4>{plant.variety}</h4>
              <h5>{plant.description}</h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Plants;
