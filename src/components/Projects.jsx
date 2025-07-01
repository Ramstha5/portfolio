import React from "react";
import styles from "./Projects.module.css";
import { FaArrowRight } from "react-icons/fa";
import ProjectItem from "./ProjectItem";
import { useSelector } from "react-redux";
const Projects = () => {

  const ProItems = useSelector((store) =>store.project)

  return (
    <>
      <section className={styles.projects} id="project">
        {ProItems.slice(0, 5).map((ProItem) => (
          <ProjectItem key={ProItem.id} ProItem={ProItem} />
        ))}

        <div className="row mt-5">
          <div className="col-md-12">
            <a href="/archive" className={styles.project_link}>
              <span className={styles.project}>View Full Project Archive</span>
              <span className={styles.arrow}>
                <FaArrowRight />
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
