import type { Metadata } from "next";
import Link from "next/link";
import { SubscriptionBillingDecisionDossier } from "@/components/guides/SubscriptionBillingDecisionDossier";
import {
  FormulaBox,
  GuideInlineCTA,
  GuideTable,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { GuideLayout } from "@/components/guides/guide-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import acceptanceTests from "@/lib/subscription-billing-acceptance-tests.json";
import { formatGuideDate, getGuide, guideRobots, guideUrl } from "@/lib/guides";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("facturation-abonnements-saas");

export const metadata: Metadata = {
  title: guide.title,
  description: guide.metaDescription,
  authors: [{ name: "Quentin Hagnéré" }],
  creator: "Hagnéré Code",
  publisher: "Hagnéré Code",
  robots: guideRobots(guide),
  alternates: { canonical: guideUrl(guide) },
  openGraph: {
    ...OG_BASE,
    type: "article",
    title: guide.cardTitle,
    description: guide.metaDescription,
    url: guideUrl(guide),
    images: [
      {
        url: guideUrl(guide) + "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Facturation SaaS : relier offre, facture, paiement et accès",
      },
    ],
    publishedTime: guide.datePublished + "T09:00:00+02:00",
    modifiedTime: guide.dateModified + "T09:00:00+02:00",
    authors: [SITE_URL + "/equipe"],
  },
  twitter: {
    card: "summary_large_image",
    title: guide.cardTitle,
    description: guide.metaDescription,
    images: [guideUrl(guide) + "/opengraph-image"],
  },
};

const faqItems = [
  {
    question: "Stripe suffit-il pour gérer un abonnement SaaS ?",
    answer:
      "Abonnement, paiement, facture et accès ne sont pas synonymes. Stripe peut porter le paiement, des factures et des états d’abonnement. Il ne décide pas à votre place de l’offre contractée, des droits d’accès, du traitement comptable, des règles de résiliation ni de la qualification fiscale de chaque flux.",
  },
  {
    question: "Un abonnement Stripe actif prouve-t-il que tout est payé ?",
    answer:
      "Non. La documentation Stripe précise qu’un abonnement actif ne garantit pas que toutes ses factures ouvertes ont été payées. Certains moyens de paiement asynchrones peuvent aussi laisser l’abonnement actif avant l’issue définitive. Vérifiez la facture, le paiement et votre propre règle d’accès.",
  },
  {
    question: "Faut-il proposer mensuel et annuel dès le lancement ?",
    answer:
      "Non. Chaque rythme supplémentaire multiplie les changements de formule, proratas, échéanciers, renouvellements, remboursements et cas de support. Ne proposez que les rythmes que vous savez vendre, rapprocher, expliquer et résilier de bout en bout.",
  },
  {
    question: "Comment traiter un changement de formule en cours de mois ?",
    answer:
      "Décidez d’abord la date d’effet, les droits ouverts, le traitement du reliquat et le sort d’une facture antérieure encore impayée. Ensuite seulement, configurez le prorata. Testez les remises, quantités, usage, avoirs et arrondis sur une facture réelle de bac à sable.",
  },
  {
    question: "Faut-il couper l’accès dès qu’un paiement échoue ?",
    answer:
      "Pas automatiquement. Une carte refusée, un virement à rapprocher, une authentification requise et une facture contestée sont quatre situations différentes. Le contrat, le risque, le moyen de paiement et la politique de service doivent conduire la décision.",
  },
  {
    question: "Quelle est la différence entre facture, encaissement et MRR ?",
    answer:
      "La facture constate une créance et décrit une opération. L’encaissement décrit un mouvement de trésorerie. Le MRR normalise un revenu récurrent contractuel à des fins de pilotage. Ces grandeurs se rapprochent par un pont documenté ; elles ne se remplacent pas.",
  },
  {
    question:
      "Quand la facture électronique devient-elle obligatoire en France ?",
    answer:
      "Au 1er septembre 2026, toutes les entreprises concernées doivent pouvoir recevoir des factures électroniques ; les grandes entreprises et ETI doivent aussi émettre et transmettre leur e-reporting. Les PME et micro-entreprises passent à l’émission et au e-reporting au 1er septembre 2027.",
  },
  {
    question:
      "Un SaaS vendu à l’étranger applique-t-il toujours la TVA française ?",
    answer:
      "Non. Le pays, la qualité B2B ou B2C du client, la nature exacte du service, son établissement et plusieurs exceptions peuvent changer le lieu d’imposition et les obligations. Le produit doit collecter les preuves utiles et router les cas non qualifiés vers le professionnel compétent.",
  },
];

const articleJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: guide.heroTitle,
  description: guide.metaDescription,
  url: guideUrl(guide),
  mainEntityOfPage: { "@type": "WebPage", "@id": guideUrl(guide) },
  image: [guideUrl(guide) + "/opengraph-image"],
  datePublished: guide.datePublished,
  dateModified: guide.dateModified,
  inLanguage: "fr-FR",
  articleSection: guide.section,
  isPartOf: {
    "@type": "WebPage",
    "@id": SITE_URL + "/guides",
    name: "Guides web Hagnéré Code",
  },
  author: {
    "@type": "Person",
    name: "Quentin Hagnéré",
    jobTitle: "Fondateur de Hagnéré Code",
    url: SITE_URL + "/equipe",
    sameAs: ["https://www.linkedin.com/in/quentin-hagnere"],
    worksFor: { "@id": SITE_URL + "/#organization" },
  },
  publisher: {
    "@type": "Organization",
    "@id": SITE_URL + "/#organization",
    name: "Hagnéré Code",
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: SITE_URL + "/logos/logo-dark.png" },
  },
});

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL + "/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Guides",
      item: SITE_URL + "/guides",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Facturation des abonnements SaaS",
      item: guideUrl(guide),
    },
  ],
});

const sourceRecords = [
  {
    title: "Offre acceptée",
    truth:
      "Formule, quantité, prix, rythme, devise, date d’effet, remise, engagement et conditions négociées.",
    owner: "Vente ou administration commerciale",
    failure:
      "Créer un abonnement depuis une adresse e-mail sans savoir quelle société a acheté quoi.",
    color:
      "border-violet-200 bg-violet-50/70 dark:border-violet-900 dark:bg-violet-950/20",
  },
  {
    title: "Contrat et commande",
    truth:
      "Entité contractante, signataire, bon de commande, conditions, renouvellement, résiliation et preuve d’acceptation.",
    owner: "Direction commerciale et juridique",
    failure:
      "Laisser une ligne de prix du prestataire devenir la seule preuve du contrat.",
    color:
      "border-fuchsia-200 bg-fuchsia-50/70 dark:border-fuchsia-900 dark:bg-fuchsia-950/20",
  },
  {
    title: "Plan de facturation",
    truth:
      "Périodes, échéances, quantité, usage, indexation, changement programmé et prochaine action attendue.",
    owner: "Opérations de facturation",
    failure:
      "Confondre la formule commerciale avec le calendrier réellement exécuté.",
    color:
      "border-blue-200 bg-blue-50/70 dark:border-blue-900 dark:bg-blue-950/20",
  },
  {
    title: "Facture et avoir",
    truth:
      "Émetteur, destinataire, lignes, période, taxes qualifiées, échéance, identifiant et correction rattachée.",
    owner: "Facturation et comptabilité",
    failure:
      "Considérer qu’un reçu de carte est nécessairement la facture attendue.",
    color:
      "border-cyan-200 bg-cyan-50/70 dark:border-cyan-900 dark:bg-cyan-950/20",
  },
  {
    title: "Paiement et remboursement",
    truth:
      "Montant, devise, statut, date, référence, affectation, frais, remboursement et motif d’échec connu.",
    owner: "Prestataire de paiement puis personne qui rapproche",
    failure: "Accorder ou retirer l’accès depuis le seul retour du navigateur.",
    color:
      "border-emerald-200 bg-emerald-50/70 dark:border-emerald-900 dark:bg-emerald-950/20",
  },
  {
    title: "Droit d’accès",
    truth:
      "Entreprise, utilisateurs, fonctions, limites, début, fin, suspension, export et conservation des données.",
    owner: "Produit, support et propriétaire de la règle commerciale",
    failure:
      "Mapper aveuglément un statut externe vers une coupure de service.",
    color:
      "border-amber-200 bg-amber-50/70 dark:border-amber-900 dark:bg-amber-950/20",
  },
  {
    title: "Comptabilité et contrôle",
    truth:
      "Créance, encaissement affecté, cash non affecté, remboursement, écriture, période clôturée et justification de l’écart.",
    owner: "Finance ou expert-comptable selon l’organisation",
    failure:
      "Déclarer le mois juste parce que le solde bancaire semble plausible.",
    color:
      "border-rose-200 bg-rose-50/70 dark:border-rose-900 dark:bg-rose-950/20",
  },
];

const lifecycle = [
  {
    step: "1",
    event: "L’offre est acceptée",
    question:
      "Qui achète, quelle formule, quelle quantité, quelle devise et quand l’engagement commence-t-il ?",
    evidence:
      "Version de l’offre, identité de l’entreprise, prix, remise, date et preuve d’acceptation.",
    access: "Aucun accès, ou accès d’essai décidé séparément.",
    color: "#c4b5fd",
  },
  {
    step: "2",
    event: "Le compte et l’organisation sont créés",
    question:
      "Qui devient administrateur et comment les personnes sont-elles rattachées au client contractant ?",
    evidence:
      "Identifiants internes stables pour l’organisation et ses utilisateurs ; l’e-mail n’est pas une clé métier suffisante.",
    access: "Accès selon l’essai ou la date d’effet contractuelle.",
    color: "#93c5fd",
  },
  {
    step: "3",
    event: "La facture est préparée puis émise",
    question:
      "Quel document, pour quelle période, quelle entité, quelles lignes, quelle taxe et quelle échéance ?",
    evidence:
      "Identifiant de facture, période couverte et statut de finalisation indépendants du paiement.",
    access: "Peut rester ouvert avant paiement selon le contrat B2B.",
    color: "#67e8f9",
  },
  {
    step: "4",
    event: "Le paiement évolue",
    question:
      "Réussi, en traitement, authentification requise, échoué, remboursé ou rapproché par virement ?",
    evidence:
      "Événement signé, identifiant unique, référence de facture, date, montant, devise et résultat du traitement.",
    access:
      "Application d’une règle explicite ; jamais depuis la seule page de retour.",
    color: "#6ee7b7",
  },
  {
    step: "5",
    event: "La quantité ou l’usage arrive",
    question:
      "Quelle mesure fait foi, à quelle heure coupe la période et que devient un événement tardif ?",
    evidence:
      "Mesure brute, source, unité, période, clé d’idempotence et éventuelle correction.",
    access:
      "La consommation peut limiter une action sans réécrire une facture clôturée.",
    color: "#fde68a",
  },
  {
    step: "6",
    event: "La formule change",
    question:
      "Le changement est-il immédiat ou futur ? Que deviennent prix, reliquat, facture impayée et droits ?",
    evidence:
      "Ancienne et nouvelle formule, date d’effet, prorata choisi, facture ou avoir, décision sur les droits.",
    access: "Les nouveaux droits suivent la date décidée et testée.",
    color: "#fbbf24",
  },
  {
    step: "7",
    event: "Un paiement ou une facture est contesté",
    question:
      "S’agit-il d’une erreur de moyen, de quantité, de taxe, de contrat, d’affectation ou d’un litige ?",
    evidence:
      "Motif qualifié, personne responsable, réponse, avoir ou remboursement distinct et journal d’arbitrage.",
    access:
      "Maintien, limitation ou suspension selon la décision contractuelle documentée.",
    color: "#fdba74",
  },
  {
    step: "8",
    event: "Le client résilie ou sort",
    question:
      "Quand cessent facturation et accès ? Que peut-il encore consulter, exporter ou récupérer ?",
    evidence:
      "Demande, date d’effet, dernière facture, solde, export remis et traitement des données.",
    access:
      "Lecture, export, limitation ou fermeture selon le contrat et les règles applicables.",
    color: "#fda4af",
  },
];

const failureDecisions = [
  {
    situation: "Carte refusée au renouvellement",
    distinguish:
      "Le client peut vouloir payer, mais le moyen ou l’authentification a échoué.",
    decide:
      "Relance, nouveau moyen, délai, fonctions limitées et personnes averties.",
  },
  {
    situation: "Paiement asynchrone en traitement",
    distinguish:
      "L’abonnement peut paraître actif avant le résultat définitif du débit.",
    decide:
      "Droits provisoires, délai maximum, retour d’échec tardif et reprise.",
  },
  {
    situation: "Virement B2B non affecté",
    distinguish:
      "L’argent peut être reçu sans référence automatiquement exploitable.",
    decide:
      "Recherche, preuve, file de cash non affecté et règle de rapprochement manuel.",
  },
  {
    situation: "Facture contestée",
    distinguish:
      "Le problème porte sur la ligne, la quantité, la taxe ou le contrat, pas seulement sur le paiement.",
    decide:
      "Responsable, réponse, avoir éventuel, remboursement distinct et droits pendant le traitement.",
  },
  {
    situation: "Abonnement résilié",
    distinguish: "La résiliation est une décision prévue, pas un impayé.",
    decide:
      "Date de fin, dernière facture, export, accès restant et traitement des données.",
  },
];

const internationalRows = [
  [
    "France B2B domestique",
    "Identités légales, SIREN, TVA, nature de l’opération, adresses",
    "E-invoicing si l’opération entre dans le champ ; e-reporting de paiement selon l’exigibilité. STOP et spécialiste si champ, exonération ou exigibilité sont incertains.",
  ],
  [
    "Union européenne B2B",
    "Pays d’établissement, numéro de TVA vérifié, qualité d’assujetti, nature du service",
    "Lieu d’imposition généralement lié au client, avec exceptions et mécanismes possibles d’autoliquidation. STOP si numéro, établissement ou rôle du client n’est pas qualifié.",
  ],
  [
    "Union européenne B2C",
    "Résidence habituelle, preuves de localisation, nature électronique ou non du service",
    "Les services électroniques B2C suivent des règles particulières ; OSS peut devenir pertinent. Fiscaliste avant d’industrialiser pays, taux, seuil ou justificatif.",
  ],
  [
    "Royaume-Uni — services numériques",
    "Nature et automatisation du service, B2B/B2C, preuve VAT ou commerciale, résidence habituelle, établissements et rôle d’une plateforme",
    "HMRC rattache notamment le B2C numérique à la résidence habituelle du consommateur et pose une règle générale B2B liée au client, sous réserves. STOP sur preuves contradictoires, offre composite ou rôle de plateforme incertain.",
  ],
  [
    "Canada — GST/HST numérique",
    "Régime d’inscription, vente directe ou plateforme, fourniture taxable, résidence habituelle, province et preuve d’inscription normale GST/HST du client",
    "Collecteur et lieu de fourniture dépendent du régime, du canal et de la province. STOP si résidence, province, inscription du client ou responsabilité de plateforme ne sont pas établies.",
  ],
  [
    "Australie — services et produits numériques importés",
    "Résidence, ABN, inscription GST, usage professionnel, statut du fournisseur et rôle de l’electronic distribution platform",
    "Un ABN seul ne prouve pas une vente B2B hors GST. STOP si localisation, inscription, usage professionnel ou responsabilité de plateforme restent incertains.",
  ],
  [
    "États-Unis — sales tax par État",
    "États du vendeur, du client et des utilisateurs, nexus, qualification du produit, composants groupés, lieux d’usage et certificats",
    "Aucun booléen national « SaaS taxable » n’est défendable. Les règles et le sourcing varient par État ; STOP si nexus, lieu d’usage ou qualification de l’offre n’ont pas été instruits.",
  ],
  [
    "Autre pays hors Union européenne",
    "Pays, statut B2B/B2C, établissement, devise, moyen de paiement, nature exacte et rôle de chaque intermédiaire",
    "Taxe indirecte, facture, retenue ou enregistrement peuvent dépendre du pays. Ne jamais déduire le traitement du seul pays de la carte bancaire.",
  ],
  [
    "Merchant of Record",
    "Entité qui vend au client, encaisse, facture, rembourse et porte les obligations",
    "Peut déplacer certaines responsabilités. Qualifier le rôle réel, les pays couverts, les exclusions, la sortie et la comptabilisation.",
  ],
];

const testFamilies = acceptanceTests.reduce<
  Array<{
    title: string;
    tests: Array<(typeof acceptanceTests)[number]>;
  }>
>((families, test) => {
  const family = families.find((entry) => entry.title === test.family);
  if (family) {
    family.tests.push(test);
  } else {
    families.push({ title: test.family, tests: [test] });
  }
  return families;
}, []);

const tocItems = [
  { id: "reponse", label: "La réponse courte" },
  { id: "sources-verite", label: "Les sept sources de vérité" },
  { id: "cycle", label: "Le cycle complet d’un abonnement" },
  { id: "choisir", label: "Manuel, moteur, couche métier ou spécifique" },
  { id: "outil", label: "Calculateur TCO et rapprochement" },
  { id: "planor", label: "Planor sur douze mois" },
  { id: "webhooks", label: "Webhooks, ordre et idempotence" },
  { id: "changement", label: "Prorata et changement de formule" },
  { id: "impaye", label: "Impayés, relances et droits" },
  { id: "france", label: "France : facture électronique 2026–2027" },
  { id: "international", label: "Ventes internationales" },
  { id: "audit", label: "Les 24 tests de recette" },
  { id: "sources", label: "Sources, limites et suite" },
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
          { label: "Facturation des abonnements SaaS" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Du devis à la résiliation, reliez contrat, facture, paiement, revenu mensuel récurrent (MRR), comptabilité et droits d’accès. Comparez quatre architectures sur 24 mois et testez vos règles avant d’automatiser."
        heroAction={{ href: "#outil", label: "Tester mon modèle" }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "07",
            title: "sources à réconcilier",
            description: "",
            color: "violet",
          },
          {
            number: "24",
            title: "mois de coût total (TCO) comparable",
            description: "",
            color: "blue",
          },
          {
            number: "24",
            title: "tests de recette",
            description: "",
            color: "emerald",
          },
        ]}
        relatedLinks={[
          {
            href: "/guides/mvp-saas-quoi-inclure",
            label: "Définir le socle d’un MVP SaaS",
          },
          {
            href: "/guides/cahier-des-charges-saas",
            label: "Écrire un cahier des charges SaaS",
          },
          {
            href: "/guides/securite-saas-b2b",
            label: "Sécuriser un SaaS B2B",
          },
        ]}
        faqTitle="Questions fréquentes sur la facturation SaaS"
        faqItems={faqItems}
        showSidebarCta={false}
      >
        <div className="scroll-mt-24">
          <h2 id="reponse">La réponse courte</h2>
          <p className="lead">
            <strong>
              La bonne architecture de facturation est la plus simple qui
              reproduit votre contrat, rapproche chaque euro et applique les
              bons droits d’accès.
            </strong>{" "}
            Quelques abonnements homogènes peuvent rester manuels avec un
            contrôle mensuel nommé. Un moteur hébergé devient utile quand les
            mêmes transitions se répètent. Une couche métier s’impose lorsque
            les quantités, organisations, validations ou exceptions ne tiennent
            plus dans le modèle du prestataire. Un moteur totalement spécifique
            n’est défendable que si la facturation constitue réellement votre
            métier — sans reconstruire vous-même la collecte réglementée des
            paiements.
          </p>

          <p>
            Le piège consiste à choisir un outil avant d’avoir décrit les
            décisions. « Abonnement actif », « facture payée », « client à jour
            » et « accès autorisé » ne sont pas des synonymes. Stripe indique
            lui-même qu’un statut <code>active</code> ne prouve pas que toutes
            les factures ouvertes ont été réglées. Avec certains paiements
            asynchrones, l’abonnement peut même devenir actif avant l’issue
            définitive du débit. Votre système doit donc lire plusieurs preuves,
            appliquer une règle commerciale locale et conserver l’explication.
          </p>

          <InfoBox
            variant="amber"
            title="Ce guide fournit une méthode de décision, pas une consultation fiscale ou comptable"
          >
            <p className="mb-0">
              Les exemples Planor, coûts, taux d’effort et seuils sont fictifs.
              Une inconnue reste inconnue : elle ne devient jamais zéro. Les
              règles de TVA, la reconnaissance du revenu, les mentions de
              facture et les droits du client doivent être validés dans votre
              situation par les professionnels compétents.
            </p>
          </InfoBox>
        </div>

        <GuideToc items={tocItems} />

        <h2 id="sources-verite">
          Commencez par sept sources de vérité, pas par un bouton de paiement
        </h2>

        <p>
          Dans un petit SaaS, une même application peut stocker plusieurs de ces
          informations. Cela ne les rend pas interchangeables. Attribuez à
          chaque objet un propriétaire, un identifiant stable, une date d’effet
          et une preuve. Puis documentez le sens de chaque synchronisation :
          quelle source crée, laquelle confirme, laquelle peut corriger et qui
          arbitre leur désaccord.
        </p>

        <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
          {sourceRecords.map((record) => (
            <section
              key={record.title}
              className={`rounded-2xl border p-5 text-left sm:p-6 ${record.color}`}
            >
              <h3 className="m-0 text-base font-bold text-zinc-950 dark:text-zinc-100">
                {record.title}
              </h3>
              <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {record.truth}
              </p>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="font-semibold text-zinc-900 dark:text-zinc-100">
                    Propriétaire de la décision
                  </dt>
                  <dd className="mb-0 mt-1 text-zinc-600 dark:text-zinc-400">
                    {record.owner}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-rose-800 dark:text-rose-300">
                    Panne classique
                  </dt>
                  <dd className="mb-0 mt-1 text-zinc-600 dark:text-zinc-400">
                    {record.failure}
                  </dd>
                </div>
              </dl>
            </section>
          ))}
        </div>

        <p>
          La relation utile n’est donc pas « un client possède un abonnement »,
          mais une chaîne explicite : une organisation accepte une version
          d’offre ; cette offre crée un plan de facturation ; le plan produit
          une ou plusieurs factures ; chaque paiement ou remboursement s’affecte
          à un document ; la politique commerciale transforme les événements
          qualifiés en droits. La comptabilité rapproche le tout sans effacer
          les exceptions.
        </p>

        <FormulaBox>
          {`Offre acceptée → plan de facturation → facture ou avoir
Facture ouverte + paiement affecté → créance explicable
Contrat + état financier qualifié → décision de droit d’accès

À interdire :
retour navigateur → accès définitif
statut "active" → toutes les factures payées
solde bancaire → mois rapproché`}
        </FormulaBox>

        <h2 id="cycle">
          Dessinez huit événements avant d’automatiser le premier
        </h2>

        <p>
          Une architecture se juge sur les transitions, pas sur la beauté de son
          écran d’abonnement. Pour chaque événement ci-dessous, écrivez
          l’entrée, la preuve conservée, la décision, l’effet financier, l’effet
          sur les droits et le chemin de reprise. Si la réponse dépend de la
          mémoire d’une personne, rendez cette intervention visible plutôt que
          de simuler une automatisation.
        </p>

        <div className="not-prose relative my-8 space-y-5">
          {lifecycle.map((item, index) => (
            <section
              key={item.step}
              className="relative rounded-2xl border border-zinc-200 bg-white p-5 text-left dark:border-zinc-800 dark:bg-zinc-950 sm:p-6"
            >
              <div className="flex items-start gap-4">
                <span
                  className="flex size-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-zinc-950"
                  style={{ backgroundColor: item.color }}
                >
                  {item.step}
                </span>
                <div className="min-w-0">
                  <h3 className="m-0 text-base font-bold text-zinc-950 dark:text-zinc-100 sm:text-lg">
                    {item.event}
                  </h3>
                  <p className="mb-0 mt-2 text-sm font-medium leading-relaxed text-zinc-800 dark:text-zinc-200">
                    {item.question}
                  </p>
                </div>
              </div>
              <dl className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-zinc-50 p-4 dark:bg-zinc-900">
                  <dt className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                    Preuve à garder
                  </dt>
                  <dd className="mb-0 mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {item.evidence}
                  </dd>
                </div>
                <div className="rounded-xl bg-zinc-50 p-4 dark:bg-zinc-900">
                  <dt className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                    Droit d’accès
                  </dt>
                  <dd className="mb-0 mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {item.access}
                  </dd>
                </div>
              </dl>
              {index < lifecycle.length - 1 && (
                <div className="absolute -bottom-5 left-10 flex h-5 w-px bg-zinc-300 dark:bg-zinc-700" />
              )}
            </section>
          ))}
        </div>

        <InfoBox
          variant="blue"
          title="Un état externe déclenche une enquête locale, pas une vérité universelle"
        >
          <p className="mb-0">
            Un prestataire décrit son propre objet. Votre application doit
            encore retrouver la facture et le contrat concernés, vérifier la
            version reçue, charger l’état courant et appliquer votre politique.
            Conservez le statut brut pour l’audit, mais exposez au support une
            décision formulée en langage métier.
          </p>
        </InfoBox>

        <h2 id="choisir">
          Comparez quatre architectures pour le même besoin et la même durée
        </h2>

        <p>
          « Stripe ou développement sur mesure ? » est une fausse alternative.
          La collecte du paiement, le moteur de facturation, la couche métier et
          la comptabilité sont des rôles différents. Un produit peut conserver
          un prestataire de paiement tout en développant une couche locale pour
          les contrats, l’usage et les droits. À l’inverse, une équipe peut
          garder une facture manuelle tant que le contrôle est fiable.
        </p>

        <GuideTable
          caption="Comparaison des quatre architectures de facturation SaaS"
          headers={["Option", "Convient quand", "À vérifier avant de choisir"]}
          rows={[
            [
              "Processus manuel explicite",
              "Peu de clients, offres homogènes, personne nommée, contrôle mensuel tenable",
              "Chronométrer un cycle complet et compter erreurs, relances et exceptions. Risque : dépendance à une personne. Sortie : exporter clients, factures, paiements, droits et règles.",
            ],
            [
              "Moteur hébergé",
              "Offres répétées, moyens de paiement standards, proratas et relances configurables",
              "Rejouer les mauvais cas et lire le contrat. Risque : le réglage par défaut devient la règle commerciale. Sortie : identifiants, données et procédure de rapprochement.",
            ],
            [
              "Moteur hébergé + couche métier",
              "Contrats B2B, quantités, validations, organisations ou droits propres au produit",
              "Relier les deux modèles et désigner la source de chaque champ. Risque : double vérité. Sortie : journal d’événements, reconstruction et mode dégradé.",
            ],
            [
              "Moteur spécifique, paiement externalisé",
              "La logique de facturation crée un avantage produit impossible à représenter autrement",
              "Tester cas réels, coût, obligations et continuité. Risque : sous-estimer fiscalité et maintenance. Sortie : documentation reconstructible, tests, exports et responsable.",
            ],
          ]}
        />

        <p>
          Le coût comparable doit inclure la mise en place, l’abonnement, les
          frais variables réellement dans le périmètre et surtout le temps
          interne. Ajoutez ensuite les éléments propres à votre décision :
          migration, accompagnement comptable, incidents, surveillance,
          réversibilité, support et perte liée aux erreurs. Une option
          incomplète reste visible mais sort du classement ; sinon le moins
          documenté gagne artificiellement.
        </p>

        <InfoBox
          variant="amber"
          title="Un vendeur officiel (Merchant of Record) n’est pas une simple cinquième ligne tarifaire"
        >
          <p className="mb-0">
            Son rôle peut englober la vente au client, l’encaissement, la
            facturation, les remboursements et certaines obligations fiscales.
            Comparez donc le rôle contractuel, les pays couverts, les
            exclusions, la disponibilité des données, la comptabilisation et la
            sortie — pas seulement un pourcentage affiché.
          </p>
        </InfoBox>

        <h2 id="outil">
          Calculez le TCO, puis rapprochez un mois sans remplacer les inconnues
        </h2>

        <p>
          Le dossier ci-dessous sépare deux décisions. Le premier volet compare
          quatre options sur vingt-quatre mois avec les mêmes hypothèses. Le
          second vérifie qu’un mois explique factures, avoirs, paiements,
          remboursements, créance et droits. Les calculs restent dans le
          navigateur. Le classeur téléchargeable reprend les formules, douze
          mois fictifs, dix règles commerciales, la même matrice canonique de
          vingt-quatre tests, quinze sources et les contrôles de cohérence.
        </p>

        <SubscriptionBillingDecisionDossier />

        <p>
          Dans l’exemple central, le processus manuel coûte 12 960 € sur
          vingt-quatre mois, le moteur hébergé 12 760 €, la couche métier 34 820
          € et le moteur spécifique 98 160 €. Ces montants ne sont ni des prix
          de marché ni un devis : ils vérifient la propagation des hypothèses.
          Le croisement théorique entre manuel et hébergé se situe à 96,3768
          clients, donc le premier client entier au-delà du croisement est le
          97e. Dire « 74 clients » aurait mélangé une sensibilité sans frais
          variables avec le scénario central.
        </p>

        <GuideTable
          caption="Sensibilité fictive du seuil entre le processus manuel et le moteur hébergé"
          headers={["Hypothèses", "Premier client entier", "Lecture"]}
          rows={[
            [
              "30 €/h · 100 € / client / mois · 0,7 %",
              "183",
              "Le temps manuel pèse moins",
            ],
            [
              "45 €/h · 100 € / client / mois · 0,7 %",
              "97",
              "Scénario central",
            ],
            [
              "70 €/h · 100 € / client / mois · 0,7 %",
              "50",
              "Le temps manuel pèse davantage",
            ],
            [
              "45 €/h · 300 € / client / mois · 0,7 %",
              "247",
              "Les frais proportionnels repoussent le seuil",
            ],
            [
              "45 €/h · 100 € / client / mois · 0 %",
              "74",
              "Sensibilité sans frais variables, pas résultat central",
            ],
          ]}
        />

        <p>
          Le volume seul ne décide jamais. Dix contrats uniques peuvent coûter
          plus cher à opérer que cinq cents abonnements identiques. Utilisez le
          seuil comme détecteur d’hypothèses : s’il bouge fortement avec le coût
          interne, le panier ou les frais, votre décision dépend davantage de
          données à mesurer que d’une préférence technique.
        </p>

        <h2 id="planor">
          Cas fictif Planor : relier MRR, factures, cash et créance sur douze
          mois
        </h2>

        <p>
          Planor est entièrement fictif : il ne décrit ni un client ni un
          témoignage réel. Il commence janvier à 0 € de MRR et termine décembre
          à 3 800 €. Son ARR indicatif — la projection annuelle obtenue ici en
          multipliant le MRR final par douze — atteint 45 600 €. Sur l’année
          fictive, 4 100 € de nouveau MRR et 300 € d’expansion compensent 200 €
          de contraction et 400 € de churn. La somme des MRR de fin de mois
          atteint 37 500 €. Elle n’est pas égale aux 41 000 € facturés, car
          Planor a aussi 3 500 € de mise en route et d’usage ponctuel. Ce pont
          doit être écrit ; sinon une différence explicable ressemble à une
          panne.
        </p>

        <FormulaBox>
          {`MRR final = MRR initial + nouveau MRR + expansion
            − contraction − churn

Planor :
0 € + 4 100 € + 300 € − 200 € − 400 € = 3 800 € de MRR final
3 800 € × 12 = 45 600 € d’ARR indicatif

37 500 € de somme des MRR mensuels
+ 3 500 € de mise en route et d’usage ponctuel
= 41 000 € de factures brutes`}
        </FormulaBox>

        <p>
          Le rapprochement financier raconte une autre histoire. Les 350 €
          d’avoirs ramènent les factures nettes à 40 650 €. Planor avait affecté
          40 750 € de paiements, puis rembourse 100 € rattachés à la correction
          documentée : le cash net revient à 40 650 €. La créance finale est
          nulle selon l’équation complète : ouverture + factures nettes −
          paiements affectés + remboursements affectés. Sans l’avoir, le
          remboursement aurait recréé 350 € de créance ou exigé un autre compte
          de contrepartie explicite.
        </p>

        <GuideTable
          caption="Rapprochement annuel fictif de Planor"
          headers={["Grandeur", "Montant", "Calcul et lecture"]}
          rows={[
            [
              "Factures brutes",
              "41 000 €",
              "Somme des documents émis avant avoirs : volume facturé, pas cash disponible.",
            ],
            [
              "Factures nettes",
              "40 650 €",
              "41 000 € − 350 € d’avoirs : créance issue des factures après corrections.",
            ],
            [
              "Cash reçu et affecté",
              "40 750 €",
              "Paiements reliés aux factures : encaissements identifiés, pas revenu comptable.",
            ],
            [
              "Cash net",
              "40 650 €",
              "40 750 € − 100 € remboursés : trésorerie nette dans le cadre étudié.",
            ],
            [
              "Créance finale",
              "0 €",
              "0 € + 40 650 € − 40 750 € + 100 € : le remboursement affecté réouvre la créance sauf correction documentée.",
            ],
          ]}
        />

        <p>
          Pour clôturer, ne comparez pas seulement deux totaux. Conservez la
          liste des éléments : facture, avoir, paiement, remboursement, cash non
          affecté et correction tardive. Un écart de 1 € doit provoquer un STOP
          visible. Une donnée manquante doit produire « à revoir », pas un zéro
          rassurant. Une période clôturée ne se réécrit pas silencieusement
          lorsqu’un événement tardif arrive : ouvrez une file d’ajustement avec
          un propriétaire et une trace.
        </p>

        <h2 id="webhooks">
          Un webhook fiable vérifie, déduplique, recharge puis répond vite
        </h2>

        <p>
          Les événements de paiement sont asynchrones. Le navigateur peut être
          fermé, le réseau peut couper et le prestataire peut réessayer. Stripe
          ne garantit pas l’ordre de livraison. Il recommande notamment de
          vérifier la signature, de gérer les doublons, de traiter
          asynchronement et de récupérer les objets manquants depuis l’API si
          nécessaire. Votre endpoint ne doit donc pas effectuer tout le travail
          métier avant de répondre.
        </p>

        <GuideTable
          caption="Pipeline minimal d’un webhook de facturation"
          headers={["Étape", "Action et trace", "En cas d’échec"]}
          rows={[
            [
              "1. Vérifier",
              "Contrôler la signature sur le corps brut et garder le résultat.",
              "Refus explicite ; aucun effet métier",
            ],
            [
              "2. Persister",
              "Enregistrer eventId, type, objet, version, empreinte et heure, plus le payload validé ou un snapshot normalisé durable : l’événement reste traçable et la décision peut être rejouée.",
              "Réessai sans perte si la persistance échoue",
            ],
            [
              "3. Dédupliquer",
              "Comparer l’identifiant, puis objet + type si nécessaire. Même contenu = no-op.",
              "STOP et arbitrage sur conflit d’idempotence",
            ],
            [
              "4. Mettre en file",
              "Répondre rapidement en 2xx après acceptation durable ; garder tâche et tentatives.",
              "Nouvelle tentative contrôlée",
            ],
            [
              "5. Recharger",
              "Lire l’état courant de facture, paiement ou abonnement pour ne pas dépendre de l’ordre.",
              "Attente ou reprise si l’objet manque",
            ],
            [
              "6. Appliquer",
              "Exécuter une transition atomique et garder le résultat : une écriture, un effet de droit.",
              "Compensation ou file d’erreur, jamais double application",
            ],
          ]}
        />

        <InfoBox
          variant="amber"
          title="Clé d’idempotence API et déduplication de webhook sont deux protections distinctes"
        >
          <p className="mb-0">
            La première rend idempotentes les nouvelles tentatives d’une même
            requête <code>POST</code> que votre application adresse à l’API,
            selon la{" "}
            <a
              href="https://docs.stripe.com/api/idempotent_requests"
              target="_blank"
              rel="noopener noreferrer"
            >
              documentation Stripe sur les requêtes idempotentes
            </a>
            . La seconde empêche de réappliquer une notification reçue. Utiliser
            la même expression pour les deux ne remplace ni le stockage des
            événements traités, ni la détection d’un même identifiant reçu avec
            un contenu différent.
          </p>
        </InfoBox>

        <p>
          Le journal doit permettre trois réponses rapides au support : «
          qu’avons-nous reçu ? », « quelle règle avons-nous appliquée ? » et «
          quel état externe et local avons-nous observé à cet instant ? ». Sans
          ces trois niveaux, l’équipe voit seulement le résultat final et
          corrige à la main, ce qui crée une nouvelle divergence.
        </p>

        <h2 id="changement">
          Un prorata n’est correct qu’après avoir défini la politique de
          changement
        </h2>

        <p>
          Avant d’ajouter un bouton « passer à l’offre supérieure », répondez à
          six questions : la date d’effet, la date des nouveaux droits, le
          traitement du reliquat, la présence d’une facture antérieure impayée,
          le sort des remises et quantités, et la façon d’expliquer le résultat
          au client. Ajoutez l’usage déjà consommé si le tarif n’est pas
          strictement forfaitaire.
        </p>

        <InfoBox
          variant="amber"
          title="Exemple illustratif fictif — ce calcul n’est pas une facture"
        >
          <p className="mb-0">
            Cet exemple ne décrit ni un client ni un témoignage réel. Planor
            imagine un passage de 100 € HT à 200 € HT au milieu d’une période de
            trente jours, avec quinze jours restants. Aucun impayé, avoir,
            remise, quantité, usage, taxe ou arrondi n’est inclus.
          </p>
        </InfoBox>

        <FormulaBox>
          {`Différence de prix : 200 € HT − 100 € HT = 100 € HT
Part restante : 15 jours ÷ 30 jours = 0,5
Écart brut illustratif : 100 € HT × 0,5 = 50 € HT

Variantes à tester séparément :
• upgrade immédiat avec facture et paiement
• upgrade immédiat avec facture antérieure impayée
• downgrade au renouvellement
• remise fixe ou proportionnelle
• quantité et usage déjà consommé
• avoir existant et arrondis du prestataire`}
        </FormulaBox>

        <p>
          Stripe documente plusieurs comportements de prorata et permet des
          mises à jour conditionnées au paiement dans certains cas. Ce sont des
          mécanismes, pas votre politique. Rejouez une date réelle dans le bac à
          sable, inspectez les lignes produites, forcez l’échec du paiement et
          vérifiez les droits. Conservez la facture attendue comme fixture de
          non-régression.
        </p>

        <h2 id="impaye">
          L’impayé est une branche commerciale, financière et produit
        </h2>

        <p>
          Le mot « impayé » masque plusieurs états. Une facture peut être
          ouverte sans retard, un paiement peut demander une authentification,
          un virement peut attendre son affectation, ou une ligne peut être
          contestée. Une relance automatique n’est utile que si le message, le
          destinataire, le moyen de régularisation et la conséquence sur le
          service correspondent à la situation.
        </p>

        <div className="not-prose my-8 space-y-3">
          {failureDecisions.map((failure) => (
            <section
              key={failure.situation}
              className="grid gap-3 rounded-2xl border border-zinc-200 bg-white p-5 text-left dark:border-zinc-800 dark:bg-zinc-950 sm:grid-cols-[0.8fr_1fr_1fr]"
            >
              <h3 className="m-0 text-sm font-bold text-zinc-950 dark:text-zinc-100">
                {failure.situation}
              </h3>
              <p className="mb-0 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {failure.distinguish}
              </p>
              <p className="mb-0 text-sm font-medium leading-relaxed text-zinc-900 dark:text-zinc-100">
                À décider : {failure.decide}
              </p>
            </section>
          ))}
        </div>

        <p>
          Mesurez au moins le nombre de factures arrivées à échéance, la part
          régularisée, le délai médian, les montants contestés, le cash non
          affecté et les comptes dont les droits contredisent la politique.
          N’inventez pas un taux de récupération sans historique. Dans le
          classeur, l’exemple de relance distingue trois scénarios fictifs de
          gain — 180 €, 360 € et 480 € — uniquement pour vérifier la formule et
          rendre l’hypothèse modifiable.
        </p>

        <h2 id="france">
          France : préparez maintenant les données de la réforme 2026–2027
        </h2>

        <p>
          Le calendrier officiel consulté le 28 juillet 2026 fixe deux étapes.
          Au <strong>1er septembre 2026</strong>, toutes les entreprises
          concernées doivent pouvoir recevoir des factures électroniques ; les
          grandes entreprises et ETI doivent également émettre leurs factures
          électroniques et transmettre leur e-reporting. Au{" "}
          <strong>1er septembre 2027</strong>, l’obligation d’émission et de
          e-reporting s’étend aux PME et micro-entreprises concernées.
        </p>

        <p>
          L’administration précise qu’une plateforme agréée assure la réception
          et la transmission des factures électroniques ainsi que les données
          réglementaires de facture, transaction et paiement. La liste des
          plateformes évolue : vérifiez l’agrément courant sur impots.gouv.fr,
          les fonctions réellement couvertes et le contrat. Un logiciel qui
          produit un PDF ou un export ne devient pas pour autant la plateforme
          agréée de l’entreprise.
        </p>

        <GuideTable
          caption="Quatre mentions nouvelles à préparer pour la facturation électronique"
          headers={[
            "Donnée",
            "Quand elle s’applique",
            "Champ produit à préparer",
          ]}
          rows={[
            [
              "Numéro SIREN du client",
              "Factures entrant dans la réforme selon le calendrier applicable",
              "Identité légale du client distincte du compte utilisateur",
            ],
            [
              "Catégorie de l’opération",
              "Biens, prestations de services, ou combinaison des deux",
              "Nature structurée de chaque opération et de chaque ligne",
            ],
            [
              "Option pour la TVA sur les débits",
              "Lorsque le prestataire a valablement exercé cette option",
              "Décision fiscale validée, datée et non déduite du paiement",
            ],
            [
              "Adresse complète de livraison",
              "Pour un bien si elle diffère de l’adresse de facturation",
              "Adresse de livraison séparée ; ne pas la fabriquer pour un service",
            ],
          ]}
        />

        <p>
          Distinguez aussi l’e-reporting de transaction de celui des paiements.
          La fiche DGFiP sur les paiements vise notamment les opérations dont la
          TVA est exigible à l’encaissement, par exemple des prestations de
          services, hors option pour les débits et opérations autoliquidées.
          Pour une facture électronique concernée, le montant encaissé, la date
          et la référence peuvent être transmis via le statut enrichi. Pour
          d’autres opérations, les modalités diffèrent. Le simple statut «
          facture émise » ne contient donc pas toute l’information attendue.
        </p>

        <InfoBox
          variant="amber"
          title="STOP fiscal : ne codez pas une conclusion générale dans le SaaS"
        >
          <p className="mb-0">
            Si l’établissement, la qualité du client, la nature de l’opération,
            l’exigibilité de la TVA, l’option pour les débits ou
            l’autoliquidation ne sont pas qualifiés, conservez le cas et bloquez
            la décision fiscale. Routez-le vers l’expert-comptable ou le
            fiscaliste ; une valeur par défaut silencieuse crée une fausse
            conformité.
          </p>
        </InfoBox>

        <h2 id="international">
          À l’international, qualifiez d’abord le client, le service et le pays
        </h2>

        <p>
          La documentation internationale de Stripe, Paddle, Zuora ou Maxio est
          utile pour observer les événements, la récupération des paiements, les
          plans et les contrôles. Elle ne tranche pas la TVA européenne ni les
          obligations françaises. La Commission européenne rappelle que le lieu
          d’imposition d’un service dépend de sa nature et du statut du client.
          En règle générale, les services B2B sont rattachés au lieu du client
          et les services B2C au lieu du fournisseur, mais les services
          électroniques et d’autres catégories comportent des règles ou
          exceptions spécifiques.
        </p>

        <GuideTable
          caption="Matrice de préqualification des ventes SaaS internationales"
          headers={["Flux", "Informations minimales", "Traitement et STOP"]}
          rows={internationalRows}
        />

        <GuideTable
          caption="Trois traitements administratifs contradictoires du SaaS aux États-Unis"
          headers={["État", "Exemple officiel", "Limite de lecture"]}
          rows={[
            [
              "New York",
              "L’accès distant à un logiciel préécrit est généralement taxable ; le lieu d’usage des utilisateurs participe au sourcing.",
              "Ne pas transposer aux logiciels réellement sur mesure ni aux services séparés. Le bulletin reste une guidance générale.",
            ],
            [
              "Texas",
              "Les vendeurs de SaaS figurent parmi les prestataires de data processing ; 20 % du prix de ce service est exonéré.",
              "Ne pas conclure que toute offre SaaS est taxable à 80 % : les fonctions réellement vendues, exemptions et lieux d’usage restent à qualifier.",
            ],
            [
              "Californie",
              "Le pur accès distant n’est pas taxable si le client ne reçoit aucune copie et si le vendeur conserve possession et contrôle du logiciel.",
              "Un support physique, une copie, un équipement ou une offre composite peut changer le traitement.",
            ],
          ]}
        />

        <p>
          Ces trois positions administratives, revérifiées le 28 juillet 2026,
          démontrent précisément pourquoi un booléen national « SaaS taxable »
          serait trompeur. Elles ne remplacent pas l’analyse du produit, du
          nexus, du lieu d’usage, des exemptions et des composants groupés dans
          chaque État.
        </p>

        <p>
          Conservez les preuves utilisées à la date de la vente : identité
          légale, pays, statut professionnel, numéro de TVA lorsqu’il est
          pertinent, adresses cohérentes, devise, nature du service et résultat
          de la qualification. Ne vous fiez pas à une seule adresse IP ou au
          pays de la carte. Définissez aussi ce qui se passe lorsqu’une preuve
          expire, se contredit ou arrive après la facture.
        </p>

        <p>
          Pour un prix affiché toutes taxes comprises, documentez comment sont
          traités arrondis, taux multiples, avoirs, remboursements et changement
          de pays. Pour un prix hors taxes B2B, documentez la preuve du statut,
          le texte porté sur la facture et l’éventuelle autoliquidation. Pour un
          Merchant of Record, documentez qui est juridiquement le vendeur et
          quel document votre propre société reçoit. Dans les trois cas, le
          support doit pouvoir expliquer la facture sans reconstruire le flux
          depuis des captures d’écran.
        </p>

        <h2 id="audit">
          Rejouez vingt-quatre mauvais cas avant de déclarer le cycle prêt
        </h2>

        <p>
          Un test « le paiement réussit » vérifie le chemin le plus facile. La
          recette utile cherche les doublons, l’ordre inversé, l’inconnu,
          l’impayé, la correction et la sortie. Pour chaque test, notez le
          contexte, l’action, les documents attendus, les écritures, les droits,
          les notifications, la preuve et le propriétaire de la correction.
        </p>

        <div className="not-prose my-8 grid gap-4 lg:grid-cols-2">
          {testFamilies.map((family) => (
            <section
              key={family.title}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 text-left dark:border-zinc-800 dark:bg-zinc-900/60"
            >
              <h3 className="m-0 text-base font-bold text-zinc-950 dark:text-zinc-100">
                {family.title}
              </h3>
              <ul className="mb-0 mt-4 space-y-3 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {family.tests.map((test) => (
                  <li key={test.id}>
                    <strong>
                      {Number(test.id.slice(2))}. {test.case}
                    </strong>{" "}
                    : {test.article}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <GuideTable
          caption="Critères de sortie de recette"
          headers={["Contrôle", "PASS", "À revoir ou STOP"]}
          rows={[
            [
              "Complétude",
              "Toutes les preuves obligatoires sont présentes",
              "À revoir si une information non financière manque avec un responsable nommé. STOP si montant, devise, contrat ou règle fiscale requis sont inconnus.",
            ],
            [
              "Rapprochement",
              "Écart inférieur à 0,01 dans la devise du test",
              "À revoir si du cash non affecté reste visible. STOP sur écart inexpliqué, valeur impossible ou double effet.",
            ],
            [
              "Droits",
              "Aucun compte ne contredit la politique validée",
              "À revoir si une décision temporaire est datée et surveillée. STOP sur accès sans politique, mauvais client ou incohérence active.",
            ],
            [
              "Événements",
              "Doublons no-op, reprise et ordre inversé maîtrisés",
              "À revoir si un retard non financier reste visible. STOP sur conflit d’idempotence ou événement financier après clôture.",
            ],
          ]}
        />

        <p>
          Le bon livrable n’est pas seulement une suite de captures vertes.
          Remettez un journal de tests, les fixtures, les écarts, les décisions
          manuelles restantes, les responsables et la procédure de reprise. Le
          classeur fourni sert de trame ; il faut remplacer Planor par un
          échantillon représentatif et faire valider les branches financières,
          fiscales et contractuelles.
        </p>

        <GuideInlineCTA
          title="Faire relire un cycle de facturation déjà documenté"
          description="Apportez une offre, une facture, un paiement, un mauvais cas et votre règle de droits. Nous pouvons challenger le périmètre, les sources de vérité, les tests et le choix entre processus manuel, moteur hébergé, couche métier ou développement spécifique."
          tags={[
            "Dossier avant devis",
            "Option simple conservée si suffisante",
            "Fiscalité routée vers le professionnel compétent",
          ]}
          ctaLabel="Faire relire mon dossier"
          ctaHref="/demarrer-un-projet"
          ctaService="saas"
          ctaSource="guide-facturation-saas"
          showPhone={false}
        />

        <h2 id="sources">Sources officielles, limites et chemin de suite</h2>

        <p>
          Les sources ci-dessous ont été revérifiées le 28 juillet 2026. Les
          pages de prestataires décrivent leur produit ; les pages
          administratives décrivent un cadre général. Ni les unes ni les autres
          ne remplacent la qualification de votre contrat, de votre opération et
          de vos données.
        </p>

        <ul>
          <li>
            <a
              href="https://docs.stripe.com/webhooks"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stripe — recevoir et sécuriser les webhooks
            </a>{" "}
            : signatures, doublons, ordre non garanti, traitement asynchrone et
            récupération des objets.
          </li>
          <li>
            <a
              href="https://docs.stripe.com/api/idempotent_requests"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stripe — requêtes API idempotentes
            </a>{" "}
            : protection des requêtes <code>POST</code>, distincte de la
            déduplication des webhooks.
          </li>
          <li>
            <a
              href="https://docs.stripe.com/billing/subscriptions/overview"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stripe — fonctionnement et états des abonnements
            </a>{" "}
            : distinction entre abonnement, facture et paiement, y compris pour
            les moyens asynchrones.
          </li>
          <li>
            <a
              href="https://docs.stripe.com/billing/subscriptions/prorations"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stripe — proratas
            </a>{" "}
            : mécanismes possibles lors des changements de prix ou quantité.
          </li>
          <li>
            <a
              href="https://www.economie.gouv.fr/tout-savoir-sur-la-facturation-electronique-pour-les-entreprises"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ministère de l’Économie — facturation électronique
            </a>{" "}
            : calendrier 2026–2027, périmètre général et quatre nouvelles
            mentions.
          </li>
          <li>
            <a
              href="https://www.impots.gouv.fr/facturation-electronique-et-plateformes-agreees"
              target="_blank"
              rel="noopener noreferrer"
            >
              DGFiP — facturation électronique et plateformes agréées
            </a>{" "}
            : rôle des plateformes et accès à la liste courante.
          </li>
          <li>
            <a
              href="https://www.impots.gouv.fr/sites/default/files/media/1_metier/2_professionnel/EV/2_gestion/290_facturation_electronique/fiches_reforme/fiche-e-reporting_paiements.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              DGFiP — fiche e-reporting des paiements
            </a>{" "}
            : opérations concernées, exclusions et données d’encaissement.
          </li>
          <li>
            <a
              href="https://www.economie.gouv.fr/entreprises/gerer-son-entreprise-au-quotidien/gerer-sa-comptabilite-et-ses-demarches/mentions-obligatoires-dune-facture-tout-savoir"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ministère de l’Économie — mentions obligatoires d’une facture
            </a>
            .
          </li>
          <li>
            <a
              href="https://taxation-customs.ec.europa.eu/taxation/vat/vat-directive/place-taxation_en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Commission européenne — lieu d’imposition des services
            </a>{" "}
            : règles générales B2B/B2C et principales exceptions.
          </li>
          <li>
            <a
              href="https://www.gov.uk/guidance/the-vat-rules-if-you-supply-digital-services-to-private-consumers"
              target="_blank"
              rel="noopener noreferrer"
            >
              HMRC — VAT sur les services numériques vendus aux consommateurs
            </a>{" "}
            : lieu de fourniture, statut du client, preuves de localisation et
            rôle possible des plateformes.
          </li>
          <li>
            <a
              href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/digital-economy-gsthst/charge-collect/cross-border.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Canada Revenue Agency — produits et services numériques
              transfrontières
            </a>{" "}
            : régime GST/HST, résidence habituelle, province et plateformes.
          </li>
          <li>
            <a
              href="https://www.ato.gov.au/law/view/document?DocID=GST%2FGSTR20171%2FNAT%2FATO%2F00001"
              target="_blank"
              rel="noopener noreferrer"
            >
              Australian Taxation Office — GSTR 2017/1
            </a>{" "}
            : consommateur australien, preuves, ABN, inscription GST et
            fournitures numériques importées.
          </li>
          <li>
            <a
              href="https://www.mtc.gov/uniformity/sales-tax-on-digital-products/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Multistate Tax Commission — sales tax sur les produits numériques
            </a>{" "}
            : travaux comparatifs et renvoi aux règles propres à chaque État,
            sans avis national unique sur le SaaS.
          </li>
          <li>
            <a
              href="https://www.tax.ny.gov/pubs_and_bulls/tg_bulletins/st/computer_software.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              New York Department of Taxation and Finance — Computer Software
            </a>{" "}
            : accès distant aux logiciels préécrits, sourcing par lieu d’usage
            et limites du bulletin.
          </li>
          <li>
            <a
              href="https://comptroller.texas.gov/taxes/publications/96-259.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              Texas Comptroller — Taxable Services
            </a>{" "}
            : SaaS qualifié de data processing, exonération partielle et
            distinction avec un service professionnel assisté par ordinateur.
          </li>
          <li>
            <a
              href="https://cdtfa.ca.gov/taxes-and-fees/manuals/am-04.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              California Department of Tax and Fee Administration — Audit
              Manual, section 0421.03
            </a>{" "}
            : conditions dans lesquelles le pur accès distant au logiciel
            demeure non taxable.
          </li>
        </ul>

        <p>
          Ce guide ne fixe ni taux d’impayé, ni cadence de relance universelle,
          ni politique de suspension, ni traitement de TVA international, ni
          reconnaissance comptable du revenu. Il ne recommande aucun prestataire
          et ne chiffre pas les frais qui ne figurent pas dans le modèle. Faites
          valider les règles comptables, fiscales, juridiques et contractuelles
          avant mise en production.
        </p>

        <p>
          Si la première version du produit n’est pas encore bornée, commencez
          par{" "}
          <Link href="/guides/mvp-saas-quoi-inclure">
            définir le contenu du MVP SaaS
          </Link>
          . Si les règles sont connues mais pas testables, transformez-les en{" "}
          <Link href="/guides/cahier-des-charges-saas">
            cahier des charges SaaS vérifiable
          </Link>
          . Enfin, reliez facturation, accès et journal d’événements au{" "}
          <Link href="/guides/securite-saas-b2b">
            dossier de sécurité SaaS B2B
          </Link>
          .
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
