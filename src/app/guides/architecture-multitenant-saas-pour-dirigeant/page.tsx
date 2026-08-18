import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { GuideTable, InfoBox } from "@/components/guides/guide-content-blocks";
import {
  GuidePremiumCase,
  GuidePremiumLayout,
  GuidePremiumMemo,
  GuidePremiumSection,
} from "@/components/guides/guide-premium-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { GUIDES_COLLECTION_ID } from "@/lib/guide-page-seo";
import {
  ORGANIZATION_ID,
  QUENTIN_HAGNERE_ID,
  QUENTIN_HAGNERE_URL,
} from "@/lib/organization-structured-data";
import { PRIVATE_ROBOTS } from "@/lib/search-indexing";
import { OG_BASE, SITE_URL } from "@/lib/seo";
import { TEAM } from "@/lib/team";

export const MULTITENANT_SLUG =
  "architecture-multitenant-saas-pour-dirigeant" as const;
export const MULTITENANT_URL = `${SITE_URL}/guides/${MULTITENANT_SLUG}`;
export const MULTITENANT_HEADLINE =
  "Architecture multitenant SaaS : que faut-il isoler ?";
export const MULTITENANT_DESCRIPTION =
  "Comparez 5 familles d’isolation, leurs effets opérationnels et un test à deux organisations avant de choisir ce qui sera partagé ou dédié.";
export const MULTITENANT_SECTION = "SaaS et MVP";
export const MULTITENANT_IMAGES = [
  `/guides/${MULTITENANT_SLUG}/couches-isolation-saas.svg`,
  `/guides/${MULTITENANT_SLUG}/cinq-familles-isolation.svg`,
  `/guides/${MULTITENANT_SLUG}/protocole-tenants-a-b.svg`,
] as const;

/** Marqueur lu par le garde-fou central tant que le slug reste hors registre. */
export const localDraftContract = {
  editorialStatus: "ready-for-human-review",
} as const;

export const metadata: Metadata = {
  title: MULTITENANT_HEADLINE,
  description: MULTITENANT_DESCRIPTION,
  authors: [{ name: TEAM.quentin.fullName, url: QUENTIN_HAGNERE_URL }],
  creator: "Hagnéré Code",
  publisher: "Hagnéré Code",
  robots: PRIVATE_ROBOTS,
  alternates: { canonical: MULTITENANT_URL },
  openGraph: {
    ...OG_BASE,
    type: "article",
    title: MULTITENANT_HEADLINE,
    description: MULTITENANT_DESCRIPTION,
    url: MULTITENANT_URL,
    images: [
      {
        url: `${MULTITENANT_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Cinq familles d’isolation d’un SaaS, du partage contrôlé au déploiement dédié",
      },
    ],
    authors: [QUENTIN_HAGNERE_URL],
  },
  twitter: {
    card: "summary_large_image",
    title: MULTITENANT_HEADLINE,
    description: MULTITENANT_DESCRIPTION,
    images: [`${MULTITENANT_URL}/opengraph-image`],
  },
};

export const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${MULTITENANT_URL}#article`,
    headline: MULTITENANT_HEADLINE,
    description: MULTITENANT_DESCRIPTION,
    url: MULTITENANT_URL,
    mainEntityOfPage: { "@type": "WebPage", "@id": MULTITENANT_URL },
    image: MULTITENANT_IMAGES.map((image) => `${SITE_URL}${image}`),
    inLanguage: "fr-FR",
    articleSection: MULTITENANT_SECTION,
    isPartOf: {
      "@type": "CollectionPage",
      "@id": GUIDES_COLLECTION_ID,
      name: "Guides Hagnéré Code",
    },
    author: {
      "@type": "Person",
      "@id": QUENTIN_HAGNERE_ID,
      name: TEAM.quentin.fullName,
      jobTitle: TEAM.quentin.role,
      url: QUENTIN_HAGNERE_URL,
      sameAs: TEAM.quentin.linkedin ? [TEAM.quentin.linkedin] : undefined,
      worksFor: { "@id": ORGANIZATION_ID },
    },
    publisher: {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: "Hagnéré Code",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logos/logo-dark.png`,
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Guides",
        item: `${SITE_URL}/guides`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Architecture multitenant SaaS",
        item: MULTITENANT_URL,
      },
    ],
  },
] as const;

const toc = [
  {
    id: "reponse",
    number: "01",
    label: "Répondre sans choisir trop tôt",
    shortLabel: "Réponse",
  },
  {
    id: "couches",
    number: "02",
    label: "Cartographier les couches",
    shortLabel: "Couches",
  },
  {
    id: "familles",
    number: "03",
    label: "Comparer cinq familles",
    shortLabel: "Familles",
  },
  {
    id: "consequences",
    number: "04",
    label: "Relier le choix à l’entreprise",
    shortLabel: "Effets",
  },
  {
    id: "chemin",
    number: "05",
    label: "Passer de la contrainte au choix",
    shortLabel: "Décider",
  },
  {
    id: "protocole",
    number: "06",
    label: "Tester deux organisations",
    shortLabel: "Test A/B",
  },
  {
    id: "rls",
    number: "07",
    label: "Comprendre la portée de RLS",
    shortLabel: "RLS",
  },
  {
    id: "exploitation",
    number: "08",
    label: "Prévoir le travail récurrent",
    shortLabel: "Exploiter",
  },
  {
    id: "contrat",
    number: "09",
    label: "Poser les questions du contrat",
    shortLabel: "Contrat",
  },
  {
    id: "action",
    number: "10",
    label: "Produire une décision partageable",
    shortLabel: "Action",
  },
];

const faqItems = [
  {
    question: "Que signifie multitenant pour un SaaS B2B ?",
    answer: (
      <p>
        Un SaaS multitenant sert plusieurs organisations clientes avec un
        produit et une exploitation communs. Cela ne veut pas dire que chaque
        base, fichier, cache ou déploiement est partagé. Le niveau de séparation
        peut changer selon la couche et selon l’offre.
      </p>
    ),
  },
  {
    question: "Un tenant est-il un utilisateur ?",
    answer: (
      <p>
        Non, pas dans le cas B2B traité ici. Le tenant est l’organisation, la
        filiale, l’espace ou le contrat que le produit doit reconnaître. Une
        organisation contient plusieurs utilisateurs ; une même personne peut
        parfois appartenir à plusieurs organisations et changer de contexte.
      </p>
    ),
  },
  {
    question: "Faut-il une base de données par client ?",
    answer: (
      <p>
        Pas systématiquement. Une base dédiée peut répondre à une contrainte de
        données, de charge ou de restauration, mais elle ne sépare pas à elle
        seule les fichiers, caches, files, journaux, identités et outils de
        support. Comparez la preuve attendue et le travail d’exploitation.
      </p>
    ),
  },
  {
    question: "Une base partagée implique-t-elle une fuite de données ?",
    answer: (
      <p>
        Non. Le partage ne prouve pas une fuite, mais il exige des contrôles
        cohérents et testés sur chaque chemin d’accès. Une clé de tenant, une
        politique de lignes et un contrôle d’autorisation peuvent participer à
        la défense ; aucun ne remplace les autres ni les tests.
      </p>
    ),
  },
  {
    question: "RLS suffit-elle à isoler les clients dans PostgreSQL ?",
    answer: (
      <p>
        Non. La sécurité au niveau des lignes, ou RLS, filtre des accès normaux
        à une table. PostgreSQL documente des rôles qui la contournent et des
        opérations qui n’y sont pas soumises. Elle ne couvre pas non plus les
        fichiers, caches, exports ou outils d’administration.
      </p>
    ),
  },
  {
    question: "Un identifiant UUID protège-t-il un objet ?",
    answer: (
      <p>
        Non. Un identifiant imprévisible rend la devinette plus difficile, mais
        OWASP demande encore de vérifier que la personne connectée peut réaliser
        l’action demandée sur l’objet visé. Le protocole A/B manipule donc les
        identifiants volontairement.
      </p>
    ),
  },
  {
    question: "Qu’est-ce qu’un voisin bruyant ?",
    answer: (
      <p>
        C’est un client dont la charge consomme une part disproportionnée d’une
        ressource partagée et dégrade l’expérience des autres. Mesurez la charge
        par organisation, testez les pointes, puis examinez quotas, files,
        capacité supplémentaire ou isolation ciblée.
      </p>
    ),
  },
  {
    question: "Une offre dédiée est-elle toujours plus chère ?",
    answer: (
      <p>
        Son exploitation comporte généralement davantage de ressources ou de
        gestion propres au client, mais le coût exact dépend du produit et de
        son automatisation. Chiffrez infrastructure, déploiement, migrations,
        supervision, sauvegarde, support et sortie au lieu d’appliquer un
        multiplicateur universel.
      </p>
    ),
  },
  {
    question: "Comment restaurer un seul client dans une base partagée ?",
    answer: (
      <p>
        Cela dépend du moteur, du format des sauvegardes, des dépendances entre
        lignes et des outils conçus pour extraire puis réinjecter le tenant. Ne
        promettez pas la restauration sélective : rejouez-la sur une copie avec
        des marqueurs A/B et vérifiez que l’autre organisation reste inchangée.
      </p>
    ),
  },
  {
    question: "Le même niveau d’isolation doit-il s’appliquer partout ?",
    answer: (
      <p>
        Non. Une architecture peut partager l’interface et le calcul, dédier la
        base à certains comptes et regrouper les autres dans plusieurs
        déploiements. Chaque différence doit répondre à une contrainte et rester
        déployable, observable et testable.
      </p>
    ),
  },
  {
    question: "Ce protocole certifie-t-il la sécurité ou le RGPD ?",
    answer: (
      <p>
        Non. Il cherche des franchissements observables sur des chemins précis,
        avec des données fictives. Il ne remplace ni analyse de risque, ni test
        d’intrusion, ni qualification juridique, ni examen des sous-traitants et
        contrats du projet réel.
      </p>
    ),
  },
  {
    question: "Quelle décision prendre si les contraintes sont inconnues ?",
    answer: (
      <p>
        Reportez le choix définitif et financez un test ciblé. Écrivez
        l’inconnue — volume, région, restauration, contrat, charge ou rôle de
        support — puis obtenez la donnée ou exécutez l’expérience qui permettra
        de la fermer. Une inconnue n’est ni un oui ni un coût nul.
      </p>
    ),
  },
];

const legalSources = [
  {
    source: "AWS SaaS Lens · Isolation mindset",
    description:
      "L’authentification et l’autorisation d’entrée ne constituent pas seules l’isolation — consulté le 6 août 2026.",
    href: "https://docs.aws.amazon.com/wellarchitected/latest/saas-lens/isolation-mindset.html",
  },
  {
    source: "AWS SaaS Lens · Silo, pool and bridge",
    description:
      "Ressources dédiées, partagées et combinaisons des deux — consulté le 6 août 2026.",
    href: "https://docs.aws.amazon.com/wellarchitected/latest/saas-lens/silo-pool-and-bridge-models.html",
  },
  {
    source: "AWS SaaS Lens · Targeted isolation",
    description:
      "Isolation granulaire par service, calcul ou stockage — consulté le 6 août 2026.",
    href: "https://docs.aws.amazon.com/wellarchitected/latest/saas-lens/targeted-isolation.html",
  },
  {
    source: "Microsoft Azure · Tenancy models",
    description:
      "L’isolation comme spectre et ses effets sur coût, charge, fiabilité et offre — consulté le 6 août 2026.",
    href: "https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/considerations/tenancy-models",
  },
  {
    source: "Microsoft Azure · Storage and data",
    description:
      "Partage, ressources dédiées, RLS, sauvegarde, restauration et migration — consulté le 6 août 2026.",
    href: "https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/approaches/storage-data",
  },
  {
    source: "Microsoft Azure · Compute",
    description:
      "Calcul partagé ou dédié, caches et risque de voisin bruyant — consulté le 6 août 2026.",
    href: "https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/approaches/compute",
  },
  {
    source: "Microsoft Azure · Deployment and configuration",
    description:
      "Automatisation, capacité, groupes de déploiement et tests — consulté le 6 août 2026.",
    href: "https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/approaches/deployment-configuration",
  },
  {
    source: "Microsoft Azure · Identity",
    description:
      "Contexte tenant, appartenance multiple et autorisation par ressource — consulté le 6 août 2026.",
    href: "https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/approaches/identity",
  },
  {
    source: "Microsoft Azure · Tenant integration",
    description:
      "Exports, imports, identités et points d’intégration séparés — consulté le 6 août 2026.",
    href: "https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/approaches/integration",
  },
  {
    source: "Microsoft Azure · Messaging",
    description:
      "Files partagées, dédiées ou hybrides, identités, workers, quotas et exploitation — consulté le 6 août 2026.",
    href: "https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/approaches/messaging",
  },
  {
    source: "Microsoft Azure · Control planes",
    description:
      "Responsabilités de cycle de vie, routage, configuration et suivi, y compris par procédures manuelles — consulté le 6 août 2026.",
    href: "https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/considerations/control-planes",
  },
  {
    source: "PostgreSQL 18 · Row Security Policies",
    description:
      "Portée de RLS, rôles de contournement, intégrité et concurrence hors politique — consulté le 6 août 2026.",
    href: "https://www.postgresql.org/docs/18/ddl-rowsecurity.html",
  },
  {
    source: "PostgreSQL 18 · CREATE POLICY",
    description:
      "Refus par défaut sans politique applicable et combinaison des politiques — consulté le 6 août 2026.",
    href: "https://www.postgresql.org/docs/18/sql-createpolicy.html",
  },
  {
    source: "OWASP API Security 2023 · BOLA",
    description:
      "Contrôle d’autorisation objet par objet, y compris avec un identifiant imprévisible — consulté le 6 août 2026.",
    href: "https://owasp.org/API-Security/editions/2023/en/0xa1-broken-object-level-authorization/",
  },
  {
    source: "OWASP · Multi-Tenant Security Cheat Sheet",
    description:
      "Contexte tenant, caches, fichiers, cycle de vie et journalisation — consulté le 6 août 2026.",
    href: "https://cheatsheetseries.owasp.org/cheatsheets/Multi_Tenant_Security_Cheat_Sheet.html",
  },
];

function SourceLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export default function Page() {
  return (
    <GuidesShell>
      {structuredData.map((item) => (
        <script
          key={item["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item).replace(/</g, "\\u003c"),
          }}
        />
      ))}

      <GuidePremiumLayout
        breadcrumbs={[
          { label: "Guides", href: "/guides" },
          { label: "Architecture multitenant SaaS" },
        ]}
        badges={[
          { label: "5 familles sans classement", variant: "dark" },
          { label: "Test A/B fictif", variant: "neutral" },
          { label: "Coût projet à chiffrer", variant: "muted" },
          { label: "Brouillon privé", variant: "muted" },
        ]}
        heroTitle="Architecture multitenant SaaS :"
        heroTitleEm="que faut-il isoler ?"
        heroDescription="Un SaaS multitenant sert plusieurs organisations dans un même produit ; cela ne signifie pas que tous les clients partagent tout. Une base par client n’est ni automatiquement plus sûre ni automatiquement moins chère : elle n’isole pas à elle seule les fichiers, caches, exports ou outils de support, et elle ajoute une flotte à exploiter. Votre décision consiste à définir ce qui doit être séparé, pourquoi, comment vous le testerez et quel travail récurrent vous acceptez. Ce guide compare cinq familles sans les classer, puis vous donne un protocole fictif avec deux organisations pour vérifier les chemins qui comptent."
        stats={[
          { label: "Couches à examiner", value: "10" },
          { label: "Familles", value: "5" },
          { label: "Organisations fictives", value: "2" },
          { label: "Scénarios A/B", value: "9" },
          { label: "Prix universel", value: "Aucun" },
          { label: "Statut", value: "Privé" },
        ]}
        author={{
          initials: TEAM.quentin.initials,
          name: TEAM.quentin.fullName,
          role: TEAM.quentin.role,
          profileUrl: "/equipe#fondateur",
        }}
        toc={toc}
        tocLabel="Sommaire"
        faqTitle="Questions fréquentes sur l’architecture multitenant d’un SaaS"
        faqItems={faqItems}
        faqMeta={{
          eyebrow: "Questions fréquentes",
          titleStart: "Séparer ce qui compte",
          titleEm: "sans promettre l’impossible",
          titleEnd: ".",
          subtitle:
            "Base, RLS, cache, restauration, offre dédiée et conformité : chaque réponse garde son périmètre et son test.",
        }}
        strategyCta={{
          titleStart: "Faire relire vos choix",
          titleEm: "avant de les transformer en promesse client",
          description:
            "Apportez votre définition du tenant, les couches concernées, le protocole A/B et les inconnues. Nous pouvons examiner l’architecture à tester ; une certification, un avis juridique ou une garantie de sécurité demandent un autre cadre.",
          badges: [
            "Contraintes explicites",
            "Scénarios testables",
            "Report possible",
          ],
          ctaLabel: "Faire relire mes choix d’isolation",
          ctaHref: "/demarrer-un-projet",
          showPhoneCta: false,
        }}
        legalSources={legalSources}
        disclaimer={{
          eyebrow: "Limites",
          title: "Un cadrage d’architecture, pas une certification",
          description:
            "Les exemples et les deux organisations sont fictifs ; le protocole n’a pas été exécuté ici. Les mécanismes, services, contrats et exigences évoluent. Rouvrez les sources et testez le produit réel avant toute décision. Aucun modèle d’isolation, outil, fournisseur, base dédiée ou politique RLS ne garantit à lui seul sécurité, conformité, coût, performance, disponibilité ou restauration.",
        }}
      >
        <GuidePremiumSection
          id="reponse"
          number="01"
          label="Réponse directe"
          readingTime="3 min"
          title="Choisissez la question à prouver avant l’architecture"
        >
          <p>
            Le mot <strong>tenant</strong> désigne ici l’organisation cliente
            que votre produit doit reconnaître : entreprise, espace, filiale ou
            contrat. Ce n’est pas forcément un utilisateur. Plusieurs personnes
            peuvent travailler dans la même organisation, et une personne peut
            parfois appartenir à plusieurs organisations.
          </p>

          <p>
            Microsoft présente l’isolation comme un spectre : une couche peut
            être partagée et une autre dédiée. AWS distingue de la même manière
            les ressources partagées, dédiées et les combinaisons ciblées. Ces
            modèles répondent à des contraintes différentes ; les deux sources
            refusent l’idée d’un choix universel. Consultez les repères
            officiels sur les{" "}
            <SourceLink href="https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/considerations/tenancy-models">
              modèles de tenancy Azure
            </SourceLink>{" "}
            et l’
            <SourceLink href="https://docs.aws.amazon.com/wellarchitected/latest/saas-lens/isolation-mindset.html">
              isolation dans AWS SaaS Lens
            </SourceLink>
            .
          </p>

          <GuideTable
            caption="Quatre sorties loyales avant de figer l’architecture"
            headers={["Situation", "Décision maintenant", "Condition de suite"]}
            rows={[
              [
                "Contraintes simples et explicites",
                "Commencer avec des ressources partagées et des contrôles cohérents.",
                "Écrire le test A/B et une voie de déplacement avant que le volume ou le contrat ne change.",
              ],
              [
                "Une couche porte un risque ou une charge particulière",
                "Isoler cette base, ce stockage, cette file ou ce calcul.",
                "Vérifier que les autres couches ne recréent pas la frontière oubliée.",
              ],
              [
                "Un compte exige une configuration ou un périmètre propre",
                "Étudier une offre ou un déploiement dédié.",
                "Chiffrer déploiement, migrations, supervision, support et sortie.",
              ],
              [
                "Volume, contrat, région ou restauration inconnus",
                "Reporter le choix définitif et financer une expérience ciblée.",
                "Fermer l’inconnue avec une donnée, un essai ou une qualification externe.",
              ],
            ]}
          />

          <GuidePremiumMemo
            eyebrow="Décision dirigeant"
            title="Ne demandez pas « même base ? » sans préciser le résultat"
          >
            <p>
              Demandez plutôt : « quelles données et actions doivent rester
              invisibles à l’organisation B, que se passe-t-il si A consomme
              toute la file, et pouvons-nous restaurer A sans modifier B ? » La
              réponse devient alors testable et chiffrable.
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="couches"
          number="02"
          label="Carte des frontières"
          readingTime="4 min"
          title="Une base dédiée ne sépare pas les neuf autres couches"
        >
          <p>
            La fuite la plus évidente passe par une requête de base de données.
            D’autres franchissements surviennent quand une tâche de fond perd le
            contexte de l’organisation, quand une clé de cache est réutilisée,
            quand un export agrège trop de lignes ou quand l’outil de support
            ouvre le mauvais compte. La carte ci-dessous sert d’inventaire ;
            elle ne prétend pas couvrir toutes les technologies.
          </p>

          <figure className="not-prose my-8">
            <Image
              src={MULTITENANT_IMAGES[0]}
              alt="Dix couches d’un SaaS où la frontière entre organisations doit être définie et testée"
              width={1200}
              height={675}
              className="h-auto w-full rounded-2xl border border-zinc-200 bg-white dark:border-zinc-700"
            />
            <figcaption className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              Carte de travail Hagnéré Code, synthèse des couches citées par les
              documentations AWS et Azure. Chaque flèche appelle un contrôle,
              pas une promesse.
            </figcaption>
          </figure>

          <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
            {[
              [
                "1 · Tenant métier",
                "Qui est le client : groupe, filiale, espace ou contrat ? Qui le crée, le suspend, le fusionne et le ferme ?",
              ],
              [
                "2 · Identité et contexte actif",
                "À quelles organisations la personne appartient-elle ? Comment choisit-elle celle dans laquelle elle agit ?",
              ],
              [
                "3 · Autorisation objet",
                "Peut-elle lire, modifier, supprimer ou exporter cet objet précis dans cette organisation précise ?",
              ],
              [
                "4 · Application et tâches de fond",
                "La requête en ligne, la file, le traitement planifié et la nouvelle tentative transportent-ils le même contexte ?",
              ],
              [
                "5 · Données et fichiers",
                "Tables, blobs, pièces jointes, index et copies de travail utilisent-ils une séparation explicite ?",
              ],
              [
                "6 · Cache et recherche",
                "Une réponse, une clé ou un résultat préparé pour A peut-il être servi à B ?",
              ],
              [
                "7 · Événements et files",
                "Le message nomme-t-il le tenant, l’action, l’objet et la règle de nouvelle tentative ?",
              ],
              [
                "8 · Logs, support et administration",
                "Qui filtre, consulte et agit ? La trace permet-elle d’attribuer une action sans exposer des données inutiles ?",
              ],
              [
                "9 · Sauvegarde, restauration et sortie",
                "Peut-on retrouver, restaurer, déplacer ou supprimer une organisation sans supposer que l’outil le fera ?",
              ],
              [
                "10 · Calcul, réseau, région et déploiement",
                "Quelles ressources sont communes, groupées ou dédiées, et quel rayon d’impact reste partagé ?",
              ],
            ].map(([title, description]) => (
              <div
                key={title}
                className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                  {title}
                </h3>
                <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <InfoBox variant="amber" title="Authentifié ne signifie pas isolé">
            <p>
              AWS rappelle qu’une connexion réussie et une règle générale
              d’autorisation ne suffisent pas à elles seules. OWASP demande un
              contrôle au niveau de l’objet pour chaque fonction qui reçoit un
              identifiant fourni par le client. Un sous-domaine, un rôle, un
              claim de tenant ou un UUID ne ferme donc pas la vérification.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="familles"
          number="03"
          label="Options comparées"
          readingTime="5 min"
          title="Cinq familles d’isolation répondent à des contraintes différentes"
        >
          <p>
            Les mots AWS <em>pool</em>, <em>silo</em> et <em>bridge</em>
            décrivent respectivement le partage, le dédié et leur combinaison.
            Pour décider, le guide les décompose en cinq familles plus
            concrètes. Une même architecture peut utiliser plusieurs lignes du
            tableau.
          </p>

          <figure className="not-prose my-8">
            <Image
              src={MULTITENANT_IMAGES[1]}
              alt="Cinq familles d’isolation : données partagées, namespace, ressources de données dédiées, déploiement dédié et hybride"
              width={900}
              height={675}
              className="h-auto w-full rounded-2xl border border-zinc-200 bg-white dark:border-zinc-700"
            />
            <figcaption className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              Les cinq familles sont des points de départ. Le choix se fait par
              couche et peut évoluer si les contraintes changent.
            </figcaption>
          </figure>

          <GuideTable
            caption="Cinq familles comparées sans score ni gagnant universel"
            headers={[
              "Famille",
              "Ce qui se sépare",
              "Ce qu’elle facilite",
              "Travail à prévoir",
              "Question décisive",
            ]}
            rows={[
              [
                "1 · Données partagées avec clé de tenant",
                "Les lignes et objets portent un contexte d’organisation dans une ressource commune.",
                "Onboarding et évolution d’un ensemble commun.",
                "Contrôles cohérents sur requêtes, jobs, fichiers, caches, exports et support ; charge et coût par tenant à instrumenter.",
                "Pouvez-vous prouver le refus croisé sur chaque chemin ?",
              ],
              [
                "2 · Schéma ou namespace séparé",
                "Chaque tenant reçoit un espace logique dans une infrastructure partagée.",
                "Inventaire et migrations parfois plus lisibles qu’un mélange de lignes.",
                "Provisionnement, version des schémas, connexions, permissions et limites de la ressource commune.",
                "La séparation logique correspond-elle au mécanisme et à la preuve exigés ?",
              ],
              [
                "3 · Base, stockage ou ressource dédiée",
                "Une couche de données ou de calcul est attribuée à un tenant.",
                "Configuration propre, mesure plus directe et certains scénarios de charge ou restauration.",
                "Routage, création, migrations, sauvegardes, supervision et inventaire d’une flotte.",
                "Quelle couche justifie réellement le dédié ?",
              ],
              [
                "4 · Déploiement dédié",
                "Le tenant reçoit une instance plus complète de l’application et de ses ressources ; identité, onboarding ou opérations peuvent rester communs.",
                "Périmètre d’incident et configuration plus distincts dans ce déploiement.",
                "Automatisation de bout en bout, versions, correctifs, astreinte, coûts au repos et expérience commune à préserver.",
                "L’exigence porte-t-elle sur tout le produit ou seulement une partie ?",
              ],
              [
                "5 · Hybride ou isolation ciblée",
                "Le modèle change selon couche, région, volume, risque ou offre.",
                "Conserver le partage là où il convient et isoler seulement ce qui le demande.",
                "Catalogue de configurations, déplacements entre modèles, tests et support de plusieurs chemins.",
                "Pouvez-vous exploiter cette diversité sans variantes manuelles ?",
              ],
            ]}
          />

          <GuidePremiumMemo
            eyebrow="Limite utile"
            title="Dédier la base ne termine pas le travail"
          >
            <p>
              La base peut être propre au client tandis que le calcul, les
              fichiers, le cache, la file, les logs, l’identité, le support et
              le plan de contrôle restent partagés. Inversement, une base
              partagée n’implique pas automatiquement une fuite. Le test porte
              sur les chemins réels, pas sur l’étiquette du modèle.
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="consequences"
          number="04"
          label="Conséquences commerciales"
          readingTime="5 min"
          title="Le choix change l’offre, l’onboarding et le coût d’exploitation"
        >
          <p>
            Le coût cloud n’est qu’une ligne. Une architecture partagée peut
            réduire le coût direct de ressources et simplifier certains
            déploiements ; AWS et Azure formulent ce bénéfice comme une
            tendance, pas comme une garantie. Une architecture dédiée rend
            certaines mesures ou séparations plus directes, mais ajoute une
            flotte à maintenir. Aucun multiplicateur de marché n’est défendable
            ici.
          </p>

          <div className="not-prose my-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "Onboarding",
                "Un partage bien automatisé peut accueillir une organisation par configuration. Une ressource dédiée demande aussi provisionnement, routage et contrôle de capacité.",
              ],
              [
                "Offres",
                "Standard, premium et dédié peuvent refléter des coûts et exigences distincts, à condition que le contrat nomme ce qui change réellement.",
              ],
              [
                "Mises à jour",
                "Une ressource commune concentre le changement. Une flotte exige ordre de déploiement, versions compatibles, suivi des échecs et retour arrière.",
              ],
              [
                "Voisin bruyant",
                "Une charge inhabituelle peut consommer une ressource partagée. Mesure, quotas, files ou isolation ciblée doivent être testés sur le produit.",
              ],
              [
                "Incident",
                "Le partage peut élargir les clients touchés ; le dédié ne réduit que le rayon des couches réellement séparées.",
              ],
              [
                "Restauration",
                "Une sauvegarde globale et une restauration d’un seul tenant sont deux résultats différents. Le second doit être démontré sur une copie.",
              ],
              [
                "Support",
                "L’équipe doit trouver le bon tenant, voir les traces utiles et limiter l’accès d’administration, quel que soit le modèle de base.",
              ],
              [
                "Mesure des coûts",
                "Une ressource dédiée donne souvent une attribution plus directe. Une ressource partagée demande des métriques applicatives par tenant.",
              ],
              [
                "Sortie",
                "Déplacer un tenant entre deux modèles exige données, fichiers, identités, index, secrets, événements en attente et vérification après bascule.",
              ],
            ].map(([title, description]) => (
              <div
                key={title}
                className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <h3 className="m-0 text-base font-semibold text-zinc-950 dark:text-white">
                  {title}
                </h3>
                <p className="mb-0 mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <GuideTable
            caption="Postes à chiffrer avec les données du projet"
            headers={[
              "Poste",
              "Unité à choisir",
              "Inconnue à ne pas mettre à zéro",
            ]}
            rows={[
              [
                "Infrastructure",
                "ressource, stockage, requête, trafic ou capacité réservée",
                "charge de pointe et part réellement attribuable au tenant",
              ],
              [
                "Provisionnement",
                "actions automatiques et interventions humaines par tenant",
                "validation commerciale, région, domaine ou clé propre",
              ],
              [
                "Évolutions",
                "nombre de cibles, durée d’une migration et taux d’échec observé",
                "compatibilité entre versions et retour arrière",
              ],
              [
                "Exploitation",
                "alertes, incidents, restaurations et demandes support",
                "temps humain, astreinte et accès d’urgence",
              ],
              [
                "Sortie",
                "volume à déplacer et étapes de vérification",
                "fichiers, index, événements en attente et interruption acceptable",
              ],
            ]}
          />
        </GuidePremiumSection>

        <GuidePremiumSection
          id="chemin"
          number="05"
          label="Chemin de décision"
          readingTime="4 min"
          title="Reliez chaque contrainte à une preuve et au travail qu’elle crée"
        >
          <p>
            Une demande vague de « serveur dédié » ne suffit pas. Elle peut
            cacher une obligation contractuelle, une question de résidence, un
            besoin de restauration, une crainte de charge ou une habitude
            d’achat. Transformez-la en quatre champs avant de comparer les
            solutions.
          </p>

          <div className="not-prose my-8 grid gap-4 md:grid-cols-4">
            {[
              [
                "1 · Contrainte",
                "Nommer la donnée, l’action, la charge, la région ou l’engagement qui change la décision.",
              ],
              [
                "2 · Preuve",
                "Écrire ce qu’un test, un document ou une mesure devra montrer, avec un refus attendu.",
              ],
              [
                "3 · Option",
                "Choisir la famille la moins complexe qui peut produire cette preuve, sans déclarer le résultat à l’avance.",
              ],
              [
                "4 · Travail",
                "Attribuer provisionnement, migration, supervision, incident, restauration et sortie.",
              ],
            ].map(([title, description]) => (
              <div
                key={title}
                className="rounded-2xl border border-indigo-200 bg-indigo-50 p-5 dark:border-indigo-800 dark:bg-indigo-950/30"
              >
                <h3 className="m-0 text-base font-semibold text-indigo-950 dark:text-indigo-100">
                  {title}
                </h3>
                <p className="mb-0 mt-2 text-sm leading-relaxed text-indigo-800 dark:text-indigo-200">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <GuideTable
            caption="Exemples de contraintes traduites en expériences"
            headers={[
              "Demande initiale",
              "Question à fermer",
              "Expérience",
              "Décision possible",
            ]}
            rows={[
              [
                "« Nous voulons une base par client. »",
                "Faut-il restaurer ce client seul, isoler sa charge ou respecter une exigence écrite ?",
                "Restaurer A sur une copie, mesurer B et relire la clause.",
                "Base dédiée, outil de restauration sélective ou demande à repréciser.",
              ],
              [
                "« Ce grand compte ne doit pas ralentir les autres. »",
                "Quelle ressource sature et à quel volume ?",
                "Charge synthétique A pendant mesure de B, avec quotas et files.",
                "Capacité, quota, file dédiée, ressource ciblée ou déploiement dédié.",
              ],
              [
                "« Ses données doivent rester dans une région. »",
                "Quelles données, copies, sauvegardes, logs et sous-traitants sont concernés ?",
                "Cartographie des flux et preuve fournisseur/contrat à qualifier.",
                "Déploiement régional, stockage dédié ou décision suspendue.",
              ],
              [
                "« Nous vendrons une offre dédiée. »",
                "Qu’est-ce qui est réellement dédié et quel coût récurrent l’offre couvre-t-elle ?",
                "Provisionner, mettre à jour, superviser et supprimer un tenant fictif.",
                "Offre définie, isolation ciblée ou promesse retirée.",
              ],
            ]}
          />

          <InfoBox variant="blue" title="Le report est une décision complète">
            <p>
              Si la clause, le volume, la région ou l’objectif de restauration
              n’existe pas encore, marquez-le « inconnu ». Financez la mesure ou
              la qualification avant de construire une flotte dont personne ne
              sait expliquer le bénéfice.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="protocole"
          number="06"
          label="Expérience reproductible"
          readingTime="7 min"
          title="Deux organisations fictives testent plus que la page de connexion"
        >
          <GuidePremiumCase
            initial="A/B"
            eyebrow="Exemple entièrement fictif — non exécuté"
            title="Atelier Aube et Bureau Boréal"
          >
            <p>
              Atelier Aube utilise `lea@atelier-aube.example` et l’objet
              `A-ALPHA`. Bureau Boréal utilise `yanis@bureau-boreal.example` et
              l’objet `B-BRAVO`. Les comptes, fichiers et données sont
              synthétiques. Aucun résultat de ce protocole n’est présenté comme
              une preuve client ou un test du site Hagnéré Code.
            </p>
          </GuidePremiumCase>

          <figure className="not-prose my-8">
            <Image
              src={MULTITENANT_IMAGES[2]}
              alt="Protocole fictif entre les tenants A et B couvrant lecture, écriture, export, tâche, fichier, cache, logs, sauvegarde et restauration"
              width={720}
              height={720}
              className="mx-auto h-auto w-full max-w-[720px] rounded-2xl border border-zinc-200 bg-white dark:border-zinc-700"
            />
            <figcaption className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              Chaque scénario possède son attendu avant exécution. Un succès ne
              compense jamais l’échec d’une autre couche.
            </figcaption>
          </figure>

          <p>
            OWASP explique qu’un endpoint recevant un identifiant doit vérifier
            si la personne connectée peut effectuer l’action sur l’objet visé.
            La recommandation reste vraie avec un UUID. Le protocole manipule
            donc volontairement les identifiants et ne se contente pas de deux
            connexions réussies. Voir{" "}
            <SourceLink href="https://owasp.org/API-Security/editions/2023/en/0xa1-broken-object-level-authorization/">
              OWASP API1:2023
            </SourceLink>
            . Sa fiche dédiée au{" "}
            <SourceLink href="https://cheatsheetseries.owasp.org/cheatsheets/Multi_Tenant_Security_Cheat_Sheet.html">
              multitenant
            </SourceLink>{" "}
            traite explicitement les clés de cache, les chemins de fichiers et
            le risque de <em>queue injection</em>. La{" "}
            <SourceLink href="https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/approaches/messaging">
              page Azure sur la messagerie multitenant
            </SourceLink>{" "}
            compare files partagées, dédiées et hybrides ainsi que leurs
            identités et workers. En déduire qu’une tâche doit conserver un
            contexte tenant validé est une exigence de conception à tester, pas
            une citation littérale d’OWASP. Chaque scénario ci-dessous vérifie
            donc sa propre couche.
          </p>

          <GuideTable
            caption="Neuf scénarios A/B non compensables"
            headers={[
              "Scénario",
              "Action adverse",
              "Attendu écrit avant le test",
              "Trace à conserver",
            ]}
            rows={[
              [
                "Lecture",
                "A remplace l’identifiant de son objet par `B-BRAVO` dans l’interface et l’API.",
                "Aucun contenu B n’est rendu ; le refus ne révèle pas de donnée B.",
                "Requête, réponse expurgée, version et test automatisé.",
              ],
              [
                "Écriture",
                "A modifie B puis crée un objet portant le contexte B.",
                "Les deux opérations sont refusées et l’état B reste inchangé.",
                "État avant/après et événement d’audit.",
              ],
              [
                "Export",
                "A exporte après insertion de marqueurs distincts A et B.",
                "Le fichier A ne contient aucun marqueur B.",
                "Paramètres, compte, fichier synthétique et empreinte.",
              ],
              [
                "Tâche de fond",
                "Une tâche A est retardée, rejouée et traitée après une tâche B.",
                "Le contexte A reste attaché ; aucun objet B n’est traité ; la nouvelle tentative ne double pas l’effet.",
                "Message expurgé, ordre, résultat et compteur.",
              ],
              [
                "Fichier",
                "A utilise l’URL ou la clé du fichier B pour lire puis écrire.",
                "Lecture et écriture sont refusées.",
                "URL expurgée, politique, réponse et état du fichier.",
              ],
              [
                "Cache",
                "A puis B appellent la même route et le même identifiant local.",
                "Aucune réponse ou invalidation d’A n’est servie à B.",
                "Ordre, clés expurgées, réponses et invalidation.",
              ],
              [
                "Logs et support",
                "Un rôle support filtre A puis lance une action d’administration.",
                "Le filtre A n’affiche pas les événements B ; l’action est attribuée et limitée.",
                "Rôle, filtre, événement et justification.",
              ],
              [
                "Sauvegarde",
                "Le rôle prévu produit une sauvegarde contenant les marqueurs attendus.",
                "Aucune ligne attendue n’est omise silencieusement.",
                "Commande, rôle, inventaire et contrôle de volume synthétique.",
              ],
              [
                "Restauration",
                "A est restauré sur une copie à un instant choisi.",
                "Les objets A sont cohérents, B reste inchangé et les limites sont documentées.",
                "Environnement, instant, inventaires A/B et résultat.",
              ],
            ]}
          />

          <InfoBox
            variant="amber"
            title="Une expérience ciblée, pas un certificat"
          >
            <p>
              Ce protocole révèle des erreurs dans les chemins exercés ; il ne
              certifie ni sécurité ni conformité et ne prouve pas l’absence
              d’autres vulnérabilités. Complétez-le selon les technologies, les
              menaces, les contrats et l’analyse de risque du produit réel.
            </p>
          </InfoBox>

          <GuidePremiumMemo
            eyebrow="Fiche de résultat"
            title="Écrivez attendu, observation, trace et version"
          >
            <p>
              Classez chaque ligne `FERMÉ`, `ÉCHEC`, `NON EXÉCUTÉ` ou `INCONNU`.
              Suspendez la décision si un scénario critique n’est pas fermé.
              Compter huit succès sur neuf ne crée ni note de sécurité ni droit
              d’ignorer la neuvième ligne.
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="rls"
          number="07"
          label="Contrôle de base de données"
          readingTime="4 min"
          title="RLS filtre des lignes ; elle ne protège pas tout le SaaS"
        >
          <p>
            La sécurité au niveau des lignes, appelée <strong>RLS</strong> pour
            <em> Row-Level Security</em>, permet à PostgreSQL de filtrer les
            lignes visibles ou modifiables par les accès normaux. Lorsque RLS
            est activée et qu’aucune politique applicable au rôle et à la
            commande n’existe, PostgreSQL utilise un refus par défaut. La{" "}
            <SourceLink href="https://www.postgresql.org/docs/18/sql-createpolicy.html">
              documentation de `CREATE POLICY`
            </SourceLink>{" "}
            décrit cette condition. Ce mécanisme peut renforcer une base
            partagée ; il ne remplace pas l’autorisation objet de l’application.
          </p>

          <p>
            La{" "}
            <SourceLink href="https://www.postgresql.org/docs/18/ddl-rowsecurity.html">
              documentation PostgreSQL 18
            </SourceLink>{" "}
            précise aussi les exceptions : les superutilisateurs et les rôles
            `BYPASSRLS` contournent toujours les politiques. Le propriétaire de
            la table les contourne normalement, mais `FORCE ROW LEVEL SECURITY`
            peut le soumettre à RLS. `TRUNCATE`, `REFERENCES` et les contrôles
            d’intégrité — notamment les clés primaires, uniques et étrangères —
            ne suivent pas les politiques de lignes de la même manière. Une
            erreur de contrainte peut donc révéler indirectement qu’une valeur
            existe.
          </p>

          <p>
            Plusieurs politiques permissives se combinent par `OR` et les
            restrictives par `AND` ; au moins une permissive doit d’abord
            accorder l’accès. PostgreSQL avertit aussi qu’une politique qui
            consulte d’autres lignes ou tables peut créer une course concurrente
            et laisser fuiter une information. Le rôle réel, la composition des
            politiques, les erreurs observables et les actions parallèles font
            donc partie du test. Le choix d’un verrou ou d’une fonction de
            sécurité exige une revue technique, car il change privilèges et
            performances.
          </p>

          <GuideTable
            caption="Portée loyale d’un contrôle RLS"
            headers={[
              "RLS peut contribuer à",
              "RLS ne prouve pas",
              "Contrôle complémentaire",
            ]}
            rows={[
              [
                "Filtrer les lectures et modifications normales selon une politique.",
                "Que le contexte tenant fourni par l’application est correct.",
                "Tests A/B à l’API et sur les tâches de fond.",
              ],
              [
                "Appliquer un refus par défaut si RLS est activée sans politique applicable.",
                "Que le rôle réel d’exécution ou d’administration est soumis aux politiques.",
                "Inventaire des rôles, `BYPASSRLS`, propriétaires, `FORCE ROW LEVEL SECURITY` et chemins d’urgence.",
              ],
              [
                "Limiter certaines lignes dans une base partagée.",
                "L’isolation des fichiers, caches, index, files, exports ou logs.",
                "Scénario propre à chaque couche.",
              ],
              [
                "Participer à une défense en plusieurs niveaux.",
                "La sécurité, la conformité ou la restauration complète.",
                "Revue d’architecture, analyse de risque et test de sauvegarde/restauration.",
              ],
            ]}
          />

          <InfoBox
            variant="amber"
            title="La sauvegarde possède son propre piège"
          >
            <p>
              PostgreSQL avertit qu’une sauvegarde serait désastreuse si RLS
              omettait silencieusement des lignes. Le paramètre
              `row_security=off` ne désactive pas et ne contourne pas RLS : il
              provoque une erreur lorsqu’une requête serait filtrée, afin de
              détecter le problème. Le bon processus dépend de l’outil réel :
              testez la commande et le rôle de sauvegarde, vérifiez l’échec
              attendu, puis restaurez sur une copie.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="exploitation"
          number="08"
          label="Après la mise en service"
          readingTime="5 min"
          title="Le modèle n’est viable que si l’équipe sait l’exploiter"
        >
          <p>
            Azure appelle{" "}
            <SourceLink href="https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/considerations/control-planes">
              plan de contrôle
            </SourceLink>{" "}
            l’ensemble des responsabilités qui gèrent les tenants : création,
            configuration, routage, cycle de vie, télémétrie ou consommation.
            Les <strong>plans de données</strong> servent leurs requêtes,
            fichiers et traitements. Ils peuvent être partagés, groupés ou
            dédiés. Un petit parc peut couvrir le plan de contrôle par des
            procédures documentées et des scripts, sans construire tout de suite
            un composant logiciel complet.
          </p>

          <p>
            Même avec des données dédiées, l’équipe doit donc savoir où se trouve
            chaque tenant et limiter les actions de support. Plus la flotte et
            le libre-service grandissent, plus l’automatisation de ces
            responsabilités devient utile. Le guide exige une responsabilité et
            une trace ; il n’impose ni produit ni seuil universel.
          </p>

          <GuideTable
            caption="Travail récurrent à attribuer avant de promettre une isolation"
            headers={[
              "Moment",
              "Action à attribuer",
              "Preuve attendue",
              "Échec à prévoir",
            ]}
            rows={[
              [
                "Onboarding",
                "Créer tenant, région, ressources, premier administrateur et routage.",
                "Journal de provisionnement et contrôle A/B initial.",
                "Provisionnement partiel ou relance en doublon.",
              ],
              [
                "Déploiement",
                "Appliquer code, configuration et migrations dans le bon ordre.",
                "Versions par groupe ou tenant et résultat de pipeline.",
                "Une cible échoue tandis que les autres avancent.",
              ],
              [
                "Supervision",
                "Relier santé, charge et coût à l’organisation concernée.",
                "Métriques par tenant ou groupe, sans données sensibles inutiles.",
                "Une moyenne globale masque un tenant dégradé.",
              ],
              [
                "Support",
                "Ouvrir temporairement le bon contexte et attribuer l’action.",
                "Rôle, motif, durée, trace et révocation.",
                "Le support reste dans le contexte précédent.",
              ],
              [
                "Incident",
                "Identifier le rayon d’impact, contenir et communiquer aux comptes touchés.",
                "Liste des tenants réellement concernés et chronologie.",
                "Une ressource commune élargit l’incident.",
              ],
              [
                "Restauration",
                "Restaurer une organisation ou un groupe sur une copie puis vérifier.",
                "Instant, inventaire, dépendances et validation métier.",
                "Les données reviennent sans fichiers, index ou événements.",
              ],
              [
                "Sortie",
                "Exporter, déplacer ou supprimer données, fichiers, identités et références.",
                "Inventaire avant/après et contrôle de l’ancienne destination.",
                "Des copies ou tâches en attente restent actives.",
              ],
            ]}
          />

          <p>
            Azure recommande des déploiements automatisés et le test du modèle
            d’isolation. AWS demande une vue de la santé et de la consommation
            par tenant. Ces principes ne fixent aucun outil ni cadence
            universelle. L’équipe choisit les seuils et le rythme à partir du
            produit, puis conserve les résultats observés.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="contrat"
          number="09"
          label="Promesses et limites"
          readingTime="4 min"
          title="Le contrat doit nommer une frontière vérifiable"
        >
          <p>
            « Instance dédiée », « données isolées » ou « environnement sécurisé
            » restent trop vagues. Une phrase contractuelle utile nomme la
            couche, la ressource, la région, le responsable, le test et les
            exceptions. Faites qualifier juridiquement toute obligation ; ce
            guide ne transforme pas une architecture en conformité.
          </p>

          <ul>
            <li>Quelle entité commerciale correspond au tenant ?</li>
            <li>
              Quelles données, fichiers, index, sauvegardes et logs sont
              concernés ?
            </li>
            <li>
              Le calcul, le réseau, le stockage et le déploiement sont-ils
              partagés, groupés ou dédiés ?
            </li>
            <li>
              Quels rôles Hagnéré Code, client et fournisseurs peuvent
              administrer la couche ?
            </li>
            <li>
              Quel test A/B et quel test de charge seront remis, sur quelle
              version ?
            </li>
            <li>
              Quelle restauration est promise : plateforme entière, groupe ou
              tenant seul ?
            </li>
            <li>
              Comment les migrations, correctifs et retours arrière
              atteignent-ils toutes les cibles ?
            </li>
            <li>
              Comment une organisation change-t-elle de région, d’offre ou de
              modèle ?
            </li>
            <li>
              Quels coûts directs et humains l’offre dédiée doit-elle couvrir ?
            </li>
            <li>Quelles inconnues suspendent encore la promesse ?</li>
          </ul>

          <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-800 dark:bg-emerald-950/30">
              <h3 className="m-0 text-base font-semibold text-emerald-950 dark:text-emerald-100">
                Projet adapté à un cadrage d’architecture
              </h3>
              <p className="mb-0 mt-2 text-sm leading-relaxed text-emerald-800 dark:text-emerald-200">
                Vous connaissez les organisations, les couches sensibles et la
                décision commerciale ; il reste à comparer ou expérimenter les
                modèles et à chiffrer leur exploitation.
              </p>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-800 dark:bg-amber-950/30">
              <h3 className="m-0 text-base font-semibold text-amber-950 dark:text-amber-100">
                Projet à repréciser ou à confier ailleurs
              </h3>
              <p className="mb-0 mt-2 text-sm leading-relaxed text-amber-800 dark:text-amber-200">
                Vous cherchez une certification, une garantie absolue, un avis
                juridique ou un prix sans inventaire. Fermez d’abord l’exigence
                et choisissez le professionnel compétent pour la qualifier.
              </p>
            </div>
          </div>

          <h3>Continuer sans recopier les guides voisins</h3>
          <ul>
            <li>
              utilisez le{" "}
              <Link href="/guides/cahier-des-charges-saas">
                cahier des charges SaaS
              </Link>{" "}
              pour consigner les exigences globales du produit ;
            </li>
            <li>
              vérifiez le{" "}
              <Link href="/guides/mvp-saas-quoi-inclure">
                socle opérationnel du premier client
              </Link>{" "}
              avant de réduire le MVP à ses écrans ;
            </li>
            <li>
              approfondissez les rôles et objets avec le guide{" "}
              <Link href="/guides/droits-acces-application-metier">
                qui peut voir et modifier quoi
              </Link>{" "}
              ;
            </li>
            <li>
              si la décision porte d’abord sur la plateforme, comparez{" "}
              <Link href="/guides/bubble-ou-saas-sur-mesure">
                Bubble et un SaaS sur mesure
              </Link>{" "}
              sur votre propre périmètre.
            </li>
          </ul>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="action"
          number="10"
          label="Action autonome"
          readingTime="3 min"
          title="Produisez une fiche que la technique et la vente peuvent contester"
        >
          <p>
            Si cet exercice vous aide, bloquez un créneau volontaire de 60
            minutes pour une première fiche. Ce nombre n’est ni un délai projet
            ni une estimation du cadrage complet : il borne seulement l’exercice
            qui fait apparaître les inconnues avant qu’une promesse commerciale
            ou une implémentation les transforme en dette.
          </p>

          <ol>
            <li>
              Écrivez ce que « tenant » signifie dans votre produit et trois cas
              ambigus : filiale, consultant multi-clients, groupe ou compte de
              support.
            </li>
            <li>
              Reprenez les dix couches. Pour chacune, marquez « partagée », «
              groupée », « dédiée » ou « inconnu » — jamais zéro.
            </li>
            <li>
              Pour chaque exigence, remplissez : contrainte, preuve, option,
              travail d’exploitation et personne responsable.
            </li>
            <li>
              Choisissez les scénarios A/B critiques. Écrivez les attendus avant
              de demander à l’équipe technique de les exécuter.
            </li>
            <li>
              Chiffrez séparément infrastructure, provisionnement, migrations,
              supervision, incident, restauration et sortie avec vos données.
            </li>
            <li>
              Retenez deux familles à comparer, ou reportez la décision jusqu’à
              la fermeture de l’inconnue principale.
            </li>
          </ol>

          <GuideTable
            caption="Décision finale à inscrire sur la fiche"
            headers={["État des contraintes", "Décision", "Prochaine preuve"]}
            rows={[
              [
                "Partage compatible et tests définis",
                "Démarrer simple avec garde-fous et voie de déplacement.",
                "Exécuter A/B sur la version candidate et conserver les traces.",
              ],
              [
                "Une couche concentre charge, restauration ou exigence",
                "Tester une isolation ciblée.",
                "Comparer résultat et travail récurrent à la version partagée.",
              ],
              [
                "Un compte exige un périmètre propre sur plusieurs couches",
                "Étudier un déploiement dédié et son offre.",
                "Provisionner, mettre à jour, restaurer puis supprimer un tenant fictif.",
              ],
              [
                "Modèles différents selon clients ou régions",
                "Concevoir un hybride exploitable.",
                "Déplacer un tenant fictif entre deux modèles sans perdre ses dépendances.",
              ],
              [
                "Contrainte décisive inconnue",
                "Reporter le choix définitif.",
                "Obtenir le contrat, la mesure, le volume ou le test manquant.",
              ],
            ]}
          />

          <GuidePremiumCase
            initial="?"
            eyebrow="Sortie valable"
            title="Une inconnue bien formulée vaut mieux qu’un dédié par réflexe"
          >
            <p>
              « Nous ne savons pas encore si le client exige une restauration
              individuelle en quatre heures » ouvre une action claire : obtenir
              l’exigence et tester les outils. « Nous ferons une base par client
              pour être tranquilles » crée une promesse sans périmètre ni
              preuve.
            </p>
          </GuidePremiumCase>
        </GuidePremiumSection>
      </GuidePremiumLayout>
    </GuidesShell>
  );
}
