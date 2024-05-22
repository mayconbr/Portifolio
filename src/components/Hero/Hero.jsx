import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Olá, sou o Maycon</h1>
        <p className={styles.description}>
        Sou desenvolvedor Full-stack com mais de 3 anos de experiência em C# e .NET. Aqui você encontra um pouco mais sobre o meu trabalho.
        Entre em contato se quiser saber mais!
        </p>
        <a href="mailto:mbruzolato@gmail.com" className={styles.contactBtn}>
          Contato
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroYell.svg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
