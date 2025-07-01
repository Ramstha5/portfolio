import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        Loosely designed in
        <a
          href="https://www.figma.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.footer_highlights}> Figma </span>
        </a>
        and coded in
        <a
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.footer_highlights}> Visual Studio Code </span>
        </a>
        by yours truly. Built with
        <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
          <span className={styles.footer_highlights}> React Js </span>
        </a>
        and
        <a
          href="https://getbootstrap.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.footer_highlights}> Bootstrap CSS</span>
        </a>
        , deployed with
        <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
          <span className={styles.footer_highlights}> Vercel</span>
        </a>
        . All text is set in the
        <a
          href="https://rsms.me/inter/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.footer_highlights}> Inter </span>
        </a>
        typeface.
      </footer>
    </>
  );
};


export default Footer;
