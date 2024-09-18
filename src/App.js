import "./App.css";
import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Intro from "./components/intro/Intro";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Header from "./components/header/Header";
import { Box } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          
          width: "100%",
        }}
      >
        <Intro className="intro" />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Services />
        <Contact />
      </Box>
    </div>
  );
}

export default App;
