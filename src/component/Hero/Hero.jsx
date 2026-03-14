import styles from "./Hero.module.css";
export function Hero() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles["hero-content"]}>
          <h1>
            Hola, soy <br />
            <span className={styles.name}>Andy Contreras</span> <br />
            <span className={styles.line2}>
              Ingerniero de Software - Web Developer
            </span>
          </h1>
          <p className={styles["hero-descrip"]}>
            Recién graduado en 2025, especializado en desarrollo web con Python,
            Django y React. Apasionado por construir soluciones digitales que
            resuelvan problemas reales.
          </p>
        </div>
        <div className={styles["hero-ctas"]}>
          <a href="#proyectos" className={styles["btn-primary"]}>
            Ver proyectos →
          </a>
          <a href="#contacto" className={styles["btn-secondary"]}>
            📩 Contáctame
          </a>
        </div>
      </section>
    </>
  );
}
