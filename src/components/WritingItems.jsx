import React from "react";
import styles from "./Writing.module.css";
import { FaArrowRight } from "react-icons/fa";

const WritingItems = ({ WrtItem }) => {
  return (
    <>
      <div className={`${styles.writing_card} mt-3`}>
        <div className="row">
          <div className=" col-3">
            <div className={styles.writing_image}>
              <img src={WrtItem.writing_image} alt="aa" />
            </div>
          </div>
          <div className="col-9">
            <div className={styles.writing_body}>
              <p className={styles.date}>{WrtItem.date}</p>
              <h3>
                <span className={styles.title}>{WrtItem.title}</span>
                <span className={styles.arrow}>
                  <FaArrowRight />
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WritingItems;
