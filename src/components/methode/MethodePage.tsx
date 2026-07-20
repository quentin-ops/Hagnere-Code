"use client";

import { useRef } from "react";
import { bodyHtml as raw } from "./body";
import { stripFooter, stripFinalCta } from "@/components/design-shared/stripBody";
import { useDesignInteractive } from "@/components/design-shared/useDesignInteractive";
import { useMethodeToc } from "./useMethodeToc";
import { SiteFooter } from "@/components/design-shared/SiteFooter";
import "./page.css";
import "@/components/design-shared/nav-dropdown.css";
import "@/components/design-shared/responsive.css";
import "@/components/design-shared/site-footer.css";

const cleaned = stripFooter(stripFinalCta(raw));
const LAST_UPDATE = "19 JUILLET 2026";
const pageHtml = cleaned.replaceAll("{{LAST_UPDATE}}", LAST_UPDATE);

export function MethodePage() {
  const rootRef = useRef<HTMLDivElement>(null);
  useDesignInteractive(rootRef);
  useMethodeToc(rootRef);

  const markup = { __html: pageHtml };
  return (
    <div ref={rootRef} className="hc-design">
      <div dangerouslySetInnerHTML={markup} />
      <SiteFooter />
    </div>
  );
}
