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
            <h2 className={styles["section-principal"]}>Desarrollador web con ganas de crecer</h2>
            <p>
              Soy <strong>Ingeniero de Software</strong> recién graduado, con
              enfoque en desarrollo web. Me apasiona crear aplicaciones
              funcionales y bien estructuradas que aporten valor real a los
              usuarios.
            </p>
            <p>
              Cuento con experiencia práctica en{" "}
              <strong>Python y Django</strong> a través de proyectos propios y
              un trabajo freelance. Actualmente estoy ampliando mis habilidades
              hacia el <strong>frontend con React</strong>, buscando convertirme
              en un desarrollador fullstack completo.
            </p>
            <p>
              Estoy en búsqueda de mi{" "}
              <strong>primera experiencia profesional en empresa</strong>, donde
              pueda seguir aprendiendo, aportar desde el primer día y crecer
              junto a un equipo.
            </p>
            <a href="" className={styles["btn-primary"]}>Trabajamos juntos →</a>
          </div>
        </div>
      </section>
    </>
  );
}
