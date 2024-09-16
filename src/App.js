import "./App.css";
import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Intro from "./components/intro/Intro";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <Intro />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
