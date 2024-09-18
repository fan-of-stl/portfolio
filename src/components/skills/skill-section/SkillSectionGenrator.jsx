import { Box, Chip, Typography } from "@mui/material";
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
          
          <Box className="skillChipContainer">
          {skills[skillType].map((skill) => (
            <Chip
            sx={{ 
                fontSize: "0.8rem",  
                fontWeight: "400", 
                padding: "2px 6px",  
                height: "20px",
                overflow: "break-word" ,      
                borderRadius: 1
              }}
              size="small"
              label={skill}
              key={skill}
              className="skillChip"
            />
          ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default SkillSectionGenrator;
