"use client";
import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";
import { IconTarget, IconTool, IconChartLine, IconArrowRight } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    icon: <IconTarget className="h-8 w-8 text-indigo-400" />,
    title: "Nous identifions les tâches qui vous coûtent réellement du temps et de l'argent",
    description:
      "Nous analysons vos processus, vos outils et vos flux de données pour cibler précisément ce qui peut être automatisé ou simplifié rapidement, sans bouleverser votre organisation.",
    content: (
      <Image
        src="/images/method-diagnostic.webp"
        alt="Diagnostic - Identification des problèmes"
        width={1000}
        height={667}
        className="rounded-2xl shadow-2xl shadow-red-500/20 border border-neutral-800 object-cover"
      />
    ),
  },
  {
    icon: <IconTool className="h-8 w-8 text-indigo-400" />,
    title: "Nous développons des solutions adaptées à vos usages, pas des outils génériques",
    description:
      "Logiciels métiers, automatisations, agents IA, intégrations sur-mesure : nous construisons uniquement ce qui a un impact direct sur votre efficacité opérationnelle.",
    content: (
      <Image
        src="/images/method-development.webp"
        alt="Développement - Solutions sur-mesure"
        width={1000}
        height={563}
        className="rounded-2xl shadow-2xl shadow-indigo-500/20 border border-neutral-800 object-cover"
      />
    ),
  },
  {
    icon: <IconChartLine className="h-8 w-8 text-indigo-400" />,
    title: "Nous mesurons les gains et faisons évoluer la solution dans le temps",
    description:
      "Les performances sont suivies, les processus ajustés et les automatisations améliorées pour maximiser les gains réels pour vos équipes.",
    content: (
      <Image
        src="/images/method-measurement.webp"
        alt="Mesure - Suivi des performances"
        width={1000}
        height={667}
        className="rounded-2xl shadow-2xl shadow-green-500/20 border border-neutral-800 object-cover"
      />
    ),
  },
];

const Rectangles = ({
  className,
  ...props
}: {
  className?: string;
  style?: React.CSSProperties;
}) => {
  const rectangleSVGLight = `<svg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'><rect width='40' height='40' x='0' y='0' stroke='rgba(0,0,0,0.05)' fill='none' /></svg>`;
  const rectangleSVGDark = `<svg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'><rect width='40' height='40' x='0' y='0' stroke='rgba(255,255,255,0.08)' fill='none' /></svg>`;
  const encodedRectangleSVGLight = encodeURIComponent(rectangleSVGLight);
  const encodedRectangleSVGDark = encodeURIComponent(rectangleSVGDark);
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden",
        className,
      )}
      {...props}
    >
      <div
        className={cn("h-full w-full dark:hidden")}
        style={{
          backgroundImage: `url("data:image/svg+xml,${encodedRectangleSVGLight}")`,
          backgroundSize: "40px 40px",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      />
      <div
        className={cn("hidden h-full w-full dark:block")}
        style={{
          backgroundImage: `url("data:image/svg+xml,${encodedRectangleSVGDark}")`,
          backgroundSize: "40px 40px",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      />
    </div>
  );
};

const Background = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden [perspective:1000px] [transform-style:preserve-3d]">
      <Rectangles
        style={{ transform: "rotateX(45deg)" }}
        className="[mask-image:linear-gradient(to_top,white,transparent)]"
      />
      <Rectangles
        style={{ transform: "rotateX(-45deg)" }}
        className="[mask-image:linear-gradient(to_bottom,white,transparent)]"
      />
    </div>
  );
};

export function FeaturesWithStickyScroll() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full">
      <div
        ref={ref}
        className="relative h-full w-full pt-20 md:pt-40 border-y border-neutral-800 bg-neutral-950 overflow-hidden"
      >
        <Background />
        <div className="relative z-10 flex flex-col items-center px-6 text-center">
          <span className="text-sm font-medium text-indigo-400 uppercase tracking-wider">
            Notre méthode
          </span>
          <h2 className="mt-4 text-lg font-bold text-white md:text-2xl lg:text-4xl max-w-2xl">
            Comment on transforme vos problèmes en gains concrets
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-neutral-400 md:text-base">
            Une méthode claire pour automatiser, simplifier et mesurer les résultats.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-black shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:shadow-[0_0_40px_rgba(255,255,255,0.7)] transition-all duration-300"
            >
              <span>Démarrer un projet</span>
              <IconArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-neutral-700 bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              Nous contacter
            </Link>
          </div>
        </div>
        <StickyScroll content={features} />
      </div>
    </div>
  );
}

export const StickyScroll = ({
  content,
}: {
  content: { title: string; description: string; icon?: React.ReactNode }[];
}) => {
  return (
    <div className="py-4 md:py-20">
      <motion.div className="relative mx-auto hidden h-full max-w-7xl flex-col justify-between p-10 lg:flex">
        {content.map((item, index) => (
          <ScrollContent key={item.title + index} item={item} index={index} />
        ))}
      </motion.div>
      <motion.div className="relative mx-auto flex max-w-7xl flex-col justify-between p-10 lg:hidden">
        {content.map((item, index) => (
          <ScrollContentMobile
            key={item.title + index}
            item={item}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  );
};

export const ScrollContent = ({
  item,
  index,
}: {
  item: {
    title: string;
    description: string;
    icon?: React.ReactNode;
    content?: React.ReactNode;
  };
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const translate = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const translateContent = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.5, 0.7, 1],
    [0, 1, 1, 0, 0],
  );

  const opacityContent = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0, 0, 1, 1, 0],
  );

  return (
    <motion.div
      ref={ref}
      transition={{ duration: 0.3 }}
      key={item.title + index}
      className="relative my-40 grid grid-cols-2 gap-8 items-center"
    >
      <div className="w-full">
        <motion.div
          style={{ y: translate, opacity: index === 0 ? opacityContent : 1 }}
          className=""
        >
          <div>{item.icon}</div>
          <motion.h2 className="mt-2 inline-block max-w-md text-left text-2xl font-bold text-white lg:text-4xl">
            {item.title}
          </motion.h2>

          <motion.p className="font-regular mt-4 max-w-sm text-base text-neutral-400">
            {item.description}
          </motion.p>
        </motion.div>
      </div>
      <motion.div
        key={item.title + index}
        style={{ y: translateContent, opacity: opacity }}
        className="h-full w-full rounded-md"
      >
        {item.content && item.content}
      </motion.div>
    </motion.div>
  );
};

export const ScrollContentMobile = ({
  item,
  index,
}: {
  item: {
    title: string;
    description: string;
    icon?: React.ReactNode;
    content?: React.ReactNode;
  };
  index: number;
}) => {
  return (
    <motion.div
      transition={{ duration: 0.3 }}
      key={item.title + index}
      className="relative my-10 flex flex-col md:flex-row md:gap-20"
    >
      <motion.div
        key={item.title + index}
        className="mb-8 w-full self-start rounded-md"
      >
        {item.content && item.content}
      </motion.div>
      <div className="w-full">
        <motion.div className="mb-6">
          <div>{item.icon}</div>
          <motion.h2 className="mt-2 inline-block text-left text-2xl font-bold text-white lg:text-4xl">
            {item.title}
          </motion.h2>

          <motion.p className="mt-4 max-w-sm text-sm text-neutral-400 md:text-base">
            {item.description}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};
