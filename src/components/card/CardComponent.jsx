import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import React from "react";
import "./CardComponent.css";

const CardComponent = ({
  imagePath,
  heading,
  headline,
  bodyText,
  buttonName,
  buttonIcon,
  chipsList = [],
  key,
}) => {
  return (
    <Card
      sx={(theme) => ({
        width: "25%",
        [theme.breakpoints.up('xs')]: {
          m: 1,
          width: "100%",
        },
      })}
      key={key}
    >
      <CardMedia component="img" image={imagePath} alt={heading} />
      <CardContent>
        <Typography
          sx={{ fontSize: "1 rem", lineHeight: "1rem", fontWeight: "600" }}
        >
          {heading}
        </Typography>
        <Typography
          sx={{
            fontSize: "1rem",
            lineHeight: "1rem",
            fontWeight: "400",
            color: "gray",
          }}
        >
          {headline}
        </Typography>{" "}
        <Box className="text-body">{bodyText}</Box>
        <Box className="chips">
          {chipsList?.map((chip) => (
            <Chip
              label={chip}
              className="chip"
              sx={{
                fontSize: "0.8rem", // Extra small font size
                fontWeight: "400",
                padding: "2px 6px", // Smaller padding for a more compact size
                height: "20px",
                overflow: "break-word", // Adjust height for a smaller chip size
                borderRadius: 1,
              }}
              size="small"
              key={chip}
            />
          ))}
        </Box>
      </CardContent>
      <CardActions>
        <Button endIcon={buttonIcon}>{buttonName}</Button>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
