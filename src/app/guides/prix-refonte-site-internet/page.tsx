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

const guide = getGuide("prix-refonte-site-internet");

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
      "Refonte de site internet",
      "Migration SEO",
      "Next.js",
      "React",
      "Performance web",
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
      name: "Refonte de site internet : le vrai prix",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Combien coûte une refonte de site internet ?",
    answer:
      "Pour préparer une consultation, les scénarios Hagnéré de ce guide vont d'environ 1 500 à 8 000 € pour un petit site vitrine, de 3 000 à 15 000 € pour un site de PME et de 5 000 à 40 000 € pour un e-commerce. Ce ne sont ni des moyennes de marché ni un devis : contenus, données, fonctions et migration SEO changent fortement le prix.",
  },
  {
    question: "Faut-il refaire tout le site ?",
    answer:
      "Pas forcément. Si le problème concerne quelques pages, la lenteur, les formulaires ou l'administration, une correction ciblée peut suffire. Une refonte complète se justifie lorsque plusieurs problèmes structurels se cumulent et qu'une amélioration progressive coûterait presque aussi cher sans résoudre les problèmes de fond.",
  },
  {
    question: "Une refonte peut-elle faire perdre du trafic Google ?",
    answer:
      "Oui, surtout si les adresses, les contenus ou les liens internes changent sans plan. Il faut inventorier les pages actuelles, conserver ce qui fonctionne, rediriger chaque ancienne adresse vers la bonne nouvelle page et surveiller l'indexation. Aucun prestataire ne peut garantir un trafic identique.",
  },
  {
    question: "Qu'est-ce qu'une migration SEO ?",
    answer:
      "C'est le travail qui aide les moteurs de recherche et les visiteurs à retrouver les bonnes pages après la refonte : inventaire des anciennes adresses, correspondance avec les nouvelles, redirections, contrôles avant mise en ligne et suivi après la bascule.",
  },
  {
    question: "Combien coûte une migration SEO ?",
    answer:
      "Le scénario de préparation de ce guide va de 1 500 à 10 000 € selon le nombre de pages et la complexité. Cette fourchette éditoriale n'est pas une médiane de marché. Demandez un prix lié au volume d'adresses, aux données disponibles, aux redirections et au suivi réellement inclus.",
  },
  {
    question: "Combien de temps dure une refonte ?",
    answer:
      "Pour préparer le calendrier, ce guide utilise 3 à 5 semaines pour un petit site vitrine, 4 à 8 semaines pour un site de PME et 6 à 12 semaines pour un e-commerce. Ce sont des scénarios de travail : contenus, validations, données et connexions peuvent les déplacer. Demandez un planning qui montre aussi vos propres échéances.",
  },
  {
    question: "Le site doit-il être coupé pendant les travaux ?",
    answer:
      "Généralement non. Le nouveau site est préparé sur un espace privé pendant que l'ancien reste en ligne. La bascule intervient après les tests, les sauvegardes et la préparation des redirections. Le devis doit prévoir une fenêtre d'intervention et un plan de retour si un problème important apparaît.",
  },
  {
    question: "Quelle différence entre refonte, migration et optimisation ?",
    answer:
      "Une optimisation corrige l'existant. Une refonte modifie le design, les contenus, la structure ou la technologie. Une migration déplace le site ou ses données vers un autre hébergement, domaine ou outil. Un projet peut combiner les trois, mais le devis doit les distinguer.",
  },
  {
    question: "Faut-il prévoir une maintenance après la refonte ?",
    answer:
      "Oui. Faites préciser l'hébergement, les sauvegardes, la surveillance, les mises à jour, le support, les délais d'intervention et les évolutions exclues. Le prix dépend du site et du niveau de service ; il ne se déduit pas automatiquement d'un pourcentage du coût de création.",
  },
  {
    question: "Comment comparer deux devis de refonte ?",
    answer:
      "Utilisez la même liste : audit, stratégie, maquettes, contenus, développement, reprise des données, migration SEO, tests, formation, hébergement et maintenance. Comparez ensuite les exclusions, les responsabilités, le calendrier et le coût sur trois ans, pas seulement le montant de départ.",
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
          { label: "Refonte de site internet : le vrai prix" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vous envisagez de refaire votre site ? Comparez une correction ciblée, une refonte partielle et une reconstruction complète, avec les prix 2026, le calendrier, le passage des anciennes pages aux nouvelles et les coûts après la mise en ligne."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          {
            number: "01",
            title: "Commencez par vérifier si la refonte est utile",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Protégez les pages qui fonctionnent déjà",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Comparez le coût sur 3 ans",
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
            href: "/guides/nextjs-ou-wordpress",
            label: "Next.js ou WordPress ?",
          },
          {
            href: "/ressources/kit-cahier-des-charges-site-internet",
            label: "Modèle de cahier des charges",
          },
          {
            href: "/services/sites-vitrines",
            label: "Sites vitrines sur mesure",
          },
          { href: "/methode", label: "Notre méthode Sprint Fixe™" },
        ]}
        faqTitle="Prix d'une refonte de site : vos questions"
        faqItems={faqItems}
        showWhitePaperPromo
      >
        <p className="lead">
          Votre site paraît daté, il est difficile à modifier ou il ne génère
          plus assez de demandes. Vous vous demandez donc{" "}
          <strong>combien coûterait une refonte</strong> et, surtout, s&apos;il
          faut réellement tout reconstruire. La première décision n&apos;est pas
          technique : elle consiste à distinguer ce qui peut être corrigé de ce
          qui bloque durablement l&apos;activité.
        </p>
        <p>
          Une refonte touche un site qui possède déjà des contenus, des
          visiteurs, parfois des positions dans Google et des habitudes
          internes. Le devis doit donc financer deux choses : le nouveau site et
          le passage sécurisé depuis l&apos;ancien. Ce guide vous aide à choisir
          le bon niveau d&apos;intervention, à comprendre les fourchettes de
          prix et à protéger ce qui fonctionne déjà.
        </p>

        <p>
          Les montants et délais de ce guide sont des{" "}
          <strong>scénarios éditoriaux Hagnéré Code</strong> construits à partir
          des périmètres décrits. Ils ne constituent ni une étude représentative
          du marché, ni nos tarifs, ni une promesse. Ils servent à préparer les
          questions avant qu’un audit et un devis remplacent ces hypothèses.
        </p>

        <GuideToc
          items={[
            {
              id: "reponse-rapide",
              label: "1. Corriger, refondre une partie ou tout reconstruire ?",
            },
            {
              id: "perimetre",
              label: "2. Ce qu'une refonte peut réellement inclure",
            },
            { id: "prix", label: "3. Les fourchettes de prix en 2026" },
            { id: "decision", label: "4. Savoir si la refonte est justifiée" },
            { id: "devis", label: "5. Les postes d'un devis complet" },
            {
              id: "migration-seo",
              label: "6. Protéger les pages visibles dans Google",
            },
            {
              id: "calendrier",
              label: "7. Organiser la bascule sans arrêter l'activité",
            },
            {
              id: "cout-trois-ans",
              label: "8. Calculer le coût sur trois ans",
            },
            {
              id: "comparer",
              label: "9. Comparer les prestataires et les risques",
            },
            {
              id: "preparer",
              label: "10. Préparer la refonte avant de demander un prix",
            },
          ]}
        />

        <h2 id="reponse-rapide">
          1. Corriger, refondre une partie ou tout reconstruire ?
        </h2>
        <p>
          Cherchez d&apos;abord le problème que l&apos;entreprise veut résoudre.
          Un site peut sembler ancien tout en remplissant correctement son rôle.
          À l&apos;inverse, un design récent peut masquer une administration
          inutilisable, des formulaires défaillants ou une structure qui empêche
          de publier les bonnes pages.
        </p>
        <GuideTable
          headers={["Situation observée", "Option à étudier", "Pourquoi"]}
          rows={[
            [
              "Quelques pages sont faibles, mais le site reste stable et facile à gérer",
              "Optimisation ciblée",
              "Le problème peut être corrigé sans risque de migration globale",
            ],
            [
              "Le message, la navigation ou le design doivent évoluer, mais le site fonctionne correctement",
              "Refonte partielle",
              "Vous concentrez le budget sur ce que voient et utilisent les clients",
            ],
            [
              "Le site cumule technologie non maintenue, lenteur, sécurité et structure inadaptée",
              "Refonte complète à comparer",
              "Les corrections isolées risquent de s'empiler sans résoudre les problèmes de fond",
            ],
            [
              "Le site fonctionne et aucun objectif commercial nouveau n'est défini",
              "Conserver et mesurer",
              "Une nouvelle apparence ne crée pas à elle seule de demandes",
            ],
          ]}
        />
        <InfoBox
          variant="amber"
          title="L'âge du site n'est pas un motif suffisant"
        >
          Il n&apos;existe pas de durée de vie universelle. Une décision
          sérieuse s&apos;appuie sur des faits : demandes perdues, tâches
          manuelles, risques de sécurité, impossibilité de publier, usage
          mobile, accessibilité, performance et objectifs futurs.
        </InfoBox>

        <h2 id="perimetre">
          2. Ce qu&apos;une refonte peut réellement inclure
        </h2>
        <p>
          Le mot « refonte » recouvre des projets très différents. Il peut
          désigner un simple changement d&apos;apparence, une réorganisation des
          contenus, un nouveau système de gestion ou la reconstruction
          d&apos;une plateforme complète. Tant que ces éléments ne sont pas
          séparés, une fourchette de prix reste peu utile.
        </p>
        <GuideTable
          headers={["Terme", "En français courant", "Exemple"]}
          rows={[
            [
              "Optimisation",
              "Améliorer le site actuel",
              "Réécrire les pages, accélérer le site ou corriger les formulaires",
            ],
            [
              "Refonte",
              "Repenser tout ou partie du site",
              "Nouveau parcours, nouvelles maquettes et nouvelle structure",
            ],
            [
              "Migration",
              "Déplacer le site, ses contenus ou ses données",
              "Changer d'hébergeur, de domaine ou d'outil d'administration",
            ],
          ]}
        />
        <p>
          Une refonte peut inclure la stratégie, l&apos;organisation des pages,
          les maquettes, les textes, les photos, le développement, l&apos;import
          des données, la formation et le suivi après publication. Elle peut
          aussi n&apos;inclure qu&apos;une partie de cette liste. Demandez que
          chaque poste soit marqué « inclus », « fourni par le client » ou « non
          compris ».
        </p>

        <h2 id="prix">3. Les fourchettes de prix en 2026</h2>
        <p>
          Les montants ci-dessous reprennent les scénarios éditoriaux annoncés
          en début de guide. Ils servent à préparer une enveloppe et à vérifier
          que les mêmes tâches figurent dans chaque devis. Ils ne permettent pas
          d’affirmer qu’une proposition est chère ou bon marché sans examiner
          l’existant.
        </p>
        <GuideTable
          headers={[
            "Type de projet",
            "Repère HT",
            "Ce qui fait varier le prix",
          ]}
          rows={[
            [
              "Relooking graphique sans reconstruction",
              "500 à 3 000 €",
              "Nombre de modèles de pages et qualité de l'existant",
            ],
            [
              "Petit site vitrine",
              "1 500 à 8 000 €",
              "Design, textes, autonomie et reprise des contenus",
            ],
            [
              "Site de PME de 15 à 30 pages",
              "3 000 à 15 000 €",
              "Stratégie, maquettes, rédaction, langues et fonctions",
            ],
            [
              "Site e-commerce",
              "5 000 à 40 000 €",
              "Catalogue, paiement, livraison, données et connexions",
            ],
            [
              "Plateforme sur mesure",
              "15 000 à 80 000 € et plus",
              "Règles métier, comptes, droits, intégrations et exploitation",
            ],
          ]}
        />
        <p>
          La migration SEO désigne le passage contrôlé des anciennes pages aux
          nouvelles pour aider Google et les visiteurs à retrouver les bons
          contenus. Pour préparer une consultation, notre scénario situe ce
          travail entre 1 500 et 10 000 € selon le volume et la complexité. Ce
          n’est pas une médiane de marché. Un site de dix pages sans trafic
          connu et un catalogue de dix mille produits ne peuvent pas recevoir le
          même chiffrage.
        </p>

        <h2 id="decision">4. Savoir si la refonte est justifiée</h2>
        <p>
          Faites examiner le site avant de choisir la solution. L&apos;audit
          doit relier chaque problème à une conséquence : demandes non reçues,
          équipe bloquée, risque de sécurité, perte de temps, difficulté à
          vendre ou impossibilité de faire évoluer l&apos;offre.
        </p>
        <ul>
          <li>
            Testez les formulaires et le parcours principal sur téléphone.
          </li>
          <li>
            Demandez à l&apos;équipe de montrer les trois tâches les plus
            pénibles dans l&apos;administration.
          </li>
          <li>
            Relevez les pages qui attirent déjà des visites ou des demandes.
          </li>
          <li>
            Listez les mises à jour, incidents et contournements des douze
            derniers mois.
          </li>
          <li>
            Écrivez les objectifs que le site devra servir pendant les trois
            prochaines années.
          </li>
        </ul>
        <p>
          Demandez ensuite deux scénarios lorsque c&apos;est possible : corriger
          l&apos;existant et reconstruire. Chacun doit préciser ce qu&apos;il
          résout, ce qu&apos;il laisse en place, son délai et son coût
          d&apos;entretien. Une agence qui ne chiffre que la solution
          qu&apos;elle vend ne vous donne pas encore une comparaison complète.
        </p>

        <h2 id="devis">5. Les postes d&apos;un devis complet</h2>
        <GuideTable
          headers={["Étape", "Livrable attendu", "Question à poser"]}
          rows={[
            [
              "État des lieux et préparation",
              "Objectifs, pages existantes, risques et travail prévu",
              "Qu'avez-vous vérifié avant de recommander la refonte ?",
            ],
            [
              "Structure et contenus",
              "Plan des pages, messages et responsabilités de rédaction",
              "Qui écrit, relit et intègre chaque contenu ?",
            ],
            [
              "Design",
              "Maquettes ordinateur et mobile des parcours importants",
              "Combien de modèles et de cycles de retours ?",
            ],
            [
              "Développement",
              "Fonctions, administration, connexions et critères de qualité",
              "Qu'est-ce qui est personnalisé ou réutilisé ?",
            ],
            [
              "Migration et recette",
              "Données reprises, redirections, tests et plan de bascule",
              "Qui valide et que se passe-t-il en cas d'échec ?",
            ],
            [
              "Exploitation",
              "Formation, garantie, maintenance et accès",
              "Quel sera le coût d'une année normale ?",
            ],
          ]}
        />
        <p>
          Les devis très bas omettent souvent un travail qui reviendra au client
          : écrire les textes, nettoyer les données, tester toutes les pages ou
          construire les redirections. Ce n&apos;est pas nécessairement un
          mauvais choix si votre équipe peut réellement le faire. Le risque
          vient d&apos;une tâche absente que personne n&apos;a identifiée.
        </p>

        <h2 id="migration-seo">6. Protéger les pages visibles dans Google</h2>
        <p>
          Une page possède une adresse, par exemple « /services/maintenance ».
          Si cette adresse change pendant la refonte, les visiteurs et Google
          doivent être envoyés vers la nouvelle page correspondante. Ce renvoi
          s&apos;appelle une <strong>redirection permanente</strong>, souvent
          désignée par le code « 301 ».
        </p>
        <ol>
          <li>
            Inventoriez les anciennes adresses à partir du site, de l&apos;outil
            de suivi et de la Search Console de Google.
          </li>
          <li>
            Identifiez les pages qui reçoivent du trafic, des liens ou des
            demandes et conservez leur intention.
          </li>
          <li>
            Associez chaque ancienne page à la nouvelle page la plus proche ; ne
            renvoyez pas tout vers l&apos;accueil.
          </li>
          <li>
            Testez les redirections, les liens internes, les balises et le plan
            du site avant la publication.
          </li>
          <li>Surveillez les erreurs et l&apos;indexation après la bascule.</li>
        </ol>
        <p>
          Google recommande de conserver les redirections généralement au moins
          un an. Même avec une méthode rigoureuse, le trafic et les positions
          peuvent varier : une migration ne se vend pas avec une garantie de
          résultat. Le contrat peut en revanche garantir les contrôles réalisés,
          la correction des erreurs et la période de suivi.
        </p>
        <InfoBox variant="amber" title="Changer de domaine augmente le risque">
          Modifier en même temps le design, les contenus, la technologie et le
          nom de domaine rend le diagnostic plus difficile. Si le changement de
          domaine n&apos;est pas indispensable, séparez-le du reste ou exigez
          une justification et un plan de surveillance renforcé.
        </InfoBox>

        <h2 id="calendrier">
          7. Organiser la bascule sans arrêter l&apos;activité
        </h2>
        <p>
          Le nouveau site est généralement construit sur un espace privé, appelé
          préproduction, pendant que l&apos;ancien reste accessible. Pour
          établir un premier calendrier, ce guide utilise trois à cinq semaines
          pour un petit site vitrine, quatre à huit semaines pour un site de PME
          et six à douze semaines pour un e-commerce. Ces scénarios supposent
          des contenus, accès et validations disponibles.
        </p>
        <p>
          Avant la bascule, prévoyez une sauvegarde, une copie des données
          récentes, les redirections, les tests et une personne habilitée à
          décider. Pour une boutique ou un service critique, définissez aussi la
          fenêtre d&apos;intervention, la durée d&apos;indisponibilité
          acceptable et le plan de retour vers l&apos;ancien site si un problème
          majeur apparaît.
        </p>
        <GuideTable
          headers={["Moment", "Contrôle essentiel", "Responsable"]}
          rows={[
            [
              "Avant",
              "Sauvegarde, tests, données et redirections",
              "Noms écrits dans le planning",
            ],
            [
              "Pendant",
              "Paiement, formulaires, domaine et pages prioritaires",
              "Équipe disponible pour décider",
            ],
            [
              "Après",
              "Erreurs, commandes, demandes et indexation",
              "Suivi prévu au contrat",
            ],
          ]}
        />
        <p>
          Le délai du projet dépend aussi de l&apos;entreprise. Une maquette
          validée en deux jours ou en deux semaines ne produit pas le même
          calendrier. Le planning doit donc montrer les dates de livraison du
          prestataire et les dates de réponse attendues du client.
        </p>

        <h2 id="cout-trois-ans">8. Calculer le coût sur trois ans</h2>
        <p>
          Le prix de refonte ne représente pas le coût complet. Ajoutez
          l&apos;hébergement, les licences, la maintenance, les sauvegardes, le
          support, la rédaction de nouvelles pages et les évolutions déjà
          prévisibles. Comptez aussi le temps de votre équipe pour produire les
          contenus et participer aux validations.
        </p>
        <GuideTable
          headers={["Année 1", "Années suivantes", "Coûts conditionnels"]}
          rows={[
            [
              "Audit, conception, construction, migration et formation",
              "Hébergement, maintenance, licences et contenus",
              "Évolutions, changement de prestataire ou incident important",
            ],
            [
              "Temps interne de validation et de reprise des données",
              "Temps de publication et de suivi",
              "Nouveau besoin métier ou nouvelle réglementation",
            ],
          ]}
        />
        <p>
          Demandez au prestataire une estimation de la première année et
          d&apos;une année normale d&apos;exploitation. Une solution plus chère
          à construire peut être simple à maintenir ; une solution peu chère
          peut multiplier les abonnements et les interventions. Le sens de
          comparaison doit rester le même pour chaque devis.
        </p>

        <h2 id="comparer">9. Comparer les prestataires et les risques</h2>
        <p>
          Une proposition professionnelle ne se contente pas d&apos;un beau
          visuel. Elle explique ce qui sera conservé, ce qui changera, les
          hypothèses prises, les risques identifiés et les preuves de
          validation. Demandez à voir une refonte comparable et, si possible,
          échangez avec le client concerné.
        </p>
        <ul>
          <li>
            Qui possède le code, les maquettes, les contenus et les comptes ?
          </li>
          <li>
            Qui ouvre l&apos;hébergement, le domaine et les outils de mesure ?
          </li>
          <li>Quels navigateurs, téléphones et parcours seront testés ?</li>
          <li>
            Comment une demande supplémentaire est-elle chiffrée et validée ?
          </li>
          <li>
            Comment une autre équipe récupère-t-elle le site et la documentation
            ?
          </li>
        </ul>
        <p>
          Comparez aussi la qualité de la recommandation. Un prestataire qui
          peut expliquer pourquoi il faut conserver certaines pages, différer
          une fonction ou éviter une refonte complète réduit votre risque, même
          si cette conclusion diminue son propre devis.
        </p>

        <h2 id="preparer">10. Préparer la refonte avant de demander un prix</h2>
        <ol>
          <li>
            Écrivez le problème actuel en trois phrases et associez-le à un
            effet mesurable.
          </li>
          <li>
            Rassemblez les accès au site, à l&apos;hébergeur, au domaine, aux
            statistiques et à la Search Console.
          </li>
          <li>
            Dressez la liste des pages, fonctions, formulaires, langues et
            connexions à conserver.
          </li>
          <li>
            Nommez la personne qui fournira les contenus et celle qui validera
            le projet.
          </li>
          <li>
            Demandez au moins un scénario de correction et un scénario de
            refonte lorsque les deux restent crédibles.
          </li>
        </ol>

        <GuideInlineCTA
          title="Vous ne savez pas s'il faut corriger ou refaire votre site ?"
          description="Préparez l'adresse du site, les trois problèmes les plus gênants et les pages qui apportent déjà des demandes. Nous pouvons vous aider à distinguer une optimisation ciblée d'une refonte et à planifier le passage vers le nouveau site."
        />
        <p>
          Notre{" "}
          <Link href="/ressources/kit-cahier-des-charges-site-internet">
            modèle de cahier des charges
          </Link>{" "}
          vous aide à transmettre exactement la même demande à plusieurs
          prestataires. Pour situer la proposition reçue, consultez également le{" "}
          <Link href="/guides/combien-coute-un-site-internet">
            guide général du prix d&apos;un site
          </Link>
          . Vous pourrez alors décider à partir de trois éléments simples : le
          problème résolu, ce qui est protégé pendant la migration et le coût
          complet après la mise en ligne.
        </p>

        <hr />
        <p className="text-sm">
          <strong>Sources techniques</strong> — consultées en juillet 2026 :{" "}
          <a
            href="https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Search Central, migration de site avec changement d&apos;URL
          </a>{" "}
          ;{" "}
          <a
            href="https://developers.google.com/search/docs/crawling-indexing/301-redirects"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Search Central, redirections et recherche Google
          </a>
          .
        </p>
        <p className="text-sm">
          <em>
            Les fourchettes de prix et de délai sont des scénarios éditoriaux
            Hagnéré Code destinés à préparer une consultation, pas des moyennes
            de marché. Seul un devis établi après examen de votre site et de
            votre besoin vous engage. Ce guide ne constitue pas un conseil
            comptable ou fiscal personnalisé.
          </em>
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
