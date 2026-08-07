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
import type { GuidePremiumFaqCategory } from "@/components/guides/guide-premium-types";
import { GuidesShell } from "@/components/guides/GuidesShell";
import {
  buildGuideMetadata,
  buildGuideStructuredData,
} from "@/lib/guide-page-seo";
import { formatGuideDate, getGuide } from "@/lib/guides";
import { TEAM } from "@/lib/team";
import { AccessRightsReadinessTool } from "./access-rights-readiness-tool";

const guide = getGuide("droits-acces-application-metier");
const breadcrumbName = "Droits d’accès d’une application métier";

export const metadata = buildGuideMetadata(
  guide,
  "Rôles, données, actions, refus et cycle de vie des habilitations",
);

const structuredData = buildGuideStructuredData(guide, breadcrumbName);

const toc = [
  {
    id: "reponse",
    number: "01",
    label: "La réponse courte",
    shortLabel: "Répondre",
  },
  {
    id: "matrice",
    number: "02",
    label: "Construire la matrice",
    shortLabel: "Construire",
  },
  {
    id: "relations",
    number: "03",
    label: "Dépasser les rôles",
    shortLabel: "Préciser",
  },
  {
    id: "refus",
    number: "04",
    label: "Prévoir le refus",
    shortLabel: "Refuser",
  },
  {
    id: "cycle",
    number: "05",
    label: "Gérer les changements",
    shortLabel: "Maintenir",
  },
  {
    id: "journal",
    number: "06",
    label: "Définir la trace",
    shortLabel: "Tracer",
  },
  {
    id: "outil",
    number: "07",
    label: "Relire les décisions",
    shortLabel: "Relire",
  },
  {
    id: "recette",
    number: "08",
    label: "Tester avant réception",
    shortLabel: "Tester",
  },
  {
    id: "cas-fictif",
    number: "09",
    label: "Appliquer à un cas fictif",
    shortLabel: "Appliquer",
  },
];

const faqCategories: GuidePremiumFaqCategory[] = [
  {
    key: "conception",
    num: "01",
    label: "Conception",
    items: [
      {
        question: "Quelle différence entre authentification et autorisation ?",
        answer:
          "L’authentification vérifie qui se présente ; l’autorisation décide ensuite si cette personne peut effectuer une action sur un objet précis. Un utilisateur correctement connecté ne doit donc pas accéder automatiquement à toutes les données ou fonctions.",
      },
      {
        question: "Faut-il toujours un rôle par métier ?",
        answer:
          "Non. Quelques fonctions de travail stables peuvent suffire. Lorsque le droit dépend du propriétaire du dossier, de l’équipe, de l’établissement, de l’état ou d’une délégation, ajoutez cette relation à la règle au lieu de multiplier les rôles sans limite.",
      },
      {
        question:
          "Le moindre privilège est-il une obligation légale générale ?",
        answer:
          "Non, pas sous cette formulation universelle. C’est une recommandation de conception soutenue par la CNIL dans le périmètre des données personnelles et par OWASP comme pratique technique. Les obligations juridiques exactes dépendent des données, du traitement, du secteur et du contexte.",
      },
    ],
  },
  {
    key: "exploitation",
    num: "02",
    label: "Exploitation",
    items: [
      {
        question: "À quelle fréquence faut-il revoir les droits ?",
        answer:
          "Revoyez-les lors de chaque arrivée, mobilité, remplacement ou départ. Pour les traitements de données personnelles, la CNIL recommande aussi une revue régulière, au moins annuelle. Cette fréquence est un repère de recommandation, pas une loi universelle pour tous les objets métier.",
      },
      {
        question: "Comment traiter un accès d’urgence ?",
        answer:
          "Décidez avant l’urgence qui peut l’accorder, pour quelle durée, avec quelle portée et quel contrôle après usage. Le droit temporaire doit expirer ou être retiré ; l’urgence ne doit pas créer un administrateur permanent.",
      },
      {
        question: "Un compte partagé est-il acceptable ?",
        answer:
          "Évitez-le dès qu’un compte individuel est possible. Pour les traitements de données personnelles, la CNIL déconseille les comptes partagés non tracés, non validés et non revus. Une exception réellement incontournable doit être justifiée, limitée, validée et contrôlée.",
      },
    ],
  },
  {
    key: "preuves",
    num: "03",
    label: "Preuves",
    items: [
      {
        question: "Que faut-il tester pour chaque droit ?",
        answer:
          "Testez un parcours autorisé et un parcours refusé sur l’objet réellement visé. Changez aussi l’identifiant du dossier, la relation, l’établissement ou l’état lorsque ces éléments modifient la décision. Le contrôle doit être appliqué côté serveur à chaque requête concernée.",
      },
      {
        question: "Un journal d’audit prouve-t-il la conformité ?",
        answer:
          "Non. Une trace peut aider à attribuer ou reconstituer une action, mais elle ne prouve ni l’exhaustivité des événements, ni leur intégrité, ni leur analyse, ni la conformité globale. Elle n’est pas non plus une alerte tant qu’aucun mécanisme ne la détecte et ne la transmet.",
      },
      {
        question:
          "Le droit d’accès de l’article 15 du RGPD est-il une habilitation applicative ?",
        answer:
          "Non. Ici, « droit d’accès » signifie autorisation d’utiliser une fonction ou une donnée dans l’application. Le droit de la personne concernée à obtenir ses données et des informations sur leur traitement relève notamment de l’article 15 du RGPD et demande un traitement distinct.",
      },
    ],
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
          { label: "Guide pratique 2026", variant: "dark" },
          { label: "Application métier", variant: "neutral" },
          { label: "Matrice sans score", variant: "success" },
          {
            label: `Mis à jour le ${formatGuideDate(guide.dateModified)}`,
            variant: "muted",
          },
        ]}
        heroTitle="Qui peut voir et modifier quoi"
        heroTitleEm="dans votre application métier"
        heroTitleSuffix="?"
        heroDescription="Partez des objets et des actions avant de créer un profil « utilisateur » trop large. Écrivez ce qui est autorisé, refusé ou encore à décider pour chaque fonction de travail, puis ajoutez la portée, les changements de poste et les tests de refus. Une inconnue sensible bloque la fonction ; aucun score ne la compense."
        stats={[
          { label: "Dimensions de la matrice", value: "10" },
          { label: "Contrôles de l’outil", value: "7" },
          { label: "Score global", value: "Aucun" },
          { label: "Réponses de l’outil", value: "Non envoyées" },
          { label: "Lecture", value: `${guide.readTimeMin} min` },
        ]}
        author={{
          initials: TEAM.quentin.initials,
          name: TEAM.quentin.fullName,
          role: TEAM.quentin.role,
          profileUrl: "/equipe#fondateur",
        }}
        sidebarHeroCta={{
          eyebrow: "Cadrage d’un outil interne",
          titleStart: "Faire relire",
          titleEm: "les règles d’accès",
          description:
            "Apportez un objet critique, ses actions et les personnes qui décident. Le cadrage transforme les règles en fonctions et critères de réception ; il ne certifie pas la conformité.",
          benefits: [
            "Rôles, objets et portée explicités",
            "Cas autorisés et refusés préparés",
            "Inconnues et responsabilités conservées",
          ],
          primaryCtaLabel: "Découvrir les outils internes",
          primaryCtaHref: "/services/outils-internes-sur-mesure",
        }}
        toc={toc}
        tocLabel="Matrice des droits"
        mobileCtaLabel="Faire relire la matrice"
        sidebarContextCta={{
          eyebrow: "Avant le développement",
          title: "Préparer une règle que le métier peut valider",
          description:
            "Choisissez un objet critique et apportez les décisions, refus, délégations et tests attendus.",
          benefits: [
            "Aucun rôle inventé par la technique",
            "Refus et erreurs prévus",
            "Cycle de vie attribué",
          ],
          ctaLabel: "Faire relire la matrice",
          ctaHref: "/demarrer-un-projet",
        }}
        faqCategories={faqCategories}
        faqMeta={{
          eyebrow: "Questions fréquentes",
          titleStart: "Vos questions sur",
          titleEm: "les droits applicatifs",
          titleEnd: "avant développement.",
          subtitle:
            "Des réponses bornées sur les rôles, les délégations, les revues, les journaux et le RGPD.",
          ctaTitle: "Faire relire une matrice déjà remplie",
          ctaDescription:
            "Décrivez les fonctions et décisions sans transmettre de donnée personnelle, de nom de salarié ni de secret.",
          ctaLabel: "Décrire le besoin",
          ctaHref: "/demarrer-un-projet",
        }}
        legalSources={[
          {
            source: "CNIL · Gérer les habilitations, 13 mars 2024",
            href: "https://www.cnil.fr/fr/securite-gerer-les-habilitations",
            description:
              "Recommandations dans le périmètre des données personnelles : profils limités aux missions, validation par un responsable, retrait au changement ou départ, revue régulière et implication des métiers.",
          },
          {
            source: "CNIL · Guide sécurité, mise à jour 2026",
            href: "https://cnil.fr/sites/default/files/2026-05/cnil_guide_securite_personnelle.pdf",
            description:
              "PDF canonique courant portant « Version 2024 — mise à jour 2026 ». Sa fiche 5 couvre les habilitations et le cycle arrivée, mobilité et départ pour les traitements de données personnelles.",
          },
          {
            source: "CNIL · Tracer les opérations, 14 mars 2024",
            href: "https://www.cnil.fr/fr/securite-tracer-les-operations",
            description:
              "Recommandations de journalisation des opérations sur les données personnelles : création, consultation, partage, modification et suppression, avec auteur, date, heure, nature et référence.",
          },
          {
            source: "RGPD · articles 5, 25 et 32",
            href: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32016R0679",
            description:
              "Texte normatif dans le périmètre des données personnelles. L’article 25(2) inclut l’accessibilité dans la protection par défaut ; l’article 32 relie les mesures au risque pour les droits et libertés.",
          },
          {
            source: "RGPD · article 15",
            href: "https://eur-lex.europa.eu/eli/reg/2016/679/art_15/oj",
            description:
              "Droit de la personne concernée d’obtenir l’accès à ses données personnelles et aux informations prévues par le texte. Ce droit se distingue d’une habilitation applicative.",
          },
          {
            source: "OWASP · Authorization Cheat Sheet",
            href: "https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html",
            description:
              "Recommandation technique non normative : moindre privilège, refus par défaut, contrôle à chaque requête, règles fondées sur attributs ou relations lorsque les rôles seuls ne suffisent pas, et tests d’autorisation.",
          },
          {
            source: "OWASP · ASVS 5.0.0, 30 mai 2025",
            href: "https://owasp.org/www-project-application-security-verification-standard/",
            description:
              "Version stable du référentiel communautaire de vérification. Il aide à sélectionner des exigences testables ; il ne certifie ni l’application ni l’organisation.",
          },
        ]}
        disclaimer={{
          eyebrow: "Limites",
          title:
            "La matrice prépare une décision ; elle ne valide pas le système",
          description:
            "Le contenu et l’outil local ne voient ni vos données, ni vos règles internes, ni le code exécuté. Les obligations juridiques, contractuelles ou sectorielles et la bonne application technique doivent être qualifiées dans votre contexte.",
        }}
        relatedGuides={[
          {
            label: "Sécurité d’une application métier",
            href: "/guides/securite-application-metier",
          },
          {
            label: "Plan de recette d’une application métier",
            href: "/guides/plan-recette-application-metier",
          },
          {
            label: "Choisir un prestataire d’application métier",
            href: "/guides/choisir-prestataire-application-metier",
          },
        ]}
        relatedGuidesLabel="Poursuivre le cadrage"
      >
        <GuidePremiumSection
          id="reponse"
          number="01"
          label="Réponse courte"
          title="Une règle d’accès relie une personne, une action et un objet"
        >
          <p>
            Avant de nommer un modèle technique, votre équipe doit répondre à
            des questions ordinaires. Une personne peut-elle consulter ce
            dossier, modifier cette commande, valider cette dépense, exporter
            cette liste ou supprimer ce document ?
          </p>

          <p>
            Commencez par les <strong>objets métier</strong> et leurs actions.
            Pour chaque fonction de travail, écrivez <strong>autorisé</strong>,{" "}
            <strong>refusé</strong> ou <strong>à décider</strong>. Ajoutez
            ensuite la portée : son propre dossier, son équipe, un établissement
            ou toute l’entreprise.
          </p>

          <p>
            Lorsqu’aucune règle explicite ne correspond, prévoyez le refus.
            Testez au moins un cas autorisé et un cas refusé pour chaque action
            sensible. Une inconnue sur l’export, la suppression,
            l’administration ou la validation arrête la fonction jusqu’à la
            décision du responsable métier.
          </p>

          <p>
            Le moindre privilège réduit les droits au besoin réel. C’est une
            recommandation de conception, pas une loi universelle. Les
            références RGPD et CNIL citées ici restent limitées aux traitements
            de données personnelles.
          </p>

          <p>
            Pour un produit par abonnement, replacez cette matrice dans le{" "}
            <Link href="/guides/cahier-des-charges-saas">
              cahier des charges complet du SaaS
            </Link>
            {" : "}
            création de l’organisation cliente, offre, échecs de paiement,
            support et sortie doivent conduire aux mêmes droits et aux mêmes
            refus vérifiables.
          </p>

          <div className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 dark:border-zinc-800">
            <Image
              src="/guides/droits-acces-application-metier/matrice-droits-16x9.webp"
              alt="Matrice fictive reliant rôles, objets, actions, portée, décisions et tests de refus"
              width={1600}
              height={900}
              className="h-auto w-full"
              priority
            />
          </div>

          <GuidePremiumMemo title="Un mot à ne pas confondre">
            <p>
              Ici, un droit d’accès est une autorisation dans l’application. Le
              droit d’une personne concernée à obtenir ses données au titre du
              RGPD, notamment son article 15, est un autre sujet.
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="matrice"
          number="02"
          label="Spécification métier"
          title="La matrice commence par ce que les personnes font vraiment"
        >
          <p>
            Un profil « administrateur » mélange souvent des décisions sans
            rapport : corriger un dossier, créer un compte, exporter toutes les
            données ou modifier une règle. Séparez ces actions. Vous pourrez
            ensuite regrouper les permissions qui correspondent réellement à une
            même fonction de travail.
          </p>

          <GuideTable
            caption="Dix dimensions pour une règle vérifiable"
            headers={["Colonne", "Question ordinaire", "Exemple fictif"]}
            rows={[
              [
                "Objet",
                "Sur quoi agit-on ?",
                "Demande d’achat, pièce jointe, fournisseur",
              ],
              [
                "Action",
                "Que peut-on faire ?",
                "Consulter, modifier, valider, exporter, supprimer",
              ],
              [
                "Fonction",
                "Dans quel travail ce droit est-il nécessaire ?",
                "Demandeur, responsable, comptabilité",
              ],
              [
                "Relation",
                "Quel lien avec l’objet change le droit ?",
                "Créateur, responsable de l’équipe, délégataire",
              ],
              [
                "État",
                "Le droit change-t-il au fil du processus ?",
                "Brouillon, soumis, validé, clôturé",
              ],
              [
                "Portée",
                "Jusqu’où le droit s’étend-il ?",
                "Propre dossier, équipe, établissement, entreprise",
              ],
              [
                "Décision",
                "Autorisé, refusé ou à décider ?",
                "Refusé tant qu’aucune règle ne l’autorise",
              ],
              [
                "Responsabilité",
                "Qui demande, valide, applique et revoit ?",
                "Responsable métier, opérateur et date de revue",
              ],
              [
                "Réception",
                "Comment vérifier le droit et son refus ?",
                "Cas positif, cas négatif et résultat attendu",
              ],
              [
                "Trace",
                "Quelle action faut-il pouvoir attribuer et pourquoi ?",
                "Auteur, instant, nature et référence utile",
              ],
            ]}
          />

          <FormulaBox>
            {[
              "Fonction de travail :",
              "Objet métier :",
              "Action :",
              "Relation / état / portée :",
              "Décision : autorisé | refusé | à décider",
              "Responsable de la décision :",
              "Cas autorisé :",
              "Cas refusé :",
              "Trace utile et finalité :",
            ].join("\n")}
          </FormulaBox>

          <InfoBox variant="amber" title="« À décider » n’est pas « autorisé »">
            <p>
              Conservez la cellule ouverte et attribuez la décision. Remplacer
              une inconnue par « oui » accélère le développement, mais retire au
              métier la décision qu’il devra pourtant assumer.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="relations"
          number="03"
          label="Rôles et contexte"
          title="Gardez un rôle simple tant qu’il exprime la vraie règle"
        >
          <p>
            Le contrôle par rôles, appelé RBAC, associe des permissions à une
            fonction puis affecte cette fonction aux personnes. Il convient à
            des règles stables comme « la comptabilité peut consulter les
            factures validées ».
          </p>

          <p>
            Il devient moins lisible si vous créez « responsable agence Lyon »,
            « responsable agence Chambéry » et une nouvelle variante pour chaque
            remplacement.
          </p>

          <p>
            Dans ce cas, la règle dépend d’un attribut (l’établissement, l’état,
            la date) ou d’une relation (le créateur, l’équipe, la délégation).
            OWASP les décrit comme un contrôle fondé sur des attributs (ABAC) ou
            sur des relations (ReBAC). La règle métier observable doit guider ce
            choix.
          </p>

          <GuideTable
            caption="Choisir le modèle le plus simple qui exprime la règle"
            headers={["Situation", "Règle lisible", "Risque à éviter"]}
            rows={[
              [
                "Fonctions stables",
                "Rôle : demandeur, responsable, comptabilité",
                "Un rôle par personne ou par exception",
              ],
              [
                "Plusieurs établissements",
                "Rôle + établissement de l’utilisateur et de l’objet",
                "Accès national accordé par facilité",
              ],
              [
                "Dossier possédé",
                "Action permise si la personne est créatrice ou responsable",
                "Tout utilisateur voit tous les dossiers",
              ],
              [
                "Processus par étapes",
                "La modification dépend de l’état du dossier",
                "Modifier après validation sans règle explicite",
              ],
              [
                "Remplacement",
                "Délégation bornée, motif, début et fin",
                "Droit temporaire jamais retiré",
              ],
            ]}
          />

          <InfoBox
            variant="emerald"
            title="Une fonction existante peut suffire"
          >
            <p>
              Avant de développer une couche de droits sur mesure, configurez
              les groupes, rôles ou règles de partage déjà fournis par l’outil.
              S’ils expriment la portée réelle, peuvent être exportés et passent
              les tests d’autorisation et de refus, arrêtez là le développement.
            </p>
          </InfoBox>

          <GuidePremiumMemo title="L’interface ne décide pas">
            <p>
              Cacher un bouton améliore l’expérience, mais ne protège pas
              l’objet. OWASP recommande de vérifier l’autorisation à chaque
              requête concernée, côté serveur ou à un point d’application
              équivalent, y compris lorsque l’identifiant de l’objet est
              modifié.
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="refus"
          number="04"
          label="Comportement sûr"
          title="Le refus par défaut couvre aussi les chemins oubliés"
        >
          <p>
            Une application doit répondre lorsqu’aucune règle ne correspond.
            OWASP recommande de refuser par défaut et de justifier chaque
            autorisation. Ce choix évite qu’une nouvelle API, une pièce jointe
            ou un écran secondaire devienne accessible parce que personne ne l’a
            ajouté à la liste.
          </p>

          <GuideTable
            caption="Préparer le refus aussi précisément que l’autorisation"
            headers={["Question", "Réponse à écrire", "Test"]}
            rows={[
              [
                "Aucune règle ne correspond",
                "Refus sans modifier l’objet",
                "Utilisateur connecté, fonction absente",
              ],
              [
                "L’identifiant est changé",
                "Refus sur l’autre dossier",
                "Même URL avec l’identifiant d’un collègue",
              ],
              [
                "Le rôle a expiré",
                "Refus immédiat après retrait",
                "Rejouer la requête après le départ",
              ],
              [
                "L’état a changé",
                "Action interdite après validation ou clôture",
                "Rejouer la modification sur l’objet clôturé",
              ],
              [
                "Le contrôle échoue",
                "État stable et message sans détail sensible",
                "Erreur technique simulée sur le contrôle",
              ],
            ]}
          />

          <InfoBox
            variant="emerald"
            title="Refuser ne signifie pas tout bloquer"
          >
            <p>
              Les ressources publiques, les fonctions réellement ouvertes et les
              délégations décidées restent accessibles. Le refus par défaut
              signifie seulement qu’une autorisation doit être explicable et
              testable.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="cycle"
          number="05"
          label="Vie des habilitations"
          title="Un changement de poste doit changer les droits"
        >
          <p>
            La{" "}
            <a
              href="https://www.cnil.fr/fr/securite-gerer-les-habilitations"
              target="_blank"
              rel="noreferrer"
            >
              fiche CNIL « Gérer les habilitations » du 13 mars 2024
            </a>{" "}
            recommande, pour les traitements de données personnelles, de faire
            valider les demandes et de retirer les droits devenus inutiles lors
            d’un changement ou d’un départ. Elle invite aussi à impliquer les
            métiers dans une revue régulière, au moins annuelle.
          </p>

          <p>
            La revue annuelle n’est pas une fréquence légale universelle. Elle
            ne permet pas d’attendre : un changement de situation doit
            déclencher l’action. Le cycle couvre l’arrivée, la mobilité et le
            départ, mais aussi le remplacement, la fin de mission, l’absence
            longue ou le changement d’établissement.
          </p>

          <GuideTable
            caption="Attribuer le cycle arrivée–mobilité–départ"
            headers={["Événement", "Décision", "Contrôle observable"]}
            rows={[
              [
                "Arrivée",
                "Fonction, portée, date de début et valideur",
                "Compte individuel et droits conformes à la matrice",
              ],
              [
                "Mobilité",
                "Retirer l’ancien avant ou avec le nouveau droit",
                "Absence de cumul non décidé",
              ],
              [
                "Remplacement",
                "Délégation limitée et date de fin",
                "Expiration ou retrait vérifié",
              ],
              [
                "Départ",
                "Suspendre l’accès, retirer délégations et traiter les tâches",
                "Requête refusée et responsabilités transférées",
              ],
              [
                "Revue",
                "Comparer droits réels, fonction actuelle et exceptions",
                "Écarts corrigés et décision datée",
              ],
            ]}
          />

          <GuidePremiumMemo title="Le responsable métier tranche si le droit reste nécessaire">
            <p>
              L’équipe technique peut extraire les droits réels et appliquer les
              changements. Le responsable métier reste le mieux placé pour dire
              si une personne a encore besoin d’exporter, de valider ou de voir
              tous les dossiers de son équipe.
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="journal"
          number="06"
          label="Trace d’audit"
          title="Une trace enregistre une action ; une alerte exige un autre mécanisme"
        >
          <p>
            La{" "}
            <a
              href="https://www.cnil.fr/fr/securite-tracer-les-operations"
              target="_blank"
              rel="noreferrer"
            >
              fiche CNIL « Tracer les opérations » du 14 mars 2024
            </a>{" "}
            recommande, dans le périmètre des données personnelles, de tracer
            notamment création, consultation, partage, modification et
            suppression avec l’auteur, la date, l’heure, la nature de
            l’opération et une référence à la donnée.
          </p>

          <p>
            Enregistrer ces champs ne suffit pas à rendre le journal exhaustif,
            inaltérable ou réellement consulté. Une trace devient une alerte
            seulement si une règle la repère et qu’une personne reçoit puis
            traite le signal.
          </p>

          <p>
            Une trace peut elle-même contenir des données personnelles. Sa
            finalité, ses accès, sa protection et sa durée doivent alors être
            justifiés.
          </p>

          <GuideTable
            caption="Définir une trace utile et bornée"
            headers={["Élément", "Question", "Limite"]}
            rows={[
              [
                "Événement",
                "Quelle action sensible faut-il pouvoir attribuer ?",
                "Tout tracer crée du bruit et des données nouvelles",
              ],
              [
                "Auteur et instant",
                "Quel compte agit et quand ?",
                "Un compte partagé affaiblit l’attribution",
              ],
              [
                "Objet",
                "Quelle référence suffit sans recopier la donnée ?",
                "Éviter contenu complet, secret et mot de passe",
              ],
              [
                "Accès à la trace",
                "Qui peut la consulter, corriger ou supprimer ?",
                "La personne tracée ne doit pas pouvoir tout altérer",
              ],
              [
                "Finalité et durée",
                "Pourquoi conserver et quand réexaminer ou supprimer ?",
                "Repère CNIL pour les journaux de traitements de données personnelles : six mois à un an, avec exceptions. Ce n’est pas une durée universelle",
              ],
              [
                "Analyse",
                "Qui cherche une anomalie et que fait-il ensuite ?",
                "Un journal sans lecture n’est pas une alerte",
              ],
            ]}
          />
        </GuidePremiumSection>

        <GuidePremiumSection
          id="outil"
          number="07"
          label="Outil local"
          title="L’outil affiche d’abord le point qui empêche de décider"
        >
          <p>
            Répondez avec des états génériques. L’outil traite d’abord le
            contexte et les inconnues, puis la matrice, le refus, les droits
            sensibles, le cycle de vie et les tests négatifs. Il passe ensuite
            aux relations et à la trace. Une réponse documentée ne compense
            jamais un STOP antérieur.
          </p>

          <AccessRightsReadinessTool />

          <p>
            Le dernier verdict signifie uniquement que la matrice peut être
            relue en atelier. Il ne prouve pas que le code applique les règles,
            qu’aucun chemin n’est oublié ou que le traitement respecte ses
            obligations. Les réponses restent dans l’état de la page et sont
            perdues au rechargement.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="recette"
          number="08"
          label="Réception"
          title="À chaque autorisation critique, associez un test de refus"
        >
          <p>
            Avant le développement, chaque ligne critique de la matrice doit
            produire un cas autorisé et un cas refusé. Commencez par les actions
            qui exposent, modifient, exportent, suppriment ou valident les
            objets les plus sensibles.
          </p>

          <GuideTable
            caption="Transformer une règle en critères de réception"
            headers={["Test", "Préparation", "Résultat attendu"]}
            rows={[
              [
                "Positif",
                "Bonne fonction, bonne relation, bon état",
                "Action autorisée et résultat métier correct",
              ],
              [
                "Horizontal",
                "Même fonction, dossier d’un autre utilisateur ou établissement",
                "Refus sans divulguer l’existence ou le contenu indu",
              ],
              [
                "Vertical",
                "Fonction ordinaire, action d’administration",
                "Refus côté serveur",
              ],
              [
                "Cycle de vie",
                "Droit retiré après mobilité ou départ",
                "Ancienne requête refusée",
              ],
              [
                "État",
                "Objet déjà validé ou clôturé",
                "Modification refusée selon la règle",
              ],
              [
                "Trace",
                "Action sensible autorisée puis refusée",
                "Événements attendus, sans secret ni donnée complète",
              ],
            ]}
          />

          <p>
            Le{" "}
            <Link href="/guides/plan-recette-application-metier">
              guide du plan de recette
            </Link>{" "}
            aide à attribuer ces tests, préparer les données et classer les
            anomalies. Le{" "}
            <Link href="/guides/securite-application-metier">
              guide du socle de sécurité
            </Link>{" "}
            complète les droits avec sauvegarde, détection, réponse et
            responsabilités globales.
          </p>

          <InfoBox
            variant="amber"
            title="STOP si le métier ne peut pas trancher"
          >
            <p>
              Une équipe technique ne doit pas inventer qui peut exporter,
              supprimer ou valider. Réduisez la fonction, utilisez des données
              fictives ou reportez sa mise en service jusqu’à la décision.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="cas-fictif"
          number="09"
          label="Mise en situation"
          title="Une délégation temporaire ne devient pas un droit permanent"
        >
          <GuidePremiumCase
            initial="FI"
            eyebrow="Exemple illustratif entièrement fictif"
            title="Atelier Atlas et ses demandes d’achat"
          >
            <p>
              Aucun client, logiciel, organisation ou résultat réel n’est
              représenté. Les fonctions et décisions servent uniquement à
              montrer comment remplir puis tester la matrice.
            </p>
          </GuidePremiumCase>

          <p>
            Dans ce scénario, une personne crée et consulte ses demandes. Son
            responsable peut valider celles de son équipe. La comptabilité
            consulte et exporte seulement les demandes validées. Une personne ne
            valide jamais sa propre demande. Une délégation de validation est
            possible pendant une absence, avec début, fin et responsable de
            l’accord.
          </p>

          <GuideTable
            caption="Extrait fictif de matrice sans score"
            headers={["Fonction et action", "Portée", "Décision et test"]}
            rows={[
              [
                "Demandeur · modifier",
                "Sa demande encore au brouillon",
                "Autorisé ; refuser après soumission",
              ],
              [
                "Responsable · valider",
                "Demandes de son équipe",
                "Autorisé ; refuser l’autre établissement",
              ],
              [
                "Responsable · valider sa propre demande",
                "Sa propre demande",
                "Refusé ; un autre responsable doit décider",
              ],
              [
                "Comptabilité · exporter",
                "Demandes validées",
                "Autorisé ; refuser les brouillons",
              ],
              [
                "Délégataire · valider",
                "Même équipe, pendant la période décidée",
                "Autorisé pendant la délégation ; refuser après son terme",
              ],
              [
                "Toute fonction · supprimer",
                "À décider",
                "STOP : aucune suppression avant arbitrage métier",
              ],
            ]}
          />

          <p>
            La suppression reste inconnue : elle ne passe donc pas en
            développement. La délégation possède un test après expiration. Le
            journal vise les validations, exports, retraits et refus sensibles,
            mais le scénario ne fixe aucune durée de conservation universelle.
          </p>

          <p>
            Les droits sont le premier chapitre d’un ensemble plus large : les{" "}
            <Link href="/guides/securite-application-metier">
              contrôles de sécurité d’une application métier
            </Link>{" "}
            couvrent la suite — journalisation, restauration, sous-traitance.
            Dès qu’une donnée réelle entre dans le produit, ces exigences
            appartiennent au premier lot, comme le rappelle le guide sur{" "}
            <Link href="/guides/mvp-saas-quoi-inclure">
              ce qu’un MVP doit contenir
            </Link>
            .
          </p>

          <p>
            Deux contextes rendent l’exercice plus difficile. Reprendre un{" "}
            <Link href="/guides/reprendre-logiciel-metier-existant">
              logiciel métier existant
            </Link>{" "}
            suppose d’inventorier des comptes dont plus personne ne connaît le
            périmètre, et une{" "}
            <Link href="/guides/migrer-logiciel-metier-sans-interruption">
              migration sans interruption de service
            </Link>{" "}
            fait cohabiter deux modèles de droits le temps de la bascule. Sur
            une plateforme partagée,{" "}
            <Link href="/guides/airtable-notion-ou-application-metier">
              Airtable ou Notion face à une application métier
            </Link>{" "}
            et{" "}
            <Link href="/guides/power-apps-ou-application-sur-mesure">
              Power Apps face à une application sur mesure
            </Link>{" "}
            expliquent ce que le plan souscrit permet réellement de cloisonner.
          </p>

          <GuidePremiumMemo title="Commencez par un seul objet">
            <p>
              Prenez un objet critique de votre activité. Remplissez ses actions
              avec un responsable métier, puis remettez la matrice à une autre
              personne : si elle ne peut pas écrire un cas autorisé et un cas
              refusé, la règle demande encore une décision.
            </p>
          </GuidePremiumMemo>

          <p>
            Si le besoin dépasse la configuration d’un outil existant, le{" "}
            <Link href="/services/outils-internes-sur-mesure">
              service d’outils internes sur mesure
            </Link>{" "}
            peut transformer la matrice en fonctions et critères de réception.
            Pour transmettre un besoin déjà préparé, vous pouvez ensuite{" "}
            <Link href="/demarrer-un-projet">décrire le projet</Link>.
          </p>
        </GuidePremiumSection>
      </GuidePremiumLayout>
    </GuidesShell>
  );
}
