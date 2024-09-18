import { Container, Typography } from "@mui/material";
import React from "react";
import CardsGenerator from "../cards-generator/CardsGenerator";
import './Projects.css'
import { ArrowRightAlt } from "@mui/icons-material";

const Projects = () => {
  const projects = {
    "Chatbot using AWS": {
      imagePath: "./aws_logo.png",
      headline: null,
      bodyText:
        "Built a serverless application using AWS services (Lex, Poly, etc.) for booking cabs and hotels with an enhanced user experience.",
      buttonName: "View Project",
      buttonIcon: <ArrowRightAlt />,
      chipsList: ["AWS"],
      key:  "aws",

    },
    "Interactive Tools": {
      imagePath: "./infy_logo.png",
      headline: null,
      bodyText:
        "Created dynamic content engagement tools with React, HTML, CSS, JavaScript, and TypeScript. Optimized workflows using Gulp.js, developed an Express API in Python, and utilized Parcel.js for TypeScript to JavaScript transpilation.",
      buttonName: "View Project",
      buttonIcon: <ArrowRightAlt />,
      chipsList: [
        "React",
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "Gulp.js",
        "Parcel.js",
      ],
      key:  "infy",

    },
    Metaverse: {
      imagePath: "./metaverse_logo.jpg",
      headline: null,
      bodyText:
        "Developed an interactive WebGL project using Babylon.js for 3D rendering and Colyseus for multi-user functionality, achieving 95% accuracy in spaces with 50+ simultaneous connections.",
      buttonName: "View Project",
      buttonIcon: <ArrowRightAlt />,
      chipsList: ["Babylon.js", "Colyseus", "TypeScript"],
      key:  "metaverse",
    },
  };

  return (
    <Container maxWidth="xl" className="projects">
      <Typography
        sx={{ fontSize: "1.5rem", lineHeight: "1rem", fontWeight: "600" }}
        className="heading"
      >
        Projects
      </Typography>

      <Typography
        sx={{
          fontSize: "1rem",
          lineHeight: "1rem",
          fontWeight: "400",
          color: "gray",
        }}
        className="headline"
        mt={1}
        mb={1}
      >
        A collection of my recent projects.
      </Typography>

      <CardsGenerator data={projects} keyVal={"projects"} />

      {/* <CardComponent imagePath={"./infy_logo.png"} heading={"Chatbot using AWS"} headline={null} bodyText={"Built a serverless application using AWS services (Lex, Poly, etc.) for booking cabs and hotels with an enhanced user experience."} buttonName={"View Project"} buttonIcon={<ArrowRightAlt />} /> */}
    </Container>
  );
};

export default Projects;
