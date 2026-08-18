import type { Metadata } from "next";
import Link from "next/link";
import { GuideLayout } from "@/components/guides/guide-layout";
import {
  GuideInlineCTA,
  GuideTable,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { SiteOwnershipExitDossier } from "@/components/guides/SiteOwnershipExitDossier";
import { getGuide, guidePath, guideUrl, formatGuideDate } from "@/lib/guides";
import { OG_BASE, SITE_URL } from "@/lib/seo";

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
      "Architecture d’applications web",
      "Audit technique de sites internet",
      "Réversibilité technique",
      "Migration de site internet",
      "Maintenabilité logicielle",
      "Sécurité des applications web",
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
    question: "J’ai payé mon site : son code m’appartient-il ?",
    answer:
      "Pas automatiquement. Le paiement, la remise matérielle du code et les droits permettant de l’utiliser, de le modifier ou d’en confier la maintenance à un tiers sont trois questions différentes. Il faut lire le contrat et identifier les éléments réellement créés pour le projet.",
  },
  {
    question: "Quelle est la première chose à récupérer ?",
    answer:
      "Sécurisez d’abord le nom de domaine, le compte d’hébergement ou de plateforme, un administrateur interne, les sauvegardes et un export des données. Ne retirez pas les accès de l’ancien prestataire avant d’avoir testé une copie et préparé un retour arrière.",
  },
  {
    question: "Le dépôt Git suffit-il pour changer de prestataire ?",
    answer:
      "Non. Il faut aussi l’historique utile, les dépendances, la documentation, les variables hors secrets, la base, les fichiers, les licences et une procédure de build et de déploiement testée depuis un environnement propre.",
  },
  {
    question: "Que faire si le domaine est au nom de l’agence ?",
    answer:
      "Pour un .fr, vérifiez la personne enregistrée comme titulaire et demandez, si nécessaire, une transmission ou un changement de titulaire via le bureau d’enregistrement. Si votre société est déjà titulaire et veut seulement changer de registrar, il s’agit d’un transfert distinct, généralement sécurisé par l’AUTH_INFO.",
  },
  {
    question: "Peut-on quitter Wix, Shopify, Webflow ou Squarespace ?",
    answer:
      "Oui, mais pas avec le même niveau de portabilité. Un transfert vers un autre compte de la même plateforme peut conserver davantage d’éléments qu’une sortie vers une technologie différente. Les exports excluent souvent le design, certaines données, les applications, les paiements ou des fonctions hébergées.",
  },
  {
    question: "Le code créé par un salarié appartient-il à l’employeur ?",
    answer:
      "L’article L113-9 du code de la propriété intellectuelle prévoit un régime particulier pour les droits patrimoniaux sur les logiciels et leur documentation créés par des employés dans l’exercice de leurs fonctions ou d’après les instructions de l’employeur, sauf dispositions ou stipulations contraires. Ce régime ne s’applique pas automatiquement à un freelance.",
  },
  {
    question: "Une licence peut-elle suffire sans cession complète ?",
    answer:
      "Parfois oui. Une licence précisément rédigée peut autoriser l’exploitation, la modification et la maintenance par un tiers, tout en laissant au prestataire son socle préexistant. Sa portée, sa durée, son territoire, son exclusivité et ses conditions doivent être analysés dans le contrat.",
  },
  {
    question: "Le RGPD oblige-t-il l’agence à rendre toutes les données ?",
    answer:
      "L’article 28 encadre la sous-traitance de données personnelles et prévoit notamment, au choix du responsable du traitement, leur renvoi ou leur suppression en fin de prestation, sous réserve du droit applicable. Il ne crée pas une propriété des données ni un export techniquement exploitable : formats, pièces jointes, historique et test d’import doivent être prévus séparément.",
  },
  {
    question: "L’entiercement garantit-il que le logiciel pourra repartir ?",
    answer:
      "Non, pas à lui seul. Le contrat ou la clause d’accès doit définir les éléments déposés, leur fréquence de mise à jour, leur contrôle, les événements de libération et les droits accordés. Une équipe tierce doit encore pouvoir reconstruire et utiliser l’ensemble remis.",
  },
  {
    question: "Combien coûte une cession de droits après coup ?",
    answer:
      "Il n’existe pas de barème universel. Demandez un chiffrage séparé du prix des droits, de l’audit du code remis, des licences, de la migration, du temps interne, de l’interruption et de la maintenance. Une procédure juridique doit rester non déterminée tant qu’un avocat n’a pas cadré le dossier et son devis.",
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
        heroDescription="Vous avez payé le site, mais pouvez-vous réellement l’exploiter, le faire maintenir et partir demain ? Distinguez les droits, les comptes, les licences et la réversibilité, puis testez 14 accès, 8 preuves et trois coûts de sortie."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          {
            number: "01",
            title: "4 conditions observables",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "14 accès + 8 preuves",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "TCO 12, 36 et 60 mois",
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
            label: "Changer d’agence sans casser le site",
          },
          {
            href: "/guides/audit-technique-avant-reprendre-site",
            label: "Audit technique avant reprise",
          },
          {
            href: "/guides/cahier-des-charges-site-internet",
            label: "Cahier des charges",
          },
          {
            href: "/guides/choisir-son-agence-web",
            label: "Choisir son agence web",
          },
          {
            href: "/guides/reprendre-logiciel-metier-existant",
            label: "Reprendre un logiciel métier",
          },
          {
            href: "/guides/contrat-tma-application",
            label: "Contrat de maintenance applicative",
          },
          { href: "/tarifs", label: "Nos tarifs" },
        ]}
        faqTitle="Propriété et réversibilité du site : vos questions"
        faqItems={faqItems}
        showWhitePaperPromo
      >
        <p className="lead">
          Vous ne possédez pas un site internet comme un objet unique.{" "}
          <strong>
            Votre entreprise est réellement libre si elle contrôle les comptes
            structurants, dispose des droits nécessaires, peut renouveler ou
            remplacer les licences et sait restaurer ailleurs ce qui est
            exporté.
          </strong>{" "}
          Le paiement d’une facture, un mot de passe administrateur ou une
          phrase comme « le site vous appartient » ne démontrent pas ces quatre
          conditions.
        </p>

        <InfoBox variant="amber" title="Ce guide n’est pas un avis juridique">
          Le droit dépend du contrat, des créateurs, des éléments du site et du
          pays applicable. Ce guide organise les vérifications d’un dirigeant ;
          il ne tranche ni une propriété intellectuelle ni un litige. Faites
          analyser les pièces et rédiger la clause définitive par un avocat en
          propriété intellectuelle. Faites tester la reprise par une équipe
          technique qui n’a pas produit le site.
        </InfoBox>

        <GuideToc
          items={[
            { id: "verdict", label: "1. Ce qu’il faut contrôler d’abord" },
            { id: "notions", label: "2. Les quatre notions à séparer" },
            { id: "diagnostic", label: "3. Le dossier de réversibilité" },
            { id: "cas", label: "4. Le cas chiffré Alp’Isolation" },
            { id: "droit", label: "5. Le droit français en langage courant" },
            { id: "clause", label: "6. Le modèle à faire relire" },
            { id: "plateformes", label: "7. Wix, Shopify, Webflow et autres" },
            { id: "chaine", label: "8. Licences, sous-traitants et IA" },
            { id: "preuve", label: "9. Prouver la continuité technique" },
            { id: "sortie", label: "10. Quatre scénarios de sortie" },
            { id: "entiercement", label: "11. Quand utiliser l’entiercement" },
            {
              id: "international",
              label: "12. Le meilleur des méthodes étrangères",
            },
            { id: "plan", label: "13. Le plan d’action" },
            { id: "sources", label: "Sources vérifiées" },
          ]}
        />

        <h2 id="verdict">1. Ce qu’il faut contrôler d’abord</h2>

        <p>
          Posez la question élément par élément. Le premier objectif n’est pas
          de prononcer le mot « propriétaire », mais de savoir ce que
          l’entreprise peut continuer à utiliser, faire modifier, transférer ou
          reconstruire si la relation s’arrête.
        </p>

        <GuideTable
          headers={[
            "Élément",
            "Ce qu’il faut contrôler",
            "Ce que cela ne prouve pas",
          ]}
          rows={[
            [
              "Textes, photos, vidéos et logo",
              "Fichiers d’origine, auteur, autorisations et droits détenus",
              "Le droit sur le code, le thème ou la mise en page",
            ],
            [
              "Code créé pour le projet",
              "Copie complète, historique, build et droits d’usage/modification",
              "Les droits sur le socle préexistant et les composants tiers",
            ],
            [
              "Données et contenus du CMS",
              "Export daté, schéma, pièces jointes, volumes et test d’import",
              "Une « propriété des données » au sens du RGPD",
            ],
            [
              "Nom de domaine",
              "Titulaire ou registrant, compte, récupération, MFA et renouvellement",
              "La propriété du site, de la marque ou des contenus",
            ],
            [
              "Compte Wix, Shopify, Webflow, HubSpot ou Squarespace",
              "Propriétaire du compte, facturation et transfert interne possible",
              "La possibilité de réhéberger le même site hors plateforme",
            ],
            [
              "Thèmes, polices, images, extensions et bibliothèques",
              "Licence, titulaire, version, coût, transfert et remplacement",
              "Une cession automatique avec le développement spécifique",
            ],
            [
              "Sauvegarde",
              "Restauration isolée et parcours métier testés",
              "Qu’elle est complète, récente ou juridiquement exploitable",
            ],
          ]}
        />

        <InfoBox variant="emerald" title="Le test qui décide">
          Demandez à une nouvelle équipe de se connecter avec un compte interne,
          cloner ou transférer ce qui doit l’être, restaurer une copie, envoyer
          un formulaire test et préparer un retour arrière. Tant que ce test n’a
          pas réussi, la réversibilité est déclarée — pas prouvée.
        </InfoBox>

        <h3>Vert, orange ou rouge ?</h3>

        <ul>
          <li>
            <strong>Vert documentaire :</strong> comptes internes, droits
            identifiés, licences à jour, export rapproché et restauration tierce
            réussie. Cela reste une preuve technique, pas un avis juridique.
          </li>
          <li>
            <strong>Orange :</strong> les accès existent, mais l’agence possède
            encore la facturation, les sauvegardes n’ont jamais été restaurées
            ou les droits sont décrits par une formule vague.
          </li>
          <li>
            <strong>Rouge :</strong> domaine, plateforme, dépôt, base ou
            paiements sont inaccessibles ; un test de build ou de restauration
            échoue ; la chaîne de sous-traitance n’est pas démontrée.
          </li>
        </ul>

        <h2 id="notions">2. Propriété, titularité, contrôle et portabilité</h2>

        <p>
          Ces mots répondent à des questions différentes. Les confondre produit
          des contrats rassurants sur le papier et des sorties impossibles en
          pratique.
        </p>

        <GuideTable
          headers={["Notion", "Question utile", "Preuve attendue"]}
          rows={[
            [
              "Droits d’exploitation",
              "Qui peut utiliser, reproduire, adapter, modifier ou faire maintenir l’élément ?",
              "Contrat signé et annexe identifiant œuvre, droits, étendue et limites",
            ],
            [
              "Titularité ou rôle propriétaire",
              "Quelle personne est enregistrée comme titulaire du domaine ou propriétaire du compte ?",
              "Interface du registre ou du fournisseur, identité et coordonnées à jour",
            ],
            [
              "Contrôle opérationnel",
              "L’entreprise peut-elle se connecter, payer, renouveler, inviter et révoquer ?",
              "Connexion propre, MFA, secours, récupération et test de rôle",
            ],
            [
              "Portabilité",
              "Que peut-on déplacer ailleurs sans reconstruire ?",
              "Export, limites officielles, test d’import, restauration et coût de remplacement",
            ],
          ]}
        />

        <p>
          Une entreprise peut avoir des droits étendus sur un code sans pouvoir
          le redéployer faute de secrets, de base ou de documentation. Elle peut
          aussi contrôler un compte SaaS sans pouvoir exporter les fonctions
          propriétaires de la plateforme. Enfin, elle peut recevoir tous les
          fichiers sans avoir le droit de les modifier ou de les confier à un
          tiers.
        </p>

        <h3>Remise du code et droits sur le code : deux livrables</h3>

        <GuideTable
          headers={["Question", "Livrable matériel", "Livrable contractuel"]}
          rows={[
            [
              "Avez-vous le code ?",
              "Dépôt, branches, historique, tags et version livrée",
              "Périmètre exact du code concerné",
            ],
            [
              "Pouvez-vous l’utiliser ?",
              "Build, dépendances, base, fichiers et configuration",
              "Droits d’exécution et d’exploitation nécessaires",
            ],
            [
              "Pouvez-vous le modifier ?",
              "Documentation, tests et environnement reproductible",
              "Droits d’adaptation/modification et limites",
            ],
            [
              "Pouvez-vous changer d’équipe ?",
              "Comptes, pipeline, runbook et passation testée",
              "Droit de confier maintenance et évolution à un tiers",
            ],
          ]}
        />

        <h2 id="diagnostic">
          3. Construisez le dossier, pas une checklist décorative
        </h2>

        <p>
          La liste des accès n’a de valeur que si chaque ligne comporte un
          titulaire, un statut, une preuve, une date et une prochaine action. Le
          dossier ci-dessous reste local dans le navigateur. Il ne transmet
          aucune donnée, n’enregistre aucun secret et exporte un fichier texte
          exploitable par votre équipe technique et votre conseil.
        </p>

        <SiteOwnershipExitDossier />

        <InfoBox
          variant="blue"
          title="Ne collez jamais de secret dans le dossier"
        >
          Référencez le coffre, le ticket, la capture ou le rapport interne.
          N’inscrivez ni mot de passe, ni clé API, ni code de transfert, ni
          donnée personnelle. Le fichier exporté est un index de preuves, pas le
          coffre-fort lui-même.
        </InfoBox>

        <h2 id="cas">
          4. Cas fictif : le rachat à 9 000 € est-il vraiment moins cher ?
        </h2>

        <p>
          <strong>Alp’Isolation est un exemple entièrement fictif.</strong> Il
          illustre une méthode ; ce n’est ni un client, ni un tarif de marché,
          ni une estimation juridique. L’entreprise de 11 personnes a payé 21
          600 € HT pour son site en 2023. Celui-ci génère entre 40 et 60
          demandes de devis par mois. L’agence réclame maintenant 9 000 € HT
          pour transmettre des droits ; une autre équipe chiffre une
          reconstruction à 14 500 € HT sur six semaines. Un thème à 79 € HT par
          an reste rattaché au compte de l’agence.
        </p>

        <p>
          Les 21 600 € déjà payés sont un coût passé : ils expliquent le
          contexte, mais ne doivent pas décider à eux seuls de la prochaine
          dépense. Il faut comparer les coûts futurs et la continuité obtenue.
        </p>

        <GuideTable
          headers={[
            "Voie",
            "Coût connu et postes manquants",
            "Décider seulement si",
          ]}
          rows={[
            [
              "Négocier la remise",
              "9 000 € HT demandés, puis audit du code, licences, migration, assistance, maintenance et interruption à chiffrer",
              "Ne payer qu’après inventaire, chaîne de droits et test du matériel remis",
            ],
            [
              "Faire qualifier la voie juridique",
              "ND sans stratégie et devis d’un avocat couvrant actes, intervenants, calendrier, expertise, continuité et aléas",
              "Ne jamais remplacer ND par zéro ni promettre une issue",
            ],
            [
              "Reconstruire",
              "14 500 € HT annoncés, puis dépassement, migration SEO, contenus, données, tests, licences et maintenance à chiffrer",
              "Préparer une bascule et un retour arrière avant de couper l’existant",
            ],
          ]}
        />

        <h3>La formule qui évite le faux choix « 9 000 contre 14 500 »</h3>

        <p>
          <code>
            TCO de sortie = devis + réserve + audit + migration + temps interne
            + marge exposée pendant l’impact + licences et maintenance
          </code>
          . Calculez le même périmètre à 12, 36 et 60 mois. Si un poste manque,
          le total reste non déterminé.
        </p>

        <GuideTable
          headers={["Voie", "TCO brut à 12 / 36 / 60 mois", "Lecture"]}
          rows={[
            [
              "Négocier la remise",
              "19 333 € / 26 691 € / 34 049 €",
              "Exemple fictif : remise, audit, migration, temps interne, licences, maintenance et marge exposée inclus",
            ],
            [
              "Faire qualifier la voie juridique",
              "ND / ND / ND",
              "Aucun montant tant qu’un avocat n’a pas défini la stratégie et fourni un devis positif et daté",
            ],
            [
              "Reconstruire",
              "32 910 € / 43 310 € / 53 710 €",
              "Exemple fictif : réserve de 25 %, migration, temps interne, licences, maintenance et impact commercial inclus",
            ],
          ]}
        />

        <p className="text-sm">
          Ces totaux sont arrondis à l’euro et reproduisent exactement l’exemple
          chargé dans l’outil. Ils ne comparent pas le scénario au coût du
          contrat actuel et n’intègrent ni inflation, ni fiscalité, ni valeur
          temps de l’argent.
        </p>

        <p>
          Avec 50 demandes mensuelles, une baisse de 20 % pendant deux mois
          expose 20 demandes : <code>50 × 20 % × 2 = 20</code>. Ce ne sont pas
          automatiquement 20 ventes perdues. Pour convertir ce volume en marge,
          renseignez le taux de transformation observé et la marge contributive
          par vente — pas le chiffre d’affaires.
        </p>

        <GuideTable
          headers={["Scénario", "Impact commercial", "Technique et licences"]}
          rows={[
            [
              "Bas",
              "0 semaine ; baisse des demandes 0 %",
              "Audit 0 jour ; dépassement 0 % ; thème transféré",
            ],
            [
              "Central",
              "2 semaines ; baisse des demandes 20 %",
              "Audit 3 jours ; dépassement 25 % ; thème racheté",
            ],
            [
              "Prudent",
              "6 semaines ; baisse des demandes 50 %",
              "Audit 10 jours ; dépassement 50 % ; thème remplacé",
            ],
          ]}
        />

        <InfoBox
          variant="amber"
          title="Le moins cher n’est pas toujours reprenable"
        >
          Une remise à 9 000 € peut être une mauvaise affaire si le dépôt ne
          compile pas, si les freelances ne sont pas couverts ou si les licences
          ne suivent pas. Une reconstruction à 14 500 € peut aussi déraper si
          l’équipe oublie le SEO, les formulaires, les données, les redirections
          et la recette commerciale.
        </InfoBox>

        <h2 id="droit">
          5. Le cadre français, sans transformer le guide en consultation
        </h2>

        <p>
          Un site mélange souvent plusieurs œuvres, un logiciel, une base de
          données, des données personnelles, un domaine, des contrats de
          services et des licences. Une règle vraie pour le code d’un salarié ne
          répond pas automatiquement au cas d’une photo, d’une maquette ou d’un
          thème acheté.
        </p>

        <h3>Le paiement ne transfère pas, à lui seul, tous les droits</h3>

        <p>
          L’
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042814694"
            target="_blank"
            rel="noopener noreferrer"
          >
            article L111-1 du code de la propriété intellectuelle
          </a>{" "}
          pose le principe du droit de l’auteur et précise notamment que le
          contrat de louage d’ouvrage ou de service n’emporte pas, par lui-même,
          dérogation à ses droits. Une facture réglée prouve un paiement ; elle
          ne suffit pas à déduire une cession exhaustive.
        </p>

        <p>
          Pour le logiciel, l’
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278919"
            target="_blank"
            rel="noopener noreferrer"
          >
            article L122-6
          </a>{" "}
          vise notamment la reproduction, l’adaptation, l’arrangement, la
          modification et la mise sur le marché. L’
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278920"
            target="_blank"
            rel="noopener noreferrer"
          >
            article L122-6-1
          </a>{" "}
          organise certaines possibilités au bénéfice de la personne ayant le
          droit d’utiliser le logiciel — utilisation conforme à sa destination,
          correction sous réserves, copie de sauvegarde, observation ou test, et
          interopérabilité dans des conditions strictes. Ces textes ne
          remplacent pas l’analyse du contrat ni la remise d’un ensemble
          techniquement exploitable.
        </p>

        <h3>La cession doit identifier ce qu’elle couvre</h3>

        <p>
          L’
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958"
            target="_blank"
            rel="noopener noreferrer"
          >
            article L131-3
          </a>{" "}
          demande que chaque droit transmis soit mentionné distinctement et que
          son exploitation soit délimitée quant à son étendue, sa destination,
          son lieu et sa durée. La synthèse de{" "}
          <a
            href="https://entreprendre.service-public.gouv.fr/vosdroits/F22667"
            target="_blank"
            rel="noopener noreferrer"
          >
            Service Public Entreprendre
          </a>{" "}
          rappelle aussi l’œuvre exacte, les droits concernés, le territoire, la
          durée, le prix et l’exclusivité ou non.
        </p>

        <p>
          L’
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278955"
            target="_blank"
            rel="noopener noreferrer"
          >
            article L131-1
          </a>{" "}
          dispose que la cession globale des œuvres futures est nulle. Une
          formule vague couvrant « tous les développements et toutes les
          versions futures » ne remplace donc pas l’identification des lots,
          versions, bons de commande ou avenants à faire analyser. L’
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049579339"
            target="_blank"
            rel="noopener noreferrer"
          >
            article L131-4
          </a>{" "}
          traite la rémunération et prévoit notamment un cas de forfait pour la
          cession portant sur un logiciel ; les autres créations du site peuvent
          appeler une analyse différente.
        </p>

        <h3>
          Salarié, freelance et sous-traitant ne suivent pas le même raccourci
        </h3>

        <p>
          L’
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039279818"
            target="_blank"
            rel="noopener noreferrer"
          >
            article L113-9
          </a>{" "}
          prévoit, sauf dispositions statutaires ou stipulations contraires, la
          dévolution à l’employeur des droits patrimoniaux sur les logiciels et
          leur documentation créés par des employés dans l’exercice de leurs
          fonctions ou d’après ses instructions. Ce régime ne s’applique pas
          automatiquement au freelance ou au sous-traitant. L’agence doit être
          capable de démontrer ce qu’elle a obtenu avant de prétendre le
          transmettre.
        </p>

        <h3>Le domaine : distinguer titulaire et bureau d’enregistrement</h3>

        <p>
          Pour un domaine en .fr, l’AFNIC distingue le titulaire — qui dispose
          des droits et responsabilités associés au nom enregistré — du contact
          administratif et du bureau d’enregistrement. Elle présente le domaine
          comme un droit exclusif d’utilisation renouvelable, pas comme la
          propriété de tout le site.
        </p>

        <ul>
          <li>
            Si l’agence est enregistrée comme titulaire, demandez une
            transmission ou un changement de titulaire par l’intermédiaire du
            bureau d’enregistrement.
          </li>
          <li>
            Si votre société est déjà titulaire mais veut changer de bureau
            d’enregistrement, demandez un transfert ; l’AUTH_INFO sécurise
            l’opération et doit rester confidentiel.
          </li>
          <li>
            Dans les deux cas, vérifiez les coordonnées de notification, la
            récupération, la MFA, le renouvellement et la facturation.
          </li>
        </ul>

        <p>
          Consultez la{" "}
          <a
            href="https://www.afnic.fr/observatoire-ressources/documents/charte-nommage/"
            target="_blank"
            rel="noopener noreferrer"
          >
            charte AFNIC en vigueur
          </a>
          , sa{" "}
          <a
            href="https://www.afnic.fr/noms-de-domaine/faq/"
            target="_blank"
            rel="noopener noreferrer"
          >
            FAQ
          </a>{" "}
          et sa page de{" "}
          <a
            href="https://www.afnic.fr/noms-de-domaine/tout-savoir/gerer-son-nom-de-domaine/"
            target="_blank"
            rel="noopener noreferrer"
          >
            gestion du titulaire
          </a>{" "}
          pour un .fr ; les autres extensions et registrars ont leurs propres
          procédures.
        </p>

        <h3>Le RGPD n’est pas un droit de propriété sur les données</h3>

        <p>
          Lorsque le prestataire agit comme sous-traitant, l’
          <a
            href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4#Article28"
            target="_blank"
            rel="noopener noreferrer"
          >
            article 28 du RGPD publié par la CNIL
          </a>{" "}
          encadre notamment le contrat, les instructions documentées, la
          confidentialité, la sécurité, les sous-traitants ultérieurs,
          l’assistance, les informations et audits. À la fin de la prestation,
          il prévoit, au choix du responsable du traitement, le renvoi ou la
          suppression des données personnelles et la destruction des copies,
          sauf obligation légale de conservation.
        </p>

        <p>
          Pour un sous-traitant ultérieur, l’article 28 prévoit une autorisation
          écrite préalable, spécifique ou générale. En cas d’autorisation
          générale, le sous-traitant initial doit informer le responsable du
          traitement de tout ajout ou remplacement envisagé afin de lui
          permettre d’émettre des objections. Les mêmes obligations de
          protection doivent être imposées par contrat au sous-traitant
          ultérieur ; si celui-ci manque à ses obligations, le sous-traitant
          initial demeure pleinement responsable envers le responsable du
          traitement. La{" "}
          <a
            href="https://eur-lex.europa.eu/eli/reg/2016/679/oj?locale=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            version officielle du RGPD sur EUR-Lex
          </a>{" "}
          reste la source primaire à confronter au DPA et à la liste réelle des
          intervenants.
        </p>

        <p>
          Cela ne garantit ni un fichier complet ni un import réussi. Le contrat
          de sortie doit préciser formats, relations, médias, historiques,
          sauvegardes, délais, contrôle des volumes, purge des copies et preuve
          de suppression. Utilisez les{" "}
          <a
            href="https://www.cnil.fr/fr/sous-traitance-exemple-de-clauses"
            target="_blank"
            rel="noopener noreferrer"
          >
            clauses de référence de la CNIL
          </a>{" "}
          comme point de travail, puis adaptez-les au traitement réel.
        </p>

        <h3>
          Data Act : un cadre européen de changement pour certains services
          cloud et SaaS
        </h3>

        <p>
          Le{" "}
          <a
            href="https://eur-lex.europa.eu/eli/reg/2023/2854/oj?locale=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            règlement (UE) 2023/2854, dit Data Act
          </a>
          , est applicable depuis le 12 septembre 2025. Son chapitre VI encadre
          le changement de fournisseur de « services de traitement de données ».
          Il vise notamment la suppression d’obstacles commerciaux, techniques,
          contractuels et organisationnels, la portabilité des données
          exportables et actifs numériques, un contrat de changement écrit et la
          continuité pendant la transition. L’article 25 prévoit en principe une
          période transitoire maximale de 30 jours, avec un régime lorsque ce
          délai est techniquement irréalisable. Jusqu’au 12 janvier 2027,
          l’article 29 permet encore des frais de changement réduits, plafonnés
          aux coûts directement liés au changement.
        </p>

        <InfoBox
          variant="amber"
          title="Le Data Act n’est pas une cession du site ou du code"
        >
          Vérifiez d’abord si le service et le contrat entrent dans son champ.
          Le règlement contient des limites et un régime spécifique pour
          certains services développés sur mesure ou fournis à titre d’essai. Il
          n’oblige pas le fournisseur à transmettre un actif protégé qui n’est
          pas exportable et ne remplace ni la cession de droits, ni l’inventaire
          des licences, ni un test de reconstruction. Faites qualifier son
          application au contrat concerné.
        </InfoBox>

        <h2 id="clause">
          6. Un modèle de travail à faire relire — jamais à signer tel quel
        </h2>

        <InfoBox
          variant="amber"
          title="Pourquoi ce n’est pas une clause prête à l’emploi"
        >
          Le site peut contenir plusieurs œuvres, un logiciel, une base, des
          données personnelles et des services étrangers. Le texte ci-dessous
          est un plan annoté : remplacez chaque crochet, joignez l’inventaire et
          faites valider l’ensemble par un avocat. Une clause générique peut
          être plus dangereuse qu’une absence assumée.
        </InfoBox>

        <GuideTable
          headers={[
            "Bloc à rédiger",
            "Projet de formulation à personnaliser",
            "Preuve à annexer",
          ]}
          rows={[
            [
              "1. Livrables",
              "« Les livrables concernés sont exclusivement : [liste, version, lot, date et format]. »",
              "Inventaire signé, captures, dépôt/tag et procès-verbal de livraison",
            ],
            [
              "2. Créations du projet",
              "« Pour chaque élément identifié, les droits [énumérés] sont [cédés/licenciés] pour [destination, territoire, durée, exclusivité]. »",
              "Matrice œuvre × auteur × droit × étendue",
            ],
            [
              "3. Logiciel",
              "« Les droits nécessaires pour exécuter, reproduire, adapter, modifier et faire maintenir par un tiers sont définis comme suit : […] »",
              "Périmètre du code spécifique et référence aux livrables",
            ],
            [
              "4. Préexistant",
              "« Les éléments créés avant ou hors du projet restent listés en annexe ; le client reçoit les droits nécessaires à l’exploitation et à la continuité décrites. »",
              "Liste du socle, interfaces, documentation et conditions de licence",
            ],
            [
              "5. Éléments tiers",
              "« Aucun élément tiers n’est réputé cédé. Chaque composant, licence, titulaire, coût, échéance et limite de transfert figure en annexe. »",
              "SBOM ou inventaire de dépendances, thèmes, polices, médias et SaaS",
            ],
            [
              "6. Contributeurs",
              "« Le prestataire déclare les salariés et sous-traitants ayant contribué et garantit disposer des droits qu’il transmet, dans les limites précisées. »",
              "Chaîne de contrats ou attestations à faire contrôler",
            ],
            [
              "7. Remise technique",
              "« À [jalons et fin], sont remis : dépôt, historique, documentation, scripts, schéma, exports, runbook et inventaire des secrets hors dépôt. »",
              "Critères d’acceptation et test de build/restauration",
            ],
            [
              "8. Sortie",
              "« La passation prévoit [délai, assistance, coût, format, test, retour arrière, rotation et révocation] selon les critères annexés. »",
              "Plan de réversibilité, calendrier et rapport de répétition",
            ],
            [
              "9. Rémunération",
              "« La rémunération correspondant aux droits et prestations est [modalité à valider], distincte des licences et services tiers. »",
              "Ventilation du prix et factures",
            ],
          ]}
        />

        <h3>Cession, licence et continuité : cinq réponses possibles</h3>

        <GuideTable
          headers={[
            "Formule",
            "Ce qu’elle peut apporter",
            "Points et pièges à vérifier",
          ]}
          rows={[
            [
              "Cession de droits patrimoniaux identifiés",
              "Transfert des droits précisément désignés",
              "Œuvres, droits, étendue, destination, territoire, durée et prix ; ne pas supposer qu’elle couvre le préexistant, le tiers ou les futures versions",
            ],
            [
              "Licence exclusive",
              "Usage réservé dans le périmètre convenu",
              "Exclusivité, durée, sous-licence et maintenance tierce ; éviter une exclusivité inutile ou trop étroite",
            ],
            [
              "Licence non exclusive suffisamment large",
              "Continuer à exploiter pendant que le prestataire réutilise son socle",
              "Modification, hébergement, sous-traitance, durée et sortie ; une simple mention « droit d’usage » ne décrit pas les actes autorisés",
            ],
            [
              "Licence de continuité sur le préexistant",
              "Utiliser le socle nécessaire au spécifique sans exiger tout le framework",
              "Déclencheurs, interfaces, documentation et maintenance tierce ; vérifier que les briques indispensables suivent le spécifique",
            ],
            [
              "Abonnement SaaS",
              "Accès à un service maintenu par l’éditeur",
              "Propriétaire du compte, exports, API, prix, assistance et fin de contrat ; ne pas confondre transfert du compte et sortie hors plateforme",
            ],
          ]}
        />

        <h2 id="plateformes">
          7. Plateformes : transférer le compte n’est pas quitter le produit
        </h2>

        <p>
          Les fonctions évoluent. La matrice ci-dessous synthétise les
          documentations officielles consultées le 27 juillet 2026 ; vérifiez
          votre forfait, votre pays et les conditions au moment de décider.
        </p>

        <GuideTable
          headers={["Plateforme", "Passation et sortie", "À tester"]}
          rows={[
            [
              "Wix",
              "Dans Wix : le propriétaire peut transférer un site à un autre compte, avec des exceptions pour certains abonnements et services. Hors Wix : le site complet dépend de sa technologie et de ses serveurs et ne peut pas être réhébergé tel quel.",
              "Propriétaire, plan, domaine, apps, médias, membres, paiements, campagnes et secrets Velo",
            ],
            [
              "Shopify",
              "Dans Shopify : la propriété de la boutique peut être changée ou transférée. Hors Shopify : produits, clients et commandes ont des exports séparés ; le thème peut être téléchargé, mais apps, réglages, paiements et données ne forment pas un paquet autonome unique.",
              "Licence du thème, propriétaire du store, domaine, paiements, abonnements, apps, métadonnées et redirections",
            ],
            [
              "Webflow",
              "Dans Webflow : le transfert déplace le travail du Designer et de nombreux contenus ou réglages, mais réinitialise des configurations liées au compte. Depuis un Workspace source Freelancer ou Agency éligible vers un Workspace client non-Enterprise, le Site plan et les domaines connectés peuvent suivre. Pour une boutique, le plan Ecommerce ne suit pas : le nouveau propriétaire doit souscrire un plan et réactiver le checkout. Hors Webflow : l’export exige un Workspace plan payant ; un Site plan seul ne suffit pas. Le ZIP contient HTML, CSS, JavaScript et actifs ; contenus et fonctions CMS, comptes utilisateurs, e-commerce, localisation et composants de code ne suivent pas, tandis que le traitement des formulaires et la recherche du site ne fonctionnent pas.",
              "Workspace source et destination, configurations réinitialisées, Site plan, Ecommerce et checkout, facturation, CMS, formulaires, recherche, clés, domaines connectés et version exportée",
            ],
            [
              "HubSpot",
              "Dans HubSpot : les rôles et actifs restent organisés dans le compte. Hors HubSpot : pages, articles et modèles peuvent être exportés en HTML ; CRM, fichiers, redirections, workflows et autres données suivent des exports distincts, sans fusion complète de comptes.",
              "Super Admin, abonnement, pages, thèmes, fichiers, CRM, formulaires, redirections, workflows et domaines",
            ],
            [
              "Squarespace",
              "Dans Squarespace : le propriétaire peut transférer le site à un contributeur et plusieurs abonnements attachés suivent. Hors Squarespace : l’export principal vers WordPress reste partiel ; boutique, styles, CSS et plusieurs contenus doivent être reconstruits. Il ne sert pas à importer un site complet dans un autre Squarespace.",
              "Propriétaire, anciens contributeurs, domaine, paiements, formulaires, abonnements, export XML et médias",
            ],
          ]}
        />

        <h3>Wix</h3>

        <p>
          Wix explique que son architecture SaaS doit fonctionner sur son
          infrastructure. Cela n’empêche pas de transférer la propriété d’un
          site vers un autre compte Wix, mais ce transfert a ses propres choix
          et exclusions : plan, domaine, email professionnel, applications,
          moyens de paiement, campagnes et secrets doivent être contrôlés
          séparément. Consultez la documentation officielle sur le{" "}
          <a
            href="https://support.wix.com/en/article/transferring-a-premium-site-to-another-wix-account"
            target="_blank"
            rel="noopener noreferrer"
          >
            transfert de propriété
          </a>{" "}
          et sur l’
          <a
            href="https://support.wix.com/en/article/exporting-or-embedding-your-wix-site-elsewhere"
            target="_blank"
            rel="noopener noreferrer"
          >
            hébergement externe
          </a>
          .
        </p>

        <h3>Shopify</h3>

        <p>
          Shopify documente le{" "}
          <a
            href="https://help.shopify.com/en/manual/your-account/manage-orgs-and-stores/change-transfer-ownership"
            target="_blank"
            rel="noopener noreferrer"
          >
            changement ou transfert de propriétaire
          </a>
          , les exports de produits, clients et commandes, ainsi que la gestion
          des thèmes. Une licence de thème payant est liée au store et son
          transfert répond à des conditions propres ; télécharger le ZIP ne
          transfère pas produits, collections, menus, pages et articles. Lisez
          les règles de{" "}
          <a
            href="https://help.shopify.com/en/manual/online-store/themes/managing-themes/unlicensed-themes"
            target="_blank"
            rel="noopener noreferrer"
          >
            licence et transfert du thème
          </a>{" "}
          avant de promettre une migration.
        </p>

        <h3>Webflow</h3>

        <p>
          Webflow distingue le{" "}
          <a
            href="https://help.webflow.com/hc/en-us/articles/33961238786963"
            target="_blank"
            rel="noopener noreferrer"
          >
            transfert d’un site
          </a>{" "}
          et l’
          <a
            href="https://help.webflow.com/hc/en-us/articles/33961386739347-How-do-I-export-my-Webflow-site-code"
            target="_blank"
            rel="noopener noreferrer"
          >
            export du code
          </a>
          . Le premier conserve davantage d’éléments à l’intérieur de
          l’écosystème ; le second produit des fichiers réhébergeables, mais
          exige un Workspace plan payant — un Site plan seul ne donne pas accès
          à l’export — et laisse de côté des fonctions importantes. Un client
          doit donc contrôler le Workspace ou organiser la passation avant que
          l’agence devienne injoignable.
        </p>

        <h3>HubSpot et Squarespace</h3>

        <p>
          HubSpot fournit un{" "}
          <a
            href="https://knowledge.hubspot.com/account-management/export-your-content-and-data"
            target="_blank"
            rel="noopener noreferrer"
          >
            inventaire des exports du compte
          </a>{" "}
          et une procédure d’
          <a
            href="https://knowledge.hubspot.com/website-and-landing-pages/export-web-content-and-data"
            target="_blank"
            rel="noopener noreferrer"
          >
            export du contenu web
          </a>
          . Squarespace documente le{" "}
          <a
            href="https://support.squarespace.com/hc/en-us/articles/206537197-Change-the-site-owner"
            target="_blank"
            rel="noopener noreferrer"
          >
            changement de propriétaire
          </a>{" "}
          et les limites de l’
          <a
            href="https://support.squarespace.com/hc/en-us/articles/206566687-Exporting-your-site"
            target="_blank"
            rel="noopener noreferrer"
          >
            export du site
          </a>
          . Dans les deux cas, faites un inventaire fonctionnel avant l’export :
          une liste de fichiers ne révèle pas les automatisations, paiements,
          formulaires ou fonctions qu’il faudra reconstruire.
        </p>

        <InfoBox
          variant="blue"
          title="Le verrouillage peut être un choix rationnel"
        >
          Une plateforme moins portable peut être moins coûteuse, mieux
          maintenue et parfaitement adaptée pendant plusieurs années. Le bon
          choix n’est pas « ouvert à tout prix » : c’est connaître la valeur du
          service, le coût et le délai de sortie, puis accepter explicitement le
          risque plutôt que le découvrir en crise.
        </InfoBox>

        <h2 id="chaine">
          8. Préexistant, tiers, sous-traitants et IA : remontez la chaîne
        </h2>

        <p>
          La méthode britannique de commande publique fournit un vocabulaire
          très utile, sans être une règle française : séparer ce qui existait
          avant le contrat, ce qui est créé pour le projet et ce qui appartient
          à un tiers. Cette annexe empêche de promettre une cession impossible.
        </p>

        <GuideTable
          headers={["Famille et exemples", "Question à poser", "Sortie"]}
          rows={[
            [
              "Préexistant du prestataire : framework interne, composants réutilisables, méthode et outils",
              "Quels droits sont indispensables pour exploiter et faire maintenir le spécifique ?",
              "Licence de continuité, documentation et interfaces",
            ],
            [
              "Créé pour le projet : code spécifique, maquettes, schéma, documentation et tests",
              "Qui a créé chaque version et quels droits sont transmis ?",
              "Cession ou licence + remise matérielle testée",
            ],
            [
              "Éléments tiers : open source, thème, police, image, API, SaaS et extension",
              "Quelle licence, quel titulaire, quel coût et quelle possibilité de transfert ?",
              "Transférer, racheter, remplacer ou conserver l’abonnement",
            ],
            [
              "Contenus du client : textes, photos, marque, catalogue et données fournies",
              "Le client disposait-il lui-même des droits et autorisations ?",
              "Fichiers d’origine, preuve et export",
            ],
          ]}
        />

        <h3>La matrice de contribution</h3>

        <p>
          Pour chaque lot, consignez l’auteur ou la société contributrice, son
          statut — salarié, freelance ou sous-traitant —, le livrable et la
          version, la part nouvelle ou préexistante, la licence ou la cession
          obtenue et la référence du contrat. Une attestation commerciale de
          l’agence ne remplace pas les titres qu’elle affirme détenir.
        </p>

        <GuideTable
          headers={[
            "Contributeur et version",
            "Droit à vérifier",
            "Pièce à conserver",
          ]}
          rows={[
            [
              "Salarié de l’agence — module de devis v2.3",
              "Logiciel créé dans les fonctions : régime et éventuelles stipulations à analyser",
              "Contrat de travail/rôle + déclaration de l’agence",
            ],
            [
              "Freelance — maquette et intégration",
              "Création indépendante : cession ou licence précisément identifiée",
              "Contrat signé et annexe de livraison",
            ],
            [
              "Éditeur tiers — thème et extension",
              "Licence commerciale : usage selon les conditions de l’éditeur",
              "Compte, facture, version et conditions",
            ],
            [
              "Projet open source — bibliothèque et dépendances",
              "Licence tierce : droits et obligations de la licence",
              "Inventaire/SBOM, version et texte de licence",
            ],
          ]}
        />

        <h3>Le protocole de provenance lorsque l’IA a participé</h3>

        <p>
          À la date de vérification, ce guide n’a identifié aucune décision
          française de référence réglant de manière générale la protection de
          tout code généré avec une IA. L’originalité, l’apport humain, les
          licences et les faits s’apprécient au cas par cas. Le rapport 2025 du
          Copyright Office américain concerne le droit des États-Unis ; il n’est
          cité qu’en benchmark.
        </p>

        <ol>
          <li>
            Inventorier les dépendances, leurs versions, licences et origines ;
            produire un SBOM lorsque l’enjeu le justifie.
          </li>
          <li>
            Documenter les contributions humaines significatives, les revues et
            la responsabilité de la livraison, sans exposer de secrets.
          </li>
          <li>
            Rechercher clés, mots de passe, données personnelles et code
            confidentiel avant commit et avant livraison.
          </li>
          <li>
            Exécuter analyse de licences, tests, revue de sécurité et revue
            humaine comme pour tout autre code.
          </li>
          <li>
            Demander au prestataire de déclarer ses outils et de garantir, dans
            les limites validées juridiquement, qu’il peut utiliser et livrer le
            résultat.
          </li>
          <li>
            Conserver la version du modèle ou du service utilisée, sa politique
            de confidentialité applicable et la date de la revue.
          </li>
        </ol>

        <p>
          N’inventez pas un pourcentage de code « écrit par l’IA » : il est
          rarement mesurable de façon fiable et ne répond pas, seul, à la
          question des droits ou de la qualité.
        </p>

        <h2 id="preuve">
          9. Vérifier chaque étape : du contrat à la révocation
        </h2>

        <p>
          Une reprise sérieuse suit un ordre. Révoquer trop tôt l’agence peut
          supprimer le seul accès fonctionnel ; attendre trop longtemps après la
          bascule peut laisser un ancien compte privilégié actif.
        </p>

        <ol>
          <li>
            <strong>Figer les pièces :</strong> contrats, avenants, factures,
            licences, inventaire, version en production et contacts.
          </li>
          <li>
            <strong>Contrôler les comptes :</strong> titulaire, rôles,
            récupération, MFA, secours, facturation et dates de renouvellement.
          </li>
          <li>
            <strong>Exporter et rapprocher :</strong> code, données, médias,
            paramètres et journaux ; comparer volumes, relations et empreintes
            plutôt que constater seulement la présence d’un fichier.
          </li>
          <li>
            <strong>Construire depuis un environnement propre :</strong> cloner
            le dépôt, installer les versions documentées, injecter les secrets
            depuis le coffre et produire le livrable sans l’auteur initial.
          </li>
          <li>
            <strong>Restaurer ailleurs :</strong> base, fichiers et
            configuration sur un environnement isolé ; tester pages, recherche,
            formulaires, emails, paiements et tâches planifiées.
          </li>
          <li>
            <strong>Répéter la bascule :</strong> préparer DNS, fenêtre, gel des
            écritures, synchronisation finale, contrôle et retour arrière.
          </li>
          <li>
            <strong>Valider puis révoquer :</strong> après preuve de la nouvelle
            chaîne, tourner les secrets, retirer les anciens accès, arrêter les
            abonnements inutiles et conserver le rapport.
          </li>
        </ol>

        <GuideTable
          headers={["Preuve", "Réussite observable", "Faux positif fréquent"]}
          rows={[
            [
              "Dépôt",
              "Version de production retrouvée et build reproductible",
              "ZIP partiel ou branche différente de la production",
            ],
            [
              "Sauvegarde",
              "Copie restaurée avec contrôle fonctionnel",
              "Fichier présent mais jamais ouvert",
            ],
            [
              "Export de données",
              "Volumes, relations, médias et import sur échantillon rapprochés",
              "CSV sans pièces jointes ni historique",
            ],
            [
              "Documentation",
              "Nouvelle équipe exécute le runbook sans aide orale",
              "Architecture théorique non mise à jour",
            ],
            [
              "Licence",
              "Compte, facture, version et droit de transfert ou de remplacement",
              "Plugin installé depuis le compte personnel du prestataire",
            ],
            [
              "Bascule",
              "Parcours critiques, observabilité et retour arrière testés",
              "Page d’accueil visible mais formulaires silencieux",
            ],
          ]}
        />

        <p>
          Si vous préparez un changement d’agence, suivez aussi le protocole
          détaillé pour{" "}
          <Link href="/guides/reprendre-maintenance-site-autre-agence">
            reprendre la maintenance sans retirer les accès trop tôt
          </Link>{" "}
          et l’
          <Link href="/guides/audit-technique-avant-reprendre-site">
            audit technique avant reprise
          </Link>
          .
        </p>

        <h2 id="sortie">10. Quatre scénarios, quatre chronologies</h2>

        <GuideTable
          headers={["Situation", "Premières actions", "Point de bascule"]}
          rows={[
            [
              "Prestataire coopératif",
              "Sous 24 h, figer l’inventaire, les rôles et le calendrier ; sous 7 jours, transférer, exporter, restaurer et corriger les écarts",
              "Révoquer après recette et retour arrière prêt",
            ],
            [
              "Agence injoignable",
              "Sous 24 h, sécuriser comptes internes, factures, contrats et sauvegardes ; sous 7 jours, cartographier ce qui fonctionne sans l’agence et chiffrer les manques",
              "Avocat si droits/accès contestés ; nouvelle équipe sur copie isolée",
            ],
            [
              "Sortie d’un SaaS fermé",
              "Sous 24 h, geler fonctions, volumes, intégrations et propriétaires ; sous 7 jours, tester tous les exports officiels et reconstruire un échantillon",
              "Décider entre transfert interne, coexistence ou reconstruction",
            ],
            [
              "Conflit sur les droits",
              "Sous 24 h, préserver pièces et état technique sans étendre l’usage contesté ; sous 7 jours, séparer la continuité possible des actes juridiques à analyser",
              "Aucune menace ou procédure standardisée : stratégie définie par l’avocat",
            ],
          ]}
        />

        <h3>Message de passation factuel</h3>

        <InfoBox
          variant="blue"
          title="Un point de départ, pas une mise en demeure"
        >
          « Afin de préparer la continuité du site [URL], merci de confirmer la
          liste des services, comptes et titulaires, puis de transmettre les
          livrables prévus au contrat : dépôt/version, documentation,
          sauvegarde, export de données, inventaire des licences et procédure de
          mise en ligne. Merci de signaler séparément les éléments préexistants
          ou tiers, leurs limites de transfert, les abonnements à renouveler et
          la date proposée pour un test de restauration. Cette demande ne
          préjuge pas de l’analyse des droits. »
        </InfoBox>

        <p>
          Gardez un tableau par élément et demandez une réponse précise. Une
          phrase globale comme « tout vous a été remis » n’aide ni le technicien
          ni l’avocat.
        </p>

        <h2 id="entiercement">
          11. Entiercement : un mécanisme, pas un disque dur oublié
        </h2>

        <p>
          Un dépôt probatoire et un entiercement ne sont pas synonymes. Selon la
          documentation 2026 de l’APP, l’entiercement peut prendre la forme d’un
          contrat tripartite ou d’une clause d’accès. Il organise les éléments
          déposés, leur mise à jour, leur éventuel contrôle et les cas dans
          lesquels le bénéficiaire peut y accéder.
        </p>

        <GuideTable
          headers={["À définir", "Question de contrôle", "Échec à éviter"]}
          rows={[
            [
              "Contenu",
              "Code, historique utile, documentation, dépendances, lockfiles, scripts, schéma et jeux d’essai sont-ils inclus ?",
              "Sources brutes impossibles à compiler",
            ],
            [
              "Fréquence",
              "Chaque version critique ou livraison déclenche-t-elle une mise à jour ?",
              "Dépôt ancien sans rapport avec la production",
            ],
            [
              "Vérification",
              "Qui contrôle complétude, cohérence et reconstruction, selon quel protocole ?",
              "Certificat de dépôt confondu avec test technique",
            ],
            [
              "Libération",
              "Quels événements objectivement vérifiables ouvrent l’accès et quelle procédure contradictoire s’applique ?",
              "Déclencheur vague ou inutilisable en urgence",
            ],
            [
              "Droits après accès",
              "Le bénéficiaire peut-il exécuter, corriger et faire maintenir ce qui est remis ?",
              "Accès matériel sans droits suffisants",
            ],
            [
              "Tiers",
              "Les licences permettent-elles le dépôt et l’usage après libération ?",
              "Composant indispensable absent ou non licencié",
            ],
            [
              "Coût",
              "Adhésion, contrat, dépôt, mises à jour, contrôle, stockage et procédure d’accès ont-ils un devis actuel ?",
              "Recycler une grille tarifaire ancienne comme prix garanti",
            ],
          ]}
        />

        <p>
          Pour un site vitrine standard, ce dispositif peut être disproportionné
          : comptes internes, exports et restauration annuelle apportent souvent
          plus de valeur. Pour une application métier indispensable, un logiciel
          spécifique ou un service dont l’arrêt bloque l’activité, il peut
          devenir pertinent si le contenu est contrôlé et les droits sont
          réellement organisés.
        </p>

        <p>
          Consultez la{" "}
          <a
            href="https://www.app.asso.fr/centre-information/base-de-connaissances/bonnes-pratiques/entiercer/faq-les-offres-dentiercement-aupres-de-lapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            FAQ APP du 9 janvier 2026
          </a>
          , la fiche sur{" "}
          <a
            href="https://www.app.asso.fr/centre-information/base-de-connaissances/bonnes-pratiques/entiercer/que-mettre-dans-un-depot-entierce"
            target="_blank"
            rel="noopener noreferrer"
          >
            le contenu du dépôt
          </a>
          , les{" "}
          <a
            href="https://www.app.asso.fr/escrow/liberation-du-code-source-dans-un-contrat-dentiercement.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            conditions de libération
          </a>{" "}
          et la{" "}
          <a
            href="https://www.app.asso.fr/tarifs"
            target="_blank"
            rel="noopener noreferrer"
          >
            page tarifaire courante
          </a>
          . Demandez un devis daté plutôt que de recopier un montant.
        </p>

        <h2 id="international">
          12. Ce que les meilleures méthodes étrangères apportent
        </h2>

        <p>
          Les références étrangères ci-dessous ne s’appliquent pas
          automatiquement à un contrat français. Elles servent à améliorer la
          méthode d’achat, la preuve et la réversibilité.
        </p>

        <GuideTable
          headers={["Référence", "Méthode utile", "Limite de transposition"]}
          rows={[
            [
              "Royaume-Uni — GOV.UK",
              "Séparer propriété intellectuelle préexistante, nouvelle et tierce ; définir les droits réellement nécessaires et gérer le verrouillage par coût/délai de sortie.",
              "Guides de commande publique britannique, pas règle du CPI français",
            ],
            [
              "États-Unis — FAR et NIST",
              "Séparer livraison matérielle et droits ; identifier ce qui doit être livré ; archiver versions, provenance et inventaire logiciel.",
              "Droit et marchés fédéraux américains ; benchmark technique seulement",
            ],
            [
              "Australie — IP Australia et Department of Finance",
              "Contrat avant travaux, chaîne des contractors, licences, sous-traitance et transfert de connaissances jalonné.",
              "La règle australienne de propriété du contractor n’est pas une règle française",
            ],
            [
              "France/UE — CPI, AFNIC et CNIL",
              "Analyser les droits œuvre par œuvre, distinguer titulaire du domaine, encadrer la sous-traitance de données et prouver la sortie technique.",
              "Toujours adapter aux faits, aux contrats et au pays réellement applicable",
            ],
          ]}
        />

        <h3>Royaume-Uni : acheter des droits utiles, pas tout par réflexe</h3>

        <p>
          La{" "}
          <a
            href="https://www.gov.uk/government/publications/the-digital-data-and-technology-playbook/intellectual-property-rights-guidance-note-html"
            target="_blank"
            rel="noopener noreferrer"
          >
            guidance IPR de GOV.UK
          </a>{" "}
          recommande une approche au cas par cas et rappelle que le droit
          d’utiliser peut être plus important que la propriété. Son{" "}
          <a
            href="https://www.gov.uk/government/publications/knowledge-asset-management-in-government/knowledge-assets-in-procurement-annex-d"
            target="_blank"
            rel="noopener noreferrer"
          >
            annexe sur les actifs de connaissance
          </a>{" "}
          distingue le préexistant, le nouveau et le tiers. La guidance sur le{" "}
          <a
            href="https://www.gov.uk/guidance/managing-technical-lock-in-in-the-cloud"
            target="_blank"
            rel="noopener noreferrer"
          >
            verrouillage technique
          </a>{" "}
          demande de mesurer plutôt que condamner par principe.
        </p>

        <h3>États-Unis : provenance et livraison explicite</h3>

        <p>
          Le{" "}
          <a
            href="https://www.acquisition.gov/far/subpart-27.4"
            target="_blank"
            rel="noopener noreferrer"
          >
            FAR 27.4
          </a>{" "}
          illustre la séparation entre les données ou logiciels livrés et les
          droits associés dans les marchés fédéraux. Le{" "}
          <a
            href="https://csrc.nist.gov/pubs/sp/800/218/final"
            target="_blank"
            rel="noopener noreferrer"
          >
            NIST Secure Software Development Framework
          </a>{" "}
          renforce la traçabilité des versions et composants. Le{" "}
          <a
            href="https://www.copyright.gov/ai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Copyright Office
          </a>{" "}
          fournit un benchmark sur l’apport humain dans les sorties d’IA, sans
          créer de règle française.
        </p>

        <h3>Australie : contractualiser la chaîne du contractor</h3>

        <p>
          <a
            href="https://www.ipaustralia.gov.au/understanding-ip/who-owns-ip"
            target="_blank"
            rel="noopener noreferrer"
          >
            IP Australia
          </a>{" "}
          insiste sur le contrat conclu avant les travaux et indique, dans son
          droit, qu’un contractor conserve en principe sa propriété
          intellectuelle sauf clause contraire. Le Department of Finance propose
          des clauses de{" "}
          <a
            href="https://www.finance.gov.au/government/procurement/clausebank/knowledge-transfer"
            target="_blank"
            rel="noopener noreferrer"
          >
            transfert de connaissances
          </a>
          , de{" "}
          <a
            href="https://www.finance.gov.au/government/procurement/clausebank/subcontracting"
            target="_blank"
            rel="noopener noreferrer"
          >
            sous-traitance
          </a>{" "}
          et de{" "}
          <a
            href="https://www.finance.gov.au/government/procurement/clausebank/licenses-approvals-and-warranties"
            target="_blank"
            rel="noopener noreferrer"
          >
            licences et garanties
          </a>
          . Leur intérêt ici est organisationnel, pas juridique.
        </p>

        <h2 id="plan">13. Le plan d’action selon le moment du projet</h2>

        <h3>Avant de signer</h3>

        <ol>
          <li>
            Créer domaine, plateforme, hébergement et comptes clés dans
            l’organisation de l’entreprise.
          </li>
          <li>
            Séparer dans le devis le spécifique, le préexistant, le tiers, les
            contenus du client et les services SaaS.
          </li>
          <li>
            Faire préciser les droits, la remise technique et le droit de
            maintenance par un tiers.
          </li>
          <li>
            Prévoir formats, fréquence des exports, restauration, assistance,
            coûts de sortie et critères d’acceptation.
          </li>
          <li>
            Faire relire la clause définitive et ses annexes par un avocat.
          </li>
        </ol>

        <h3>À la livraison</h3>

        <ol>
          <li>
            Rapprocher contrat, inventaire, comptes, factures et version
            déployée.
          </li>
          <li>
            Tester un administrateur interne et un administrateur de secours
            avec MFA.
          </li>
          <li>
            Cloner, construire, restaurer et tester les parcours critiques sur
            une copie.
          </li>
          <li>
            Vérifier les exports, licences, renouvellements et éléments
            explicitement non transférables.
          </li>
          <li>
            Accepter la livraison sur des preuves, puis conserver le rapport.
          </li>
        </ol>

        <h3>Chaque année ou à chaque version critique</h3>

        <ol>
          <li>Revoir les 14 accès et les coordonnées de récupération.</li>
          <li>Mettre à jour l’inventaire des dépendances et abonnements.</li>
          <li>
            Restaurer un échantillon et tester au moins un parcours métier.
          </li>
          <li>Recalculer le coût de sortie à 12, 36 et 60 mois.</li>
          <li>
            Répéter la passation si le site est critique ou si l’équipe change.
          </li>
        </ol>

        <h3>Si vous êtes déjà bloqué</h3>

        <ol>
          <li>
            Préserver contrats, factures, échanges, comptes et état technique.
          </li>
          <li>
            Sécuriser ce que l’entreprise contrôle déjà sans couper trop tôt le
            fonctionnement.
          </li>
          <li>
            Faire cartographier par une équipe indépendante les exports, le
            code, les données, les licences et la reconstruction possible.
          </li>
          <li>
            Faire analyser séparément par un avocat les droits et la stratégie
            du dossier.
          </li>
          <li>
            Comparer négociation, voie juridique cadrée et reconstruction avec
            les mêmes postes de coût et un plan de continuité.
          </li>
        </ol>

        <GuideInlineCTA
          title="Vous devez reprendre un site sans confondre technique et droit ?"
          description="Nous pouvons contrôler les comptes, les exports, le dépôt, les sauvegardes et la possibilité technique de restaurer ou reconstruire. Le livrable sépare les faits observés, les coûts de reprise et les questions à faire analyser par votre avocat."
          tags={[
            "14 accès et preuves contrôlés",
            "Build, export et restauration testés",
            "Aucune conclusion juridique sans avocat",
          ]}
        />

        <InfoBox variant="emerald" title="La question finale à faire signer">
          « Si notre collaboration s’arrête demain, que remettons-nous à une
          nouvelle équipe, dans quel format et quelle version, avec quels
          droits, quelles licences, quels comptes, quel test d’acceptation, quel
          délai et quel coût ? » Une réponse annexée au contrat vaut mieux
          qu’une promesse de propriété en une ligne.
        </InfoBox>

        <h2 id="sources">Sources primaires et documentations officielles</h2>

        <p className="text-sm">
          <strong>
            France — droit d’auteur et logiciel, consulté le 27/07/2026 :
          </strong>{" "}
          Légifrance,{" "}
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042814694"
            target="_blank"
            rel="noopener noreferrer"
          >
            L111-1
          </a>
          ,{" "}
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039279818"
            target="_blank"
            rel="noopener noreferrer"
          >
            L113-9
          </a>
          ,{" "}
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278919"
            target="_blank"
            rel="noopener noreferrer"
          >
            L122-6
          </a>
          ,{" "}
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278920"
            target="_blank"
            rel="noopener noreferrer"
          >
            L122-6-1
          </a>
          ,{" "}
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278922"
            target="_blank"
            rel="noopener noreferrer"
          >
            L122-7
          </a>
          ,{" "}
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278955"
            target="_blank"
            rel="noopener noreferrer"
          >
            L131-1
          </a>
          ,{" "}
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958"
            target="_blank"
            rel="noopener noreferrer"
          >
            L131-3
          </a>{" "}
          et{" "}
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049579339"
            target="_blank"
            rel="noopener noreferrer"
          >
            L131-4
          </a>
          . Service Public Entreprendre,{" "}
          <a
            href="https://entreprendre.service-public.gouv.fr/vosdroits/F22667"
            target="_blank"
            rel="noopener noreferrer"
          >
            contrat de cession de droits d’auteur
          </a>
          , fiche vérifiée le 03/05/2024.
        </p>

        <p className="text-sm">
          <strong>
            Domaine, données et entiercement, consulté le 27/07/2026 :
          </strong>{" "}
          AFNIC,{" "}
          <a
            href="https://www.afnic.fr/observatoire-ressources/documents/charte-nommage/"
            target="_blank"
            rel="noopener noreferrer"
          >
            charte de nommage
          </a>
          ,{" "}
          <a
            href="https://www.afnic.fr/noms-de-domaine/faq/"
            target="_blank"
            rel="noopener noreferrer"
          >
            FAQ
          </a>{" "}
          et{" "}
          <a
            href="https://www.afnic.fr/noms-de-domaine/tout-savoir/gerer-son-nom-de-domaine/"
            target="_blank"
            rel="noopener noreferrer"
          >
            gérer son domaine
          </a>
          . CNIL,{" "}
          <a
            href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4#Article28"
            target="_blank"
            rel="noopener noreferrer"
          >
            article 28 du RGPD
          </a>{" "}
          et{" "}
          <a
            href="https://www.cnil.fr/fr/sous-traitance-exemple-de-clauses"
            target="_blank"
            rel="noopener noreferrer"
          >
            clauses de sous-traitance
          </a>
          . EUR-Lex,{" "}
          <a
            href="https://eur-lex.europa.eu/eli/reg/2016/679/oj?locale=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            RGPD, article 28
          </a>{" "}
          et{" "}
          <a
            href="https://eur-lex.europa.eu/eli/reg/2023/2854/oj?locale=fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Data Act, règlement (UE) 2023/2854
          </a>
          . APP,{" "}
          <a
            href="https://www.app.asso.fr/centre-information/base-de-connaissances/bonnes-pratiques/entiercer/faq-les-offres-dentiercement-aupres-de-lapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            FAQ entiercement du 09/01/2026
          </a>
          ,{" "}
          <a
            href="https://www.app.asso.fr/centre-information/base-de-connaissances/bonnes-pratiques/entiercer/que-mettre-dans-un-depot-entierce"
            target="_blank"
            rel="noopener noreferrer"
          >
            contenu d’un dépôt
          </a>{" "}
          et{" "}
          <a
            href="https://www.app.asso.fr/escrow/liberation-du-code-source-dans-un-contrat-dentiercement.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            libération du code, mise à jour du 03/03/2026
          </a>
          .
        </p>

        <p className="text-sm">
          <strong>Plateformes, consulté le 27/07/2026 :</strong>{" "}
          <a
            href="https://support.wix.com/en/article/transferring-a-premium-site-to-another-wix-account"
            target="_blank"
            rel="noopener noreferrer"
          >
            transfert Wix
          </a>{" "}
          et{" "}
          <a
            href="https://support.wix.com/en/article/exporting-or-embedding-your-wix-site-elsewhere"
            target="_blank"
            rel="noopener noreferrer"
          >
            hébergement externe Wix
          </a>
          ;{" "}
          <a
            href="https://help.shopify.com/en/manual/your-account/manage-orgs-and-stores/change-transfer-ownership"
            target="_blank"
            rel="noopener noreferrer"
          >
            transfert Shopify
          </a>{" "}
          et{" "}
          <a
            href="https://help.shopify.com/en/manual/online-store/themes/managing-themes/unlicensed-themes"
            target="_blank"
            rel="noopener noreferrer"
          >
            licences des thèmes
          </a>
          ;{" "}
          <a
            href="https://help.webflow.com/hc/en-us/articles/33961238786963"
            target="_blank"
            rel="noopener noreferrer"
          >
            transfert Webflow
          </a>{" "}
          et{" "}
          <a
            href="https://help.webflow.com/hc/en-us/articles/33961386739347-How-do-I-export-my-Webflow-site-code"
            target="_blank"
            rel="noopener noreferrer"
          >
            export Webflow
          </a>
          ;{" "}
          <a
            href="https://knowledge.hubspot.com/account-management/export-your-content-and-data"
            target="_blank"
            rel="noopener noreferrer"
          >
            exports HubSpot
          </a>
          ;{" "}
          <a
            href="https://support.squarespace.com/hc/en-us/articles/206537197-Change-the-site-owner"
            target="_blank"
            rel="noopener noreferrer"
          >
            transfert Squarespace
          </a>{" "}
          et{" "}
          <a
            href="https://support.squarespace.com/hc/en-us/articles/206566687-Exporting-your-site"
            target="_blank"
            rel="noopener noreferrer"
          >
            export Squarespace
          </a>
          .
        </p>

        <p className="text-sm">
          <strong>
            Benchmarks officiels étrangers, consulté le 27/07/2026 :
          </strong>{" "}
          GOV.UK,{" "}
          <a
            href="https://www.gov.uk/government/publications/the-digital-data-and-technology-playbook/intellectual-property-rights-guidance-note-html"
            target="_blank"
            rel="noopener noreferrer"
          >
            IPR Guidance Note
          </a>
          ,{" "}
          <a
            href="https://www.gov.uk/government/publications/knowledge-asset-management-in-government/knowledge-assets-in-procurement-annex-d"
            target="_blank"
            rel="noopener noreferrer"
          >
            Knowledge Assets Annex D
          </a>{" "}
          et{" "}
          <a
            href="https://www.gov.uk/guidance/managing-technical-lock-in-in-the-cloud"
            target="_blank"
            rel="noopener noreferrer"
          >
            technical lock-in
          </a>
          . États-Unis,{" "}
          <a
            href="https://www.acquisition.gov/far/subpart-27.4"
            target="_blank"
            rel="noopener noreferrer"
          >
            FAR 27.4
          </a>
          ,{" "}
          <a
            href="https://csrc.nist.gov/pubs/sp/800/218/final"
            target="_blank"
            rel="noopener noreferrer"
          >
            NIST SP 800-218
          </a>{" "}
          et{" "}
          <a
            href="https://www.copyright.gov/ai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            U.S. Copyright Office AI
          </a>
          . Australie,{" "}
          <a
            href="https://www.ipaustralia.gov.au/understanding-ip/who-owns-ip"
            target="_blank"
            rel="noopener noreferrer"
          >
            IP Australia
          </a>{" "}
          et{" "}
          <a
            href="https://www.finance.gov.au/government/procurement/clausebank/knowledge-transfer"
            target="_blank"
            rel="noopener noreferrer"
          >
            Department of Finance ClauseBank
          </a>
          .
        </p>

        <p className="text-sm">
          <strong>Limites de mise à jour :</strong> les textes, chartes,
          conditions, forfaits et fonctions de plateformes peuvent évoluer.
          Toutes les affirmations juridiques sont générales et toutes les
          comparaisons étrangères restent méthodologiques. Revalidez les sources
          à la date de votre contrat, de votre transfert ou de votre litige.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
