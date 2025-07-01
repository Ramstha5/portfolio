import React from "react";
import { FaArrowRight } from "react-icons/fa";
import styles from "./AllProject.module.css";
const AllProjectItem = ({ item }) => {
  return (
    <>
      <div className={`row py-4 ${styles.bdr}`}>
        <div className="col-md-1">{item.year}</div>
        <div className={`col-md-3 ${styles.names}`}>{item.title}</div>
        <div className="col-md-2">{item.made}</div>
        <div className="col-md-4">
          <ul className={styles.language}>
            {item.language.language_name.map((language) => (
              <li key={language} className={styles.language_name}>
                {language}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-2 ">
          <a href="#" className={styles.links}>
            <span> {item.link}</span>
            <span className={styles.link_arrow}>
              <FaArrowRight />
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default AllProjectItem;
