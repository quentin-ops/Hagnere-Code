import { readFileSync } from "node:fs";
import type { NextConfig } from "next";
import { afterEach, describe, expect, it, vi } from "vitest";
import { PRIVACY_NOTICE_VERSION } from "@/lib/privacy-notice";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_E164,
} from "@/lib/contact-details";
import { LEGAL_POSTAL_ADDRESS } from "./legal-contact";

function read(relativePath: string): string {
  return readFileSync(new URL(relativePath, import.meta.url), "utf8");
}

const mentions = read("./content/mentions-legales.tsx");
const cookies = read("./content/cookies.tsx");
const confidentialite = read("./content/confidentialite.tsx");
const cgv = read("./content/cgv.tsx");
const reclamations = read("./content/reclamations.tsx");
const accessibilite = read("./content/accessibilite.tsx");
const confidentialitePage = read("../../app/legal/confidentialite/page.tsx");
const cgvPage = read("../../app/legal/cgv/page.tsx");
const footer = read("../design-shared/SiteFooter.tsx");
const compactFooter = read("./LegalLinksFooter.tsx");
const cookieBanner = read("../cookies/CookieBanner.tsx");
const accessibilityPage = read("../../app/legal/accessibilite/page.tsx");
const rootLayout = read("../../app/layout.tsx");
const projectInquiryRoute = read("../../app/api/project-inquiry/route.ts");
const googleMeasurement = read("../design-shared/GoogleMeasurement.tsx");
const legalPageLayout = read("./LegalPageLayout.tsx");
const cookieConsentLib = read("../../lib/cookie-consent.ts");

/**
 * Sources qui publient le NAP (nom, adresse, téléphone) sur les pages légales.
 * Ce sont elles qu'un annuaire ou un lecteur recopie : elles doivent toutes
 * tirer les coordonnées de `@/lib/contact-details`, jamais les réécrire.
 */
const LEGAL_CONTACT_SOURCES = [
  ["mentions-legales.tsx", mentions],
  ["confidentialite.tsx", confidentialite],
  ["cookies.tsx", cookies],
  ["cgv.tsx", cgv],
  ["reclamations.tsx", reclamations],
  ["accessibilite.tsx", accessibilite],
  ["LegalPageLayout.tsx", legalPageLayout],
  ["LegalLinksFooter.tsx", compactFooter],
  ["CookieBanner.tsx", cookieBanner],
] as const;

/**
 * Seule la section « Destinataires » vaut déclaration : une mention dans
 * l'historique des versions ou ailleurs dans la page ne dit pas à qui les
 * données sont transmises.
 */
const recipientsTable =
  confidentialite.match(/id: "destinataires"[\s\S]*?id: "transferts"/)?.[0] ?? "";

function extractLastUpdated(pageSource: string): string {
  // La page de confidentialité consomme désormais la constante partagée
  // PRIVACY_NOTICE_VERSION : les leads et le texte publié ne peuvent plus
  // diverger. Les autres pages légales gardent une date littérale.
  if (/const LAST_UPDATED = PRIVACY_NOTICE_VERSION;/.test(pageSource)) {
    return PRIVACY_NOTICE_VERSION;
  }
  const match = pageSource.match(/const LAST_UPDATED = "([\d-]+)"/);
  if (!match) throw new Error("LAST_UPDATED introuvable dans la page");
  return match[1];
}

function frenchLongDate(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

describe("public legal alignment", () => {
  it("publie uniquement l'adresse de Bassens et aucun ancien SIRET", () => {
    // La source unique doit rester l'adresse réellement immatriculée : c'est
    // elle, et non un littéral recopié, qui alimente désormais les six pages.
    expect(LEGAL_POSTAL_ADDRESS).toBe(
      "82 impasse de Bellevue, 73000 Bassens, France",
    );

    const publicIdentitySources = [mentions, footer, compactFooter].join("\n");
    expect(publicIdentitySources).not.toContain("7 rue Ernest Filliard");
    expect(publicIdentitySources).not.toMatch(/993\s?672\s?856\s?00016/);
  });

  it("ne réécrit aucune coordonnée publique en dur dans les pages légales", () => {
    // `NEXT_PUBLIC_CONTACT_EMAIL` doit suffire à basculer l'adresse publiée.
    // Un littéral oublié dans une page légale ferait diverger le NAP au pire
    // endroit : celui que les annuaires et les greffes recopient.
    const hardcoded: { needle: string; label: string }[] = [
      { needle: CONTACT_EMAIL, label: "l'adresse de contact" },
      { needle: CONTACT_PHONE_E164, label: "le téléphone (format E.164)" },
      { needle: CONTACT_PHONE_DISPLAY, label: "le téléphone (format lisible)" },
      { needle: LEGAL_POSTAL_ADDRESS, label: "l'adresse postale" },
    ];

    for (const [name, source] of LEGAL_CONTACT_SOURCES) {
      for (const { needle, label } of hardcoded) {
        expect(
          source,
          `${name} réécrit ${label} en dur : importer la constante de @/lib/contact-details.`,
        ).not.toContain(needle);
      }
    }
  });

  it("identifie la société, sa forme et son capital", () => {
    expect(mentions).toContain("HAGNERE CODE");
    expect(mentions).toContain("SASU au capital social de 10 €");
    expect(mentions).toContain("RCS Chambéry 993 672 856");
  });

  it("décrit le brouillon de session sans coordonnées", () => {
    expect(cookies).toContain("pf:draft:v3");
    expect(cookies).toContain("sessionStorage");
    expect(cookies).toContain("24 heures au plus après la dernière sauvegarde");
    expect(cookies).toContain("activation volontaire du bouton");
    expect(cookies).not.toContain("pf:draft:v2");
    expect(rootLayout).toContain("<LegacyProjectDraftCleanup />");
  });

  it("informe de l'analytics avant les boutons accepter et refuser", () => {
    // Propriétés, pas libellés : la copie doit pouvoir être reformulée sans
    // casser le test, mais ni l'information préalable ni la symétrie des deux
    // boutons (recommandation CNIL) ne doivent disparaître.
    const description = cookieBanner.indexOf('id="hc-cb-toast-desc"');
    const actions = cookieBanner.indexOf('className="hc-cb-toast-actions"');
    expect(description, "Le texte d'information a disparu de la bannière.").toBeGreaterThan(-1);
    expect(
      actions,
      "Les boutons de choix passent avant le texte qui les explique.",
    ).toBeGreaterThan(description);
    expect(cookieBanner.slice(description, actions)).toMatch(
      /mesure[\s\S]{0,40}audience/i,
    );

    // Refuser et accepter partagent la même classe de bouton : même poids
    // visuel, donc même facilité de choix.
    const choiceLabels = [
      ...cookieBanner.matchAll(
        /className="hc-cb-btn hc-cb-btn-choice"[^>]*>\s*([^<{]+?)\s*</g,
      ),
    ].map((match) => match[1]);
    expect(
      choiceLabels.some((label) => /refuser/i.test(label)),
      `Aucun bouton « refuser » de même niveau que « accepter » : ${choiceLabels.join(" | ")}`,
    ).toBe(true);
    expect(
      choiceLabels.some((label) => /accepter/i.test(label)),
      `Aucun bouton « accepter » de ce niveau : ${choiceLabels.join(" | ")}`,
    ).toBe(true);
  });

  it("nomme dans la bannière chaque tiers réellement chargé après acceptation", () => {
    // Le consentement doit être éclairé : tout tiers que le code charge après
    // un « Accepter » est nommé dans le texte de la bannière. La liste est
    // dérivée du composant de mesure, pas recopiée à la main.
    const injectedHosts = [
      ...googleMeasurement.matchAll(
        /src=\{?[`"']https:\/\/([a-z0-9.-]+)/g,
      ),
    ].map((match) => match[1]);
    expect(
      injectedHosts.length,
      "Aucun tiers détecté dans le composant de mesure : l'extraction est cassée.",
    ).toBeGreaterThan(0);

    for (const host of new Set(injectedHosts)) {
      // googletagmanager.com, google-analytics.com… : le visiteur n'a pas à
      // connaître le nom d'hôte, mais il doit lire le nom du destinataire.
      const vendor = /google/.test(host) ? "Google" : host;
      expect(
        cookieBanner,
        `Le composant de mesure charge ${host} après acceptation, mais la bannière ne nomme pas ${vendor}.`,
      ).toContain(vendor);
    }
  });

  it("ne promet pas l'absence d'identifiant publicitaire quand le tag en accorde un", () => {
    // GoogleMeasurement passe ad_storage / ad_personalization à « granted »
    // dès l'acceptation : annoncer une mesure « sans identifiant publicitaire »
    // serait un consentement recueilli sur une information fausse.
    const grantsAdvertising =
      /'update'[\s\S]{0,400}ad_storage:\s*'granted'/.test(googleMeasurement);
    if (!grantsAdvertising) return;

    expect(
      cookieBanner,
      "La bannière promet une mesure sans identifiant publicitaire alors que le tag Google active ad_storage.",
    ).not.toMatch(/sans identifiant publicitaire/i);
  });

  it("donne accès aux six documents et aux préférences depuis le footer compact", () => {
    for (const href of [
      "/legal/mentions",
      "/legal/cgv",
      "/legal/confidentialite",
      "/legal/cookies",
      "/legal/reclamations",
      "/legal/accessibilite",
    ]) {
      expect(compactFooter).toContain(href);
    }
    expect(compactFooter).toContain("Gérer mes cookies");
  });

  it("ne présente pas la démarche accessibilité comme une déclaration auditée", () => {
    expect(accessibilityPage).toContain("Démarche d'accessibilité");
    expect(accessibilityPage).not.toContain("Déclaration d'accessibilité");
  });

  it("versionne la notice courte dans la base et les courriels de preuve", () => {
    expect(projectInquiryRoute).toContain(
      "privacyNoticeVersion: PROJECT_INQUIRY_PRIVACY_NOTICE_VERSION",
    );
    expect(projectInquiryRoute).toContain(
      "Notice vie privée lue : version ${PROJECT_INQUIRY_PRIVACY_NOTICE_VERSION}",
    );
    expect(projectInquiryRoute).toContain(
      "prise de connaissance confirmée",
    );
  });

  it("énumère dans les mentions les familles de prestataires réellement déclarées", () => {
    // Les mentions renvoient à la politique en énumérant les rôles des « autres
    // prestataires ». Dès qu'un destinataire de mesure est déclaré au tableau,
    // l'énumération doit le couvrir, sinon elle devient matériellement
    // incomplète au moment précis où le tag est activé.
    const measurementRow = recipientsTable
      .split("<tr>")
      .find((row) => /Google Ads/.test(row) && /mesure|campagne/i.test(row));
    if (!measurementRow) return;

    const enumeration =
      mentions.match(/Les autres prestataires[\s\S]*?<\/p>/)?.[0] ?? "";
    expect(
      enumeration,
      "L'énumération des « autres prestataires » a disparu des mentions légales.",
    ).not.toBe("");
    expect(
      enumeration,
      "La politique déclare un destinataire de mesure d'audience ; les mentions légales ne l'énumèrent pas.",
    ).toMatch(/mesure d['’]audience/i);
  });

  it("mentionne le directeur de la publication et l'hébergeur", () => {
    // Les deux mentions obligatoires (art. 6-III LCEN) les plus souvent
    // oubliées lors d'une refonte des mentions légales.
    expect(mentions.toLowerCase()).toContain("directeur de la publication");
    expect(mentions).toContain("Vercel Inc.");
  });

  it("aligne la date affichée dans les CGV sur le LAST_UPDATED de la page", () => {
    const iso = extractLastUpdated(cgvPage);
    expect(cgv).toContain(frenchLongDate(iso));
  });
});

describe("politique de confidentialité — versions publiées", () => {
  const publishedVersions = [
    ...confidentialite.matchAll(/<td>(\d{4}-\d{2}-\d{2})[^<]*<\/td>/g),
  ].map((match) => match[1]);

  it("publie un historique des versions", () => {
    expect(publishedVersions.length).toBeGreaterThanOrEqual(2);
  });

  it("documente la version en vigueur", () => {
    // Une modification de fond doit porter une nouvelle date (engagement pris
    // dans la section « Sécurité, incident et mise à jour ») ET figurer dans
    // l'historique, sinon la date affichée ne renvoie à rien de vérifiable.
    expect(publishedVersions).toContain(extractLastUpdated(confidentialitePage));
  });

  it("nomme un hébergeur de messagerie pour chaque domaine de contact publié", () => {
    // Les pages légales publient une adresse de contact ; le tableau des
    // destinataires doit dire qui héberge la boîte correspondante. L'adresse
    // vient désormais d'une constante : on part donc du domaine réellement
    // publié, tout en continuant à ramasser un éventuel `mailto:` littéral.
    const legalContent = LEGAL_CONTACT_SOURCES.map(([, source]) => source).join(
      "\n",
    );
    const domains = new Set<string>([CONTACT_EMAIL.split("@")[1]]);
    for (const match of legalContent.matchAll(
      /mailto:[^"@\s{}]+@([a-z0-9.-]+\.[a-z]{2,})/g,
    )) {
      domains.add(match[1]);
    }

    expect(domains.size).toBeGreaterThan(0);
    expect(
      recipientsTable,
      "Section « Destinataires » introuvable dans la politique.",
    ).not.toBe("");
    for (const domain of domains) {
      expect(
        recipientsTable,
        `Aucun hébergeur de messagerie n'est déclaré pour le domaine ${domain}, pourtant publié comme adresse de contact.`,
      ).toContain(domain);
    }
  });

  it("documente la version horodatée sur chaque brief et chaque courriel", () => {
    // La route écrit cette version dans `privacy_notice_version` et l'affiche
    // au prospect comme « prise de connaissance confirmée ». Le lecteur doit
    // pouvoir rattacher cette date à un contenu : elle doit donc rester
    // documentée dans l'historique publié, même après une mise à jour.
    // La route dérive sa version de la constante partagée : on vérifie le
    // câblage ET que la version en vigueur est bien documentée publiquement.
    expect(projectInquiryRoute).toContain(
      "PROJECT_INQUIRY_PRIVACY_NOTICE_VERSION = PRIVACY_NOTICE_VERSION",
    );
    expect(projectInquiryRoute).toContain('from "@/lib/privacy-notice"');
    expect(publishedVersions).toContain(PRIVACY_NOTICE_VERSION);
  });
});

describe("page cookies — état réellement servi", () => {
  it("conditionne l'absence de cookie publicitaire à l'absence d'identifiant Google", () => {
    // Google Ads EST une régie publicitaire et le tag accorde ad_storage :
    // l'encadré ne peut pas affirmer l'absence de cookie publicitaire sans
    // dépendre de l'état réel de la configuration.
    expect(cookies).toContain('from "@/lib/google-measurement"');
    expect(
      cookies,
      "L'encadré d'ouverture ne dépend plus de la configuration réelle de la mesure.",
    ).toMatch(/isGoogleMeasurementConfigured\(\)/);
    expect(
      cookies,
      "L'absence de cookie publicitaire est de nouveau affirmée sans condition.",
    ).not.toMatch(
      /<strong>\s*Aucun cookie publicitaire déposé par le site\.?\s*<\/strong>/,
    );
  });

  it("inventorie les cookies Google avant même leur activation", () => {
    // L'inventaire se présente comme exhaustif et « actualisé lorsqu'un
    // stockage ou un service tiers change » : poser un identifiant de mesure
    // doit rester un changement d'état de ligne, pas une réécriture de page.
    const inventory =
      cookies.match(/id: "inventaire"[\s\S]*?id: "mesure"/)?.[0] ?? "";
    expect(inventory, "Section « Inventaire » introuvable.").not.toBe("");
    for (const cookieName of ["_ga", "_gcl_au"]) {
      expect(
        inventory,
        `Le cookie ${cookieName} déposé par le tag Google n'apparaît pas dans l'inventaire.`,
      ).toContain(cookieName);
    }
  });

  it("décrit hc_consent_v1 comme ce que le code y écrit réellement", () => {
    // `writeCookieConsent` stocke `COOKIE_CONSENT_VERSION`, un numéro de schéma
    // de stockage, et `readCookieConsent` ne redemande le choix qu'en cas de
    // changement de ce numéro ou d'expiration. Annoncer « la version de la
    // politique » laisserait croire qu'une nouvelle version de la notice
    // invalide le consentement, ce que le code ne fait pas.
    const row = cookies
      .split("<tr>")
      .find((cell) => cell.includes("hc_consent_v1"));
    expect(row, "Ligne hc_consent_v1 introuvable dans l'inventaire.").toBeDefined();

    const consentBoundToNoticeVersion = /PRIVACY_NOTICE_VERSION/.test(
      cookieConsentLib,
    );
    if (consentBoundToNoticeVersion) return;

    expect(
      row,
      "L'inventaire rattache le choix stocké à la version de la politique, alors que le consentement ne mémorise qu'un numéro de format.",
    ).not.toMatch(/version de la politique/i);
    expect(
      row,
      "L'inventaire ne dit plus ce que le numéro stocké représente réellement.",
    ).toMatch(/version du format de consentement/i);
  });

  it("décrit le bouton « Gérer mes cookies » tel qu'il est réellement rendu", () => {
    // Les deux seuls points de rendu du bouton le conditionnent à la bannière.
    for (const [name, source] of [
      ["SiteFooter", footer],
      ["LegalLinksFooter", compactFooter],
    ] as const) {
      expect(
        source,
        `${name} rend « Gérer mes cookies » sans le conditionner à la bannière : la page cookies doit alors être réécrite.`,
      ).toMatch(/isCookieBannerEnabled\(\)\s*\?/);
    }

    const bannerOff = cookies
      .split(/<p>/)
      .find((paragraph) => /bannière n[’']est pas active/.test(paragraph));
    expect(
      bannerOff,
      "La page ne traite plus le cas où la bannière est inactive.",
    ).toBeDefined();
    expect(
      bannerOff,
      "La page laisse croire qu'un bouton « Gérer mes cookies » reste affiché alors que les deux pieds de page le masquent.",
    ).toMatch(/n[’']est pas affich/);
  });

  it("annonce la même durée de mesure et le même mécanisme de purge que la politique", () => {
    // Aucune purge automatisée de la table de mesure n'existe dans le dépôt :
    // le plafond publié doit dire par quoi il est appliqué, comme le fait déjà
    // /legal/confidentialite. Deux pages, un seul régime.
    for (const [name, source] of [
      ["/legal/cookies", cookies],
      ["/legal/confidentialite", confidentialite],
    ] as const) {
      if (!/13\s*mois/.test(source)) continue;
      expect(
        source,
        `${name} annonce un plafond de 13 mois sans dire comment il est appliqué.`,
      ).toMatch(/proc[ée]dure\s+p[ée]riodique/);
    }
  });
});

describe("prestataires appelés et prestataires déclarés", () => {
  type HeaderGroup = {
    source: string;
    headers: { key: string; value: string }[];
  };

  /**
   * Hôtes de la CSP RÉELLEMENT SERVIE.
   *
   * Lire le littéral `"connect-src 'self' …"` de next.config.ts rendait ce
   * contrôle aveugle : la directive y est assemblée à partir de plusieurs
   * tableaux, et les hôtes de mesure Google vivent dans une autre variable. On
   * résout donc les en-têtes, comme le fait csp-report/policy-contract.test.ts.
   */
  async function connectSrcHosts(
    env: Record<string, string | undefined>,
  ): Promise<string[]> {
    vi.resetModules();
    for (const [key, value] of Object.entries(env)) {
      vi.stubEnv(key, value);
    }
    const loaded = (await import("../../../next.config")) as {
      default: NextConfig;
    };
    const groups = ((await loaded.default.headers?.()) ?? []) as HeaderGroup[];
    const csp = groups
      .find((group) => group.source === "/:path*")
      ?.headers.find((header) => header.key === "Content-Security-Policy")
      ?.value;
    expect(csp, "La CSP du groupe global a disparu.").toBeDefined();

    const connectSrc = (csp as string)
      .split(";")
      .map((entry) => entry.trim())
      .find((entry) => entry.startsWith("connect-src "));
    expect(connectSrc, "Directive connect-src absente de la CSP.").toBeDefined();

    return (connectSrc as string)
      .split(/\s+/)
      .slice(1)
      .filter((source) => source.startsWith("https://"))
      .map((source) => source.slice("https://".length));
  }

  const WITHOUT_MEASUREMENT = {
    NEXT_PUBLIC_GOOGLE_ADS_ID: undefined,
    NEXT_PUBLIC_GA4_ID: undefined,
  };
  const WITH_MEASUREMENT = {
    NEXT_PUBLIC_GOOGLE_ADS_ID: "AW-1234567890",
    NEXT_PUBLIC_GA4_ID: undefined,
  };

  /** Hôte autorisé par la CSP → destinataire attendu au tableau publié. */
  const EXPECTED_DECLARATION: { pattern: RegExp; declared: string }[] = [
    { pattern: /(^|\.)calendly\.com$/, declared: "Calendly" },
    {
      // `googleadservices` fait partie de la liste : c'est l'hôte qui reçoit
      // réellement les conversions Google Ads. Il manquait à la CSP, donc le
      // ping de conversion aurait été bloqué — silencieusement, faute de
      // point de collecte `report-to`. Le destinataire, lui, était déjà
      // déclaré au tableau : c'est le même, Google, pour le même usage.
      pattern:
        /(^|\.)(google|googletagmanager|google-analytics|googleadservices|doubleclick)\.(com|net)$/,
      declared: "Google Ads",
    },
  ];

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.resetModules();
  });

  it("déclare chaque hôte appelé dans le tableau des destinataires", async () => {
    expect(
      recipientsTable,
      "Section « Destinataires » introuvable dans la politique.",
    ).not.toBe("");

    for (const env of [WITHOUT_MEASUREMENT, WITH_MEASUREMENT]) {
      const hosts = await connectSrcHosts(env);
      expect(hosts.length, "Aucun hôte externe : le contrôle serait vide.").toBeGreaterThan(0);

      for (const host of hosts) {
        const bare = host.replace(/^\*\./, "");
        const rule = EXPECTED_DECLARATION.find(({ pattern }) =>
          pattern.test(bare),
        );
        expect(
          rule,
          `L'hôte ${host} est autorisé par connect-src mais rattaché à aucun destinataire de /legal/confidentialite.`,
        ).toBeDefined();
        expect(
          recipientsTable,
          `Le destinataire « ${rule?.declared} » (hôte ${host}) manque au tableau des destinataires.`,
        ).toContain(rule?.declared as string);
      }
    }
  });

  it("déclare un destinataire de mesure Google dès qu'un identifiant est configuré", async () => {
    const closed = await connectSrcHosts(WITHOUT_MEASUREMENT);
    const opened = await connectSrcHosts(WITH_MEASUREMENT);
    const added = opened.filter((host) => !closed.includes(host));

    expect(
      added.length,
      "Un identifiant de mesure n'ouvre plus aucun hôte : le contrôle serait vide.",
    ).toBeGreaterThan(0);

    // Google figurait déjà au tableau comme hébergeur de la messagerie
    // Workspace, ce qui ne dit rien du tag de mesure : la ligne attendue est
    // une ligne distincte, qui décrit la mesure.
    const measurementRow = recipientsTable
      .split("<tr>")
      .find(
        (row) => /Google Ads/.test(row) && /mesure|campagne/i.test(row),
      );
    expect(
      measurementRow,
      "Aucune ligne du tableau des destinataires ne déclare la mesure Google.",
    ).toBeDefined();
    expect(
      measurementRow,
      "La mesure Google est confondue avec l'hébergement de la messagerie Workspace.",
    ).not.toMatch(/Workspace/);
  });
});
