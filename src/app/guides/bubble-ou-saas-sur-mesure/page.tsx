import Image from "next/image";
import Link from "next/link";
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

const slug = "bubble-ou-saas-sur-mesure";
const guide = getGuide(slug);
const breadcrumbName = "Bubble ou SaaS sur mesure";
const imageAlt =
  "Comparer Bubble et une base de code dédiée par les preuves, le coût total et la capacité à changer de solution";
export const metadata = buildGuideMetadata(guide, imageAlt);
const structuredData = buildGuideStructuredData(guide, breadcrumbName);

const toc = [
  {
    id: "reponse",
    number: "01",
    label: "Répondre sans camp",
    shortLabel: "Réponse",
  },
  {
    id: "base",
    number: "02",
    label: "Comparer le même service",
    shortLabel: "Base",
  },
  {
    id: "bubble",
    number: "03",
    label: "Lire l’offre Bubble actuelle",
    shortLabel: "Bubble",
  },
  {
    id: "performance",
    number: "04",
    label: "Tester charge et parcours",
    shortLabel: "Charge",
  },
  {
    id: "donnees",
    number: "05",
    label: "Qualifier données et sécurité",
    shortLabel: "Données",
  },
  {
    id: "sortie",
    number: "06",
    label: "Répéter une sortie",
    shortLabel: "Sortie",
  },
  {
    id: "tco",
    number: "07",
    label: "Calculer le coût total",
    shortLabel: "Coût total",
  },
  {
    id: "cas",
    number: "08",
    label: "Quatre situations, cinq sorties",
    shortLabel: "Situations",
  },
  {
    id: "fiche",
    number: "09",
    label: "Remplir la fiche décision",
    shortLabel: "Fiche",
  },
  { id: "faq", number: "10", label: "Lever les objections", shortLabel: "FAQ" },
];

const faqItems = [
  {
    question: "Bubble est-il réservé aux prototypes et aux MVP ?",
    answer: (
      <p>
        Non. Bubble présente sa plateforme comme destinée à des applications de
        toutes tailles et propose des plans, des unités de charge
        supplémentaires (WU) et une offre Enterprise. Cela ne prouve pas que
        votre application précise est adaptée : testez ses parcours lourds, ses
        données, ses intégrations, son exploitation et sa sortie. Le statut «
        MVP » n’est pas un critère technique suffisant.
      </p>
    ),
  },
  {
    question:
      "Combien d’utilisateurs une application Bubble peut-elle supporter ?",
    answer: (
      <p>
        Il n’existe pas de seuil universel sérieux. Bubble explique que la
        consommation dépend du travail réellement effectué : requêtes,
        workflows, fichiers, appels d’API et comportement des utilisateurs. Un
        utilisateur inactif et un utilisateur qui déclenche un traitement lourd
        n’ont pas le même effet. Mesurez donc vos parcours et la consommation de
        ressources au lieu de convertir un nombre d’inscrits en capacité
        supposée.
      </p>
    ),
  },
  {
    question: "Est-ce que je possède mon application Bubble ?",
    answer: (
      <p>
        Vous conservez vos droits sur le contenu direct, notamment le design,
        les enchaînements d’actions (workflows) et les données. Cela ne vous
        donne ni la plateforme Bubble ni un code exécutable autonome : Bubble
        conserve la plateforme et sa documentation précise qu’une application ne
        s’exporte pas sous forme de code exécutable hors Bubble. Séparez donc
        droits sur le contenu, accès au compte, export de données et portabilité
        technique réelle.
      </p>
    ),
  },
  {
    question: "Peut-on dire qu’une application Bubble est conforme au RGPD ?",
    answer: (
      <p>
        Pas sur le seul nom de l’outil. Il faut qualifier les rôles, l’accord de
        traitement des données (DPA), les finalités, les bases légales, les
        transferts, les sous-traitants, les durées, les droits, les règles de
        confidentialité et la sécurité de l’application. Le DPA Bubble impose
        aussi des responsabilités au client et exclut certaines catégories de
        données en section 13.4. Si votre cas les contient, arrêtez le choix de
        l’outil et faites d’abord qualifier l’usage et l’offre contractuelle.
      </p>
    ),
  },
  {
    question: "À quel moment faut-il quitter Bubble ?",
    answer: (
      <p>
        Quand une exigence importante échoue sur un test reproductible, qu’une
        dépendance n’est plus acceptable ou qu’un calcul comparable montre une
        autre option préférable sur l’horizon choisi. Ni le premier inconfort ni
        un nombre d’utilisateurs arbitraire ne suffisent. Il faut aussi prouver
        que l’équipe saura construire et exploiter la cible sans dégrader la
        continuité.
      </p>
    ),
  },
  {
    question: "Une architecture hybride réduit-elle forcément le risque ?",
    answer: (
      <p>
        Non. Isoler une capacité derrière une interface de connexion (API) peut
        limiter la dépendance sur cette capacité, mais ajoute une interface,
        deux environnements à surveiller et des pannes partielles possibles.
        L’hybride est utile si la frontière est stable, testable et documentée ;
        sinon, il peut seulement déplacer la complexité.
      </p>
    ),
  },
  {
    question: "Comment comparer une offre Bubble et un devis sur mesure ?",
    answer: (
      <p>
        Pas en juxtaposant leurs prix. Demandez le même périmètre, le même
        horizon et la même responsabilité. Une mensualité Bubble n’est pas
        comparable à un devis de construction : ajoutez intégrations,
        exploitation, maintenance, sécurité, incidents, compétences et sortie
        des deux côtés. Repérez ce qui est déjà compris dans un forfait pour ne
        pas le compter deux fois.
      </p>
    ),
  },
  {
    question: "Faut-il migrer tout le produit en une seule fois ?",
    answer: (
      <p>
        Non. Une migration par capacité — données, workflows, interface,
        intégrations ou traitement critique — peut réduire l’étendue d’une
        bascule, à condition de prévoir synchronisation, retour arrière et durée
        de coexistence. Si ces trois points ne sont pas testables, une migration
        globale n’est pas automatiquement plus sûre non plus.
      </p>
    ),
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
          { label: breadcrumbName },
        ]}
        badges={[
          { label: "Décision, pas duel technologique", variant: "dark" },
          { label: "Coût total + essai de sortie", variant: "neutral" },
          { label: "Prix Bubble relevés le 05/08/2026", variant: "success" },
        ]}
        heroTitle="Bubble ou SaaS sur mesure :"
        heroTitleEm="comment choisir ?"
        heroDescription="Vous hésitez à lancer ou conserver votre application sur Bubble, ou à la reconstruire sur une base de code dédiée. Bubble est rationnel si parcours, charge, données, exploitation et possibilité de changer de solution — l’essai de sortie — passent vos tests. Une base de code dédiée devient défendable si une exigence non négociable échoue, ou si le coût total le justifie et si l’équipe l’exploite. Vous pouvez aussi isoler une capacité, simplifier le besoin ou reporter. Comparez le même service sur le même horizon : un abonnement Bubble n’est ni un coût total, ni un devis de migration."
        stats={[
          { label: "Sorties possibles", value: "5" },
          { label: "Postes de coût", value: "8" },
          { label: "Blocs de sortie", value: "6" },
          { label: "Seuil universel", value: "Aucun" },
          { label: "Prix et offre", value: "Datés" },
          { label: "Si une donnée manque", value: "Suspendre" },
        ]}
        author={{
          initials: TEAM.quentin.initials,
          name: TEAM.quentin.fullName,
          role: TEAM.quentin.role,
          profileUrl: "/equipe#fondateur",
        }}
        toc={toc}
        tocLabel="Parcours de décision"
        faqTitle="Questions fréquentes sur Bubble et le développement sur mesure"
        faqItems={faqItems}
        faqMeta={{
          eyebrow: "À vérifier avant de choisir",
          titleStart: "Écartez les raccourcis,",
          titleEm: "revenez aux faits de votre application",
          titleEnd: ".",
          subtitle:
            "Ces réponses ferment les raccourcis les plus courants sur la capacité, la propriété, le RGPD et la migration.",
        }}
        strategyCta={{
          titleStart: "Décrivez votre application ;",
          titleEm: "nommez ce qui empêche encore de choisir",
          description:
            "Bon fit : une application métier ou un SaaS avec parcours, données, charge et contraintes à comparer. Mauvais fit : chercher une promesse de prix, de délai ou de performance sans mesures. Après clic, vous décrivez le contexte ; aucun devis ni choix technologique automatique n’est produit.",
          badges: [
            "Bubble, code, hybride, simplification ou report restent possibles",
            "Une inconnue importante suspend la conclusion",
          ],
          ctaLabel: "Décrire mon besoin et mes contraintes",
          ctaHref: "/demarrer-un-projet",
          showPhoneCta: false,
        }}
        legalSources={[
          {
            source: "Bubble — Pricing",
            description:
              "Plans, workload inclus, facturation annuelle affichée et options Enterprise ; relevé consulté le 5 août 2026.",
            href: "https://bubble.io/pricing",
          },
          {
            source: "Bubble Manual — Workload et scaling",
            description:
              "Définition des WU, consommation propre à l’application et absence de réponse universelle par nombre d’utilisateurs.",
            href: "https://manual.bubble.io/help-guides/workload",
          },
          {
            source: "Bubble — Terms",
            description:
              "Devise et taxes, disponibilité standard, contenu direct, plateforme, responsabilité et limites contractuelles.",
            href: "https://bubble.io/terms",
          },
          {
            source: "Bubble Manual — Application and data ownership",
            description:
              "Export des données, exécution sur Bubble et absence d’export de l’application en code autonome.",
            href: "https://manual.bubble.io/account-and-marketplace/application-and-data-ownership",
          },
          {
            source: "Bubble — Data Processing Agreement",
            description:
              "Mesures, transferts, sous-traitants, suppression, responsabilités client et exclusions de la section 13.4.",
            href: "https://bubble.io/dpa",
          },
          {
            source: "Bubble — Subprocessors",
            description:
              "Liste révisée le 28 avril 2026, distinguant les prestataires susceptibles de traiter les données des utilisateurs finaux.",
            href: "https://bubble.io/subprocessors",
          },
          {
            source: "CNIL — Travailler avec un sous-traitant",
            description:
              "Contrat, responsabilités et vérifications à mener par le responsable du traitement.",
            href: "https://www.cnil.fr/fr/sous-traitant",
          },
          {
            source: "CNIL — Identifier les transferts hors UE",
            description:
              "Inventaire des flux, lieux d’hébergement et de support, prestataires et garanties à vérifier.",
            href: "https://www.cnil.fr/fr/responsables-de-traitement-comment-identifier-et-traiter-des-transferts-de-donnees-hors-ue",
          },
          {
            source: "Bubble Manual — Version control",
            description:
              "Retour à une version applicative antérieure, à tester indépendamment des données.",
            href: "https://manual.bubble.io/help-guides/maintaining-an-application/version-control",
          },
          {
            source: "Bubble Manual — Database backups",
            description:
              "Restauration de la base à un point choisi, distincte du retour de version applicative.",
            href: "https://manual.bubble.io/help-guides/maintaining-an-application/database-maintenance/database-backups",
          },
        ]}
        disclaimer={{
          eyebrow: "Périmètre et conflit d’intérêt",
          title:
            "Une méthode de cadrage, pas un avis juridique ni une promesse technique",
          description:
            "Hagnéré Code vend du développement sur mesure : ce conflit d’intérêt est réel. Le guide impose donc des critères symétriques et conserve Bubble, l’hybride, la simplification et le report comme résultats valables. Les offres Bubble, obligations, sous-traitants et conditions peuvent changer ; vérifiez les documents actuels avant contrat. Les performances, coûts et délais de votre application restent à mesurer. Faites qualifier les enjeux juridiques, RGPD, sécurité et contractuels par les professionnels compétents.",
        }}
        relatedGuidesLabel="Pour préparer l’étape suivante"
        relatedGuides={[
          {
            label: "MVP SaaS : quoi inclure ?",
            href: "/guides/mvp-saas-quoi-inclure",
          },
          {
            label: "Prioriser les fonctionnalités d’un MVP",
            href: "/guides/prioriser-fonctionnalites-mvp-saas",
          },
          {
            label: "Agence SaaS ou freelance ?",
            href: "/guides/agence-saas-ou-freelance",
          },
          {
            label: "Prototype, POC, pilote ou MVP ?",
            href: "/guides/mvp-prototype-ou-poc",
          },
        ]}
      >
        <GuidePremiumSection
          id="reponse"
          number="01"
          label="Réponse directe"
          readingTime="2 min"
          title="Choisissez la preuve à obtenir, pas le camp à rejoindre"
        >
          <p>
            « SaaS sur mesure » désigne ici un produit construit sur une base de
            code dédiée. Bubble peut lui aussi servir à livrer un SaaS : le vrai
            choix porte sur la manière de construire, d’exploiter et de faire
            évoluer le même service. Commencez donc par une exigence observable,
            pas par « no-code contre code ».
          </p>

          <GuideTable
            caption="Cinq sorties légitimes d’une comparaison Bubble et code dédié"
            headers={[
              "Décision",
              "Quand elle devient défendable",
              "Preuve minimale",
              "Contre-cas",
            ]}
            rows={[
              [
                "Rester ou démarrer sur Bubble",
                "Les parcours, la charge, les données et l’exploitation passent les critères choisis.",
                "Test représentatif + budget de consommation Bubble + responsabilités + essai de sortie.",
                "Une exigence contractuelle ou technique décisive reste non prouvée.",
              ],
              [
                "Construire en code dédié",
                "Une contrainte importante échoue ou le contrôle supplémentaire crée une valeur démontrée.",
                "Cible exploitable, équipe nommée, coût total comparable et plan de migration.",
                "Le code déplace seulement la dépendance vers une agence, un cloud ou une personne clé.",
              ],
              [
                "Isoler une capacité",
                "Une frontière stable peut sortir derrière une interface de connexion (API) sans fragmenter le service.",
                "Contrat d’interface, alertes et journaux de suivi, panne partielle et retour arrière testés.",
                "Deux systèmes ajoutent plus d’incidents et de compétences qu’ils n’en retirent.",
              ],
              [
                "Simplifier",
                "Un outil existant, un flux manuel ou un périmètre réduit répond au besoin utile.",
                "Essai opérationnel avec les vrais rôles et les exceptions importantes.",
                "Le contournement reporte un risque légal, de sécurité ou de continuité.",
              ],
              [
                "Reporter",
                "Une donnée qui peut inverser la décision manque encore.",
                "Question, propriétaire, mode de mesure et date de réexamen écrits.",
                "Le report n’a ni responsable ni prochaine preuve.",
              ],
            ]}
          />

          <GuidePremiumMemo title="Une migration n’est pas une mise à niveau automatique">
            <ul>
              <li>
                Une application Bubble bien conçue peut rester le choix
                rationnel.
              </li>
              <li>
                Une base de code dédiée peut être lente, chère ou fragile si
                personne ne l’exploite.
              </li>
              <li>
                Une préférence technique ne remplace ni un test, ni un coût
                total, ni un responsable.
              </li>
            </ul>
          </GuidePremiumMemo>

          <Image
            src="/guides/bubble-ou-saas-sur-mesure/cinq-sorties-decision-16x9.svg"
            alt="Cinq sorties possibles : Bubble, code dédié, hybride, simplification ou report"
            width={1600}
            height={900}
            className="my-8 h-auto w-full rounded-2xl"
          />

          <p>
            Pour savoir laquelle de ces cinq sorties tient, commencez par écrire
            une base identique pour toutes les options.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="base"
          number="02"
          label="Comparaison équitable"
          readingTime="3 min"
          title="Décrivez une seule base de comparaison avant de compter"
        >
          <p>
            Écrivez le service attendu sur l’horizon choisi : utilisateurs
            actifs par rôle, parcours, données, volumes, intégrations, périodes
            de pointe, exigences de sécurité, heures de support et changements
            probables. Sans cette base, chaque option répond à une autre
            question et le tableau final paraît précis tout en étant faux.
          </p>

          <GuideTable
            caption="Base identique à renseigner pour Bubble, code dédié et option hybride"
            headers={[
              "Champ",
              "Ce que vous inscrivez",
              "Preuve",
              "Suspendre si absent",
            ]}
            rows={[
              [
                "Service",
                "Tâches et résultat métier, y compris les exceptions.",
                "Parcours observé ou procédure actuelle.",
                "Le périmètre change selon l’option.",
              ],
              [
                "Charge",
                "Actions, requêtes, fichiers, traitements et pointes — pas seulement les comptes.",
                "Logs, métriques, scénario de charge.",
                "Un seuil d’utilisateurs est inventé.",
              ],
              [
                "Données",
                "Catégories, localisation, conservation, accès, exports et suppression.",
                "Registre, schéma, accord de traitement des données (DPA), test d’export.",
                "Une catégorie interdite ou non qualifiée apparaît.",
              ],
              [
                "Équipe et remplacement",
                "Qui construit, publie, surveille, corrige et peut reprendre après le départ d’une personne ; quelle compétence doit être formée, transmise ou recrutée.",
                "Responsabilités, accès, procédure de passation et exercice de reprise par une autre personne.",
                "Personne capable de reprendre non identifiée ou passation non testée.",
              ],
              [
                "Horizon",
                "Même nombre de mois et même date de valeur pour chaque option.",
                "Décision datée et cycle budgétaire.",
                "L’initial d’un côté est comparé au récurrent de l’autre.",
              ],
            ]}
          />

          <InfoBox
            variant="amber"
            title="Deux comparaisons trompeuses à éviter"
          >
            <p>
              Ne comparez pas la mensualité Bubble au devis complet d’une
              application dédiée. Ne comparez pas non plus une démo Bubble à une
              cible sur mesure dotée de sécurité, support et reprise. Ramenez
              les deux options au même service et au même niveau de
              responsabilité.
            </p>
          </InfoBox>

          <p>
            Si la question porte encore sur ce qu’il faut tester, utilisez le
            guide{" "}
            <Link href="/guides/mvp-prototype-ou-poc">
              prototype, POC, pilote ou MVP
            </Link>
            {". "}Si le besoin est connu mais trop large, commencez par{" "}
            <Link href="/guides/prioriser-fonctionnalites-mvp-saas">
              prioriser les fonctionnalités
            </Link>
            {". "}Ces deux décisions précèdent le choix de la technologie.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="bubble"
          number="03"
          label="Offre actuelle"
          readingTime="4 min"
          title="Lisez Bubble comme un service mesuré, pas comme un prix fixe"
        >
          <p>
            Au <strong>5 août 2026</strong>, la page officielle
            <a
              href="https://bubble.io/pricing"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Bubble Pricing
            </a>{" "}
            affiche des projets web et mobile, un plan gratuit et des plans
            payants comprenant un volume mensuel d’unités de charge (workload
            units, ou WU). Bubble définit ces unités comme l’agrégation des
            ressources serveur utilisées par les processus de l’application. Les
            applications web et mobile d’un même projet partagent la partie
            serveur (backend) et leur consommation se cumule.
          </p>

          <GuideTable
            caption="Relevé Bubble du 5 août 2026 — montants affichés en dollars US et conditions par plan"
            headers={[
              "Plan",
              "Montant mensuel affiché",
              "Facturation",
              "WU incluses / mois",
            ]}
            rows={[
              ["Free", "0 $ US", "Développement", "50 000"],
              ["Starter", "59 $ US", "Annuelle", "175 000"],
              ["Growth", "209 $ US", "Annuelle", "250 000"],
              ["Team", "549 $ US", "Annuelle", "500 000"],
              [
                "Enterprise",
                "Sur contact",
                "Conditions à obtenir",
                "Personnalisées",
              ],
            ]}
          />

          <FormulaBox>{`Contrôle arithmétique de la base annuelle affichée, hors taxes
Starter : 59 $ US/mois × 12 mois = 708 $ US/an ; inverse : 708 ÷ 12 = 59
Growth  : 209 $ US/mois × 12 mois = 2 508 $ US/an ; inverse : 2 508 ÷ 12 = 209
Team    : 549 $ US/mois × 12 mois = 6 588 $ US/an ; inverse : 6 588 ÷ 12 = 549

Ce calcul n’est pas un TCO : taxes applicables, WU additionnelles, dépassements
facturés (overages), plugins, stockage, API tierces, travail humain et sortie
restent à ajouter.`}</FormulaBox>

          <p>
            Les
            <a href="https://bubble.io/terms" target="_blank" rel="noreferrer">
              {" "}
              conditions Bubble révisées le 21 avril 2025
            </a>{" "}
            imposent le paiement en dollars US, ajoutent les taxes applicables
            et prévoient le paiement d’avance pour la période facturée. La page
            de prix liste séparément les paliers de WU, les dépassements
            facturés, les abonnements de plugins et le stockage additionnel à 3
            $ US par tranche de 100 Go et par mois. Ces postes ne sont donc pas
            inclus dans les bases annuelles ci-dessus.
          </p>

          <p>
            Bubble indique que ces dépassements peuvent être désactivés, mais
            que l’application ne dispose alors plus de WU au-delà du plan et des
            paliers achetés. Les notifications annoncées à 75 % puis 100 % ne
            remplacent donc pas un budget, un seuil d’alerte interne et une
            procédure. L’offre Enterprise affiche des WU personnalisées ; la
            région d’hébergement concerne une instance dédiée selon l’offre et
            le contrat, pas l’environnement partagé.
          </p>

          <InfoBox
            variant="blue"
            title="Mobile : vérifiez l’offre native actuelle"
          >
            <p>
              La
              <a
                href="https://manual.bubble.io/help-guides/getting-started/building-for.../native-ios-and-android/what-is-a-native-mobile-app"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                documentation Bubble sur l’application mobile native
              </a>{" "}
              présente désormais un éditeur mobile natif et un processus
              iOS/Android fondé sur React Native, avec backend et base partagés
              avec le web. L’interface mobile doit néanmoins être reconstruite
              avec ses propres vues et testée sur les systèmes supportés.
              Vérifiez les fonctions, coûts et limites actuels : ce sujet évolue
              plus vite que le principe de comparaison.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="performance"
          number="04"
          label="Charge et expérience"
          readingTime="4 min"
          title="Mesurez les parcours qui comptent avant de parler de capacité"
        >
          <p>
            La documentation
            <a
              href="https://manual.bubble.io/help-guides/infrastructure/hosting-and-scaling/scaling-with-bubble"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Scaling with Bubble
            </a>{" "}
            explique que les WU suivent notamment les requêtes, les
            enchaînements d’actions (workflows), les fichiers et les appels
            d’API. Elle refuse elle-même de réduire la capacité à un nombre
            d’utilisateurs. La performance dépend aussi de la construction de
            l’application et des services tiers. Une moyenne globale masque
            facilement le parcours critique.
          </p>

          <GuideTable
            caption="Protocole de preuve à exécuter sur chaque option"
            headers={[
              "Épreuve",
              "Mesure à choisir",
              "Contexte à conserver",
              "Décision possible",
            ]}
            rows={[
              [
                "Parcours critique",
                "Temps de réponse et taux d’échec par étape.",
                "Jeu de données, rôle, appareil, réseau, version.",
                "Accepter, optimiser ou changer l’architecture.",
              ],
              [
                "Pointe",
                "Débit, erreurs, files et WU pendant la charge cible.",
                "Scénario, durée, concurrence, traitements en arrière-plan.",
                "Dimensionner, lisser ou reporter.",
              ],
              [
                "Croissance des données",
                "Temps et WU avec le volume futur testé.",
                "Schéma, index, filtres, taille de fichiers.",
                "Revoir la requête, archiver ou isoler une capacité.",
              ],
              [
                "Volume doublé",
                "Temps, erreurs, files et coût avec deux fois la donnée, la pointe ou les traitements.",
                "Une seule dimension doublée à la fois, puis scénario combiné documenté.",
                "Budgéter, optimiser, partitionner ou suspendre la décision.",
              ],
              [
                "Dépendance tierce",
                "Comportement en latence, quota ou panne d’API.",
                "Délai d’expiration (timeout), reprise, absence de double traitement (idempotence), message utilisateur.",
                "Tolérer, mettre en file ou remplacer.",
              ],
              [
                "Exploitation",
                "Détection, diagnostic et restauration observés.",
                "Logs disponibles, droits, astreinte, procédure.",
                "Compléter l’outillage ou refuser le risque.",
              ],
            ]}
          />

          <GuidePremiumCase
            initial="P95"
            eyebrow="Mesure à définir"
            title="Écrivez votre seuil avant le test"
          >
            <p>
              Pour chaque parcours, choisissez la mesure utile — par exemple le
              95e centile, c’est-à-dire le temps sous lequel se trouvent 95 %
              des observations — et le seuil acceptable pour votre métier. Le
              guide ne crée aucun nombre : il serait différent pour un écran
              interne, un paiement et un traitement asynchrone. Conservez la
              série brute, les erreurs et la configuration pour pouvoir rejouer
              le test.
            </p>
          </GuidePremiumCase>

          <InfoBox
            variant="amber"
            title="Suspendre si la charge n’est pas définie"
          >
            <p>
              Si personne ne peut fournir le jeu de données, les parcours, la
              charge cible ou le seuil acceptable, aucune option ne peut être
              déclarée « assez performante ». La prochaine action est un test
              borné, pas une migration complète.
            </p>
          </InfoBox>

          <p>
            Une charge acceptable ne suffit pas si les données, le contrat ou
            les responsabilités ne le sont pas.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="donnees"
          number="05"
          label="Données, contrat, sécurité"
          readingTime="5 min"
          title="Un accord de traitement des données (DPA) ne sécurise pas à lui seul votre application"
        >
          <p>
            Bubble fournit des mesures de plateforme et un
            <a href="https://bubble.io/dpa" target="_blank" rel="noreferrer">
              {" "}
              accord de traitement des données (DPA)
            </a>
            {", "}révisé le 21 avril 2025, mais le client reste responsable de
            son usage, de ses bases légales, informations, consentements,
            sauvegardes et configurations. La
            <a
              href="https://bubble.io/subprocessors"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              liste Bubble des sous-traitants
            </a>
            {", "}révisée le 28 avril 2026, distingue ceux qui peuvent traiter
            les données des utilisateurs finaux ; elle reste un inventaire
            vivant à rapprocher des flux réels. La
            <a
              href="https://manual.bubble.io/core-resources/data/privacy"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              documentation Bubble sur la confidentialité
            </a>{" "}
            qualifie ces règles comme la protection principale des données
            applicatives : elles contrôlent qui peut chercher, voir ou modifier
            chaque type de donnée.
          </p>

          <p>
            Pour la localisation, la documentation officielle
            <a
              href="https://manual.bubble.io/help-guides/infrastructure/hosting-and-scaling/how-bubble-hosting-works"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              How Bubble hosting works
            </a>{" "}
            annonce l’environnement partagé aux États-Unis. Une instance
            Enterprise dédiée peut être placée dans une région AWS choisie selon
            l’offre et le contrat ; ce choix ne s’applique pas à l’environnement
            partagé.
          </p>

          <p>
            Pour une organisation européenne, la
            <a
              href="https://www.cnil.fr/fr/responsables-de-traitement-comment-identifier-et-traiter-des-transferts-de-donnees-hors-ue"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              méthode de la CNIL sur les transferts hors UE
            </a>{" "}
            demande de relever les lieux d’hébergement et de support, les
            prestataires, les flux et leur mécanisme juridique. Le DPA Bubble
            décrit le Data Privacy Framework lorsqu’il s’applique et, sinon, les
            clauses contractuelles types. Cela ne dispense pas de qualifier le
            transfert concret et les mesures nécessaires.
          </p>

          <p>
            Les
            <a href="https://bubble.io/terms" target="_blank" rel="noreferrer">
              {" "}
              conditions standard Bubble
            </a>{" "}
            promettent des efforts commercialement raisonnables de
            disponibilité, sans garantir un service sans erreur ni interruption.
            Elles plafonnent aussi la responsabilité à 100 $ US, hors exceptions
            qu’elles énumèrent. Si la continuité est décisive, vérifiez le
            contrat signé, les niveaux de service, la restauration et votre
            propre solution de repli avec un conseil juridique adapté.
          </p>

          <GuideTable
            caption="Questions qui précèdent le choix de l’offre ou de l’architecture"
            headers={[
              "Angle",
              "Bubble aujourd’hui",
              "Preuve à obtenir",
              "Suspendre si",
            ]}
            rows={[
              [
                "Hébergement",
                "Partagé annoncé aux États-Unis ; région choisie sur une instance Enterprise dédiée.",
                "Offre signée, caractère dédié, région, sauvegardes, restauration.",
                "La localisation requise n’est pas contractée.",
              ],
              [
                "Transferts",
                "Le DPA décrit le cadre de transfert Data Privacy Framework (DPF) ou les clauses types selon le cas ; sous-traitants révisés le 28/04/2026.",
                "Rôles, flux, lieux de support, garanties, analyse et liste actuelle.",
                "Le transfert n’est ni cartographié ni qualifié.",
              ],
              [
                "Données sensibles",
                "Le DPA §13.4 exclut les catégories détaillées juste après ce tableau.",
                "Catégories réelles + validation juridique et contractuelle.",
                "Une catégorie exclue apparaît dans le besoin.",
              ],
              [
                "Accès",
                "Règles de confidentialité, authentification, API et comptes éditeurs à configurer.",
                "Matrice de droits et tests positifs/négatifs.",
                "Un type reste visible par défaut ou sans règle prouvée.",
              ],
              [
                "Plugins et API",
                "Services tiers avec leurs propres conditions et traitements possibles.",
                "Inventaire, propriétaire, données, secret, repli et contrat.",
                "Un plugin critique n’a ni remplaçant ni responsable.",
              ],
              [
                "Continuité",
                "Les conditions standard ne constituent pas un engagement de niveau de service chiffré et ne garantissent pas l’absence d’interruption.",
                "Contrat signé, seuils, alerte, reprise, retour arrière, responsabilité et test de panne.",
                "Une exigence de continuité repose sur une promesse non contractée.",
              ],
            ]}
          />

          <InfoBox
            variant="amber"
            title="Données exclues par la section 13.4 du DPA Bubble"
          >
            <p>
              La section exclut notamment les catégories suivantes de l’usage
              contractuel visé :
            </p>
            <ul>
              <li>
                numéros d’identification délivrés par une autorité publique ;
              </li>
              <li>biométrie ;</li>
              <li>mots de passe de comptes en ligne ;</li>
              <li>identifiants de comptes financiers ;</li>
              <li>données de déclarations fiscales ;</li>
              <li>données de carte bancaire soumises à la norme PCI DSS ;</li>
              <li>données personnelles d’enfants de moins de 16 ans ;</li>
              <li>données pénales ;</li>
              <li>catégories particulières du RGPD.</li>
            </ul>
            <p>
              Si l’une apparaît dans le besoin, suspendez le choix de l’outil
              jusqu’à la qualification juridique et contractuelle.
            </p>
          </InfoBox>

          <p>
            La
            <a
              href="https://www.cnil.fr/fr/sous-traitant"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              CNIL rappelle
            </a>{" "}
            que le recours à un sous-traitant doit être encadré et que le
            responsable du traitement conserve ses obligations. Évitez donc les
            verdicts « Bubble conforme » ou « Bubble non conforme » sans cas
            d’usage, offre et configuration. Une base de code dédiée ne devient
            pas conforme par nature : elle ajoute vos propres choix de cloud,
            composants, sauvegardes, accès et maintenance.
          </p>

          <GuidePremiumMemo
            eyebrow="Responsabilité après mise en service"
            title="Nommez six propriétaires, même si une personne cumule plusieurs rôles"
          >
            <ul>
              <li>produit : priorités, changements et arrêt ;</li>
              <li>données : finalités, accès, conservation et droits ;</li>
              <li>
                technique : architecture, versions, dépendances et clés d’accès
                ;
              </li>
              <li>
                exploitation : alertes, support, sauvegarde et restauration ;
              </li>
              <li>sécurité : revues, incidents et actions correctives ;</li>
              <li>contrat : comptes, licences, fournisseurs et sortie.</li>
            </ul>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="sortie"
          number="06"
          label="Changer de solution"
          readingTime="4 min"
          title="Exportez une fois, puis prouvez que vous savez reprendre"
        >
          <p>
            Les
            <a href="https://bubble.io/terms" target="_blank" rel="noreferrer">
              {" "}
              conditions Bubble
            </a>{" "}
            incluent le design, les workflows et les données dans le contenu
            direct dont le client conserve les droits. La documentation
            distingue pourtant deux mécanismes : les
            <a
              href="https://manual.bubble.io/help-guides/data/the-database/export-import-data/exporting-data"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              données peuvent être exportées en CSV, JSON ou NDJSON
            </a>
            {", "}et
            <a
              href="https://manual.bubble.io/help-guides/getting-started/navigating-the-bubble-editor/tabs-and-sections/settings-tab/overview"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              l’application peut être sauvegardée en JSON puis réimportée dans
              Bubble
            </a>
            {", "}avec un plan Growth requis par la documentation actuelle ;
            l’application ne s’exporte pas sous forme de code exécutable
            autonome. Quitter la plateforme implique donc de reconstruire la
            logique et de reprendre plus que des tables. Un export JSON de
            configuration reste une sauvegarde destinée à Bubble, pas un
            programme que vous pouvez déployer seul.
          </p>

          <Image
            src="/guides/bubble-ou-saas-sur-mesure/migration-par-capacite-1x1.svg"
            alt="Six capacités à reprendre autour du service en activité : données, interfaces, workflows, intégrations, exploitation et gouvernance"
            width={900}
            height={900}
            className="mx-auto my-8 h-auto w-full max-w-[660px] rounded-2xl"
          />

          <GuideTable
            caption="Contenu minimal d’un essai de sortie"
            headers={[
              "Bloc",
              "Action reproductible",
              "Contrôle",
              "Ce que cela ne prouve pas encore",
            ]}
            rows={[
              [
                "Données",
                "Exporter chaque type utile avec identifiants et relations.",
                "Comptages, échantillons, encodage, dates, pièces.",
                "La logique qui les transforme.",
              ],
              [
                "Schéma",
                "Documenter types, champs, options, relations et règles.",
                "Reconstruction à blanc par une autre personne.",
                "La compatibilité d’une cible choisie.",
              ],
              [
                "Enchaînements (workflows)",
                "Inventorier déclencheurs, conditions, erreurs et tâches planifiées.",
                "Rejouer les cas normal, limite et reprise.",
                "Un équivalent automatique dans un autre langage.",
              ],
              [
                "Intégrations",
                "Lister API, plugins, notifications techniques (webhooks), clés d’accès (secrets), quotas et propriétaires.",
                "Couper un service et observer le repli.",
                "Le droit de réutiliser chaque composant.",
              ],
              [
                "Exploitation",
                "Exporter procédures, alertes, journaux utiles et sauvegardes.",
                "Retour à une version applicative et restauration de la base testés séparément.",
                "La continuité pendant une migration réelle.",
              ],
              [
                "Gouvernance",
                "Vérifier compte propriétaire, éditeurs, contrat, licences et accès.",
                "Départ simulé du prestataire ou de la personne clé.",
                "Le coût et la durée de la reprise.",
              ],
            ]}
          />

          <InfoBox
            variant="amber"
            title="Le code et les données ne reviennent pas en arrière ensemble"
          >
            <p>
              La
              <a
                href="https://manual.bubble.io/help-guides/maintaining-an-application/version-control"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                documentation Bubble sur le contrôle de version
              </a>{" "}
              permet de revenir à une version antérieure de l’application. La
              <a
                href="https://manual.bubble.io/help-guides/maintaining-an-application/database-maintenance/database-backups"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                restauration de la base
              </a>{" "}
              suit une autre procédure, avec une profondeur dépendant du plan ;
              les données créées après le point choisi peuvent être perdues.
              Testez ces deux opérations sur une copie, notez le point de
              coupure et prouvez comment reprendre les écritures intervenues
              entre-temps.
            </p>
          </InfoBox>

          <InfoBox
            variant="blue"
            title="La bonne unité de migration est parfois une capacité"
          >
            <p>
              Un calcul critique ou une intégration peut être isolé derrière une
              API pendant que l’interface reste sur Bubble. Ce choix n’est utile
              que si le contrat d’interface, la synchronisation, les erreurs, la
              surveillance et le retour arrière sont plus simples que la
              dépendance retirée.
            </p>
          </InfoBox>

          <p>
            Cet essai révèle ce qui devra être reconstruit, exploité en
            parallèle ou contractualisé : ce sont aussi des lignes de coût.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="tco"
          number="07"
          label="Coût total"
          readingTime="5 min"
          title="Calculez le coût total sur le même horizon et bloquez les doubles comptes"
        >
          <p>
            Le coût total de possession (TCO) additionne les ressources
            réellement nécessaires pour construire, faire fonctionner, changer
            et quitter la solution sur une période choisie. Il ne prédit pas un
            devis. Chaque cellule reçoit une valeur issue d’un contrat, d’une
            facture, d’un relevé ou d’une hypothèse interne datée ; sinon elle
            reste
            <strong> À CONFIRMER</strong> et la conclusion financière reste
            suspendue.
          </p>

          <FormulaBox>{`H = horizon commun en mois

TCO_option(H) = INITIAUX_option
  + PLATEFORME_INFRA_option(H)
  + INTEGRATIONS_option(H)
  + EXPLOITATION_option(H)
  + MAINTENANCE_option(H)
  + SECURITE_CONFORMITE_option(H)
  + INCIDENTS_option(H)
  + SORTIE_option

INITIAUX_Bubble = cadrage + construction/configuration + migration_vers_Bubble
INITIAUX_Code   = cadrage + construction/configuration + migration_vers_Code

PLATEFORME_INFRA_Bubble(H) = plan (WU incluses) + WU_additionnelles
  + stockage sur H ; les WU incluses ne sont jamais recomptées.
PLATEFORME_INFRA_Code(H) = cloud + licences + stockage sur H.

MAINTENANCE_option(H) inclut, si nécessaire, maintien de compétence, formation,
passation et recrutement. Une dépense déjà comptée dans INITIAUX_option ou
EXPLOITATION_option(H) n'est jamais recomptée.

Chaque poste (H) additionne ses décaissements ponctuels, mensuels et annuels
aux vraies dates d'échéance. Une facture annuelle n'est pas un coût mensuel.

Écart E = TCO_Bubble(H) - TCO_Code(H)
E > 0 : Bubble coûte plus ; E < 0 : Bubble coûte moins ; E = 0 : égalité,
uniquement si aucune cellule matérielle n'est inconnue.

0 = absence de coût et de temps prouvée ; « NON APPLICABLE » = raison écrite ;
« À CONFIRMER » = valeur inconnue qui suspend le signe de l'écart.

Contrôle inverse : TCO_option - INITIAUX_option - SORTIE_option
= somme des six postes intermédiaires.`}</FormulaBox>

          <GuideTable
            caption="Les huit lignes reprises à l’identique dans chaque TCO"
            headers={[
              "Poste",
              "Unité et preuve",
              "Risque de double compte",
              "Conséquence non monétaire",
            ]}
            rows={[
              [
                "Initiaux",
                "Cadrage, construction/configuration et migration d’entrée, datés séparément.",
                "Une intégration ou migration déjà comprise dans la construction.",
                "Temps des métiers et arbitrages.",
              ],
              [
                "Plateforme / infrastructure",
                "Échéance réelle : plan et seules WU additionnelles, ou cloud/licences, plus stockage.",
                "Infrastructure incluse dans un forfait d’exploitation.",
                "Dépendance et marge de capacité.",
              ],
              [
                "Intégrations",
                "Abonnements, appels, plugins, connecteurs.",
                "Plugin et API facturent le même service.",
                "Quota, panne et changement fournisseur.",
              ],
              [
                "Exploitation",
                "Support, alertes, astreinte, sauvegarde, restauration.",
                "Déjà inclus dans maintenance ou Enterprise.",
                "Temps de détection et continuité.",
              ],
              [
                "Maintenance",
                "Correctifs, versions, dépendances, tests, maintien de compétence, formation, passation ou recrutement nécessaire.",
                "Formation ou passation déjà comptée dans les coûts initiaux ou l’exploitation.",
                "Capacité à faire évoluer sans personne clé.",
              ],
              [
                "Sécurité / conformité",
                "Revues, outils, conseil, preuve et remédiation, ponctuels ou récurrents.",
                "Audit compris dans un contrat plus large.",
                "Exposition et charge documentaire.",
              ],
              [
                "Incident",
                "Perte de revenu/capacité, décaissement et temps séparés.",
                "Temps déjà payé par l’astreinte ou assurance.",
                "Indisponibilité, retard, réputation.",
              ],
              [
                "Sortie",
                "Export, reconstruction, exploitation en parallèle, bascule, arrêt.",
                "Migration d’entrée ou construction inclut déjà une partie de la reconstruction.",
                "Risque de continuité et concentration d’équipe.",
              ],
            ]}
          />

          <Image
            src="/guides/bubble-ou-saas-sur-mesure/tco-et-plan-sortie-4x3.svg"
            alt="Fiche rapprochant les huit postes du coût total et les huit contrôles d’un essai de sortie"
            width={1200}
            height={900}
            className="my-8 h-auto w-full rounded-2xl"
          />

          <InfoBox
            variant="amber"
            title="Un TCO plus bas ne suffit pas toujours"
          >
            <p>
              Une option peut être moins chère et échouer sur une exigence
              obligatoire ; elle est alors éliminée avant le classement
              financier. À l’inverse, une différence de TCO faible ne justifie
              pas forcément une migration risquée. Appliquez d’abord les
              contraintes non négociables, puis comparez coût, valeur et risque
              restants.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="cas"
          number="08"
          label="Cas contrastés"
          readingTime="4 min"
          title="Quatre situations pour choisir entre Bubble, code, hybride, simplification ou report"
        >
          <GuidePremiumCase
            initial="B"
            eyebrow="Cas fictif qualitatif — aucun prix ni délai inventé"
            title="Un outil d’exploitation interne reste sur Bubble"
          >
            <p>
              L’équipe possède le compte, deux personnes savent publier, les
              règles d’accès sont testées, les parcours lourds passent les
              seuils internes et l’export est relu. Le coût de sortie est
              documenté mais aucune exigence ne justifie encore sa réalisation.
              Le code dédié ajouterait une équipe d’exploitation sans bénéfice
              prouvé : rester sur Bubble est la décision rationnelle, avec un
              nouveau test à la prochaine évolution de charge ou de données.
            </p>
          </GuidePremiumCase>

          <GuidePremiumCase
            initial="C"
            eyebrow="Cas fictif qualitatif — contrainte non négociable"
            title="Une exigence contractuelle conduit au code dédié"
          >
            <p>
              Le client exige une implantation, une maîtrise d’exploitation et
              un mécanisme de continuité qui ne sont pas prouvés dans l’offre
              Bubble retenue. L’équipe a une cible, des responsables, des tests
              et une migration par étapes. La décision vient de l’exigence et de
              la capacité d’exploiter la cible — pas d’une supposée supériorité
              générale du code.
            </p>
          </GuidePremiumCase>

          <GuidePremiumCase
            initial="H"
            eyebrow="Cas fictif qualitatif — frontière stable"
            title="Un calcul critique sort, l’interface reste"
          >
            <p>
              Un traitement doit être versionné, testé et exécuté séparément,
              tandis que les écrans et workflows ordinaires restent adaptés à
              Bubble. Une API étroite est créée avec délai d’expiration, reprise
              sans double traitement et surveillance. L’hybride est retenu
              seulement après un test de panne partielle ; si cette frontière
              devient mouvante, le découpage sera réexaminé.
            </p>
          </GuidePremiumCase>

          <GuidePremiumCase
            initial="−"
            eyebrow="Cas inverse"
            title="Le meilleur projet est plus petit — ou n’existe pas encore"
          >
            <p>
              Le besoin réel tient dans un formulaire, une validation et un
              export périodique. Un outil existant ou une procédure renforcée
              répond à l’enjeu sans nouveau produit. Dans un autre cas, le
              volume futur et la catégorie de données ne sont pas connus : la
              décision est reportée avec un propriétaire et une date de mesure.
              Simplifier ou reporter évite de transformer l’incertitude en
              dette.
            </p>
          </GuidePremiumCase>

          <p>
            Pour transformer ces contrastes en décision, rassemblez maintenant
            les mêmes preuves dans une fiche unique.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="fiche"
          number="09"
          label="Action autonome"
          readingTime="4 min"
          title="Tenez une réunion de sortie avant la réunion de choix"
        >
          <p>
            Copiez les neuf rubriques ci-dessous dans votre document de
            décision. Invitez au minimum la personne qui porte le résultat
            métier, celle qui exploite l’application, celle qui répond des
            données et celle qui engage le contrat. Une même personne peut
            cumuler des rôles, mais aucun rôle ne doit rester implicite.
          </p>

          <ol>
            <li>
              <strong>Décision :</strong> ce qui doit être choisi, pour quelle
              date et quel horizon.
            </li>
            <li>
              <strong>Service comparable :</strong> parcours, rôles, données,
              charge, intégrations et support.
            </li>
            <li>
              <strong>Exigences non négociables :</strong> critère, preuve,
              propriétaire et effet d’un échec.
            </li>
            <li>
              <strong>Mesures :</strong> logs, jeu de données, scénario, seuil
              métier et date du test.
            </li>
            <li>
              <strong>Contrats :</strong> offre, DPA, sous-traitants, plugins,
              comptes et responsabilités.
            </li>
            <li>
              <strong>TCO :</strong> huit lignes, même horizon, même devise et
              cellules inconnues visibles.
            </li>
            <li>
              <strong>Essai de sortie :</strong> données, schéma, workflows,
              intégrations, exploitation et gouvernance.
            </li>
            <li>
              <strong>Contre-cas :</strong> fait précis qui rendrait chaque
              option mauvaise.
            </li>
            <li>
              <strong>Verdict :</strong> Bubble, code, hybride, simplifier ou
              reporter — avec prochaine preuve.
            </li>
          </ol>

          <GuidePremiumMemo
            eyebrow="Contrôle final"
            title="Une inconnue importante ne devient jamais zéro"
          >
            <ul>
              <li>inscrivez « À CONFIRMER » au lieu d’un faux montant ;</li>
              <li>nommez qui obtiendra la preuve et quand ;</li>
              <li>suspendez le verdict si cette valeur peut l’inverser ;</li>
              <li>
                répétez le calcul et l’essai de sortie après un changement
                majeur.
              </li>
            </ul>
          </GuidePremiumMemo>

          <h3>Quand un regard extérieur est utile — ou non</h3>
          <p>
            Un échange avec Hagnéré Code est utile si la décision reste ouverte
            sur une application métier ou un SaaS, avec des parcours et des
            contraintes que l’on peut tester. Il ne l’est pas si vous cherchez
            une validation automatique du code dédié, un prix ou un délai sans
            périmètre, ou une consultation juridique déguisée. Vous pouvez
            remplir la fiche, tester l’export et conserver Bubble sans nous
            contacter ; le bouton de contact sert uniquement à décrire le
            contexte si une aide extérieure est utile.
          </p>
        </GuidePremiumSection>
      </GuidePremiumLayout>
    </GuidesShell>
  );
}
