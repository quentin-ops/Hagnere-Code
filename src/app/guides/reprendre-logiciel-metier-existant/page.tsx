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

const guide = getGuide("reprendre-logiciel-metier-existant");

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
        alt: "Les cinq preuves indispensables pour reprendre un logiciel métier",
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
      name: "Reprendre un logiciel métier existant",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Peut-on reprendre un logiciel qui n’a aucune documentation ?",
    answer:
      "Oui dans certains cas, mais l’absence de documentation augmente l’incertitude et doit être compensée par des preuves exécutées : cloner le dépôt, reconstruire l’application, restaurer les données, observer les parcours métier et réussir une petite livraison réversible. Si ces tests échouent, la nouvelle équipe ne doit pas promettre une maintenance normale avant une phase de sécurisation.",
  },
  {
    question: "Quand faut-il couper les accès de l’ancien prestataire ?",
    answer:
      "Pas au premier jour par réflexe, sauf risque ou décision de sécurité qui impose une révocation immédiate. Il faut d’abord inventorier les comptes, créer les accès nominatifs de remplacement, transférer la propriété des services, vérifier les procédures d’urgence et convenir d’une fenêtre de bascule. Les droits devenus inutiles sont ensuite retirés et l’opération est tracée.",
  },
  {
    question: "Un audit du code source suffit-il pour accepter la reprise ?",
    answer:
      "Non. Un code lisible ne prouve ni la maîtrise de l’hébergement, ni la restauration des données, ni la connaissance des règles métier, ni les droits permettant l’intervention d’un tiers. L’audit doit relier cinq portes : contrôle des actifs, chaîne de livraison, données restaurables, exploitation métier et cadre contractuel.",
  },
  {
    question: "Qui devrait posséder le domaine, le cloud et le dépôt Git ?",
    answer:
      "Pour limiter la dépendance, les actifs structurants devraient être rattachés à une organisation contrôlée par l’entreprise, avec facturation, administrateurs de secours et comptes nominatifs. Le prestataire reçoit les droits nécessaires à sa mission sans devenir l’unique propriétaire opérationnel. Les modalités précises dépendent toutefois du contrat et de l’architecture.",
  },
  {
    question: "Que faire si les droits sur le logiciel ne sont pas clairs ?",
    answer:
      "Ne déduisez pas les droits de modification du simple paiement ou de la remise du dépôt. Rassemblez contrats, avenants, factures, licences tierces et historique des contributeurs, limitez les interventions non urgentes, puis faites analyser le dossier par un professionnel du droit compétent. Ce guide fournit des questions de contrôle, pas un avis juridique.",
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
          { label: "Reprendre un logiciel métier existant" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Changer d’équipe technique ne consiste pas à transférer un ZIP. La reprise devient crédible quand l’entreprise possède ses actifs et qu’une nouvelle équipe a reconstruit l’application, restauré les données, livré une correction et préparé sa propre sortie."
        heroAction={{
          href: "#portes",
          label: "Tester les cinq portes",
        }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Publié le " + formatGuideDate(guide.datePublished)}
        keyPoints={[
          {
            number: "01",
            title: "5 portes non compensables",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "8 preuves à exécuter",
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
            href: "/services/maintenance-evolution",
            label: "Maintenance et évolution d’applications",
          },
          {
            href: "/services/audit-technique",
            label: "Audit technique d’un logiciel",
          },
          {
            href: "/guides/proprietaire-site-internet-code-source",
            label: "Propriété du code source et des accès",
          },
          {
            href: "/guides/cahier-des-charges-application-metier",
            label: "Cadrer les évolutions après la reprise",
          },
          {
            href: "/guides/contrat-tma-application",
            label: "Structurer le contrat TMA après la reprise",
          },
          {
            href: "/guides/calculer-roi-application-metier",
            label: "Calculer le ROI d’une migration",
          },
        ]}
        faqTitle="Reprise d’un logiciel existant : les questions restantes"
        faqItems={faqItems}
        showWhitePaperPromo={false}
      >
        <p className="lead">
          <strong>
            Lundi, 8 h : l’équipe initiale ne répond plus et une livraison doit
            partir avant midi.
          </strong>{" "}
          Vous avez un dépôt Git, un accès au serveur et un fichier nommé «
          sauvegarde ». Pouvez-vous confier le logiciel à une autre équipe ? Pas
          encore. Il faut d’abord prouver que ces éléments correspondent à la
          production et qu’ils permettent de reconstruire, restaurer, déployer
          et revenir en arrière.
        </p>

        <div className="not-prose my-7 grid gap-3 sm:grid-cols-3">
          {[
            [
              "08:10",
              "Observer",
              "Voir incidents, journaux et état des services sans appeler l’ancien prestataire.",
            ],
            [
              "09:30",
              "Restaurer",
              "Remettre une copie protégée des données dans un environnement isolé.",
            ],
            [
              "11:00",
              "Livrer",
              "Déployer un changement réversible puis revenir à la version précédente.",
            ],
          ].map(([time, title, description]) => (
            <div
              key={time}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <p className="mb-2 font-mono text-xs font-semibold text-violet-600 dark:text-violet-400">
                {time}
              </p>
              <p className="mb-1 text-sm font-bold text-zinc-950 dark:text-white">
                {title}
              </p>
              <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                {description}
              </p>
            </div>
          ))}
        </div>

        <p>
          Le « test du lundi 8 h » n’est pas une promesse de délai. C’est une
          façon de rendre la dépendance visible. Un document affirme ; un test
          exécuté montre. Ce guide vous aide à constituer un coffre de reprise,
          à classer chaque porte en vert, ambre ou rouge et à choisir entre
          reprise directe, stabilisation, migration progressive ou réécriture.
        </p>

        <InfoBox
          variant="amber"
          title="Arrêtez cette méthode si un incident cyber est actif"
        >
          Une compromission en cours, une fuite soupçonnée ou un accès hostile
          appellent une réponse à incident adaptée, avec préservation des
          preuves et intervenants compétents. Ce guide traite une passation et
          ne remplace pas ce dispositif.
        </InfoBox>

        <GuideToc
          items={[
            {
              id: "definition",
              label: "1. Ce que signifie vraiment reprendre",
            },
            { id: "urgence", label: "2. Les premières 48 heures" },
            { id: "portes", label: "3. Les cinq portes non compensables" },
            { id: "coffre", label: "4. Constituer le coffre de reprise" },
            { id: "preuves", label: "5. Exécuter la chaîne de preuves" },
            { id: "donnees", label: "6. Données, sauvegardes et secrets" },
            { id: "dette", label: "7. Prioriser la dette utilement" },
            { id: "strategies", label: "8. Comparer quatre trajectoires" },
            { id: "contrat", label: "9. Contrat et réversibilité" },
            { id: "audit", label: "10. Comparer deux audits de reprise" },
            {
              id: "trente-jours",
              label: "11. Un plan adaptable sur trente jours",
            },
            { id: "decision", label: "12. Décider sans faux feu vert" },
            { id: "sources", label: "Sources et limites" },
          ]}
        />

        <h2 id="definition">1. Reprendre signifie transférer la maîtrise</h2>

        <p>
          Une <strong>reprise applicative</strong> transfère la capacité de
          comprendre, exploiter, corriger et faire évoluer un logiciel. Elle ne
          commence donc pas par une liste de nouvelles fonctionnalités. Elle
          commence par une question plus sobre : l’entreprise et la nouvelle
          équipe peuvent-elles maintenir le service sans dépendre d’une personne
          qui n’est plus disponible ?
        </p>

        <p>
          Cinq situations sont souvent regroupées sous le même mot : passer d’un
          prestataire actif à un autre, récupérer une application devenue
          orpheline, stabiliser un outil qui accumule les incidents, moderniser
          un socle en fin de vie ou refaire un produit devenu inadapté. Elles
          n’appellent ni le même niveau d’urgence, ni le même engagement. Un
          audit honnête nomme la situation avant de chiffrer la suite.
        </p>

        <GuideTable
          headers={[
            "Situation",
            "Premier objectif",
            "Ce qu’il ne faut pas promettre",
          ]}
          rows={[
            [
              "Passation organisée",
              "transférer savoir, comptes et exploitation pendant que l’équipe sortante répond",
              "que la documentation suffira sans test",
            ],
            [
              "Logiciel orphelin",
              "retrouver les actifs et reconstruire une connaissance minimale",
              "une maintenance normale dès le premier jour",
            ],
            [
              "Application instable",
              "réduire le risque et rétablir une chaîne de livraison sûre",
              "des évolutions rapides avant stabilisation",
            ],
            [
              "Socle vieillissant",
              "séparer obsolescence gênante et obsolescence simplement visible",
              "qu’un framework récent justifie à lui seul une migration",
            ],
            [
              "Besoin profondément changé",
              "préserver données et continuité pendant l’étude d’une nouvelle cible",
              "une réécriture intégrale sans transition",
            ],
          ]}
        />

        <p>
          Une reprise peut donc se conclure par « pas encore » ou « pas dans ce
          périmètre ». Un litige non tranché sur les droits, un refus d’accès ou
          un domaine exigeant des qualifications non couvertes peuvent suspendre
          la mission. Nommer ces cas protège davantage le client qu’une
          acceptation automatique.
        </p>

        <h2 id="urgence">
          2. Les premières 48 heures : préserver avant de modifier
        </h2>

        <p>
          Le premier risque d’une passation tendue est de détruire la dernière
          possibilité de comprendre le système : couper tous les comptes avant
          d’avoir créé leurs remplaçants, mettre à jour une dépendance en
          production, nettoyer des journaux, écraser un environnement ou lancer
          une migration de données sans retour arrière. Pendant la phase
          initiale, préférez les actions observables et réversibles.
        </p>

        <ol>
          <li>
            <strong>Nommer un responsable interne.</strong> Il porte les
            arbitrages métier, connaît les périodes critiques et décide qui
            reçoit quel accès. Le nouveau développeur ne doit pas devenir par
            défaut le propriétaire de l’entreprise numérique.
          </li>
          <li>
            <strong>Geler les changements risqués.</strong> Les corrections de
            sécurité ou de continuité restent possibles, mais chaque geste doit
            avoir une justification, une sauvegarde adaptée et un retour arrière
            préparé.
          </li>
          <li>
            <strong>Capturer l’état présent.</strong> Copiez le dépôt avec son
            historique, inventoriez les versions déployées, services tiers, DNS,
            tâches planifiées et certificats, sans exposer les secrets dans un
            document partagé.
          </li>
          <li>
            <strong>Protéger les données.</strong> Vérifiez qui peut lire,
            modifier, exporter et supprimer. Une copie destinée aux tests doit
            être isolée et protégée.
          </li>
          <li>
            <strong>Écrire les fenêtres critiques.</strong> Paie, facturation,
            production ou clôture déterminent quand un test est acceptable.
          </li>
          <li>
            <strong>Préparer le canal d’incident.</strong> Qui appelle qui, sur
            quels critères, avec quelle autorité d’arrêt et quelle communication
            aux utilisateurs ?
          </li>
        </ol>

        <p>
          Ne conservez pas les accès de l’ancienne équipe indéfiniment. Il faut
          identifier et prouver la capacité de révocation, créer les comptes
          nominatifs de remplacement, transférer la propriété, tester les
          procédures, puis retirer les droits devenus inutiles et consigner
          l’opération. La{" "}
          <a
            href="https://www.cnil.fr/fr/securite-gerer-les-habilitations"
            target="_blank"
            rel="noreferrer"
          >
            CNIL recommande de gérer les habilitations selon le besoin
          </a>{" "}
          et de supprimer celles qui ne sont plus justifiées dans le périmètre
          des traitements de données personnelles.
        </p>

        <h2 id="portes">3. Les cinq portes non compensables</h2>

        <p>
          Une moyenne générale masque les blocages. Une documentation parfaite
          ne compense pas une sauvegarde impossible à restaurer ; dix tests
          unitaires ne donnent pas les droits contractuels de faire intervenir
          un tiers. Évaluez chaque porte séparément : <strong>VERT</strong> si
          la preuve a été exécutée, <strong>AMBRE</strong> si elle reste
          partielle ou dépendante d’un tiers, <strong>ROUGE</strong> si elle
          manque ou échoue.
        </p>

        <GuideTable
          headers={["Porte", "Preuve verte", "Signal ambre ou rouge", "Effet"]}
          rows={[
            [
              "1. Maîtrise des comptes",
              "actifs détenus par l’entreprise, accès nominatifs et compte de secours testé",
              "compte personnel, mot de passe partagé ou service au nom du prestataire",
              "transférer la propriété avant de dépendre du service",
            ],
            [
              "2. Code et livraison",
              "clone propre, construction technique, version de production, déploiement et retour arrière testés",
              "ZIP isolé, branche inconnue ou procédure orale",
              "limiter la responsabilité à l’investigation",
            ],
            [
              "3. Données restaurables",
              "copie isolée restaurée et contrôles métier réussis",
              "voyant vert, export incomplet ou restauration jamais exécutée",
              "bloquer les changements irréversibles",
            ],
            [
              "4. Exploitation métier",
              "parcours critiques, alertes, fournisseurs, règles et fenêtres connus",
              "connaissance dans une seule tête ou incidents sans propriétaire",
              "organiser observation et transmission",
            ],
            [
              "5. Droits et sortie",
              "droits, licences, responsabilités, données et réversibilité clarifiés",
              "paiement assimilé à une cession ou sortie non documentée",
              "faire analyser avant évolution non urgente",
            ],
          ]}
        />

        <p>
          La couleur n’est pas une note du prestataire sortant. Elle décrit un
          niveau de preuve à une date donnée, sous la responsabilité d’une
          personne nommée. Une porte peut passer d’ambre à vert après un
          transfert de compte ou une restauration réussie. Sans date, test et
          résultat, le vert redevient une opinion.
        </p>

        <h3>Exemple illustratif fictif : aucun score global</h3>

        <p>
          Une PME fictive utilise une application de planification. Le dépôt se
          clone et se construit : code vert. Les administrateurs cloud sont
          encore rattachés à l’agence : comptes ambre. Les sauvegardes sont
          visibles mais la restauration échoue : données rouges. Les parcours
          critiques sont décrits et le contrat doit être relu : exploitation
          verte, droits ambre.
        </p>

        <div
          className="not-prose my-6 flex flex-wrap gap-2"
          aria-label="Exemple fictif d’état des cinq portes"
        >
          {[
            [
              "Code · VERT",
              "border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-300",
            ],
            [
              "Comptes · AMBRE",
              "border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-300",
            ],
            [
              "Données · ROUGE",
              "border-red-200 bg-red-50 text-red-800 dark:border-red-800 dark:bg-red-950/30 dark:text-red-300",
            ],
            [
              "Exploitation · VERT",
              "border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-300",
            ],
            [
              "Droits · AMBRE",
              "border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-300",
            ],
          ].map(([label, classes]) => (
            <span
              key={label}
              className={
                "rounded-full border px-3 py-1.5 text-xs font-semibold " +
                classes
              }
            >
              {label}
            </span>
          ))}
        </div>

        <p>
          Quatre portes sur cinq ne donnent pas « 80 % prêt ». La porte données
          bloque les modifications risquées tant qu’une restauration n’a pas
          réussi. Le verdict utile est : investigation possible, maintenance
          durable non acceptée, priorité à la restauration et au transfert des
          comptes.
        </p>

        <h2 id="coffre">4. Constituer un coffre de reprise vérifiable</h2>

        <p>
          Le coffre de reprise n’est pas un dossier rempli de mots de passe.
          C’est un inventaire sécurisé qui indique pour chaque actif son
          propriétaire, son emplacement, son rôle, les personnes autorisées, la
          preuve testée, la date du contrôle et la procédure de sortie. Les
          secrets restent dans un gestionnaire adapté ; le coffre contient leur
          référence, jamais leur valeur en clair.
        </p>

        <GuideTable
          headers={[
            "Bloc",
            "Éléments à inventorier",
            "Preuve acceptable",
            "Fausse sécurité",
          ]}
          rows={[
            [
              "Identité numérique",
              "domaines, DNS, certificats, messagerie technique, comptes stores",
              "organisation client et administrateur de secours testé",
              "un identifiant envoyé par e-mail",
            ],
            [
              "Code et fabrication",
              "dépôts, historique, versions, dépendances, scripts et registres",
              "clone propre puis construction reproductible",
              "un ZIP sans historique",
            ],
            [
              "Infrastructure",
              "cloud, bases, stockage, files, tâches, supervision et journaux",
              "cartographie reliée aux comptes, factures et accès vérifiés",
              "une capture de console",
            ],
            [
              "Données",
              "schémas, documents, historiques, relations, sauvegardes et clés",
              "restauration isolée et contrôles de cohérence",
              "un CSV non vérifié",
            ],
            [
              "Services tiers",
              "paiement, e-mail, SMS, SSO, API métier et analytics",
              "contrat, limites, propriétaire, test et procédure de rotation",
              "une clé API seule",
            ],
            [
              "Connaissance métier",
              "rôles, règles, exceptions, calendriers et traitements manuels",
              "parcours observés avec les utilisateurs",
              "une documentation jamais confrontée au réel",
            ],
            [
              "Cadre contractuel",
              "contrats, avenants, licences, sous-traitants et réversibilité",
              "dossier analysé dans son ensemble",
              "une facture supposée tout transférer",
            ],
          ]}
        />

        <InfoBox
          variant="blue"
          title="Les colonnes à copier dans votre inventaire"
        >
          Actif ; URL ou emplacement ; organisation propriétaire ;
          administrateurs nominatifs ; dépendance métier ; preuve exécutée ;
          date du dernier contrôle ; inconnue restante ; procédure de sortie.
          Ajoutez un registre séparé pour chaque inconnue avec risque,
          responsable, contournement et condition de fermeture.
        </InfoBox>

        <h2 id="preuves">
          5. Exécuter la chaîne de preuves avant la maintenance
        </h2>

        <p>
          Recevoir les actifs ne prouve pas qu’ils fonctionnent ensemble. La
          nouvelle équipe doit traverser une chaîne minimale, hors production
          d’abord lorsque c’est possible. Chaque étape produit une trace :
          procédure, versions, résultat, anomalie, décision et nom de la
          personne qui valide le comportement métier.
        </p>

        <ol>
          <li>
            <strong>Cloner le dépôt depuis un environnement propre.</strong> Une
            copie déjà configurée peut cacher des fichiers locaux jamais
            versionnés.
          </li>
          <li>
            <strong>Installer et construire l’application.</strong> Les versions
            du langage, dépendances et outils doivent être déterminées sans
            dépendre de la mémoire de l’ancienne équipe.
          </li>
          <li>
            <strong>Reconstituer une configuration de test.</strong> Les secrets
            arrivent par un canal approprié et restent séparés du code.
          </li>
          <li>
            <strong>Restaurer une copie protégée des données.</strong> Ouvrir
            l’application ne suffit pas : contrôlez documents, historiques,
            relations, comptes et volumes attendus.
          </li>
          <li>
            <strong>Rejouer les fonctions critiques.</strong> Un responsable
            métier vérifie cas normaux, exceptions, droits et sorties.
          </li>
          <li>
            <strong>Déployer en préproduction.</strong> La version obtenue doit
            être identifiable et observable.
          </li>
          <li>
            <strong>Livrer une petite correction réversible.</strong> Choisissez
            un changement utile mais limité, avec critère d’acceptation.
          </li>
          <li>
            <strong>Exécuter le retour arrière et vérifier les alertes.</strong>{" "}
            Une procédure jamais jouée et une alerte sans destinataire restent
            des hypothèses.
          </li>
        </ol>

        <InfoBox
          variant="emerald"
          title="Le livrable n’est pas « audit terminé »"
        >
          Demandez une table « attendu / exécuté / résultat / preuve / limite /
          propriétaire / prochaine action ». Elle reste exploitable par
          l’entreprise et par une autre équipe. Un rapport qui ne dit pas ce qui
          a réellement été exécuté entretient la dépendance qu’il devait
          réduire.
        </InfoBox>

        <p>
          Le{" "}
          <a
            href="https://csrc.nist.gov/pubs/sp/800/218/final"
            target="_blank"
            rel="noreferrer"
          >
            NIST Secure Software Development Framework 1.1
          </a>{" "}
          fournit notamment un vocabulaire pour protéger les dépôts, conserver
          versions et documents, inventorier la provenance des composants et
          préparer la fin de support des dépendances. C’est un cadre volontaire
          américain, pas une certification de l’application ni une règle
          juridique française.
        </p>

        <h2 id="donnees">
          6. Données, sauvegardes et secrets : trois objets différents
        </h2>

        <p>
          Une <strong>réplication</strong> recopie rapidement un état, y compris
          parfois une suppression ou une corruption. Une{" "}
          <strong>sauvegarde</strong> conserve un état récupérable selon une
          politique. Un <strong>plan de reprise</strong> organise le
          rétablissement des services, des dépendances et des responsabilités
          dans un ordre compatible avec l’activité. Posséder l’un ne prouve pas
          les deux autres.
        </p>

        <p>
          Pour chaque ensemble de données, écrivez la perte maximale que
          l’entreprise peut accepter et l’interruption maximale qu’elle sait
          absorber. Ce sont des décisions métier, pas des valeurs choisies par
          le cloud. L’ANSSI recommande notamment de définir ces besoins, de
          protéger une copie hors ligne, de tester les restaurations et de
          conserver les configurations et procédures nécessaires dans son{" "}
          <a
            href="https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf"
            target="_blank"
            rel="noreferrer"
          >
            guide 2025 sur les sauvegardes des systèmes d’information
          </a>
          . Les mesures exactes restent à adapter au risque et à l’activité.
        </p>

        <GuideTable
          headers={["Contrôle", "Question à poser", "Test concret"]}
          rows={[
            [
              "Périmètre",
              "bases, fichiers, pièces jointes, historiques et configurations sont-ils couverts ?",
              "rapprocher inventaire des données et catalogue de sauvegarde",
            ],
            [
              "Isolement",
              "une erreur ou un compte compromis peut-il atteindre toutes les copies ?",
              "vérifier droits, séparation et copie protégée selon le risque",
            ],
            [
              "Restauration",
              "qui sait restaurer, dans quel ordre et avec quelles clés ?",
              "reconstruire en environnement isolé et consigner durée et écarts",
            ],
            [
              "Cohérence métier",
              "la base ouverte contient-elle réellement les éléments indispensables ?",
              "contrôler échantillon défini, relations et parcours critiques",
            ],
            [
              "Sortie",
              "les données peuvent-elles être restituées, comprises et réimportées ?",
              "tester format, documentation, complétude et import limité",
            ],
          ]}
        />

        <p>
          Les clés API, certificats, jetons et comptes de service suivent leur
          propre cycle. Notez leur finalité, leur propriétaire, leurs
          consommateurs, leurs droits, leur procédure de révocation et les
          journaux disponibles. L’{" "}
          <a
            href="https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html"
            target="_blank"
            rel="noreferrer"
          >
            OWASP Secrets Management Cheat Sheet
          </a>{" "}
          décrit ces pratiques ; ce guide communautaire ne crée ni fréquence
          universelle de rotation ni obligation contractuelle. Renouvelez ou
          révoquez selon l’exposition, le transfert et le risque documentés.
        </p>

        <p>
          Si le logiciel traite des données personnelles, le changement de
          prestataire n’efface pas les responsabilités prévues par le RGPD. Les
          articles 28 et 32 encadrent notamment la relation de sous-traitance,
          la restitution ou suppression en fin de prestation dans leur
          périmètre, les informations et audits prévus, ainsi que des mesures de
          sécurité adaptées au risque et une capacité de rétablissement. Le{" "}
          <a
            href="https://eur-lex.europa.eu/eli/reg/2016/679/2016-05-04?locale=fr"
            target="_blank"
            rel="noreferrer"
          >
            texte consolidé est disponible sur EUR-Lex
          </a>
          . Il ne transfère pas à lui seul le code, le domaine ou les actifs non
          personnels, et ne signifie pas que tout hébergement doit se situer
          dans l’Union européenne dans tous les cas.
        </p>

        <h2 id="dette">
          7. Prioriser la dette par risque métier, pas par goût technique
        </h2>

        <p>
          La <strong>dette technique</strong> désigne ici un choix, un manque ou
          une accumulation qui rend les changements et l’exploitation plus
          risqués ou plus coûteux. Un framework ancien, beaucoup de lignes de
          code, un faible taux de tests ou un style différent ne suffisent pas à
          classer une application « à refaire ». La priorité relie un défaut
          observable à une conséquence métier.
        </p>

        <GuideTable
          headers={["Priorité", "Critère", "Exemples", "Décision"]}
          rows={[
            [
              "P0 · Continuité menacée",
              "impact critique, probable ou déjà présent, sans contournement sûr",
              "perte de données, accès incontrôlé, production bloquée",
              "sécuriser avec autorité, preuve et retour arrière",
            ],
            [
              "P1 · Exploitation fragile",
              "incident important, restauration ou livraison incertaine",
              "déploiement manuel, alerte absente, dépendance abandonnée exposée",
              "fermer avant les évolutions concernées",
            ],
            [
              "P2 · Évolution coûteuse",
              "la dette ralentit ou rend risquée une famille de changements",
              "zone touchée à chaque demande, tests critiques manquants",
              "traiter avec une évolution qui justifie le coût",
            ],
            [
              "P3 · Confort",
              "aucun impact métier démontré à court terme",
              "nommage, style ou outil préféré par la nouvelle équipe",
              "documenter, ne pas faire passer avant le risque",
            ],
          ]}
        />

        <p>
          Pour chaque ligne, consignez impact, probabilité, détectabilité,
          contournement, dépendances et condition de fermeture. Une anomalie
          silencieuse peut être plus urgente qu’un défaut visible à impact égal.
          Une procédure de mode dégradé réellement exercée peut réduire
          l’urgence sans supprimer le problème.
        </p>

        <InfoBox
          variant="amber"
          title="Un scan automatique ne produit pas un verdict de sécurité"
        >
          Un inventaire de vulnérabilités ou une vérification fondée sur l’
          <a
            href="https://owasp.org/www-project-application-security-verification-standard/"
            target="_blank"
            rel="noreferrer"
          >
            OWASP Application Security Verification Standard (ASVS)
          </a>
          , référentiel ouvert de contrôles pour les applications web, peut
          révéler des éléments à examiner. Aucun outil, absence d’identifiant
          public de vulnérabilité connu — souvent appelé CVE — ou référence à un
          standard ne prouve à lui seul que l’application est certifiée sûre.
          Demandez version du référentiel, périmètre, contrôles exécutés,
          exclusions et contexte d’exploitation.
        </InfoBox>

        <h2 id="strategies">8. Reprendre, stabiliser, migrer ou réécrire ?</h2>

        <p>
          Les quatre trajectoires ne sont pas toujours exclusives. Stabiliser
          peut précéder une reprise durable, une migration ou une réécriture.
          L’arbitrage porte sur le chemin le moins risqué pour le besoin actuel,
          pas sur la technologie préférée de l’équipe entrante.
        </p>

        <GuideTable
          headers={[
            "Trajectoire",
            "Quand elle est cohérente",
            "Preuve minimale",
            "Signal d’alerte",
          ]}
          rows={[
            [
              "Reprendre l’existant",
              "besoin encore couvert, actifs maîtrisés et changements reproductibles",
              "petite livraison et retour arrière réussis",
              "dépendance persistante ou restauration non prouvée",
            ],
            [
              "Stabiliser d’abord",
              "incidents, sauvegardes, alertes ou déploiements rendent l’évolution dangereuse",
              "risques limités, critères de sortie et tests",
              "stabilisation transformée en refonte sans fin",
            ],
            [
              "Migrer progressivement",
              "données et métier utiles, mais composant ou infrastructure durablement bloquants",
              "lots autonomes, coexistence, rapprochement et retour arrière",
              "big bang sans étape vérifiable",
            ],
            [
              "Réécrire",
              "besoin profondément changé ou socle durablement incompatible avec les exigences",
              "cible, données, transition et coût total comparés",
              "seul argument : code ancien ou peu élégant",
            ],
          ]}
        />

        <p>
          Comparez ces réponses sur le même horizon : sécurisation,
          exploitation, temps interne, double système, migration, formation et
          sortie. Le guide pour{" "}
          <Link href="/guides/calculer-roi-application-metier">
            calculer le ROI d’une application métier
          </Link>{" "}
          aide à poser ces hypothèses sans remplacer l’inconnu par zéro. Un
          résultat économique favorable ne compense jamais une donnée non
          récupérable ou des droits non clarifiés.
        </p>

        <h2 id="contrat">
          9. Contrat et réversibilité : les questions à faire clarifier
        </h2>

        <p>
          La remise matérielle du code, le droit de l’utiliser, celui de le
          modifier, les licences des composants et la propriété des comptes sont
          des sujets distincts. En droit français, l’article L131-3 du{" "}
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958"
            target="_blank"
            rel="noreferrer"
          >
            Code de la propriété intellectuelle
          </a>{" "}
          prévoit notamment que chacun des droits cédés soit mentionné
          distinctement et que son exploitation soit délimitée. L’
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039279818"
            target="_blank"
            rel="noreferrer"
          >
            article L113-9
          </a>{" "}
          prévoit un régime particulier pour certains logiciels créés par des
          salariés, tandis que l’
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278919"
            target="_blank"
            rel="noreferrer"
          >
            article L122-6
          </a>{" "}
          décrit des droits d’exploitation du logiciel. Ces textes ne permettent
          pas de conclure sur un contrat isolé, un prestataire externe ou toute
          la chaîne de contributeurs.
        </p>

        <GuideTable
          headers={["Sujet", "Questions à résoudre", "Preuve ou livrable"]}
          rows={[
            [
              "Périmètre",
              "applications, environnements, interfaces et horaires couverts ?",
              "annexe d’actifs et responsabilités sans zone implicite",
            ],
            [
              "Droits et licences",
              "qui peut utiliser, modifier, faire maintenir et sous quelles limites ?",
              "contrats, avenants, licences tierces et analyse adaptée",
            ],
            [
              "Comptes et sous-traitants",
              "qui contracte, paie, administre et peut transférer ?",
              "organisation propriétaire et droits nominatifs",
            ],
            [
              "Données",
              "quoi restituer, dans quel format, avec quelle assistance et suppression ?",
              "procédure testable, contrôles et calendrier",
            ],
            [
              "Incidents",
              "qui décide, intervient, informe et supporte le retour arrière ?",
              "niveaux de service, exclusions et escalade",
            ],
            [
              "Réversibilité",
              "que reçoit l’entreprise à la sortie, quand et à quel coût ?",
              "formats, accès, transmission et test de sortie",
            ],
          ]}
        />

        <InfoBox variant="amber" title="Ce guide ne tranche pas vos droits">
          Rassemblez contrats, avenants, factures, licences open source ou
          commerciales et historique des contributeurs. Faites vérifier
          séparément salariés, prestataires, sous-traitants et composants tiers
          par un professionnel compétent. Le guide sur la{" "}
          <Link href="/guides/proprietaire-site-internet-code-source">
            propriété du code source et des accès
          </Link>{" "}
          donne une première cartographie, pas un avis juridique individuel.
        </InfoBox>

        <p>
          Le{" "}
          <a
            href="https://www.cnil.fr/sites/default/files/2024-03/cnil_guide_securite_personnelle_2024.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Guide de la sécurité des données personnelles 2024 de la CNIL
          </a>{" "}
          recommande, dans le périmètre de la sous-traitance de données
          personnelles, de préciser notamment responsabilités, authentification,
          incidents, assistance, restitution ou destruction et audit des
          mesures. Pour la télémaintenance, il recommande aussi d’encadrer la
          durée d’accès, de le refermer après intervention et de consigner les
          opérations. Ces recommandations sont à adapter au système et au
          risque.
        </p>

        <h2 id="audit">10. Comparer deux propositions d’audit de reprise</h2>

        <p>
          Un audit se compare moins au nombre de jours qu’à la décision qu’il
          rend possible. Aucun délai universel ne convient à la fois à un outil
          isolé et à une plateforme qui facture, échange avec dix services et
          fonctionne en continu. Demandez de distinguer les entrées nécessaires,
          le périmètre observé, les exclusions et les tests inclus.
        </p>

        <GuideTable
          headers={["Question", "Réponse utile", "Réponse insuffisante"]}
          rows={[
            [
              "Que faut-il avant de commencer ?",
              "liste par porte, niveaux d’accès, données de test et interlocuteurs",
              "le code source uniquement",
            ],
            [
              "Qu’allez-vous exécuter ?",
              "clone, construction, restauration, parcours, préproduction et retour arrière selon le périmètre",
              "analyse complète sans protocole",
            ],
            [
              "Quelles exclusions ?",
              "juridique, cyber approfondi, performance ou fonctionnel clairement délimités",
              "tout sera vérifié",
            ],
            [
              "Quels livrables restent au client ?",
              "coffre, preuves, inconnues, dette, procédures et décisions",
              "une restitution orale",
            ],
            [
              "Qu’est-ce qui bloque la maintenance ?",
              "portes rouges et responsabilités non maîtrisées",
              "aucun risque avant examen",
            ],
            [
              "Comment pourra-t-on vous remplacer ?",
              "comptes client, formats de sortie, documentation et assistance",
              "partenaire de long terme sans sortie détaillée",
            ],
          ]}
        />

        <p>
          Le rapport final sépare faits observés, tests réussis, tests échoués,
          limites, interprétations et recommandations. Il nomme aussi les motifs
          de refus : incident actif, litige de propriété, accès refusés ou
          périmètre exigeant des compétences non couvertes. Une certification
          cyber, un avis juridique, une absence totale de dette ou un délai
          garanti n’y sont pas sous-entendus.
        </p>

        <p>
          Hagnéré Code vend des audits, de la maintenance et du développement :
          ce conflit d’intérêt est explicite. La méthode doit permettre de
          conclure à une stabilisation limitée, une migration, une réécriture
          différée, au maintien avec l’équipe actuelle ou à un refus de reprise.
          Sinon, l’audit n’est qu’un devis plus long.
        </p>

        <GuideInlineCTA
          title="Cadrer un audit de reprise avant de signer une maintenance"
          description="Décrivez l’usage critique, les incidents connus, l’équipe sortante et les accès déjà détenus. Nous préciserons d’abord le périmètre vérifiable, les limites et les livrables ; la maintenance n’est pas acceptée avant cet examen."
          tags={["Périmètre écrit", "Preuves exécutées", "Sortie documentée"]}
          ctaLabel="Décrire le logiciel à reprendre"
          ctaHref="/demarrer-un-projet"
        />

        <h2 id="trente-jours">
          11. Un plan adaptable sur les trente premiers jours
        </h2>

        <p>
          La chronologie suivante est un cadre pédagogique, jamais une promesse.
          Sa durée dépend du nombre d’actifs, des accès, de la criticité et des
          tests autorisés. Le principe utile est la succession des décisions :
          sécuriser avant de stabiliser, stabiliser avant d’accélérer.
        </p>

        <GuideTable
          headers={["Période indicative", "Travail", "Livrable", "Décision"]}
          rows={[
            [
              "Jours 1 à 3",
              "responsable, gel, actifs, comptes, données et fenêtres critiques",
              "coffre initial et cinq portes documentées",
              "peut-on poursuivre sans aggraver la continuité ?",
            ],
            [
              "Fin de semaine 1",
              "clone, construction, environnements et version de production",
              "procédure reproductible et inconnues",
              "l’équipe peut-elle reproduire le logiciel ?",
            ],
            [
              "Semaine 2",
              "restauration, parcours, secrets, habilitations et alertes",
              "résultats de restauration et risques prioritaires",
              "données et exploitation sont-elles maîtrisables ?",
            ],
            [
              "Semaine 3",
              "petite correction, recette, livraison et retour arrière",
              "preuve de changement réversible",
              "une maintenance limitée peut-elle commencer ?",
            ],
            [
              "Semaine 4",
              "restitution, contrat, dette et trajectoires",
              "dossier client et recommandation motivée",
              "reprendre, stabiliser, migrer, réécrire ou reporter ?",
            ],
          ]}
        />

        <p>
          Si une preuve critique échoue, la chronologie s’arrête et devient un
          plan de sécurisation. La décision peut être « poursuivre sous
          conditions », à condition de nommer la limite, le responsable et la
          preuve suivante. N’empilez pas des changements sur un état que
          personne ne sait encore restaurer.
        </p>

        <h2 id="decision">
          12. Décider sans transformer l’audit en permission automatique
        </h2>

        <p>
          La conclusion tient en une phrase contrôlable : trajectoire retenue,
          portes encore ambre ou rouges, changements autorisés, risques acceptés
          par la direction, propriétaire interne, preuve suivante et date de
          réexamen. Le mot « reprise » ne doit pas cacher une investigation
          encore ouverte.
        </p>

        <GuideTable
          headers={["Verdict", "Conditions observables", "Action suivante"]}
          rows={[
            [
              "Reprise acceptée",
              "portes maîtrisées au niveau requis, changement réversible et responsabilités écrites",
              "maintenance mesurée avec suivi et revue des accès",
            ],
            [
              "Reprise sous conditions",
              "continuité protégée, mais preuves non critiques encore partielles",
              "limiter le périmètre et fermer chaque condition",
            ],
            [
              "Stabilisation uniquement",
              "données, livraison, alertes ou incidents empêchent le fonctionnement normal",
              "traiter les risques prioritaires avec critères de sortie",
            ],
            [
              "Migration ou réécriture à étudier",
              "blocage durable démontré et alternatives comparées",
              "cadrer un lot réversible sans abandon prématuré",
            ],
            [
              "Report ou autre dispositif",
              "droits non clarifiés, accès refusés, incident actif ou compétence non couverte",
              "obtenir l’autorité, la réponse spécialisée ou la preuve",
            ],
          ]}
        />

        <p>
          Votre action autonome tient en trois gestes : nommez un propriétaire
          interne, placez une preuve exécutée devant chacune des cinq portes,
          puis identifiez la première porte rouge. Tant qu’elle le reste, ne
          demandez pas « combien coûte la maintenance ? », mais « quel test sûr
          permet de fermer ce risque ? ». Ce dossier restera comparable entre
          prestataires et réutilisable lors d’une future sortie.
        </p>

        <h2 id="sources">Sources et limites</h2>

        <p>
          Recherche effectuée le 20 juillet 2026. Cette méthode s’adresse à un
          dirigeant ; elle ne constitue ni audit de cybersécurité certifiant, ni
          réponse à incident, ni avis juridique, ni promesse de reprise. Durées,
          contrôles et priorités doivent être adaptés à l’application, à
          l’activité, aux données et aux obligations réellement applicables.
        </p>

        <ul>
          <li>
            <a
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958"
              target="_blank"
              rel="noreferrer"
            >
              Légifrance — Code de la propriété intellectuelle, article L131-3
            </a>
            , avec les articles L113-9 et L122-6 pour distinguer certains droits
            et régimes ; textes consolidés consultés le 20 juillet 2026.
          </li>
          <li>
            <a
              href="https://eur-lex.europa.eu/eli/reg/2016/679/2016-05-04?locale=fr"
              target="_blank"
              rel="noreferrer"
            >
              EUR-Lex — Règlement général sur la protection des données
            </a>
            , articles 28 et 32, dans le périmètre des données personnelles et
            de la relation de sous-traitance concernée.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/sites/default/files/2024-03/cnil_guide_securite_personnelle_2024.pdf"
              target="_blank"
              rel="noreferrer"
            >
              CNIL — Guide de la sécurité des données personnelles 2024
            </a>
            , fiches sur la sous-traitance et la maintenance, avec les pages
            dédiées aux habilitations et aux sauvegardes.
          </li>
          <li>
            <a
              href="https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf"
              target="_blank"
              rel="noreferrer"
            >
              ANSSI — Sauvegarde des systèmes d’information, version 1.1
            </a>
            , publiée le 27 novembre 2025, pour les objectifs, la protection,
            les tests et l’ordre des dépendances.
          </li>
          <li>
            <a
              href="https://csrc.nist.gov/pubs/sp/800/218/final"
              target="_blank"
              rel="noreferrer"
            >
              NIST — Secure Software Development Framework 1.1
            </a>
            , publié en février 2022, cadre volontaire sur dépôts, versions,
            composants et dépendances.
          </li>
          <li>
            <a
              href="https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html"
              target="_blank"
              rel="noreferrer"
            >
              OWASP — Secrets Management Cheat Sheet
            </a>
            , page vivante consultée le 20 juillet 2026, guide technique
            communautaire non normatif.
          </li>
        </ul>
      </GuideLayout>
    </GuidesShell>
  );
}
