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

// Same controlled-template-literal pattern as SitesVitrines / Ecommerce / SaasApplicationsMetier.
// Body comes from local TS string concatenation, no user input. Safe.
const bodyHtml = stripFooter(stripFinalCta(raw));

export function MobileApplication() {
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
