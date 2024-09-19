import { Avatar, Box, Chip, Container, Typography } from "@mui/material";
import React from "react";
import "./Experience.css";

const Experience = () => {
  const techUsed = [
    "React",
    "Node.js",
    "Express",
    "A-frame",
    "Babylon",
    "Three.js",
    "JavaScript",
    "TypeScript",
    "Colyseus",
  ];
  return (
    <Container maxWidth="xl" className="experience" id="experience">
      <Typography sx={{fontSize: "1.5rem", lineHeight: "1rem", fontWeight: "600"}} className="heading">Experience</Typography>

      <Typography sx={{fontSize: "1rem", lineHeight: "1rem", fontWeight: "400", color: "gray"}} className="headline" mt={1} mb={1}>
        Professional experience and past roles.
      </Typography>

      <Box className="experience-cards">
        <Box className="experience-card">
          <Box className="company-details-container">
            <Avatar alt="logo" src="./infy_logo.png" sx={{ width: 56, height: 56 }} className="avatar"/>
            <Box className="conpany-details-text-container">
              <Typography className="company-designation" sx={{fontSize: "1.25rem", lineHeight: "1.75rem", fontWeight: "500"}}>
                Senior Systems Engineer
              </Typography>
              <Typography sx={{fontSize: ".9rem", lineHeight: "1rem", fontWeight: "400", color: "gray"}} className="company">Infosys-</Typography>
              <Typography sx={{fontSize: ".9rem", lineHeight: "1rem", fontWeight: "400", color: "gray"}} className="company-duration">
                Sep 2021 - present
              </Typography>
            </Box>
          </Box>

          <Box className="work-about">
            <Typography sx={{fontSize: ".9rem", lineHeight: "1rem", fontWeight: "400"}} className="work-about-text">
              Developed WebGL-based projects, collaborated on client-side
              applications, delivered projects exceeding client expectations.
            </Typography>
          </Box>

          <Box className="tech-used"  sx={{display: "flex", flexWrap: "wrap", gap: "10px"}}>

            {techUsed.map((tech) => (
              <Chip sx={{fontSize: "0.8rem", fontWeight: "400", borderRadius: 1, flex: "0 0 2%"}} label={tech} key={tech}/>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Experience;
