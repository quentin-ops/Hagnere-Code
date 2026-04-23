"use client";

import { useRef, useMemo } from "react";
import { bodyHtml as raw } from "./body";
import { stripFooter, stripFinalCta } from "@/components/design-shared/stripBody";
import { useDesignInteractive } from "@/components/design-shared/useDesignInteractive";
import { useMethodeToc } from "./useMethodeToc";
import { SiteFooter } from "@/components/design-shared/SiteFooter";
import "./page.css";
import "@/components/design-shared/nav-dropdown.css";
import "@/components/design-shared/responsive.css";
import "@/components/design-shared/site-footer.css";

const FR_MONTHS = [
  "JANVIER",
  "FÉVRIER",
  "MARS",
  "AVRIL",
  "MAI",
  "JUIN",
  "JUILLET",
  "AOÛT",
  "SEPTEMBRE",
  "OCTOBRE",
  "NOVEMBRE",
  "DÉCEMBRE",
];

function formatLastUpdate(d: Date): string {
  return `${d.getDate()} ${FR_MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

const cleaned = stripFooter(stripFinalCta(raw));

export function MethodePage() {
  const rootRef = useRef<HTMLDivElement>(null);
  useDesignInteractive(rootRef);
  useMethodeToc(rootRef);

  const html = useMemo(
    () => cleaned.replaceAll("{{LAST_UPDATE}}", formatLastUpdate(new Date())),
    [],
  );
  const markup = { __html: html };
  return (
    <div ref={rootRef} className="hc-design">
      <div dangerouslySetInnerHTML={markup} />
      <SiteFooter />
    </div>
  );
}
