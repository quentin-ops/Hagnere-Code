import type { Metadata } from "next";
import Link from "next/link";
import { GuideLayout } from "@/components/guides/guide-layout";
import {
  GuideToc,
  InfoBox,
  GuideTable,
} from "@/components/guides/guide-content-blocks";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { OG_BASE, SITE_URL } from "@/lib/seo";
import { getGuide, guidePath, guideUrl, formatGuideDate } from "@/lib/guides";
import { SITE_CDC_KIT } from "@/lib/resources";

const guide = getGuide("cahier-des-charges-site-internet");

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
      "Cadrage de projets web",
      "Next.js",
      "React",
      "SEO technique",
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
      name: "Cahier des charges site internet",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Qu'est-ce qu'un cahier des charges de site internet ?",
    answer:
      "C'est un document qui explique ce que l'entreprise veut obtenir, les pages et fonctions attendues, qui fournit les contenus, le budget, le calendrier et la façon de vérifier le résultat. Il permet à plusieurs prestataires de répondre à la même demande.",
  },
  {
    question: "Un petit site vitrine a-t-il besoin d'un cahier des charges ?",
    answer:
      "Oui, mais il peut être court. Une ou deux pages peuvent suffire si elles indiquent l'objectif, les visiteurs, les pages, le formulaire, les contenus, le budget, le délai et les responsabilités. Un document de vingt pages n'est pas une obligation.",
  },
  {
    question: "Qui doit rédiger le cahier des charges ?",
    answer:
      "L'entreprise décrit son activité, ses clients, ses priorités et ses contraintes. Le prestataire reformule, pose les questions manquantes et propose la solution technique. Vous n'avez pas à choisir seul une technologie ni à connaître le vocabulaire du développement.",
  },
  {
    question: "Que faut-il mettre dans un cahier des charges ?",
    answer:
      "Présentez l'entreprise, le problème à résoudre, les visiteurs, les pages, les fonctions, les contenus, les outils à connecter, les données à reprendre, les responsabilités, le budget, le calendrier, la maintenance et les vérifications prévues avant livraison.",
  },
  {
    question: "Faut-il indiquer son budget ?",
    answer:
      "Une fourchette aide les prestataires à proposer une réponse réaliste. Séparez le montant disponible pour créer le site du budget annuel d'hébergement, de maintenance et d'évolution. Vous pouvez aussi demander une version indispensable et des options.",
  },
  {
    question: "Combien de pages doit faire le document ?",
    answer:
      "La bonne longueur est celle qui évite les interprétations importantes. Un site simple demande quelques pages ; un e-commerce, une refonte ou des connexions avec vos outils exige davantage de détails. Supprimez les rubriques qui ne concernent pas votre projet.",
  },
  {
    question: "Quelle différence entre un brief et un cahier des charges ?",
    answer:
      "Un brief présente rapidement le contexte et le résultat recherché. Le cahier des charges ajoute les pages, les fonctions, les responsabilités et les conditions de livraison. Pour un petit projet, un brief bien rempli peut suffire si le devis complète clairement les points manquants.",
  },
  {
    question: "Existe-t-il un modèle gratuit à télécharger ?",
    answer:
      "Oui. Le kit lié à ce guide est accessible sans formulaire ni email. Il contient un modèle Word modifiable, un exemple fictif rempli en PDF, une grille Excel de 56 vérifications et un mode d'emploi. Vous pouvez adapter les fichiers à votre projet.",
  },
  {
    question: "Comment préparer le cahier des charges d'une refonte ?",
    answer:
      "Ajoutez les pages et contenus à conserver, les données de fréquentation utiles, les anciennes et nouvelles adresses, les redirections, les outils existants et les tests après la mise en ligne. Signalez les pages qui apportent déjà des visites ou des demandes.",
  },
  {
    question: "Le cahier des charges a-t-il une valeur juridique ?",
    answer:
      "Sa portée dépend de la façon dont le contrat et le devis le reprennent. Faites dater la version retenue, indiquez l'ordre des documents, les écarts acceptés et la méthode pour valider un changement. Demandez un conseil juridique pour un enjeu ou une clause sensible.",
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
          { label: "Cahier des charges site internet" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vous devez demander des devis pour un site internet ? Voici quoi écrire, quel niveau de détail choisir et comment répartir les contenus, le budget, les délais et les vérifications sans parler comme un technicien."
        heroAction={{
          href: SITE_CDC_KIT.path,
          label: "Télécharger le kit gratuit",
        }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          {
            number: "01",
            title: "Un brief court peut suffire",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Même demande pour chaque prestataire",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Vérifications prévues avant livraison",
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
            href: "/guides/prix-site-vitrine",
            label: "Prix d'un site vitrine",
          },
          {
            href: "/guides/combien-coute-une-application-mobile",
            label: "Prix d'une application mobile",
          },
          {
            href: "/services/sites-vitrines",
            label: "Création de site vitrine",
          },
          { href: "/methode", label: "Notre méthode Sprint Fixe™" },
          { href: "/tarifs", label: "Nos tarifs détaillés" },
        ]}
        faqTitle="Cahier des charges : vos questions"
        faqItems={faqItems}
        showWhitePaperPromo
      >
        <p className="lead">
          Vous voulez demander des devis pour un site internet, mais vous ne
          savez pas quoi écrire. <strong>Commencez simplement</strong> :
          expliquez votre activité, les personnes que le site doit aider,
          l&apos;action qu&apos;elles doivent pouvoir faire et les pages
          indispensables. Ajoutez qui fournit les textes et les photos, le
          budget disponible et la date souhaitée.
        </p>
        <p>
          Pour un petit site vitrine, ce document peut tenir en une ou deux
          pages. Un cahier des charges plus détaillé devient utile lorsque le
          site vend en ligne, reprend beaucoup de contenus, se connecte à vos
          logiciels ou remplace un site qui reçoit déjà des visites. Le but
          n&apos;est pas d&apos;écrire comme un technicien : il est de permettre
          à plusieurs prestataires de comprendre et de chiffrer la même demande.
        </p>

        <InfoBox
          variant="blue"
          title="Vous voulez partir d'un modèle prêt à remplir ?"
        >
          Le{" "}
          <Link href={SITE_CDC_KIT.path}>
            kit gratuit de cahier des charges
          </Link>{" "}
          contient un document Word modifiable, un exemple fictif rempli, une
          grille Excel de 56 vérifications et un mode d&apos;emploi. Le
          téléchargement est direct, sans formulaire ni adresse email.
        </InfoBox>

        <GuideToc
          items={[
            {
              id: "reponse-rapide",
              label: "1. Choisir le bon niveau de détail",
            },
            { id: "objectif", label: "2. Commencer par le résultat attendu" },
            {
              id: "contenu",
              label: "3. Décrire les pages, contenus et fonctions",
            },
            {
              id: "contraintes",
              label: "4. Signaler l'existant et les contraintes utiles",
            },
            {
              id: "responsabilites",
              label: "5. Répartir le travail, le budget et le calendrier",
            },
            {
              id: "verification",
              label: "6. Dire comment le site sera vérifié",
            },
            {
              id: "projets",
              label: "7. Adapter le document au type de projet",
            },
            {
              id: "contrat",
              label: "8. Relier le document au devis et au contrat",
            },
            {
              id: "envoyer",
              label: "9. Envoyer une demande facile à comparer",
            },
          ]}
        />

        <h2 id="reponse-rapide">1. Choisir le bon niveau de détail</h2>
        <p>
          Tous les projets n&apos;ont pas besoin du même document. Choisissez la
          version la plus courte qui permet d&apos;éviter un malentendu
          important. Le prestataire pourra ensuite compléter les choix
          techniques.
        </p>
        <GuideTable
          headers={[
            "Votre projet",
            "Document suffisant au départ",
            "À ajouter",
          ]}
          rows={[
            [
              "Site de quelques pages sans fonction particulière",
              "Brief de 1 à 2 pages",
              "Objectif, pages, contenus, formulaire, budget et délai",
            ],
            [
              "Site vitrine important pour obtenir des demandes",
              "Cahier des charges court",
              "Parcours, textes, mesure des demandes, maintenance et tests",
            ],
            [
              "Refonte d'un site existant",
              "Document détaillé",
              "Pages à conserver, données, anciennes adresses et plan de bascule",
            ],
            [
              "E-commerce ou outil connecté à vos logiciels",
              "Document détaillé et ateliers avec les équipes",
              "Règles métier, cas d'erreur, données, sécurité et exploitation",
            ],
          ]}
        />
        <p>
          Une solution simple reste possible. Si vous avez seulement besoin
          d&apos;une page de présentation, d&apos;un numéro de téléphone et
          d&apos;un formulaire, ne remplissez pas des rubriques sur un espace
          client ou des connexions qui n&apos;existent pas. Un bon document
          retire autant de travail inutile qu&apos;il en ajoute.
        </p>

        <h2 id="objectif">2. Commencer par le résultat attendu</h2>
        <p>
          Avant de lister les couleurs et les fonctions, écrivez pourquoi le
          projet existe. Une formulation utile tient en quatre phrases :
        </p>
        <ol>
          <li>
            <strong>Notre entreprise</strong> vend ou réalise quoi, pour qui et
            dans quelle zone ?
          </li>
          <li>
            <strong>Aujourd&apos;hui</strong>, quel problème rencontrons-nous ?
          </li>
          <li>
            <strong>Le nouveau site doit permettre</strong> quelle action
            concrète ?
          </li>
          <li>
            <strong>Nous saurons qu&apos;il est utile</strong> en observant quel
            résultat ?
          </li>
        </ol>
        <p>
          Exemple sobre : « Nous installons des pompes à chaleur en Savoie. Les
          particuliers nous trouvent surtout par recommandation et ne
          comprennent pas les étapes avant un devis. Le site doit expliquer nos
          prestations, rassurer sur les zones desservies et permettre une
          demande qualifiée. Nous suivrons les formulaires complets et les
          appels provenant du site. »
        </p>
        <p>
          Cette présentation donne au prestataire le droit de proposer une
          solution plus simple. Si l&apos;objectif est de recevoir des appels,
          un site clair de six pages peut être plus utile qu&apos;un espace
          client coûteux que personne n&apos;a demandé.
        </p>

        <h2 id="contenu">3. Décrire les pages, contenus et fonctions</h2>
        <p>
          Commencez par les visiteurs : prospect, client existant, candidat,
          partenaire ou membre de l&apos;équipe. Pour chacun, notez ce
          qu&apos;il vient chercher et ce qu&apos;il doit pouvoir faire. Vous
          obtiendrez naturellement la liste des pages et fonctions.
        </p>
        <GuideTable
          headers={["Élément", "Ce que vous écrivez", "Exemple"]}
          rows={[
            [
              "Pages",
              "Titre et rôle de chaque page",
              "Services : comprendre l'offre et demander un devis",
            ],
            [
              "Contenus",
              "Qui fournit ou produit textes, photos et documents",
              "L'entreprise fournit les photos ; le prestataire réécrit les textes",
            ],
            [
              "Fonctions",
              "Action attendue et cas important",
              "Formulaire avec pièce jointe et message de confirmation",
            ],
            [
              "Administration",
              "Ce que l'équipe doit modifier seule",
              "Actualités, réalisations, tarifs ou membres de l'équipe",
            ],
          ]}
        />
        <p>
          Évitez les demandes comme « site moderne », « espace dynamique » ou «
          bon référencement » sans explication. Préférez une situation visible :
          « sur téléphone, un visiteur doit trouver le numéro en moins de deux
          clics » ou « l&apos;équipe doit pouvoir publier une réalisation sans
          appeler le prestataire ».
        </p>
        <p>
          Classez enfin les éléments en trois groupes : indispensables pour la
          première mise en ligne, utiles ensuite et non prévus. Cette priorité
          permet de recevoir une proposition adaptée au budget au lieu d&apos;un
          refus ou d&apos;un devis qui retire discrètement des éléments.
        </p>

        <h2 id="contraintes">
          4. Signaler l&apos;existant et les contraintes utiles
        </h2>
        <p>
          Vous n&apos;avez pas besoin de choisir le langage de programmation.
          Donnez en revanche les informations que la solution devra respecter :
          nom de domaine, hébergement, outils utilisés, données à reprendre,
          langues, personnes autorisées et obligations propres à votre activité.
        </p>
        <GuideTable
          headers={["Sujet", "Information à fournir", "Pourquoi"]}
          rows={[
            [
              "Site actuel",
              "Adresse, accès et pages importantes",
              "Évaluer ce qui peut être conservé ou doit être déplacé",
            ],
            [
              "Outils",
              "Gestion commerciale, agenda, paiement, email ou stock",
              "Vérifier les connexions possibles avant le devis",
            ],
            [
              "Données",
              "Type, volume, qualité et lieu de stockage",
              "Chiffrer la reprise et la protection nécessaires",
            ],
            [
              "Règles",
              "Confidentialité, accessibilité ou exigences du secteur",
              "Identifier les obligations à confirmer avec les bons conseils",
            ],
          ]}
        />
        <p>
          Pour le référencement dans Google, indiquez les pages qui apportent
          déjà des visites ou des demandes. Pour les données personnelles,
          décrivez les formulaires, les outils de mesure et les personnes qui
          auront accès aux informations. Le prestataire peut alors proposer des
          mesures adaptées, sans transformer le cahier des charges en avis
          juridique.
        </p>

        <h2 id="responsabilites">
          5. Répartir le travail, le budget et le calendrier
        </h2>
        <p>
          Beaucoup de retards viennent de tâches que chacun pensait confiées à
          l&apos;autre : écrire les textes, choisir les photos, nettoyer un
          fichier de produits ou valider les maquettes. Inscrivez un responsable
          et une date pour chaque livraison importante.
        </p>
        <GuideTable
          headers={["Travail", "Responsable", "Date ou condition"]}
          rows={[
            [
              "Textes et photos",
              "Entreprise, prestataire ou les deux",
              "Avant la création des pages",
            ],
            [
              "Maquettes",
              "Prestataire ; validation par une personne nommée",
              "Nombre de retours prévu",
            ],
            [
              "Données",
              "Entreprise pour la source, prestataire pour l'import",
              "Fichier fourni et contrôlé",
            ],
            [
              "Tests",
              "Prestataire puis utilisateurs désignés",
              "Avant l'accord de mise en ligne",
            ],
          ]}
        />
        <p>
          Donnez une fourchette de budget si vous en avez une. Séparez
          l&apos;investissement de départ du coût annuel : hébergement,
          maintenance, licences, assistance et évolutions. Demandez aussi une
          version indispensable et des options. Vous pourrez réduire le projet
          sans perdre sa logique.
        </p>
        <p>
          Un calendrier crédible montre les délais du prestataire et ceux de
          l&apos;entreprise. Si vous devez être en ligne avant un salon,
          indiquez la date et ce qui peut être reporté après cet événement.
        </p>

        <h2 id="verification">6. Dire comment le site sera vérifié</h2>
        <p>
          La <strong>recette</strong> est simplement la vérification finale du
          site avant de l&apos;accepter. Écrivez les contrôles importants avant
          le développement : ils seront plus faciles à chiffrer et moins
          discutables au moment de la livraison.
        </p>
        <GuideTable
          headers={["À vérifier", "Exemple de résultat attendu", "Preuve"]}
          rows={[
            [
              "Parcours principal",
              "Un visiteur envoie une demande et reçoit une confirmation",
              "Test sur ordinateur et téléphone",
            ],
            [
              "Administration",
              "Une personne formée publie une page sans aide",
              "Démonstration avec un compte client",
            ],
            [
              "Données",
              "Le nombre d'articles importés correspond au fichier validé",
              "Contrôle du total et d'un échantillon",
            ],
            [
              "Continuité",
              "Le domaine, les comptes et les sauvegardes appartiennent à l'entreprise",
              "Accès remis et procédure documentée",
            ],
          ]}
        />
        <p>
          Ajoutez les appareils et navigateurs réellement utilisés, les
          sauvegardes, la sécurité, l&apos;accessibilité attendue et le suivi
          des erreurs. Si un score technique est demandé, nommez l&apos;outil,
          la page, l&apos;appareil et les conditions de mesure. Un nombre isolé
          ne garantit ni les ventes ni la qualité globale.
        </p>

        <h2 id="projets">7. Adapter le document au type de projet</h2>
        <GuideTable
          headers={[
            "Projet",
            "Questions supplémentaires",
            "Solution simple à comparer",
          ]}
          rows={[
            [
              "Refonte",
              "Que garder, déplacer, fusionner ou retirer ?",
              "Corriger l'existant si les problèmes sont limités",
            ],
            [
              "E-commerce",
              "Produits, stock, livraison, paiement, retours et service client",
              "Plateforme existante si le parcours de vente est standard",
            ],
            [
              "Logiciel interne",
              "Utilisateurs, droits, étapes de travail, données et incidents",
              "Automatiser d'abord la tâche la plus coûteuse",
            ],
            [
              "SaaS",
              "Comptes, abonnements, sécurité, assistance et exploitation",
              "Tester le besoin avec une première version limitée",
            ],
          ]}
        />
        <p>
          Pour une refonte, joignez la liste des anciennes pages et indiquez
          celles qui reçoivent des visites. Pour une boutique, fournissez un
          vrai exemple de produit, de remise, de livraison et de retour. Pour un
          outil métier, racontez une journée de travail et les erreurs à éviter.
          Ces exemples valent mieux qu&apos;une longue liste de mots techniques.
        </p>

        <h2 id="contrat">8. Relier le document au devis et au contrat</h2>
        <p>
          Le cahier des charges ne remplace pas le devis ni le contrat. Faites
          identifier la version retenue, sa date et sa place parmi les autres
          documents. Si le prestataire propose un écart, celui-ci doit être
          visible et accepté avant la signature.
        </p>
        <ul>
          <li>
            la liste de ce qui sera livré et de ce qui ne l&apos;est pas ;
          </li>
          <li>le prix, les échéances et les conditions de paiement ;</li>
          <li>la méthode pour demander et accepter un changement ;</li>
          <li>la vérification finale et le traitement des corrections ;</li>
          <li>les droits sur le code, les maquettes et les contenus ;</li>
          <li>la remise du domaine, des comptes, des données et des accès ;</li>
          <li>la garantie, la maintenance et les conditions de sortie.</li>
        </ul>
        <p>
          La cession des droits doit identifier les créations concernées et les
          usages autorisés ; sa rédaction dépend du projet. Pour un enjeu
          important, un marché public ou une clause sensible, demandez un avis
          juridique adapté plutôt que de copier une formule générique.
        </p>

        <h2 id="envoyer">9. Envoyer une demande facile à comparer</h2>
        <ol>
          <li>Supprimez les rubriques qui ne concernent pas le projet.</li>
          <li>
            Marquez les inconnues « à confirmer » au lieu d&apos;inventer.
          </li>
          <li>Joignez les exemples, accès et fichiers utiles.</li>
          <li>Envoyez la même version et la même date à chaque prestataire.</li>
          <li>
            Demandez une réponse qui distingue le prix de départ, le coût
            annuel, les options et ce qui reste à votre charge.
          </li>
        </ol>
        <p>
          Lors de l&apos;échange, observez aussi la qualité des questions. Un
          bon prestataire ne se contente pas d&apos;accepter la liste : il
          vérifie l&apos;objectif, signale les contradictions et peut proposer
          de retirer une fonction inutile.
        </p>

        <InfoBox variant="emerald" title="Votre prochaine action">
          Téléchargez le{" "}
          <Link href={SITE_CDC_KIT.path}>kit cahier des charges</Link>,
          remplissez d&apos;abord la synthèse, les pages, les responsabilités,
          le budget et les vérifications. Pour un petit site, arrêtez-vous là si
          le devis complète clairement le reste. Pour un projet complexe,
          utilisez les rubriques détaillées avec les équipes concernées.
        </InfoBox>
        <p>
          Vous pouvez ensuite consulter notre{" "}
          <Link href="/guides/choisir-son-agence-web">
            guide pour choisir une agence web
          </Link>{" "}
          et le{" "}
          <Link href="/guides/combien-coute-un-site-internet">
            guide des prix d&apos;un site internet
          </Link>
          . Si vous souhaitez une réponse de notre part, envoyez le document ou
          décrivez le besoin sur la{" "}
          <Link href="/demarrer-un-projet">page projet</Link> : nous vous
          indiquerons les questions restantes avant tout devis.
        </p>

        <hr />
        <p className="text-sm">
          <strong>Sources officielles</strong> — consultées en juillet 2026 ;
          les liens suivants s&apos;ouvrent dans un nouvel onglet :{" "}
          <a
            href="https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/batir-le-cahier-des-charges-du-site-internet"
            target="_blank"
            rel="noopener noreferrer"
          >
            France Num « Bâtir le cahier des charges du site internet de son
            entreprise »
          </a>{" "}
          et sa{" "}
          <a
            href="https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/modeles-de-cahiers-des-charges-pour-un-site"
            target="_blank"
            rel="noopener noreferrer"
          >
            sélection de modèles
          </a>{" "}
          ; repères{" "}
          <a
            href="https://developers.google.com/search/docs/appearance/core-web-vitals"
            target="_blank"
            rel="noopener noreferrer"
          >
            Core Web Vitals (Google Search Central)
          </a>{" "}
          ; mesure au{" "}
          <a
            href="https://web.dev/articles/vitals?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            75e percentile (web.dev)
          </a>{" "}
          ;{" "}
          <a
            href="https://developers.google.com/search/docs/crawling-indexing/301-redirects"
            target="_blank"
            rel="noopener noreferrer"
          >
            redirections et migrations (Google Search Central)
          </a>{" "}
          ;{" "}
          <a
            href="https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            déplacement d&apos;un site avec changement d&apos;URL (Google Search
            Central)
          </a>{" "}
          ;{" "}
          <a
            href="https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/comment-mettre-mon-site-web-en-conformite"
            target="_blank"
            rel="noopener noreferrer"
          >
            cookies et traceurs (CNIL)
          </a>{" "}
          et{" "}
          <a
            href="https://www.cnil.fr/fr/qualification-juridique-sous-traitance"
            target="_blank"
            rel="noopener noreferrer"
          >
            qualification de la sous-traitance (CNIL)
          </a>{" "}
          ;{" "}
          <a
            href="https://accessibilite.numerique.gouv.fr/obligations/champ-application/"
            target="_blank"
            rel="noopener noreferrer"
          >
            champ d&apos;application du RGAA
          </a>{" "}
          et{" "}
          <a
            href="https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/la-nouvelle-directive-europeenne-accessibilite-pour-des-produits-et-des-services-accessibles-aux-personnes-en-situation"
            target="_blank"
            rel="noopener noreferrer"
          >
            directive européenne sur l&apos;accessibilité (DGCCRF)
          </a>{" "}
          ;{" "}
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958"
            target="_blank"
            rel="noopener noreferrer"
          >
            article L131-3 du Code de la propriété intellectuelle (Légifrance)
          </a>{" "}
          ;{" "}
          <a
            href="https://www.afnic.fr/wp-media/uploads/2020/12/Guidepratique_Titulaire_VF.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            guide du titulaire de nom de domaine (Afnic)
          </a>{" "}
          ;{" "}
          <a
            href="https://messervices.cyber.gouv.fr/guides/recommandations-relatives-lauthentification-multifacteur-et-aux-mots-de-passe"
            target="_blank"
            rel="noopener noreferrer"
          >
            recommandations d&apos;authentification (ANSSI)
          </a>{" "}
          et{" "}
          <a
            href="https://www.cybermalveillance.gouv.fr/tous-nos-contenus/bonnes-pratiques/sauvegardes"
            target="_blank"
            rel="noopener noreferrer"
          >
            bonnes pratiques de sauvegarde (Cybermalveillance.gouv.fr)
          </a>
          .
        </p>
        <p className="text-sm">
          <em>
            Licence : vous pouvez utiliser et modifier le kit pour vos propres
            projets, puis le partager en interne et avec les prestataires
            consultés. Sa revente ou sa republication complète ou
            substantiellement identique comme ressource autonome est interdite
            sans accord écrit de Hagnéré Code. Ce guide ne constitue pas un
            conseil juridique personnalisé.
          </em>
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
