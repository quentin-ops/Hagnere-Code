import type { Metadata } from "next";
import Link from "next/link";
import { GuideLayout } from "@/components/guides/guide-layout";
import {
  GuideToc,
  InfoBox,
  GuideTable,
  GuideInlineCTA,
  FormulaBox,
} from "@/components/guides/guide-content-blocks";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { OG_BASE, SITE_URL } from "@/lib/seo";
import { getGuide, guidePath, guideUrl, formatGuideDate } from "@/lib/guides";

const guide = getGuide("cahier-des-charges-site-internet");

// --- METADATA SEO (title/description/dates depuis src/lib/guides.ts) ---
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
    publishedTime: `${guide.datePublished}T09:00:00+02:00`,
    modifiedTime: `${guide.dateModified}T09:00:00+02:00`,
    authors: [`${SITE_URL}/equipe`],
    // og:image générée par opengraph-image.tsx (convention Next.js).
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// --- JSON-LD SCHEMAS (constantes statiques uniquement) ---
const articleJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: guide.cardTitle,
  description: guide.metaDescription,
  url: guideUrl(guide),
  mainEntityOfPage: { "@type": "WebPage", "@id": guideUrl(guide) },
  image: [`${guideUrl(guide)}/opengraph-image`],
  datePublished: guide.datePublished,
  dateModified: guide.dateModified,
  inLanguage: "fr-FR",
  articleSection: guide.section,
  wordCount: 4840,
  isPartOf: {
    "@type": "WebPage",
    "@id": `${SITE_URL}/guides`,
    name: "Guides web Hagnéré Code",
  },
  author: {
    "@type": "Person",
    name: "Quentin Hagnéré",
    jobTitle: "Fondateur de Hagnéré Code",
    url: `${SITE_URL}/equipe`,
    knowsAbout: [
      "Développement web",
      "Cadrage de projets web",
      "Next.js",
      "React",
      "SEO technique",
      "Chiffrage de projets web",
    ],
    sameAs: ["https://www.linkedin.com/in/quentin-hagnere"],
    worksFor: { "@id": `${SITE_URL}/#organization` },
  },
  publisher: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Hagnéré Code",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logos/logo-dark.png`,
    },
  },
});

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
    {
      "@type": "ListItem",
      position: 3,
      name: "Cahier des charges site internet",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Qu'est-ce qu'un cahier des charges de site internet ?",
    answer:
      "C'est le document qui décrit ce que votre futur site doit faire : contexte de l'entreprise, objectifs mesurables, cibles, fonctionnalités priorisées, contenus, exigences techniques (performance, RGPD, accessibilité), budget et délais. Il sert de langage commun entre vous et les prestataires, rend les devis comparables et devient la base contractuelle du projet une fois annexé au contrat.",
  },
  {
    question: "Pourquoi faire un cahier des charges pour son site web ?",
    answer:
      "Trois raisons concrètes. Sans cadrage, les devis varient du simple au triple pour le même projet — impossible de comparer. Ensuite, le CDC limite les avenants (ces suppléments au devis signés en cours de projet) : ce qui est écrit est chiffré, ce qui ne l'est pas se négocie en cours de route. Enfin, il vous protège juridiquement : en 2020, le tribunal de commerce de Paris a refusé tout remboursement à une start-up mécontente de ses applications… précisément parce qu'aucun cahier des charges ne formalisait ses attentes.",
  },
  {
    question: "Comment rédiger un cahier des charges pour un site internet ?",
    answer:
      "Suivez dix sections : présentation de l'entreprise, objectifs chiffrés, cibles, périmètre fonctionnel priorisé (indispensable vs souhaitable), arborescence et contenus, design et références, exigences techniques (performance, RGPD, accessibilité), SEO, intégrations avec l'existant (CRM, ERP), budget et gouvernance. Règle d'or : décrivez des besoins et des comportements mesurables (« charger en moins de 2,5 s sur mobile »), jamais des solutions techniques ou des adjectifs vagues.",
  },
  {
    question: "Que mettre dans un cahier des charges de site web ?",
    answer:
      "Le minimum vital : qui vous êtes et pourquoi ce site, 2 ou 3 objectifs chiffrés, vos cibles, la liste des pages et fonctionnalités classées indispensable/souhaitable, qui fournit chaque contenu, 2-3 sites de référence que vous aimez, vos outils existants à connecter, vos exigences de performance et de conformité, votre fourchette de budget et votre échéance. Dix pages bien structurées valent mieux que quarante pages de prose.",
  },
  {
    question: "Combien de pages doit faire un cahier des charges ?",
    answer:
      "Le consensus du marché : 4 à 8 pages pour un site vitrine, 5 à 15 pages pour un site PME complet, plusieurs dizaines pour une plateforme avec back-office. Notre avis d'agence qui en reçoit chaque semaine : la longueur importe moins que la présence des dix sections et d'objectifs mesurables — un excellent CDC de vitrine tient en 6 pages.",
  },
  {
    question: "Qui doit rédiger le cahier des charges : le client ou l'agence ?",
    answer:
      "Vous êtes le seul à pouvoir exprimer le besoin métier ; le prestataire est le mieux placé pour le challenger et le traduire en spécifications. Le bon partage : vous rédigez l'expression de besoin (nos dix sections), l'agence pose les questions qui dérangent et co-construit le périmètre final. C'est exactement le rôle de notre Discovery Sprint : 2 jours, 1 500 €, et vous repartez avec des spécifications écrites, un prototype cliquable et un devis ferme.",
  },
  {
    question: "Faut-il indiquer son budget dans le cahier des charges ?",
    answer:
      "Oui — au moins une fourchette. « Je préfère ne pas le dire » ne vous protège pas : sans repère, le prestataire sous-dimensionne ou sur-dimensionne sa proposition, et vous recevez des devis inexploitables. Chiffrer sérieusement un projet représente une dizaine d'heures de travail côté agence : annoncer 8 000 à 12 000 € permet de calibrer la meilleure solution dans vos moyens. En marchés publics, communiquer le budget est même une condition pour écarter les offres qui le dépassent.",
  },
  {
    question: "Existe-t-il un modèle de cahier des charges gratuit (Word, PDF) ?",
    answer:
      "Oui : le modèle complet de ce guide est libre de copie, sans email demandé — avec un squelette prêt à coller dans Word, Google Docs ou Notion. C'est notre parti pris face aux modèles verrouillés derrière des formulaires. France Num, le portail gouvernemental, maintient aussi une sélection de modèles téléchargeables. Méfiez-vous des templates datés : la plupart des PDF en circulation datent de 2017-2021 et ignorent le RGPD opérationnel, l'accessibilité EAA et les Core Web Vitals.",
  },
  {
    question: "Quelle différence entre un brief, une expression de besoin et un cahier des charges ?",
    answer:
      "L'expression de besoin est un document court (5 pages max), non contractuel, qui décrit le problème sans imposer la solution. Le brief est l'intermédiaire : besoin identifié, solution ouverte. Le cahier des charges est le document détaillé et difficilement modifiable une fois validé, à vocation contractuelle. Pour un site vitrine standard, une bonne expression de besoin + un cadrage avec l'agence suffisent souvent — inutile de sur-investir dans un CDC de 40 pages.",
  },
  {
    question: "Comment faire le cahier des charges d'une refonte de site ?",
    answer:
      "Ajoutez au modèle classique les sections que les templates génériques oublient toujours : l'audit de l'existant (trafic, pages les mieux classées sur Google), l'inventaire des URLs et le plan de redirections 301 — les renvois automatiques des anciennes adresses de pages vers les nouvelles —, la stratégie de migration SEO et le suivi post-lancement. Une refonte sans plan de redirections peut détruire en une mise en ligne un trafic construit en trois ans — c'est la première chose que nous vérifions dans un CDC de refonte.",
  },
  {
    question: "Un cahier des charges a-t-il une valeur juridique ?",
    answer:
      "Seulement s'il est contresigné par les deux parties ou annexé au contrat — il devient alors le référentiel de conformité du projet. Point de vigilance : certains prestataires font prévaloir leur proposition commerciale sur votre CDC via la clause d'ordre de priorité des documents. Vérifiez cette clause avant de signer, et exigez que le CDC validé figure en annexe.",
  },
  {
    question: "Un cahier des charges est-il nécessaire pour un petit site vitrine ?",
    answer:
      "Un document de 40 pages, non. Une expression de besoin structurée (nos dix sections en version courte, 4 à 6 pages), oui — c'est elle qui rend les devis comparables et évite les malentendus. Chez Hagnéré Code, décrivez simplement votre projet via notre parcours guidé de 3 minutes : nous vous répondons sous 24 h ouvrées et le cadrage complet se fait ensemble ensuite.",
  },
];

const faqJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
});

export default function Page() {
  return (
    <GuidesShell>
      <script type="application/ld+json">{articleJsonLd}</script>
      <script type="application/ld+json">{breadcrumbJsonLd}</script>
      <script type="application/ld+json">{faqJsonLd}</script>

      <GuideLayout
        breadcrumbs={[
          { label: "Guides", href: "/guides" },
          { label: "Cahier des charges site internet" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Le modèle en 10 sections, commenté de l'intérieur par une agence qui reçoit des cahiers des charges chaque semaine. Pour chaque section : quoi écrire, l'exemple rempli, les erreurs qui ruinent un devis — et les exigences 2026 (performance, RGPD, accessibilité) que les modèles en circulation ignorent."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          { number: "01", title: "Modèle : 10 sections commentées", description: "", color: "violet" },
          { number: "02", title: "Exemple rempli inclus", description: "", color: "blue" },
          { number: "03", title: "Libre de copie, sans email", description: "", color: "emerald" },
          { number: "04", title: `Lecture : ${guide.readTimeMin} min`, description: "", color: "amber" },
        ]}
        relatedLinks={[
          { href: "/guides/combien-coute-un-site-internet", label: "Combien coûte un site internet ?" },
          { href: "/guides/prix-site-vitrine", label: "Prix d'un site vitrine" },
          { href: "/guides/combien-coute-une-application-mobile", label: "Prix d'une application mobile" },
          { href: "/services/sites-vitrines", label: "Création de site vitrine" },
          { href: "/methode", label: "Notre méthode Sprint Fixe™" },
          { href: "/tarifs", label: "Nos tarifs détaillés" },
        ]}
        faqTitle="Cahier des charges : vos questions"
        faqItems={faqItems}
      >
        <p className="lead">
          Nous recevons des cahiers des charges toutes les semaines — des
          excellents, des vagues, et des dangereux. Voici le modèle que
          nous aurions aimé pouvoir envoyer à chaque prospect : un cahier
          des charges (« CDC » dans la suite de ce guide) en{" "}
          <strong>10 sections commentées de l&apos;intérieur, un exemple
          rempli, et les erreurs qui font qu&apos;un même projet reçoit des
          devis de 8 000 € et de 25 000 €</strong>. Libre de copie, sans
          email demandé.
        </p>

        <GuideToc
          items={[
            { id: "reponse-rapide", label: "1. La réponse rapide : les 10 sections d'un bon CDC" },
            { id: "a-quoi-sert", label: "2. À quoi sert vraiment un cahier des charges" },
            { id: "brief-ou-cdc", label: "3. Brief, expression de besoin ou CDC : lequel vous faut-il ?" },
            { id: "le-modele", label: "4. Le modèle complet, section par section" },
            { id: "exemple-rempli", label: "5. L'exemple rempli : cabinet comptable, refonte vitrine" },
            { id: "erreurs", label: "6. Les 7 erreurs qui ruinent un cahier des charges" },
            { id: "budget", label: "7. Faut-il indiquer son budget ? (oui — voici pourquoi)" },
            { id: "qui-redige", label: "8. Qui rédige, combien ça coûte" },
            { id: "declinaisons", label: "9. E-commerce, refonte, SaaS : ce qui change" },
            { id: "valeur-juridique", label: "10. La valeur juridique de votre CDC" },
            { id: "cas-particuliers", label: "11. Mairies, associations, marchés publics" },
            { id: "methode", label: "12. Méthode : rédiger votre CDC en 5 étapes" },
            { id: "du-cdc-au-devis", label: "13. Du cahier des charges au devis ferme" },
          ]}
        />

        <h2 id="reponse-rapide">1. La réponse rapide : les 10 sections d&apos;un bon CDC</h2>
        <p>
          Un bon cahier des charges de site internet tient en{" "}
          <strong>10 sections : présentation de l&apos;entreprise, objectifs
          chiffrés, cibles, périmètre fonctionnel priorisé, arborescence et
          contenus, design, exigences techniques, SEO, intégrations avec
          l&apos;existant, budget et gouvernance</strong>. Deux mots à
          traduire d&apos;emblée : l&apos;arborescence est la liste
          organisée des pages du site, comme le sommaire d&apos;un livre ;
          le SEO est le référencement naturel — apparaître, ou non, dans
          Google quand un client tape une recherche (une « requête »).
          Comptez 4 à 8 pages pour une vitrine, 5 à 15 pour un site PME —
          la précision compte plus que le volume.
        </p>
        <GuideTable
          headers={["Section", "La question à laquelle elle répond", "Erreur fréquente"]}
          rows={[
            ["1. Entreprise & contexte", "Qui êtes-vous, pourquoi ce projet ?", "Copier-coller la plaquette commerciale"],
            ["2. Objectifs", "Comment saura-t-on que c'est réussi ?", "« Moderniser notre image » (non mesurable)"],
            ["3. Cibles", "Qui doit être convaincu ?", "« Tout le monde »"],
            ["4. Périmètre fonctionnel", "Que doit faire le site, par priorité ?", "La liste au Père Noël sans hiérarchie"],
            ["5. Arborescence & contenus", "Quelles pages, qui écrit quoi ?", "Personne n'est responsable des contenus"],
            ["6. Design", "Quel univers, quelles références ?", "« Moderne et épuré » sans exemple"],
            ["7. Technique", "Performance, RGPD, accessibilité, sécurité", "Aucune exigence chiffrée"],
            ["8. SEO", "Sur quelles requêtes exister ?", "Oublié, puis facturé en avenant"],
            ["9. Intégrations & existant", "CRM, ERP, outils à connecter ?", "L'oubli n° 1 vu en agence"],
            ["10. Budget & gouvernance", "Enveloppe, délais, qui valide ?", "Budget caché, validation floue"],
          ]}
        />
        <InfoBox variant="blue" title="Lexique express : les mots que vous croiserez dans les devis">
          <strong>CRM</strong> : le logiciel où vivent vos contacts et
          devis (Sellsy, HubSpot…). <strong>ERP</strong> : le logiciel de
          gestion — facturation, stocks (Sage, EBP, Odoo…).{" "}
          <strong>RGPD</strong> : le règlement européen sur les données
          personnelles. <strong>API</strong> : la « prise » qui permet à
          deux logiciels d&apos;échanger des données.{" "}
          <strong>Hébergement</strong> : l&apos;ordinateur distant, loué à
          l&apos;année, où le site est stocké.{" "}
          <strong>Nom de domaine</strong> : l&apos;adresse du site
          (votresociete.fr). <strong>Back-office</strong> : la partie
          cachée où l&apos;on gère les contenus.{" "}
          <strong>Avenant</strong> : le supplément au devis signé en cours
          de projet — presque toujours au prix fort.{" "}
          <strong>Redirection 301</strong> : le renvoi automatique
          d&apos;une ancienne adresse de page vers la nouvelle.{" "}
          <strong>V1 / V2</strong> : la première version mise en ligne / la
          version enrichie qui suit. <strong>AMOA</strong> (assistance à
          maîtrise d&apos;ouvrage) : le consultant indépendant qui formule
          votre besoin face aux prestataires.{" "}
          <strong>ROI</strong> : le retour sur investissement.{" "}
          <strong>Prototype cliquable</strong> : une maquette interactive
          du futur site.
        </InfoBox>

        <h2 id="a-quoi-sert">2. À quoi sert vraiment un cahier des charges</h2>
        <p>
          Avant d&apos;entrer dans le document lui-même, un mot sur
          son premier usage : consulter des prestataires. Le même
          cahier des charges envoyé à un freelance et à deux agences
          est le seul moyen d&apos;obtenir des devis réellement
          comparables — et le choix entre ces profils (prix, risques,
          garanties) fait l&apos;objet de notre{" "}
          <Link href="/guides/agence-web-ou-freelance">comparatif
          agence web ou freelance</Link>, pensé pour être utilisé avec
          ce modèle.
        </p>
        <p>
          Faire construire un site sans cahier des charges, c&apos;est faire
          construire une maison sans plan. Décrivez oralement « une belle
          maison lumineuse » à trois constructeurs : vous recevrez trois
          devis incomparables — plain-pied, étage, véranda. Chaque détail
          non prévu se facturera en supplément, au tarif de celui qui tient
          la bétonnière ; et si le résultat déçoit, rien d&apos;écrit à
          opposer. Le CDC joue le rôle du plan — trois fonctions très
          concrètes.
        </p>
        <p>
          <strong>1. Rendre les devis comparables.</strong> Sans cadrage
          écrit, une agence chiffre 10 000 € et une autre 40 000 € pour « le
          même » projet — et les deux ont raison, chacune ayant imaginé un
          périmètre différent. Le CDC force tout le monde à chiffrer le
          même projet.
        </p>
        <p>
          <strong>2. Limiter les avenants</strong> — ces suppléments au
          devis signés en cours de projet, toujours au prix fort. Ce qui
          est écrit est chiffré ; ce qui ne l&apos;est pas se renégociera
          plus tard, en position de faiblesse.
        </p>
        <p>
          <strong>3. Vous protéger juridiquement</strong> — et ce n&apos;est
          pas théorique. En octobre 2020, dans l&apos;affaire Oopet, une
          start-up mécontente de ses applications a réclamé un
          remboursement au tribunal de commerce de Paris. Elle a tout
          perdu : aucun cahier des charges ne formalisait ses attentes, et
          les juges ont estimé que les défauts reprochés « ne présentent
          pas de caractère anormal ». Sans document de référence, vous
          n&apos;avez juridiquement presque rien à opposer.
        </p>

        <h2 id="brief-ou-cdc">3. Brief, expression de besoin ou CDC : lequel vous faut-il ?</h2>
        <GuideTable
          headers={["Document", "Taille", "Nature", "Quand il suffit"]}
          rows={[
            ["Expression de besoin", "≤ 5 pages", "Non contractuel, ajustable", "Site vitrine, premier contact prestataires"],
            ["Brief", "3-10 pages", "Besoin identifié, solution ouverte", "Vous savez « quoi », pas « comment »"],
            ["Cahier des charges", "5-40 pages", "Détaillé, vocation contractuelle", "Projet à enjeu, e-commerce, appel d'offres"],
          ]}
        />
        <p>
          Notre conseil honnête d&apos;agence : pour un site vitrine standard,{" "}
          <strong>une expression de besoin structurée suffit</strong> — les
          10 sections du modèle en version courte. Un CDC de 40 pages
          sur-spécifié peut même desservir le projet : il fige des solutions
          techniques avant d&apos;avoir entendu les experts. Décrivez le
          problème à traverser, pas les matériaux du pont.
        </p>
        <p>
          Dernière distinction : vous rédigez le CDC{" "}
          <strong>fonctionnel</strong> — le besoin, le « quoi », exactement
          le modèle de ce guide (exercice normalisé par l&apos;AFNOR :
          NF X50-151, intégrée à la norme européenne NF EN 16271) — et le
          prestataire produit en réponse le volet{" "}
          <strong>technique</strong>, le « comment » : langages,
          hébergement, architecture. Le client écrit le problème, le
          prestataire la solution.
        </p>
        <p>
          « Mais on travaille en agile, on n&apos;a pas besoin de cahier des
          charges » — objection fréquente, et fausse. L&apos;agile change la
          façon de <em>construire</em> (par petites étapes successives),
          pas le besoin de <em>cadrer</em> : objectifs, cibles, périmètre
          et budget restent indispensables. Le tribunal de l&apos;affaire
          Oopet, évoquée au chapitre 2, l&apos;a d&apos;ailleurs rappelé :
          le cahier des charges s&apos;impose <strong>même en méthode
          agile</strong>. Ce qui devient plus léger, c&apos;est le niveau
          de détail des spécifications — pas leur existence.
        </p>

        <h2 id="le-modele">4. Le modèle complet, section par section</h2>
        <p>
          Voici le modèle, commenté par l&apos;agence qui le lira. Copiez la
          structure telle quelle — libre de droits ; le squelette prêt à
          remplir clôt ce chapitre. Convention anti-confusion :
          « chapitres » désigne les 13 parties du guide, « sections » les
          10 rubriques du modèle.
        </p>

        <h3>Section 1 — L&apos;entreprise et le contexte</h3>
        <p>
          En une page : votre activité, votre marché, ce qui vous
          différencie, et surtout <strong>pourquoi ce projet
          maintenant</strong> (site vieillissant, lancement d&apos;offre,
          concurrence qui décolle sur Google…). Le déclencheur en dit plus
          que dix pages de présentation.
        </p>

        <h3>Section 2 — Les objectifs, chiffrés</h3>
        <p>
          La section la plus importante et la plus bâclée. Bannissez «
          moderniser notre image » ; écrivez des objectifs mesurables, comme
          le recommande France Num (le programme gouvernemental d&apos;accompagnement numérique des TPE-PME) : « passer de 12 à 30 demandes de devis
          par mois », « générer 50 ventes en ligne mensuelles », « réduire
          de 20 % les appels à faible valeur ». Deux ou trois maximum —
          c&apos;est eux qui arbitreront tous les choix. Précisez
          l&apos;outil qui mesurera chaque objectif, installé avant la mise
          en ligne — sinon vous perdez vos données de référence.
        </p>

        <InfoBox variant="blue" title="Ce qu'on voit dans les CDC reçus">
          Sur dix cahiers des charges reçus, huit n&apos;ont aucun objectif
          chiffré. Conséquence : quand il faut arbitrer en cours de projet,
          aucun critère de décision — l&apos;arbitrage se fait au ressenti,
          ou au rapport de force. Les deux projets les plus fluides de
          notre histoire avaient un point commun : trois objectifs chiffrés
          en page 2, auxquels toutes les discussions revenaient.
        </InfoBox>

        <h3>Section 3 — Les cibles</h3>
        <p>
          Qui doit être convaincu ? Deux ou trois profils suffisent
          (« dirigeant de PME qui compare trois prestataires »,
          « particulier qui cherche un artisan en urgence »), avec pour
          chacun : ce qu&apos;il cherche, ce qui le rassure, sur quel
          appareil il vous lira. « Tout le monde » n&apos;est pas une cible.
        </p>

        <h3>Section 4 — Le périmètre fonctionnel, priorisé</h3>
        <p>
          Listez les fonctionnalités en deux colonnes :{" "}
          <strong>indispensable</strong> (le site ne sert à rien sans) et{" "}
          <strong>souhaitable</strong> (pourra attendre la V2, une deuxième
          version enrichie après la mise en ligne de la première — la V1).
          C&apos;est LE mécanisme anti-dépassement : « vouloir tout faire
          d&apos;emblée » est la première cause de budget explosé.
          Décrivez des comportements, pas des solutions : « le visiteur
          peut réserver un créneau de 30 minutes en ligne », pas « intégrer
          Calendly ». Le format « user story » aide — « en tant que
          [profil], je veux [action] afin de [bénéfice] ». Pour trancher
          entre les colonnes, le test de la valise cabine : vous partez
          trois jours avec un seul bagage — la brosse à dents est
          indispensable, le deuxième pull souhaitable. Le site serait-il
          inutilisable sans cette fonctionnalité, ou simplement moins
          complet ? Le formulaire de contact échoue au test
          (indispensable), le chat en direct le réussit (souhaitable, V2).
          Rien n&apos;est abandonné : le souhaitable attend que la V1 ait
          prouvé qu&apos;elle atteint ses objectifs.
        </p>

        <h3>Section 5 — L&apos;arborescence et les contenus</h3>
        <p>
          La liste des pages envisagées, et pour chacune :{" "}
          <strong>qui fournit le contenu, sous quel délai</strong>. Écrivez
          « la rédaction est incluse » ou « nous fournissons les textes
          avant le [date] » — le contenu dont personne n&apos;est
          responsable est la première cause de retard de mise en ligne,
          loin devant la technique. L&apos;arborescence, elle, se comprend
          mieux dessinée qu&apos;expliquée — voici celle du cabinet
          comptable de notre exemple (chapitre 5) :
        </p>
        <FormulaBox>
{`Accueil
├─ Expertises (menu)
│  ├─ Comptabilité TPE-PME
│  ├─ Paie et social
│  ├─ Création d'entreprise
│  ├─ Fiscalité et audit
│  └─ Conseil de gestion
├─ Le cabinet (équipe, valeurs)
├─ Actualités / FAQ
├─ Prendre rendez-vous
└─ Contact
(+ mentions légales, politique de confidentialité)`}
        </FormulaBox>
        <p>
          Rien d&apos;esthétique ici : une page par expertise (chacune vise
          une requête distincte), « Prendre rendez-vous » au premier niveau
          (l&apos;objectif n° 1), une FAQ (l&apos;objectif n° 3 veut réduire les appels).
          Une arborescence n&apos;est pas un rangement — c&apos;est votre
          stratégie rendue visible.
        </p>

        <h3>Section 6 — Le design et les références</h3>
        <p>
          Trois liens de sites que vous aimez (et pourquoi), un ou deux que
          vous détestez (et pourquoi), votre charte si elle existe. Ces
          cinq liens disent plus que « moderne, épuré, professionnel » —
          les trois adjectifs de tous les CDC que nous recevons. Ajoutez
          une demi-page sur vos trois concurrents directs (ce que leur site
          fait mieux, ce qu&apos;il fait mal, qui sort en première page
          Google) : un prestataire qui sait contre qui vous jouez conçoit
          un site positionné, pas un site générique de plus.
        </p>

        <h3>Section 7 — Les exigences techniques (version 2026)</h3>
        <p>
          C&apos;est ici que presque tous les modèles en circulation datent.
          Les exigences à écrire aujourd&apos;hui, chiffrées :
        </p>
        <ul>
          <li>
            <strong>Performance</strong> — Google chronomètre tous les sites
            avec trois indicateurs, les Core Web Vitals. Imaginez un
            inspecteur muni de trois chronomètres : le LCP mesure le temps
            avant que le visiteur voie votre « vitrine » — le contenu
            principal (visez moins de 2,5 s sur mobile) ; l&apos;INP, le
            délai entre son clic et la réaction de la page (moins de
            200 ms) ; le CLS vérifie que la page ne « saute » pas pendant
            le chargement. Exigez ces seuils par écrit, tenus pour au moins
            75 % des visiteurs réels (le « 75e percentile ») — vérifiables
            en deux minutes à la livraison avec l&apos;outil gratuit
            PageSpeed Insights. « Un site rapide » ne vous protège pas ;
            ces seuils chiffrés sont opposables en cas de litige.
          </li>
          <li>
            <strong>RGPD</strong> (le règlement européen sur la protection
            des données personnelles) — « le site devra respecter le RGPD »
            est la phrase la plus copiée-collée des CDC, et elle
            n&apos;engage à rien. Exigez du concret, inspiré de la CNIL :
            accord du visiteur avant tout dépôt de cookies (ces petits
            fichiers qui suivent la navigation), refus aussi simple que
            l&apos;acceptation ; politique de confidentialité rédigée —
            précisez par qui ; formulaires minimisés (un devis n&apos;exige
            pas de date de naissance) ; cadenas de sécurité HTTPS ; données
            hébergées de préférence dans l&apos;Union européenne ;
            sauvegardes stockées ailleurs que sur le site. Et c&apos;est
            vous, propriétaire du site, qui restez responsable aux yeux de
            la CNIL.
          </li>
          <li>
            <strong>Accessibilité</strong> — depuis le 28 juin 2025, une loi
            européenne (l&apos;European Accessibility Act) impose que les
            services vendus en ligne soient utilisables par les personnes
            handicapées, selon le référentiel officiel français (le RGAA).
            Elle ne concerne que les entreprises dépassant à la fois
            10 salariés et 2 M€ de chiffre d&apos;affaires — en dessous,
            le cas de la plupart des TPE, pas d&apos;obligation légale.
            Pour les entreprises concernées : jusqu&apos;à 7 500 €
            d&apos;amende par manquement et des astreintes jusqu&apos;à
            3 000 € par jour (plafond 300 000 €) ; l&apos;amende de
            50 000 € renouvelable souvent citée vise, elle, les organismes
            publics et les très grandes entreprises (article 47 de la loi
            de 2005). Même hors obligation, textes contrastés et navigation
            au clavier profitent à tous — et à Google.
          </li>
          <li>
            <strong>Adapté aux mobiles (« responsive »)</strong> — le mobile
            représente environ 60 % du trafic web mondial (62,7 % début
            2025 selon StatCounter), un peu moins en Europe où mobile et
            ordinateur font jeu égal. Demandez un site pensé d&apos;abord
            pour le téléphone (« mobile-first »), puis enrichi pour
            l&apos;ordinateur : l&apos;inverse — un site de bureau
            « adapté » après coup — produit presque toujours des pages
            mobiles lentes et pénibles.
          </li>
        </ul>

        <h3>Section 8 — Le SEO, dès la conception</h3>
        <p>
          Même sans ambition Google immédiate, exigez les fondations du
          référencement : des adresses de pages lisibles
          (votresite.fr/expertise-paie plutôt qu&apos;une suite de
          chiffres), des titres hiérarchisés, des images légères, la
          possibilité de rediriger une ancienne page sans casser les liens.
          Rien de tout cela ne se voit à l&apos;œil nu — raison de plus
          pour l&apos;écrire. Si l&apos;acquisition Google est un objectif,
          listez les requêtes visées — « expert-comptable Annecy »,
          « cabinet comptable BTP », « prix bilan comptable » : chaque
          recherche méritera sa propre page, et cette liste détermine donc
          l&apos;arborescence. Le SEO ajouté après coup se paie en avenant,
          puis en refonte : le référencement dépend de la structure même du
          site, et le rajouter ensuite, c&apos;est déplacer les fondations
          d&apos;une maison construite. Le socle s&apos;écrit dans le CDC,
          pas dans un avenant — c&apos;est la part de notre{" "}
          <Link href="/services/referencement-google">travail de
          référencement</Link> qui se joue avant la première ligne de
          code.
        </p>

        <h3>Section 9 — Les intégrations et l&apos;existant</h3>
        <p>
          <strong>L&apos;oubli n° 1 dans les CDC que nous recevons.</strong>{" "}
          Listez vos outils : le CRM où vivent vos contacts et devis,
          l&apos;ERP qui gère facturation et stocks, l&apos;agenda de
          rendez-vous, l&apos;outil d&apos;emailing. Le site doit-il
          communiquer avec eux ? Une intégration découverte en cours de
          projet, c&apos;est 2 à 10 jours non chiffrés — à 400-800 € la
          journée, faites la multiplication. Clientèle étrangère ? Tranchez
          ici le multilingue (quelles langues, quelles pages, qui
          traduit) : ajouté après coup, il oblige souvent à revoir
          l&apos;architecture ; écrit dans le CDC, il se chiffre
          sereinement, éventuellement en V2.
        </p>

        <InfoBox variant="amber" title="Le cas classique">
          Un CDC impeccable arrive. Au deuxième atelier, on découvre que
          « le formulaire doit créer la fiche client » — dans un CRM
          interne dont le CDC ne disait pas un mot, et sans API, cette
          « prise » qui permet à deux logiciels d&apos;échanger des
          données. Sans elle, tout se fabrique sur mesure : dix jours non
          prévus, à négocier en avenant projet lancé. Une ligne dans la
          section 9 aurait suffi. Écrivez aussi les non-demandes
          (« aucune intégration en V1 ») : elles évitent le sur-chiffrage.
        </InfoBox>

        <h3>Section 10 — Budget, délais et gouvernance</h3>
        <p>
          Votre fourchette budgétaire (voir plus bas le chapitre 7 :
          « Faut-il indiquer son budget ? »), votre échéance et son motif
          (salon, saison), et la gouvernance : un interlocuteur unique côté
          client, un délai maximal de validation par livrable, un nombre de
          cycles de corrections inclus. France Num recommande aussi une{" "}
          <strong>réserve de 15 à 20 %</strong> pour les besoins découverts
          en route — les projets qui la prévoient ne dérapent pas, ils
          arbitrent.
        </p>

        <h3>Combien de temps prévoir : les 5 phases et le rétroplanning</h3>
        <p>
          Un projet de site suit presque toujours cinq phases : cadrage,
          maquettes (avec les allers-retours), développement, recette (vos
          tests et corrections), mise en ligne. Les fourchettes du marché :
          3 à 8 semaines pour un site vitrine, de 6 semaines à 6 mois pour
          un e-commerce — à condition d&apos;être réactif : chaque
          validation qui traîne une semaine décale la mise en ligne
          d&apos;autant, et la première cause de retard reste les contenus
          non livrés. D&apos;où le rétroplanning : partez de votre date
          impérative (salon, saison, période fiscale), remontez le temps,
          réservez 2 à 3 semaines de marge, et écrivez ce planning dans la
          section 10 avec des jalons — une échéance sans jalons
          n&apos;engage personne. Date à moins de 6 semaines ? Dites-le dès
          le premier contact. Les délais par type de site, les
          rétro-plannings Noël/salon et la part du calendrier qui dépend
          de vous sont chiffrés dans notre{" "}
          <Link href="/guides/combien-de-temps-pour-creer-un-site">guide
          des délais de création d&apos;un site</Link>.
        </p>

        <h3>Et après la mise en ligne ? Domaine, hébergement, maintenance, propriété</h3>
        <p>
          Le principal trou des modèles en circulation — et la première
          source de litige après la livraison. Quatre points à écrire noir
          sur blanc. <strong>Le nom de domaine</strong> : enregistré à
          votre nom, jamais à celui de l&apos;agence.{" "}
          <strong>L&apos;hébergement</strong> : qui le souscrit, à quel
          coût annuel (100 à 600 € par an pour un site vitrine), où sont
          les données. <strong>La maintenance</strong> : qui applique les
          mises à jour de sécurité, qui corrige un bug, sous quel délai,
          pour quel tarif annuel — comptez 10 à 20 % du prix du projet par
          an, formation de votre équipe incluse ou non — notre offre de{" "}
          <Link href="/services/maintenance-evolution">maintenance et
          d&apos;évolution</Link> détaille ce que ce pourcentage doit
          couvrir.{" "}
          <strong>La propriété et la réversibilité</strong> : le code, les
          textes et les images produits vous appartiennent, et vous pouvez
          à tout moment récupérer site, contenus et accès dans un format
          réutilisable, sans pénalité ni blocage. Un site dont vous ne
          possédez ni le domaine, ni les accès, ni le code n&apos;est pas
          votre site — c&apos;est un abonnement.
        </p>

        <h3>Le modèle à copier-coller</h3>
        <p>
          La trame complète, prête à coller dans Word, Google Docs ou
          Notion. Remplacez les crochets par vos réponses, supprimez ce qui
          ne vous concerne pas — un CDC utile est un CDC fini, pas un CDC
          exhaustif.
        </p>
        <FormulaBox>
{`1. QUI NOUS SOMMES
   [activité, effectif, zone] — pourquoi ce projet
   maintenant : [déclencheur]
2. OBJECTIFS
   O1 [passer de X à Y demandes de devis/mois en 12 mois]
   O2 [1re page Google sur « métier + ville »]
   O3 [réduire de X % les appels répétitifs]
3. CIBLES
   [profil 1 : ce qu'il cherche, ce qui le rassure,
   sur quel appareil] ; [profil 2]
4. FONCTIONNALITÉS
   Indispensables : […] — Souhaitables (V2) : […]
5. PAGES & CONTENUS
   [page — qui écrit — pour quand]
6. DESIGN
   3 sites aimés, 1 détesté : [lien + pourquoi]
7. EXIGENCES TECHNIQUES
   Contenu principal < 2,5 s sur mobile, RGPD,
   accessibilité de base
8. RECHERCHES GOOGLE VISÉES
   [« métier + ville », …]
9. OUTILS À CONNECTER
   [CRM / agenda / facturation] — ou « aucune
   intégration en V1 »
10. BUDGET & GOUVERNANCE
   [fourchette + réserve 15 %] ; [échéance + motif] ;
   [validation : nom, délai, cycles de corrections] ;
   propriété du code et réversibilité exigées`}
        </FormulaBox>

        <InfoBox variant="emerald" title="À retenir : les 5 règles d'or du cahier des charges">
          1. Décrivez des besoins, jamais des solutions. 2. Chiffrez tout
          ce qui peut l&apos;être : le mesurable est vérifiable, donc
          opposable. 3. Priorisez sans pitié : indispensable ou
          souhaitable. 4. Écrivez l&apos;existant, y compris les
          non-demandes : l&apos;intégration découverte en route est
          l&apos;avenant le plus fréquent. 5. Annoncez votre fourchette de
          budget : elle calibre la solution — et vous vaut des devis enfin
          comparables.
        </InfoBox>

        <GuideInlineCTA
          title="Un cadrage professionnel plutôt qu'un CDC solitaire ?"
          description="Le Discovery Sprint transforme votre expression de besoin en spécifications écrites, prototype cliquable et devis ferme — en 2 jours, co-construit avec vous."
          tags={["1 500 €, déduit à 100 % si le projet se lance", "Périmètre écrit", "Devis ferme"]}
        />

        <h2 id="exemple-rempli">5. L&apos;exemple rempli : cabinet comptable, refonte vitrine</h2>
        <p>
          Un modèle vide ne dit pas tout : rien ne remplace un exemple
          réellement rempli. Voici les sections clés d&apos;un CDC réel
          (anonymisé et condensé) : celui d&apos;un cabinet
          d&apos;expertise comptable régional de 12 salariés qui refondait
          son site vitrine.
        </p>
        <FormulaBox>
{`2. OBJECTIFS (extraits)
  O1 — Passer de 4 à 12 demandes de RDV qualifiées/mois
       via le site d'ici 12 mois.
  O2 — Positionner le cabinet en 1re page Google sur
       « expert-comptable [ville] » et 4 requêtes métier.
  O3 — Réduire de 30 % les questions récurrentes par
       téléphone (FAQ + espace documents).

4. PÉRIMÈTRE (extraits)
  INDISPENSABLE
   - Prise de RDV en ligne synchronisée aux agendas (3 associés)
   - 1 page par expertise (6) visant chacune une requête
   - Formulaire devis avec choix du besoin
  SOUHAITABLE (V2)
   - Espace client de dépôt de documents
   - Simulateur de charges en ligne

7. EXIGENCES TECHNIQUES (extraits)
  - LCP < 2,5 s mobile (données réelles, p75)
  - RGPD : consentement cookies, hébergement UE
  - Accessibilité : contrastes AA, navigation clavier

9. EXISTANT À CONNECTER
  - Agendas Outlook des 3 associés (RDV)
  - Outil interne de gestion des dossiers : AUCUNE
    intégration demandée en V1 (précisé pour éviter
    tout chiffrage inutile)

10. BUDGET & DÉLAIS
  - Fourchette : 12 000 – 16 000 € TTC, réserve 15 %
  - Mise en ligne souhaitée avant le 1er janvier
    (période fiscale) — impératif
  - Validation : Mme R., réponse sous 5 jours ouvrés
    par livrable, 2 cycles de corrections inclus`}
        </FormulaBox>
        <p>
          Lecture : « p75 » signifie que l&apos;exigence doit être tenue
          pour au moins 75 % des visiteurs réels ; « contrastes AA » est le
          niveau intermédiaire de la norme d&apos;accessibilité — des
          textes suffisamment lisibles sur leur fond.
        </p>
        <p>
          Notez ce qui rend ce document exploitable : chaque objectif est
          chiffré, le périmètre hiérarchisé, la non-demande
          d&apos;intégration écrite <em>aussi</em>, le budget annoncé en
          fourchette. Ce CDC de 6 pages a reçu trois devis parfaitement
          comparables.
        </p>

        <h2 id="erreurs">6. Les 7 erreurs qui ruinent un cahier des charges</h2>
        <p>Vues de notre côté du bureau, par fréquence décroissante :</p>
        <ol>
          <li>
            <strong>Décrire la solution au lieu du problème</strong> —
            « intégrer tel plugin » (un module tout fait qu&apos;on ajoute
            à un site), « un bouton de 42 pixels en #3B82F6 » (taille et
            code couleur imposés au millimètre). Vous payez une expertise :
            exprimez le besoin, laissez le prestataire proposer.
          </li>
          <li>
            <strong>Les adjectifs à la place des comportements</strong> —
            « site rapide, moderne, intuitif ». Écrivez « charge en moins
            de 2,5 s sur mobile », « le formulaire de devis se trouve en
            2 clics ».
          </li>
          <li>
            <strong>Aucun objectif mesurable</strong> — sans O1/O2/O3
            chiffrés, impossible d&apos;arbitrer ni d&apos;évaluer le
            retour sur investissement (le ROI : ce que le site rapporte
            comparé à ce qu&apos;il a coûté). C&apos;est ce qui distingue
            un projet d&apos;une dépense.
          </li>
          <li>
            <strong>L&apos;existant passé sous silence</strong> — CRM, ERP,
            agendas, facturation découverts quelques semaines après le
            démarrage : chaque intégration surprise coûte 2 à 10 jours non
            prévus, soit 1 000 à 8 000 € de surcoût au tarif courant du
            développeur (400 à 800 € la journée).
          </li>
          <li>
            <strong>Des contenus sans responsable</strong> — première cause
            de retard. Qui écrit, qui fournit les photos, pour quand : trois
            réponses obligatoires.
          </li>
          <li>
            <strong>Le budget caché</strong> — voir le chapitre suivant :
            devis incomparables, et 10 heures perdues pour chaque agence
            sérieuse.
          </li>
          <li>
            <strong>La liste au Père Noël</strong> — 25 fonctionnalités sans
            priorité. Cas vu en cadrage : une PME e-commerce qui
            n&apos;avait ni priorisé ni mentionné son besoin de
            multi-devises a vu son planning glisser de plusieurs mois et
            son budget s&apos;alourdir en avenants — le multi-devises
            touchait au catalogue, aux paiements et à la facturation.
          </li>
        </ol>

        <h2 id="budget">7. Faut-il indiquer son budget ? (oui — voici pourquoi)</h2>
        <p>
          C&apos;est la question la plus débattue — l&apos;erreur n° 6 de
          notre liste — et côté prestataire, la réponse est unanime :{" "}
          <strong>annoncez au moins une fourchette</strong>. « Je préfère
          ne pas le dire » ne vous protège de rien : sans repère,
          l&apos;agence devine — sous-dimensionne (devis inutilisable) ou
          sur-dimensionne (devis effrayant) — et vous comparez des projets
          différents.
        </p>
        <p>
          Chiffrer sérieusement un site représente une dizaine
          d&apos;heures de travail côté agence. Ce temps s&apos;investit
          volontiers dans un projet dont le budget est annoncé — pas dans
          une devinette.
        </p>
        <p>
          Reste la crainte du « devis gonflé pour consommer
          l&apos;enveloppe ». Elle se neutralise simplement : donnez une
          fourchette et exigez le détail poste par poste — nos{" "}
          <Link href="/guides/combien-coute-un-site-internet">guides de
          prix</Link> donnent les repères du marché pour la calibrer. En
          marchés publics, la question est même tranchée : le budget doit
          être communiqué pour être opposable, c&apos;est-à-dire pour
          pouvoir écarter légalement les offres qui le dépassent.
        </p>

        <h2 id="qui-redige">8. Qui rédige, combien ça coûte</h2>
        <p>
          Le bon partage : <strong>vous</strong> exprimez le besoin métier
          (personne ne peut le faire à votre place) ;{" "}
          <strong>le prestataire</strong> challenge, complète et traduit en
          spécifications. Trois options :
        </p>
        <GuideTable
          headers={["Option", "Coût", "Pour qui"]}
          rows={[
            ["Vous-même avec ce modèle", "0 € (2-4 h de travail)", "Vitrine, projet cadré"],
            ["Consultant AMOA (chef de projet indépendant qui rédige le CDC avec vous et défend vos intérêts)", "350 – 900 €/jour ; comptez 3 à 5 jours, soit 1 000 – 4 500 € le CDC", "Projet complexe, appel d'offres"],
            ["Discovery Sprint Hagnéré Code", "1 500 € (2 jours), déduit à 100 % si le projet se lance", "Specs + prototype cliquable + devis ferme"],
          ]}
        />
        <p>
          Repère utile : une journée de développeur ou de consultant web se
          facture couramment 350 à 900 € HT — quand un devis est exprimé en
          jours, faites la multiplication. Quand rédiger le CDC ?{" "}
          <strong>Avant de demander les devis</strong> : le même document
          envoyé à trois prestataires produit trois devis comparables.
        </p>

        <p>
          Et l&apos;IA ? Excellent accélérateur de brouillon, très mauvais
          auteur final : elle ne peut pas inventer vos objectifs, vos
          clients, vos outils ni votre budget. Remplissez d&apos;abord
          vous-même les sections 2, 3, 9 et 10, puis demandez-lui quelles
          questions un prestataire poserait en lisant votre texte.
          L&apos;IA remplace la page blanche, pas la réflexion.
        </p>

        <h2 id="declinaisons">9. E-commerce, refonte, SaaS : ce qui change</h2>
        <h3>Pour un site e-commerce</h3>
        <p>
          Ajoutez : votre catalogue (combien de produits ? en combien de
          tailles ou couleurs ? avec quels filtres ?), le parcours
          d&apos;achat du panier au paiement, les moyens de paiement, la
          gestion des stocks et livraisons, vos indicateurs de réussite
          (panier moyen, pourcentage de visiteurs qui achètent) et les
          logiciels de logistique et comptabilité à connecter. Les repères
          de prix sont dans notre guide du{" "}
          <Link href="/guides/prix-site-e-commerce">prix d&apos;un site
          e-commerce</Link> et l&apos;offre{" "}
          <Link href="/services/ecommerce">e-commerce sur mesure</Link>.
        </p>
        <h3>Pour une refonte</h3>
        <p>
          Les sections que tous les modèles génériques oublient :
          l&apos;audit de l&apos;existant (quelles pages attirent du
          trafic ?), l&apos;inventaire des adresses de vos pages, et le{" "}
          <strong>plan de redirections 301</strong> — le mécanisme qui,
          comme la réexpédition du courrier après un déménagement, renvoie
          automatiquement Google et vos visiteurs des anciennes adresses
          vers les nouvelles. Sans lui, une refonte peut effacer en une
          mise en ligne trois ans de référencement. Exigez cette section
          dans tout devis de refonte, avec un suivi SEO post-migration.
        </p>
        <h3>Pour un SaaS ou une application</h3>
        <p>
          Pour un SaaS — un logiciel vendu en ligne par abonnement, comme
          votre outil de paie —, le CDC devient un document produit :
          parcours de chaque type d&apos;utilisateur, droits d&apos;accès,
          données à stocker, connexions avec d&apos;autres logiciels,
          sécurité. C&apos;est un autre exercice — notre{" "}
          <Link href="/guides/cahier-des-charges-application-mobile">modèle
          de cahier des charges d&apos;application mobile</Link> lui est
          entièrement dédié (stores, hors-ligne, notifications), nos
          guides{" "}
          <Link href="/guides/combien-coute-un-saas">combien coûte un
          SaaS</Link> et{" "}
          <Link href="/guides/combien-coute-une-application-mobile">prix
          d&apos;une application mobile</Link> en donnent les repères, et
          c&apos;est précisément ce que le Discovery Sprint produit en
          2 jours.
        </p>

        <h2 id="valeur-juridique">10. La valeur juridique de votre CDC</h2>
        <p>
          Un cahier des charges n&apos;a de valeur que{" "}
          <strong>contresigné ou annexé au contrat</strong> — il devient
          alors le référentiel de conformité du projet. Deux vigilances :
          la <strong>clause d&apos;ordre de priorité des documents</strong>{" "}
          — certains prestataires font prévaloir leur proposition
          commerciale sur votre CDC ; lisez-la avant de signer. Et le
          jugement Oopet c/ Dual (chapitre 2) : sans spécifications
          formalisées, même un projet décevant ne donne quasiment aucune
          prise juridique. Chez Hagnéré Code, le périmètre écrit du
          Discovery Sprint est annexé au devis — c&apos;est lui qui fait
          foi, dans les deux sens.
        </p>

        <h2 id="cas-particuliers">11. Mairies, associations, marchés publics</h2>
        <p>
          Dans le secteur public, le « cahier des charges » prend une forme
          codifiée : le <strong>CCTP</strong> (cahier des clauses techniques
          particulières) décrit le besoin — l&apos;équivalent direct du
          modèle de ce guide — et le <strong>CCAP</strong> (cahier des
          clauses administratives particulières) fixe les règles du
          contrat. Trois spécificités : l&apos;<strong>accessibilité RGAA
          obligatoire</strong> (avec déclaration de conformité publiée) ;
          la <strong>communication du budget</strong> — sans enveloppe
          annoncée, impossible d&apos;écarter légalement une offre qui la
          dépasse ; et les critères de choix annoncés à l&apos;avance avec
          leur poids (prix 40 %, qualité technique 40 %, délais 20 %).
          Repère : sous 40 000 € HT, le code de la commande publique
          (article R2122-8) dispense de procédure formalisée — un devis
          comparatif appuyé sur votre CDC suffit, le cas de la plupart des
          petites communes et associations. Et prévoyez un volet
          maintenance : un site public sans maintenance devient un site à
          l&apos;abandon dès la première faille de sécurité.
        </p>

        <h2 id="methode">12. Méthode : rédiger votre CDC en 5 étapes</h2>
        <ol>
          <li>
            <strong>Écrivez d&apos;abord les objectifs et les cibles</strong>{" "}
            (sections 2-3) — tout le reste en découle.
          </li>
          <li>
            <strong>Listez les fonctionnalités, puis coupez</strong> — tout
            ce qui n&apos;est pas indispensable passe en « souhaitable ».
          </li>
          <li>
            <strong>Faites l&apos;inventaire de l&apos;existant</strong> —
            outils, contenus, contraintes, nom de domaine.
          </li>
          <li>
            <strong>Chiffrez vos exigences</strong> — performance, délais,
            budget en fourchette.
          </li>
          <li>
            <strong>Faites-le challenger</strong> — par un pair, puis par
            les prestataires : un bon prestataire pose des questions qui
            dérangent. Celui qui chiffre sans rien demander devine votre
            périmètre — et ce qui est deviné aujourd&apos;hui se refacture
            demain en avenant.
          </li>
        </ol>

        <p>
          Avant d&apos;envoyer, passez la checklist — chaque « non » est un
          avenant en puissance. Ses deux exigences les moins connues sont
          détaillées au chapitre 4, « Et après la mise en ligne ? » : la
          propriété du code (le site livré vous appartient) et la
          réversibilité (récupérer site et données pour changer de
          prestataire, sans pénalité ni blocage) :
        </p>
        <GuideTable
          headers={["Vérification", "OK ?"]}
          rows={[
            ["Mes 2-3 objectifs sont chiffrés et datés", "☐"],
            ["Chaque fonctionnalité est classée indispensable / souhaitable", "☐"],
            ["Chaque contenu (textes, photos) a un responsable et une date", "☐"],
            ["Mes outils existants (CRM, agenda, facturation) sont listés — intégration demandée ou explicitement exclue", "☐"],
            ["Mes exigences de performance sont chiffrées (Core Web Vitals)", "☐"],
            ["RGPD et accessibilité sont mentionnés", "☐"],
            ["Ma fourchette de budget et mon échéance sont écrites", "☐"],
            ["La propriété du code et la réversibilité (récupérer site, contenus et accès en cas de départ) sont exigées", "☐"],
            ["Un interlocuteur unique et des délais de validation sont définis", "☐"],
            ["Le même document part chez tous les prestataires consultés", "☐"],
          ]}
        />

        <h2 id="du-cdc-au-devis">13. Du cahier des charges au devis ferme</h2>
        <p>
          Votre CDC est prêt ? Consultez 3 à 4 prestataires, pas plus :
          au-delà, vous ne comparez plus, vous compilez. Même document pour
          tous, date limite identique, 30 minutes d&apos;échange avec
          chacun : la qualité de ses questions en dit plus que sa
          plaquette. Comparez périmètre couvert, exclusions, maintenance et
          références — le prix en dernier. Deux signaux d&apos;alerte : le
          devis rendu en 48 heures sans une seule question, et le devis
          très en dessous des autres — relisez ce qu&apos;il exclut
          (rédaction, SEO, maintenance, formation) : le moins-disant se
          rattrape presque toujours en avenants. Notre{" "}
          <Link href="/guides/choisir-son-agence-web">guide pour choisir
          son agence web</Link> donne la suite : les dix-huit
          vérifications gratuites à mener avant le premier rendez-vous,
          et les treize questions avec le barème des réponses
          acceptables.
        </p>
        <p>
          Voici comment nous lisons un CDC reçu : objectifs d&apos;abord
          (mesurables ?), périmètre ensuite (priorisé ?), existant enfin
          (qu&apos;est-ce qui va nous surprendre ?). Puis nous posons les
          questions qui manquent — il en manque toujours. C&apos;est le
          rôle du <strong>Discovery Sprint (1 500 €, 2 jours)</strong> :
          transformer votre expression de besoin en spécifications écrites,
          prototype cliquable (maquette interactive) et{" "}
          <strong>devis au forfait fixe</strong>, déduit à 100 % si le
          projet se lance. Le périmètre validé est annexé au contrat, les
          dates sont contractuelles — c&apos;est notre{" "}
          <Link href="/methode">méthode Sprint Fixe™</Link>.
        </p>
        <p>
          Vous avez déjà votre cahier des charges — ou juste une idée
          claire ?{" "}
          <Link href="/demarrer-un-projet">Décrivez votre projet en
          3 minutes</Link> : nous vous répondons personnellement sous 24 h
          ouvrées, gratuitement et sans engagement.
        </p>

        <hr />
        <p className="text-sm">
          <strong>Sources</strong> — références citées dans ce guide
          (consultées en juillet 2026) : dossier{" "}
          <a href="https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/batir-le-cahier-des-charges-du-site-internet" target="_blank" rel="noopener noreferrer">France Num « Bâtir le cahier des charges du site internet de son entreprise »</a>{" "}
          (mars 2026) et sa{" "}
          <a href="https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/modeles-de-cahiers-des-charges-pour-un-site" target="_blank" rel="noopener noreferrer">sélection de modèles</a> ;
          seuils{" "}
          <a href="https://developers.google.com/search/docs/appearance/core-web-vitals" target="_blank" rel="noopener noreferrer">Core Web Vitals (Google Search Central)</a> ;
          European Accessibility Act (directive 2019/882, applicable depuis
          juin 2025) et sa transposition française (loi DDADUE du
          9 mars 2023 — analyses Temesis et EY Société d&apos;Avocats sur le
          régime de sanctions) ; jugement T. com. Paris, 8e ch.,
          7 octobre 2020 (Oopet c/ Dual),{" "}
          <a href="https://www.legalis.net/jurisprudences/tribunal-de-commerce-de-paris-8eme-ch-jugement-du-7-octobre-2020/" target="_blank" rel="noopener noreferrer">texte intégral sur Legalis</a>,
          analysé par{" "}
          <a href="https://www.lemondeinformatique.fr/actualites/lire-methode-agile-la-justice-rappelle-l-importance-du-cahier-des-charges-80976.html" target="_blank" rel="noopener noreferrer">Le Monde Informatique</a> ;
          part du trafic mobile :{" "}
          <a href="https://gs.statcounter.com/" target="_blank" rel="noopener noreferrer">StatCounter Global Stats</a> ;
          recommandations{" "}
          <a href="https://www.cnil.fr/" target="_blank" rel="noopener noreferrer">CNIL</a>{" "}
          pour les sites web ; baromètres TJM AMOA (Portageo, Free-Work).
        </p>
        <p className="text-sm">
          <em>
            Le modèle et l&apos;exemple de ce guide sont librement
            réutilisables pour cadrer votre projet. Ce guide ne constitue pas
            un conseil juridique personnalisé.
          </em>
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
