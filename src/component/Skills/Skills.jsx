import { useEffect } from "react";
import styles from "./Skills.module.css";

export function Skills() {
  useEffect(() => {
    const reveals = document.querySelectorAll(`.${styles.reveal}`);
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
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.habilidades} id="habilidades">
      <div className={styles.reveal}>
        <div className={styles["section-label"]}>Tecnologías</div>
        <h2 className={styles["section-title"]}>Stack & Habilidades</h2>
        <p className={styles["section-sub"]}>
          Tecnologías con las que construyo mis proyectos y las que estoy
          aprendiendo activamente.
        </p>
      </div>

      <div className={`${styles["skills-grid"]} ${styles.reveal}`}>
        <div className={styles["skill-card"]}>
          <div className={styles["skill-icon"]}>🐍</div>
          <div className={styles["skill-name"]}>Python</div>
          <div className={styles["skill-desc"]}>
            Lenguaje principal. Desarrollo backend, scripting y lógica de
            negocio.
          </div>
          <div className={styles["skill-level"]}>
            <div className={styles["skill-bar"]} style={{ width: "80%" }}></div>
          </div>
        </div>

        <div className={styles["skill-card"]}>
          <div className={styles["skill-icon"]}>🎸</div>
          <div className={styles["skill-name"]}>Django</div>
          <div className={styles["skill-desc"]}>
            Framework web de Python. Desarrollo de aplicaciones web robustas y
            sistemas completos.
          </div>
          <div className={styles["skill-level"]}>
            <div className={styles["skill-bar"]} style={{ width: "75%" }}></div>
          </div>
        </div>

        <div className={styles["skill-card"]}>
          <div className={styles["skill-icon"]}>⚛️</div>
          <div className={styles["skill-name"]}>
            React{" "}
            <span className={styles["skill-learning"]}>(aprendiendo)</span>
          </div>
          <div className={styles["skill-desc"]}>
            En proceso de aprendizaje activo. Construyendo componentes e
            interfaces dinámicas.
          </div>
          <div className={styles["skill-level"]}>
            <div className={styles["skill-bar"]} style={{ width: "40%" }}></div>
          </div>
        </div>

        <div className={styles["skill-card"]}>
          <div className={styles["skill-icon"]}>🌐</div>
          <div className={styles["skill-name"]}>HTML / CSS / JS</div>
          <div className={styles["skill-desc"]}>
            Base sólida en tecnologías web. Interfaces responsivas y
            funcionales.
          </div>
          <div className={styles["skill-level"]}>
            <div className={styles["skill-bar"]} style={{ width: "75%" }}></div>
          </div>
        </div>

        <div className={styles["skill-card"]}>
          <div className={styles["skill-icon"]}>🗄️</div>
          <div className={styles["skill-name"]}>Bases de datos</div>
          <div className={styles["skill-desc"]}>
            Experiencia con bases de datos relacionales en proyectos académicos
            y personales.
          </div>
          <div className={styles["skill-level"]}>
            <div className={styles["skill-bar"]} style={{ width: "65%" }}></div>
          </div>
        </div>

        <div className={styles["skill-card"]}>
          <div className={styles["skill-icon"]}>🔧</div>
          <div className={styles["skill-name"]}>Git & Control de versiones</div>
          <div className={styles["skill-desc"]}>
            Gestión de repositorios, ramas y colaboración en proyectos con
            Git/GitHub.
          </div>
          <div className={styles["skill-level"]}>
            <div className={styles["skill-bar"]} style={{ width: "70%" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
