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

/**
 * Jetons de `src/app/globals.css`, définis sur `:root` ET redéfinis sous
 * `.dark` : le layout racine bascule cette classe avant le premier rendu.
 *
 * Les couleurs étaient écrites en dur (#fafafa, #0a0a0a, #737373, #525252,
 * #e5e5e5). Le `<main>` étant en pleine hauteur, un visiteur en thème sombre
 * qui tombait sur une URL morte recevait un aplat blanc plein écran, alors que
 * le `body` derrière était déjà quasi noir.
 *
 * `--muted-foreground` vaut #737373 en clair (4,7:1 sur le fond clair) et
 * #a1a1a1 en sombre (7,7:1) : au-dessus du seuil AA dans les deux thèmes.
 * Il remplace aussi le #525252 du paragraphe, qui n'avait pas d'équivalent
 * inversable dans les jetons du site.
 */
const PAPER = "var(--background)";
const INK = "var(--foreground)";
const MUTED = "var(--muted-foreground)";
const SURFACE = "var(--card)";
const SURFACE_INK = "var(--card-foreground)";
const LINE = "var(--border)";

export default function NotFound() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // Le centrage vertical plaçait les trois liens de repêchage entre
        // y 511 et y 617 sur un écran de 390×844, soit à l'aplomb de la
        // bannière cookies (`.hc-cb-toast`, `position: fixed`, bas de l'écran) :
        // `document.elementFromPoint()` au centre de « Nous contacter »
        // renvoyait la bannière, pas le lien. Et la page ne défilait pas
        // (`scrollHeight` = `innerHeight`), donc rien ne permettait de la
        // dégager : les seules sorties de la 404 étaient inatteignables.
        //
        // On aligne donc en haut et on réserve en bas une bande plus haute que
        // la bannière. Deux effets : les liens repassent au-dessus d'elle sans
        // rien faire, et le document devient plus haut que la fenêtre — s'il
        // reste un recouvrement (bannière plus haute, écran plus court), le
        // défilement suffit à le lever.
        //
        // La réserve appartient à cette page faute de pouvoir la porter dans la
        // bannière elle-même (une variable `--cb-height` posée par
        // `CookieBanner` serait la correction générale, mais elle touche toutes
        // les pages du site).
        justifyContent: "flex-start",
        padding: "clamp(56px, 14vh, 200px) 24px clamp(360px, 50vh, 440px)",
        background: PAPER,
        color: INK,
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
          color: INK,
          fontFamily: "var(--font-geist), system-ui, sans-serif",
        }}
      >
        <span
          style={{
            width: 36,
            height: 36,
            borderRadius: 8,
            background: INK,
            color: PAPER,
            display: "grid",
            placeItems: "center",
            fontWeight: 700,
            fontSize: 14,
          }}
        >
          HC
        </span>
        <span style={{ fontSize: 16 }}>
          <b>Hagnéré</b> <span style={{ color: MUTED }}>Code</span>
        </span>
      </Link>

      <p
        style={{
          fontFamily: "var(--font-geist-mono), ui-monospace, monospace",
          fontSize: 13,
          color: MUTED,
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
        Cette page n&apos;existe pas <span style={{ color: MUTED }}>ou plus.</span>
      </h1>

      <p
        style={{
          fontFamily: "var(--font-geist), system-ui, sans-serif",
          fontSize: 16,
          color: MUTED,
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
            background: INK,
            color: PAPER,
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
            background: SURFACE,
            color: SURFACE_INK,
            padding: "12px 18px",
            borderRadius: 10,
            fontWeight: 600,
            fontSize: 14,
            textDecoration: "none",
            border: `1px solid ${LINE}`,
          }}
        >
          Voir les services
        </Link>
        <Link
          href="/contact"
          style={{
            background: SURFACE,
            color: SURFACE_INK,
            padding: "12px 18px",
            borderRadius: 10,
            fontWeight: 600,
            fontSize: 14,
            textDecoration: "none",
            border: `1px solid ${LINE}`,
          }}
        >
          Nous contacter
        </Link>
      </div>
    </main>
  );
}
