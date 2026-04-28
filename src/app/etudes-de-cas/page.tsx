import type { Metadata } from "next";
import Link from "next/link";
import { CASE_STUDIES } from "@/components/case-study/cases";
import { SiteFooter } from "@/components/design-shared/SiteFooter";

export const metadata: Metadata = {
  title: "Études de cas — Récits techniques détaillés | Hagnéré Code",
  description:
    "Études de cas longues : reprise d'app, refonte, audit. Contexte, problème, solution, métriques avant/après et architecture. Anonymisées sous NDA quand nécessaire.",
  alternates: { canonical: "/etudes-de-cas" },
  openGraph: {
    title: "Études de cas — Hagnéré Code",
    description:
      "Récits techniques approfondis : reprise d'app SaaS orpheline, audits, refontes. Avant / après chiffrés, anonymisés sous NDA.",
    url: "/etudes-de-cas",
    type: "website",
  },
};

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://hagnere-code.fr/" },
    { "@type": "ListItem", position: 2, name: "Études de cas", item: "https://hagnere-code.fr/etudes-de-cas" },
  ],
});

const itemListJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Études de cas Hagnéré Code",
  itemListElement: Object.values(CASE_STUDIES).map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `https://hagnere-code.fr/etudes-de-cas/${c.slug}`,
    name: `${c.title} ${c.titleAccent}`,
    description: c.metaDescription,
  })),
});

export default function EtudesDeCasIndexPage() {
  const cases = Object.values(CASE_STUDIES);
  return (
    <>
      <script type="application/ld+json">{breadcrumbJsonLd}</script>
      <script type="application/ld+json">{itemListJsonLd}</script>

      <main
        id="main-content"
        style={{
          minHeight: "70vh",
          padding: "80px 24px 48px",
          background: "#fafafa",
          color: "#0a0a0a",
          fontFamily: "var(--font-geist), system-ui, sans-serif",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <nav style={{ marginBottom: 28 }} aria-label="Fil d'Ariane">
            <Link href="/" style={{ color: "#737373", textDecoration: "none", fontSize: 13 }}>
              Accueil
            </Link>
            <span style={{ color: "#a3a3a3", margin: "0 8px", fontSize: 13 }}>/</span>
            <span style={{ color: "#0a0a0a", fontSize: 13 }}>Études de cas</span>
          </nav>

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
            — Études de cas
          </p>
          <h1
            style={{
              fontSize: "clamp(32px, 4.5vw, 56px)",
              lineHeight: 1.05,
              margin: "12px 0 16px",
              maxWidth: 820,
            }}
          >
            Récits techniques détaillés. <span style={{ color: "#737373" }}>Avant / après chiffrés.</span>
          </h1>
          <p
            style={{
              fontSize: 17,
              color: "#525252",
              maxWidth: 720,
              lineHeight: 1.55,
              margin: 0,
            }}
          >
            Pour les lecteurs qui veulent aller plus loin que les fiches{" "}
            <Link href="/realisations" style={{ color: "#0a0a0a", textDecoration: "underline" }}>
              Réalisations
            </Link>
            . Ici, on déroule le contexte, le problème, la solution, l&apos;architecture
            avant/après et les métriques mesurées. Certains cas sont anonymisés sous NDA — la
            partie identifiante est retirée, les chiffres techniques restent intacts.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 20,
              marginTop: 48,
            }}
          >
            {cases.map((c) => (
              <article
                key={c.slug}
                style={{
                  background: "#fff",
                  border: "1px solid #e5e5e5",
                  borderRadius: 16,
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-geist-mono), ui-monospace, monospace",
                    fontSize: 11,
                    letterSpacing: "0.10em",
                    textTransform: "uppercase",
                    color: "#7c3aed",
                    fontWeight: 700,
                  }}
                >
                  {c.eyebrow}
                </p>
                <h2 style={{ margin: 0, fontSize: 22, lineHeight: 1.2 }}>
                  {c.title} <span style={{ color: "#7c3aed" }}>{c.titleAccent}</span>
                </h2>
                <p style={{ margin: 0, color: "#525252", fontSize: 14, lineHeight: 1.55 }}>
                  {c.metaDescription}
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: 16,
                    flexWrap: "wrap",
                    marginTop: 4,
                    fontSize: 13,
                    color: "#737373",
                  }}
                >
                  {c.heroMetrics.slice(0, 3).map((m) => (
                    <span key={`${c.slug}-${m.k}`}>
                      <strong style={{ color: "#0a0a0a" }}>
                        {m.v}
                        {m.vUnit ? ` ${m.vUnit}` : ""}
                      </strong>{" "}
                      {m.k}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/etudes-de-cas/${c.slug}`}
                  style={{
                    marginTop: 12,
                    background: "#0a0a0a",
                    color: "#fff",
                    padding: "10px 14px",
                    borderRadius: 10,
                    fontWeight: 600,
                    fontSize: 14,
                    textDecoration: "none",
                    alignSelf: "flex-start",
                  }}
                >
                  Lire l&apos;étude de cas →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
