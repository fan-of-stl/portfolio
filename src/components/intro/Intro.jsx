import { Box, Stack } from "@mui/material";
import React from "react";
import TextContainer from "./text-container/TextContainer";
import ImageContainer from "./image-cotainer/ImageContainer";
import "./Intro.css"

const Intro = () => {
  return (
    <div>
      <Stack direction={{ xs: 'column-reverse', sm: 'row' }} maxWidth="xl" className="intro" id="intro">
        <Box className="itroduction-text">
          <TextContainer />
        </Box>
        <Box 
        sx={(theme) => ({
          
          [theme.breakpoints.up('xs')]: {
            m: "auto",
            alignContent: "center",
            alignItems:  "center",

          },
        })}
        className="image-container">
          <ImageContainer />
        </Box>
      </Stack>
    </div>
  );
};

export default Intro;
