import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page introuvable · Hagnéré Code",
  description: "La page demandée n'existe pas ou a été déplacée.",
  // index:false (ne pas indexer la 404) mais follow:true pour que Google
  // suive les liens de récupération vers /, /services, /contact ci-dessous.
  //
  // Cette déclaration est nécessaire : sans elle, c'est la directive du layout
  // racine qui s'applique (`index, follow` en production). Next.js ajoute par
  // ailleurs sa propre balise `noindex` sur la 404 — il y a donc toujours deux
  // balises, toutes deux en noindex. Le contrôle postbuild le tolère.
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 24px",
        background: "#fafafa",
        color: "#0a0a0a",
      }}
    >
      <Link
        href="/"
        aria-label="Retour à l'accueil Hagnéré Code"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 32,
          textDecoration: "none",
          color: "#0a0a0a",
          fontFamily: "var(--font-geist), system-ui, sans-serif",
        }}
      >
        <span
          style={{
            width: 36,
            height: 36,
            borderRadius: 8,
            background: "#0a0a0a",
            color: "#fff",
            display: "grid",
            placeItems: "center",
            fontWeight: 700,
            fontSize: 14,
          }}
        >
          HC
        </span>
        <span style={{ fontSize: 16 }}>
          <b>Hagnéré</b> <span style={{ color: "#737373" }}>Code</span>
        </span>
      </Link>

      <p
        style={{
          fontFamily: "var(--font-geist-mono), ui-monospace, monospace",
          fontSize: 13,
          color: "#737373",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          margin: 0,
        }}
      >
        Erreur 404
      </p>

      <h1
        style={{
          fontFamily: "var(--font-geist), system-ui, sans-serif",
          fontSize: "clamp(28px, 4vw, 48px)",
          lineHeight: 1.1,
          margin: "16px 0 12px",
          maxWidth: 720,
          textAlign: "center",
        }}
      >
        Cette page n&apos;existe pas <span style={{ color: "#737373" }}>ou plus.</span>
      </h1>

      <p
        style={{
          fontFamily: "var(--font-geist), system-ui, sans-serif",
          fontSize: 16,
          color: "#525252",
          maxWidth: 540,
          textAlign: "center",
          margin: 0,
          lineHeight: 1.55,
        }}
      >
        Le lien est peut-être obsolète ou contient une faute de frappe.
        Voici quelques points d&apos;entrée utiles pour rebondir.
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
          marginTop: 32,
          justifyContent: "center",
        }}
      >
        <Link
          href="/"
          style={{
            background: "#0a0a0a",
            color: "#fff",
            padding: "12px 18px",
            borderRadius: 10,
            fontWeight: 600,
            fontSize: 14,
            textDecoration: "none",
          }}
        >
          Accueil
        </Link>
        <Link
          href="/services"
          style={{
            background: "#fff",
            color: "#0a0a0a",
            padding: "12px 18px",
            borderRadius: 10,
            fontWeight: 600,
            fontSize: 14,
            textDecoration: "none",
            border: "1px solid #e5e5e5",
          }}
        >
          Voir les services
        </Link>
        <Link
          href="/contact"
          style={{
            background: "#fff",
            color: "#0a0a0a",
            padding: "12px 18px",
            borderRadius: 10,
            fontWeight: 600,
            fontSize: 14,
            textDecoration: "none",
            border: "1px solid #e5e5e5",
          }}
        >
          Nous contacter
        </Link>
      </div>
    </main>
  );
}
