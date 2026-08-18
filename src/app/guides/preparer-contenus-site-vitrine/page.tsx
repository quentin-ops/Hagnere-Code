import type { Metadata } from "next";
import Link from "next/link";
import {
  FormulaBox,
  GuideInlineCTA,
  GuideTable,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { GuideLayout } from "@/components/guides/guide-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { ContentPreparationKit } from "@/components/guides/ContentPreparationKit";
import { formatGuideDate, getGuide, guideRobots, guideUrl } from "@/lib/guides";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("preparer-contenus-site-vitrine");

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
        alt: "Les contenus à préparer pour un site vitrine professionnel",
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
      name: "Préparer les contenus d’un site vitrine",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question:
      "Faut-il avoir tous les textes terminés avant de contacter une agence web ?",
    answer:
      "Non. Vous pouvez contacter une agence avec des notes, des documents commerciaux et des exemples, à condition de connaître vos offres, leurs limites, vos preuves et la personne qui validera. Faites ensuite préciser dans le devis qui interviewe, rédige, réécrit et intègre les textes.",
  },
  {
    question: "Qui doit rédiger les textes du site vitrine ?",
    answer:
      "Cela dépend du devis. L’entreprise reste responsable de l’exactitude de l’offre, des tarifs, des références et des informations pratiques. Le prestataire peut conduire les entretiens, structurer les pages et rédiger les textes si cette mission, le nombre de pages et les validations sont chiffrés.",
  },
  {
    question: "Combien de photos faut-il fournir pour un site vitrine ?",
    answer:
      "Il n’existe pas de nombre universel. Préparez d’abord les images qui aident à comprendre ou à croire ce que vous affirmez : lieu, équipe, réalisation, produit, intervention ou résultat visible. Une petite sélection nette, documentée et publiable vaut mieux qu’un grand dossier sans explication ni droits vérifiés.",
  },
  {
    question:
      "Peut-on utiliser des photos trouvées sur Google ou les réseaux sociaux ?",
    answer:
      "Pas simplement parce qu’elles sont visibles en ligne. Identifiez l’auteur, la licence ou l’autorisation, les usages permis et les personnes reconnaissables. Une citation de la source ne remplace pas automatiquement le droit de reproduire l’image.",
  },
  {
    question: "Peut-on reprendre les avis Google de ses clients sur le site ?",
    answer:
      "Ne les copiez pas automatiquement. Vérifiez les conditions du service, l’identité que vous voulez afficher, le contexte et l’autorisation nécessaire. Le plus sûr éditorialement est de conserver une preuve de l’avis et de valider avec le client la citation, son attribution et son usage.",
  },
  {
    question: "Quelles informations préparer pour le formulaire de contact ?",
    answer:
      "Commencez par l’action attendue et la personne qui traitera la demande. Demandez ensuite seulement les informations nécessaires à cette réponse, distinguez les champs obligatoires et facultatifs, puis préparez l’information sur l’usage des données. Le modèle doit être adapté à votre traitement réel.",
  },
  {
    question: "Faut-il créer un blog dès le lancement du site ?",
    answer:
      "Non. Un blog n’est utile que si vous avez des questions récurrentes à traiter, une personne responsable et un rythme réaliste. Il vaut mieux publier d’abord des pages d’offres exactes, des preuves vérifiables et un contact qui fonctionne que promettre une rubrique jamais entretenue.",
  },
  {
    question: "Comment transmettre les contenus sans perdre du temps ?",
    answer:
      "Utilisez un dossier partagé avec une arborescence simple et un seul document de suivi. Pour chaque élément, indiquez son état, son responsable, son origine ou son droit d’usage, puis le nom de la personne qui le valide. Évitez les versions envoyées dans plusieurs fils d’e-mails.",
  },
];

const readinessStates = [
  {
    state: "Prêt",
    title: "L’information peut être utilisée",
    text: "Elle est exacte, compréhensible, publiable et validée par la bonne personne.",
    color:
      "border-emerald-200 bg-emerald-50/70 dark:border-emerald-900 dark:bg-emerald-950/20",
    label: "text-emerald-700 dark:text-emerald-300",
  },
  {
    state: "À faire produire",
    title: "La matière existe, pas sa forme finale",
    text: "Les faits sont connus, mais le texte, la photo ou l’illustration doit encore être réalisé.",
    color:
      "border-blue-200 bg-blue-50/70 dark:border-blue-900 dark:bg-blue-950/20",
    label: "text-blue-700 dark:text-blue-300",
  },
  {
    state: "À confirmer",
    title: "La publication serait prématurée",
    text: "Un prix, un résultat, une autorisation, une date ou un responsable reste incertain.",
    color:
      "border-amber-200 bg-amber-50/70 dark:border-amber-900 dark:bg-amber-950/20",
    label: "text-amber-700 dark:text-amber-300",
  },
];

function ReadinessStates() {
  return (
    <div className="not-prose my-6 grid gap-3 md:grid-cols-3">
      {readinessStates.map((item) => (
        <section
          key={item.state}
          className={`rounded-2xl border p-5 ${item.color}`}
        >
          <p
            className={`m-0 text-xs font-extrabold uppercase tracking-[0.13em] ${item.label}`}
          >
            {item.state}
          </p>
          <h3 className="mb-0 mt-2 text-base font-bold leading-snug text-zinc-950 dark:text-white">
            {item.title}
          </h3>
          <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            {item.text}
          </p>
        </section>
      ))}
    </div>
  );
}

const contentFolders = [
  {
    number: "01",
    title: "Offres et limites",
    text: "Ce que vous faites, pour qui, dans quelle zone, ce qui est compris et ce qui ne l’est pas.",
  },
  {
    number: "02",
    title: "Questions des clients",
    text: "Les hésitations entendues avant un devis, un appel, une réservation ou une visite.",
  },
  {
    number: "03",
    title: "Preuves",
    text: "Réalisations, qualifications, processus, avis autorisés et résultats que vous pouvez démontrer.",
  },
  {
    number: "04",
    title: "Photos et visuels",
    text: "Fichiers originaux, auteur, licence, personnes présentes, contexte et usage souhaité.",
  },
  {
    number: "05",
    title: "Informations pratiques",
    text: "Nom exact, coordonnées, horaires, zone, accès, identité légale et éléments d’hébergement.",
  },
  {
    number: "06",
    title: "Contact et traitement",
    text: "Action attendue, champs utiles, destinataire, réponse prévue et informations sur les données.",
  },
];

function ContentFolders() {
  return (
    <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
      {contentFolders.map((folder) => (
        <section
          key={folder.number}
          className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
        >
          <div className="flex items-start gap-4">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-zinc-950 text-xs font-extrabold text-white dark:bg-white dark:text-zinc-950">
              {folder.number}
            </span>
            <div>
              <h3 className="m-0 text-base font-bold text-zinc-950 dark:text-white">
                {folder.title}
              </h3>
              <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {folder.text}
              </p>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

const responsibilities = [
  {
    title: "Offres et faits",
    company: "Explique le métier et confirme l’exactitude.",
    provider: "Interroge, structure et reformule si le devis le prévoit.",
    validation: "Nom du décideur et nombre de retours inclus.",
  },
  {
    title: "Textes finaux",
    company: "Fournit un texte ou répond aux entretiens.",
    provider: "Rédige, réécrit ou intègre selon la mission chiffrée.",
    validation: "Pages concernées et définition d’une version validée.",
  },
  {
    title: "Photos et visuels",
    company: "Fournit les fichiers et les droits déjà connus.",
    provider: "Sélectionne, traite ou produit si ce travail est chiffré.",
    validation: "Origine, usages autorisés et éventuels coûts tiers.",
  },
  {
    title: "Preuves et avis",
    company: "Démontre et autorise ce qui est affirmé.",
    provider: "Présente la preuve sans élargir sa portée.",
    validation: "Source, date et responsable de la prochaine mise à jour.",
  },
  {
    title: "Formulaire",
    company: "Définit la demande et la personne qui la traite.",
    provider: "Conçoit, intègre et teste le parcours.",
    validation:
      "Champs, destinataire, information et test final de bon fonctionnement.",
  },
];

function ResponsibilityCards() {
  return (
    <div className="not-prose my-6 space-y-3">
      {responsibilities.map((item) => (
        <section
          key={item.title}
          className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
        >
          <h3 className="m-0 text-base font-bold text-zinc-950 dark:text-white">
            {item.title}
          </h3>
          <dl className="mt-4 grid gap-4 sm:grid-cols-3">
            <div>
              <dt className="text-[11px] font-extrabold uppercase tracking-[0.11em] text-violet-700 dark:text-violet-300">
                L’entreprise
              </dt>
              <dd className="mb-0 mt-1.5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {item.company}
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-extrabold uppercase tracking-[0.11em] text-blue-700 dark:text-blue-300">
                Le prestataire
              </dt>
              <dd className="mb-0 mt-1.5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {item.provider}
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-extrabold uppercase tracking-[0.11em] text-emerald-700 dark:text-emerald-300">
                À écrire dans le devis
              </dt>
              <dd className="mb-0 mt-1.5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {item.validation}
              </dd>
            </div>
          </dl>
        </section>
      ))}
    </div>
  );
}

function ProductionComparison() {
  return (
    <>
      <GuideTable
        caption="Même lot : huit pages, quatre offres, mêmes preuves, deux cycles de retours"
        headers={["Mode", "Calcul du temps valorisé", "Mon avis"]}
        rows={[
          [
            "Interne",
            "Direction 20 h × 75 € + équipe 8 h × 40 € + prestataire 4 h × 90 € = 2 180 €",
            "Pertinent si vous avez déjà un rédacteur et une disponibilité réelle.",
          ],
          [
            "Hybride",
            "Direction 8 h × 75 € + équipe 4 h × 40 € + prestataire 14 h × 90 € = 2 020 €",
            "Mon choix par défaut pour une PME : les faits restent chez vous, la structure et la rédaction avancent.",
          ],
          [
            "Délégué",
            "Direction 5 h × 75 € + équipe 3 h × 40 € + prestataire 26 h × 90 € = 2 835 €",
            "À retenir lorsque le calendrier coûte plus cher que la prestation, pas pour abandonner la validation.",
          ],
        ]}
      />
      <InfoBox variant="blue" title="Un prix plus bas ne suffit pas à choisir">
        Dans cet exemple fictif, le mode hybride mobilise 12 heures internes et
        coûte 160 € de moins que l’interne, tout en demandant 10 heures de
        prestataire supplémentaires. Si une heure de direction vaut réellement
        75 € de capacité indisponible, l’arbitrage est visible. Si cette valeur
        est une estimation discutable, gardez-la comme hypothèse et ne la
        présentez pas comme une économie comptable. Le comparateur ci-dessous
        permet de remplacer ces nombres par les vôtres.
      </InfoBox>
    </>
  );
}

function BeforeAfterExample() {
  return (
    <GuideTable
      caption="Exemple fictif : transformer une note métier en page compréhensible"
      headers={[
        "Note envoyée",
        "Ce que le lecteur doit savoir",
        "Page publiable",
      ]}
      rows={[
        [
          "On vient sur place. Très réactifs. Toutes marques. Devis gratuit.",
          "Qui appelle, dans quelle situation, ce qui se passe après le premier contact et ce qui n’est pas compris.",
          "Vous êtes responsable de production et une panne revient ? Nous commençons par un diagnostic sur site, avec un compte rendu et des priorités d’action. Les pièces, la réparation et l’arrêt de production sont décidés et chiffrés séparément. Demandez un diagnostic.",
        ],
        [
          "Nos clients sont satisfaits.",
          "Quelle preuve, sur quelle période et pour quel périmètre ?",
          "12 interventions documentées entre janvier et juin 2026 ; 10 comptes rendus remis sous 48 h. Échantillon interne, hors promesse de délai pour chaque panne.",
        ],
      ]}
    />
  );
}

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
          { label: "Contenus d’un site vitrine" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vous n’avez pas besoin d’écrire un site entier avant de demander un devis. Vous devez en revanche savoir quoi vendre, pour qui, avec quelles preuves, quelles photos et qui validera. Voici le dossier concret à préparer, les tâches à chiffrer et le test à faire avant mise en ligne."
        heroAction={{ href: "#reponse", label: "Voir ce qu’il faut préparer" }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "01",
            title: "6 dossiers à réunir",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "3 états de validation",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "1 fiche par offre",
            description: "",
            color: "emerald",
          },
          {
            number: "04",
            title: "Lecture : " + guide.readTimeMin + " min",
            description: "",
            color: "amber",
          },
        ]}
        relatedLinks={[
          {
            href: "/guides/cahier-des-charges-site-internet",
            label: "Rédiger le cahier des charges du site",
          },
          {
            href: "/guides/combien-de-temps-pour-creer-un-site",
            label: "Préparer le calendrier de création",
          },
          {
            href: "/guides/prix-site-vitrine",
            label: "Comprendre le prix d’un site vitrine",
          },
          {
            href: "/guides/template-ou-site-sur-mesure",
            label: "Choisir le bon niveau de conception",
          },
        ]}
        faqTitle="Préparer les contenus d’un site : questions fréquentes"
        faqItems={faqItems}
        showWhitePaperPromo={false}
      >
        <p className="lead">
          Votre projet de site avance, puis le prestataire vous demande « les
          textes, les photos et le logo ». Vous connaissez votre métier, mais
          vous ne savez pas quoi écrire ni ce qui est assez abouti pour être
          envoyé.{" "}
          <strong>Vous n’avez pas à rédiger seul chaque phrase du site.</strong>{" "}
          En revanche, personne ne peut inventer à votre place vos offres, leurs
          limites, vos preuves, vos coordonnées ou le droit d’utiliser une
          photo. Commencez donc par classer chaque élément en trois états :
          prêt, à faire produire ou à confirmer. Vous pourrez ensuite demander
          un devis qui précise clairement qui écrit, qui fournit, qui vérifie et
          qui valide.
        </p>

        <p>
          Dans ce guide, le mot <strong>contenu</strong> désigne tout ce que le
          visiteur lit, voit ou utilise pour comprendre votre offre, lui faire
          confiance et vous contacter. Cela inclut les textes, mais aussi les
          photos, les réalisations, les informations pratiques, les formulaires
          et les éléments légaux. L’objectif n’est pas de vous transformer en
          rédacteur web. Il est de remettre des informations et des fichiers que
          le prestataire peut réellement utiliser.
        </p>

        <h2 id="reponse">
          La réponse courte : tout ne doit pas être fini, mais chaque inconnue
          doit être nommée
        </h2>

        <ReadinessStates />

        <p>
          Vous pouvez donc contacter une agence alors que les textes finaux ou
          la séance photo restent à produire. Le projet devient fragile lorsque
          personne ne sait ce qui est inclus dans le devis, qui peut confirmer
          une affirmation ou si les images sont réellement publiables. Ces
          incertitudes ne se corrigent pas avec une belle mise en page : elles
          doivent être attribuées à une personne et à une date.
        </p>

        <GuideToc
          items={[
            { id: "six-dossiers", label: "1. Réunir six dossiers utiles" },
            { id: "fiche-offre", label: "2. Remplir une fiche par offre" },
            {
              id: "page-complete",
              label: "3. Passer de la note brute à la page",
            },
            {
              id: "preuves",
              label: "4. Garder uniquement les preuves publiables",
            },
            {
              id: "photos",
              label: "5. Choisir des photos utiles et autorisées",
            },
            {
              id: "informations",
              label: "6. Préparer les informations pratiques et le formulaire",
            },
            {
              id: "responsabilites",
              label: "7. Écrire qui produit et qui valide",
            },
            {
              id: "comparer",
              label: "8. Comparer trois modes sur le même lot",
            },
            {
              id: "kit",
              label: "9. Télécharger le dossier et le comparateur",
            },
            { id: "lancement", label: "10. Décider si le dossier est prêt" },
            { id: "transmettre", label: "11. Remettre un dossier utilisable" },
            {
              id: "apres-publication",
              label: "12. Tester avant et suivre à 30/90 jours",
            },
            { id: "sources-limites", label: "Sources et limites" },
          ]}
        />

        <h2 id="six-dossiers">
          1. Réunissez six dossiers au lieu d’envoyer un document vide
        </h2>

        <p>
          Ne commencez pas par « rédiger la page d’accueil ». Cette page dépend
          de tout le reste et provoque souvent le syndrome de la page blanche.
          Créez plutôt six dossiers partagés. Ils contiennent des notes, des
          fichiers existants et des réponses brutes ; ils n’ont pas besoin
          d’être beaux.
        </p>

        <ContentFolders />

        <p>
          Cette façon de travailler sépare deux métiers. Votre entreprise
          fournit les faits que ses clients et ses salariés peuvent confirmer.
          Le prestataire peut ensuite organiser, hiérarchiser et reformuler ces
          faits pour la lecture à l’écran. Google recommande d’ailleurs de
          produire un contenu d’abord utile au public visé et rappelle qu’il
          n’existe pas de nombre de mots préféré à atteindre. La bonne question
          n’est donc pas « avons-nous écrit 800 mots ? », mais « le client
          peut-il comprendre et décider ? » Consultez les{" "}
          <a
            href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            recommandations de Google sur le contenu utile
          </a>
          .
        </p>

        <InfoBox
          variant="blue"
          title="Partez des questions entendues, pas des slogans"
        >
          Notez les phrases réellement prononcées avant un achat : «
          intervenez-vous dans ma commune ? », « que comprend le forfait ? », «
          combien de temps serai-je arrêté ? ».{" "}
          <a
            href="https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/comment-faire-de-son-site-vitrine-un-site-web"
            target="_blank"
            rel="noopener noreferrer"
          >
            France Num recommande également de partir des problèmes et questions
            des clients
          </a>{" "}
          pour rendre un site vitrine plus utile. Votre page répondra ensuite
          avec vos propres faits, pas avec une promesse générique.
        </InfoBox>

        <h2 id="fiche-offre">
          2. Remplissez une fiche par offre avant d’écrire les pages
        </h2>

        <p>
          Une liste comme « conseil, accompagnement, qualité » ne permet pas de
          comprendre ce que vous vendez. Pour chaque offre importante, répondez
          avec vos mots aux questions ci-dessous. Une phrase ou quelques notes
          suffisent au premier passage.
        </p>

        <FormulaBox>{`OFFRE :
Client concerné :
Situation qui l’amène à chercher une solution :
Résultat ou prochaine étape qu’il recherche :
Ce qui est compris :
Ce qui n’est pas compris :
Zone, disponibilité ou condition importante :
Prix affiché, prix sur devis ou information à confirmer :
Une preuve réellement publiable :
Question fréquente avant la décision :
Action suivante : appeler / demander un devis / réserver / venir sur place
Personne qui valide cette fiche :`}</FormulaBox>

        <p>
          <strong>Exemple illustratif fictif :</strong> une PME de maintenance
          industrielle ne note pas « solutions performantes et réactives ». Elle
          écrit : « le responsable de production nous appelle lorsqu’un
          équipement tombe régulièrement en panne ; nous réalisons un diagnostic
          sur site, proposons les pièces et les actions prioritaires, puis le
          client décide des réparations ; l’arrêt de production et les pièces ne
          sont pas inclus dans le diagnostic ». Ce texte n’est pas encore une
          page parfaite, mais le visiteur et le rédacteur comprennent ce qui est
          vendu.
        </p>

        <p>
          Si une case reste vide, ne la comblez pas avec une formule vague.
          Écrivez « à confirmer par Sophie avant le 30 juillet » ou « non
          affiché sur le site ». L’absence assumée est plus facile à gérer
          qu’une affirmation que personne ne veut signer.
        </p>

        <h2 id="page-complete">
          3. Faites passer chaque note par le test « comprendre, croire, agir »
        </h2>

        <p>
          Une page de site vitrine n’est pas un assemblage de slogans. Elle doit
          répondre, dans cet ordre, à trois questions très concrètes : « est-ce
          pour mon problème ? », « pourquoi puis-je vous croire ? » et « que
          dois-je faire maintenant ? ». Si votre prestataire ne reçoit que des
          adjectifs, il devra deviner les réponses — et vous risquez de valider
          une phrase jolie mais inutilisable.
        </p>

        <BeforeAfterExample />

        <p>
          Dans le second exemple, le chiffre est volontairement limité : il
          indique une période, un périmètre et une limite. Il ne promet pas que
          chaque futur dossier sera traité en 48 heures. C’est cette honnêteté
          qui rend une preuve exploitable. Pour chaque page, écrivez aussi la
          décision attendue : appeler, demander un devis, réserver, visiter ou
          simplement comprendre une différence.
        </p>

        <GuideTable
          caption="Décider quelles pages créer, fusionner ou reporter"
          headers={[
            "Question du visiteur",
            "Décision principale",
            "Si ce n’est pas prêt",
          ]}
          rows={[
            [
              "Quelle offre répond à mon problème ?",
              "Créer une page si le public, le résultat et la preuve sont distincts ; sinon fusionner dans l’accueil.",
              "Reporter tant qu’il n’existe ni offre ni preuve propres.",
            ],
            [
              "Puis-je vous faire confiance ?",
              "Créer une page de réalisations ou intégrer la preuve à l’offre si elle explique la décision.",
              "Reporter la page de valeurs générales sans preuve vérifiable.",
            ],
            [
              "Comment vous contacter ?",
              "Créer une page contact si la demande et le traitement sont distincts ; sinon intégrer un formulaire court.",
              "Reporter tout formulaire dont personne ne sait traiter les réponses.",
            ],
          ]}
        />

        <h2 id="preuves">
          4. Gardez uniquement les preuves que vous pouvez expliquer et publier
        </h2>

        <p>
          Une preuve sert à réduire une hésitation précise. Une photo d’une
          réalisation montre le type de résultat. Une qualification valide
          confirme une compétence délimitée. Un avis raconte une expérience. Un
          délai moyen ou un taux de satisfaction ne devient pas vrai parce qu’il
          paraît rassurant : il exige une méthode, un périmètre et une période.
        </p>

        <GuideTable
          caption="Décider quoi faire de chaque preuve avant publication"
          headers={["État", "Exemple", "Action avant publication"]}
          rows={[
            [
              "Publiable",
              "Certification en cours de validité, réalisation documentée, processus réel",
              "Indiquer la source, la date et ce que cela prouve exactement",
            ],
            [
              "À confirmer",
              "Avis à attribuer, résultat chiffré, logo client, ancienneté ou zone annoncée",
              "Obtenir la preuve et l’autorisation, ou reformuler sans dépasser les faits",
            ],
            [
              "À retirer",
              "Faux témoignage, compteur inventé, classement sans source, promesse absolue",
              "Ne pas remplacer l’absence de preuve par un élément décoratif",
            ],
          ]}
        />

        <p>
          Conservez chaque preuve dans son dossier avec un nom compréhensible :
          source, date, personne responsable et usage prévu. Si elle doit être
          actualisée, ajoutez la prochaine date de contrôle. Cette petite
          discipline évite de laisser pendant des années un chiffre devenu faux
          ou une certification expirée.
        </p>

        <InfoBox
          variant="amber"
          title="Un prestataire ne doit pas inventer la crédibilité"
        >
          Il peut vous aider à choisir une preuve et à la présenter clairement.
          Il ne peut pas créer un client satisfait, une certification, un
          résultat ou une autorisation qui n’existent pas. Si l’offre n’a encore
          aucune preuve, expliquez plutôt la méthode, les limites et
          l’engagement que vous pouvez réellement tenir.
        </InfoBox>

        <h2 id="photos">
          5. Choisissez chaque photo pour ce qu’elle montre, puis vérifiez ses
          droits
        </h2>

        <p>
          Ne demandez pas à votre équipe « toutes les photos disponibles ». Pour
          chaque offre, cherchez une image qui aide réellement : le lieu où vous
          accueillez, une étape du travail, un produit dans son contexte, une
          réalisation terminée ou la personne que le client rencontrera. Ajoutez
          une phrase qui explique ce que l’image montre et ce qu’elle ne doit
          pas laisser croire.
        </p>

        <p>
          Google recommande de placer les images près du texte pertinent et
          d’utiliser des noms de fichiers et des textes alternatifs descriptifs,
          sans accumulation de mots-clés. Le texte alternatif dépend de la
          fonction de l’image ; le W3C recommande notamment un texte vide pour
          une image purement décorative. Le dirigeant fournit donc le contexte,
          puis l’intégrateur choisit l’alternative adaptée. Voir les{" "}
          <a
            href="https://developers.google.com/search/docs/appearance/google-images"
            target="_blank"
            rel="noopener noreferrer"
          >
            bonnes pratiques de Google Images
          </a>{" "}
          et l’
          <a
            href="https://www.w3.org/WAI/tutorials/images/decision-tree/"
            target="_blank"
            rel="noopener noreferrer"
          >
            arbre de décision du W3C
          </a>
          .
        </p>

        <p>
          Vérifiez ensuite deux sujets distincts. D’une part, qui a créé la
          photo et quels usages sa licence ou son contrat autorisent. D’autre
          part, qui apparaît sur l’image et dans quel contexte sa diffusion a
          été acceptée. Une image trouvée sur internet n’est pas réutilisable du
          seul fait qu’elle est accessible ou créditée. L’
          <a
            href="https://www.economie.gouv.fr/apie/utilisation-de-photographies-trouvees-sur-internet-vigilance"
            target="_blank"
            rel="noopener noreferrer"
          >
            APIE rappelle de vérifier les conditions des licences
          </a>
          , tandis que{" "}
          <a
            href="https://www.service-public.fr/particuliers/vosdroits/F32103"
            target="_blank"
            rel="noopener noreferrer"
          >
            Service-Public présente les règles et exceptions du droit à l’image
          </a>
          . Pour un cas sensible, demandez un conseil juridique adapté.
        </p>

        <FormulaBox>{`FICHE PHOTO
Nom du fichier : intervention-tableau-electrique-atelier.jpg
Ce qu’elle montre : une étape de diagnostic, pas une réparation terminée
Auteur / fournisseur :
Licence, facture ou autorisation conservée ici :
Personnes reconnaissables : oui / non
Accord et contexte de diffusion :
Page ou offre concernée :
Date de validation :
Alternative si cette image ne peut pas être publiée :`}</FormulaBox>

        <h2 id="informations">
          6. Préparez les informations pratiques et le parcours de la demande
        </h2>

        <p>
          Les coordonnées sont souvent recopiées depuis un ancien document sans
          contrôle. Demandez à une personne de confirmer le nom de l’entreprise,
          sa forme, son immatriculation, l’adresse à afficher, le téléphone, les
          horaires, la zone d’intervention et l’hébergeur du futur site. Le
          ministère de l’Économie récapitule les{" "}
          <a
            href="https://www.economie.gouv.fr/entreprises/developper-son-entreprise/innover-et-numeriser-son-entreprise/mentions-sur-votre-site-internet-les-obligations-respecter"
            target="_blank"
            rel="noopener noreferrer"
          >
            mentions à adapter au statut et à l’activité du site
          </a>
          . Ce guide ne remplace pas la vérification d’une profession
          réglementée, d’une vente en ligne ou d’une situation juridique
          particulière.
        </p>

        <p>
          Si l’entreprise possède une fiche Google Business Profile, contrôlez
          également la cohérence du nom, du téléphone, du site, de l’adresse ou
          de la zone et des horaires. Google demande que la fiche représente
          fidèlement l’activité réelle ; cette exactitude ne garantit pas une
          position dans les résultats. Consultez les{" "}
          <a
            href="https://support.google.com/business/answer/3038177?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            consignes de représentation d’un établissement
          </a>
          .
        </p>

        <p>
          Pour le formulaire, partez de l’après-clic. Qui reçoit la demande ?
          Que doit-il savoir pour répondre ? Sous quelle forme la réponse
          arrive-t-elle ? La CNIL rappelle que les données collectées doivent
          être adéquates, pertinentes et limitées à ce qui est nécessaire. Elle
          fournit des exemples de mentions, mais demande de les adapter au
          traitement réel. Lisez le principe de{" "}
          <a
            href="https://www.cnil.fr/fr/minimiser-les-donnees-collectees"
            target="_blank"
            rel="noopener noreferrer"
          >
            minimisation des données
          </a>{" "}
          et les{" "}
          <a
            href="https://www.cnil.fr/fr/exemples-de-formulaire-de-collecte-de-donnees-caractere-personnel"
            target="_blank"
            rel="noopener noreferrer"
          >
            exemples de formulaires de la CNIL
          </a>
          .
        </p>

        <p>
          Préparez donc une courte note avec l’objectif du formulaire,
          l’identité et le contact de l’entreprise responsable, la base
          juridique à confirmer, les personnes ou services qui recevront les
          données, la durée de conservation ou son critère, les droits des
          personnes et le moyen de les exercer. Pour chaque champ, précisez
          aussi s’il est obligatoire ou facultatif et ce qui se passe lorsque le
          visiteur ne le remplit pas. Le prestataire pourra intégrer ces
          informations ; il ne doit pas choisir seul la politique de votre
          entreprise.
        </p>

        <InfoBox
          variant="emerald"
          title="Testez le parcours avec une demande réaliste"
        >
          Écrivez une demande réaliste, remplissez le formulaire sur téléphone
          et vérifiez où elle arrive. La bonne personne doit recevoir assez
          d’informations pour répondre, sans demander des données « au cas où ».
          Vérifiez aussi le message de confirmation et la solution de secours si
          l’e-mail n’arrive pas.
        </InfoBox>

        <h2 id="responsabilites">
          7. Faites écrire dans le devis qui produit, vérifie et valide
        </h2>

        <p>
          « Contenus fournis par le client » est trop vague. Le dirigeant peut
          fournir les faits lors d’un entretien tandis que le prestataire rédige
          les pages. Il peut aussi livrer des textes terminés que le prestataire
          intègre sans les réécrire. Ces deux projets n’ont ni le même travail,
          ni les mêmes délais, ni le même prix.
        </p>

        <ResponsibilityCards />

        <p>
          Si vous commandez des textes, des photos ou une création originale,
          faites également préciser les droits transmis et les usages couverts.
          Le Code de la propriété intellectuelle demande qu’une cession
          identifie les droits concernés et délimite leur exploitation ; la
          rédaction exacte de la clause doit être adaptée au projet. Voir l’
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958"
            target="_blank"
            rel="noopener noreferrer"
          >
            article L131-3
          </a>
          .
        </p>

        <p>
          Chez Hagnéré Code, la rédaction complète et la production photo ne
          sont pas supposées incluses par défaut dans un forfait de site
          vitrine. Elles sont chiffrées selon le volume, les droits et le niveau
          de validation. Cette transparence protège les deux parties : vous
          savez ce que vous recevrez et le prestataire sait ce qu’il doit
          produire.
        </p>

        <h2 id="comparer">
          8. Comparez les modes de production avec le même lot
        </h2>

        <p>
          « Le client fournit les contenus » et « le prestataire s’occupe des
          contenus » ne sont pas deux prix comparables si l’un comprend huit
          pages et deux retours, et l’autre quatre pages sans photo. Écrivez
          d’abord le lot commun : ici, huit pages, quatre offres, les mêmes
          preuves et photos, deux cycles de retours, hors intégration technique.
          Ensuite seulement, comparez le temps interne, le temps du prestataire,
          les droits et les inconnues.
        </p>

        <ProductionComparison />

        <p>
          Le mode hybride est mon point de départ pour une entreprise de taille
          petite ou moyenne : le dirigeant garde la maîtrise des faits et des
          limites, tandis qu’un professionnel transforme les entretiens en pages
          lisibles. Je choisirais l’interne si quelqu’un peut réellement
          réserver 20 heures et relire les textes ; je choisirais le délégué si
          le retard d’ouverture coûte plus que les 815 € supplémentaires de cet
          exemple. Ce sont des hypothèses de décision, pas des tarifs de marché
          ni une promesse d’économie.
        </p>

        <FormulaBox>
          Si 12 × valeur d’une heure de direction + 4 × valeur d’une heure
          d’équipe &gt; 10 × prix d’une heure du prestataire, l’hybride peut
          devenir plus rationnel que l’interne. Vérifiez avec vos propres taux,
          votre disponibilité et le coût réel d’un lancement retardé.
        </FormulaBox>

        <GuideInlineCTA
          title="Vous avez les informations, mais pas encore les pages ?"
          description="Décrivez votre activité, les contenus déjà disponibles et ce qui manque. Nous pourrons distinguer ce que vous fournissez, ce qui doit être rédigé ou produit et ce qui reste à confirmer — y compris si une préparation interne suffit avant de lancer le site."
          tags={[
            "Qui fait quoi, par écrit",
            "Preuves réelles",
            "Option plus simple possible",
          ]}
          ctaLabel="M’aider à préparer les contenus"
          ctaHref="/demarrer-un-projet"
        />

        <h2 id="kit">
          9. Téléchargez un dossier que vous pouvez vraiment transmettre
        </h2>

        <p>
          Pour éviter de repartir d’un document vide, utilisez ce kit gratuit.
          Il crée une trame éditable avec la carte des pages, les phrases de vos
          clients, une fiche d’offre, le registre des preuves et des photos, le
          formulaire, les responsabilités, le test auprès de prospects et le
          suivi à 30 et 90 jours. Le comparateur reprend ensuite le même lot de
          pages dans les trois modes de production. L’exemple de travail couvre
          l’offre, la page, les coûts et le test ; les valeurs sont fictives et
          restent modifiables.
        </p>

        <ContentPreparationKit />

        <h2 id="lancement">
          10. Décidez si le dossier est assez prêt pour lancer le projet
        </h2>

        <p>
          N’attendez pas que chaque virgule soit parfaite. En revanche, ne
          lancez pas la conception comme si les incertitudes n’existaient pas.
          Choisissez l’un des trois verdicts suivants et écrivez-le dans le
          suivi du projet.
        </p>

        <GuideTable
          caption="Trois décisions selon l’état réel des contenus"
          headers={[
            "Décision",
            "Quand elle est raisonnable",
            "Prochaine action",
          ]}
          rows={[
            [
              "Lancer avec les contenus fournis",
              "Offres, preuves, visuels, contact et validateur sont disponibles et publiables",
              "Joindre le dossier au devis et fixer les dates de validation",
            ],
            [
              "Lancer avec une prestation éditoriale",
              "Les faits sont connus, mais les textes finaux ou certains visuels restent à produire",
              "Chiffrer entretiens, rédaction, production, droits et retours",
            ],
            [
              "Préparer avant de lancer",
              "L’offre, les responsabilités, les droits ou les preuves principales sont encore inconnus",
              "Nommer un responsable, lever les inconnues et fixer une nouvelle date de décision",
            ],
          ]}
        />

        <p>
          Une première version peut parfois se passer de blog, d’une longue page
          « À propos » ou de toutes les réalisations historiques. Elle ne
          devrait pas se passer d’une offre compréhensible, d’informations
          exactes, d’un moyen de contact testé et des éléments légaux adaptés.
          Les pages secondaires peuvent être ajoutées plus tard si cette suite
          est prévue, entretenue et utile au client.
        </p>

        <h2 id="transmettre">
          11. Remettez un dossier qu’une autre personne peut comprendre
        </h2>

        <p>
          Un dossier devient utilisable lorsque le prestataire n’a pas besoin de
          reconstituer les décisions dans dix fils d’e-mails. Nommez un
          interlocuteur unique. Rangez les originaux sans les écraser. Ajoutez
          un document de suivi qui contient une ligne par élément et un lien
          vers le bon fichier.
        </p>

        <FormulaBox>{`ÉLÉMENT | ÉTAT | RESPONSABLE | PREUVE OU DROIT | VALIDATEUR | DATE
Offre maintenance préventive | Prêt | Direction commerciale | Grille interne v3 | Direction | 24/07
Texte page offre | À faire produire | Prestataire | Entretien du 22/07 | Direction | 30/07
Photo atelier | À confirmer | Communication | Autorisation à retrouver | RH | 26/07
Formulaire devis | Prêt | Responsable commercial | 5 informations nécessaires | Personne chargée des données / direction | 25/07`}</FormulaBox>

        <p>
          Avant l’envoi, ouvrez les liens avec un compte qui n’est pas le vôtre,
          vérifiez les formats et retirez les doublons évidents. Puis posez une
          question simple au prestataire : « Avec ce dossier, que pouvez-vous
          produire, qu’est-ce qui manque encore et qui prend la décision finale
          ? » Sa réponse doit se retrouver dans le devis ou le planning, pas
          seulement dans une conversation.
        </p>

        <p>
          Vous pouvez ensuite intégrer cette matière à votre{" "}
          <Link href="/guides/cahier-des-charges-site-internet">
            cahier des charges de site internet
          </Link>
          . Si vous comparez des offres, vérifiez également dans notre guide du{" "}
          <Link href="/guides/prix-site-vitrine">prix d’un site vitrine</Link>{" "}
          si la rédaction, les photos et les validations sont comprises ou
          facturées séparément.
        </p>

        <h2 id="apres-publication">
          12. Faites un test humain avant la mise en ligne, puis revoyez le site
        </h2>

        <p>
          Ne demandez pas seulement à votre équipe si elle « aime » la page.
          Prenez trois personnes qui ressemblent à vos clients, donnez-leur
          quatre tâches de compréhension à réaliser en sept minutes chacune,
          puis demandez : quelle offre avez-vous comprise, pour qui est-elle,
          quelle preuve avez-vous retenue et que feriez-vous ensuite ? Avec 3 ×
          4 × 7 minutes, plus 45 minutes de préparation et de synthèse, le test
          représente environ 2 h 09. À 90 € de l’heure, cela fait 193,50 € de
          capacité renseignée — pas un taux de conversion garanti. Si deux
          personnes sur trois ne savent
          pas quoi faire, corrigez la page avant d’acheter davantage de trafic.
        </p>

        <GuideTable
          caption="Décider après le test et après les premiers contacts"
          headers={["Moment", "Mesure simple", "Décision"]}
          rows={[
            [
              "Avant publication",
              "3 personnes : offre comprise, preuve retenue, prochaine action",
              "Réécrire la phrase ou la preuve qui reste incomprise.",
            ],
            [
              "À 30 jours",
              "Demandes reçues, source déclarée, demandes incomplètes, délai de réponse",
              "Réparer le formulaire ou la réponse commerciale avant de conclure que le trafic est mauvais.",
            ],
            [
              "À 90 jours",
              "Contacts qualifiés, offres demandées, rendez-vous, ventes et objections récurrentes",
              "Garder, fusionner ou réécrire une page selon les faits observés.",
            ],
          ]}
        />

        <InfoBox
          variant="amber"
          title="Ne confondez pas visite et résultat commercial"
        >
          Une page peut être lue sans déclencher de demande ; une demande peut
          être perdue après le formulaire ; une vente peut venir d’un contact
          déjà connu. Notez la source déclarée et le parcours, mais ne fabriquez
          pas une causalité à partir de quelques visites. Ce suivi sert à
          décider quoi améliorer, pas à promettre un classement Google ou un
          chiffre d’affaires.
        </InfoBox>

        <h2 id="sources-limites">Sources et limites de ce guide</h2>

        <p>
          Les recommandations éditoriales ont été confrontées le 21 juillet 2026
          aux documentations de Google Search et Google Business Profile, de la
          CNIL, du W3C, de Service-Public.fr, de Légifrance, du ministère de
          l’Économie et de France Num. Les liens décisifs sont placés près des
          affirmations qu’ils soutiennent. Ils encadrent une préparation de
          projet ; ils ne constituent ni un audit juridique individualisé, ni
          une garantie de visibilité ou de demandes commerciales.
        </p>

        <p>
          Aucun nombre de pages, de mots ou de photos n’est universel. La bonne
          quantité dépend des offres, des décisions que le visiteur doit prendre
          et des preuves disponibles. Si votre site vend en ligne, traite des
          données sensibles, s’adresse à plusieurs pays ou relève d’une
          profession réglementée, complétez cette préparation par les
          compétences juridiques, métier et techniques adaptées.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
