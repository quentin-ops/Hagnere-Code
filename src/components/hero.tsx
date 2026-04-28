import React from "react";
import { Container } from "./container";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import Link from "next/link";
import { LandingImages } from "./landing-images";
import { GradientDivider } from "./gradient-divider";
import { cn } from "@/lib/utils";
import { IconArrowRight } from "@tabler/icons-react";

export const Hero = () => {
  return (
    <section className="pt-10 md:pt-20 lg:pt-32 relative overflow-hidden perspective-distant">
      <Container className="relative z-10">
        <p className="text-sm text-muted-foreground mb-4">
          Agence de développement logiciels boostés à l&apos;IA
        </p>
        <Heading as="h1">
          Développement de logiciels et automatisations IA sur-mesure pour entreprises
        </Heading>

        <Subheading className="py-8">
          Nous concevons des SaaS, outils métiers et agents IA qui automatisent vos processus,
          réduisent les tâches manuelles et libèrent jusqu&apos;à 30 à 50 % du temps opérationnel de vos équipes.
        </Subheading>
        <div className="flex items-center gap-4">
          <Link
            href="/demarrer-un-projet"
            className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-black shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:shadow-[0_0_40px_rgba(255,255,255,0.7)] transition-all duration-300"
          >
            <span>Démarrer un projet</span>
            <IconArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-6 py-3 text-sm font-medium text-black dark:text-white transition hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            Nous contacter
          </Link>
        </div>
        <LandingImages />
      </Container>
      <div className="relative z-10">
        <GradientDivider />
      </div>

      {/* 3D Grid Background */}
      <div
        className={cn(
          "pointer-events-none z-0 h-[200%]",
          "absolute -inset-x-[150%] -bottom-40",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,var(--color-neutral-300)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-300)_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,var(--color-neutral-700)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-700)_1px,transparent_1px)]",
          "[mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,white,transparent)]"
        )}
        style={{
          transform: "rotateX(60deg)",
        }}
      />
    </section>
  );
};
