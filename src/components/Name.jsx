import React from "react";
import styles from "./Name.module.css";

const Name = () => {
  return (
    <>
      <div className="container">
        <div className={styles.name_wrap}>
          <h1 className={styles.name}>Ram Shrestha</h1>
          <h2>Front End Engineer</h2>
          <p className={styles.des}>
            I build accessible, pixel-perfect digital experiences for the web.
          </p>
        </div>
      </div>
    </>
  );
};

export default Name;
