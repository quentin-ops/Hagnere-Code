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

const guide = getGuide("aides-creation-site-internet");

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
      name: "Aides à la création de site internet",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Le chèque France Num de 500 € existe-t-il encore ?",
    answer:
      "Non. Ce dispositif exceptionnel a fermé le 31 juillet 2021 et n’a pas été reconduit sous la même forme. Une page qui vous le présente comme une aide actuelle est donc ancienne. En 2026, recherchez plutôt les aides régionales ou locales, les accompagnements, les prêts et les dispositifs liés à votre situation de créateur.",
  },
  {
    question:
      "Existe-t-il une aide nationale pour payer n’importe quel site internet ?",
    answer:
      "Notre vérification du 21 juillet 2026 n’a pas identifié de subvention nationale forfaitaire ouverte à toute entreprise pour n’importe quel site. France Num recense en revanche de nombreux dispositifs dont les conditions dépendent du territoire, de la taille de l’entreprise et du projet. Vérifiez toujours la fiche actuelle et obtenez une confirmation avant de signer le devis.",
  },
  {
    question: "Un micro-entrepreneur peut-il obtenir une aide pour son site ?",
    answer:
      "Parfois. Certains dispositifs acceptent les micro-entrepreneurs, d’autres exigent une forme, une ancienneté, un chiffre d’affaires ou des salariés précis. L’ACRE et l’ARCE peuvent soutenir le démarrage sous conditions, mais ne sont pas des subventions réservées au site. Vérifiez aussi l’effet de la TVA non récupérable dans votre budget.",
  },
  {
    question: "Doit-on déposer le dossier avant de signer le devis ?",
    answer:
      "Souvent, mais la règle exacte appartient à chaque dispositif. Demandez quelle action constitue le début du projet : signature, acompte, commande ou première dépense. Tant que vous n’avez pas la réponse écrite, conservez le devis non signé et ne versez pas d’acompte. Une aide peut être refusée si le projet a commencé trop tôt.",
  },
  {
    question: "Quand l’aide est-elle versée ?",
    answer:
      "Cela dépend du règlement : avance, acompte ou paiement après réalisation sur factures acquittées. Ne bâtissez pas votre trésorerie sur un remboursement immédiat. Relevez les étapes, les justificatifs et le délai annoncé par l’organisme, puis prévoyez la possibilité de financer temporairement la totalité de la dépense.",
  },
  {
    question: "Le CPF peut-il financer la création du site par une agence ?",
    answer:
      "Le CPF finance une formation éligible, pas une prestation de création de site vendue sous un autre nom. Une formation peut vous apprendre à administrer ou améliorer votre site ; le travail réalisé par un prestataire doit être chiffré séparément. Vérifiez l’offre dans votre espace officiel et ne communiquez jamais vos identifiants à un vendeur.",
  },
  {
    question: "Un simple site vitrine est-il éligible ?",
    answer:
      "Cela dépend du dispositif. Certains financent la visibilité en ligne, d’autres seulement l’e-commerce, un projet de transformation plus large, un diagnostic ou une formation. Lisez la liste des dépenses admises et demandez si la conception, le développement, les contenus, l’abonnement et la maintenance sont traités de la même manière.",
  },
  {
    question: "Comment vérifier qu’une aide est encore ouverte ?",
    answer:
      "Commencez par France Num et les-aides.fr, puis ouvrez la page de la région, de l’intercommunalité ou de l’organisme qui attribue réellement l’aide. Vérifiez la date, l’état du guichet, votre commune, votre activité, les dépenses admises et la date de début autorisée. Terminez par un courriel ou un appel donnant une confirmation pour votre cas.",
  },
  {
    question: "Peut-on cumuler plusieurs aides ?",
    answer:
      "Parfois, mais les règles de cumul, l’assiette des dépenses et les plafonds d’aides publiques varient. Déclarez les aides déjà obtenues et demandez à chaque organisme quelle part d’une même facture peut être financée. Ne faites pas l’addition vous-même à partir des taux affichés sans validation écrite.",
  },
  {
    question: "Une association peut-elle obtenir une aide pour son site ?",
    answer:
      "Oui dans certains programmes associatifs ou territoriaux, mais pas automatiquement dans les aides destinées aux entreprises. Interrogez la commune, l’intercommunalité, la région, votre fédération et les appels à projets correspondant à l’objet de l’association. Vérifiez séparément les conditions de chaque dispositif.",
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
          { label: "Aides à la création de site internet" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vous avez reçu un devis pour votre site et vous cherchez une aide pour le financer ? Voici les dispositifs à regarder en 2026, ce qu’ils paient réellement et l’ordre à respecter avant de signer."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "01",
            title: "Aides actuelles à vérifier",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Dossier avant signature",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Trésorerie calculée sans surprise",
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
            href: "/guides/prix-site-vitrine",
            label: "Prix d’un site vitrine",
          },
          {
            href: "/ressources/kit-cahier-des-charges-site-internet",
            label: "Modèle de cahier des charges",
          },
          {
            href: "/services/sites-vitrines",
            label: "Création de site sur mesure",
          },
          { href: "/methode", label: "Notre méthode" },
          { href: "/tarifs", label: "Nos tarifs détaillés" },
        ]}
        faqTitle="Aides à la création d’un site : les réponses utiles"
        faqItems={faqItems}
      >
        <p className="lead">
          Vous prévoyez peut-être un site à 6 000, 10 000 ou 20 000 € et vous
          voulez savoir si une subvention peut réduire la facture.{" "}
          <strong>La réponse courte :</strong> il n’existe plus de chèque
          national automatique de 500 €, mais certaines entreprises peuvent
          obtenir une aide régionale ou locale, un accompagnement, un prêt ou un
          soutien lié à la création d’activité. Les conditions dépendent de
          votre adresse, de votre secteur, de votre taille et du type de site.
        </p>

        <p>
          Commencez par rechercher le dispositif, puis faites confirmer que
          votre dépense est admise{" "}
          <strong>avant de signer ou de verser un acompte</strong>. Tant que
          l’accord n’est pas écrit, préparez le projet comme si l’aide était de
          0 €. Cette prudence ne signifie pas qu’il faut renoncer : elle évite
          seulement qu’un financement incertain bloque un site dont votre
          activité a besoin.
        </p>

        <InfoBox
          variant="blue"
          title="Les quatre réponses à obtenir avant de compter l’aide"
        >
          Votre entreprise est-elle admise ? La création de ce type de site
          fait-elle partie des dépenses financées ? À partir de quelle date
          pouvez-vous signer ? Quand et sur quels justificatifs l’argent
          sera-t-il versé ? Une réponse écrite à ces quatre questions vaut
          davantage qu’un pourcentage aperçu dans un article.
        </InfoBox>

        <GuideToc
          items={[
            {
              id: "reponse-rapide",
              label: "1. Les financements à regarder en 2026",
            },
            { id: "aides-mortes", label: "2. Écarter les anciens dispositifs" },
            {
              id: "aides-nationales",
              label: "3. Comprendre les solutions nationales",
            },
            {
              id: "fiscalite",
              label: "4. Intégrer le traitement comptable et fiscal",
            },
            {
              id: "createurs",
              label: "5. Utiliser les aides liées à la création",
            },
            {
              id: "formation",
              label: "6. Distinguer formation et création du site",
            },
            { id: "regions", label: "7. Chercher l’aide de votre territoire" },
            {
              id: "aura",
              label: "8. Cas de l’Auvergne-Rhône-Alpes et de la Savoie",
            },
            { id: "mode-emploi", label: "9. Déposer dans le bon ordre" },
            {
              id: "arnaques",
              label: "10. Lire un contrat de location avec attention",
            },
            {
              id: "micro",
              label: "11. Cas des micro-entreprises et associations",
            },
            {
              id: "sans-aide",
              label: "12. Financer un projet sans subvention",
            },
            {
              id: "methode",
              label: "13. Préparer votre demande en cinq étapes",
            },
          ]}
        />

        <h2 id="reponse-rapide">1. Les financements à regarder en 2026</h2>

        <p>
          Un <strong>site vitrine</strong> présente l’entreprise et permet de la
          contacter. Un <strong>site e-commerce</strong> permet de commander ou
          payer en ligne. Cette différence peut décider de l’éligibilité :
          certains programmes financent la vente en ligne ou une transformation
          plus large, mais pas un simple site de présentation.
        </p>

        <GuideTable
          caption="Les grandes familles de financement"
          headers={["Solution", "Ce qu’elle apporte", "Premier contrôle"]}
          rows={[
            [
              "Subvention locale ou régionale",
              "Une part de certaines dépenses",
              "Territoire, activité, taille et dépenses admises",
            ],
            [
              "Accompagnement",
              "Diagnostic, conseil ou formation pris en charge",
              "Ce qui est gratuit et ce qui reste à payer",
            ],
            [
              "Prêt professionnel",
              "Un financement à rembourser dans le temps",
              "Conditions, coût, différé et mensualité supportable",
            ],
            [
              "Aide liée à la création",
              "Allègement ou capital selon votre situation",
              "Conditions personnelles et usage libre ou encadré",
            ],
            [
              "Traitement comptable ou fiscal",
              "Un effet sur le résultat ou l’impôt selon le cas",
              "Qualification par votre expert-comptable",
            ],
          ]}
        />

        <p>
          Le moteur{" "}
          <a
            href="https://www.francenum.gouv.fr/aides-financieres"
            target="_blank"
            rel="noopener noreferrer"
          >
            France Num
          </a>{" "}
          indique que les conditions varient selon les régions et évoluent dans
          le temps. Il renvoie vers une recherche portant sur près de 200 aides
          pour les TPE et PME. Ce nombre ne signifie pas que 200 dispositifs
          financeront votre site : il montre pourquoi le code postal et le
          profil de l’entreprise doivent être renseignés avant toute conclusion.
        </p>

        <h2 id="aides-mortes">2. Écarter les anciens dispositifs</h2>

        <p>
          Le chèque France Num de 500 € était une mesure exceptionnelle. Son
          guichet a fermé le 31 juillet 2021. Il ne faut donc pas l’ajouter à un
          plan de financement 2026, même si d’anciennes pages continuent à
          apparaître dans les moteurs de recherche.
        </p>

        <GuideTable
          caption="Comment reconnaître une information ancienne"
          headers={["Indice", "Vérification", "Décision"]}
          rows={[
            [
              "L’article parle du plan de relance sanitaire",
              "Chercher une date de clôture et une page actuelle",
              "Ne rien budgéter sans nouveau texte officiel",
            ],
            [
              "Le lien officiel ne fonctionne plus",
              "Rechercher le dispositif sur le site de l’organisme",
              "Considérer l’aide comme non confirmée",
            ],
            [
              "Aucune date de mise à jour n’est visible",
              "Appeler l’organisme qui attribue l’aide",
              "Demander une confirmation par courriel",
            ],
          ]}
        />

        <p>
          L’ancienne adresse du <strong>bilan du chèque France Num</strong>
          renvoyait encore vers le dispositif historique ; elle n’était plus
          accessible lors de notre contrôle du 21 juillet 2026. Nous ne la
          présentons donc pas comme une démarche à entreprendre. Cette absence
          ne prouve pas à elle seule une règle, mais elle confirme qu’une
          archive ne doit jamais être présentée comme un guichet actif.
        </p>

        <h2 id="aides-nationales">
          3. Comprendre les solutions nationales et leurs limites
        </h2>

        <p>
          Notre recherche n’a pas identifié de subvention nationale forfaitaire
          qui paierait automatiquement la création de n’importe quel site. Il
          existe en revanche des prêts, garanties, accompagnements et
          dispositifs réservés à certaines situations.
        </p>

        <p>
          La fiche France Num du{" "}
          <a
            href="https://www.francenum.gouv.fr/aides-financieres/financez-la-numerisation-de-votre-tpe-pme-avec-le-pret-boost-transformation"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prêt Boost – Transformation numérique
          </a>{" "}
          publiée en 2024 présente un prêt Bpifrance pour des entreprises de 2 à
          49 salariés créées depuis plus de trois ans, destiné notamment aux
          logiciels, au conseil, à la formation ou à la visibilité en ligne. La
          fiche mentionne alors 5 000 à 75 000 €, sur trois à cinq ans, sans
          garantie personnelle, avec un différé annoncé de neuf à douze mois.
          Ces conditions doivent être confirmées directement auprès de Bpifrance
          au moment de la demande : un prêt se rembourse et n’est pas une
          subvention.
        </p>

        <InfoBox variant="emerald" title="Le bon réflexe">
          Présentez le projet par son résultat : obtenir des demandes
          qualifiées, vendre en ligne, réduire les appels ou connecter le site à
          la gestion. L’organisme pourra mieux dire si la dépense entre dans un
          programme qu’avec la seule phrase « je veux un nouveau site ».
        </InfoBox>

        <h3 id="fiscalite">4. Intégrer le traitement comptable et fiscal</h3>

        <p>
          Une dépense de site peut être comptabilisée de différentes manières
          selon ce qui est acheté, la durée d’utilisation, la part créée en
          interne et la situation de l’entreprise. Le{" "}
          <a
            href="https://bofip.impots.gouv.fr/bofip/1818-PGP.html/identifiant=BOI-BIC-CHG-20-30-30-20170301"
            target="_blank"
            rel="noopener noreferrer"
          >
            BOFiP
          </a>{" "}
          fournit le cadre fiscal général, mais une page de doctrine ne permet
          pas de qualifier votre facture sans connaître le projet.
        </p>

        <p>Transmettez quatre éléments à votre expert-comptable :</p>
        <ul>
          <li>
            <strong>la nature de chaque dépense</strong> : conception,
            développement, abonnement ou maintenance ;
          </li>
          <li>
            <strong>la durée d&apos;utilisation prévue</strong> : campagne
            courte ou site utilisé plusieurs années ;
          </li>
          <li>
            <strong>une facture détaillée</strong>, avec les montants séparés
            par prestation plutôt qu&apos;une ligne globale ;
          </li>
          <li>
            <strong>votre situation de TVA</strong>, car une TVA récupérable ou
            non ne produit pas le même besoin de trésorerie.
          </li>
        </ul>

        <p>
          Le{" "}
          <a
            href="https://entreprendre.service-public.fr/vosdroits/F35494"
            target="_blank"
            rel="noopener noreferrer"
          >
            crédit d’impôt innovation
          </a>{" "}
          concerne, sous conditions, la conception d’un prototype ou d’une
          installation pilote d’un produit nouveau présentant des performances
          supérieures. Un site vitrine ordinaire n’entre pas dans cette
          définition par le simple fait qu’il est nouveau pour votre entreprise.
          Faites vérifier un éventuel projet innovant avant de retenir cet
          avantage dans le budget.
        </p>

        <h3 id="createurs">5. Utiliser les aides liées à la création</h3>

        <p>
          Si vous créez ou reprenez une entreprise, certaines aides améliorent
          votre trésorerie globale. Elles ne remboursent pas nécessairement la
          facture du site, mais peuvent vous aider à financer le lancement dans
          lequel il s’inscrit.
        </p>

        <GuideTable
          caption="Deux dispositifs à ne pas confondre avec une aide au site"
          headers={["Dispositif", "Effet", "Question à vérifier"]}
          rows={[
            [
              "ACRE",
              "Exonération temporaire d’une partie des cotisations sociales",
              "Votre éligibilité, la demande et la durée applicables",
            ],
            [
              "ARCE",
              "Versement sous conditions d’une partie des droits au chômage en capital",
              "Choix avec le maintien de l’ARE et conditions de versement",
            ],
          ]}
        />

        <p>
          Les fiches officielles{" "}
          <a
            href="https://www.service-public.fr/particuliers/vosdroits/F11677"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACRE
          </a>{" "}
          et{" "}
          <a
            href="https://www.service-public.fr/particuliers/vosdroits/F15252"
            target="_blank"
            rel="noopener noreferrer"
          >
            ARCE
          </a>{" "}
          détaillent les conditions actualisées. Au 21 juillet 2026, la fiche
          ARCE indique 60 % des droits ARE restant à verser, sous conditions et
          avec deux versements. Ce pourcentage peut évoluer : utilisez le
          simulateur ou la confirmation de France Travail pour votre situation.
        </p>

        <h3 id="formation">6. Distinguer formation et création du site</h3>

        <p>
          Une formation peut apprendre à publier des contenus, suivre les
          demandes, améliorer le référencement ou gérer une boutique. Elle ne
          doit pas servir à cacher dans son prix la fabrication complète du site
          par le formateur.
        </p>

        <GuideTable
          caption="Séparer clairement les deux prestations"
          headers={["Besoin", "Type de dépense", "Résultat attendu"]}
          rows={[
            [
              "Apprendre à administrer le site",
              "Formation",
              "Vous réalisez des exercices et gagnez en autonomie",
            ],
            [
              "Concevoir et développer le site",
              "Prestation",
              "Le prestataire livre les pages et fonctions convenues",
            ],
            [
              "Former après la mise en ligne",
              "Deux lignes séparées",
              "Le site et l’apprentissage sont chiffrés distinctement",
            ],
          ]}
        />

        <p>
          Pour le CPF comme pour un financement par un opérateur de compétences,
          vérifiez l’éligibilité de la formation et la participation restant à
          votre charge au moment de l’inscription. Ne donnez jamais vos
          identifiants à un démarcheur.
        </p>

        <h2 id="regions">
          7. Chercher l’aide de votre territoire et vérifier le guichet local
        </h2>

        <p>
          Les dispositifs les plus proches d’un besoin de site sont souvent
          régionaux, intercommunaux ou portés par une chambre consulaire. Ils
          peuvent changer en cours d’année selon le budget disponible.
          Recherchez avec le siège de l’entreprise, pas seulement avec le nom de
          la région.
        </p>

        <ol>
          <li>Renseignez votre code postal dans le moteur France Num.</li>
          <li>
            Consultez{" "}
            <a
              href="https://les-aides.fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              les-aides.fr
            </a>
            , puis ouvrez la page de l’organisme qui attribue réellement l’aide.
          </li>
          <li>
            Appelez la CCI ou la CMA pour les programmes de l’intercommunalité.
          </li>
          <li>Demandez le règlement et l’état actuel de l’enveloppe.</li>
        </ol>

        <p>
          Exemple actuel : la{" "}
          <a
            href="https://www.bretagne.bzh/aides/fiches/pass-commerce-artisanat/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Région Bretagne
          </a>{" "}
          présente le PASS Commerce et Artisanat comme une aide disponible. La
          fiche consultée le 21 juillet 2026 annonce 30 % des dépenses admises,
          dans la limite de 7 500 € d’aide et 25 000 € de dépenses, avec de
          nombreuses conditions sur l’activité, l’effectif, le chiffre
          d’affaires, la commune et le projet. La numérisation peut être admise,
          mais chaque dépense est examinée : ce cas illustre une méthode, pas un
          droit identique partout en France.
        </p>

        <h3>Exemple illustratif fictif de calcul</h3>

        <p>
          <strong>Exemple illustratif fictif.</strong> Un site est devisé à 10
          000 € HT. L’organisme confirme par écrit que 7 000 € seulement sont
          admis et applique un taux de 30 %. L’aide théorique maximale est donc
          de 2 100 €, sous réserve de décision. L’entreprise doit encore prévoir
          7 900 € HT, la TVA selon sa situation et, si le paiement intervient
          après réalisation, la trésorerie nécessaire pour régler d’abord la
          totalité de la facture.
        </p>

        <h3 id="aura">8. Cas de l’Auvergne-Rhône-Alpes et de la Savoie</h3>

        <p>
          La page historique <strong>Atouts Numériques</strong> décrivait un
          accompagnement régional autour du diagnostic et de la transformation
          numérique. Nous n’avons pas pu confirmer son contenu actuel depuis
          cette adresse lors du contrôle du 21 juillet 2026. Nous ne la
          présentons donc pas comme un guichet ouvert : il serait trompeur
          d’annoncer ici un montant ou une prise en charge.
        </p>

        <p>
          Pour une entreprise en Savoie, contactez la CCI Savoie, la CMA si vous
          êtes artisan, puis l’intercommunalité du siège. Donnez quatre
          informations : commune, activité, effectif et projet avec budget
          estimé. Demandez si un diagnostic est obligatoire avant la demande et
          si le prestataire doit posséder une qualification particulière.
        </p>

        <h2 id="mode-emploi">9. Déposer dans le bon ordre</h2>

        <p>Suivez cet ordre pour ne pas fragiliser votre demande :</p>
        <ol>
          <li>
            <strong>Décrivez le besoin</strong> sur une page : objectif, type de
            site, utilisateurs et budget.
          </li>
          <li>
            <strong>Cherchez les dispositifs</strong> auprès de France Num, de
            la CCI ou CMA, de la région et de l&apos;intercommunalité. Conservez
            les liens et leur date de consultation.
          </li>
          <li>
            <strong>Confirmez votre éligibilité</strong> et gardez le courriel
            ou le compte rendu d&apos;appel.
          </li>
          <li>
            <strong>Demandez un devis détaillé sans le signer</strong>, afin que
            ses lignes correspondent aux dépenses éventuellement admises.
          </li>
          <li>
            <strong>Déposez le dossier complet</strong> avant toute dépense ou
            tout début de projet interdit par le règlement, puis gardez
            l&apos;accusé de réception.
          </li>
          <li>
            <strong>
              Attendez l&apos;accord qui vous autorise à commencer
            </strong>
            , puis signez et fixez le calendrier de paiement.
          </li>
          <li>
            <strong>Conservez les preuves</strong> : facture, paiement et
            éléments livrés serviront au dossier de versement.
          </li>
        </ol>

        <InfoBox
          variant="amber"
          title="Ne confondez pas accord de dépôt et accord de financement"
        >
          Un accusé de réception prouve que le dossier a été envoyé. Il ne
          garantit pas que l’aide sera accordée. Vérifiez le document qui vous
          autorise réellement à commencer et le montant retenu avant de modifier
          votre engagement financier.
        </InfoBox>

        <h2 id="arnaques">10. Lire un contrat de location avec attention</h2>

        <p>
          Une location de site peut correspondre à un service réel, mais elle
          doit être comparée à un achat et l’engagement complet doit être
          compris. La{" "}
          <a
            href="https://www.economie.gouv.fr/dgccrf/laction-de-la-dgccrf/les-enquetes/location-financiere-aupres-des-professionnels-demarches"
            target="_blank"
            rel="noopener noreferrer"
          >
            DGCCRF
          </a>{" "}
          a documenté des démarchages rapides auprès de professionnels : contrat
          signé en une visite, parfois cédé à une société de location
          financière, avec des engagements pouvant aller par exemple jusqu’à 48
          mois. Dans ces montages, le financeur peut réclamer les loyers même
          lorsqu’un désaccord existe avec le fournisseur.
        </p>

        <p>Avant de signer, demandez par écrit :</p>
        <ul>
          <li>le coût total jusqu’à la fin de l’engagement ;</li>
          <li>l’identité du fournisseur et celle du financeur ;</li>
          <li>les conditions de résiliation et les sommes encore dues ;</li>
          <li>ce que vous récupérez : domaine, contenus, données et accès ;</li>
          <li>ce qui se passe si le service ne correspond pas au contrat.</li>
        </ul>

        <p>
          Prenez le temps de relire hors du rendez-vous et faites-vous
          conseiller si l’engagement est important. L’objectif n’est pas de
          rejeter toute location, mais de savoir exactement ce que votre
          entreprise paiera et possédera.
        </p>

        <h2 id="micro">11. Cas des micro-entreprises et associations</h2>

        <GuideTable
          caption="Les vérifications selon votre situation"
          headers={["Situation", "Piste utile", "Point à ne pas oublier"]}
          rows={[
            [
              "Micro-entreprise",
              "Aides locales, accompagnement, ACRE ou ARCE selon le cas",
              "TVA parfois non récupérable et critères variables",
            ],
            [
              "Entreprise récemment créée",
              "Dispositifs de création et prêts d’honneur",
              "Ancienneté minimale de certaines aides numériques",
            ],
            [
              "Association",
              "Collectivité, fédération et appels à projets associatifs",
              "Les aides aux entreprises ne s’appliquent pas automatiquement",
            ],
            [
              "Commerce ou artisanat de proximité",
              "Programmes de centralité et de modernisation",
              "Commune, clientèle et activité souvent déterminantes",
            ],
          ]}
        />

        <p>
          Le règlement européen des aides publiques peut aussi influer sur le
          cumul. La page{" "}
          <a
            href="https://entreprendre.service-public.gouv.fr/actualites/A17026"
            target="_blank"
            rel="noopener noreferrer"
          >
            Service Public Entreprendre consacrée au registre de minimis
          </a>{" "}
          rappelle l’importance de recenser certaines aides reçues. Demandez à
          l’organisme si son dispositif relève de ce régime et quelles
          informations déclarer ; n’appliquez pas un plafond général sans
          vérifier votre cas.
        </p>

        <h2 id="sans-aide">12. Financer un projet sans subvention</h2>

        <p>
          Si aucune aide ne correspond à votre entreprise, vous pouvez encore
          réduire l’effort initial sans sacrifier le résultat essentiel.
        </p>

        <GuideTable
          caption="Quatre façons de rendre le projet finançable"
          headers={["Option", "Ce qu’elle change", "Condition de réussite"]}
          rows={[
            [
              "Première version plus courte",
              "Vous lancez les pages et fonctions indispensables",
              "Les ajouts futurs sont déjà classés",
            ],
            [
              "Solution standard bien configurée",
              "Moins de développement spécifique",
              "Les limites restent compatibles avec le besoin",
            ],
            [
              "Paiement lié aux étapes",
              "La trésorerie est répartie dans le temps",
              "Chaque paiement correspond à un résultat défini",
            ],
            [
              "Conserver l’existant et améliorer",
              "Vous investissez sur le point qui bloque les ventes",
              "Le site actuel peut encore être maintenu correctement",
            ],
          ]}
        />

        <p>
          Utilisez le{" "}
          <Link href="/ressources/kit-cahier-des-charges-site-internet">
            modèle de cahier des charges
          </Link>{" "}
          pour obtenir des offres comparables, puis consultez les repères de{" "}
          <Link href="/guides/prix-site-vitrine">prix d’un site vitrine</Link>.
          Un projet moins large mais bien ciblé peut être plus utile qu’un
          projet surdimensionné dépendant d’une aide incertaine.
        </p>

        <h2 id="methode">13. Préparer votre demande en cinq étapes</h2>

        <ol>
          <li>
            <strong>Écrivez le résultat attendu.</strong> Présenter
            l’entreprise, recevoir des demandes, vendre en ligne ou réduire un
            travail manuel.
          </li>
          <li>
            <strong>Rassemblez les informations de l’entreprise.</strong>{" "}
            Adresse, activité, date de création, effectif, chiffre d’affaires et
            aides déjà reçues.
          </li>
          <li>
            <strong>Recherchez puis confirmez.</strong> Utilisez France Num et
            les-aides.fr, puis contactez l’organisme qui décide.
          </li>
          <li>
            <strong>Demandez un devis détaillé sans l’accepter.</strong> Séparez
            conception, développement, contenus, abonnement, formation et
            maintenance.
          </li>
          <li>
            <strong>Décidez avec deux budgets.</strong> Un scénario avec l’aide
            confirmée et un scénario sans aide. Lancez seulement si la
            trésorerie supporte le calendrier réel.
          </li>
        </ol>

        <GuideInlineCTA
          title="Vous voulez vérifier le budget avant de lancer le site ?"
          description="Décrivez votre activité, votre commune, le type de site et le budget disponible. Nous vous aidons à transformer le besoin en devis lisible et à identifier les organismes officiels à interroger. Nous ne promettons ni éligibilité ni subvention : la décision appartient toujours au financeur."
          tags={[
            "Budget expliqué",
            "Sources officielles",
            "Aucune aide promise",
          ]}
          ctaLabel="Décrire mon projet"
          ctaHref="/demarrer-un-projet"
        />

        <hr />

        <p className="text-sm">
          <strong>Sources vérifiées le 21 juillet 2026 :</strong>{" "}
          <a
            href="https://www.francenum.gouv.fr/aides-financieres"
            target="_blank"
            rel="noopener noreferrer"
          >
            France Num, recherche d’aides financières
          </a>{" "}
          ; archive du bilan du chèque France Num, contrôlée comme inaccessible
          le 21 juillet 2026 ;{" "}
          <a
            href="https://www.francenum.gouv.fr/aides-financieres/financez-la-numerisation-de-votre-tpe-pme-avec-le-pret-boost-transformation"
            target="_blank"
            rel="noopener noreferrer"
          >
            France Num, Prêt Boost Transformation numérique
          </a>{" "}
          ;{" "}
          <a
            href="https://bofip.impots.gouv.fr/bofip/1818-PGP.html/identifiant=BOI-BIC-CHG-20-30-30-20170301"
            target="_blank"
            rel="noopener noreferrer"
          >
            BOFiP, dépenses de création de sites internet
          </a>{" "}
          ;{" "}
          <a
            href="https://entreprendre.service-public.fr/vosdroits/F35494"
            target="_blank"
            rel="noopener noreferrer"
          >
            Service Public Entreprendre, crédit d’impôt innovation
          </a>{" "}
          ;{" "}
          <a
            href="https://www.service-public.fr/particuliers/vosdroits/F11677"
            target="_blank"
            rel="noopener noreferrer"
          >
            Service Public, ACRE
          </a>{" "}
          et{" "}
          <a
            href="https://www.service-public.fr/particuliers/vosdroits/F15252"
            target="_blank"
            rel="noopener noreferrer"
          >
            ARCE
          </a>{" "}
          ; ancienne fiche Atouts Numériques, non confirmée comme dispositif
          actif le 21 juillet 2026 ;{" "}
          <a
            href="https://www.bretagne.bzh/aides/fiches/pass-commerce-artisanat/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Région Bretagne, PASS Commerce et Artisanat
          </a>{" "}
          ;{" "}
          <a
            href="https://les-aides.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            les-aides.fr
          </a>{" "}
          ;{" "}
          <a
            href="https://www.economie.gouv.fr/dgccrf/laction-de-la-dgccrf/les-enquetes/location-financiere-aupres-des-professionnels-demarches"
            target="_blank"
            rel="noopener noreferrer"
          >
            DGCCRF, location financière auprès de professionnels
          </a>{" "}
          ;{" "}
          <a
            href="https://entreprendre.service-public.gouv.fr/actualites/A17026"
            target="_blank"
            rel="noopener noreferrer"
          >
            Service Public Entreprendre, registre de minimis
          </a>
          . Les dispositifs, montants et calendriers peuvent changer. Seul
          l’organisme qui attribue l’aide peut confirmer votre éligibilité. Ce
          guide ne constitue pas un conseil fiscal, financier ou juridique
          personnalisé.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
