import type { Metadata } from "next";
import Link from "next/link";
import {
  GuideInlineCTA,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { GuideLayout } from "@/components/guides/guide-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { formatGuideDate, getGuide, guideRobots, guideUrl } from "@/lib/guides";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("logiciel-gestion-stock-sur-mesure");

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
        alt: "Gestion de stock : retrouver le mouvement qui crée l’écart",
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
      name: "Logiciel de gestion de stock sur mesure",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Quand faut-il un logiciel de gestion de stock sur mesure ?",
    answer:
      "Le sur-mesure devient pertinent lorsqu’une règle métier importante, une contrainte terrain ou une connexion indispensable reste mal servie après configuration et essai d’un outil standard. Il ne corrige pas à lui seul des mouvements non saisis ou des responsabilités floues.",
  },
  {
    question: "Quelle différence entre stock physique et stock disponible ?",
    answer:
      "Le stock physique est ce qui se trouve réellement dans un lieu. Le disponible est ce que l’entreprise accepte encore de promettre après réservations, quarantaines, casses et autres règles. Deux nombres différents peuvent donc être justes s’ils répondent à deux questions différentes.",
  },
  {
    question: "Un code-barres suffit-il à fiabiliser le stock ?",
    answer:
      "Non. Le code-barres aide à identifier un article, un lot ou une unité logistique. Il ne prouve pas que la bonne quantité, le bon emplacement et le bon type de mouvement ont été confirmés par la bonne personne.",
  },
  {
    question: "Faut-il suivre les lots et numéros de série ?",
    answer:
      "Seulement si le métier, le service attendu ou une obligation applicable l’exige. Le suivi par lot ou série apporte une traçabilité plus fine, mais il augmente les données à reprendre, saisir et contrôler.",
  },
  {
    question: "Un inventaire corrige-t-il la cause d’un écart ?",
    answer:
      "Non. Il rapproche le nombre enregistré du comptage physique. Pour éviter le retour de l’écart, conservez l’ajustement et cherchez le premier mouvement absent, tardif, doublé ou appliqué au mauvais emplacement.",
  },
  {
    question: "Peut-on commencer sans changer de logiciel ?",
    answer:
      "Oui. Reconstituez les dix derniers mouvements d’une référence qui diverge et nommez le système qui fait foi. Cette enquête suffit souvent à corriger une règle, une responsabilité ou un paramétrage avant tout investissement.",
  },
];

const stockMeanings = [
  {
    title: "Physique",
    question: "Combien d’unités sont réellement présentes ici ?",
    warning:
      "Le comptage doit préciser le lieu, l’heure, l’unité et ce qui est exclu.",
    color:
      "border-emerald-200 bg-emerald-50/70 dark:border-emerald-900 dark:bg-emerald-950/20",
  },
  {
    title: "Théorique",
    question: "Combien le registre calcule-t-il après les mouvements connus ?",
    warning:
      "Un mouvement absent, tardif ou doublé peut rendre ce nombre faux.",
    color:
      "border-blue-200 bg-blue-50/70 dark:border-blue-900 dark:bg-blue-950/20",
  },
  {
    title: "Réservé",
    question: "Combien d’unités sont déjà promises à un besoin ?",
    warning: "La réservation n’est pas toujours un déplacement physique.",
    color:
      "border-violet-200 bg-violet-50/70 dark:border-violet-900 dark:bg-violet-950/20",
  },
  {
    title: "Disponible",
    question: "Combien l’entreprise accepte-t-elle encore de vendre ?",
    warning:
      "La formule dépend des réservations, quarantaines et règles du métier.",
    color:
      "border-cyan-200 bg-cyan-50/70 dark:border-cyan-900 dark:bg-cyan-950/20",
  },
  {
    title: "En attente",
    question:
      "Qu’est-ce qui a quitté un état sans être confirmé dans l’autre ?",
    warning:
      "Un transfert parti mais non reçu ne doit ni disparaître ni être compté deux fois.",
    color:
      "border-amber-200 bg-amber-50/70 dark:border-amber-900 dark:bg-amber-950/20",
  },
  {
    title: "Non vendable",
    question: "Qu’est-ce qui est présent mais ne peut pas être promis ?",
    warning:
      "Casse, contrôle, quarantaine ou retour doivent avoir une raison visible.",
    color:
      "border-rose-200 bg-rose-50/70 dark:border-rose-900 dark:bg-rose-950/20",
  },
];

const fictionalMovements = [
  {
    time: "08 h 15",
    event: "Réception",
    detail: "50 pompes reçues au dépôt A et enregistrées.",
    consequence: "Physique et théorique : 50.",
    color: "#34d399",
  },
  {
    time: "09 h 05",
    event: "Réservation",
    detail: "8 pompes sont promises à deux commandes.",
    consequence: "Physique : 50 ; réservé : 8 ; disponible calculé : 42.",
    color: "#a78bfa",
  },
  {
    time: "10 h 20",
    event: "Transfert",
    detail:
      "10 pompes quittent le dépôt A. L’arrivée au dépôt B n’est pas confirmée.",
    consequence:
      "Le transfert doit rester visible « en attente », pas disparaître entre les dépôts.",
    color: "#60a5fa",
  },
  {
    time: "13 h 40",
    event: "Casse",
    detail: "2 pompes sont isolées, mais la casse n’est pas saisie.",
    consequence:
      "Le site peut encore annoncer 42 disponibles alors que seules 40 sont vendables après réservation.",
    color: "#fb7185",
  },
  {
    time: "15 h 10",
    event: "Retour",
    detail:
      "1 pompe revient d’un client et attend un contrôle sans mouvement enregistré.",
    consequence:
      "Elle est physiquement présente, mais ne doit pas redevenir vendable sans décision.",
    color: "#fbbf24",
  },
];

const movementFields = [
  {
    label: "Date et heure du fait",
    value:
      "Quand le produit a réellement changé d’état, pas quand on a corrigé le fichier.",
  },
  {
    label: "Quantité avant",
    value: "Le nombre et l’unité connus juste avant le mouvement.",
  },
  {
    label: "Événement",
    value:
      "Réception, réservation, déplacement, consommation, retour, casse, expédition ou correction.",
  },
  {
    label: "Quantité après",
    value: "Le résultat attendu si le mouvement est appliqué une seule fois.",
  },
  {
    label: "Lieu et statut",
    value: "Dépôt, zone, emplacement, en transit, quarantaine ou vendable.",
  },
  {
    label: "Auteur et document",
    value: "Le rôle qui confirme et la commande, réception ou pièce liée.",
  },
  {
    label: "Système",
    value:
      "ERP, site, module terrain ou support manuel qui a créé l’événement.",
  },
  {
    label: "Anomalie",
    value:
      "Absent, tardif, doublé, mauvaise unité, mauvais lieu ou correction sans motif.",
  },
];

const solutionChoices = [
  {
    title: "Clarifier le travail sans développer",
    fit: "Le mouvement fautif vient d’une étape non définie, d’un document absent ou d’une responsabilité inconnue.",
    first:
      "Écrire qui confirme réception, transfert, casse, retour et correction.",
    reject:
      "L’outil actuel reste inaccessible ou trop lent dans les conditions du terrain.",
  },
  {
    title: "Reconfigurer l’outil actuel",
    fit: "Les fonctions existent, mais les états, droits, emplacements ou vues sont mal réglés.",
    first:
      "Faire rejouer une référence et ses mauvais cas dans un environnement de test.",
    reject:
      "Une recopie demeure nécessaire entre deux systèmes qui se croient tous deux responsables.",
  },
  {
    title: "Ajouter un parcours intermédiaire",
    fit: "Le logiciel central reste valable, mais le quai ou l’entrepôt a besoin d’une saisie plus simple.",
    first:
      "Décrire les événements échangés, leur identifiant et la reprise après erreur.",
    reject:
      "Le module crée son propre stock au lieu d’envoyer des mouvements au système responsable.",
  },
  {
    title: "Adopter un logiciel standard ou un WMS",
    fit: "Les réceptions, emplacements, inventaires et préparations ressemblent aux cas couverts par le produit.",
    first:
      "Démontrer casse, retour, transfert non confirmé et comptage sur vos règles.",
    reject:
      "La démonstration ne couvre que le parcours idéal ou impose des contournements permanents.",
  },
  {
    title: "Développer une application ciblée",
    fit: "Une règle métier, une contrainte hors ligne ou une connexion importante reste réellement distinctive.",
    first:
      "Limiter le premier lot au mouvement qui crée la perte de confiance et prévoir le retour arrière.",
    reject:
      "Le processus change encore chaque semaine ou personne ne peut désigner la source de vérité.",
  },
  {
    title: "Attendre avec un journal manuel",
    fit: "L’entreprise ne sait pas encore à quel événement l’écart apparaît.",
    first:
      "Noter dix mouvements avec heure, lieu, auteur et document pendant une période définie.",
    reject:
      "Le risque devient urgent ou le journal montre une cause stable que l’existant ne peut pas traiter.",
  },
];

const tocItems = [
  { id: "reponse", label: "La réponse avant le logiciel" },
  { id: "nombres", label: "Les six nombres que l’on confond" },
  { id: "incident", label: "Un écart suivi mouvement par mouvement" },
  { id: "enquete", label: "Rejouer dix mouvements sans grand projet" },
  { id: "choix", label: "Six réponses possibles" },
  { id: "migration", label: "Changer sans bloquer les expéditions" },
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
          { label: "Logiciel de gestion de stock sur mesure" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Votre ERP, l’entrepôt et le site affichent des quantités différentes ? Retrouvez d’abord le mouvement qui crée l’écart, puis choisissez le bon niveau de solution."
        heroAction={{ href: "#enquete", label: "Rejouer dix mouvements" }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "01",
            title: "1 référence suivie",
            description: "",
            color: "emerald",
          },
          {
            number: "02",
            title: "10 mouvements à rejouer",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "6 réponses possibles",
            description: "",
            color: "amber",
          },
        ]}
        relatedLinks={[
          {
            href: "/guides/erp-ou-logiciel-sur-mesure",
            label: "Choisir entre ERP et logiciel sur mesure",
          },
          {
            href: "/guides/application-suivi-production-pme",
            label: "Suivre la production d’une PME",
          },
          {
            href: "/guides/connecter-erp-crm-logiciel-metier",
            label: "Connecter ERP, CRM et logiciel métier",
          },
        ]}
        faqTitle="Questions fréquentes sur la gestion de stock"
        faqItems={faqItems}
        showSidebarCta={false}
      >
        <div id="reponse" className="scroll-mt-24">
          <p className="lead">
            <strong>
              Dans cet exemple fictif, l’ERP annonce 42 unités, l’entrepôt en
              compte 38 et le site en affiche 41 comme disponibles. Ne commencez
              pas par demander un nouveau tableau de bord.
            </strong>{" "}
            Prenez une référence qui diverge et retrouvez le premier mouvement
            absent, tardif, doublé ou appliqué au mauvais lieu. Un logiciel sur
            mesure peut devenir utile lorsque les règles du stock, les
            contraintes du terrain ou les connexions ne tiennent pas dans un
            outil standard. Il ne répare pas un processus que personne ne
            confirme. Ce guide vous aide à distinguer le stock physique,
            calculé, réservé et disponible, à rejouer dix mouvements puis à
            choisir entre clarifier le travail, régler l’existant, ajouter un
            module, adopter un standard, développer une application ciblée ou ne
            rien développer maintenant.
          </p>
        </div>

        <GuideToc items={tocItems} />

        <h2 id="nombres">
          Le mot « stock » cache six nombres qui ne répondent pas à la même
          question
        </h2>

        <p>
          Deux chiffres différents ne prouvent pas immédiatement qu’un logiciel
          est faux. Ils peuvent décrire deux états différents. L’erreur commence
          lorsque l’écran n’indique plus clairement la question à laquelle il
          répond.
        </p>

        <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
          {stockMeanings.map((meaning) => (
            <section
              key={meaning.title}
              className={`rounded-2xl border p-5 ${meaning.color}`}
            >
              <h3 className="m-0 text-base font-bold text-zinc-950 dark:text-zinc-100">
                {meaning.title}
              </h3>
              <p className="mb-0 mt-2 text-sm font-medium leading-relaxed text-zinc-800 dark:text-zinc-200">
                {meaning.question}
              </p>
              <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {meaning.warning}
              </p>
            </section>
          ))}
        </div>

        <p>
          La formule du disponible appartient à l’entreprise. Elle peut, par
          exemple, retirer les réservations et les produits en quarantaine du
          physique vendable. Écrivez cette règle avant d’exiger « le stock en
          temps réel ». Un nombre mis à jour immédiatement reste faux si
          l’événement physique n’a jamais été confirmé.
        </p>

        <h2 id="incident">
          Exemple fictif : cinq mouvements, trois chiffres de stock différents
        </h2>

        <InfoBox
          variant="amber"
          title="Exemple illustratif fictif — Atelier Orbe"
        >
          <p className="mb-0">
            Cette entreprise et ces chiffres sont inventés pour expliquer la
            méthode. Cet exemple ne décrit ni un client ni un cas réel ; il ne
            présente aucun résultat obtenu par Hagnéré Code.
          </p>
        </InfoBox>

        <div className="not-prose relative my-8 space-y-4 border-l-2 border-zinc-200 pl-5 dark:border-zinc-800 sm:pl-8">
          {fictionalMovements.map((movement) => (
            <section
              key={movement.time}
              className="relative rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <span
                className="absolute -left-[30px] top-6 size-3 rounded-full ring-4 ring-white dark:ring-zinc-950 sm:-left-[39px]"
                style={{ backgroundColor: movement.color }}
              />
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-lg bg-zinc-950 px-2.5 py-1 font-mono text-xs font-bold text-white dark:bg-white dark:text-zinc-950">
                  {movement.time}
                </span>
                <h3 className="m-0 text-base font-bold text-zinc-950 dark:text-zinc-100">
                  {movement.event}
                </h3>
              </div>
              <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {movement.detail}
              </p>
              <p className="mb-0 mt-2 text-sm font-medium leading-relaxed text-zinc-900 dark:text-zinc-100">
                Conséquence : {movement.consequence}
              </p>
            </section>
          ))}
        </div>

        <p>
          Le transfert non confirmé, la casse absente et le retour en attente ne
          demandent pas le même correctif. Un inventaire peut remettre le nombre
          théorique au niveau du comptage. Il n’explique pas pourquoi l’écart
          est apparu. La{" "}
          <a
            href="https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-count-adjust-reclassify"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation Microsoft Business Central sur les comptages et
            ajustements
          </a>{" "}
          illustre justement l’enregistrement d’ajustements et de comptages
          cycliques. Ce fonctionnement d’un produit n’est pas une obligation
          universelle, mais il montre une exigence utile : la correction doit
          laisser une trace.
        </p>

        <h2 id="enquete">
          Rejouez les dix derniers mouvements avant de parler de développement
        </h2>

        <p>
          Choisissez la référence dont l’écart crée le plus de travail ou de
          risque. Ne commencez pas par tout l’entrepôt. Reconstituez dix
          mouvements consécutifs avec ces huit champs :
        </p>

        <div className="not-prose my-8 grid gap-3 sm:grid-cols-2">
          {movementFields.map((field, index) => (
            <div
              key={field.label}
              className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/60"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-zinc-950 text-xs font-bold text-white dark:bg-white dark:text-zinc-950">
                  {index + 1}
                </span>
                <h3 className="m-0 text-sm font-bold text-zinc-950 dark:text-zinc-100">
                  {field.label}
                </h3>
              </div>
              <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {field.value}
              </p>
            </div>
          ))}
        </div>

        <p>
          Arrêtez-vous au premier écart. Demandez quel système crée le
          mouvement, à quel moment il devient officiel, qui peut le corriger et
          comment une erreur est reprise. Si l’ERP, le site et un fichier
          peuvent tous modifier la même quantité, la première décision n’est pas
          l’écran : c’est le système qui fait foi.
        </p>

        <InfoBox
          variant="blue"
          title="Le code-barres identifie ; le geste confirme"
        >
          <p className="mb-0">
            Un scan peut réduire une erreur de référence. Il ne prouve pas que
            dix unités ont été reçues, que le déplacement est terminé ou que la
            casse est vendable. Testez le geste complet avec l’appareil, le
            réseau, les gants, les interruptions et la possibilité de corriger.
          </p>
        </InfoBox>

        <h2 id="choix">
          Comparez six réponses au même écart, sans favoriser le sur-mesure
        </h2>

        <div className="not-prose my-8 space-y-4">
          {solutionChoices.map((choice, index) => (
            <section
              key={choice.title}
              className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950 sm:p-6"
            >
              <div className="flex items-start gap-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-sm font-bold text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100">
                  {index + 1}
                </span>
                <div>
                  <h3 className="m-0 text-base font-bold text-zinc-950 dark:text-zinc-100">
                    {choice.title}
                  </h3>
                  <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {choice.fit}
                  </p>
                </div>
              </div>
              <dl className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-emerald-50 p-4 dark:bg-emerald-950/20">
                  <dt className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                    Premier test
                  </dt>
                  <dd className="mb-0 mt-2 text-sm leading-relaxed text-emerald-900 dark:text-emerald-200">
                    {choice.first}
                  </dd>
                </div>
                <div className="rounded-xl bg-rose-50 p-4 dark:bg-rose-950/20">
                  <dt className="text-xs font-bold uppercase tracking-wider text-rose-800 dark:text-rose-300">
                    Refusez cette option si
                  </dt>
                  <dd className="mb-0 mt-2 text-sm leading-relaxed text-rose-900 dark:text-rose-200">
                    {choice.reject}
                  </dd>
                </div>
              </dl>
            </section>
          ))}
        </div>

        <p>
          Choisissez un logiciel standard s’il reproduit vos cas réels sans
          contournement. Choisissez du sur-mesure seulement si une règle propre
          au métier crée une valeur ou réduit un risque que le standard ne sait
          pas traiter. Et attendez si vous ne savez pas encore quel mouvement
          provoque l’écart.
        </p>

        <h2 id="migration">
          Changez par une référence pilote sans bloquer les expéditions
        </h2>

        <ol>
          <li>
            <strong>Gelez les définitions.</strong> Écrivez les états, unités,
            emplacements et responsabilités de la référence pilote.
          </li>
          <li>
            <strong>Nettoyez la reprise.</strong> Comptez le physique et
            conservez les ajustements nécessaires avec leur motif.
          </li>
          <li>
            <strong>Testez les mauvais cas.</strong> Transfert non confirmé,
            retour, casse, doublon, réseau coupé et correction doivent avoir une
            issue prévue.
          </li>
          <li>
            <strong>Comparez pendant une période courte.</strong> Contrôlez
            l’ancien et le nouveau registre sans permettre aux deux de modifier
            librement le même stock.
          </li>
          <li>
            <strong>Préparez le retour arrière.</strong> Nommez la condition
            d’arrêt, la personne qui décide et la façon de continuer les
            expéditions.
          </li>
        </ol>

        <p>
          Si vous ajoutez le suivi par lot ou numéro de série à un stock déjà
          existant, traitez-le comme une reprise de données.{" "}
          <a
            href="https://www.odoo.com/documentation/18.0/applications/inventory_and_mrp/inventory/product_management/product_tracking/reassign.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            La documentation Odoo sur la réaffectation de lots et séries
          </a>{" "}
          avertit des incohérences possibles et passe par des ajustements. Cette
          limite concerne Odoo, mais la question est valable ailleurs : comment
          chaque unité existante reçoit-elle son identifiant sans double
          comptage ?
        </p>

        <GuideInlineCTA
          title="Trouver d’où vient votre écart de stock"
          description="Venez avec une référence, ses dix derniers mouvements et les chiffres affichés par l’ERP, l’entrepôt et le site. Nous chercherons d’abord le premier écart, puis nous verrons si une correction, un réglage, un outil standard ou un développement ciblé est réellement nécessaire."
          tags={[
            "Une référence suffit",
            "Option standard conservée",
            "Décision fondée sur les mouvements",
          ]}
          ctaLabel="Analyser mon écart de stock"
          ctaHref="/demarrer-un-projet"
          showPhone={false}
        />

        <h2 id="sources">Sources visibles et limites</h2>

        <ul>
          <li>
            <a
              href="https://learn.microsoft.com/en-us/dynamics365/business-central/inventory-how-count-adjust-reclassify"
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft Learn — compter, ajuster et reclasser un stock
            </a>{" "}
            : exemple de journal d’ajustement et de comptage cyclique dans
            Business Central.
          </li>
          <li>
            <a
              href="https://www.odoo.com/documentation/18.0/applications/inventory_and_mrp/inventory/warehouses_storage/inventory_management/count_products.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Odoo — ajustements d’inventaire
            </a>{" "}
            : exemple de quantité enregistrée, quantité comptée, différence,
            date, utilisateur et historique.
          </li>
          <li>
            <a
              href="https://www.gs1.org/docs/traceability/Global_Traceability_Standard.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              GS1 — Global Traceability Standard
            </a>{" "}
            : identification des articles, lots, séries et unités logistiques
            lorsque la chaîne et le secteur le justifient.
          </li>
        </ul>

        <p>
          Ce guide n’établit ni une méthode de valorisation comptable, ni une
          obligation sectorielle de traçabilité, ni un taux d’exactitude ou un
          retour sur investissement universel. Confirmez les obligations de
          votre activité avec les spécialistes compétents.
        </p>

        <p>
          Si la question porte d’abord sur le système global de gestion,
          poursuivez avec le comparatif{" "}
          <Link href="/guides/erp-ou-logiciel-sur-mesure">
            ERP ou logiciel sur mesure
          </Link>
          . Si les écarts naissent lors de la consommation de matières ou de la
          fabrication, consultez aussi le guide sur le{" "}
          <Link href="/guides/application-suivi-production-pme">
            suivi de production en PME
          </Link>
          .
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
