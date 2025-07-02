import React from "react";
import styles from "./Experience.module.css";
import { FaArrowRight } from "react-icons/fa";
import ExperienceItem from "./ExperienceItem";
import { useSelector } from "react-redux";

const Experience = () => {
  const ExpItems = useSelector((store) => store.experience);

  return (
    <section className={styles.experience} id="experience">
      <div className="container">
        <h2 className={styles.h2_heading}>experience</h2>
        {ExpItems.slice(0, 5).map((ExpItem) => (
          <ExperienceItem key={ExpItem.id} ExpItem={ExpItem} />
        ))}
        <div className="row mt-5">
          <div className="col-md-12">
            <a
              href="images/resume.pdf"
              className={styles.resume_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.resume}>View Full Résumé</span>
              <span className={styles.arrow}>
                <FaArrowRight />
              </span>
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Experience;
