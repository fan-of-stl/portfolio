import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import CallIcon from "@mui/icons-material/Call";
import { GitHub, LinkedIn } from "@mui/icons-material";
import "./Contact.css";

const Contact = () => {
  return (
    <Container maxWidth="xl" className="contact" id="contact">
      <Typography
        sx={{ fontSize: "1.5rem", lineHeight: "1rem", fontWeight: "600" }}
      >
        Contact
      </Typography>
      <Typography
        sx={{
          fontSize: "1rem",
          lineHeight: "1rem",
          fontWeight: "400",
          color: "gray",
        }}
        mt={1}
        mb={1}
      >
        Reach out to me for any inquiries or collaborations.
      </Typography>
      <Stack className="contact-text">
        <Box className="iconAndText" sx={{ display: "flex", gap: 1 }}>
          <InboxOutlinedIcon sx={{ fontSize: "1rem" }} />
          <a
            href="mailto:username228212@gmail.com"
            target="_blank"
            rel="noreferrer noopener" // Updated here
            className="ref mailingref"
          >
            <Typography
              sx={{
                fontSize: "1rem",
                lineHeight: "1rem",
                fontWeight: "400",
                color: "gray",
              }}
            >
              username228212@gmail.com
            </Typography>
          </a>
        </Box>
        <Box className="iconAndText" sx={{ display: "flex", gap: 1 }}>
          <CallIcon sx={{ fontSize: "1rem" }} />
          <a
            href="tel:+917977017813"
            target="_blank"
            rel="noreferrer noopener" // Updated here
            className="ref calltoref"
          >
            <Typography
              sx={{
                fontSize: "1rem",
                lineHeight: "1rem",
                fontWeight: "400",
                color: "gray",
              }}
            >
              +917977017813
            </Typography>
          </a>
        </Box>
        <Box className="iconAndText" sx={{ display: "flex", gap: 1 }}>
          <a
            href="https://www.linkedin.com/in/abhishek228212/"
            target="_blank"
            rel="noreferrer noopener" // Updated here
            className="ref linkedinref"
          >
            <LinkedIn
              className="icon icon--linkedin"
              sx={{ fontSize: "2rem" }}
            />
          </a>
          <a
            href="https://github.com/fan-of-stl"
            target="_blank"
            rel="noreferrer noopener" // Updated here
            className="ref linkedinref"
          >
            <GitHub className="icon icon--github" sx={{ fontSize: "2rem" }} />
          </a>
        </Box>
      </Stack>
    </Container>
  );
};

export default Contact;
