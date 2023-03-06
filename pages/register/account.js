import React, { useState } from "react";
import { useRouter } from "next/router";

import styles from "~styles/pages/register/account.module.scss";

const Farm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  return (
    <div className={styles.screen}>
      <img className={styles.logo} src={"/assets/logo.png"} />
      <div className={styles.formContainer}>
        <h2>Setup your account.</h2>

        <div className={styles.formDetailsContainer}>
          <div className={styles.detailsInputsContainer}>
            <input
              type="text"
              className={styles.input}
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              className={styles.input}
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.detailsProfilePictureContainer}></div>
        </div>

        <input
          type="text"
          className={styles.input}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div
        className={styles.nextButtonContainer}
        onClick={() => router.push("/register/success")}
      >
        <h5>Next</h5>
      </div>
    </div>
  );
};

export default Farm;
