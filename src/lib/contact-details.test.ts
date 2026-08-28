import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  CONTACT_ADDRESS,
  CONTACT_ADDRESS_LINE,
  CONTACT_EMAIL,
  CONTACT_EMAIL_IS_GROUP_DOMAIN,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_DISPLAY_NATIONAL,
  CONTACT_PHONE_E164,
  CONTACT_WHATSAPP_URL,
  resolveWhatsAppUrl,
} from "./contact-details";
import { PUBLIC_ORGANIZATION_ENTITY } from "./organization-structured-data";

const read = (relative: string) => readFileSync(join(process.cwd(), relative), "utf8");

/**
 * Fichiers déjà migrés sur le module unique de coordonnées.
 *
 * La liste est explicite et non un glob : d'autres zones du site portent encore
 * l'adresse en dur, et un garde-fou global échouerait sur du code qu'on n'a pas
 * encore repris. Chaque zone migrée s'ajoute ici — c'est ce qui empêche une
 * régression silencieuse de revenir écrire une adresse dans le balisage.
 */
const SINGLE_SOURCED_FILES = [
  "src/lib/organization-structured-data.ts",
  "src/lib/ai-rate-limit.ts",
  "src/lib/project-inquiry-delivery.ts",
  "src/app/api/project-inquiry/route.ts",
  "src/app/api/math-challenge/route.ts",
  "src/components/design-shared/SiteFooter.tsx",
  "src/components/design-shared/CalendlyEmbed.tsx",
  "src/components/design-shared/nav-html.ts",
  "src/components/contact/body.ts",
  "src/components/project-funnel/ProjectFunnel.tsx",
];

/** Adresse e-mail sur un domaine du groupe ou de l'agence. */
const GROUP_EMAIL_LITERAL = /[A-Za-z0-9._%+-]+@hagnere-[A-Za-z0-9.-]+\.[a-z]{2,}/;

/** `tel:` ou `wa.me` suivis d'un numéro écrit à la main. */
const HARDCODED_PHONE_LITERAL = /(?:tel:|wa\.me\/)\+?\d{6,}/;

describe("coordonnées publiques — source unique", () => {
  it("décrit une adresse et un numéro cohérents entre leurs écritures", () => {
    expect(CONTACT_EMAIL).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/);
    expect(CONTACT_PHONE_E164).toMatch(/^\+\d{8,15}$/);

    // Les deux libellés doivent désigner la MÊME ligne : c'est exactement le
    // genre de divergence (un chiffre modifié d'un seul côté) que le
    // référencement local sanctionne et qu'un lecteur ne remarque pas.
    expect(CONTACT_PHONE_DISPLAY.replace(/\s/g, "")).toBe(CONTACT_PHONE_E164);
    expect(`+33${CONTACT_PHONE_DISPLAY_NATIONAL.replace(/\s/g, "").slice(1)}`).toBe(
      CONTACT_PHONE_E164,
    );

    expect(CONTACT_ADDRESS_LINE).toContain(CONTACT_ADDRESS.street);
    expect(CONTACT_ADDRESS_LINE).toContain(CONTACT_ADDRESS.postalCode);
    expect(CONTACT_ADDRESS_LINE).toContain(CONTACT_ADDRESS.locality);
  });

  it("signale tant que l'adresse publiée n'est pas au domaine de l'agence", () => {
    // Le drapeau n'impose rien : il rend l'écart lisible en code plutôt que de
    // le laisser vivre dans un commentaire. `hagnere-code.ai` le remet à false.
    expect(CONTACT_EMAIL_IS_GROUP_DOMAIN).toBe(
      !CONTACT_EMAIL.endsWith("@hagnere-code.ai"),
    );
  });

  it("alimente le JSON-LD de l'organisation", () => {
    // Le nœud Organization est la version lue par les moteurs et par une future
    // fiche d'établissement : s'il diverge du bloc affiché, c'est invisible à
    // l'œil nu et coûteux en référencement local.
    expect(PUBLIC_ORGANIZATION_ENTITY.email).toBe(CONTACT_EMAIL);
    expect(PUBLIC_ORGANIZATION_ENTITY.telephone).toBe(CONTACT_PHONE_E164);
    expect(PUBLIC_ORGANIZATION_ENTITY.contactPoint.email).toBe(CONTACT_EMAIL);
    expect(PUBLIC_ORGANIZATION_ENTITY.contactPoint.telephone).toBe(
      CONTACT_PHONE_E164,
    );
    expect(PUBLIC_ORGANIZATION_ENTITY.address.streetAddress).toBe(
      CONTACT_ADDRESS.street,
    );
    expect(PUBLIC_ORGANIZATION_ENTITY.address.postalCode).toBe(
      CONTACT_ADDRESS.postalCode,
    );
    expect(PUBLIC_ORGANIZATION_ENTITY.address.addressLocality).toBe(
      CONTACT_ADDRESS.locality,
    );
  });

  it.each(SINGLE_SOURCED_FILES)(
    "%s n'écrit plus aucune coordonnée en dur",
    (relative) => {
      const source = read(relative);
      expect(source, relative).not.toMatch(GROUP_EMAIL_LITERAL);
      expect(source, relative).not.toMatch(HARDCODED_PHONE_LITERAL);
      expect(source, relative).toContain("@/lib/contact-details");
    },
  );
});

describe("canal WhatsApp — désactivable sans toucher au code", () => {
  it("dérive le lien de la ligne publiée quand rien n'est configuré", () => {
    expect(resolveWhatsAppUrl()).toBe(
      `https://wa.me/${CONTACT_PHONE_E164.replace(/\D/g, "")}`,
    );
    expect(resolveWhatsAppUrl("   ")).toBe(resolveWhatsAppUrl());
  });

  it("retire la tuile sur `off`", () => {
    // Le dépôt ne peut pas prouver qu'un compte WhatsApp Business existe sur
    // cette ligne fixe. S'il n'existe pas, le canal doit pouvoir disparaître
    // du pied de page — donc de toutes les pages — par une seule variable.
    expect(resolveWhatsAppUrl("off")).toBeNull();
    expect(resolveWhatsAppUrl("OFF")).toBeNull();
  });

  it("accepte un autre numéro réellement inscrit", () => {
    expect(resolveWhatsAppUrl("+33612345678")).toBe("https://wa.me/33612345678");
    expect(resolveWhatsAppUrl("33612345678")).toBe("https://wa.me/33612345678");
  });

  it("retombe sur le lien dérivé pour toute valeur invalide", () => {
    // Même politique que `resolveCalendlyUrl` : une valeur mal saisie ne doit
    // pas produire un lien cassé publié sur chaque page.
    expect(resolveWhatsAppUrl("06 12 34 56 78 ?")).toBe(resolveWhatsAppUrl());
    expect(resolveWhatsAppUrl("https://wa.me/33612345678")).toBe(
      resolveWhatsAppUrl(),
    );
  });

  it("garde le pied de page conditionné à la valeur résolue", () => {
    const footer = read("src/components/design-shared/SiteFooter.tsx");
    expect(footer).toContain("CONTACT_WHATSAPP_URL &&");
    // Valeur par défaut : le canal reste affiché tant qu'on ne l'a pas coupé.
    expect(CONTACT_WHATSAPP_URL).toBe(resolveWhatsAppUrl());
  });
});
