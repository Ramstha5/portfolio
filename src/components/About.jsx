import React from "react";
import styles from "./About.module.css";
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <h2 className={styles.h2_heading}>about</h2>
          <div>
            <p className={styles.description}>
              I'm a full stack developer passionate about crafting accessible,
              user-friendly web applications that combine clean design with
              solid engineering. I enjoy working at the intersection of
              front-end design and back-end logic, creating experiences that are
              not only visually polished but also robust, responsive, and
              scalable.
            </p>
            <p className={styles.description}>
              Currently, I'm working as a Front-End Developer at Profox Studio,
              where I contribute to building and maintaining modern UI
              components. At the same time, I'm actively expanding my backend
              development skills using Python and Django, developing RESTful
              APIs and managing server-side functionality for full-featured
              applications.
            </p>
            <p className={styles.description}>
              I've built several personal projects that combine both frontend
              and backend technologies, allowing me to explore concepts like
              responsive design, accessibility, and database-driven development.
              My background in design also strengthens my attention to detail
              and user experience.
            </p>
            <p className={styles.description}>
              In my spare time, I enjoy reading, exploring design trends,
              studying data science, and occasionally running around Hyrule
              searching for Korok seeds.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
