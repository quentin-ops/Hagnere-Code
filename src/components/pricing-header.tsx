import React from "react";
import { Container } from "./container";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { LoopIcon, UsersIcon, LockIcon } from "@/icons";

export const PricingHeader = () => {
  return (
    <section className="py-10 md:py-20 lg:py-32 relative overflow-hidden">
      <Container className="flex flex-col items-center text-center">
        <Subheading className="mt-2">
          Trusted by 500+ enterprise companies
        </Subheading>
        <Heading className="mt-4">
          Affordable pricing. <br />
          Easy scaling.
        </Heading>
        <Subheading className="mt-4 max-w-2xl">
          Start small to explore automation, add agents as you scale, and
          unlock enterprise-grade guardrails, orchestration, and reporting
          when you're ready
        </Subheading>
        <ul className="list-none mt-8 flex flex-col sm:flex-row gap-6 sm:gap-10">
          <li className="flex items-center gap-2 font-medium">
            <LockIcon />
            <p>Built-in Guardrails</p>
          </li>
          <li className="flex items-center gap-2 font-medium">
            <UsersIcon />
            <p>Agent Orchestration</p>
          </li>
          <li className="flex items-center gap-2 font-medium">
            <LoopIcon />
            <p>Human-in-the-Loop</p>
          </li>
        </ul>
      </Container>
    </section>
  );
};
