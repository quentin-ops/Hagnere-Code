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
import { TrackedGuideCtaLink } from "@/components/guides/tracked-guide-cta-link";
import { GuidesShell } from "@/components/guides/GuidesShell";
import {
  buildGuideMetadata,
  buildGuideStructuredData,
} from "@/lib/guide-page-seo";
import {
  CONTACT_PHONE_DISPLAY_NATIONAL,
  CONTACT_PHONE_E164,
} from "@/lib/contact-details";
import { formatGuideDate, getGuide } from "@/lib/guides";
import { TEAM } from "@/lib/team";
import { AcceptanceReadinessTool } from "./acceptance-readiness-tool";

const guide = getGuide("plan-recette-application-metier");
const breadcrumbName = "Plan de recette d’une application métier";

export const metadata = buildGuideMetadata(
  guide,
  "Décompte des cas de recette, jours d’équipe à bloquer et seuils d’acceptation mesurables",
);

const structuredData = buildGuideStructuredData(guide, breadcrumbName);

const toc = [
  {
    id: "reponse",
    number: "01",
    label: "Réponse directe",
    shortLabel: "Réponse",
  },
  {
    id: "compter",
    number: "02",
    label: "Compter les cas",
    shortLabel: "Compter",
  },
  {
    id: "jours",
    number: "03",
    label: "Chiffrer les jours",
    shortLabel: "Jours",
  },
  {
    id: "criteres",
    number: "04",
    label: "Écrire les seuils",
    shortLabel: "Seuils",
  },
  {
    id: "donnees",
    number: "05",
    label: "Choisir les données",
    shortLabel: "Données",
  },
  {
    id: "incidents",
    number: "06",
    label: "Ce qui rate",
    shortLabel: "Incidents",
  },
  {
    id: "mesures",
    number: "07",
    label: "Mesurer la recette",
    shortLabel: "Mesures",
  },
  {
    id: "decision",
    number: "08",
    label: "Prononcer la décision",
    shortLabel: "Décider",
  },
];

const faqCategories: GuidePremiumFaqCategory[] = [
  {
    key: "preparer",
    num: "01",
    label: "Préparer la campagne",
    items: [
      {
        question:
          "Faut-il un plan de recette pour un projet à 8\u00a0000\u00a0€ HT\u00a0?",
        answer:
          "Refaites d’abord le décompte de la section\u00a002 sur vos propres règles\u00a0: c’est leur nombre qui commande le nombre de cas, et le montant du devis n’y change rien. Si le total reste au-dessus de quatre ou cinq jours d’équipe, la campagne complète de ce guide est surdimensionnée pour ce budget. Écrivez alors les quatre ou cinq parcours dont l’échec vous coûterait de l’argent, jouez-les avec des données réelles anonymisées, et gardez un mois d’usage effectif avant de régler le solde. Ce mois d’usage ne bloque aucune journée d’agenda.",
      },
      {
        question:
          "Qui écrit les cas de recette, vous ou l’équipe qui développe\u00a0?",
        answer:
          "L’attendu vient de chez vous, la forme peut venir d’en face. La personne qui relit 340\u00a0factures par mois est la seule à savoir qu’un prorata kilométrique arrondi au kilomètre supérieur en fausserait plusieurs dizaines\u00a0; le développeur, lui, sait quelle trace permettra de le démontrer. Le vrai point de contrôle est la relecture croisée\u00a0: si les deux camps n’écrivent pas le même résultat attendu pour un cas, c’est que la règle n’était pas comprise de la même façon.",
      },
      {
        question: "Combien de temps dure une campagne de recette\u00a0?",
        answer:
          "Comptez les jours de travail, puis étalez-les. Les 6,2\u00a0jours du cas construit dans ce guide ne se passent pas en six jours de calendrier\u00a0: entre chaque cycle, le correctif doit être développé puis redéployé chez vous. Ce délai-là appartient à l’équipe qui développe\u00a0; demandez-le par écrit, cycle par cycle, avant d’arrêter une date. Une campagne annoncée sur cinq jours calendaires prévoit zéro correction, donc zéro rejeu, donc une acceptation sans deuxième passage.",
      },
    ],
  },
  {
    key: "executer",
    num: "02",
    label: "Exécuter et qualifier",
    items: [
      {
        question:
          "Peut-on copier les données de production dans l’environnement de test\u00a0?",
        answer:
          "Pas les données personnelles\u00a0: la CNIL demande des environnements distincts et un jeu fictif ou anonymisé, et elle demande aussi d’anonymiser les données personnelles contenues dans les configurations importées. Ce qui se copie sans risque, ce sont les formes\u00a0: la liste des valeurs distinctes prises par chaque colonne qui entre dans une règle. Un client sans numéro SIRET, une commune fusionnée, un taux de TVA retiré depuis\u00a0— gardez les cas, pas les personnes.",
      },
      {
        question: "Un cas bloqué compte-t-il comme un échec\u00a0?",
        answer:
          "Non, et les confondre coûte cher. Un cas échoué a été joué et n’a pas donné le résultat attendu\u00a0: vous savez quelque chose. Un cas bloqué n’a pas pu être joué, parce qu’un compte manquait ou qu’un service ne répondait pas. Le premier appelle une correction, le second appelle une condition à rétablir puis une exécution. Un relevé qui les additionne enlève au décideur l’information dont il a besoin.",
      },
      {
        question:
          "Quelle différence entre la gravité et la priorité d’une anomalie\u00a0?",
        answer:
          "La gravité décrit l’effet observé\u00a0: un montant faux sur des dizaines de factures par mois est grave, un libellé mal accordé ne l’est pas. La priorité décrit l’ordre de traitement, qui dépend aussi d’une échéance ou d’une démonstration. Les deux peuvent diverger sans que le classement soit fautif\u00a0: une anomalie grave peut être traitée après une anomalie mineure qui bloque une réunion de la semaine. Gardez les deux champs et la raison écrite du classement.",
      },
    ],
  },
  {
    key: "decider",
    num: "03",
    label: "Décider et clore",
    items: [
      {
        question:
          "Un taux de réussite de 95\u00a0% suffit-il pour accepter la livraison\u00a0?",
        answer:
          "Le taux ne dit ni ce qui a été joué, ni ce qui compte. Sur 56\u00a0cas, 95\u00a0% laissent près de trois cas non conformes\u00a0: si l’un des trois est l’export comptable, le chiffre est bon et la mise en service est mauvaise. Lisez les résultats par risque et non en moyenne, et vérifiez d’abord combien de cas ont été exécutés\u00a0— un pourcentage se calcule très bien sur la moitié d’une campagne.",
      },
      {
        question:
          "Une recette réussie vaut-elle réception au sens du contrat\u00a0?",
        answer:
          "Ce guide ne permet pas de le dire. Les effets d’une réception, d’une réserve, d’un paiement ou d’un délai dépendent des documents signés. En marché public informatique, le CCAG-TIC organise une admission tacite dans un seul cas\u00a0: le silence de l’acheteur pendant sept jours après la vérification de service régulier. Un contrat privé ne reprend cette mécanique que s’il l’écrit. Faites relire vos documents plutôt que cette page.",
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
          { label: "Recette et acceptation", variant: "neutral" },
          { label: "Atelier local · aucun envoi", variant: "success" },
          {
            label: `Mis à jour le ${formatGuideDate(guide.dateModified)}`,
            variant: "muted",
          },
        ]}
        heroTitle="Plan de recette d’une application métier :"
        heroTitleEm="prouver avant"
        heroTitleSuffix="d’accepter"
        heroDescription={
          "La recette, c’est le moment où votre équipe rejoue son travail réel dans le logiciel livré, avant de payer le solde. Elle se chiffre avant de s’écrire\u00a0: comptez les cas à partir de vos parcours, de vos règles et de vos échanges, chiffrez les jours que votre équipe doit y passer, puis écrivez des seuils qui disent ce qu’on mesure, sur quoi et pendant combien de temps. Les nombres ci-dessous viennent d’un cas construit pour l’expliquer, dont les volumes sont choisis pour l’exemple\u00a0— jamais d’un dossier client."
        }
        stats={[
          { label: "Cas comptés", value: "56" },
          { label: "Jours d’équipe", value: "6,2" },
          { label: "Temps interne", value: "2\u00a0170\u00a0€" },
          { label: "Rejeu version 2", value: "4\u00a0h\u00a040" },
          { label: "Seuil universel", value: "Aucun" },
        ]}
        author={{
          initials: TEAM.quentin.initials,
          name: TEAM.quentin.fullName,
          role: TEAM.quentin.role,
          profileUrl: "/equipe#fondateur",
        }}
        sidebarHeroCta={{
          eyebrow: "Avant la livraison",
          titleStart: "Faire relire",
          titleEm: "vos cas de recette",
          description:
            "Apportez vos règles écrites, vos parcours critiques et le calendrier annoncé. Le premier échange peut conclure que votre projet est trop petit pour une campagne formelle.",
          benefits: [
            "Décompte des cas fait avec vous",
            "Jours d’équipe chiffrés avant le calendrier",
            "Seuils réécrits avec ce qu’on mesure et sur quelle durée",
          ],
          primaryCtaLabel: "Voir le service applications métier",
          primaryCtaHref: "/services/saas-applications-metier",
          phoneLabel: CONTACT_PHONE_DISPLAY_NATIONAL,
          phoneHref: `tel:${CONTACT_PHONE_E164}`,
        }}
        toc={toc}
        tocLabel="Étapes de la recette"
        mobileCtaLabel="Faire relire mes cas"
        sidebarContextCta={{
          eyebrow: "Applications métier",
          title: "Votre recette tient-elle dans le calendrier annoncé\u00a0?",
          description:
            "Décrivez le nombre de règles écrites, les personnes disponibles pour tester et la date de mise en service visée, sans donnée personnelle ni contenu confidentiel.",
          benefits: [
            "Nombre de cas estimé sur vos règles",
            "Jours à bloquer et cycles de correction",
            "Décideur et effet du silence identifiés",
          ],
          ctaLabel: "Démarrer mon projet",
          ctaHref: "/demarrer-un-projet",
          secondaryLabel: CONTACT_PHONE_DISPLAY_NATIONAL,
          secondaryHref: `tel:${CONTACT_PHONE_E164}`,
          badgeLabel: "Premier échange sans engagement",
        }}
        faqCategories={faqCategories}
        faqMeta={{
          eyebrow: "Questions fréquentes",
          titleStart: "Ce qu’on demande avant",
          titleEm: "de signer",
          titleEnd: "la recette.",
          subtitle:
            "Taille du projet, répartition de l’écriture, durée réelle, données de test, cas bloqués, gravité contre priorité, taux de réussite et portée contractuelle.",
          ctaTitle: "Un point encore ouvert sur votre recette\u00a0?",
          ctaDescription:
            "Décrivez les règles à vérifier, les personnes disponibles et la date visée, sans transmettre de donnée sensible.",
          ctaLabel: "Décrire ma recette",
          ctaHref: "/demarrer-un-projet",
        }}
        legalSources={[
          {
            source:
              "Légifrance · arrêté du 30\u00a0mars 2021 approuvant le CCAG-TIC",
            href: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000043310689",
            description:
              "Cahier des clauses administratives générales des marchés publics de techniques de l’information et de la communication. Article\u00a032\u00a0: vérification d’aptitude puis vérification de service régulier, régularité observée trente jours, indisponibilité cumulée limitée à 2\u00a0% de la durée d’utilisation effective, de 8\u00a0h à 18\u00a0h du lundi au vendredi, jours fériés exclus. Article\u00a033.2.1\u00a0: le délai imparti à l’acheteur pour procéder à la vérification d’aptitude et notifier sa décision est de trente jours, à compter de la notification de l’écrit par lequel le titulaire l’informe que les prestations sont prêtes à être vérifiées ou, à défaut, du procès-verbal de mise en ordre de marche\u00a0; décision positive, ajournement ou rejet, sans admission tacite. Article\u00a033.2.2\u00a0: sept jours pour notifier la décision de vérification de service régulier, et à défaut les prestations sont réputées admises. Corps des articles\u00a032 et\u00a033 de l’annexe rouvert sur Légifrance le 30\u00a0août 2026, aux identifiants JORFARTI000043310746 et JORFARTI000043310747.",
          },
          {
            source: "ISTQB · CTFL v4.0.1",
            href: "https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf",
            description:
              "Syllabus du 15\u00a0septembre 2024\u00a0: niveaux de test, acceptation centrée sur les besoins des utilisateurs, critères d’entrée et de sortie, priorisation, distinction entre gravité et priorité d’une anomalie. Référence pédagogique, pas certification du projet. PDF de 78\u00a0pages téléchargé et relu le 30\u00a0août 2026.",
          },
          {
            source: "ISO/IEC/IEEE 29119-3:2021",
            href: "https://www.iso.org/standard/79429.html",
            description:
              "Norme consacrée à la documentation de test\u00a0: modèles utilisables dans différents projets et organisations. Aucun champ détaillé non public n’est attribué à la norme. La page du catalogue a répondu HTTP 403 le 30\u00a0août 2026, par ce lien comme par la plateforme de consultation en ligne de l’ISO\u00a0: cette description n’a pas pu y être revérifiée à cette date.",
          },
          {
            source: "ISO/IEC 25010:2023",
            href: "https://www.iso.org/standard/78176.html",
            description:
              "Modèle de qualité produit à neuf caractéristiques, utilisable pour identifier des objectifs de test et des critères d’acceptation au-delà des seules fonctions. La page du catalogue a répondu HTTP 403 le 30\u00a0août 2026, en français comme en anglais\u00a0: cette description n’a pas pu y être revérifiée à cette date.",
          },
          {
            source: "CNIL · Tester vos applications",
            href: "https://www.cnil.fr/fr/tester-vos-applications",
            description:
              "Fiche du 27\u00a0janvier 2020\u00a0: métriques définies avec les parties prenantes\u00a0; données personnelles de production à ne pas utiliser en développement ou en test\u00a0; jeu fictif représentatif et anonymisation des configurations importées. Consultée le 30\u00a0août 2026.",
          },
          {
            source: "CNIL · Encadrer les développements informatiques",
            href: "https://www.cnil.fr/fr/securite-encadrer-les-developpements-informatiques",
            description:
              "Fiche du 14\u00a0mars 2024\u00a0: environnements de développement, de test et de production distincts, données fictives ou anonymisées, non-régression ou revue avant la mise en production d’une mise à jour. Consultée le 30\u00a0août 2026.",
          },
          {
            source: "W3C WAI · Évaluer l’accessibilité",
            href: "https://www.w3.org/WAI/test-evaluate/",
            description:
              "Évaluer tôt, combiner outils et évaluation humaine compétente\u00a0; aucun outil automatique ne détermine seul la conformité d’accessibilité. Page datée du 12\u00a0août 2026, consultée le 30\u00a0août 2026.",
          },
          {
            source:
              "Légifrance · loi n°\u00a02005-102 du 11\u00a0février 2005, article\u00a047",
            href: "https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000037388867/",
            description:
              "Source de l’obligation française d’accessibilité des services de communication au public en ligne. Le\u00a0I énumère quatre catégories\u00a0: 1°\u00a0les personnes morales de droit public\u00a0; 2°\u00a0les personnes morales de droit privé délégataires d’une mission de service public ou créées pour satisfaire spécifiquement des besoins d’intérêt général autres qu’industriels ou commerciaux\u00a0; 3°\u00a0les personnes morales de droit privé constituées par les précédentes pour le même objet\u00a0; 4°\u00a0les entreprises dont le chiffre d’affaires excède un seuil fixé par décret. Version en vigueur au 8\u00a0septembre 2023, consultée le 30\u00a0août 2026.",
          },
          {
            source:
              "Légifrance · décret n°\u00a02019-768 du 24\u00a0juillet 2019",
            href: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000038811937/",
            description:
              "Ce décret ne crée pas l’obligation\u00a0: il en fixe le seuil pour les entreprises visées au 4°\u00a0du\u00a0I de l’article\u00a047, à 250\u00a0millions d’euros de chiffre d’affaires annuel moyen en France sur les trois derniers exercices clos. Aucun critère d’effectif n’y figure. Le régime de sanction a été modifié depuis\u00a0: l’article 8 est abrogé par le décret n°\u00a02026-816 du 24\u00a0août 2026, donc vérifier le texte en vigueur à votre date de lecture. Version en vigueur au 30\u00a0août 2026, consultée à cette date.",
          },
          {
            source: "EUR-Lex · directive (UE) 2019/882",
            href: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A32019L0882",
            description:
              "Exigences d’accessibilité des produits et des services destinés aux consommateurs\u00a0— commerce en ligne, services bancaires, transport de voyageurs, livres numériques, communications électroniques\u00a0—, applicables à partir du 28\u00a0juin 2025. Les outils internes d’une entreprise n’y figurent pas. Consultée le 30\u00a0août 2026.",
          },
          {
            source: "Squash\u00a0TM · page «\u00a0Source code\u00a0»",
            href: "https://www.squashtm.com/en/source-code",
            description:
              "Page de l’éditeur qui porte la licence, mot pour mot\u00a0: «\u00a0SquashTM is open source software, distributed under the LGPL v3 license.\u00a0» L’origine du produit — «\u00a0Développé en France depuis 2011 par Henix\u00a0», société française d’ingénierie de la qualité logicielle — est écrite sur henix.com/squashtm, qui décrit un modèle open core sans nommer de licence\u00a0: c’est pourquoi la licence est citée ici depuis squashtm.com et non depuis henix.com. Outil cité comme exemple disponible, sans recommandation exclusive. Les deux pages ont été consultées le 30\u00a0août 2026.",
          },
          {
            source: "OWASP · ASVS 5.0.0",
            href: "https://owasp.org/www-project-application-security-verification-standard/",
            description:
              "Base versionnée pour vérifier les contrôles techniques de sécurité d’une application web. Version stable 5.0.0 publiée le 30\u00a0mai 2025. À sélectionner avec des spécialistes\u00a0; ce n’est pas une obligation générale. Consultée le 30\u00a0août 2026.",
          },
        ]}
        disclaimer={{
          eyebrow: "Limite du guide",
          title:
            "Une méthode de préparation, pas une expertise juridique ni un audit de votre application",
          description:
            "Ce guide, le cas construit et l’atelier local ne testent pas votre application et ne qualifient ni sa sécurité, ni son accessibilité, ni sa conformité. Les montants du cas construit sont des hypothèses annoncées comme telles. Les délais du CCAG-TIC ne s’appliquent qu’aux marchés qui s’y réfèrent\u00a0: pour un contrat privé, seule la lecture de vos documents signés répond, et un désaccord sérieux appelle un conseil juridique.",
        }}
        relatedGuides={[
          {
            label: "Comment rédiger un cahier des charges SaaS\u00a0?",
            href: "/guides/cahier-des-charges-saas",
          },
          {
            label:
              "MVP SaaS\u00a0: quoi inclure avant un premier client\u00a0?",
            href: "/guides/mvp-saas-quoi-inclure",
          },
          {
            label:
              "Sécurité d’une application métier\u00a0: les 4 mesures à faire",
            href: "/guides/securite-application-metier",
          },
        ]}
        relatedGuidesLabel="À lire avant ou après la recette"
      >
        <GuidePremiumSection
          id="reponse"
          number="01"
          label="Réponse directe"
          readingTime="2 min"
          title="Ce qu’une recette doit produire avant que vous payiez le solde"
        >
          <p>
            La livraison est annoncée pour le 12, la mise en service pour le 15.
            Personne, chez vous, n’a bloqué une journée pour vérifier quoi que
            ce soit.
          </p>
          <p>
            Vérifier, ici, porte un nom&nbsp;: la <strong>recette</strong>.
            C’est le moment où votre équipe, et non celle qui a développé,
            rejoue son travail réel dans le logiciel livré et note ce qui sort.
            Un plan de recette est la liste écrite de ces vérifications, avec le
            résultat attendu de chacune.
          </p>
          <p>
            <strong>Une recette se chiffre avant de s’écrire. </strong>Les cas
            se comptent à partir de vos parcours, de vos règles, de vos droits
            et de vos échanges avec vos autres logiciels. Les jours que votre
            équipe doit y passer s’en déduisent, écriture, exécution et rejeu
            compris. Les seuils s’écrivent en dernier. Sur le cas construit de
            ce guide, dont les volumes sont choisis pour l’exemple&nbsp;:
            56&nbsp;cas, 6,2&nbsp;jours et 2&nbsp;170&nbsp;€ de temps interne,
            sur un projet à 25&nbsp;000&nbsp;€ hors taxes (HT).
          </p>
          <p>
            Un taux de réussite ne décide rien&nbsp;: «&nbsp;33&nbsp;cas
            exécutés, 33&nbsp;réussis&nbsp;» se lit très bien quand 23&nbsp;cas
            n’ont jamais été joués.
          </p>

          <GuidePremiumCase
            initial="56"
            eyebrow="Fil rouge du guide · exemple construit"
            title={
              "Une application de tournées, 19\u00a0règles écrites, 340\u00a0factures par mois"
            }
          >
            <p>
              <em>
                Exemple construit&nbsp;: les volumes, les durées et le coût du
                jour chargé sont choisis pour l’exemple et ne viennent d’aucune
                source&nbsp;; seul le montant du projet est repris de la grille
                de prix de ce site. Ce n’est pas un dossier client.
              </em>{" "}
              Une entreprise de transport et de logistique de Chalon-sur-Saône
              fait développer une application de suivi de tournées et de
              préfacturation. Le devis porte sur 25&nbsp;000&nbsp;€ HT, payés en
              trois fois&nbsp;: 30&nbsp;% à la commande, 40&nbsp;% à la
              livraison, 30&nbsp;% après recette, soit 7&nbsp;500&nbsp;€ HT
              suspendus à la vérification.
            </p>
            <p>
              Nadia, responsable facturation, relit 340&nbsp;factures par mois
              et sera la testeuse principale. Karim, directeur d’exploitation,
              signera. Le cahier des charges contient 19&nbsp;règles de gestion,
              trois flux et quatre rôles.
            </p>
          </GuidePremiumCase>

          <div className="not-prose my-8 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950 dark:border-zinc-800">
            <Image
              src="/guides/plan-recette-application-metier/recette-preuve-16x9.webp"
              alt="Quatre étapes numérotées&nbsp;: compter les cas, chiffrer les jours, écrire les seuils, décider, avec un retour vers la correction quand un cas critique n’a pas été joué"
              width={1600}
              height={900}
              className="h-auto w-full"
            />
          </div>

          <InfoBox
            variant="amber"
            title={"L’application est déjà en service\u00a0? Changez de sujet"}
          >
            <p>
              Si des factures fausses sont déjà parties ou si un compte a été
              compromis, la recette n’est plus la question. Mesurez ce qui est
              déjà sorti chez vos clients, organisez le mode dégradé, puis
              reprenez la vérification sur une version corrigée.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="compter"
          number="02"
          label="Décompte"
          readingTime="2 min"
          title={"Combien de cas de recette faut-il écrire\u00a0?"}
        >
          <p>
            Un plan de recette d’application métier tient en une liste de cas,
            le budget qui va avec et les seuils qu’on saura vérifier. Le nombre
            de cas se compte, à partir de cinq sources dénombrables sur des
            documents que vous avez déjà.
          </p>

          <GuideTable
            caption="Le décompte des cas de recette, source par source"
            headers={[
              "Ce qui produit des cas",
              "Comment on les compte",
              "Sur le cas construit",
            ]}
            rows={[
              [
                "Parcours de bout en bout",
                "Un cas par parcours dont l’échec arrêterait le travail",
                "6\u00a0parcours → 6\u00a0cas",
              ],
              [
                "Règles de gestion et de calcul",
                "Un cas courant par règle, plus un cas à la limite pour chaque règle qui porte un seuil, une date ou un arrondi",
                "19\u00a0règles, dont 11 à seuil → 30\u00a0cas",
              ],
              [
                "Droits",
                "Un cas par action qu’un rôle ne doit pas pouvoir faire et qui touche de l’argent ou une donnée",
                "4\u00a0rôles, 7\u00a0actions interdites → 7\u00a0cas",
              ],
              [
                "Flux avec les autres logiciels",
                "Trois cas par flux\u00a0: accepté, rejeté, rejoué après correction",
                "3\u00a0flux × 3 → 9\u00a0cas",
              ],
              [
                "Reprise après erreur",
                "Un cas par endroit où le travail peut s’interrompre au milieu",
                "4\u00a0points de coupure → 4\u00a0cas",
              ],
              ["Total", "Somme des cinq lignes", "56\u00a0cas"],
            ]}
          />

          <p>
            Six plus trente, plus sept, plus neuf, plus quatre&nbsp;:
            56&nbsp;cas. Ce total n’est pas une norme à recopier&nbsp;: il suit
            le nombre de règles. La même méthode donne 4&nbsp;cas pour une
            saisie de congés qui tient en quatre règles sans seuil, et de 60 à
            120&nbsp;cas pour un calcul de commissions à soixante règles, selon
            celles qui portent un seuil. Ce qui se transporte d’un projet à
            l’autre, c’est la méthode de comptage.
          </p>

          <h3>D’où sortent les 19&nbsp;règles du cas construit</h3>
          <p>
            Elles se relèvent dans le{" "}
            <Link href="/guides/cahier-des-charges-saas">
              cahier des charges
            </Link>{" "}
            quand il existe, dans les courriels de spécification et les comptes
            rendus de réunion sinon. Une règle qui n’apparaît nulle part ne sera
            vérifiée par personne.
          </p>
          <p>
            Une règle mérite un cas à la limite dès qu’elle contient un nombre,
            une date ou un mot comme «&nbsp;au-delà&nbsp;», «&nbsp;sauf
            si&nbsp;» ou «&nbsp;arrondi&nbsp;». Sur les 19&nbsp;règles,
            11&nbsp;répondent à ce critère&nbsp;: c’est de là que sortent les
            30&nbsp;cas de la deuxième ligne.
          </p>

          <GuidePremiumMemo
            eyebrow="L’outil, à partir de quel volume"
            title="Un tableur suffit jusqu’à environ cent cinquante cas"
          >
            <ul>
              <li>
                À 56&nbsp;cas, une feuille de huit colonnes fait le
                travail&nbsp;: identifiant, règle couverte, version, rôle,
                données, attendu, obtenu, preuve.
              </li>
              <li>
                Au-delà d’environ 150&nbsp;cas et de deux campagnes, c’est le
                rejeu qui pèse, et un outil de gestion de tests devient
                rentable&nbsp;— Squash&nbsp;TM, publié en open source sous
                licence LGPL&nbsp;v3 par Henix, en est un exemple.
              </li>
              <li>
                Un référentiel de 400&nbsp;cas dont personne ne sait quelle
                règle ils couvrent coûte 33&nbsp;h&nbsp;20 de rejeu par
                campagne, contre 4&nbsp;h&nbsp;40 pour les 56&nbsp;cas du
                tableur.
              </li>
            </ul>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="jours"
          number="03"
          label="Budget"
          readingTime="3 min"
          title={"Combien de jours votre équipe doit-elle y passer\u00a0?"}
        >
          <p>
            Aucune des valeurs ci-dessous ne sort d’une source publiée&nbsp;: ce
            sont des hypothèses de travail, posées à découvert pour que vous
            puissiez les remplacer par les vôtres.{" "}
            <strong>
              Écrire un cas rejouable prend 15&nbsp;minutes une fois la règle
              connue, l’exécuter la première fois 10&nbsp;minutes, le rejouer
              après correction 5&nbsp;minutes.
            </strong>{" "}
            La journée utile vaut 7&nbsp;heures, et le temps interne 350&nbsp;€
            le jour chargé.
          </p>
          <p>
            Pour les remplacer, chronométrez vos cinq premiers cas, de la
            lecture de la règle à la preuve rangée&nbsp;: cinq suffisent à
            savoir si votre moyenne d’écriture est de huit ou de vingt-cinq
            minutes, ce qui fait passer le budget de 5,3 à 7,6&nbsp;jours. Votre
            contrôleuse de gestion ou votre expert-comptable sort le coût du
            jour chargé à partir du salaire brut, des charges et des jours
            réellement travaillés.
          </p>

          <GuideTable
            caption="Ce que la recette du cas construit coûte à l’équipe interne"
            headers={["Poste", "Le calcul", "Temps"]}
            rows={[
              [
                "Écrire les cas",
                "56 × 15\u00a0min",
                "840\u00a0min, soit 14\u00a0h",
              ],
              [
                "Exécuter une première fois",
                "56 × 10\u00a0min",
                "560\u00a0min, soit 9\u00a0h\u00a020",
              ],
              [
                "Rejouer après correction",
                "2\u00a0cycles × 17\u00a0cas touchés × 5\u00a0min",
                "170\u00a0min, soit 2\u00a0h\u00a050",
              ],
              [
                "Préparer le jeu de données",
                "Relevé des valeurs distinctes, génération, anonymisation",
                "1,5\u00a0jour",
              ],
              [
                "Relecture croisée des cas avant exécution",
                "Le chef de projet et la responsable facturation confrontent leurs attendus",
                "0,5\u00a0jour",
              ],
              [
                "Réunion de décision et relevé écrit",
                "Une demi-journée, décideur présent",
                "0,5\u00a0jour",
              ],
              [
                "Total",
                "26\u00a0h\u00a010 ÷ 7\u00a0h = 3,74\u00a0j, arrondi à 3,7, plus 2,5\u00a0j",
                "6,2\u00a0jours, soit 2\u00a0170\u00a0€",
              ],
            ]}
          />

          <p>
            Les 17&nbsp;cas rejoués par cycle correspondent à trois cas sur dix,
            proportion à ajuster dès la première livraison&nbsp;: si le premier
            cycle en touche la moitié, doublez la ligne avant de promettre une
            date. Le total, lui, arrondit la part d’exécution à la dixième de
            journée&nbsp;; sans cet arrondi, 26&nbsp;h&nbsp;10 valent
            3,74&nbsp;jours, le total 6,24&nbsp;jours et le coût
            2&nbsp;183&nbsp;€, treize euros de plus que la ligne affichée. Dans
            les deux lectures, ces jours pèsent 8,7&nbsp;% du budget du projet,
            25&nbsp;000&nbsp;€&nbsp;HT. Ils figurent rarement sur un devis, et
            pour cause&nbsp;: ils ne sont pas vendus, ils sont à vous.
          </p>

          <h3>
            Les 6,2&nbsp;jours de travail ne tiennent pas dans six jours de
            calendrier
          </h3>
          <p>
            Entre deux cycles, le correctif doit être développé puis redéployé
            chez vous. Ce délai-là appartient à l’équipe qui développe&nbsp;:
            demandez-le par écrit, cycle par cycle, avant d’arrêter une date.
          </p>
          <p>
            La deuxième campagne coûte 56&nbsp;×&nbsp;5&nbsp;minutes de rejeu,
            soit 4&nbsp;h&nbsp;40 contre 26&nbsp;h&nbsp;10 la première
            fois&nbsp;: 21&nbsp;h&nbsp;30 économisées. C’est là que l’écriture
            se rembourse, à condition que les cas soient conservés ailleurs que
            dans une boîte de réception.
          </p>

          <InfoBox
            variant="emerald"
            title="En dessous d’un certain budget, cette campagne est une erreur"
          >
            <p>
              Les 6,2&nbsp;jours ci-dessus sont dimensionnés sur 19&nbsp;règles
              et 56&nbsp;cas, c’est-à-dire sur le projet à
              25&nbsp;000&nbsp;€&nbsp;HT du fil rouge. Transposés tels quels sur
              un projet à 8&nbsp;000&nbsp;€&nbsp;HT, ils coûteraient les mêmes
              2&nbsp;170&nbsp;€ de temps interne, soit
              2&nbsp;170&nbsp;÷&nbsp;8&nbsp;000&nbsp;=&nbsp;27,1&nbsp;% du
              développement&nbsp;— plus du quart. Ce serait une erreur de
              lecture&nbsp;: un projet plus petit porte moins de règles, donc
              moins de cas, donc moins de jours. Refaites le décompte de la
              section&nbsp;02 sur vos propres règles. Si le total dépasse quatre
              ou cinq jours d’équipe, écrivez seulement les parcours dont
              l’échec vous coûterait de l’argent, et gardez un mois d’usage réel
              avant de régler le solde. Le{" "}
              <Link href="/guides/mvp-saas-quoi-inclure">
                périmètre d’un premier lot
              </Link>{" "}
              se vérifie ainsi.
            </p>
          </InfoBox>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="criteres"
          number="04"
          label="Seuils"
          readingTime="4 min"
          title={
            "Qu’est-ce qu’un critère d’acceptation qu’on peut opposer\u00a0?"
          }
        >
          <p>
            Un critère opposable porte quatre choses&nbsp;: un seuil chiffré,
            une assiette&nbsp;— sur quoi on mesure&nbsp;—, une fenêtre&nbsp;—
            pendant combien de temps&nbsp;— et le nom de qui produit la mesure.
            Qu’il en manque une, et deux personnes de bonne foi lisent le même
            écran en concluant l’inverse.
          </p>
          <p>
            Un modèle public et gratuit existe. Le cahier des clauses
            administratives générales des marchés publics de techniques de
            l’information et de la communication, approuvé par l’arrêté du
            30&nbsp;mars 2021, sépare la vérification en deux temps à son
            article&nbsp;32&nbsp;: la vérification d’aptitude, qui contrôle que
            le logiciel livré peut remplir les fonctions demandées, puis la
            vérification de service régulier, qui l’observe en fonctionnement.
          </p>

          <h3>Le seuil de 2&nbsp;%, et ce qu’il fait vraiment</h3>
          <p>
            La régularité s’observe pendant <strong>trente jours </strong>à
            partir de la décision positive de vérification d’aptitude, et le
            service est réputé régulier si l’indisponibilité cumulée sur le mois
            ne dépasse pas <strong>2&nbsp;% </strong>de la durée d’utilisation
            effective, qui s’étend de 8&nbsp;h à 18&nbsp;h, du lundi au
            vendredi, jours fériés exclus.
          </p>
          <p>
            Le calcul part de la journée d’ouverture&nbsp;: 10&nbsp;heures, soit
            600&nbsp;minutes, dont 2&nbsp;% font
            <strong> 12&nbsp;minutes</strong>. Reste à compter les jours ouvrés
            de la fenêtre, et ce nombre bouge&nbsp;: trente jours consécutifs en
            comptent 22 s’ils commencent un lundi, un mardi, un mercredi ou un
            jeudi, 21 un vendredi ou un dimanche, 20 un samedi&nbsp;— moins les
            jours fériés. Au maximum, donc&nbsp;:
            22&nbsp;×&nbsp;10&nbsp;=&nbsp;220&nbsp;heures, soit
            13&nbsp;200&nbsp;minutes, dont 2&nbsp;% font 264&nbsp;minutes&nbsp;—
            4&nbsp;h&nbsp;24. Du 1er au 30&nbsp;mai 2027, fenêtre ouverte un
            samedi, il n’en reste que 20&nbsp;; l’Ascension le 6 et le lundi de
            Pentecôte le 17 en retirent deux, soit 18&nbsp;jours ouvrés et
            3&nbsp;h&nbsp;36. Écrivez la règle des 12&nbsp;minutes par jour
            ouvré plutôt que ce total figé.
          </p>
          <p>
            Une sonde qui appelle une page toutes les 60&nbsp;secondes produit
            un point par minute, et chaque point manquant compte une minute. À
            cinq minutes d’intervalle, une coupure de trois minutes n’est vue
            que si un appel tombe pendant la coupure&nbsp;: sur cinq minutes de
            départs possibles, deux la laissent passer. L’échantillonnage fixe
            le grain de ce que vous pourrez démontrer.
          </p>
          <p>
            Le CCAG-TIC parle d’indisponibilités{" "}
            <em>imputables à chaque élément de matériel</em>. Sur une
            application hébergée, aucun élément de matériel n’est à vous&nbsp;:
            la clause doit nommer ce qui est indisponible&nbsp;— l’écran de
            saisie, le traitement de nuit&nbsp;— et qui produit la mesure.
          </p>

          <GuideTable
            caption="Quatre critères mous et leur réécriture mesurable"
            headers={[
              "Ce qui est écrit d’habitude",
              "Pourquoi ça ne tranche rien",
              "Réécriture avec seuil, assiette et fenêtre",
            ]}
            rows={[
              [
                "«\u00a0L’application doit être rapide.\u00a0»",
                "Rapide sur quel écran, avec combien de lignes, depuis quel poste\u00a0?",
                "La liste des tournées du jour s’affiche en moins de 2\u00a0secondes pour 9\u00a0chargements sur 10, sur 200\u00a0chargements mesurés depuis un poste de l’agence",
              ],
              [
                "«\u00a0L’application doit être disponible.\u00a0»",
                "Aucune fenêtre, aucune assiette horaire, aucun instrument",
                "Indisponibilité cumulée inférieure à 2\u00a0% de la durée d’utilisation, de 8\u00a0h à 18\u00a0h du lundi au vendredi, jours fériés exclus, sonde toutes les 60\u00a0secondes\u00a0: 12\u00a0minutes tolérées par jour ouvré compté",
              ],
              [
                "«\u00a0Les factures doivent être justes.\u00a0»",
                "Justes selon qui, et vérifiées sur combien de dossiers\u00a0?",
                "Sur les 28\u00a0dossiers du jeu d’essai, le total hors taxes calculé égale le total recalculé à la main par la responsable facturation, au centime près",
              ],
              [
                "«\u00a0L’application doit être accessible.\u00a0»",
                "Un scan automatique ne détermine pas la conformité",
                "Les 6\u00a0écrans de saisie s’utilisent entièrement au clavier, à 200\u00a0% de zoom, et les champs en erreur sont annoncés par un lecteur d’écran\u00a0: 2\u00a0heures de vérification humaine",
              ],
            ]}
          />

          <p>
            La ligne d’accessibilité demande une mise au point juridique.
            L’obligation française d’accessibilité numérique vient de
            l’article&nbsp;47 de la loi du 11&nbsp;février 2005&nbsp;; le décret
            du 24&nbsp;juillet 2019 n’en fixe que le seuil. Elle vise quatre
            catégories&nbsp;: les personnes morales de droit public&nbsp;;
            celles de droit privé délégataires d’une mission de service public
            ou créées pour un besoin d’intérêt général autre qu’industriel ou
            commercial&nbsp;; celles que les précédentes constituent pour le
            même objet&nbsp;; et les entreprises dont le chiffre d’affaires
            moyen annuel en France des trois derniers exercices clos dépasse
            250&nbsp;millions d’euros. Le critère est un chiffre d’affaires,
            jamais un effectif.
          </p>
          <p>
            Le second régime, applicable depuis le 28&nbsp;juin 2025, vise des
            produits et services destinés aux consommateurs&nbsp;— commerce en
            ligne, banque, transport de voyageurs, livre numérique. Un outil
            interne utilisé par vos salariés n’y figure pas. Hors de ces deux
            régimes, ne commandez pas d’audit de conformité pour ce
            projet-là&nbsp;: faites la traversée au clavier vous-même, deux
            heures suffisent à trouver les champs qu’on ne peut pas atteindre
            sans souris. Le W3C rappelle qu’aucun outil automatique ne détermine
            seul la conformité.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="donnees"
          number="05"
          label="Jeu d’essai"
          readingTime="2 min"
          title="Le jeu d’essai propre laisse passer les erreurs qui coûtent le plus cher"
        >
          <p>
            Une recette jouée sur vingt-huit dossiers bien formés démontre une
            chose&nbsp;: que le logiciel fonctionne sur vingt-huit dossiers bien
            formés. Ce qui casse en production, ce sont les situations que
            personne ne regarde&nbsp;— un client sans numéro SIRET, une commune
            fusionnée en 2019, un taux de taxe retiré depuis.
          </p>
          <p>
            Les trouver ne demande pas de copier la production. Pour chaque
            colonne qui entre dans une règle, comptez les valeurs distinctes
            réellement présentes, puis gardez au moins un représentant de chaque
            forme. Sur le cas construit, la colonne «&nbsp;type de client&nbsp;»
            en contient 7 et la colonne «&nbsp;mode de facturation&nbsp;» 4.
            Onze valeurs à représenter, donc&nbsp;: sept dossiers suffisent si
            vous les combinez, vingt-huit s’il faut jouer chaque croisement. Le
            cas construit retient le croisement complet&nbsp;:
            7&nbsp;×&nbsp;4&nbsp;=&nbsp;28&nbsp;dossiers.
          </p>

          <GuideTable
            caption="Six familles de données et ce que chacune met en défaut"
            headers={["Famille", "La question posée", "Sur le cas construit"]}
            rows={[
              [
                "Courante",
                "La situation la plus fréquente donne-t-elle le bon résultat\u00a0?",
                "1 tournée, 2\u00a0points de livraison, 1\u00a0facture",
              ],
              [
                "Limite",
                "Que se passe-t-il juste au seuil, à zéro, au dernier jour du mois\u00a0?",
                "Tournée sans livraison, remise exactement au plafond de 8\u00a0%",
              ],
              [
                "Absente",
                "Une valeur obligatoire manquante est-elle refusée proprement\u00a0?",
                "Client sans numéro SIRET, adresse sans code postal",
              ],
              [
                "Interdite",
                "Un rôle qui ne doit pas agir peut-il agir quand même\u00a0?",
                "Un exploitant modifie un tarif déjà validé",
              ],
              [
                "Répétée",
                "La même action deux fois crée-t-elle un doublon\u00a0?",
                "Double validation en moins de 2\u00a0secondes, flux réémis",
              ],
              [
                "Volume",
                "Le comportement tient-il sur un mois réel de données\u00a0?",
                "340\u00a0factures au lieu des 28 du jeu d’essai",
              ],
            ]}
          />

          <p>
            Cette dernière famille annule la mesure de la section&nbsp;04.
            Vingt-huit dossiers représentent 8,2&nbsp;% d’un mois réel à
            340&nbsp;factures. Un temps d’affichage relevé sur ce volume ne dit
            rien du 25 du mois, quand la liste charge tout l’historique. Chargez
            au moins l’équivalent d’un mois avant de mesurer un seuil de deux
            secondes.
          </p>

          <h3>
            Ce que la CNIL demande, et ce que «&nbsp;anonymiser&nbsp;» veut dire
          </h3>
          <p>
            Les deux fiches de la CNIL convergent&nbsp;: environnements de
            développement, de test et de production distincts, jeu de données
            fictif ou anonymisé, et anonymisation des données personnelles
            contenues dans les configurations importées. Cette contrainte décide
            de la forme du jeu d’essai, donc du planning de la section&nbsp;03.
          </p>
          <p>
            Anonymiser ne consiste pas à remplacer les noms par
            «&nbsp;Dupont&nbsp;»&nbsp;: les identifiants, les adresses, les
            numéros de compte et les commentaires libres portent autant
            d’information, et un croisement peut suffire à réidentifier une
            personne dans un fichier de 340&nbsp;lignes. Une bibliothèque de
            génération de données factices fait ce travail&nbsp;— c’est la ligne
            «&nbsp;préparer le jeu de données&nbsp;» du tableau, et elle se
            sous-traite au développeur qui connaît le schéma de la base.
          </p>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="incidents"
          number="06"
          label="Ce qui rate"
          readingTime="3 min"
          title="Ce qui rate, et ce que ça coûte"
        >
          <p>
            Les trois incidents ci-dessous prolongent le cas construit de Nadia
            et de Karim&nbsp;— ce ne sont pas des dossiers clients. Deux valeurs
            y sont choisies pour l’exemple, en plus des hypothèses de la
            section&nbsp;03&nbsp;: la part de factures touchées par l’erreur
            d’arrondi, fixée à 12&nbsp;%, et l’écart moyen sur chacune, fixé à
            34&nbsp;€. Le reste se déduit des nombres déjà posés.
          </p>

          <h3>
            La règle d’arrondi jamais jouée&nbsp;: 4&nbsp;182&nbsp;€ d’avoirs et
            700&nbsp;€ de reprise
          </h3>
          <p>
            Le prorata kilométrique n’a été testé que sur des distances
            entières, parce que le jeu d’essai n’en contenait pas d’autres. À
            12&nbsp;% des factures, l’erreur en touche 41 des 340&nbsp;émises
            chaque mois, avec un écart moyen de 34&nbsp;€ dans le même sens.
            Elle passe inaperçue jusqu’au troisième mois&nbsp;:
            41&nbsp;×&nbsp;34&nbsp;×&nbsp;3 font 4&nbsp;182&nbsp;€ d’avoirs à
            émettre. S’y ajoute la reprise des 123&nbsp;factures concernées, une
            journée pour la responsable facturation et une journée pour la
            contrôleuse de gestion, soit 2&nbsp;jours-personne et 700&nbsp;€ de
            temps interne. Un cas à la limite, écrit en quinze minutes, l’aurait
            attrapé.
          </p>

          <h3>
            Personne ne notifie la décision&nbsp;: 7&nbsp;500&nbsp;€ de levier
            perdus
          </h3>
          <p>
            La campagne se termine un vendredi. Personne n’écrit de décision, et
            l’application entre en service parce qu’il faut bien facturer. En
            marché public, le CCAG-TIC organise ce silence à son
            article&nbsp;33, et une seule fois&nbsp;: si l’acheteur ne notifie
            pas sa décision dans les sept jours qui suivent la vérification de
            service régulier, les prestations sont réputées admises. Le délai de
            trente jours, lui, ne suit pas la vérification d’aptitude&nbsp;: il
            la couvre, court à compter de l’écrit du titulaire annonçant les
            prestations prêtes à être vérifiées ou du procès-verbal de mise en
            ordre de marche, et n’emporte aucune admission tacite&nbsp;—
            décision positive, ajournement ou rejet. Un contrat privé ne reprend
            cette mécanique que s’il l’écrit&nbsp;; à défaut, seuls vos
            documents signés disent ce que produit le silence. Ce qui est perdu
            est concret&nbsp;: la tranche de 7&nbsp;500&nbsp;€ cesse d’être un
            levier tant qu’aucune décision n’est écrite.
          </p>

          <h3>
            La testeuse n’a pas eu ses jours&nbsp;: 23&nbsp;cas sur 56 jamais
            joués
          </h3>
          <p>
            Sur les 6,2&nbsp;jours du tableau de la section&nbsp;03, la part de
            Nadia est de 3,7&nbsp;jours&nbsp;: l’écriture, l’exécution et le
            rejeu. Le reste va au développeur pour le jeu de données, à la
            relecture croisée et à la réunion de décision. Elle a obtenu deux
            jours, parce que la clôture comptable du mois est tombée la même
            semaine. Deux jours de 7&nbsp;heures font 840&nbsp;minutes, et un
            cas écrit puis exécuté en coûte 25&nbsp;: elle joue 33&nbsp;cas,
            tous conformes, et le compte rendu annonce «&nbsp;33&nbsp;cas
            exécutés, 33&nbsp;réussis&nbsp;». Le chiffre est exact et ne veut
            rien dire&nbsp;: parmi les 23&nbsp;cas restants figurent quatre des
            six parcours critiques et les neuf cas de flux. L’export comptable
            rejette 62&nbsp;écritures à la première clôture&nbsp;; la
            contrôleuse de gestion et le comptable y passent trois quarts de
            journée chacun, soit 1,5&nbsp;jour-personne et 525&nbsp;€, et la
            clôture sort avec quatre jours de retard.
          </p>

          <GuidePremiumMemo
            eyebrow="Le point commun des trois"
            title="Aucun des trois n’est un défaut de code"
          >
            <p>
              Le premier vient du jeu de données. Le deuxième vient d’une
              décision que personne n’a écrite. Le troisième vient d’un agenda.
              Aucun ne se corrige en demandant à l’équipe de développement de
              mieux tester&nbsp;: les trois se traitent avant la livraison, avec
              le décompte des cas, les jours bloqués et le nom du décideur.
            </p>
          </GuidePremiumMemo>
        </GuidePremiumSection>

        <GuidePremiumSection
          id="mesures"
          number="07"
          label="Mesures"
          readingTime="2 min"
          title="Deux mesures disent si la recette a servi à quelque chose"
        >
          <p>
            Un taux de réussite mesure l’exécution. Deux autres nombres se
            calculent avec ce que vous avez déjà&nbsp;: l’un dit ce que la
            campagne a couvert, l’autre ce qu’elle a laissé passer.
          </p>

          <FormulaBox>
            {[
              "Couverture des règles",
              "  règles couvertes par au moins un cas ÷ règles réellement identifiées",
              "  cas construit\u00a0: 19 ÷ 26 = 73\u00a0%",
              "",
              "Taux d’échappement",
              "  anomalies trouvées en production sur 60\u00a0jours",
              "  ÷ (anomalies trouvées en recette + anomalies trouvées en production)",
              "  cas construit\u00a0: 8 ÷ (37 + 8) = 17,8\u00a0%",
            ].join("\n")}
          </FormulaBox>

          <p>
            Le piège de la première mesure tient dans son dénominateur, qui ne
            contient que les règles déjà écrites. Sur le cas construit, sept
            règles apparaissent pendant l’exécution&nbsp;— un plafond de remise,
            un traitement des livraisons hors France, une règle d’arrondi non
            écrite. Le dénominateur passe de 19 à 26, et la couverture tombe à
            73&nbsp;%. Ce 73&nbsp;% date du jour où ces sept règles sont
            apparues&nbsp;; ce n’est pas le verdict de la campagne. Chaque règle
            découverte rejoint le cahier des charges, puis un cas, avant la
            décision&nbsp;: 7&nbsp;×&nbsp;25&nbsp;minutes, soit 2&nbsp;h&nbsp;55
            à ajouter au budget de la section&nbsp;03.
          </p>
          <p>
            La seconde mesure demande d’attendre 60&nbsp;jours d’usage. Huit
            anomalies remontées en production contre 37&nbsp;trouvées en recette
            donnent 17,8&nbsp;%&nbsp;: quatre anomalies sur cinq ont été
            attrapées avant. Ce nombre ne dit rien de leur gravité&nbsp;: lisez
            les deux séries séparément. Il n’existe pas de seuil de référence
            publiable&nbsp;: la seule comparaison honnête est celle de votre
            campagne suivante, sur le même produit.
          </p>
          <h3>Relire un cas avant de le compter dans la campagne</h3>
          <p>
            L’atelier ci-dessous ne calcule aucune moyenne et ne stocke
            rien&nbsp;: huit points de relecture, dix compteurs de campagne,
            sept issues classées dans un ordre fixe. Un blocage de préparation
            passe devant une information manquante, qui passe devant un cas
            critique non prouvé. Vous n’y saisissez aucun contenu métier.
          </p>

          <AcceptanceReadinessTool />
        </GuidePremiumSection>

        <GuidePremiumSection
          id="decision"
          number="08"
          label="Clôture"
          readingTime="3 min"
          title={
            "Qui prononce l’acceptation, et que se passe-t-il si personne ne le fait\u00a0?"
          }
        >
          <p>
            La personne qui peut accepter, refuser ou accepter sous réserve se
            nomme avant la campagne. Sur le cas construit, c’est Karim,
            directeur d’exploitation. Le testeur constate&nbsp;; le décideur
            tranche. Cette séparation empêche une testeuse fatiguée de valider à
            18&nbsp;heures un dossier qui engage 7&nbsp;500&nbsp;€.
          </p>
          <p>
            Tenez quatre statuts. <strong>Réussi </strong>pour un cas joué et
            conforme. <strong>Échoué </strong>pour un cas joué et non conforme.{" "}
            <strong>Bloqué </strong>pour un cas qu’on n’a pas pu jouer.{" "}
            <strong>Non exécuté </strong>pour un cas qui n’a pas été tenté. Les
            deux derniers se confondent facilement dans un compte rendu, et ce
            sont eux qui ont produit le troisième incident. Le syllabus de
            l’ISTQB distingue de la même façon la gravité d’une anomalie, qui
            décrit son effet, et sa priorité, qui décrit l’ordre de traitement
            retenu&nbsp;: gardez les deux champs.
          </p>

          <FormulaBox>
            {[
              "RELEVÉ DE FIN DE CAMPAGNE",
              "",
              "Version exacte testée et environnement\u00a0:",
              "Ce qui était inclus, ce qui a été laissé de côté\u00a0:",
              "Cas — réussis / échoués / bloqués / non exécutés\u00a0:",
              "Parcours critiques prouvés, et ceux qui ne le sont pas\u00a0:",
              "Anomalies ouvertes — gravité, priorité, responsable, échéance\u00a0:",
              "Réserves acceptées et date de revue\u00a0:",
              "Preuves et endroit où elles sont rangées\u00a0:",
              "Ce que la campagne n’a pas démontré\u00a0:",
              "Décideur, décision, date\u00a0:",
            ].join("\n")}
          </FormulaBox>

          <p>
            Ce relevé se juge à sa relisibilité dans six mois, quand une facture
            fausse remontera. ISO/IEC/IEEE 29119-3:2021 propose des modèles de
            documentation de test, ISO/IEC 25010:2023 aide à ouvrir la liste des
            critères au-delà des seules fonctions&nbsp;; ni l’une ni l’autre ne
            fixe de seuil à la place de votre contrat.
          </p>

          <h3>Ce qui change le lendemain de l’acceptation</h3>
          <p>
            Ce que devient une correction demandée après l’acceptation dépend de
            vos documents&nbsp;: garantie écrite au marché, garantie légale, ou
            demande traitée au{" "}
            <Link href="/services/maintenance-evolution">
              contrat de maintenance
            </Link>{" "}
            avec son délai et son coût. Réglez ce point par écrit avant la
            décision. Vos 56&nbsp;cas, eux, deviennent un actif&nbsp;: la
            version suivante se vérifie en 4&nbsp;h&nbsp;40 de rejeu au lieu de
            26&nbsp;h&nbsp;10, à condition de les avoir rangés dans un endroit
            partagé.
          </p>
          <p>
            Deux vérifications restent en dehors de cette campagne&nbsp;: ce que
            chaque rôle ne doit pas pouvoir faire, et la restauration d’une
            sauvegarde réellement testée. Les{" "}
            <Link href="/guides/securite-application-metier">
              contrôles de sécurité d’une application métier
            </Link>{" "}
            les détaillent. Pour faire relire votre décompte de cas avant la
            livraison, vous pouvez{" "}
            <TrackedGuideCtaLink
              href="/demarrer-un-projet"
              placement="article_end_inline"
            >
              décrire votre projet
            </TrackedGuideCtaLink>
            .
          </p>

          <InfoBox
            variant="blue"
            title="La portée contractuelle ne se déduit pas de cette page"
          >
            <p>
              Les délais cités viennent du CCAG-TIC, qui ne s’applique qu’aux
              marchés qui s’y réfèrent. Pour un contrat privé, écrivez vous-même
              le délai de décision et l’effet du silence, puis faites relire la
              clause avant de la signer.
            </p>
          </InfoBox>

          <p className="text-sm">
            <strong>Transparence. </strong>Hagnéré Code développe des
            applications métier sur mesure et perçoit des honoraires si vous
            nous confiez un projet&nbsp;— y compris celui que cette page vous
            apprend à vérifier. Rien ici n’exige de passer par nous&nbsp;: le
            décompte des cas, le budget en jours, la réécriture des seuils et
            les deux mesures se refont avec vos propres nombres, et la section
            03 conclut qu’en dessous d’un certain budget cette campagne est une
            erreur. Les sources citées ont été rouvertes une à une le
            30&nbsp;août 2026 et portent chacune sa date&nbsp;; deux n’ont pas
            répondu et le disent. Elles sont à revérifier tous les douze mois.
            Aucun délai, aucun coût et aucun résultat ne sont garantis par cette
            page&nbsp;: seul un devis signé engage.
          </p>
        </GuidePremiumSection>
      </GuidePremiumLayout>
    </GuidesShell>
  );
}
