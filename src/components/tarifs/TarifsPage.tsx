"use client";

import { useRef } from "react";
import { bodyHtml as raw } from "./body";
import { stripFooter, stripFinalCta } from "@/components/design-shared/stripBody";
import { useDesignInteractive } from "@/components/design-shared/useDesignInteractive";
import { SiteFooter } from "@/components/design-shared/SiteFooter";
import "./page.css";
import "@/components/design-shared/nav-dropdown.css";
import "@/components/design-shared/responsive.css";
import "@/components/design-shared/site-footer.css";

const bodyHtmlClean = stripFooter(stripFinalCta(raw));

export function TarifsPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  useDesignInteractive(rootRef);

  const markup = { __html: bodyHtmlClean };
  return (
    <div ref={rootRef} className="hc-design">
      <div dangerouslySetInnerHTML={markup} />
      <SiteFooter />
    </div>
  );
}
