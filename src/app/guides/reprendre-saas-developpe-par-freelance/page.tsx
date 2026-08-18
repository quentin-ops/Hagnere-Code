import type { Metadata } from "next";
import Link from "next/link";
import {
  GuideInlineCTA,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { GuideLayout } from "@/components/guides/guide-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { SaasFreelanceHandoverDecisionDossier } from "@/components/guides/SaasFreelanceHandoverDecisionDossier";
import { formatGuideDate, getGuide, guideRobots, guideUrl } from "@/lib/guides";
import acceptanceTests from "@/lib/saas-freelance-handover-acceptance-tests.json";
import continuityTargets from "@/lib/saas-freelance-handover-continuity-targets.json";
import handoverFunctions from "@/lib/saas-freelance-handover-functions.json";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("reprendre-saas-developpe-par-freelance");

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
        alt: "Reprendre les comptes et le fonctionnement d’un SaaS après le départ de son développeur",
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
      name: "Reprendre un SaaS après le départ du développeur",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Le dépôt GitHub suffit-il pour reprendre le SaaS ?",
    answer:
      "Non. Il peut contenir le code et son historique, mais pas nécessairement les données, les fichiers clients, les comptes de paiement, le domaine, les réglages d’envoi, les tâches automatiques, les sauvegardes ni les secrets conservés hors du dépôt. La reprise est terminée lorsqu’une autre équipe peut faire fonctionner et restaurer le produit depuis des comptes contrôlés par l’entreprise.",
  },
  {
    question: "Faut-il couper immédiatement tous les accès du freelance ?",
    answer:
      "Préparez et testez la passation avant l’échéance. À la fin du contrat, désactivez les accès du freelance, sauf prolongation écrite précisant durée, périmètre, responsable et journaux de contrôle. Tout accès maintenu doit rester nominatif, temporaire et limité au strict nécessaire. En cas d’intrusion, de détournement de compte ou de menace crédible, traitez l’incident avec une personne compétente au lieu d’appliquer mécaniquement ce guide.",
  },
  {
    question: "Quels comptes doivent appartenir à l’entreprise ?",
    answer:
      "Tous les comptes indispensables au fonctionnement ou à la récupération du service : code, hébergement, base, fichiers, authentification, paiement, domaine, courriels, tâches, surveillance et support. Le nom exact varie selon le SaaS. Chaque compte doit avoir un titulaire clair, des accès nominatifs et un moyen de récupération que l’entreprise a réellement vérifié.",
  },
  {
    question: "Comment tester sans toucher aux vrais clients ?",
    answer:
      "Utilisez une adresse de test isolée, des utilisateurs fictifs, de faux fichiers et des destinataires contrôlés. Ne recopiez pas la base clients dans un environnement de développement ordinaire. Le test d’une vraie restauration est un exercice séparé, autorisé et protégé comme la production. Une intervention sur le service actif doit être planifiée et exécutée par la personne compétente avec une solution de retour.",
  },
  {
    question:
      "Une sauvegarde exportée prouve-t-elle que les données sont récupérables ?",
    answer:
      "Non. Il faut restaurer la sauvegarde dans un espace isolé et protégé, puis vérifier la structure, le nombre attendu d’éléments et les fichiers associés. Une base peut référencer des PDF ou des images stockés ailleurs. La copie restaurée doit ensuite être conservée ou supprimée selon la procédure prévue.",
  },
  {
    question: "Peut-on simplement changer le propriétaire du compte Stripe ?",
    answer:
      "Si le même compte Stripe est conservé, une personne désignée par l’entreprise peut recevoir le rôle approprié et vérifier récupération, banque, facturation, utilisateurs et alertes. Créer un nouveau compte constitue une autre opération : ne supposez pas que clients, abonnements, moyens de paiement et historique se recopient. Suivez alors la procédure du fournisseur et prévenez toute double facturation.",
  },
  {
    question:
      "Le paiement des factures signifie-t-il que l’entreprise possède tout le code ?",
    answer:
      "Pas automatiquement. En droit français, la situation dépend notamment de l’auteur, du contrat, des droits expressément cédés, des créations antérieures et des composants tiers. Les comptes techniques et les droits sur le code sont deux sujets différents. Faites examiner une clause ou un litige important par un professionnel du droit.",
  },
  {
    question: "Faut-il réécrire le SaaS si le code est mal documenté ?",
    answer:
      "Pas par réflexe. Commencez par sécuriser les comptes, comprendre les parcours critiques et mesurer ce qu’une autre équipe peut construire, tester, publier et restaurer. Vous pourrez ensuite maintenir, documenter, migrer une partie, réécrire progressivement ou arrêter. Une réécriture n’est rationnelle que si elle résout un obstacle réel à un coût acceptable.",
  },
  {
    question: "Combien de temps faut-il prévoir pour la passation ?",
    answer:
      "Il n’existe pas de durée universelle. Le récit de RelanceSimple s’étale sur plusieurs semaines, mais chaque étape dépend d’un résultat observable : accès récupéré, restauration réussie, service actif contrôlé ou retour arrière prouvé. Un SaaS simple peut avancer plus vite ; un produit ancien, réglementé ou mal documenté demandera davantage de travail.",
  },
  {
    question: "Qui doit choisir le RTO et le RPO du SaaS ?",
    answer:
      "Le métier et la direction doivent accepter l’impact, la perte de données possible et le coût de la cible, avec l’aide des personnes techniques qui démontrent ce que l’architecture peut réellement tenir. Ne demandez pas un seul couple universel : connexion, paiement, action métier, documents et support peuvent avoir des objectifs distincts.",
  },
];

type HandoffCardProps = {
  service: string;
  purpose: string;
  owner: string;
  freelanceAccess: string;
  companyControl: string;
  check: string;
  blocker: string;
  action: string;
  removal: string;
  fallback: string;
  defaultOpen?: boolean;
};

function HandoffCard({
  service,
  purpose,
  owner,
  freelanceAccess,
  companyControl,
  check,
  blocker,
  action,
  removal,
  fallback,
  defaultOpen = false,
}: HandoffCardProps) {
  return (
    <details
      open={defaultOpen || undefined}
      className="not-prose group my-4 overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
    >
      <summary className="cursor-pointer list-none border-b border-transparent bg-zinc-50 px-5 py-4 marker:content-none group-open:border-zinc-200 dark:bg-zinc-900 group-open:dark:border-zinc-800 sm:px-6">
        <span className="flex items-start justify-between gap-4">
          <span>
            <span className="block text-lg font-bold text-zinc-950 dark:text-white">
              {service}
            </span>
            <span className="mt-1 block text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              {purpose}
            </span>
          </span>
          <span
            aria-hidden="true"
            className="mt-1 text-lg font-bold text-zinc-500 transition group-open:rotate-45"
          >
            +
          </span>
        </span>
      </summary>
      <dl className="grid sm:grid-cols-2">
        {[
          ["Titulaire actuel", owner],
          ["Accès de Sam", freelanceAccess],
          ["Contrôle par l’entreprise", companyControl],
          ["Résultat déjà observé", check],
          ["Manque bloquant", blocker],
          ["Prochaine action", action],
          ["Accès retirable lorsque…", removal],
          ["Solution de secours", fallback],
        ].map(([label, value], index) => (
          <div
            key={label}
            className={[
              "border-zinc-200 p-4 dark:border-zinc-800 sm:p-5",
              index < 6 ? "border-b" : "",
              index % 2 === 0 ? "sm:border-r" : "",
              index < 6 ? "sm:border-b" : "",
            ].join(" ")}
          >
            <dt className="text-[11px] font-bold uppercase tracking-[0.1em] text-zinc-500 dark:text-zinc-400">
              {label}
            </dt>
            <dd className="mb-0 mt-1.5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              {value}
            </dd>
          </div>
        ))}
      </dl>
    </details>
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
          { label: "Reprendre un SaaS après le départ du développeur" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Séparez passation et incident, reprenez dix fonctions vitales, fixez RTO/RPO et comparez stabilisation, migration et réécriture sur 36 mois."
        heroAction={{
          href: "#outil-decision",
          label: "Tester le dossier local",
        }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "10",
            title: "fonctions à reprendre",
            description: "",
            color: "violet",
          },
          {
            number: "36",
            title: "mois de TCO comparable",
            description: "",
            color: "blue",
          },
          {
            number: "RTO",
            title: "et RPO décidés par le métier",
            description: "",
            color: "emerald",
          },
          {
            number: "0",
            title: "secret dans le dossier",
            description: "",
            color: "amber",
          },
        ]}
        relatedLinks={[
          {
            href: "/guides/reprendre-logiciel-metier-existant",
            label: "Auditer la reprise technique d’un logiciel existant",
          },
          {
            href: "/guides/proprietaire-site-internet-code-source",
            label: "Comprendre les droits, le code et les comptes",
          },
          {
            href: "/guides/contrat-tma-application",
            label: "Préparer le futur contrat de maintenance",
          },
          {
            href: "/guides/reprendre-mvp-vibe-code",
            label: "Reprendre un MVP créé avec Lovable, Bolt ou v0",
          },
        ]}
        faqTitle="Reprendre un SaaS : les questions qui restent"
        faqItems={faqItems}
        showWhitePaperPromo={false}
        showSidebarCta={false}
      >
        <p className="lead">
          Votre développeur freelance vous annonce son départ alors que des
          clients se connectent encore à votre SaaS et paient chaque mois. Votre
          priorité n’est ni de couper ses accès à l’aveugle, ni de commander une
          réécriture. Protégez d’abord paiement, données, domaine et alertes ;
          exigez un résultat vérifiable et une condition de retrait pour chaque
          compte ; puis comparez stabilisation, migration ciblée et réécriture
          sur le même horizon.
        </p>
        <p>
          Ce guide vous aide à reprendre chaque compte dans le bon ordre, à
          tester ce qui compte sans toucher aux vrais clients, à faire accepter
          une durée maximale d’arrêt (RTO) et une perte maximale de données
          (RPO), puis à chiffrer la suite sur trente-six mois. Si vous faites
          face à un conflit, une intrusion, une violation de données ou un
          compte détourné, cette passation normale ne suffit pas : conservez les
          preuves et déclenchez la réponse spécialisée adaptée.
        </p>

        <GuideToc
          items={[
            { id: "stabiliser", label: "1. Passation normale ou incident" },
            { id: "plus-que-code", label: "2. Voir ce qui manque au code" },
            { id: "registre", label: "3. Résumer puis ouvrir les dix fiches" },
            { id: "votre-fiche", label: "4. Remplir votre propre fiche" },
            {
              id: "droits-donnees",
              label: "5. Séparer comptes, droits et données",
            },
            { id: "trois-preuves", label: "6. Réaliser trois contrôles" },
            { id: "rto-rpo", label: "7. Fixer RTO et RPO" },
            { id: "paiements", label: "8. Reprendre les paiements" },
            { id: "transferts", label: "9. Vérifier chaque transfert" },
            { id: "outil-decision", label: "10. Chiffrer les options" },
            { id: "ordre", label: "11. Avancer selon les résultats" },
            { id: "suite", label: "12. Décider de la suite" },
            { id: "plan-sortie", label: "13. Préparer la prochaine sortie" },
            { id: "sources", label: "14. Sources et limites" },
          ]}
        />

        <h2 id="stabiliser">
          1. Qualifiez d’abord : passation normale, litige ou incident
        </h2>
        <p>
          Tant que les clients utilisent le produit, la première réussite est
          simple à formuler : ils doivent continuer à se connecter, à payer et à
          recevoir ce que le SaaS leur promet. Demandez donc une courte période
          pendant laquelle seules les modifications nécessaires sont réalisées.
          Ce n’est pas « ne plus rien toucher » ; c’est éviter qu’une nouvelle
          fonction brouille la passation ou crée une panne supplémentaire.
        </p>
        <p>
          Nommez une personne côté entreprise pour décider et une personne
          compétente pour exécuter les opérations techniques. Notez la version
          actuellement en ligne, les moyens de contacter les clients, l’endroit
          où arrivent les alertes et le dernier paiement observé. Le dirigeant
          doit comprendre la décision et contrôler les comptes ; il ne doit pas
          improviser seul une modification de base, de domaine ou de paiement.
        </p>
        <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-950 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-100">
            <p className="mb-2 text-lg font-bold">Passation normale</p>
            <p className="mb-3 text-sm leading-relaxed">
              Le prestataire coopère, les comptes restent accessibles, aucune
              compromission n’est soupçonnée et l’entreprise peut planifier des
              contrôles réversibles.
            </p>
            <p className="mb-0 text-sm font-semibold">
              Action : nommer les responsables, limiter les changements, créer
              les accès entreprise et prouver chaque remplacement avant
              l’échéance.
            </p>
          </div>
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5 text-rose-950 dark:border-rose-900 dark:bg-rose-950/30 dark:text-rose-100">
            <p className="mb-2 text-lg font-bold">
              Incident, détournement ou litige aigu
            </p>
            <p className="mb-3 text-sm leading-relaxed">
              Accès inconnu, compte détourné, exfiltration possible, action
              hostile, violation de données ou blocage juridique : le risque
              n’est plus une simple passation.
            </p>
            <p className="mb-0 text-sm font-semibold">
              Action : préserver les preuves, limiter l’exposition avec une
              personne compétente et déclencher les voies cyber, juridique,
              fournisseur et RGPD adaptées. Ne suivez pas mécaniquement le
              calendrier ci-dessous.
            </p>
          </div>
        </div>
        <InfoBox
          variant="amber"
          title="L’échéance contractuelle reste une vraie limite d’habilitation"
        >
          Organisez et testez la passation avant l’échéance. À la fin du
          contrat, désactivez les accès du prestataire, sauf prolongation écrite
          précisant durée, périmètre, responsable et journaux de contrôle. Un
          accès maintenu reste nominatif, temporaire, surveillé et limité au
          strict nécessaire. La{" "}
          <a
            href="https://www.cnil.fr/fr/securite-gerer-les-habilitations"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL demande de supprimer les habilitations lorsque la personne
            n’est plus autorisée
          </a>
          , notamment à la fin du contrat.
        </InfoBox>

        <h2 id="plus-que-code">
          2. Le code ne fait pas tourner seul votre SaaS
        </h2>
        <p>
          Un SaaS est un logiciel utilisé à distance, généralement depuis un
          navigateur, que l’entreprise continue d’exploiter pour plusieurs
          clients. Le dépôt GitHub peut contenir ses fichiers de code et leur
          historique. Il ne contient pas nécessairement le compte qui encaisse,
          la base, les PDF, les utilisateurs, le domaine, la boîte d’envoi ou la
          tâche qui se lance chaque matin.
        </p>
        <p>
          Même le transfert d’un dépôt demande de la prudence. GitHub précise
          que l’ancien propriétaire peut rester collaborateur et que des
          applications liées, des adresses recevant des événements, des secrets
          ou des identifiants permettant la mise en ligne peuvent rester
          associés. Consultez la{" "}
          <a
            href="https://docs.github.com/en/repositories/creating-and-managing-repositories/transferring-a-repository"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation officielle du transfert GitHub
          </a>{" "}
          au moment d’agir : transférer le dépôt n’est que le début du contrôle.
        </p>
        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          {[
            [
              "Les clients voient",
              "connexion, pages, données, fichiers, courriels et support",
            ],
            [
              "L’entreprise paie",
              "hébergement, base, stockage, paiement, domaine et services extérieurs",
            ],
            [
              "Le code appelle",
              "identifiants protégés, adresses d’événements et tâches automatiques",
            ],
            [
              "L’équipe surveille",
              "alertes, sauvegardes, historique technique des événements et procédure de remise en ligne",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <p className="mb-1 font-semibold text-zinc-950 dark:text-white">
                {title}
              </p>
              <p className="mb-0 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {text}
              </p>
            </div>
          ))}
        </div>

        <h2 id="registre">
          3. RelanceSimple : dix fonctions, dix conditions de retrait
        </h2>
        <InfoBox variant="blue" title="Exemple entièrement fictif">
          RelanceSimple aide 18 petites sociétés à préparer leurs relances de
          factures. Sam, le développeur freelance, part. Nina dirige
          RelanceSimple et Malik représente la nouvelle équipe. Les noms,
          services, dates, volumes et résultats ci-dessous sont inventés pour
          expliquer la méthode ; ils ne décrivent aucun client réel.
        </InfoBox>
        <p>
          Les fiches ne disent pas seulement « accès reçu ». Elles montrent qui
          détient le service, ce que Sam peut encore faire, ce que l’entreprise
          a réussi, ce qui bloque et quelle preuve permettra de retirer l’accès.
          Toutes les lignes sont encore bloquées au début : c’est normal. Le
          registre sert précisément à faire disparaître ces dépendances une par
          une.
        </p>

        <div className="not-prose my-6 overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800">
          <table className="w-full min-w-[820px] border-collapse text-left text-sm">
            <caption className="bg-zinc-950 px-5 py-4 text-left font-bold text-white">
              Vue dirigeant — impact, décision et prochain contrôle
            </caption>
            <thead className="bg-zinc-100 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200">
              <tr>
                <th className="px-4 py-3">Fonction</th>
                <th className="px-4 py-3">Criticité</th>
                <th className="px-4 py-3">Impact métier</th>
                <th className="px-4 py-3">Responsable de décision</th>
                <th className="px-4 py-3">Prochaine action</th>
              </tr>
            </thead>
            <tbody>
              {handoverFunctions.map((item) => (
                <tr
                  key={item.id}
                  className="border-t border-zinc-200 align-top dark:border-zinc-800"
                >
                  <th className="px-4 py-3 font-bold text-zinc-950 dark:text-white">
                    {item.id}. {item.service}
                  </th>
                  <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">
                    {item.criticality}
                  </td>
                  <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">
                    {item.businessImpact}
                  </td>
                  <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">
                    {item.decisionOwner}
                  </td>
                  <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">
                    {item.action}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          Les dix fiches détaillées restent disponibles ci-dessous. Les deux
          premières sont ouvertes ; les autres se déplient à la demande pour
          conserver une lecture mobile soutenable.
        </p>
        {handoverFunctions.map((item) => (
          <HandoffCard
            key={item.id}
            service={`${item.id}. ${item.service}`}
            purpose={item.purpose}
            owner={item.owner}
            freelanceAccess={item.freelanceAccess}
            companyControl={item.companyControl}
            check={item.check}
            blocker={item.blocker}
            action={item.action}
            removal={item.removal}
            fallback={item.fallback}
            defaultOpen={item.id <= 2}
          />
        ))}

        <h2 id="votre-fiche">4. Reprenez la fiche avec vos propres services</h2>
        <p>
          Passez en revue les dix fonctions de RelanceSimple. Retirez celles qui
          n’existent pas dans votre SaaS et ajoutez les services propres à votre
          produit : signature électronique, cartographie, téléphone, logiciel
          comptable ou autre. Une fiche par compte est plus utile qu’une liste
          très générale intitulée « infrastructure ».
        </p>
        <div className="not-prose my-6 rounded-2xl border border-violet-200 bg-violet-50 p-5 text-violet-950 dark:border-violet-900 dark:bg-violet-950/30 dark:text-violet-100 sm:p-6">
          <p className="mb-4 text-lg font-bold">Fiche vierge à recopier</p>
          <ol className="m-0 grid gap-x-8 gap-y-2 pl-5 text-sm leading-relaxed sm:grid-cols-2">
            <li>service et rôle dans le produit ;</li>
            <li>titulaire actuel du compte ;</li>
            <li>rôle précis du freelance ;</li>
            <li>accès entreprise et récupération vérifiée ;</li>
            <li>contrôle réalisé, résultat et date ;</li>
            <li>élément encore manquant ;</li>
            <li>ce manque bloque-t-il le retrait, et pourquoi ;</li>
            <li>prochaine action, responsable et date ;</li>
            <li>condition observable de retrait ;</li>
            <li>solution de secours si le changement échoue.</li>
          </ol>
        </div>
        <InfoBox
          variant="amber"
          title="Le registre ne doit contenir aucun secret"
        >
          N’y copiez ni mot de passe, ni clé, ni code de récupération, ni donnée
          bancaire d’un client. Écrivez le nom de l’outil protégé où
          l’identifiant est conservé, la personne qui peut le renouveler et le
          contrôle réalisé — jamais la valeur elle-même.
        </InfoBox>

        <h2 id="droits-donnees">
          5. Séparez contrôle matériel, droits d’exploitation et sort des
          données
        </h2>
        <p>
          Trois questions se ressemblent mais n’ont pas la même réponse.
          Premièrement, qui peut ouvrir le compte, récupérer l’accès, payer le
          fournisseur et exporter l’actif ? Deuxièmement, quels droits
          l’entreprise peut-elle exercer sur le code, les écrans, les textes,
          les polices, les images et les composants antérieurs ? Troisièmement,
          que devient chaque copie de données personnelles conservée par le
          prestataire ? Un dépôt transféré ne répond qu’à une partie de la
          première question.
        </p>
        <div className="not-prose my-6 overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800">
          <table className="w-full min-w-[760px] border-collapse text-left text-sm">
            <caption className="bg-zinc-950 px-5 py-4 text-left font-bold text-white">
              Trois preuves différentes à ne pas fusionner
            </caption>
            <thead className="bg-zinc-100 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200">
              <tr>
                <th className="px-4 py-3">Question</th>
                <th className="px-4 py-3">Preuve utile</th>
                <th className="px-4 py-3">Ce qu’elle ne prouve pas</th>
                <th className="px-4 py-3">Escalade</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Contrôle du compte",
                  "Titulaire, deux accès nominatifs, récupération, facture et export testés",
                  "La cession de tous les droits d’auteur",
                  "Support fournisseur si le titulaire est contesté",
                ],
                [
                  "Droits d’exploitation",
                  "Contrat, droits nommés, territoire, durée, destination, créations antérieures et licences",
                  "La capacité à remettre le service en ligne",
                  "Avocat ou conseil en propriété intellectuelle si l’enjeu est important",
                ],
                [
                  "Sort des données",
                  "Restitution vérifiée, calendrier de suppression, copies et sauvegardes traitées, attestation écrite",
                  "Que l’export seul soit complet ou restaurable",
                  "DPO, juriste ou conseil RGPD selon les rôles et le risque",
                ],
              ].map((row) => (
                <tr
                  key={row[0]}
                  className="border-t border-zinc-200 align-top dark:border-zinc-800"
                >
                  {row.map((cell, index) =>
                    index === 0 ? (
                      <th
                        key={`${row[0]}-${index}`}
                        className="px-4 py-3 font-bold text-zinc-950 dark:text-white"
                      >
                        {cell}
                      </th>
                    ) : (
                      <td
                        key={`${row[0]}-${index}`}
                        className="px-4 py-3 text-zinc-700 dark:text-zinc-300"
                      >
                        {cell}
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          En droit français, l’auteur dispose de droits du seul fait de la
          création. La cession doit identifier les droits cédés et délimiter
          leur exploitation. Le logiciel créé par un salarié dans l’exercice de
          ses fonctions relève par ailleurs d’un régime spécifique : ne
          transposez pas automatiquement cette exception à un freelance.
          Consultez les articles{" "}
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278868"
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
          </a>{" "}
          et{" "}
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958"
            target="_blank"
            rel="noopener noreferrer"
          >
            L131-3
          </a>{" "}
          du Code de la propriété intellectuelle, puis faites qualifier le
          contrat important par un professionnel du droit.
        </p>
        <InfoBox
          variant="blue"
          title="Restitution ou destruction : choisissez et prouvez"
        >
          Lorsque le RGPD et une sous-traitance s’appliquent, écrivez le choix
          entre restitution et destruction, le format, les délais, le sort des
          copies et des sauvegardes, puis demandez une justification écrite de
          la destruction. L’{" "}
          <a
            href="https://www.cnil.fr/fr/sous-traitance-exemple-de-clauses"
            target="_blank"
            rel="noopener noreferrer"
          >
            exemple de clauses de sous-traitance de la CNIL
          </a>{" "}
          est un point de départ à adapter, pas un contrat universel.
        </InfoBox>

        <h2 id="trois-preuves">
          6. Séparez trois contrôles qui ne répondent pas à la même question
        </h2>
        <h3>Le parcours avec des données fictives</h3>
        <p>
          Il vérifie qu’une autre équipe sait construire le produit, se
          connecter, créer un faux dossier, générer un faux PDF et déclencher
          une action sans destinataire réel. La{" "}
          <a
            href="https://www.cnil.fr/fr/tester-vos-applications"
            target="_blank"
            rel="noopener noreferrer"
          >
            CNIL recommande de ne pas utiliser les données réelles de production
            pour les tests de développement
          </a>
          . Les dossiers utilisés pour ces essais sont entièrement fictifs et ne
          proviennent pas de la base clients.
        </p>
        <h3>La restauration protégée</h3>
        <p>
          Elle vérifie qu’une sauvegarde est réellement exploitable. Cet
          exercice peut impliquer des données personnelles : il exige une
          autorisation, un espace isolé, des accès limités et une protection
          comparable à la production. La CNIL rappelle qu’une{" "}
          <a
            href="https://www.cnil.fr/fr/securite-sauvegarder"
            target="_blank"
            rel="noopener noreferrer"
          >
            sauvegarde doit être testée et restaurable
          </a>
          . Notez le résultat, puis appliquez la règle prévue pour conserver ou
          supprimer la copie restaurée.
        </p>
        <h3>Le service réellement utilisé</h3>
        <p>
          Il vérifie que les comptes actifs appartiennent à l’entreprise, que
          leurs factures arrivent au bon endroit et que les réglages de
          production pointent vers les bons services. Le test isolé réduit le
          risque ; il ne prouve pas à lui seul que les vrais clients peuvent se
          passer de Sam. La bascule active doit être préparée par la personne
          compétente, contrôlée sur les fonctions critiques et accompagnée d’un
          retour immédiat possible.
        </p>

        <details
          id="tests-reprise"
          className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
        >
          <summary className="cursor-pointer list-none bg-zinc-50 px-5 py-4 text-left font-bold text-zinc-950 marker:content-none dark:bg-zinc-900 dark:text-white sm:px-6">
            Afficher la matrice complète des 18 tests de reprise
          </summary>
          <div className="border-t border-zinc-200 p-4 dark:border-zinc-800 sm:p-6">
            <p className="mb-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              Exécutez uniquement des tests autorisés, isolés et réversibles.
              Pour chaque ligne, conservez la date, le résultat, la personne qui
              accepte l’écart et une référence de preuve — jamais un secret.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-[820px] w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-zinc-950 text-white dark:bg-white dark:text-zinc-950">
                    <th className="px-4 py-3">ID</th>
                    <th className="px-4 py-3">Famille</th>
                    <th className="px-4 py-3">Scénario</th>
                    <th className="px-4 py-3">Résultat attendu</th>
                  </tr>
                </thead>
                <tbody>
                  {acceptanceTests.map((test) => (
                    <tr
                      key={test.id}
                      className="border-t border-zinc-200 align-top dark:border-zinc-800"
                    >
                      <th className="px-4 py-3 font-bold text-zinc-950 dark:text-white">
                        {test.id}
                      </th>
                      <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">
                        {test.family}
                      </td>
                      <td className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-100">
                        {test.case}
                      </td>
                      <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">
                        {test.expected}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </details>

        <h2 id="rto-rpo">
          7. Faites accepter RTO et RPO par le métier, parcours par parcours
        </h2>
        <p>
          Le <strong>RTO</strong> est la durée maximale visée pour remettre un
          parcours en service après une interruption. Le <strong>RPO</strong>
          exprime le point de reprise et donc la quantité de données que
          l’entreprise accepte potentiellement de perdre. Les définitions du{" "}
          <a
            href="https://csrc.nist.gov/glossary/term/recovery_time_objective"
            target="_blank"
            rel="noopener noreferrer"
          >
            RTO
          </a>{" "}
          et du{" "}
          <a
            href="https://csrc.nist.gov/glossary/term/recovery_point_objective"
            target="_blank"
            rel="noopener noreferrer"
          >
            RPO
          </a>{" "}
          sont documentées par le NIST. Elles ne choisissent pas vos valeurs :
          le métier doit relier chaque cible aux clients, contrats, opérations,
          données et coûts.
        </p>
        <p>
          Un seul couple « RTO/RPO du SaaS » masque souvent les vrais écarts.
          Une page marketing, une connexion, un paiement, une action métier et
          un document client n’ont pas nécessairement la même criticité.
          L’architecture doit ensuite démontrer qu’elle peut tenir la cible, y
          compris lorsque le prestataire sortant n’est plus disponible.
        </p>
        <div className="not-prose my-6 overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800">
          <table className="w-full min-w-[900px] border-collapse text-left text-sm">
            <caption className="bg-zinc-950 px-5 py-4 text-left font-bold text-white">
              RelanceSimple — objectifs fictifs à faire arbitrer, pas valeurs
              recommandées
            </caption>
            <thead className="bg-zinc-100 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200">
              <tr>
                <th className="px-4 py-3">Parcours</th>
                <th className="px-4 py-3">Impact à décrire</th>
                <th className="px-4 py-3">RTO fictif</th>
                <th className="px-4 py-3">RPO fictif</th>
                <th className="px-4 py-3">Preuve attendue</th>
                <th className="px-4 py-3">Acceptation</th>
              </tr>
            </thead>
            <tbody>
              {continuityTargets.map((target) => (
                <tr
                  key={target.journey}
                  className="border-t border-zinc-200 align-top dark:border-zinc-800"
                >
                  {[
                    target.journey,
                    target.impact,
                    target.rtoLabel,
                    target.rpoLabel,
                    target.evidence,
                    target.decisionOwner,
                  ].map((cell, index) =>
                    index === 0 ? (
                      <th
                        key={`${target.journey}-${index}`}
                        className="px-4 py-3 font-bold text-zinc-950 dark:text-white"
                      >
                        {cell}
                      </th>
                    ) : (
                      <td
                        key={`${target.journey}-${index}`}
                        className="px-4 py-3 text-zinc-700 dark:text-zinc-300"
                      >
                        {cell}
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Dans le scénario fictif, 900 modifications métier par jour et un point
          restaurable toutes les 24 heures exposent en moyenne 450 événements et
          au maximum 900. Avec un point toutes les 4 heures, ces valeurs
          deviennent 75 et 150. À six minutes de reconstitution par événement et
          45 € de capacité horaire, le maximum illustratif passe de 4 050 € à
          675 €. La moyenne suppose un instant d’incident uniformément réparti
          dans l’intervalle et un flux d’événements suffisamment régulier. Le
          calcul suppose aussi des points valides et n’intègre ni journal
          transactionnel, ni réplication, ni corruption silencieuse.
        </p>
        <InfoBox
          variant="amber"
          title="Des objectifs plus courts coûtent généralement plus cher"
        >
          Les guides d’architecture de reprise d’{" "}
          <a
            href="https://docs.aws.amazon.com/prescriptive-guidance/latest/startup-resiliency-baseline/stage-1.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            AWS
          </a>{" "}
          et de{" "}
          <a
            href="https://docs.cloud.google.com/architecture/dr-scenarios-planning-guide"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Cloud
          </a>{" "}
          relient les objectifs de reprise aux besoins métier et aux compromis
          de coût. Exiger qu’aucune donnée ne soit perdue et qu’aucune
          interruption ne survienne ne doit pas rester une préférence technique
          gratuite : documentez qui l’exige, pourquoi, et qui accepte son coût.
        </InfoBox>

        <h2 id="paiements">
          8. Pour les paiements, choisissez d’abord la bonne branche
        </h2>
        <p>
          Si RelanceSimple garde le même compte Stripe, Nina peut recevoir le
          rôle approprié, vérifier banque, facturation, récupération,
          utilisateurs et alertes, puis faire contrôler l’intégration. Stripe
          documente le{" "}
          <a
            href="https://support.stripe.com/questions/change-the-owner-of-a-stripe-account?locale=en-GB"
            target="_blank"
            rel="noopener noreferrer"
          >
            changement de propriétaire d’un compte
          </a>
          . Le rôle est attribué à une personne désignée qui agit pour
          l’entreprise ; « l’entreprise devient Account Owner » serait trop
          imprécis.
        </p>
        <p>
          Si un nouveau compte doit être créé, arrêtez d’appeler cela un simple
          changement de propriétaire. Stripe explique que la{" "}
          <a
            href="https://support.stripe.com/questions/copy-existing-account-data-to-a-new-stripe-account"
            target="_blank"
            rel="noopener noreferrer"
          >
            copie des données entre deux comptes a des limites
          </a>
          . Clients, moyens de paiement, abonnements, factures et historique ne
          doivent pas être supposés identiques. Le{" "}
          <a
            href="https://docs.stripe.com/billing/subscriptions/import-subscriptions-toolkit?locale=en-GB"
            target="_blank"
            rel="noopener noreferrer"
          >
            parcours officiel de migration des abonnements
          </a>{" "}
          prévoit notamment un environnement de test, une activation préparée et
          une surveillance. Faites établir le plan adapté et interdisez toute
          double facturation ou action improvisée sur un abonnement réel.
        </p>

        <h2 id="transferts">
          9. Un bouton « transférer » ne déplace pas forcément le service entier
        </h2>
        <p>
          Prenons Vercel comme exemple d’hébergeur. Sa documentation, mise à
          jour le 25 novembre 2025 et consultée le 28 juillet 2026, indique que
          certaines intégrations, données de suivi, journaux envoyés à d’autres
          outils, fichiers placés dans son stockage Blob ou réglages conservés
          dans Edge Config ne suivent pas automatiquement un transfert. La liste
          peut évoluer : relisez la{" "}
          <a
            href="https://vercel.com/docs/projects/transferring-projects"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation Vercel du transfert de projet
          </a>{" "}
          au moment de la passation et remplacez Vercel par votre hébergeur
          réel.
        </p>
        <p>
          Appliquez la même question partout : « qu’est-ce que le transfert ne
          déplace pas ? » Pour le code, examinez applications et identifiants.
          Pour la base, examinez fichiers et sauvegardes. Pour le domaine,
          examinez renouvellement et réglages. Pour le paiement, examinez rôles,
          banque, alertes et événements. Le registre transforme ces oublis en
          actions nommées au lieu de les découvrir le jour de la coupure.
        </p>

        <p>
          Une fois comptes et preuves qualifiés, comparez les suites sur le même
          périmètre. L’exemple ci-dessous est entièrement fictif, hors taxes et
          ne décrit aucun client ni prix moyen. Il inclut fonctions actuelles,
          continuité, maintenance, infrastructure, temps interne et sortie sur
          trente-six mois.
        </p>
        <div className="not-prose my-6 overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800">
          <table className="w-full min-w-[820px] border-collapse text-left text-sm">
            <caption className="bg-zinc-950 px-5 py-4 text-left font-bold text-white">
              TCO fictif sur 36 mois — hypothèses toutes remplaçables dans
              l’outil et le classeur
            </caption>
            <thead className="bg-zinc-100 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200">
              <tr>
                <th className="px-4 py-3">Poste</th>
                <th className="px-4 py-3">Stabiliser</th>
                <th className="px-4 py-3">Migration ciblée</th>
                <th className="px-4 py-3">Réécriture</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Audit / prise en main", "9 000 €", "9 000 €", "14 000 €"],
                [
                  "Stabilisation, migration ou construction",
                  "18 000 €",
                  "67 000 €",
                  "140 000 €",
                ],
                [
                  "Maintenance",
                  "2 200 € × 36 = 79 200 €",
                  "1 800 € × 36 = 64 800 €",
                  "2 200 € × 9 + 1 500 € × 27 = 60 300 €",
                ],
                [
                  "Infrastructure et surveillance",
                  "650 € × 36 = 23 400 €",
                  "750 € × 36 = 27 000 €",
                  "900 € × 36 = 32 400 €",
                ],
                [
                  "Temps interne valorisé",
                  "5 h × 55 € × 36 = 9 900 €",
                  "8 h × 55 € × 36 = 15 840 €",
                  "220 h × 55 € = 12 100 €",
                ],
                ["Double exploitation", "0 €", "0 €", "12 000 €"],
                ["Sortie documentée", "2 000 €", "3 000 €", "4 000 €"],
                ["TCO 36 mois", "141 500 €", "186 640 €", "274 800 €"],
              ].map((row, rowIndex) => (
                <tr
                  key={row[0]}
                  className={[
                    "border-t border-zinc-200 dark:border-zinc-800",
                    rowIndex === 7
                      ? "bg-violet-50 font-bold dark:bg-violet-950/30"
                      : "",
                  ].join(" ")}
                >
                  {row.map((cell, index) =>
                    index === 0 ? (
                      <th
                        key={`${row[0]}-${index}`}
                        className="px-4 py-3 text-zinc-950 dark:text-white"
                      >
                        {cell}
                      </th>
                    ) : (
                      <td
                        key={`${row[0]}-${index}`}
                        className="px-4 py-3 text-zinc-700 dark:text-zinc-300"
                      >
                        {cell}
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Dans ce seul scénario, réécrire coûte 133 300 € de plus que
          stabiliser. À 800 € de contribution mensuelle par client et 27 mois
          utiles après la mise en service, le surcoût représente 166,625
          clients-mois, soit l’équivalent de 6,17 clients contribuant chaque
          mois pendant toute cette période : il faut donc atteindre l’équivalent
          de <strong>sept clients conservés ou gagnés sur les 27 mois</strong>.
          Une acquisition progressive, l’attrition, la valeur terminale et les
          risques non chiffrés doivent être modélisés séparément.
        </p>
        <p>
          L’exercice de restauration demande la même discipline. Six heures
          externes à 95 € et deux heures internes à 55 € coûtent 680 €. Avec 22
          500 € de contribution mensuelle et deux personnes mobilisées à 55 €/h,
          l’exposition de capacité et de contribution vaut 141,25 €/h. Le seuil
          de 4,81 h n’est valable qu’avec une probabilité annuelle d’incident de
          100 %. À 25 %, il devient 19,26 h ; à 10 %, 48,14 h. Même là,
          l’exercice n’est rentable que s’il réduit effectivement la durée de
          l’incident concerné.
        </p>

        <SaasFreelanceHandoverDecisionDossier />

        <h2 id="ordre">
          11. L’ordre suivi par RelanceSimple dépend des résultats, pas du
          calendrier
        </h2>
        <p>
          Les dates du cas fictif rendent le récit concret ; elles ne promettent
          pas qu’un SaaS se reprend en trente jours. RelanceSimple avance selon
          quatre résultats successifs.
        </p>
        <ol>
          <li>
            <strong>Préserver l’existant :</strong> Nina nomme les responsables,
            limite les changements non nécessaires, identifie la version active
            et confirme que clients, paiements et alertes sont encore servis.
          </li>
          <li>
            <strong>Créer les accès entreprise :</strong> deux personnes
            autorisées entrent dans chaque service critique et testent les
            moyens de récupération, sans retirer Sam.
          </li>
          <li>
            <strong>Prouver séparément :</strong> Malik parcourt le produit avec
            des données fictives, réalise la restauration protégée autorisée et
            prépare chaque contrôle du service actif avec sa solution de
            secours.
          </li>
          <li>
            <strong>Retirer ligne par ligne :</strong> l’accès précis de Sam est
            réduit lorsque le manque bloquant a disparu et que la condition de
            retrait est observée. Les comptes sont ensuite surveillés.
          </li>
        </ol>
        <p>
          À l’échéance du contrat, tout accès restant exige une prolongation
          écrite et bornée ; l’absence de preuve ne transforme pas une
          habilitation expirée en accès permanent. Si la continuité ne peut pas
          être assurée à temps, la direction doit choisir explicitement entre
          prolongation contrôlée, bascule différée, procédure fournisseur ou
          traitement d’incident.
        </p>
        <p>
          Le plan s’arrête si un compte n’est pas récupérable, si une sauvegarde
          échoue, si un droit est contesté ou si des données semblent
          compromises. Ce n’est pas un retard honteux : c’est une information
          qui oblige à traiter le problème approprié avant de poursuivre.
        </p>

        <h2 id="suite">
          12. Une fois les accès repris, décidez sans réécriture réflexe
        </h2>
        <p>
          La passation ne répond pas à toutes les questions techniques. Elle
          donne en revanche une base fiable pour décider : continuer la
          maintenance, financer un{" "}
          <Link href="/guides/reprendre-logiciel-metier-existant">
            audit ciblé de l’application existante
          </Link>
          , migrer un service fragile, réécrire progressivement une partie ou
          arrêter le produit proprement. « Le code n’est pas élégant » ne suffit
          pas à justifier la solution la plus coûteuse.
        </p>
        <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
          {[
            [
              "Maintenir",
              "Le produit sert ses clients et la nouvelle équipe sait construire, publier, restaurer et répondre.",
            ],
            [
              "Documenter et stabiliser",
              "Le service fonctionne mais ses tests, procédures ou alertes sont encore trop fragiles.",
            ],
            [
              "Migrer une dépendance",
              "Le métier et le code restent utiles, mais un compte ou un fournisseur crée une dépendance excessive.",
            ],
            [
              "Réécrire progressivement",
              "Un obstacle vérifié empêche durablement la sécurité, la maintenance ou l’évolution à un coût acceptable.",
            ],
            [
              "Arrêter proprement",
              "L’usage ou la valeur ne justifie plus les coûts, après traitement des clients, données et obligations applicables.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <p className="mb-1 font-semibold text-zinc-950 dark:text-white">
                {title}
              </p>
              <p className="mb-0 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {text}
              </p>
            </div>
          ))}
        </div>
        <p>
          Les comptes, droits, licences tierces et copies de données restent
          soumis aux contrôles de la section 5. Un TCO favorable ne corrige ni
          une absence de droit d’exploitation, ni une obligation de restitution,
          ni un composant hors support. À l’inverse, une inquiétude juridique
          non qualifiée ne suffit pas à commander la réécriture la plus chère.
        </p>
        <p>
          Une fois l’outil repris, le guide sur le{" "}
          <Link href="/guides/contrat-tma-application">
            contrat de maintenance d’une application
          </Link>{" "}
          vous aide à préciser incidents, horaires, responsabilités, évolutions
          et sortie. La passation protège le présent ; la maintenance organise
          ce qui se passe ensuite.
        </p>

        <h2 id="plan-sortie">13. Écrivez dès maintenant la prochaine sortie</h2>
        <p>
          Une reprise premium ne se termine pas lorsque Sam est retiré. Elle
          doit rendre la prochaine transition moins dépendante de Nina, Malik ou
          d’un nouveau prestataire. Le plan de sortie devient un actif vivant :
          propriétaires, coûts, documentation, assistance, jalons, risques,
          données et preuves sont revus pendant la relation, pas la veille de sa
          fin.
        </p>
        <div className="not-prose my-6 overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800">
          <table className="w-full min-w-[820px] border-collapse text-left text-sm">
            <caption className="bg-zinc-950 px-5 py-4 text-left font-bold text-white">
              Contrat léger de sortie à maintenir pendant la relation
            </caption>
            <thead className="bg-zinc-100 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200">
              <tr>
                <th className="px-4 py-3">Livrable vivant</th>
                <th className="px-4 py-3">Contenu minimal</th>
                <th className="px-4 py-3">Preuve</th>
                <th className="px-4 py-3">Révision</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Propriété et accès",
                  "Titulaire entreprise, deux administrateurs, MFA, récupération et moindre privilège",
                  "Connexion nominative et récupération testées",
                  "À chaque arrivée, départ ou changement de rôle",
                ],
                [
                  "Actifs techniques",
                  "Code, tests, configuration, infrastructure déclarative, données, fichiers, identités et tâches",
                  "Inventaire rapproché du service actif",
                  "À chaque dépendance critique",
                ],
                [
                  "Droits et licences",
                  "Origine, licence, droits cédés, restrictions et créations antérieures",
                  "Registre et contrats reliés aux composants",
                  "À chaque ajout ou changement de licence",
                ],
                [
                  "Exploitation",
                  "Build propre, publication, retour arrière, alertes, incident, sauvegarde et restauration",
                  "Exercice daté par une autre personne",
                  "Selon criticité et après changement majeur",
                ],
                [
                  "Données à la sortie",
                  "Format, restitution ou destruction, copies, sauvegardes, calendrier et attestation",
                  "Export réimporté et preuve écrite",
                  "À chaque évolution de traitement ou contrat",
                ],
                [
                  "Coûts et assistance",
                  "Temps, tarifs, frais fournisseur, disponibilité du sortant et responsabilité de transfert",
                  "Budget de sortie révisé dans le TCO",
                  "Au moins à chaque renouvellement",
                ],
              ].map((row) => (
                <tr
                  key={row[0]}
                  className="border-t border-zinc-200 align-top dark:border-zinc-800"
                >
                  {row.map((cell, index) =>
                    index === 0 ? (
                      <th
                        key={`${row[0]}-${index}`}
                        className="px-4 py-3 font-bold text-zinc-950 dark:text-white"
                      >
                        {cell}
                      </th>
                    ) : (
                      <td
                        key={`${row[0]}-${index}`}
                        className="px-4 py-3 text-zinc-700 dark:text-zinc-300"
                      >
                        {cell}
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Le{" "}
          <a
            href="https://www.gov.uk/government/publications/the-digital-data-and-technology-playbook/the-digital-data-and-technology-playbook"
            target="_blank"
            rel="noopener noreferrer"
          >
            Digital, Data and Technology Playbook britannique
          </a>{" "}
          traite la sortie et le transfert de connaissances comme des éléments à
          préparer pendant la relation. C’est ici un benchmark de commande
          publique, pas une règle applicable telle quelle à une PME française.
          L’{" "}
          <a
            href="https://www.cyber.gov.au/about-us/advisories/protecting-against-cyber-threats-managed-service-providers-and-their-customers"
            target="_blank"
            rel="noopener noreferrer"
          >
            avis conjoint publié par l’Australian Signals Directorate
          </a>{" "}
          insiste, dans son périmètre de services managés, sur MFA, moindre
          privilège et suppression des comptes devenus inutiles. Adaptez ces
          principes à la taille et au risque de votre SaaS.
        </p>

        <h2 id="sources">
          14. Sources contrôlées, limites et position du cabinet
        </h2>
        <p>
          Les sources officielles ci-dessous ont été revérifiées le 28 juillet
          2026. Les pages fournisseurs décrivent leur produit à cette date ;
          elles ne créent pas une règle universelle de transfert. Les textes
          juridiques ne remplacent pas l’analyse de votre contrat, de vos rôles
          RGPD et de chaque composant.
        </p>
        <ul>
          <li>
            <a
              href="https://docs.github.com/en/repositories/creating-and-managing-repositories/transferring-a-repository"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub — transfert d’un dépôt
            </a>{" "}
            : collaborateurs, webhooks, services, secrets et clés de déploiement
            restent à revoir.
          </li>
          <li>
            <a
              href="https://vercel.com/docs/projects/transferring-projects"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel — transfert d’un projet
            </a>{" "}
            : page mise à jour le 25 novembre 2025 et consultée le 28 juillet
            2026 ; intégrations, journaux, données de surveillance, Blob et Edge
            Config suivent des règles distinctes.
          </li>
          <li>
            <a
              href="https://docs.stripe.com/billing/subscriptions/import-subscriptions-toolkit"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stripe — migration des abonnements
            </a>{" "}
            : préparation, bac à sable, calendrier et prévention de la double
            facturation.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/securite-gerer-les-habilitations"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — gérer les habilitations
            </a>
            ,{" "}
            <a
              href="https://www.cnil.fr/fr/sous-traitance-exemple-de-clauses"
              target="_blank"
              rel="noopener noreferrer"
            >
              sous-traitance
            </a>{" "}
            et{" "}
            <a
              href="https://www.cnil.fr/sites/default/files/2026-05/cnil_guide_securite_personnelle.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              guide de sécurité 2026
            </a>
            .
          </li>
          <li>
            <a
              href="https://csrc.nist.gov/glossary/term/recovery_time_objective"
              target="_blank"
              rel="noopener noreferrer"
            >
              NIST — RTO
            </a>{" "}
            et{" "}
            <a
              href="https://csrc.nist.gov/glossary/term/recovery_point_objective"
              target="_blank"
              rel="noopener noreferrer"
            >
              RPO
            </a>
            .
          </li>
        </ul>
        <InfoBox variant="blue" title="Notre conflit d’intérêt est explicite">
          Hagnéré Code peut vendre audit, maintenance, migration et réécriture.
          Notre avis par défaut est pourtant de reprendre et stabiliser avant de
          réécrire. Dans le scénario publié, la stabilisation coûte 133 300 € de
          moins que la réécriture. Nous ne changeons d’avis que lorsqu’une
          contrainte prouvée — sécurité, dépendance hors support, coût
          récurrent, architecture incompatible ou valeur commerciale — justifie
          le surcoût sur l’horizon retenu.
        </InfoBox>
        <GuideInlineCTA
          title="Faire vérifier le registre de passation de votre SaaS"
          description="Envoyez la situation, les comptes déjà identifiés et les blocages connus. Quentin Hagnéré relit votre demande et vous indique le prochain contrôle utile, y compris si une action plus simple suffit ou si la reprise doit être reportée. Cette première orientation ne vous oblige à commander aucune prestation."
          tags={["Lecture directe", "Priorités concrètes", "Sans engagement"]}
          ctaLabel="Décrire la reprise du SaaS"
          ctaHref="/demarrer-un-projet"
          ctaService="saas"
          ctaSource="guide-reprise-saas-freelance"
          showPhone={false}
        />
      </GuideLayout>
    </GuidesShell>
  );
}
