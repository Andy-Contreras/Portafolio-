import styles from "./Navbar.module.css";
export function Navbar() {
  return (
    <>
      {/* El navbar */}
      <header className={styles.navbar}>
        <div className={styles.titulo}>
          <h2>
            dev<span>.</span>portafolio
          </h2>
        </div>
        <nav className={styles.links}>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#habilidades">Skills</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>
    </>
  );
}
