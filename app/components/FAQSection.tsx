import "./details.css";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ChevronUp } from "lucide-react";

export const FAQ = () => {
  return (
    <section className="flex w-4/5 flex-row justify-around gap-4 ">
      <section className="flex flex-col text-text">
        <h1> FAQ</h1>
        <h2> Answers to some questions you might have.</h2>
      </section>
      <section className="flex w-3/5 flex-col">
        <Accordion className="relative mb-8 box-border cursor-pointer rounded-md  bg-secondary text-text">
          <AccordionSummary
            expandIcon={<ChevronUp />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              backgroundColor: "#240800",
              borderRadius: "10px",
              borderColor: "#240800",
            }}
          >
            <h1 className="text-2xl text-text ">Accordion 1</h1>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#240800" }}>
            <p className="bg-secondary text-lg text-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion className="relative mb-8 box-border cursor-pointer rounded-md  bg-secondary text-text">
          <AccordionSummary
            expandIcon={<ChevronUp />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ backgroundColor: "#240800", borderRadius: "10px" }}
          >
            <h1 className="text-2xl text-text ">Accordion 1</h1>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#240800" }}>
            <p className="bg-secondary text-lg text-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion className="relative mb-8 box-border cursor-pointer rounded-md  bg-secondary text-text">
          <AccordionSummary
            expandIcon={<ChevronUp />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ backgroundColor: "#240800", borderRadius: "10px" }}
          >
            <h1 className="text-2xl text-text ">Accordion 1</h1>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#240800" }}>
            <p className="bg-secondary text-lg text-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion className="relative mb-8 box-border cursor-pointer rounded-md  bg-secondary text-text">
          <AccordionSummary
            expandIcon={<ChevronUp />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ backgroundColor: "#240800", borderRadius: "10px" }}
          >
            <h1 className="text-2xl text-text ">Accordion 1</h1>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#240800" }}>
            <p className="bg-secondary text-lg text-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion className="relative mb-8 box-border cursor-pointer rounded-md  bg-secondary text-text">
          <AccordionSummary
            expandIcon={<ChevronUp />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ backgroundColor: "#240800", borderRadius: "10px" }}
          >
            <h1 className="text-2xl text-text ">Accordion 1</h1>
          </AccordionSummary>
          <AccordionDetails sx={{ backgroundColor: "#240800" }}>
            <p className="bg-secondary text-lg text-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </p>
          </AccordionDetails>
        </Accordion>
      </section>
    </section>
  );
};
