import React from "react";
import styles from "./Writing.module.css";
import { FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import WritingItems from "./WritingItems";
const Writing = () => {

   const WrtItems = useSelector((store) => store.writing)
  return (
    <>
      <section className={styles.writings} id="project">
        {WrtItems.map((WrtItem) => (
          <WritingItems key={WrtItem.id} WrtItem={WrtItem} />
        ))}

      </section>
    </>
  );
};

export default Writing;
