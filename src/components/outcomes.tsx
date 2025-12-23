"use client";

import React from "react";
import { GradientDivider } from "./gradient-divider";
import { Container } from "./container";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import Image from "next/image";

export const Outcomes = () => {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-neutral-950 py-20">
      <Container className="flex flex-col items-center text-center">
        <Subheading>Nos réalisations</Subheading>
        <Heading className="mt-4">
          Nos meilleurs <br /> Saas et Sites
        </Heading>
        <div className="mt-12 w-full max-w-7xl">
          <Image
            src="/images/display.webp"
            alt="Nos réalisations - Affichage sur différents appareils"
            width={4000}
            height={2670}
            className="w-full h-auto"
            priority
          />
        </div>
      </Container>
      <GradientDivider />
    </section>
  );
};
