import React, { useState } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Dhriti</h1>
        <p className={styles.description}>
          I'm a passionate developer eager to collaborate on exciting projects,
          explore internship opportunities, and connect with like-minded
          professionals. Let's build something amazing together!
        </p>
        <button onClick={openModal} className={styles.contactBtn}>
          Contact Me
        </button>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2 className={styles.modalTitle}>Contact Me</h2>
            <form className={styles.contactForm}>
              <input
                type="text"
                name="dhriti_sahu"
                placeholder="Dhriti Sahu"
                className={styles.inputField}
                required
              />
              <input
                type="email"
                name="Dhriti Sahu"
                placeholder="dhritisahu954@gmail.com"
                className={styles.inputField}
                required
              />
              <textarea
                name="message"
                placeholder="Let’s Connect
I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. "
                className={styles.textArea}
                rows="4"
                required
              ></textarea>
              <button type="submit" className={styles.submitBtn}>
                lLet's Connect!!
              </button>
            </form>
            <button onClick={closeModal} className={styles.closeBtn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor"
              >
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
