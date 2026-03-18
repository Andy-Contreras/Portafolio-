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
            Ingeniero de Software graduado en 2025, con enfoque en desarrollo
            web utilizando Python, Django y React. He desarrollado soluciones
            digitales orientadas a resolver problemas reales, priorizando
            eficiencia, escalabilidad y buenas prácticas.
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
