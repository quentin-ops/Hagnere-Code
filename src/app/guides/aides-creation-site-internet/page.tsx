import type { Metadata } from "next";
import Link from "next/link";
import { GuideLayout } from "@/components/guides/guide-layout";
import {
  GuideToc,
  InfoBox,
  GuideTable,
  GuideInlineCTA,
} from "@/components/guides/guide-content-blocks";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { OG_BASE, SITE_URL } from "@/lib/seo";
import { getGuide, guidePath, guideUrl, formatGuideDate } from "@/lib/guides";

const guide = getGuide("aides-creation-site-internet");

// --- METADATA SEO (title/description/dates depuis src/lib/guides.ts) ---
export const metadata: Metadata = {
  title: guide.title,
  description: guide.metaDescription,
  authors: [{ name: "Quentin Hagnéré" }],
  creator: "Hagnéré Code",
  publisher: "Hagnéré Code",
  alternates: { canonical: guidePath(guide) },
  openGraph: {
    ...OG_BASE,
    type: "article",
    title: guide.cardTitle,
    description: guide.metaDescription,
    url: guidePath(guide),
    publishedTime: `${guide.datePublished}T09:00:00+02:00`,
    modifiedTime: `${guide.dateModified}T09:00:00+02:00`,
    authors: [`${SITE_URL}/equipe`],
    // og:image générée par opengraph-image.tsx (convention Next.js).
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// --- JSON-LD SCHEMAS (constantes statiques uniquement) ---
const articleJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: guide.cardTitle,
  description: guide.metaDescription,
  url: guideUrl(guide),
  mainEntityOfPage: { "@type": "WebPage", "@id": guideUrl(guide) },
  image: [`${guideUrl(guide)}/opengraph-image`],
  datePublished: guide.datePublished,
  dateModified: guide.dateModified,
  inLanguage: "fr-FR",
  articleSection: guide.section,
  wordCount: 4800,
  isPartOf: {
    "@type": "WebPage",
    "@id": `${SITE_URL}/guides`,
    name: "Guides web Hagnéré Code",
  },
  author: {
    "@type": "Person",
    name: "Quentin Hagnéré",
    jobTitle: "Fondateur de Hagnéré Code",
    url: `${SITE_URL}/equipe`,
    knowsAbout: [
      "Développement web",
      "Financement de projets web",
      "Next.js",
      "React",
      "Aides à la numérisation des TPE-PME",
      "Chiffrage de projets web",
    ],
    sameAs: ["https://www.linkedin.com/in/quentin-hagnere"],
    worksFor: { "@id": `${SITE_URL}/#organization` },
  },
  publisher: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Hagnéré Code",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logos/logo-dark.png`,
    },
  },
});

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
    {
      "@type": "ListItem",
      position: 3,
      name: "Aides à la création de site internet",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Le chèque France Num de 500 € existe-t-il encore ?",
    answer:
      "Non. Le guichet est fermé depuis le 31 juillet 2021 (décret n° 2021-69) : 112 000 TPE aidées pour environ 60 millions d'euros, et le dispositif n'a jamais été reconduit. Aucune aide nationale forfaitaire ne l'a remplacé. Les articles qui le présentent encore comme actif — il y en a beaucoup, y compris en première page de Google — datent ou recyclent de vieilles informations.",
  },
  {
    question: "Quelles aides de l'État pour créer un site internet en 2026 ?",
    answer:
      "Aucune subvention nationale directe. Ce qui existe au niveau national : le Prêt Boost Transformation Numérique de Bpifrance (5 000 à 75 000 €, sans garantie personnelle, entreprises de 2 à 49 salariés et plus de 3 ans), les prêts d'honneur à taux zéro et le microcrédit ADIE, plus un levier fiscal méconnu : la déduction totale des coûts du site dès l'exercice de création (option de l'article 236, I du CGI). Les vraies subventions sont régionales — 30 à 50 % du montant HT quand elles existent.",
  },
  {
    question: "Un auto-entrepreneur peut-il bénéficier d'une aide pour son site internet ?",
    answer:
      "Rarement, et il faut vérifier dispositif par dispositif : plusieurs aides régionales excluent explicitement le régime micro (la Normandie, par exemple). Les leviers réellement accessibles sont indirects : l'ACRE (cotisations réduites la première année, qui libère de la trésorerie), l'ARCE (60 % des droits chômage versés en capital, utilisables pour financer le site) et, en franchise de TVA, gardez en tête que la TVA de 20 % sur la prestation n'est pas récupérable.",
  },
  {
    question: "Peut-on cumuler plusieurs aides pour un même site ?",
    answer:
      "Parfois, dans deux limites. Chaque dispositif fixe ses règles (l'INAC des Hauts-de-France plafonne le cumul d'aides publiques à 80 % des dépenses et interdit le cumul avec les autres aides régionales numériques). Et le droit européen ajoute la règle dite « de minimis », qui dispense les petites aides d'une autorisation de Bruxelles : toutes vos aides publiques s'additionnent dans une même enveloppe de 300 000 € par entreprise sur 3 exercices glissants. Pour un site internet, vous en êtes très loin — mais chaque dossier vous demandera de déclarer sur l'honneur les aides déjà perçues, et depuis le 1er janvier 2026, un registre national permet aux administrations de vérifier votre déclaration : listez tout, y compris les petites aides locales.",
  },
  {
    question: "Mon site vitrine est-il éligible aux aides régionales ?",
    answer:
      "Pas toujours — c'est le piège le plus fréquent. Plusieurs dispositifs excluent explicitement le « site vitrine simple » (INAC Hauts-de-France) ou les sites e-commerce (Pays de la Loire Investissement numérique) : les régions orientent leurs financements vers l'e-commerce, les outils métier ou les projets structurants. Lisez le règlement de l'aide (rubrique « dépenses éligibles ») avant de construire votre dossier — chaque fiche officielle le précise.",
  },
  {
    question: "Quel est le délai pour recevoir une subvention numérique ?",
    answer:
      "Long. Comptez 2 à 6 mois d'instruction entre le dépôt et la décision, puis le versement n'intervient qu'après la fin du projet, sur présentation de factures acquittées — jusqu'à 4 mois supplémentaires en Normandie par exemple. Conclusion pratique : une subvention récompense un projet bien monté, mais ne résout jamais un problème de trésorerie initial. Vous payez d'abord, vous êtes remboursé ensuite.",
  },
  {
    question: "Le CPF peut-il financer la création de mon site ?",
    answer:
      "Non. Le CPF finance des formations certifiantes (créer et gérer son site, marketing digital…) — jamais la prestation de création elle-même, avec un reste à charge de 150 € par formation depuis 2024. Toute offre « site internet offert en échange de votre CPF » est une arnaque signalée par la DGCCRF : ni la Caisse des Dépôts ni France Travail ne démarchent par téléphone à ce sujet.",
  },
  {
    question: "La location de site internet est-elle éligible aux aides ?",
    answer:
      "Non en général — et méfiance : la « location » est le terrain de l'arnaque documentée par la DGCCRF. Le schéma : un démarcheur promet un site « quasi gratuit », fait signer le jour même un contrat de licence cédé à un bailleur financier, engagement irrévocable de 48 mois à environ 150 €/mois — soit ~7 200 € pour un site dont vous ne serez jamais propriétaire. L'enquête DGCCRF de 2022 a donné lieu à des procès-verbaux pénaux. Fuyez toute signature le jour du rendez-vous.",
  },
  {
    question: "Quelles aides en Auvergne-Rhône-Alpes et en Savoie ?",
    answer:
      "Pas de subvention régionale directe pour la création d'un site en 2026 (« Mon Commerce en ligne » était un dispositif Covid, clos depuis 2021). Ce qui existe et vaut le détour : Atouts Numériques, un accompagnement pris en charge à 100 % (Région + FEDER, via CCI et CMA) pour les entreprises de plus de 2 ans et moins de 50 salariés — diagnostic de maturité numérique, jusqu'à 7 h d'accompagnement individuel et de l'aide à la rédaction du cahier des charges. Point d'entrée : votre CCI (CCI Savoie à Chambéry : 04 57 73 73 73) ou le Campus Région du numérique.",
  },
  {
    question: "Une association peut-elle obtenir une subvention pour son site ?",
    answer:
      "Les aides « numérisation des entreprises » décrites dans ce guide visent les entreprises immatriculées ; les associations relèvent d'autres canaux : subventions de fonctionnement ou de projet de leur commune, département ou région (dossier via Le Compte Asso), fondations privées, et dispositifs d'accompagnement numérique associatif. Le réflexe : interroger sa collectivité et sa fédération avant de chercher une aide « entreprise » à laquelle l'association n'est pas éligible.",
  },
  {
    question: "L'aide est-elle versée avant ou après la dépense ?",
    answer:
      "Après, presque toujours. La mécanique standard : dossier déposé AVANT toute signature de devis (la non-rétroactivité est la règle d'or — signer avant l'accord fait perdre l'aide), instruction, accord, réalisation du projet, puis remboursement sur factures acquittées, calculé sur le montant HT (la TVA reste à votre charge, sauf récupération au régime réel). Prévoyez donc la trésorerie totale du projet.",
  },
  {
    question: "Comment vérifier qu'une aide existe encore ?",
    answer:
      "Deux réflexes, 5 minutes : le moteur officiel francenum.gouv.fr/aides-financieres (près de 200 dispositifs, filtrables par code postal et type de projet) et la base les-aides.fr (réseau des CCI), qui publie les règlements complets. Vérifiez la date de mise à jour de la fiche et la mention « dispositif mobilisable » — les aides numériques ouvrent et ferment sans préavis, souvent à épuisement d'enveloppe. En cas de doute, appelez votre CCI.",
  },
];

const faqJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
});

export default function Page() {
  return (
    <GuidesShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: articleJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd.replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd.replace(/</g, "\\u003c") }} />

      <GuideLayout
        breadcrumbs={[
          { label: "Guides", href: "/guides" },
          { label: "Aides à la création de site internet" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="La première page de Google est remplie d'aides mortes depuis 2021. Ce guide fait l'inverse : chaque dispositif vérifié à la source officielle en juillet 2026, les aides disparues signalées avec leur date de clôture, le panorama région par région, le mode d'emploi de dépôt — et les arnaques au « site gratuit » documentées par la DGCCRF."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          { number: "01", title: "Chèque France Num : mort en 2021", description: "", color: "violet" },
          { number: "02", title: "Aides réelles : 30-50 % du HT", description: "", color: "blue" },
          { number: "03", title: "Région par région, vérifié", description: "", color: "emerald" },
          { number: "04", title: `Lecture : ${guide.readTimeMin} min`, description: "", color: "amber" },
        ]}
        relatedLinks={[
          { href: "/guides/combien-coute-un-site-internet", label: "Combien coûte un site internet ?" },
          { href: "/guides/prix-site-vitrine", label: "Prix d'un site vitrine" },
          { href: "/ressources/kit-cahier-des-charges-site-internet", label: "Modèle de cahier des charges" },
          { href: "/services/sites-vitrines", label: "Création de site sur mesure" },
          { href: "/methode", label: "Notre méthode Sprint Fixe™" },
          { href: "/tarifs", label: "Nos tarifs détaillés" },
        ]}
        faqTitle="Aides et subventions : vos questions"
        faqItems={faqItems}
      >
        <p className="lead">
          Disons-le franchement, parce que personne ne le fait :{" "}
          <strong>la plupart des TPE n&apos;obtiendront aucune subvention
          pour un simple site vitrine en 2026</strong>. Mais des aides
          réelles existent — régionales, fiscales, en prêt ou en
          accompagnement — et ce guide les vérifie une par une, à la source
          officielle, en signalant celles qui sont mortes.
        </p>

        <GuideToc
          items={[
            { id: "reponse-rapide", label: "1. La réponse rapide : le paysage réel des aides en 2026" },
            { id: "aides-mortes", label: "2. Ces aides n'existent plus (et on vous les vend encore)" },
            { id: "aides-nationales", label: "3. Les aides nationales encore actives" },
            { id: "fiscalite", label: "4. Le levier que tout le monde oublie : la fiscalité" },
            { id: "createurs", label: "5. Créateurs d'entreprise : ACRE, ARCE, AGEFIPH" },
            { id: "formation", label: "6. Se former (CPF, OPCO) : ce que ça finance vraiment" },
            { id: "regions", label: "7. Les aides région par région (statut vérifié)" },
            { id: "aura", label: "8. Focus Auvergne-Rhône-Alpes et Savoie" },
            { id: "mode-emploi", label: "9. Mode d'emploi : déposer sans se faire recaler" },
            { id: "arnaques", label: "10. Les arnaques au « site gratuit », documentées" },
            { id: "micro", label: "11. Micro-entrepreneurs, associations : la réponse honnête" },
            { id: "sans-aide", label: "12. Éligible à rien ? Les vraies alternatives" },
            { id: "methode", label: "13. Méthode : monter votre dossier en 5 étapes" },
          ]}
        />

        <InfoBox variant="blue" title="Site vitrine, site e-commerce : de quoi parle-t-on ?">
          Deux mots décident souvent de votre éligibilité. Un{" "}
          <strong>site vitrine</strong> présente votre entreprise
          (services, coordonnées, formulaire de contact) : on ne peut
          rien y acheter. Un <strong>site e-commerce</strong> (ou
          site marchand) permet de commander et payer en ligne. La
          distinction n&apos;est pas cosmétique : plusieurs régions
          financent l&apos;e-commerce mais excluent le « site vitrine
          simple » (voir §7). Si vous hésitez, notre{" "}
          <Link href="/guides/combien-coute-un-site-internet" className="underline">
            guide des prix d&apos;un site internet
          </Link>{" "}
          compare les budgets.
        </InfoBox>

        <h2 id="reponse-rapide">1. La réponse rapide : le paysage réel des aides en 2026</h2>
        <p>
          <strong>Il n&apos;existe plus aucune subvention nationale directe
          pour créer un site internet en 2026.</strong> Les aides réelles
          tiennent en quatre familles :
        </p>
        <ul>
          <li>
            <strong>des subventions régionales</strong>, très variables :
            30 à 50 % du montant hors taxes (HT) quand elles existent,
            souvent réservées à l&apos;e-commerce ;
          </li>
          <li>
            <strong>un prêt national sans garantie</strong> : le Prêt
            Boost de Bpifrance, de 5 000 à 75 000 € ;
          </li>
          <li>
            <strong>un levier fiscal méconnu</strong> : déduire tout le
            coût du site de votre résultat dès la première année ;
          </li>
          <li>
            <strong>des accompagnements entièrement gratuits</strong>,
            comme Atouts Numériques en Auvergne-Rhône-Alpes.
          </li>
        </ul>
        <p>
          Deux règles valent partout : le dossier se dépose{" "}
          <em>avant</em> de signer le devis, et l&apos;argent arrive{" "}
          <em>après</em> le projet, une fois les factures payées.
        </p>
        <GuideTable
          headers={["Levier", "Ce que c'est", "Montant type", "Pour qui"]}
          rows={[
            ["Subventions régionales", "30-50 % du HT, remboursées après projet", "1 000 – 15 000 €", "Selon région et secteur (voir §7)"],
            ["Prêt Boost (Bpifrance)", "Prêt sans garantie personnelle", "5 000 – 75 000 €", "2-49 salariés, +3 ans d'existence"],
            ["Déduction fiscale (voir §4)", "Déduire tout le coût du site de vos impôts dès la 1re année", "ex. 2 500 € d'impôt en moins sur un site à 10 000 €", "Toute entreprise imposée au réel"],
            ["Accompagnements 100 % pris en charge", "Diagnostic, conseil, cahier des charges", "0 € (payés par la Région et le FEDER, un fonds européen)", "TPE-PME (ex. AURA, voir §8)"],
            ["ACRE / ARCE", "Cotisations réduites / chômage en capital", "variable", "Créateurs d'entreprise"],
          ]}
        />
        <p>
          Avant de lire la suite, situez-vous — la moitié des
          dispositifs de ce guide ne concernent pas votre profil.
        </p>
        <GuideTable
          headers={["Votre situation", "Vos leviers réalistes", "À oublier"]}
          rows={[
            ["Créateur d'entreprise (moins de 3 ans)", "ACRE, ARCE, prêt d'honneur, microcrédit ADIE (§5)", "Prêt Boost et la plupart des subventions régionales"],
            ["TPE de +3 ans avec salariés", "Subvention régionale (§7), Prêt Boost (§3), déduction fiscale (§4)", "Le chèque France Num, mort depuis 2021"],
            ["Micro-entrepreneur installé", "ACRE, ARCE, rares dispositifs incluant le régime micro (§11)", "La récupération de TVA et la plupart des subventions régionales"],
            ["Association", "Subvention de projet via Le Compte Asso (§11)", "Toutes les aides « entreprises » de ce guide"],
          ]}
        />
        <InfoBox variant="blue" title="Traduction : les 8 mots de l'administration, en clair">
          <ul className="space-y-1.5">
            <li><strong>HT / TTC</strong> : hors taxes / toutes taxes comprises. Les aides se calculent toujours sur le HT.</li>
            <li><strong>Régime réel</strong> : le régime de TVA classique — vous facturez la TVA et récupérez celle qu&apos;on vous facture.</li>
            <li><strong>Franchise de TVA</strong> : le régime de la plupart des micro-entrepreneurs — pas de TVA facturée, ni récupérée.</li>
            <li><strong>Facture acquittée</strong> : une facture portant la mention « payée », apposée par le prestataire. C&apos;est elle qui déclenche le versement.</li>
            <li><strong>Instruction</strong> : la période où l&apos;administration étudie votre dossier (2 à 6 mois).</li>
            <li><strong>Exercice</strong> : votre année comptable.</li>
            <li><strong>Subvention</strong> : de l&apos;argent donné, jamais remboursé — mais versé après le projet.</li>
            <li><strong>Prêt d&apos;honneur</strong> : un prêt à taux zéro, sans garantie, accordé à la personne (pas à l&apos;entreprise).</li>
          </ul>
        </InfoBox>

        <h2 id="aides-mortes">2. Ces aides n&apos;existent plus (et on vous les vend encore)</h2>
        <p>
          Le premier service à vous rendre est de dater les cadavres. Une
          bonne partie de la première page de Google — y compris
          l&apos;article classé n° 1 quand on tape « aides création site
          internet », au moment où nous écrivons — présente encore comme
          actives des aides fermées depuis des années :
        </p>
        <GuideTable
          headers={["Dispositif", "Statut vérifié", "Depuis"]}
          rows={[
            ["Chèque France Num (500 €)", "Clos — jamais reconduit", "31 juillet 2021"],
            ["Chèque numérique Île-de-France (1 500 €)", "« Aide définitivement close » (page officielle)", "24 octobre 2025"],
            ["Garantie / « prêt » France Num (Bpifrance)", "Retirée du catalogue Bpifrance", "non reconduite après 2023"],
            ["Crédit d'impôt formation des dirigeants", "Supprimé", "31 décembre 2024"],
            ["Suramortissement numérique (40 %)", "Terminé (n'a jamais couvert les sites web)", "31 décembre 2020"],
            ["FISAC", "En extinction, plus aucune aide accordée", "loi de finances 2019"],
            ["NACRE national", "Transféré aux Régions", "1er janvier 2017"],
            ["« Mon Commerce en ligne » (AURA, 1 500 €)", "Dispositif Covid, non mobilisable", "30 septembre 2021"],
          ]}
        />
        <p>
          Et le mythe le plus tenace : <strong>aucun crédit d&apos;impôt ne
          finance un site internet classique</strong>. Le crédit
          d&apos;impôt innovation (20 % depuis 2025, prorogé jusqu&apos;à fin
          2027) vise la conception de prototypes de produits nouveaux — un
          site vitrine ou une boutique en ligne standard n&apos;y est pas
          éligible, quoi qu&apos;en disent les pages commerciales qui
          l&apos;agitent en promesse.
        </p>
        <p>
          Pourquoi ces aides zombies survivent-elles en ligne ? Parce
          qu&apos;elles font cliquer : « 500 € offerts par l&apos;État »
          attire plus qu&apos;un règlement régional de quatorze pages. Les
          pages qui les promeuvent appartiennent presque toutes à des
          prestataires qui veulent votre projet, pas votre dossier de
          subvention. Réflexe simple : toute page qui annonce une aide sans
          lien vers le règlement officiel ni date de vérification ne vous
          apprend rien — elle vous appâte.
        </p>
        <p>
          Voilà pour le cimetière. La bonne nouvelle : tout ce qui suit
          est vivant, vérifié à la source, avec ses conditions réelles.
        </p>

        <h2 id="aides-nationales">3. Les aides nationales encore actives</h2>
        <p>
          Le terrain déblayé, passons à ce qui reste au niveau national.
          Aucune subvention — mais quatre outils réels, vérifiés en
          juillet 2026.
        </p>
        <ul>
          <li>
            <strong>Le Prêt Boost – Transformation Numérique</strong>,
            distribué par Bpifrance (la banque publique qui finance les
            entreprises) : 5 000 à 75 000 €, sans garantie ni caution
            personnelle, remboursables sur 3 à 5 ans — premier
            remboursement au bout de 9 à 12 mois seulement. Demande
            entièrement en ligne, réponse de principe sous 48 heures. Il
            finance explicitement
            la création ou l&apos;amélioration d&apos;un site vitrine ou
            e-commerce, ainsi que le référencement (le travail qui fait
            apparaître votre site en bonne position sur Google).
            Conditions : 2 à 49 salariés et plus de 3 ans
            d&apos;existence — les créateurs et les indépendants sans
            salarié en sont exclus. La raison : Bpifrance prête sans
            garantie, donc uniquement à qui a déjà prouvé sa capacité à
            rembourser. Si vous démarrez, vos leviers sont à la
            section 5.
          </li>
          <li>
            <strong>La Garantie développement des PME-TPE</strong>{" "}
            (Bpifrance) : couvre 40 à 70 % d&apos;un prêt bancaire
            classique. Concrètement, vous ne touchez pas cet argent :
            Bpifrance se porte garant auprès de votre banque, souvent à
            la place de votre caution personnelle. La banque prend moins
            de risque, donc elle dit oui plus facilement — y compris
            pour un projet immatériel comme un site. C&apos;est votre
            banquier qui monte le dossier : demandez-le-lui
            explicitement, il n&apos;y pensera pas toujours seul.
          </li>
          <li>
            <strong>Prêts d&apos;honneur et microcrédit</strong> : prêts à
            taux zéro d&apos;Initiative France, Réseau Entreprendre ou
            France Active (couplés à un prêt bancaire), et le microcrédit
            de l&apos;ADIE (Association pour le droit à l&apos;initiative
            économique) : jusqu&apos;à 17 000 €, pensé pour ceux que les
            banques refusent — créateurs, micro-entrepreneurs, demandeurs
            d&apos;emploi —, à un taux plus élevé qu&apos;un prêt
            bancaire mais avec un suivi gratuit. Le vrai plan B quand on
            n&apos;a ni 3 ans d&apos;ancienneté ni salarié.
          </li>
          <li>
            <strong>France Num</strong> — précision importante : France Num
            ne verse aucune subvention. C&apos;est un annuaire officiel
            (près de 200 aides recensées, filtrables par code postal) et un
            réseau d&apos;« Activateurs » vérifiés par la Direction générale
            des entreprises, engagés à offrir un premier rendez-vous
            gratuit.
          </li>
        </ul>

        <p>
          Subvention ou prêt, comment arbitrer ? La subvention est de
          l&apos;argent gratuit mais lent (2 à 6 mois
          d&apos;instruction), plafonné et remboursé après coup ; le
          prêt est immédiat et d&apos;un montant utile, mais se
          rembourse. En pratique, le bon montage combine souvent
          l&apos;accompagnement gratuit pour cadrer, la subvention
          régionale si votre profil coche les cases, et la fiscalité
          pour le reste — le prêt n&apos;ayant de sens que si la
          trésorerie est le vrai point de blocage.
        </p>

        <h2 id="fiscalite">4. Le levier que tout le monde oublie : la fiscalité</h2>
        <p>
          La seule « aide » universelle ne figure dans aucun comparatif :
          le traitement fiscal du site. Elle est ouverte à toute
          entreprise imposée au réel — c&apos;est-à-dire qui déduit ses
          dépenses réelles de son résultat, contrairement au régime
          micro. Le BOFiP — le recueil officiel dans lequel
          l&apos;administration fiscale publie ses règles — découpe la
          vie d&apos;un site en trois phases :
        </p>
        <GuideTable
          headers={["Phase", "Dépenses", "Traitement fiscal"]}
          rows={[
            ["1. Avant le projet", "Cahier des charges, étude, conseil", "Déduction immédiate, l'année de la dépense"],
            ["2. Développement", "Design, développement, mise en ligne", "Étalé sur plusieurs années — ou tout déduit dès l'année 1 sur option (article 236, I du Code général des impôts)"],
            ["3. Après la mise en ligne", "Hébergement (la location de l'espace informatique où votre site est stocké, accessible 24 h/24), nom de domaine (votre adresse sur internet, du type votre-entreprise.fr), mises à jour", "Déduit au fil de l'eau, comme n'importe quelle facture"],
          ]}
        />
        <p>
          La phase 2 mérite qu&apos;on s&apos;y arrête. Le développement
          du site est normalement traité comme un investissement : la
          dépense se déduit petit bout par petit bout sur plusieurs
          années (les comptables disent qu&apos;elle est
          « immobilisée »). Mais l&apos;option de l&apos;article 236, I
          du Code général des impôts (CGI) permet de{" "}
          <strong>tout déduire d&apos;un coup, dès la première
          année</strong>. Pour un site à 10 000 € et une entreprise
          soumise à l&apos;impôt sur les sociétés (IS) à 25 %,
          c&apos;est 2 500 € d&apos;impôt en moins dès l&apos;année 1 —
          sans dossier à monter, l&apos;option se signale dans votre
          liasse fiscale. Parlez-en à votre expert-comptable{" "}
          <em>avant</em> de signer : elle se choisit pour
          l&apos;ensemble des dépenses du site, en une seule fois — pas
          de tri ligne par ligne après coup — et se prévoit avant la
          clôture de l&apos;exercice.
        </p>
        <p>
          Reste la TVA de 20 % facturée par l&apos;agence. Au régime
          réel — vous facturez la TVA à vos clients et déduisez celle
          que vous payez à vos fournisseurs — elle ne vous coûte rien au
          final. En franchise de TVA (la plupart des
          micro-entrepreneurs : pas de TVA facturée, donc pas de TVA
          déduite), le site vous coûte réellement son prix TTC : un site
          affiché 10 000 € HT vous revient alors à 12 000 €.
        </p>
        <InfoBox variant="blue" title="En clair : pourquoi le fisc ne traite pas toutes les dépenses pareil">
          Pour le fisc, il existe deux façons de dépenser. La charge,
          c&apos;est le plein d&apos;essence : consommé tout de suite,
          déduit tout de suite. L&apos;investissement (une
          « immobilisation », en langage comptable), c&apos;est
          l&apos;achat de la voiture : elle sert plusieurs années, sa
          déduction s&apos;étale sur plusieurs années. Un site est
          normalement traité comme la voiture ; l&apos;option de
          l&apos;article 236, I du CGI est une permission officielle de
          le traiter comme le plein d&apos;essence. L&apos;État ne vous
          verse rien, mais vous laisse récupérer jusqu&apos;à un quart
          du coût dès la première année — au moment précis où votre
          trésorerie vient d&apos;encaisser le coût du site.
        </InfoBox>

        <h2 id="createurs">5. Créateurs d&apos;entreprise : ACRE, ARCE, AGEFIPH</h2>
        <p>
          Si le site accompagne une création d&apos;entreprise, les
          vrais leviers ne sont pas des subventions « site internet » :
          ce sont les aides à la création elles-mêmes.
        </p>
        <ul>
          <li>
            <strong>L&apos;ACRE</strong> réduit vos cotisations sociales
            la première année : exonération partielle pendant 12 mois
            pour les sociétés et entreprises individuelles ; pour les
            micro-entrepreneurs éligibles, le taux de cotisations est
            minoré de 25 % — vous payez les trois quarts du taux normal.
            Moins de cotisations, c&apos;est de la trésorerie pour le
            site.
          </li>
          <li>
            <strong>L&apos;ARCE</strong> (France Travail) convertit 60 %
            de vos droits au chômage restants en capital, versé en deux
            fois. Exemple : s&apos;il vous reste 15 000 € de droits,
            vous touchez 9 000 € — la moitié au démarrage, la moitié six
            mois plus tard. De quoi financer le site et le lancement :
            c&apos;est le mode de financement le plus utilisé. Le
            revers : vous renoncez à l&apos;allocation mensuelle — plus
            de filet de sécurité si l&apos;activité démarre lentement ;
            un arbitrage à faire avec votre conseiller France Travail,
            pas un bonus automatique.
          </li>
          <li>
            <strong>L&apos;AGEFIPH</strong> verse jusqu&apos;à 3 000 €
            aux créateurs en situation de handicap, à condition que le
            projet dépasse 7 500 € et que vous apportiez au moins
            1 200 € de votre poche.
          </li>
          <li>
            <strong>Le NACRE</strong> n&apos;existe plus au niveau
            national : chaque région a son propre dispositif, à chercher
            via Bpifrance Création.
          </li>
        </ul>
        <h2 id="formation">6. Se former (CPF, OPCO) : ce que ça finance vraiment</h2>
        <p>
          Clarifions une confusion entretenue par le démarchage :{" "}
          <strong>ces dispositifs financent des formations, jamais la
          prestation de création du site</strong>. Le CPF (compte
          personnel de formation : le compteur de droits à la formation
          que chaque actif cumule, alimenté de 500 €/an, salariés comme
          indépendants) paie une formation certifiante « créer et gérer
          son site », avec 150 € de reste à charge. Les salariés passent
          par l&apos;OPCO de leur branche (l&apos;« opérateur de
          compétences », qui finance la formation de votre secteur —
          votre expert-comptable sait lequel est le vôtre) ; les
          dirigeants non salariés par leur fonds
          d&apos;assurance formation — AGEFICE (commerçants), FIFPL
          (libéraux), FAFCEA (artisans) — sous condition d&apos;être à
          jour de la contribution formation, avec remboursement après
          avance des frais. Utile pour devenir autonome sur son site une
          fois livré ; inutile pour le faire construire.
        </p>
        <p>
          Cas particulier : le demandeur d&apos;emploi qui prépare sa
          création. Si votre solde CPF ne suffit pas, France Travail peut compléter via l&apos;AIF (aide
          individuelle à la formation), sur validation de votre
          conseiller. Combinée à l&apos;ARCE (capital) et à l&apos;ACRE
          (cotisations réduites), c&apos;est le vrai « pack de
          financement » d&apos;un lancement avec site : trois
          dispositifs nationaux, cumulables, vivants en 2026.
        </p>

        <h2 id="regions">7. Les aides région par région (statut vérifié)</h2>
        <p>
          Voici l&apos;état réel des dispositifs régionaux, vérifié fiche
          par fiche en juillet 2026 — avec leur statut, ce
          qu&apos;aucun autre article ne fait. Les règles changent
          vite : re-vérifiez le règlement officiel avant tout dossier.
        </p>
        <GuideTable
          headers={["Région", "Dispositif", "Montant de l'aide", "Statut / point clé"]}
          rows={[
            ["Bretagne", "PASS Commerce & Artisanat", "30 % du HT, aide maxi 7 500 €", "Ouvert — site internet explicitement éligible"],
            ["Normandie", "Impulsion Transition (numérique)", "50 % du HT, aide de 1 000 à 5 000 €", "Ouvert (fiche 01/2026) — micro-entrepreneurs exclus"],
            ["Centre-Val de Loire", "CAP TN", "conseil 50 % / investissement 30 % du HT", "Ouvert — sites et boutiques éligibles"],
            ["Hauts-de-France", "INAC", "40 % du HT, aide de 1 200 à 12 000 €", "E-commerce oui, site vitrine simple NON éligible"],
            ["La Réunion", "Kap Numérik (FEDER)", "80 % du HT, aide maxi 3 200 €", "La plus généreuse — vitrine ~1 200 €, marchand ~2 000 €"],
            ["Occitanie", "Pass Occitanie", "50 % du HT, aide maxi 10 000 €", "À reconfirmer 2026 — au moins 1 salarié requis"],
            ["Grand Est", "Transformation Digitale", "jusqu'à 6 000 € d'aide au total", "À reconfirmer — prestataire Activateur France Num exigé"],
            ["Île-de-France", "TP'up", "aide jusqu'à 55 000 €", "Ouvert mais orienté écologie — site web au cas par cas"],
            ["Pays de la Loire", "PDLIN", "30-40 % du HT, aide maxi 15 000 €", "Ouvert — mais e-commerce exclu (l'aide vise les logiciels de gestion interne — stocks, fichiers clients, données — pas les sites)"],
            ["Auvergne-Rhône-Alpes", "Atouts Numériques", "accompagnement 100 % pris en charge", "Pas de subvention directe du site (voir §8)"],
            ["Nouvelle-Aquitaine", "Aide transfo. numérique TPE", "50 % du HT, aide de 5 000 à 50 000 €", "Échue au 31/12/2025 — reconduction à confirmer"],
            ["PACA / Corse / BFC", "Move2Digital, CRESCE, —", "variable", "Rien de dédié au site web confirmé en 2026"],
          ]}
        />
        <p>
          Les sigles du tableau (INAC, CAP TN, TP&apos;up…) sont les
          noms officiels des dispositifs — le nom exact à donner à votre
          CCI ou à taper dans le moteur France Num. PDLIN = Pays de la
          Loire Investissement numérique ; BFC =
          Bourgogne-Franche-Comté ; PACA =
          Provence-Alpes-Côte d&apos;Azur.
        </p>
        <p>
          Deux motifs récurrents à retenir. D&apos;abord, plusieurs régions{" "}
          <strong>excluent le « site vitrine simple »</strong> : les
          enveloppes poussent vers l&apos;e-commerce et les outils
          métier. La logique : les régions financent ce qui transforme
          l&apos;entreprise — vendre en ligne, automatiser, gagner en
          productivité. À leurs yeux, un site vitrine simple relève de la
          communication courante, comme une plaquette ou des cartes de
          visite. C&apos;est discutable, mais c&apos;est écrit noir sur
          blanc dans les règlements : inutile de monter un dossier pour
          un projet explicitement exclu. Ensuite, l&apos;échelon le plus
          vivant est souvent <strong>local</strong> : des agglomérations
          maintiennent leurs propres fonds (exemple vérifié :
          l&apos;agglo de Brive finance 30 % d&apos;un site jusqu&apos;à
          3 000 € d&apos;aide, jusqu&apos;à fin 2026). Le réflexe :
          interroger le moteur France Num avec votre
          code postal, puis appeler votre CCI (votre chambre de commerce
          et d&apos;industrie).
        </p>
        <p>
          Et si vous avez déjà un site ? La refonte est en général
          éligible aux mêmes conditions que la création — la plupart des
          règlements visent « la création ou la refonte ». À condition
          d&apos;apporter de nouvelles capacités (vente en ligne, prise
          de rendez-vous), pas un simple rafraîchissement graphique : la
          maintenance, elle, n&apos;est jamais éligible.
        </p>
        <p>
          Cas à part, l&apos;outre-mer : La Réunion tient avec Kap
          Numérik l&apos;aide au site web la plus généreuse de France
          (voir tableau), réservée aux entreprises de moins de 10
          salariés — une demande par an, factures obligatoirement
          postérieures au dépôt. Les autres territoires ultramarins
          n&apos;ont pas de dispositif équivalent confirmé en 2026 :
          passez par le moteur France Num et votre CCI locale.
        </p>

        <h2 id="aura">8. Focus Auvergne-Rhône-Alpes et Savoie</h2>
        <p>
          Notre région — parlons-en précisément, personne ne le fait.{" "}
          <strong>Il n&apos;existe pas de subvention régionale directe pour
          créer un site en AURA en 2026</strong> : « Mon Commerce en
          ligne » (jusqu&apos;à 1 500 €) était un dispositif Covid, clos
          depuis septembre 2021. Ce qui existe et que nous recommandons
          d&apos;utiliser : <strong>Atouts Numériques</strong>, un
          accompagnement <em>pris en charge à 100 %</em> (Région + fonds
          européen FEDER, opéré par l&apos;ENE, une association
          régionale spécialisée dans le numérique, avec les CCI et les
          chambres de métiers et de l&apos;artisanat, CMA) pour les
          entreprises de plus de 2 ans et de moins de 50 salariés — au programme :
          diagnostic de maturité numérique, 3,5 à 7 h d&apos;accompagnement
          individuel (audit de votre site actuel, stratégie digitale) et de
          l&apos;aide à la rédaction du cahier des charges. Autrement dit :
          la Région ne paie pas votre site, mais elle peut financer à 100 %
          son cadrage — un cahier des charges solide fait ensuite baisser
          les devis (notre{" "}
          <Link href="/ressources/kit-cahier-des-charges-site-internet">modèle
          commenté</Link> vous y aidera aussi, gratuitement).
        </p>
        <p>
          Points d&apos;entrée depuis la Savoie : la CCI Savoie à Chambéry
          (5 rue Salteur, 04 57 73 73 73), qui relaie Atouts Numériques et
          propose diagnostics et ateliers numériques ; la CMA pour les
          artisans (autodiagnostic numérique gratuit en ligne, puis
          rendez-vous avec un conseiller) ; et le Campus Région du
          numérique, où le diagnostic en ligne vaut dossier de candidature.
          Pensez aussi aux agglomérations (Grand Chambéry, Grand Lac,
          Grand Annecy) : leurs dispositifs commerce évoluent chaque année —
          un appel à votre agglo peut révéler un fonds local que personne ne
          référence en ligne.
        </p>

        <InfoBox variant="emerald" title="Le bon plan méconnu : faire financer le cadrage">
          Le cahier des charges est la partie du projet que les entreprises
          bâclent faute de temps — et c&apos;est précisément celle
          qu&apos;Atouts Numériques peut prendre en charge à 100 %. Un
          cadrage propre fait ensuite baisser les devis (les prestataires
          ne facturent plus l&apos;incertitude) et rend les offres
          comparables. Autrement dit : même sans subvention directe, une
          TPE d&apos;Auvergne-Rhône-Alpes peut faire financer
          l&apos;étape qui a le plus d&apos;effet sur le prix final de son
          site.
        </InfoBox>

        <GuideInlineCTA
          title="On vérifie les aides de votre territoire avec vous"
          description="Décrivez votre projet en 3 minutes : nous vous répondons sous 24 h ouvrées avec un chiffrage honnête — et les dispositifs réellement mobilisables sur votre territoire, sources à l'appui."
          tags={["Réponse sous 24 h ouvrées", "Vérification des aides incluse", "Sans engagement"]}
        />

        <h2 id="mode-emploi">9. Mode d&apos;emploi : déposer sans se faire recaler</h2>
        <p>
          La mécanique brutale que les articles promotionnels
          n&apos;expliquent jamais tient en une image : une subvention
          fonctionne comme une note de frais — autorisation{" "}
          <em>avant</em> d&apos;engager la dépense,
          avance de votre poche, remboursement sur justificatifs des
          mois plus tard, et le moindre justificatif manquant bloque
          tout. Cinq règles en découlent.
        </p>
        <ol>
          <li>
            <strong>Le dossier se dépose AVANT de signer quoi que ce
            soit.</strong> La non-rétroactivité est la règle d&apos;or —
            verbatim du règlement normand : la demande doit être déposée
            « avant le démarrage du projet (signature de la commande) ».
            Un devis signé ou un acompte versé avant l&apos;accord =
            aide perdue. La raison ? Une aide publique doit déclencher
            un projet, pas récompenser une décision déjà prise : signer
            avant de déposer prouve que le projet se serait fait sans
            elle — c&apos;est « l&apos;effet incitatif »
            qu&apos;exigent les règlements.
          </li>
          <li>
            <strong>Les taux s&apos;appliquent au montant HT.</strong> La
            TVA n&apos;est jamais subventionnée ; elle se récupère au
            régime réel, pas en franchise (voir §4).
          </li>
          <li>
            <strong>C&apos;est un remboursement, pas une avance.</strong>{" "}
            Vous payez l&apos;agence, puis vous êtes remboursé sur
            factures acquittées — une facture « acquittée » porte la
            mention « payée », la date et le mode de règlement, apposées
            par votre prestataire. Ce n&apos;est pas automatique :
            demandez-la après chaque paiement — le versement, parfois 4
            mois après la fin du projet, en dépend. Prévoyez la
            trésorerie totale.
          </li>
          <li>
            <strong>Comptez 2 à 6 mois d&apos;instruction</strong>, et des
            enveloppes qui s&apos;épuisent en cours d&apos;année : déposez
            tôt.
          </li>
          <li>
            <strong>Le cumul est plafonné, deux fois.</strong>{" "}
            D&apos;abord par chaque règlement (souvent 80 %
            d&apos;aides publiques maximum sur un même projet). Ensuite
            par la règle européenne dite « de minimis » : toutes vos
            aides publiques, quelle qu&apos;en soit l&apos;origine,
            s&apos;additionnent dans une même enveloppe de 300 000 € par
            entreprise sur 3 ans — vous n&apos;en approcherez jamais
            avec un site. Retenez que tout est compté ensemble et que,
            depuis le 1er janvier 2026, un registre national permet de
            vérifier ce que vous avez déjà perçu : déclarez tout,
            exactement.
          </li>
        </ol>

        <InfoBox variant="emerald" title="Le calcul complet : une TPE de 8 salariés cumule tout">
          Une entreprise de 8 salariés en Normandie, au régime réel,
          veut un site à 8 000 € HT
          (9 600 € TTC). Étape 1 : dossier Impulsion Transition déposé
          avec le devis non signé, accord, projet réalisé, 9 600 €
          payés. Étape 2 : la TVA de 1 600 € est récupérée à la
          déclaration suivante. Étape 3 : la subvention de 50 % du HT
          rembourse 4 000 €, jusqu&apos;à 4 mois après la fin du projet.
          Étape 4 : l&apos;option fiscale du §4 déduit le coût restant
          (4 000 €) dès l&apos;année 1, soit environ 1 000 €
          d&apos;impôt sur les sociétés en moins. Coût final réel :
          autour de 3 000 € pour un site facturé 8 000 € HT — à
          condition d&apos;avoir avancé 9 600 € de trésorerie et
          respecté l&apos;ordre des étapes. Ordres de grandeur à valider
          avec votre expert-comptable.
        </InfoBox>
        <InfoBox variant="amber" title="À retenir : les 4 règles d'or d'un dossier de subvention">
          1. Déposez AVANT de signer. 2. Raisonnez en hors taxes :
          l&apos;aide se calcule sur le HT, jamais sur la TVA. 3.
          Prévoyez 100 % de la trésorerie : la subvention rembourse
          après coup, sur factures acquittées. 4. Déposez tôt dans
          l&apos;année : les enveloppes s&apos;épuisent sans annonce.
          Une phrase à retenir : une subvention récompense un projet
          bien monté, elle ne le finance pas.
        </InfoBox>
        <h3>Dossier refusé : les trois recours qui fonctionnent</h3>
        <p>
          Un refus n&apos;est presque jamais définitif. Un : demandez
          les motifs par écrit — l&apos;administration doit motiver sa
          décision, et la réponse dira si le problème est réparable
          (pièce manquante, dépense mal catégorisée) ou structurel.
          Deux : le recours gracieux, un simple courrier au service
          instructeur — une heure de travail, qui débloque les refus
          liés à une mauvaise lecture du dossier. Trois, le plus
          efficace : redéposer au bon moment — beaucoup de refus
          signifient « enveloppe épuisée », et un dossier redéposé en
          janvier, quand les budgets se rechargent, passe là où le même
          échouait en octobre. Et ne signez toujours pas le devis
          entre-temps : un nouveau dépôt exige un projet non commencé.
        </p>

        <h2 id="arnaques">10. Les arnaques au « site gratuit », documentées</h2>
        <p>
          Le vide laissé par les aides disparues est occupé par le
          démarchage. Le schéma classique, documenté par une enquête de
          la DGCCRF (la Répression des fraudes), se déroule en trois
          temps. Un commercial vous promet un site « qui ne coûtera
          presque rien », en laissant entendre qu&apos;il est aidé ou
          financé. Il vous fait signer <strong>le jour même</strong> un
          contrat de location du site. Ce contrat est aussitôt revendu à
          une société de financement : vous voilà engagé pour 48 mois,
          sans possibilité d&apos;annuler, à environ 150 €/mois — soit{" "}
          <strong>~7 200 € pour un site dont vous ne serez jamais
          propriétaire</strong>.
        </p>
        <p>
          Pour visualiser le piège : c&apos;est le leasing automobile
          appliqué à un site — sauf qu&apos;à la fin, vous ne pouvez ni
          acheter la voiture, ni la rendre, ni arrêter de payer. Le
          contrat ayant été revendu, la société de financement exigera
          ses 150 € par mois même si le prestataire a disparu :
          juridiquement, vous ne payez plus un site, vous remboursez un
          crédit. L&apos;enquête de la DGCCRF a débouché sur des
          injonctions et des procès-verbaux pénaux pour pratiques
          commerciales trompeuses et agressives. Même famille : les
          arnaques CPF « site offert contre votre compte formation ».
          Les réflexes : ne jamais signer le jour du rendez-vous, exiger
          la propriété du code et du nom de domaine par écrit, et
          signaler tout démarchage abusif sur signal.conso.gouv.fr.
        </p>
        <p>Les sept signaux qui doivent faire raccrocher :</p>
        <ul>
          <li>on vous démarche par téléphone au sujet d&apos;une « aide de l&apos;État » — aucun organisme public ne démarche ;</li>
          <li>le site est « gratuit » ou « offert », mais il y a un abonnement ou un contrat de location derrière ;</li>
          <li>on vous presse de signer le jour même « avant la fin de l&apos;enveloppe » ;</li>
          <li>le contrat mentionne un bailleur ou une société de financement tierce ;</li>
          <li>la propriété du site, du code et du nom de domaine n&apos;est écrite nulle part ;</li>
          <li>on vous demande des « frais de dossier » ou un « acompte de déblocage » pour toucher une aide — l&apos;instruction d&apos;une aide publique est gratuite, de bout en bout ;</li>
          <li>on vous annonce que vous avez « obtenu » une aide que vous n&apos;avez jamais demandée — une subvention publique ne s&apos;obtient que sur dossier déposé par vous.</li>
        </ul>

        <h2 id="micro">11. Micro-entrepreneurs, associations : la réponse honnête</h2>
        <p>
          (Vocabulaire : auto-entrepreneur et micro-entrepreneur
          désignent exactement le même régime ; « micro-entrepreneur »
          est le terme officiel depuis 2016.)
        </p>
        <p>
          <strong>Micro-entrepreneurs.</strong> C&apos;est la question
          n° 1, et la réponse gonflée d&apos;espoir des pages
          commerciales est fausse. <strong>Beaucoup d&apos;aides
          régionales excluent explicitement le régime micro</strong> (la
          Normandie l&apos;écrit noir sur blanc dans son règlement), et
          la franchise de TVA rend la TVA de 20 % non récupérable. Les
          leviers réels : l&apos;ACRE la première année, l&apos;ARCE si
          vous venez du chômage, les rares dispositifs qui incluent
          expressément les indépendants — et surtout un projet
          dimensionné juste (voir notre guide du{" "}
          <Link href="/guides/prix-site-vitrine">prix d&apos;un site
          vitrine</Link>).
        </p>
        <p>
          <strong>Associations.</strong> Les aides « numérisation des
          entreprises » de ce guide ne s&apos;appliquent pas aux
          associations. Leur canal : la subvention de fonctionnement ou
          de projet auprès de la commune, du département ou de la région
          (dossier via Le Compte Asso), les fondations privées, les
          dispositifs d&apos;accompagnement numérique associatif. Le
          réflexe : interroger sa collectivité et sa fédération
          d&apos;abord.
        </p>

        <h2 id="sans-aide">12. Éligible à rien ? Les vraies alternatives</h2>
        <p>
          C&apos;est le cas majoritaire en 2026, autant le planifier.
          Quatre leviers, dans l&apos;ordre d&apos;efficacité :
        </p>
        <ul>
          <li>
            <strong>La fiscalité</strong> (voir §4) : déduction
            immédiate possible et TVA récupérée au régime réel. Sur un
            site à 10 000 €, l&apos;effet réel dépasse souvent ce
            qu&apos;aurait donné une subvention à 30 % — introuvable.
          </li>
          <li>
            <strong>Le Prêt Boost</strong>, si vous avez 3 ans
            d&apos;existence et au moins un salarié : il étale le coût
            sans garantie personnelle (voir §3).
          </li>
          <li>
            <strong>Le phasage</strong> : un{" "}
            <Link href="/services/sites-vitrines">site vitrine
            solide</Link> d&apos;abord,{" "}
            <Link href="/services/ecommerce">l&apos;e-commerce</Link> et
            les fonctionnalités avancées en V2, quand le site a commencé
            à produire.
          </li>
          <li>
            <strong>L&apos;accompagnement gratuit</strong> (Atouts
            Numériques, diagnostics CCI/CMA) pour ne pas payer le
            cadrage.
          </li>
        </ul>
        <p>
          Deux pistes privées, enfin, que les comparatifs français
          ignorent. Les <strong>concours pour créateurs</strong> (Prix
          Moovjee, Talents des Cités, prix des réseaux Initiative France
          ou Réseau Entreprendre) : l&apos;argent y est libre
          d&apos;affectation — rien n&apos;interdit de le mettre dans
          votre site — et la non-rétroactivité ne s&apos;y applique pas.
          Un pari, pas un droit. Le{" "}
          <strong>financement participatif</strong>, lui, n&apos;a de
          sens que pour un lancement e-commerce en prévente : les
          précommandes (Ulule, KissKissBankBank) financent le stock et
          la boutique. Il ne finance pas un site, il finance un
          lancement dont le site fait partie.
        </p>
        <p>
          Et le meilleur « financement » reste de ne pas surpayer :
          exigez des devis au même périmètre — nos guides des{" "}
          <Link href="/guides/combien-coute-un-site-internet">prix
          d&apos;un site internet</Link> donnent toutes les grilles du
          marché. Dernière piste : négociez l&apos;échelonnement avec
          votre prestataire. Un paiement en trois ou quatre fois, calé
          sur les étapes du projet (maquette validée, site mis en ligne,
          formation terminée), est une pratique courante et saine (nous
          le proposons) — elle lisse la trésorerie comme un prêt, sans
          dossier, sans intérêts, sans six mois d&apos;instruction.
        </p>

        <h2 id="methode">13. Méthode : monter votre dossier en 5 étapes</h2>
        <ol>
          <li>
            <strong>Vérifiez ce qui existe sur votre territoire</strong> —
            francenum.gouv.fr/aides-financieres avec votre code postal,
            puis les-aides.fr pour lire le règlement complet. Datez chaque
            fiche.
          </li>
          <li>
            <strong>Appelez votre CCI ou CMA</strong> — les dispositifs
            locaux (agglos) sont rarement bien référencés en ligne, et un
            diagnostic gratuit est souvent le préalable exigé.
          </li>
          <li>
            <strong>Faites établir un devis détaillé — sans le
            signer</strong> — le dossier exige un devis, la signature le
            tue. Notre{" "}
            <Link href="/ressources/kit-cahier-des-charges-site-internet">modèle
            de cahier des charges</Link> rend le devis solide et
            comparable.
          </li>
          <li>
            <strong>Déposez, attendez l&apos;accord écrit, puis signez</strong>{" "}
            — et vérifiez les exigences du règlement : certaines régions
            (Grand Est) n&apos;acceptent que les prestataires référencés
            « Activateur France Num », d&apos;autres plafonnent le tarif
            journalier des prestations ou imposent un délai de réalisation.
            Un dossier conforme au règlement se paie en semaines gagnées.
          </li>
          <li>
            <strong>Gardez tout</strong> — factures acquittées, preuves de
            paiement, éléments livrés : le versement en dépend,
            jusqu&apos;à plusieurs mois après la mise en ligne.
          </li>
        </ol>
        <InfoBox variant="blue" title="Le script d'appel à votre CCI (étape 2) : 4 questions à poser">
          Appeler sa CCI intimide pour rien : dix minutes, gratuit.
          Dans cet ordre : 1. « Quelles aides à la numérisation sont
          mobilisables aujourd&apos;hui pour une entreprise de [votre
          effectif] salariés, code postal [le vôtre], dans le secteur
          [le vôtre] ? » 2. « Mon projet — un site [vitrine /
          e-commerce] d&apos;environ [budget] € — entre-t-il dans les
          dépenses éligibles ? » 3. « Y a-t-il un diagnostic ou un
          accompagnement gratuit à faire d&apos;abord ? Est-il
          obligatoire pour déposer ? » 4. « Où en est l&apos;enveloppe :
          reste-t-il des fonds, et quel délai d&apos;instruction ? »
          Notez le nom de votre interlocuteur : un dossier suivi avance
          plus vite.
        </InfoBox>
        <p>
          Chez Hagnéré Code, la vérification des aides fait partie du
          cadrage : décrivez votre projet en 3 minutes via{" "}
          <Link href="/demarrer-un-projet">notre parcours guidé</Link> —
          réponse personnelle sous 24 h ouvrées, avec un chiffrage au
          forfait fixe (méthode{" "}
          <Link href="/methode">Sprint Fixe™</Link>) et, si votre
          territoire finance quelque chose, le dispositif exact et son
          règlement. Sans engagement, et sans vous promettre un chèque qui
          n&apos;existe plus.
        </p>

        <hr />
        <p className="text-sm">
          <strong>Sources</strong> — dispositifs vérifiés sur les pages
          officielles en juillet 2026 :{" "}
          <a href="https://www.francenum.gouv.fr/aides-financieres" target="_blank" rel="noopener noreferrer">France Num, moteur officiel des aides</a> ;{" "}
          <a href="https://www.economie.gouv.fr/plan-de-relance/cheque-france-num-bilan" target="_blank" rel="noopener noreferrer">economie.gouv.fr, bilan et clôture du chèque France Num</a> ;{" "}
          <a href="https://www.francenum.gouv.fr/aides-financieres/financez-la-numerisation-de-votre-tpe-pme-avec-le-pret-boost-transformation" target="_blank" rel="noopener noreferrer">fiche Prêt Boost Transformation Numérique</a> ;{" "}
          <a href="https://bofip.impots.gouv.fr/bofip/1818-PGP.html/identifiant=BOI-BIC-CHG-20-30-30-20170301" target="_blank" rel="noopener noreferrer">BOFiP, traitement fiscal des sites internet (BOI-BIC-CHG-20-30-30)</a> ;{" "}
          <a href="https://entreprendre.service-public.fr/vosdroits/F35494" target="_blank" rel="noopener noreferrer">Service-Public, crédit d&apos;impôt innovation</a> ;{" "}
          <a href="https://www.service-public.fr/particuliers/vosdroits/F11677" target="_blank" rel="noopener noreferrer">fiches ACRE</a> et{" "}
          <a href="https://www.service-public.fr/particuliers/vosdroits/F15252" target="_blank" rel="noopener noreferrer">ARCE</a> ;{" "}
          <a href="https://campusnumerique.auvergnerhonealpes.fr/dispositifs/atouts-numeriques/" target="_blank" rel="noopener noreferrer">Atouts Numériques (Campus Région du numérique AURA)</a> ;{" "}
          <a href="https://www.bretagne.bzh/aides/fiches/pass-commerce-artisanat/" target="_blank" rel="noopener noreferrer">PASS Commerce &amp; Artisanat (Région Bretagne)</a> ;{" "}
          <a href="https://les-aides.fr/" target="_blank" rel="noopener noreferrer">les-aides.fr (réseau CCI, règlements complets)</a> ;{" "}
          <a href="https://www.economie.gouv.fr/dgccrf/laction-de-la-dgccrf/les-enquetes/location-financiere-aupres-des-professionnels-demarches" target="_blank" rel="noopener noreferrer">DGCCRF, enquête location financière</a> ;{" "}
          <a href="https://entreprendre.service-public.gouv.fr/actualites/A17026" target="_blank" rel="noopener noreferrer">règle de minimis et registre national 2026</a>.
        </p>
        <p className="text-sm">
          <em>
            Les dispositifs d&apos;aide ouvrent, ferment et changent de
            règles sans préavis : les statuts indiqués ont été vérifiés en
            juillet 2026 et doivent être reconfirmés sur la fiche officielle
            au moment de votre dossier. Ce guide ne constitue pas un conseil
            fiscal ou juridique personnalisé.
          </em>
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
