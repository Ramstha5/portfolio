import React from "react";
import styles from "./Writing.module.css";
import { FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import WritingItems from "./WritingItems";
const Writing = () => {
  const WrtItems = useSelector((store) => store.writing);
  return (
    <>
      <section className={styles.writings} id="project">
        <div className="container">
          <h2 className={styles.h2_heading}>writing</h2>
          {WrtItems.map((WrtItem) => (
            <WritingItems key={WrtItem.id} WrtItem={WrtItem} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Writing;
