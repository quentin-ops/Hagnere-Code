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
  wordCount: 4200,
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
      "Les fourchettes du marché français : 5 000 à 15 000 € pour un POC qui valide l'idée, 15 000 à 40 000 € pour un MVP fonctionnel (les agences traditionnelles facturent plutôt 40 000 à 80 000 €), 40 000 à 100 000 € pour une V1 complète multi-rôles, et 100 000 € et plus pour un SaaS complexe avec IA, temps réel ou intégrations lourdes. Chez Hagnéré Code, un MVP production-ready démarre à 15 000 €, livré en 3 à 6 semaines au forfait fixe.",
  },
  {
    question: "Combien coûte un MVP de SaaS ?",
    answer:
      "Le marché français observe 8 000 à 35 000 € selon les baromètres, avec un cœur de marché entre 15 000 et 40 000 € pour un produit fonctionnel, bien designé et testable par de vrais utilisateurs. En dessous de 8 000 €, vous achetez généralement un prototype sur template ou no-code — utile pour valider une idée, rarement une base saine pour construire. Le vrai critère n'est pas le prix mais ce qu'il couvre : cadrage, design, code testé, mise en production et transfert de propriété.",
  },
  {
    question: "Combien de temps faut-il pour développer un SaaS ?",
    answer:
      "Avec une équipe senior : 2 à 4 semaines pour un POC, 4 à 8 semaines pour un MVP bien cadré (jusqu'à 14 semaines s'il est complexe), 3 à 5 mois pour une V1 complète en production. Le facteur qui allonge le plus les délais n'est pas la technique : ce sont les décisions produit qui traînent. Un interlocuteur qui tranche en 24 h fait gagner des semaines.",
  },
  {
    question: "Peut-on créer un SaaS avec l'IA (ChatGPT, Claude) ?",
    answer:
      "Générer une démo, oui — et c'est bluffant. Un produit en production qui encaisse des paiements, protège des données clients et tient la charge, c'est une autre affaire : la recherche 2025 montre que l'IA accélère fortement le code standard (+55 % sur des tâches cadrées, étude contrôlée GitHub) mais peut ralentir les développeurs sur du code complexe (étude METR : -19 %). L'approche qui fonctionne : l'IA industrialisée dans le processus d'une équipe senior, avec revue humaine de chaque ligne — c'est ce qui nous permet un MVP dès 15 000 € sans sacrifier la fiabilité.",
  },
  {
    question: "Peut-on créer un SaaS en no-code (Bubble) ?",
    answer:
      "Pour valider une hypothèse, oui : comptez 2 000 à 15 000 € de développement. Mais regardez le coût récurrent : les plans Bubble vont de 59 à 549 $/mois, et le coût réel d'une application active se situe souvent entre 300 et 1 500 $/mois (unités de charge, plugins, stockage). À l'échelle, beaucoup de projets no-code se réécrivent en code — en payant deux fois. Bon outil de test, rarement une fondation.",
  },
  {
    question: "Combien coûte l'hébergement et l'infrastructure d'un SaaS ?",
    answer:
      "Beaucoup moins qu'on ne le croit au début : un SaaS early-stage sur une stack moderne (Vercel ~20 $/mois, base de données Neon ou Supabase 0 à 25 $/mois, authentification Clerk gratuite jusqu'à 50 000 utilisateurs, e-mails ~20 $/mois, monitoring ~26 $/mois) tourne pour 100 à 200 €/mois. Les benchmarks du secteur situent l'infrastructure à 8-15 % du chiffre d'affaires d'un SaaS — elle grandit avec vos revenus, pas avant.",
  },
  {
    question: "Quel est le coût de maintenance d'un SaaS ?",
    answer:
      "Le standard sectoriel : 15 à 25 % du coût de développement initial par an, en comptant correctifs, mises à jour de sécurité et petites évolutions. Un SaaS n'est jamais « fini » : c'est un produit vivant, avec des dépendances à tenir à jour et des retours clients à intégrer. Budgétez le run dès le départ — c'est l'oubli n° 1 des business plans que nous recevons.",
  },
  {
    question: "Faut-il un développeur pour créer un SaaS ?",
    answer:
      "Pour un vrai produit commercialisé, oui — la question est plutôt : interne, freelance ou agence ? Un développeur senior français facture 450 à 650 €/jour (baromètres 2026) ; un MVP représente 30 à 70 jours de travail cumulés. Le freelance est économique mais mono-compétence (design, produit, DevOps restent à couvrir) ; l'agence coûte plus cher mais apporte l'équipe complète et les garanties. Le no-code repousse le besoin, il ne le supprime pas.",
  },
  {
    question: "Est-ce rentable de créer un SaaS ?",
    answer:
      "Le modèle est excellent — marge brute médiane d'environ 77 % — mais la rentabilité se joue sur l'acquisition et la rétention, pas sur le développement : le benchmark 2025 mesure 2 $ de dépenses commerciales et marketing pour acquérir 1 $ d'abonnement annuel, et un churn mensuel de 3 à 5 % pour les SaaS visant les TPE-PME. Concrètement : prévoyez au moins autant de budget pour vendre le produit que pour le construire, et calculez la rétention avant d'écrire une ligne de code.",
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
      "Comptez un surcoût de développement (intégration des modèles, gestion des prompts, garde-fous) : le marché situe un SaaS avec fonctionnalités IA entre 60 000 et 150 000 € en agence classique, contre 25 000 à 60 000 € pour un micro-SaaS IA ciblé. Surtout, ajoutez un coût variable nouveau : les appels aux API d'IA se paient à l'usage et grandissent avec vos utilisateurs — à modéliser dans votre prix de vente dès le départ, comme les commissions de paiement.",
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
      <script type="application/ld+json">{articleJsonLd}</script>
      <script type="application/ld+json">{breadcrumbJsonLd}</script>
      <script type="application/ld+json">{faqJsonLd}</script>

      <GuideLayout
        breadcrumbs={[
          { label: "Guides", href: "/guides" },
          { label: "Combien coûte un SaaS ?" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Les fourchettes réelles du marché français par étape (POC, MVP, V1, scale), les coûts d'exploitation enfin chiffrés poste par poste, ce que l'IA change vraiment dans les budgets 2026 — études contradictoires comprises —, un devis de MVP décortiqué ligne à ligne, et l'économie d'un SaaS (churn, acquisition) que les pages de prix ignorent."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          { number: "01", title: "MVP : 15 000 – 40 000 €", description: "", color: "violet" },
          { number: "02", title: "Exploitation : dès ~150 €/mois", description: "", color: "blue" },
          { number: "03", title: "Devis réel décortiqué", description: "", color: "emerald" },
          { number: "04", title: `Lecture : ${guide.readTimeMin} min`, description: "", color: "amber" },
        ]}
        relatedLinks={[
          { href: "/guides/combien-coute-un-site-internet", label: "Combien coûte un site internet ?" },
          { href: "/guides/combien-coute-une-application-mobile", label: "Prix d'une application mobile" },
          { href: "/guides/cahier-des-charges-site-internet", label: "Modèle de cahier des charges" },
          { href: "/services/saas-applications-metier", label: "Développement SaaS" },
          { href: "/methode", label: "Notre méthode Sprint Fixe™" },
          { href: "/tarifs", label: "Nos tarifs détaillés" },
        ]}
        faqTitle="Prix d'un SaaS : vos questions"
        faqItems={faqItems}
      >
        <p className="lead">
          Les devis de SaaS vont de 5 000 € à 150 000 € pour des projets qui
          se ressemblent — et 73 % des fondateurs non techniques s&apos;y
          perdent. Ce guide remet de l&apos;ordre :{" "}
          <strong>fourchettes réelles par étape, coûts d&apos;exploitation
          chiffrés, impact honnête de l&apos;IA, et un devis de MVP
          décortiqué ligne à ligne</strong>.
        </p>

        <GuideToc
          items={[
            { id: "reponse-rapide", label: "1. La réponse rapide : les fourchettes 2026" },
            { id: "de-quoi-parle-t-on", label: "2. SaaS, application web, outil métier : de quoi parle-t-on" },
            { id: "profils", label: "3. Le budget selon votre profil : 3 scénarios" },
            { id: "etapes", label: "4. La trajectoire des coûts : POC → MVP → V1 → scale" },
            { id: "decomposition", label: "5. Ce que vous payez : postes et taux journaliers 2026" },
            { id: "exploitation", label: "6. Le « run » : les coûts d'exploitation, enfin chiffrés" },
            { id: "ia", label: "7. Ce que l'IA change vraiment dans les budgets (2026)" },
            { id: "no-code", label: "8. No-code : le vrai coût de Bubble et consorts" },
            { id: "devis", label: "9. Un devis de MVP réel, décortiqué ligne à ligne" },
            { id: "conformite", label: "10. Éditeur SaaS : le budget conformité 2026" },
            { id: "business", label: "11. Combien rapporte un SaaS ? Le calcul fondateur" },
            { id: "erreurs", label: "12. Les 5 erreurs qui coulent les budgets" },
            { id: "methode", label: "13. Méthode : cadrer son budget en 5 étapes" },
          ]}
        />

        <h2 id="reponse-rapide">1. La réponse rapide : les fourchettes 2026</h2>
        <p>
          En 2026, développer un SaaS coûte{" "}
          <strong>5 000 à 15 000 € pour un POC qui valide l&apos;idée,
          15 000 à 40 000 € pour un MVP fonctionnel, 40 000 à 100 000 € pour
          une V1 complète, et 100 000 € et plus pour un produit complexe</strong>{" "}
          (IA, temps réel, intégrations lourdes). Les agences traditionnelles
          facturent un MVP 40 000 à 80 000 € ; les équipes qui ont
          industrialisé l&apos;IA dans leur processus livrent le même
          périmètre pour moins — chez Hagnéré Code, un MVP production-ready
          démarre à 15 000 €, au forfait fixe. À ce budget de construction
          s&apos;ajoutent l&apos;exploitation (dès ~150 €/mois, section 6) et
          la maintenance (15 à 25 % du coût initial par an).
        </p>
        <GuideTable
          headers={["Étape", "Budget marché", "Durée", "Ce que vous obtenez"]}
          rows={[
            ["POC / prototype", "5 000 – 15 000 €", "2 – 4 semaines", "Valider l'idée avec de vrais utilisateurs"],
            ["MVP", "15 000 – 40 000 €", "4 – 8 semaines", "Produit vendable : cœur fonctionnel, auth, paiement"],
            ["V1 complète", "40 000 – 100 000 €", "3 – 5 mois", "Multi-rôles, tableau de bord, intégrations"],
            ["SaaS complexe / IA", "100 000 – 150 000 €+", "3 – 6 mois", "IA, temps réel, volumétrie, intégrations lourdes"],
          ]}
        />

        <h2 id="de-quoi-parle-t-on">2. SaaS, application web, outil métier : de quoi parle-t-on</h2>
        <p>
          Trois objets proches techniquement, très différents économiquement.
          L&apos;<strong>outil métier interne</strong> digitalise un
          processus pour vos équipes : 8 000 à 50 000 €, et son ROI se mesure
          en heures gagnées. L&apos;<strong>application web</strong> sert vos
          clients (portail, espace client, plateforme) : 10 000 à 80 000 €.
          Le <strong>SaaS</strong>, lui, est un produit que vous{" "}
          <em>vendez par abonnement</em> — et cela change tout : le budget
          n&apos;est plus une dépense informatique mais un investissement
          produit, qui doit intégrer dès le départ la facturation
          récurrente, l&apos;onboarding en autonomie, la sécurité
          multi-clients et une économie propre (acquisition, rétention —
          section 11). C&apos;est pour cela qu&apos;un « petit SaaS » coûte
          plus cher qu&apos;un « gros site » : vous ne payez pas des pages,
          vous payez une machine à encaisser et servir des clients sans
          vous.
        </p>

        <h2 id="profils">3. Le budget selon votre profil : 3 scénarios</h2>
        <h3>Scénario A — Fondateur : lancer un produit sur le marché</h3>
        <p>
          Votre enjeu : valider vite sans brûler la trésorerie.{" "}
          <strong>Trajectoire recommandée : POC ou MVP resserré (15 000 à
          25 000 €)</strong>, 3 à 5 fonctionnalités maximum, un seul parcours
          utilisateur soigné, paiement en ligne dès le premier jour — un MVP
          qui n&apos;encaisse pas ne valide rien. Gardez au moins autant de
          budget pour l&apos;acquisition que pour le développement (section
          11). L&apos;erreur classique du profil A : sur-spécifier la V1
          avant d&apos;avoir un seul client payant.
        </p>
        <h3>Scénario B — PME : digitaliser un processus interne</h3>
        <p>
          Remplacer les tableurs, connecter l&apos;existant, fiabiliser.{" "}
          <strong>Budget réaliste : 8 000 à 50 000 €</strong> selon la
          complexité du processus et les intégrations (le budget médian
          français d&apos;un logiciel sur mesure est d&apos;environ
          30 000 €). Le ROI se calcule facilement : heures économisées ×
          coût horaire × équipe. Point de vigilance : l&apos;outil interne
          d&apos;aujourd&apos;hui devient parfois le SaaS de demain —
          prévoyez cette option dans l&apos;architecture, elle ne coûte
          presque rien au départ et vaut cher ensuite. Pour ce profil, notre
          offre d&apos;<Link href="/services/outils-internes-sur-mesure">outils
          internes sur mesure</Link> couvre exactement ce périmètre — de
          l&apos;automatisation simple au portail métier complet, au forfait
          fixe.
        </p>
        <h3>Scénario C — Scale-up : externaliser un module ou accélérer</h3>
        <p>
          Équipe produit en place, besoin d&apos;un module livré vite sans
          désorganiser la roadmap. <strong>Budget : 40 000 à 150 000 €</strong>{" "}
          selon le périmètre, en forfait par lots ou en équipe dédiée.
          L&apos;enjeu n&apos;est plus le prix au jour mais la vélocité
          fiable et l&apos;intégration à vos standards (revue de code, CI,
          conventions). Exigez des références sur votre stack et un
          engagement de non-régression.
        </p>

        <h2 id="etapes">4. La trajectoire des coûts : POC → MVP → V1 → scale</h2>
        <p>
          L&apos;erreur de lecture la plus répandue : comparer le devis
          d&apos;un MVP au budget d&apos;une V1. Un SaaS se construit par
          étapes, chacune validant la suivante — et le budget cumulé se
          pilote étape par étape :
        </p>
        <GuideTable
          headers={["Étape", "Investissement", "Cumul type", "Le critère pour continuer"]}
          rows={[
            ["POC (optionnel)", "5 000 – 15 000 €", "≈ 10 000 €", "Des utilisateurs testent et reviennent"],
            ["MVP", "15 000 – 40 000 €", "≈ 35 000 €", "Des clients paient (même peu, même mal)"],
            ["V1", "+ 25 000 – 60 000 €", "≈ 80 000 €", "La rétention tient, le churn baisse"],
            ["Scale", "+ 50 000 €+/an", "selon traction", "L'économie unitaire est positive (section 11)"],
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
          structurellement.
        </p>

        <h2 id="decomposition">5. Ce que vous payez : postes et taux journaliers 2026</h2>
        <p>
          Un budget SaaS se décompose de façon remarquablement stable :{" "}
          <strong>cadrage et spécifications 5-10 %, design UX/UI 10-15 %,
          développement front 25-30 %, développement back 25-35 %,
          intégrations tierces 5-15 %</strong> (paiement, e-mails, CRM), le
          reste en tests, mise en production et gestion de projet. Les taux
          journaliers France 2026, pour situer les devis : développeur
          fullstack JavaScript senior 450-600 €/jour à Paris, 400-500 € en
          région (baromètre SILKHOM ; la moyenne fullstack toutes zones est
          d&apos;environ 550 €) ; product designer confirmé 450-700 €/jour ;
          DevOps senior 520-650 €/jour. Un MVP sérieux représente 30 à 70
          jours de travail cumulés — multipliez, vous retrouvez les
          fourchettes de la section 1. Un devis sans détail des jours par
          poste n&apos;est pas comparable : exigez la décomposition.
        </p>
        <p>
          L&apos;équipe type d&apos;un MVP n&apos;est pas une armée : un
          développeur fullstack senior qui porte le produit, du design en
          renfort ponctuel, un pilotage léger — c&apos;est ce format resserré
          qui tient les budgets de la section 1. La squad complète
          (plusieurs développeurs, PM dédié, QA) ne se justifie qu&apos;à
          partir de la V1. Et l&apos;option « recruter en interne » ?
          Comptez 55 000 à 75 000 €/an chargés pour un profil senior :
          rentable quand la charge de développement devient continue,
          rarement pour construire un premier MVP.
        </p>

        <h2 id="exploitation">6. Le « run » : les coûts d&apos;exploitation, enfin chiffrés</h2>
        <p>
          Aucune page de prix concurrente ne chiffre l&apos;exploitation —
          voici la facture mensuelle réelle d&apos;un SaaS early-stage sur
          une stack moderne (tarifs officiels relevés en juillet 2026) :
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
          Trois enseignements. Un : <strong>l&apos;infrastructure moderne
          coûte presque rien au démarrage</strong> — les paliers gratuits
          couvrent largement les premiers mois ; le cliché du « serveur qui
          ruine » date d&apos;une autre décennie. Deux : elle grandit avec
          les revenus, pas avant — les benchmarks du secteur situent
          l&apos;infrastructure à <strong>8-15 % du chiffre
          d&apos;affaires</strong> d&apos;un SaaS (une startup seed dépense
          typiquement 100 à 500 $/mois de cloud). Trois : le vrai poste
          récurrent est humain — la <strong>maintenance et les évolutions
          représentent 15 à 25 % du coût de développement initial par
          an</strong>. Un SaaS à 30 000 € coûte donc 4 500 à 7 500 €/an à
          faire vivre : budgétez-le dès le business plan.
        </p>
        <p>
          Et à la montée en charge ? Les données de marché situent la
          facture d&apos;infrastructure autour de 250 €/mois vers 1 000
          utilisateurs actifs et 450 €/mois vers 5 000 — une pente douce.
          Le vrai saut arrive avec les clients grands comptes : quand un
          acheteur exige SOC 2 ou ISO 27001, les plans conformité des
          fournisseurs changent d&apos;échelle (Supabase Team : 599 $/mois)
          et un audit s&apos;ajoute. Bonne nouvelle : à ce stade, votre CA
          le finance — c&apos;est le principe du 8-15 %.
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
          Traduction budgétaire honnête : <strong>l&apos;IA écrase le coût
          du code standard</strong> — CRUD, formulaires, tests, intégrations
          documentées, soit une grosse part d&apos;un MVP — mais elle ne
          réduit ni le cadrage, ni les choix produit, ni l&apos;exigence de
          fiabilité ; et mal employée, elle produit vite du code jetable.
          C&apos;est exactement notre modèle : un pipeline IA industrialisé{" "}
          <em>dans</em> une équipe senior, avec revue humaine systématique de
          chaque ligne — ce qui explique un MVP dès 15 000 € là où les
          agences traditionnelles facturent 40 000 € et plus. Méfiez-vous en
          revanche des offres « SaaS complet à 5 000 € en une semaine » sans
          revue ni garantie : vous paierez la deuxième fois, en réécriture.
          Dernier point souvent oublié : si votre produit consomme
          lui-même des API d&apos;IA, ce coût est variable et suit vos
          utilisateurs — modélisez-le dans votre prix de vente dès le
          départ.
        </p>

        <GuideInlineCTA
          title="Un chiffrage de SaaS honnête, au forfait fixe ?"
          description="Décrivez votre projet en 3 minutes : nous vous répondons personnellement sous 24 h ouvrées avec une fourchette argumentée — périmètre MVP, exploitation et trajectoire par étapes compris."
          tags={["Réponse sous 24 h ouvrées", "MVP dès 15 000 €", "Forfait fixe contractuel"]}
        />

        <h2 id="no-code">8. No-code : le vrai coût de Bubble et consorts</h2>
        <p>
          Le no-code (Bubble, FlutterFlow…) est le bon outil pour{" "}
          <strong>valider une hypothèse</strong> : 2 000 à 15 000 € de mise
          en œuvre, quelques semaines, et un vrai produit cliquable entre
          les mains d&apos;utilisateurs. Regardez cependant la facture
          complète avant d&apos;en faire une fondation : les plans Bubble
          vont de 59 $/mois (Starter) à 549 $/mois (Team), et le coût réel
          d&apos;une application active — unités de charge, plugins,
          stockage — se situe couramment <strong>entre 300 et
          1 500 $/mois</strong> ; les agences spécialisées facturent
          d&apos;ailleurs leurs projets Bubble 10 000 à 40 000 $, des tarifs
          de développement classique. Ajoutez la dépendance à la plateforme
          (votre produit ne vous appartient pas, il se loue) et la
          réécriture fréquente en code au moment de passer à
          l&apos;échelle : le no-code est une excellente étape de
          validation, rarement une économie sur 3 ans pour un produit qui
          marche.
        </p>

        <h2 id="devis">9. Un devis de MVP réel, décortiqué ligne à ligne</h2>
        <p>
          Personne ne publie ses devis ; nous, oui — c&apos;est le format de
          toute notre série de guides. Voici, anonymisé, un devis Hagnéré
          Code accepté pour un MVP SaaS B2B typique du scénario A :
          gestion d&apos;abonnements, tableau de bord client, un parcours
          cœur soigné. Taux journalier : 650 € HT.
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
          Ce que ce devis vous apprend. Le <strong>code visible ne pèse
          qu&apos;un quart du budget</strong> : le reste, c&apos;est ce qui
          fait qu&apos;un produit encaisse sans bug et se déploie sans
          drame — précisément ce que les offres low-cost escamotent.
          Chaque ligne est en jours : c&apos;est ce qui rend les devis
          comparables (envoyez le même{" "}
          <Link href="/guides/cahier-des-charges-site-internet">cahier des
          charges</Link> à tous les prestataires). Et la dernière ligne
          compte double : <strong>transfert de propriété</strong> — code,
          infrastructure, accès. Un SaaS dont vous ne possédez pas le code
          n&apos;est pas votre actif, c&apos;est votre loyer.
        </p>

        <h2 id="conformite">10. Éditeur SaaS : le budget conformité 2026</h2>
        <p>
          Vendre un SaaS fait de vous un éditeur, avec des obligations que
          les pages de prix ignorent. <strong>RGPD</strong> : vous devenez{" "}
          <em>sous-traitant</em> de vos clients au sens de l&apos;article
          28 — un accord de traitement des données (DPA) doit être annexé à
          vos CGV, avec registre, sécurité et sort des données en fin de
          contrat ; c&apos;est un passage obligé des ventes B2B, prévoyez-le
          dès la V1. <strong>Facturation électronique</strong> : comme toute
          entreprise française, vous devez pouvoir recevoir des factures
          électroniques au 1er septembre 2026, et vos propres factures
          d&apos;abonnement B2B basculeront dans le système (émission PME :
          septembre 2027) — vérifiez que votre outil de facturation est
          prêt. <strong>AI Act</strong> : si votre produit intègre de
          l&apos;IA, des obligations de transparence s&apos;appliquent (le
          calendrier des systèmes à haut risque a été assoupli par le
          paquet Digital Omnibus adopté en juin 2026 — suivez-le si vous
          touchez au recrutement, au crédit ou à la santé). Et si vous
          traitez des <strong>données de santé</strong> : hébergement
          certifié HDS obligatoire, un surcoût structurel à intégrer au
          business plan dès le premier jour.
        </p>

        <h2 id="business">11. Combien rapporte un SaaS ? Le calcul fondateur</h2>
        <p>
          Le développement n&apos;est que la moitié de l&apos;équation —
          voici l&apos;autre moitié, celle qui décide de la rentabilité. La
          marge brute d&apos;un SaaS est excellente (médiane du secteur :
          ~77 %), mais deux chiffres la conditionnent.{" "}
          <strong>L&apos;acquisition</strong> : le benchmark 2025 mesure en
          médiane <strong>2 $ de dépenses commerciales et marketing pour
          1 $ de revenu annuel nouveau</strong> — en clair, acquérir un
          client à 50 €/mois d&apos;abonnement coûte environ 1 200 €.{" "}
          <strong>La rétention</strong> : le churn mensuel courant est de
          3 à 5 % pour un SaaS vendu aux TPE-PME (1,5 à 3 % en mid-market,
          1 à 2 % en entreprise) — à 4 % par mois, vous perdez près de la
          moitié de vos clients chaque année, qu&apos;il faut remplacer
          avant même de croître.
        </p>
        <p>
          Le calcul de survie tient en trois lignes : revenu moyen par
          client × durée de vie (1/churn) = valeur client ; valeur client ÷
          coût d&apos;acquisition ≥ 3 = modèle viable ; sinon, le produit ne
          finance pas sa croissance. Exemple à 50 €/mois
          d&apos;abonnement : avec 4 % de churn mensuel, un client reste
          en moyenne 25 mois et vaut 1 250 € — face à un coût
          d&apos;acquisition de 1 200 €, le modèle est à peine à
          l&apos;équilibre ; ramenez le churn à 2 % et la valeur client
          double à 2 500 €, le modèle respire. La rétention est le levier
          n° 1, avant le prix du développement. Faites-le <em>avant</em> de développer
          — il coûte zéro euro et invalide plus de projets que la
          technique. C&apos;est aussi lui qui tranche le « build vs buy » :
          si un outil du marché couvre 80 % du besoin, abonnez-vous
          d&apos;abord ; développez quand l&apos;outil devient votre
          avantage concurrentiel ou que les abonnements cumulés dépassent
          un développement amorti sur 3-4 ans.
        </p>

        <h2 id="erreurs">12. Les 5 erreurs qui coulent les budgets</h2>
        <ol>
          <li>
            <strong>Sur-spécifier la V1.</strong> La moitié des
            fonctionnalités développées ne servent presque jamais — et les
            paliers de la section 4 existent précisément pour
            l&apos;éviter. Un MVP qui embarque « tout » est une V1 payée au
            prix fort sans validation.
          </li>
          <li>
            <strong>Signer en régie sans périmètre.</strong> Au TJM, le
            risque de dérive est chez vous : réservez la régie aux équipes
            qui savent piloter des développeurs. Au budget fermé, exigez le
            forfait sur périmètre écrit.
          </li>
          <li>
            <strong>Oublier le run et l&apos;acquisition.</strong> Le
            développement représente souvent moins de la moitié du coût
            réel de la première année — maintenance (15-25 %/an),
            exploitation, et surtout marketing (2 $ pour 1 $ d&apos;ARR).
          </li>
          <li>
            <strong>Ignorer la conformité jusqu&apos;au premier client
            grand compte.</strong> Le DPA, la sécurité et la facturation
            électronique se conçoivent en amont ; rattrapés sous la
            pression d&apos;une signature, ils coûtent triple.
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

        <InfoBox variant="amber" title="Le cas classique">
          Un fondateur arrive avec trois devis : 8 000 € (freelance,
          « tout compris »), 28 000 € (agence) et 60 000 € (ESN). Après
          cadrage, le premier ne couvrait ni les tests, ni la mise en
          production, ni la propriété du code ; le troisième incluait six
          mois de fonctionnalités sans client pour les valider. Le vrai
          périmètre MVP tenait en 35 jours. Moralité : aucun de ces trois
          chiffres n&apos;était « faux » — ils ne parlaient simplement pas
          du même produit. Le cadrage coûte 2 jours ; l&apos;absence de
          cadrage coûte 20 000 €.
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
            <strong>Rédigez un cahier des charges produit</strong> — user
            stories, rôles, intégrations, exigences (notre{" "}
            <Link href="/guides/cahier-des-charges-site-internet">modèle
            commenté</Link> s&apos;adapte en version SaaS) — et envoyez-le
            à l&apos;identique à 3 prestataires.
          </li>
          <li>
            <strong>Comparez en coût année 1 complet</strong> —
            développement + exploitation + maintenance + conformité, pas en
            devis de construction seul.
          </li>
          <li>
            <strong>Contractualisez par paliers au forfait</strong> —
            budget fermé, livrable et critère de sortie à chaque étape,
            propriété du code écrite noir sur blanc.
          </li>
        </ol>
        <p>
          C&apos;est le déroulé exact de notre méthode : un{" "}
          <strong>Discovery Sprint (1 500 €, 2 jours, déduit à 100 % si le
          projet se lance)</strong> qui produit périmètre écrit, prototype
          cliquable et devis au forfait fixe — puis un MVP production-ready
          dès 15 000 €, livré en 3 à 6 semaines, dates contractuelles
          (méthode <Link href="/methode">Sprint Fixe™</Link>).{" "}
          <Link href="/demarrer-un-projet">Décrivez votre projet en
          3 minutes</Link> : réponse personnelle sous 24 h ouvrées, gratuite
          et sans engagement. Et pour situer votre projet dans le paysage
          complet des budgets web, nos guides{" "}
          <Link href="/guides/combien-coute-un-site-internet">« combien
          coûte un site internet »</Link> et{" "}
          <Link href="/guides/combien-coute-une-application-mobile">« combien
          coûte une application mobile »</Link> complètent celui-ci.
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
          <a href="https://dora.dev/dora-report-2025/" target="_blank" rel="noopener noreferrer">rapport DORA 2025 (State of AI-assisted Software Development)</a> ;{" "}
          <a href="https://arxiv.org/abs/2302.06590" target="_blank" rel="noopener noreferrer">étude contrôlée GitHub Copilot (Peng et al., 2023)</a> ;{" "}
          <a href="https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/" target="_blank" rel="noopener noreferrer">essai randomisé METR (2025)</a> ;
          benchmarks SaaS 2025 (Benchmarkit : CAC ; SaaS Capital / CloudZero :
          marges et coûts cloud ; Optifai : churn) ;{" "}
          <a href="https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/delivering-large-scale-it-projects-on-time-on-budget-and-on-value" target="_blank" rel="noopener noreferrer">McKinsey-Oxford, grands projets IT</a> ;
          rapports Standish CHAOS ; fourchettes de marché : recoupement de
          10 pages françaises 2026 (Lonestone, Polara Studio, Codiceo,
          Scroll, Genee, EID Lab…). Les tarifs des services évoluent :
          vérifiez les pages officielles avant de budgéter.
        </p>
        <p className="text-sm">
          <em>
            Les fourchettes de ce guide sont des prix de marché constatés,
            donnés à titre indicatif : seul un devis établi sur votre
            périmètre vous engage. Ce guide ne constitue pas un conseil
            juridique, fiscal ou financier personnalisé.
          </em>
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
