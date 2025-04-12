import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
      <img
        src={getImageUrl("about/aboutImage.png")}
        alt="Dhriti working on a laptop"
        className={styles.aboutImage}
      />
      <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/cursorIcon.png")} alt="Web icon" />
          <div className={styles.aboutItemText}>
            <h3>Frontend Developer</h3>
            <p>
              Proficient in HTML5, CSS3, Bootstrap, Tailwind CSS, and JavaScript.
              Experienced in building responsive and visually appealing websites using React.js.
            </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/cursorIcon.png")} alt="Project icon" />
          <div className={styles.aboutItemText}>
            <h3>Project Developer</h3>
            <p>
              Developed projects like an Task Tracker Application (React + Tailwind)
              and a Portfolio Website using HTML, CSS, and JavaScript,(React + Tailwind)
            </p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/cursorIcon.png")} alt="Tools icon" />
          <div className={styles.aboutItemText}>
            <h3>Tech Enthusiast</h3>
            <p>
              Comfortable with Git, GitHub, VS Code, and MS Office. 
              Participated in national conferences and hackathons, including CMR Hackfest 2.0.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
  );
};
