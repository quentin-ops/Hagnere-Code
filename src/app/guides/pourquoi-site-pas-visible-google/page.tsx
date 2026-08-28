import Image from "next/image";
import Link from "next/link";
import {
  Bot,
  Database,
  FileSearch,
  MousePointerClick,
  type LucideIcon,
} from "lucide-react";
import { GuideTable, InfoBox } from "@/components/guides/guide-content-blocks";
import {
  GuidePremiumLayout,
  GuidePremiumMemo,
  GuidePremiumSection,
} from "@/components/guides/guide-premium-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { SearchVisibilityDiagnostic } from "@/components/guides/SearchVisibilityDiagnostic";
import {
  buildGuideMetadata,
  buildGuideStructuredData,
} from "@/lib/guide-page-seo";
import { formatGuideDate, getGuide } from "@/lib/guides";
import { TEAM } from "@/lib/team";

const guide = getGuide("pourquoi-site-pas-visible-google");
const breadcrumbName = "Pourquoi mon site n’est pas visible sur Google";
const imageAlt =
  "Diagnostiquer une URL de l’exploration aux clics dans Google Search Console";

export const metadata = buildGuideMetadata(guide, imageAlt);

const structuredData = buildGuideStructuredData(guide, breadcrumbName);

const toc = [
  {
    id: "url-recherche",
    number: "01",
    label: "Choisir une URL et une recherche",
    shortLabel: "Cadrer",
  },
  {
    id: "exploration",
    number: "02",
    label: "Vérifier l’exploration",
    shortLabel: "Exploration",
  },
  {
    id: "indexation",
    number: "03",
    label: "Vérifier l’indexation",
    shortLabel: "Indexation",
  },
  {
    id: "impressions",
    number: "04",
    label: "Lire les impressions",
    shortLabel: "Impressions",
  },
  {
    id: "clics",
    number: "05",
    label: "Lire les clics sans surinterpréter",
    shortLabel: "Clics",
  },
  {
    id: "fiche",
    number: "06",
    label: "Remplir la fiche URL-recherche",
    shortLabel: "Fiche",
  },
  {
    id: "decision",
    number: "07",
    label: "Corriger, recontrôler ou auditer",
    shortLabel: "Décider",
  },
];

const faqItems = [
  {
    question: "Combien de temps faut-il pour apparaître après une correction ?",
    answer: (
      <>
        Il n’existe pas de délai garanti. Google indique qu’une nouvelle
        exploration peut prendre de quelques jours à quelques semaines, sans
        garantir l’inclusion dans les résultats. Une demande répétée n’accélère
        pas le processus. Datez donc l’URL et la correction, puis prévoyez un
        recontrôle sans promettre un délai de classement. Voir la documentation
        officielle sur la{" "}
        <a
          href="https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl?hl=fr"
          target="_blank"
          rel="noreferrer"
        >
          nouvelle exploration
        </a>
        .
      </>
    ),
  },
  {
    question: "La commande site: prouve-t-elle que ma page est indexée ?",
    answer: (
      <>
        Non. Google précise que les résultats de l’opérateur <code>site:</code>
        ne sont pas exhaustifs. Une page affichée donne un indice utile ; son
        absence ne suffit pas à conclure qu’elle n’est pas indexée. Inspectez
        l’URL dans Search Console pour connaître l’état enregistré par Google.
        Voir les limites officielles de l’
        <a
          href="https://developers.google.com/search/docs/monitor-debug/search-operators/all-search-site?hl=fr"
          target="_blank"
          rel="noreferrer"
        >
          opérateur site:
        </a>
        .
      </>
    ),
  },
  {
    question: "Dois-je donner mon mot de passe Search Console ?",
    answer: (
      <>
        Non. Ajoutez la personne comme utilisateur avec le niveau d’autorisation
        nécessaire, puis retirez cet accès quand l’intervention est terminée.
        Google documente séparément les rôles de propriétaire et d’utilisateur.
        Ne transmettez ni votre mot de passe, ni un code de connexion. Voir la
        gestion officielle des{" "}
        <a
          href="https://support.google.com/webmasters/answer/7687615?hl=fr"
          target="_blank"
          rel="noreferrer"
        >
          utilisateurs et autorisations
        </a>
        .
      </>
    ),
  },
  {
    question: "Ce guide explique-t-il une absence dans Google Maps ?",
    answer:
      "Non. Il traite une page web dans les résultats de recherche et les rapports Search Console. Une fiche établissement absente de Google Maps relève d’un autre produit, avec d’autres contrôles. Commencez par préciser si vous cherchez une URL, une fiche locale ou les deux.",
  },
];

function OfficialSource({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function ReadingCard({
  icon: Icon,
  title,
  question,
  source,
}: {
  icon: LucideIcon;
  title: string;
  question: string;
  source: string;
}) {
  return (
    <li className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
      <Icon className="mb-3 size-5 text-indigo-600" aria-hidden="true" />
      <p className="m-0 text-sm font-bold text-zinc-950 dark:text-white">
        {title}
      </p>
      <p className="mb-0 mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
        {question}
      </p>
      <p className="mb-0 mt-3 text-xs font-semibold uppercase tracking-wide text-zinc-500">
        À relever : {source}
      </p>
    </li>
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
          { label: breadcrumbName },
        ]}
        badges={[
          { label: "Diagnostic SEO", variant: "dark" },
          { label: "Search Console", variant: "neutral" },
          { label: "Fiche locale", variant: "success" },
          {
            label: `Mis à jour le ${formatGuideDate(guide.dateModified)}`,
            variant: "muted",
          },
        ]}
        heroTitle="Pourquoi mon site n’est-il pas"
        heroTitleEm="visible sur Google ?"
        heroDescription="Prenez une page et une recherche précises. Vérifiez dans l’ordre : Google a-t-il pu ouvrir l’URL ? L’a-t-il indexée ? L’a-t-il affichée pour cette recherche ? Le résultat a-t-il reçu un clic ? Vous saurez alors s’il faut corriger, patienter ou approfondir le diagnostic."
        stats={[
          { label: "Contrôles successifs", value: "4" },
          { label: "Unité de diagnostic", value: "1 URL + 1 recherche" },
          { label: "Fiche · envoi", value: "Aucun" },
          { label: "Lecture", value: `${guide.readTimeMin} min` },
        ]}
        author={{
          initials: TEAM.quentin.initials,
          name: TEAM.quentin.fullName,
          role: TEAM.quentin.role,
          profileUrl: "/equipe#fondateur",
        }}
        toc={toc}
        tocLabel="Trouver où la visibilité s’arrête"
        mobileCtaLabel="Faire relire mon diagnostic"
        faqItems={faqItems}
        faqMeta={{
          eyebrow: "Questions fréquentes",
          titleStart: "Écarter les",
          titleEm: "faux verdicts",
          titleEnd: "avant de modifier le site.",
          subtitle:
            "Quatre réponses sur les délais, la commande site:, les accès et Google Maps.",
          ctaTitle: "Vous avez une fiche URL-recherche complète ?",
          ctaDescription:
            "Partagez vos constats sans communiquer vos mots de passe. Nous pouvons vérifier l’ordre des contrôles et choisir la prochaine intervention utile.",
          ctaLabel: "Faire relire la fiche",
          ctaHref: "/demarrer-un-projet",
        }}
        strategyCta={{
          titleStart: "Faire relire",
          titleEm: "un diagnostic daté",
          description:
            "Transmettez l’URL, la recherche, la période et les constats relevés. Nous regardons d’abord si le problème vient de l’exploration, de l’indexation ou s’il demande une analyse distincte de la visibilité.",
          badges: [
            "Accès Search Console par rôle",
            "Aucune promesse de position",
            "Vérifications prévues par écrit",
          ],
          ctaLabel: "Faire relire mon diagnostic",
          ctaHref: "/demarrer-un-projet",
          showPhoneCta: false,
        }}
        legalSources={[
          {
            source: "Google Search Central · fonctionnement de la recherche",
            href: "https://developers.google.com/search/docs/fundamentals/how-search-works?hl=fr",
            description:
              "Étapes d’exploration, d’indexation et de diffusion, sans garantie de réalisation pour une page donnée.",
          },
          {
            source: "Google Search Console · inspection d’URL",
            href: "https://support.google.com/webmasters/answer/9012289?hl=fr",
            description:
              "Différence entre la version indexée et le test en direct, récupération, indexation et adresse canonique.",
          },
          {
            source: "Google Search Console · rapport Performances",
            href: "https://support.google.com/webmasters/answer/7576553?hl=fr",
            description:
              "Clics, impressions et filtres par page, requête, pays, appareil et période.",
          },
          {
            source: "Google Search Console · dimensions et regroupements",
            href: "https://support.google.com/webmasters/answer/17011259?hl=fr",
            description:
              "Attribution de la plupart des données à l’URL canonique Google, requêtes anonymisées et lignes tronquées.",
          },
          {
            source: "Google Search Central · opérateur site:",
            href: "https://developers.google.com/search/docs/monitor-debug/search-operators/all-search-site?hl=fr",
            description:
              "Résultats non exhaustifs de l’opérateur site: et usage de Search Console pour le diagnostic.",
          },
          {
            source: "Google Search Central · nouvelle exploration",
            href: "https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl?hl=fr",
            description:
              "Demande d’indexation, délai indicatif en jours ou semaines et absence de garantie d’inclusion.",
          },
          {
            source: "Google Search Central · sitemaps",
            href: "https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview?hl=fr",
            description:
              "Aide à la découverte des URL, sans garantie d’exploration ni d’indexation.",
          },
          {
            source: "Google Search Central · règle noindex",
            href: "https://developers.google.com/search/docs/crawling-indexing/block-indexing?hl=fr",
            description:
              "Règle meta ou en-tête HTTP lue lors de l’exploration ; limite lorsqu’un blocage robots.txt empêche Google de la voir.",
          },
          {
            source: "Google Search Central · choix de l’URL canonique",
            href: "https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=fr",
            description:
              "Redirections, balise canonical et sitemap comme indications de force différente, sans garantie du choix final.",
          },
          {
            source: "Google Search Console · utilisateurs et autorisations",
            href: "https://support.google.com/webmasters/answer/7687615?hl=fr",
            description:
              "Ajout d’utilisateurs et niveaux d’autorisation sans partager un compte personnel.",
          },
        ]}
        disclaimer={{
          eyebrow: "Périmètre du guide",
          title: "Ce guide localise un blocage ; il ne promet aucun classement",
          description:
            "Les interfaces et libellés de Search Console peuvent évoluer. Les sources officielles ont été revérifiées le 18 août 2026. La fiche ne mesure pas la demande, ne prédit aucun délai et ne conclut pas à partir d’une position observée ponctuellement. Elle s’arrête dès que l’URL est indexée et reçoit des impressions : le diagnostic de trafic, de concurrence et d’intention mérite alors une analyse séparée.",
        }}
        relatedGuides={[
          {
            label: "Prix de la gestion Google Ads en 2026",
            href: "/guides/prix-gestion-google-ads",
          },
        ]}
      >
        <GuidePremiumSection
          id="url-recherche"
          number="01"
          label="Point de départ"
          title="Commencez par une URL et une recherche précises"
        >
          <p>
            Quand une page manque dans Google, ne partez pas du domaine entier.
            Notez son URL et la recherche exacte sur laquelle vous l’attendez.
            Dans Search Console, vérifiez d’abord si Google a pu explorer cette
            adresse, puis s’il l’a indexée. Si oui, ouvrez Performances : la
            page reçoit-elle des impressions pour cette recherche, puis des
            clics ? Arrêtez-vous à la première réponse manquante. Tant qu’elle
            reste inconnue, vous ne savez pas encore si une refonte, des liens
            ou de nouveaux articles répondraient au problème.
          </p>

          <p>
            « Mon site est invisible » mélange souvent plusieurs situations : la
            page d’accueil apparaît sur le nom de l’entreprise, mais une page de
            service ne s’affiche pas pour une recherche métier ; une ancienne
            adresse est indexée à la place de la nouvelle ; ou la page reçoit
            des impressions sans clic. Ces cas n’appellent pas la même
            correction.
          </p>

          <GuidePremiumMemo
            eyebrow="La fiche minimale"
            title="Quatre repères rendent deux contrôles comparables"
          >
            <ul>
              <li>l’URL complète, avec le bon protocole et le bon domaine ;</li>
              <li>la recherche exacte, de marque ou métier ;</li>
              <li>la période, le pays et l’appareil observés ;</li>
              <li>la date du contrôle et la personne qui l’a réalisé.</li>
            </ul>
          </GuidePremiumMemo>

          <figure className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 dark:border-zinc-800">
            <Image
              src="/guides/pourquoi-site-pas-visible-google/diagnostic-google-16x9.svg"
              width={1600}
              height={900}
              sizes="(max-width: 768px) calc(100vw - 32px), 760px"
              alt="Une fiche avec une URL et une recherche reliée aux contrôles d’exploration, d’indexation, d’impressions et de clics"
              className="h-auto w-full"
              unoptimized
            />
            <figcaption className="border-t border-zinc-800 bg-zinc-950 px-4 py-3 text-sm leading-relaxed text-zinc-300 sm:px-5">
              Gardez la même URL et la même recherche. Le premier contrôle non
              confirmé détermine la prochaine vérification.
            </figcaption>
          </figure>

          <h3>Une recherche Google reste un indice</h3>
          <p>
            Une recherche manuelle varie selon le contexte et ne remplace pas
            les rapports de votre propriété Search Console. Même la commande{" "}
            <code>site:votredomaine.fr/page</code> n’est pas un verdict : Google
            indique que les résultats de l’opérateur <code>site:</code> ne sont
            pas exhaustifs. Son absence ne prouve donc pas la non-indexation. La{" "}
            <OfficialSource href="https://developers.google.com/search/docs/monitor-debug/search-operators/all-search-site?hl=fr">
              documentation officielle de l’opérateur site:
            </OfficialSource>{" "}
            renvoie vers l’inspection d’URL pour un diagnostic plus fiable.
          </p>

          <InfoBox variant="blue" title="Vous cherchez une fiche Google Maps ?">
            <p className="m-0">
              Ce parcours concerne les pages web. Si votre problème touche une
              fiche établissement, séparez d’abord les deux objets : l’URL de la
              page d’un côté, le nom de la fiche locale de l’autre.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="exploration"
          number="02"
          label="Contrôle 1"
          title="Google a-t-il trouvé et ouvert cette page ?"
        >
          <p>
            Google décrit trois grandes étapes : exploration, indexation puis
            diffusion des résultats. Il précise aussi qu’aucune de ces étapes
            n’est garantie pour une page donnée. Pendant l’exploration, ses
            systèmes découvrent des URL et tentent de récupérer leur contenu.
            Cette séquence est présentée dans le guide officiel{" "}
            <OfficialSource href="https://developers.google.com/search/docs/fundamentals/how-search-works?hl=fr">
              Comment fonctionne la recherche Google
            </OfficialSource>
            .
          </p>

          <p>
            Ouvrez Search Console, sélectionnez la bonne propriété, puis collez
            l’URL complète dans l’inspection. L’écran principal décrit la
            version connue de Google. Le test en direct vérifie si la version
            disponible maintenant peut être récupérée ; il ne remplace pas
            l’état indexé. Il ne peut pas non plus confirmer qu’une page est
            déjà dans l’index ni détecter les doublons comme le fait la vue de
            l’index. Google documente cette différence dans l’
            <OfficialSource href="https://support.google.com/webmasters/answer/9012289?hl=fr">
              aide de l’inspection d’URL
            </OfficialSource>
            .
          </p>

          <GuideTable
            caption="Les quatre informations à relever dans l’inspection"
            headers={[
              "Champ",
              "Information à relever",
              "Ce que cela n’établit pas",
            ]}
            rows={[
              [
                "Adresse connue",
                "URL connue ou inconnue dans l’inspection",
                "Une URL connue n’est pas forcément indexée",
              ],
              [
                "Dernière exploration",
                "Date affichée ou absence de date",
                "La prochaine date d’exploration",
              ],
              [
                "Récupération",
                "Réussite ou motif exact de l’échec",
                "La qualité éditoriale de la page",
              ],
              [
                "Accès",
                "Blocage robots, réponse serveur ou redirection observée",
                "L’adresse principale finalement retenue",
              ],
            ]}
          />

          <h3>Si l’adresse est inconnue</h3>
          <p>
            Cherchez un lien interne qui mène réellement à la page, puis la
            bonne URL dans le sitemap soumis. Un sitemap aide Google à découvrir
            des pages, mais ne garantit ni leur exploration ni leur indexation.
            Voir la{" "}
            <OfficialSource href="https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview?hl=fr">
              documentation officielle sur les sitemaps
            </OfficialSource>
            . Le sitemap doit contenir l’adresse que vous souhaitez voir retenue
            comme principale, plutôt que toutes ses variantes : Google le
            considère comme une indication plus faible qu’une redirection ou une
            balise canonique. Une URL orpheline, uniquement connue par une
            ancienne campagne ou par votre historique de navigateur, peut rester
            difficile à découvrir.
          </p>

          <h3>Si la récupération échoue</h3>
          <p>
            Commencez par le motif affiché. Une interdiction dans les règles
            d’exploration, une erreur serveur, une boucle de redirection ou une
            page introuvable nécessitent des corrections différentes. Le test en
            direct permet ensuite de vérifier la version corrigée. Une nouvelle
            demande d’exploration devient utile lorsque le défaut visé a
            disparu.
          </p>

          <InfoBox
            variant="amber"
            title="Distinguez l’état enregistré du test en direct"
          >
            <p className="m-0">
              Votre navigateur peut disposer d’une session, de cookies ou d’un
              accès que Google n’a pas. À l’inverse, un échec de récupération
              actuel ne prouve pas qu’une ancienne version a déjà disparu de
              l’index. Gardez séparément le résultat de la vue Index Google,
              celui du test en direct et l’URL exacte testée.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="indexation"
          number="03"
          label="Contrôle 2"
          title="Quelle version de la page Google a-t-il indexée ?"
        >
          <p>
            Une récupération réussie ne signifie pas que cette URL a été
            indexée. À l’étape suivante, Google analyse le contenu, les balises
            principales et les versions proches, puis peut choisir une autre URL
            comme version principale. L’inspection distingue notamment l’adresse
            canonique déclarée par le site et celle sélectionnée par Google. Ces
            champs figurent dans l’
            <OfficialSource href="https://support.google.com/webmasters/answer/9012289?hl=fr">
              aide officielle de l’inspection
            </OfficialSource>
            .
          </p>

          <h3>
            Lisez le motif, la consigne noindex et les deux adresses principales
          </h3>
          <ol>
            <li>
              <strong>État d’indexation.</strong> Écrivez le libellé complet,
              sans le résumer par « problème SEO ».
            </li>
            <li>
              <strong>Instruction noindex.</strong> Une instruction
              <code> noindex</code> demande aux moteurs de ne pas conserver la
              page dans leurs résultats. Google en détaille le fonctionnement
              dans sa documentation sur la{" "}
              <OfficialSource href="https://developers.google.com/search/docs/crawling-indexing/block-indexing?hl=fr">
                règle noindex
              </OfficialSource>
              . Pour que Google lise cette instruction, la page doit rester
              accessible à l’exploration : une interdiction dans
              <code> robots.txt</code> peut empêcher Googlebot de voir le
              <code> noindex</code>. Vérifiez séparément les deux réglages, puis
              testez la version en direct après une correction volontaire.
            </li>
            <li>
              <strong>Adresse canonique déclarée.</strong> C’est la version que
              votre site présente comme principale.
            </li>
            <li>
              <strong>Adresse canonique choisie par Google.</strong> Si elle est
              différente, inspectez aussi cette adresse pour comparer les deux
              versions.
            </li>
          </ol>

          <p>
            Si la page est exclue parce qu’une autre version a été retenue, la
            question utile devient : ces deux URL répondent-elles au même besoin
            ? Si oui, les redirections, la balise canonique et les liens
            internes doivent désigner la même version principale. Si non, leur
            rôle doit être réellement distinct dans le contenu, les liens
            internes et la structure du site. Le simple changement d’un titre ne
            garantit pas que Google modifiera son choix.
          </p>

          <InfoBox
            variant="blue"
            title="Dans Performances, suivez l’adresse principale choisie par Google"
          >
            <p className="m-0">
              Search Console attribue la plupart des impressions et clics à
              l’adresse canonique choisie par Google, pas à ses doublons. Si
              cette adresse est différente et que ce choix vous convient, ouvrez
              une nouvelle fiche avec l’adresse canonique. Si ce choix est
              inattendu, arrêtez-vous ici et corrigez la divergence avant de
              conclure qu’une URL n’a aucune impression. Voir l’aide sur l’
              <OfficialSource href="https://support.google.com/webmasters/answer/17011259?hl=fr">
                attribution des données par page
              </OfficialSource>
              .
            </p>
          </InfoBox>

          <h3>
            Demandez une nouvelle exploration seulement après la correction
          </h3>
          <p>
            Google indique que le traitement d’une demande peut prendre de
            quelques jours à quelques semaines, sans garantir l’inclusion de la
            page. Répéter la demande ne l’accélère pas. Ces limites figurent
            dans la documentation sur la{" "}
            <OfficialSource href="https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl?hl=fr">
              demande de nouvelle exploration
            </OfficialSource>
            . Le relevé doit donc contenir la correction, la date de demande et
            la date du prochain contrôle, sans annoncer une date d’apparition.
          </p>

          <GuidePremiumMemo
            eyebrow="Décision d’indexation"
            title="La cause affichée détermine la correction"
          >
            <ul>
              <li>récupération impossible : rétablir d’abord l’accès ;</li>
              <li>noindex involontaire : retirer la consigne puis tester ;</li>
              <li>autre canonique : comparer les deux versions ;</li>
              <li>
                motif encore incompris : conserver le relevé et faire auditer.
              </li>
            </ul>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="impressions"
          number="04"
          label="Contrôle 3"
          title="Une URL indexée peut rester absente de la recherche que vous visez"
        >
          <p>
            Le message « l’URL est sur Google » dans l’inspection signifie que
            la page peut être éligible à l’affichage ; Google précise que cela
            ne garantit pas qu’elle apparaîtra dans tous les résultats. Passez
            donc au rapport Performances pour vérifier une URL et une recherche
            sur une période définie. La documentation de l’
            <OfficialSource href="https://support.google.com/webmasters/answer/9012289?hl=fr">
              inspection d’URL
            </OfficialSource>{" "}
            explicite cette limite.
          </p>

          <p>
            Dans Search Console, ouvrez le rapport Performances, puis les
            résultats de recherche. Fixez d’abord la période, le pays,
            l’appareil et le type de recherche. Filtrez la page avec l’adresse
            canonique relevée dans l’inspection et relevez ses totaux. La
            recherche exacte — appelée « requête » dans le rapport — vient en
            dernier. Vous garderez ainsi la différence entre « cette page est
            affichée pour d’autres recherches » et « aucune donnée n’est visible
            pour celle-ci ». Google définit une impression comme l’affichage ou
            l’accès potentiel à un lien dans un résultat, selon le type de
            résultat, et documente les filtres dans l’
            <OfficialSource href="https://support.google.com/webmasters/answer/7576553?hl=fr">
              aide du rapport Performances
            </OfficialSource>
            .
          </p>

          <GuideTable
            caption="Filtres à conserver pour que deux contrôles restent comparables"
            headers={["Dimension", "Valeur à noter", "Erreur fréquente"]}
            rows={[
              [
                "1. Contexte",
                "Période, pays, appareil et type de recherche",
                "Changer le contexte pendant le contrôle",
              ],
              [
                "2. Page",
                "URL canonique Google et total de la page",
                "Filtrer un doublon ou lire le total du site",
              ],
              [
                "3. Requête",
                "Expression exacte et résultat après ajout du filtre",
                "Remplacer l’absence de ligne par un zéro certain",
              ],
            ]}
          />

          <h3>Une requête absente du tableau ne prouve pas zéro impression</h3>
          <p>
            Pour protéger la confidentialité, certaines requêtes sont
            anonymisées et ne figurent pas dans les tableaux. Google explique
            aussi que des limites de lignes et des différences entre totaux
            peuvent exister. Lorsque vous appliquez un filtre de requête, ces
            requêtes anonymisées ne sont plus comprises dans le total filtré.
            Écrivez donc « aucune donnée visible avec ces filtres » plutôt que «
            zéro impression prouvée » lorsque la requête n’apparaît pas. Voir
            l’aide officielle sur les{" "}
            <OfficialSource href="https://support.google.com/webmasters/answer/17011259?hl=fr">
              requêtes anonymisées et les limites des données
            </OfficialSource>
            .
          </p>

          <InfoBox
            variant="emerald"
            title="Des impressions changent la nature du problème"
          >
            <p className="m-0">
              Si l’adresse canonique reçoit des impressions pour la recherche et
              la période choisies, revenir à une demande d’indexation n’est plus
              la première réponse. Relevez maintenant les clics avec les mêmes
              filtres. Ce constat reste propre à l’adresse canonique : il ne
              s’applique pas séparément à une URL en double que Google a
              regroupée sous cette adresse.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="clics"
          number="05"
          label="Contrôle 4"
          title="Ce que les clics disent — et ne disent pas"
        >
          <p>
            Un clic dans le rapport Performances correspond à une action qui
            conduit l’internaute depuis un résultat Google vers une page hors de
            Google, avec des règles qui peuvent varier selon le type de
            résultat. Lisez le nombre avec exactement les mêmes filtres que les
            impressions. Les définitions et particularités se trouvent dans la{" "}
            <OfficialSource href="https://support.google.com/webmasters/answer/7576553?hl=fr">
              documentation du rapport Performances
            </OfficialSource>
            .
          </p>

          <p>
            Des impressions sans clic prouvent seulement que la page a été
            proposée sans être choisie dans ce relevé. Elles ne disent pas si la
            demande est forte, si la position était stable, si le résultat
            répondait à l’intention, ni si les autres résultats étaient plus
            attractifs. Relevez le titre et l’extrait visibles. Ce constat seul
            ne justifie ni une refonte ni une production massive de contenus.
          </p>

          <GuideTable
            caption="Frontière entre ce guide et le diagnostic suivant"
            headers={[
              "Constat",
              "Conclusion raisonnable",
              "À examiner ensuite",
            ]}
            rows={[
              [
                "Aucune impression visible",
                "Le rapport ne montre pas la page pour cette recherche et ces filtres",
                "Vérifier formulation, filtres, intention et pages candidates",
              ],
              [
                "Impressions, aucun clic visible",
                "La page a été proposée mais aucun clic n’est visible dans ce relevé",
                "Étudier résultat affiché, contexte concurrentiel et adéquation",
              ],
              [
                "Impressions et clics",
                "Le chemin technique a abouti au moins une fois dans ce relevé",
                "Mesurer séparément trafic utile, demandes et valeur commerciale",
              ],
            ]}
          />

          <GuidePremiumMemo
            eyebrow="Limite volontaire"
            title="Le guide s’arrête avant « indexé mais sans trafic »"
          >
            <p className="m-0">
              Une fois des impressions observées, la suite demande une analyse
              de la recherche, du résultat affiché, des pages concurrentes et de
              l’objectif commercial. Cette fiche classe le problème ; elle ne
              remplace pas cette étude.
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="fiche"
          number="06"
          label="Outil local"
          title="Rassemblez vos constats dans une fiche datée"
        >
          <p>
            Une capture sans URL, sans filtre et sans date perd vite son sens.
            La fiche ci-dessous regroupe l’identité du contrôle et le premier
            point à reprendre. Elle fonctionne dans votre navigateur : aucune
            valeur n’est envoyée à Hagnéré Code, enregistrée sur un serveur ou
            récupérée automatiquement dans Search Console.
          </p>

          <ul className="not-prose my-7 grid list-none gap-3 p-0 sm:grid-cols-2">
            <ReadingCard
              icon={Bot}
              title="Exploration"
              question="Google connaît-il l’adresse et a-t-il pu ouvrir la page ?"
              source="date, récupération, motif"
            />
            <ReadingCard
              icon={Database}
              title="Indexation"
              question="Cette URL est-elle la version retenue ?"
              source="vue Index Google, noindex, deux canoniques"
            />
            <ReadingCard
              icon={FileSearch}
              title="Impressions"
              question="La page est-elle proposée pour cette recherche ?"
              source="canonique, total page, requête, contexte"
            />
            <ReadingCard
              icon={MousePointerClick}
              title="Clics"
              question="Le résultat a-t-il été choisi dans ce même relevé ?"
              source="clics avec filtres inchangés"
            />
          </ul>

          <SearchVisibilityDiagnostic />

          <p>
            Vous pouvez copier ou imprimer la fiche. Relisez-la avant de la
            transmettre : elle peut contenir une URL non publique ou des notes
            internes. Pour ouvrir Search Console à un intervenant, créez un
            accès utilisateur avec le rôle nécessaire, sans partager votre
            compte. Google détaille les niveaux dans l’aide sur les{" "}
            <OfficialSource href="https://support.google.com/webmasters/answer/7687615?hl=fr">
              utilisateurs et autorisations
            </OfficialSource>
            .
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="decision"
          number="07"
          label="Suite proportionnée"
          title="Quelle suite choisir après le diagnostic ?"
        >
          <p>
            Votre fiche doit déboucher sur une seule action à la fois. S’il
            reste une étape inconnue, complétez le constat. Si un défaut précis
            empêche l’exploration ou l’indexation, corrigez-le puis utilisez le
            test en direct. Une page déjà indexée avec des impressions demande
            une autre analyse, pas une nouvelle demande d’indexation.
          </p>

          <GuideTable
            caption="Décision à prendre selon le premier contrôle non confirmé"
            headers={["Premier arrêt", "Action proportionnée", "À éviter"]}
            rows={[
              [
                "Exploration",
                "Rétablir la découverte ou corriger le motif de récupération",
                "Réécrire toute la page avant de la rendre accessible",
              ],
              [
                "Indexation",
                "Traiter le motif, noindex ou le choix d’une autre version",
                "Répéter une demande d’indexation sans correction",
              ],
              [
                "Impressions",
                "Vérifier filtres et ouvrir l’analyse de la recherche visée",
                "Déduire un volume nul d’une ligne absente",
              ],
              [
                "Clics",
                "Conserver le relevé et examiner le résultat réellement affiché",
                "Promettre qu’un changement de titre suffira",
              ],
            ]}
          />

          <h3>
            Réunissez les éléments qui permettront de reprendre le dossier
          </h3>
          <ul>
            <li>la fiche URL-recherche datée ;</li>
            <li>le motif exact relevé, sans données personnelles ;</li>
            <li>les captures qui montrent URL, période et filtres ;</li>
            <li>la correction déjà tentée et sa date ;</li>
            <li>la personne responsable et la date du recontrôle.</li>
          </ul>

          <p>
            Avec ces éléments, un développeur, un rédacteur ou un consultant
            peut reprendre le dossier sans recommencer par une recherche au
            hasard. Si le premier arrêt reste technique ou si plusieurs URL se
            remplacent, un{" "}
            <Link href="/services/audit-technique">audit technique ciblé</Link>{" "}
            peut vérifier la chaîne. Si l’URL est indexée mais que vous ne savez
            pas quelle recherche ou quelle page travailler, une analyse de{" "}
            <Link href="/services/referencement-google">
              référencement Google
            </Link>{" "}
            devient plus utile.
          </p>

          <InfoBox
            variant="blue"
            title="La bonne réponse peut être de ne rien acheter aujourd’hui"
          >
            <p className="m-0">
              Si une correction vient d’être vérifiée et qu’une nouvelle
              exploration a été demandée, gardez le relevé et attendez le
              recontrôle fixé. Acheter un outil ou lancer une refonte
              n’accélère pas le traitement de cette demande par Google.
            </p>
          </InfoBox>
        </GuidePremiumSection>
      </GuidePremiumLayout>
    </GuidesShell>
  );
}
