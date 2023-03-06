import React from "react";
import moment from "moment";

import { byPlant } from "~lib/dummy";

import styles from "~styles/components/masterplan/byplant.module.scss";

const ByPlant = () => {
  return (
    <div className={styles.container}>
      <div className={styles.currentPlantContainer}>
        <div className={styles.plantDetailsContainer}>
          <div className={styles.plantImage}></div>
          <div className={styles.plantInfoContainer}>
            <h3>{byPlant.currentPlant.name}</h3>
            <h4>{byPlant.currentPlant.variety}</h4>
            <h5>{byPlant.currentPlant.description}</h5>
          </div>
        </div>
        <div className={styles.plantOptionsContainer}>
          {byPlant.plantOptions.map((option, i) => (
            <div className={styles.plantOptionRow} key={i}>
              <h3>{option.name}</h3>
              <h4>{moment(option.date).format("MMMM Do, YYYY")}</h4>
              <h5>{option.status}</h5>
            </div>
          ))}
          <button className={styles.editButton}>Edit</button>
        </div>
      </div>

      <div className={styles.plantsContainer}>
        {byPlant.plants.map((plant, i) => (
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
    </div>
  );
};

export default ByPlant;
