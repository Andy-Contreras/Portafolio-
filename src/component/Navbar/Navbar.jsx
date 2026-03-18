import styles from "./Navbar.module.css";
export function Navbar() {
  return (
    <>
      {/* El navbar */}
      <header className={styles.navbar} tabindex="0">
        <div className={styles.titulo}>
          <h2 aria-label="Dev punto Portafolio">
            dev<span>.</span>portafolio
          </h2>
        </div>
        <nav className={styles.links}>
          <ul>
            <li>
              <a href="#sobre-mi">Sobre mí</a>
            </li>
            <li>
              <a href="#habilidades">Skills</a>
            </li>
            <li>
              <a href="#proyectos">Proyectos</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
