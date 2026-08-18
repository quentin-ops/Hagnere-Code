import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { getGuide, GUIDES } from "./guides";

const flagshipPath = join(
  process.cwd(),
  "src/app/guides/seo-ou-google-ads/page.tsx",
);

const flagshipSource = readFileSync(flagshipPath, "utf8");
const b2bPortalOgSource = readFileSync(
  join(
    process.cwd(),
    "src/app/guides/portail-client-b2b-sur-mesure/opengraph-image.tsx",
  ),
  "utf8",
);

const guideSources = GUIDES.map((guide) => ({
  guide,
  source: readFileSync(
    join(process.cwd(), "src/app/guides", guide.slug, "page.tsx"),
    "utf8",
  ),
}));

const rejectedFramework =
  /contrainte qui commande|contrainte dominante|portes non compensables|cinq portes|prochaine preuve|matrice d['’]arbitrage|tranche verticale|socles chiffrés|chaîne jusqu['’]au résultat métier|comité d['’]investissement|report ciblé/i;

const consultantJargon =
  /\b(cadrage|périmètre|preuve|socle|arbitrage|gouvernance|réversibilité|criticité|recette|jalon|livrable|trajectoire|activation)\b/i;

function visibleWords(source: string): string[] {
  return source
    .replace(/<[^>]+>/g, " ")
    .replace(/\{[^}]*\}/g, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

describe("human language guardrails for guides", () => {
  it("keeps SaaS evolution focused on decisions after the chosen lot", () => {
    const evolutionGuide = getGuide("faire-evoluer-saas-apres-mvp");
    const source = guideSources.find(
      ({ guide }) => guide.slug === evolutionGuide.slug,
    )?.source;
    const normalizedSource = source?.replace(/\s+/g, " ");
    const streams = source?.match(
      /const decisionStreams = \[([\s\S]*?)\n\];/,
    )?.[1];
    const releaseGate = source?.match(
      /const releaseChecks = \[([\s\S]*?)\n\];/,
    )?.[1];
    const story = source?.match(
      /const onboardingStory = \[([\s\S]*?)\n\];/,
    )?.[1];
    const calendar = source?.match(
      /const calendarCards = \[([\s\S]*?)\n\];/,
    )?.[1];

    expect(evolutionGuide.heroTitle).toContain("après le MVP");
    expect(normalizedSource).toContain(
      "Cette semaine, l’un de vos clients ne peut plus créer une demande, votre commercial réclame un export pour un prospect et votre développeur signale une mise à jour de sécurité.",
    );
    expect(normalizedSource).toContain(
      "Ces trois sujets ne doivent pas entrer dans la même liste avec la même priorité",
    );

    [
      "Protéger le service utilisé aujourd’hui",
      "Enregistrer ce que les clients et l’équipe observent",
      "Recevoir et livrer le petit lot déjà choisi",
      "Maintenir un produit sûr et exploitable",
    ].forEach((title) => expect(streams).toContain(`title: "${title}"`));
    expect(streams?.match(/number:/g)).toHaveLength(4);
    expect(source).toContain(
      "Le guide de priorisation a déjà produit un résultat visé, un petit lot, un test et des sujets reportés",
    );
    expect(source).toContain(
      "vous ne choisissez pas à nouveau le prochain lot",
    );
    expect(normalizedSource).toContain("Refaire son score à chaque réunion");

    [
      "Le comportement attendu est testé",
      "Un problème sera détecté",
      "Le retour arrière est praticable",
      "Le support sait quoi répondre",
      "La sécurité a été intégrée au travail",
      "L’effet sur les données personnelles est attribué",
    ].forEach((check) => expect(releaseGate).toContain(`title: "${check}"`));
    expect(releaseGate?.match(/\bstop:/g)).toHaveLength(6);
    expect(normalizedSource).toContain(
      "Faites-la si le lot ajoute ou modifie des données personnelles",
    );
    expect(normalizedSource).toContain(
      "Elle n’est ni automatique pour chaque fonction, ni écartée sans examen",
    );

    expect(story).toContain("trois utilisateurs");
    expect(story?.match(/\bverb:/g)).toHaveLength(7);
    expect(normalizedSource).toContain(
      "ce nombre n’est ni un seuil ni une preuve",
    );
    expect(source).toContain("L’exemple est entièrement fictif");

    expect(calendar?.match(/\btitle:/g)).toHaveLength(5);
    expect(normalizedSource).toContain(
      "Choisissez parmi cinq cartes et inscrivez vos quatre prochaines",
    );
    expect(normalizedSource).toContain(
      "un même type peut revenir deux fois et un autre ne pas être utile tout de suite",
    );
    expect(source).toContain("Maintenir, réduire ou arrêter");
    expect(normalizedSource).toContain("Aucun pourcentage fixe");

    expect(source).toContain("showSidebarCta={false}");
    expect(source).toContain("showPhone={false}");
    expect(source?.match(/<GuideInlineCTA\b/g)).toHaveLength(1);
    expect(source).not.toMatch(
      /href="tel:|FAQPage|HowTo|Offer|wordCount|prochain jour ouvré|fil rouge/i,
    );

    const evolutionOg = readFileSync(
      join(
        process.cwd(),
        "src/app/guides/faire-evoluer-saas-apres-mvp/opengraph-image.tsx",
      ),
      "utf8",
    );
    ["PROTÉGER", "ENREGISTRER", "LIVRER", "VÉRIFIER", "RÉVISER"].forEach(
      (label) => expect(evolutionOg).toContain(`label: "${label}"`),
    );
    expect(evolutionOg).toContain(
      "Continuer · corriger · reporter · retirer · arrêter",
    );
  });

  it("keeps the production guide grounded in one fictitious workshop day", () => {
    const productionGuide = getGuide("application-suivi-production-pme");
    const source = guideSources.find(
      ({ guide }) => guide.slug === productionGuide.slug,
    )?.source;
    const timelineBlock = source?.match(
      /const timeline = \[([\s\S]*?)\n\];/,
    )?.[1];
    const optionsBlock = source?.match(
      /const options = \[([\s\S]*?)\n\];/,
    )?.[1];
    const incidentTestsBlock = source?.match(
      /const incidentTests = \[([\s\S]*?)\n\];/,
    )?.[1];
    const normalizedSource = source?.replace(/\s+/g, " ");

    expect(productionGuide.heroTitle).toContain("production de votre PME");
    expect(normalizedSource).toContain(
      "Un client vous appelle : votre atelier dit que sa commande avance, le commerce la croit presque terminée et l’administration attend encore une quantité fiable.",
    );
    expect(source).toContain("Le scénario qui suit est entièrement fictif");
    expect(source).toContain("OF-FICTIF-2407");
    expect(source).toContain(
      "Lot fixe de 100 pièces à inspecter ; aucune quantité encore qualifiée",
    );
    expect(source).toMatch(/pour un lot fixe de[\s\S]*100 pièces à inspecter/);

    ["8 h 10", "10 h 05", "11 h 00", "11 h 40", "12 h 00", "15 h 20"].forEach(
      (time) => expect(timelineBlock).toContain(`eventTime: "${time}"`),
    );
    expect(timelineBlock?.match(/eventTime:/g)).toHaveLength(6);
    expect(source).toContain(
      "40 acceptées + 3 rebutées + 7 en cours ; 50 non encore engagées",
    );
    expect(source).toContain(
      "60 acceptées transférées + 3 déjà rebutées + 37 encore à qualifier = 100",
    );
    expect(source).toContain(
      "92 acceptées + 5 rebutées + 3 placées une première fois en reprise = 100 inspectées",
    );
    expect(source).toContain("ordre encore ouvert");

    [
      "1. Attendre en corrigeant le travail",
      "2. Configurer l’outil déjà possédé",
      "3. Adopter un produit standard de production",
      "4. Assembler un outil avec des blocs visuels",
      "5. Développer un ajout ciblé sur mesure",
    ].forEach((choice) => expect(optionsBlock).toContain(`title: "${choice}"`));
    [
      "coverage:",
      "effort:",
      "quality:",
      "cost:",
      "rights:",
      "continuity:",
      "owner:",
    ].forEach((field) =>
      expect(optionsBlock?.match(new RegExp(field, "g"))).toHaveLength(5),
    );

    expect(source).toContain("Réseau coupé au fractionnement");
    expect(source).toContain("Même événement scanné deux fois");
    expect(source).toContain("Kilogrammes saisis à la place de pièces");
    expect(source).toContain("Reprise terminée");
    expect(incidentTestsBlock?.match(/\btitle:/g)).toHaveLength(6);
    expect(source).toContain("les six mêmes mauvais cas");
    expect(incidentTestsBlock).toContain("Événement obligatoire absent");
    expect(incidentTestsBlock).toContain("Droit insuffisant ou excessif");
    expect(normalizedSource).toContain(
      "les six retards sont 0, 10, 3, 1, 4 et 2 minutes",
    );
    expect(source).toContain(
      "1 événement tardif ÷ 6 événements reçus × 100 = 16,7 %",
    );
    expect(source).toContain("<strong>3 %</strong>");
    expect(source).toContain("<strong>5 %</strong>");

    expect(source).toContain("informatique de gestion, dite");
    expect(source).toContain("technologie qui conduit ou surveille");
    expect(source).toContain(
      "Guide_Systemes_industriels__Mesures_detaillees_v2.pdf",
    );
    expect(source).toContain(
      "Mesurer l’état d’un ordre ne justifie pas de classer les salariés",
    );
    expect(source).toContain("showSidebarCta={false}");
    expect(source).toContain("showPhone={false}");
    expect(source?.match(/<GuideInlineCTA\b/g)).toHaveLength(1);
    expect(source).not.toMatch(/href="tel:|FAQPage|HowTo|Offer|wordCount/);

    const productionOg = readFileSync(
      join(
        process.cwd(),
        "src/app/guides/application-suivi-production-pme/opengraph-image.tsx",
      ),
      "utf8",
    );
    expect(productionOg).toContain("SCÉNARIO FICTIF · OF-FICTIF-2407");
    expect(productionOg).toContain(
      '["ATTENDRE", "EXISTANT", "STANDARD", "NO-CODE", "SUR-MESURE"]',
    );
    expect(productionOg).toContain("92 acceptées · 5 rebuts · 3 en reprise");
    expect(productionOg).not.toMatch(
      /\bindex\b|label\s*(?:===|!==)|label\.(?:includes|startsWith|endsWith)/,
    );
  });

  it("keeps the Search and Performance Max choice conditional and testable", () => {
    const adsGuide = getGuide("google-search-ads-ou-performance-max");
    const source = guideSources.find(
      ({ guide }) => guide.slug === adsGuide.slug,
    )?.source;
    const normalizedSource = source?.replace(/\s+/g, " ");
    const searchJourney = source?.match(
      /const searchJourney = \[([\s\S]*?)\n\];/,
    )?.[1];
    const pmaxJourney = source?.match(
      /const pmaxJourney = \[([\s\S]*?)\n\];/,
    )?.[1];
    const conditions = source?.match(
      /const conditions = \[([\s\S]*?)\n\];/,
    )?.[1];
    const protocol = source?.match(
      /const testProtocol = \[([\s\S]*?)\n\];/,
    )?.[1];
    const questions = source?.match(
      /const decisionQuestions = \[([\s\S]*?)\n\];/,
    )?.[1];
    const outcomes = source?.match(/const outcomes = \[([\s\S]*?)\n\];/)?.[1];

    expect(adsGuide.heroTitle).toContain("quelle campagne choisir");
    expect(normalizedSource).toContain(
      "Je veux faire de la publicité sur Google, mais dois-je choisir les annonces dans les résultats de recherche ou Performance Max",
    );
    expect(normalizedSource).toContain(
      "Search est souvent le départ le plus lisible",
    );
    expect(normalizedSource).toContain(
      "Si votre mesure confond un clic, un formulaire inutile et une vraie demande, ne lancez rien",
    );

    expect(searchJourney?.match(/\blabel:/g)).toHaveLength(5);
    expect(pmaxJourney?.match(/\blabel:/g)).toHaveLength(5);
    expect(searchJourney).toContain("logiciel planning atelier");
    expect(searchJourney).toContain("AI Max est désactivé");
    expect(conditions?.match(/\btitle:/g)).toHaveLength(4);
    expect(conditions).toContain("volume de demandes ou leur valeur");
    expect(protocol?.match(/\btitle:/g)).toHaveLength(7);
    expect(protocol).toContain(
      "actions principales, mode de comptage, valeurs, attribution",
    );
    expect(protocol).toContain("impact, migration ou optimisation");
    expect(questions?.match(/\bquestion:/g)).toHaveLength(7);
    expect(outcomes?.match(/\btitle:/g)).toHaveLength(4);
    [
      "Commencez probablement par Search",
      "Testez Performance Max avec des garde-fous",
      "Combinez progressivement",
      "Ne lancez pas encore",
    ].forEach((decision) => expect(outcomes).toContain(`title: "${decision}"`));

    expect(normalizedSource).toContain(
      "Aucun seuil universel n’est établi par les sources officielles utilisées ici",
    );
    expect(normalizedSource).toContain(
      "un mot clé Search en correspondance exacte, identique au terme recherché",
    );
    expect(source).toContain("answer/15910187?hl=fr");
    expect(source).toContain("answer/15913066?hl=fr");
    expect(source).toContain("rapport sur les termes de recherche PMax");
    expect(source).toContain("rapport de performances par canal");
    expect(source).toContain("exclusions de marques");
    expect(source).toContain("mots clés à exclure");
    expect(normalizedSource).toContain(
      "Dans Performance Max, ils ne s’appliquent qu’aux inventaires Search et Shopping",
    );
    expect(normalizedSource).toContain(
      "Ils ne contrôlent donc pas, à eux seuls, les emplacements Display ou Video",
    );
    expect(source).toContain("answer/13607727?hl=fr");
    expect(source).toContain("answer/12997711?hl=fr");
    expect(source).toContain("answer/13827420?hl=fr");
    expect(source).toContain("Dans l’exemple fictif de ce guide");
    expect(source).toContain("Dans un second exemple entièrement fictif");
    expect(source).not.toContain("L’exemple P1");

    expect(source).toContain("showSidebarCta={false}");
    expect(source).toContain("showPhone={false}");
    expect(source?.match(/<GuideInlineCTA\b/g)).toHaveLength(1);
    expect(source).not.toMatch(
      /href="tel:|FAQPage|HowTo|Offer|wordCount|prochain jour ouvré|fil rouge/i,
    );

    const adsOg = readFileSync(
      join(
        process.cwd(),
        "src/app/guides/google-search-ads-ou-performance-max/opengraph-image.tsx",
      ),
      "utf8",
    );
    expect(adsOg).toContain(
      'const searchSteps = ["RECHERCHE", "ANNONCE", "PAGE", "DEMANDE"]',
    );
    expect(adsOg).toContain(
      'const pmaxInputs = ["OBJECTIF", "CONVERSIONS", "CONTENUS", "RAPPORTS"]',
    );
    expect(adsOg).toContain(
      '["SEARCH", "TESTER PMAX", "COMBINER", "REPORTER"]',
    );
    expect(adsOg).not.toMatch(
      /label\s*(?:===|!==)|label\.(?:includes|startsWith|endsWith)/,
    );
  });

  it("keeps the local SEO guide tied to an eligible business and a real contact", () => {
    const localGuide = getGuide("seo-local-pme");
    const source = guideSources.find(
      ({ guide }) => guide.slug === localGuide.slug,
    )?.source;
    const normalizedSource = source?.replace(/\s+/g, " ");
    const rankingFactors = source?.match(
      /const rankingFactors = \[([\s\S]*?)\n\];/,
    )?.[1];
    const measurementStages = source?.match(
      /const measurementStages = \[([\s\S]*?)\n\];/,
    )?.[1];

    expect(localGuide.heroTitle).toContain("SEO local de votre PME");
    expect(normalizedSource).toContain(
      "Une personne cherche votre métier près de chez elle, voit plusieurs concurrents dans Google Maps",
    );
    expect(normalizedSource).toContain(
      "fiche d’établissement Google — appelée simplement « fiche Google »",
    );

    expect(source).toContain("answer/13763036?hl=fr");
    expect(normalizedSource).toContain("rencontrer ses clients en personne");
    expect(normalizedSource).toContain("activité uniquement en ligne");
    expect(normalizedSource).toContain("génération de prospects");
    expect(normalizedSource).toContain("celle-ci doit être masquée");
    expect(normalizedSource).toContain(
      "une seule fiche pour l’ensemble de la zone",
    );
    expect(normalizedSource).toContain("jusqu’à 20 zones");
    expect(normalizedSource).toContain("environ deux heures de trajet");

    expect(rankingFactors?.match(/\btitle:/g)).toHaveLength(3);
    ["Pertinence", "Distance", "Notoriété"].forEach((factor) =>
      expect(rankingFactors).toContain(factor),
    );
    expect(rankingFactors).toContain("catégorie principale");
    expect(rankingFactors).toContain("liens et mentions légitimes");

    expect(measurementStages?.match(/\bstage:/g)).toHaveLength(5);
    expect(measurementStages).toContain("Interaction dans Google");
    expect(measurementStages).toContain("Contact réellement reçu");
    expect(normalizedSource).toContain(
      "« appels » désigne le nombre de clics sur le bouton d’appel",
    );
    expect(normalizedSource).toContain("résultats naturels et de Google Ads");

    expect(source).toContain("Aubeline Dépannage");
    [
      "Recherche testée",
      "Information fausse",
      "Page ouverte",
      "Contact contrôlé",
      "Correction prioritaire",
      "Données à relever ensuite",
    ].forEach((field) => expect(source).toContain(field));
    expect(normalizedSource).toContain("sans inventer un gain de classement");

    expect(source).toContain("showSidebarCta={false}");
    expect(source).toContain('ctaLabel="Présenter ma situation locale"');
    expect(source).toContain("showPhone={false}");
    expect(source?.match(/<GuideInlineCTA\b/g)).toHaveLength(1);
    expect(source).not.toMatch(/href="tel:|FAQPage|HowTo|Offer|wordCount/);

    const localOg = readFileSync(
      join(process.cwd(), "src/app/guides/seo-local-pme/opengraph-image.tsx"),
      "utf8",
    );
    expect(localOg).toContain('{ label: "RECHERCHE", detail: "métier + zone"');
    expect(localOg).toContain('{ label: "CONTACT", detail: "demande traitée"');
    expect(localOg).toContain("Aucune place garantie");
    expect(localOg).not.toMatch(
      /label\s*(?:===|!==)|label\.(?:includes|startsWith|endsWith)/,
    );
  });

  it("separates the TMA service from the way maintenance is billed", () => {
    const tmaGuide = getGuide("tma-ou-regie");
    const source = guideSources.find(
      ({ guide }) => guide.slug === tmaGuide.slug,
    )?.source;
    const normalizedSource = source?.replace(/\s+/g, " ");
    const alternatives = source?.match(
      /const alternatives = \[([\s\S]*?)\n\];/,
    )?.[1];
    const tcoComparisonRows = source?.match(
      /const tcoComparisonRows = \[([\s\S]*?)\n\];/,
    )?.[1];
    const requestFields = source?.match(
      /const requestFields = \[([\s\S]*?)\n\];/,
    )?.[1];
    const sampleRequests = source?.match(
      /const sampleRequests = \[([\s\S]*?)\n\];/,
    )?.[1];
    const sharedControls = source?.match(
      /const sharedControls = \[([\s\S]*?)\n\];/,
    )?.[1];

    expect(tmaGuide.heroTitle).toContain("TMA ou régie");
    expect(normalizedSource).toContain(
      "Vous comparez un forfait mensuel avec une offre facturée au jour",
    );
    expect(normalizedSource).toContain(
      "Une TMA peut être payée au forfait, au temps, par lot ou avec plusieurs règles",
    );
    expect(normalizedSource).toContain("La fréquence ne suffit pas");
    expect(normalizedSource).toContain(
      "Un incident rare qui bloque les ventes peut justifier",
    );

    expect(source).not.toContain("const modes =");
    expect(alternatives?.match(/\btitle:/g)).toHaveLength(3);
    [
      "Intervenir seulement au besoin",
      "Garder ou recruter la compétence en interne",
      "Remplacer ou retirer l’application",
    ].forEach((title) => expect(alternatives).toContain(`title: "${title}"`));
    expect(tcoComparisonRows?.match(/^\s*\[\s*$/gm)).toHaveLength(7);
    expect(normalizedSource).toContain(
      "Ils ne valent pas zéro : ajoutez-les ou marquez-les « à confirmer » avant d’utiliser le classement pour signer",
    );
    expect(requestFields?.match(/\bfield:/g)).toHaveLength(8);
    expect(requestFields).toContain('field: "Impact et continuité"');
    expect(requestFields).toContain(
      "combien de temps l’interruption peut-elle durer",
    );

    expect(sampleRequests).toContain(
      "Diagnostic limité — prix fixe ou temps utilisé jusqu’à un plafond convenu",
    );
    expect(sampleRequests).toContain(
      "les faits confirmés, les causes écartées, les inconnues restantes",
    );
    expect(sampleRequests).toContain('"Report"');
    expect(sharedControls?.match(/\btitle:/g)).toHaveLength(6);
    expect(sharedControls).toContain("Une fin observable");

    expect(normalizedSource).toContain(
      "Retirez systématiquement les noms, identifiants, secrets, données personnelles et informations de sécurité qui ne sont pas nécessaires",
    );
    expect(source).toContain("showSidebarCta={false}");
    expect(source).toContain('ctaLabel="Faire comparer mes offres"');
    expect(source).toContain("showPhone={false}");
    expect(source?.match(/<GuideInlineCTA\b/g)).toHaveLength(1);
    expect(source).not.toMatch(/href="tel:|FAQPage|HowTo|Offer|wordCount/);
  });

  it("builds site pages from prospect questions instead of page-count rules", () => {
    const siteGuide = getGuide("site-one-page-ou-multipage");
    const source = guideSources.find(
      ({ guide }) => guide.slug === siteGuide.slug,
    )?.source;
    const normalizedSource = source?.replace(/\s+/g, " ");
    const architectureFields = source?.match(
      /const architectureFields = \[([\s\S]*?)\n\];/,
    )?.[1];
    const decisionChecks = source?.match(
      /const decisionChecks = \[([\s\S]*?)\n\];/,
    )?.[1];
    const multipageExample = source?.match(
      /const multipageExample = \[([\s\S]*?)\n\];/,
    )?.[1];
    const prospectTasks = source?.match(
      /const prospectTasks = \[([\s\S]*?)\n\];/,
    )?.[1];

    expect(siteGuide.heroTitle).toContain("one-page ou multipage");
    expect(normalizedSource).toContain(
      "Gardez une page lorsque vous parlez à la même personne, répondez à la même question et proposez la même action",
    );
    expect(normalizedSource).toContain("Créez une adresse distincte — une");
    expect(normalizedSource).toContain(
      "lorsqu’une offre s’adresse à un autre public",
    );
    expect(normalizedSource).toContain(
      "Ce guide suppose que vous avez déjà choisi un site vitrine durable",
    );

    expect(architectureFields?.match(/\bfield:/g)).toHaveLength(8);
    [
      "Offre",
      "Public",
      "Question",
      "Preuve",
      "Action",
      "Personne responsable",
      "Mise à jour",
      "Décision",
    ].forEach((field) =>
      expect(architectureFields).toContain(`field: "${field}"`),
    );
    expect(decisionChecks?.match(/\btitle:/g)).toHaveLength(4);
    expect(multipageExample?.match(/^\s*\[/gm)).toHaveLength(3);
    expect(multipageExample).toContain("adresse candidate fictive");
    expect(prospectTasks?.match(/\btask:/g)).toHaveLength(3);

    expect(source).toContain("seo-starter-guide?hl=fr");
    expect(source).toContain("links-crawlable?hl=fr");
    expect(source).toContain("essentials/technical?hl=fr");
    expect(source).toContain("WAI/WCAG22/Understanding/headings-and-labels");
    expect(normalizedSource).toContain(
      "Il ne prescrit aucun nombre idéal de pages",
    );
    expect(normalizedSource).toContain(
      "Une page créée uniquement pour « mettre un mot-clé » n’a pas encore de raison suffisante d’exister",
    );

    expect(source).toContain("showSidebarCta={false}");
    expect(source).toContain('ctaLabel="Préparer ma demande de relecture"');
    expect(source).toContain("brief guidé d’environ trois minutes");
    expect(source).toContain(
      "premier retour personnalisé pendant le jour ouvré suivant, sans délai garanti",
    );
    expect(source).toContain("gratuits et sans engagement");
    expect(source).toContain(
      "n’est pas une validation automatique et complète de l’architecture",
    );
    expect(source).toContain("showPhone={false}");
    expect(source?.match(/<GuideInlineCTA\b/g)).toHaveLength(1);
    expect(source).not.toMatch(/href="tel:|FAQPage|HowTo|Offer|wordCount/);
  });

  it("keeps the B2B portal guide useful before it becomes commercial", () => {
    const source = guideSources.find(
      ({ guide }) => guide.slug === "portail-client-b2b-sur-mesure",
    )?.source;
    const scenarioBlock = source?.match(
      /const scenarioSteps = \[([\s\S]*?)\n\];/,
    )?.[1];

    expect(source).toMatch(
      /Un client appelle[\s\S]*Où en est ma demande[\s\S]*Six conclusions honnêtes sont possibles/i,
    );
    expect(source).toContain("Exemple illustratif entièrement fictif");
    expect(source).toContain("PB2B-2407");
    expect(source).toContain("DEP-FICTIF-1");
    expect(source).toContain("attestation-v1.pdf");
    expect(source).toContain("attestation-v2.pdf");
    expect(scenarioBlock?.match(/number: "0[1-9]"|number: "10"/g)).toHaveLength(
      10,
    );
    expect(source).toContain(
      "personne authentifiée\\n+ entreprise rattachée côté serveur\\n+ rôle actif\\n+ objet explicitement accessible\\n+ action explicitement permise",
    );
    expect(source).toContain("File Upload Cheat Sheet");
    expect(source).toContain("Revérifier le droit de déposer");
    expect(source).toContain("Au téléchargement");
    expect(source).toContain("signature binaire du format");
    expect(source).toContain("reste en quarantaine");
    expect(source).toContain("Analyse de fichier indisponible");
    expect(source).toContain("Bonne entreprise, mauvais rôle");
    expect(source).toContain("Bon objet, mauvaise action");
    expect(source).toContain(
      "Six conclusions possibles pour la première action client",
    );
    expect(source).toContain("Méthode commune");
    expect(source).toContain("0 € = absence de coût vérifiée.");
    expect(source).toContain("M = actions éligibles commencées");
    expect(source).toContain(
      "Succès autonomes + achèvements assistés + abandons\\n= M",
    );
    expect(source).toContain("au moins une fois par an");
    expect(source).toContain("responsable du traitement");
    expect(source?.replace(/\s+/g, " ")).toContain(
      "Une personne de l’équipe relira votre demande",
    );
    expect(source).toContain("showSidebarCta={false}");
    expect(source).not.toContain("<GuideInlineCTA");
    expect(source?.match(/href="\/demarrer-un-projet"/g)).toHaveLength(1);
    expect(source).not.toMatch(/href="tel:|FAQPage|HowTo|wordCount/);
    expect(b2bPortalOgSource).toContain("SCÉNARIO FICTIF");
    expect(b2bPortalOgSource).toContain(
      "Une action réelle. Six réponses honnêtes.",
    );
    expect(b2bPortalOgSource).toContain(
      "Faut-il ouvrir un portail client B2B ?",
    );
    expect(getGuide("portail-client-b2b-sur-mesure").cardDescription).toContain(
      "la correction interne, un lien, un module, un produit standard ou le sur-mesure",
    );

    const decisionsBlockStart = b2bPortalOgSource.indexOf(
      "decisions.map((decision) => (",
    );
    const decisionsBlockEnd = b2bPortalOgSource.indexOf(
      "        ))}",
      decisionsBlockStart,
    );
    const decisionsVisualBlock = b2bPortalOgSource.slice(
      decisionsBlockStart,
      decisionsBlockEnd,
    );
    expect(decisionsBlockStart).toBeGreaterThan(0);
    expect(decisionsBlockEnd).toBeGreaterThan(decisionsBlockStart);
    expect(decisionsVisualBlock).toContain(
      'border: "1px solid rgba(255,255,255,0.14)"',
    );
    expect(decisionsVisualBlock).toContain(
      'background: "rgba(255,255,255,0.05)"',
    );
    expect(decisionsVisualBlock).not.toMatch(/\bindex\b|decision\s*[!=]==?|\?/);
  });

  it("keeps the landing-page choice hierarchical and useful to a manager", () => {
    const landingChoiceSource = guideSources.find(
      ({ guide }) => guide.slug === "landing-page-ou-site-vitrine",
    )?.source;

    expect(landingChoiceSource).toMatch(
      /Vous lancez une offre[\s\S]*une page dédiée peut suffire[\s\S]*faire partie de votre site[\s\S]*conserver ou corriger une page déjà publiée/i,
    );
    expect(landingChoiceSource).toContain(
      "Conserver ou améliorer une page existante",
    );
    expect(landingChoiceSource).toContain("Créer une page dédiée");
    expect(landingChoiceSource).toContain(
      "Développer ou réorganiser un site vitrine",
    );
    expect(landingChoiceSource).toContain("DURÉE — UNE SEULE CASE :");
    expect(landingChoiceSource).toContain("EMPLACEMENT — UNE SEULE CASE :");
    expect(landingChoiceSource).toContain("CONDITION D’ARRÊT :");
    expect(landingChoiceSource).toMatch(
      /Un contenu temporaire peut rester dans le site\s+principal[\s\S]*Un\s+mini-site peut[\s\S]*être durable/i,
    );
    expect(landingChoiceSource).toContain("Exemples entièrement fictifs");
    expect(landingChoiceSource).toContain(
      "Conserver l’adresse et améliorer seulement la page existante",
    );
    expect(landingChoiceSource).toContain(
      "Créer une page dédiée dans le site existant",
    );
    expect(landingChoiceSource).toContain(
      "Développer ou réorganiser le site avec plusieurs pages dédiées",
    );
    expect(landingChoiceSource).toContain("showSidebarCta={false}");
    expect(landingChoiceSource).toContain(
      'title="Faire relire mon choix de pages"',
    );
    expect(landingChoiceSource?.match(/<GuideInlineCTA/g)).toHaveLength(1);
    expect(landingChoiceSource).not.toMatch(
      /convertit forcément mieux|meilleur pour le SEO|classement garanti|taux de conversion garanti par/i,
    );
    expect(landingChoiceSource).not.toContain("Elle ne paie pas deux fois");
    expect(landingChoiceSource).not.toContain(
      "[ ] page temporaire, avec date de fin",
    );
    expect(landingChoiceSource).toMatch(
      /contrainte impose la séparation[\s\S]*identité et(?: son| le)?\s*public[\s\S]*responsable et(?: sa| une)?\s*durée de vie/i,
    );

    const landingOgSource = readFileSync(
      join(
        process.cwd(),
        "src/app/guides/landing-page-ou-site-vitrine/opengraph-image.tsx",
      ),
      "utf8",
    );
    expect(landingOgSource).not.toMatch(/index\s*===\s*[012]/);
    expect(getGuide("landing-page-ou-site-vitrine").readTimeMin).toBe(18);
  });

  it("keeps SaaS prioritization focused on the next version and five honest outcomes", () => {
    const prioritizationGuide = getGuide("prioriser-fonctionnalites-mvp-saas");
    const source = guideSources.find(
      ({ guide }) => guide.slug === prioritizationGuide.slug,
    )?.source;

    expect(prioritizationGuide.title).toContain("après le MVP");
    expect(prioritizationGuide.heroTitle).toContain("prochaine version");
    expect(source).toContain("Si vous");
    expect(source).toContain(
      "ce qui doit absolument fonctionner pour servir un premier client",
    );
    expect(source).toContain("La méthode présentée ici commence après");

    const disclosureIndex =
      source?.indexOf("<strong>Exemple illustratif fictif :</strong>") ?? -1;
    const requestsIndex = source?.indexOf("fictiveRequests.map") ?? -1;
    expect(disclosureIndex).toBeGreaterThan(0);
    expect(requestsIndex).toBeGreaterThan(disclosureIndex);

    [
      "Corriger",
      "Réutiliser ou acheter",
      "Construire",
      "Tester",
      "Reporter",
    ].forEach((outcome) => expect(source).toContain(`label: "${outcome}"`));
    expect(source).toContain(
      "Éprouver le connecteur sur un flux isolé ; acheter et connecter s’il passe les tests avant d’envisager un développement propre.",
    );
    expect(source).toContain("Une demande remplie sur les huit lignes");
    expect(source).toContain("8. Décision et retour");
    expect(source).toContain(
      "Correction préalable : empêcher la double facture",
    );

    expect(source).toMatch(/80&nbsp;%\s+devient 0,8/);
    expect(source).toContain("une période commune");
    expect(source).toMatch(/une\s+même unité/);

    expect(source?.match(/<GuideInlineCTA\b/g)).toHaveLength(1);
    const ctaIndex = source?.indexOf("<GuideInlineCTA") ?? -1;
    const headingCount = source?.match(/<h2\b/g)?.length ?? 0;
    const headingsBeforeCta =
      source?.slice(0, ctaIndex).match(/<h2\b/g)?.length ?? 0;
    expect(ctaIndex).toBeGreaterThan(0);
    expect(headingsBeforeCta).toBeGreaterThanOrEqual(
      Math.ceil(headingCount / 2),
    );
  });

  it("keeps the back-office guide grounded in one dossier and five honest choices", () => {
    const backOfficeGuide = getGuide("back-office-sur-mesure-pme");
    const source = guideSources.find(
      ({ guide }) => guide.slug === backOfficeGuide.slug,
    )?.source;

    expect(backOfficeGuide.title).toContain("Back-office sur mesure pour PME");
    expect(backOfficeGuide.heroTitle).toContain("Votre PME");
    expect(source).toMatch(
      /Votre commercial affirme que la commande est validée[\s\S]*l’administration cherche encore une pièce[\s\S]*la comptabilité attend[\s\S]*la bonne version/i,
    );

    const disclosureIndex =
      source?.indexOf("<strong>Exemple illustratif fictif :</strong>") ?? -1;
    const journeyIndex = source?.indexOf("journeySteps.map") ?? -1;
    expect(disclosureIndex).toBeGreaterThan(0);
    expect(journeyIndex).toBeGreaterThan(disclosureIndex);

    [
      "ACTION À RÉALISER",
      "INFORMATION NÉCESSAIRE",
      "ÉTAT AVANT → ÉTAT APRÈS",
      "PROCHAINE ACTION ET RESPONSABLE",
      "SI UNE INFORMATION MANQUE",
      "SI L’ACTION ÉCHOUE OU DOIT ÊTRE ANNULÉE",
    ].forEach((field) => expect(source).toContain(field));

    [
      "Simplifier ou configurer l’existant",
      "Adopter un logiciel ou un module standard",
      "Assembler un outil avec des blocs visuels (no-code)",
      "Développer un back-office sur mesure",
      "Attendre, tout en corrigeant le travail",
    ].forEach((choice) => expect(source).toContain(`title: "${choice}"`));
    [
      "Couverture à démontrer",
      "Effort et coût à comparer",
      "Droits, sauvegarde et retour arrière",
      "Responsable, sortie et condition d’arrêt",
    ].forEach((criterion) => expect(source).toContain(criterion));
    expect(source).toMatch(
      /Comptez conception, développement, hébergement, sécurité, documentation, support et maintenance/,
    );
    expect(source).toMatch(
      /droits sur le code et les données[\s\S]*dépôt[\s\S]*reprise par un tiers/,
    );

    expect(source).toContain("Privilégiez les comptes nominatifs");
    expect(source).toMatch(
      /Un compte partagé doit rester[\s\S]*une exception validée, tracée et réexaminée/,
    );
    expect(source).toMatch(
      /aucun outil ne[\s\S]*garantit à lui seul qu’un responsable sera toujours nommé/,
    );
    expect(source).toContain(
      "Mesurer un dossier ne justifie pas de surveiller les salariés",
    );
    expect(source).toContain(
      "une surveillance permanente est en général excessive",
    );
    expect(source).toMatch(/comité social et[\s\S]*économique \(CSE\)/);
    expect(source).toMatch(
      /outil de gestion de la relation client, souvent appelé[\s\S]*CRM/,
    );
    expect(source).toMatch(
      /logiciel de gestion[\s\S]*intégré, souvent appelé ERP/,
    );
    expect(source).toContain("repère général de six mois à un an");
    expect(source).toMatch(
      /contenus\s+d’experts hébergés par un portail public[\s\S]*prestataires du domaine/,
    );
    expect(source).toContain(
      "Taux de reprise (%) = dossiers distincts de cette cohorte rouverts au moins une fois pendant la durée de suivi ÷ dossiers distincts clos de la cohorte × 100",
    );
    expect(source).toContain("affichez « non calculable », pas 0 %");
    expect(source).toContain("Ajoutez la médiane ou la répartition");
    expect(source).toContain(
      "Le clic ouvre un formulaire guidé d’environ trois minutes",
    );
    expect(source).toContain(
      "L’équipe relit ensuite la demande et répond personnellement ; aucun délai n’est garanti",
    );
    expect(source).not.toMatch(
      /livré en 30 jours|aucun dossier ne sera oublié/i,
    );

    expect(source?.match(/<GuideInlineCTA\b/g)).toHaveLength(1);
    const ctaIndex = source?.indexOf("<GuideInlineCTA") ?? -1;
    const headingCount = source?.match(/<h2\b/g)?.length ?? 0;
    const headingsBeforeCta =
      source?.slice(0, ctaIndex).match(/<h2\b/g)?.length ?? 0;
    expect(ctaIndex).toBeGreaterThan(0);
    expect(headingsBeforeCta).toBeGreaterThanOrEqual(
      Math.ceil(headingCount / 2),
    );
  });

  it("keeps the intervention-slip guide tied to one document and its real failure cases", () => {
    const interventionSlipGuide = getGuide("digitaliser-bons-intervention");
    const source = guideSources.find(
      ({ guide }) => guide.slug === interventionSlipGuide.slug,
    )?.source;

    expect(interventionSlipGuide.heroTitle).toContain(
      "vos bons d’intervention",
    );
    expect(source).toMatch(
      /Vos techniciens ont fini le travail[\s\S]*l’administration ne peut[\s\S]*décider si le dossier est facturable/i,
    );
    expect(source).toMatch(
      /Ici, nous suivons un seul document jusqu’à son\s+destinataire/,
    );

    const disclosureIndex =
      source?.indexOf(
        "<strong>Exemple illustratif entièrement fictif :</strong>",
      ) ?? -1;
    const journeyIndex = source?.indexOf("documentJourney.map") ?? -1;
    expect(disclosureIndex).toBeGreaterThan(0);
    expect(journeyIndex).toBeGreaterThan(disclosureIndex);

    [
      'state: "Préparé"',
      'state: "Réalisé"',
      'state: "Avec réserve"',
      'state: "En attente d’envoi"',
      'state: "Reçu une fois"',
      'state: "Contrôlé"',
      'state: "Corrigé — version 2"',
      'state: "À compléter"',
      'state: "Version 2 envoyée — à compléter"',
    ].forEach((state) => expect(source).toContain(state));
    expect(source).toContain("BI-042");
    expect(source).toContain("référence fictive F-27");
    expect(source).toContain("F-27 en F-72");
    expect(source).toContain("À 16 h 40");
    expect(source).toContain("responsable maintenance");
    expect(source).toMatch(
      /réserve[\s\S]*refus[\s\S]*absence[\s\S]*sans fabriquer d’accord/i,
    );

    [
      "Garder le papier ou le PDF, mais corriger le parcours",
      "Utiliser un formulaire assemblé sans développement classique",
      "Choisir un logiciel terrain standard",
      "Développer un parcours spécifique",
    ].forEach((choice) => expect(source).toContain(`title: "${choice}"`));

    expect(source).toMatch(
      /ne prouve pas à elle seule\s+l’identité[\s\S]*ne garantit pas à elle seule la portée\s+juridique/i,
    );
    expect(source).toMatch(
      /ne peut pas être écartée au seul motif\s+qu’elle est électronique/,
    );
    expect(source).toContain(
      "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A02014R0910-20241018",
    );

    [
      "Ouvrez une première fois BI-042 en ligne",
      "coupez réellement le réseau",
      "ajoutez une pièce fictive",
      "interrompez de nouveau la connexion",
      "modifiez le même champ",
      "répétez l’action d’envoi",
      "l’accusé du serveur",
      "avant d’effacer la copie locale",
    ].forEach((step) => expect(source?.replace(/\s+/g, " ")).toContain(step));
    expect(source).toMatch(/aucun doublon/i);
    expect(source).toContain("Téléphone perdu");
    [
      "Réserve",
      "Refus ou absence",
      "Coupure réseau",
      "Action répétée",
      "Envoi interrompu",
      "Conflit de correction",
      "Téléphone perdu",
      "Mauvais destinataire",
    ].forEach((failure) => expect(source).toContain(`title: "${failure}"`));

    expect(source).toMatch(/÷\s*N\s*×\s*100/);
    expect(source).toContain("N = 0");
    expect(source).toContain("H_résolus = 0");
    expect(source).toMatch(
      /synchronisé\s+automatiquement[\s\S]*résolu après une action manuelle[\s\S]*H_résolus[\s\S]*H_total/,
    );
    expect(source).toContain("bons complets + bons incomplets = N");
    expect(source?.replace(/\s+/g, " ")).toContain(
      "bons annulés ou créés uniquement pour un test restent hors de ce dénominateur",
    );
    expect(source).toContain("dix bons ne décrit pas votre entreprise entière");
    [
      "Bon BI-042 complet",
      "Droits d’accès",
      "Versions et corrections",
      "Réserve, refus et absence",
      "Hors-ligne",
      "Destinataire",
      "Sécurité",
      "Récupération et export",
      "Temps interne et coût total",
      "Condition de sortie",
    ].forEach((criterion) => expect(source).toContain(criterion));
    expect(source).toMatch(
      /L’historique du bon et les journaux techniques ne jouent pas le même\s+rôle/,
    );
    expect(source).toContain("identifiant stable");
    expect(source).toContain("elle ne fournit pas la base");
    expect(source).toContain("l’article L2312-38 du Code du travail");
    expect(source).toContain("l’article L1222-4 du Code du travail");
    expect(source).toContain("CNIL en détaille le contenu");
    expect(source).toContain(
      "https://www.cnil.fr/fr/securite-tracer-les-operations",
    );
    expect(source).toContain(
      "https://www.cnil.fr/fr/controle-de-lactivite-des-personnes-employees",
    );
    expect(source).toContain(
      "Ne détournez pas en secret un journal prévu pour la sécurité",
    );
    expect(source).toContain("Le clic ouvre le formulaire guidé");
    expect(source).toContain("aucun avis juridique");
    expect(source).toContain("aucun délai de réalisation");
    expect(source).toContain("showPhone={false}");

    const ogSource = readFileSync(
      join(
        process.cwd(),
        "src/app/guides/digitaliser-bons-intervention/opengraph-image.tsx",
      ),
      "utf8",
    );
    expect(ogSource).toContain("SCÉNARIO FICTIF");
    expect(ogSource).toMatch(/export const alt[\s\S]*fictif/i);
    expect(source).toContain(
      'alt: "Scénario fictif d’un bon d’intervention du terrain au contrôle administratif"',
    );
    expect(ogSource).toContain("doublon à tester");
    expect(ogSource).not.toContain("aucun doublon");

    expect(source?.match(/<GuideInlineCTA\b/g)).toHaveLength(1);
    const ctaIndex = source?.indexOf("<GuideInlineCTA") ?? -1;
    const headingCount = source?.match(/<h2\b/g)?.length ?? 0;
    const headingsBeforeCta =
      source?.slice(0, ctaIndex).match(/<h2\b/g)?.length ?? 0;
    expect(ctaIndex).toBeGreaterThan(0);
    expect(headingsBeforeCta).toBeGreaterThanOrEqual(
      Math.ceil(headingCount / 2),
    );
  });

  it("keeps the SEO timeline guide tied to observable work and business results", () => {
    const seoTimelineGuide = guideSources.find(
      ({ guide }) => guide.slug === "combien-de-temps-resultats-seo",
    );
    const source = seoTimelineGuide?.source;

    expect(source).toMatch(
      /Vous financez des corrections ou des articles[\s\S]*Il n’existe pas de délai SEO[\s\S]*travail\s+publié[\s\S]*ventes après votre cycle\s+commercial/i,
    );
    [
      "Travail publié",
      "Exploration",
      "Indexation",
      "Impressions",
      "Clics",
      "Contacts qualifiés",
      "Ventes",
    ].forEach((stage) => expect(source).toContain(stage));
    expect(source).toMatch(
      /Elles peuvent[\s\S]*se chevaucher, reculer ou rester impossibles à mesurer[\s\S]*ne[\s\S]*forment pas une promesse/i,
    );
    expect(source).toContain("Vous n’avez pas conservé d’état initial ?");
    expect(source).toContain("plus ancienne période comparable");
    expect(source).toContain("Une ligne à exiger pour chaque changement");
    expect(source).toContain("plusieurs jours, voire plusieurs semaines");
    expect(source).toContain("(8 000 − 5 000) ÷ 5 000 = +60 %");
    expect(source).toContain("(280 − 150) ÷ 150 = +86,7 %");
    expect(source).toContain("150 ÷ 5 000 = 3,0 %");
    expect(source).toContain("(12 − 8) ÷ 8 = +50 %");
    expect(source).toContain("2 − 2 = 0 : aucune hausse observée");
    expect(source).toContain("−1,0476 point");
    expect(source).toContain("−1,05 point après arrondi");
    expect(source).toContain("(8 400 − 6 000) ÷ 6 000 = +40 %");
    expect(source).toMatch(
      /L’écart de 20\s+points[\s\S]*ne prouve pas[\s\S]*Les groupes peuvent viser d’autres recherches/i,
    );
    expect(source).toMatch(
      /90 jours[\s\S]*fenêtre d’observation que[\s\S]*vous choisissez[\s\S]*pas un\s+délai promis par Google/i,
    );
    expect(source).toContain(
      "Date de début et date de fin choisies pour cette fenêtre :",
    );
    expect(source).toMatch(
      /ne décrit ni un client réel ni un cas client Hagnéré Code/i,
    );
    expect(source).toMatch(
      /Une demande a terminé votre cycle commercial par une vente conclue[\s\S]*Un refus connu[\s\S]*ne sont pas des ventes/i,
    );
    [
      "A. La décision économique",
      "B. L’état de départ",
      "C. Les changements réellement publiés",
      "D. Les événements observés",
      "E. La lecture Search Console",
      "F. La lecture commerciale",
      "G. La décision suivante",
    ].forEach((section) => expect(source).toContain(section));
    expect(source).toContain("Poursuivre");
    expect(source).toContain("Corriger");
    expect(source).toContain("Réduire ou reporter");
    expect(source).toContain("Arrêter une action précise");
    expect(source).toContain("Notre intérêt commercial est à connaître");
    expect(source).toContain("showSidebarCta={false}");
    expect(source).toContain(
      'title="Vérifier si mon investissement SEO avance vraiment"',
    );
    expect(source).toContain('ctaHref="/demarrer-un-projet"');
    expect(source?.match(/<GuideInlineCTA/g)).toHaveLength(1);
    expect(source).not.toMatch(
      /délai garanti|classement garanti|résultat significatif|maturité SEO|traction organique/i,
    );
  });

  it("keeps the positions drop guide measurable without inventing a cause", () => {
    const positionsGuide = guideSources.find(
      ({ guide }) => guide.slug === "positions-google-baissent",
    );
    const source = positionsGuide?.source;

    expect(source).toMatch(
      /Vos clics Google baissent[\s\S]*Ne changez rien à grande échelle[\s\S]*exactement les mêmes filtres/i,
    );
    expect(source).toContain("Exemple illustratif entièrement fictif");
    expect(source).toContain("(18 000 − 24 000) ÷ 24 000 = −25 %");
    expect(source).toContain("(288 − 480) ÷ 480 = −40 %");
    expect(source).toContain("−0,4 point, soit −20 % en relatif");
    expect(source).toContain(
      "+2,6 : le nombre augmente, donc la place moyenne est moins bonne",
    );
    expect(source).toContain("96 + 96 = 192 clics");
    expect(source).toContain("120 + 72 = 192 clics");
    expect(source).toContain(
      "La perte totale de 192 clics est la seule valeur identique",
    );
    expect(source).toMatch(
      /filtre marque\/hors marque[\s\S]*mars 2025[\s\S]*peut classer certaines recherches[\s\S]*imparfaitement/i,
    );
    expect(source).toMatch(
      /rapport sur l’IA générative[\s\S]*partie des propriétés[\s\S]*déjà incluses dans le total\s+Web/i,
    );
    expect(source).toMatch(
      /masque les recherches anonymisées[\s\S]*ne présentez pas leur somme comme l’ensemble exact/i,
    );
    expect(source).toMatch(
      /clics sur un résultat Google conduisant vers le site/i,
    );
    expect(source).toMatch(
      /mise à jour principale en[\s\S]*achevée depuis moins d’une semaine[\s\S]*fin du déploiement[\s\S]*une semaine complète/i,
    );
    expect(source).toContain("Date du relevé :");
    expect(source).toContain("inconnu");
    expect(source).toContain("showSidebarCta={false}");
    expect(source).toContain(
      'title="Faire vérifier la baisse avant de toucher au site"',
    );
    expect(source).toContain(
      'ctaLabel="Faire vérifier la baisse avant de toucher au site"',
    );
    expect(source).not.toMatch(
      /pénalité algorithmique|perdu\s+2,6\s+positions|récupération garantie/i,
    );
  });

  it("keeps the SaaS timeline guide tied to a result and complete paths", () => {
    const timelineGuide = guideSources.find(
      ({ guide }) => guide.slug === "combien-de-temps-developper-saas",
    );
    const timelineSource = timelineGuide?.source;

    expect(timelineSource).toMatch(
      /Un\s+prestataire annonce huit semaines[\s\S]*un\s+autre plusieurs mois[\s\S]*Impossible de les comparer/i,
    );
    expect(timelineSource).toContain("exemple illustratif entièrement fictif");
    [
      "A → B → D → H → I = 4 + 5 + 10 + 7 + 2 = 28",
      "A → G → D → H → I = 4 + 3 + 10 + 7 + 2 = 26",
      "A → C → E → H → I = 4 + 3 + 5 + 7 + 2 = 21",
      "A → F → H → I     = 4 + 4 + 7 + 2 = 17",
      "A → B → D → P → I = 4 + 5 + 10 + 4 + 2 = 25",
      "A → G → D → P → I = 4 + 3 + 10 + 4 + 2 = 23",
      "A → B → D → H → I = 6 + 7 + 15 + 10 + 3 = 41",
      "A → G → D → H → I = 6 + 5 + 15 + 10 + 3 = 39",
      "A → C → E → H → I = 6 + 6 + 8 + 10 + 3 = 33",
      "A → F → H → I     = 6 + 7 + 10 + 3 = 26",
      "A → B → D → P → I = 6 + 7 + 15 + 6 + 3 = 37",
      "A → G → D → P → I = 6 + 5 + 15 + 6 + 3 = 35",
      "A → B → D → H → I = 8 + 10 + 22 + 15 + 5 = 60",
      "A → G → D → H → I = 8 + 8 + 22 + 15 + 5 = 58",
      "A → C → E → H → I = 8 + 20 + 18 + 15 + 5 = 66",
      "A → F → H → I     = 8 + 12 + 15 + 5 = 40",
      "A → B → D → P → I = 8 + 10 + 22 + 10 + 5 = 55",
      "A → G → D → P → I = 8 + 8 + 22 + 10 + 5 = 53",
    ].forEach((path) => expect(timelineSource).toContain(path));
    expect(timelineSource).toContain('waitsFor: "B et G"');
    expect(timelineSource).toContain('waitsFor: "D, E et F"');
    expect(timelineSource).toContain('waitsFor: "H et P"');
    expect(timelineSource).toMatch(
      /personnes nommées peuvent réellement[\s\S]*mener en parallèle/i,
    );
    expect(timelineSource).toContain(
      "comparer toutes les suites qui mènent à l’ouverture",
    );
    expect(timelineSource).toMatch(
      /jour ouvré fictif 28[\s\S]*jour ouvré fictif 41[\s\S]*jour ouvré fictif 66/i,
    );
    expect(timelineSource).toContain("showSidebarCta={false}");
    expect(timelineSource).toContain("Présenter mon calendrier");
    expect(timelineSource).not.toMatch(
      /durée moyenne|délai garanti|probabilité de livraison|analyse Monte-Carlo/i,
    );
  });

  it("keeps the ERP-CRM guide focused on the manager's concrete conflict", () => {
    const integrationGuide = guideSources.find(
      ({ guide }) => guide.slug === "connecter-erp-crm-logiciel-metier",
    );
    const integrationSource = integrationGuide?.source;

    expect(integrationSource).toMatch(
      /commercial corrige l’adresse d’un client dans le CRM[\s\S]*comptabilité la corrige\s+aussi dans l’ERP[\s\S]*Quelle\s+adresse partira sur la prochaine facture/i,
    );
    expect(integrationSource).toContain("30 affaires × 3 opérations");
    expect(integrationSource).toContain(
      "85 acceptées + 3 refusées + 2 en attente",
    );
    expect(integrationSource).toContain("90 opérations distinctes");
    expect(integrationSource).toContain(
      "Obtenir la carte du flux à fiabiliser",
    );
    expect(integrationSource).not.toMatch(
      /exactly-once|zéro doublon|temps réel garanti|conforme au RGPD/i,
    );
    expect(
      [
        integrationGuide?.guide.title,
        integrationGuide?.guide.cardTitle,
        integrationGuide?.guide.heroTitle,
      ].join(" "),
    ).not.toMatch(/sans doublon|sans propager les erreurs/i);
  });

  it("keeps the data-entry guide grounded in the manager's actual problem", () => {
    const dataEntrySource = guideSources.find(
      ({ guide }) => guide.slug === "automatiser-saisie-donnees-entreprise",
    )?.source;

    expect(dataEntrySource).toMatch(
      /commercial saisit un client[\s\S]*administration recopie[\s\S]*comptabilité retape/,
    );
    expect(dataEntrySource).toMatch(
      /données\s+personnelles réelles de production/,
    );
    expect(dataEntrySource).toContain("Exemple illustratif fictif");
    expect(dataEntrySource).toContain("Faire relire un trajet de ressaisie");
  });

  it("keeps the SEO versus Ads opening in the reader's language", () => {
    expect(flagshipSource).toMatch(
      /Vous cherchez à savoir s’il vaut mieux investir dans le\s+référencement/,
    );
    expect(flagshipSource).toMatch(
      /Google Ads — payer pour afficher des\s+annonces/,
    );
  });

  it("does not reintroduce the rejected consultant framework", () => {
    const rejectedPhrases = [
      "contrainte qui commande",
      "contrainte dominante",
      "cinq portes",
      "portes non compensables",
      "prochaine preuve",
      "matrice d’arbitrage",
      "report ciblé",
      "comité d’investissement",
      "chaîne jusqu’au résultat métier",
    ];

    for (const phrase of rejectedPhrases) {
      expect(flagshipSource.toLowerCase()).not.toContain(phrase.toLowerCase());
    }
  });

  it("keeps every published guide free of the rejected framework", () => {
    for (const { guide, source } of guideSources) {
      expect(source, guide.slug).not.toMatch(rejectedFramework);
    }
  });

  it("gives every guide a short introduction addressed to the reader", () => {
    const readerLanguage =
      /\b(vous|votre|vos|comparez|choisissez|découvrez|vérifiez|prévoyez|ajoutez|distinguez|séparez)\b/i;

    for (const { guide, source } of guideSources) {
      const heroDescription = source.match(/heroDescription="([^"]+)"/)?.[1];

      expect(heroDescription, `${guide.slug}: heroDescription`).toBeDefined();
      expect(heroDescription, `${guide.slug}: reader language`).toMatch(
        readerLanguage,
      );
      expect(
        heroDescription?.length,
        `${guide.slug}: hero length`,
      ).toBeLessThan(330);
    }
  });

  it("starts every article with a direct, reader-facing lead under 150 words", () => {
    const readerLanguage = /\b(vous|votre|vos)\b/i;

    for (const { guide, source } of guideSources) {
      const lead = source.match(/<p className="lead">([\s\S]*?)<\/p>/)?.[1];

      expect(lead, `${guide.slug}: lead`).toBeDefined();
      expect(lead, `${guide.slug}: reader-facing lead`).toMatch(readerLanguage);
      expect(
        visibleWords(lead || "").length,
        `${guide.slug}: lead length`,
      ).toBeLessThanOrEqual(150);
      expect(lead, `${guide.slug}: consultant jargon in lead`).not.toMatch(
        consultantJargon,
      );
    }
  });

  it("keeps the hero free of untranslated consultant language", () => {
    for (const { guide, source } of guideSources) {
      const heroDescription = source.match(/heroDescription="([^"]+)"/)?.[1];

      expect(heroDescription, `${guide.slug}: heroDescription`).toBeDefined();
      expect(
        heroDescription,
        `${guide.slug}: consultant jargon in hero`,
      ).not.toMatch(consultantJargon);
    }
  });

  it("keeps section titles understandable without agency vocabulary", () => {
    for (const { guide, source } of guideSources) {
      const sectionTitles = Array.from(
        source.matchAll(/<h[23]\b[^>]*>([\s\S]*?)<\/h[23]>/g),
        (match) =>
          match[1]
            .replace(/<[^>]+>/g, " ")
            .replace(/\{[^}]*\}/g, " ")
            .replace(/\s+/g, " ")
            .trim(),
      );

      for (const title of sectionTitles) {
        expect(title, `${guide.slug}: section title`).not.toMatch(
          consultantJargon,
        );
      }
    }
  });

  it("does not copy the same opening or section plan between guides", () => {
    const openings = new Map<string, string>();
    const plans = new Map<string, string>();

    for (const { guide, source } of guideSources) {
      const lead = source
        .match(/<p className="lead">([\s\S]*?)<\/p>/)?.[1]
        .replace(/<[^>]+>/g, " ")
        .replace(/\{[^}]*\}/g, " ")
        .replace(/\s+/g, " ")
        .trim()
        .toLowerCase();
      const headings = Array.from(
        source.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/g),
        (match) =>
          match[1]
            .replace(/<[^>]+>/g, " ")
            .replace(/\{[^}]*\}/g, " ")
            .replace(/^\s*\d+[.)]?\s*/, "")
            .replace(/\s+/g, " ")
            .trim()
            .toLowerCase(),
      ).join(" | ");

      expect(lead, `${guide.slug}: opening`).toBeTruthy();
      expect(headings, `${guide.slug}: section plan`).toBeTruthy();
      expect(
        openings.get(lead || ""),
        `${guide.slug}: copied opening`,
      ).toBeUndefined();
      expect(
        plans.get(headings),
        `${guide.slug}: copied section plan`,
      ).toBeUndefined();

      openings.set(lead || "", guide.slug);
      plans.set(headings, guide.slug);
    }
  });

  it("does not repeat the old mechanical example and contact boilerplate", () => {
    const rejectedBoilerplate =
      /fil rouge|décrivez votre projet en 3 minutes|prochain jour ouvré/i;

    for (const { guide, source } of guideSources) {
      expect(source, guide.slug).not.toMatch(rejectedBoilerplate);
    }
  });

  it("does not impose the same mechanical ending on every guide", () => {
    const rejectedEnding =
      /(?:la réponse|le verdict) en 30 secondes|à retenir\s*:\s*les \d+|décider en cinq (?:étapes|questions)/i;

    for (const { guide, source } of guideSources) {
      expect(source, guide.slug).not.toMatch(rejectedEnding);
    }
  });

  it("keeps editorial pressure proportionate", () => {
    for (const { guide, source } of guideSources) {
      const inlineCtas = source.match(/<GuideInlineCTA\b/g) || [];
      const faqBlock = source.match(
        /const faqItems(?::[^=]+)?\s*=\s*\[([\s\S]*?)\n\];/,
      )?.[1];
      const faqCount = faqBlock?.match(/\bquestion:\s*["']/g)?.length || 0;

      expect(faqBlock, `${guide.slug}: FAQ block`).toBeDefined();
      expect(
        inlineCtas.length,
        `${guide.slug}: inline CTAs`,
      ).toBeLessThanOrEqual(1);
      expect(faqCount, `${guide.slug}: FAQ count`).toBeLessThanOrEqual(10);

      if (inlineCtas.length === 1) {
        const ctaIndex = source.indexOf("<GuideInlineCTA");
        const headingsBeforeCta =
          source.slice(0, ctaIndex).match(/<h2\b/g)?.length || 0;
        const headingCount = source.match(/<h2\b/g)?.length || 0;

        expect(
          headingsBeforeCta,
          `${guide.slug}: CTA before sufficient standalone value`,
        ).toBeGreaterThanOrEqual(Math.ceil(headingCount / 2));
      }
    }
  });

  it("keeps search titles, summaries and public cards concise", () => {
    for (const guide of GUIDES) {
      expect(guide.title.length, `${guide.slug}: title`).toBeLessThanOrEqual(
        60,
      );
      expect(
        guide.metaDescription.length,
        `${guide.slug}: meta description`,
      ).toBeLessThanOrEqual(155);
      expect(
        guide.datePublished,
        `${guide.slug}: publication date format`,
      ).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(guide.dateModified, `${guide.slug}: review date format`).toMatch(
        /^\d{4}-\d{2}-\d{2}$/,
      );
      expect(
        guide.dateModified >= guide.datePublished,
        `${guide.slug}: review date before publication`,
      ).toBe(true);

      const publicCopy = [
        guide.title,
        guide.cardTitle,
        guide.metaDescription,
        guide.cardDescription,
        guide.heroTitle,
      ].join(" ");

      expect(publicCopy, guide.slug).not.toMatch(rejectedFramework);
    }
  });

  it("shows the actual review date on every article", () => {
    for (const { guide, source } of guideSources) {
      expect(source, `${guide.slug}: updated label`).toMatch(
        /updatedLabel=\{[^\n]*dateModified[^\n]*\}/,
      );
      expect(
        source,
        `${guide.slug}: published date used as review date`,
      ).not.toMatch(/updatedLabel=\{[^\n]*datePublished[^\n]*\}/);
    }
  });

  it("limits editorial comparison tables to three columns", () => {
    for (const { guide, source } of guideSources) {
      const headerBlocks = source.matchAll(
        /<GuideTable[\s\S]*?headers=\{\[([\s\S]*?)\]\}/g,
      );

      for (const match of headerBlocks) {
        const headers = match[1].match(/(["'])(?:\\.|(?!\1)[\s\S])*?\1/g) || [];
        expect(
          headers.length,
          `${guide.slug}: table columns`,
        ).toBeLessThanOrEqual(3);
      }
    }
  });

  it("uses mobile-readable comparisons instead of wide guide tables", () => {
    expect(flagshipSource).not.toContain("<GuideTable");
    expect(flagshipSource).toContain("md:grid-cols-2");
  });

  it("makes the SaaS specification guide produce a decision, not a feature list", () => {
    const guide = getGuide("cahier-des-charges-saas");
    const source = guideSources.find(
      ({ guide: candidate }) => candidate.slug === guide.slug,
    )?.source;
    const normalizedSource = source?.replace(/\s+/g, " ");
    const opening = source
      ?.slice(0, source.indexOf("<GuideToc"))
      .replace(/\s+/g, " ");

    expect(guide.heroTitle).toContain("avant de demander un devis");
    expect(opening).toContain(
      "faut-il acheter un outil existant, assembler quelques services, tester le travail manuellement ou financer un SaaS sur mesure",
    );
    expect(opening).toContain(
      "ne consultez pas encore des développeurs. Testez d’abord l’hypothèse qui peut faire tomber le projet",
    );

    [
      "Acheter un logiciel existant",
      "Assembler des outils",
      "Tester le service manuellement",
      "Construire sur mesure",
      "Attendre ou arrêter",
    ].forEach((choice) => expect(source).toContain(`title: "${choice}"`));
    expect(normalizedSource).toContain(
      "Hagnéré Code vend du développement sur mesure : nous avons donc un intérêt économique évident",
    );
    expect(normalizedSource).toContain(
      "8 × 75 + 6 × 45 + 3 × 60 + 4 × 50 = 1 250",
    );
    expect(normalizedSource).toContain(
      "Il rappelle simplement qu’un projet mobilise l’entreprise",
    );
    expect(normalizedSource).not.toContain(
      "Elle rappelle simplement qu’un projet mobilise l’entreprise",
    );
    expect(normalizedSource).toContain("2 700 ÷ 12 100 = 22,3 %");
    expect(normalizedSource).toContain(
      "(probabilité avant − probabilité après) × perte évitable",
    );
    expect(normalizedSource).toContain("coûts renseignés sur 24 mois");
    expect(normalizedSource).toContain("inférieure de 11 500 €");
    expect(normalizedSource).toContain(
      "Le même lot de migration pour les trois devis",
    );
    expect(normalizedSource).toContain(
      "La fondatrice décide la règle commerciale",
    );
    expect(normalizedSource).toContain(
      "Le format <code>.md</code> désigne simplement un document texte",
    );
    expect(normalizedSource).toContain("Word, Google Docs ou Notion");
    expect(normalizedSource).not.toContain("Claire envisage DossierClair");
    expect(normalizedSource).not.toContain(
      "Claire décide la règle commerciale",
    );
    expect(normalizedSource).not.toContain("Claire face à son prestataire");
    expect(normalizedSource).toContain("9 h 20");
    expect(normalizedSource).toContain("513 €");
    expect(source).toContain("<SaasSpecificationKit />");
    expect(source).toContain("showSidebarCta={false}");
    expect(source).toContain("showPhone={false}");
    expect(source?.match(/<GuideInlineCTA\b/g)).toHaveLength(1);
    expect(source).not.toMatch(
      /architecture-multitenant-saas|FAQPage|HowTo|"@type":\s*"Offer"|prix de marché garanti/i,
    );
  });

  it("keeps the public card and metadata free of the rejected vocabulary", () => {
    const guide = getGuide("seo-ou-google-ads");
    const publicCopy = [
      guide.metaDescription,
      guide.cardDescription,
      guide.heroTitle,
    ].join(" ");

    expect(publicCopy).not.toMatch(
      /preuve|matrice|contrainte dominante|report ciblé/i,
    );
  });
});
