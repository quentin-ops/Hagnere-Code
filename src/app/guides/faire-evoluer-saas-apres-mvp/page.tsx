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

const guide = getGuide("faire-evoluer-saas-apres-mvp");

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
        alt: "Calendrier illustratif des décisions qui font évoluer un SaaS après son MVP",
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
      name: "Faire évoluer un SaaS après le MVP",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "À quelle fréquence faut-il faire évoluer un SaaS ?",
    answer:
      "Il n’existe pas de fréquence valable pour tous les SaaS. Choisissez un rythme que l’équipe peut tester, mettre en ligne et soutenir, puis inscrivez clairement les dates auxquelles les décisions seront prises ou revues.",
  },
  {
    question: "Faut-il accepter toutes les demandes des premiers clients ?",
    answer:
      "Non. Une demande est un signal à comprendre et à enregistrer, sauf si un engagement explicite, un incident ou un risque vérifié exige une action plus rapide.",
  },
  {
    question: "Comment refuser une fonction demandée par un client ?",
    answer:
      "Reformulez le problème que vous avez compris, dites ce que vous vérifiez et donnez la date de la prochaine décision. N’annoncez pas une date de livraison tant que le lot, ses dépendances et la capacité de l’équipe ne sont pas suffisamment connus.",
  },
  {
    question: "Faut-il publier une roadmap avec des dates ?",
    answer:
      "Pas nécessairement. Une feuille de route peut présenter les problèmes et résultats visés ; une date devient un engagement seulement lorsque vous avez réellement décidé de l’assumer.",
  },
  {
    question: "Quelle place réserver à la maintenance et à la sécurité ?",
    answer:
      "Une place explicite, choisie selon l’état du service, les risques, les obligations et la capacité de l’équipe. Aucun pourcentage universel ne répartit correctement le temps entre fonctions, corrections, fiabilité et sécurité.",
  },
  {
    question: "Comment savoir si une nouvelle fonction est utile ?",
    answer:
      "Écrivez avant la livraison ce qui devrait changer, pour quelle population ou dans quel contexte et pendant quelle fenêtre. Après la mise en ligne, reprenez la même définition et combinez la mesure avec les retours et le support.",
  },
  {
    question: "Quand faut-il arrêter de faire évoluer le SaaS ?",
    answer:
      "Réduire ou arrêter peut être la décision responsable si le problème n’est plus confirmé, si l’exploitation coûte durablement plus que la valeur attendue ou si personne ne peut soutenir le service. Ajouter un lot ne répare pas ces situations.",
  },
];

const weeklySignals = [
  {
    title: "Un client est bloqué",
    scene:
      "Depuis une modification récente, il ne peut plus créer une demande d’intervention.",
    immediate:
      "Vérifier l’effet, restaurer le parcours si nécessaire et rechercher les autres demandes affectées.",
    later:
      "Comprendre la cause et décider la correction durable seulement après avoir rétabli le service.",
    color:
      "border-rose-200 bg-rose-50/70 dark:border-rose-900 dark:bg-rose-950/20",
  },
  {
    title: "Un prospect exige un export",
    scene:
      "Le commercial estime que cette fonction pourrait débloquer une signature.",
    immediate:
      "Conserver le problème, le contexte du prospect, l’engagement éventuel et ce qui manque comme preuve.",
    later:
      "Comparer cette demande aux autres lors de la prochaine décision de lot, sans promettre sur ce seul message.",
    color:
      "border-blue-200 bg-blue-50/70 dark:border-blue-900 dark:bg-blue-950/20",
  },
  {
    title: "Une dépendance doit être examinée",
    scene:
      "Le composant d’authentification utilisé par le SaaS fait l’objet d’un avis de sécurité.",
    immediate:
      "Qualifier le produit concerné, l’exposition, la gravité et les mesures disponibles avec la personne compétente.",
    later:
      "Traiter la mise à jour selon le risque réel et vérifier le service après le changement.",
    color:
      "border-amber-200 bg-amber-50/70 dark:border-amber-900 dark:bg-amber-950/20",
  },
];

const decisionStreams = [
  {
    number: "01",
    title: "Protéger le service utilisé aujourd’hui",
    receives:
      "Incident, accès impossible, perte de données, comportement dangereux, engagement non tenu ou risque de sécurité qualifié.",
    decides:
      "Faut-il interrompre temporairement le lot prévu, restaurer, corriger, communiquer ou déclencher une procédure spécialisée ?",
    owner:
      "Une personne autorisée à interrompre le programme normal et à coordonner la remise en service.",
    output:
      "Effet réel, personnes touchées, décision immédiate, responsable et condition de retour au programme.",
    color:
      "border-rose-200 bg-rose-50/70 dark:border-rose-900 dark:bg-rose-950/20",
  },
  {
    number: "02",
    title: "Enregistrer ce que les clients et l’équipe observent",
    receives:
      "Tickets, appels, usages, abandons, contournements, motifs commerciaux, coûts et questions récurrentes.",
    decides:
      "Quelle information manque avant la prochaine comparaison des demandes ? Qui la recherche ?",
    owner:
      "Une personne qui rapproche support, observations d’usage, ventes et contraintes, sans décider seule du prochain lot.",
    output:
      "Problème reformulé, contexte, effet, preuve disponible, inconnue et date de prochaine décision.",
    color:
      "border-blue-200 bg-blue-50/70 dark:border-blue-900 dark:bg-blue-950/20",
  },
  {
    number: "03",
    title: "Recevoir et livrer le petit lot déjà choisi",
    receives:
      "Le résultat visé, le périmètre, le test, le responsable et les sujets reportés produits par la décision de priorisation.",
    decides:
      "Le lot peut-il être mis en ligne, doit-il être réduit, ou faut-il le reporter faute de test, de support ou de retour arrière ?",
    owner:
      "La personne qui autorise la mise en ligne après avis des personnes capables de tester et soutenir le service.",
    output:
      "Décision de livrer ou reporter, preuves de préparation, méthode de détection et procédure de retour.",
    color:
      "border-violet-200 bg-violet-50/70 dark:border-violet-900 dark:bg-violet-950/20",
  },
  {
    number: "04",
    title: "Maintenir un produit sûr et exploitable",
    receives:
      "Mises à jour, sauvegardes, surveillance, corrections différées, dépendances et travaux qui rendent les prochaines modifications moins risquées.",
    decides:
      "Quel travail invisible est nécessaire maintenant, quel risque peut attendre et quel financement manque ?",
    owner:
      "Une personne capable de relier état technique, risques, obligations et capacité de l’équipe.",
    output:
      "Travail décidé, raison, risque assumé ou traité, preuve attendue et date de réexamen.",
    color:
      "border-emerald-200 bg-emerald-50/70 dark:border-emerald-900 dark:bg-emerald-950/20",
  },
];

const releaseChecks = [
  {
    title: "Le comportement attendu est testé",
    question:
      "Le parcours modifié, ses droits, ses erreurs et ses cas limites ont-ils été vérifiés sans exposer inutilement des données réelles ?",
    stop: "Reporter si le changement essentiel n’est pas testable ou si le test ne permet pas de distinguer réussite et échec.",
  },
  {
    title: "Un problème sera détecté",
    question:
      "Qui voit qu’une connexion échoue, qu’un parcours se bloque ou qu’un résultat devient incohérent après la mise en ligne ?",
    stop: "Reporter ou réduire si l’équipe ne peut pas voir un dommage important avant que les clients ne l’accumulent.",
  },
  {
    title: "Le retour arrière est praticable",
    question:
      "Peut-on revenir à la version précédente, désactiver la modification ou restaurer les données affectées ? Qui prend cette décision ?",
    stop: "Ne pas promettre une restauration instantanée ; tester le mécanisme proportionné au risque.",
  },
  {
    title: "Le support sait quoi répondre",
    question:
      "Les personnes qui reçoivent les questions connaissent-elles le changement, ses limites, les incidents connus et le chemin d’escalade ?",
    stop: "Reporter si personne n’est disponible pour soutenir une modification qui peut bloquer l’usage principal.",
  },
  {
    title: "La sécurité a été intégrée au travail",
    question:
      "Les dépendances, accès, secrets, journaux et défauts connus ont-ils été examinés selon le risque du produit ?",
    stop: "Demander l’avis compétent si le lot crée un risque que l’équipe ne sait pas qualifier.",
  },
  {
    title: "L’effet sur les données personnelles est attribué",
    question:
      "Le lot change-t-il les données, la finalité, les destinataires, les accès, le stockage, l’information ou les droits ?",
    stop: "Si oui ou si c’est incertain, vérifier les conséquences sur les données personnelles et nommer le responsable avant la mise en ligne.",
  },
];

const onboardingStory = [
  {
    verb: "Observer",
    text: "Dans ce SaaS B2B fictif de demandes d’intervention, trois utilisateurs décrivent la même incompréhension lors de la première configuration. L’équipe garde leurs contextes et une définition précise du blocage ; elle ne transforme pas trois cas en pourcentage.",
  },
  {
    verb: "Attribuer",
    text: "Une personne rassemble tickets, observations d’usage et retours, puis écrit ce qui manque encore. Elle ne promet ni solution ni date.",
  },
  {
    verb: "Recevoir le lot",
    text: "Le guide de priorisation a déjà produit un résultat visé, un petit lot, un test et des sujets reportés. L’équipe reprend ces quatre éléments sans recommencer le classement.",
  },
  {
    verb: "Préparer",
    text: "Avant toute livraison, l’équipe écrit le signal, la population ou le contexte et la fenêtre d’observation à reprendre ensuite. Elle accepte qu’un texte plus clair, une configuration ou une courte documentation puisse résoudre l’issue sans code.",
  },
  {
    verb: "Autoriser ou reporter",
    text: "Tests, détection d’un problème, support et retour arrière sont vérifiés. Si le lot touche des données personnelles, le responsable vérifie aussi les conséquences avant la mise en ligne.",
  },
  {
    verb: "Vérifier",
    text: "L’équipe reprend la même définition, la même population ou le même contexte et la fenêtre annoncée. Elle consigne ce qui est observé, y compris l’absence de changement, l’indisponibilité de la donnée ou un nombre de cas trop faible.",
  },
  {
    verb: "Décider la suite",
    text: "Elle peut poursuivre, corriger, retirer, documenter, former ou observer plus longtemps. La direction, le budget et les travaux reportés sont mis à jour sans inventer un effet positif.",
  },
];

const calendarCards = [
  {
    title: "Décision d’interruption",
    trigger:
      "Un effet client, un engagement, une impossibilité d’exploiter ou un risque qualifié correspond à la règle écrite.",
    owner:
      "Personne autorisée à interrompre le programme et coordonner la réponse.",
    proof:
      "Effet observé, périmètre touché, mesure immédiate et condition de reprise.",
    next: "À l’événement prévu par la règle ; pas selon une réunion universelle.",
    color:
      "border-rose-200 bg-rose-50/70 dark:border-rose-900 dark:bg-rose-950/20",
  },
  {
    title: "Revue des signaux",
    trigger:
      "La date choisie par l’équipe arrive ou une information décisive complète une demande enregistrée.",
    owner: "Personne qui rapproche support, usage, ventes et contraintes.",
    proof:
      "Problèmes, contextes, effets, preuves, inconnues et engagements explicites.",
    next: "Date adaptée au volume de signaux et à la capacité de les examiner.",
    color:
      "border-blue-200 bg-blue-50/70 dark:border-blue-900 dark:bg-blue-950/20",
  },
  {
    title: "Autorisation de livraison",
    trigger:
      "Le petit lot décidé est terminé au sens convenu et les preuves de préparation sont disponibles.",
    owner: "Personne qui autorise, réduit ou reporte après consultation utile.",
    proof:
      "Tests, détection, support, retour arrière et vérification des données personnelles si elle s’applique.",
    next: "Avant chaque mise en ligne concernée, sans imposer une fréquence de livraison.",
    color:
      "border-violet-200 bg-violet-50/70 dark:border-violet-900 dark:bg-violet-950/20",
  },
  {
    title: "Vérification après livraison",
    trigger:
      "La fenêtre d’observation écrite avant la livraison arrive à son terme ou un signal impose un examen anticipé.",
    owner:
      "Personne responsable du résultat visé, avec support et technique si nécessaire.",
    proof:
      "Même définition avant/après, données disponibles, retours, limites et événements extérieurs.",
    next: "Décision de poursuivre, corriger, retirer ou observer plus longtemps.",
    color:
      "border-emerald-200 bg-emerald-50/70 dark:border-emerald-900 dark:bg-emerald-950/20",
  },
  {
    title: "Revue de direction et de budget",
    trigger:
      "La date explicite arrive, ou le coût, le risque, l’usage ou la capacité change assez pour rouvrir la direction.",
    owner:
      "Dirigeant ou personne mandatée pour engager le produit et ses moyens.",
    proof:
      "Résultats observés, coûts pertinents, risques, travaux reportés et capacité de support.",
    next: "Conserver, reformuler, réduire, financer, reporter ou arrêter une intention.",
    color:
      "border-amber-200 bg-amber-50/70 dark:border-amber-900 dark:bg-amber-950/20",
  },
];

const nonCodeOptions = [
  {
    title: "Clarifier un texte ou un processus",
    example:
      "L’utilisateur comprend mal la première configuration parce que les termes internes remplacent sa question réelle.",
  },
  {
    title: "Modifier une configuration",
    example:
      "Un droit, une valeur par défaut ou une règle déjà disponible couvre le besoin sans nouvelle fonction.",
  },
  {
    title: "Documenter ou former",
    example:
      "Le parcours reste rare et stable ; une explication courte suffit mieux qu’un écran supplémentaire.",
  },
  {
    title: "Traiter manuellement pendant l’observation",
    example:
      "Le besoin est encore peu fréquent ou mal compris ; un service humain temporaire produit les faits nécessaires.",
  },
  {
    title: "Adopter un composant ou un outil standard",
    example:
      "L’export, l’authentification ou le support demandé est déjà couvert à moindre risque par une solution maintenue.",
  },
  {
    title: "Maintenir, réduire ou arrêter",
    example:
      "Le problème n’est plus confirmé, le coût ne se justifie plus ou personne ne peut soutenir le service correctement.",
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
          { label: "Faire évoluer un SaaS" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Bugs, demandes clients, promesses commerciales et mises à jour se disputent le même temps ? Séparez les décisions, sécurisez chaque livraison et vérifiez ce qu’elle change réellement."
        heroAction={{
          href: "#calendrier",
          label: "Copier le calendrier",
        }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "04",
            title: "4 types de décisions",
            description: "",
            color: "violet",
          },
          {
            number: "01",
            title: "6 vérifications avant mise en ligne",
            description: "",
            color: "blue",
          },
          {
            number: "",
            title: "Rythme adaptable",
            description: "",
            color: "emerald",
          },
          {
            number: "",
            title: guide.readTimeMin + " minutes de lecture",
            description: "",
            color: "amber",
          },
        ]}
        relatedLinks={[
          {
            href: "/guides/prioriser-fonctionnalites-mvp-saas",
            label: "Choisir le prochain petit lot avant ce calendrier",
          },
          {
            href: "/guides/mvp-saas-quoi-inclure",
            label: "Définir le socle de la première version",
          },
          {
            href: "/guides/contrat-tma-application",
            label: "Encadrer un contrat de maintenance ou de support",
          },
          {
            href: "/guides/cout-maintenance-application-metier",
            label: "Construire le budget annuel de maintenance",
          },
          {
            href: "/guides/combien-de-temps-developper-saas",
            label: "Calculer le délai d’un lot déjà décidé",
          },
          {
            href: "/guides/reprendre-saas-developpe-par-freelance",
            label: "Sécuriser la reprise d’un SaaS existant",
          },
          {
            href: "/services/saas-applications-metier",
            label: "Découvrir notre accompagnement SaaS",
          },
        ]}
        faqTitle="Faire évoluer un SaaS : les réponses après les premiers clients"
        faqItems={faqItems}
        showWhitePaperPromo={false}
        showSidebarCta={false}
      >
        <p className="lead">
          <strong>
            Cette semaine, l’un de vos clients ne peut plus créer une demande,
            votre commercial réclame un export pour un prospect et votre
            développeur signale une mise à jour de sécurité.
          </strong>{" "}
          Ces trois sujets ne doivent pas entrer dans la même liste avec la même
          priorité. Après le MVP — la première version volontairement limitée du
          produit — séparez ce qui protège le service de ce qui peut attendre.
          Lorsqu’un petit lot a déjà été choisi, vérifiez qu’il peut être mis en
          ligne et soutenu. Écrivez avant la livraison ce qui devrait changer,
          observez ensuite le résultat réel et revoyez régulièrement la
          direction et le budget. Cette cadence produit n’est rien de plus que
          le calendrier qui précise quand l’entreprise examine les signaux,
          prend une décision, livre une modification et vérifie son effet.
        </p>

        <p>
          Vous ne trouverez donc ici ni programme universel, ni nombre idéal de
          livraisons, ni répartition fixe du temps. Le rythme dépend des
          utilisateurs, du risque, des engagements, de l’équipe et de sa
          capacité à soutenir le service. Le résultat concret de ce guide est un
          calendrier à copier, avec un responsable et une prochaine date pour
          chaque décision.
        </p>

        <GuideToc
          items={[
            {
              id: "semaine",
              label: "1. Traiter trois sujets de nature différente",
            },
            {
              id: "quatre-decisions",
              label: "2. Séparer quatre types de décisions",
            },
            {
              id: "interruption",
              label: "3. Écrire la règle d’interruption",
            },
            {
              id: "signaux",
              label: "4. Enregistrer les signaux sans refaire le tri",
            },
            {
              id: "lot-choisi",
              label: "5. Recevoir le lot déjà choisi",
            },
            {
              id: "livrer",
              label: "6. Autoriser ou reporter la livraison",
            },
            {
              id: "verifier",
              label: "7. Vérifier l’effet après la mise en ligne",
            },
            {
              id: "direction",
              label: "8. Revoir direction, budget et reports",
            },
            {
              id: "exemple",
              label: "9. Suivre un cas fictif d’onboarding",
            },
            {
              id: "calendrier",
              label: "10. Copier le calendrier de décisions",
            },
            {
              id: "sans-code",
              label: "11. Résoudre aussi sans développement",
            },
            {
              id: "aide",
              label: "12. Savoir quand développer, réduire ou arrêter",
            },
            { id: "sources", label: "Sources et limites" },
          ]}
        />

        <h2 id="semaine">
          1. Un client bloqué, une vente possible et une alerte technique
          n’appellent pas la même décision
        </h2>

        <p>
          Après les premiers clients, la difficulté ne vient plus du manque
          d’idées. Elle vient de sujets légitimes qui arrivent par des chemins
          différents et semblent tous urgents. Si le dirigeant traite seulement
          le dernier message reçu, l’équipe peut laisser un incident actif pour
          préparer une vente, ou abandonner chaque lot à la première demande
          isolée.
        </p>

        <div className="not-prose my-8 space-y-4">
          {weeklySignals.map((signal) => (
            <article
              key={signal.title}
              className={`rounded-2xl border p-5 sm:p-6 ${signal.color}`}
            >
              <h3 className="m-0 text-lg font-semibold text-zinc-950 dark:text-white">
                {signal.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {signal.scene}
              </p>
              <dl className="mt-5 grid gap-4 md:grid-cols-2">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Décision immédiate
                  </dt>
                  <dd className="mt-1 text-sm font-medium leading-relaxed text-zinc-900 dark:text-zinc-100">
                    {signal.immediate}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Décision ultérieure
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {signal.later}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <p>
          Le manuel officiel britannique{" "}
          <a
            href="https://www.gov.uk/service-manual/agile-delivery/running-your-service-in-a-sustainable-way"
            target="_blank"
            rel="noopener noreferrer"
          >
            consacré à l’exploitation durable d’un service
          </a>{" "}
          rappelle que le travail continue après le lancement : comprendre les
          usages, traiter les problèmes techniques, assurer le support,
          améliorer le service et parfois ajouter des fonctions. Il concerne les
          services publics britanniques ; ce n’est ni une règle juridique ni une
          cadence imposée à un SaaS français. Son principe utile est plus simple
          : l’après-lancement ne se résume pas à une liste de nouvelles
          fonctions.
        </p>

        <InfoBox
          variant="blue"
          title="La demande la plus récente n’est pas automatiquement la prochaine décision"
        >
          Notez d’abord son effet, les personnes touchées, la preuve disponible,
          l’engagement éventuel et ce qui manque. Un incident actif peut
          interrompre le programme ; une demande commerciale rejoint
          généralement la prochaine comparaison, sauf engagement explicite
          réellement assumé.
        </InfoBox>

        <h2 id="quatre-decisions">
          2. Commencez par quatre rendez-vous distincts, pas par une grande
          feuille de route
        </h2>

        <p>
          Ces quatre groupes ne sont pas quatre outils ni quatre réunions
          obligatoires. Ce sont quatre décisions qui n’ont pas le même
          déclencheur, le même responsable ni la même sortie. Dans une très
          petite équipe, la même personne peut en porter plusieurs. Elle doit
          néanmoins savoir quel rôle elle joue au moment de trancher.
        </p>

        <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
          {decisionStreams.map((stream) => (
            <article
              key={stream.number}
              className={`rounded-2xl border p-5 sm:p-6 ${stream.color}`}
            >
              <div className="flex items-start gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-zinc-950 text-sm font-bold text-white dark:bg-white dark:text-zinc-950">
                  {stream.number}
                </span>
                <h3 className="m-0 text-lg font-semibold text-zinc-950 dark:text-white">
                  {stream.title}
                </h3>
              </div>
              <dl className="mt-5 space-y-4">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Ce qui entre
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {stream.receives}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Question à trancher
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {stream.decides}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Responsable
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {stream.owner}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Sortie écrite
                  </dt>
                  <dd className="mt-1 text-sm font-medium leading-relaxed text-zinc-900 dark:text-zinc-100">
                    {stream.output}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <p>
          Le{" "}
          <a
            href="https://www.gov.uk/service-manual/agile-delivery/how-the-live-phase-works"
            target="_blank"
            rel="noopener noreferrer"
          >
            manuel GOV.UK sur la phase d’un service déjà en ligne
          </a>{" "}
          maintient notamment support, recherche, tests, qualité, mesure,
          surveillance et sécurité après la première mise en ligne. Là encore,
          transposez les questions, pas l’organisation d’un service public
          britannique.
        </p>

        <h2 id="interruption">
          3. Écrivez avant l’incident ce qui peut interrompre le lot prévu
        </h2>

        <p>
          Sans règle, deux excès se succèdent. Soit toute plainte interrompt
          l’équipe ; soit le lot prévu continue alors que le service principal
          est inutilisable. Une règle d’interruption décrit un effet observable,
          la personne qui peut décider et la condition de retour au programme
          normal.
        </p>

        <div className="not-prose my-7 rounded-2xl border border-rose-200 bg-rose-50 p-5 dark:border-rose-900 dark:bg-rose-950/20 sm:p-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-rose-700 dark:text-rose-300">
            Votre règle d’interruption à compléter
          </p>
          <pre className="m-0 whitespace-pre-wrap font-mono text-xs leading-6 text-zinc-800 dark:text-zinc-200 sm:text-sm">
            {`LE PROGRAMME NORMAL PEUT ÊTRE INTERROMPU SI :
- effet client vérifié :
- engagement explicite touché :
- service impossible à exploiter :
- risque de sécurité ou obligation qualifiée :

PERSONNE AUTORISÉE À DÉCIDER :

PREMIÈRE ACTION :

PERSONNES À INFORMER :

PREUVE MINIMALE À CONSERVER :

CONDITION DE RETOUR AU LOT PRÉVU :

DATE OU ÉVÉNEMENT DE RÉEXAMEN :`}
          </pre>
        </div>

        <p>
          Le{" "}
          <a
            href="https://sre.google/workbook/error-budget-policy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google SRE Workbook présente une politique d’interruption
          </a>{" "}
          appliquée à un « Example Game Service » fictif. Cette annexe illustre
          le mécanisme ; ses seuils, pourcentages et dates ne sont ni une norme
          ni une politique applicable à votre SaaS, et sa propre date de
          réexamen est dépassée. Écrivez vos conditions à partir de l’effet
          client, des engagements et des risques réels.
        </p>

        <p>
          Une vente possible ne devient donc pas automatiquement une
          interruption. En revanche, un engagement contractuel explicite peut
          modifier la décision. Un avis de sécurité ne signifie pas non plus «
          tout arrêter » sans qualification : identifiez le composant, les
          versions touchées, l’exposition et les mesures disponibles avec la
          personne compétente.
        </p>

        <h2 id="signaux">
          4. Enregistrez les signaux entre deux décisions sans promettre de les
          développer
        </h2>

        <p>
          Un ticket, un appel ou une perte de vente raconte un contexte. Il ne
          devient pas automatiquement une fonction. Conservez assez
          d’information pour retrouver le problème et décider ce qu’il faut
          encore apprendre, sans transformer la liste en contrat implicite avec
          chaque client.
        </p>

        <div className="not-prose my-7 rounded-2xl border border-zinc-200 bg-zinc-950 p-5 text-zinc-100 shadow-sm sm:p-6 dark:border-zinc-800">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
            Fiche de signal à copier
          </p>
          <pre className="m-0 whitespace-pre-wrap font-mono text-xs leading-6 text-zinc-300 sm:text-sm">
            {`MESSAGE OU FAIT OBSERVÉ :

PROBLÈME REFORMULÉ :

PERSONNE OU ACTIVITÉ TOUCHÉE :

CONTEXTE ET EFFET :

FRÉQUENCE CONNUE :
— nombre brut et période, ou « inconnu »

PREUVE DISPONIBLE :

CE QUI MANQUE :

ENGAGEMENT EXPLICITE ÉVENTUEL :

RESPONSABLE DE LA PROCHAINE ACTION :

DATE DE LA PROCHAINE DÉCISION :

RÉPONSE À LA PERSONNE :
— problème compris
— ce qui sera vérifié
— prochaine décision, sans date de livraison inventée`}
          </pre>
        </div>

        <p>
          GOV.UK recommande de rapprocher mesures, tickets, retours,
          observations d’usage et informations financières pertinentes lorsque
          l’on décide où concentrer l’effort. Cette diversité évite qu’un seul
          chiffre ou le client le plus insistant résume la santé du produit.
          Elle ne supprime pas le jugement : un faible nombre de clients rend
          notamment les pourcentages instables.
        </p>

        <InfoBox
          variant="amber"
          title="Ici, vous ne choisissez pas à nouveau le prochain lot"
        >
          Si plusieurs demandes doivent être comparées, utilisez le guide{" "}
          <Link href="/guides/prioriser-fonctionnalites-mvp-saas">
            prioriser les fonctionnalités de la prochaine version
          </Link>
          . Il produit un seul prochain lot, son résultat attendu, son test et
          les sujets reportés. La présente méthode commence à cette sortie.
        </InfoBox>

        <h2 id="lot-choisi">
          5. Recevez le lot choisi avec quatre informations, sans rouvrir le
          débat
        </h2>

        <p>
          À ce stade, le prochain lot est déjà choisi. Refaire son score à
          chaque réunion redonne l’avantage au dernier message et use l’équipe.
          Vérifiez seulement que quatre éléments l’accompagnent : le problème ou
          résultat visé, le périmètre volontairement limité, le test prévu et
          les sujets explicitement reportés.
        </p>

        <div className="not-prose my-7 grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Résultat visé",
              text: "Ce qui devrait changer pour l’utilisateur ou l’entreprise, sans confondre ce résultat avec le nom de l’écran.",
            },
            {
              title: "Petit périmètre",
              text: "La plus petite modification cohérente que l’équipe peut tester, soutenir et éventuellement retirer.",
            },
            {
              title: "Test décidé avant",
              text: "Signal, population ou contexte, fenêtre d’observation et limites à reprendre après la livraison.",
            },
            {
              title: "Sujets reportés",
              text: "Ce qui n’entre pas dans ce lot et l’événement ou la date qui permettra de le réexaminer.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-violet-200 bg-violet-50 p-5 dark:border-violet-900 dark:bg-violet-950/20"
            >
              <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                {item.title}
              </h3>
              <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {item.text}
              </p>
            </article>
          ))}
        </div>

        <p>
          DORA présente le{" "}
          <a
            href="https://dora.dev/capabilities/working-in-small-batches/"
            target="_blank"
            rel="noopener noreferrer"
          >
            travail en petits lots
          </a>{" "}
          comme un moyen de tester plus vite et de corriger la direction plus
          tôt. Cela ne donne aucune taille universelle. Un « petit lot » est ici
          assez limité pour que votre équipe puisse en comprendre l’effet,
          détecter un problème et revenir en arrière selon le risque.
        </p>

        <h2 id="livrer">
          6. Une fonction terminée n’est pas forcément prête à être mise en
          ligne
        </h2>

        <p>
          « Le code est fini » ne répond pas aux questions du dirigeant : que se
          passe-t-il si la modification échoue, qui voit le problème, qui aide
          les clients et peut-on retirer le changement ? La décision de
          livraison doit rester séparée de la fierté d’avoir terminé le
          développement.
        </p>

        <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
          {releaseChecks.map((check) => (
            <article
              key={check.title}
              className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
            >
              <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                {check.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {check.question}
              </p>
              <p className="mb-0 mt-4 border-t border-zinc-200 pt-4 text-sm font-medium leading-relaxed text-zinc-900 dark:border-zinc-800 dark:text-zinc-100">
                Décision : {check.stop}
              </p>
            </article>
          ))}
        </div>

        <p>
          Le{" "}
          <a
            href="https://www.gov.uk/service-manual/technology/deploying-software-regularly"
            target="_blank"
            rel="noopener noreferrer"
          >
            guide GOV.UK sur les mises en ligne régulières
          </a>{" "}
          relie leur fréquence à la capacité de soutenir le service et souligne
          l’intérêt de changements limités pour le diagnostic et le retour.
          Cette recommandation ne vous impose ni livraison quotidienne ni
          organisation particulière. Les{" "}
          <a
            href="https://dora.dev/guides/dora-metrics/"
            target="_blank"
            rel="noopener noreferrer"
          >
            conseils DORA sur les mesures de livraison
          </a>{" "}
          rappellent aussi qu’elles servent à s’améliorer, pas à mettre les
          équipes en compétition ; une instrumentation très précise peut coûter
          plus qu’elle n’apporte au début.
        </p>

        <p>
          Le{" "}
          <a
            href="https://csrc.nist.gov/pubs/sp/800/218/final"
            target="_blank"
            rel="noopener noreferrer"
          >
            référentiel final NIST SP 800-218 version 1.1
          </a>{" "}
          demande d’intégrer les pratiques de développement sécurisé au cycle de
          création du logiciel. Il s’agit d’un référentiel officiel américain,
          pas d’une obligation générale identique pour tout SaaS français. Il
          soutient toutefois une règle raisonnable : la sécurité ne devient pas
          un travail séparé que l’on examine seulement après la mise en ligne.
        </p>

        <h3>Vérifiez les données personnelles si le lot les modifie</h3>

        <p>
          Cette vérification n’est ni une attestation de conformité ni un
          conseil juridique. Faites-la si le lot ajoute ou modifie des données
          personnelles, une finalité, un flux, un destinataire, un
          sous-traitant, un transfert, une durée, un droit d’accès ou un réglage
          de confidentialité.
        </p>

        <div className="not-prose my-7 rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/20 sm:p-6">
          <p className="mb-4 text-sm font-semibold text-blue-900 dark:text-blue-200">
            La personne responsable consigne avant la mise en ligne
          </p>
          <ol className="mb-0 space-y-2 pl-5 text-sm leading-relaxed text-blue-800 dark:text-blue-300">
            <li>les données, la finalité et la base juridique à confirmer ;</li>
            <li>ce qui peut être supprimé ou rendu facultatif ;</li>
            <li>les accès, destinataires, sous-traitants et transferts ;</li>
            <li>la durée, l’effacement et l’exercice des droits ;</li>
            <li>l’information à modifier pour les personnes ;</li>
            <li>les tests, protections par défaut et retour arrière ;</li>
            <li>
              si le traitement peut engendrer un risque élevé pour les droits et
              libertés.
            </li>
          </ol>
        </div>

        <p>
          Le{" "}
          <a
            href="https://www.cnil.fr/fr/guide-rgpd-du-developpeur"
            target="_blank"
            rel="noopener noreferrer"
          >
            guide RGPD de la CNIL pour les équipes de développement
          </a>{" "}
          traite notamment minimisation, information, droits, architecture et
          bibliothèques. La{" "}
          <a
            href="https://www.cnil.fr/fr/securite-encadrer-les-developpements-informatiques"
            target="_blank"
            rel="noopener noreferrer"
          >
            fiche CNIL sur l’encadrement des développements
          </a>{" "}
          recommande d’intégrer tôt sécurité et protection des données, de
          tester avant la production et d’éviter autant que possible les données
          personnelles réelles en développement.
        </p>

        <p>
          Si le traitement envisagé est susceptible d’engendrer un risque élevé,
          la personne compétente qualifie le cas. Lorsque le déclencheur légal
          est rempli, l’analyse d’impact relative à la protection des données
          est menée en amont et mise à jour pendant le cycle de vie. La{" "}
          <a
            href="https://www.cnil.fr/fr/ce-quil-faut-savoir-sur-lanalyse-dimpact-relative-la-protection-des-donnees-aipd"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL détaille les conditions générales de cette analyse d’impact
          </a>
          . Elle n’est ni automatique pour chaque fonction, ni écartée sans
          examen.
        </p>

        <h2 id="verifier">
          7. Après la livraison, vérifiez l’effet attendu — pas seulement
          l’absence d’erreur
        </h2>

        <p>
          Une mise en ligne réussie prouve que la version a été déployée. Elle
          ne prouve pas que l’utilisateur comprend mieux, que le support reçoit
          moins de questions ou que l’entreprise vend davantage. Avant la
          livraison, écrivez le signal et la fenêtre d’observation ; après,
          reprenez la même définition.
        </p>

        <FormulaBox>
          {`AVANT
Signal observé :
Population ou contexte :
Période ou fenêtre :
Limites et données manquantes :

ATTENDU
Changement observable :
Même population ou contexte :
Fenêtre annoncée :

APRÈS
Résultat réellement observé :
Donnée indisponible ou absence de changement :
Événements extérieurs pouvant l’expliquer :
Limites :

DÉCISION
Poursuivre / corriger / retirer / documenter / former / observer plus longtemps`}
        </FormulaBox>

        <p>
          Gardez la même population ou le même contexte. Distinguez zéro
          observation, donnée indisponible et absence de changement. Avec
          quelques clients, privilégiez les nombres bruts et les situations
          décrites à un pourcentage spectaculaire. N’attribuez pas une vente ou
          une baisse de tickets au lot si une campagne, un changement de prix,
          une formation ou un incident a aussi modifié le contexte.
        </p>

        <p>
          Le{" "}
          <a
            href="https://www.gov.uk/service-manual/measuring-success/measuring-the-success-of-your-service"
            target="_blank"
            rel="noopener noreferrer"
          >
            manuel GOV.UK sur la mesure d’un service
          </a>{" "}
          recommande de combiner indicateurs, recherche avec les utilisateurs,
          retours, support et informations financières pertinentes. Ce
          rapprochement fournit une aide à la décision ; il ne démontre pas à
          lui seul qu’une modification a causé un résultat commercial.
        </p>

        <InfoBox
          variant="emerald"
          title="« Aucun changement visible » est aussi un résultat"
        >
          Il peut conduire à corriger l’explication, retirer la fonction,
          observer plus longtemps ou reconnaître que le problème initial n’était
          pas confirmé. L’objectif du suivi n’est pas de justifier le lot après
          coup, mais de rendre la prochaine décision plus honnête.
        </InfoBox>

        <h2 id="direction">
          8. La feuille de route indique une direction ; elle ne doit pas
          devenir une série de promesses involontaires
        </h2>

        <p>
          Une feuille de route utile explique les problèmes ou résultats que
          l’entreprise veut traiter et ce qu’elle choisit de ne pas faire. Elle
          n’a pas besoin de détailler chaque tâche. Le{" "}
          <a
            href="https://www.gov.uk/service-manual/agile-delivery/developing-a-roadmap"
            target="_blank"
            rel="noopener noreferrer"
          >
            guide GOV.UK consacré aux roadmaps
          </a>{" "}
          insiste sur leur caractère évolutif, leur orientation vers la valeur
          ou le résultat, ainsi que sur la personne responsable de leur
          entretien et une fréquence de mise à jour explicite.
        </p>

        <p>
          Pour un SaaS privé, choisissez votre rythme selon le risque, le nombre
          de signaux, la capacité de livraison et les décisions financières. Ne
          publiez pas une date annuelle pour rassurer si personne ne sait encore
          la tenir. Vous pouvez communiquer : « nous examinons ce problème », «
          voici le résultat visé » et « prochaine décision à telle date » sans
          annoncer que telle fonction sera livrée.
        </p>

        <div className="not-prose my-7 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900 dark:bg-emerald-950/20">
            <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
              À conserver dans la direction
            </h3>
            <ul className="mb-0 mt-4 space-y-2 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              <li>problème ou résultat visé ;</li>
              <li>preuve actuelle et inconnues ;</li>
              <li>responsable de la prochaine décision ;</li>
              <li>travaux indispensables de fiabilité et sécurité ;</li>
              <li>date ou événement de réexamen.</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900 dark:bg-amber-950/20">
            <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
              À ne pas transformer en promesse
            </h3>
            <ul className="mb-0 mt-4 space-y-2 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              <li>idée encore portée par un seul message ;</li>
              <li>fonction dont le résultat n’est pas défini ;</li>
              <li>date sans dépendances ni capacité confirmées ;</li>
              <li>travail technique décrit comme un gain commercial ;</li>
              <li>sujet reporté sans condition de retour.</li>
            </ul>
          </article>
        </div>

        <p>
          La revue de direction doit aussi poser la question financière sans
          refaire ici un budget annuel complet : quels travaux indispensables ne
          sont pas financés, quel coût d’exploitation devient difficile à
          justifier, et quelle capacité l’équipe peut-elle réellement soutenir ?
          Le guide{" "}
          <Link href="/guides/cout-maintenance-application-metier">
            calculer le coût de maintenance d’une application
          </Link>{" "}
          aide à construire le budget à partir de preuves réelles.
        </p>

        <h2 id="exemple">
          9. Voici comment une petite équipe peut suivre une friction
          d’onboarding sans inventer un succès
        </h2>

        <p>
          <strong>L’exemple est entièrement fictif.</strong> Il décrit un SaaS
          B2B qui centralise des demandes d’intervention. Il ne reprend ni un
          client ni un résultat obtenu par Hagnéré Code. Les trois utilisateurs
          servent seulement à montrer plusieurs descriptions concordantes ; ce
          nombre n’est ni un seuil ni une preuve de fréquence.
        </p>

        <div className="not-prose my-8 space-y-3">
          {onboardingStory.map((step, index) => (
            <article
              key={step.verb}
              className="flex gap-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-zinc-950 text-sm font-bold text-white dark:bg-white dark:text-zinc-950">
                {index + 1}
              </span>
              <div>
                <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                  {step.verb}
                </h3>
                <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {step.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p>
          Cet ordre des décisions ne fixe aucune durée. Une équipe peut aussi
          découvrir que la modification n’a produit aucun signal exploitable.
          Elle l’écrit au lieu de conclure que « les utilisateurs adorent ».
          L’intérêt de ce parcours continu est de garder la même définition du
          problème de l’observation à la décision suivante.
        </p>

        <h2 id="calendrier">
          10. Choisissez parmi cinq cartes et inscrivez vos quatre prochaines
          décisions
        </h2>

        <p>
          Le calendrier ci-dessous ne vous demande pas d’acheter un outil. Les
          cinq cartes décrivent des types de rendez-vous possibles. Copiez les
          quatre décisions qui arriveront réellement ensuite dans votre contexte
          : un même type peut revenir deux fois et un autre ne pas être utile
          tout de suite. Choisissez une fréquence adaptée et inscrivez la
          prochaine date ou le prochain événement. Une décision sans responsable
          ni moment de retour reste seulement une intention.
        </p>

        <div className="not-prose my-8 space-y-4">
          {calendarCards.map((card) => (
            <article
              key={card.title}
              className={`rounded-2xl border p-5 sm:p-6 ${card.color}`}
            >
              <h3 className="m-0 text-lg font-semibold text-zinc-950 dark:text-white">
                {card.title}
              </h3>
              <dl className="mt-5 grid gap-4 md:grid-cols-2">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Déclencheur
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {card.trigger}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Responsable
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {card.owner}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Preuve attendue
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {card.proof}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                    Prochaine décision
                  </dt>
                  <dd className="mt-1 text-sm font-medium leading-relaxed text-zinc-900 dark:text-zinc-100">
                    {card.next}
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <div className="not-prose my-7 rounded-2xl border border-zinc-200 bg-zinc-950 p-5 text-zinc-100 shadow-sm sm:p-6 dark:border-zinc-800">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">
            Registre complet à copier dans votre outil
          </p>
          <pre className="m-0 whitespace-pre-wrap font-mono text-xs leading-6 text-zinc-300 sm:text-sm">
            {`DÉCISION À PRENDRE
Type : protéger le service / enregistrer / recevoir le lot choisi / autoriser ou reporter / vérifier / réviser

Signal ou déclencheur :
Personne ou activité touchée :
Effet observé :
Preuve disponible :
Ce qui manque encore :

Responsable de la décision :
Personnes à consulter :
Résultat attendu :
Condition qui interrompt le programme normal :

Effet sur des données personnelles : non / oui / à qualifier
Responsable de la vérification RGPD si nécessaire :

Prochaine date de décision :

Décision prise :
développer / configurer / documenter / former / traiter manuellement / acheter / maintenir / reporter / retirer / arrêter

Motif en une phrase :
Date de réexamen ou événement qui rouvrira le sujet :`}
          </pre>
        </div>

        <p>
          Copiez ce texte dans un document partagé que l’équipe sait retrouver.
          Ne multipliez pas les champs si personne ne les utilise pour décider.
          Le premier contrôle consiste simplement à vérifier que les quatre
          prochaines décisions possèdent chacune un déclencheur, un responsable,
          une preuve attendue et une date ou un événement de retour.
        </p>

        <h2 id="sans-code">
          11. Une issue peut être résolue et fermée sans ajouter de code
        </h2>

        <p>
          Le calendrier perd sa valeur s’il transforme chaque problème en
          développement. La bonne sortie est celle qui résout suffisamment le
          problème avec un coût, un risque et une capacité de support
          acceptables. Documentez aussi les décisions non techniques : elles
          évitent que la même demande revienne plus tard comme si personne ne
          l’avait traitée.
        </p>

        <div className="not-prose my-7 grid gap-4 md:grid-cols-2">
          {nonCodeOptions.map((option) => (
            <article
              key={option.title}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                {option.title}
              </h3>
              <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {option.example}
              </p>
            </article>
          ))}
        </div>

        <InfoBox
          variant="emerald"
          title="Le travail différé doit rester visible sans devenir une excuse permanente"
        >
          Les travaux parfois appelés « dette technique » sont ici les choix
          différés qui rendent les prochaines modifications plus lentes,
          risquées ou coûteuses. Écrivez leur effet, le risque accepté, le
          responsable et la date de réexamen. Aucun pourcentage fixe ne dit
          combien de temps leur consacrer.
        </InfoBox>

        <h2 id="aide">
          12. Ne lancez pas un nouveau lot si le produit a d’abord besoin d’une
          décision plus fondamentale
        </h2>

        <div className="not-prose my-7 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900 dark:bg-emerald-950/20">
            <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
              Hagnéré Code peut être pertinent si…
            </h3>
            <ul className="mb-0 mt-4 space-y-2 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              <li>le SaaS possède de premiers usages réels ;</li>
              <li>plusieurs types de demandes se concurrencent ;</li>
              <li>
                une équipe peut intervenir, tester et soutenir le service ;
              </li>
              <li>le dirigeant veut organiser des lots ciblés ;</li>
              <li>
                les responsables et décisions peuvent être rendus explicites.
              </li>
            </ul>
          </article>
          <article className="rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900 dark:bg-amber-950/20">
            <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
              Développer n’est probablement pas la prochaine action si…
            </h3>
            <ul className="mb-0 mt-4 space-y-2 pl-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              <li>aucun usage réel ne confirme encore le problème ;</li>
              <li>un incident ou une compromission est en cours ;</li>
              <li>un outil standard remplace raisonnablement le produit ;</li>
              <li>personne ne peut décider, tester ou soutenir la suite ;</li>
              <li>le besoin est uniquement marketing ;</li>
              <li>la valeur ne justifie plus le coût d’exploitation.</li>
            </ul>
          </article>
        </div>

        <p>
          Dans ces mauvais cas, la prochaine action peut être de valider le
          besoin, restaurer le service, configurer, documenter, former, acheter
          un outil, maintenir sans ajouter, réduire ou arrêter. Si personne ne
          peut déployer ou diagnostiquer le produit actuel, commencez plutôt par{" "}
          <Link href="/guides/reprendre-saas-developpe-par-freelance">
            sécuriser la reprise du SaaS
          </Link>
          .
        </p>

        <GuideInlineCTA
          title="Décrivez les décisions qui bloquent l’évolution de votre SaaS"
          description="Le formulaire guidé prend environ deux à trois minutes. Votre contexte est lu par une personne, qui vous répond de façon argumentée sans délai garanti. Un échange est proposé seulement s’il paraît utile ; le clic ne promet ni lot, ni calendrier, ni développement."
          tags={[
            "Réduire ou arrêter reste possible",
            "Une réponse sans code peut suffire",
            "Lecture humaine du contexte",
          ]}
          ctaLabel="Décrire mon projet"
          ctaHref="/demarrer-un-projet"
          showPhone={false}
        />

        <p>
          Faire évoluer un SaaS après son MVP ne consiste pas à remplir une
          feuille de route. Il faut protéger le service, enregistrer les
          signaux, recevoir un petit lot déjà choisi, autoriser ou reporter sa
          livraison, vérifier son effet et revoir la direction. Inscrivez les
          quatre prochaines décisions et leurs responsables avant d’acheter un
          nouveau développement.
        </p>

        <h2 id="sources">Sources consultées et limites</h2>

        <p>
          Sources revalidées le 23 juillet 2026. Les références GOV.UK
          concernent des services publics britanniques ; DORA traite de la
          livraison de logiciels ; le NIST publie un référentiel américain ; la
          CNIL fournit des repères français sur les données personnelles. Aucune
          de ces sources ne fixe une cadence universelle ou ne valide votre
          organisation, votre sécurité ou votre conformité.
        </p>

        <ul>
          <li>
            GOV.UK Service Manual —{" "}
            <a
              href="https://www.gov.uk/service-manual/agile-delivery/running-your-service-in-a-sustainable-way"
              target="_blank"
              rel="noopener noreferrer"
            >
              gérer et améliorer un service dans la durée
            </a>
            ,{" "}
            <a
              href="https://www.gov.uk/service-manual/agile-delivery/how-the-live-phase-works"
              target="_blank"
              rel="noopener noreferrer"
            >
              phase en ligne
            </a>
            ,{" "}
            <a
              href="https://www.gov.uk/service-manual/agile-delivery/developing-a-roadmap"
              target="_blank"
              rel="noopener noreferrer"
            >
              feuille de route
            </a>
            ,{" "}
            <a
              href="https://www.gov.uk/service-manual/measuring-success/measuring-the-success-of-your-service"
              target="_blank"
              rel="noopener noreferrer"
            >
              mesure du succès
            </a>{" "}
            et{" "}
            <a
              href="https://www.gov.uk/service-manual/technology/deploying-software-regularly"
              target="_blank"
              rel="noopener noreferrer"
            >
              mises en ligne régulières
            </a>
            .
          </li>
          <li>
            DORA —{" "}
            <a
              href="https://dora.dev/capabilities/working-in-small-batches/"
              target="_blank"
              rel="noopener noreferrer"
            >
              travailler en petits lots
            </a>{" "}
            et{" "}
            <a
              href="https://dora.dev/guides/dora-metrics/"
              target="_blank"
              rel="noopener noreferrer"
            >
              utiliser les mesures de livraison pour s’améliorer
            </a>
            .
          </li>
          <li>
            <a
              href="https://csrc.nist.gov/pubs/sp/800/218/final"
              target="_blank"
              rel="noopener noreferrer"
            >
              NIST SP 800-218, Secure Software Development Framework version 1.1
              finale
            </a>
            .
          </li>
          <li>
            <a
              href="https://sre.google/workbook/error-budget-policy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google SRE Workbook — Example Error Budget Policy
            </a>{" "}
            — exemple fictif utilisé uniquement pour comprendre une règle
            d’interruption ; aucun seuil n’est repris.
          </li>
          <li>
            CNIL —{" "}
            <a
              href="https://www.cnil.fr/fr/guide-rgpd-du-developpeur"
              target="_blank"
              rel="noopener noreferrer"
            >
              guide RGPD du développeur
            </a>
            ,{" "}
            <a
              href="https://www.cnil.fr/fr/securite-encadrer-les-developpements-informatiques"
              target="_blank"
              rel="noopener noreferrer"
            >
              encadrer les développements informatiques
            </a>{" "}
            et{" "}
            <a
              href="https://www.cnil.fr/fr/ce-quil-faut-savoir-sur-lanalyse-dimpact-relative-la-protection-des-donnees-aipd"
              target="_blank"
              rel="noopener noreferrer"
            >
              analyse d’impact relative à la protection des données
            </a>
            .
          </li>
        </ul>

        <p>
          Le SaaS de demandes d’intervention, ses trois utilisateurs et toute la
          friction d’onboarding sont fictifs. Aucun délai, revenu, taux de
          conversion, amélioration de rétention ou effet positif n’est
          revendiqué. Le calendrier ne remplace ni l’analyse d’un incident, ni
          un avis de sécurité, ni une qualification RGPD, ni un engagement
          contractuel, ni le calcul complet du budget annuel.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
