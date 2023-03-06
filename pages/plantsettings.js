import React from "react";

import styles from "~styles/pages/plantsettings.module.scss";

import Sidebar from "~components/Sidebar";
import PlantSettingsTuner from "~components/plantsettings/PlantSettingsTuner";
import Plants from "~components/plantsettings/Plants";

const PlantSettings = () => {
  return (
    <div className={styles.screen}>
      <Sidebar />
      <div className={styles.container}>
        <h1 className={styles.header}>2022 Season</h1>
        <h2 className={styles.subHeader}>Settings</h2>
        <PlantSettingsTuner />
        <Plants />
      </div>
    </div>
  );
};

export default PlantSettings;
