import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { getGuide, guideRobots } from "./guides";

const routeSource = readFileSync(
  join(process.cwd(), "src/app/guides/react-native-ou-flutter/page.tsx"),
  "utf8",
);
const dossierSource = readFileSync(
  join(
    process.cwd(),
    "src/components/guides/MobileFrameworkDecisionDossier.tsx",
  ),
  "utf8",
);
const decisionSource = readFileSync(
  join(process.cwd(), "src/lib/mobile-framework-decision.ts"),
  "utf8",
);

function visibleText(source: string): string {
  return source
    .replace(/<[^>]+>/g, " ")
    .replace(/\{[^}]*\}/g, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

describe("react-native-ou-flutter premium guide contract", () => {
  it("answers the decision in the first 150 words", () => {
    const lead = routeSource.match(/<p className="lead">([\s\S]*?)<\/p>/)?.[1];
    const text = visibleText(lead || "");

    expect(lead).toBeDefined();
    expect(text.split(/\s+/).length).toBeLessThanOrEqual(150);
    expect(text).toMatch(/Aucun des deux ne gagne/i);
    expect(text).toMatch(/vérifier.*application installée/i);
    expect(text).toMatch(/éliminez/i);
    expect(text).toMatch(/12, 36 et 60 mois/i);
  });

  it("keeps six outcomes open and declares the React bias", () => {
    for (const option of [
      "React Native",
      "Flutter",
      "Natif iOS + Android",
      "Kotlin Multiplatform",
      "Web mobile ou PWA",
      "Aucune nouvelle application",
    ]) {
      expect(routeSource).toContain(option);
    }
    expect(routeSource).toMatch(
      /Hagnéré Code travaille principalement avec React/,
    );
    expect(routeSource).toMatch(
      /peut conclure Flutter, développement natif,\s+Kotlin Multiplatform, web\/PWA ou aucune nouvelle application/,
    );
  });

  it("dates the technical snapshot and links primary sources nearby", () => {
    const normalized = routeSource.replace(/\s+/g, " ");

    expect(normalized).toContain("25 juillet 2026");
    expect(normalized).toContain("React Native <strong>0.86</strong>");
    expect(normalized).toContain("Expo SDK 57");
    expect(normalized).toContain("stable <strong>3.44.x</strong>");
    expect(normalized).toContain("patch 3.44.7");
    expect(normalized).toContain("New Architecture est la seule architecture");
    expect(normalized).toContain("Fabric");
    expect(normalized).toContain("TurboModules");
    expect(normalized).toContain("Codegen");
    expect(normalized).toContain("runtimeVersion");
    expect(routeSource).toContain("https://reactnative.dev/versions");
    expect(routeSource).toContain("https://docs.expo.dev/versions/latest/");
    expect(routeSource).toContain(
      "https://docs.flutter.dev/release/release-notes",
    );
    expect(routeSource).toContain(
      "https://kotlinlang.org/docs/multiplatform.html",
    );
    expect(routeSource).toContain(
      "https://www.jetbrains.com/compose-multiplatform/",
    );
    expect(routeSource).toContain(
      "https://developer.android.com/google/play/requirements/target-sdk",
    );
    expect(routeSource).toContain(
      "https://developer.apple.com/app-store/submitting/",
    );
  });

  it("removes the weak and quarantined evidence from the public guide", () => {
    expect(routeSource).not.toMatch(/SILKHOM/i);
    expect(routeSource).not.toMatch(/TechCrunch/i);
    expect(routeSource).not.toMatch(/\b86\s*%/);
    expect(routeSource).not.toMatch(/Shopify/);
  });

  it("contains the full proof protocol, TCO and sensitivity", () => {
    const normalized = routeSource.replace(/\s+/g, " ");

    for (const expected of [
      "build release",
      "profile proche de la release",
      "appareil physique plancher",
      "distributions p50 et p95",
      "VoiceOver",
      "TalkBack",
      "TestFlight",
      "piste Google Play interne",
      "119 700 € HT",
      "124 900 € HT",
      "186 700 € HT",
      "189 300 € HT",
      "253 700 € HT",
      "13 000 € HT",
      "migration par tranche avec double exploitation",
      "journées réservées par catégorie",
      "délai de prise en charge",
      "exercice de mise à niveau depuis la version précédente",
    ]) {
      expect(normalized).toContain(expected);
    }
  });

  it("ships one real decision dossier and one editorial CTA", () => {
    expect(
      routeSource.match(/<MobileFrameworkDecisionDossier\s*\/>/g),
    ).toHaveLength(1);
    expect(routeSource.match(/<GuideInlineCTA\b/g)).toHaveLength(1);
    expect(dossierSource).toContain("Copier le dossier");
    expect(dossierSource).toContain("Imprimer le dossier");
    expect(dossierSource).toContain("Réinitialiser");
    expect(dossierSource).toContain('aria-live="polite"');
    expect(dossierSource).toContain('aria-live="assertive"');
    expect(dossierSource).toContain('data-read-time-exclude="true"');
    expect(decisionSource).toContain("mobile-framework-decision-r2-2026-07-25");
    expect(dossierSource).toContain("aucun vainqueur automatique");
    expect(dossierSource).not.toContain("sélectionnez le rapport");
    expect(dossierSource).not.toContain("window.confirm");
  });

  it("keeps structured data faithful and limited to Article and BreadcrumbList", () => {
    expect(routeSource.match(/type="application\/ld\+json"/g)).toHaveLength(2);
    expect(routeSource).toContain('"@type": "Article"');
    expect(routeSource).toContain('"@type": "BreadcrumbList"');
    expect(routeSource).not.toMatch(/FAQPage|HowTo|Offer|wordCount/);
  });

  it("keeps the registry in human-review state", () => {
    const guide = getGuide("react-native-ou-flutter");

    expect(guide.dateModified).toBe("2026-07-25");
    expect(guide.readTimeMin).toBe(21);
    expect(guide.editorialStatus).toBe("ready-for-human-review");
    expect(guideRobots(guide)).toEqual({ index: false, follow: false });
  });
});
