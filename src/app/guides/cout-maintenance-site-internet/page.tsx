import type { Metadata } from "next";
import Link from "next/link";
import { GuideLayout } from "@/components/guides/guide-layout";
import {
  FormulaBox,
  GuideInlineCTA,
  GuideTable,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { WebsiteMaintenanceDecisionDossier } from "@/components/guides/WebsiteMaintenanceDecisionDossier";
import {
  formatGuideDate,
  getGuide,
  guidePath,
  guideRobots,
  guideUrl,
} from "@/lib/guides";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("cout-maintenance-site-internet");

export const metadata: Metadata = {
  title: guide.title,
  description: guide.metaDescription,
  authors: [{ name: "Quentin Hagnéré" }],
  creator: "Hagnéré Code",
  publisher: "Hagnéré Code",
  alternates: { canonical: guidePath(guide) },
  robots: guideRobots(guide),
  openGraph: {
    ...OG_BASE,
    type: "article",
    title: guide.cardTitle,
    description: guide.metaDescription,
    url: guidePath(guide),
    publishedTime: `${guide.datePublished}T09:00:00+02:00`,
    modifiedTime: `${guide.dateModified}T09:00:00+02:00`,
    authors: [`${SITE_URL}/equipe`],
  },
  twitter: {
    card: "summary_large_image",
    title: guide.cardTitle,
    description: guide.metaDescription,
    images: [guideUrl(guide) + "/opengraph-image"],
  },
};

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
      "Maintenance de sites internet",
      "Continuité de service",
      "Sécurité web",
      "Next.js",
      "WordPress",
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
    {
      "@type": "ListItem",
      position: 2,
      name: "Guides",
      item: `${SITE_URL}/guides`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Coût de maintenance d’un site",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Quel budget mensuel prévoir pour maintenir un site ?",
    answer:
      "Il n’existe pas de mensualité universelle. Classez d’abord le site — vitrine, boutique ou service critique — puis comparez le même périmètre, les mêmes horaires, les mêmes preuves et le coût complet à 12 et 36 mois. Les prix publics de 29 à 499 € observés dans six offres françaises le 21 juillet 2026 restent des observations de vendeurs non représentatives du marché.",
  },
  {
    question: "Que doit inclure un contrat de maintenance ?",
    answer:
      "Il doit nommer les actifs, parcours, horaires, mises à jour, capacité corrective, surveillance, sauvegardes, restauration, sécurité, licences, évolutions, rapport et sortie. Pour chaque promesse, exigez une preuve, le risque restant et la personne qui paie si la promesse manque.",
  },
  {
    question: "Une sauvegarde quotidienne suffit-elle ?",
    answer:
      "Non. Une copie doit couvrir les bonnes données, être protégée, restaurée dans un environnement contrôlé puis testée jusqu’au parcours métier. Le contrat doit distinguer la perte maximale de données admise, le temps de reprise et la reconstruction propre après compromission.",
  },
  {
    question: "Que veut dire un SLA de 99,9 % ?",
    answer:
      "Sur une fenêtre continue de 30 jours, 99,9 % correspond arithmétiquement à 43 min 12 s d’indisponibilité ; sur 365 jours, à 8 h 45 min 36 s. Ce chiffre ne vaut rien sans période, source de mesure, parcours, horaires, exclusions, procédure de réclamation, crédit et plafond.",
  },
  {
    question: "WordPress coûte-t-il toujours plus cher à maintenir ?",
    answer:
      "Non. WordPress, Next.js et les plateformes gérées déplacent les responsabilités : cœur, dépendances, données, déploiement, surveillance et sortie. Comparez les mêmes résultats et les mêmes risques ; aucune technologie ne supprime l’entretien.",
  },
  {
    question: "Peut-on assurer la maintenance en interne ?",
    answer:
      "Oui, si le temps chargé, l’outillage, la documentation, les comptes client et un remplaçant sont réellement financés. Une personne compétente et doublée peut être meilleure qu’un prestataire ; une compétence isolée sans relève rend le coût et la continuité incomplets.",
  },
  {
    question: "Comment comparer une agence, un freelance et une TMA ?",
    answer:
      "Envoyez-leur une fiche identique et éliminez toute offre qui échoue sur une obligation prouvée. Une ligne obligatoire vide reste ND. Comparez ensuite seulement les TCO complets, avec transition, coûts annuels, temps interne, licences, évolutions, réserve résiduelle et sortie.",
  },
  {
    question: "La maintenance garantit-elle le SEO ou zéro panne ?",
    answer:
      "Non. Elle peut réduire et mesurer certaines régressions techniques, mais ne garantit ni disponibilité absolue, ni sécurité parfaite, ni conformité globale, ni trafic ou position Google. Les objectifs doivent être datés, mesurés et révisés.",
  },
];

const criticalityScenarios = [
  {
    title: "Simple — vitrine",
    need: "Consultation, formulaire et réception d’e-mail ; attention principalement en jours ouvrés.",
    target:
      "Hypothèse pédagogique : perte de données admise 24 h, reprise sous 2 jours ouvrés, restauration annuelle.",
    annual: "4 320 €",
    tco12: "5 620 €",
    tco36: "14 260 €",
  },
  {
    title: "Central — boutique",
    need: "Catalogue, panier, paiement, commandes et e-mails ; fenêtre fictive lundi–samedi, 8 h–20 h.",
    target:
      "Hypothèse pédagogique : perte de données admise 4 h, reprise sous 8 h de service, restauration trimestrielle.",
    annual: "29 270 €",
    tco12: "33 570 €",
    tco36: "92 110 €",
  },
  {
    title: "Exigeant — service critique",
    need: "Authentification, données et parcours opérationnels ; activité réellement bloquée en cas d’arrêt.",
    target:
      "Hypothèse pédagogique : perte de données admise 15 min, reprise sous 2 h, simulation de crise.",
    annual: "128 800 €",
    tco12: "155 800 €",
    tco36: "413 400 €",
  },
];

const deliveryModes = [
  {
    title: "Interne structuré",
    annual: "25 500 €",
    tco12: "30 500 €",
    tco36: "81 500 €",
    fit: "Connaissance métier, charge régulière, documentation et vraie suppléance.",
  },
  {
    title: "Freelance + relais",
    annual: "23 300 €",
    tco12: "26 600 €",
    tco36: "73 200 €",
    fit: "Site maîtrisable, interlocuteur direct, second intervenant et escalade contractualisés.",
  },
  {
    title: "Agence",
    annual: "26 600 €",
    tco12: "30 900 €",
    tco36: "84 100 €",
    fit: "Compétences multiples utiles, équipe nommée, capacité et exclusions prouvées.",
  },
  {
    title: "TMA organisée",
    annual: "38 900 €",
    tco12: "46 400 €",
    tco36: "124 200 €",
    fit: "Flux soutenu, criticité et gouvernance réelles ; unités, priorités et sortie opposables.",
  },
];

export default function Page() {
  return (
    <GuidesShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: articleJsonLd.replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: breadcrumbJsonLd.replace(/</g, "\\u003c"),
        }}
      />
      <GuideLayout
        breadcrumbs={[
          { label: "Guides", href: "/guides" },
          { label: "Coût de maintenance d’un site" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Classez votre site selon ce qu’une panne vous ferait perdre, chiffrez un incident et comparez deux offres couvrant exactement le même besoin sur 12 et 36 mois."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          {
            number: "01",
            title: "3 criticités, pas un prix magique",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Incident reproductible",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "TCO 12 et 36 mois",
            description: "",
            color: "emerald",
          },
          {
            number: "04",
            title: `Lecture : ${guide.readTimeMin} min`,
            description: "",
            color: "amber",
          },
        ]}
        relatedLinks={[
          {
            href: "/guides/reprendre-maintenance-site-autre-agence",
            label: "Reprendre la maintenance d’un site",
          },
          {
            href: "/guides/migrer-wordpress-vers-nextjs",
            label: "Migrer WordPress vers Next.js ?",
          },
          {
            href: "/guides/prix-refonte-site-internet",
            label: "Corriger ou refondre le site ?",
          },
          {
            href: "/guides/site-internet-en-panne-que-faire",
            label: "Que faire quand le site tombe en panne ?",
          },
          {
            href: "/services/maintenance-evolution",
            label: "Maintenance et évolution",
          },
        ]}
        faqTitle="Maintenance d’un site : questions fréquentes"
        faqItems={faqItems}
        showWhitePaperPromo={false}
        showSidebarCta={false}
      >
        <p className="lead">
          <strong>
            Il n’existe pas de prix universel pour maintenir votre site.
          </strong>{" "}
          Commencez par le classer : une vitrine stable protège surtout son
          formulaire et ses contenus ; une boutique protège panier, paiement,
          commandes et e-mails ; un service critique protège l’activité et les
          données avec une reprise beaucoup plus rapide. Comparez ensuite les
          mêmes obligations, aux mêmes horaires, avec les mêmes résultats
          vérifiables et le même coût complet. Une sauvegarde jamais restaurée,
          une alerte sans humain et un ticket « répondu » sans paiement rétabli
          ne valent pas la continuité promise.
        </p>
        <p>
          Ce guide transforme donc le prix en décision : criticité, preuves,
          impact d’incident, coût total à 12 et 36 mois, puis sortie possible.
        </p>

        <InfoBox
          variant="emerald"
          title="La réponse courte avant les acronymes"
        >
          <p className="m-0">
            Ne comparez pas deux mensualités. Comparez ce qui doit fonctionner,
            qui agit, quand, avec quelle preuve, quel risque reste à votre
            entreprise et qui le paie.
          </p>
        </InfoBox>

        <GuideToc
          items={[
            { id: "menace", label: "1. Classer la criticité du site" },
            {
              id: "de-quoi-parle-t-on",
              label: "2. Quatre familles, six lignes de budget",
            },
            {
              id: "postes",
              label: "3. Transformer chaque promesse en preuve",
            },
            {
              id: "cout-sinistre",
              label: "4. Restauration et coût d’un incident",
            },
            {
              id: "contrat",
              label: "5. Décoder SLA, disponibilité et astreinte",
            },
            {
              id: "methode",
              label: "6. Comparer les modes au même périmètre",
            },
            {
              id: "wordpress-vs-statique",
              label: "7. WordPress, Next.js ou plateforme gérée",
            },
            {
              id: "diy",
              label: "8. Sécurité, licences et fin de support",
            },
            {
              id: "saas",
              label: "9. Sortir même si le mainteneur disparaît",
            },
            {
              id: "comparateur",
              label: "10. Comparateur local à deux offres",
            },
            {
              id: "duree",
              label: "11. Mesurer après la décision",
            },
            {
              id: "reponse-rapide",
              label: "12. Les prix publics 29–499 € : limite",
            },
            {
              id: "action",
              label: "13. Agir en 45–60 minutes",
            },
          ]}
        />

        <h2 id="menace">1. Quel dommage une panne peut-elle causer ?</h2>
        <p>
          Le bon niveau ne vient ni du CMS ni du chiffre d’affaires seul. Il
          vient de la fonction qui cesse de rendre service, de la quantité de
          données que l’entreprise accepte de perdre, du temps qu’elle accepte
          d’attendre et de la capacité humaine réellement disponible. Un site
          vitrine peut subir une panne nocturne sans dommage matériel ; un
          paiement silencieusement cassé peut coûter plus qu’une page entière
          indisponible mais vite détectée.
        </p>
        <p>
          Les scénarios ci-dessous sont des{" "}
          <strong>hypothèses éditoriales fictives</strong>, hors taxe sur la
          valeur ajoutée, inflation, refonte, migration inconnue et hausse
          d’usage. Ils montrent comment un périmètre change le budget ; ils ne
          décrivent ni le marché ni les tarifs Hagnéré Code.
        </p>

        <div className="not-prose my-8 grid gap-4 md:grid-cols-3">
          {criticalityScenarios.map((scenario) => (
            <section
              key={scenario.title}
              className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <h3 className="m-0 text-base font-bold text-zinc-950 dark:text-white">
                {scenario.title}
              </h3>
              <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {scenario.need}
              </p>
              <p className="mb-0 mt-3 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                {scenario.target}
              </p>
              <dl className="mb-0 mt-4 space-y-2 border-t border-zinc-200 pt-4 text-sm dark:border-zinc-800">
                <div className="flex justify-between gap-3">
                  <dt className="text-zinc-500">Récurrent annuel</dt>
                  <dd className="m-0 font-bold text-zinc-950 dark:text-white">
                    {scenario.annual}
                  </dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-zinc-500">TCO fictif 12 mois</dt>
                  <dd className="m-0 font-bold text-zinc-950 dark:text-white">
                    {scenario.tco12}
                  </dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-zinc-500">TCO fictif 36 mois</dt>
                  <dd className="m-0 font-bold text-zinc-950 dark:text-white">
                    {scenario.tco36}
                  </dd>
                </div>
              </dl>
            </section>
          ))}
        </div>

        <p>
          Les calculs sont : vitrine <code>800 + 4 320 + 500 = 5 620 €</code>{" "}
          puis <code>800 + 3 × 4 320 + 500 = 14 260 €</code> ; boutique{" "}
          <code>2 500 + 29 270 + 1 800 = 33 570 €</code> puis{" "}
          <code>2 500 + 3 × 29 270 + 1 800 = 92 110 €</code> ; service critique{" "}
          <code>12 000 + 128 800 + 15 000 = 155 800 €</code> puis{" "}
          <code>12 000 + 3 × 128 800 + 15 000 = 413 400 €</code>.
        </p>
        <InfoBox variant="amber" title="Quand redescendre d’un niveau">
          <p className="m-0">
            Une vitrine stable peut choisir une couverture légère ; une
            plateforme très gérée peut réduire l’exploitation ; un service
            présenté comme critique doit redescendre si le métier accepte une
            interruption longue. Acheter du 24/7 sans personne capable d’agir ne
            crée que du bruit.
          </p>
        </InfoBox>

        <h2 id="de-quoi-parle-t-on">
          2. Quatre familles, six lignes de budget
        </h2>
        <p>
          La norme{" "}
          <a
            href="https://www.iso.org/standard/80710.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            ISO/IEC/IEEE 14764:2022
          </a>{" "}
          traite la maintenance logicielle et exclut de son périmètre des
          opérations comme sauvegarde, reprise et administration. Un contrat web
          peut tout regrouper, mais le devis doit conserver les frontières :
          sinon deux forfaits portant le même nom restent incomparables.
        </p>

        <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "1. Maintenance logicielle",
              body: "Trois lignes séparées : préventive et adaptive ; corrective ; évolutive. Chacune a une unité, une capacité, une priorité, un dépassement et une réception.",
            },
            {
              title: "2. Opérations de service",
              body: "Hébergement, journaux, alertes, sauvegarde, restauration et incident. Une réponse HTTP verte ne prouve ni paiement ni e-mail reçu.",
            },
            {
              title: "3. Entretien éditorial et assurance",
              body: "Contenus, liens, consentement, accessibilité et indexation technique, avec périmètre et fréquence. Aucune promesse de conformité globale ou de rang.",
            },
            {
              title: "4. Gouvernance et sortie",
              body: "Comptes, licences, preuves, décisions, documentation, transfert et reprise par un tiers. La sortie paisible ne suffit pas.",
            },
          ].map((family) => (
            <section
              key={family.title}
              className="rounded-xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/50"
            >
              <h3 className="m-0 text-sm font-bold text-zinc-950 dark:text-white">
                {family.title}
              </h3>
              <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {family.body}
              </p>
            </section>
          ))}
        </div>

        <p>
          Le lecteur retient quatre familles, mais le budget garde{" "}
          <strong>six lignes</strong> : préventif/adaptatif, correctif,
          évolutif, opérations de service, éditorial/assurance, puis
          gouvernance/sortie. Ajoutez séparément hébergement, licences et temps
          interne lorsque ces coûts ne sont pas déjà dans une ligne. Une
          évolution obligatoire sans prix rend le total <code>ND</code>, jamais
          zéro.
        </p>

        <h2 id="postes">3. Ce que chaque promesse doit montrer</h2>
        <p>
          « Sauvegardé », « surveillé », « sécurisé », « illimité » et « 24/7 »
          ne sont pas des livrables. Pour chaque promesse, écrivez la preuve
          réceptionnée, le risque qui demeure et le payeur si la preuve manque.
          Ce registre rend le service contrôlable avant même le premier
          incident.
        </p>
        <div
          className="not-prose my-8 grid gap-4 md:grid-cols-2"
          aria-label="Registre de maintenance prouvée : promesse, preuve, risque restant et payeur"
        >
          {[
            {
              promise: "Composants à jour",
              proof:
                "Inventaire avant/après, avis traité, test métier et repli daté",
              risk: "Composant oublié, vulnérabilité nouvelle ou régression",
              payer: "Responsabilité écrite ; sinon conflit",
            },
            {
              promise: "Sauvegarde quotidienne",
              proof:
                "Âge du point, contenu, stockage séparé et restauration complète",
              risk: "Copie corrompue, donnée exclue ou point trop ancien",
              payer: "À définir avant incident",
            },
            {
              promise: "Restauration en 8 h",
              proof:
                "Exercice horodaté jusqu’au paiement ou formulaire fonctionnel",
              risk: "Incident différent du test ou tiers indisponible",
              payer: "Recours, crédit et plafond écrits",
            },
            {
              promise: "Disponibilité 99,9 %",
              proof:
                "Source, parcours, période, fenêtre, exclusions et calcul brut",
              risk: "Fonction secondaire cassée ou perte non compensée",
              payer: "Crédit éventuel ≠ impact métier",
            },
            {
              promise: "Support 24/7",
              proof:
                "Planning d’astreinte, accusé humain, escalade et capacité d’action",
              risk: "Alerte non traitée, surcharge ou tiers fermé",
              payer: "Répartition contractuelle",
            },
            {
              promise: "Petites évolutions",
              proof:
                "Unité, consommé, restant, report, dépassement et réception",
              risk: "Demande requalifiée en projet ou heures expirées",
              payer: "Client si hors champ explicite",
            },
            {
              promise: "Sortie possible",
              proof:
                "Export, build ou restauration exécuté par un tiers autorisé",
              risk: "Connaissance tacite, accès ou droits incomplets",
              payer: "Coût de transfert écrit",
            },
          ].map((item) => (
            <section
              key={item.promise}
              className="rounded-xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/50"
            >
              <h3 className="m-0 text-sm font-bold text-zinc-950 dark:text-white">
                {item.promise}
              </h3>
              <dl className="mb-0 mt-3 space-y-3 text-sm">
                <div>
                  <dt className="font-bold text-emerald-700 dark:text-emerald-300">
                    Preuve
                  </dt>
                  <dd className="mb-0 mt-1 text-zinc-600 dark:text-zinc-300">
                    {item.proof}
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-amber-700 dark:text-amber-300">
                    Risque restant
                  </dt>
                  <dd className="mb-0 mt-1 text-zinc-600 dark:text-zinc-300">
                    {item.risk}
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-violet-700 dark:text-violet-300">
                    Payeur si la preuve manque
                  </dt>
                  <dd className="mb-0 mt-1 text-zinc-600 dark:text-zinc-300">
                    {item.payer}
                  </dd>
                </div>
              </dl>
            </section>
          ))}
        </div>

        <p>
          Un rapport utile indique les actifs couverts et exclus, les versions,
          changements, résultats de tests, parcours métier, échecs et replis,
          dernier point restaurable, exercice de restauration, incidents et
          délais, licences à renouveler, capacité évolutive consommée et actions
          attribuées. Une page de coches vertes sans anomalie ni décision n’est
          pas une preuve.
        </p>

        <h2 id="cout-sinistre">
          4. Restaurer le service et chiffrer un incident
        </h2>
        <h3>Perte de données et temps de reprise, en langage ordinaire</h3>
        <p>
          Le <strong>point de reprise</strong> — souvent nommé RPO — répond à «
          jusqu’à quelle heure les données reviennent-elles ? ». Une cible de
          quatre heures admet potentiellement quatre heures de nouvelles données
          perdues. Le <strong>temps de reprise</strong> — souvent nommé RTO —
          répond à « combien de temps avant que le parcours utile fonctionne à
          nouveau ? ». Les définitions officielles du{" "}
          <a
            href="https://www.nist.gov/publications/contingency-planning-guide-federal-information-systems"
            target="_blank"
            rel="noopener noreferrer"
          >
            NIST SP 800-34 Rev. 1
          </a>{" "}
          distinguent ces deux objectifs ; leurs valeurs viennent de l’impact
          métier, pas d’un glossaire ou d’un forfait.
        </p>
        <p>
          La chaîne complète est : inventorier fichiers, données, configuration
          et services ; produire une copie à la bonne cadence ; protéger au
          moins une copie séparée ; surveiller son âge et son intégrité ;
          restaurer ; tester comptes, formulaire, paiement, e-mails et tâches ;
          chronométrer ; corriger la procédure. L’
          <a
            href="https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            ANSSI, guide sauvegarde v1.1 du 27 novembre 2025
          </a>{" "}
          insiste sur la politique, la protection des copies et les exercices de
          restauration.
        </p>

        <InfoBox
          variant="amber"
          title="Restauration courante ≠ reprise propre après compromission"
        >
          <p className="m-0">
            Annuler une suppression prouve un scénario courant. Après
            compromission, il faut isoler, choisir un point sain, reconstruire
            dans un environnement propre, corriger la porte d’entrée, changer
            les accès concernés, analyser comptes et tâches, valider les
            parcours puis reconnecter progressivement. Le{" "}
            <a
              href="https://www.cisa.gov/stopransomware/ransomware-guide"
              target="_blank"
              rel="noopener noreferrer"
            >
              guide StopRansomware de la CISA
            </a>{" "}
            traite notamment copies protégées, exercices et risque de
            réinfection.
          </p>
        </InfoBox>

        <h3>Exemple fictif reproductible : boutique centrale</h3>
        <p>
          Cet exemple ne décrit ni un client ni un cas réel Hagnéré Code.
          Utilisez la marge réellement non reportable, pas le chiffre d’affaires
          brut. Une commande seulement décalée n’est pas perdue. Le temps
          salarié déjà payé ne devient un surcoût que s’il crée des heures ou
          détourne réellement une capacité.
        </p>
        <FormulaBox>
          {`Impact incident
= durée indisponible × marge non reportable par heure
+ remboursements, concessions ou pénalités probables
+ reprise externe + communication
+ personnes × heures × coût chargé × part réaffectée
- compensation applicable et raisonnablement récupérable`}
        </FormulaBox>
        <p>
          Hypothèses fictives : 6 h × 180 €/h, aucune pénalité, 900 € de reprise
          externe, 250 € de communication, 2 personnes × 4 h × 35 €/h × 50 % et
          aucune compensation. Le calcul est{" "}
          <code>1 080 + 900 + 250 + 140 = 2 370 €</code>. Ce n’est ni un coût
          moyen d’incident ni un gain promis par la maintenance.
        </p>
        <GuideTable
          caption="Sensibilité fictive de l’incident selon durée et marge non reportable"
          headers={["Durée", "180 €/h", "750 €/h en pointe"]}
          rows={[
            ["2 h", "1 650 €", "2 790 €"],
            ["6 h", "2 370 €", "5 790 €"],
            ["12 h", "3 450 €", "10 290 €"],
          ]}
        />
        <p>
          Chaque coût a une seule origine. Une heure corrective incluse au
          forfait n’est pas ajoutée en reprise externe. Une réserve annuelle
          déjà intégrée au TCO n’est pas rajoutée après le total. Sans
          historique défendable sur la fréquence ou la réduction de durée, le
          retour sur investissement d’une couverture renforcée reste{" "}
          <code>ND</code>.
        </p>

        <h2 id="contrat">
          5. SLA : six horodatages, une période et un recours
        </h2>
        <p>
          Un accord de niveau de service — SLA — ne doit pas confondre{" "}
          <strong>détection</strong>, <strong>accusé humain</strong>,{" "}
          <strong>début d’intervention</strong>, <strong>contournement</strong>{" "}
          et <strong>rétablissement</strong>. La{" "}
          <strong>correction définitive</strong> vient ensuite et doit aussi
          avoir un propriétaire et une échéance. Pour chaque sévérité S1 à S4,
          écrivez l’exemple métier, les horaires, le fuseau, les pauses
          d’horloge et ce que le client doit fournir.
        </p>
        <p>
          Les recommandations{" "}
          <a
            href="https://www.gov.uk/service-manual/technology/monitoring-the-status-of-your-service"
            target="_blank"
            rel="noopener noreferrer"
          >
            GOV.UK sur la surveillance
          </a>{" "}
          distinguent métriques utilisateur, techniques et sécurité, et
          demandent d’attribuer les alertes. Le{" "}
          <a
            href="https://www.ncsc.gov.uk/guidance/choosing-a-managed-service-provider-msp"
            target="_blank"
            rel="noopener noreferrer"
          >
            NCSC britannique
          </a>{" "}
          recommande de clarifier responsabilités, sauvegardes testées,
          journaux, incidents, SLA et sortie. Ce sont des méthodes à
          proportionner, pas des délais contractuels français automatiques.
        </p>

        <GuideTable
          caption="Conversion arithmétique de deux pourcentages de disponibilité sur fenêtres continues"
          headers={["Engagement", "30 jours continus", "365 jours continus"]}
          rows={[
            ["99,9 %", "43 min 12 s", "8 h 45 min 36 s"],
            ["99,99 %", "4 min 19,2 s", "52 min 33,6 s"],
          ]}
        />
        <p>
          Ces durées ne forment pas un SLA. Le contrat doit encore préciser la
          source, le parcours mesuré, le mois civil ou la période glissante, la
          fenêtre et le fuseau, la maintenance planifiée, les dépendances et
          autres exclusions, l’arrondi, les preuves conservées, le délai et la
          procédure de réclamation, puis le crédit ou l’indemnité, son plafond
          et son éventuel caractère exclusif. Le{" "}
          <a
            href="https://vercel.com/legal/sla"
            target="_blank"
            rel="noopener noreferrer"
          >
            SLA Enterprise de Vercel
          </a>{" "}
          illustre cette mécanique contractuelle ; il ne constitue pas le SLA
          universel de votre site.
        </p>
        <p>
          L’astreinte gagne lorsque l’impact hors heures dépasse le coût de la
          couverture et qu’une personne peut réellement intervenir. Elle perd
          pour une vitrine sans enjeu nocturne, ou si le paiement dépend d’un
          tiers fermé : une alerte sans action n’est pas une reprise.
        </p>

        <h2 id="methode">
          6. Comparer quatre organisations sur le même besoin
        </h2>
        <p>
          Le cas central fictif ci-dessous fige une boutique avec production et
          préproduction, quatre parcours testés toutes les cinq minutes, fenêtre
          lundi–samedi 8 h–20 h, point cohérent au moins toutes les 4 h,
          restauration trimestrielle, objectifs fictifs de 4 h de données et 8 h
          de reprise, inventaire, changements testés, quatre incidents majeurs
          ou importants et 48 h correctives par an, 10 jours d’évolution,
          rapport mensuel et reprise par un tiers.
        </p>
        <p>
          Tout supplément au-delà de ces capacités reste <code>ND</code>
          jusqu’à chiffrage. Les montants sont des hypothèses mécaniques hors
          incident économique, TVA, inflation et hausse d’usage. Ils ne
          décrivent aucun tarif de marché.
        </p>

        <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
          {deliveryModes.map((mode) => (
            <section
              key={mode.title}
              className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <h3 className="m-0 text-base font-bold text-zinc-950 dark:text-white">
                {mode.title}
              </h3>
              <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {mode.fit}
              </p>
              <dl className="mb-0 mt-4 grid grid-cols-3 gap-2 border-t border-zinc-200 pt-4 text-center dark:border-zinc-800">
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-wide text-zinc-500">
                    Annuel
                  </dt>
                  <dd className="mb-0 mt-1 text-sm font-bold text-zinc-950 dark:text-white">
                    {mode.annual}
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-wide text-zinc-500">
                    12 mois
                  </dt>
                  <dd className="mb-0 mt-1 text-sm font-bold text-zinc-950 dark:text-white">
                    {mode.tco12}
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-wide text-zinc-500">
                    36 mois
                  </dt>
                  <dd className="mb-0 mt-1 text-sm font-bold text-zinc-950 dark:text-white">
                    {mode.tco36}
                  </dd>
                </div>
              </dl>
            </section>
          ))}
        </div>

        <p>
          Les formules annuelles sont, respectivement,{" "}
          <code>12 000 + 4 000 + 3 000 + 6 500 = 25 500</code>,{" "}
          <code>10 800 + 2 400 + 600 + 3 000 + 6 500 = 23 300</code>,{" "}
          <code>16 800 + 300 + 3 000 + 6 500 = 26 600</code> et{" "}
          <code>28 800 + 600 + 3 000 + 6 500 = 38 900</code>. Dans ces seules
          hypothèses, le freelance avec relais est le moins coûteux ; ce n’est
          pas un verdict. S’il n’accepte pas les mêmes preuves, horaires et
          capacités, il est non qualifié.
        </p>
        <p>
          Un <strong>Fail prouvé</strong> sur une obligation éliminatoire écarte
          l’offre. Un Pass ou Fail sans date, artefact ou référence, périmètre,
          résultat et responsable redevient <code>ND</code>. Une offre sans
          échec reste non qualifiée tant que les six champs communs, ses quatre
          descriptifs, ses neuf preuves et ses dix postes TCO ne sont pas
          complets. Toute somme calculée avant ce seuil est un{" "}
          <strong>sous-total non comparable</strong>, jamais un prix permettant
          de classer l’offre.
        </p>

        <h2 id="wordpress-vs-statique">
          7. WordPress, Next.js et plateforme : où est le travail ?
        </h2>
        <p>
          Aucune technologie n’a « zéro maintenance ». Elle déplace le travail
          entre cœur, runtime, extensions ou paquets, données, déploiement,
          surveillance, sécurité et sortie. La{" "}
          <a
            href="https://wordpress.org/documentation/article/updating-wordpress/"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation WordPress
          </a>{" "}
          recommande une sauvegarde avant mise à jour ; sa documentation des{" "}
          <a
            href="https://developer.wordpress.org/advanced-administration/security/backup/"
            target="_blank"
            rel="noopener noreferrer"
          >
            sauvegardes
          </a>{" "}
          rappelle qu’une reprise complète associe généralement fichiers et
          base. Cela ne prouve pas qu’une copie précise restaure le panier.
        </p>
        <div
          className="not-prose my-8 grid gap-4 md:grid-cols-3"
          aria-label="Surfaces de responsabilité selon trois familles techniques"
        >
          {[
            {
              title: "WordPress",
              lines: [
                "Cœur : CMS, PHP et serveur selon l’hébergement.",
                "Dépendances : thèmes et extensions.",
                "Données : base, médias et configuration.",
                "Surveillance : HTTP, PHP, base, tâches, formulaire et e-mail.",
                "Sortie : fichiers, base, licences, domaine et procédure.",
              ],
            },
            {
              title: "Next.js / stack moderne",
              lines: [
                "Cœur : Next.js, Node, build, cache et services.",
                "Dépendances : paquets et outils de livraison.",
                "Données : bases, stockage et migrations séparés du code.",
                "Surveillance : logs, fonctions, API, cache, tâches et parcours.",
                "Sortie : dépôt, build, données, secrets et domaine.",
              ],
            },
            {
              title: "Plateforme gérée",
              lines: [
                "Cœur : runtime géré selon les règles du fournisseur.",
                "Dépendances : thème, apps et intégrations.",
                "Données : exports et API selon les capacités du fournisseur.",
                "Surveillance : disponibilité du fournisseur et parcours propre.",
                "Sortie : qualité, délai et limites de l’export.",
              ],
            },
          ].map((technology) => (
            <section
              key={technology.title}
              className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <h3 className="m-0 text-sm font-bold text-zinc-950 dark:text-white">
                {technology.title}
              </h3>
              <ul className="mb-0 mt-3 space-y-2 pl-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {technology.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <p>
          La{" "}
          <a
            href="https://nextjs.org/support-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            politique de support Next.js
          </a>{" "}
          distingue versions actives, en maintenance et non supportées. Statut
          vérifié le 25 juillet 2026 et à rouvrir au moment du choix : Node, les
          paquets et la plateforme ont leurs propres cycles. Le{" "}
          <a
            href="https://vercel.com/docs/deployments/rollback-production-deployment"
            target="_blank"
            rel="noopener noreferrer"
          >
            retour à un déploiement Vercel
          </a>{" "}
          peut restaurer du code antérieur ; il ne restaure pas automatiquement
          une base migrée ou des commandes perdues.
        </p>

        <h2 id="diy">
          8. Sécurité, licences et fin de support : le coût différé
        </h2>
        <p>
          Le registre minimal nomme chaque composant ou service, sa version, son
          propriétaire, la source d’avis, l’exploitation connue, la politique de
          support, la licence, le renouvellement, les données ou privilèges, la
          décision, le test, le repli et la prochaine revue. Un inventaire ou
          une nomenclature de composants est une carte, pas un certificat de
          sécurité.
        </p>
        <p>
          Le processus défendable est : identifier, qualifier l’impact,
          prioriser, préparer, sauvegarder, tester sur un environnement
          représentatif, approuver, déployer, vérifier technique et parcours,
          revenir en arrière si nécessaire, puis documenter la dette. Le{" "}
          <a
            href="https://csrc.nist.gov/pubs/sp/800/40/r4/final"
            target="_blank"
            rel="noopener noreferrer"
          >
            NIST SP 800-40 Rev. 4
          </a>{" "}
          structure le correctif comme identification, priorité, acquisition,
          installation et vérification ; il ne fixe aucune cadence universelle
          pour un site.
        </p>
        <p>
          Une version en fin de support, une licence nécessaire au build, une
          extension abandonnée ou une migration obligatoire ont un coût
          probable. Ce coût entre dans le TCO ; s’il est inconnu, la ligne reste
          <code> ND</code>. Le forfait doit aussi dire qui traite les comptes,
          l’authentification forte, les secrets, certificats, domaine, DNS,
          journaux, vulnérabilités, exceptions et incident. « Sécurisé » sans
          actif, fréquence, preuve et exclusion doit disparaître du devis.
        </p>
        <p>
          L’entretien peut inclure contenu, consentement, accessibilité et
          indexation technique, avec un propriétaire, un échantillon, une
          fréquence et une méthode. La{" "}
          <a
            href="https://www.w3.org/WAI/eval/considerations"
            target="_blank"
            rel="noopener noreferrer"
          >
            W3C WAI
          </a>{" "}
          recommande de cadrer le suivi ; la{" "}
          <a
            href="https://developers.google.com/crawling/docs/troubleshooting/http-status-codes"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation Google Search
          </a>{" "}
          explique que des erreurs serveur persistantes peuvent modifier le
          crawl. Ni l’une ni l’autre ne justifie une garantie de conformité, de
          trafic ou de place dans Google.
        </p>

        <h2 id="saas">
          9. La sortie doit fonctionner si le mainteneur ne répond plus
        </h2>
        <p>
          Une résiliation cordiale est le scénario facile. Le plan doit aussi
          marcher si le prestataire perd une personne clé, subit une
          compromission, conserve le seul compte administrateur, n’accède plus à
          ses outils ou devient indisponible. Sinon, la réversibilité est une
          intention.
        </p>
        <p>
          Les preuves minimales sont : domaine, hébergement, dépôt, base et
          services au nom du client lorsque possible ; second administrateur ;
          privilèges limités ; sauvegarde indépendante du compte du mainteneur ;
          documentation accessible hors de ses outils ; contacts d’escalade ;
          procédure de révocation et rotation des secrets ; enfin, un build ou
          une restauration menée par un tiers autorisé. Le coût, le délai, les
          données, les licences et l’assistance de sortie sont inclus, chiffrés
          séparément ou marqués <code>ND</code>.
        </p>
        <p>
          Quand le prestataire traite des données personnelles, la{" "}
          <a
            href="https://www.cnil.fr/fr/securite-gerer-la-sous-traitance"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL sur la sous-traitance
          </a>{" "}
          rappelle l’importance des responsabilités, incidents, contrôles et
          conditions de restitution ou destruction. La qualification juridique
          dépend toutefois du cas réel.
        </p>

        <h2 id="comparateur">10. Construire deux dossiers comparables</h2>
        <p>
          L’outil ci-dessous fonctionne uniquement dans votre navigateur. Il ne
          contacte aucun prestataire et n’envoie aucune donnée. Renseignez le
          même besoin, un incident de référence, puis deux offres indépendantes.
          Les neuf portes imposent une preuve ; les dix postes TCO refusent
          toute inconnue ; l’impact d’incident reste séparé pour empêcher le
          double comptage.
        </p>
        <WebsiteMaintenanceDecisionDossier />

        <h2 id="duree">11. Mesurer après la décision et savoir réviser</h2>
        <p>
          Le contrat ne devient pas vrai parce qu’il est signé. Fixez un état de
          départ, une fréquence, un propriétaire et un signal d’action pour
          chaque mesure utile.
        </p>
        <GuideTable
          caption="Mesures après décision et signaux de révision"
          headers={["Mesure", "Point de départ", "Responsable et signal"]}
          rows={[
            [
              "Parcours métier",
              "30 jours observés ou ND",
              "Propriétaire de service ; échec inexpliqué ou tendance dégradée",
            ],
            [
              "Point réellement restaurable",
              "Date, contenu et durée du dernier exercice",
              "Responsable reprise ; perte ou durée cible manquée",
            ],
            [
              "Incidents et six horodatages",
              "Journal sur 12 mois ou ND",
              "Responsable incident ; deux S1, retard répété ou cause récurrente",
            ],
            [
              "Vulnérabilités et fins de support",
              "Inventaire initial daté",
              "Propriétaire technique ; exploitation connue, support fini, exception échue",
            ],
            [
              "Capacité et dette",
              "Stock, consommation et postes ND",
              "Sponsor métier ; saturation, dérive du TCO ou dépendance sans propriétaire",
            ],
            [
              "Contenu et assurance",
              "Échantillon initial",
              "Propriétaire contenu ; information fausse ou régression après changement",
            ],
          ]}
        />
        <p>
          Réexaminez le choix lors d’un nouveau paiement ou espace client, d’un
          changement d’horaires, de deux incidents critiques en douze mois,
          d’une restauration ratée, d’une fin de support, du départ de la seule
          personne compétente ou d’une hausse d’usage qui change la facture.
          Aucun fournisseur ne doit être reconduit sur la seule absence de
          ticket : un formulaire cassé peut rester silencieux.
        </p>

        <h2 id="reponse-rapide">
          12. Pourquoi 29–499 € ne constitue pas une fourchette de marché
        </h2>
        <p>
          Six vendeurs français affichaient, lors d’un relevé du{" "}
          <strong>21 juillet 2026</strong>, des forfaits allant de{" "}
          <strong>29 à 499 € HT par mois</strong>. Cette observation secondaire
          est datée, non représentative et majoritairement WordPress. Elle
          mélange hébergement, licences, contenu, quantité de modifications,
          horaires, sauvegardes et recours : elle ne permet ni moyenne nationale
          ni prix de votre site.
        </p>
        <GuideTable
          caption="Observations commerciales secondaires, à revérifier auprès des vendeurs"
          headers={["Vendeur", "Prix publics observés", "Différence visible"]}
          rows={[
            [
              "Grain de Site",
              "29 / 39 / 49 € HT/mois",
              "Trois périmètres WordPress ; licences pendant le contrat",
            ],
            [
              "TYTAE",
              "29 / 39 / 69 € HT/mois",
              "One page, vitrine ou e-commerce ; ponctuel affiché à 85 €/h",
            ],
            [
              "Studio HTTP",
              "À partir de 39 / 99 € HT/mois",
              "Une heure de petites modifications au palier supérieur",
            ],
            [
              "Harsene",
              "49 / 69 € HT/mois",
              "WordPress ou WooCommerce ; hébergement proposé séparément",
            ],
            [
              "Palmsquare",
              "89 / 169 € HT/mois",
              "Deux paliers mensuels ; paiement annuel distinct",
            ],
            [
              "Pulsar Agency",
              "159 / 209 / 499 € HT/mois",
              "Facturation annuelle ; délais annoncés selon palier",
            ],
          ]}
        />
        <p>
          Pages de vendeurs à rouvrir avant usage :{" "}
          <a
            href="https://graindesite.com/maintenance-wordpress/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Grain de Site
          </a>
          ,{" "}
          <a
            href="https://www.tytae.fr/maintenance-site-wordpress-tarif/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TYTAE
          </a>
          ,{" "}
          <a
            href="https://studio-http.fr/maintenance-wordpress/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Studio HTTP
          </a>
          ,{" "}
          <a
            href="https://harsene.com/maintenance-et-support-wordpress/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Harsene
          </a>
          ,{" "}
          <a
            href="https://palmsquare.fr/agence-maintenance-wordpress/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Palmsquare
          </a>{" "}
          et{" "}
          <a
            href="https://www.pulsar-agency.com/maintenance-site-web/contrat-maintenance-web"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pulsar Agency
          </a>
          . Aux États-Unis, au Royaume-Uni, en Allemagne, au Canada et en
          Australie, les offres observées ajoutaient notamment niveaux
          e-commerce, préproduction, tests de paiement, fonctions silencieuses,
          heures de contenu ou récupération. Là encore, ce sont des angles de
          vente, pas des preuves de qualité nationale.
        </p>

        <h2 id="action">13. Votre audit autonome en 45–60 minutes</h2>
        <ol>
          <li>
            Écrivez les trois fonctions dont la panne produit un dommage réel.
          </li>
          <li>
            Trouvez les propriétaires du domaine, de l’hébergement, du dépôt, de
            la base et des sauvegardes.
          </li>
          <li>
            Envoyez le formulaire, testez le paiement si pertinent et vérifiez
            l’e-mail reçu.
          </li>
          <li>
            Demandez la date et la durée du dernier point restauré, pas
            seulement sauvegardé.
          </li>
          <li>
            Reconstituez le dernier incident : détection, accusé, intervention,
            contournement, rétablissement et correction.
          </li>
          <li>
            Calculez l’impact avec marge non reportable et capacité interne
            réellement détournée.
          </li>
          <li>
            Marquez <code>ND</code> chaque licence, fin de support, heure,
            risque, exclusion ou sortie inconnue.
          </li>
          <li>
            Envoyez exactement la même fiche aux deux candidats et conservez
            leurs preuves séparées.
          </li>
        </ol>

        <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
          <section className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-950 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-100">
            <h3 className="m-0 text-sm font-bold">Bon fit pour une revue</h3>
            <p className="mb-0 mt-2 text-sm leading-relaxed">
              Plusieurs offres incomparables, aucune restauration récente,
              boutique ou service à parcours critiques, changement de
              prestataire, comptes et responsabilités dispersés.
            </p>
          </section>
          <section className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-amber-950 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100">
            <h3 className="m-0 text-sm font-bold">Mauvais fit</h3>
            <p className="mb-0 mt-2 text-sm leading-relaxed">
              Recherche d’un prix magique sans périmètre, garantie zéro panne,
              avis juridique personnalisé, site personnel sans enjeu ou promesse
              de première place dans Google.
            </p>
          </section>
        </div>

        <InfoBox variant="blue" title="Notre conflit d’intérêts, rendu visible">
          <p className="m-0">
            Hagnéré Code vend du développement et peut bénéficier d’un
            diagnostic, d’une reprise ou d’une maintenance. Ce guide montre donc
            aussi quand rester ponctuel, s’organiser en interne ou ne pas
            souscrire. Les hypothèses sont modifiables et aucune offre Hagnéré
            Code n’est déclarée supérieure sans vos preuves.
          </p>
        </InfoBox>

        <GuideInlineCTA
          title="Faire relire votre périmètre avant de demander un devis"
          description="Le formulaire prend environ 3 minutes. Le pré-cadrage et la réponse sont gratuits. Nous visons un premier retour lors du jour ouvré suivant, sans engagement de délai ; un devis ferme n’est proposé qu’après échange. Nous pouvons aussi recommander une couverture légère, une organisation interne ou le report du projet."
          tags={[
            "Périmètre commun",
            "Inconnues conservées",
            "Option de ne pas souscrire",
          ]}
          ctaLabel="Transmettre mon périmètre"
          ctaHref="/demarrer-un-projet"
          showPhone={false}
        />

        <h2>Sources, portée et limites</h2>
        <p>
          Sources primaires et institutionnelles consultées ou revérifiées le 25
          juillet 2026 : ISO 14764:2022, ANSSI MonServiceSécurisé et guide
          sauvegarde v1.1, CNIL, NIST SP 800-34 Rev. 1, SP 800-40 Rev. 4 et SP
          800-61 Rev. 3, CISA, GOV.UK, NCSC, BSI, WordPress, Next.js, Vercel,
          Google SRE, Google Search et W3C WAI. Les sources produit sont
          volatiles et doivent être rouvertes au jour du choix.
        </p>
        <p>
          Les montants pédagogiques ne sont ni des devis ni des statistiques.
          Les pages commerciales sont des observations de vendeurs. Les
          objectifs de sauvegarde, disponibilité, sécurité et conformité doivent
          être adaptés aux données, contrats et risques réels. Ce guide n’est
          pas un avis juridique, ne garantit aucune panne évitée et ne promet ni
          indexation ni classement Google.
        </p>

        <p>
          Pour exécuter une reprise, consultez{" "}
          <Link href="/guides/reprendre-maintenance-site-autre-agence">
            le guide de changement de mainteneur
          </Link>
          . Pour arbitrer correction et reconstruction, utilisez{" "}
          <Link href="/guides/prix-refonte-site-internet">
            le guide de refonte
          </Link>
          . Pour un incident en cours, suivez d’abord{" "}
          <Link href="/guides/site-internet-en-panne-que-faire">
            la procédure de panne
          </Link>
          .
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
