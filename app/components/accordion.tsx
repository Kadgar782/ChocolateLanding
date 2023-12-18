"use client";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import { ChevronUp } from "lucide-react";
import React from "react";
import { useState } from "react";

export interface SingleAccordion {
  accordionName: string;
  accordionContent: string;
}

function Icon(open: boolean) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        open ? "rotate-180" : ""
      } mr-2 h-8 w-8  transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
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
      icon={Icon(isOpen)}
      open={isOpen}
      className=" relative mb-8 box-border cursor-pointer rounded-lg border border-secondary bg-secondary bg-clip-border px-1 text-text"
    >
      <AccordionHeader
        className=" bg-secondary pb-3 pl-3 pt-3 text-2xl"
        onClick={() => handleAccordionChange()}
      >
        {accordionName}
      </AccordionHeader>
      <AccordionBody className="bg-secondary pb-3 pl-3 pt-3 text-xl">
        {accordionContent}
      </AccordionBody>
    </Accordion>
  );
};
