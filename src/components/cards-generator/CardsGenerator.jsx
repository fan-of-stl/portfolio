import { Stack } from "@mui/material";
import React from "react";
import "./CardsGenerator.css";
import CardComponent from "../card/CardComponent";

const CardsGenerator = ({ data, keyVal }) => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }} // Column for small screens, row for larger
      key={keyVal}
    >
      {Object.keys(data).map((key) => (
        <CardComponent
          {...data[key]}
          heading={key}
          key={key}
        />
      ))}
    </Stack>
  );
};

export default CardsGenerator;
