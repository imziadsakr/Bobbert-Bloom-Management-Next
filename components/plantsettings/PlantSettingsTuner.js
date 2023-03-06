import React, { useState } from "react";

import styles from "~styles/components/plantsettings/plantsettingstuner.module.scss";

const PlantSettingsTuner = () => {
  const [plantSettings, setPlantSettings] = useState({
    name: "",
    species: "",
    earliestSeed: "",
    latestSeed: "",
    harden: "",
    transplant: "",
    maturity: "",
    light: "",
    depth: "",
    directSow: "",
    seedNote: "",
    transplantNote: "",
    harvestNote: "",
    pinchNote: "",
    pinch: "",
    harvestLength: "",
    pottingOn: "",
  });

  const [userSettings, setUserSettings] = useState({
    lastFrost: "",
    firstFrost: "",
    location: "",
    hardenTime: "",
  });

  return (
    <div className={styles.container}>
      {/* Plant Settings */}
      <div className={styles.plantSettingsContainer}>
        <div className={styles.plantSettingsPaper}>
          <div className={styles.plantSettingsColumn}>
            <div className={styles.plantSettingsRow}>
              <h3>Name</h3>
              <input
                type="text"
                value={plantSettings.name}
                onChange={(e) =>
                  setPlantSettings({ ...plantSettings, name: e.target.value })
                }
              />
            </div>
            <div className={styles.plantSettingsRow}>
              <h3>Species</h3>
              <input
                type="text"
                value={plantSettings.species}
                onChange={(e) =>
                  setPlantSettings({
                    ...plantSettings,
                    species: e.target.value,
                  })
                }
              />
            </div>
            <div className={styles.plantSettingsRow}>
              <h3>Earliest Seed</h3>
              <input
                type="text"
                value={plantSettings.earliestSeed}
                onChange={(e) =>
                  setPlantSettings({
                    ...plantSettings,
                    earliestSeed: e.target.value,
                  })
                }
              />
            </div>
            <div className={styles.plantSettingsRow}>
              <h3>Latest Seed</h3>
              <input
                type="text"
                value={plantSettings.latestSeed}
                onChange={(e) =>
                  setPlantSettings({
                    ...plantSettings,
                    latestSeed: e.target.value,
                  })
                }
              />
            </div>
            <div className={styles.plantSettingsRow}>
              <h3>Harden</h3>
              <input
                type="text"
                value={plantSettings.harden}
                onChange={(e) =>
                  setPlantSettings({ ...plantSettings, harden: e.target.value })
                }
              />
            </div>
            <div className={styles.plantSettingsRow}>
              <h3>Transplant</h3>
              <input
                type="text"
                value={plantSettings.transplant}
                onChange={(e) =>
                  setPlantSettings({
                    ...plantSettings,
                    transplant: e.target.value,
                  })
                }
              />
            </div>
            <div className={styles.plantSettingsRow}>
              <h3>Maturity</h3>
              <input
                type="text"
                value={plantSettings.maturity}
                onChange={(e) =>
                  setPlantSettings({
                    ...plantSettings,
                    maturity: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className={styles.plantSettingsColumn}>
            <div className={styles.plantSettingsRow}>
              <h3>Light</h3>
              <input
                type="text"
                value={plantSettings.light}
                onChange={(e) =>
                  setPlantSettings({ ...plantSettings, light: e.target.value })
                }
              />
            </div>
            <div className={styles.plantSettingsRow}>
              <h3>Depth</h3>
              <input
                type="text"
                value={plantSettings.depth}
                onChange={(e) =>
                  setPlantSettings({ ...plantSettings, depth: e.target.value })
                }
              />
            </div>
            <div className={styles.plantSettingsRow}>
              <h3>Direct Sow</h3>
              <input
                type="text"
                value={plantSettings.directSow}
                onChange={(e) =>
                  setPlantSettings({
                    ...plantSettings,
                    directSow: e.target.value,
                  })
                }
              />
            </div>
            <div className={styles.plantSettingsRow}>
              <h3>Seed Note</h3>
              <input
                type="text"
                value={plantSettings.seedNote}
                onChange={(e) =>
                  setPlantSettings({
                    ...plantSettings,
                    seedNote: e.target.value,
                  })
                }
              />
            </div>
            <div className={styles.plantSettingsRow}>
              <h3>Transplant Note</h3>
              <input
                type="text"
                value={plantSettings.transplantNote}
                onChange={(e) =>
                  setPlantSettings({
                    ...plantSettings,
                    transplantNote: e.target.value,
                  })
                }
              />
            </div>
            <div className={styles.plantSettingsRow}>
              <h3>Harvest Note</h3>
              <input
                type="text"
                value={plantSettings.harvestNote}
                onChange={(e) =>
                  setPlantSettings({
                    ...plantSettings,
                    harvestNote: e.target.value,
                  })
                }
              />
            </div>
            <div className={styles.plantSettingsRow}>
              <h3>Pinch Note</h3>
              <input
                type="text"
                placeholder="Optional"
                value={plantSettings.pinchNote}
                onChange={(e) =>
                  setPlantSettings({
                    ...plantSettings,
                    pinchNote: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className={styles.plantSettingsColumn}>
            <div className={styles.plantSettingsRow}>
              <h3>Pinch</h3>
              <input
                type="text"
                placeholder="Optional"
                value={plantSettings.pinch}
                onChange={(e) =>
                  setPlantSettings({ ...plantSettings, pinch: e.target.value })
                }
              />
            </div>
            <div className={styles.plantSettingsRow}>
              <h3>Harvest Length</h3>
              <input
                type="text"
                value={plantSettings.harvestLength}
                onChange={(e) =>
                  setPlantSettings({
                    ...plantSettings,
                    harvestLength: e.target.value,
                  })
                }
              />
            </div>
            <div className={styles.plantSettingsRow}>
              <h3>Potting On</h3>
              <input
                type="text"
                placeholder="Optional"
                value={plantSettings.pottingOn}
                onChange={(e) =>
                  setPlantSettings({
                    ...plantSettings,
                    pottingOn: e.target.value,
                  })
                }
              />
            </div>
            <div className={styles.plantSettingsImage}></div>
          </div>
        </div>
        <div className={styles.settingsButtonContainer}>
          <button className={styles.settingsButton}>Save</button>
          <button className={styles.settingsButton}>Reset</button>
        </div>
      </div>

      {/* User Settings */}
      <div className={styles.userSettingsContainer}>
        <div className={styles.userSettingsPaper}>
          <div className={styles.userSettingsOptionsContainer}>
            <h2>User Settings</h2>
            <div className={styles.userSettingsInputRow}>
              <h3>Last Frost</h3>
              <input
                type="text"
                value={userSettings.lastFrost}
                onChange={(e) => {
                  setUserSettings({
                    ...userSettings,
                    lastFrost: e.target.value,
                  });
                }}
              />
            </div>
            <div className={styles.userSettingsInputRow}>
              <h3>First Frost</h3>
              <input
                type="text"
                value={userSettings.firstFrost}
                onChange={(e) => {
                  setUserSettings({
                    ...userSettings,
                    firstFrost: e.target.value,
                  });
                }}
              />
            </div>
            <div className={styles.userSettingsInputRow}>
              <h3>Location</h3>
              <input
                type="text"
                value={userSettings.location}
                onChange={(e) => {
                  setUserSettings({
                    ...userSettings,
                    location: e.target.value,
                  });
                }}
              />
            </div>
            <div className={styles.userSettingsInputRow}>
              <h3>Harden Time</h3>
              <input
                type="text"
                value={userSettings.hardenTime}
                onChange={(e) => {
                  setUserSettings({
                    ...userSettings,
                    hardenTime: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <button className={styles.settingsButton}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default PlantSettingsTuner;
