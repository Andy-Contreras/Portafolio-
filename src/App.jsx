import "./App.css";
import { Navbar } from "./component/Navbar/Navbar.jsx";
import { Hero } from "./component/Hero/Hero.jsx";
import { Skills } from "./component/Skills/Skills.jsx";
import { About } from "./component/About/About.jsx";
import { Projects } from "./component/ProjectCard/Project.jsx";
import { Contact } from "./component/Contacto/Contact.jsx";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects/>
      <Contact/>
    </>
  );
}

export default App;
