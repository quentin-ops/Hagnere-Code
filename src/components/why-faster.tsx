"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { IconBrain, IconCode, IconComponents, IconUsers } from "@tabler/icons-react";

const blocks = [
  {
    icon: <IconBrain className="h-6 w-6" />,
    title: "L'intelligence artificielle intégrée à chaque étape",
    description:
      "Nous utilisons les modèles d'IA les plus avancés pour accélérer la conception, le développement et l'optimisation de vos projets. L'IA n'est pas un gadget : c'est un levier de productivité quotidien, encadré par des développeurs seniors.",
    bullets: [
      "Accélération du développement et du refactoring",
      "Amélioration continue de la qualité du code",
      "Gain de temps sans compromis sur la robustesse",
    ],
  },
  {
    icon: <IconCode className="h-6 w-6" />,
    title: "Des stacks techniques adaptées, pas des choix par défaut",
    description:
      "Chaque projet repose sur une stack technique choisie pour sa performance, sa maintenabilité et sa capacité à évoluer. Nous nous appuyons sur des frameworks éprouvés pour éviter de réinventer l'existant et accélérer la mise en œuvre.",
    bullets: [
      "Frameworks modernes et maintenus",
      "Composants UI robustes et performants",
      "Architecture pensée pour évoluer",
    ],
  },
  {
    icon: <IconComponents className="h-6 w-6" />,
    title: "Capitaliser sur des briques éprouvées",
    description:
      "Nous intégrons des librairies et composants existants lorsque cela a du sens, afin de concentrer l'effort sur ce qui crée réellement de la valeur pour votre activité. Résultat : moins de développement inutile, moins de bugs, et un budget mieux utilisé.",
    bullets: [],
  },
  {
    icon: <IconUsers className="h-6 w-6" />,
    title: "Des développeurs seniors, mobilisables rapidement",
    description:
      "Nos projets sont pilotés par des profils expérimentés, capables de prendre des décisions techniques rapidement et de s'adapter à des contextes complexes. Nous pouvons mobiliser les bonnes ressources au bon moment, y compris pour des besoins urgents.",
    bullets: [],
  },
];

export function WhyFaster() {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden">
      {/* Halo subtil */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-indigo-500/5 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/3 h-[300px] w-[300px] rounded-full bg-violet-500/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium uppercase tracking-wider text-indigo-500 dark:text-indigo-400"
          >
            Notre avantage
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-2xl font-bold text-neutral-800 md:text-4xl dark:text-neutral-100"
          >
            Une efficacité opérationnelle construite sur les bons outils,
            <br className="hidden md:block" /> les bonnes méthodes et les bonnes équipes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-3xl text-base text-neutral-600 md:text-lg dark:text-neutral-400"
          >
            Si nous livrons plus vite et avec moins de friction, ce n&apos;est pas par hasard.
            C&apos;est le résultat de choix technologiques clairs, d&apos;une adoption massive de l&apos;IA
            et d&apos;une organisation pensée pour l&apos;exécution.
          </motion.p>
        </div>

        {/* Blocks Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {blocks.map((block, index) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "group relative rounded-2xl p-6 md:p-8",
                "bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950",
                "border border-neutral-200 dark:border-neutral-800",
                "hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors duration-300"
              )}
            >
              {/* Icon */}
              <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-indigo-500/10 p-2.5 text-indigo-600 dark:text-indigo-400">
                {block.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white md:text-xl">
                {block.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-base">
                {block.description}
              </p>

              {/* Bullets */}
              {block.bullets.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {block.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-500"
                    >
                      <span className="h-1 w-1 rounded-full bg-indigo-500" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="mx-auto max-w-3xl text-base text-neutral-600 dark:text-neutral-400 md:text-lg">
            Notre vitesse ne repose pas sur des promesses irréalistes, mais sur{" "}
            <span className="font-medium text-neutral-800 dark:text-neutral-200">
              une organisation, des outils et une expertise
            </span>{" "}
            conçus pour livrer efficacement, durablement et sans compromis.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
