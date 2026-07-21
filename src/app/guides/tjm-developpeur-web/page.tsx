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

const guide = getGuide("tjm-developpeur-web");

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
  twitter: {
    card: "summary_large_image",
    title: guide.cardTitle,
    description: guide.metaDescription,
    images: [guideUrl(guide) + "/opengraph-image"],
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
      "Budget de projet informatique",
      "Contrats de prestation",
      "React",
      "Next.js",
      "Achat de prestation IT",
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
      name: "TJM développeur web",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Quel est le TJM d'un développeur web en 2026 ?",
    answer:
      "Les baromètres cités situent couramment un profil junior entre 300 et 450 € par jour, un profil confirmé entre 400 et 600 €, un senior entre 450 et 650 € et un lead entre 500 et 750 €. Ce sont des repères hors taxes, à adapter au métier, à la région et au contexte.",
  },
  {
    question: "Que signifie TJM ?",
    answer:
      "TJM signifie tarif journalier moyen : le prix hors taxes facturé pour une journée de prestation. Il ne correspond ni au salaire du développeur ni au budget total du projet. Le contrat doit préciser la durée d'une journée, les demi-journées et les éventuelles interventions hors horaires.",
  },
  {
    question: "Comment savoir si un TJM est trop élevé ?",
    answer:
      "Comparez le profil et la mission à plusieurs baromètres, puis regardez surtout le coût du résultat. Un développeur plus cher peut terminer plus vite et éviter des reprises. Demandez le nombre de jours, les livrables, les exclusions, les tests et la responsabilité en cas de dépassement.",
  },
  {
    question: "Comment transformer un TJM en budget ?",
    answer:
      "Multipliez le tarif par le nombre de jours estimés, puis ajoutez les autres postes et une réserve adaptée aux inconnues. Ce guide utilise 15 à 25 % comme hypothèse de planification, pas comme règle universelle. Design, contenus, licences, hébergement et maintenance peuvent être séparés.",
  },
  {
    question: "Pourquoi deux devis ont-ils des prix très différents ?",
    answer:
      "Ils couvrent souvent des choses différentes : maquettes originales ou thème, rédaction ou simple intégration, migration, tests, formation, maintenance et niveau de garantie. Demandez exactement la même liste de travaux avant de comparer le montant ou le tarif journalier.",
  },
  {
    question: "Forfait ou régie : que choisir ?",
    answer:
      "Le forfait convient à un résultat et une liste de travaux assez stables. La régie, c'est-à-dire la facturation du temps passé, convient mieux à un produit qui évolue. Dans les deux cas, exigez des validations régulières et une limite claire à l'engagement financier.",
  },
  {
    question: "Un junior coûte-t-il forcément moins cher qu'un senior ?",
    answer:
      "Son tarif journalier est généralement plus bas, mais le projet ne l'est pas toujours. Un senior peut mieux estimer, choisir une solution plus simple et réduire les reprises. Un junior est pertinent sur des tâches cadrées avec une relecture expérimentée ; il est plus risqué seul sur un projet structurant.",
  },
  {
    question:
      "Agence, freelance ou équipe offshore : quelle option est la moins chère ?",
    answer:
      "Aucune réponse ne vaut pour tous les projets. Une équipe offshore, c'est-à-dire basée à l'étranger, peut réduire certains tarifs ; le freelance offre un interlocuteur direct et l'agence plusieurs compétences. Comparez le pilotage, la continuité, le contrat, la langue, les reprises et le coût total.",
  },
  {
    question: "Peut-on négocier le TJM d'un prestataire ?",
    answer:
      "Oui, surtout en échange d'une contrepartie claire : engagement plus long, fonction retirée, planning plus souple ou interventions regroupées. Une forte remise sans changement de mission doit conduire à vérifier ce qui sera retiré ou qui réalisera réellement le travail.",
  },
  {
    question: "Que doit contenir un devis exprimé en jours ?",
    answer:
      "Les rôles mobilisés, le tarif de chacun, les jours par étape, ce qui sera livré, les hypothèses, les exclusions, les validations, les tests, le traitement des changements et les conditions de paiement. Pour un forfait, demandez au minimum la charge prévue et ce qui n'est pas compris.",
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
          { label: "TJM développeur web" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vous avez reçu un tarif journalier et vous voulez savoir si le devis est raisonnable ? Voici les repères 2026 et la méthode pour comparer le coût du résultat, les jours prévus et les dépenses après livraison."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          {
            number: "01",
            title: "TJM : un prix par jour, hors taxes",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Le nombre de jours fait le budget",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Demandez exactement le même travail",
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
            href: "/guides/combien-coute-un-site-internet",
            label: "Combien coûte un site internet ?",
          },
          {
            href: "/guides/agence-web-ou-freelance",
            label: "Agence web ou freelance ?",
          },
          {
            href: "/guides/choisir-son-agence-web",
            label: "Choisir son agence web",
          },
          {
            href: "/guides/prix-logiciel-sur-mesure",
            label: "Prix d'un logiciel sur mesure",
          },
          { href: "/methode", label: "Notre méthode Sprint Fixe™" },
          { href: "/demarrer-un-projet", label: "Décrire votre projet" },
        ]}
        faqTitle="TJM et budget de projet : vos questions"
        faqItems={faqItems}
        showWhitePaperPromo
      >
        <p className="lead">
          Un développeur ou une agence vous annonce{" "}
          <strong>550 € par jour</strong> et vous voulez savoir si le prix est
          raisonnable. Le bon réflexe n&apos;est pas de comparer ce chiffre à un
          salaire. Il faut vérifier ce que cette journée permet de livrer,
          combien de jours seront nécessaires et ce que le devis laisse à votre
          charge.
        </p>
        <p>
          Le <strong>TJM</strong>, ou tarif journalier moyen, est le prix hors
          taxes d&apos;une journée de prestation. Il aide à lire un devis, mais
          il ne dit pas à lui seul si le projet est cher ou bon. Ce guide vous
          donne des repères de marché, puis une méthode simple pour passer du
          tarif journalier au budget que votre entreprise devra réellement
          engager.
        </p>

        <GuideToc
          items={[
            { id: "reponse-rapide", label: "1. Les repères de tarif en 2026" },
            {
              id: "comprendre-tjm",
              label: "2. Ce que couvre un tarif journalier",
            },
            { id: "budget", label: "3. Passer du TJM au budget du projet" },
            {
              id: "devis",
              label: "4. Comparer deux devis sans être technicien",
            },
            { id: "seniorite", label: "5. Choisir le bon niveau d'expérience" },
            {
              id: "prestataire",
              label: "6. Freelance, agence ou équipe distante",
            },
            {
              id: "forfait-regie",
              label:
                "7. Paiement au forfait ou à la journée : qui paie un dépassement ?",
            },
            {
              id: "derapages",
              label: "8. Pourquoi le nombre de jours augmente",
            },
            { id: "apres-livraison", label: "9. Les coûts après la livraison" },
            { id: "negocier", label: "10. Négocier et décider sereinement" },
          ]}
        />

        <h2 id="reponse-rapide">1. Les repères de tarif en 2026</h2>
        <p>
          Les sources publiques ne mesurent pas toutes la même chose : certaines
          affichent les tarifs demandés sur une plateforme, d&apos;autres des
          déclarations de professionnels ou des missions observées. Il est donc
          normal que leurs chiffres diffèrent. La synthèse ci-dessous sert à
          repérer un devis atypique, pas à imposer un barème.
        </p>
        <GuideTable
          headers={[
            "Niveau d'expérience",
            "Repère journalier HT",
            "Mission adaptée",
          ]}
          rows={[
            [
              "Junior",
              "300 à 450 €",
              "Tâches cadrées, avec supervision et relecture",
            ],
            [
              "Confirmé",
              "400 à 600 €",
              "Fonctionnalités courantes et projet bien défini",
            ],
            [
              "Senior",
              "450 à 650 €",
              "Conception d'ensemble, connexions et choix complexes",
            ],
            [
              "Lead ou architecte",
              "500 à 750 €",
              "Conception d'ensemble, risques et coordination technique",
            ],
          ]}
        />
        <p>
          Le baromètre TJMètre consulté pour ce guide publie une médiane proche
          de 530 € pour les développeurs. Une médiane signifie que la moitié des
          valeurs se situe en dessous et l&apos;autre au-dessus ; elle ne
          signifie pas que 530 € est le juste prix de votre mission. Les
          technologies rares, la région, l&apos;urgence et la durée de
          l&apos;engagement peuvent déplacer le tarif.
        </p>
        <InfoBox
          variant="amber"
          title="Un tarif dans la moyenne peut cacher un mauvais devis"
        >
          Si le besoin est mal défini, 450 € multipliés par un nombre de jours
          incontrôlé coûteront plus cher que 600 € sur une demande précise.
          Demandez toujours le résultat attendu, les jours estimés et la règle
          appliquée lorsque le besoin change.
        </InfoBox>

        <h2 id="comprendre-tjm">2. Ce que couvre un tarif journalier</h2>
        <p>
          Le tarif finance le temps du professionnel, mais aussi les périodes
          sans mission, les congés, la formation, l&apos;assurance, le matériel,
          les outils, la prospection et les charges de son activité. Dans une
          agence, il contribue également aux fonctions de gestion, de
          coordination et à la disponibilité de plusieurs compétences. Il
          s&apos;agit d&apos;un prix de vente, pas du salaire net reçu par la
          personne.
        </p>
        <p>
          Une journée correspond généralement à environ sept ou huit heures,
          mais le devis doit le préciser si la facturation se fait au temps
          passé. Demandez aussi comment sont traitées les demi-journées, les
          réunions, les déplacements, les urgences et les interventions en
          dehors des horaires habituels. Ces détails deviennent importants au
          premier incident.
        </p>
        <p>
          Le tarif peut inclure uniquement le développement ou aussi de la
          préparation, de la gestion de projet et des tests. Deux personnes au
          même TJM ne vendent donc pas nécessairement la même prestation. Le
          devis doit associer chaque rôle à un résultat identifiable.
        </p>

        <h2 id="budget">3. Passer du TJM au budget du projet</h2>
        <p>
          Le calcul de base est simple. Sa difficulté tient au nombre de jours
          et aux postes oubliés.
        </p>
        <InfoBox variant="blue" title="Exemple de calcul">
          <p>
            <strong>20 jours × 550 € = 11 000 € HT.</strong> Avec une réserve
            interne de 15 %, le budget de travail atteint 12 650 € HT, hors
            design, contenus, licences, hébergement et maintenance s&apos;ils
            sont facturés séparément.
          </p>
        </InfoBox>
        <p>
          La réserve de 15 à 25 % utilisée dans ce guide est une hypothèse de
          planification, pas une marge que le prestataire doit automatiquement
          facturer. Sur un forfait bien cadré, une partie du risque peut déjà
          être intégrée au prix. Sur une mission exploratoire, l&apos;entreprise
          peut plutôt prévoir cette enveloppe en interne et ne la dépenser
          qu&apos;après validation.
        </p>
        <GuideTable
          headers={["Poste", "Question à poser", "Risque s'il manque"]}
          rows={[
            [
              "Cadrage",
              "Quelles décisions et règles seront écrites ?",
              "Le besoin change pendant le développement",
            ],
            [
              "Conception",
              "Les maquettes, contenus et versions mobiles sont-ils inclus ?",
              "Des suppléments apparaissent avant même le code",
            ],
            [
              "Réalisation",
              "Combien de jours par fonction ou étape ?",
              "Impossible de comprendre les écarts entre devis",
            ],
            [
              "Tests et mise en ligne",
              "Qui teste, corrige, migre et forme l'équipe ?",
              "Le client devient testeur et chef de projet",
            ],
            [
              "Après-projet",
              "Quelle garantie, maintenance et surveillance ?",
              "Le premier incident ouvre une nouvelle négociation",
            ],
          ]}
        />

        <h2 id="devis">4. Comparer deux devis sans être technicien</h2>
        <p>
          Commencez par rendre les périmètres identiques. Un devis qui inclut
          les textes, les maquettes, la migration, les tests et la formation ne
          peut pas être comparé directement à un devis qui prévoit seulement le
          développement. Demandez à chaque prestataire de compléter la même
          liste de postes.
        </p>
        <GuideTable
          headers={["Contrôle", "Ce que vous cherchez", "Signal d'alerte"]}
          rows={[
            [
              "Résultat",
              "Des pages, fonctions et critères de réussite nommés",
              "Des mots généraux comme « site complet »",
            ],
            [
              "Charge",
              "Des jours par étape ou des hypothèses de charge explicites",
              "Un total sans explication ni limites",
            ],
            [
              "Exclusions",
              "Une liste lisible de ce qui restera à votre charge",
              "Les contenus, données ou tests ne sont mentionnés nulle part",
            ],
            [
              "Changements",
              "Une procédure de validation et de chiffrage",
              "Toute précision devient potentiellement un supplément",
            ],
            [
              "Continuité",
              "Code, accès, documentation et maintenance",
              "Le prestataire conserve les comptes essentiels",
            ],
          ]}
        />
        <p>
          Si le nombre de jours est indiqué, divisez le montant correspondant
          par cette charge pour obtenir le tarif implicite. Ce calcul permet de
          repérer une incohérence, mais pas de juger la marge interne du
          prestataire. Sur un forfait, l&apos;entreprise achète surtout un
          résultat et une répartition du risque ; elle doit comprendre les
          hypothèses, même si l&apos;agence ne détaille pas chaque heure.
        </p>
        <p>
          Testez aussi une référence récente : appelez le client, demandez ce
          qui a été livré, qui a piloté le projet, si le budget a changé et
          comment le prestataire a réagi après la mise en ligne. Cette
          conversation est souvent plus instructive qu&apos;un portfolio.
        </p>

        <h2 id="seniorite">5. Choisir le bon niveau d&apos;expérience</h2>
        <p>
          Un profil junior coûte généralement moins cher par jour, mais peut
          avoir besoin de davantage de temps et de relecture. Un senior coûte
          plus cher, mais sait souvent simplifier la demande, anticiper les
          problèmes et choisir une solution plus simple. Le bon choix dépend
          donc du risque de la tâche, pas du prestige du titre.
        </p>
        <GuideTable
          headers={["Type de travail", "Organisation raisonnable", "Pourquoi"]}
          rows={[
            [
              "Intégration répétitive et bien documentée",
              "Junior avec relecture",
              "Le travail est prévisible et contrôlable",
            ],
            [
              "Fonction métier nouvelle",
              "Confirmé ou senior",
              "Les règles et cas d'erreur demandent de l'autonomie",
            ],
            [
              "Architecture, sécurité ou reprise d'un existant fragile",
              "Senior ou lead",
              "Une mauvaise décision crée un coût durable",
            ],
            [
              "Projet mixte",
              "Équipe avec niveaux complémentaires",
              "Le senior traite les risques, les autres exécutent le cadre",
            ],
          ]}
        />
        <p>
          Demandez qui réalisera effectivement la mission. La présentation
          commerciale d&apos;un expert ne garantit pas que cet expert
          travaillera sur votre projet. Le devis peut indiquer les rôles, leurs
          tarifs et le temps consacré par chacun.
        </p>

        <h2 id="prestataire">6. Freelance, agence ou équipe distante</h2>
        <p>
          Un indépendant apporte un contact direct et peut être très efficace
          sur un type de mission qu&apos;il maîtrise. Une agence réunit plus
          facilement design, développement, pilotage et continuité, avec
          davantage de structure à financer. Une équipe située dans un pays où
          les tarifs sont plus bas peut convenir si vous savez rédiger,
          découper, contrôler et accepter la distance contractuelle.
        </p>
        <p>
          Ne comparez pas seulement le prix du jour. Ajoutez le temps de votre
          équipe pour expliquer, répondre, tester et reprendre les erreurs.
          Vérifiez aussi la langue de travail, les horaires communs, la
          protection des données, le droit applicable, la disponibilité en cas
          d&apos;incident et la personne qui remplace un intervenant absent.
        </p>
        <InfoBox
          variant="blue"
          title="Le coût de coordination est un vrai coût"
        >
          Deux heures hebdomadaires d&apos;un dirigeant ou d&apos;un responsable
          métier pendant quatre mois représentent du temps non consacré aux
          clients ou à l&apos;équipe. Valorisez-le de la même manière dans
          chaque scénario, même s&apos;il n&apos;apparaît sur aucune facture.
        </InfoBox>

        <h2 id="forfait-regie">
          7. Paiement au forfait ou à la journée : qui paie un dépassement ?
        </h2>
        <p>
          Au <strong>forfait</strong>, un prix est associé à une liste de
          travaux et à des conditions de réalisation. Ce modèle convient à un
          site ou à un lot dont le résultat peut être décrit avant de commencer.
          Il protège le budget seulement si les inclusions, les exclusions et
          les règles de changement sont claires.
        </p>
        <p>
          En <strong>régie</strong>, l&apos;entreprise paie le temps réellement
          consommé. Ce modèle convient mieux à un produit qui évolue, à une
          reprise technique ou à une phase de recherche. Il exige un pilotage
          régulier : priorités, démonstrations, temps consommé et budget restant
          doivent être visibles.
        </p>
        <GuideTable
          headers={["Modèle", "À choisir lorsque", "Protection à exiger"]}
          rows={[
            [
              "Forfait",
              "Le résultat et les limites sont assez stables",
              "Livrables, recette, avenants et calendrier",
            ],
            [
              "Régie",
              "Les priorités évoluent et vous pilotez le produit",
              "Plafond, suivi du temps et revue fréquente",
            ],
            [
              "Approche par lots",
              "Le besoin est large mais peut être découpé",
              "Décision de poursuivre après chaque livraison",
            ],
          ]}
        />

        <h2 id="derapages">8. Pourquoi le nombre de jours augmente</h2>
        <p>
          Les dépassements ne viennent pas toujours d&apos;un développeur trop
          lent. Ils apparaissent aussi quand plusieurs décideurs donnent des
          consignes contradictoires, quand les contenus arrivent tard, quand les
          données sont plus sales que prévu ou lorsqu&apos;un logiciel tiers ne
          se comporte pas comme annoncé.
        </p>
        <ul>
          <li>désignez une personne capable de valider côté entreprise ;</li>
          <li>
            fournissez un exemple réel pour chaque règle métier importante ;
          </li>
          <li>
            préparez contenus, accès et données avant l&apos;étape qui les
            utilise ;
          </li>
          <li>
            demandez une démonstration régulière plutôt qu&apos;une découverte
            en fin de projet ;
          </li>
          <li>
            consignez chaque changement avec son effet sur le prix et le
            calendrier.
          </li>
        </ul>
        <p>
          Un jour de travail ne correspond pas à un jour de calendrier. Vingt
          jours de production peuvent s&apos;étaler sur plusieurs semaines à
          cause des validations, des dépendances entre intervenants et des
          délais de réponse. Le planning doit faire apparaître les engagements
          du prestataire et ceux du client.
        </p>

        <h2 id="apres-livraison">9. Les coûts après la livraison</h2>
        <p>
          Le TJM du projet initial ne couvre pas automatiquement
          l&apos;hébergement, les licences, la surveillance, les sauvegardes,
          les mises à jour ou les évolutions. Demandez un budget séparé sur
          douze mois et le prix des interventions non incluses.
        </p>
        <GuideTable
          headers={["Besoin", "À faire préciser", "Décision possible"]}
          rows={[
            [
              "Correction",
              "Durée de garantie et définition d'une anomalie",
              "Accepter, étendre ou souscrire du support",
            ],
            [
              "Maintenance",
              "Mises à jour, sauvegardes et délai d'intervention",
              "Forfait, banque de jours ou intervention ponctuelle",
            ],
            [
              "Évolution",
              "Mode d'estimation et ordre de priorité",
              "Budget trimestriel ou nouveau lot",
            ],
            [
              "Réversibilité",
              "Code, données, accès et documentation remis",
              "Faire corriger le contrat avant la livraison",
            ],
          ]}
        />
        <p>
          Comparez donc le coût de la première année, puis celui d&apos;une
          année normale d&apos;exploitation. Un projet moins cher à lancer peut
          devenir plus coûteux si chaque petite modification exige une
          intervention ou si aucune autre équipe ne peut reprendre le travail.
        </p>

        <h2 id="negocier">10. Négocier et décider sereinement</h2>
        <p>
          Une négociation utile ne consiste pas à demander arbitrairement 20 %
          de remise. Vous pouvez retirer des fonctions, livrer les contenus plus
          tôt, accepter un calendrier plus souple, regrouper les demandes ou
          vous engager sur une durée plus longue. Chaque baisse de prix doit
          avoir une contrepartie visible.
        </p>
        <ol>
          <li>
            Envoyez le même besoin et les mêmes données à chaque prestataire.
          </li>
          <li>
            Faites compléter les postes, hypothèses et exclusions manquants.
          </li>
          <li>
            Comparez le coût du résultat, le temps interne et
            l&apos;exploitation sur douze mois.
          </li>
          <li>
            Vérifiez une référence et identifiez l&apos;équipe réellement
            affectée.
          </li>
          <li>
            Écrivez le traitement des changements, la propriété des actifs et la
            sortie du contrat.
          </li>
        </ol>

        <GuideInlineCTA
          title="Vous avez reçu un devis difficile à lire ?"
          description="Masquez les informations confidentielles puis rassemblez le montant, les jours, les livrables, les exclusions et la maintenance. Nous pouvons vous aider à identifier les questions à poser avant de comparer ou de signer."
        />
        <p>
          Pour poursuivre, consultez notre{" "}
          <Link href="/guides/agence-web-ou-freelance">
            comparatif entre agence et freelance
          </Link>{" "}
          et notre{" "}
          <Link href="/guides/choisir-son-agence-web">
            grille pour choisir un prestataire web
          </Link>
          . L&apos;objectif n&apos;est pas d&apos;obtenir le TJM le plus bas :
          c&apos;est d&apos;acheter un résultat compréhensible, à un coût
          maîtrisable, auprès d&apos;une équipe que vous pourrez faire
          travailler ou remplacer.
        </p>

        <h2 id="sources">Sources</h2>
        <p className="text-sm">
          Consultées en juillet 2026 :{" "}
          <a
            href="https://www.silkhom.com/barometre-des-tjm-informatique-electronique-digital/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Silkhom, baromètre des TJM informatique (données 2019-2025)
          </a>{" "}
          ;{" "}
          <a
            href="https://www.malt.fr/t/barometre-tarifs/tech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Malt, baromètre des tarifs tech 2026
          </a>{" "}
          ;{" "}
          <a
            href="https://www.free-work.com/fr/tech-it/earnings"
            target="_blank"
            rel="noopener noreferrer"
          >
            Free-Work, baromètre des rémunérations
          </a>{" "}
          ;{" "}
          <a
            href="https://tjmetre.fr/barometre"
            target="_blank"
            rel="noopener noreferrer"
          >
            TJMètre, baromètre 2026 (médianes et quartiles)
          </a>{" "}
          ;{" "}
          <a
            href="https://www.codeur.com/developpeur/web/tarif"
            target="_blank"
            rel="noopener noreferrer"
          >
            Codeur.com, tarifs relevés en juillet 2026
          </a>{" "}
          .
        </p>
        <p className="text-sm">
          Les fourchettes de tarifs et de jours sont des ordres de grandeur de
          marché destinés à mettre un devis à l&apos;épreuve, pas un barème
          opposable. Les baromètres cités mesurent des populations différentes :
          leurs écarts sont expliqués en section 1. Cet article ne constitue pas
          un conseil juridique personnalisé.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
