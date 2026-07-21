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

const guide = getGuide("proprietaire-site-internet-code-source");

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
      "Propriété intellectuelle du logiciel",
      "Contrats de prestation web",
      "Cession de droits d'auteur",
      "Réversibilité technique",
      "RGPD",
      "Développement sur mesure",
    ],
    sameAs: ["https://www.linkedin.com/in/quentin-hagnere"],
    worksFor: { "@id": `${SITE_URL}/#organization` },
  },
  publisher: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Hagnéré Code",
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/logos/logo-dark.png` },
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
      name: "Propriété d'un site et du code source",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "J’ai payé le site : le code m’appartient-il ?",
    answer:
      "Pas automatiquement. Le contrat doit préciser les droits cédés ou la licence accordée. Vos contenus et données restent un sujet distinct ; les thèmes, polices et extensions peuvent dépendre de licences tierces.",
  },
  {
    question: "Quels accès faut-il posséder pour changer de prestataire ?",
    answer:
      "Au minimum le domaine, l’hébergement, le dépôt de code, l’administration du site, les sauvegardes, la mesure d’audience et les services de paiement ou d’email utilisés.",
  },
  {
    question: "L’agence peut-elle refuser de remettre le code ?",
    answer:
      "La réponse dépend du contrat, des droits et du contexte. Rassemblez les documents et demandez une réponse écrite. En cas de désaccord, faites analyser le dossier par un avocat compétent.",
  },
  {
    question: "Que faire si le domaine est au nom de l’agence ?",
    answer:
      "Demandez la modification du titulaire et le code nécessaire au transfert. Pour un domaine en .fr, l’AFNIC rappelle que le titulaire déclaré détient les droits ; vérifiez ce point avant tout conflit.",
  },
  {
    question: "Que peut-on récupérer depuis Wix ou Shopify ?",
    answer:
      "Vous n’obtenez pas le code de la plateforme. Vérifiez plutôt les exports de contenus, produits, clients, commandes et le transfert du domaine. Les possibilités dépendent de l’éditeur et du forfait.",
  },
  {
    question: "Le code d’un salarié appartient-il à l’entreprise ?",
    answer:
      "L’article L113-9 prévoit, sauf stipulation contraire, un régime particulier pour les logiciels créés par un salarié dans l’exercice de ses fonctions. Ce régime ne s’applique pas automatiquement à un freelance.",
  },
  {
    question: "Combien coûte une cession de droits après coup ?",
    answer:
      "Il n’existe pas de barème public fiable. Le prix dépend du contrat, du rapport de négociation et des droits concernés. Il est généralement préférable de régler cette question avant la commande.",
  },
  {
    question: "Que faire si le prestataire disparaît ?",
    answer:
      "Si l’entreprise possède les comptes, le code et des sauvegardes utilisables, une reprise reste possible. Pour un logiciel critique, un dépôt chez un tiers de confiance peut être étudié avec un conseil adapté.",
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
          { label: "Propriété du site et du code source" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vous avez payé le site, mais pouvez-vous changer de prestataire ? Distinguez vos contenus, le code, les licences et les comptes, puis sécurisez les accès indispensables avant qu’un conflit n’apparaisse."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          {
            number: "01",
            title: "Le contrat décide des droits",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Les comptes doivent être à votre nom",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "14 accès à vérifier",
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
            href: "/guides/choisir-son-agence-web",
            label: "Choisir son agence web",
          },
          {
            href: "/guides/cahier-des-charges-site-internet",
            label: "Cahier des charges",
          },
          {
            href: "/guides/combien-coute-un-site-internet",
            label: "Prix d'un site internet",
          },
          {
            href: "/guides/prix-logiciel-sur-mesure",
            label: "Prix d'un logiciel sur mesure",
          },
          {
            href: "/guides/agence-web-ou-freelance",
            label: "Agence ou freelance ?",
          },
          {
            href: "/guides/reprendre-logiciel-metier-existant",
            label: "Reprendre un logiciel métier existant",
          },
          { href: "/tarifs", label: "Nos tarifs" },
        ]}
        faqTitle="Propriété du site : vos questions"
        faqItems={faqItems}
        showWhitePaperPromo
      >
        <p className="lead">
          Vous avez payé votre site et vous voulez changer de prestataire.
          Pouvez-vous récupérer le code, le domaine et les comptes ?{" "}
          <strong>
            Vos textes, vos données et les éléments que vous avez fournis sont
            distincts du code du site. Les droits sur ce code dépendent du
            contrat ; les thèmes et extensions peuvent dépendre de licences ;
            les comptes appartiennent souvent à la personne ou à l’organisation
            qui les a ouverts.
          </strong>{" "}
          Avant toute discussion juridique, vérifiez donc que votre entreprise
          contrôle le nom de domaine, l’hébergement, l’administration et les
          sauvegardes.
        </p>

        <InfoBox variant="amber" title="Ce guide n’est pas un avis juridique">
          Le droit applicable dépend du contrat, des personnes qui ont créé le
          site et des éléments concernés. Les références françaises citées
          donnent des points de contrôle généraux. Un avocat en propriété
          intellectuelle doit analyser un litige, rédiger une clause définitive
          ou conduire une procédure.
        </InfoBox>

        <GuideToc
          items={[
            {
              id: "reponse",
              label: "1. La réponse selon chaque élément du site",
            },
            {
              id: "avant-signature",
              label: "2. Ce qu’il faut écrire avant de signer",
            },
            {
              id: "deja-bloque",
              label: "3. Que faire si le site existe déjà ?",
            },
            { id: "droit", label: "4. Le cadre juridique en français courant" },
            {
              id: "plateformes",
              label: "5. Wix, Shopify et autres plateformes",
            },
            {
              id: "composants",
              label: "6. Thèmes, extensions, sous-traitants et IA",
            },
            {
              id: "acces",
              label: "7. Les accès à placer au nom de l’entreprise",
            },
            {
              id: "clause",
              label: "8. Les points à faire vérifier dans le contrat",
            },
            {
              id: "conflit",
              label: "9. Quand le prestataire refuse ou disparaît",
            },
            { id: "decision", label: "10. Le plan d’action" },
            { id: "sources", label: "Sources" },
          ]}
        />

        <h2 id="reponse">
          1. Que possédez-vous réellement dans un site internet ?
        </h2>

        <p>
          Le « site » rassemble plusieurs éléments soumis à des règles
          différentes. Le code source est le texte lisible et modifiable par les
          développeurs ; il ne faut pas le confondre avec les pages affichées
          dans le navigateur.
        </p>

        <GuideTable
          headers={[
            "Élément",
            "Situation la plus fréquente",
            "Contrôle immédiat",
          ]}
          rows={[
            [
              "Textes, photos et logo fournis par l’entreprise",
              "Ils restent liés aux droits que l’entreprise détient déjà",
              "Conserver les fichiers d’origine et les autorisations",
            ],
            [
              "Données clients et formulaires",
              "Elles doivent pouvoir être restituées selon le contrat et les règles applicables",
              "Tester un export lisible",
            ],
            [
              "Code créé pour le projet",
              "Droits ou licence à lire dans le contrat",
              "Repérer cession, droit d’usage et limites",
            ],
            [
              "Thème, police et extensions",
              "Licences de leurs éditeurs",
              "Identifier le compte, la durée et le droit de transfert",
            ],
            [
              "Nom de domaine et comptes techniques",
              "Contrôlés par le titulaire ou l’organisation enregistrée",
              "Vérifier les administrateurs et la facturation",
            ],
          ]}
        />

        <p>
          Être titulaire de droits ne suffit pas toujours pour changer
          facilement de prestataire. Sans les comptes, les sauvegardes et une
          technologie reprenable, la transition peut rester difficile. À
          l’inverse, disposer des bons accès peut permettre une reprise même
          lorsque certains droits doivent encore être clarifiés.
        </p>

        <h2 id="avant-signature">
          2. Avant de signer, faites écrire ce que vous recevrez
        </h2>

        <p>
          Une phrase comme « le site vous appartient » est trop vague. Le devis
          ou le contrat doit distinguer les contenus, le code spécifique, les
          composants sous licence, les comptes et les données.
        </p>

        <ul>
          <li>
            Qui sera titulaire du domaine, de l’hébergement et des comptes
            principaux ?
          </li>
          <li>
            Quels droits sont cédés ou concédés sur le code et les maquettes ?
          </li>
          <li>
            Quels thèmes, polices, images ou extensions restent sous licence ?
          </li>
          <li>
            Le prestataire utilise-t-il des freelances ou d’autres
            sous-traitants ?
          </li>
          <li>Que recevrez-vous à la livraison et à la fin du contrat ?</li>
          <li>
            Sous quel format les contenus et données pourront-ils être exportés
            ?
          </li>
          <li>Quels abonnements devrez-vous conserver ?</li>
        </ul>

        <p>
          Demandez également une garantie selon laquelle le prestataire dispose
          des droits nécessaires sur ce qu’il vous remet. Une agence ne peut pas
          céder des droits qu’elle n’a pas elle-même obtenus de ses
          sous-traitants.
        </p>

        <p>
          Le{" "}
          <Link href="/guides/cahier-des-charges-site-internet">
            cahier des charges du site
          </Link>{" "}
          et le guide pour{" "}
          <Link href="/guides/choisir-son-agence-web">
            choisir une agence web
          </Link>{" "}
          permettent de poser ces questions avant la commande.
        </p>

        <h2 id="deja-bloque">
          3. Le site existe déjà : commencez par sécuriser les accès
        </h2>

        <p>
          Si le contrat ne dit rien ou si la relation se dégrade, ne commencez
          pas par menacer de procédure. Rassemblez d’abord ce qui existe et
          demandez une passation écrite.
        </p>

        <ol>
          <li>
            Retrouver le devis, le contrat, les avenants, factures et licences.
          </li>
          <li>
            Vérifier le titulaire du domaine et les administrateurs des comptes.
          </li>
          <li>
            Demander le code, une sauvegarde et un export des données
            disponibles.
          </li>
          <li>
            Identifier les services externes et leurs dates de renouvellement.
          </li>
          <li>
            Faire examiner la reprise par un technicien qui n’est pas partie au
            conflit.
          </li>
          <li>
            Faire analyser les droits par un avocat si la réponse contractuelle
            reste incertaine.
          </li>
        </ol>

        <InfoBox variant="blue" title="Un message simple à envoyer">
          « Afin de préparer la continuité du site, merci de nous transmettre la
          liste des services utilisés, les accès administrateurs au nom de
          l’entreprise, une sauvegarde récente, l’export des données et la copie
          du code ou des éléments prévus au contrat. Merci d’indiquer également
          les licences qui ne peuvent pas être transférées et les abonnements à
          renouveler. »
        </InfoBox>

        <p>
          Notre guide sur la{" "}
          <Link href="/guides/reprendre-logiciel-metier-existant">
            reprise d’un logiciel existant
          </Link>{" "}
          explique comment tester une sauvegarde et une première mise en ligne
          avant d’accepter une maintenance normale.
        </p>

        <h2 id="droit">4. Que dit le droit français sur le code ?</h2>

        <p>
          L’article L111-1 du code de la propriété intellectuelle indique
          notamment que le contrat de louage d’ouvrage ou de service ne retire
          pas, à lui seul, ses droits à l’auteur. Le simple paiement d’une
          commande ne suffit donc pas à déduire une cession complète de tous les
          droits.
        </p>

        <p>
          L’article L131-3 prévoit un formalisme pour la transmission des droits
          d’auteur : les droits transmis doivent être mentionnés distinctement
          et leur exploitation délimitée quant à son étendue, sa destination,
          son lieu et sa durée. L’article L122-7 distingue également les
          différents droits. Une formule générale mérite donc une vérification
          juridique.
        </p>

        <p>
          Pour les logiciels créés par un salarié dans l’exercice de ses
          fonctions, l’article L113-9 prévoit un régime particulier au bénéfice
          de l’employeur, sauf stipulation contraire. Ce régime ne s’étend pas
          automatiquement au freelance ou au prestataire indépendant.
        </p>

        <p>
          Les données personnelles suivent encore une autre logique. Lorsque le
          prestataire agit comme sous-traitant,{" "}
          <a
            href="https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A32016R0679"
            target="_blank"
            rel="noopener noreferrer"
          >
            l’article 28 du RGPD
          </a>{" "}
          prévoit notamment, au choix du responsable du traitement, la
          restitution ou la suppression des données à la fin de la prestation.
          Cette obligation ne règle pas, à elle seule, la propriété
          intellectuelle du code.
        </p>

        <h2 id="plateformes">
          5. Que pouvez-vous récupérer si vous quittez Wix ou Shopify ?
        </h2>

        <p>
          Avec une plateforme en ligne, vous utilisez le logiciel de l’éditeur.
          Il n’existe pas de code complet de la plateforme à vous céder. Il faut
          plutôt demander : « Quelles informations puis-je exporter, et que
          faudra-t-il reconstruire si je pars ? »
        </p>

        <GuideTable
          headers={["À vérifier", "Pourquoi", "Exemple de réponse attendue"]}
          rows={[
            [
              "Contenus et produits",
              "Préparer une migration",
              "Fichier d’export et champs disponibles",
            ],
            [
              "Clients et commandes",
              "Conserver l’historique utile",
              "Format, limites et données exclues",
            ],
            [
              "Design et pages",
              "Évaluer la reconstruction",
              "Éléments non exportables clairement nommés",
            ],
            [
              "Nom de domaine",
              "Conserver l’adresse du site",
              "Compte au nom de l’entreprise et transfert possible",
            ],
            [
              "Applications",
              "Éviter les fonctions oubliées",
              "Liste, coût et données propres à chaque application",
            ],
          ]}
        />

        <p>
          Wix documente que le site complet ne peut pas être hébergé ailleurs.
          Shopify fournit des exports de données, mais le thème, les
          applications et leurs réglages demandent une analyse séparée. Les
          conditions évoluent : consultez les documentations officielles au
          moment de décider.
        </p>

        <h2 id="composants">
          6. Les licences peuvent limiter ce que le prestataire vous cède
        </h2>

        <p>
          Un site contient souvent des éléments que le prestataire n’a pas créés
          : thème, bibliothèque de code, police, photo, icône, vidéo ou
          extension. Leur usage dépend de leurs licences. Le contrat doit
          identifier les composants importants, leur coût et la possibilité de
          les transférer à votre compte.
        </p>

        <p>
          La même prudence s’applique à la sous-traitance. Le code écrit par un
          salarié suit le régime particulier de l’article L113-9. Pour un
          freelance ou un sous-traitant, l’agence doit avoir obtenu les droits
          nécessaires avant de pouvoir vous les transmettre.
        </p>

        <h3>Et si une intelligence artificielle a participé au code ?</h3>

        <p>
          La protection du code généré avec une intelligence artificielle reste
          un sujet en évolution. Le droit français protège une œuvre originale
          et l’analyse dépend de l’apport humain. Aucune juridiction française
          n’a tranché tous les cas à notre connaissance. Le rapport américain
          cité en sources concerne le droit des États-Unis et ne constitue pas
          une règle applicable en France.
        </p>

        <p>
          Dans le contrat, demandez surtout au prestataire de garantir qu’il
          peut utiliser et livrer le résultat, qu’il respecte les licences et
          qu’il documente les composants importants. N’essayez pas de résoudre
          cette incertitude par une phrase commerciale générale.
        </p>

        <h2 id="acces">7. Les accès que votre entreprise doit contrôler</h2>

        <p>
          Placez les comptes structurants dans une organisation au nom de
          l’entreprise, avec des accès nominatifs et au moins un administrateur
          de secours. Évitez les mots de passe partagés par email.
        </p>

        <ul>
          <li>nom de domaine et bureau d’enregistrement ;</li>
          <li>hébergement, cloud ou plateforme du site ;</li>
          <li>dépôt contenant le code et historique des versions ;</li>
          <li>administration du site et gestion des utilisateurs ;</li>
          <li>base de données, fichiers et sauvegardes ;</li>
          <li>emails envoyés par le site ;</li>
          <li>mesure d’audience et outils de référencement ;</li>
          <li>gestion des cookies et consentements ;</li>
          <li>paiement, facturation ou boutique ;</li>
          <li>services de cartes, vidéo, recherche ou formulaires ;</li>
          <li>comptes des thèmes, extensions et polices ;</li>
          <li>documentation de mise en ligne ;</li>
          <li>contacts d’urgence et facturation des services ;</li>
          <li>exports récents des contenus et données.</li>
        </ul>

        <p>
          Posséder tous les mots de passe ne suffit pas : testez les connexions,
          ajoutez un administrateur interne et vérifiez qu’une sauvegarde peut
          être restaurée. Le nom de domaine mérite une priorité particulière. Le
          guide de l’AFNIC rappelle que le titulaire déclaré du .fr détient les
          droits liés au domaine.
        </p>

        <h2 id="clause">
          8. Les points à faire vérifier dans la clause de droits
        </h2>

        <p>
          N’utilisez pas un modèle copié comme clause définitive. Demandez à
          votre conseil de vérifier au minimum :
        </p>

        <ul>
          <li>
            les créations exactement concernées par la cession ou la licence ;
          </li>
          <li>
            les droits de reproduction, représentation, adaptation et
            modification ;
          </li>
          <li>
            la destination, le territoire, la durée et les éventuelles
            exclusivités ;
          </li>
          <li>la rémunération prévue pour cette transmission ;</li>
          <li>les éléments tiers expressément exclus et leurs licences ;</li>
          <li>
            la garantie concernant salariés, freelances et sous-traitants ;
          </li>
          <li>la remise du code, de la documentation et des accès ;</li>
          <li>les conditions de maintenance et de sortie.</li>
        </ul>

        <p>
          Il n’existe pas de barème public fiable pour racheter les droits après
          coup. Le prix dépend du contrat, des droits demandés et de la
          négociation. Régler ces points avant la création coûte généralement
          moins de temps et de tension que les découvrir au moment du départ.
        </p>

        <h2 id="conflit">
          9. Que faire si le prestataire refuse ou disparaît ?
        </h2>

        <p>
          Conservez les échanges, contrats et factures. Demandez une réponse
          précise sur chaque élément : code, domaine, données, licences et
          comptes. Faites analyser séparément la continuité technique et les
          droits juridiques. Une nouvelle équipe peut parfois reprendre le site
          sans attendre la fin d’un désaccord, mais elle ne doit pas utiliser
          des éléments dont les droits sont incertains sans conseil.
        </p>

        <p>
          La remise du code dépend du contrat, des droits prévus et de l’usage
          attendu. Ne transformez pas un exemple de litige en règle générale :
          faites lire les pièces propres à votre projet avant d’utiliser ou de
          modifier un élément contesté.
        </p>

        <h3>Lorsque le site ou le logiciel est indispensable à l’activité</h3>

        <p>
          Un dépôt du code chez un tiers de confiance, appelé entiercement, peut
          être étudié. L’Agence pour la protection des programmes publiait en
          2024 des tarifs comprenant adhésion, dépôt et accord d’entiercement.
          Ce dispositif est souvent disproportionné pour un petit site vitrine ;
          il peut devenir pertinent pour une application métier critique. Faites
          vérifier les conditions qui déclenchent réellement la remise.
        </p>

        <GuideInlineCTA
          title="Vous devez préparer un changement de prestataire ?"
          description="Nous pouvons examiner les accès, les sauvegardes et la possibilité technique de reprendre le site. Vous obtenez la liste des éléments disponibles, des risques de continuité et des points juridiques à faire vérifier séparément."
          tags={[
            "Accès et sauvegardes contrôlés",
            "Reprise technique distinguée des droits",
            "Aucune conclusion juridique sans avocat",
          ]}
        />

        <h2 id="decision">10. Le plan d’action avant ou après la création</h2>

        <h3>Si vous n’avez pas encore signé</h3>

        <ol>
          <li>
            Placer le domaine et les comptes principaux au nom de l’entreprise.
          </li>
          <li>
            Lister les créations spécifiques et les composants sous licence.
          </li>
          <li>
            Faire préciser les droits, les formats remis et la sous-traitance.
          </li>
          <li>Prévoir les sauvegardes, la documentation et la sortie.</li>
          <li>
            Faire relire la clause définitive lorsque l’enjeu le justifie.
          </li>
        </ol>

        <h3>Si vous êtes déjà bloqué</h3>

        <ol>
          <li>Rassembler contrat, factures, échanges et accès existants.</li>
          <li>Sécuriser le domaine, les comptes et un export des données.</li>
          <li>
            Faire tester le code et une sauvegarde par une nouvelle équipe.
          </li>
          <li>
            Demander par écrit les éléments manquants et les licences exclues.
          </li>
          <li>Consulter un avocat avant toute procédure ou usage contesté.</li>
        </ol>

        <InfoBox variant="emerald" title="La question finale à poser">
          « Si notre collaboration s’arrête demain, que pouvons-nous remettre à
          une nouvelle équipe, dans quel format, avec quels droits et quels
          coûts récurrents ? » Une réponse écrite avant la commande protège
          mieux qu’une promesse de propriété formulée sans détail.
        </InfoBox>

        <h2 id="sources">Sources</h2>
        <p className="text-sm">
          Textes de loi (Légifrance) :{" "}
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278868"
            target="_blank"
            rel="noopener noreferrer"
          >
            art. L111-1 CPI
          </a>
          ,{" "}
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958"
            target="_blank"
            rel="noopener noreferrer"
          >
            art. L131-3 CPI
          </a>
          ,{" "}
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278922"
            target="_blank"
            rel="noopener noreferrer"
          >
            art. L122-7 CPI
          </a>
          ,{" "}
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039279818"
            target="_blank"
            rel="noopener noreferrer"
          >
            art. L113-9 CPI
          </a>
          . RGPD :{" "}
          <a
            href="https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A32016R0679"
            target="_blank"
            rel="noopener noreferrer"
          >
            règlement (UE) 2016/679, article 28
          </a>
          . Nom de domaine :{" "}
          <a
            href="https://www.afnic.fr/wp-media/uploads/2024/07/Afnic-Guide-pratique-du-Titulaire.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            AFNIC, Guide pratique du titulaire d&apos;un nom de domaine en .fr,
            édition 2024
          </a>
          . Entiercement :{" "}
          <a
            href="https://www.app.asso.fr/wp-content/uploads/APP-price-legal-entities.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            APP, grille tarifaire personnes morales, applicable au 17 juin 2024
          </a>
          . Plateformes :{" "}
          <a
            href="https://support.wix.com/en/article/exporting-or-embedding-your-wix-site-elsewhere"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wix Help Center
          </a>
          . Shopify documente séparément l’export des{" "}
          <a
            href="https://help.shopify.com/fr/manual/products/import-export/using-csv"
            target="_blank"
            rel="noopener noreferrer"
          >
            produits
          </a>
          , des{" "}
          <a
            href="https://help.shopify.com/fr/manual/fulfillment/managing-orders/exporting-orders"
            target="_blank"
            rel="noopener noreferrer"
          >
            commandes
          </a>{" "}
          et des{" "}
          <a
            href="https://help.shopify.com/fr/manual/customers/import-export-customers"
            target="_blank"
            rel="noopener noreferrer"
          >
            clients
          </a>
          . Code généré :{" "}
          <a
            href="https://www.copyright.gov/newsnet/2025/1060.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            U.S. Copyright Office, « Copyright and Artificial Intelligence, Part
            2 », 29 janvier 2025
          </a>
          .
        </p>
        <p className="text-sm">
          <strong>
            Ce guide est une information générale, pas un conseil juridique.
          </strong>{" "}
          Il ne remplace pas l&apos;analyse d&apos;un avocat en propriété
          intellectuelle, que nous vous recommandons pour la rédaction
          définitive d&apos;une clause comme pour toute procédure. La
          protégeabilité du code généré par une IA n&apos;est tranchée par
          aucune juridiction française à notre connaissance ; le rapport du
          Copyright Office relève du droit américain et n&apos;est cité
          qu&apos;à titre d&apos;indice de convergence. La grille de l&apos;APP
          peut avoir changé depuis sa date d&apos;application indiquée.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
