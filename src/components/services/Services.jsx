import { Container, Typography } from '@mui/material'
import React from 'react'
import CardsGenerator from '../cards-generator/CardsGenerator';
import { ArrowDownward } from '@mui/icons-material';

const Services = () => {
  const projects = {
    "Full-Stack Development": {
      imagePath: "./aws_logo.png",
      headline: null,
      bodyText:
        "Developing complete web applications from front-end to back-end, ensuring high performance and user engagement.",
      buttonName: "Contact",
      buttonIcon: <ArrowDownward />,
      chipsList: [],
      key:  "fsd",

    },
    "Cloud System Administration": {
      imagePath: "./cloud_image.png",
      headline: null,
      bodyText:
        "Managing and optimizing cloud infrastructure using AWS services for seamless application performance.",
      buttonName: "Contact",
      buttonIcon: <ArrowDownward />,
      chipsList: [],
      key:  "csa",

    },
    "Interactive Metaverse Solutions": {
      imagePath: "./metaverse_logo1.jpg",
      headline: null,
      bodyText:
        "Creating engaging metaverse experiences using WebGL technologies like Babylon.js and Three.js.",
      buttonName: "Contact",
      buttonIcon: <ArrowDownward />,
      chipsList: [],
      key:  "metaverse",
    },
  };
  return (
    <Container maxWidth="xl" className="skills" id="services" >
      <Typography sx={{fontSize: "1.5rem", lineHeight: "1rem", fontWeight: "600"}}>Services</Typography>
      <Typography sx={{fontSize: "1rem", lineHeight: "1rem", fontWeight: "400", color: "gray"}} mt={1} mb={1}>Overview of the services I provide.</Typography>

      <CardsGenerator data={projects} keyVal={"projects"} />
    </Container>
  )
}

export default Services