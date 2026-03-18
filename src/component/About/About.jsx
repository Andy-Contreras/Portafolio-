import styles from "./About.module.css";
export function About() {
  return (
    <>
      <section className={styles.about} id="sobre-mi">
        <div className={styles["about-grid"]}>
          <div className={styles["about-perfil"]}>
            <img src="/perfil.jpeg" alt="Andy Contreras Salas" />
          </div>
          <div className={styles["about-detalle"]}>
            <div className={styles["section-titulo"]}>Sobre mí</div>
            <h2 className={styles["section-principal"]}>
              Desarrollador web con ganas de crecer
            </h2>
            <p>
              <strong>Ingeniero de Software</strong> enfocado en desarrollo web,
              con experiencia en Python y Django desarrollando aplicaciones,
              APIs y soluciones en proyectos propios y freelance.
            </p>
            <p>
              Actualmente estoy ampliando mis habilidades en frontend con
              React, con el objetivo de consolidarme como desarrollador
              fullstack.
            </p>
            <p>
              Busco mi primera experiencia profesional donde pueda aportar valor
              desde el inicio, seguir aprendiendo y crecer dentro de un equipo
              de desarrollo.
            </p>
            <a href="" className={styles["btn-primary"]}>
              Trabajamos juntos →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
