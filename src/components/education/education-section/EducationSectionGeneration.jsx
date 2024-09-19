import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import "./EducationSectionGeneration.css";

const EducationSectionGeneration = ({ educations }) => {
  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} maxWidth="xl" className="educationsContainer" mt={2}>
      {Object.keys(educations).map((educationType) => (
        <Box key={educationType} className="educationContainer">
          <Box className="educationsHeadingContainer">
            <Avatar src={educations[educationType].src} />
            <Box className="educationHeadingContainer--text">
              <Typography sx={{fontSize: "1rem", lineHeight: "1rem", fontWeight: "600"}} className="educationType">
                {educationType} - {educations[educationType].educationInstitute}
              </Typography>
              <Typography sx={{fontSize: "1rem", lineHeight: "1rem", fontWeight: "400", color: "gray"}} className="educationYear">
                {educations[educationType].endDate ? (
                  <>
                    {educations[educationType].startDate} -{" "}
                    {educations[educationType].endDate}
                  </>
                ) : (
                  -educations[educationType].startDate
                )}
              </Typography>
            </Box>
          </Box>

          <Box sx={{fontSize: "1rem",  fontWeight: "400", color: "gray"}}>{educations[educationType].result}</Box>

          {/* <Box className="educationChipContainer">
          {educations[educationType].map((education) => (
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
              label={education}
              key={education}
              className="educationChip"
            />
          ))}
          </Box> */}
        </Box>
      ))}
    </ Stack>
  );
};

export default EducationSectionGeneration;
