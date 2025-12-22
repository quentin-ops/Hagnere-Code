"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Logo = ({ className }: { className?: string }) => {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // Don't render until we know the theme
  if (isDark === null) {
    return (
      <Link href="/" className={cn("flex items-center h-8", className)}>
        <span className="sr-only">Hagnéré Code</span>
      </Link>
    );
  }

  const logoSrc = isDark
    ? "/logos/logo-dark.webp"
    : "/logos/logo-light.webp";

  return (
    <Link href="/" className={cn("flex items-center", className)}>
      <Image
        key={isDark ? "dark" : "light"}
        src={logoSrc}
        alt="Hagnéré Code"
        width={150}
        height={35}
        priority
        className="h-8 w-auto"
      />
    </Link>
  );
};

export const LogoIcon = (props: React.SVGAttributes<SVGSVGElement>) => {
  return (
    <svg
      width="20"
      height="15"
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.92285 14.8848H0V9.96191H4.92285V14.8848ZM19.6924 14.8848H9.84668V9.96191H4.92383V5.03809H9.84668V0.115234H19.6924V14.8848ZM9.84668 9.96191H14.7695V5.03906H9.84668V9.96191ZM4.92285 5.03809H0V0.115234H4.92285V5.03809Z"
        fill="currentColor"
      />
    </svg>
  );
};
