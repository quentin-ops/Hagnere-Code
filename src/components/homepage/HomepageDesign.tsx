"use client";

import { useRef } from "react";
import { composedBodyHtml } from "./composed-body";
import { useDesignInteractive } from "@/components/design-shared/useDesignInteractive";
import { SiteFooter } from "@/components/design-shared/SiteFooter";
import "./homepage.css";
import "./sections/sections.css";
import "./sections/hero-video.css";
import "./sections/hero-visual.css";
import "./sections/team-polish.css";
import "./sections/sprint-fixe.css";
import "@/components/design-shared/nav-dropdown.css";
import "@/components/design-shared/responsive.css";
import "@/components/design-shared/site-footer.css";

export function HomepageDesign() {
  const rootRef = useRef<HTMLDivElement>(null);
  useDesignInteractive(rootRef);

  const markup = { __html: composedBodyHtml };
  return (
    <div ref={rootRef} className="hc-design">
      <main id="main-content" dangerouslySetInnerHTML={markup} />
      <SiteFooter />
    </div>
  );
}
