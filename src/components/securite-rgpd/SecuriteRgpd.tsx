"use client";

import { useRef } from "react";
import { composedBodyHtml as raw } from "./composed-body";
import { stripFooter, stripFinalCta } from "@/components/design-shared/stripBody";
import { useDesignInteractive } from "@/components/design-shared/useDesignInteractive";
import { SiteFooter } from "@/components/design-shared/SiteFooter";
import "./page.css";
import "./sections/sections.css";
import "@/components/design-shared/nav-dropdown.css";
import "@/components/design-shared/responsive.css";
import "@/components/design-shared/site-footer.css";

// Static HTML composed at build-time from local TS template literals (body.ts +
// section files). No user input flows into this string — same trusted-template
// pattern used by ContenuVideo.tsx, Ecommerce.tsx and all other service pages.
const bodyHtml = stripFooter(stripFinalCta(raw));

export function SecuriteRgpd() {
  const rootRef = useRef<HTMLDivElement>(null);
  useDesignInteractive(rootRef);

  const markup = { __html: bodyHtml };
  return (
    <div ref={rootRef} className="hc-design">
      <div dangerouslySetInnerHTML={markup} />
      <SiteFooter />
    </div>
  );
}
