"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackFunnelEvent } from "@/lib/funnel-analytics";

interface TrackedGuideCtaLinkProps {
  href: string;
  placement: string;
  className?: string;
  children: ReactNode;
  tabIndex?: number;
  ariaLabel?: string;
  primary?: boolean;
}

/**
 * Lien d'action commun aux guides. Il conserve le rendu natif des liens et
 * envoie, après consentement uniquement, un événement first-party anonyme.
 */
export function TrackedGuideCtaLink({
  href,
  placement,
  className,
  children,
  tabIndex,
  ariaLabel,
  primary = false,
}: TrackedGuideCtaLinkProps) {
  function handleClick() {
    const path = window.location.pathname;
    trackFunnelEvent("guide_cta_click", {
      guide: path.startsWith("/guides/") ? path.slice("/guides/".length) : path,
      placement,
      channel: href.startsWith("tel:") ? "phone" : "project",
      destination: href.slice(0, 160),
    });
  }

  const sharedProps = {
    className,
    onClick: handleClick,
    tabIndex,
    "aria-label": ariaLabel,
    ...(primary ? { "data-guide-primary-cta": "true" } : {}),
  };

  if (href.startsWith("tel:")) {
    return (
      <a href={href} {...sharedProps}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} {...sharedProps}>
      {children}
    </Link>
  );
}
