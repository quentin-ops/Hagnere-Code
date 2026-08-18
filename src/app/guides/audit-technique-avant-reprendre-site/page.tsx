import Link from "next/link";
import {
  GuideInlineCTA,
  GuideTable,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import {
  GuideLayout,
  type GuideFAQItem,
  type GuideSidebarKeyPoint,
  type GuideSidebarLink,
} from "@/components/guides/guide-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { WebsiteTakeoverAuditDossier } from "@/components/guides/WebsiteTakeoverAuditDossier";
import { formatGuideDate, getGuide } from "@/lib/guides";
import {
  buildGuideMetadata,
  buildGuideStructuredData,
} from "@/lib/guide-page-seo";

const guide = getGuide("audit-technique-avant-reprendre-site");

export const metadata = buildGuideMetadata(
  guide,
  "Audit technique avant reprise : méthode, preuves, TCO et dossier",
);

const [articleJsonLd, breadcrumbJsonLd] = buildGuideStructuredData(
  guide,
  "Audit technique avant reprise d’un site",
);

const faqItems: GuideFAQItem[] = [
  {
    question: "Un audit technique est-il obligatoire avant chaque reprise ?",
    answer:
      "Non. Une vérification légère peut suffire pour un site peu critique, sans paiement, authentification, données métier mutables, migration ni intégration importante, si l’entreprise contrôle déjà les comptes et si une restauration récente est prouvée. Dès qu’un de ces critères change ou reste inconnu, l’audit doit être élargi. Une absence d’autorisation, un incident actif ou un test dangereux impose d’abord un STOP.",
  },
  {
    question: "Combien coûte et combien de temps dure un audit de reprise ?",
    answer:
      "Il n’existe pas de prix ni de durée universels : une vitrine documentée, une boutique et une application métier n’exigent ni les mêmes accès ni les mêmes essais. Demandez un devis qui nomme les actifs, environnements, parcours, preuves, exclusions, livrables et critères d’arrêt. Comparez ensuite le coût complet des trajectoires sur 12, 36 et 60 mois, sans transformer les montants inconnus en zéro.",
  },
  {
    question: "Peut-on auditer un site sans code source ni accès interne ?",
    answer:
      "Une pré-vérification publique peut observer le rendu, le comportement HTTP, certains signaux SEO, la performance ou l’accessibilité. Elle ne peut pas prouver la restauration, le build, le déploiement, les secrets, les dépendances, les données ni le retour arrière. Le rapport doit donc conclure « périmètre public uniquement », jamais « site reprenable ».",
  },
  {
    question: "Une sauvegarde présente suffit-elle pour accepter la reprise ?",
    answer:
      "Non. Il faut au minimum identifier ce qu’elle contient, sa date, son intégrité, sa rétention, les clés nécessaires et la perte de données acceptable, puis restaurer une copie isolée et réconcilier les éléments attendus. Une archive visible dans un tableau de bord est une déclaration de sauvegarde, pas une preuve de restauration.",
  },
  {
    question: "Un build réussi ou un scan automatique suffisent-ils ?",
    answer:
      "Non. Un build ne prouve ni l’artefact réellement publié, ni les migrations de données, ni les effets différés, ni le rollback. De même, un SBOM sans analyse, un scan d’accessibilité automatisé, une mesure Lighthouse isolée ou une propriété Search Console ne valident qu’une partie du domaine concerné. La preuve doit être reliée à un périmètre, une date, un environnement et un résultat observé.",
  },
  {
    question: "Faut-il utiliser des données réelles dans la copie de test ?",
    answer:
      "Utilisez des données fictives ou anonymisées par défaut. Si une exception est réellement nécessaire, elle doit être justifiée, minimisée, autorisée, protégée comme la production, tracée puis purgée. Une simple réduction du volume ne rend pas des données personnelles anonymes.",
  },
  {
    question: "Un code ancien signifie-t-il qu’il faut refaire le site ?",
    answer:
      "Non. L’âge ne décide pas. Comparez la capacité de restauration, le support des dépendances, les vulnérabilités exploitables, le coût des mises à niveau, la qualité de l’exploitation et le besoin métier. Stabiliser l’existant peut être préférable ; reconstruire devient rationnel seulement si les preuves et le TCO montrent un blocage structurel.",
  },
  {
    question: "Quelle différence entre audit, maintenance et pentest ?",
    answer:
      "L’audit de reprise décrit un état de départ et les preuves nécessaires pour confier l’exploitation. La maintenance organise les interventions futures. Un test d’intrusion cherche des vulnérabilités dans un périmètre autorisé et ne remplace ni l’inventaire des comptes, ni la restauration, ni la décision économique. Ces prestations peuvent se compléter sans être confondues.",
  },
  {
    question: "Que doit contenir le livrable final ?",
    answer:
      "Une synthèse dirigeant d’une page, le périmètre, les actifs et intervenants, la méthode, le registre de preuves, les résultats, les limites, les P0/P1/P2, les actions interdites, les responsables et échéances, les quatre trajectoires comparées, le TCO documenté et les références d’artefacts. Les captures et journaux détaillés restent en annexe selon leur sensibilité.",
  },
  {
    question: "Quand faut-il arrêter l’audit ordinaire ?",
    answer:
      "Arrêtez les changements ordinaires si l’autorité d’agir n’est pas établie, si une compromission est possible, si une opération destructive précéderait une restauration prouvée, si le test ne peut pas être isolé ou si un litige bloque l’action. Préservez les faits et faites intervenir les compétences cyber, juridiques, DPO, assureur ou fournisseur adaptées au cas.",
  },
];

const keyPoints: GuideSidebarKeyPoint[] = [
  {
    number: "60 s",
    title: "STOP ou continuer",
    description: "",
    color: "blue",
  },
  {
    number: "03",
    title: "Niveaux d’audit",
    description: "",
    color: "violet",
  },
  {
    number: "18",
    title: "Domaines de preuves",
    description: "",
    color: "emerald",
  },
  {
    number: String(guide.readTimeMin),
    title: `${guide.readTimeMin} minutes de lecture`,
    description: "",
    color: "amber",
  },
];

const relatedLinks: GuideSidebarLink[] = [
  {
    href: "/guides/reprendre-maintenance-site-autre-agence",
    label: "Organiser la passation du site",
  },
  {
    href: "/guides/proprietaire-site-internet-code-source",
    label: "Prouver les droits, comptes et livrables",
  },
  {
    href: "/guides/site-internet-en-panne-que-faire",
    label: "Traiter une panne ou un incident actif",
  },
  {
    href: "/guides/cout-maintenance-site-internet",
    label: "Comparer le coût de maintenance",
  },
  {
    href: "/guides/refonte-sans-perdre-son-seo",
    label: "Préparer une migration avec changement d’URL",
  },
];

const tocItems = [
  { id: "glossaire", label: "Comprendre les termes essentiels" },
  { id: "stop-60-secondes", label: "STOP ou continuer en 60 secondes" },
  { id: "niveau", label: "Choisir le bon niveau d’audit" },
  { id: "livrable", label: "Définir le résultat attendu" },
  { id: "preuves", label: "Distinguer affirmation et preuve" },
  { id: "domaines", label: "Couvrir les 18 domaines" },
  { id: "restauration", label: "Restaurer et réconcilier les données" },
  { id: "livraison", label: "Prouver build, release et rollback" },
  { id: "qualite", label: "Sécurité, exploitation et qualité web" },
  { id: "dossier", label: "Créer le dossier local de décision" },
  { id: "trajectoires", label: "Comparer quatre trajectoires et le TCO" },
  { id: "cas", label: "Lire quatre cas fictifs" },
  { id: "contrat", label: "Écrire réserves et responsabilités" },
  { id: "sources", label: "Sources mondiales et limites" },
];

const auditFamilies = [
  {
    number: "01",
    title: "Autorité, comptes et façade internet",
    summary:
      "Savoir qui peut agir, payer, récupérer et renouveler avant de toucher à la production.",
    domains: [
      {
        title: "Autorisation, propriété et contrôle",
        proof:
          "Mandat d’intervention, titulaire ou contractant, administrateur opérationnel, facturation, récupération, second administrateur et date de retrait des anciens accès.",
        risk: "Une connexion réussie ne prouve ni le droit d’agir ni la pérennité du contrôle.",
      },
      {
        title: "Domaine, DNS, TLS, CDN et WAF",
        proof:
          "Registrar, titulaire, échéance, NS autoritatifs, délégation et glue éventuelle, zone DNS exportée, TTL, état DNSSEC, DS publié au parent, DNSKEY et algorithmes, propriétaire des clés, procédure de rollover ou de désactivation, CAA, MX, SPF, DKIM, DMARC, certificats, origine, règles CDN/WAF, compte de secours, propriétaire du rollback, confiance des observations publiques, alertes et procédure de retour arrière.",
        risk: "Une modification de domaine ou de DNS peut rendre tout le site, la messagerie ou les sous-domaines indisponibles. Une délégation ou un état DNSSEC inconnu bloque toute bascule DNS jusqu’à validation avant et après changement.",
      },
      {
        title: "Infrastructure, IaC et environnements",
        proof:
          "Topologie, fournisseurs, régions, comptes de facturation, quotas, production/préproduction, infrastructure as code, images, stockage et responsabilités partagées.",
        risk: "Selon le service, le contrat et le modèle de responsabilité partagée, « le cloud s’en occupe » peut laisser sauvegardes, secrets, réglages et journaux à la charge du client.",
      },
    ],
  },
  {
    number: "02",
    title: "Code, fabrication et chaîne logicielle",
    summary:
      "Reproduire ce qui est déployé et comprendre les briques que la nouvelle équipe hérite.",
    domains: [
      {
        title: "Code, historique et build",
        proof:
          "Dépôt complet, branche réellement en production, tags, historique, instructions, versions de runtime, build depuis un environnement propre, artefact identifiable et contrat, licence ou cession précisant les droits utiles pour utiliser, reproduire, modifier, maintenir et, si prévu, remettre le code à un tiers.",
        risk: "Un ZIP ou un build vert peut différer du code réellement servi. La possession des fichiers ne prouve ni la titularité ni l’étendue des droits transmis.",
      },
      {
        title: "CI/CD, artefact, migrations et rollback",
        proof:
          "Pipeline, runners, registres, promotions d’environnement, migrations de schéma, health checks, cache, rollback ou fix-forward et réconciliation des effets différés.",
        risk: "« Publier puis annuler » ne retire pas forcément une migration, un e-mail, un paiement, un webhook ou un job déjà exécuté.",
      },
      {
        title: "Dépendances, SBOM, licences et fin de support",
        proof:
          "Packages directs, transitifs et runtime, plugins, thèmes, images, lockfiles, provenance, licences, titulaire, transférabilité, vulnérabilités et EOL/EOS.",
        risk: "Un SBOM aide à inventorier ; il ne conclut seul ni sur l’exploitabilité d’une vulnérabilité ni sur les droits de licence.",
      },
    ],
  },
  {
    number: "03",
    title: "Identités, données et continuité",
    summary:
      "Éviter qu’un transfert de comptes ou une restauration crée une perte, une fuite ou une dépendance cachée.",
    domains: [
      {
        title: "Identités, secrets et comptes de service",
        proof:
          "Coffre contrôlé par l’entreprise, MFA, récupération, rôles nominatifs, OIDC, clés de signature, SMTP, paiement, certificats, rotation et révocation.",
        risk: "Après un transfert, des collaborateurs, webhooks, deploy keys ou secrets peuvent rester actifs.",
      },
      {
        title: "Données, flux et migrations",
        proof:
          "Cartographie des bases, fichiers, stockages objets, files d’attente, caches et index, puis schémas, volumes, destinations, imports/exports, migrations, cohérence et réconciliation.",
        risk: "Une page qui s’affiche ne prouve pas que commandes, pièces jointes, consentements ou traitements différés ont suivi.",
      },
      {
        title: "Sauvegardes, restauration, RPO et RTO",
        proof:
          "Périmètre, fréquence, rétention, copie séparée, intégrité, chiffrement et clés, source saine, restauration isolée chronométrée, perte acceptable et recette.",
        risk: "Une sauvegarde présente mais jamais restaurée reste une promesse ; une copie compromise peut réintroduire l’incident.",
      },
    ],
  },
  {
    number: "04",
    title: "Fonctions, exploitation et sécurité",
    summary:
      "Prouver que le service utile fonctionne et que la nouvelle équipe saura voir puis traiter les écarts.",
    domains: [
      {
        title: "Intégrations et parcours critiques",
        proof:
          "Formulaire, paiement, rendez-vous, espace client, e-mail, CRM, webhooks et jobs testés de bout en bout avec données fictives et résultat final observable.",
        risk: "Le message vert du navigateur ou l’acceptation d’une API ne prouve pas la réception ni la réconciliation.",
      },
      {
        title: "Journaux, métriques et alertes",
        proof:
          "Sources de logs, error tracking, métriques, rétention, accès, destinataires, seuils, tableau de bord, test d’alerte et main courante.",
        risk: "Sans observation, une équipe peut reprendre le site sans savoir qu’un parcours échoue silencieusement.",
      },
      {
        title: "Sécurité, authentification et incident",
        proof:
          "Périmètre de test autorisé, MFA, moindre privilège, sessions, correctifs, exposition, vulnérabilités prioritaires, procédure d’incident et limites explicites.",
        risk: "Un audit de reprise n’est ni un pentest exhaustif ni une garantie d’absence de compromission.",
      },
    ],
  },
  {
    number: "05",
    title: "Performance, visibilité et accessibilité",
    summary:
      "Conserver une référence avant de changer ce que voient les utilisateurs et les moteurs.",
    domains: [
      {
        title: "Performance et capacité",
        proof:
          "Mesures terrain lorsque disponibles, LCP/INP/CLS, tests de laboratoire contextualisés, volumes, pics, quotas, cache, temps de réponse et seuils acceptés.",
        risk: "Un score Lighthouse isolé n’est ni une mesure terrain ni une preuve de capacité sous charge.",
      },
      {
        title: "SEO et analytics",
        proof:
          "Inventaire des URL, statuts, canonicals, robots, sitemaps, données structurées, rendu, maillage, Search Console, analytics, conversions et référence avant migration.",
        risk: "Posséder Search Console ne prouve pas que les pages utiles sont indexables ni que le suivi de conversion est juste.",
      },
      {
        title: "Accessibilité",
        proof:
          "Périmètre, critères visés, contrôles automatiques et manuels, clavier, focus, zoom, formulaires, contrastes, technologies d’assistance et limites.",
        risk: "Un scan automatisé seul ne permet pas de revendiquer une conformité WCAG.",
      },
    ],
  },
  {
    number: "06",
    title: "Données personnelles, exploitation et sortie",
    summary:
      "Encadrer le prestataire aujourd’hui et rendre une nouvelle passation possible demain.",
    domains: [
      {
        title: "RGPD, sous-traitants, transferts et rétention",
        proof:
          "Rôles, article 28 lorsque applicable, finalités, catégories de données/personnes, instructions, sécurité, sous-traitants ultérieurs, transferts, incidents, restitution, suppression et audit.",
        risk: "Le mot « maintenance » ne qualifie pas seul le rôle ; les traitements et accès réels doivent être examinés.",
      },
      {
        title: "Documentation, support et responsabilité",
        proof:
          "Runbook, contacts, horaires, escalade, SLA, RACI, changements, incidents connus, dette acceptée, maintenance et éléments hors périmètre.",
        risk: "Une documentation volumineuse mais non rejouée peut masquer l’absence de procédure exploitable.",
      },
      {
        title: "Réversibilité et paquet de sortie",
        proof:
          "Comptes, code, données, médias, configurations, journaux utiles, contrats, licences, formats, délais, assistance, suppression et répétition de passation.",
        risk: "La reprise n’est durable que si l’entreprise peut encore changer d’équipe sans dépendre d’une personne ou d’un format fermé.",
      },
    ],
  },
];

const proofLevels = [
  [
    "Affirmation",
    "« Nous avons des sauvegardes » ou « le site est sécurisé ».",
    "Oriente la question, mais ne ferme aucune porte.",
  ],
  [
    "Document",
    "Contrat, facture, capture, runbook, export ou rapport daté.",
    "Utile si son auteur, son périmètre, sa fraîcheur et sa correspondance avec l’environnement sont vérifiables.",
  ],
  [
    "Observation",
    "Connexion propre, inventaire vu dans le compte, journal ou résultat contrôlé.",
    "Prouve un état à une date ; ne démontre pas automatiquement la reprise complète.",
  ],
  [
    "Essai reproductible",
    "Restauration, build, déploiement isolé, parcours de bout en bout, rollback ou réconciliation.",
    "Preuve la plus forte pour la capacité testée, avec limites et artefacts conservés.",
  ],
];

const trajectoryRows = [
  [
    "Mise sous contrôle",
    "Le site fonctionne et la priorité est de récupérer comptes, preuves, sauvegardes et exploitation sans transformation majeure.",
    "Dépendance cachée non levée ou dette reportée.",
    "Contrôle client, restauration, accès nominatifs, runbook et périmètre de maintenance.",
  ],
  [
    "Stabilisation ciblée",
    "Le produit est récupérable ; quelques défauts mesurés bloquent la maintenance ou la fiabilité.",
    "Accumuler des rustines si la cause est structurelle.",
    "P0/P1 corrigés, tests, observabilité, mises à niveau et dette résiduelle acceptée.",
  ],
  [
    "Migration progressive",
    "L’hébergement, la plateforme, la maîtrise opérationnelle ou une brique crée le risque dominant, tandis que les fonctions restent maîtrisées.",
    "Double exploitation, parité incomplète, données ou SEO dégradés.",
    "Lots réversibles, parité prouvée, réconciliation, bascule et rollback.",
  ],
  [
    "Reconstruction ou remplacement",
    "Le code ou la plateforme est irrécupérable, non supporté ou durablement plus coûteux à remettre sous contrôle.",
    "Dérive de périmètre, délai, nouveaux bugs et perte de données/SEO.",
    "Périmètre commun, reprise des données, critères d’acceptation, sortie et bénéfice mesuré.",
  ],
];

const fictitiousControlTcoRows = [
  [
    "Transition et mise sous contrôle",
    "7 500 €",
    "36 mois : 7 500 € · 60 mois : 7 500 €",
  ],
  [
    "Temps interne",
    "2 000 €",
    "36 mois : 2 000 € · 60 mois : 2 000 €",
  ],
  [
    "Exploitation et support",
    "14 400 €",
    "36 mois : 43 200 € · 60 mois : 72 000 €",
  ],
  [
    "Licences et services",
    "1 800 €",
    "36 mois : 5 400 € · 60 mois : 9 000 €",
  ],
  [
    "Continuité et coexistence",
    "1 000 €",
    "36 mois : 1 000 € · 60 mois : 1 000 €",
  ],
  [
    "Réserve de risque",
    "800 €",
    "36 mois : 800 € · 60 mois : 800 €",
  ],
  [
    "Sortie et réversibilité",
    "3 000 €",
    "36 mois : 3 000 € · 60 mois : 3 000 €",
  ],
  [
    "Total fictif",
    "30 500 €",
    "36 mois : 62 900 € · 60 mois : 95 300 €",
  ],
];

export default function Page() {
  return (
    <GuidesShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <GuideLayout
        breadcrumbs={[
          { label: "Guides", href: "/guides" },
          { label: "Audit avant reprise d’un site" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Avant de confier un site à une nouvelle équipe, choisissez entre audit léger, audit complet ou STOP, vérifiez 18 domaines, puis comparez mise sous contrôle, stabilisation, migration et reconstruction pour le même résultat attendu."
        heroAction={{
          href: "#stop-60-secondes",
          label: "Vérifier les STOP · 60 s",
        }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={keyPoints}
        relatedLinks={relatedLinks}
        faqTitle="Questions fréquentes avant la reprise technique d’un site"
        faqItems={faqItems}
        showWhitePaperPromo={false}
        showSidebarCta={false}
      >
        <p className="lead">
          Une nouvelle agence vous promet de reprendre votre site. Avant de lui
          donner un accès de production, la bonne question n’est pas « le site
          a-t-il l’air de fonctionner ? », mais{" "}
          <strong>« qu’est-ce qui a réellement été vérifié ? »</strong>. Un site
          visible ne démontre ni que votre entreprise contrôle le domaine, ni
          qu’une sauvegarde se restaure, ni que le code publié peut être
          reconstruit, ni que les formulaires, paiements et données arrivent au
          bon endroit. Commencez par éliminer cinq situations de STOP,
          choisissez un audit proportionné, documentez les résultats et les
          inconnues, puis décidez entre mise sous contrôle, stabilisation,
          migration progressive ou reconstruction. Le verdict reste toujours
          limité aux éléments vérifiés et à la date des essais.
        </p>

        <nav
          aria-label="Deux accès rapides dans le guide"
          className="not-prose grid gap-3 sm:grid-cols-2"
        >
          <a
            href="#stop-60-secondes"
            className="flex min-h-11 items-center justify-center rounded-xl bg-zinc-950 px-4 py-3 text-center text-sm font-bold text-white no-underline hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 dark:bg-white dark:text-zinc-950"
          >
            Vérifier un STOP en 60 secondes
          </a>
          <a
            href="#dossier"
            className="flex min-h-11 items-center justify-center rounded-xl border border-violet-300 bg-violet-50 px-4 py-3 text-center text-sm font-bold text-violet-950 no-underline hover:bg-violet-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 dark:border-violet-800 dark:bg-violet-950/30 dark:text-violet-100"
          >
            Ouvrir la grille et le dossier local
          </a>
        </nav>

        <InfoBox variant="emerald" title="La réponse en une phrase">
          Autorisez la reprise seulement lorsque les portes applicables à votre
          site sont prouvées ; une déclaration, un build réussi, une sauvegarde
          présente ou une page d’accueil verte ne suffisent jamais seuls.
        </InfoBox>

        <p>
          Ce guide ne cherche pas des défauts pour vendre une refonte. Il vous
          aide à acheter le bon niveau de vérification, à distinguer un blocage
          d’une amélioration, à conserver les preuves utiles et à comparer des
          options au même résultat métier. Vous pouvez aussi télécharger le{" "}
          <a href="/ressources/dossier-audit-reprise-site.txt" download>
            dossier autonome d’audit et de reprise
          </a>{" "}
          pour travailler hors ligne, sans transmettre de secret à ce site.
        </p>

        <GuideToc items={tocItems} />

        <h2 id="glossaire">Le glossaire minimum pour décider sans jargon</h2>
        <p>
          Ces termes reviennent dans le dossier. Les comprendre évite de valider
          une promesse qui ne porte pas sur le même objet.
        </p>
        <dl className="not-prose grid gap-3 sm:grid-cols-2">
          {[
            [
              "RPO",
              "Point de reprise visé : ancienneté maximale acceptable des données restaurées, donc intervalle temporel de perte possible défini par le métier.",
            ],
            [
              "RTO",
              "Délai visé pour remettre le service utile en état, avec ses dépendances et ses contrôles.",
            ],
            [
              "SBOM",
              "Inventaire des composants logiciels ; il aide l’analyse mais ne prouve seul ni sécurité, ni licence, ni maintenabilité.",
            ],
            [
              "IaC",
              "Infrastructure as Code : description versionnée de ressources techniques, à rapprocher de ce qui existe réellement.",
            ],
            [
              "Sous-traitant RGPD",
              "Acteur qui traite des données personnelles pour le compte du responsable, selon ses instructions documentées.",
            ],
            [
              "Rollback / fix-forward",
              "Retour vers un état antérieur ou correction vers une nouvelle version ; aucun des deux n’annule automatiquement les écritures déjà produites.",
            ],
            [
              "DNSSEC / DS parent",
              "Chaîne de signatures DNS dont le DS publié par la zone parente doit rester cohérent avec les clés de la zone enfant.",
            ],
            [
              "TCO",
              "Coût total de possession sur un horizon donné : transition, temps interne, exploitation, services, continuité, risque et sortie.",
            ],
          ].map(([term, definition]) => (
            <div
              key={term}
              className="min-w-0 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <dt className="font-black text-zinc-950 dark:text-white">
                {term}
              </dt>
              <dd className="mb-0 mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {definition}
              </dd>
            </div>
          ))}
        </dl>

        <h2 id="stop-60-secondes">
          STOP ou continuer : le contrôle qui prend 60 secondes
        </h2>
        <p>
          Avant toute exploration, vérifiez si l’audit ordinaire est encore le
          bon parcours. Un STOP ne signifie ni « site perdu » ni « il faut
          refaire ». Il signifie :{" "}
          <strong>ne pas exécuter le changement prévu maintenant</strong>,
          préserver les faits et faire lever le blocage par la bonne personne.
        </p>

        <div className="not-prose my-8 rounded-2xl border border-rose-300 bg-rose-50/70 p-5 sm:p-6 dark:border-rose-900 dark:bg-rose-950/20">
          <p className="m-0 text-xs font-bold uppercase tracking-[0.16em] text-rose-800 dark:text-rose-300">
            STOP prioritaire si une seule réponse est oui
          </p>
          <ul className="mb-0 mt-4 space-y-3 pl-5 text-sm leading-relaxed text-zinc-800 dark:text-zinc-200">
            <li>
              personne ne peut établir l’autorisation d’accéder, tester, copier,
              modifier ou transférer le site ;
            </li>
            <li>
              une compromission, une défiguration, une fuite ou un accès
              illégitime est possible ;
            </li>
            <li>
              l’opération destructive envisagée peut écraser des données ou
              couper le site alors qu’aucune copie récupérable n’a fait l’objet
              d’une restauration prouvée ;
            </li>
            <li>
              le seul moyen de tester toucherait la production, de vrais
              paiements, de vrais messages ou des données personnelles sans
              protection adaptée ;
            </li>
            <li>
              un litige bloquant d’autorité, de mandat ou de droits sur le code,
              les contenus, le domaine, une licence ou un compte interdit
              l’action envisagée.
            </li>
          </ul>
        </div>

        <p>
          En cas de suspicion d’incident, gelez les changements ordinaires,
          consignez l’heure et le symptôme, préservez les journaux et preuves,
          utilisez un canal sûr et désignez un responsable. L’isolation d’un
          système compromis est une décision pilotée : couper au hasard peut
          détruire des indices ou aggraver l’indisponibilité. Le parcours
          détaillé figure dans le guide{" "}
          <Link href="/guides/site-internet-en-panne-que-faire">
            site en panne : diagnostiquer et reprendre sans faux vert
          </Link>
          .
        </p>

        <InfoBox
          variant="amber"
          title="Refus de passation ou autorité contestée"
        >
          Ne contournez pas un compte, ne vous faites pas passer pour son
          titulaire et ne demandez pas à une équipe technique de trancher un
          litige. Nommez les actifs bloqués, les pièces manquantes, les actions
          interdites et l’autorité qui décidera. L’audit peut décrire ce qui est
          accessible ; il ne transforme pas une possession technique en droit
          juridique.
        </InfoBox>

        <h2 id="niveau">Choisissez le niveau d’audit avant de l’acheter</h2>
        <p>
          La profondeur dépend de la décision, de l’impact, des données, de la
          complexité et des inconnues — pas seulement du mot « vitrine », «
          boutique » ou « application ». Le niveau doit être écrit dans le devis
          avec ses accès, ses preuves, ses livrables et ses limites.
        </p>

        <div className="not-prose my-8 grid gap-4 lg:grid-cols-3">
          <section className="rounded-2xl border border-blue-200 bg-blue-50/50 p-5 dark:border-blue-900 dark:bg-blue-950/20">
            <p className="m-0 text-xs font-bold uppercase tracking-widest text-blue-800 dark:text-blue-300">
              Niveau 1 · Pré-vérification publique
            </p>
            <h3 className="mb-0 mt-2 text-lg font-bold text-zinc-950 dark:text-white">
              Observer sans conclure à la reprise
            </h3>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              Pages, réponses HTTP, TLS visible, indexabilité, parcours sans
              donnée sensible, performance de laboratoire et premiers contrôles
              d’accessibilité.
            </p>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              <strong>Livrable :</strong> hypothèses et accès à demander. Ce
              niveau ne prouve ni restauration, ni code, ni données, ni
              déploiement.
            </p>
          </section>

          <section className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5 dark:border-emerald-900 dark:bg-emerald-950/20">
            <p className="m-0 text-xs font-bold uppercase tracking-widest text-emerald-800 dark:text-emerald-300">
              Niveau 2 · Audit léger de reprise
            </p>
            <h3 className="mb-0 mt-2 text-lg font-bold text-zinc-950 dark:text-white">
              Autoriser une intervention limitée
            </h3>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              Réservé à un site peu critique, sans paiement, authentification,
              données métier mutables, migration, code spécifique, multi-
              environnement, intégration critique, fort enjeu SEO ni objectif
              RPO/RTO, et sans inconnue structurante.
            </p>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              Un formulaire de contact ne force pas, à lui seul, l’audit
              complet. Il rend toutefois la zone RGPD applicable : le niveau
              léger reste possible seulement si ce traitement limité est
              qualifié et si la reprise n’exige ni accès à des données réelles,
              ni traitement sensible, substantiel ou à risque.
            </p>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              <strong>Prérequis :</strong> comptes contrôlés, copie restaurée
              récemment et parcours essentiel prouvé.
            </p>
          </section>

          <section className="rounded-2xl border border-violet-200 bg-violet-50/50 p-5 dark:border-violet-900 dark:bg-violet-950/20">
            <p className="m-0 text-xs font-bold uppercase tracking-widest text-violet-800 dark:text-violet-300">
              Niveau 3 · Audit complet de reprise
            </p>
            <h3 className="mb-0 mt-2 text-lg font-bold text-zinc-950 dark:text-white">
              Décider sur le produit et son exploitation
            </h3>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              Requis dès qu’existent paiement, compte utilisateur, données
              personnelles significatives, code sur mesure, intégrations,
              plusieurs environnements, migration, disponibilité contractuelle,
              enjeu SEO ou architecture inconnue.
            </p>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              <strong>Livrable :</strong> registre de preuves, P0/P1/P2,
              synthèse dirigeant, trajectoires, TCO et paquet de sortie.
            </p>
          </section>
        </div>

        <p>
          Un audit léger devient complet dès qu’une hypothèse structurante reste
          inconnue. Ce n’est pas une sanction : l’inconnu augmente simplement le
          périmètre nécessaire pour décider. À l’inverse, un audit complet ne
          doit pas imposer automatiquement un pentest, un test de charge ou une
          évaluation de conformité intégrale. Ces modules sont ajoutés lorsqu’un
          risque, une obligation ou une décision les justifie.
        </p>

        <InfoBox variant="blue" title="Checklist de remise ≠ audit de reprise">
          Dans le corpus international de douze contenus comparé pour ce guide,
          les approches se répartissent entre inventaires d’accès, dossiers de
          passation et revues d’aptitude à exploiter. Une checklist vérifie que
          des éléments ont été remis ; l’audit vérifie qu’une autre équipe peut
          réellement les utiliser, restaurer, construire, déployer, observer et
          transmettre. Les approches{" "}
          <a
            href="https://docs.aws.amazon.com/wellarchitected/latest/operational-readiness-reviews/wa-operational-readiness-reviews.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Operational Readiness Review d’AWS
          </a>{" "}
          et{" "}
          <a
            href="https://sre.google/sre-book/evolving-sre-engagement-model/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Production Readiness Review de Google SRE
          </a>{" "}
          ajoutent une idée essentielle : incidents, presque-incidents,
          postmortems et répétitions de passation doivent faire évoluer la
          grille, avec une période de soutien transitoire lorsque nécessaire.
        </InfoBox>

        <h2 id="livrable">
          Définissez le résultat attendu, pas un nombre de pages
        </h2>
        <p>
          Un rapport de 80 pages peut être inutilisable ; une page trop courte
          peut cacher les inconnues. Demandez deux niveaux de lecture reliés par
          des références d’artefacts :
        </p>
        <ol>
          <li>
            <strong>une synthèse dirigeant d’une page</strong> : site, date,
            périmètre, fonctions importantes, niveau d’audit, verdict, P0/P1/P2,
            décisions autorisées, actions interdites, responsables et échéances
            ;
          </li>
          <li>
            <strong>une annexe de preuves</strong> : actifs, environnements,
            méthode, résultats, captures ou journaux nécessaires, limites,
            références, hash ou emplacement protégé, et historique des levées de
            réserves.
          </li>
        </ol>

        <p>
          Cette séparation rejoint la logique du modèle de rapport du W3C pour
          l’accessibilité : résumé, contexte, périmètre, intervenants, méthode,
          résultats, actions et références. Elle reste ici adaptée à une reprise
          technique générale ; elle ne transforme pas le dossier en rapport de
          conformité WCAG.
        </p>

        <InfoBox variant="blue" title="Ce que le devis doit nommer">
          Les URL et environnements inclus, les actifs et parcours, les accès
          nécessaires, les opérations autorisées, les exclusions, les personnes
          interrogées, les formats de preuve, les critères de STOP, les
          livrables, la convention de coût et la durée de validité des constats.
          Aucun mot de passe ne doit figurer dans le devis, le formulaire de
          contact ou le rapport partagé.
        </InfoBox>

        <h2 id="preuves">
          Une affirmation ouvre une question ; un essai observé la borne
        </h2>
        <p>
          Le mot « preuve » ne signifie pas qu’un document garantit tout. Il
          signifie qu’un lecteur peut relier une conclusion à un objet, un
          environnement, une date, une personne et un résultat. La force
          nécessaire dépend du risque de l’action.
        </p>

        <GuideTable
          caption="Quatre niveaux de preuve à ne pas confondre"
          headers={["Niveau", "Exemple", "Ce qu’il permet de conclure"]}
          rows={proofLevels}
        />

        <p>
          Pour chaque domaine applicable, consignez : statut{" "}
          <em>inconnu, déclaré, vérifié, en échec ou non applicable</em>, type
          de preuve, environnement, date, propriétaire, référence d’artefact,
          résultat, limite, action interdite, date de validité, événement de
          réouverture, prochaine action et échéance. Une mention « non
          applicable » exige les mêmes éléments de traçabilité et un fait
          vérifiable. Une porte applicable inconnue empêche le GO sur l’action
          qu’elle conditionne.
        </p>

        <div className="not-prose my-8 grid gap-4 sm:grid-cols-3">
          <section className="rounded-2xl border border-rose-200 bg-rose-50/60 p-5 dark:border-rose-900 dark:bg-rose-950/20">
            <p className="m-0 text-xs font-bold uppercase tracking-widest text-rose-800 dark:text-rose-300">
              P0 · bloquant immédiat
            </p>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              Autorité absente, incident actif, perte de données possible,
              action destructive sans restauration ou test non isolable. STOP
              avant l’action concernée.
            </p>
          </section>
          <section className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5 dark:border-amber-900 dark:bg-amber-950/20">
            <p className="m-0 text-xs font-bold uppercase tracking-widest text-amber-800 dark:text-amber-300">
              P1 · condition de reprise
            </p>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              Preuve ou capacité nécessaire à l’exploitation : build,
              restauration, parcours critique, secret, dépendance, journal ou
              réversibilité. Aucun GO de reprise avant levée ; seules des
              actions préparatoires explicitement extérieures au périmètre
              bloqué peuvent continuer.
            </p>
          </section>
          <section className="rounded-2xl border border-blue-200 bg-blue-50/60 p-5 dark:border-blue-900 dark:bg-blue-950/20">
            <p className="m-0 text-xs font-bold uppercase tracking-widest text-blue-800 dark:text-blue-300">
              P2 · amélioration planifiée
            </p>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              Dette ou amélioration non bloquante à la date du rapport, avec
              impact, propriétaire et échéance. Elle ne doit pas masquer un P0
              ou un P1.
            </p>
          </section>
        </div>

        <h2 id="domaines">Le registre complet couvre 18 domaines</h2>
        <p>
          Les trois preuves historiques — contrôle des comptes, restauration et
          parcours métier — restent le cœur de la reprise. Elles ne suffisent
          toutefois pas à représenter un produit web moderne. Les 18 domaines
          suivants évitent le faux GO tout en restant modulables : l’auditeur
          approfondit ce qui est applicable et justifie le reste.
        </p>

        <div className="not-prose my-8 space-y-4">
          {auditFamilies.map((family) => (
            <details
              key={family.number}
              className="group rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
            >
              <summary className="cursor-pointer list-none p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-sm font-bold text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
                    {family.number}
                  </span>
                  <div className="min-w-0">
                    <h3 className="m-0 text-base font-bold text-zinc-950 dark:text-white sm:text-lg">
                      {family.title}
                    </h3>
                    <p className="mb-0 mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {family.summary}
                    </p>
                  </div>
                </div>
              </summary>
              <div className="grid min-w-0 gap-4 border-t border-zinc-200 p-5 dark:border-zinc-800 sm:p-6 lg:grid-cols-3">
                {family.domains.map((domain) => (
                  <section
                    key={domain.title}
                    className="min-w-0 break-words rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/60"
                  >
                    <h4 className="m-0 text-sm font-bold text-zinc-950 dark:text-white">
                      {domain.title}
                    </h4>
                    <p className="mb-0 mt-3 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                      Preuve attendue
                    </p>
                    <p className="mb-0 mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                      {domain.proof}
                    </p>
                    <p className="mb-0 mt-3 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300">
                      Faux vert à éviter
                    </p>
                    <p className="mb-0 mt-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                      {domain.risk}
                    </p>
                  </section>
                ))}
              </div>
            </details>
          ))}
        </div>

        <h2 id="restauration">
          Restaurez une copie, puis réconciliez ce qui compte
        </h2>
        <p>
          Une sauvegarde devient une preuve lorsqu’elle remet le service attendu
          en état dans un environnement isolé. Le test doit identifier la
          source, le contenu, la date, l’intégrité, les clés, le temps
          nécessaire et la perte de données possible. Il faut aussi savoir ce
          qui n’est pas dans la copie : configuration, secrets, médias, stockage
          objet, index, files d’attente, messages ou services externes.
        </p>

        <ol>
          <li>
            définir le <strong>RPO</strong>, c’est-à-dire le point de reprise
            visé ou l’ancienneté maximale acceptable des données restaurées,
            comme une décision métier et non une propriété magique de la
            sauvegarde ;
          </li>
          <li>
            définir le <strong>RTO</strong>, le délai visé pour remettre le
            service utile à disposition, avec ses dépendances ;
          </li>
          <li>
            choisir une source datée et, en cas d’incident, vérifier qu’elle est
            suffisamment saine avant de restaurer ;
          </li>
          <li>
            créer un espace séparé, protéger son accès, neutraliser paiements,
            e-mails, webhooks et automatismes réels ;
          </li>
          <li>
            utiliser des données fictives ou anonymisées par défaut, puis
            justifier, limiter, tracer et purger toute exception ;
          </li>
          <li>
            restaurer code, base, fichiers, médias, configuration et dépendances
            nécessaires ;
          </li>
          <li>
            rejouer les parcours de bout en bout et réconcilier commande,
            paiement, stock, e-mail, CRM, webhook, fichiers et écritures
            différées ;
          </li>
          <li>
            chronométrer, noter les ajouts manuels, préserver les preuves et
            protéger ou supprimer la copie selon la règle décidée.
          </li>
        </ol>

        <p>
          Les recommandations françaises, australiennes et allemandes convergent
          sur le même principe : identifier les données critiques, protéger les
          sauvegardes, prévoir la restauration et la tester. Leur niveau de
          détail vise parfois des systèmes plus larges qu’un site de PME ;
          l’effort doit rester proportionné, sans réduire « test » à la présence
          d’un fichier d’archive.
        </p>

        <InfoBox
          variant="amber"
          title="Une copie réduite n’est pas forcément anonyme"
        >
          Supprimer quelques lignes ou remplacer le nom visible ne suffit pas
          toujours. Les données fictives ou réellement anonymisées sont le choix
          par défaut. Si des données personnelles restent nécessaires,
          documentez la finalité, la base légale du traitement, l’autorisation
          et les instructions documentées du responsable, le périmètre, les
          accès, la sécurité, la durée et la purge, avec le DPO ou le conseil
          compétent selon l’enjeu.
        </InfoBox>

        <h2 id="livraison">
          Prouvez la chaîne source → artefact → environnement → résultat
        </h2>
        <p>
          « Nous avons le code » et « le build passe » sont deux bonnes
          nouvelles, pas encore une preuve de reprise. La nouvelle équipe doit
          retrouver la version réellement publiée, fabriquer un artefact
          identifiable, comprendre comment il est promu et savoir traiter les
          effets qui ne se renversent pas automatiquement.
        </p>

        <GuideTable
          caption="Ce qu’un test de livraison doit relier"
          headers={["Étape", "Questions observables", "Preuve de sortie"]}
          rows={[
            [
              "Source",
              "Quel dépôt, quelle branche, quel tag et quel historique ? Quels droits d’utilisation, reproduction, modification, maintenance et remise à un tiers sont documentés ?",
              "Clone depuis un compte contrôlé et correspondance avec la version exploitée.",
            ],
            [
              "Build",
              "Quels runtimes, lockfiles, variables, images et commandes depuis un environnement propre ?",
              "Build reproductible, dépendances identifiées et journal conservé.",
            ],
            [
              "Artefact",
              "Quel binaire, conteneur ou bundle est signé, stocké et promu ?",
              "Identifiant ou digest relié au source et au déploiement.",
            ],
            [
              "Déploiement",
              "Quel pipeline, runner, registre, IaC, secret et health check ?",
              "Publication isolée réussie, accès nominatifs et événements observés.",
            ],
            [
              "Retour",
              "Rollback possible ou fix-forward ? Quelles migrations et écritures persistent ?",
              "Procédure répétée, limites, sauvegarde et réconciliation des effets différés.",
            ],
          ]}
        />

        <p>
          Le transfert d’un dépôt exige une revue après l’opération. GitHub
          précise par exemple que des collaborateurs, webhooks, secrets et clés
          de déploiement peuvent rester associés selon le cas. C’est une
          propriété de cette plateforme, pas une règle universelle ; la règle
          générale est de réinventorier les identités, intégrations et secrets,
          puis de révoquer ou faire tourner ce qui ne doit plus servir.
        </p>

        <InfoBox variant="amber" title="Droit sur le code : ne pas surinterpréter un accès">
          Le contrat, la licence ou l’acte de cession doit être lu pour le
          périmètre réellement repris. En droit français, une cession de droits
          d’auteur ne se déduit pas du seul paiement, de la remise d’un ZIP ou
          de l’accès au dépôt : les droits transmis et leur domaine
          d’exploitation doivent être délimités. Cela n’implique pas qu’une
          cession intégrale soit toujours nécessaire ; il faut prouver les
          droits effectivement requis pour exploiter, corriger et faire
          maintenir le site, puis obtenir un avis juridique si le contrat est
          ambigu ou contesté.
        </InfoBox>

        <h3>Un SBOM est un inventaire, pas un feu vert</h3>
        <p>
          Un Software Bill of Materials, ou SBOM, rend les composants plus
          visibles. Il doit couvrir autant que possible les dépendances
          directes, transitives et runtime, puis être relié aux versions
          réellement livrées, aux vulnérabilités, aux licences, au support et à
          la provenance. Il n’existe pas d’obligation générale d’exiger le même
          SBOM pour toute petite reprise de site. En revanche, ignorer plugins,
          thèmes, packages, images ou services en fin de support crée une
          inconnue industrielle.
        </p>

        <h2 id="qualite">
          Sécurité, exploitation, performance, SEO et accessibilité : cinq
          lectures différentes
        </h2>
        <p>
          Ces axes se complètent mais ne se remplacent pas. Un scan de
          vulnérabilité ne prouve pas que les alertes arrivent. Un test de
          charge ne mesure pas l’expérience terrain. Un crawl SEO ne valide pas
          le clavier. Une propriété analytics ne garantit pas la qualité des
          conversions. Le rapport doit dire ce qui a été contrôlé et ce qui
          nécessite un module spécialisé.
        </p>

        <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
          <section className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
            <h3 className="m-0 text-base font-bold text-zinc-950 dark:text-white">
              Exploitation et observabilité
            </h3>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              Listez logs, métriques, erreurs, traces, alertes, rétention,
              destinataires, astreinte et escalade. Déclenchez une alerte sûre
              et vérifiez sa réception. Une page fournisseur verte ne remplace
              pas l’observation du parcours métier.
            </p>
          </section>
          <section className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
            <h3 className="m-0 text-base font-bold text-zinc-950 dark:text-white">
              Sécurité
            </h3>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              Vérifiez identités, privilèges, MFA, sessions, correctifs,
              exposition, secrets, journalisation et réponse à incident. Un
              audit de reprise peut orienter un pentest sans prétendre le
              remplacer.
            </p>
          </section>
          <section className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
            <h3 className="m-0 text-base font-bold text-zinc-950 dark:text-white">
              Performance et capacité
            </h3>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              Conservez les données terrain disponibles, LCP, INP et CLS, puis
              contextualisez les tests de laboratoire. Ajoutez volumes, pics,
              quotas, cache et temps de réponse. Un score unique ne devient pas
              un SLA.
            </p>
          </section>
          <section className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
            <h3 className="m-0 text-base font-bold text-zinc-950 dark:text-white">
              SEO et mesure
            </h3>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              Gelez URL, statuts, canonicals, robots, sitemaps, rendu, données
              structurées, liens internes, visibilité et conversions avant une
              migration. Search Console et analytics sont des sources, pas une
              preuve suffisante seuls.
            </p>
          </section>
          <section className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950 md:col-span-2">
            <h3 className="m-0 text-base font-bold text-zinc-950 dark:text-white">
              Accessibilité
            </h3>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              Définissez les pages et états, le niveau visé et la méthode.
              Combinez automatisation et revue humaine : structure, clavier,
              focus, zoom, formulaires, messages d’erreur, contraste, contenu et
              technologies d’assistance. WCAG 2.2 formule des critères
              testables, mais une conclusion de conformité porte sur des pages
              complètes et, lorsqu’une page appartient à un parcours, sur les
              processus complets ; elle ne se déduit pas d’un outil automatique.
            </p>
          </section>
        </div>

        <h3>Le RGPD ne se résume pas à une clause de confidentialité</h3>
        <p>
          Lorsque la nouvelle équipe traite des données personnelles pour le
          compte de l’entreprise en qualité de sous-traitant, la relation doit
          être encadrée par un contrat ou un autre acte juridique conforme à
          l’article 28 du RGPD : objet, durée, nature, finalité, catégories de
          données et de personnes, instructions documentées, confidentialité,
          sécurité, sous-traitants ultérieurs, transferts, incidents,
          assistance, restitution ou suppression et possibilité d’audit. Le rôle
          dépend des traitements et des accès réels. L’audit technique prépare
          les faits ; le DPO ou le conseil compétent qualifie les cas ambigus ou
          sensibles.
        </p>

        <h2 id="dossier">
          Remplissez le dossier local : aucune donnée n’est envoyée
        </h2>
        <p>
          L’outil ci-dessous transforme la méthode en dossier reproductible. Il
          ne teste pas votre site, ne contacte aucun fournisseur et ne
          sauvegarde pas automatiquement les champs. Il calcule une route
          prudente, refuse les preuves insuffisantes, conserve les montants
          inconnus en ND et prépare un rapport texte, JSON ou CSV à relire avant
          partage.
        </p>

        <InfoBox variant="amber" title="Avant toute saisie ou export">
          Utilisez des références internes, pas des mots de passe, clés, jetons,
          cookies, données client ni journaux bruts. Le masquage automatique ne
          peut être qu’un filet de sécurité imparfait. Relisez manuellement le
          rapport et stockez les preuves sensibles dans un espace autorisé.
        </InfoBox>

        <WebsiteTakeoverAuditDossier />

        <p>
          Si vous préférez un support sans JavaScript, téléchargez le{" "}
          <a href="/ressources/dossier-audit-reprise-site.txt" download>
            dossier texte autonome
          </a>
          . Il contient le contrôle STOP, les 18 domaines, la matrice de rôles,
          la feuille TCO, le modèle de réserve et le paquet de sortie. Le
          fichier est un canevas : il ne certifie aucun site et ne remplace pas
          la compétence nécessaire aux tests.
        </p>

        <h2 id="trajectoires">
          Comparez quatre chemins pour le même résultat, sur trois horizons
        </h2>
        <p>
          Une comparaison honnête conserve les mêmes fonctions, volumes,
          environnements, intégrations, disponibilité, sécurité, données,
          accessibilité, SEO, support et conditions de sortie. Sinon, la
          solution la moins chère peut simplement promettre moins.
        </p>

        <GuideTable
          caption="Quatre trajectoires possibles après l’audit"
          headers={[
            "Trajectoire",
            "Quand elle devient cohérente",
            "Risque principal et sortie attendue",
          ]}
          rows={trajectoryRows.map(([name, when, risk, output]) => [
            name,
            when,
            `${risk} Sortie attendue : ${output}`,
          ])}
        />

        <h3>Formule de TCO 12, 36 et 60 mois</h3>
        <p>
          Séparez les coûts uniques des coûts récurrents et documentez devise,
          HT/TTC, date, fréquence, quantité, mois de début, mois de fin et
          source datée. Chaque trajectoire traite explicitement sept catégories
          : transition, temps interne, exploitation, licences/services,
          continuité/migration, réserve de risque et sortie/réversibilité. Une
          catégorie réellement nulle reste une ligne à zéro justifiée ; une
          inconnue reste <strong>ND</strong> et n’est jamais ramenée à zéro pour
          faire gagner une option.
        </p>

        <pre>
          <code>{`TCO(h) =
  audit et mise sous contrôle
+ corrections initiales
+ migration ou reconstruction
+ temps interne
+ h × (hébergement + CDN + maintenance + support
       + observabilité + sécurité)
+ coûts annuels proratisés (licences, conformité, formation, documentation)
+ coût de sortie
+ réserve de risque explicitement sourcée

h = 12, 36 ou 60 mois`}</code>
        </pre>

        <p>
          Évitez les doubles comptes : un jour interne ne doit pas réapparaître
          dans un forfait qui l’inclut ; une réserve d’incident ne doit pas
          recopier un coût déjà compté. Les scénarios sont comparés en centimes
          ou avec une règle d’arrondi explicite. Un TCO ne prédit pas l’avenir :
          il rend visibles les hypothèses et les sensibilités.
        </p>

        <h3>Exemple chiffré : lire le total sans le confondre avec un prix</h3>
        <p>
          Voici la trajectoire « mise sous contrôle » chargée dans le dossier
          de démonstration. Tous les montants sont entièrement fictifs : ils
          servent uniquement à montrer comment sept catégories produisent des
          totaux reproductibles à 12, 36 et 60 mois. Ce ne sont ni des tarifs,
          ni des moyennes de marché, ni une recommandation budgétaire.
        </p>
        <GuideTable
          caption="Exemple TCO entièrement fictif — mise sous contrôle de l’existant"
          headers={["Catégorie", "12 mois", "Horizons longs"]}
          rows={fictitiousControlTcoRows}
        />

        <h2 id="cas">Quatre cas fictifs pour calibrer le verdict</h2>
        <InfoBox variant="blue" title="Comparaison fictive de quatre verdicts">
          Les organisations, chiffres et résultats ci-dessous sont fictifs. Ils
          illustrent la méthode et ne constituent ni des tarifs, ni des moyennes
          de marché, ni des missions réalisées par Hagnéré Code. Cette
          comparaison ne décrit ni un client ni une mission réelle.
        </InfoBox>

        <div className="not-prose my-8 space-y-4">
          <section className="rounded-2xl border border-emerald-300 bg-emerald-50/50 p-5 sm:p-6 dark:border-emerald-900 dark:bg-emerald-950/20">
            <p className="m-0 text-xs font-bold uppercase tracking-widest text-emerald-800 dark:text-emerald-300">
              Cas A · GO borné
            </p>
            <h3 className="mb-0 mt-2 text-lg font-bold text-zinc-950 dark:text-white">
              Vitrine de 15 pages, sans compte ni paiement
            </h3>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              L’entreprise contrôle domaine, DNS, hébergement, dépôt et
              messagerie. Une copie récente est restaurée hors public ; le
              formulaire fictif arrive dans la bonne boîte ; le build et le
              rollback sont rejoués ; aucune inconnue applicable ne bloque
              l’intervention. Le GO autorise une maintenance limitée au
              périmètre testé. Il ne certifie ni la sécurité absolue ni la
              conformité générale.
            </p>
          </section>

          <section className="rounded-2xl border border-amber-300 bg-amber-50/50 p-5 sm:p-6 dark:border-amber-900 dark:bg-amber-950/20">
            <p className="m-0 text-xs font-bold uppercase tracking-widest text-amber-800 dark:text-amber-300">
              Cas B · GO sous réserves P2
            </p>
            <h3 className="mb-0 mt-2 text-lg font-bold text-zinc-950 dark:text-white">
              Commerce B2B stable avant une future campagne
            </h3>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              L’autorité, les accès, la restauration, le build, les parcours et
              le rollback sont vérifiés ; aucun P0 ni P1 ne subsiste. Deux
              réserves non bloquantes restent ouvertes : reprendre l’historique
              de mesure et réaliser un test de charge avant une campagne
              ultérieure. Chacune possède un responsable, une preuve attendue,
              une échéance, une limite et une action interdite. Le décideur
              accepte explicitement le risque résiduel : le GO couvre la charge
              et la mesure actuelles, mais interdit de supprimer l’ancien
              historique ou d’augmenter fortement le trafic avant la levée des
              P2.
            </p>
          </section>

          <section className="rounded-2xl border border-sky-300 bg-sky-50/50 p-5 sm:p-6 dark:border-sky-900 dark:bg-sky-950/20">
            <p className="m-0 text-xs font-bold uppercase tracking-widest text-sky-800 dark:text-sky-300">
              Cas C · reprise bloquée, préparation autorisée
            </p>
            <h3 className="mb-0 mt-2 text-lg font-bold text-zinc-950 dark:text-white">
              PME de services avec CRM et compte d’envoi externe
            </h3>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              La copie se restaure et les pages répondent, mais le formulaire
              dépend d’un compte SMTP détenu par l’ancien prestataire et les
              alertes ne sont pas testées. La nouvelle équipe peut préparer le
              runbook et les correctifs sur copie. Aucune bascule n’est permise
              avant création d’un compte contrôlé par l’entreprise, rotation du
              secret, réception d’un message fictif et test d’alerte. Chaque P1
              a un responsable, une date de validité, un déclencheur de
              réouverture et une échéance ; le GO n’arrive qu’après leur levée.
            </p>
          </section>

          <section className="rounded-2xl border border-rose-300 bg-rose-50/50 p-5 sm:p-6 dark:border-rose-900 dark:bg-rose-950/20">
            <p className="m-0 text-xs font-bold uppercase tracking-widest text-rose-800 dark:text-rose-300">
              Cas D · STOP
            </p>
            <h3 className="mb-0 mt-2 text-lg font-bold text-zinc-950 dark:text-white">
              Boutique avec redirections inconnues et compte administrateur
              contesté
            </h3>
            <p className="mb-0 mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              Des visiteurs voient une page inhabituelle, l’ancien prestataire
              conteste l’autorité de la nouvelle équipe, la seule sauvegarde est
              dans le même compte et personne ne sait si elle est saine. STOP :
              aucune restauration ni rotation improvisée. Les faits et journaux
              sont préservés, l’autorité est clarifiée et la réponse à incident
              est pilotée. La trajectoire technique sera comparée après ce
              traitement.
            </p>
          </section>
        </div>

        <h2 id="contrat">
          Transformez chaque réserve en responsabilité testable
        </h2>
        <p>
          L’audit décrit l’état de départ ; le contrat organise la suite. Pour
          chaque P0, P1 ou P2, écrivez l’élément, sa conséquence, le
          propriétaire de l’action, la preuve de levée, l’échéance et l’action
          interdite. Une phrase comme « sécuriser le site » ne permet ni
          d’accepter ni de contrôler le travail.
        </p>

        <GuideTable
          caption="Répartir les rôles sans diluer la décision"
          headers={[
            "Rôle",
            "Responsabilité minimale",
            "Preuve attendue avant clôture",
          ]}
          rows={[
            [
              "Dirigeant ou sponsor",
              "Nommer les fonctions, l’impact, les données, les seuils RPO/RTO, le budget et l’autorité de décision.",
              "Périmètre commun et verdict accepté avec réserves visibles.",
            ],
            [
              "Ancien prestataire",
              "Remettre les actifs prévus, expliquer les dépendances, signaler les limites et exécuter la passation autorisée.",
              "Paquet de sortie, comptes, exports et réponses référencés, sans secret dans le rapport.",
            ],
            [
              "Nouvelle équipe",
              "Tester dans le périmètre autorisé, conserver les preuves, déclarer les inconnues et ne pas élargir le GO.",
              "Registre daté, essais reproductibles, limites, actions interdites et plan de levée.",
            ],
            [
              "DPO, juridique, cyber ou métier",
              "Intervenir sur les questions qui dépassent la seule technique.",
              "Décision ou avis borné au sujet escaladé, sans transfert implicite de responsabilité.",
            ],
          ]}
        />

        <h3>
          Reprise, changement d’hébergement et changement d’URL sont distincts
        </h3>
        <p>
          Une nouvelle équipe peut parfois maintenir le site là où il se trouve.
          Si l’hébergement change sans modification d’URL, préparez la nouvelle
          infrastructure, testez-la, organisez le DNS, surveillez les deux côtés
          et gardez un retour en arrière. Si les URL changent, ajoutez un
          mappage, les redirections, les canonicals, les liens, les sitemaps et
          le suivi. Google documente ces deux parcours séparément et prévient
          qu’une migration peut entraîner des fluctuations temporaires de
          classement.
        </p>

        <GuideInlineCTA
          title="Qualifier une reprise sans transmettre de secret"
          description="Indiquez le type de site, les fonctions importantes, les données traitées, les comptes contrôlés, les environnements, la dernière restauration prouvée et la décision envisagée. Le premier échange doit distinguer pré-vérification, audit léger, audit complet ou STOP. N’envoyez aucun mot de passe, clé, jeton, cookie, donnée client ni journal brut."
          tags={[
            "Niveau d’audit explicite",
            "Livrables et limites",
            "Trajectoires à périmètre égal",
          ]}
          ctaLabel="Demander un cadrage de reprise"
          ctaHref="/demarrer-un-projet"
          ctaService="audit"
          ctaSource="guide-audit-reprise-site"
          showPhone={false}
        />

        <h2 id="sources">Sources mondiales et limites de ce guide</h2>
        <p>
          Sources primaires rouvertes ou vérifiées le 27 juillet 2026. Les
          référentiels internationaux structurent des dimensions différentes :
          continuité, chaîne logicielle, sécurité, accessibilité, performance ou
          migration. Aucun n’est transposé comme obligation universelle pour
          toutes les PME. Les procédures, versions, interfaces et textes doivent
          être revérifiés au moment de l’audit.
        </p>

        <h3>France et Union européenne</h3>
        <ul>
          <li>
            ANSSI —{" "}
            <a
              href="https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              fondamentaux de la sauvegarde des systèmes d’information
            </a>{" "}
            : stratégie, protection, restauration et tests.
          </li>
          <li>
            CERT-FR —{" "}
            <a
              href="https://cert.ssi.gouv.fr/les-bons-reflexes-en-cas-dintrusion-sur-un-systeme-dinformation/"
              target="_blank"
              rel="noopener noreferrer"
            >
              bons réflexes en cas d’intrusion
            </a>{" "}
            : préserver les éléments utiles et traiter l’incident avant la
            reprise ordinaire.
          </li>
          <li>
            CNIL —{" "}
            <a
              href="https://www.cnil.fr/fr/tester-vos-applications"
              target="_blank"
              rel="noopener noreferrer"
            >
              tester les applications
            </a>
            ,{" "}
            <a
              href="https://www.cnil.fr/fr/securite-encadrer-la-maintenance-et-la-fin-de-vie-des-materiels-et-logiciels"
              target="_blank"
              rel="noopener noreferrer"
            >
              encadrer la maintenance
            </a>{" "}
            et{" "}
            <a
              href="https://www.cnil.fr/fr/securite-gerer-la-sous-traitance"
              target="_blank"
              rel="noopener noreferrer"
            >
              gérer la sous-traitance
            </a>
            .
          </li>
          <li>
            Afnic —{" "}
            <a
              href="https://www.afnic.fr/noms-de-domaine/tout-savoir/gerer-son-nom-de-domaine/"
              target="_blank"
              rel="noopener noreferrer"
            >
              titulaire, contacts et gestion d’un domaine relevant de son
              registre
            </a>
            ; les autres extensions suivent leur registre et leur prestataire.
          </li>
          <li>
            Code de la propriété intellectuelle, article L131-3 —{" "}
            <a
              href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958"
              target="_blank"
              rel="noopener noreferrer"
            >
              délimitation des droits transmis par une cession
            </a>
            . Le texte ne signifie pas que toute maintenance exige une cession
            intégrale : le contrat doit couvrir les droits réellement
            nécessaires au périmètre repris.
          </li>
          <li>
            ENISA —{" "}
            <a
              href="https://www.enisa.europa.eu/publications/enisa-technical-advisory-for-secure-use-of-package-managers"
              target="_blank"
              rel="noopener noreferrer"
            >
              usage sûr des gestionnaires de packages
            </a>{" "}
            : source européenne pour la chaîne logicielle, à adapter au produit.
          </li>
          <li>
            BSI —{" "}
            <a
              href="https://www.bsi.bund.de/dok/10990836"
              target="_blank"
              rel="noopener noreferrer"
            >
              préparation et conduite d’un IT-Grundschutz-Check
            </a>{" "}
            et{" "}
            <a
              href="https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Grundschutz/BSI_Standards/standard_200_4.pdf?__blob=publicationFile&v=8"
              target="_blank"
              rel="noopener noreferrer"
            >
              page officielle du Standard 200-4 BCM
            </a>{" "}
            : vérifier sur pièce, documenter l’état observé et réexaminer
            régulièrement ; ces référentiels allemands restent à proportionner
            au site repris.
          </li>
          <li>
            INCIBE (Espagne) —{" "}
            <a
              href="https://www.incibe.es/sites/default/files/contenidos/dosieres/metad_contratacion_de_servicios.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              méthode de contractualisation de services de sécurité
            </a>
            , mobilisée ici pour la répartition des responsabilités, les
            sauvegardes, l’interruption, l’escalade et la revue des niveaux de
            service ; ce document espagnol doit être adapté au contrat et au
            droit applicables.
          </li>
        </ul>

        <h3>Royaume-Uni, États-Unis et Australie</h3>
        <ul>
          <li>
            NCSC britannique —{" "}
            <a
              href="https://www.ncsc.gov.uk/collection/developers-collection/principles/secure-the-build-and-deployment-pipeline"
              target="_blank"
              rel="noopener noreferrer"
            >
              sécuriser le pipeline de build et de déploiement
            </a>{" "}
            et{" "}
            <a
              href="https://www.ncsc.gov.uk/blogs/software-supply-chain-attacks-check-your-dependencies"
              target="_blank"
              rel="noopener noreferrer"
            >
              contrôler les dépendances de la chaîne logicielle
            </a>
            .
          </li>
          <li>
            CISA —{" "}
            <a
              href="https://www.cisa.gov/sites/default/files/2025-08/2025_CISA_SBOM_Minimum_Elements.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              projet public 2025 des Minimum Elements for a Software Bill of
              Materials
            </a>
            , Public Comment Draft d’août 2025 : ce document pré-décisionnel ne
            représente pas la position finale du gouvernement américain. Pour
            une base définitive, consultez aussi les{" "}
            <a
              href="https://www.ntia.gov/report/2021/minimum-elements-software-bill-materials-sbom"
              target="_blank"
              rel="noopener noreferrer"
            >
              éléments minimaux publiés par la NTIA en 2021
            </a>
            . Aucun des deux ne crée ici une obligation générale.
          </li>
          <li>
            NIST —{" "}
            <a
              href="https://csrc.nist.gov/pubs/sp/800/218/final"
              target="_blank"
              rel="noopener noreferrer"
            >
              Secure Software Development Framework
            </a>{" "}
            : pratiques de développement sécurisé à proportionner au contexte.
          </li>
          <li>
            Cyber.gov.au —{" "}
            <a
              href="https://www.cyber.gov.au/business-government/protecting-devices-systems/cloud-computing/cloud-shared-responsibility-model-guidance-for-individuals-and-small-and-medium-businesses"
              target="_blank"
              rel="noopener noreferrer"
            >
              responsabilité partagée du cloud pour petites entreprises
            </a>
            : les sauvegardes, secrets, configurations et journaux ne sont pas
            automatiquement délégués.
          </li>
        </ul>

        <h3>Standards et plateformes web internationales</h3>
        <ul>
          <li>
            RFC Editor —{" "}
            <a
              href="https://www.rfc-editor.org/rfc/rfc4035"
              target="_blank"
              rel="noopener noreferrer"
            >
              RFC 4035
            </a>
            ,{" "}
            <a
              href="https://www.rfc-editor.org/rfc/rfc7344"
              target="_blank"
              rel="noopener noreferrer"
            >
              RFC 7344
            </a>{" "}
            et{" "}
            <a
              href="https://www.rfc-editor.org/rfc/rfc9364"
              target="_blank"
              rel="noopener noreferrer"
            >
              RFC 9364
            </a>
            ,{" "}
            <a
              href="https://www.rfc-editor.org/rfc/rfc9615"
              target="_blank"
              rel="noopener noreferrer"
            >
              RFC 9615
            </a>{" "}
            : validation DNSSEC, automatisation de maintenance du DS et
            amorçage automatique à partir de signaux authentifiés. La RFC 9364
            fournit la synthèse DNSSEC de référence ; la RFC 9615 traite
            spécifiquement du bootstrapping. Elles justifient de vérifier la
            cohérence parent/enfant et la procédure de rollover, sans imposer
            une architecture unique.
          </li>
          <li>
            OWASP —{" "}
            <a
              href="https://owasp.org/www-project-web-security-testing-guide/stable/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Web Security Testing Guide
            </a>{" "}
            et{" "}
            <a
              href="https://owasp.org/www-community/Component_Analysis"
              target="_blank"
              rel="noopener noreferrer"
            >
              Component Analysis
            </a>
            .
          </li>
          <li>
            W3C —{" "}
            <a
              href="https://www.w3.org/TR/WCAG22/"
              target="_blank"
              rel="noopener noreferrer"
            >
              WCAG 2.2
            </a>{" "}
            et{" "}
            <a
              href="https://www.w3.org/WAI/test-evaluate/report-template/"
              target="_blank"
              rel="noopener noreferrer"
            >
              modèle de rapport d’évaluation
            </a>
            .
          </li>
          <li>
            Google —{" "}
            <a
              href="https://web.dev/articles/vitals?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Web Vitals
            </a>
            ,{" "}
            <a
              href="https://developers.google.com/search/docs/crawling-indexing/site-move-no-url-changes?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              changement d’hébergement sans changement d’URL
            </a>{" "}
            et{" "}
            <a
              href="https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              migration avec changement d’URL
            </a>
            .
          </li>
          <li>
            GitHub —{" "}
            <a
              href="https://docs.github.com/en/repositories/creating-and-managing-repositories/transferring-a-repository"
              target="_blank"
              rel="noopener noreferrer"
            >
              effets d’un transfert de dépôt
            </a>
            , exemple propre à cette plateforme qui impose une revue des accès,
            intégrations et secrets après transfert.
          </li>
        </ul>

        <p>
          Ce guide fournit une méthode générale de décision. Il ne remplace ni
          un avis juridique adapté aux contrats, licences ou données, ni un DPO,
          ni une réponse à incident, ni un pentest, ni un audit de conformité
          WCAG, ni un test de charge. Sa qualité se mesure à la traçabilité des
          conclusions et à l’absence de faux GO, pas à une promesse de risque
          zéro.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
