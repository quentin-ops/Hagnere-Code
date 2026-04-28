"use client";

import { useMemo, useRef } from "react";
import { bodyHtml } from "./body";
import { useDesignInteractive } from "@/components/design-shared/useDesignInteractive";
import {
  ContactProjectSection,
  SiteFooter,
} from "@/components/design-shared/SiteFooter";
import "@/components/homepage/homepage.css";
import "@/components/homepage/sections/sections.css";
import "@/components/design-shared/nav-dropdown.css";
import "@/components/design-shared/responsive.css";
import "@/components/design-shared/site-footer.css";
import "./page.css";

const CONTACT_HERO = /<!-- CONTACT HERO -->[\s\S]*?<\/section>\s*/m;
const NAV_END = "</nav>";

function splitContactPageHtml(html: string) {
  const navEnd = html.indexOf(NAV_END);

  if (navEnd === -1) {
    return {
      navHtml: "",
      contentHtml: html.replace(CONTACT_HERO, ""),
    };
  }

  const splitAt = navEnd + NAV_END.length;
  return {
    navHtml: html.slice(0, splitAt),
    contentHtml: html.slice(splitAt).replace(CONTACT_HERO, ""),
  };
}

export function ContactPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  useDesignInteractive(rootRef);

  const { navHtml, contentHtml } = useMemo(
    () => splitContactPageHtml(bodyHtml),
    [],
  );

  return (
    <div ref={rootRef} className="hc-design">
      <main id="main-content">
        <div dangerouslySetInnerHTML={{ __html: navHtml }} />
        <ContactProjectSection
          headingLevel="h1"
          className="sf-contact--contact-hero"
          contactPageCopy
        />
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </main>
      <SiteFooter showContact={false} />
    </div>
  );
}
