import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Sobre</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/Imike.svg")}
          alt="Me"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img className={styles.aboutIcon} src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend</h3>
              <p>
              Sou um desenvolvedor frontend com experiência em construção 
              de paginas responsiva e sites otimizados.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img className={styles.aboutIcon} src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend</h3>
              <p>
              Tenho experiência principalmente no desenvolvimento de APIs tornando
              o back-end rápido e seguro.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img className={styles.aboutIcon} src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI/UX Designer</h3>
              <p>
              Meu principal objetivo é criar interfaces intuitivas que facilitem a 
              interação do usuário com o produto, tornando-o eficiente e satisfatório de usar.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
