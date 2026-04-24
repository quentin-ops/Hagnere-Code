"use client";
import { cn } from "@/lib/utils";
import {
  IconWorld,
  IconApps,
  IconRocket,
  IconPlugConnected,
  IconBrain,
  IconSettingsAutomation,
  IconSearch,
  IconPencil,
  IconBrandGoogle,
} from "@tabler/icons-react";
import React, { useId } from "react";

const services = [
  {
    icon: IconWorld,
    title: "Sites vitrines & landing pages",
    description: "Pages premium, optimisées pour la conversion et le référencement.",
  },
  {
    icon: IconApps,
    title: "Webapps & portails clients",
    description: "Extranets, espaces clients et outils internes sur-mesure.",
  },
  {
    icon: IconRocket,
    title: "Développement SaaS",
    description: "Du MVP à la V3 : architecture scalable et évolutive.",
  },
  {
    icon: IconPlugConnected,
    title: "Intégrations & API",
    description: "CRM, ERP, facturation, banques et outils métiers connectés.",
  },
  {
    icon: IconBrain,
    title: "IA & agents intelligents",
    description: "Assistants autonomes, analyse de documents en temps réel, décisions augmentées par l'IA.",
  },
  {
    icon: IconSettingsAutomation,
    title: "Automatisations",
    description: "Workflows intelligents avec validations humaines intégrées.",
  },
  {
    icon: IconSearch,
    title: "SEO technique",
    description: "Indexation, performance, données structurées et Core Web Vitals.",
  },
  {
    icon: IconPencil,
    title: "Rédaction SEO",
    description: "Articles, pages piliers, FAQ et contenus optimisés.",
  },
  {
    icon: IconBrandGoogle,
    title: "Google Ads & YouTube",
    description: "Search, remarketing, vidéo et suivi des conversions.",
  },
];

const DEFAULT_GRID_PATTERN = [
  [8, 2],
  [10, 5],
  [7, 3],
  [9, 6],
  [11, 4],
];

export function ServicesChips() {
  return (
    <section className="pb-20 md:pb-40">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="border border-t-0 border-neutral-200 dark:border-neutral-800 rounded-b-2xl overflow-hidden">
          {/* Séparateur avec label */}
          <div className="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 px-6 py-3">
            <p className="text-center text-xs font-medium text-neutral-500 dark:text-neutral-500 uppercase tracking-wider">
              En détail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} total={services.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
  total,
}: {
  service: {
    icon: React.ElementType;
    title: string;
    description: string;
  };
  index: number;
  total: number;
}) {
  const Icon = service.icon;
  const isLastRow = index >= total - 3;
  const isLastInRow = (index + 1) % 3 === 0;

  return (
    <div
      className={cn(
        "group/card relative overflow-hidden p-6 md:p-8 bg-white dark:bg-neutral-950",
        !isLastRow && "border-b border-neutral-200 dark:border-neutral-800",
        !isLastInRow && "md:border-r border-neutral-200 dark:border-neutral-800"
      )}
    >
      <Grid size={20} />
      <EdgeElement />

      <div className="relative z-10">
        <IconContainer>
          <Icon className="h-5 w-5 text-white" />
        </IconContainer>

        <h3 className="mt-4 text-base font-semibold text-neutral-900 dark:text-white">
          {service.title}
        </h3>

        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {service.description}
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
