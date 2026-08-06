import Image from "next/image";
import {
  FormulaBox,
  GuideTable,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import {
  GuidePremiumCase,
  GuidePremiumLayout,
  GuidePremiumMemo,
  GuidePremiumSection,
} from "@/components/guides/guide-premium-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import {
  buildGuideMetadata,
  buildGuideStructuredData,
} from "@/lib/guide-page-seo";
import { getGuide } from "@/lib/guides";
import { TEAM } from "@/lib/team";

const slug = "lovable-bolt-v0-ou-agence-saas";
const guide = getGuide(slug);
const breadcrumbName = "Lovable, Bolt, v0 ou agence";
const imageAlt =
  "Huit vérifications pour choisir entre Lovable, Bolt, v0 et une agence SaaS";

export const metadata = buildGuideMetadata(guide, imageAlt);
const structuredData = buildGuideStructuredData(guide, breadcrumbName);

const toc = [
  {
    id: "reponse",
    number: "01",
    label: "Choisir le prochain mode",
    shortLabel: "Réponse",
  },
  {
    id: "perimetres",
    number: "02",
    label: "Distinguer les trois produits",
    shortLabel: "Produits",
  },
  {
    id: "chaine-garde",
    number: "03",
    label: "Nommer qui prouve quoi",
    shortLabel: "Preuves",
  },
  {
    id: "stations",
    number: "04",
    label: "Répondre à huit vérifications",
    shortLabel: "Vérifier",
  },
  {
    id: "comptes",
    number: "05",
    label: "Tester deux comptes fictifs",
    shortLabel: "Comptes",
  },
  {
    id: "sortie",
    number: "06",
    label: "Tester les cinq éléments de reprise",
    shortLabel: "Reprise",
  },
  {
    id: "incident",
    number: "07",
    label: "Prévoir erreur et retour",
    shortLabel: "Incident",
  },
  {
    id: "accompagnement",
    number: "08",
    label: "Choisir ce que l’équipe prend en charge",
    shortLabel: "Équipe",
  },
  {
    id: "action",
    number: "09",
    label: "Agir avant de construire",
    shortLabel: "Action",
  },
  {
    id: "decision",
    number: "10",
    label: "Décider ou reporter",
    shortLabel: "Décision",
  },
];

const faqItems = [
  {
    question: "Quel outil choisir pour créer un premier SaaS ?",
    answer: (
      <p>
        Il n’existe pas de gagnant pour tous les projets. Définissez ce que le
        test doit prouver, puis regardez ce que le projet utilise réellement :
        technologies, dépôt, données, hébergement, comptes et conditions
        acceptées. Lovable, Bolt et v0 peuvent tous servir à tester un parcours
        limité ; la décision change dès qu’une autre personne dépend du service
        ou doit le maintenir.
      </p>
    ),
  },
  {
    question: "Un non-technicien peut-il lancer un SaaS seul ?",
    answer: (
      <p>
        Oui, pour prototyper un parcours jetable avec des données fictives. Ce
        premier succès ne prouve pas qu’il sait protéger les accès, restaurer
        les données ou traiter un incident. Avant un usage réel, chaque
        responsabilité inconnue doit être apprise, revue, accompagnée ou retirée
        du test.
      </p>
    ),
  },
  {
    question: "Télécharger le code en ZIP suffit-il pour pouvoir sortir ?",
    answer: (
      <p>
        Non. Le ZIP peut couvrir une partie du code. Il ne contient pas
        nécessairement les données, les identités, les fichiers, les secrets, le
        domaine, les journaux ou la configuration d’hébergement. Installez et
        construisez le code dans un environnement vierge, puis testez chaque
        autre élément séparément.
      </p>
    ),
  },
  {
    question: "Revenir à une version antérieure restaure-t-il la base ?",
    answer: (
      <p>
        Non, pas automatiquement. Bolt indique explicitement que son historique
        de versions ne restaure pas la base Bolt ou Supabase. Lovable et v0 ont
        aussi des modèles de version qui ne prouvent pas un retour coordonné du
        code, des identités et des services. Rejouez le scénario sur une copie.
      </p>
    ),
  },
  {
    question: "Un scan intégré prouve-t-il que l’application est sûre ?",
    answer: (
      <p>
        Non. Lovable distingue Basic et Deep, Bolt un audit complet du projet et
        un contrôle de base de données plus léger, tandis que v0 documente des
        protections de génération et de plateforme. Aucun de ces contrôles ne
        certifie votre logique métier, vos droits d’accès ou votre capacité de
        réponse à un incident.
      </p>
    ),
  },
  {
    question: "À qui appartient le code généré ?",
    answer: (
      <p>
        Cela dépend du service, du plan, des composants tiers et surtout de la
        version des conditions acceptée par votre compte. Vercel encadre les
        sorties v0. Le support Bolt affirme que le code créé appartient au
        client, mais les conditions StackBlitz de 2024 ne précisent pas le
        régime des sorties IA Bolt actuelles et distinguent certains usages
        commerciaux du service. La page Lovable visible le 6 août 2026 annonçait
        une prise d’effet ultérieure, sauf acceptation anticipée. Faites
        qualifier les droits qui comptent pour votre projet.
      </p>
    ),
  },
  {
    question: "Quand demander une revue professionnelle ?",
    answer: (
      <p>
        Demandez-la avant d’ajouter une donnée personnelle, un secret de
        production, un paiement, une règle d’autorisation ou une intégration
        dont votre activité dépend. Donnez à la revue une question et un
        résultat précis : par exemple vérifier la séparation entre deux
        organisations et la procédure de restauration, pas obtenir une promesse
        vague de solidité.
      </p>
    ),
  },
  {
    question: "Une agence rend-elle automatiquement le projet reprenable ?",
    answer: (
      <p>
        Non. Le contrat, les comptes et les preuves doivent rendre la reprise
        observable. Nommez le détenteur de chaque accès, exigez le dépôt, les
        inventaires et les procédures, puis demandez à une autre personne de
        rejouer une remise. Une agence reste un bon choix seulement si elle
        prend des responsabilités clairement définies.
      </p>
    ),
  },
  {
    question: "Peut-on tester avec de vraies données clients ?",
    answer: (
      <p>
        Pas par défaut. Pour la méthode proposée ici, utilisez deux
        organisations, deux comptes et des documents entièrement fictifs. La
        CNIL recommande des environnements séparés et des données fictives ou
        anonymisées pour le développement et les tests. Elle prévoit une
        exception lorsque ces jeux ne suffisent pas : seulement après les autres
        tests, avec une préproduction protégée comme la production et les
        garanties adaptées. Une donnée seulement pseudonymisée reste une donnée
        personnelle.
      </p>
    ),
  },
  {
    question: "Que doit contenir le colis de remise d’un SaaS ?",
    answer: (
      <p>
        Il doit contenir au minimum le dépôt et la procédure de construction,
        les licences, l’inventaire des comptes, les données et fichiers, la mise
        en ligne et le domaine, le registre des secrets sans leurs valeurs, les
        journaux et les procédures d’incident, de retour arrière et de
        restauration. Une seconde personne doit rejouer les étapes critiques.
      </p>
    ),
  },
  {
    question: "Quand faut-il ne pas construire ?",
    answer: (
      <p>
        Quand personne ne sait quel comportement doit changer, quand aucun
        responsable ne pourra exploiter le service, ou quand le test exige des
        données ou des droits que vous ne pouvez pas utiliser prudemment.
        Remplacez alors l’application par un entretien, un formulaire, une
        démonstration sans compte ou une procédure manuelle.
      </p>
    ),
  },
  {
    question: "Quelle action utile faire aujourd’hui sans outil ?",
    answer: (
      <p>
        Écrivez les huit vérifications sur une page. Pour chacune, nommez une
        personne responsable, une seconde personne qui vérifiera, une trace à
        conserver et un test volontaire d’échec. Si vous ne savez pas remplir
        une ligne, marquez-la « inconnu » et réduisez le scénario avant de
        générer le moindre écran.
      </p>
    ),
  },
];

const legalSources = [
  {
    source: "Lovable · Security",
    description:
      "Scans Basic et Deep, caractère non automatique de Deep, limites des contrôles et responsabilité du client — consulté le 6 août 2026.",
    href: "https://docs.lovable.dev/features/security",
  },
  {
    source: "Lovable · Publication",
    description:
      "Version publiée, mise à jour manuelle et séparation avec les droits d’édition — consulté le 6 août 2026.",
    href: "https://docs.lovable.dev/features/publish",
  },
  {
    source: "Lovable · Accès projet",
    description:
      "Différence entre accès au projet, au code et au site publié — consulté le 6 août 2026.",
    href: "https://docs.lovable.dev/features/project-visibility",
  },
  {
    source: "Lovable · GitHub",
    description:
      "Copie et synchronisation bidirectionnelle avec un nouveau dépôt privé, une branche active à la fois ; téléchargement direct du code sur plans payants — consulté le 6 août 2026.",
    href: "https://docs.lovable.dev/integrations/github",
  },
  {
    source: "Lovable · FAQ",
    description:
      "TanStack Start pour les projets récents, React et Vite pour les plus anciens — consulté le 6 août 2026.",
    href: "https://docs.lovable.dev/introduction/faq",
  },
  {
    source: "Lovable · Portabilité",
    description:
      "Page de déploiement et portabilité parlant encore de Vite et React : contradiction à résoudre en inspectant le projet réel — consulté le 6 août 2026.",
    href: "https://docs.lovable.dev/tips-tricks/deployment-hosting-ownership",
  },
  {
    source: "Lovable · Environnements",
    description:
      "Fin de Test/Live pour les nouveaux projets Cloud depuis le 24 mars 2026 et limites de synchronisation — consulté le 6 août 2026.",
    href: "https://docs.lovable.dev/features/environments",
  },
  {
    source: "Lovable · Conditions",
    description:
      "Version mise à jour le 16 juin 2026, annoncée effective le 15 août 2026 sauf acceptation expresse anticipée — consulté le 6 août 2026.",
    href: "https://lovable.dev/terms",
  },
  {
    source: "Lovable · Données et entraînement",
    description:
      "Opt-out individuel sur tout plan pour ses propres données ; opt-out de tout l’espace réservé aux administrateurs Business et Enterprise — consulté le 6 août 2026.",
    href: "https://docs.lovable.dev/features/business/data-opt-out",
  },
  {
    source: "Lovable · Crédits et usages",
    description:
      "Une balance finance construction, Cloud et IA embarquée, mais chaque catégorie suit ses propres unités et facteurs — consulté le 6 août 2026.",
    href: "https://docs.lovable.dev/introduction/credits-and-usage",
  },
  {
    source: "Bolt · Security",
    description:
      "Audit complet du projet sur plan payant, contrôle de base de données plus léger tous plans et effet d’un retour à une version antérieure — consulté le 6 août 2026.",
    href: "https://support.bolt.new/building/security",
  },
  {
    source: "Bolt · Versions et export",
    description:
      "Historique, sauvegardes, GitHub, ZIP et absence de restauration de la base par retour de version — consulté le 6 août 2026.",
    href: "https://support.bolt.new/building/using-bolt/rollback-backup",
  },
  {
    source: "Bolt · Supabase",
    description:
      "Bolt Database par défaut ; Supabase au démarrage sur plan payant et projet Vite, sans prise en charge Next.js actuelle ; migration non symétrique — consulté le 6 août 2026.",
    href: "https://support.bolt.new/integrations/supabase",
  },
  {
    source: "Bolt · Tables",
    description:
      "Export des lignes de tables en CSV ou JSON, distinct d’une restauration complète — consulté le 6 août 2026.",
    href: "https://support.bolt.new/cloud/database/tables",
  },
  {
    source: "Bolt · Projets et fichiers",
    description:
      "Limites de la duplication sur données, GitHub, Netlify et domaine — consulté le 6 août 2026.",
    href: "https://support.bolt.new/building/using-bolt/projects-files",
  },
  {
    source: "Bolt · Jetons et hébergement",
    description:
      "Jetons de construction distincts des limites d’hébergement, de bande passante et de requêtes — consulté le 6 août 2026.",
    href: "https://support.bolt.new/account-and-subscription/tokens",
  },
  {
    source: "Bolt · Données projet et modèles",
    description:
      "La documentation affirme que Bolt n’utilise jamais les données du projet pour entraîner ses agents IA ; portée limitée à cette assertion éditeur — consulté le 6 août 2026.",
    href: "https://support.bolt.new/concepts/intro-llms",
  },
  {
    source: "Bolt · Plans d’hébergement",
    description:
      "Bande passante et requêtes partagées au niveau du compte ; arrêt ou dépassement selon le plan et le plafond — consulté le 6 août 2026.",
    href: "https://support.bolt.new/cloud/hosting/plans",
  },
  {
    source: "Bolt · Usage commercial",
    description:
      "Assertion du support sur le code et l’usage commercial, à rapprocher des conditions acceptées — consulté le 6 août 2026.",
    href: "https://support.bolt.new/account-and-subscription/corporate-commercial",
  },
  {
    source: "StackBlitz · Conditions",
    description:
      "Conditions datées du 10 janvier 2024, insuffisamment précises pour conclure seules sur toutes les sorties Bolt actuelles.",
    href: "https://stackblitz.com/terms-of-service",
  },
  {
    source: "v0 · Full-stack",
    description:
      "Applications full-stack, Next.js par défaut et autres frameworks possibles — consulté le 6 août 2026.",
    href: "https://v0.app/docs/full-stack-apps",
  },
  {
    source: "v0 · GitHub",
    description:
      "Dépôt source de vérité, branches par conversation, commits et pull requests — consulté le 6 août 2026.",
    href: "https://v0.app/docs/github",
  },
  {
    source: "v0 · Projets",
    description:
      "Déploiement, domaines, variables et visibilité Production partagés ou réglés au niveau du projet — consulté le 6 août 2026.",
    href: "https://v0.app/docs/projects",
  },
  {
    source: "v0 · Partage des chats",
    description:
      "Visibilité du chat privée, équipe, non répertoriée ou publique, distincte de la visibilité Production et des ressources du projet — consulté le 6 août 2026.",
    href: "https://v0.app/docs/sharing",
  },
  {
    source: "v0 · Versions",
    description:
      "Création des versions par les mises à jour de code issues d’un message et limites des modifications couvertes — consulté le 6 août 2026.",
    href: "https://v0.app/docs/versions",
  },
  {
    source: "v0 · Déploiements",
    description:
      "Déploiement vers Vercel et URL de production du projet — consulté le 6 août 2026.",
    href: "https://v0.app/docs/deployments",
  },
  {
    source: "v0 · Sécurité",
    description:
      "Analyse avant exécution, environnement isolé et distinction des variables publiques/serveur ; protections de plateforme, pas certification de l’application — consulté le 6 août 2026.",
    href: "https://v0.app/docs/security",
  },
  {
    source: "v0 · Tarification et crédits",
    description:
      "Crédits de génération et coût en jetons variable selon le modèle, distincts des ressources Vercel et services tiers — consulté le 6 août 2026.",
    href: "https://v0.app/docs/pricing",
  },
  {
    source: "Vercel · Conditions IA",
    description:
      "Sorties à examiner, droits et non-unicité ; absence d’entraînement seulement pour Enterprise ou une offre habilitée, selon conditions et réglages — effectives depuis le 31 mars 2026.",
    href: "https://vercel.com/legal/ai-product-terms",
  },
  {
    source: "CNIL · Sécurité, version 2024 mise à jour en 2026",
    description:
      "Séparation des environnements, données fictives ou anonymisées ; exception bornée en préproduction protégée comme la production — fiche 11, consultée le 6 août 2026.",
    href: "https://www.cnil.fr/sites/default/files/2026-05/cnil_guide_securite_personnelle.pdf",
  },
  {
    source: "CNIL · Anonymisation",
    description:
      "Différence entre pseudonymisation réversible et anonymisation effectivement irréversible — consulté le 6 août 2026.",
    href: "https://www.cnil.fr/fr/technologies/lanonymisation-de-donnees-personnelles",
  },
];

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
          { label: "Lovable, Bolt, v0 ou agence" },
        ]}
        badges={[
          { label: "Choisir qui prend le relais", variant: "dark" },
          { label: "8 vérifications avant transfert", variant: "neutral" },
          { label: "Données fictives", variant: "success" },
          { label: "Méthode non testée ici", variant: "muted" },
          { label: "Brouillon privé", variant: "muted" },
        ]}
        heroTitle={"Lovable, Bolt, v0 ou agence\u00a0:"}
        heroTitleEm="comment lancer votre SaaS ?"
        heroDescription="Pour tester un parcours limité sans données réelles, vous pouvez prototyper seul avec Lovable, Bolt ou v0. Si vous voulez conserver le code, faites-le relire avant d’aller plus loin. Si le projet comporte déjà des comptes, des paiements, des rôles complexes ou un service dont votre activité dépend, faites-vous accompagner dès la construction. Si le besoin, les droits ou la personne qui corrigera un incident restent inconnus, simplifiez le test ou reportez-le. Les trois produits ne couvrent pas les mêmes besoins : choisissez maintenant qui construit et ce qu’une autre personne devra pouvoir reprendre."
        stats={[
          { label: "Chemins", value: "4" },
          { label: "Vérifications", value: "8" },
          { label: "Produits", value: "3" },
          { label: "Données réelles", value: "Aucune" },
          { label: "Palmarès", value: "Aucun" },
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
        faqTitle="Questions fréquentes sur Lovable, Bolt, v0 et l’accompagnement SaaS"
        faqItems={faqItems}
        faqMeta={{
          eyebrow: "Questions fréquentes",
          titleStart: "Choisir une voie",
          titleEm: "\u2009en sachant qui devra reprendre\u2009",
          titleEnd: ".",
          subtitle:
            "Code, base, droits, contrôles, reprise et données réelles : vérifiez chaque point sur votre projet plutôt que d’accepter une promesse générale.",
        }}
        strategyCta={{
          titleStart: "Préparer un prototype",
          titleEm: "qu’une autre personne saura reprendre",
          description:
            "Si votre scénario exige déjà plusieurs comptes, une base ou une continuité de service, décrivez ce qui doit être transmis et ce que vous ne pouvez pas gérer seul. Nous vous dirons aussi si un test plus simple suffit.",
          badges: [
            "Fonctions incluses",
            "Données fictives d’abord",
            "Reprise testable",
          ],
          ctaLabel: "Décrire ce qui doit être repris",
          ctaHref: "/demarrer-un-projet",
          showPhoneCta: false,
        }}
        legalSources={legalSources}
        disclaimer={{
          eyebrow: "Limites",
          title: "Une méthode à tester, pas un audit de votre application",
          description:
            "Les fonctions, plans et conditions évoluent. Rouvrez les sources et vérifiez le projet, le compte et le contrat réellement utilisés. Aucun scanner, fournisseur ou prestataire ne garantit à lui seul sécurité, conformité, performance, droits ou continuité. Le scénario et le calcul de cette page sont fictifs et non exécutés.",
        }}
      >
        <GuidePremiumSection
          id="reponse"
          number="01"
          label="Réponse directe"
          readingTime="2 min"
          title="Choisissez qui construit avant d’ouvrir un outil"
        >
          <p>
            Un générateur peut être le bon premier geste si vous cherchez à
            comprendre un parcours et acceptez de jeter le résultat. Il devient
            insuffisant comme critère dès qu’une autre personne doit utiliser,
            payer, confier des données ou dépendre du service. La question n’est
            alors plus « l’écran apparaît-il ? », mais « qui peut expliquer ce
            qui a été construit, le reprendre et corriger un échec ? »
          </p>

          <GuideTable
            caption="Quatre modes de construction selon la preuve et la responsabilité"
            headers={["Voie", "Bon point de départ", "Condition d’arrêt"]}
            rows={[
              [
                "Autonomie avec Lovable, Bolt ou v0",
                "Parcours borné, données fictives, résultat jetable et personne disponible pour apprendre.",
                "Un compte réel, un secret, une donnée personnelle ou une dépendance d’activité devient nécessaire.",
              ],
              [
                "Prototype puis revue",
                "La démonstration est utile, mais code, autorisations, données ou déploiement doivent être qualifiés avant la suite.",
                "La revue n’a ni question précise, ni accès au dépôt, ni possibilité de corriger ou de jeter.",
              ],
              [
                "Construction accompagnée",
                "Identités, paiements, rôles, intégrations, migration ou exploitation doivent être décidés ensemble.",
                "Le prestataire promet un résultat sans attribuer les comptes, contrôles, incidents et livrables.",
              ],
              [
                "Simplifier ou différer",
                "Besoin, responsable d’exploitation, droits ou capacité de reprise encore inconnus.",
                "La construction est utilisée pour éviter une question qui peut être tranchée par un entretien ou une procédure manuelle.",
              ],
            ]}
          />

          <GuidePremiumMemo
            eyebrow="Règle de décision"
            title="Retirez du test ce que personne ne sait gérer"
          >
            <p>
              Retirez l’authentification, la donnée, le paiement ou
              l’intégration si leur responsable n’est pas nommé. Une
              démonstration simplifiée peut encore apprendre quelque chose ; une
              responsabilité cachée ne devient jamais gratuite.
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="perimetres"
          number="02"
          label="Produits actuels"
          readingTime="4 min"
          title="Lovable, Bolt et v0 ne créent pas le même type de projet"
        >
          <p>
            Les documentations officielles ont été rouvertes le 6 août 2026.
            Elles décrivent des fonctions de fournisseur, pas le niveau de
            qualité d’un projet donné. Les offres peuvent changer : notez la
            date, le plan et le modèle de projet observé avant chaque test.
          </p>

          <GuideTable
            caption="Périmètres documentés de Lovable, Bolt et v0 au 6 août 2026 — aucun classement"
            headers={[
              "Produit",
              "Modèle de projet",
              "Sortie et publication",
              "Contrôle à ne pas oublier",
            ]}
            rows={[
              [
                "Lovable",
                "Les projets récents utilisent TanStack Start selon la FAQ ; les anciens restent React + Vite. Le projet exact doit être inspecté.",
                "GitHub fournit une copie synchronisée dans les deux sens, sur une branche active à la fois. La publication est un instantané à mettre à jour.",
                "Accès au projet et au site séparés ; Basic et Deep distincts ; réglage d’entraînement individuel ≠ réglage de tout l’espace.",
              ],
              [
                "Bolt",
                "Les nouveaux projets utilisent Bolt Database par défaut. Supabase au démarrage exige actuellement un plan payant et un projet Vite ; Next.js n’est pas pris en charge.",
                "ZIP, GitHub et Bolt Cloud couvrent des chemins de code/déploiement ; les tables s’exportent séparément.",
                "Historique de code ≠ base ; audit complet payant ≠ contrôle de base de données tous plans.",
              ],
              [
                "v0 / Vercel",
                "v0 construit des applications full-stack ; Next.js est le défaut le plus fiable, sans exclure d’autres frameworks.",
                "Le dépôt connecté est source de vérité ; branches, commits et pull requests précèdent le déploiement Vercel.",
                "Visibilité du chat, visibilité Production et ressources partagées du projet sont trois frontières distinctes.",
              ],
            ]}
          />

          <h3>Trois points à vérifier dans les documentations</h3>
          <ul>
            <li>
              Lovable décrit TanStack Start pour les projets créés depuis le 13
              mai 2026, tandis qu’une page de portabilité parle encore de Vite
              et React. Le dépôt réel tranche ; pas la formule marketing.
            </li>
            <li>
              Le support Bolt affirme que le code créé appartient au client et
              autorise l’usage commercial. Ce n’est pas une contradiction
              directe avec les conditions StackBlitz de 2024 : celles-ci ne
              précisent pas le régime des sorties IA Bolt actuelles et
              distinguent certains usages commerciaux du service. Vérifiez
              version acceptée, plan et composants tiers.
            </li>
            <li>
              La page de conditions Lovable visible le 6 août 2026 était mise à
              jour le 16 juin, avec effet annoncé au 15 août sauf acceptation
              expresse anticipée. Elle ne peut pas être appliquée
              automatiquement à tous les comptes à cette date.
            </li>
          </ul>

          <InfoBox
            variant="blue"
            title="« Privé » et « non utilisé pour entraîner » ne sont pas synonymes"
          >
            <p>
              Lovable permet à tout utilisateur d’exclure ses propres données de
              l’entraînement, mais l’exclusion de tout un espace est documentée
              pour Business et Enterprise. Bolt affirme ne jamais utiliser les
              données du projet pour entraîner ses agents IA ; cette phrase ne
              documente pas, à elle seule, conservation, sous-traitants ou
              contrat. Chez v0, la visibilité du chat est distincte de la
              visibilité Production et des ressources du projet ; les conditions
              IA réservent l’engagement de non-entraînement à Enterprise ou à
              une autre offre qui y donne droit. Relevez donc le plan, chaque
              réglage et la version contractuelle observés : aucun mot
              d’interface ne prouve seul la confidentialité du dispositif.
            </p>
          </InfoBox>

          <InfoBox variant="amber" title="Aucun résultat de benchmark ici">
            <p>
              Le scénario ci-dessous a été conçu pour être reproductible, mais
              il n’a pas été exécuté. Il ne permet donc de conclure ni sur le
              meilleur outil, ni sur un délai, un prix, une performance ou un
              niveau de sécurité.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="chaine-garde"
          number="03"
          label="Passage de relais"
          readingTime="3 min"
          title="Pour passer la main, notez qui prouve quoi"
        >
          <p>
            La « chaîne de garde » désigne ici une liste d’actions et de
            preuves. Pour chaque point, nommez la personne responsable, la
            seconde personne qui vérifiera, la trace à conserver, le test
            volontaire d’échec et la condition pour passer la main. La seconde
            personne doit pouvoir refaire le test sans la conversation ni la
            mémoire du créateur.
          </p>

          <figure
            className="not-prose my-8 overflow-x-auto rounded-2xl border border-zinc-200 bg-zinc-950 dark:border-zinc-800"
            tabIndex={0}
            aria-label="Visualisation défilable de la chaîne de garde"
          >
            <Image
              src={`/guides/${slug}/chaine-garde-produit.svg`}
              alt="Huit vérifications avant reprise : fonctions incluses, code, identités, déploiement, données, secrets, erreur, retour et relève"
              width={1200}
              height={675}
              className="h-auto w-full min-w-[720px]"
              sizes="(max-width: 800px) 100vw, 760px"
            />
            <figcaption className="px-4 py-3 text-sm leading-relaxed text-zinc-200">
              Chaque vérification compte séparément. Un code récupérable ne
              répare pas une restauration inconnue.
            </figcaption>
          </figure>

          <h3>Une fiche à copier pour chaque vérification</h3>
          <FormulaBox>{`Vérification :
Fonctions incluses, exclusions, outil, plan, version et date :
Personne responsable :
Seconde personne qui vérifie :
Action :
Trace conservée :
Test volontaire d’échec :
Résultat : FERMÉ / ÉCHEC / INCONNU
Condition pour passer la main :
Responsable si cette condition n’est plus tenue :`}</FormulaBox>

          <p>
            Une capture seule prouve rarement qu’une autre personne saura agir.
            Conservez le commit, le journal, l’archive, le rôle utilisé et la
            procédure. Testez ensuite volontairement l’échec : retirez par
            exemple l’accès du créateur avant de demander à une seconde personne
            de reconstruire le projet.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="stations"
          number="04"
          label="Huit vérifications"
          readingTime="5 min"
          title="Obtenez une réponse aux huit vérifications avant de passer la main"
        >
          <GuideTable
            caption="Les huit vérifications qui doivent toutes avoir une réponse"
            headers={[
              "Vérification",
              "Action",
              "Test volontaire",
              "Condition pour passer la main",
            ]}
            rows={[
              [
                "1 · Périmètre",
                "Figer objectif, exclusions, jeu fictif, outil, plan et pile observée.",
                "Soumettre un cas explicitement exclu.",
                "La seconde personne sait ce que la version ne promet pas.",
              ],
              [
                "2 · Code",
                "Récupérer dépôt ou ZIP, installer et construire dans une session vierge.",
                "Retirer la conversation et la machine du créateur.",
                "Une seconde personne reconstruit avec commandes et variables documentées.",
              ],
              [
                "3 · Identités",
                "Créer deux organisations et deux rôles fictifs.",
                "Utiliser le lien, l’identifiant ou le rôle de l’autre compte.",
                "Aucun accès croisé observé et règle relue, sans prétendre certifier toute la sécurité.",
              ],
              [
                "4 · Déploiement",
                "Publier un commit identifié depuis des comptes d’entreprise.",
                "Essayer depuis un compte retiré ou non autorisé.",
                "Une seconde personne publie et retire sans compte personnel du créateur.",
              ],
              [
                "5 · Données",
                "Exporter séparément schéma, lignes, fichiers et identités, puis restaurer sur une cible vierge.",
                "Supprimer la copie de test avant restauration.",
                "Un état exploitable est retrouvé et les manques restent nommés.",
              ],
              [
                "6 · Secrets",
                "Inventorier propriétaire, portée, rotation et révocation sans copier les valeurs.",
                "Révoquer une clé fictive.",
                "L’échec est visible et une clé neuve repart sans secret dans Git.",
              ],
              [
                "7 · Erreur",
                "Provoquer une intégration indisponible et une entrée invalide.",
                "Couper volontairement le service de test.",
                "Journaux, message, alerte et responsable sont observables.",
              ],
              [
                "8 · Retour et relève",
                "Revenir au code antérieur, traiter les données séparément et faire reprendre par une autre personne.",
                "Retirer la personne initialement responsable.",
                "La seconde personne rétablit ou met en sécurité sans mémoire orale.",
              ],
            ]}
          />

          <FormulaBox>{`F + E + I = 8
reste_ouvert = E + I
décision de transfert = SUSPENDRE si reste_ouvert > 0`}</FormulaBox>

          <p>
            F compte les vérifications fermées, E les échecs et I les inconnues.
            Ce n’est ni une note, ni un score de qualité. Dans l’exemple fictif
            non exécuté, 6 vérifications fermées, 1 échec et 1 inconnue donnent
            bien <code>6 + 1 + 1 = 8</code>. Le résultat
            <code>reste_ouvert = 2</code> signifie que la remise reste
            suspendue. Une inconnue ne devient jamais zéro et un bon rendu ne
            compense pas une donnée impossible à restaurer.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="comptes"
          number="05"
          label="Cas fictif"
          readingTime="4 min"
          title="Deux comptes fictifs rendent déjà les responsabilités visibles"
        >
          <GuidePremiumCase
            initial="RD"
            eyebrow="Exemple entièrement fictif · méthode non testée ici"
            title="Relais Devis, Atelier Lune et Atelier Silex"
          >
            <p>
              Relais Devis permettrait de déposer puis approuver un devis
              interne. `lea@atelier-lune.example` et
              `yanis@atelier-silex.example` sont deux comptes fictifs, avec des
              documents, montants et messages inventés. Aucun client, aucune
              mission Hagnéré Code et aucune donnée réelle ne sont décrits.
            </p>
          </GuidePremiumCase>

          <p>
            Le test cherche seulement deux réponses : chaque rôle accomplit-il
            l’action prévue, et une organisation peut-elle lire l’identifiant ou
            le document de l’autre ? Cette tentative d’accès croisé utilise le
            lien, l’identifiant et le rôle de l’autre compte. Il faut ensuite
            faire relire la règle qui l’interdit, puis observer un utilisateur
            métier accomplir l’action sans aide du créateur. Un résultat
            favorable ne prouve ni adoption ni utilité commerciale et ne
            certifie pas l’application : il répond seulement à ce test précis.
          </p>

          <figure
            className="not-prose my-8 overflow-x-auto rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
            tabIndex={0}
            aria-label="Visualisation défilable des frontières de responsabilité"
          >
            <Image
              src={`/guides/${slug}/frontieres-responsabilite.svg`}
              alt="Six frontières à attribuer : comptes, code, données, déploiement, secrets, exploitation et relève"
              width={1000}
              height={750}
              className="h-auto w-full min-w-[680px]"
              sizes="(max-width: 800px) 100vw, 760px"
            />
            <figcaption className="px-4 py-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              L’interface de génération n’est qu’une partie du produit. Chaque
              partie demande un responsable et une preuve de reprise.
            </figcaption>
          </figure>

          <InfoBox variant="blue" title="Données fictives d’abord">
            <p>
              La CNIL recommande de séparer développement/test et production,
              d’utiliser des données fictives ou anonymisées et de garder les
              secrets hors du contrôle de version. Remplacer un nom par un
              identifiant ne suffit pas à anonymiser si la réidentification
              reste possible. Si ces jeux ne suffisent réellement pas, la fiche
              11 ne permet pas de sauter directement à la donnée client : les
              autres tests doivent précéder et la préproduction doit être
              protégée comme la production, avec les garanties adaptées.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="sortie"
          number="06"
          label="Sortie du projet"
          readingTime="5 min"
          title="Testez séparément les cinq éléments d’une reprise"
        >
          <p>
            Dire « le projet est exportable » masque souvent plusieurs
            opérations. Vérifiez-les séparément : une archive de code ne
            contient pas automatiquement les lignes de base, les fichiers, les
            identités, le domaine, la configuration ou les secrets.
          </p>

          <GuideTable
            caption="Cinq éléments à tester séparément avant d’affirmer que le projet peut être repris"
            headers={["Sortie", "Preuve utile", "Ce qu’elle ne prouve pas"]}
            rows={[
              [
                "Récupération du code",
                "Dépôt ou ZIP, dépendances, licence, commandes et compilation sur un environnement vierge.",
                "Données, identités, services et droit d’exploiter tous les composants.",
              ],
              [
                "Export des données",
                "Schéma, lignes, fichiers et horodatage de l’archive.",
                "Restauration réussie, cohérence ou récupération des comptes.",
              ],
              [
                "Restauration",
                "Cible vierge, journal d’import, contrôles avant/après et erreurs traitées.",
                "Migration du domaine, des secrets ou des fournisseurs.",
              ],
              [
                "Migration des comptes",
                "Liste des identités, rôles, invitations, récupération et consentements applicables.",
                "Reprise des mots de passe ou sessions, souvent impossible ou inappropriée telle quelle.",
              ],
              [
                "Reprise opérationnelle",
                "Seconde personne capable de déployer, surveiller, corriger, revenir et contacter les fournisseurs.",
                "Absence future d’incident ou garantie de continuité.",
              ],
            ]}
          />

          <h3>Chaque produit oblige à vérifier des éléments différents</h3>
          <ul>
            <li>
              <strong>Lovable :</strong> le code reste stocké et géré dans
              Lovable ; GitHub fournit une copie et une synchronisation
              bidirectionnelle, mais une seule branche est active à la fois et
              la connexion crée un nouveau dépôt privé. Le téléchargement direct
              du code est réservé aux plans payants. Renommer le dépôt seul est
              documenté comme sûr ; transfert, renommage du compte ou de
              l’organisation, suppression et déconnexion peuvent rompre ou
              recréer la liaison.
            </li>
            <li>
              <strong>Bolt :</strong> l’historique de versions ne restaure ni
              Bolt Database ni Supabase. CSV/JSON exporte des lignes, tandis que
              la direction Supabase vers Bolt Database n’est pas prise en
              charge. Le choix de Supabase au démarrage est actuellement limité
              aux plans payants et aux projets Vite ; Next.js n’est pas pris en
              charge. Dupliquer un projet ne copie pas tout le contexte.
            </li>
            <li>
              <strong>v0 :</strong> le dépôt connecté devient source de vérité,
              mais projet, déploiement, domaine, variables et base externe
              restent à inventorier. La visibilité du chat — privée, équipe, non
              répertoriée ou publique — ne règle ni la visibilité Production ni
              l’accès aux ressources partagées du projet. Une version v0 est
              créée par certaines mises à jour issues des messages, pas par
              toute modification.
            </li>
          </ul>

          <figure
            className="not-prose my-8 overflow-x-auto rounded-2xl border border-zinc-200 bg-zinc-950 dark:border-zinc-800"
            tabIndex={0}
            aria-label="Visualisation défilable du colis de remise"
          >
            <Image
              src={`/guides/${slug}/colis-remise-saas.svg`}
              alt="Colis de remise contenant dépôt, données, comptes, déploiement, inventaire des secrets et procédure d’exploitation"
              width={800}
              height={800}
              className="h-auto w-full min-w-[560px]"
              sizes="(max-width: 800px) 100vw, 760px"
            />
            <figcaption className="px-4 py-3 text-sm leading-relaxed text-zinc-200">
              Une seconde personne valide après avoir rejoué les étapes, pas
              après avoir reçu un dossier rempli de promesses.
            </figcaption>
          </figure>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="incident"
          number="07"
          label="Exploitation"
          readingTime="4 min"
          title="Provoquez une erreur avant de promettre un retour arrière"
        >
          <p>
            Choisissez un service fictif et rendez-le indisponible.
            L’utilisateur reçoit-il un message qui n’expose aucun secret ? Un
            journal permet-il de relier l’échec à une action ? Une personne
            nommée est-elle alertée ? Peut-elle désactiver la fonction, corriger
            puis vérifier la reprise ?
          </p>

          <GuideTable
            caption="Ce qu’un test d’incident doit rendre observable"
            headers={["Moment", "Question", "Trace attendue"]}
            rows={[
              [
                "Détection",
                "Qui apprend l’échec, par quel canal et avec quel contexte ?",
                "Journal horodaté, alerte reçue et corrélation sans donnée sensible.",
              ],
              [
                "Limitation",
                "Peut-on couper la fonction sans bloquer tout le produit ?",
                "Décision, changement de configuration et message utilisateur.",
              ],
              [
                "Correction",
                "Quel commit, secret ou service change ?",
                "Revue, test ciblé et version déployée.",
              ],
              [
                "Retour",
                "Le code antérieur reste-t-il compatible avec l’état des données ?",
                "Essai sur copie, procédure séparée et critères de non-retour.",
              ],
              [
                "Relève",
                "Une seconde personne peut-elle intervenir sans le créateur ?",
                "Accès de secours testé, journal de reprise et éléments manquants.",
              ],
            ]}
          />

          <p>
            Après un retour à une version antérieure dans Bolt, rejouez les
            contrôles de sécurité : la documentation avertit que ce retour
            retire aussi les corrections ajoutées ensuite. Avec Lovable, le
            contrôle approfondi Deep n’est pas automatique et un problème
            critique peut rester publiable selon la politique de l’espace. Avec
            v0, l’analyse avant exécution et l’environnement isolé décrivent la
            plateforme, pas vos autorisations entre organisations.
          </p>

          <p>
            Rejouez aussi le parcours avec un volume fictif doublé et rendez un
            service tiers indisponible. Ce test borné n’est pas un benchmark de
            charge : il sert à rendre visibles une limite, une hausse de coût,
            une dégradation, une alerte absente ou un propriétaire manquant. Si
            l’une de ces conséquences reste inconnue, ne rendez pas l’activité
            dépendante du prototype.
          </p>

          <InfoBox
            variant="amber"
            title="Un scan signale un problème ; il ne décide pas à votre place"
          >
            <p>
              Consignez le nom du contrôle, sa date, les éléments vérifiés, les
              alertes ouvertes et la personne qui les arbitre. Ne traduisez
              jamais « aucune alerte affichée » par « application sûre ».
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="accompagnement"
          number="08"
          label="Responsabilités"
          readingTime="4 min"
          title="Choisissez exactement ce que l’équipe doit prendre en charge"
        >
          <p>
            Hagnéré Code vend de l’accompagnement SaaS : ce conflit d’intérêt
            impose une règle simple. L’agence n’est recommandée que lorsque le
            travail à prendre en charge est nommé et vérifiable. Elle ne
            remplace ni la décision métier du client, ni les comptes qui doivent
            appartenir à son entreprise, ni une qualification juridique ou de
            protection des données adaptée.
          </p>

          <GuideTable
            caption="Quand l’autonomie, la revue ou l’accompagnement conviennent"
            headers={[
              "Mode",
              "Quand ce mode convient",
              "Quand il ne convient pas",
            ]}
            rows={[
              [
                "Autonomie",
                "Interaction bornée, jeu fictif, résultat jetable, aucune activité dépendante.",
                "Paiement, donnée réelle, rôles complexes, secret de production ou personne absente pour corriger.",
              ],
              [
                "Revue ciblée",
                "Question précise, dépôt accessible, test d’échec défini et temps de correction prévu.",
                "Demande vague de validation, aucun accès aux éléments ou obligation de conserver le prototype quoi qu’il arrive.",
              ],
              [
                "Construction accompagnée",
                "Architecture, identités, données, migration et exploitation doivent être cohérentes dès le test.",
                "Besoin non vérifié, aucun décideur client, accès refusés ou budget traité comme garantie de résultat.",
              ],
            ]}
          />

          <h3>Le contrat doit nommer ce qui sera réellement transmis</h3>
          <ul>
            <li>quels comptes sont créés au nom de l’entreprise ;</li>
            <li>qui peut ajouter, retirer et récupérer un administrateur ;</li>
            <li>
              quel dépôt, quelles licences et quels composants sont remis ;
            </li>
            <li>
              quelles données, identités et configurations sont exportables ;
            </li>
            <li>
              qui reçoit une alerte et dans quelles limites il intervient ;
            </li>
            <li>
              quels réglages de partage, de conservation et d’entraînement sont
              appliqués au compte et à l’espace de travail ;
            </li>
            <li>
              quelle seconde personne rejoue la reprise avant la fin de mission.
            </li>
          </ul>

          <h3>Comparez le coût des responsabilités, pas un prix d’entrée</h3>
          <p>
            Aucun prix, délai ou gain moyen comparable n’est prouvé ici.
            Inventoriez plutôt les postes ouverts : apprentissage du porteur,
            crédits et abonnements, revue, correction, hébergement, base,
            e-mails, suivi des erreurs, maintenance, assistance, incident et
            sortie. Une construction autonome peut déplacer ces postes vers
            votre temps ; une agence peut en assumer certains seulement si sa
            proposition les nomme. Laissez tout montant inconnu visible avant de
            comparer deux options.
          </p>
          <p>
            Ne comparez pas directement les unités affichées : crédits de
            génération, jetons, hébergement, requêtes, bande passante et
            services tiers ne mesurent pas la même chose et leurs règles
            dépendent du plan. Séparez au minimum construction, exécution,
            fournisseurs externes et travail humain ; mesurez-les sur votre
            scénario, puis laissez toute valeur non observée « à confirmer ».
          </p>

          <GuidePremiumMemo
            eyebrow="Mauvais signal"
            title="« On pourra toujours reprendre plus tard » n’est pas une preuve"
          >
            <p>
              Demandez une remise partielle tôt : une installation et une
              compilation sur un environnement vierge, un export de test, une
              rotation de clé fictive et un second administrateur. Si ces gestes
              simples sont impossibles, la dépendance existe déjà.
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="action"
          number="09"
          label="Action autonome"
          readingTime="2 min"
          title="Consacrez 45 minutes aux questions avant d’ouvrir un outil"
        >
          <p>
            Fixez volontairement 45 minutes pour commencer. Ce délai n’est pas
            une estimation du temps nécessaire pour définir tout le projet ; il
            sert seulement à poser les premières questions. Arrêtez le minuteur
            si une vérification extérieure est nécessaire et conservez l’élément
            comme « inconnu ».
          </p>
          <ol>
            <li>
              Écrivez en une phrase l’action que le prototype doit rendre
              observable, puis trois choses qu’il ne promettra pas.
            </li>
            <li>
              Dessinez huit lignes : fonctions incluses, code, identités,
              déploiement, données, secrets, erreur, retour et relève.
            </li>
            <li>
              Pour chaque ligne, nommez une personne responsable, une seconde
              personne qui vérifiera, une trace à conserver et un test
              volontaire d’échec.
            </li>
            <li>
              Marquez « inconnu » chaque case que personne ne sait remplir. Ne
              la transformez ni en oui, ni en zéro, ni en « l’outil gère ».
            </li>
            <li>
              Retirez du prototype les fonctions qui ouvrent une responsabilité
              inconnue. Testez si un écran sans compte, un formulaire ou une
              procédure manuelle suffit.
            </li>
          </ol>

          <GuidePremiumCase
            initial="!"
            eyebrow="Sortie valable"
            title="Décider de ne pas construire est un résultat"
          >
            <p>
              Si personne ne peut nommer l’acheteur, l’action à changer ou le
              responsable qui exploitera le produit, dix nouveaux écrans
              ajouteront surtout des décisions cachées. Revenez aux entretiens,
              à une démonstration sans compte ou à une prestation manuelle.
            </p>
          </GuidePremiumCase>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="decision"
          number="10"
          label="Dernière vérification"
          readingTime="3 min"
          title="Validez seulement la prochaine étape du projet"
        >
          <p>
            Ne transformez pas le choix du premier test en engagement de long
            terme. Retenez la plus petite expérience dont une autre personne
            pourra vérifier la remise. Reposez la question à l’étape suivante si
            le périmètre, les données ou la responsabilité changent.
          </p>

          <GuideTable
            caption="Décision finale selon la prochaine preuve à obtenir"
            headers={[
              "Situation",
              "Décision maintenant",
              "Preuve avant la suite",
            ]}
            rows={[
              [
                "Parcours sans compte ni donnée réelle",
                "Prototype autonome possible.",
                "Une seconde personne reproduit le parcours et comprend les exclusions.",
              ],
              [
                "Code à conserver, sans activité dépendante",
                "Prototype puis revue ciblée.",
                "Compilation sur un environnement vierge, dépôt maîtrisé et questions de revue fermées.",
              ],
              [
                "Identités, paiements, règles ou intégration critique",
                "Construction accompagnée ou réduction du périmètre.",
                "Responsabilités, tests d’échec, incident et remise attribués.",
              ],
              [
                "Besoin, droit, données ou exploitation inconnus",
                "Différer et enquêter.",
                "L’inconnue reçoit une réponse extérieure au produit.",
              ],
            ]}
          />

          <p>
            La méthode présentée ici n’a pas été exécutée sur un projet réel.
            Elle sert à rendre les questions testables et les inconnues
            visibles. Pour votre projet, conservez la version, le plan, les
            comptes, les conditions acceptées et les résultats bruts : sans eux,
            aucune comparaison future ne sera loyale.
          </p>
        </GuidePremiumSection>
      </GuidePremiumLayout>
    </GuidesShell>
  );
}
