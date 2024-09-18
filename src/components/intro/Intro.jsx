import { Box, Container } from "@mui/material";
import React from "react";
import TextContainer from "./text-container/TextContainer";
import ImageContainer from "./image-cotainer/ImageContainer";
import "./Intro.css"

const Intro = () => {
  return (
    <div>
      <Container maxWidth="xl" className="intro">
        <Box className="itroduction-text">
          <TextContainer />
        </Box>
        <Box className="image-container">
          <ImageContainer />
        </Box>
      </Container>
    </div>
  );
};

export default Intro;
