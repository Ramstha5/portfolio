import React from "react";
import styles from "./SocialMedia.module.css";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const SocialMedia = () => {
  return (
    <>
      <ul className={styles.social_media}>
        <li>
          <a
            href="https://github.com/Ramstha5?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.social_icon}>
              <FaGithub />
            </span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.social_icon}>
              <IoLogoLinkedin />
            </span>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.social_icon}>
              <FaFacebookSquare />
            </span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.social_icon}>
              <FaInstagramSquare />
            </span>
          </a>
        </li>
      </ul>
    </>
  );
};

export default SocialMedia;
