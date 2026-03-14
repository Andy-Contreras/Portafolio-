import { useEffect, useRef } from "react";
import styles from "./Project.module.css";

export function Projects() {
  const titleRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

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
    if (card1Ref.current) observer.observe(card1Ref.current);
    if (card2Ref.current) observer.observe(card2Ref.current);
    if (card3Ref.current) observer.observe(card3Ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.proyectos} id="proyectos">
      <div ref={titleRef} className={styles.reveal}>
        <div className={styles["section-label"]}>Mi trabajo</div>
        <h2 className={styles["section-title"]}>Proyectos Destacados</h2>
        <p className={styles["section-sub"]}>
          Proyectos reales que demuestran mis capacidades técnicas y resolución
          de problemas.
        </p>
      </div>

      <div className={styles["projects-grid"]}>
        <div
          ref={card1Ref}
          className={`${styles["project-card"]} ${styles.reveal}`}
        >
          <div className={`${styles["project-thumb"]} ${styles.green}`}>🏢</div>
          <div className={styles["project-body"]}>
            <div className={styles["project-tags"]}>
              <span className={styles.tag}>Tesis</span>
              <span className={`${styles.tag} ${styles.purple}`}>Django</span>
              <span className={`${styles.tag} ${styles.purple}`}>Python</span>
            </div>
            <h3 className={styles["project-title"]}>
              Sistema de Cobro de Alícuota
            </h3>
            <p className={styles["project-desc"]}>
              Proyecto de tesis de grado. Sistema web completo para la gestión y
              cobro de alícuotas residenciales. Incluye administración de
              residentes, generación de facturas, historial de pagos y reportes.
            </p>
            <a href="#" className={styles["project-link"]}>
              Ver detalles →
            </a>
          </div>
        </div>

        <div
          ref={card2Ref}
          className={`${styles["project-card"]} ${styles.reveal}`}
        >
          <div className={`${styles["project-thumb"]} ${styles.purple}`}>
            🎧
          </div>
          <div className={styles["project-body"]}>
            <div className={styles["project-tags"]}>
              <span className={styles.tag}>Freelance</span>
              <span className={`${styles.tag} ${styles.purple}`}>Web</span>
              <span className={`${styles.tag} ${styles.purple}`}>Django</span>
            </div>
            <h3 className={styles["project-title"]}>
              Plataforma de Audiolibros
            </h3>
            <p className={styles["project-desc"]}>
              Sitio web desarrollado para clientes. Plataforma que permite
              explorar, reproducir y gestionar audiolibros. Primer proyecto de
              trabajo real como desarrollador.
            </p>
            <a href="#" className={styles["project-link"]}>
              Ver detalles →
            </a>
          </div>
        </div>

        <div
          ref={card3Ref}
          className={`${styles["project-card"]} ${styles.reveal}`}
        >
          <div className={`${styles["project-thumb"]} ${styles.blue}`}>🚀</div>
          <div className={styles["project-body"]}>
            <div className={styles["project-tags"]}>
              <span className={styles.tag}>En progreso</span>
              <span className={`${styles.tag} ${styles.purple}`}>React</span>
            </div>
            <h3 className={styles["project-title"]}>Proyecto en React</h3>
            <p className={styles["project-desc"]}>
              Actualmente construyendo mis primeros proyectos con React para
              fortalecer mi perfil frontend. Aprendiendo de forma activa y
              constante.
            </p>
            <a href="#" className={styles["project-link"]}>
              Próximamente →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
