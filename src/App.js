import "./App.css";
import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Intro from "./components/intro/Intro";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Header from "./components/header/Header";
import { Container } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Header />
      <Container
      maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Intro className="intro" />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Services />
        <Contact />
      </Container>
    </div>
  );
}

export default App;
