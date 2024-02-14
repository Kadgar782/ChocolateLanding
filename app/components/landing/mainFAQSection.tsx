"use client";
import React from "react";
import { CustomAccordion } from "../accordion";

export const FAQ = () => {
  const LorumIpsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse malesuada lacus ex, sit amet blandit leo loborti seget.";

  return (
    <section className="flex w-4/5 flex-row justify-around gap-4 pb-36 pt-28 max-md:pb-0">
      <section className="flex flex-col text-text">
        <h1 className="pb-10 text-5xl">
          <strong>FAQ</strong>
        </h1>
        <h2 className="text-2xl"> Answers to some questions you might have.</h2>
      </section>
      <section className="flex w-3/5 flex-col">
        <CustomAccordion accordionName="First" accordionContent={LorumIpsum} />
        <CustomAccordion accordionName="Second" accordionContent={LorumIpsum} />
        <CustomAccordion accordionName="Third" accordionContent={LorumIpsum} />
        <CustomAccordion accordionName="Fourth" accordionContent={LorumIpsum} />
        <CustomAccordion accordionName="Fifth" accordionContent={LorumIpsum} />
        <CustomAccordion accordionName="Sixth" accordionContent={LorumIpsum} />
      </section>
    </section>
  );
};
