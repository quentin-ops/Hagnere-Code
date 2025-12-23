"use client";
import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";

export function StatsSection() {
  const items = [
    {
      value: 4300,
      prefix: "≈",
      suffix: "h/an",
      description: "économisées grâce à l'automatisation intelligente pour une entreprise de 15 personnes, après automatisation ciblée des tâches répétitives et des workflows internes.",
    },
    {
      value: 190000,
      prefix: "≈",
      suffix: "€/an",
      description: "de coût de main-d'œuvre réalloué vers des tâches à plus forte valeur ajoutée : production, relation client, développement commercial.",
    },
    {
      value: 30,
      prefix: "-",
      suffix: "%",
      description: "de temps perdu sur des tâches à faible valeur ajoutée grâce à la suppression des ressaisies et l'automatisation des processus transverses.",
    },
    {
      value: 2,
      prefix: "×",
      suffix: "à ×3",
      description: "de retour sur investissement constaté — le gain annuel dépasse généralement le coût du projet dès la première année.",
    },
  ];

  return (
    <section className="relative mx-auto w-full max-w-7xl overflow-hidden px-6 py-20 md:py-32">
      {/* Halo violet */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[600px] rounded-full bg-violet-500/10 blur-[100px]" />
      </div>
      <div className="relative z-20">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-violet-600 dark:text-violet-400">
          Résultats concrets
        </p>
        <h2 className="mt-4 text-center text-2xl font-bold text-neutral-800 md:text-4xl dark:text-neutral-100">
          Des performances mesurables pour votre entreprise
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base text-neutral-600 md:text-lg dark:text-neutral-300">
          Chaque projet est conçu pour générer un impact réel sur votre productivité, vos coûts et votre croissance.
        </p>
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <motion.div
              initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
              whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={"stat-card-" + index}
              className={cn(
                "group relative overflow-hidden rounded-2xl p-6",
                "bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950",
                "border border-neutral-200 dark:border-neutral-800"
              )}
            >
              <div className="flex items-baseline gap-1">
                {item.prefix && (
                  <span className="text-2xl font-bold text-neutral-400 dark:text-neutral-500">
                    {item.prefix}
                  </span>
                )}
                <p className="text-4xl font-bold text-neutral-900 dark:text-white">
                  <AnimatedNumber value={item.value} />
                </p>
                {item.suffix && (
                  <span className="text-2xl font-bold text-neutral-400 dark:text-neutral-500">
                    {item.suffix}
                  </span>
                )}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
        <p className="mt-10 text-center text-xs text-neutral-400 dark:text-neutral-500">
          Estimations basées sur des projets comparables. Les résultats varient selon le périmètre, le niveau d&apos;automatisation et l&apos;organisation de l&apos;entreprise.
        </p>
      </div>
    </section>
  );
}

function AnimatedNumber({
  value,
  initial = 0,
}: {
  value: number;
  initial?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const spring = useSpring(initial, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString("fr-FR")
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}
