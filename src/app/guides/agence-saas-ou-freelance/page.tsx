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
import { formatGuideDate, getGuide } from "@/lib/guides";
import { FREELANCE_MEMBERS, TEAM, TEAM_PUBLIC_COMPOSITION } from "@/lib/team";

const slug = "agence-saas-ou-freelance";
const guide = getGuide(slug);
const breadcrumbName = guide.cardTitle;
const imageAlt =
  "Choisir une équipe SaaS par phase, responsabilité, relais et remise";

export const metadata = buildGuideMetadata(guide, imageAlt);

const structuredData = buildGuideStructuredData(guide, breadcrumbName);

const toc = [
  {
    id: "reponse",
    number: "01",
    label: "Répondre sans classer les statuts",
    shortLabel: "Réponse",
  },
  {
    id: "phase",
    number: "02",
    label: "Nommer la prochaine phase",
    shortLabel: "Phase",
  },
  {
    id: "carte",
    number: "03",
    label: "Attribuer cinq responsabilités",
    shortLabel: "Carte",
  },
  {
    id: "formes",
    number: "04",
    label: "Comparer cinq formes d’équipe",
    shortLabel: "Formes",
  },
  {
    id: "changement",
    number: "05",
    label: "Tester une demande qui change",
    shortLabel: "Changement",
  },
  {
    id: "incident",
    number: "06",
    label: "Tester la reprise d’un incident",
    shortLabel: "Incident",
  },
  {
    id: "budget",
    number: "07",
    label: "Rendre visible le travail client",
    shortLabel: "Charge",
  },
  {
    id: "sortie",
    number: "08",
    label: "Préparer ce qui doit être récupéré",
    shortLabel: "Reprise",
  },
  {
    id: "decision",
    number: "09",
    label: "Choisir ou reporter",
    shortLabel: "Décision",
  },
];

const faqItems = [
  {
    question: "Une agence SaaS est-elle automatiquement plus sûre ?",
    answer: (
      <p>
        Non. Le nom de la structure ne prouve ni les personnes affectées, ni
        leurs accès, ni leur capacité à se remplacer. Vérifiez qui décide,
        réalise, contrôle et relaie chaque travail critique. Demandez ensuite à
        la personne prévue pour le relais d’exécuter une tâche de reprise à
        partir des traces réellement disponibles.
      </p>
    ),
  },
  {
    question: "Un freelance peut-il suffire pour développer un SaaS ?",
    answer: (
      <p>
        Oui, pour une phase resserrée si une personne côté client tranche les
        décisions, si les contrôles nécessaires sont couverts et si un relais
        peut reprendre sans dépendre de la mémoire de l’auteur. Si ces
        conditions manquent, le problème vient de la couverture, pas du statut.
      </p>
    ),
  },
  {
    question: "Faut-il recruter une équipe interne dès le premier SaaS ?",
    answer: (
      <p>
        Pas automatiquement. Une équipe interne est pertinente lorsque les
        compétences, le temps et la responsabilité d’exploitation existent
        réellement. Une organisation hybride ou un prestataire externe peut
        couvrir une phase précise, à condition de garder des décisions et accès
        critiques au bon endroit.
      </p>
    ),
  },
  {
    question: "Qui doit décider des fonctionnalités côté client ?",
    answer: (
      <p>
        Une personne qui comprend le problème, l’acheteur et les contraintes du
        produit doit pouvoir accepter, réduire ou reporter la demande. Le
        prestataire éclaire les conséquences techniques ; il ne remplace pas
        cette décision métier.
      </p>
    ),
  },
  {
    question: "Le paiement du développement transfère-t-il tout le code ?",
    answer: (
      <p>
        Ne le supposez pas. En droit français, l’article L131-3 exige notamment
        d’identifier les droits cédés et de délimiter leur exploitation. Le
        régime de L113-9 vise les logiciels créés par des employés dans les
        conditions du texte ; il ne règle pas par analogie tous les
        indépendants, composants tiers ou contrats. Faites qualifier votre cas.
      </p>
    ),
  },
  {
    question: "Comment choisir ensuite une agence ou un freelance précis ?",
    answer: (
      <p>
        Une fois la forme et la couverture définies, utilisez le guide pour{" "}
        <Link href="/guides/choisir-prestataire-application-metier">
          comparer des prestataires sur un même cas et des preuves vérifiables
        </Link>
        . Cette page ne note aucun candidat et ne compare aucun devis.
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
          { label: "Décision par phase", variant: "dark" },
          { label: "Responsabilités à attribuer", variant: "neutral" },
          { label: "Relais à tester", variant: "success" },
          { label: "Brouillon privé", variant: "muted" },
          {
            label: "Mis à jour le " + formatGuideDate(guide.dateModified),
            variant: "muted",
          },
        ]}
        heroTitle={"Agence SaaS ou freelance\u00a0:"}
        heroTitleEm="quelle équipe choisir ?"
        heroDescription="Commencez par la prochaine phase et regardez ce que chaque personne prend réellement en charge. Un freelance peut suffire à un lot resserré si une personne côté client décide, qu’un contrôle adapté existe et qu’un relais peut reprendre. Une agence peut coordonner plusieurs travaux, mais vous devez connaître les personnes affectées et la manière dont elles se remplacent : le logo ne le prouve pas. L’interne ou l’hybride restent possibles si les compétences et le temps existent. Si le problème n’est pas validé ou si personne ne peut décider côté client, reportez la construction."
        stats={[
          { label: "Phases", value: "4" },
          { label: "Responsabilités", value: "5" },
          { label: "Formes comparées", value: "5" },
          { label: "Exercices", value: "2" },
          { label: "Classement global", value: "Aucun" },
          { label: "Lecture", value: guide.readTimeMin + " min" },
        ]}
        author={{
          initials: TEAM.quentin.initials,
          name: TEAM.quentin.fullName,
          role: TEAM.quentin.role,
          profileUrl: "/equipe#fondateur",
        }}
        toc={toc}
        tocLabel="Sommaire"
        faqTitle="Questions fréquentes sur le choix de l’équipe SaaS"
        faqItems={faqItems}
        faqMeta={{
          eyebrow: "Questions fréquentes",
          titleStart: "Comparer les",
          titleEm: "\u2009responsabilités réelles\u2009",
          titleEnd: "avant les statuts.",
          subtitle:
            "Agence, freelance, interne, décision produit, droits et sélection : vérifiez ce qui change avant de contacter un candidat.",
        }}
        strategyCta={{
          titleStart: "Décrire la phase et",
          titleEm: "\u2009les responsabilités encore sans nom",
          description:
            "Apportez la prochaine phase, les travaux critiques et votre carte décider–réaliser–contrôler–relayer–remettre. La première réponse peut être de limiter le lot, de garder une partie en interne ou de reporter ; elle ne vaut ni devis automatique, ni garantie de disponibilité.",
          badges: [
            "Un seul périmètre de phase",
            "Inconnues conservées",
            "Aucun statut favorisé",
          ],
          ctaLabel: "Décrire mon projet SaaS",
          ctaHref: "/demarrer-un-projet",
          showPhoneCta: false,
        }}
        legalSources={[
          {
            source:
              "Code de la propriété intellectuelle · article L131-3 · Légifrance",
            href: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958",
            description:
              "Le texte exige que chacun des droits cédés soit mentionné distinctement et que son exploitation soit délimitée quant à l’étendue, la destination, le lieu et la durée. Il ne qualifie pas seul toutes les composantes d’un logiciel ou un contrat particulier.",
          },
          {
            source:
              "Code de la propriété intellectuelle · article L113-9 · Légifrance",
            href: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039279818",
            description:
              "Le régime cité vise les logiciels et leur documentation créés par des employés dans l’exercice de leurs fonctions ou d’après les instructions de leur employeur, sous les réserves du texte. Il ne s’étend pas automatiquement à tous les indépendants, sous-traitants ou composants tiers.",
          },
          {
            source: "RGPD · article 28 · EUR-Lex",
            href: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A32016R0679",
            description:
              "Lorsque le traitement entre dans son champ, l’article encadre garanties, écrit, instructions, confidentialité, sécurité, sous-traitants ultérieurs, assistance, retour ou suppression et audit. Tout développeur n’est pas automatiquement sous-traitant pour tout traitement.",
          },
          {
            source: "CNIL · Comment bien identifier son rôle ? · 6 juin 2025",
            href: "https://www.cnil.fr/fr/rgpd-comment-bien-identifier-son-role",
            description:
              "La qualification dépend de qui décide de quoi et qui exécute quoi. La CNIL cite compétence, fiabilité et moyens humains ou techniques, et demande de maîtriser l’identité de la chaîne de sous-traitance ; le contrat ne suffit pas à contredire les faits.",
          },
          {
            source: "CNIL · Sécurité : gérer la sous-traitance · 14 mars 2024",
            href: "https://www.cnil.fr/fr/securite-gerer-la-sous-traitance",
            description:
              "La fiche traite des mesures, responsabilités, authentification, restitution ou destruction, incidents, assistance et vérifications pour les traitements concernés. Les exigences restent liées aux données et risques du cas réel.",
          },
          {
            source:
              "CNIL · Encadrer la maintenance et la fin de vie · 14 mars 2024",
            href: "https://www.cnil.fr/fr/securite-encadrer-la-maintenance-et-la-fin-de-vie-des-materiels-et-logiciels",
            description:
              "Dans le champ de la sécurité des données pendant la maintenance, la CNIL recommande de tracer les interventions et de n’ouvrir l’accès à distance que pour la durée demandée, puis de le refermer. Cette fiche ne prescrit aucune forme générale d’équipe SaaS.",
          },
          {
            source:
              "ANSSI / MesServicesCyber · Externalisation et sécurité des SI · 3 décembre 2010",
            href: "https://messervices.cyber.gouv.fr/guides/externalisation-et-securite-des-systemes-dinformation-un-guide-pour-maitriser-les",
            description:
              "Ce guide institutionnel ancien signale des risques contextuels, mais indique aussi que l’externalisation peut être souhaitable si les compétences internes manquent. Sa date interdit d’en faire un état technique actuel, une obligation générale ou une préférence entre agence et freelance.",
          },
          {
            source: "GitHub Docs · Rôles de dépôt dans une organisation",
            href: "https://docs.github.com/fr/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization",
            description:
              "La documentation illustre des accès distincts, de la lecture à l’administration, pour GitHub Organisations. C’est un exemple produit, pas une prescription d’outil ni une preuve de reprise pour un autre service.",
          },
        ]}
        disclaimer={{
          eyebrow: "Portée du guide",
          title:
            "Une carte d’organisation, pas un avis juridique ou une garantie",
          description:
            "Les deux scénarios, les six travaux et les personnes sont entièrement fictifs. Les sources juridiques et de sécurité sont limitées à leurs champs propres ; elles ne prouvent ni conformité, ni continuité, ni résultat commercial. Cette page reste privée pendant sa revue : aucune date de première publication n’est inventée, et sa présence dans le code ne prouve ni déploiement, ni publication, ni indexation.",
        }}
        relatedGuides={[
          {
            label: "Définir ce que le premier test SaaS doit contenir",
            href: "/guides/mvp-saas-quoi-inclure",
          },
          {
            label: "Décider le prochain lot de fonctionnalités",
            href: "/guides/prioriser-fonctionnalites-mvp-saas",
          },
          {
            label: "Comparer ensuite des candidats sur le même cas",
            href: "/guides/choisir-prestataire-application-metier",
          },
        ]}
        relatedGuidesLabel="3 décisions voisines, sans les mélanger"
      >
        <GuidePremiumSection
          id="reponse"
          number="01"
          label="Réponse directe"
          title="Choisissez selon les responsabilités réellement couvertes"
        >
          <p>
            Un freelance est une option raisonnable pour une phase resserrée
            lorsque le client garde la décision produit, qu’un contrôle adapté
            existe et qu’un relais a déjà les accès et les traces nécessaires.
            Une agence devient pertinente quand plusieurs travaux doivent être
            coordonnés, à condition de connaître les personnes affectées et la
            manière dont elles se remplacent. L’interne convient si les
            compétences et le temps existent ; l’hybride si la frontière entre
            client et extérieur est explicite.
          </p>
          <p>
            Aucune de ces formes ne corrige un problème encore flou ou l’absence
            d’une personne côté client capable de dire oui, non ou plus tard.
            Dans ce cas, reportez la construction et validez d’abord le problème
            ou la décision. Le guide sur{" "}
            <Link href="/guides/prioriser-fonctionnalites-mvp-saas">
              la priorisation du prochain lot
            </Link>{" "}
            traite cette étape sans la confondre avec le choix d’équipe.
          </p>

          <Image
            src="/guides/agence-saas-ou-freelance/equipe-responsabilites-16x9.svg"
            alt="Cinq responsabilités — décider, réaliser, contrôler, relayer et remettre — appliquées aux formes freelance, agence, interne, hybride et report"
            width={1600}
            height={900}
            sizes="(max-width: 1024px) 100vw, 760px"
            className="not-prose my-8 h-auto w-full rounded-2xl border border-zinc-200 dark:border-zinc-800"
            priority
          />

          <GuidePremiumMemo title="La phrase à compléter avant tout rendez-vous">
            <p>
              « Pour la phase ______, ______ décide ; ______ réalise ; ______
              contrôle ; ______ peut relayer ; l’entreprise récupère ______. »
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="phase"
          number="02"
          label="Prochaine étape"
          title="Choisissez l’équipe pour la prochaine phase"
        >
          <p>
            Validation, construction, mise en ligne et exploitation ne demandent
            pas exactement les mêmes responsabilités. N’achetez pas une équipe
            théorique « de bout en bout » sans savoir quelle phase commence.
            Nommez un résultat observable, puis les travaux qui rendent ce
            résultat possible. Le contenu fonctionnel du premier test reste
            traité dans le guide{" "}
            <Link href="/guides/mvp-saas-quoi-inclure">
              sur le socle d’un MVP SaaS
            </Link>
            .
          </p>

          <GuideTable
            caption="Les quatre phases et les responsabilités à rendre visibles"
            headers={[
              "Phase",
              "Résultat attendu",
              "Travaux à nommer",
              "Quand s’arrêter",
            ]}
            rows={[
              [
                "Validation",
                "Un problème et une promesse assez précis pour décider du test suivant.",
                "Entretiens, prototype, mesure, décision d’arrêter ou continuer.",
                "Personne ne peut dire quel résultat invaliderait l’idée.",
              ],
              [
                "Construction",
                "Un petit lot utilisable, contrôlé et compréhensible.",
                "Conception, code, données, sécurité, tests, documentation.",
                "Le lot ou l’acheteur reste indécidable.",
              ],
              [
                "Mise en ligne",
                "Un service accessible aux personnes prévues avec un retour arrière possible.",
                "Comptes, configuration, migration, contrôle, assistance initiale.",
                "Aucun décideur n’autorise la mise en ligne ou le repli.",
              ],
              [
                "Exploitation et évolution",
                "Un service observé, corrigé et modifié sans dépendre d’une seule mémoire.",
                "Surveillance, incident, support, mises à jour, décisions d’évolution.",
                "Le relais n’a ni accès, ni procédure, ni temps confirmé.",
              ],
            ]}
          />

          <InfoBox
            variant="amber"
            title="Une phase n’est pas une promesse de délai"
          >
            <p>
              Les quatre phases organisent les responsabilités. Elles ne fixent
              ni durée, ni prix, ni taille d’équipe. Ces éléments restent à
              confirmer sur un périmètre réel, avec les dépendances et
              contraintes du produit.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="carte"
          number="03"
          label="Carte à remplir"
          title="Pour chaque travail critique, nommez qui décide, réalise, contrôle, relaie et remet"
        >
          <p>
            Une ligne représente un travail qui peut bloquer la phase : accepter
            une règle d’accès, développer un écran, autoriser une mise en ligne,
            surveiller le service, répondre à un incident ou préparer une
            reprise. Les cinq champs doivent contenir un nom ou un rôle confirmé
            et, pour le relais, les accès et la trace utilisables. « L’agence »
            ou « le freelance » n’est pas un nom opérationnel.
          </p>

          <GuideTable
            caption="Les cinq champs non compensables de la carte"
            headers={["Champ", "Question concrète", "Preuve minimale"]}
            rows={[
              [
                "Décider",
                "Qui accepte, refuse ou reporte ?",
                "Personne nommée et limite de sa décision.",
              ],
              [
                "Réaliser",
                "Qui fait le travail ?",
                "Personne ou rôle affecté, disponibilité à confirmer.",
              ],
              [
                "Contrôler",
                "Qui vérifie le résultat et les refus ?",
                "Cas de contrôle, seuil ou critère d’acceptation.",
              ],
              [
                "Relayer",
                "Qui reprend si l’auteur manque ?",
                "Accès ouverts au bon niveau et tâche de reprise exécutée par le relais.",
              ],
              [
                "Remettre",
                "Que récupère l’entreprise ?",
                "Code, comptes, données, historique et procédure nommés.",
              ],
            ]}
          />

          <Image
            src="/guides/agence-saas-ou-freelance/carte-responsabilites-4x3.svg"
            alt="Exemple fictif de six lignes : quatre complètes et deux incomplètes, avec contrôle quatre plus deux égale six"
            width={1200}
            height={900}
            sizes="(max-width: 1024px) 100vw, 720px"
            className="not-prose my-8 h-auto w-full rounded-2xl border border-zinc-200 dark:border-zinc-800"
          />

          <FormulaBox>
            {[
              "CONTRÔLE DE COMPLÉTUDE — EXEMPLE ENTIÈREMENT FICTIF",
              "",
              "lignes incomplètes = lignes critiques − lignes dont les cinq champs sont tous renseignés",
              "6 − 4 = 2 lignes incomplètes",
              "contrôle inverse : 4 + 2 = 6",
            ].join("\n")}
          </FormulaBox>

          <p>
            Cette carte est une méthode éditoriale de complétude, ni une norme,
            ni une garantie. Le calcul ne note ni compétence, ni qualité, ni
            disponibilité, ni coût. Quatre lignes complètes ne compensent pas
            les deux absences : traitez-les, réduisez la phase ou reportez-les
            explicitement. Une ligne remplie n’est pas une preuve : un rôle non
            confirmé reste une hypothèse.
          </p>

          <GuidePremiumMemo title="Modèle copiable pour chaque travail critique">
            <pre className="overflow-x-auto whitespace-pre-wrap rounded-xl bg-white p-4 text-xs leading-relaxed text-zinc-800 ring-1 ring-zinc-200 dark:bg-zinc-950 dark:text-zinc-100 dark:ring-zinc-800">
              {[
                "Travail :",
                "Phase et résultat attendu :",
                "Décide :",
                "Réalise :",
                "Contrôle et cas vérifiés :",
                "Relais, accès et exercice de reprise :",
                "Éléments remis à l’entreprise :",
                "Inconnues et prochaine vérification :",
              ].join("\n")}
            </pre>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="formes"
          number="04"
          label="Même grille de lecture"
          title="Comparez freelance, agence, interne, hybride et report sur les mêmes responsabilités"
        >
          <p>
            Une forme d’équipe décrit une relation de travail ; elle ne garantit
            pas sa couverture. Pour chacune, réécrivez les mêmes lignes et
            rendez visible ce que le client doit encore décider, contrôler ou
            opérer. La bonne forme est celle qui couvre la prochaine phase avec
            des noms confirmés et une sortie praticable, pas celle qui gagne une
            moyenne générale. Un freelance peut organiser un relais documenté ;
            une agence peut malgré tout concentrer la connaissance sur une seule
            personne. Vérifiez les faits de la mission dans les deux cas.
          </p>

          <GuideTable
            caption="Cinq issues comparées sans classement global"
            headers={[
              "Forme",
              "Peut convenir si…",
              "Le client doit encore couvrir…",
              "Mauvais signal",
            ]}
            rows={[
              [
                "Freelance",
                "La phase est resserrée, la décision produit est côté client et un relais réel existe.",
                "Décisions, accès maîtres, contrôle indépendant si nécessaire et continuité.",
                "La reprise dépend seulement de la mémoire de la personne.",
              ],
              [
                "Agence",
                "Plusieurs travaux doivent être coordonnés et les personnes affectées sont explicites.",
                "Décisions métier, disponibilité de ses propres équipes et acceptation finale.",
                "Le remplacement est promis sans nom, accès ni exercice.",
              ],
              [
                "Équipe interne",
                "Les compétences, le temps et la responsabilité d’exploitation existent déjà.",
                "Arbitrage de capacité, contrôles croisés et montée en compétence continue.",
                "Le travail s’ajoute à des personnes déjà saturées.",
              ],
              [
                "Équipe hybride",
                "Le métier et certains accès restent internes, les compétences manquantes sont apportées dehors.",
                "Frontières, décisions, communication et reprise entre les deux côtés.",
                "Chaque partie suppose que l’autre contrôle ou documente.",
              ],
              [
                "Report",
                "Le problème, l’acheteur ou le décideur n’est pas assez clair pour construire.",
                "Le prochain test, sa mesure et l’événement qui rouvrira la décision.",
                "Une équipe est engagée pour produire malgré l’absence de décision.",
              ],
            ]}
          />

          <GuidePremiumCase
            initial="HC"
            eyebrow="Transparence · exemple Hagnéré Code"
            title="Le mot « agence » ne signifie pas « salariés seulement »"
          >
            <p>
              La source publique de l’équipe décrit {TEAM_PUBLIC_COMPOSITION}.
              Elle compte {FREELANCE_MEMBERS.length} freelances long-terme.
              Cette composition montre seulement que plusieurs statuts peuvent
              coopérer ; elle ne prouve ni les personnes, ni la charge, ni le
              relais d’une mission donnée. Ces éléments doivent apparaître dans
              la proposition et le devis. La composition actuelle est à
              revalider sur la <Link href="/equipe">page équipe</Link> si elle
              évolue.
            </p>
          </GuidePremiumCase>

          <p>
            Si vous envisagez Hagnéré Code, la page{" "}
            <Link href="/services/saas-applications-metier">
              SaaS et applications métier
            </Link>{" "}
            décrit l’offre. Une mission très isolée, déjà couverte par un
            indépendant ou une équipe interne autonome, peut mal convenir à
            l’agence.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="changement"
          number="05"
          label="Exercice 1"
          title="Vérifiez qui décide lorsqu’une demande change"
        >
          <GuidePremiumCase
            initial="1"
            eyebrow="Exemple entièrement fictif · aucune expérience client"
            title="Ajouter un rôle « observateur » dans un SaaS B2B"
          >
            <p>
              Le produit permet à un responsable d’inviter des collègues. Une
              demande arrive : ajouter un rôle qui voit les dossiers sans les
              modifier. Aucun client, prix, délai ou résultat Hagnéré Code n’est
              associé à cette scène.
            </p>
          </GuidePremiumCase>

          <ol>
            <li>
              La personne côté client décide si le besoin appartient à la phase
              actuelle ou attend une preuve supplémentaire.
            </li>
            <li>
              La personne qui réalise décrit les effets sur écrans, droits,
              données, tests, assistance et travaux déjà engagés.
            </li>
            <li>
              Le décideur accepte, réduit ou reporte le changement ; la
              conséquence sur le lot est écrite, pas seulement dite.
            </li>
            <li>
              Une personne construit et une autre contrôle les vues autorisées
              ainsi que les modifications qui doivent rester refusées.
            </li>
            <li>
              Le relais reçoit la décision, les cas de contrôle, l’historique et
              la procédure mise à jour, puis exécute lui-même un cas à partir de
              ces éléments.
            </li>
          </ol>

          <InfoBox variant="blue" title="Ce que l’exercice révèle">
            <p>
              Si personne ne peut décider, le prestataire risque de choisir le
              produit à la place du client. Si l’équipe ne sait pas relier le
              changement aux droits et aux contrôles, la forme d’équipe n’est
              pas encore le premier problème à résoudre.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="incident"
          number="06"
          label="Exercice 2"
          title="Vérifiez la reprise d’un incident si la personne qui a conçu le mécanisme est absente"
        >
          <GuidePremiumCase
            initial="2"
            eyebrow="Exemple entièrement fictif · aucune garantie de service"
            title="Des utilisateurs ne peuvent plus se connecter"
          >
            <p>
              Après une mise en ligne, certains utilisateurs restent bloqués. La
              personne qui a conçu le mécanisme de connexion est indisponible.
              L’exercice teste les noms, accès et traces de l’organisation ; il
              ne prouve aucune continuité réelle.
            </p>
          </GuidePremiumCase>

          <Image
            src="/guides/agence-saas-ou-freelance/relais-incident-1x1.svg"
            alt="Exercice fictif où un relais qualifie et traite un incident avec des accès limités au besoin et à la durée définie avant un contrôle distinct"
            width={1000}
            height={1000}
            sizes="(max-width: 1024px) 100vw, 680px"
            className="not-prose mx-auto my-8 h-auto w-full max-w-[680px] rounded-2xl border border-zinc-800"
          />

          <ol>
            <li>
              Une alerte ou un signal utilisateur ouvre l’incident ; une
              personne qualifie l’impact et les personnes concernées.
            </li>
            <li>
              La personne autorisée décide du contournement, du retour en
              arrière ou de la correction selon les éléments disponibles.
            </li>
            <li>
              Le relais utilise l’accès nécessaire, l’historique et la
              procédure. Un accès de maintenance à distance n’est ouvert que
              pour le besoin et la durée définis, puis refermé.
            </li>
            <li>
              Une personne distincte contrôle le rétablissement et les cas qui
              doivent rester refusés ; « la page répond » ne suffit pas.
            </li>
            <li>
              L’équipe consigne l’action, les contrôles, la fermeture de l’accès
              et ce qui reste à surveiller.
            </li>
          </ol>

          <p>
            La recommandation de la CNIL sur la traçabilité des interventions et
            l’ouverture temporaire des accès de maintenance est utilisée ici
            uniquement dans son champ de sécurité des données. Elle ne prouve ni
            délai d’intervention, ni organisation idéale, ni préférence entre
            agence et freelance.
          </p>

          <GuidePremiumMemo title="Deux situations à tester avant de choisir">
            <ul>
              <li>
                <strong>Volume doublé dans le cas testé :</strong> sans supposer
                une panne, qui observe la qualité, le délai et le coût, puis qui
                décide de limiter, renforcer ou reporter ? Le volume de départ,
                le seuil et la réponse restent à confirmer sur le produit réel.
              </li>
              <li>
                <strong>
                  Service ou composant indispensable indisponible :
                </strong>{" "}
                qui détecte la dépendance, contacte le tiers, met en place un
                fonctionnement limité (« mode dégradé ») ou revient en arrière,
                puis contrôle les données et le rétablissement ? Un simple
                tiers, un sous-traitant au sens du RGPD et un sous-traitant
                ultérieur ne se confondent pas ; leur qualification dépend des
                faits.
              </li>
            </ul>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="budget"
          number="07"
          label="Charge réelle"
          title="Comparez le travail restant côté client avant les tarifs"
        >
          <p>
            Deux factures ne sont pas comparables si l’une laisse au client la
            décision produit, les tests, les comptes, l’assistance et la reprise
            tandis que l’autre les couvre. Demandez le montant et le temps
            interne pour la même phase, le même volume et le même niveau de
            service. Tant qu’un poste n’est pas documenté, gardez « à confirmer
            » : l’inconnu n’est ni gratuit, ni inclus.
          </p>

          <GuideTable
            caption="Les charges à attribuer avant de comparer deux organisations"
            headers={["Charge", "Questions", "État sans preuve"]}
            rows={[
              [
                "Besoin, phase et disponibilité client",
                "Qui précise le besoin, tranche, fournit les informations et accepte le résultat ?",
                "À confirmer",
              ],
              [
                "Conception, réalisation, intégration et contrôle",
                "Quelles disciplines, connexions, cas de test et corrections sont inclus ?",
                "À confirmer",
              ],
              [
                "Licences, services et comptes tiers",
                "Un outil déjà payé couvre-t-il le besoin ? Sinon, qui paie, administre, surveille et retire les accès ?",
                "À confirmer",
              ],
              [
                "Migration et mise en ligne",
                "Qui prépare les données, vérifie la reprise, autorise la bascule et le retour arrière ?",
                "À confirmer",
              ],
              [
                "Formation, adoption et assistance",
                "Qui prépare les personnes, répond aux questions et recueille les erreurs d’usage ?",
                "À confirmer",
              ],
              [
                "Maintenance, exploitation et évolution",
                "Qui reçoit le signal, décide, intervient, met à jour et contrôle après la mise en ligne ?",
                "À confirmer",
              ],
              [
                "Sortie et reprise",
                "Qu’est-ce qui est remis, dans quel format et qui exécute la tâche de reprise ?",
                "À confirmer",
              ],
            ]}
          />

          <InfoBox
            variant="amber"
            title="Prix, durée et effectif restent à confirmer"
          >
            <p>
              Aucun corpus ouvert ne permet ici d’établir un prix, une durée ou
              une taille d’équipe universels. Une fois la phase et la carte
              fixées, le guide pour{" "}
              <Link href="/guides/choisir-prestataire-application-metier">
                comparer les propositions sur une base commune
              </Link>{" "}
              traite l’étape suivante.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="sortie"
          number="08"
          label="Droits, données et accès"
          title="Préparez ce qu’une autre équipe devra réellement récupérer"
        >
          <p>
            Une archive de code ne suffit pas à reprendre un service. Il faut
            savoir ouvrir le dépôt, reconstruire la version, administrer les
            comptes nécessaires, comprendre les données, retrouver les décisions
            et contrôler une mise en ligne. La remise devient une preuve
            lorsqu’une personne qui n’a pas créé le mécanisme peut exécuter une
            tâche délimitée et signaler ce qui manque.
          </p>

          <GuideTable
            caption="Inventaire minimal à adapter au produit réel"
            headers={["Famille", "Éléments à nommer", "Contrôle de reprise"]}
            rows={[
              [
                "Code et versions",
                "Dépôts, branches utiles, composants tiers, procédure de construction.",
                "Une version attendue peut être reconstruite sans poste caché.",
              ],
              [
                "Comptes et accès",
                "Propriétaires, rôles, doubles facteurs, récupération, retrait.",
                "L’entreprise garde l’administration appropriée et peut retirer un accès.",
              ],
              [
                "Données",
                "Catégories, emplacements, sauvegardes, export, suppression, rôles et tiers à qualifier.",
                "Les sous-traitants et sous-traitants ultérieurs concernés sont distingués des simples tiers ou composants ; le retour ou la suppression sont testés.",
              ],
              [
                "Décisions et contrôles",
                "Historique, cas attendus, erreurs connues, critères d’acceptation.",
                "Le relais explique pourquoi le système accepte ou refuse un cas.",
              ],
              [
                "Exploitation",
                "Mise en ligne, surveillance, incidents, contacts et fermeture des accès temporaires.",
                "Une tâche de reprise délimitée est exécutée puis consignée.",
              ],
            ]}
          />

          <h3>Ne déduisez pas les droits du paiement</h3>
          <p>
            L’article L131-3 du Code de la propriété intellectuelle prévoit que
            chacun des droits cédés fasse l’objet d’une mention distincte et que
            l’exploitation soit délimitée quant à son étendue, sa destination,
            son lieu et sa durée. L’article L113-9 prévoit un régime pour les
            logiciels créés par des employés dans l’exercice de leurs fonctions
            ou d’après les instructions de l’employeur, sous les réserves du
            texte. Il ne règle pas automatiquement tous les indépendants,
            composants tiers ou contrats. Faites relire le cas réel.
          </p>

          <h3>Qualifiez les rôles relatifs aux données à partir des faits</h3>
          <p>
            La CNIL rappelle que le rôle dépend de qui décide de quoi et qui
            exécute quoi. Lorsque l’article 28 du RGPD s’applique à un
            traitement effectué pour le compte d’un responsable, l’encadrement
            écrit couvre notamment instructions, confidentialité, sécurité,
            sous-traitants ultérieurs, assistance, retour ou suppression et
            vérification. La CNIL demande aussi, dans le cadre qu’elle décrit,
            de connaître l’identité de la chaîne de sous-traitance. Un
            fournisseur, une bibliothèque ou un hébergeur n’est pas pour autant
            automatiquement sous-traitant au sens du RGPD. Aucun prestataire de
            votre produit n’est qualifié ici : demandez l’intervention
            compétente si les rôles restent incertains.
          </p>

          <InfoBox
            variant="blue"
            title="Externalisation : conserver la limite de la source"
          >
            <p>
              Le guide ANSSI/MesServicesCyber ouvert date de 2010. Il aide à
              poser des questions sur la perte de maîtrise, les interventions à
              distance et l’hébergement mutualisé. Le même texte précise que
              sécurité et externalisation ne doivent pas être opposées, et que
              le recours à un prestataire peut être souhaitable lorsque les
              compétences internes manquent. Sa date interdit d’en tirer un état
              technique actuel, une obligation générale ou une préférence
              automatique entre agence, freelance et interne.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="decision"
          number="09"
          label="Choix à ce stade"
          title="Choisissez une forme pour cette phase — ou reportez-la"
        >
          <GuideTable
            caption="Cinq décisions possibles après la carte et les exercices"
            headers={["Décision", "Conditions minimales", "Action suivante"]}
            rows={[
              [
                "Freelance",
                "Phase resserrée, décideur client présent, contrôle et relais praticables.",
                "Confirmer les noms, accès, disponibilité et éléments remis.",
              ],
              [
                "Agence",
                "Plusieurs travaux coordonnés, personnes affectées et remplacement observable.",
                "Faire préciser qui intervient réellement, puis demander au relais d’exécuter une tâche.",
              ],
              [
                "Interne",
                "Compétences, temps et exploitation effectivement assumés.",
                "Protéger la capacité et organiser les contrôles croisés.",
              ],
              [
                "Hybride",
                "Frontière claire entre métier, comptes, technique et exploitation.",
                "Écrire les passages de relais et les décisions de chaque côté.",
              ],
              [
                "Reporter",
                "Problème, acheteur, décideur ou responsabilité critique encore absent.",
                "Nommer le prochain test et l’événement qui rouvrira le choix.",
              ],
            ]}
          />

          <GuidePremiumMemo title="Dernière relecture avant de choisir">
            <ul>
              <li>La phase et son résultat tiennent en une phrase.</li>
              <li>
                Chaque travail critique possède les cinq champs confirmés.
              </li>
              <li>
                Le changement et l’incident ont été testés avec une tâche
                réellement exécutée par le relais.
              </li>
              <li>Le travail restant côté client est visible et accepté.</li>
              <li>
                Code, comptes, données et procédure peuvent être récupérés.
              </li>
            </ul>
          </GuidePremiumMemo>

          <p>
            À ce stade, relisez la phase sous l’angle du travail réel : une
            mission isolée et déjà bien encadrée peut être confiée à une
            personne autonome sans mobiliser une agence, tandis qu’un freelance
            ne devrait pas porter seul la décision produit, le contrôle et la
            continuité. L’interne suppose une capacité vraiment disponible ;
            l’hybride, des frontières et des relais écrits de chaque côté. Si
            personne ne sait encore décider quel problème construire, reportez
            l’engagement.
          </p>
        </GuidePremiumSection>
      </GuidePremiumLayout>
    </GuidesShell>
  );
}
