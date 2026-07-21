import fs from "node:fs";
import path from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import { GUIDES, PUBLISHED_GUIDES, guideRobots } from "./guides";

const guidesRoot = path.join(process.cwd(), "src/app/guides");

afterEach(() => {
  vi.unstubAllEnvs();
});

const falseClientExperiencePatterns = [
  /nous a contactés/i,
  /nous avons tenu/i,
  /nous l(?:'|&apos;)avons chiffré/i,
  /ce que nous avons conseillé/i,
  /a réellement payé/i,
  /que nous avons\s+(?:nous-mêmes\s+)?déconseillé/i,
  /devis.{0,80}que nous avons refusé/i,
  /c(?:'|&apos;)est ce qu(?:'|&apos;)elle a choisi/i,
  /(?:un|le) devis réel/i,
  /notre client/i,
] as const;

describe("guide registry", () => {
  it("keeps slugs, titles and descriptions unique", () => {
    for (const key of ["slug", "title", "metaDescription"] as const) {
      const values = GUIDES.map((guide) => guide[key]);
      expect(new Set(values).size, key).toBe(values.length);
    }
  });

  it("keeps real publication dates and positive reading times", () => {
    for (const guide of GUIDES) {
      expect(guide.datePublished, guide.slug).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(guide.dateModified, guide.slug).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(
        Date.parse(`${guide.dateModified}T12:00:00Z`),
        guide.slug,
      ).toBeGreaterThanOrEqual(Date.parse(`${guide.datePublished}T12:00:00Z`));
      expect(guide.readTimeMin, guide.slug).toBeGreaterThan(0);
    }
  });

  it("keeps registry copy free of unverifiable exclusivity claims", () => {
    const registryCopy = GUIDES.flatMap((guide) => [
      guide.title,
      guide.cardTitle,
      guide.metaDescription,
      guide.cardDescription,
      guide.heroTitle,
    ]).join("\n");

    expect(registryCopy).not.toMatch(
      /\b(?:le|la) seul(?:e)?\b|personne n['’]|que personne|aucun comparatif|toutes les pages|tout le monde|zéro perte/i,
    );
  });

  it("keeps guide hooks and social images free of inflated exclusivity claims", () => {
    const inflatedHookPatterns = [
      /\b(?:que|qu['’]) (?:presque )?personne (?:ne |n['’])?(?:fait|publie|cite|explique|compare|traite|source|annonce|mentionne|utilise|exploite|lit|audite|anticipe|raconte|chiffre)\b/i,
      /\bTout le monde (?:fait|publie|cite|explique|compare|traite|source|annonce|mentionne|utilise|exploite|lit|audite|anticipe|raconte|chiffre|oublie|confond)\b/,
      /\bPersonne (?:ne |n['’])(?:fait|publie|cite|explique|compare|traite|source|annonce|mentionne|utilise|exploite|lit|audite|anticipe|raconte|chiffre)\b/,
      /\b(?:aucun|presque aucun) (?:autre )?(?:guide|comparatif|tableau)(?: concurrent| français| de prix)?\b/i,
      /\b(?:le|la) seul(?:e)? (?:guide|tableau|comparatif|grille|ressource)\b/i,
      /\bzéro perte\b/i,
    ] as const;

    for (const guide of GUIDES) {
      for (const fileName of ["page.tsx", "opengraph-image.tsx"] as const) {
        const filePath = path.join(guidesRoot, guide.slug, fileName);
        const source = fs
          .readFileSync(filePath, "utf8")
          .replaceAll("&apos;", "'");

        for (const pattern of inflatedHookPatterns) {
          expect(source, `${guide.slug}/${fileName}: ${pattern}`).not.toMatch(
            pattern,
          );
        }
      }
    }
  });

  it("keeps guides with an uncleared editorial gate out of public discovery", () => {
    const pending = GUIDES.filter((guide) => guide.editorialStatus);
    expect(PUBLISHED_GUIDES).toHaveLength(GUIDES.length - pending.length);

    for (const guide of pending) {
      const source = fs.readFileSync(
        path.join(guidesRoot, guide.slug, "page.tsx"),
        "utf8",
      );
      expect(source, guide.slug).toContain("robots: guideRobots(guide)");
      expect(PUBLISHED_GUIDES).not.toContain(guide);
    }
  });

  it("sets index/follow only for approved guides in production", () => {
    const published = PUBLISHED_GUIDES[0];
    expect(published).toBeDefined();
    // Isole l'override hors plateforme, même lorsque la suite tourne dans le
    // build Vercel et hérite donc de VERCEL_ENV.
    vi.stubEnv("VERCEL_ENV", "");

    vi.stubEnv("NEXT_PUBLIC_ENV", "preview");
    expect(guideRobots(published)).toEqual({ index: false, follow: false });

    vi.stubEnv("NEXT_PUBLIC_ENV", "production");
    expect(guideRobots(published)).toEqual({ index: true, follow: true });
    expect(
      guideRobots({
        ...published,
        editorialStatus: "ready-for-human-review",
      }),
    ).toEqual({ index: false, follow: false });
  });

  it("matches every published route and dedicated social image", () => {
    const registered = GUIDES.map((guide) => guide.slug).sort();
    const routed = fs
      .readdirSync(guidesRoot, { withFileTypes: true })
      .filter(
        (entry) =>
          entry.isDirectory() &&
          fs.existsSync(path.join(guidesRoot, entry.name, "page.tsx")),
      )
      .map((entry) => entry.name)
      .sort();

    expect(registered).toEqual(routed);
    for (const slug of registered) {
      expect(
        fs.existsSync(path.join(guidesRoot, slug, "opengraph-image.tsx")),
        slug,
      ).toBe(true);
    }
  });

  it("labels composite scenarios before their narrative and rejects false client experience", () => {
    for (const guide of GUIDES) {
      const source = fs.readFileSync(
        path.join(guidesRoot, guide.slug, "page.tsx"),
        "utf8",
      );
      const normalizedSource = source.replace(/\s+/g, " ");
      const scenarioMatches = [
        ...Array.from(
          source.matchAll(/<h[2-4]\b[^>]*>[\s\S]*?<\/h[2-4]>/gi),
        ).filter((match) => /(?:exemple|scénario) fictif/i.test(match[0])),
        ...source.matchAll(
          /<InfoBox\b[^>]*title=["'](?:exemple|scénario) fictif/gi,
        ),
      ];

      if (scenarioMatches.length > 0) {
        const disclosurePattern =
          /(?:ni (?:un )?client ni (?:un )?témoignage réel|ni (?:un )?cas client(?: Hagnéré Code)?|ne décrit (?:ni )?(?:un )?client)/i;
        const hasAdjacentDisclosure = scenarioMatches.every((match) => {
          const index = match.index || 0;
          return disclosurePattern.test(
            source.slice(index, index + 1_200).replace(/\s+/g, " "),
          );
        });

        expect(
          hasAdjacentDisclosure,
          `${guide.slug}: scénario fictif sans dénégation adjacente`,
        ).toBe(true);
      }

      for (const pattern of falseClientExperiencePatterns) {
        expect(normalizedSource, `${guide.slug}: ${pattern}`).not.toMatch(
          pattern,
        );
      }
    }
  });

  it("does not turn sitemap submission or an SEO study into a ranking deadline", () => {
    const deliverySource = fs
      .readFileSync(
        path.join(
          guidesRoot,
          "combien-de-temps-pour-creer-un-site",
          "page.tsx",
        ),
        "utf8",
      )
      .replace(/\s+/g, " ");

    expect(deliverySource).not.toMatch(/sitemap.{0,100}3\s*(?:à|-)\s*7 jours/i);
    expect(deliverySource).not.toMatch(
      /moitié des pages.{0,100}2\s*à\s*4 mois/i,
    );
    expect(deliverySource).not.toMatch(/productif en 6\s*à\s*12 mois/i);
    expect(deliverySource).not.toMatch(
      /indexation des pages\s*:\s*1\s*à\s*3 semaines/i,
    );
    expect(deliverySource).toMatch(
      /demande d(?:'|&apos;)exploration.{0,120}ne garantit pas (?:son\s+indexation|l(?:'|&apos;)indexation)/i,
    );
    expect(deliverySource).toMatch(
      /référencement naturel et l(?:'|&apos;)acquisition.{0,160}propre calendrier.{0,180}pas être confondus avec le temps de fabrication/i,
    );

    const seoPricingSource = fs
      .readFileSync(
        path.join(guidesRoot, "prix-referencement-naturel", "page.tsx"),
        "utf8",
      )
      .replace(/\s+/g, " ");

    expect(seoPricingSource).not.toMatch(
      /bonne fourchette.{0,80}\d+\s*à\s*\d+\s*mois/i,
    );
    expect(seoPricingSource).not.toMatch(/résultat n.apparaît pas avant/i);
    expect(seoPricingSource).not.toMatch(
      /SEO.{0,160}investissement le plus rentable/i,
    );
    expect(seoPricingSource).toMatch(
      /calendrier de travail.{0,160}correction publiée.{0,120}page accessible.{0,120}premières impressions.{0,120}clics.{0,120}demandes commerciales/i,
    );

    const sitePricingSource = fs
      .readFileSync(
        path.join(guidesRoot, "combien-coute-un-site-internet", "page.tsx"),
        "utf8",
      )
      .replace(/\s+/g, " ");

    expect(sitePricingSource).not.toMatch(/conservation des positions/i);
    expect(sitePricingSource).not.toMatch(/évite de perdre le trafic acquis/i);
    expect(sitePricingSource).toMatch(
      /Refonte.{0,120}pages.{0,120}données.{0,120}positions Google faut-il protéger.{0,180}prix d(?:'|&apos;)une refonte/i,
    );
  });

  it("does not promise an unmeasured 24-hour sales response", () => {
    for (const guide of GUIDES) {
      const source = fs
        .readFileSync(path.join(guidesRoot, guide.slug, "page.tsx"), "utf8")
        .replace(/\s+/g, " ");

      expect(source, guide.slug).not.toMatch(
        /(?:réponse|répond(?:re|ons|ez)?)[^.!?]{0,100}sous 24\s*(?:h|heures)/i,
      );
    }
  });
});
