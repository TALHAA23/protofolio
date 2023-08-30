import Nav from "./components/Nav";
import About from "./components/About";
import Skills from "./components/Skills";
import LiveProjects from "./components/LiveProjects";
import Work from "./components/Work";
import Contact from "./components/Contact";
export default function App() {
  return (
    <section>
      <Nav />
      <About />
      <Skills />
      <LiveProjects />
      <Work />
      <Contact />
    </section>
  );
}
