import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contato</h2>
        <p>Entre em contato para contruirmos um mundo melhor com tecnologia. </p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}> 
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:mbruzolato@gmail.com">mbruzolato@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/mayconbrandao">linkedin.com/mayconbrandao</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/mayconbr">github.com/mayconbr</a>
        </li>
      </ul>
    </footer>
  );
};
