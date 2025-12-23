"use client";

import { motion } from "motion/react";
import React from "react";

import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Heading } from "./heading";
import { Subheading } from "./subheading";

const leadership = [
  {
    id: 1,
    name: "Quentin Hagnéré",
    role: "CEO & Fondateur",
    image: "/team/quentin.webp",
    description: "Expert en développement logiciel et stratégie digitale",
  },
  {
    id: 2,
    name: "Frédéric Curincks",
    role: "Directeur Technique",
    image: "/team/frederic.jpeg",
    description: "Architecte solutions IA et systèmes complexes",
  },
  {
    id: 3,
    name: "Ryan Mazzitelli",
    role: "Manager Projets",
    image: "/team/ryan.jpeg",
    description: "Coordination et suivi de projets digitaux",
  },
];

const teamMembers = [
  {
    id: 4,
    role: "Développeur Full-Stack",
    initials: "FS",
  },
  {
    id: 5,
    role: "Développeur Backend",
    initials: "BE",
  },
  {
    id: 6,
    role: "Ingénieur IA",
    initials: "IA",
  },
  {
    id: 7,
    role: "Ingénieur DevOps",
    initials: "DO",
  },
  {
    id: 8,
    role: "Designer UI/UX",
    initials: "UX",
  },
  {
    id: 9,
    role: "Product Manager",
    initials: "PM",
  },
  {
    id: 10,
    role: "Consultant SEO",
    initials: "SE",
  },
  {
    id: 11,
    role: "Rédacteur SEO",
    initials: "RS",
  },
  {
    id: 12,
    role: "Monteur Vidéo",
    initials: "MV",
  },
];

interface TeamProps {
  className?: string;
}

const Team = ({ className }: TeamProps) => {
  return (
    <section className={cn("py-20 md:py-32", className)}>
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <Heading className="mb-4">
            L&apos;équipe derrière{" "}
            <span className="bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-900 dark:from-white dark:via-neutral-400 dark:to-white bg-clip-text text-transparent">
              votre succès
            </span>
          </Heading>
          <Subheading className="mx-auto">
            Des experts passionnés qui transforment vos idées en solutions
            digitales performantes
          </Subheading>
        </div>

        {/* Leadership Section */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent" />
            <span className="text-sm font-medium tracking-widest uppercase text-neutral-500 dark:text-neutral-400">
              Direction
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 max-w-3xl mx-auto">
            {leadership.map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="group text-center"
              >
                <div className="relative overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900 mb-4 mx-auto w-32 h-32 lg:w-40 lg:h-40">
                  <motion.div
                    className="h-full w-full overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover object-top grayscale"
                    />
                  </motion.div>
                </div>
                <div>
                  <h3 className="font-display text-base lg:text-lg font-semibold tracking-tight text-neutral-900 dark:text-white mb-0.5">
                    {member.name}
                  </h3>
                  <p className="text-xs font-medium text-neutral-600 dark:text-neutral-400 mb-1">
                    {member.role}
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-500">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Members Section */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent" />
            <span className="text-sm font-medium tracking-widest uppercase text-neutral-500 dark:text-neutral-400">
              Nos autres Experts Internes
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent" />
          </div>

          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-9 gap-4 lg:gap-6">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.05,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="group text-center"
              >
                <motion.div
                  className="w-14 h-14 lg:w-16 lg:h-16 mx-auto mb-3 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="font-display text-sm lg:text-base font-semibold text-neutral-600 dark:text-neutral-300">
                    {member.initials}
                  </span>
                </motion.div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-tight">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
};

export { Team };
