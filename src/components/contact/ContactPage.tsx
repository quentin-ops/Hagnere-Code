"use client";

import { useMemo, useRef } from "react";
import { bodyHtml } from "./body";
import { useDesignInteractive } from "@/components/design-shared/useDesignInteractive";
import {
  ContactProjectSection,
  SiteFooter,
} from "@/components/design-shared/SiteFooter";
import { CalendlyEmbed } from "@/components/design-shared/CalendlyEmbed";
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

        {/* Widget Calendly inline — chargement lazy via IntersectionObserver. */}
        <section
          aria-labelledby="contact-calendly-heading"
          style={{
            padding: "48px 16px 64px",
            background: "#fafafa",
            borderTop: "1px solid #ededed",
          }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <p
                style={{
                  fontFamily: "var(--font-geist-mono), ui-monospace, monospace",
                  fontSize: 12,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#7c3aed",
                  fontWeight: 700,
                  margin: 0,
                }}
              >
                — Réserver directement ici
              </p>
              <h2
                id="contact-calendly-heading"
                style={{
                  fontFamily: "var(--font-geist), system-ui, sans-serif",
                  fontSize: "clamp(24px, 3.2vw, 36px)",
                  lineHeight: 1.15,
                  margin: "10px 0 8px",
                }}
              >
                Choisissez votre créneau de 30 minutes.
              </h2>
              <p style={{ color: "#525252", maxWidth: 640, margin: "0 auto", fontSize: 15 }}>
                Pas un commercial — un associé qui code. Visio ou téléphone, sans engagement.
              </p>
            </div>
            <CalendlyEmbed height={720} />
          </div>
        </section>
      </main>
      <SiteFooter showContact={false} />
    </div>
  );
}
