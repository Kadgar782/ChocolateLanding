"use client";
import "./css/details.css";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ChevronUp } from "lucide-react";
import React from "react";
import { useState } from "react";

export interface SingleAccordion {
  accordionName: string;
  accordionContent: string;
}

export const CustomAccordion = ({
  accordionName,
  accordionContent,
}: SingleAccordion) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  //this is necessary because otherwise both summary and details will have borderRadius in the accordion and it will not look very good
  const handleAccordionChange = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Accordion
      className="bg-bacgroundCard relative mb-8  box-border cursor-pointer rounded-md text-text"
      sx={{ backgroundColor: "#45190c", boxShadow: 0 }}
      onChange={handleAccordionChange}
      expanded={isOpen}
    >
      <AccordionSummary
        expandIcon={<ChevronUp stroke="#bca66e" />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{
          backgroundColor: "#240800",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          //if the accordion is open, the borderRadius will be removed from the bottom of the Summary

          borderBottomLeftRadius: isOpen ? 0 : "10px",
          borderBottomRightRadius: isOpen ? 0 : "10px",
        }}
      >
        <h1 className="text-2xl text-text ">{accordionName}</h1>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          backgroundColor: "#240800",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
        }}
      >
        <p className="bg-secondary text-lg text-text">{accordionContent}</p>
      </AccordionDetails>
    </Accordion>
  );
};
