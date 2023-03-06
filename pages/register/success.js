import React, { useState } from "react";
import { useRouter } from "next/router";

import styles from "~styles/pages/register/success.module.scss";

const Success = () => {
  const [name, setName] = useState("Sally");

  const router = useRouter();

  return (
    <div className={styles.screen}>
      <img className={styles.logo} src={"/assets/logo.png"} />
      <h2>You&apos;re good to go, {name}!</h2>
      <h3>Let&apos;s make this season the best ever.</h3>

      <div
        className={styles.nextButtonContainer}
        onClick={() => router.push("/")}
      >
        <h5>Plan Season</h5>
      </div>
    </div>
  );
};

export default Success;
