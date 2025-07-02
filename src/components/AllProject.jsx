import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import styles from "./AllProject.module.css";
import { useSelector } from "react-redux";
import AllProjectItem from "./AllProjectItem";
import { Link } from "react-router-dom";

const AllProject = () => {
  const ProItems = useSelector((store) => store.project);

  return (
    <>
      <div className="container">
        <section className={styles.all_projects}>
          <Link to="/" className={styles.back_link}>
            <span className={styles.arrow}>
              <FaArrowLeft />
            </span>
            <span className={styles.name}>Ram Shrestha</span>
          </Link>
          <h1 className={styles.h1}>All Projects</h1>
          <div className={`row py-4 ${styles.thead}`}>
            <div className={`col-lg-1 col-md-2 col-sm-2 col-2 ${styles.year}`}><span>Year</span></div>
            <div className={`col-lg-3 col-md-6 col-sm-6 col-10 ${styles.title}`}><span>Project</span></div>
            <div className={`col-lg-2 col-md-0 col-sm-0 col-0 ${styles.made}`}><span>Made at</span></div>
            <div className={`col-lg-4 col-md-0 col-sm-0 col-0 ${styles.languages}`}><span>Built with</span></div>
            <div className={`col-lg-2 col-md-4 col-sm-4 col-0 ${styles.link}`}><span>Link</span></div>
          </div>
          {ProItems.map((item) => (
            <AllProjectItem key={item.id} item={item} />
          ))}
        </section>
      </div>
    </>
  );
};

export default AllProject;

