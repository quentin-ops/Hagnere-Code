import { bodyHtml } from "./body";
import { InteractiveDesignRoot } from "@/components/design-shared/InteractiveDesignRoot";
import { MainNav } from "@/components/design-shared/MainNav";
import {
  ContactProjectSection,
  SiteFooter,
} from "@/components/design-shared/SiteFooter";
import { CalendlyEmbed } from "@/components/design-shared/CalendlyEmbed";
import { splitContactPageHtml } from "./contact-html";
import "@/components/homepage/homepage.css";
import "@/components/homepage/sections/sections.css";
import "@/components/design-shared/nav-dropdown.css";
import "@/components/design-shared/responsive.css";
import "@/components/design-shared/site-footer.css";
import "@/components/design-shared/calendly.css";
import "./page.css";

const { contentHtml } = splitContactPageHtml(bodyHtml);

export function ContactPage() {
  return (
    <InteractiveDesignRoot className="hc-design">
      <MainNav />
      <main id="main-content" tabIndex={-1}>
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
            background: "var(--paper-2)",
            borderTop: "1px solid var(--line-2)",
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
                  color: "var(--accent)",
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
              <p style={{ color: "var(--ink-4)", maxWidth: 640, margin: "0 auto", fontSize: 15 }}>
                Pas un commercial — quelqu&apos;un qui code. Visio ou téléphone, sans engagement.
              </p>
            </div>
            <CalendlyEmbed height={720} />
          </div>
        </section>
      </main>
      <SiteFooter showContact={false} />
    </InteractiveDesignRoot>
  );
}
