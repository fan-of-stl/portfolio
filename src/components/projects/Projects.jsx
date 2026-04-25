import { Container, Typography } from "@mui/material";
import React from "react";
import CardsGenerator from "../cards-generator/CardsGenerator";
import "./Projects.css";
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
      key: "aws",
      isButtonDisabled: true,
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
      key: "infy",
      isButtonDisabled: true,
    },
    Metaverse: {
      imagePath: "./metaverse_logo.jpg",
      headline: null,
      bodyText:
        "Developed an interactive WebGL project using Babylon.js for 3D rendering and Colyseus for multi-user functionality, achieving 95% accuracy in spaces with 50+ simultaneous connections.",
      buttonName: "View Project",
      buttonIcon: <ArrowRightAlt />,
      chipsList: ["Babylon.js", "Colyseus", "TypeScript"],
      key: "metaverse",
      isButtonDisabled: true,
    },
    "Credit Card and Personal Loan": {
      imagePath: "./credit_loan.png",
      headline: null,
      bodyText: `Developed a scalable fintech UI for credit card and personal loan workflows using React and TypeScript. Integrated MUI for a consistent design system, leveraged TanStack Query for efficient server-state management, and used Axios for API communication.

Built a dedicated Personal Loan module with structured application flow and eligibility handling.

Implemented a standalone Credit Bureau section, allowing users to pull their credit bureau data with a 30-day cooldown restriction per request, ensuring compliance and controlled access.

Enabled real-time eligibility checks and smooth user onboarding.`,
      buttonIcon: <ArrowRightAlt />,
      chipsList: [
        "React",
        "TypeScript",
        "MUI",
        "TanStack Query",
        "Axios",
        "React Hook Form",
        "React Router",
      ],
      key: "credit-loan",
      isButtonDisabled: true,
    },
  };

  return (
    <Container maxWidth="xl" className="projects" id="projects">
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
