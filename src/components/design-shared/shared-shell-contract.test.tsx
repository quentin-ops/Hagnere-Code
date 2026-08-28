import { readFileSync } from "node:fs";
import { join } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { navHtml } from "./nav-html";
import { ContactProjectSection, SiteFooter } from "./SiteFooter";
import { FIRST_CALL_CONTACT } from "@/components/homepage/first-call";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY_NATIONAL,
  CONTACT_PHONE_E164,
} from "@/lib/contact-details";
import { LOCAL_PAGES, localPagePath } from "@/lib/local-pages";
import { PRIVACY_NOTICE_VERSION } from "@/lib/privacy-notice";
import { SERVICE_LINKS } from "@/lib/services";

const read = (relative: string) =>
  readFileSync(join(process.cwd(), relative), "utf8");

const NAV_CSS = read("src/components/design-shared/nav-dropdown.css");
const RESPONSIVE_CSS = read("src/components/design-shared/responsive.css");
const INTERACTIVE = read(
  "src/components/design-shared/useDesignInteractive.ts",
);
const FOOTER_SOURCE = read("src/components/design-shared/SiteFooter.tsx");

describe("navigation partagée — vocabulaire et repli", () => {
  it("publie la ligne téléphonique du module de coordonnées", () => {
    // La pastille de navigation est rendue sur chacune des pages du site :
    // c'est le premier endroit où un numéro écrit en dur diverge du reste du
    // NAP publié (pied de page, /contact, JSON-LD).
    expect(navHtml).toContain(`href="tel:${CONTACT_PHONE_E164}"`);
    expect(navHtml).toContain(`<span>${CONTACT_PHONE_DISPLAY_NATIONAL}</span>`);
  });

  it("nomme la catégorie « Studio », comme le pane et le footer", () => {
    expect(navHtml).toContain(
      '<span class="hc-mega-cat-label">Studio</span>',
    );
    expect(navHtml).not.toContain(
      '<span class="hc-mega-cat-label">Cabinet</span>',
    );
    // Le pane et le footer parlent déjà de studio : le vocabulaire reste aligné.
    expect(navHtml).toContain("NOTRE STUDIO");
  });

  it("garde les trois familles de services de l'accueil, sans en inventer une quatrième", () => {
    const families = ["Construire", "Faire grandir", "Protéger &amp; opérer"];
    families.forEach((family) => {
      expect(navHtml).toContain(
        `<span class="hc-mega-cat-label">${family}</span>`,
      );
    });
  });

  it("laisse le nom accessible du déclencheur suivre le libellé réellement affiché", () => {
    const trigger =
      navHtml.match(/<button[^>]+data-mega-trigger[^>]*>/)?.[0] ?? "";
    expect(trigger).toBeTruthy();
    // Un aria-label figé « Nos services » contredirait le bouton icône seule
    // du mobile, qui ouvre toute la navigation.
    expect(trigger).not.toContain("aria-label");
    expect(trigger).toContain('aria-expanded="false"');
    expect(navHtml).toContain(
      '<span class="hc-nav-pill-trigger-label">Nos services</span>',
    );
    expect(navHtml).toContain(
      '<span class="hc-nav-pill-trigger-label-mobile">Menu</span>',
    );
  });

  it("expose « Menu » comme nom accessible sous 720 px au lieu de le masquer", () => {
    const mobileBlock = NAV_CSS.slice(NAV_CSS.indexOf("@media (max-width: 720px)"));
    expect(mobileBlock).toMatch(
      /\.hc-nav-pill-trigger-label-mobile\s*{[^}]*display:\s*block/,
    );
    expect(mobileBlock).toMatch(
      /\.hc-nav-pill-trigger-label-mobile\s*{[^}]*clip-path:\s*inset\(50%\)/,
    );
  });

  it("garde un accès au hub /services sans JavaScript", () => {
    // Le panneau est servi aria-hidden + inert : il n'existe qu'après hydratation.
    expect(navHtml).toContain('data-mega-panel role="region"');
    expect(navHtml).toContain("aria-hidden=\"true\" inert");
    expect(navHtml).toMatch(
      /<noscript><a class="hc-nav-pill-link hc-nav-pill-link-nojs" href="\/services">/,
    );
    const mobileBlock = NAV_CSS.slice(NAV_CSS.indexOf("@media (max-width: 720px)"));
    expect(mobileBlock).toContain(
      ".hc-nav-pill-link.hc-nav-pill-link-nojs { display: inline-flex; }",
    );
  });

  it("ne revendique aucune marque déposée tant qu'aucun dépôt n'existe", () => {
    expect(navHtml).not.toContain("™");
    expect(navHtml).toContain("Sprint Fixe :");
    expect(FOOTER_SOURCE).not.toContain("™");
  });
});

describe("méga-menu mobile — hauteur et verrou de défilement", () => {
  it("dimensionne la feuille en unités dynamiques, avec repli 100vh", () => {
    // Sur iOS Safari, 100vh = large viewport : le bas du panneau passait sous
    // la barre d'outils. Le repli 100vh doit précéder la déclaration 100dvh.
    const base = NAV_CSS.indexOf("max-height: calc(100vh - 120px);");
    const baseDynamic = NAV_CSS.indexOf("max-height: calc(100dvh - 120px);");
    const sheet = NAV_CSS.indexOf("max-height: calc(100vh - 80px);");
    const sheetDynamic = NAV_CSS.indexOf("max-height: calc(100dvh - 80px);");

    expect(base).toBeGreaterThan(-1);
    expect(sheet).toBeGreaterThan(-1);
    expect(baseDynamic).toBeGreaterThan(base);
    expect(sheetDynamic).toBeGreaterThan(sheet);
    expect(NAV_CSS).toContain("env(safe-area-inset-bottom, 0px)");
  });

  it("verrouille le défilement du corps quand la feuille mobile est ouverte", () => {
    expect(INTERACTIVE).toContain('window.matchMedia("(max-width: 720px)")');
    expect(INTERACTIVE).toContain(
      'document.documentElement.classList.toggle("nav-menu-lock", locked)',
    );
    expect(INTERACTIVE).toContain(
      'document.body.classList.toggle("nav-menu-lock", locked)',
    );
    expect(INTERACTIVE).toContain("setScrollLock(open && isMobileSheet())");
    // Le verrou doit être relâché au démontage.
    expect(INTERACTIVE).toContain("setScrollLock(false)");
  });
});

describe("hydratation partagée — FAQ et reveal", () => {
  it("relie chaque question de FAQ à sa réponse", () => {
    expect(INTERACTIVE).toContain('q.setAttribute("aria-controls", a.id)');
  });

  it("n'observe plus des centaines de nœuds pour une animation neutralisée", () => {
    expect(INTERACTIVE).not.toContain('querySelectorAll(".reveal")');
    const responsive = read("src/components/design-shared/responsive.css");
    // Le neutraliseur reste la garantie de visibilité : le retirer sans
    // réintroduire un observateur laisserait les blocs à opacity: 0.
    expect(responsive).toMatch(/\.reveal,\s*\n\.reveal\.in\s*{[^}]*opacity:\s*1/);
  });
});

describe("formulaire de contact partagé", () => {
  const html = renderToStaticMarkup(<ContactProjectSection />);

  it("nomme chaque champ par son seul libellé, erreurs comprises", () => {
    const controls = html.match(/<(?:input|select|textarea)[^>]*>/g) || [];
    const named = controls.filter((tag) => tag.includes("aria-labelledby="));
    expect(named.length).toBeGreaterThanOrEqual(8);

    named.forEach((tag) => {
      const id = tag.match(/aria-labelledby="([^"]+)"/)?.[1];
      expect(id).toBeTruthy();
      expect(html).toContain(`id="${id}"`);
    });
  });

  it("relie les messages d'erreur aux champs au lieu de polluer leur nom", () => {
    // L'état d'erreur vient d'une réponse serveur : on verrouille le câblage
    // à la source plutôt que de simuler un aller-retour réseau.
    expect(FOOTER_SOURCE).toContain(
      "const errorId = (field: string) => `${fieldId}-${field}-error`;",
    );
    [
      "firstName",
      "lastName",
      "email",
      "company",
      "projectType",
      "budget",
      "timeline",
      "message",
      "consent",
    ].forEach((field) => {
      expect(FOOTER_SOURCE).toContain(`errorId("${field}")`);
      expect(FOOTER_SOURCE).toContain(`describedBy("${field}"`);
    });
  });

  it("déplace le focus vers le contrôle anti-robot ouvert par l'envoi", () => {
    expect(FOOTER_SOURCE).toContain("focusChallengeRef.current = true;");
    expect(FOOTER_SOURCE).toContain(
      'input[name="mathChallengeAnswer"]',
    );
    expect(FOOTER_SOURCE).toContain("if (input && !input.disabled)");
  });

  it("n'échoue jamais en silence sans JavaScript", () => {
    const noscript = html.match(/<noscript>([\s\S]*?)<\/noscript>/)?.[1] ?? "";
    expect(noscript).toContain(".sf-submit{display:none}");
    expect(noscript).toContain(`mailto:${CONTACT_EMAIL}`);
    expect(noscript).toContain(`tel:${CONTACT_PHONE_E164}`);
    expect(noscript).toContain("calendly.com");
  });
});

/**
 * Petit moteur d'audit maison sur la coquille partagée (nav + footer), qui est
 * rendue sur chacune des pages du site : un défaut ici se compte en dizaines
 * de pages. Sans dépendance : pas d'axe-core ni de navigateur.
 */
function accessibleName(tag: string, inner: string): string {
  const label = tag.match(/aria-label="([^"]*)"/)?.[1];
  if (label) return label.trim();
  return inner
    .replace(/<svg[\s\S]*?<\/svg>/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/&[^;]+;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function interactiveElements(html: string, tagName: "a" | "button") {
  const pattern = new RegExp(`<${tagName}\\b([^>]*)>([\\s\\S]*?)</${tagName}>`, "g");
  return Array.from(html.matchAll(pattern)).map((match) => ({
    open: `<${tagName}${match[1]}>`,
    name: accessibleName(`<${tagName}${match[1]}>`, match[2]),
  }));
}

describe("audit maison de la coquille partagée", () => {
  const shell = `${navHtml}\n${renderToStaticMarkup(<SiteFooter />)}`;

  it("n'émet aucun identifiant en double", () => {
    const ids = (shell.match(/\sid="([^"]+)"/g) || []).map((raw) =>
      raw.replace(/\sid="|"/g, ""),
    );
    const seen = new Set<string>();
    const duplicates = ids.filter((id) => {
      if (seen.has(id)) return true;
      seen.add(id);
      return false;
    });
    expect(duplicates).toEqual([]);
  });

  it("donne un nom accessible à chaque lien et à chaque bouton", () => {
    const controls = [
      ...interactiveElements(shell, "a"),
      ...interactiveElements(shell, "button"),
    ];
    // Garde-fou : si l'extraction cesse de trouver les éléments, le test ne
    // doit pas passer à vide.
    expect(controls.length).toBeGreaterThan(40);

    const unnamed = controls.filter(
      (el) => !el.name && !el.open.includes('aria-hidden="true"'),
    );
    expect(unnamed.map((el) => el.open)).toEqual([]);
  });

  it("relie chaque aria-describedby et aria-labelledby à une cible existante", () => {
    const references = (
      shell.match(/aria-(?:describedby|labelledby)="([^"]+)"/g) || []
    ).flatMap((raw) => raw.replace(/^[^"]+"|"$/g, "").split(/\s+/));

    references.forEach((id) => {
      expect(shell).toContain(`id="${id}"`);
    });
  });
});

describe("pied de page partagé", () => {
  const html = renderToStaticMarkup(<SiteFooter />);

  it("annonce exactement le nombre de services qu'il liste", () => {
    const announced = Number(
      html.match(/class="sf-foot-cta-kicker">(\d+) services</)?.[1],
    );
    const tiles = new Set(
      (html.match(/href="\/services\/[a-z0-9-]+"/g) || []).map((h) => h),
    );

    expect(announced).toBeGreaterThan(0);
    expect(tiles.size).toBe(announced);
  });

  it("garde un intitulé de lien explicite pour la dictée vocale", () => {
    expect(html).toContain("En savoir plus sur la dictée vocale");
    expect(html).not.toMatch(/>En savoir plus<\/a>/);
  });

  /**
   * Le nombre annoncé était un littéral « 11 services » recopié à la main, à
   * côté d'un hub, d'un sitemap et d'un JSON-LD qui dérivaient déjà du
   * registre. Trois sources pour un même nombre finissent toujours par
   * diverger — c'est ce qui avait laissé « Dix services » en H2.
   */
  it("dérive le nombre de services du registre, sans le recopier", () => {
    expect(html).toContain(`${SERVICE_LINKS.length} services`);
    expect(FOOTER_SOURCE).toContain("{SERVICE_LINKS.length} services");
  });
});

/**
 * Maillage : une page publiée dont aucun gabarit partagé ne parle n'a qu'un
 * seul point d'entrée éditorial, révocable au prochain remaniement de texte.
 * Le pied de page et le méga-menu sont les deux seuls emplacements présents
 * sur les 60+ pages du site.
 */
describe("emplacements permanents de la coquille partagée", () => {
  const shell = `${navHtml}\n${renderToStaticMarkup(<SiteFooter />)}`;

  it("référence chaque page locale publiée", () => {
    expect(LOCAL_PAGES.length).toBeGreaterThan(0);
    for (const page of LOCAL_PAGES) {
      const href = localPagePath(page);
      expect(shell, `${href} n'est lié ni par le footer ni par le méga-menu`)
        .toContain(`href="${href}"`);
    }
  });

  it("référence les deux pages technologie", () => {
    for (const href of ["/agence-react", "/agence-next-js"]) {
      expect(shell, href).toContain(`href="${href}"`);
    }
  });

  it("expose les deux kits cahier des charges, pas un seul", () => {
    expect(navHtml).toContain(
      'href="/ressources/kit-cahier-des-charges-site-internet"',
    );
    expect(navHtml).toContain(
      'href="/ressources/kit-cahier-des-charges-application-metier"',
    );
  });

  it("nomme l'interlocuteur du premier rendez-vous comme le reste du site", () => {
    expect(navHtml).toContain(FIRST_CALL_CONTACT);
    // « le fondateur », « un expert », « un associé qui code » : trois des six
    // variantes que l'audit voulait faire disparaître. « Associé » est en
    // outre faux — SASU à président fondateur unique, sans associé.
    expect(shell).not.toMatch(
      /avec le fondateur|avec un expert|un expert qui code|associé qui code/i,
    );
  });
});

/**
 * Le texte d'un titre coupé par `<br>` sans espace est concaténé sans
 * séparateur par les technologies d'assistance et par toute extraction de
 * texte : « Parlons devotre projet ». Le balayage reste ici cantonné aux
 * fichiers de la coquille partagée — les corps de page appartiennent à
 * d'autres propriétaires.
 */
describe("titres coupés par <br> dans la coquille partagée", () => {
  it("garde une espace avant chaque retour à la ligne", () => {
    const shell = `${navHtml}\n${renderToStaticMarkup(<SiteFooter />)}`;
    const glued = shell.match(/\S<br\s*\/?>/g) || [];
    expect(glued).toEqual([]);
  });
});

describe("garde-fous CSS de la coquille partagée", () => {
  /**
   * `overflow-x: hidden` sur `html` force `overflow-y` à `auto` (CSS Overflow
   * 3) : le document devient un conteneur de défilement et les descendants
   * `position: sticky` — la barre de navigation, les actions du tunnel —
   * cessent de coller. `clip` clippe sans créer ce conteneur.
   */
  it("pose le filet anti-débordement sans condition de largeur, en clip", () => {
    // Première *règle* @media, pas la première mention dans un commentaire.
    const beforeFirstMedia = RESPONSIVE_CSS.slice(
      0,
      RESPONSIVE_CSS.indexOf("\n@media "),
    );
    expect(beforeFirstMedia).toMatch(/html,\s*body\s*{[^}]*overflow-x:\s*clip/);
    expect(beforeFirstMedia).toMatch(/\.hc-design\s*{[^}]*overflow-x:\s*clip/);
    expect(beforeFirstMedia).toMatch(/\.hc-design\s*{[^}]*max-width:\s*100vw/);
    // Aucune réintroduction de `hidden` sur le document lui-même.
    expect(RESPONSIVE_CSS).not.toMatch(/html,\s*body\s*{[^}]*overflow-x:\s*hidden/);
  });

  it("effondre les grilles de process et de scénarios sur téléphone", () => {
    const mobile = RESPONSIVE_CSS.slice(
      RESPONSIVE_CSS.indexOf("@media (max-width: 768px)"),
    );
    const singleColumn = /\.proc-grid,\s*\n\s*\.scase-grid\s*{\s*grid-template-columns:\s*1fr\s*!important/;
    expect(mobile).toMatch(singleColumn);
    expect(mobile).toMatch(/\.proc-step\s*{\s*padding:\s*24px\s*20px/);
  });

  it("libère le budget de peinture des sections sous la ligne de flottaison", () => {
    expect(RESPONSIVE_CSS).toMatch(
      /@supports \(content-visibility: auto\)[\s\S]*?#main-content > section:not\(:first-of-type\)[\s\S]*?content-visibility:\s*auto/,
    );
    // La première section porte le LCP : elle doit rester peinte.
    expect(RESPONSIVE_CSS).toContain("section:not(:first-of-type)");
  });

  it("donne 44 px aux deux seuls contrôles de l'en-tête mobile", () => {
    const mobile = NAV_CSS.slice(NAV_CSS.indexOf("@media (max-width: 720px)"));
    expect(mobile).toMatch(/\.hc-nav-pill-trigger\s*{[^}]*width:\s*44px/);
    expect(mobile).toMatch(/\.hc-nav-pill-trigger\s*{[^}]*height:\s*44px/);
    expect(mobile).toMatch(
      /\.hc-nav \.hc-nav-cta-primary\s*{[^}]*width:\s*44px/,
    );
    expect(mobile).toMatch(/\.hc-mega-cat\s*{[^}]*min-height:\s*44px/);
  });
});

/**
 * Le calculateur ROI de /services/outils-internes-sur-mesure est un cas de
 * propriété partagée : le facteur de calcul vit dans useDesignInteractive
 * (coquille partagée), la valeur par défaut affichée et la phrase « avec la
 * convention de N semaines travaillées par an » vivent dans le corps de la
 * page. Bouger l'un sans l'autre publie une page qui se contredit elle-même.
 *
 * Ce test n'impose pas *quelle* valeur retenir — l'unification sur
 * `WORKING_WEEKS_PER_YEAR` (48, source de /outils/calculateur-cout-excel et du
 * guide ROI) reste à faire côté corps de page. Il impose que les deux moitiés
 * bougent ensemble.
 */
describe("convention de semaines travaillées — calcul et texte publié", () => {
  it("garde le facteur du calcul égal à la convention annoncée sur la page", () => {
    const factor = Number(
      /const annualCost = peopleNum \* hoursNum \* costNum \* (\d+);/.exec(
        INTERACTIVE,
      )?.[1],
    );
    const body = read("src/components/outils-internes/body.ts");
    const published = Number(
      /convention de (\d+) semaines travaillées par an/.exec(body)?.[1],
    );

    expect(Number.isFinite(factor)).toBe(true);
    expect(Number.isFinite(published)).toBe(true);
    expect(
      factor,
      `useDesignInteractive calcule sur ${factor} semaines, la page en annonce ${published}`,
    ).toBe(published);
  });

  it("garde la valeur par défaut affichée cohérente avec le calcul", () => {
    // 8 personnes × 6 h × 45 €/h, les valeurs par défaut des trois curseurs.
    const body = read("src/components/outils-internes/body.ts");
    const factor = Number(
      /const annualCost = peopleNum \* hoursNum \* costNum \* (\d+);/.exec(
        INTERACTIVE,
      )?.[1],
    );
    const sliderDefault = (id: string) =>
      Number(
        new RegExp(`id="${id}"[^>]*value="(\\d+)"`).exec(body)?.[1] ??
          new RegExp(`id="${id}"[^>]*?value="(\\d+)"`).exec(body)?.[1],
      );

    const people = sliderDefault("roi-people");
    const hours = sliderDefault("roi-hours");
    const cost = sliderDefault("roi-cost");
    expect([people, hours, cost].every(Number.isFinite)).toBe(true);

    const expected = people * hours * cost * factor;
    // Le corps de page sépare les milliers par `&nbsp;` : on ne garde que
    // les chiffres.
    const displayed = (id: string) =>
      Number(
        (new RegExp(`<span id="${id}">([^<]+)</span>`).exec(body)?.[1] ?? "x")
          .replace(/\D/g, ""),
      );
    const shown = displayed("roi-total");
    const shownMonthly = displayed("roi-monthly");

    expect(shown, "valeur par défaut #roi-total").toBe(expected);
    expect(shownMonthly, "valeur par défaut #roi-monthly").toBe(
      Math.round(expected / 12),
    );
  });
});

describe("formulaire court — envoi et anti-robot", () => {
  it("distingue défi non chargé, champ vide et réponse fausse", () => {
    expect(FOOTER_SOURCE).toContain("getMathChallengeError(math)");
    expect(FOOTER_SOURCE).toContain("onLoadErrorChange={setMathUnavailable}");
    // L'ancien test « réponse incorrecte » sur un champ vide et désactivé.
    expect(FOOTER_SOURCE).not.toContain("isMathAnswerCorrect");
  });

  it("laisse la validation native bloquer un envoi incomplet", () => {
    const html = renderToStaticMarkup(<ContactProjectSection />);
    const form = html.match(/<form[^>]*class="sf-form"[^>]*>/)?.[0] ?? "";
    expect(form).toBeTruthy();
    expect(form).not.toContain("novalidate");
    // Les champs obligatoires doivent l'être côté navigateur, sinon retirer
    // `noValidate` ne change rien. (React n'émet pas les attributs dans
    // l'ordre du JSX : on cherche la balise, puis l'attribut dedans.)
    const control = (tag: "input" | "textarea", name: string) =>
      html.match(new RegExp(`<${tag}[^>]*name="${name}"[^>]*>`))?.[0] ?? "";
    for (const [tag, name] of [
      ["input", "firstName"],
      ["input", "lastName"],
      ["input", "email"],
      ["input", "company"],
      ["input", "consent"],
      ["textarea", "message"],
    ] as const) {
      expect(control(tag, name), name).toContain("required");
    }
  });

  /**
   * `/api/project-inquiry` répond volontairement 200 `{ captured: false }`
   * quand le piège à robots se déclenche — un gestionnaire de mots de passe
   * suffit à le remplir. Afficher « Message bien reçu » perdrait le lead sans
   * que personne ne le sache.
   */
  it("ne présente jamais un envoi non enregistré comme un succès", () => {
    expect(FOOTER_SOURCE).toContain("json.captured === false");
    const successIndex = FOOTER_SOURCE.indexOf('setStatus({ kind: "success"');
    const guardIndex = FOOTER_SOURCE.indexOf("json.captured === false");
    expect(guardIndex).toBeGreaterThan(-1);
    expect(guardIndex).toBeLessThan(successIndex);
  });

  it("affiche la version de la notice que l'accusé de réception atteste", () => {
    const html = renderToStaticMarkup(<ContactProjectSection />);
    expect(html).toContain(PRIVACY_NOTICE_VERSION);
    expect(html).toContain("sf-consent-version");
  });
});
