"use client";

import { useRef } from "react";
import { bodyHtml } from "./index-body";
import { useDesignInteractive } from "@/components/design-shared/useDesignInteractive";
import { SiteFooter } from "@/components/design-shared/SiteFooter";
import "./index-page.css";
import "@/components/design-shared/nav-dropdown.css";
import "@/components/design-shared/responsive.css";
import "@/components/design-shared/site-footer.css";

export function RealisationsIndexPage() {
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
