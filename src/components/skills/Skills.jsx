import { Container, Typography } from "@mui/material";
import React from "react";
import SkillSectionGenrator from "./skill-section/SkillSectionGenrator";
import "./Skills.css"

const Skills = () => {
  const skills = {
    languages: ["C", "C++", "JavaScript", "TypeScript", "HTML", "CSS"],
    "frameworks and libraries": [
      "React",
      "Node.js",
      "Express.js",
      "Angular",
      "Babylon.js",
      "Gulp.js",
      "Parcel.js",
    ],
    databases: ["MongoDB", "MySQL", "PostgreSQL"],
    "operating systems": ["Windows"],
    tools: ["Git", "Visual Studio Code", "Postman"],
  };
  

  return (
    <Container maxWidth="xl" className="skills" id="skills"  >
      <Typography sx={{fontSize: "1.5rem", lineHeight: "1rem", fontWeight: "600"}}>Skills</Typography>
      <Typography sx={{fontSize: "1rem", lineHeight: "1rem", fontWeight: "400", color: "gray"}} mt={1} mb={1}>A showcase of my skills</Typography>

      <SkillSectionGenrator skills={skills} />
    </Container>
  );
};

export default Skills;
