import type { Metadata } from "next";
import Link from "next/link";
import { GuideLayout } from "@/components/guides/guide-layout";
import {
  GuideToc,
  InfoBox,
  GuideTable,
  GuideInlineCTA,
  FormulaBox,
} from "@/components/guides/guide-content-blocks";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { OG_BASE, SITE_URL } from "@/lib/seo";
import { getGuide, guidePath, guideUrl, formatGuideDate } from "@/lib/guides";

const guide = getGuide("combien-coute-un-saas");

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
      "SaaS",
      "Next.js",
      "React",
      "Architecture logicielle",
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
      name: "Combien coûte un SaaS ?",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Combien coûte le développement d'un SaaS en 2026 ?",
    answer:
      "Notre recoupement éditorial 2026 retient 5 000 à 15 000 € pour un POC, 15 000 à 40 000 € pour un MVP fonctionnel, 40 000 à 100 000 € pour une V1 multi-rôles et 100 000 € et plus pour un produit complexe. Ces ordres de grandeur ne constituent ni une médiane ni un échantillon représentatif : comparez les jours, inclusions et exclusions. La grille commerciale Hagnéré Code démarre à 15 000 € pour un MVP, selon périmètre, au forfait fixe.",
  },
  {
    question: "Combien coûte un MVP de SaaS ?",
    answer:
      "Pour ses scénarios, ce guide retient 15 000 à 40 000 € pour un MVP fonctionnel, designé, testé et mis en production. Ce repère vient d'un recoupement éditorial non représentatif, pas d'un baromètre de marché. Une offre plus basse peut être pertinente si son périmètre est plus réduit : vérifiez surtout le cadrage, le design, les tests, la mise en production, les droits et la réversibilité.",
  },
  {
    question: "Combien de temps faut-il pour développer un SaaS ?",
    answer:
      "Avec une équipe senior : 2 à 4 semaines pour un POC, 4 à 8 semaines pour un MVP bien cadré (jusqu'à 14 semaines s'il est complexe), 3 à 5 mois pour une V1 complète en production. Le facteur qui allonge le plus les délais n'est pas la technique : ce sont les décisions produit qui traînent. Un interlocuteur qui tranche en 24 h fait gagner des semaines.",
  },
  {
    question: "Peut-on créer un SaaS avec l'IA (ChatGPT, Claude) ?",
    answer:
      "Générer une démo, oui. Pour un produit qui encaisse des paiements et protège des données, les résultats dépendent des tâches : une étude contrôlée a mesuré un gain sur un exercice cadré, tandis que METR a observé un ralentissement sur son échantillon de développeurs expérimentés et de dépôts complexes. Ces études ne prouvent aucune remise universelle. Hagnéré Code utilise des assistants avec revue humaine et tests ; notre tarif d'entrée à 15 000 € relève de notre grille et du périmètre, pas d'une causalité démontrée par ces études.",
  },
  {
    question: "Peut-on créer un SaaS en no-code (Bubble) ?",
    answer:
      "Pour valider une hypothèse, oui : comptez 2 000 à 15 000 € de développement. Mais regardez le coût récurrent : les plans Bubble vont de 59 à 549 $/mois, et le coût réel d'une application active se situe souvent entre 300 et 1 500 $/mois (consommation facturée à l'usage, modules payants, stockage). À l'échelle, beaucoup de projets no-code se réécrivent en code — en payant deux fois. Bon outil de test, rarement une fondation.",
  },
  {
    question: "Combien coûte l'hébergement et l'infrastructure d'un SaaS ?",
    answer:
      "Dans le scénario early-stage de ce guide, les tarifs publics relevés pour hébergement, base de données, authentification, e-mails et suivi produisent un total d'environ 100 à 200 €/mois. Ce n'est pas une moyenne de marché : le coût réel dépend des utilisateurs, du stockage, des traitements et du niveau de service. Les benchmarks cités donnent un point de comparaison, mais votre consommation doit être modélisée poste par poste.",
  },
  {
    question: "Quel est le coût de maintenance d'un SaaS ?",
    answer:
      "Comme hypothèse de planification, ce guide retient 15 à 25 % du coût initial par an pour correctifs, sécurité et petites évolutions. Ce n'est pas un standard statistique : le montant dépend du niveau de service, des dépendances et du rythme produit. Exigez un contrat qui détaille délais d'intervention, versions supportées, inclusions et exclusions, puis remplacez cette hypothèse par le devis réel.",
  },
  {
    question: "Faut-il un développeur pour créer un SaaS ?",
    answer:
      "Pour un vrai produit commercialisé, oui — la question est plutôt : interne, freelance ou agence ? Un développeur senior français facture 450 à 650 €/jour (baromètres 2026) ; un MVP représente 30 à 70 jours de travail cumulés. Le freelance est économique mais mono-compétence (design, produit, mise en ligne restent à couvrir) ; l'agence coûte plus cher mais apporte l'équipe complète et les garanties. Le no-code repousse le besoin, il ne le supprime pas.",
  },
  {
    question: "Est-ce rentable de créer un SaaS ?",
    answer:
      "Le modèle est excellent — marge brute médiane d'environ 77 % — mais la rentabilité se joue sur l'acquisition et la rétention, pas sur le développement : le benchmark 2025 mesure 2 $ de dépenses commerciales et marketing pour acquérir 1 $ d'abonnement annuel, et un churn mensuel (la part d'abonnés qui résilient chaque mois) de 3 à 5 % pour les SaaS visant les TPE-PME. Concrètement : prévoyez au moins autant de budget pour vendre le produit que pour le construire, et calculez la rétention avant d'écrire une ligne de code.",
  },
  {
    question: "Forfait ou régie : comment payer son prestataire ?",
    answer:
      "En régie, vous payez au temps passé (TJM × jours) : flexible, mais le risque de dépassement est chez vous — dangereux pour un fondateur au budget fermé. Au forfait, le prix est fixe sur un périmètre défini : le risque est chez le prestataire, à condition que le périmètre soit bien cadré en amont. Notre position : forfait fixe contractuel, précédé d'un cadrage sérieux (Discovery Sprint) — c'est le seul modèle où votre budget est une donnée, pas une espérance.",
  },
  {
    question: "Développer son logiciel ou s'abonner à un outil existant ?",
    answer:
      "Règle simple : si un SaaS du marché couvre 80 % de votre besoin pour quelques dizaines d'euros par mois, abonnez-vous — vous n'utiliserez jamais que 3 à 5 % des fonctionnalités d'un outil généraliste, mais le prix est imbattable au démarrage. Le sur-mesure se justifie quand l'outil devient un avantage concurrentiel, quand les abonnements cumulés dépassent le coût d'un développement amorti sur 3-4 ans, ou quand vos processus ne rentrent dans aucune case du marché.",
  },
  {
    question: "Combien coûte un SaaS avec de l'IA intégrée ?",
    answer:
      "Comptez un surcoût de développement (intégration des modèles, gestion des prompts, garde-fous) : le marché situe un SaaS avec fonctionnalités IA entre 60 000 et 150 000 € en agence classique, contre 25 000 à 60 000 € pour un micro-SaaS IA ciblé. Surtout, ajoutez un coût variable nouveau : les appels aux API d'IA (les requêtes que votre logiciel envoie aux modèles) se paient à l'usage et grandissent avec vos utilisateurs — à modéliser dans votre prix de vente dès le départ, comme les commissions de paiement.",
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
          { label: "Combien coûte un SaaS ?" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Ce que coûte un logiciel en ligne vendu par abonnement, de la première version à son exploitation. Ordres de grandeur 2026, frais mensuels, impact de l'intelligence artificielle et exemple de devis expliqué ligne à ligne."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          { number: "01", title: "MVP : 15 000 – 40 000 €", description: "", color: "violet" },
          { number: "02", title: "Exploitation : dès ~150 €/mois", description: "", color: "blue" },
          { number: "03", title: "Exemple de devis décortiqué", description: "", color: "emerald" },
          { number: "04", title: `Lecture : ${guide.readTimeMin} min`, description: "", color: "amber" },
        ]}
        relatedLinks={[
          { href: "/guides/combien-coute-un-site-internet", label: "Combien coûte un site internet ?" },
          { href: "/guides/combien-coute-une-application-mobile", label: "Prix d'une application mobile" },
          { href: "/ressources/kit-cahier-des-charges-site-internet", label: "Modèle de cahier des charges" },
          { href: "/services/saas-applications-metier", label: "Développement SaaS" },
          { href: "/methode", label: "Notre méthode Sprint Fixe™" },
          { href: "/tarifs", label: "Nos tarifs détaillés" },
        ]}
        faqTitle="Prix d'un SaaS : vos questions"
        faqItems={faqItems}
      >
        <p className="lead">
          Un SaaS (de l&apos;anglais « Software as a Service ») est un
          logiciel accessible sur internet, que vos clients utilisent
          depuis leur navigateur en payant un abonnement mensuel —
          exactement comme vous payez déjà votre logiciel de comptabilité
          en ligne. Les devis pour en
          construire un vont de 5 000 € à 150 000 € pour des projets qui,
          sur le papier, se ressemblent. Si vous n&apos;êtes pas du
          métier, impossible de savoir qui exagère — personne ne vous a
          jamais montré comment un tel devis se fabrique. Ce guide remet
          de l&apos;ordre :{" "}
          <strong>fourchettes indicatives par étape, coûts d&apos;exploitation
          chiffrés, impact honnête de l&apos;IA, et un exemple illustratif de
          devis de MVP décortiqué ligne à ligne</strong>.
        </p>

        <InfoBox variant="blue" title="Les 10 mots de ce guide, en 30 secondes">
          <ul className="space-y-1.5">
            <li><strong>SaaS</strong> : un logiciel en ligne que vos clients utilisent par abonnement, depuis leur navigateur.</li>
            <li><strong>POC</strong> : une maquette jetable, juste assez fonctionnelle pour tester l&apos;idée.</li>
            <li><strong>MVP</strong> : la première version vendable, réduite à l&apos;essentiel.</li>
            <li><strong>V1</strong> : la version aboutie, complète.</li>
            <li><strong>Front</strong> : tout ce que l&apos;utilisateur voit à l&apos;écran.</li>
            <li><strong>Back</strong> : la mécanique invisible (données, calculs, sécurité).</li>
            <li><strong>API</strong> : la prise de branchement par laquelle deux logiciels se parlent.</li>
            <li><strong>Churn</strong> : la part de vos abonnés qui résilient chaque mois.</li>
            <li><strong>TJM</strong> : le taux journalier moyen — le prix d&apos;une journée de développeur.</li>
            <li><strong>Régie / forfait</strong> : en régie, vous payez le temps passé (risque de dépassement pour vous) ; au forfait, prix fixé d&apos;avance sur un périmètre écrit (risque chez le prestataire).</li>
          </ul>
          <p className="mt-2">
            Chaque devis que vous recevrez utilise ces dix mots.
          </p>
        </InfoBox>

        <GuideToc
          items={[
            { id: "reponse-rapide", label: "1. La réponse rapide : les fourchettes 2026" },
            { id: "de-quoi-parle-t-on", label: "2. SaaS, application web, outil métier : de quoi parle-t-on" },
            { id: "profils", label: "3. Le budget selon votre profil : 3 scénarios illustratifs" },
            { id: "etapes", label: "4. La trajectoire des coûts : POC → MVP → V1 → montée en charge" },
            { id: "decomposition", label: "5. Ce que vous payez : postes et taux journaliers 2026" },
            { id: "exploitation", label: "6. Le « run » : les coûts d'exploitation, enfin chiffrés" },
            { id: "ia", label: "7. Ce que l'IA change vraiment dans les budgets (2026)" },
            { id: "no-code", label: "8. No-code : le vrai coût de Bubble et consorts" },
            { id: "devis", label: "9. Un exemple de devis MVP, décortiqué ligne à ligne" },
            { id: "conformite", label: "10. Éditeur SaaS : le budget conformité 2026" },
            { id: "business", label: "11. Combien rapporte un SaaS ? Le calcul fondateur" },
            { id: "erreurs", label: "12. Les 5 erreurs qui coulent les budgets" },
            { id: "methode", label: "13. Méthode : cadrer son budget en 5 étapes" },
          ]}
        />

        <h2 id="reponse-rapide">1. La réponse rapide : les fourchettes 2026</h2>
        <p>
          Pour planifier un premier budget en 2026, notre recoupement
          éditorial retient <strong>5 000 à 15 000 € pour
          un POC</strong> — un prototype volontairement jetable, dont le
          seul but est de prouver que l&apos;idée tient debout face à de
          vrais utilisateurs —, <strong>15 000 à 40 000 € pour un
          MVP</strong> — la première version réduite mais vendable : elle
          encaisse des paiements et sert de vrais clients —,{" "}
          <strong>40 000 à 100 000 € pour une V1 complète</strong> — le
          produit abouti, avec tous les rôles et tous les écrans —, et{" "}
          <strong>100 000 € et plus pour un produit complexe</strong>{" "}
          (IA, temps réel, intégrations lourdes). Retenez la logique : on
          prouve (POC), on vend (MVP), on complète (V1). Ces valeurs ne sont
          ni une médiane ni un échantillon représentatif. Des
          agences publient aussi des offres de MVP entre 40 000 et 80 000 €,
          avec des périmètres variables. Notre grille commerciale démarre à 15 000 € au
          forfait fixe ; la section 9 montre comment se construit un
          exemple illustratif, sans le présenter comme un devis client.
          À ce budget de construction
          s&apos;ajoutent l&apos;exploitation (dès ~150 €/mois dans notre
          scénario, section 6) et la maintenance (hypothèse de planification
          de 15 à 25 % du coût initial par an, à remplacer par un devis).
        </p>
        <GuideTable
          headers={["Étape", "Repère éditorial", "Durée indicative", "Ce que vous obtenez"]}
          rows={[
            ["POC / prototype", "5 000 – 15 000 €", "2 – 4 semaines", "Valider l'idée avec de vrais utilisateurs"],
            ["MVP", "15 000 – 40 000 €", "4 – 8 semaines", "Produit vendable : fonctions essentielles, création de compte et connexion sécurisée, paiement en ligne"],
            ["V1 complète", "40 000 – 100 000 €", "3 – 5 mois", "Plusieurs types de comptes aux droits différents (admin, employé, client), tableaux de bord, connexions à vos autres logiciels (comptabilité, CRM…)"],
            ["SaaS complexe / IA", "100 000 – 150 000 €+", "3 – 6 mois", "IA, temps réel, volumétrie, intégrations lourdes"],
          ]}
        />

        <h2 id="de-quoi-parle-t-on">2. SaaS, application web, outil métier : de quoi parle-t-on</h2>
        <p>
          Trois objets proches techniquement, très différents
          économiquement. L&apos;<strong>outil métier interne</strong>{" "}
          digitalise un processus pour vos équipes : 8 000 à 50 000 €, et
          son ROI se mesure en heures gagnées.
          L&apos;<strong>application web</strong> sert vos clients
          (portail, espace client, plateforme) : 10 000 à 80 000 €. Le{" "}
          <strong>SaaS</strong>, lui, est un produit que vous{" "}
          <em>vendez par abonnement</em>. Concrètement : l&apos;outil
          métier interne, c&apos;est le planning de tournées que votre
          équipe utilise à la place d&apos;Excel ; l&apos;application
          web, c&apos;est l&apos;espace en ligne où vos clients suivent
          leurs commandes et téléchargent leurs factures ; le SaaS,
          c&apos;est ce même outil de planning que vous décidez de vendre
          40 €/mois à d&apos;autres entreprises de votre secteur.
        </p>
        <p>
          Vendre par abonnement change tout. Le budget n&apos;est plus
          une dépense informatique : c&apos;est un investissement
          produit, qui doit prévoir dès le départ trois choses. Le
          prélèvement automatique des abonnements ; la prise en main sans
          assistance (vos clients doivent réussir à démarrer seuls, sans
          formation) ; et le cloisonnement des données —
          chaque client ne voit que les siennes, ce que les devis
          appellent l&apos;architecture « multi-tenant » : un immeuble
          d&apos;appartements privatifs
          plutôt qu&apos;une maison par client. C&apos;est pour cela
          qu&apos;un « petit SaaS » coûte plus cher qu&apos;un « gros
          site » : vous ne payez pas des pages, vous payez une machine à
          encaisser et servir des clients sans vous.
        </p>

        <h2 id="profils">3. Le budget selon votre profil : 3 scénarios illustratifs</h2>
        <h3>Scénario illustratif A — Fondateur : lancer un produit sur le marché</h3>
        <p>
          Votre enjeu : valider vite sans brûler la trésorerie — le
          périmètre exact de notre offre de{" "}
          <Link href="/services/saas-applications-metier">développement
          de SaaS et d&apos;applications métier</Link>.{" "}
          <strong>Trajectoire recommandée : MVP resserré (15 000 à
          25 000 €)</strong>, 3 à 5 fonctionnalités maximum et un seul
          parcours utilisateur soigné. Pour valider la demande, cherchez
          un engagement commercial réel : paiement en ligne lorsque le
          modèle s&apos;y prête, pilote signé ou commande. Si l&apos;incertitude
          est d&apos;abord technique, commencez par le POC de la section 1.
          Gardez au moins autant de budget pour l&apos;acquisition que pour le
          développement (section 11). L&apos;erreur classique du profil A :
          sur-spécifier la V1 avant d&apos;avoir un seul client payant.
        </p>
        <h3>Scénario illustratif B — PME : digitaliser un processus interne</h3>
        <p>
          Remplacer les tableurs, connecter l&apos;existant, fiabiliser.{" "}
          <strong>Budget indicatif : 8 000 à 50 000 €</strong> selon la
          complexité du processus et les intégrations. Cette fourchette est
          un repère éditorial, pas une médiane établie à partir d&apos;un
          corpus de budgets clients. Le ROI se calcule facilement : heures économisées ×
          coût horaire × équipe. Point de vigilance : l&apos;outil interne
          d&apos;aujourd&apos;hui devient parfois le SaaS de demain. Faites
          documenter cette possibilité dans les choix techniques, sans
          financer avant l&apos;heure la gestion de plusieurs clients : une
          architecture trop ambitieuse consommerait le budget que le premier
          usage doit justement valider. Pour ce profil, notre
          offre d&apos;<Link href="/services/outils-internes-sur-mesure">outils
          internes sur mesure</Link> couvre exactement ce périmètre, au
          forfait fixe — et notre guide du{" "}
          <Link href="/guides/prix-logiciel-sur-mesure">prix d&apos;un
          logiciel sur mesure</Link> en détaille toutes les grilles, ROI
          compris.
        </p>
        <h3>Scénario illustratif C — Scale-up : externaliser un module ou accélérer</h3>
        <p>
          Équipe produit en place, besoin d&apos;un module livré vite
          sans désorganiser les développements en cours.{" "}
          <strong>Budget : 40 000 à 150 000 €</strong> selon le
          périmètre, en forfait par lots ou en équipe dédiée.
          L&apos;enjeu n&apos;est plus le prix à la journée mais la
          régularité des livraisons et le respect de vos méthodes de
          travail (vérification du code à plusieurs, tests automatiques,
          règles d&apos;écriture communes). Exigez des références sur les
          technologies que votre équipe utilise déjà, et
          l&apos;engagement écrit que le nouveau module ne cassera rien
          de l&apos;existant.
        </p>

        <InfoBox variant="amber" title="Le bon choix peut être de ne pas développer">
          <p>
            Abonnez-vous à un outil existant s&apos;il couvre le cœur du
            besoin sans déformer votre métier. Testez d&apos;abord avec un
            POC ou du no-code si personne ne s&apos;est encore engagé à
            acheter. Construisez un MVP sur mesure lorsque le produit porte
            votre différence et que des utilisateurs acceptent de le tester.
            Enfin, recrutez en interne si le besoin devient une activité de
            développement continue plutôt qu&apos;un projet à livrer.
          </p>
          <p className="mt-2">
            Un prestataire crédible doit pouvoir recommander l&apos;une de
            ces voies, même lorsque cela signifie ne pas lui demander de
            devis.
          </p>
        </InfoBox>

        <h2 id="etapes">4. La trajectoire des coûts : POC → MVP → V1 → montée en charge</h2>
        <p>
          L&apos;erreur de lecture la plus répandue : comparer le devis
          d&apos;un MVP au budget d&apos;une V1. Un SaaS se construit par
          étapes, chacune validant la suivante. Pensez restauration : le
          POC, c&apos;est le stand du marché (on goûte) ; le MVP, le
          food-truck (on paie) ; la V1, le restaurant (on revient) ; la
          montée en charge (le « scale »), le deuxième établissement.
          Personne n&apos;ouvre trois restaurants avant d&apos;avoir
          vendu une seule assiette — c&apos;est pourtant ce que fait un
          fondateur qui finance une V1 complète sans passer par le MVP.
          Le budget cumulé se pilote palier par palier :
        </p>
        <GuideTable
          headers={["Étape", "Investissement", "Cumul type", "Le critère pour continuer"]}
          rows={[
            ["POC (optionnel)", "5 000 – 15 000 €", "≈ 10 000 €", "Des utilisateurs testent et reviennent"],
            ["MVP", "15 000 – 40 000 €", "≈ 35 000 €", "Des clients paient (même peu, même mal)"],
            ["V1", "+ 25 000 – 60 000 €", "≈ 80 000 €", "Les clients restent : la part d'abonnés qui résilient chaque mois (le « churn ») diminue"],
            ["Montée en charge (scale)", "+ 50 000 €+/an", "selon traction", "Chaque client rapporte plus qu'il ne coûte à trouver et à servir (calcul en section 11)"],
          ]}
        />
        <p>
          Cette logique par paliers est aussi votre meilleure protection
          contractuelle : chaque étape a un livrable, un budget fermé et un
          critère de sortie mesurable. Les études sur les projets
          informatiques sont brutales — les grands projets dépassent leur
          budget de 45 % en moyenne (McKinsey-Oxford) et à peine un tiers
          des projets livrent dans les temps, au budget et au périmètre
          prévus (Standish CHAOS). La cause n° 1 n&apos;est pas technique :
          c&apos;est le périmètre qui enfle. Les paliers l&apos;empêchent
          structurellement. Vous savez <em>quand</em> dépenser ; voyons
          maintenant ce que contient un devis, et à quel prix du jour.
        </p>

        <h2 id="decomposition">5. Ce que vous payez : postes et taux journaliers 2026</h2>
        <p>
          Un budget SaaS se décompose de façon remarquablement stable,
          quel que soit le prestataire :
        </p>
        <GuideTable
          headers={["Poste", "Part du budget", "Ce que ça recouvre"]}
          rows={[
            ["Cadrage et spécifications", "5 – 10 %", "Traduire votre besoin en périmètre écrit et chiffrable"],
            ["Design UX/UI", "10 – 15 %", "La conception des écrans et du parcours d'utilisation"],
            ["Développement front", "25 – 30 %", "Tout ce que l'utilisateur voit et touche à l'écran"],
            ["Développement back", "25 – 35 %", "La mécanique invisible : données, calculs, sécurité"],
            ["Intégrations tierces", "5 – 15 %", "Paiement, e-mails, CRM, outils connectés"],
            ["Tests, mise en production, pilotage", "10 – 15 %", "Ce qui fait qu'on livre sans drame"],
          ]}
        />
        <p>
          Ces fourchettes sont des repères d&apos;allocation, pas des lignes
          à additionner mécaniquement : un produit riche en connexions
          externes déplacera du budget vers les intégrations ; un parcours
          public exigeant, vers le design et le front. Demandez au
          prestataire d&apos;expliquer les écarts de votre devis par rapport à
          cette grille.
        </p>
        <p>
          Les taux journaliers France 2026, pour situer les devis : un
          développeur fullstack senior — il maîtrise les deux faces,
          visible et invisible — facture 450 à 600 €/jour à Paris, 400 à
          500 € en région (baromètre SILKHOM ; moyenne toutes zones
          ≈ 550 €) ; un product designer confirmé, 450 à 700 €/jour ; un
          DevOps senior (le spécialiste des serveurs et de la mise en
          ligne), 520 à 650 €/jour. Un MVP sérieux représente 30 à 70
          jours de travail : multipliez par 450 à 650 € la journée, vous
          retombez sur les 15 000 à 40 000 € de la section 1. Ce qui fait
          passer de 30 à 70 jours, dans l&apos;ordre d&apos;impact : le
          nombre de types d&apos;utilisateurs, les fonctionnalités temps
          réel (chat, collaboration simultanée), le nombre
          d&apos;intégrations tierces et le niveau de finition du design.
          Un devis sans détail des jours par poste n&apos;est pas
          comparable : exigez la décomposition.
        </p>
        <p>
          L&apos;équipe type d&apos;un MVP n&apos;est pas une armée : un
          développeur fullstack senior qui porte le produit, du design en
          renfort ponctuel, un pilotage léger. L&apos;équipe au complet
          (plusieurs développeurs, un chef de produit dédié, un testeur
          qualité) ne se justifie qu&apos;à partir de la V1. Et
          l&apos;option « recruter en interne » ? Comptez 55 000 à
          75 000 €/an chargés pour un profil senior : rentable quand la
          charge devient continue, rarement pour un premier MVP.
        </p>
        <p>
          Le bon modèle de réalisation dépend surtout de ce que vous devez
          sécuriser :
        </p>
        <GuideTable
          headers={["Mode", "À choisir lorsque", "Arbitrage à vérifier"]}
          rows={[
            ["Freelance senior", "Le périmètre est net et une personne peut porter l'essentiel", "Continuité, design, tests et renfort en cas d'absence"],
            ["Studio ou agence", "Le produit exige plusieurs compétences et un responsable unique", "Composition réelle de l'équipe et sous-traitance éventuelle"],
            ["Équipe interne", "Le développement devient continu et stratégique", "Temps de recrutement, management technique et charge durable"],
            ["No-code accompagné", "L'objectif immédiat est de tester une hypothèse", "Dépendance à la plateforme et coût d'une future réécriture"],
          ]}
        />

        <h2 id="exploitation">6. Le « run » : les coûts d&apos;exploitation, enfin chiffrés</h2>
        <InfoBox variant="blue" title="En clair : le « build » et le « run »">
          Le <strong>build</strong>, c&apos;est la construction du
          produit : payé une fois. Le <strong>run</strong>, c&apos;est
          tout ce qui le fait tourner ensuite — hébergement, services,
          correctifs : payé chaque mois, tant que le produit existe.
          Comme une voiture : prix d&apos;achat d&apos;un côté ;
          carburant, assurance et révisions de l&apos;autre. Personne
          n&apos;achète une voiture en pensant qu&apos;elle roulera
          gratuitement — c&apos;est pourtant l&apos;hypothèse implicite
          de la plupart des business plans de SaaS que nous recevons.
        </InfoBox>
        <p>
          Voici un <strong>scénario budgétaire illustratif</strong> pour
          l&apos;exploitation mensuelle d&apos;un SaaS à ses débuts
          (« early-stage »), construit à partir des tarifs publics de
          services modernes relevés en juillet 2026. Il ne s&apos;agit pas
          d&apos;une facture client :
        </p>
        <GuideTable
          headers={["Poste", "Service (exemple)", "Coût early-stage"]}
          rows={[
            ["Hébergement front + API", "Vercel Pro", "20 $/mois par siège"],
            ["Base de données", "Neon / Supabase", "0 – 25 $/mois"],
            ["Authentification", "Clerk (50 000 utilisateurs inclus)", "0 – 25 $/mois"],
            ["Abonnements & facturation", "Stripe Billing", "0,7 % du volume encaissé"],
            ["E-mails transactionnels", "Resend / Postmark", "15 – 20 $/mois"],
            ["Monitoring erreurs", "Sentry Team", "26 $/mois"],
            ["Analytics produit", "PostHog (1 M événements inclus)", "0 €"],
            ["Total ordre de grandeur", "—", "≈ 100 – 200 €/mois"],
          ]}
        />
        <p>
          Trois précisions de lecture. Ces services américains facturent
          en dollars : au taux actuel, comptez à peu près le même montant
          en euros. « Par siège » signifie par membre de votre équipe —
          pas par client de votre SaaS : vos milliers
          d&apos;utilisateurs ne changent rien à ce prix-là. Et la ligne
          Stripe Billing, concrètement : 10 000 € d&apos;abonnements
          encaissés dans le mois = 70 €. Attention, ce 0,7 %
          s&apos;ajoute aux frais d&apos;encaissement par carte (environ
          1,5 à 2,9 % selon les cartes) : comptez au total 2 à 3,5 % de
          ce que vous encaissez.
        </p>
        <p>
          Trois enseignements. Un : <strong>l&apos;infrastructure moderne
          reste modeste au démarrage face au coût de construction</strong>{" "}
          — les paliers gratuits couvrent largement les premiers mois.
          Deux : elle grandit avec les revenus, pas avant — les benchmarks
          du secteur la situent à{" "}
          <strong>8-15 % du chiffre d&apos;affaires</strong> d&apos;un
          SaaS (une jeune entreprise en phase de lancement dépense
          typiquement 100 à 500 $/mois d&apos;hébergement). Trois : le
          vrai poste récurrent est humain — la <strong>maintenance et
          les évolutions représentent 15 à 25 % du coût de développement
          initial par an</strong>. Pourquoi payer, alors que le produit
          « marche » ? Parce qu&apos;un logiciel vit dans un
          environnement qui bouge sans lui : navigateurs mis à jour,
          failles découvertes chaque mois, services connectés qui
          changent leurs règles, clients qui demandent des ajustements.
          Ne rien faire pendant un an, ce
          n&apos;est pas économiser : c&apos;est laisser la maison se
          fissurer. Un SaaS à 30 000 € coûte donc 4 500 à 7 500 €/an à
          faire vivre : budgétez-le dès le business plan — un{" "}
          <Link href="/services/maintenance-evolution">contrat de
          maintenance et d&apos;évolution</Link> transforme cette ligne
          floue en montant mensuel écrit.
        </p>
        <p>
          Et à la montée en charge ? À titre de repère indicatif, des
          benchmarks cloud situent le coût mensuel autour de 250 € vers
          1 000 utilisateurs actifs et 450 € vers 5 000 ; ce ne sont pas
          des factures clients publiées. Trois facteurs pèsent plus que le nombre
          d&apos;utilisateurs : le volume de données stockées (fichiers,
          images), les traitements lourds (exports, rapports) et les pics
          d&apos;usage simultané. Le vrai saut arrive avec les grands
          comptes : quand un acheteur exige SOC 2 ou ISO 27001 — des
          certifications de sécurité délivrées après audit indépendant —,
          les plans conformité changent d&apos;échelle (Supabase Team :
          599 $/mois) et un audit s&apos;ajoute. À ce stade, vérifiez que
          les contrats grands comptes couvrent bien ce nouveau niveau de
          coût avant de vous engager.
        </p>

        <h2 id="ia">7. Ce que l&apos;IA change vraiment dans les budgets (2026)</h2>
        <p>
          Le sujet est saturé de promesses (« votre SaaS en une semaine »)
          et de déni. Les données, contradictoires en apparence, racontent
          une histoire cohérente. D&apos;un côté, l&apos;étude contrôlée de
          GitHub mesure des tâches de code standard terminées{" "}
          <strong>55 % plus vite</strong> avec l&apos;assistance IA, et le
          rapport DORA 2025 (90 % d&apos;adoption chez les développeurs)
          conclut que l&apos;IA est un <em>amplificateur</em> : elle
          décuple les bonnes équipes… et les mauvaises. De l&apos;autre,
          l&apos;essai randomisé METR (2025) a surpris tout le monde : sur
          du code complexe et mature, les développeurs expérimentés étaient{" "}
          <strong>19 % plus lents</strong> avec les outils IA — tout en se
          croyant plus rapides.
        </p>
        <p>
          Pourquoi ce paradoxe ? Sur du code standard, l&apos;IA propose
          des solutions déjà vues des milliers de fois : le développeur
          vérifie et avance. Sur un code complexe et ancien, chaque
          suggestion doit être contrôlée, corrigée, adaptée aux règles du
          projet — et ce temps de vérification dépasse le temps gagné à
          l&apos;écriture. L&apos;IA donne une sensation de vitesse ;
          seule la mesure dit la vérité.
        </p>
        <p>
          Traduction budgétaire : l&apos;IA <strong>peut réduire l&apos;effort
          sur certaines tâches standard et bien cadrées</strong> — les écrans classiques de
          création, consultation et modification de fiches (ce que les
          développeurs appellent le « CRUD »), les formulaires, les
          tests, les connexions à des services bien documentés — soit une
          grosse part d&apos;un MVP. Mais elle ne réduit ni le cadrage,
          ni les choix produit, ni l&apos;exigence de fiabilité ; mal
          employée, elle produit vite du code jetable. C&apos;est notre
          modèle : l&apos;IA outillée et encadrée <em>dans</em> une
          équipe senior, avec revue humaine et tests. Notre MVP dès 15 000 €
          relève de notre grille commerciale et de son périmètre ; les études
          citées ne démontrent pas cette différence de prix. La bonne question à poser à un prestataire
          « boosté à l&apos;IA » : non pas « utilisez-vous l&apos;IA ? »
          — tout le monde l&apos;utilise — mais « qui relit chaque ligne
          avant la mise en production ? ». Sans cette revue, vous paierez
          la deuxième fois, en réécriture. Dernier point : si votre
          produit fait lui-même appel à un service d&apos;IA externe —
          via une « API », la prise de branchement
          par laquelle votre logiciel envoie ses requêtes à ChatGPT,
          Claude ou autre —, chaque requête vous est facturée, et mille
          utilisateurs actifs font mille fois plus de requêtes : intégrez
          ce coût dans votre prix d&apos;abonnement dès le départ.
        </p>

        <GuideInlineCTA
          title="Un chiffrage de SaaS honnête, au forfait fixe ?"
          description="Décrivez votre projet en 3 minutes : nous vous répondons personnellement sous 24 h ouvrées avec une fourchette argumentée — périmètre MVP, exploitation et trajectoire par étapes compris."
          tags={["Réponse sous 24 h ouvrées", "MVP dès 15 000 €", "Forfait fixe contractuel"]}
          ctaLabel="Cadrer mon MVP"
        />

        <h2 id="no-code">8. No-code : le vrai coût de Bubble et consorts</h2>
        <p>
          Le no-code désigne des outils (Bubble, FlutterFlow…) qui
          permettent d&apos;assembler une application à la souris, sans
          écrire de code — comme on monte un meuble en kit. C&apos;est le
          bon outil pour <strong>valider une hypothèse</strong> : 2 000 à
          15 000 € de mise en œuvre, quelques semaines, et un vrai
          produit cliquable entre les mains d&apos;utilisateurs. Regardez
          cependant la facture complète avant d&apos;en faire une
          fondation : les plans Bubble vont de 59 $/mois (Starter) à
          549 $/mois (Team), et le coût réel d&apos;une application
          active — la consommation facturée à chaque action de vos
          utilisateurs (« unités de charge »), les modules payants
          (« plugins »), le stockage — se situe couramment{" "}
          <strong>entre 300 et 1 500 $/mois</strong> ; les agences
          spécialisées facturent d&apos;ailleurs leurs projets Bubble
          10 000 à 40 000 $, des tarifs de développement classique.
          Ajoutez la dépendance à la plateforme : vous pouvez conserver vos
          données et vos écrans, mais vous ne maîtrisez ni le moteur
          d&apos;exécution ni toujours la possibilité d&apos;exporter un
          code réutilisable ailleurs. Une réécriture peut donc devenir
          nécessaire au moment de passer à l&apos;échelle. Le no-code reste
          une excellente étape de validation, rarement une économie sur 3
          ans pour un produit durable. Ouvrons maintenant un exemple de
          devis de MVP en code, détaillé poste par poste.
        </p>

        <h2 id="devis">9. Un exemple de devis MVP, décortiqué ligne à ligne</h2>
        <p>
          Pour rendre la mécanique vérifiable, voici un{" "}
          <strong>exemple illustratif</strong> construit poste par poste
          pour un MVP SaaS B2B typique du scénario illustratif A : gestion
          d&apos;abonnements, tableau de bord client et un parcours cœur
          soigné. Ce n&apos;est ni un devis client publié ni une promesse de
          prix pour tout projet. Taux journalier retenu : 650 € HT.
        </p>
        <FormulaBox>
          <strong>Devis « MVP SaaS B2B » — 35 jours, 22 750 € HT</strong>
          <br />
          Cadrage & Discovery Sprint (2 j) — 1 300 €
          <br />
          Design system, UX et maquettes du parcours cœur (6 j) — 3 900 €
          <br />
          Front applicatif Next.js : app, tableau de bord (9 j) — 5 850 €
          <br />
          Back : API, modèle de données, logique métier (9 j) — 5 850 €
          <br />
          Authentification + abonnements Stripe Billing (4 j) — 2 600 €
          <br />
          Tests, CI/CD, monitoring, durcissement (3 j) — 1 950 €
          <br />
          Mise en production + transfert de propriété (2 j) — 1 300 €
        </FormulaBox>
        <p>
          Cet exemple applique le taux journalier ligne par ligne : son
          cadrage ressort donc à 1 300 €. Le Discovery Sprint forfaitaire
          présenté en section 13 est l&apos;offre actuelle à 1 500 €,
          déduite si le projet se lance. Les deux montants décrivent des
          cadres commerciaux différents, pas deux prix simultanés pour la
          même prestation.
        </p>
        <InfoBox variant="emerald" title="Traduction ligne à ligne, pour non-développeurs">
          <strong>Cadrage &amp; Discovery Sprint</strong> : deux jours
          pour écrire noir sur blanc ce qui sera construit.{" "}
          <strong>Design system, UX et maquettes</strong> : les écrans
          dessinés et validés avant de coder. <strong>Front</strong> : ce
          que vos clients voient. <strong>Back</strong> : la mécanique
          invisible (données, calculs, sécurité). <strong>Tests, CI/CD,
          monitoring, durcissement</strong> : les vérifications
          automatiques, la chaîne de mise en ligne sans fausse manœuvre,
          la surveillance des pannes et le renforcement de la sécurité —
          ces 3 jours « invisibles » font qu&apos;une erreur en
          production vous est signalée avant que vos clients ne la
          voient. <strong>Transfert de propriété</strong> : le contrat
          cède les développements créés pour vous et la livraison remet le
          code, la documentation et les accès. Les bibliothèques et services
          tiers restent soumis à leurs propres licences.
        </InfoBox>
        <p>
          Ce que cet exemple illustratif de devis vous apprend. Le code du front — la partie
          interactive que vous voyez à l&apos;écran — <strong>ne pèse
          qu&apos;un peu plus d&apos;un quart du budget</strong> : tout le
          reste (conception, moteur de données, paiements,
          tests, mise en ligne) est invisible, mais c&apos;est lui qui
          fait qu&apos;un produit encaisse sans bug et se déploie sans
          drame — précisément ce que les offres low-cost escamotent.
          Chaque ligne est en jours : c&apos;est ce qui rend les devis
          comparables (envoyez le même{" "}
          <Link href="/guides/cahier-des-charges-site-internet">cahier des
          charges</Link> à tous les prestataires). Et la dernière ligne
          compte double : <strong>transfert de propriété</strong> — code
          créé pour vous, documentation et accès aux comptes
          d&apos;infrastructure. Si vous ne pouvez pas faire reprendre le
          produit par une autre équipe, vous ne maîtrisez pas réellement
          votre actif.
        </p>

        <h2 id="conformite">10. Éditeur SaaS : le budget conformité 2026</h2>
        <p>
          Vendre un SaaS fait de vous un éditeur, avec quatre obligations
          que les pages de prix ignorent — du plus universel au plus
          spécifique :
        </p>
        <ul>
          <li>
            <strong>RGPD (tout le monde).</strong> Votre rôle dépend de ce
            que vous faites des données. Vous êtes généralement
            <em> sous-traitant</em> pour les données métier traitées sur
            instruction d&apos;un client ; vous pouvez être responsable du
            traitement pour vos propres fichiers de comptes, de facturation
            ou de prospection. Le premier rôle impose le contrat prévu à
            l&apos;article 28 du RGPD — souvent appelé « DPA » — avec
            sécurité, sous-traitants ultérieurs et sort des données en fin
            de contrat. Faites cartographier les rôles au lieu de coller la
            même étiquette sur tous les traitements. C&apos;est un passage
            obligé des ventes B2B : comptez 1 500 à 5 000 €
            d&apos;accompagnement juridique pour un premier jeu de
            documents propres, à prévoir dès la V1.
          </li>
          <li>
            <strong>Facturation électronique (tout le monde).</strong>{" "}
            Vous devez pouvoir recevoir des factures électroniques au 1er
            septembre 2026, et vos propres factures d&apos;abonnement B2B
            basculeront dans le système (émission PME : septembre 2027).
            Coût quasi nul si votre outil de facturation est prêt —
            vérifiez-le.
          </li>
          <li>
            <strong>AI Act (si votre produit intègre de
            l&apos;IA).</strong> Les obligations dépendent de l&apos;usage
            exact et de votre rôle dans la chaîne. Le recrutement, le crédit
            ou la santé peuvent faire entrer le système dans une catégorie
            à haut risque. Le calendrier européen ayant déjà évolué,
            vérifiez le texte consolidé au moment de budgéter au lieu
            d&apos;appliquer une ligne « AI Act » identique à tout produit.
          </li>
          <li>
            <strong>Données de santé (secteur santé).</strong> Si votre
            produit en traite, l&apos;hébergement doit être certifié
            « Hébergeur de Données de Santé » (HDS) : un surcoût
            structurel de plusieurs centaines d&apos;euros par mois, à
            inscrire au business plan dès le premier jour.
          </li>
        </ul>
        <p>
          Ces quatre lignes ne sont pas des options : elles se budgètent
          avec le développement. Le volet technique — chiffrement,
          journalisation, registre des traitements, sort des données en
          fin de contrat — est l&apos;objet de notre offre{" "}
          <Link href="/services/securite-rgpd">sécurité et conformité
          RGPD</Link> ; le volet contractuel, lui, relève de votre
          avocat.
        </p>

        <h2 id="business">11. Combien rapporte un SaaS ? Le calcul fondateur</h2>
        <p>
          Le développement n&apos;est que la moitié de l&apos;équation —
          voici celle qui décide de la rentabilité. L&apos;image la plus
          simple est la baignoire : l&apos;acquisition, c&apos;est le
          robinet ; le churn — la part de vos abonnés qui résilient
          chaque mois —, c&apos;est la bonde mal fermée. À quoi bon payer
          pour remplir une baignoire percée ? Les fondateurs expérimentés
          regardent la fuite avant le robinet.
        </p>
        <p>
          La marge brute d&apos;un SaaS est excellente (médiane du
          secteur : ~77 %), mais deux chiffres la conditionnent.{" "}
          <strong>L&apos;acquisition</strong> : le benchmark 2025 mesure
          en médiane <strong>2 $ de dépenses commerciales et marketing
          pour 1 $ de revenu annuel nouveau</strong>. En clair, dans un
          scénario simplifié, un client à 50 €/mois vous rapporte
          600 € par an ; à raison de
          2 € dépensés pour 1 € de revenu annuel, il faut donc environ
          1 200 € de prospection et de publicité pour gagner ce client.{" "}
          <strong>La rétention</strong> : le churn mensuel courant est de
          3 à 5 % pour un SaaS vendu aux TPE-PME (1,5 à 3 % en
          mid-market, 1 à 2 % en grands comptes) — à 4 % par mois, la
          composition mensuelle laisse environ 61 % de la base après douze
          mois (0,96¹² ≈ 0,61) : vous perdez donc environ 39 % des clients
          sur un an, qu&apos;il faut remplacer avant même de croître.
        </p>
        <FormulaBox>
          <strong>Le calcul de survie, en trois lignes</strong>
          <br />
          1. Combien de temps un client reste-t-il ? Avec 4 % de churn
          mensuel, il reste en moyenne 25 mois (100 ÷ 4).
          <br />
          2. Combien rapporte-t-il en tout ? 50 €/mois × 25 mois =
          1 250 € de chiffre d&apos;affaires. Avec l&apos;hypothèse de 77 % de
          marge brute citée plus haut, la valeur contributive est d&apos;environ
          962,50 €.
          <br />
          3. Comparez cette valeur après marge brute au coût
          d&apos;acquisition. Le ratio de 3× est un repère de pilotage souvent
          utilisé, pas une loi universelle.
        </FormulaBox>
        <p>
          Pourquoi 3, et pas simplement 1 ? Parce qu&apos;un client ne
          rapporte pas que de la marge : sur sa valeur totale, il faut
          encore payer les serveurs, le support et les frais fixes de
          l&apos;entreprise. À 3 fois son coût d&apos;acquisition, il
          finance sa part de tout le reste — et laisse de quoi croître.
          Reprenez l&apos;exemple : 962,50 € de valeur après marge brute face
          à 1 200 € d&apos;acquisition donnent un ratio d&apos;environ 0,80×.
          Ramenez le churn à 2 % et le même client reste en moyenne 50 mois :
          son chiffre d&apos;affaires cumulé atteint 2 500 €, soit 1 925 €
          après l&apos;hypothèse de marge brute — environ 1,60× le CAC de
          1 200 €. C&apos;est une nette amélioration, mais le ratio reste sous
          le repère de 3× : la rétention seule ne suffit donc pas encore dans
          ce scénario. La
          rétention est le levier n° 1, avant le prix du développement.
          Faites ce calcul <em>avant</em> de développer : il coûte zéro
          euro et invalide plus de projets que la technique.
        </p>
        <p>
          Ce même calcul tranche aussi le « développer ou
          s&apos;abonner » : si un outil du marché couvre 80 % du besoin,
          abonnez-vous d&apos;abord ; développez quand l&apos;outil
          devient votre avantage concurrentiel ou que les abonnements
          cumulés dépassent un développement amorti sur 3-4 ans. La
          variante « construire soi-même sans coder » se chiffre de la même
          façon : notre{" "}
          <Link href="/guides/no-code-ou-sur-mesure">comparatif no-code ou
          sur-mesure</Link> donne les tarifs relevés et les plafonds
          contractuels des principales plateformes.
        </p>

        <h2 id="erreurs">12. Les 5 erreurs qui coulent les budgets</h2>
        <ol>
          <li>
            <strong>Sur-spécifier la V1.</strong> Le rapport Pendo 2019
            observe une forte sous-utilisation sur son propre échantillon.
            Ce résultat ancien illustre le risque sans prédire votre produit ;
            les paliers de la section 4 servent à le tester. Un MVP qui embarque
            « tout » est une V1 payée au prix fort sans validation.
          </li>
          <li>
            <strong>Signer « en régie » sans périmètre.</strong> En
            régie, vous payez le temps passé, à la journée (le « TJM » :
            taux journalier moyen) — le risque de dépassement est donc
            entièrement chez vous, comme dans un taxi au compteur. Le
            forfait, c&apos;est la course à prix fixe : le chauffeur
            s&apos;engage avant de démarrer, à condition de connaître la
            destination exacte. Au budget fermé, exigez le forfait sur
            périmètre écrit.
          </li>
          <li>
            <strong>Oublier le run et l&apos;acquisition.</strong> Le
            développement représente souvent moins de la moitié du coût
            réel de la première année — maintenance (15-25 %/an),
            exploitation, et surtout marketing : comptez 2 € de dépenses
            commerciales pour chaque euro d&apos;abonnement annuel gagné
            (l&apos;« ARR », le revenu annuel récurrent).
          </li>
          <li>
            <strong>Ignorer la conformité jusqu&apos;au premier client
            grand compte.</strong> Le DPA, la sécurité et la facturation
            électronique se conçoivent en amont ; rattrapés sous la
            pression d&apos;une signature, ils peuvent retarder la vente et
            imposer des travaux non budgétés.
          </li>
          <li>
            <strong>Comparer des devis à périmètres différents.</strong>{" "}
            L&apos;écart entre 12 000 € et 45 000 € mesure surtout des
            périmètres différents. Un{" "}
            <Link href="/guides/cahier-des-charges-site-internet">cahier
            des charges</Link> commun, envoyé à l&apos;identique, rend les
            chiffres comparables.
          </li>
        </ol>

        <InfoBox variant="amber" title="Scénario illustratif : trois devis incomparables">
          Dans ce cas fictif, un fondateur compare trois devis illustratifs :
          8 000 € (freelance,
          « tout compris »), 28 000 € (agence) et 60 000 € (ESN — les
          grandes sociétés de services informatiques, qu&apos;on appelait
          autrefois SSII). Une fois les périmètres explicités, le premier
          ne couvre ni les
          tests, ni la mise en production, ni la propriété du code ; le
          troisième inclut six mois de fonctionnalités sans client pour
          les valider. Dans cette simulation, le périmètre MVP tient en
          35 jours.
          Moralité : aucun de ces trois chiffres n&apos;est « faux » —
          ils ne parlaient simplement pas du même produit. Le cadrage
          coûte 2 jours ; l&apos;absence de cadrage coûte 20 000 €.
        </InfoBox>

        <InfoBox variant="emerald" title="Les 10 questions à poser avant de signer un devis SaaS">
          <ol className="list-decimal pl-4 space-y-1">
            <li>Le devis détaille-t-il les jours par poste ? (Sinon, il n&apos;est pas comparable.)</li>
            <li>Le prix est-il un forfait fixe sur un périmètre écrit, ou une estimation au temps passé ?</li>
            <li>Le code m&apos;appartiendra-t-il intégralement, contrat à l&apos;appui ?</li>
            <li>Qui détient les accès (hébergement, nom de domaine, base de données) à la livraison ?</li>
            <li>Les tests et la mise en production sont-ils inclus ?</li>
            <li>Que couvre la garantie après livraison, et combien de temps ?</li>
            <li>Combien coûtera la maintenance annuelle ?</li>
            <li>Quels frais mensuels d&apos;exploitation dois-je prévoir dès le premier mois ?</li>
            <li>Qui gère le contrat de protection des données (DPA) exigé par mes futurs clients ?</li>
            <li>Si nous arrêtons en cours de route, qu&apos;est-ce que je récupère, et en quel état ?</li>
          </ol>
          <p className="mt-2">
            Un prestataire sérieux répond aux dix sans se froisser.
          </p>
        </InfoBox>

        <InfoBox variant="blue" title="À retenir : les cinq chiffres de ce guide">
          <ol className="list-decimal pl-4 space-y-1">
            <li>Un MVP sérieux : 15 000 à 40 000 €, soit 30 à 70 jours de travail — tout devis très en dessous cache un périmètre réduit.</li>
            <li>L&apos;exploitation démarre autour de 150 €/mois et grandit avec vos revenus.</li>
            <li>La maintenance pèse 15 à 25 % du coût de développement chaque année.</li>
            <li>Acquérir un client : 2 $ de marketing pour 1 $ d&apos;abonnement annuel — prévoyez autant pour vendre que pour construire.</li>
            <li>Un churn de 4 % par mois fait perdre environ 39 % de la base en un an : la rétention est votre levier n° 1.</li>
          </ol>
          <p className="mt-2">
            Une seule chose à faire après cette lecture : posez le calcul
            fondateur de la section 11 sur une feuille, avant de demander
            le moindre devis.
          </p>
        </InfoBox>

        <h2 id="methode">13. Méthode : cadrer son budget en 5 étapes</h2>
        <ol>
          <li>
            <strong>Faites le calcul fondateur d&apos;abord</strong> —
            churn, acquisition, valeur client (section 11). S&apos;il ne
            passe pas sur le papier, le développement ne le sauvera pas.
          </li>
          <li>
            <strong>Coupez le périmètre au MVP strict</strong> — 3 à 5
            fonctionnalités, un parcours qui encaisse. Tout le reste est
            une hypothèse à valider avec l&apos;argent des clients, pas le
            vôtre.
          </li>
          <li>
            <strong>Rédigez un cahier des charges produit</strong> — des
            « user stories » (une phrase simple par besoin, du point de
            vue de l&apos;utilisateur : « en tant que client, je peux
            télécharger ma facture » — une vingtaine suffisent pour un
            MVP), les types d&apos;utilisateurs et leurs droits, les
            logiciels à connecter, les exigences particulières. Notre{" "}
            <Link href="/ressources/kit-cahier-des-charges-site-internet">modèle
            commenté</Link> s&apos;adapte en version SaaS — envoyez-le à
            l&apos;identique à 3 prestataires. Pour chaque besoin,
            ajoutez le résultat observable et la personne qui validera
            qu&apos;il fonctionne : vous comparerez alors des livrables,
            pas des promesses.
          </li>
          <li>
            <strong>Comparez en coût année 1 complet</strong> —
            développement + exploitation + maintenance + conformité +
            acquisition, pas en devis de construction seul (tableau
            ci-dessous).
          </li>
          <li>
            <strong>Contractualisez par paliers au forfait</strong> —
            budget fermé, livrable et critère de sortie à chaque étape,
            propriété du code écrite noir sur blanc.
          </li>
        </ol>

        <h3>Budget de l&apos;année 1 : un scénario complet illustratif</h3>
        <p>
          Dans ce scénario budgétaire illustratif, la construction
          représente environ la moitié du coût total de la première année ;
          elle passe sous cette moitié
          dès que l&apos;acquisition et la conformité se situent dans le
          haut de leurs fourchettes. Voici le calcul appliqué à l&apos;exemple
          illustratif de devis de la section 9 :
        </p>
        <GuideTable
          headers={["Poste de l'année 1", "Budget"]}
          rows={[
            ["Construction du MVP (scénario illustratif de la section 9)", "22 750 €"],
            ["Exploitation (hébergement, e-mails, surveillance)", "≈ 150 €/mois, soit 1 800 €"],
            ["Maintenance et petites évolutions (15-25 % du développement)", "3 400 – 5 700 €"],
            ["Conformité (protection des données, conditions de vente)", "1 500 – 5 000 €"],
            ["Acquisition des clients (le poste que tout le monde oublie)", "15 000 – 25 000 €"],
            ["Total année 1 de ce scénario", "45 000 – 60 000 €"],
          ]}
        />
        <p>
          C&apos;est ce chiffre-là, pas le devis de construction,
          qu&apos;il faut avoir en tête.
        </p>

        <h3>Un budget qui se finance en partie : les aides françaises</h3>
        <p>
          Un budget de développement ne se lit pas brut : en France, une
          partie se finance. La <strong>Bourse French Tech</strong>{" "}
          (Bpifrance) : jusqu&apos;à 30 000 € de subvention pour
          l&apos;amorçage (étude, prototype, MVP), sans dilution ni
          remboursement. Le <strong>Crédit d&apos;Impôt
          Innovation</strong> (CII) : 20 % des dépenses de conception de
          produits nouveaux, réservé aux PME, prorogé jusqu&apos;à fin
          2027 — un MVP facturé 25 000 € par un prestataire agréé CII
          peut revenir à 20 000 € nets. Le <strong>Crédit d&apos;Impôt
          Recherche</strong> (CIR, 30 %) est plus exigeant : un SaaS
          « standard » n&apos;est pas de la R&D au sens fiscal. Le{" "}
          <strong>statut JEI</strong> exonère de charges sociales les
          salaires affectés à la R&D.
          Deux précautions : ces aides s&apos;instruisent lentement (6 à
          12 mois — n&apos;en faites pas votre trésorerie de lancement),
          et l&apos;agrément CII du prestataire conditionne
          l&apos;éligibilité de ses factures : posez la question dès le
          devis. Notre guide des{" "}
          <Link href="/guides/aides-creation-site-internet">aides à la
          création de site internet</Link> détaille ces dispositifs.
        </p>
        <p>
          C&apos;est le déroulé exact de notre méthode : un{" "}
          <strong>Discovery Sprint (1 500 €, 2 jours, déduit à 100 % si le
          projet se lance)</strong> qui produit périmètre écrit, prototype
          cliquable et devis au forfait fixe — puis un MVP prêt pour la
          mise en ligne, utilisable par de vrais clients payants
          (« production-ready »), dès 15 000 €, livré en 3 à 6 semaines,
          dates contractuelles (méthode{" "}
          <Link href="/methode">Sprint Fixe™</Link>).{" "}
          <Link href="/demarrer-un-projet">Décrivez votre projet en
          3 minutes</Link> : réponse personnelle sous 24 h ouvrées, gratuite
          et sans engagement. Pour situer votre projet dans le paysage
          des budgets web, nos guides{" "}
          <Link href="/guides/combien-coute-un-site-internet">« combien
          coûte un site internet »</Link> et{" "}
          <Link href="/guides/combien-coute-une-application-mobile">« combien
          coûte une application mobile »</Link> complètent celui-ci — et
          si votre SaaS appelle une app mobile compagnon, notre{" "}
          <Link href="/guides/react-native-ou-flutter">comparatif React
          Native ou Flutter</Link> éclaire le choix technique.
        </p>

        <hr />
        <p className="text-sm">
          <strong>Sources</strong> — références citées dans ce guide
          (consultées en juillet 2026) : baromètres TJM France 2025-2026 (
          <a href="https://www.silkhom.com/barometre-des-tjm-informatique-electronique-digital/" target="_blank" rel="noopener noreferrer">SILKHOM</a>,
          Malt, TJMètre — 19 501 observations) ; tarifs officiels{" "}
          <a href="https://vercel.com/pricing" target="_blank" rel="noopener noreferrer">Vercel</a>,{" "}
          <a href="https://neon.com/pricing" target="_blank" rel="noopener noreferrer">Neon</a>,{" "}
          <a href="https://supabase.com/pricing" target="_blank" rel="noopener noreferrer">Supabase</a>,{" "}
          <a href="https://clerk.com/pricing" target="_blank" rel="noopener noreferrer">Clerk</a>,{" "}
          <a href="https://stripe.com/fr/billing/pricing" target="_blank" rel="noopener noreferrer">Stripe Billing</a>,{" "}
          <a href="https://sentry.io/pricing/" target="_blank" rel="noopener noreferrer">Sentry</a>,{" "}
          <a href="https://posthog.com/pricing" target="_blank" rel="noopener noreferrer">PostHog</a>,{" "}
          <a href="https://bubble.io/pricing" target="_blank" rel="noopener noreferrer">Bubble</a> ;{" "}
          <a href="https://www.cnil.fr/fr/rgpd-comment-bien-identifier-son-role" target="_blank" rel="noopener noreferrer">CNIL, identifier les rôles RGPD</a> ;{" "}
          <a href="https://www.economie.gouv.fr/tout-savoir-sur-la-facturation-electronique-pour-les-entreprises" target="_blank" rel="noopener noreferrer">ministère de l&apos;Économie, calendrier de la facturation électronique</a> ;{" "}
          <a href="https://commission.europa.eu/news-and-media/news/ai-act-enters-force-2024-08-01_fr" target="_blank" rel="noopener noreferrer">Commission européenne, règlement sur l&apos;IA</a> ;{" "}
          <a href="https://dora.dev/dora-report-2025/" target="_blank" rel="noopener noreferrer">rapport DORA 2025 (State of AI-assisted Software Development)</a> ;{" "}
          <a href="https://arxiv.org/abs/2302.06590" target="_blank" rel="noopener noreferrer">étude contrôlée GitHub Copilot (Peng et al., 2023)</a> ;{" "}
          <a href="https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/" target="_blank" rel="noopener noreferrer">essai randomisé METR (2025)</a> ;
          benchmarks SaaS 2025 (Benchmarkit : CAC ; SaaS Capital / CloudZero :
          marges et coûts cloud ; Optifai : churn) ; étude Pendo (2019)
          sur l&apos;usage réel des fonctionnalités ; dispositifs
          d&apos;aides : Bpifrance Création, loi de finances 2025 ;{" "}
          <a href="https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/delivering-large-scale-it-projects-on-time-on-budget-and-on-value" target="_blank" rel="noopener noreferrer">McKinsey-Oxford, grands projets IT</a> ;
          rapports Standish CHAOS ; fourchettes de marché : recoupement de
          10 pages françaises 2026 (Lonestone, Polara Studio, Codiceo,
          Scroll, Genee, EID Lab…). Les tarifs des services évoluent :
          vérifiez les pages officielles avant de budgéter.
        </p>
        <p className="text-sm">
          <em>
            Les fourchettes de ce guide sont des repères éditoriaux issus
            des sources indiquées, donnés à titre indicatif : seul un devis
            établi sur votre
            périmètre vous engage. Ce guide ne constitue pas un conseil
            juridique, fiscal ou financier personnalisé.
          </em>
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
