import type { Metadata } from "next";
import Link from "next/link";
import {
  FormulaBox,
  GuideInlineCTA,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { GuideLayout } from "@/components/guides/guide-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
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

const faqItems = [
  {
    question: "Stripe suffit-il pour gérer un abonnement SaaS ?",
    answer:
      "Stripe peut porter le paiement, les factures et des états d’abonnement selon les produits utilisés. Votre SaaS doit encore décider quelle offre le client a acceptée, quels droits sont ouverts, comment traiter les exceptions et quelles données transmettre à la comptabilité.",
  },
  {
    question: "Faut-il proposer mensuel et annuel dès le lancement ?",
    answer:
      "Non. Proposez uniquement les rythmes que vous savez vendre, facturer, rapprocher et résilier proprement. Une formule supplémentaire crée des cas de changement, remboursement, renouvellement et support qu’il faut tester.",
  },
  {
    question: "Peut-on offrir un essai sans carte bancaire ?",
    answer:
      "Oui, certains outils le permettent. Écrivez alors ce qui arrive à la fin de l’essai sans moyen de paiement : accès limité, suspension, conservation des données, délai de suppression et moyen de reprendre.",
  },
  {
    question: "Comment gérer un changement de formule en cours de mois ?",
    answer:
      "Décidez si le changement est immédiat ou au prochain renouvellement, quels droits changent tout de suite et si une différence est facturée ou créditée. Faites tester la règle sur une date réelle ; ne laissez pas le réglage par défaut du prestataire devenir votre politique commerciale.",
  },
  {
    question: "Faut-il couper l’accès dès qu’un paiement échoue ?",
    answer:
      "Pas automatiquement. Un échec de carte, une facture B2B en attente et un litige ne décrivent pas la même situation. Définissez les relances, la personne responsable, les fonctions éventuellement limitées et la condition de suspension selon votre contrat et votre risque.",
  },
  {
    question: "La facture électronique concerne-t-elle un SaaS B2B ?",
    answer:
      "Le calendrier français concerne les entreprises assujetties et les opérations entrant dans le périmètre de la réforme, avec réception à partir du 1er septembre 2026 et émission échelonnée. Vérifiez votre situation, vos clients et vos flux avec votre expert-comptable ou l’administration.",
  },
];

const fourRecords = [
  {
    title: "Offre acceptée",
    stores:
      "Client contractant, formule, quantité, prix, rythme, date d’effet, conditions négociées et bon de commande.",
    owner: "Vente ou administration commerciale",
    error:
      "Créer un abonnement pour une adresse e-mail sans savoir quelle société a acheté.",
    color:
      "border-violet-200 bg-violet-50/70 dark:border-violet-900 dark:bg-violet-950/20",
  },
  {
    title: "Facture",
    stores:
      "Émetteur, destinataire, période, lignes, taxes applicables, échéance, avoir et identifiant comptable.",
    owner: "Facturation et comptabilité",
    error:
      "Considérer qu’un reçu de carte est toujours la facture conforme attendue.",
    color:
      "border-blue-200 bg-blue-50/70 dark:border-blue-900 dark:bg-blue-950/20",
  },
  {
    title: "Paiement",
    stores:
      "Moyen, montant, statut, date, référence du prestataire, rapprochement et motif d’échec connu.",
    owner: "Prestataire de paiement puis personne qui rapproche",
    error: "Accorder ou retirer l’accès depuis le seul retour du navigateur.",
    color:
      "border-emerald-200 bg-emerald-50/70 dark:border-emerald-900 dark:bg-emerald-950/20",
  },
  {
    title: "Droit d’accès",
    stores:
      "Entreprise, utilisateurs, fonctions, limites, début, fin, suspension et conservation des données.",
    owner: "Produit, support et règles commerciales",
    error:
      "Laisser un état technique du prestataire décider seul de l’expérience client.",
    color:
      "border-amber-200 bg-amber-50/70 dark:border-amber-900 dark:bg-amber-950/20",
  },
];

const lifecycle = [
  {
    step: "1",
    event: "L’offre est acceptée",
    question:
      "Qui achète, quelle formule, combien d’utilisateurs, quand l’engagement commence-t-il ?",
    write:
      "Conservez l’entreprise contractante et l’offre acceptée avant de créer un paiement.",
    access: "Aucun accès, ou accès d’essai décidé séparément.",
    color: "#a78bfa",
  },
  {
    step: "2",
    event: "Le compte est créé",
    question:
      "Qui devient administrateur et comment invite-t-il les autres utilisateurs ?",
    write:
      "Reliez les personnes à l’entreprise, pas seulement à la carte ou à une adresse isolée.",
    access: "Accès selon l’essai ou la date d’effet contractuelle.",
    color: "#60a5fa",
  },
  {
    step: "3",
    event: "La facture est émise",
    question:
      "Quel document, pour quelle période, à quelle entité et avec quelle échéance ?",
    write:
      "Conservez l’identifiant de facture et la période couverte indépendamment du paiement.",
    access: "Peut rester ouvert avant paiement selon le contrat B2B.",
    color: "#38bdf8",
  },
  {
    step: "4",
    event: "Le paiement change d’état",
    question:
      "Paiement réussi, en attente, échoué, remboursé ou rapproché par virement ?",
    write:
      "Traitez l’événement de manière répétable : le recevoir deux fois ne doit pas doubler le droit.",
    access: "Appliquez la règle commerciale prévue, pas une coupure implicite.",
    color: "#34d399",
  },
  {
    step: "5",
    event: "La formule change",
    question:
      "Le changement est-il immédiat ? Que deviennent prix, quantité, facture et droits ?",
    write:
      "Conservez l’ancienne et la nouvelle formule, la date d’effet et le traitement de la différence.",
    access: "Les nouveaux droits suivent la date décidée et testée.",
    color: "#fbbf24",
  },
  {
    step: "6",
    event: "Le client résilie",
    question:
      "Quand cesse la facturation ? Que peut-il encore lire, exporter ou récupérer ?",
    write:
      "Conservez la demande, la date d’effet, la dernière facture et le traitement des données.",
    access:
      "Lecture, export, limitation ou fermeture selon le contrat et les règles applicables.",
    color: "#fb7185",
  },
];

const fictionalCustomers = [
  {
    title: "Mensuel par carte",
    scene:
      "Une petite entreprise choisit cinq accès et paie par carte le jour de la souscription.",
    mustDecide:
      "Que faire si l’authentification bancaire ou le renouvellement échoue ?",
  },
  {
    title: "Annuel par virement",
    scene:
      "Un client signe un devis, fournit un bon de commande et règle à échéance.",
    mustDecide:
      "L’accès commence-t-il à la signature, à la facture, au virement ou à une date contractuelle ?",
  },
  {
    title: "Essai de quatorze jours sans carte",
    scene: "Une équipe teste le produit sans moyen de paiement enregistré.",
    mustDecide:
      "Quelles fonctions et données restent disponibles au quinzième jour ?",
  },
  {
    title: "Passage de cinq à douze accès",
    scene: "Un client ajoute sept utilisateurs au milieu de sa période.",
    mustDecide:
      "Droits immédiats, facture immédiate, différence reportée ou changement au renouvellement ?",
  },
];

const failureDecisions = [
  {
    situation: "Carte refusée au renouvellement",
    distinguish: "Le client veut peut-être payer, mais le moyen a échoué.",
    decide:
      "Relance, nouveau moyen, délai, fonctions limitées et personne avertie.",
  },
  {
    situation: "Virement B2B non rapproché",
    distinguish:
      "L’argent peut être reçu sans référence automatique exploitable.",
    decide:
      "Recherche, preuve de virement, rapprochement manuel et maintien éventuel de l’accès.",
  },
  {
    situation: "Facture contestée",
    distinguish:
      "Le problème porte sur la ligne, la quantité, la taxe ou le contrat, pas seulement sur le paiement.",
    decide:
      "Personne qui répond, avoir éventuel et droits pendant le traitement.",
  },
  {
    situation: "Abonnement résilié",
    distinguish: "La résiliation est une décision prévue, pas un impayé.",
    decide:
      "Date de fin, dernière facture, export, accès restant et traitement des données.",
  },
];

const tocItems = [
  { id: "reponse", label: "La réponse courte" },
  { id: "quatre-etats", label: "Les quatre états à séparer" },
  { id: "cycle", label: "La vie complète d’un abonnement" },
  { id: "exemple", label: "Quatre ventes fictives, quatre décisions" },
  { id: "changement", label: "Changement de formule et prorata" },
  { id: "impaye", label: "L’impayé est une décision commerciale" },
  { id: "comptabilite", label: "Comptabilité et facture électronique" },
  { id: "audit", label: "Les cinq événements à tester" },
  { id: "sources", label: "Sources et limites" },
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
        heroDescription="Votre bouton de paiement ne suffit pas à gérer un abonnement. Reliez l’offre acceptée, la facture, le paiement et les droits d’accès avant de multiplier les formules."
        heroAction={{ href: "#cycle", label: "Dessiner le cycle complet" }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "01",
            title: "4 états séparés",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "6 événements à décider",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "1 cycle à tester",
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
            href: "/guides/prioriser-fonctionnalites-mvp-saas",
            label: "Prioriser les fonctions du MVP",
          },
        ]}
        faqTitle="Questions fréquentes sur les abonnements SaaS"
        faqItems={faqItems}
        showSidebarCta={false}
      >
        <div id="reponse" className="scroll-mt-24">
          <p className="lead">
            <strong>
              Un abonnement SaaS fiable ne se résume pas à prélever une carte
              tous les mois.
            </strong>{" "}
            Votre produit doit relier quatre informations qui peuvent diverger :
            ce que le client a accepté, ce qui lui a été facturé, ce qu’il a
            payé et ce qu’il peut utiliser. Le premier grand compte le révèle
            vite : il veut parfois un devis, un bon de commande, une facture
            annuelle et un virement à échéance, tandis que votre bouton
            n’accepte qu’une carte. Commencez avec le cycle le plus simple que
            vous savez vendre et gérer. Gardez une partie manuelle si elle reste
            contrôlable. Automatisez seulement les transitions répétées et
            testées. Ce guide vous aide à décider les essais, changements de
            formule, impayés, résiliations et échanges avec la comptabilité,
            sans laisser le réglage par défaut d’un prestataire choisir votre
            politique commerciale.
          </p>
        </div>

        <GuideToc items={tocItems} />

        <h2 id="quatre-etats">
          Paiement, facture et accès ne sont pas trois noms pour la même chose
        </h2>

        <p>
          Votre SaaS doit garder quatre informations cohérentes : l’offre
          acceptée, la facture, le paiement et le droit d’accès. Elles peuvent
          être réparties entre plusieurs outils, mais vous devez savoir lequel
          fait foi pour chacune.
        </p>

        <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
          {fourRecords.map((record) => (
            <section
              key={record.title}
              className={`rounded-2xl border p-5 sm:p-6 ${record.color}`}
            >
              <h3 className="m-0 text-base font-bold text-zinc-950 dark:text-zinc-100">
                {record.title}
              </h3>
              <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {record.stores}
              </p>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="font-semibold text-zinc-900 dark:text-zinc-100">
                    Responsable
                  </dt>
                  <dd className="mb-0 mt-1 text-zinc-600 dark:text-zinc-400">
                    {record.owner}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-rose-800 dark:text-rose-300">
                    Erreur à éviter
                  </dt>
                  <dd className="mb-0 mt-1 text-zinc-600 dark:text-zinc-400">
                    {record.error}
                  </dd>
                </div>
              </dl>
            </section>
          ))}
        </div>

        <p>
          Cette séparation évite une erreur fréquente : ouvrir le compte depuis
          la page de confirmation du navigateur. Les événements de paiement sont
          asynchrones.{" "}
          <a
            href="https://docs.stripe.com/billing/subscriptions/webhooks"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stripe documente l’usage des webhooks pour les abonnements
          </a>{" "}
          et plusieurs états tels que <code>trialing</code>, <code>active</code>
          , <code>incomplete</code>, <code>past_due</code>, <code>unpaid</code>{" "}
          ou <code>canceled</code>. Ces mots appartiennent au modèle Stripe.
          Votre entreprise doit les traduire en décisions compréhensibles pour
          le client.
        </p>

        <h2 id="cycle">
          Dessinez la vie complète de l’abonnement avant d’écrire les
          automatismes
        </h2>

        <div className="not-prose relative my-8 space-y-5">
          {lifecycle.map((item, index) => (
            <section
              key={item.step}
              className="relative rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950 sm:p-6"
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
                    Ce que le système garde
                  </dt>
                  <dd className="mb-0 mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {item.write}
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
          title="Le même événement peut arriver deux fois : ne créez pas deux accès"
        >
          <p className="mb-0">
            Un prestataire peut envoyer le même événement plusieurs fois ou dans
            un ordre inattendu. Votre traitement doit reconnaître l’événement
            déjà appliqué, conserver sa trace et reprendre après erreur sans
            créer un second accès, une seconde facture ou un double e-mail.
          </p>
        </InfoBox>

        <h2 id="exemple">
          Exemple fictif : quatre ventes obligent Planor à écrire quatre règles
        </h2>

        <InfoBox
          variant="amber"
          title="Exemple illustratif fictif — SaaS Planor"
        >
          <p className="mb-0">
            Planor et ses clients sont inventés. Cet exemple ne décrit ni un
            client ni un cas réel ; il sert uniquement à tester la cohérence du
            cycle et ne recommande aucune durée d’essai.
          </p>
        </InfoBox>

        <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
          {fictionalCustomers.map((customer) => (
            <section
              key={customer.title}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/60"
            >
              <h3 className="m-0 text-base font-bold text-zinc-950 dark:text-zinc-100">
                {customer.title}
              </h3>
              <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {customer.scene}
              </p>
              <p className="mb-0 mt-4 rounded-xl bg-white p-4 text-sm font-medium leading-relaxed text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
                À décider : {customer.mustDecide}
              </p>
            </section>
          ))}
        </div>

        <p>
          Si Planor ne vend encore qu’une formule à quelques clients, une
          facture préparée dans l’outil comptable et un rapprochement manuel
          peuvent suffire. Le processus devient dangereux lorsque l’accès dépend
          de la mémoire d’une personne, que les montants ne se rapprochent plus
          ou que le client ne peut pas comprendre sa facture. L’objectif n’est
          pas « tout automatiser » : c’est rendre chaque transition visible et
          attribuée.
        </p>

        <h2 id="changement">
          Un changement de formule modifie une date, un prix et parfois les
          droits
        </h2>

        <p>
          Avant d’ajouter un bouton « passer à l’offre supérieure », répondez à
          quatre questions :
        </p>

        <ol>
          <li>
            le changement prend-il effet maintenant ou au prochain
            renouvellement ?
          </li>
          <li>les nouvelles fonctions sont-elles ouvertes à la même date ?</li>
          <li>
            la différence est-elle facturée, créditée, reportée ou abandonnée ?
          </li>
          <li>
            comment expliquer le calcul sur la facture et le refaire en cas de
            contestation ?
          </li>
        </ol>

        <p>
          <a
            href="https://docs.stripe.com/billing/subscriptions/prorations"
            target="_blank"
            rel="noopener noreferrer"
          >
            Stripe documente les proratas lors des changements d’abonnement
          </a>{" "}
          et les paramètres qui modifient leur comportement. Le réglage choisi
          doit refléter votre règle commerciale. Il ne devient pas correct
          simplement parce qu’il est proposé par défaut.
        </p>

        <InfoBox
          variant="amber"
          title="Exemple illustratif fictif — calcul pédagogique, pas facture"
        >
          <p className="mb-0">
            Planor imagine un passage de 100 € HT à 200 € HT au milieu d’une
            période fictive de trente jours. Dans un modèle volontairement
            simplifié, quinze jours restent.
          </p>
        </InfoBox>

        <FormulaBox>
          {`Différence de prix : 200 € HT - 100 € HT = 100 € HT
Part restante : 15 jours / 30 jours = 0,5
Écart brut illustratif : 100 € HT × 0,5 = 50 € HT

Ce calcul ne tient pas compte des taxes, arrondis, crédits existants,
jours réels de la période, remises, quantité ni réglages du prestataire.
La facture attendue doit être testée dans l’outil choisi.`}
        </FormulaBox>

        <p>
          Le bon test ne consiste pas à refaire une formule théorique. Créez un
          abonnement de test à la date choisie, appliquez le changement et
          vérifiez ensemble la facture, le paiement et les droits ouverts.
        </p>

        <h2 id="impaye">
          Un impayé demande une décision commerciale avant une automatisation
        </h2>

        <p>
          Un état <code>past_due</code> n’explique pas à lui seul ce qui s’est
          passé ni ce que le client doit encore pouvoir faire. Comparez au moins
          ces quatre situations :
        </p>

        <div className="not-prose my-8 space-y-3">
          {failureDecisions.map((failure) => (
            <section
              key={failure.situation}
              className="grid gap-3 rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950 sm:grid-cols-[0.8fr_1fr_1fr]"
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
          Définissez qui reçoit l’alerte, qui parle au client, combien de
          tentatives sont faites, quelles fonctions sont éventuellement limitées
          et quelle condition entraîne la suspension. Aucun délai universel
          n’est recommandé ici. Votre contrat, votre risque, le moyen de
          paiement et la situation du client doivent rester cohérents.
        </p>

        <h2 id="comptabilite">
          Votre SaaS doit transmettre les bonnes informations à la comptabilité
        </h2>

        <p>
          Une facture française comporte des mentions qui dépendent des parties
          et de l’opération. Le{" "}
          <a
            href="https://www.economie.gouv.fr/entreprises/gerer-son-entreprise-au-quotidien/gerer-sa-comptabilite-et-ses-demarches/mentions-obligatoires-dune-facture-tout-savoir"
            target="_blank"
            rel="noopener noreferrer"
          >
            ministère de l’Économie récapitule les mentions obligatoires
          </a>
          . Faites confirmer votre configuration par votre expert-comptable : un
          paiement réussi ou un reçu technique ne prouve pas à lui seul que le
          document répond à votre situation.
        </p>

        <p>
          Le{" "}
          <a
            href="https://www.economie.gouv.fr/tout-savoir-sur-la-facturation-electronique-pour-les-entreprises"
            target="_blank"
            rel="noopener noreferrer"
          >
            calendrier officiel français de la facturation électronique
          </a>{" "}
          prévoit la réception obligatoire à partir du{" "}
          <strong>1er septembre 2026</strong> pour les entreprises assujetties
          concernées, avec une émission échelonnée entre 2026 et 2027 selon la
          taille. La facturation électronique vise ici les achats et ventes
          entre entreprises établies en France et assujetties à la TVA, sous
          réserve des opérations exclues. Lorsqu’un client est un particulier ou
          établi à l’étranger, certaines données de transaction ou de paiement
          relèvent plutôt de l’e-reporting. Prévoyez dès maintenant les
          identifiants, exports et responsabilités nécessaires, puis faites
          confirmer votre cas par votre expert-comptable ; ne codez pas une
          conclusion fiscale générale dans le SaaS.
        </p>

        <h2 id="audit">Avant d’automatiser, testez cinq événements</h2>

        <p>
          Prenez une souscription, un essai, une facture, un paiement échoué et
          une résiliation. Pour chacun, notez le document produit, l’état du
          paiement, l’accès accordé, la personne responsable et l’erreur à
          éviter. Si une réponse manque, gardez l’étape manuelle jusqu’à ce
          qu’elle soit décidée.
        </p>

        <InfoBox variant="emerald" title="La checklist tient sur une page">
          <ul className="m-0 space-y-2 pl-5">
            <li>l’offre acceptée et l’entreprise qui achète ;</li>
            <li>la date de début et l’issue prévue de l’essai ;</li>
            <li>la facture, sa période et son échéance ;</li>
            <li>la règle appliquée après un paiement échoué ;</li>
            <li>la dernière facture, l’export et la fermeture des accès.</li>
          </ul>
        </InfoBox>

        <p>
          Rester manuel est raisonnable lorsque le nombre de clients est faible,
          que la règle est stable et qu’une personne identifiée rapproche chaque
          période. Intégrer un service de facturation devient utile pour les
          offres répétées. Développer une couche spécifique se justifie lorsque
          les contrats, quantités, entités ou droits ne peuvent pas être
          représentés proprement par le service choisi. Reconstruire un système
          de paiement réglementé n’est pas l’objectif.
        </p>

        <GuideInlineCTA
          title="Vérifier votre cycle d’abonnement avant les premiers volumes"
          description="Montrez-nous une vente par carte, une vente par virement et vos règles après essai, impayé ou résiliation. Nous repérerons les décisions manquantes et ce qui peut rester manuel, être confié à votre outil de facturation ou être intégré au SaaS."
          tags={[
            "Cycle avant le code",
            "Option manuelle possible",
            "Fiscalité à valider avec votre expert-comptable",
          ]}
          ctaLabel="Faire relire mon cycle"
          ctaHref="/demarrer-un-projet"
          showPhone={false}
        />

        <h2 id="sources">Sources officielles et limites</h2>

        <ul>
          <li>
            <a
              href="https://docs.stripe.com/billing/subscriptions/webhooks"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stripe — webhooks d’abonnement
            </a>{" "}
            : événements asynchrones et états propres au produit Stripe.
          </li>
          <li>
            <a
              href="https://docs.stripe.com/billing/subscriptions/prorations"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stripe — proratas
            </a>{" "}
            : comportement lors d’un changement de formule selon les réglages.
          </li>
          <li>
            <a
              href="https://docs.stripe.com/payments/checkout/free-trials"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stripe — essais sans moyen de paiement
            </a>{" "}
            : configuration de l’essai et issue choisie à son terme, notamment
            annulation ou pause selon l’intégration.
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
              href="https://www.economie.gouv.fr/tout-savoir-sur-la-facturation-electronique-pour-les-entreprises"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ministère de l’Économie — facturation électronique
            </a>{" "}
            : calendrier et périmètre général consultés le 23 juillet 2026.
          </li>
        </ul>

        <p>
          Ce guide ne fixe ni taux d’impayé, ni délai de relance optimal, ni
          traitement de TVA internationale, ni reconnaissance comptable du
          revenu. Il ne remplace pas vos conditions contractuelles, votre
          expert-comptable, l’administration ou un conseil juridique adapté.
        </p>

        <p>
          Si vous êtes encore en train de décider ce que la première version
          doit contenir, commencez par le guide{" "}
          <Link href="/guides/mvp-saas-quoi-inclure">
            MVP SaaS : quoi inclure avant le premier client
          </Link>
          . Pour consigner les règles du cycle dans un document testable,
          utilisez ensuite le{" "}
          <Link href="/guides/cahier-des-charges-saas">
            cahier des charges SaaS
          </Link>
          .
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
