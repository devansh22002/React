import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Devansh</h1>
        <p className={styles.description}>
          I'm a Software Developer.I am a hard-working, honest individual always willing to learn new things and a keen, hard-working, reliable and excellent time keeper. I am friendly, helpful and polite, and have a good sense of humour.
        </p>
        <a href="https://drive.google.com/file/d/1O3iEqVe6N7nsjgIbNu590jV7N7LZTsRj/view?usp=sharing" className={styles.contactBtn}>
          Download CV
        </a>
      </div>
      <img
        src={getImageUrl("hero/Developer.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
