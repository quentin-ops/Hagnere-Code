import React from "react";
import { Container } from "./container";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { Button } from "./ui/button";
import Link from "next/link";
import { LandingImages } from "./landing-images";
import { GradientDivider } from "./gradient-divider";

export const Hero = () => {
  return (
    <section className="pt-10 md:pt-20 lg:pt-32 relative overflow-hidden">
      <Container>
        <p className="text-sm text-muted-foreground mb-4">
          Agence de développement logiciels boostés à l&apos;IA
        </p>
        <Heading as="h1">
          Développement de SaaS, outils et applications sur-mesure boostés à l&apos;IA
        </Heading>

        <Subheading className="py-8">
          Votre vision est notre seule limite. Nous concevons et développons des solutions digitales innovantes,
          parfaitement adaptées à vos besoins et propulsées par l&apos;intelligence artificielle.
        </Subheading>
        <div className="flex items-center gap-6">
          <Button className="shadow-brand">Démarrer un projet</Button>
          <Button asChild variant="outline">
            <Link href="/contact">Nous contacter</Link>
          </Button>
        </div>
        <LandingImages />
      </Container>
      <GradientDivider />
    </section>
  );
};
