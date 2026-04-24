"use client";

import React, { useId } from "react";
import { IconCode, IconDeviceDesktop, IconRobot, IconChartBar } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const offers = [
  {
    icon: IconCode,
    title: "Développement web & applications métiers",
    description:
      "Applications, portails et outils internes conçus pour simplifier vos opérations, centraliser vos données et accélérer vos équipes.",
    iconColor: "text-blue-400",
  },
  {
    icon: IconDeviceDesktop,
    title: "Logiciels métiers & SaaS sur-mesure",
    description:
      "Des logiciels alignés sur vos processus, pensés pour évoluer : rôles, workflows, API, reporting, scalabilité.",
    iconColor: "text-violet-400",
  },
  {
    icon: IconRobot,
    title: "IA & automatisation des processus",
    description:
      "Agents IA, workflows et intégrations pour réduire drastiquement les tâches manuelles, fiabiliser l'exécution et gagner du temps.",
    iconColor: "text-emerald-400",
  },
  {
    icon: IconChartBar,
    title: "SEO, SEA & contenu (web + YouTube)",
    description:
      "Une stratégie complète pour attirer des clients : SEO technique, contenus, Google Ads, vidéo, suivi des conversions et optimisation continue.",
    iconColor: "text-orange-400",
  },
];

const DEFAULT_GRID_PATTERN = [
  [8, 2],
  [10, 5],
  [7, 3],
  [9, 6],
  [11, 4],
];

export function Offers() {
  return (
    <section className="pt-20 md:pt-40 pb-8">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-indigo-400 uppercase tracking-wider">
            Nos offres
          </span>
          <h2 className="mt-4 text-2xl font-bold text-neutral-900 dark:text-white md:text-4xl">
            Des solutions adaptées à chaque besoin
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
            Quatre piliers pour transformer votre entreprise : développement, automatisation,
            intelligence artificielle et acquisition.
          </p>
        </div>

        <div className="border border-neutral-200 dark:border-neutral-800 rounded-t-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {offers.map((offer, index) => (
              <OfferCard key={index} offer={offer} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function OfferCard({
  offer,
  index,
}: {
  offer: {
    icon: React.ElementType;
    title: string;
    description: string;
    iconColor: string;
  };
  index: number;
}) {
  const Icon = offer.icon;

  return (
    <div
      className={cn(
        "group/card relative overflow-hidden p-6 md:p-8 bg-white dark:bg-neutral-950",
        // Mobile: bordure en bas sauf dernière carte
        index < 3 && "border-b md:border-b-0 border-neutral-200 dark:border-neutral-800",
        // Tablet (2 colonnes): bordure droite pour cartes 0 et 2, bordure bas pour cartes 0 et 1
        index % 2 === 0 && "md:border-r lg:border-r-0 border-neutral-200 dark:border-neutral-800",
        index < 2 && "md:border-b lg:border-b-0 border-neutral-200 dark:border-neutral-800",
        // Desktop (4 colonnes): bordure droite sauf dernière carte
        index < 3 && "lg:border-r border-neutral-200 dark:border-neutral-800"
      )}
    >
      <Grid size={20} />
      <EdgeElement />

      <div className="relative z-10">
        <IconContainer>
          <Icon className={cn("h-5 w-5", offer.iconColor)} />
        </IconContainer>

        <h3 className="mt-4 text-base font-semibold text-neutral-900 dark:text-white">
          {offer.title}
        </h3>

        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {offer.description}
        </p>
      </div>
    </div>
  );
}

const EdgeElement = () => {
  return (
    <div className="absolute right-0 top-0 h-8 w-8 overflow-hidden border-b border-l bg-white shadow-[-3px_4px_9px_0px_rgba(0,0,0,0.1)] transition duration-200 group-hover/card:-translate-y-10 group-hover/card:translate-x-10 dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-[-3px_4px_9px_0px_rgba(255,255,255,0.1)]">
      <div className="absolute left-0 top-0 h-[1px] w-[141%] origin-top-left rotate-45 bg-neutral-200 dark:bg-neutral-700" />
    </div>
  );
};

const IconContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-b from-neutral-200 to-white to-[50%] p-0.5 dark:from-neutral-700 dark:to-black">
      <div className="flex h-full w-full items-center justify-center rounded-md bg-gradient-to-b from-neutral-500 to-neutral-800 dark:from-neutral-600 dark:to-neutral-900">
        {children}
      </div>
    </div>
  );
};

const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size: number;
}) => {
  const p = pattern ?? DEFAULT_GRID_PATTERN;
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-100/30 to-zinc-300/30 opacity-100 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 dark:to-zinc-900/30">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full fill-black/10 stroke-black/10 mix-blend-overlay dark:fill-white/10 dark:stroke-white/10"
        />
      </div>
    </div>
  );
};

function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  ...props
}: {
  width: number;
  height: number;
  x: number | string;
  y: number | string;
  squares: number[][];
} & React.SVGProps<SVGSVGElement>) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([squareX, squareY], idx) => (
            <rect
              strokeWidth="0"
              key={`${idx}-${squareX}-${squareY}`}
              width={width + 1}
              height={height + 1}
              x={squareX * width}
              y={squareY * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
