"use client";

import { LogoIcon } from "@/components/logo";
import { cn } from "@/lib/utils";
import {
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTypescript,
  IconBrandTailwind,
  IconBrandLaravel,
  IconBrandPhp,
  IconBrandVite,
  IconDatabase,
  IconCircleDashedCheck,
} from "@tabler/icons-react";

export const SkeletonTwo = () => {
  return (
    <div
      className="flex-1 rounded-t-3xl gap-2 flex items-center justify-center  w-full h-full absolute inset-x-0 p-2"
      style={{
        transform: "rotateY(20deg) rotateX(20deg) rotateZ(-20deg)",
      }}
    >
      <Circle className="flex items-center justify-center border-neutral-200 dark:border-neutral-700 shadow-sm">
        <LogoIcon className="size-10 text-neutral-400" />
        {/* Orbite intérieure */}
        <RevolvingCard className="bg-white dark:bg-neutral-800">
          <IconBrandNextjs className="size-8" />
        </RevolvingCard>
        <RevolvingCard className="[--initial-position:120deg] [--translate-position:120px] [--orbit-duration:12s] bg-white dark:bg-neutral-800">
          <IconBrandReact className="size-8 text-cyan-500" />
        </RevolvingCard>
        <RevolvingCard className="[--initial-position:240deg] [--translate-position:120px] [--orbit-duration:12s] bg-white dark:bg-neutral-800">
          <IconBrandVite className="size-8 text-purple-500" />
        </RevolvingCard>

        {/* Orbite médiane */}
        <RevolvingCard className="[--initial-position:30deg] [--translate-position:160px] [--orbit-duration:18s] bg-white dark:bg-neutral-800">
          <IconBrandTypescript className="size-8 text-blue-600" />
        </RevolvingCard>
        <RevolvingCard className="[--initial-position:120deg] [--translate-position:160px] [--orbit-duration:18s] bg-white dark:bg-neutral-800">
          <IconBrandTailwind className="size-8 text-sky-400" />
        </RevolvingCard>
        <RevolvingCard className="[--initial-position:210deg] [--translate-position:160px] [--orbit-duration:18s] bg-white dark:bg-neutral-800">
          <IconBrandLaravel className="size-8 text-red-500" />
        </RevolvingCard>
        <RevolvingCard className="[--initial-position:300deg] [--translate-position:160px] [--orbit-duration:18s] bg-white dark:bg-neutral-800">
          <IconBrandPhp className="size-8 text-indigo-400" />
        </RevolvingCard>

        {/* Orbite extérieure */}
        <RevolvingCard className="[--initial-position:60deg] [--translate-position:200px] [--orbit-duration:25s] bg-white dark:bg-neutral-800">
          <IconDatabase className="size-8 text-emerald-500" />
        </RevolvingCard>

        <RevolvingCard className="[--initial-position:20deg] [--translate-position:250px] [--orbit-duration:30s] size-auto ring-0 shadow-none bg-transparent w-48">
          <SkeletonCard
            className="z-30 bg-white dark:bg-neutral-800"
            icon={<IconCircleDashedCheck className="size-4" />}
            title="Architecture scalable"
            description="Conçue pour évoluer avec votre activité sans refonte majeure."
          />
        </RevolvingCard>

        <RevolvingCard className="[--initial-position:180deg] [--translate-position:230px] [--orbit-duration:22s] size-auto ring-0 shadow-none bg-transparent w-44">
          <SkeletonCard
            className="z-30 bg-white dark:bg-neutral-800"
            icon={<IconCircleDashedCheck className="size-4" />}
            title="Code maintenable"
          />
        </RevolvingCard>
      </Circle>
      <Circle className="shadow border-neutral-100  dark:border-neutral-700 size-60 bg-neutral-100/80 z-[9] dark:bg-neutral-800/80 relative"></Circle>
      <Circle className="shadow border-neutral-100  dark:border-neutral-700 size-80 bg-neutral-100/60 z-[8] dark:bg-neutral-800/60"></Circle>
      <Circle className="shadow border-neutral-100  dark:border-neutral-700 size-100 bg-neutral-100/40 z-[7] dark:bg-neutral-800/40"></Circle>
      <Circle className="shadow border-neutral-100  dark:border-neutral-700 size-120 bg-neutral-100/20 z-[6] dark:bg-neutral-800/20"></Circle>
    </div>
  );
};

const SkeletonCard = ({
  icon,
  title,
  description,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  description?: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "w-full h-fit p-3 rounded-2xl border border-neutral-200 dark:border-neutral-700 shadow-2xl",
        className
      )}
    >
      <div className="flex gap-3 items-center">
        {icon}
        <p className="text-xs font-normal text-black dark:text-white">
          {title}
        </p>
      </div>
      {description && (
        <p className="text-[10px] text-neutral-400 dark:text-neutral-400 font-normal mt-3">
          {description}
        </p>
      )}
    </div>
  );
};

const RevolvingCard = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "size-10  flex absolute inset-0 m-auto items-center justify-center bg-white dark:bg-transparent  border border-transparent shadow-black/10 ring-1 ring-black/10 rounded-sm animate-orbit [--translate-position:120px] [--orbit-duration:10s]",
        className
      )}
    >
      {children}
    </div>
  );
};

const Circle = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "size-40 bg-white absolute inset-0 dark:bg-neutral-800  shrink-0 border z-[10] border-transparent rounded-full   m-auto",
        className
      )}
    >
      {children}
    </div>
  );
};
