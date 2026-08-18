import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { readGuideEntryContext } from "./ProjectFunnel";

const source = readFileSync(
  new URL("./ProjectFunnel.tsx", import.meta.url),
  "utf8",
);
const normalizedSource = source.replace(/\s+/g, " ");

describe("project funnel public claims", () => {
  it("ne présélectionne un service que pour un contexte de guide reconnu", () => {
    expect(
      readGuideEntryContext("?service=audit&source=guide-audit-reprise-site"),
    ).toEqual({
      projectKind: "audit",
      label: "Audit technique avant reprise d’un site",
      serviceLabel: "Audit technique",
    });
    expect(readGuideEntryContext("?service=audit&source=inconnu")).toBeNull();
    expect(
      readGuideEntryContext(
        "?service=security&source=guide-audit-reprise-site",
      ),
    ).toBeNull();
    expect(
      readGuideEntryContext(
        "?service=ads&source=guide-prix-gestion-google-ads",
      ),
    ).toEqual({
      projectKind: "ads",
      label: "Budget et périmètre Google Ads",
      serviceLabel: "Publicité / tracking",
    });
    expect(
      readGuideEntryContext(
        "?service=audit&source=guide-prix-gestion-google-ads",
      ),
    ).toBeNull();
    expect(
      readGuideEntryContext(
        "?service=outils-internes&source=guide-automatiser-processus",
      ),
    ).toEqual({
      projectKind: "outil",
      label: "Quel processus automatiser en premier ?",
      serviceLabel: "Outil interne",
      intentLabel:
        "Votre demande reste orientée vers la relecture d’un dossier d’automatisation déjà mesuré.",
      prefillCurrentSituation:
        "Je souhaite faire relire un dossier d’automatisation déjà mesuré avant de choisir entre simplification, fonction existante, connecteur, assistance et développement sur mesure.",
    });
    expect(
      readGuideEntryContext(
        "?service=outils-internes&source=guide-prix-gestion-google-ads",
      ),
    ).toBeNull();
    expect(
      readGuideEntryContext(
        "?service=outils-internes&source=guide-excel-application",
      ),
    ).toEqual({
      projectKind: "outil",
      label: "Transformer Excel en application métier",
      serviceLabel: "Outil interne",
      intentLabel:
        "Votre demande reste orientée vers la relecture d’un dossier Excel déjà testé, sans présumer qu’un développement sur mesure est nécessaire.",
      prefillCurrentSituation:
        "Je souhaite faire relire une comparaison entre maintien ou fiabilisation d’Excel, logiciel standard, plateforme nommée et développement sur mesure. J’ai documenté les utilisateurs, les opérations bloquantes, les preuves, les coûts et les inconnues.",
    });
    expect(
      readGuideEntryContext(
        "?service=saas&source=guide-excel-application",
      ),
    ).toBeNull();
    expect(
      readGuideEntryContext("?service=saas&source=guide-validation-saas"),
    ).toEqual({
      projectKind: "saas",
      label: "Valider une idée SaaS avant de développer",
      serviceLabel: "SaaS / application métier",
      intentLabel:
        "Votre demande reste orientée vers la relecture d’un dossier de validation déjà mesuré.",
      prefillCurrentSituation:
        "Je souhaite faire relire un dossier de validation SaaS avant de décider entre un autre test, un outil existant, un pilote borné et un MVP limité. J’ai noté le segment, les faits, les contradictions, l’offre, le seuil, le résultat et le verrou restant.",
    });
    expect(
      readGuideEntryContext("?service=saas&source=guide-facturation-saas"),
    ).toEqual({
      projectKind: "saas",
      label: "Facturation et abonnements SaaS",
      serviceLabel: "SaaS / application métier",
      intentLabel:
        "Votre demande reste orientée vers la relecture d’un cycle de facturation déjà documenté.",
      prefillCurrentSituation:
        "Je souhaite faire relire un cycle de facturation SaaS déjà documenté. J’ai réuni une offre, une facture, un paiement, un cas d’échec, la règle de droits d’accès, les écarts de rapprochement et les inconnues fiscales ou contractuelles.",
    });
    expect(
      readGuideEntryContext(
        "?service=outils-internes&source=guide-facturation-saas",
      ),
    ).toBeNull();
    expect(
      readGuideEntryContext("?service=saas&source=guide-automatiser-processus"),
    ).toBeNull();
  });

  it("affiche le service réellement présélectionné pour chaque guide", () => {
    expect(source).toContain("{guideEntryContext.serviceLabel}");
    expect(source).not.toContain(
      "Audit technique est présélectionné. Vous pouvez modifier ce choix.",
    );
  });

  it("ne publie pas les anciennes preuves de livraison ou garanties non étayées", () => {
    expect(source).not.toMatch(/100\s*%[\s\S]{0,120}livrés à l'heure/i);
    expect(source).not.toMatch(/30\s*j[\s\S]{0,120}garantie post-lancement/i);
    expect(source).not.toMatch(
      /Garantir uptime 99[,.]9|Garantir disponibilité pendant les pics/i,
    );
  });

  it("ne présente pas un outil ou le formulaire comme automatiquement conforme", () => {
    expect(source).not.toMatch(
      /Données privées, conforme RGPD|pas de revente, conforme RGPD/i,
    );
    expect(source).not.toMatch(/Système de gestion des cookies conforme RGPD/i);
    expect(source).not.toMatch(
      /Outil métier conforme RGPD|éviter les audits CNIL/i,
    );
  });

  it("qualifie la case comme un accusé de lecture avec la base adaptée au rôle", () => {
    expect(source).not.toContain("<b>Consentement RGPD</b>");
    expect(source).toContain("Accusé de lecture et demande de traitement");
    expect(normalizedSource).toContain(
      "des mesures précontractuelles ou sur l&apos;intérêt légitime",
    );
  });
});
