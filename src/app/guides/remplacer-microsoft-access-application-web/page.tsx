import type { Metadata } from "next";
import Link from "next/link";
import {
  GuideInlineCTA,
  GuideTable,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { GuideLayout } from "@/components/guides/guide-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { formatGuideDate, getGuide, guideRobots, guideUrl } from "@/lib/guides";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("remplacer-microsoft-access-application-web");

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
        alt: "Remplacer Microsoft Access sans perdre les données ni les règles métier",
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
    knowsAbout: [
      "Applications métier",
      "Migration de données",
      "Outils internes",
    ],
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
      name: "Remplacer Microsoft Access par une application web",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Microsoft Access va-t-il disparaître ?",
    answer:
      "Non, on ne peut pas dire qu’Access a disparu ou qu’il est globalement abandonné. Access 2021 arrive en fin de support le 13 octobre 2026, tandis qu’Access 2024 est annoncé jusqu’au 9 octobre 2029. Ces dates concernent ces versions nommées : si Access vous est fourni avec Microsoft 365, identifiez séparément votre produit, votre licence et son cycle de mise à jour.",
  },
  {
    question:
      "Peut-on transformer automatiquement une base Access en site web ?",
    answer:
      "Non, pas dans son intégralité. Des outils peuvent transférer les tables et certaines requêtes, mais les formulaires, états, macros, modules VBA et habitudes de travail doivent être compris puis conservés, remplacés ou reconstruits.",
  },
  {
    question: "Faut-il obligatoirement réécrire toute l’application ?",
    answer:
      "Non. Vous pouvez parfois sécuriser la base actuelle, séparer les données de l’interface, déplacer les tables vers SQL Server ou Dataverse, ou ne reconstruire qu’un premier parcours dans le navigateur. La bonne étendue dépend de l’inventaire et des besoins nouveaux.",
  },
  {
    question: "Power Apps est-il le meilleur remplaçant d’Access ?",
    answer:
      "Pas dans tous les cas. Power Apps peut être pertinent dans un environnement Microsoft, mais il faut vérifier les licences, les sources de données, les relations, les volumes, les règles et l’expérience attendue. Comparez-le à un logiciel existant et au sur-mesure sur le même périmètre.",
  },
  {
    question: "Peut-on garder Access et migrer seulement les données ?",
    answer:
      "Oui, c’est une trajectoire intermédiaire possible. Access peut continuer à utiliser des tables liées hébergées dans SQL Server, Azure SQL ou Dataverse. Il faut toutefois tester les requêtes, les performances, les droits, les licences et la façon de revenir en arrière.",
  },
  {
    question: "Comment retrouver les règles cachées dans le code VBA ?",
    answer:
      "Commencez par documenter les modules, mais ne lisez pas seulement le code. Demandez aux utilisateurs de montrer les tâches critiques, les exceptions et les documents obtenus. Reliez ensuite chaque bouton ou calcul à un résultat métier et à un test reproductible.",
  },
  {
    question: "Comment éviter de perdre des données pendant la migration ?",
    answer:
      "Travaillez sur une copie, testez une restauration, répétez la reprise des données et comparez les résultats avant la bascule. Conservez l’ancien outil en lecture seule le temps prévu et écrivez à l’avance les conditions qui déclencheraient un retour en arrière.",
  },
  {
    question:
      "Quelles informations faut-il donner pour obtenir un devis crédible ?",
    answer:
      "Fournissez les fichiers et versions, le nombre d’utilisateurs, l’inventaire des objets, les connexions externes et trois à cinq tâches indispensables. Ajoutez les résultats attendus, les exceptions connues, les données à reprendre et la personne qui validera chaque test.",
  },
];

const inventoryParts = [
  {
    number: "01",
    title: "Les données",
    text: "Tables internes, tables liées, fichiers séparés, pièces jointes et historique réellement nécessaire.",
  },
  {
    number: "02",
    title: "Les écrans",
    text: "Formulaires, sous-formulaires, boutons, recherches et contrôles qui guident le travail quotidien.",
  },
  {
    number: "03",
    title: "Les documents",
    text: "États imprimés, PDF, étiquettes, exports et mises en page attendues par les clients ou les équipes.",
  },
  {
    number: "04",
    title: "Les calculs",
    text: "Requêtes, totaux, contrôles, rapprochements et règles qui transforment les données en décision.",
  },
  {
    number: "05",
    title: "Les automatismes",
    text: "Macros et modules VBA qui enchaînent des actions, affichent une alerte ou préparent un message.",
  },
  {
    number: "06",
    title: "Ce qui se trouve ailleurs",
    text: "Excel, Outlook, Word, imprimantes, chemins réseau, pilotes, SQL, SharePoint et services externes.",
  },
];

function InventoryCards() {
  return (
    <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
      {inventoryParts.map((part) => (
        <div
          key={part.number}
          className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
        >
          <div className="text-xs font-bold tracking-widest text-violet-600 dark:text-violet-300">
            {part.number}
          </div>
          <p className="mb-1 mt-2 font-semibold text-zinc-950 dark:text-zinc-100">
            {part.title}
          </p>
          <p className="mb-0 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {part.text}
          </p>
        </div>
      ))}
    </div>
  );
}

const exitRecords = [
  {
    item: "Formulaire Clôturer une intervention",
    use: "Valider le travail et préparer le compte rendu",
    rule: "Bouton, requête et module VBA",
    future: "À reconstruire dans le pilote",
    test: "Un cas normal et un cas avec pièce manquante donnent les résultats attendus.",
  },
  {
    item: "État Facture client",
    use: "Produire le PDF envoyé au client",
    rule: "État Access et requête source",
    future: "À remplacer",
    test: "Montants, mentions et mise en page sont validés sur trois dossiers.",
  },
  {
    item: "Table Clients",
    use: "Conserver les coordonnées et références",
    rule: "Base liée sur le réseau",
    future: "À transférer après nettoyage",
    test: "Comptage, doublons et champs obligatoires concordent.",
  },
];

function ExitRecordCards() {
  return (
    <div
      className="not-prose my-6 space-y-3"
      role="group"
      aria-label="Exemple de dossier de sortie Access à compléter"
    >
      {exitRecords.map((record) => (
        <dl
          key={record.item}
          className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950 sm:p-5"
        >
          <div>
            <dt className="text-[11px] font-bold uppercase tracking-widest text-violet-600 dark:text-violet-300">
              Élément actuel
            </dt>
            <dd className="mt-1 font-semibold text-zinc-950 dark:text-zinc-100">
              {record.item}
            </dd>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                Utilité métier
              </dt>
              <dd className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                {record.use}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                Où est la règle ?
              </dt>
              <dd className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                {record.rule}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                Sort envisagé
              </dt>
              <dd className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                {record.future}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                Test qui prouvera la reprise
              </dt>
              <dd className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                {record.test}
              </dd>
            </div>
          </div>
        </dl>
      ))}
    </div>
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
          { label: "Remplacer Microsoft Access" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Toute l’entreprise dépend d’une base Access qu’une seule personne comprend ? Découvrez ce qu’il faut inventorier, ce qui peut réellement être transféré et comment choisir entre sécuriser, migrer ou reconstruire."
        heroAction={{ href: "#reponse", label: "Voir les quatre options" }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "01",
            title: "Access peut parfois rester",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "6 parties à inventorier",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "4 trajectoires comparées",
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
            href: "/guides/transformer-excel-en-application",
            label: "Transformer Excel en application métier",
          },
          {
            href: "/guides/reprendre-logiciel-metier-existant",
            label: "Reprendre un logiciel métier existant",
          },
          {
            href: "/guides/erp-ou-logiciel-sur-mesure",
            label: "ERP ou logiciel sur mesure",
          },
          {
            href: "/guides/no-code-ou-sur-mesure",
            label: "No-code ou développement sur mesure",
          },
          {
            href: "/guides/cahier-des-charges-application-metier",
            label: "Cahier des charges d’une application métier",
          },
          {
            href: "/services/outils-internes-sur-mesure",
            label: "Applications et outils internes sur mesure",
          },
        ]}
        faqTitle="Remplacer Access : les questions qui reviennent"
        faqItems={faqItems}
        showWhitePaperPromo={false}
      >
        <p className="lead">
          Votre base Access sert peut-être à préparer les commandes, planifier
          les interventions ou éditer les documents clients. Le problème
          apparaît lorsqu’elle ne fonctionne que sur certains ordinateurs,
          qu’une seule personne comprend ses automatismes ou que les salariés
          doivent y accéder depuis le terrain. Faut-il tout refaire dans une
          application web ? <strong>Pas forcément.</strong>
        </p>

        <p>
          Commencez par comprendre ce que l’outil fait réellement. Le fichier
          contient des données, mais aussi des écrans, des calculs, des
          documents et parfois du code qui applique vos règles de gestion.
          Copier les tables sans reprendre ces usages reviendrait à déménager
          les classeurs d’une entreprise sans expliquer comment elle travaille.
        </p>

        <p>
          Ce guide vous permet de constituer un dossier de sortie, de distinguer
          ce qui peut être transféré de ce qui doit être reconstruit et de
          choisir une migration proportionnée. Vous pourrez aussi conclure que
          garder Access est, pour l’instant, la décision la plus raisonnable.
        </p>

        <GuideToc
          items={[
            { id: "reponse", label: "1. Faut-il vraiment remplacer Access ?" },
            { id: "travail", label: "2. Partir du travail des salariés" },
            { id: "inventaire", label: "3. Inventorier les six parties" },
            { id: "transfert", label: "4. Ce qui peut être transféré" },
            { id: "choix", label: "5. Comparer quatre trajectoires" },
            { id: "pilote", label: "6. Tester sans arrêter l’activité" },
            { id: "devis", label: "7. Comparer les propositions" },
            { id: "premiere-action", label: "8. Votre première action" },
          ]}
        />

        <h2 id="reponse">1. Faut-il vraiment remplacer Access ?</h2>

        <p>
          La décision ne doit pas partir de l’idée qu’Access serait « mort ».
          Elle part de votre version et du besoin qui n’est plus couvert.
          Microsoft annonce la fin du support d’
          <a
            href="https://learn.microsoft.com/en-us/lifecycle/products/access-2021"
            target="_blank"
            rel="noopener noreferrer"
          >
            Access 2021 au 13 octobre 2026
          </a>
          , tandis qu’
          <a
            href="https://learn.microsoft.com/en-us/lifecycle/end-of-support/end-of-support-2029"
            target="_blank"
            rel="noopener noreferrer"
          >
            Access 2024 est annoncé jusqu’au 9 octobre 2029
          </a>
          . Ces dates justifient de vérifier votre situation ; elles ne prouvent
          pas qu’une réécriture est nécessaire. Elles concernent précisément les
          versions 2021 et 2024 : si Access vous est fourni avec Microsoft 365,
          identifiez séparément le produit, la licence et son cycle de mise à
          jour.
        </p>

        <p>Une migration devient sérieusement envisageable lorsque :</p>

        <ul>
          <li>
            des salariés ont besoin d’utiliser l’outil dans un navigateur ;
          </li>
          <li>
            plusieurs sites ou équipes ne peuvent pas travailler correctement
            ensemble ;
          </li>
          <li>
            une seule personne sait réparer les formules, boutons ou exports ;
          </li>
          <li>
            les fichiers liés et les versions locales rendent les données
            incertaines ;
          </li>
          <li>
            de nouvelles connexions, règles de droits ou traces d’activité
            deviennent nécessaires.
          </li>
        </ul>

        <InfoBox variant="blue" title="Le bon premier verdict">
          Une base stable, comprise et utilisée localement sur une version
          supportée peut rester en place. Une base qui bloque l’accès à
          distance, la continuité ou les évolutions mérite un diagnostic. Dans
          les deux cas, l’inventaire vient avant le choix de la technologie.
        </InfoBox>

        <p>
          Si le problème vient surtout d’un fichier partagé sur le réseau,
          Microsoft décrit aussi une correction intermédiaire :{" "}
          <a
            href="https://support.microsoft.com/en-us/access/split-an-access-database"
            target="_blank"
            rel="noopener noreferrer"
          >
            séparer les données de l’interface Access
          </a>{" "}
          et fournir une copie locale de cette interface à chaque utilisateur.
          Microsoft indique que cette organisation peut améliorer les
          performances et réduire le risque d’endommagement du fichier. Testez
          cette option sur une copie : elle ne crée pas une application web et
          ne répond pas à un besoin de navigateur.
        </p>

        <h2 id="travail">
          2. Commencez par ce que vos salariés font réellement
        </h2>

        <p>
          Demandez à des utilisateurs représentant chaque rôle critique de
          montrer les opérations qu’ils ne peuvent pas perdre : ouvrir une
          intervention, valider une commande, éditer une facture, préparer un
          export ou corriger une exception. Ne leur demandez pas d’expliquer
          Access. Demandez-leur de montrer le travail, du point de départ au
          résultat final.
        </p>

        <p>Pour chaque opération, notez cinq choses simples :</p>

        <ol>
          <li>qui la commence et avec quelle information ;</li>
          <li>les écrans, boutons ou recherches utilisés ;</li>
          <li>les vérifications faites avant de valider ;</li>
          <li>le résultat, le document ou le message obtenu à la fin ;</li>
          <li>ce qui se passe quand le cas habituel ne suffit pas.</li>
        </ol>

        <p>
          <strong>Exemple fictif.</strong> Dans une PME de service après-vente,
          le bouton « Clôturer une intervention » ne se contente pas
          d’enregistrer une ligne. Il calcule les frais de déplacement, vérifie
          les pièces utilisées, crée un document PDF et prépare un message dans
          Outlook. Transférer la table « Interventions » ne reprend aucune de
          ces actions. Le futur outil devra soit les reproduire, soit assumer
          une nouvelle façon de travailler.
        </p>

        <h2 id="inventaire">3. Inventoriez les six parties de l’application</h2>

        <p>
          Microsoft décrit une base Access autour de ses tables, requêtes,
          formulaires et états ; des macros et modules peuvent aussi porter son
          fonctionnement. Son guide sur la{" "}
          <a
            href="https://support.microsoft.com/en-US/Access/learn-the-structure-of-an-access-database"
            target="_blank"
            rel="noopener noreferrer"
          >
            structure d’une base Access
          </a>{" "}
          montre également comment produire un rapport détaillé avec le
          Documenteur. Utilisez ce rapport comme point de départ, pas comme
          description complète de votre métier.
        </p>

        <InventoryCards />

        <h3>Le dossier de sortie Access</h3>

        <p>
          Créez une ligne par élément important. Vous n’avez pas besoin de
          décider immédiatement de sa future technologie. Vous devez seulement
          relier l’existant à une utilité et à une preuve de reprise.
        </p>

        <ExitRecordCards />

        <p>
          Le volet des dépendances d’Access peut aider, mais Microsoft précise
          qu’il ne montre pas les macros ni les modules et qu’il est limité dans
          la profondeur des relations affichées. Consultez les{" "}
          <a
            href="https://support.microsoft.com/en-us/access/use-the-object-dependencies-pane-to-see-how-objects-relate"
            target="_blank"
            rel="noopener noreferrer"
          >
            limites du volet Dépendances d’objet
          </a>{" "}
          puis ajoutez manuellement les connexions externes et les règles que
          les utilisateurs viennent de montrer.
        </p>

        <h2 id="transfert">
          4. Ce qui peut être transféré — et ce qui ne l’est pas
        </h2>

        <p>
          Microsoft propose SQL Server Migration Assistant, souvent abrégé SSMA,
          pour préparer une migration d’Access vers SQL Server. L’outil peut
          convertir les tables, colonnes, index, clés étrangères et la plupart
          des requêtes de lecture. En revanche, la{" "}
          <a
            href="https://learn.microsoft.com/en-us/sql/ssma/access/converting-access-database-objects-accesstosql?view=sql-server-ver17"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation de conversion Microsoft
          </a>{" "}
          précise qu’il ne convertit pas les formulaires, états, macros ou
          modules. Le mot « migration » peut donc désigner des travaux très
          différents selon le devis.
        </p>

        <GuideTable
          headers={["Élément", "Transfert assisté possible", "Travail restant"]}
          rows={[
            [
              "Tables, colonnes, index et relations",
              "Oui, après évaluation et correction des incompatibilités",
              "Nettoyer, contrôler les types, compter et rapprocher les données",
            ],
            [
              "Requêtes",
              "Certaines, notamment de nombreuses requêtes de lecture",
              "Examiner celles avec paramètres, croisements, mises à jour ou fonctions propres à Access",
            ],
            [
              "Formulaires et boutons",
              "Non avec SSMA",
              "Concevoir les écrans et reprendre les comportements utiles",
            ],
            [
              "États et documents",
              "Non avec SSMA",
              "Recréer puis comparer le contenu et la mise en page",
            ],
            [
              "Macros et modules VBA",
              "Non avec SSMA",
              "Comprendre chaque règle, décider de la conserver et écrire son test",
            ],
            [
              "Habitudes et exceptions",
              "Non",
              "Observer les utilisateurs et valider une nouvelle façon de travailler",
            ],
          ]}
        />

        <p>
          Le{" "}
          <a
            href="https://learn.microsoft.com/en-us/sql/sql-server/migrate/guides/access-to-sql-server?view=sql-server-ver17"
            target="_blank"
            rel="noopener noreferrer"
          >
            guide Microsoft de migration vers SQL Server
          </a>{" "}
          explique aussi comment produire un rapport d’évaluation avec les
          erreurs et avertissements. Ce rapport indique ce que l’outil technique
          rencontre ; votre dossier de sortie indique ce que l’entreprise ne
          peut pas perdre. Les deux sont nécessaires.
        </p>

        <h2 id="choix">5. Comparez quatre trajectoires, pas quatre slogans</h2>

        <GuideTable
          caption="Les quatre trajectoires possibles après l’inventaire"
          headers={[
            "Trajectoire",
            "Quand elle est raisonnable",
            "Ce qu’elle ne résout pas",
          ]}
          rows={[
            [
              "1. Conserver et sécuriser Access",
              "Usage local stable, version supportée, équipe limitée, aucune fonction web indispensable",
              "Le besoin d’accès navigateur ou d’intégration nouvelle reste entier",
            ],
            [
              "2. Déplacer les données, garder Access provisoirement",
              "Les données partagées posent problème mais les formulaires répondent encore au besoin",
              "L’interface reste liée à Access et doit être maintenue",
            ],
            [
              "3. Choisir un logiciel standard ou une plateforme avec peu de code",
              "Le processus ressemble à un besoin courant et l’entreprise accepte d’adapter certaines habitudes ; la plateforme permet d’assembler l’application avec peu de code",
              "Les licences, limites et dépendances à la plateforme doivent être comparées",
            ],
            [
              "4. Reconstruire progressivement une application web",
              "Les règles propres à l’entreprise, les droits, la mobilité ou les intégrations justifient un outil spécifique",
              "Le sur-mesure ne dispense ni de simplifier les règles ni d’organiser la maintenance",
            ],
          ]}
        />

        <h3>Une étape hybride peut éviter le grand saut</h3>

        <p>
          Après le déplacement des tables vers SQL Server ou Azure SQL, Access
          peut continuer à les utiliser comme tables liées, selon la{" "}
          <a
            href="https://learn.microsoft.com/en-us/sql/ssma/access/linking-access-applications-to-sql-server-azure-sql-db-accesstosql?view=sql-server-ver17"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation Microsoft sur les applications Access liées
          </a>
          . Une approche comparable existe avec{" "}
          <a
            href="https://support.microsoft.com/en-US/Access/get-started-migrate-access-data-to-dataverse"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dataverse
          </a>
          , le service de données en ligne de Microsoft utilisé par Power
          Platform. La page Microsoft consultée applique actuellement ce
          scénario à Access pour Microsoft 365 et Access 2024. Vérifiez donc
          votre version et vos licences. Cela peut réduire le risque d’une
          bascule unique, mais ce n’est ni une application web terminée ni une
          garantie de performance ou de sécurité.
        </p>

        <InfoBox
          variant="amber"
          title="Une étape hybride exige aussi un choix d’authentification"
        >
          Dans sa documentation sur les tables liées, Microsoft avertit qu’avec
          l’authentification SQL Server, le mot de passe peut être stocké sans
          chiffrement dans les tables liées et recommande l’authentification
          Windows lorsque c’est possible. Faites examiner ce point avant de
          distribuer l’interface Access : déplacer les données ne sécurise pas
          automatiquement les connexions.
        </InfoBox>

        <p>
          Si vous hésitez entre une plateforme et un développement spécifique,
          consultez ensuite le comparatif{" "}
          <Link href="/guides/no-code-ou-sur-mesure">
            no-code ou sur-mesure
          </Link>
          . L’inventaire Access doit précéder ce choix : sinon, vous comparez
          des outils sur une liste incomplète de besoins.
        </p>

        <h2 id="pilote">6. Testez un parcours sans arrêter toute l’activité</h2>

        <p>
          Une migration crédible commence sur une copie et sur un parcours
          représentatif. Choisissez une opération assez importante pour prouver
          la méthode, mais assez limitée pour revenir en arrière sans bloquer
          l’entreprise.
        </p>

        <ol>
          <li>
            <strong>Créer une copie saine.</strong> Identifiez tous les fichiers
            Access et les données liées, puis testez une restauration.
          </li>
          <li>
            <strong>Écrire les résultats attendus.</strong> Données, calculs,
            document final, droits et exception doivent être contrôlables.
          </li>
          <li>
            <strong>Répéter le transfert.</strong> Une première reprise sert à
            découvrir les écarts ; elle n’est pas la bascule de production.
          </li>
          <li>
            <strong>Faire essayer par les utilisateurs concernés.</strong> Ils
            rejouent le cas normal et les exceptions connues.
          </li>
          <li>
            <strong>Prévoir le retour.</strong> L’ancien outil reste disponible
            en lecture seule pendant la période décidée, avec des critères de
            retour écrits avant le lancement.
          </li>
        </ol>

        <p>
          Si vous suspectez une compromission ou si une alerte de sécurité est
          en cours, traitez d’abord l’incident : une migration ordinaire ne
          nettoie pas automatiquement un environnement compromis.
        </p>

        <p>
          Lorsque la base traite des données personnelles, la CNIL recommande de
          tester l’intégrité et la restauration des sauvegardes. L’ANSSI demande
          notamment de conserver les moyens de restaurer les anciennes
          sauvegardes pendant une migration. Ces points sont détaillés dans les
          recommandations{" "}
          <a
            href="https://www.cnil.fr/fr/securite-sauvegarder"
            target="_blank"
            rel="noopener noreferrer"
          >
            de la CNIL sur la sauvegarde
          </a>{" "}
          et dans le guide{" "}
          <a
            href="https://messervices.cyber.gouv.fr/documents-guides/anssi_essentiels_migration_1.0.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sécuriser une migration numérique de l’ANSSI
          </a>
          . Adaptez le niveau de contrôle aux données, aux alertes observées et
          aux conséquences d’un arrêt.
        </p>

        <InfoBox
          variant="amber"
          title="Une sauvegarde repérée n’est pas une sauvegarde prouvée"
        >
          Le fichier doit pouvoir être restauré dans un environnement isolé et
          produire des données que le métier reconnaît. Faites ce test avant de
          modifier l’outil de production ou de supprimer une ancienne version.
        </InfoBox>

        <h2 id="devis">
          7. Comparez les propositions sur le travail à reprendre
        </h2>

        <p>
          Deux prestataires ne parlent pas forcément de la même migration.
          Demandez à chacun de rattacher son offre au dossier de sortie et au
          parcours pilote. Une proposition crédible précise ce qui est inclus,
          ce qui reste à confirmer et qui validera le résultat.
        </p>

        <GuideTable
          headers={["Question à poser", "Réponse vérifiable attendue"]}
          rows={[
            [
              "Quels objets et fichiers avez-vous examinés ?",
              "Une liste datée, avec les dépendances et les inconnues restantes",
            ],
            [
              "Que transférez-vous automatiquement ?",
              "Les types d’objets concernés, l’outil utilisé et le rapport d’erreurs",
            ],
            [
              "Que reconstruisez-vous ?",
              "Les écrans, documents et règles reliés à des tests d’acceptation",
            ],
            [
              "Qui nettoie et valide les données ?",
              "Un responsable, une méthode de rapprochement et les exclusions",
            ],
            [
              "Comment se passe la bascule ?",
              "Répétition, interruption éventuelle, ancien outil, retour possible et assistance",
            ],
            [
              "Que posséderons-nous ensuite ?",
              "Comptes, données, documentation, code ou configuration, licences et conditions de sortie",
            ],
          ]}
        />

        <p>
          Le prix ne dépend pas seulement du nombre de tables. Il dépend aussi
          des comportements à comprendre, de la qualité des données, des
          interfaces externes et du niveau de preuve demandé. Pour cadrer le
          futur outil après cet inventaire, utilisez le{" "}
          <Link href="/guides/cahier-des-charges-application-metier">
            cahier des charges d’une application métier
          </Link>
          . Pour comparer les grandes familles de solution, poursuivez avec{" "}
          <Link href="/guides/erp-ou-logiciel-sur-mesure">
            ERP ou logiciel sur mesure
          </Link>
          .
        </p>

        <h2 id="premiere-action">
          8. Votre première action ne touche pas à la production
        </h2>

        <p>
          Sur une copie, identifiez les fichiers Access et les tables liées,
          notez les versions utilisées, lancez le Documenteur et demandez à des
          utilisateurs représentant chaque rôle critique de montrer leurs tâches
          indispensables. Ajoutez ensuite une ligne dans le dossier de sortie
          pour chaque écran, document, règle et connexion rencontrés.
        </p>

        <p>À la fin de ce premier inventaire, vous devez pouvoir choisir :</p>

        <ul>
          <li>
            <strong>garder et sécuriser Access</strong> si l’outil reste adapté
            ;
          </li>
          <li>
            <strong>étudier une étape hybride</strong> si les données sont le
            principal point faible ;
          </li>
          <li>
            <strong>tester un logiciel existant</strong> si votre besoin est
            standard ;
          </li>
          <li>
            <strong>faire chiffrer un parcours web pilote</strong> si vos règles
            propres justifient une reconstruction.
          </li>
        </ul>

        <GuideInlineCTA
          title="Faire cadrer l’avenir de ma base Access"
          description="Indiquez le nombre de fichiers, d’utilisateurs et les trois tâches que l’outil doit absolument continuer à réaliser. Nous commencerons par identifier les preuves manquantes et par déterminer si une stabilisation, un outil existant ou un pilote web est réellement justifié."
          tags={[
            "Access peut parfois rester",
            "Ce qui sera repris, par écrit",
            "Migration progressive",
          ]}
          ctaHref="/demarrer-un-projet"
          ctaLabel="Présenter ma base Access"
        />
      </GuideLayout>
    </GuidesShell>
  );
}
