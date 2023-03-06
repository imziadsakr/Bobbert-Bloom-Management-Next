import React, { useState } from "react";
import { useRouter } from "next/router";

import styles from "~styles/pages/register/farm.module.scss";

const Farm = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [size, setSize] = useState("");
  const [lastDate, setLastDate] = useState("");
  const [firstDate, setFirstDate] = useState("");

  const router = useRouter();

  return (
    <div className={styles.screen}>
      <img className={styles.logo} src={"/assets/logo.png"} />
      <div className={styles.formContainer}>
        <h2>Tell us about your farm.</h2>
        <h3>{`(or garden!)`}</h3>

        <input
          type="text"
          className={styles.input}
          placeholder="Farm Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className={styles.formDetailsContainer}>
          <div className={styles.detailsInputsContainer}>
            <input
              type="text"
              className={styles.input}
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <input
              type="text"
              className={styles.input}
              placeholder="Size"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            />
          </div>
          <div className={styles.detailsPlaceholderContainer}></div>
        </div>
        <input
          type="text"
          className={styles.input}
          placeholder="Last Frost Date"
          value={lastDate}
          onChange={(e) => setLastDate(e.target.value)}
        />
        <input
          type="text"
          className={styles.input}
          placeholder="First Frost Date"
          value={firstDate}
          onChange={(e) => setFirstDate(e.target.value)}
        />
      </div>

      <div
        className={styles.nextButtonContainer}
        onClick={() => router.push("/register/account")}
      >
        <h5>Next</h5>
      </div>
    </div>
  );
};

export default Farm;
