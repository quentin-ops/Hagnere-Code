"use client";

import {
  CogIcon,
  FileIcon,
  HumanIcon,
  ClaudeIcon,
  CursorIcon,
  CopilotIcon,
} from "@/icons";
import { cn } from "@/lib/utils";
import { motion, useInView } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

type Item = {
  title: string;
  topIcon: React.ReactNode;
  description: string;
  tags: { text: string; icon: React.ReactNode }[];
};

const ITEMS: Item[] = [
  {
    title: "Génération de code",
    topIcon: <FileIcon className="size-4" />,
    description:
      "Création de composants, fonctions et modules complets à partir de prompts en langage naturel.",
    tags: [
      { text: "Claude Code", icon: <ClaudeIcon className="size-3" /> },
      { text: "Cursor", icon: <CursorIcon className="size-3" /> },
      { text: "Copilot", icon: <CopilotIcon className="size-3" /> },
    ],
  },
  {
    title: "Refactoring intelligent",
    topIcon: <CogIcon className="size-4" />,
    description:
      "Analyse et restructuration automatique du code pour améliorer lisibilité et performances.",
    tags: [
      { text: "Claude Code", icon: <ClaudeIcon className="size-3" /> },
      { text: "Cursor", icon: <CursorIcon className="size-3" /> },
      { text: "Copilot", icon: <CopilotIcon className="size-3" /> },
    ],
  },
  {
    title: "Revue par un dev senior",
    topIcon: <HumanIcon className="size-4 text-white" />,
    description:
      "Chaque livrable est validé par un expert pour garantir qualité et maintenabilité.",
    tags: [
      { text: "Claude Code", icon: <ClaudeIcon className="size-3" /> },
      { text: "Cursor", icon: <CursorIcon className="size-3" /> },
      { text: "Copilot", icon: <CopilotIcon className="size-3" /> },
    ],
  },
];

const CARD_COLORS = [
  "var(--color-blue-500)",
  "var(--color-green-500)",
  "var(--color-red-500)",
];

export const SkeletonOne = () => {
  const [activeCards, setActiveCards] = useState<Item[]>([ITEMS[0]]);

  const ref = useRef<HTMLDivElement>(null);
  const hasStartedRef = useRef(false);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView || hasStartedRef.current) {
      return;
    }

    hasStartedRef.current = true;
    let nextIndex = 1;
    const interval = setInterval(() => {
      setActiveCards((prev) => {
        if (nextIndex >= ITEMS.length) {
          clearInterval(interval);
          return prev;
        }

        const next = [...prev, ITEMS[nextIndex]];
        nextIndex += 1;
        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      layout
      className="flex-1 rounded-t-3xl gap-2 flex flex-col bg-neutral-100  dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 max-w-[20rem] lg:max-w-sm mx-auto w-full h-full absolute inset-x-0 p-2"
    >
      {activeCards.map((item, idx) => (
        <Card key={item?.title} color={CARD_COLORS[idx % CARD_COLORS.length]} {...item} />
      ))}
    </motion.div>
  );
};

const Card = ({
  topIcon,
  title,
  description,
  tags,
  color,
}: {
  topIcon: React.ReactNode;
  title: string;
  description: string;
  tags: { text: string; icon: React.ReactNode }[];
  color: string;
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -10, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.2 }}
      className="p-4 shadow-black/10 gap-4 border bg-white dark:bg-neutral-800 border-transparent ring-1 rounded-[16px] ring-black/10 flex items-start"
    >
      <div
        className={cn(
          "size-6 shrink-0 rounded-full bg-blue-500 flex mt-1 items-center justify-center"
        )}
        style={{
          backgroundColor: color,
        }}
      >
        {topIcon}
      </div>
      <div>
        <p className="md:text-lg font-bold text-neutral-800 dark:text-neutral-200">
          {title}
        </p>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 text-balance">
          {description}
        </p>
        <div className="mt-2 flex flex-row flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <Tag key={tag.text + idx} text={tag.text} icon={tag.icon} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Tag = ({ text, icon }: { text: string; icon: React.ReactNode }) => {
  return (
    <div className="flex items-center gap-1 w-fit rounded-sm px-1 py-0.5 border border-neutral-200 dark:border-neutral-700 text-sm">
      {icon}
      <p className="text-xs text-neutral-500">{text}</p>
    </div>
  );
};
