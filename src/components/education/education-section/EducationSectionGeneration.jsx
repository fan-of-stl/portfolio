import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";

const EducationSectionGeneration = ({ educations }) => {
  return (
    <Grid container spacing={2} mt={2}>
      {Object.keys(educations).map((educationType) => (
        <Grid item xs={12} sm={6} md={4} key={educationType}>
          <Box
            sx={{
              border: "1px solid #e1e0e0",
              p: 2,
              borderRadius: 2,

              // ❌ remove these
              // height: "100%",
              // justifyContent: "space-between",

              display: "flex",
              flexDirection: "column",
              gap: 1.5, // ✅ better spacing control

              transition: "0.3s",
              "&:hover": {
                boxShadow: "0px 8px 20px rgba(0,0,0,0.1)",
                transform: "translateY(-4px)",
              },
            }}
          >
            <Box display="flex" gap={1}>
              <Avatar src={educations[educationType].src} />
              <Box>
                <Typography fontSize="0.95rem" fontWeight={600}>
                  {educationType} -{" "}
                  {educations[educationType].educationInstitute}
                </Typography>

                <Typography fontSize="0.8rem" color="gray">
                  {educations[educationType].endDate
                    ? `${educations[educationType].startDate} - ${educations[educationType].endDate}`
                    : educations[educationType].startDate}
                </Typography>
              </Box>
            </Box>

            <Typography fontSize="0.9rem" color="gray" mt={1}>
              {educations[educationType].result}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default EducationSectionGeneration;
