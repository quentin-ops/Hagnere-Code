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
import { formatGuideDate, getGuide, guidePath, guideUrl } from "@/lib/guides";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("agence-web-ou-freelance");

export const metadata: Metadata = {
  title: guide.title,
  description: guide.metaDescription,
  authors: [{ name: "Quentin Hagnéré" }],
  creator: "Hagnéré Code",
  publisher: "Hagnéré Code",
  alternates: { canonical: guidePath(guide) },
  openGraph: {
    ...OG_BASE,
    type: "article",
    title: guide.cardTitle,
    description: guide.metaDescription,
    url: guidePath(guide),
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
  headline: guide.cardTitle,
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
      name: "Agence web ou freelance",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Agence web ou freelance : que choisir pour créer un site ?",
    answer:
      "Choisissez un freelance lorsque le projet est bien défini, repose surtout sur une compétence principale et que la personne disponible possède les références adaptées. Choisissez une agence lorsque plusieurs métiers doivent avancer ensemble, que le calendrier exige des relais ou que vous voulez un seul responsable contractuel. Dans les deux cas, comparez les personnes nommées, le travail inclus, la maintenance, les accès et les conditions de départ.",
  },
  {
    question: "Un freelance est-il toujours moins cher qu’une agence ?",
    answer:
      "Non. Un indépendant a souvent moins de frais de structure, mais le prix dépend surtout du nombre de jours, du niveau d’expérience et des services inclus. Une agence peut inclure conception, gestion de projet, tests et remplacement d’un intervenant ; un freelance peut coordonner d’autres spécialistes. Comparez deux offres qui couvrent exactement le même travail et calculez le coût sur plusieurs années.",
  },
  {
    question: "Comment comparer un tarif journalier et un forfait ?",
    answer:
      "Demandez au prestataire d’indiquer les grandes étapes, les personnes concernées, le nombre de jours estimé et ce qui peut modifier le prix. Le tarif journalier moyen, ou TJM, est le prix facturé pour une journée. Un forfait fixe le prix d’un résultat défini. Les deux sont comparables si les tâches, les exclusions, les corrections et la maintenance sont écrites.",
  },
  {
    question: "Est-il plus risqué de travailler avec un freelance ?",
    answer:
      "Le statut ne suffit pas à mesurer le risque. Vérifiez l’ancienneté, la disponibilité, les références joignables, la personne qui reprend en cas d’absence et surtout ce que votre entreprise possède : domaine, hébergement, dépôt de code, données, documentation et droits prévus au contrat. Demandez les mêmes garanties à une agence, qui peut aussi changer d’équipe ou cesser une activité.",
  },
  {
    question: "Une agence peut-elle sous-traiter le développement ?",
    answer:
      "Oui. Demandez simplement qui réalisera chaque partie, dans quel pays les données seront traitées, qui contrôlera la qualité et qui restera responsable. La sous-traitance n’est pas un défaut lorsqu’elle est annoncée et organisée. Les règles juridiques dépendent du montage contractuel ; faites relire le contrat si le projet ou les données sont sensibles.",
  },
  {
    question: "À qui appartient le code du site ?",
    answer:
      "Le paiement ne décrit pas à lui seul tous les droits transmis. Le contrat doit distinguer le code créé pour votre projet, les composants déjà existants, les logiciels ou thèmes tiers, les contenus et leurs licences. Il doit aussi préciser les droits cédés ou concédés et les éléments remis. Pour un projet important, faites valider cette partie par un professionnel du droit.",
  },
  {
    question: "La TVA rend-elle un freelance moins cher ?",
    answer:
      "Seulement dans certaines situations. Un indépendant peut bénéficier de la franchise en base de TVA sous conditions, mais ce régime est distinct du régime micro-entreprise et peut évoluer. Une entreprise qui récupère intégralement la TVA compare généralement les prix hors taxes. Une structure qui ne la récupère pas compare les montants toutes taxes comprises. Vérifiez le devis et les règles officielles à la date de signature.",
  },
  {
    question:
      "L’intelligence artificielle doit-elle réduire le prix du projet ?",
    answer:
      "Pas automatiquement. Elle peut accélérer certaines tâches, mais les études disponibles ne mesurent pas tout un projet avec ses échanges, son design, ses tests et sa mise en ligne. Demandez comment le prestataire l’utilise, protège vos informations et contrôle le résultat. Le bon prix reste celui du travail réellement nécessaire pour livrer ce qui a été convenu.",
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
          { label: "Agence web ou freelance" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vous avez reçu un devis d’un freelance et un devis d’agence, mais ils ne semblent pas couvrir la même chose ? Voici comment comparer les personnes, les prix, les délais, la continuité et le contrat sans choisir sur une étiquette."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "01",
            title: "Le bon choix selon le projet",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Prix comparés à travail égal",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Accès et maintenance vérifiés",
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
            href: "/guides/combien-coute-un-site-internet",
            label: "Combien coûte un site internet ?",
          },
          {
            href: "/guides/cahier-des-charges-site-internet",
            label: "Cahier des charges de site internet",
          },
          {
            href: "/guides/combien-de-temps-pour-creer-un-site",
            label: "Combien de temps pour créer un site ?",
          },
          {
            href: "/guides/creer-un-site-avec-ia",
            label: "Créer un site avec l’IA",
          },
          {
            href: "/guides/cout-maintenance-site-internet",
            label: "Coût de la maintenance",
          },
          { href: "/methode", label: "Notre méthode" },
        ]}
        faqTitle="Agence ou freelance : les réponses utiles"
        faqItems={faqItems}
        showWhitePaperPromo
      >
        <p className="lead">
          Vous avez peut-être reçu deux propositions : un freelance à 9 000 € et
          une agence à 15 000 €. La première semble moins chère, mais la seconde
          ajoute le design, les textes et la maintenance.{" "}
          <strong>Vous ne pouvez pas encore les comparer.</strong> Un freelance
          est un professionnel indépendant qui réalise directement tout ou
          partie du projet. Une agence est une entreprise qui peut réunir
          plusieurs métiers et organiser leur travail. Aucun des deux statuts ne
          garantit à lui seul la qualité, le respect du délai ou la continuité.
        </p>

        <p>
          La réponse simple est la suivante : choisissez d’abord les personnes
          réellement disponibles et le contenu de leur offre. Un freelance
          expérimenté convient très bien à un projet clair qui repose surtout
          sur une compétence. Une agence devient utile lorsque plusieurs métiers
          doivent avancer ensemble, qu’un remplacement doit être possible ou
          qu’un interlocuteur doit porter l’ensemble du résultat. Ce guide vous
          aide à remettre les deux devis sur la même base avant de décider.
        </p>

        <GuideToc
          items={[
            {
              id: "reponse-rapide",
              label: "1. Le choix selon votre situation",
            },
            {
              id: "de-quoi-parle-t-on",
              label: "2. Savoir qui travaillera vraiment",
            },
            { id: "prix-reels", label: "3. Comprendre les tarifs journaliers" },
            {
              id: "arithmetique",
              label: "4. Comparer deux prix à travail égal",
            },
            {
              id: "capacite",
              label: "5. Vérifier le délai et la disponibilité",
            },
            {
              id: "continuite",
              label: "6. Prévoir la continuité sans dramatiser",
            },
            {
              id: "sous-traitance",
              label: "7. Poser les bonnes questions sur les partenaires",
            },
            {
              id: "propriete",
              label: "8. Récupérer le code, les comptes et les droits",
            },
            {
              id: "arnaques",
              label: "9. Reconnaître une offre professionnelle",
            },
            {
              id: "troisieme-voie",
              label: "10. Examiner les solutions intermédiaires",
            },
            {
              id: "clauses-techniques",
              label: "11. Écrire les engagements utiles",
            },
            { id: "tco", label: "12. Calculer le coût sur trois ans" },
            {
              id: "verdict-par-profil",
              label: "13. Choisir avec des critères simples",
            },
            { id: "methode", label: "14. Comparer les offres en cinq étapes" },
          ]}
        />

        <h2 id="reponse-rapide">1. Le choix selon votre situation</h2>

        <GuideTable
          caption="Dans quelle situation chaque organisation est-elle utile ?"
          headers={[
            "Votre projet",
            "Option souvent adaptée",
            "Condition importante",
          ]}
          rows={[
            [
              "Site vitrine ou amélioration bien définie",
              "Freelance expérimenté",
              "La compétence principale, le calendrier et la maintenance sont confirmés",
            ],
            [
              "Site avec design, contenus et développement à mener ensemble",
              "Agence ou collectif organisé",
              "Les personnes et responsabilités sont nommées dans l’offre",
            ],
            [
              "Application liée au fonctionnement de l’entreprise",
              "Équipe avec continuité",
              "Le support, les accès, les tests et la reprise sont prévus",
            ],
            [
              "Petit besoin ponctuel sur un site existant",
              "Spécialiste indépendant ou mainteneur actuel",
              "Le coût d’intervention et l’accès à l’existant sont clairs",
            ],
            [
              "Besoin encore difficile à décrire",
              "Atelier court avant le devis final",
              "Le document produit reste utilisable avec d’autres prestataires",
            ],
          ]}
        />

        <p>
          Le budget ne tranche pas à lui seul. Un projet de 20 000 € peut être
          parfaitement confié à un indépendant qui connaît le métier et
          s’entoure au besoin. Un projet moins cher peut nécessiter plusieurs
          spécialités si le positionnement, les textes, les photographies et le
          développement doivent être créés en même temps.
        </p>

        <h2 id="de-quoi-parle-t-on">2. Savoir qui travaillera vraiment</h2>

        <p>
          Les mots « agence » et « freelance » décrivent une forme
          d’organisation, pas l’équipe réellement mobilisée. Une agence peut
          confier votre projet à une seule personne. Un indépendant peut
          travailler depuis longtemps avec une designer et une rédactrice.
          Demandez donc les noms, les rôles, le temps prévu et la personne qui
          prendra la décision en cas de désaccord.
        </p>

        <p>Posez quatre questions simples pendant l&apos;entretien :</p>
        <ul>
          <li>
            <strong>Qui réalise chaque partie ?</strong> Demandez les noms, les
            rôles et l&apos;expérience liée à votre projet. Vous jugerez les
            personnes, pas seulement la marque.
          </li>
          <li>
            <strong>Qui reste votre interlocuteur ?</strong> Une personne
            responsable et un remplaçant identifié évitent de perdre les
            décisions et les retours.
          </li>
          <li>
            <strong>Qu&apos;est-ce qui est confié à des partenaires ?</strong>{" "}
            Les intervenants et le contrôle prévu doivent être annoncés.
          </li>
          <li>
            <strong>Qui intervient après la mise en ligne ?</strong> Faites
            préciser le mainteneur, ses horaires et son prix ou son forfait.
          </li>
        </ul>

        <p>
          Hagnéré Code est une agence : ce guide est donc écrit par l’un des
          acteurs comparés. Pour limiter ce biais, la conclusion repose sur des
          questions que vous pouvez poser de la même façon à tous les
          prestataires, y compris à nous.
        </p>

        <h2 id="prix-reels">3. Comprendre les tarifs journaliers</h2>

        <p>
          Le <strong>tarif journalier moyen</strong>, souvent abrégé en TJM, est
          le montant facturé pour une journée de travail. Il sert à estimer un
          projet, mais ne dit pas combien de jours seront nécessaires ni ce que
          la journée comprend.
        </p>

        <p>
          Les baromètres ne décrivent pas tous le même marché. Le{" "}
          <a
            href="https://www.silkhom.com/barometre-des-tjm-informatique-electronique-digital/"
            target="_blank"
            rel="noopener noreferrer"
          >
            baromètre SILKHOM 2025
          </a>{" "}
          s’appuie sur les données de plus de 20 000 freelances entre 2019 et
          2025 et distingue Paris, grandes villes et régions.{" "}
          <a
            href="https://tjmetre.fr/barometre"
            target="_blank"
            rel="noopener noreferrer"
          >
            TJMètre
          </a>{" "}
          affiche en 2026 une médiane déclarée de 530 € par jour pour les
          développeurs et pour les profils full-stack, à partir d’un échantillon
          dont il publie la taille. Le{" "}
          <a
            href="https://www.blogdumoderateur.com/freelances-taux-journaliers-moyens-it-france-2025/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog du Modérateur
          </a>{" "}
          relaie d’autres repères issus de Morgan Philips, souvent plus élevés
          pour des fonctions et contextes différents. Ces chiffres orientent ;
          ils ne remplacent pas un devis adapté à une TPE ou PME.
        </p>

        <p>Un tarif varie surtout avec :</p>
        <ul>
          <li>
            l’expérience réellement pertinente et les références comparables ;
          </li>
          <li>
            la rareté d’une spécialité dont votre projet a vraiment besoin ;
          </li>
          <li>le lieu, le type de client et le contexte du baromètre cité ;</li>
          <li>la durée estimée ou garantie de la mission ;</li>
          <li>
            les services inclus : design, réunions, tests, textes et support.
          </li>
        </ul>

        <h2 id="arithmetique">4. Comparer deux prix à travail égal</h2>

        <p>
          Commencez par une addition simple : nombre de jours par grande étape
          multiplié par le tarif, puis ajoutez les achats externes et le temps
          de vos équipes. Un forfait reste parfaitement valable, mais demandez à
          quoi correspondent ses grandes lignes et ce qui déclencherait un coût
          supplémentaire.
        </p>

        <h3>Deux offres qui ne couvrent pas le même travail</h3>

        <p>
          <strong>Exemple fictif, construit pour expliquer le calcul.</strong>{" "}
          Ce cas ne décrit ni un client ni un témoignage réel. Un indépendant
          propose 18 jours à 520 €, soit 9 360 € HT, mais l&apos;entreprise
          fournit les textes et le design. Une agence propose 14 500 € HT avec
          cinq jours de design, la rédaction de huit pages, la gestion du projet
          et trois mois de corrections. L’écart affiché est de 5 140 €, mais les
          offres ne couvrent pas la même chose. Pour comparer, l’entreprise doit
          soit retirer ces services du devis d’agence, soit chiffrer leur ajout
          à l’offre indépendante.
        </p>

        <GuideTable
          caption="La fiche à remplir pour chaque proposition"
          headers={["Partie du projet", "Jours ou prix", "Inclus exactement"]}
          rows={[
            [
              "Compréhension du besoin",
              "…",
              "Ateliers, document final, exclusions",
            ],
            ["Design et contenus", "…", "Écrans, pages, textes, images"],
            ["Développement", "…", "Fonctions et connexions décrites"],
            [
              "Tests et mise en ligne",
              "…",
              "Appareils, corrections, transfert",
            ],
            ["Après lancement", "…", "Garantie, maintenance, délai de réponse"],
          ]}
        />

        <p>
          Vérifiez aussi si le prix est hors taxes ou toutes taxes comprises. Le{" "}
          <a
            href="https://entreprendre.service-public.gouv.fr/vosdroits/F23267"
            target="_blank"
            rel="noopener noreferrer"
          >
            régime fiscal de la micro-entreprise
          </a>{" "}
          et la{" "}
          <a
            href="https://www.economie.gouv.fr/entreprises/gerer-sa-fiscalite-et-ses-impots/autres-impots-et-taxes/tva-quels-sont-les-differents-regimes-dimposition"
            target="_blank"
            rel="noopener noreferrer"
          >
            franchise en base de TVA
          </a>{" "}
          sont deux sujets distincts. Ne présumez pas qu’un freelance ne facture
          jamais la TVA ; vérifiez le devis et comparez en hors taxes si votre
          entreprise la récupère.
        </p>

        <h2 id="capacite">
          5. Vérifier le délai, la continuité et les partenaires
        </h2>

        <p>
          Le délai dépend moins du statut que du calendrier réel. Demandez quand
          la personne commence, combien de jours elle réserve chaque semaine,
          quels autres projets avancent en parallèle et qui valide chez vous.
          Une agence n’est pas automatiquement plus rapide ; un freelance n’est
          pas automatiquement moins disponible.
        </p>

        <p>
          Un calendrier utile répond concrètement à quatre moments du projet :
        </p>
        <ol>
          <li>
            <strong>Le démarrage :</strong> une date et la liste des éléments à
            fournir, pas seulement « après signature ».
          </li>
          <li>
            <strong>La première version :</strong> un résultat que vous pourrez
            voir et essayer, pas un simple pourcentage d&apos;avancement.
          </li>
          <li>
            <strong>Les corrections :</strong> une période, un nombre de retours
            et une règle de priorité.
          </li>
          <li>
            <strong>La mise en ligne :</strong> les responsables présents et la
            solution prévue si la date doit être reportée.
          </li>
        </ol>

        <h3 id="continuite">6. Prévoir la continuité sans dramatiser</h3>

        <p>
          Toute entreprise peut perdre un collaborateur, changer d’activité ou
          rencontrer une absence. La continuité repose donc sur ce qui est
          transmis, pas sur une promesse d’être toujours disponible. Appliquez
          la même liste à un freelance et à une agence : domaine au nom de votre
          entreprise, hébergement accessible, code sauvegardé, données
          exportables, documentation et contact de reprise.
        </p>

        <InfoBox variant="emerald" title="Le test le plus concret">
          Demandez : « si une autre équipe devait reprendre le site lundi, quels
          fichiers, comptes et documents recevrait-elle ? » Une réponse
          professionnelle peut tenir sur une page et doit fonctionner chez un
          freelance comme dans une agence.
        </InfoBox>

        <h3 id="sous-traitance">
          7. Poser les bonnes questions sur les partenaires
        </h3>

        <p>
          Une agence peut confier le design, la rédaction ou une partie du
          développement à des partenaires. Un freelance peut faire de même.
          Cette organisation est saine si elle est annoncée, si les compétences
          sont vérifiées et si un responsable reste clairement engagé sur le
          résultat.
        </p>

        <ul>
          <li>qui intervient et sur quelle partie ;</li>
          <li>qui relit et teste le travail ;</li>
          <li>où les données peuvent être consultées ou hébergées ;</li>
          <li>qui répond en cas de problème ;</li>
          <li>comment les droits sur les créations sont transmis.</li>
        </ul>

        <p>
          L’
          <a
            href="https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000006467140"
            target="_blank"
            rel="noopener noreferrer"
          >
            article 3 de la loi du 31 décembre 1975
          </a>{" "}
          fait partie du cadre français de la sous-traitance. Son application
          dépend toutefois du contrat et de l’organisation retenue. Ce guide
          donne des questions pratiques, pas un avis juridique personnalisé.
        </p>

        <h2 id="propriete">8. Récupérer le code, les comptes et les droits</h2>

        <p>
          Être « propriétaire de son site » recouvre plusieurs choses :
          l’adresse du site, l’hébergement, les données, le code créé pour vous,
          les textes, les images et les licences des éléments tiers. Écrivez-les
          séparément dans le devis ou le contrat.
        </p>

        <p>
          L’
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958"
            target="_blank"
            rel="noopener noreferrer"
          >
            article L131-3 du Code de la propriété intellectuelle
          </a>{" "}
          prévoit notamment que les droits cédés soient mentionnés distinctement
          et que leur utilisation soit délimitée. La situation exacte varie
          selon l’auteur, le contrat, les composants antérieurs et les licences.
          Faites relire la clause lorsque l’investissement ou l’usage le
          justifie.
        </p>

        <GuideTable
          caption="Ce que votre entreprise doit pouvoir retrouver"
          headers={["Élément", "À écrire", "À vérifier avant paiement final"]}
          rows={[
            [
              "Nom de domaine et hébergement",
              "Titulaire, administrateurs et facturation",
              "Votre entreprise peut se connecter",
            ],
            [
              "Code et données",
              "Lieu de sauvegarde, export et éléments remis",
              "Un export et une copie sont disponibles",
            ],
            [
              "Design, textes et images",
              "Auteur, droits et licences",
              "Les justificatifs sont classés",
            ],
            [
              "Outils et composants tiers",
              "Licence, abonnement et limites",
              "Les coûts récurrents sont connus",
            ],
          ]}
        />

        <h2 id="arnaques">9. Reconnaître une offre professionnelle</h2>

        <p>
          Commencez par les signes positifs : le prestataire reformule votre
          besoin, nomme ce qui n’est pas inclus, vous montre des références
          joignables, explique son calendrier, détaille les accès et chiffre
          l’après-lancement. Une proposition claire n’a pas besoin de vous
          presser.
        </p>

        <p>Demandez une précision écrite lorsque :</p>
        <ul>
          <li>
            le prix est donné avant toute question sur vos clients et objectifs
            ;
          </li>
          <li>
            le devis promet « un site complet » sans lister les pages et
            fonctions ;
          </li>
          <li>
            le domaine ou l’hébergement restera uniquement au nom du prestataire
            ;
          </li>
          <li>
            la maintenance est obligatoire mais son contenu ou sa durée reste
            flou ;
          </li>
          <li>une remise disparaît si vous ne signez pas immédiatement ;</li>
          <li>le coût ou les conditions de départ ne sont pas indiqués.</li>
        </ul>

        <p>
          Aucun de ces points ne condamne automatiquement une offre. Ils
          montrent simplement ce qui doit être clarifié avant de verser un
          acompte.
        </p>

        <h2 id="troisieme-voie">10. Examiner les solutions intermédiaires</h2>

        <p>
          Le choix ne se limite pas à une personne seule ou à une grande agence.
          Un studio de quelques seniors, un collectif stable ou un freelance
          principal accompagné de spécialistes peuvent réunir relation directe
          et compétences multiples. Vous pouvez aussi conserver votre site
          actuel et ne commander qu’une amélioration mesurable.
        </p>

        <ul>
          <li>
            <strong>Collectif de freelances :</strong> plusieurs spécialistes, à
            condition qu’un contrat principal et un responsable soient
            clairement nommés.
          </li>
          <li>
            <strong>Petit studio senior :</strong> une relation directe avec une
            équipe courte, après vérification de la disponibilité de chacun.
          </li>
          <li>
            <strong>Freelance principal avec partenaires :</strong> un
            interlocuteur qui connaît tout le projet, si les partenaires et la
            continuité sont documentés.
          </li>
        </ul>

        <h2 id="clauses-techniques">
          11. Écrire les engagements et comparer le coût complet
        </h2>

        <p>
          Un bon engagement décrit un résultat que vous pourrez vérifier. Évitez
          les formulations absolues comme « site très rapide », « référencement
          garanti » ou « disponibilité parfaite ». Préférez un test, un outil,
          une période et la personne qui intervient si le résultat n’est pas
          atteint.
        </p>

        <GuideTable
          caption="Transformer une promesse en engagement vérifiable"
          headers={["Sujet", "Formulation utile", "Responsable"]}
          rows={[
            [
              "Pages et fonctions",
              "Liste exacte avec cas acceptés et refusés",
              "Client et prestataire valident ensemble",
            ],
            [
              "Performance",
              "Mesure convenue sur des pages et appareils définis",
              "Prestataire mesure, client valide",
            ],
            [
              "Corrections",
              "Période, anomalies couvertes et délai de réponse",
              "Prestataire selon le contrat",
            ],
            [
              "Mise en ligne",
              "Liste de vérification et solution de retour",
              "Les deux parties aux dates prévues",
            ],
            [
              "Maintenance",
              "Actions incluses, horaires et prix hors forfait",
              "Mainteneur nommé",
            ],
          ]}
        />

        <p>
          Google explique comment les{" "}
          <a
            href="https://developers.google.com/search/docs/appearance/core-web-vitals"
            target="_blank"
            rel="noopener noreferrer"
          >
            Core Web Vitals
          </a>{" "}
          mesurent certains aspects de l’expérience de chargement. Ces mesures
          sont utiles, mais elles ne résument ni la qualité globale d’un site ni
          son classement futur. Définissez ce qui sera testé au lieu de demander
          une garantie générale.
        </p>

        <h3 id="tco">12. Calculer le coût sur trois ans</h3>

        <p>
          Le devis initial n’est qu’une partie du budget. Additionnez la
          création, le temps de votre équipe, les abonnements, l’hébergement, la
          maintenance, les évolutions probables et une éventuelle reprise. Cette
          comparaison peut révéler qu’une offre plus chère au départ revient
          moins cher si elle inclut réellement le suivi dont vous aurez besoin —
          ou l’inverse.
        </p>

        <GuideTable
          caption="Budget à comparer sur la même durée"
          headers={["Dépense", "Année 1", "Années suivantes"]}
          rows={[
            ["Création et contenus", "… €", "évolutions éventuelles"],
            ["Hébergement et outils", "… €", "… € par an"],
            ["Maintenance", "… €", "… € par an"],
            ["Temps de votre équipe", "… heures", "… heures"],
            [
              "Reprise ou sortie",
              "conditions écrites",
              "budget estimé si nécessaire",
            ],
          ]}
        />

        <h2 id="verdict-par-profil">13. Choisir avec des critères simples</h2>

        <GuideTable
          caption="Le choix final ne dépend pas d’un seuil de budget"
          headers={[
            "Ce qui compte le plus",
            "Choix souvent logique",
            "Dernière vérification",
          ]}
          rows={[
            [
              "Relation directe avec un spécialiste",
              "Freelance ou petit studio",
              "Disponibilité et solution en cas d’absence",
            ],
            [
              "Plusieurs métiers à coordonner",
              "Agence ou collectif organisé",
              "Noms et temps réellement réservés",
            ],
            [
              "Continuité d’un outil important",
              "Équipe avec maintenance contractuelle",
              "Accès, documentation et délai d’intervention",
            ],
            [
              "Budget très limité",
              "Solution standard ou amélioration ciblée",
              "Ne pas supprimer les éléments nécessaires au résultat",
            ],
            [
              "Besoin encore incertain",
              "Étude courte avant construction",
              "Document réutilisable sans engagement automatique",
            ],
          ]}
        />

        <h2 id="methode">14. Comparer les offres en cinq étapes</h2>

        <ol>
          <li>
            <strong>Écrivez le même besoin pour tous.</strong> Listez le public,
            les pages, les fonctions, les contenus à fournir, l’échéance et le
            budget disponible.
          </li>
          <li>
            <strong>Demandez qui fait quoi.</strong> Noms, rôles, partenaires,
            disponibilité et personne responsable.
          </li>
          <li>
            <strong>Remettez les prix sur la même base.</strong> Ajoutez ce qui
            manque à chaque offre et comparez hors taxes ou toutes taxes
            comprises selon votre situation.
          </li>
          <li>
            <strong>Appelez deux références.</strong> Demandez comment se sont
            passés les retours, le délai, la mise en ligne et les demandes après
            livraison.
          </li>
          <li>
            <strong>Relisez la sortie avant l’entrée.</strong> Vérifiez les
            comptes, le code, les données, les droits, la maintenance et le coût
            d’un changement de prestataire.
          </li>
        </ol>

        <p>
          Le{" "}
          <Link href="/ressources/kit-cahier-des-charges-site-internet">
            modèle de cahier des charges
          </Link>{" "}
          permet d’envoyer la même demande à chaque candidat. Nos{" "}
          <Link href="/tarifs">tarifs publics</Link> et notre{" "}
          <Link href="/methode">méthode de projet</Link> montrent également ce
          que nous mettons nous-mêmes derrière une proposition. Vous pouvez
          ainsi nous comparer sur les mêmes critères.
        </p>
        <p>
          Pour un outil interne, le guide{" "}
          <Link href="/guides/choisir-prestataire-application-metier">
            choisir le prestataire d’une application métier
          </Link>{" "}
          va plus loin : tous les candidats travaillent sur le même cas de
          commande, puis leurs réponses sont consignées en six phrases.
        </p>

        <GuideInlineCTA
          title="Vous voulez comparer un devis freelance et un devis d’agence ?"
          description="Envoyez les deux offres avec vos objectifs et votre échéance. Nous vous aidons à repérer les différences de travail inclus, de responsabilités, de maintenance et d’accès. Notre réponse peut aussi confirmer qu’un freelance ou une solution plus simple est le meilleur choix."
          tags={[
            "Comparaison humaine",
            "Différences expliquées",
            "Sans engagement",
          ]}
          ctaLabel="Faire relire mes devis"
          ctaHref="/demarrer-un-projet"
        />

        <hr />

        <p className="text-sm">
          <strong>Sources consultées en juillet 2026 :</strong>{" "}
          <a
            href="https://www.silkhom.com/barometre-des-tjm-informatique-electronique-digital/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SILKHOM, baromètre des TJM 2025
          </a>{" "}
          ;{" "}
          <a
            href="https://tjmetre.fr/barometre"
            target="_blank"
            rel="noopener noreferrer"
          >
            TJMètre, baromètre 2026
          </a>{" "}
          ;{" "}
          <a
            href="https://www.blogdumoderateur.com/freelances-taux-journaliers-moyens-it-france-2025/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog du Modérateur, synthèse Morgan Philips 2025
          </a>{" "}
          ;{" "}
          <a
            href="https://entreprendre.service-public.gouv.fr/vosdroits/F23267"
            target="_blank"
            rel="noopener noreferrer"
          >
            Service Public Entreprendre, régime micro
          </a>{" "}
          ;{" "}
          <a
            href="https://www.economie.gouv.fr/entreprises/gerer-sa-fiscalite-et-ses-impots/autres-impots-et-taxes/tva-quels-sont-les-differents-regimes-dimposition"
            target="_blank"
            rel="noopener noreferrer"
          >
            economie.gouv.fr, régimes de TVA
          </a>{" "}
          ;{" "}
          <a
            href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958"
            target="_blank"
            rel="noopener noreferrer"
          >
            Légifrance, article L131-3
          </a>{" "}
          ;{" "}
          <a
            href="https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000006467140"
            target="_blank"
            rel="noopener noreferrer"
          >
            Légifrance, loi sur la sous-traitance
          </a>{" "}
          ;{" "}
          <a
            href="https://developers.google.com/search/docs/appearance/core-web-vitals"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Search Central, Core Web Vitals
          </a>
          . Les baromètres mesurent des populations et contextes différents :
          ils ne constituent ni un tarif obligatoire ni une moyenne de devis
          pour les TPE-PME. Les passages juridiques et fiscaux ne remplacent pas
          un conseil adapté à votre contrat.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
