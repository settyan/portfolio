import React from "react";
import Image from "next/image";

import styles from "./index.module.css";

export const Mainvisual = (): JSX.Element => {
  return (
    <div className={styles.Container}>
      <div className={styles.Inner}>
        <div className={styles.Footer}>
          <div className={styles.Profile}>
            <p className={styles.Profile_Text}>Age: 19</p>
            <p className={styles.Profile_Text}>Job: None</p>
            <p className={styles.Profile_Text}>Skills: None</p>
            <p className={styles.Profile_Text}>Girl Friends: None</p>
          </div>
          <div className={styles.Copyright}>
            <p className={styles.Copyright_Text}>&copy; 2019 settyan</p>
          </div>
        </div>
        <div className={styles.Main}>
          <h1 className={styles.Title}>
            <Image
              src="/name@2x.png"
              layout="responsive"
              width="1398"
              height="522"
              unoptimized={true}
              alt="Sena Suzuki"
            />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Mainvisual;
