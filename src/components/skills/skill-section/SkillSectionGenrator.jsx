import { Box, Chip, Stack, Typography } from "@mui/material";
import React from "react";
import "./SkillSectionGenerator.css"
import capitalizeWords from "../../../utilities/capitalizeWords";

const SkillSectionGenrator = ({ skills }) => {
  return (
    <Box className="skillsContainer">
      {Object.keys(skills).map((skillType) => (
        <Box key={skillType} className="skillContainer">
          <Typography className="skillType">
            {capitalizeWords(skillType)}
          </Typography>
          
          <Stack padding={1} direction="row" flexWrap="wrap" gap={1} className="skillsStack">
          {skills[skillType].map((skill) => (
            <Box width={100}>
            <Chip
            // border={'1px solid red'}
            sx={{ 
                width: '100%',
                fontSize: "0.8rem",  
                fontWeight: "400", 
                padding: "2px 6px",  
                height: "20px",
                // overflow: "break-word" ,      
                borderRadius: 1
              }}
              size="medium"
              label={skill}
              key={skill}
              // className="skillChip"
            />
            </Box>
          ))}
          </Stack>
        </Box>
      ))}
    </Box>
  );
};

export default SkillSectionGenrator;
