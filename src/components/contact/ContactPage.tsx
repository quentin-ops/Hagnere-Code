"use client";

import { useRef } from "react";
import { bodyHtml } from "./body";
import { useDesignInteractive } from "@/components/design-shared/useDesignInteractive";
import { SiteFooter } from "@/components/design-shared/SiteFooter";
import "@/components/homepage/homepage.css";
import "@/components/homepage/sections/sections.css";
import "@/components/design-shared/nav-dropdown.css";
import "@/components/design-shared/responsive.css";
import "@/components/design-shared/site-footer.css";
import "./page.css";

export function ContactPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  useDesignInteractive(rootRef);

  const markup = { __html: bodyHtml };
  return (
    <div ref={rootRef} className="hc-design">
      <main id="main-content" dangerouslySetInnerHTML={markup} />
      <SiteFooter />
    </div>
  );
}
