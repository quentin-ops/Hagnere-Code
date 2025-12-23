"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "motion/react";

export function StatsGrowth() {
  const items = [
    {
      value: "+1 200 % à +1 600 %",
      description: "d'augmentation des impressions organiques grâce à une stratégie SEO technique et éditoriale ciblée, générant une visibilité durable sans dépendance à la publicité.",
    },
    {
      value: "+30 % à +200 %",
      description: "d'amélioration du taux de conversion grâce à des parcours utilisateurs optimisés, des pages rapides et des automatisations intelligentes.",
    },
    {
      value: "Donnée centralisée",
      isText: true,
      description: "Centralisation des informations, suppression des silos et création d'une base saine pour le pilotage, l'automatisation et l'IA.",
    },
    {
      value: "Actifs durables",
      isText: true,
      description: "SEO, outils métiers et automatisations conçus pour renforcer votre positionnement, votre efficacité et votre indépendance technologique.",
    },
  ];

  return (
    <section className="relative mx-auto w-full max-w-7xl overflow-hidden px-6 py-20 md:py-32">
      {/* Halo vert/bleu subtil */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[600px] rounded-full bg-emerald-500/8 blur-[100px]" />
      </div>
      <div className="relative z-20">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
          Croissance durable
        </p>
        <h2 className="mt-4 text-center text-2xl font-bold text-neutral-800 md:text-4xl dark:text-neutral-100">
          Des leviers durables pour votre croissance
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base text-neutral-600 md:text-lg dark:text-neutral-300">
          Au-delà des gains immédiats, nous construisons des actifs durables pour votre entreprise.
        </p>
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <motion.div
              initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
              whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={"growth-card-" + index}
              className={cn(
                "group relative overflow-hidden rounded-2xl p-6",
                "bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950",
                "border border-neutral-200 dark:border-neutral-800"
              )}
            >
              <div className="flex items-baseline gap-1">
                {item.isText ? (
                  <p className="text-2xl font-bold text-neutral-900 dark:text-white md:text-3xl">
                    {item.value}
                  </p>
                ) : (
                  <p className="text-3xl font-bold text-neutral-900 dark:text-white md:text-4xl">
                    {item.value}
                  </p>
                )}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
        <p className="mt-10 text-center text-xs text-neutral-400 dark:text-neutral-500">
          Résultats observés sur des projets SEO, d&apos;optimisation et de structuration de données. Les performances varient selon le secteur et le point de départ.
        </p>
      </div>
    </section>
  );
}
