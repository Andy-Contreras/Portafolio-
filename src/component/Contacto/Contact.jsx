import { useEffect, useRef } from "react";
import styles from "./Contact.module.css";

export function Contact() {
  const titleRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 },
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (cardRef.current) observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.contacto} id="contacto">
      <div className={styles["contact-wrapper"]}>
        <div ref={titleRef} className={styles.reveal}>
          <div className={styles["section-label"]}>¿Hablamos?</div>
          <h2 className={styles["section-title"]}>
            Listo para mi primer
            <br />
            reto profesional
          </h2>
          <p className={styles["contact-desc"]}>
            Estoy buscando mi primera oportunidad en empresa. Si buscas un
            desarrollador junior con ganas de aprender y crecer, hablemos.
          </p>
        </div>

        <div
          ref={cardRef}
          className={`${styles["contact-card"]} ${styles.reveal}`}
        >
          <p className={styles["contact-subtitle"]}>Puedes encontrarme en:</p>
          <div className={styles["contact-links"]}>
            <a
              href="mailto:andyjuliancontreras2002@hotmail.com"
              className={styles["contact-item"]}
            >
              <span>📧</span> andyjuliancontreras2002@hotmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/andy-contreras-235a3025a"
              target="_blank"
              rel="noreferrer"
              className={styles["contact-item"]}
            >
              <span>💼</span> LinkedIn
            </a>
            <a
              href="https://github.com/Andy-Contreras"
              target="_blank"
              rel="noreferrer"
              className={styles["contact-item"]}
            >
              <span>🐙</span> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
