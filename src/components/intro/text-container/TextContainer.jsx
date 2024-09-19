import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import './TextContainer.css'

const TextContainer = () => {
  const texts = [
    "Full-Stack Developer",
    2000,
    "AWS Specialist",
    2000,
    "Senior Systems Engineer",
    2000,
    "3D Web Developer",
    2000,
  ];

  const aboutText = `I am Abhishek Kumar, a Senior Systems Engineer at Infosys with
     extensive experience in developing WebGL-based projects using React, Node.js, Express, 
    A-frame, Babylon, Three.js, JavaScript, TypeScript, and Colyseus. 
    I am proficient in React and skilled in building robust client-side applications. My hands-on experience spans various projects in cloud system administration utilizing AWS, as well as the creation of dynamic content engagement tools and interactive metaverse projects.`;
  
  
    const contactMe = () => { 
      const section = document.getElementById('contact'); 
      if (section) {
        section.scrollIntoView({ behavior: "smooth" }); 
      }
    };
    return (
    <Container className="main-intro-container">
      <Typography className="name" sx={{fontSize: "3rem", fontFamily:"sans-serif", fontWeight: "600"}}>Abhishek Kumar</Typography>

      <Box className="typing-anim">
        I am a:{" "}
        <TypeAnimation
          sequence={texts}
          wrapper="span"
          speed={30}
          style={{ fontSize: "1.2rem", display: "inline-block" }}
          repeat={Infinity}
        />
      </Box>

      <Box className="about">
        <Typography color="textSecondary" component="p">
          {aboutText}
        </Typography>
      </Box>

      <Button variant="contained" sx={{ background: "#000", color: "#fff", width: "150px" }} onClick={contactMe}>
        Let's Connect
      </Button>
    </Container>
  );
};

export default TextContainer;
