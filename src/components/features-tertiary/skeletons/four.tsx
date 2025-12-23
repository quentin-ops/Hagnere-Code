"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
  IconClipboardData,
  IconFeatherFilled,
  IconFileDotsFilled,
  IconFilter2Search,
  IconPointerUp,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export const SkeletonFour = () => {
  const items = [
    {
      title: "Traçabilité & audit",
      screenTitle: "Audit & traçabilité des actions",
      icon: <IconClipboardData className="size-4 text-blue-500" />,
      className:
        "bg-blue-100 border border-blue-200 dark:bg-blue-100/10 dark:border-blue-200/10",
      description:
        "Chaque action, modification ou génération est tracée et horodatée. Vous disposez d'une visibilité complète sur les décisions, les livrables et les évolutions du projet.",
    },
    {
      title: "Accès et rôles",
      screenTitle: "Gestion des accès par rôle",
      icon: <IconFileDotsFilled className="size-4 text-green-500" />,
      className:
        "bg-green-100 border border-green-200 dark:bg-green-100/10 dark:border-green-200/10",
      description:
        "Les droits sont définis selon les rôles : consultation, validation, administration. Vous gardez le contrôle sur qui peut agir, modifier ou valider les éléments du projet.",
    },
    {
      title: "Validation humaine",
      screenTitle: "Validation humaine intégrée",
      icon: <IconFeatherFilled className="size-4 text-indigo-500" />,
      className:
        "bg-indigo-100 border border-indigo-200 dark:bg-indigo-100/10 dark:border-indigo-200/10",
      description:
        "Les livrables critiques passent par des étapes de validation avant mise en production. L'IA accélère, l'humain décide.",
    },
    {
      title: "Qualité & cohérence",
      screenTitle: "Contrôles de qualité automatisés",
      icon: <IconPointerUp className="size-4 text-neutral-500" />,
      className:
        "bg-neutral-100 border border-neutral-200 dark:bg-neutral-100/10 dark:border-neutral-200/10",
      description:
        "Des contrôles sont appliqués pour garantir la cohérence fonctionnelle, la qualité du code et le respect des standards définis en amont.",
    },
    {
      title: "Conformité & sécurité",
      screenTitle: "Sécurité et conformité dès la conception",
      icon: <IconFilter2Search className="size-4 text-purple-500" />,
      className:
        "bg-purple-100 border border-purple-200 dark:bg-purple-100/10 dark:border-purple-200/10",
      description:
        "Gestion des accès, journalisation, conformité RGPD et bonnes pratiques de sécurité sont intégrées dès la phase de conception, sans surcoût ni ajout tardif.",
    },
  ];

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const currentIndexRef = useRef(0);

  const [selected, setSelected] = useState(items[0]);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  const startAutoplay = () => {
    stopAutoplay();

    intervalRef.current = setInterval(() => {
      currentIndexRef.current = (currentIndexRef.current + 1) % items.length;
      setSelected(items[currentIndexRef.current]);
    }, 2000);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };
  return (
    <div>
      <div className="flex gap-4 items-center justify-center max-w-lg mx-auto flex-wrap mb-4">
        {items.map((item, idx) => (
          <button
            key={item.title}
            onClick={() => setSelected(item)}
            className={cn(
              "px-2 py-1 rounded-sm relative text-xs gap-1 cursor-pointer active:scale-98 transition duration-200 flex items-center justify-center opacity-50",
              selected.title === item.title && "opacity-100",
              item.className
            )}
          >
            {selected.title === item.title && (
              <motion.div
                layoutId="selected-item"
                className="absolute inset-0 rounded-[5px] shadow-inner"
              ></motion.div>
            )}
            {item.icon}
            {item.title}
          </button>
        ))}
      </div>
      <div className="flex-1 rounded-t-3xl gap-2 flex flex-col bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-200 max-w-[20rem] lg:max-w-sm mx-auto w-full h-full absolute inset-x-0 p-2">
        <Card
          topIcon={selected.icon}
          title={selected.screenTitle}
          description={selected.description}
          className={selected.className}
        />
      </div>
    </div>
  );
};

const Card = ({
  topIcon,
  title,
  description,
  className,
}: {
  topIcon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <motion.div
      key={title}
      className="p-4 shadow-black/10 gap-4 border bg-white dark:bg-neutral-900 border-transparent ring-1 rounded-[16px] ring-black/10 flex items-start flex-col"
    >
      <div className="flex items-center gap-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={cn(
            "size-6 shrink-0 rounded-full flex mt-1 items-center justify-center",
            className
          )}
        >
          {topIcon}
        </motion.div>
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 0.1,
          }}
          className="text-lg font-bold text-neutral-800 dark:text-neutral-200"
        >
          {title}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
};

