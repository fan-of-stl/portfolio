import { Stack, MobileStepper, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CardComponent from "../card/CardComponent";

const CardsGenerator = ({ data }) => {
  const keys = Object.keys(data);
  const [activeStep, setActiveStep] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % keys.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [keys.length, isHovered]);

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % keys.length);
  };

  const handleBack = () => {
    setActiveStep((prev) =>
      prev === 0 ? keys.length - 1 : prev - 1
    );
  };

  return (
    <Stack alignItems="center">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}

          // 🔥 Hover effects
          whileHover={{
            scale: 1.03,
            boxShadow: "0px 12px 30px rgba(0,0,0,0.2)",
          }}

          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}

          style={{
            width: "100%",
            margin: "0 auto",}}
        >
          <CardComponent
            {...data[keys[activeStep]]}
            heading={keys[activeStep]}
          />
        </motion.div>
      </AnimatePresence>

      <MobileStepper
        steps={keys.length}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext}>
            Next
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack}>
            Back
          </Button>
        }
      />
    </Stack>
  );
};

export default CardsGenerator;