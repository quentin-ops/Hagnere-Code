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
  wordCount: 4100,
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
      "Trois raisons concrètes. Sans cadrage, les devis varient du simple au triple pour le même projet — impossible de comparer. Ensuite, le CDC limite les avenants : ce qui est écrit est chiffré, ce qui ne l'est pas se négocie en cours de route. Enfin, il vous protège juridiquement : en 2020, le tribunal de commerce de Paris a refusé tout remboursement à une start-up mécontente de ses applications… précisément parce qu'aucun cahier des charges ne formalisait ses attentes.",
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
      "Oui : le modèle complet de ce guide est libre de copie, sans email demandé — c'est notre parti pris face aux modèles verrouillés derrière des formulaires. France Num, le portail gouvernemental, maintient aussi une sélection de modèles téléchargeables. Méfiez-vous des templates datés : la plupart des PDF en circulation datent de 2017-2021 et ignorent le RGPD opérationnel, l'accessibilité EAA et les Core Web Vitals.",
  },
  {
    question: "Quelle différence entre un brief, une expression de besoin et un cahier des charges ?",
    answer:
      "L'expression de besoin est un document court (5 pages max), non contractuel, qui décrit le problème sans imposer la solution. Le brief est l'intermédiaire : besoin identifié, solution ouverte. Le cahier des charges est le document détaillé et difficilement modifiable une fois validé, à vocation contractuelle. Pour un site vitrine standard, une bonne expression de besoin + un cadrage avec l'agence suffisent souvent — inutile de sur-investir dans un CDC de 40 pages.",
  },
  {
    question: "Comment faire le cahier des charges d'une refonte de site ?",
    answer:
      "Ajoutez au modèle classique les sections que les templates génériques oublient toujours : l'audit de l'existant (trafic, pages qui rankent, positions Google), l'inventaire des URLs et le plan de redirections 301, la stratégie de migration SEO et le suivi post-lancement. Une refonte sans plan de redirections peut détruire en une mise en ligne un trafic construit en trois ans — c'est la première chose que nous vérifions dans un CDC de refonte.",
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
        heroDescription="Le modèle en 10 sections, commenté de l'intérieur par une agence qui reçoit des cahiers des charges chaque semaine : ce que chaque section doit contenir, l'exemple rempli, les erreurs qui ruinent un devis — et les exigences 2026 (performance, RGPD, accessibilité) que les templates en circulation ignorent."
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
          excellents, des vagues, et des dangereux. Ce guide est le modèle que
          nous aurions aimé pouvoir envoyer à chaque prospect :{" "}
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
          l&apos;existant, budget et gouvernance</strong>. Comptez 4 à 8 pages
          pour un site vitrine, 5 à 15 pour un site PME complet — la
          précision des besoins compte plus que le volume.
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

        <h2 id="a-quoi-sert">2. À quoi sert vraiment un cahier des charges</h2>
        <p>
          Trois choses, très concrètes. <strong>Rendre les devis
          comparables</strong>, d&apos;abord : sans cadrage écrit, une agence
          chiffre 10 000 € et une autre 40 000 € pour « le même » projet — et
          les deux ont raison, car chacune a imaginé un périmètre différent.{" "}
          <strong>Limiter les avenants</strong>, ensuite : ce qui est écrit
          est chiffré ; ce qui ne l&apos;est pas se renégocie en cours de
          projet, au prix fort. <strong>Vous protéger</strong>, enfin — et ce
          n&apos;est pas théorique : en octobre 2020, le tribunal de commerce
          de Paris a rejeté la demande de remboursement d&apos;une start-up
          mécontente de ses applications, au motif que les dysfonctionnements
          reprochés « ne présentent pas de caractère anormal »…{" "}
          <em>en l&apos;absence de cahier des charges</em> formalisant ses
          attentes. Sans document de référence, vous n&apos;avez juridiquement
          presque rien à opposer.
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
          10 sections de ce guide en version courte. Un CDC de 40 pages
          sur-spécifié peut même desservir le projet : il fige des solutions
          techniques avant d&apos;avoir entendu les experts, et bride la
          valeur ajoutée du prestataire. Décrivez le problème à traverser,
          pas les matériaux du pont.
        </p>
        <p>
          « Mais on travaille en agile, on n&apos;a pas besoin de cahier des
          charges » — objection fréquente, et fausse. La méthode agile change
          la façon de <em>construire</em> (par itérations), pas le besoin de{" "}
          <em>cadrer</em> : objectifs, cibles, périmètre initial et budget
          restent indispensables pour démarrer. Le tribunal qui a jugé
          l&apos;affaire Oopet en 2020 l&apos;a d&apos;ailleurs rappelé
          explicitement : l&apos;expression claire des besoins via un cahier
          des charges s&apos;impose <strong>même en méthode agile</strong>.
          Ce qui devient plus léger en agile, c&apos;est le niveau de détail
          des spécifications — pas leur existence.
        </p>

        <h2 id="le-modele">4. Le modèle complet, section par section</h2>
        <p>
          Voici le modèle. Chaque section indique quoi écrire, avec le
          commentaire de l&apos;agence qui le lira. Copiez la structure telle
          quelle — elle est libre de droits, sans email à laisser.
        </p>

        <h3>Section 1 — L&apos;entreprise et le contexte</h3>
        <p>
          En une page : votre activité, votre marché, ce qui vous différencie,
          et surtout <strong>pourquoi ce projet maintenant</strong> (site
          vieillissant, lancement d&apos;offre, concurrence qui décolle sur
          Google…). Le déclencheur en dit plus sur vos vraies priorités que
          dix pages de présentation.
        </p>

        <h3>Section 2 — Les objectifs, chiffrés</h3>
        <p>
          La section la plus importante et la plus bâclée. Bannissez «
          moderniser notre image » ; écrivez des objectifs mesurables, comme
          le recommande France Num : « passer de 12 à 30 demandes de devis
          par mois », « générer 50 ventes en ligne mensuelles », « réduire de
          20 % les appels à faible valeur ». Deux ou trois objectifs
          maximum — c&apos;est eux qui arbitreront tous les choix du projet.
        </p>

        <InfoBox variant="blue" title="Ce qu'on voit dans les CDC reçus">
          Sur dix cahiers des charges qui arrivent dans notre boîte mail, huit
          n&apos;ont aucun objectif chiffré. Conséquence directe : quand il
          faut arbitrer en cours de projet (ce bouton, cette page, cette
          intégration), il n&apos;y a aucun critère de décision — et
          l&apos;arbitrage se fait au ressenti, ou au rapport de force. Les
          deux projets les plus fluides de notre histoire avaient un point
          commun : trois objectifs chiffrés en page 2, auxquels toutes les
          discussions revenaient.
        </InfoBox>

        <h3>Section 3 — Les cibles</h3>
        <p>
          Qui doit être convaincu ? Deux ou trois profils suffisent
          (« dirigeant de PME industrielle qui compare trois prestataires »,
          « particulier qui cherche un artisan en urgence »), avec pour
          chacun : ce qu&apos;il cherche, ce qui le rassure, sur quel appareil
          il vous lira. « Tout le monde » n&apos;est pas une cible.
        </p>

        <h3>Section 4 — Le périmètre fonctionnel, priorisé</h3>
        <p>
          Listez les fonctionnalités en deux colonnes :{" "}
          <strong>indispensable</strong> (le site ne sert à rien sans) et{" "}
          <strong>souhaitable</strong> (V2 possible). C&apos;est LE mécanisme
          anti-dépassement : « vouloir tout faire d&apos;emblée » est la
          première cause de budget explosé. Exemple vitrine : formulaire de
          contact = indispensable ; chat en direct = souhaitable. Décrivez des
          comportements, pas des solutions : « le visiteur peut réserver un
          créneau de 30 minutes en ligne », pas « intégrer Calendly ».
        </p>

        <h3>Section 5 — L&apos;arborescence et les contenus</h3>
        <p>
          La liste des pages envisagées, et pour chacune :{" "}
          <strong>qui fournit le contenu, sous quel délai</strong>. Écrivez
          noir sur blanc « la rédaction est incluse dans la prestation » ou
          « nous fournissons les textes avant le [date] » — le contenu dont
          personne n&apos;est responsable est la première cause de retard de
          mise en ligne, loin devant la technique.
        </p>

        <h3>Section 6 — Le design et les références</h3>
        <p>
          Trois liens de sites que vous aimez (et pourquoi), un ou deux que
          vous détestez (et pourquoi), votre charte si elle existe. Ces cinq
          liens disent plus que « moderne, épuré, professionnel » — les trois
          adjectifs présents dans tous les CDC que nous recevons.
        </p>

        <h3>Section 7 — Les exigences techniques (version 2026)</h3>
        <p>
          C&apos;est ici que presque tous les modèles en circulation datent.
          Les exigences à écrire aujourd&apos;hui, chiffrées :
        </p>
        <ul>
          <li>
            <strong>Performance</strong> — visez les seuils « bons » des Core
            Web Vitals de Google : LCP &lt; 2,5 s, INP &lt; 200 ms,
            CLS &lt; 0,1, mesurés sur données réelles. Exiger « un site
            rapide » ne vous protège pas ; exiger « LCP inférieur à 2,5 s sur
            mobile au 75e percentile » est opposable.
          </li>
          <li>
            <strong>RGPD</strong> — consentement avant tout dépôt de cookies,
            politique de confidentialité, HTTPS, sauvegardes externalisées.
          </li>
          <li>
            <strong>Accessibilité</strong> — depuis le 28 juin 2025,
            l&apos;European Accessibility Act impose l&apos;accessibilité
            (référentiel RGAA) aux entreprises de plus de 10 salariés et
            2 M€ de CA qui vendent des services en ligne, avec des sanctions
            jusqu&apos;à 50 000 € par service. Même hors obligation :
            contrastes, navigation clavier et balisage sémantique améliorent
            l&apos;UX et le SEO.
          </li>
          <li>
            <strong>Responsive</strong> — plus de 60 % du trafic web est
            mobile ; demandez une conception mobile-first, pas une «
            adaptation ».
          </li>
        </ul>

        <h3>Section 8 — Le SEO, dès la conception</h3>
        <p>
          Même sans ambition SEO immédiate, inscrivez le socle : URLs
          propres, balisage sémantique, hiérarchie de titres, redirections
          gérables, images optimisées. Si l&apos;acquisition Google est un
          objectif, listez les requêtes visées — elles déterminent
          l&apos;arborescence (une page par intention de recherche). Le SEO
          ajouté après coup se paie en avenant, puis en refonte.
        </p>

        <h3>Section 9 — Les intégrations et l&apos;existant</h3>
        <p>
          <strong>L&apos;oubli n° 1 dans les CDC que nous recevons.</strong>{" "}
          Listez vos outils : CRM, ERP, facturation, prise de rendez-vous,
          emailing, base clients. Le site doit-il s&apos;y connecter ? Une
          intégration découverte en cours de projet, c&apos;est 2 à 10 jours
          de développement non chiffrés — et l&apos;agence conçoit sinon une
          solution qui ne s&apos;emboîte pas dans votre système.
        </p>

        <InfoBox variant="amber" title="Le cas classique">
          Un CDC impeccable arrive : objectifs chiffrés, périmètre priorisé.
          Au deuxième atelier, on découvre que « le formulaire doit créer la
          fiche client » — dans un CRM interne dont le CDC ne disait pas un
          mot, sans API documentée. Résultat : dix jours d&apos;intégration
          non prévus, à négocier en avenant alors que le projet est lancé.
          Une ligne dans la section 9 aurait suffi. Écrivez aussi les
          non-demandes (« aucune intégration en V1 ») : elles évitent le
          sur-chiffrage.
        </InfoBox>

        <h3>Section 10 — Budget, délais et gouvernance</h3>
        <p>
          Votre fourchette budgétaire (voir section 7 de ce guide), votre
          échéance et son motif éventuel (salon, saison), et la gouvernance :
          un interlocuteur unique côté client, un délai maximal de validation
          par livrable, un nombre de cycles de corrections inclus. France Num
          recommande aussi une <strong>réserve de 15 à 20 %</strong> pour les
          besoins découverts en route — les projets qui la prévoient ne
          dérapent pas, ils arbitrent.
        </p>

        <GuideInlineCTA
          title="Un cadrage professionnel plutôt qu'un CDC solitaire ?"
          description="Le Discovery Sprint transforme votre expression de besoin en spécifications écrites, prototype cliquable et devis ferme — en 2 jours, co-construit avec vous."
          tags={["1 500 €, déduit à 100 % si le projet se lance", "Périmètre écrit", "Devis ferme"]}
        />

        <h2 id="exemple-rempli">5. L&apos;exemple rempli : cabinet comptable, refonte vitrine</h2>
        <p>
          Aucune page qui ranke sur cette requête ne montre un exemple
          au-delà de six lignes. Voici les sections clés d&apos;un CDC réel
          (anonymisé et condensé) tel que nous aimons en recevoir — cabinet
          d&apos;expertise comptable régional, 12 salariés, refonte de son
          site vitrine :
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
          Notez ce qui rend ce document immédiatement exploitable : chaque
          objectif est chiffré, le périmètre est hiérarchisé, la non-demande
          d&apos;intégration est écrite <em>aussi</em> (elle évite un
          sur-chiffrage), et le budget est annoncé en fourchette. Ce CDC de
          6 pages a reçu trois devis parfaitement comparables.
        </p>

        <h2 id="erreurs">6. Les 7 erreurs qui ruinent un cahier des charges</h2>
        <p>Vues de notre côté du bureau, par fréquence décroissante :</p>
        <ul>
          <li>
            <strong>Décrire la solution au lieu du problème</strong> —
            « intégrer tel plugin », « bouton de 42 px en #3B82F6 ». Vous
            payez une expertise : exprimez le besoin, laissez le prestataire
            proposer (et challengez sa proposition).
          </li>
          <li>
            <strong>Les adjectifs à la place des comportements</strong> —
            « site rapide, moderne, intuitif ». Écrivez « charge en moins de
            2,5 s sur mobile », « un visiteur trouve le formulaire de devis
            en 2 clics ».
          </li>
          <li>
            <strong>Aucun objectif mesurable</strong> — sans O1/O2/O3
            chiffrés, impossible d&apos;arbitrer les choix ni d&apos;évaluer
            le ROI. C&apos;est aussi ce qui distingue un projet d&apos;une
            dépense.
          </li>
          <li>
            <strong>L&apos;existant passé sous silence</strong> — CRM, ERP,
            agendas, facturation découverts au sprint 2 : chaque intégration
            surprise coûte 2 à 10 jours non chiffrés.
          </li>
          <li>
            <strong>Des contenus sans responsable</strong> — première cause
            de retard. Qui écrit, qui fournit les photos, pour quand : trois
            réponses obligatoires.
          </li>
          <li>
            <strong>Le budget caché</strong> — voir section suivante : vous
            recevez des devis incomparables et faites perdre 10 heures à
            chaque agence sérieuse.
          </li>
          <li>
            <strong>La liste au Père Noël</strong> — 25 fonctionnalités sans
            priorité. Cas réel documenté : une PME e-commerce qui avait
            oublié de prioriser (et de mentionner le multi-devises) a pris
            3 mois de retard et 15 % de budget en plus.
          </li>
        </ul>

        <h2 id="budget">7. Faut-il indiquer son budget ? (oui — voici pourquoi)</h2>
        <p>
          C&apos;est la question la plus débattue — et côté prestataire, la
          réponse est unanime : <strong>annoncez au moins une
          fourchette</strong>. « Je ne préfère pas le dire » ne vous protège
          de rien : sans repère, l&apos;agence sous-dimensionne (devis
          inutilisable) ou sur-dimensionne (devis effrayant), et vous
          comparez des propositions qui ne décrivent pas le même projet.
          Chiffrer sérieusement un site représente une dizaine d&apos;heures
          de travail : ce temps se investit pour un projet calibrable, pas
          pour une devinette. La crainte du « devis gonflé pour consommer
          l&apos;enveloppe » se neutralise simplement : donnez une fourchette
          et exigez le détail poste par poste — nos{" "}
          <Link href="/guides/combien-coute-un-site-internet">guides de
          prix</Link> vous donnent les repères du marché pour la calibrer. En
          marchés publics, c&apos;est même tranché juridiquement : le budget
          doit être communiqué pour être opposable aux candidats.
        </p>

        <h2 id="qui-redige">8. Qui rédige, combien ça coûte</h2>
        <p>
          Le bon partage des rôles : <strong>vous</strong> exprimez le besoin
          métier (personne ne peut le faire à votre place) ;{" "}
          <strong>le prestataire</strong> challenge, complète et traduit en
          spécifications. Trois options pour formaliser :
        </p>
        <GuideTable
          headers={["Option", "Coût", "Pour qui"]}
          rows={[
            ["Vous-même avec ce modèle", "0 € (2-4 h de travail)", "Vitrine, projet cadré"],
            ["Consultant AMOA", "350 – 900 €/jour, soit 1 000 – 4 500 € le CDC", "Projet complexe, appel d'offres"],
            ["Discovery Sprint Hagnéré Code", "1 500 € (2 jours), déduit à 100 % si le projet se lance", "Specs + prototype cliquable + devis ferme"],
          ]}
        />
        <p>
          Quand le rédiger ? <strong>Avant de demander les devis</strong> —
          c&apos;est tout son intérêt : le même document envoyé à trois
          prestataires produit trois devis comparables. L&apos;envoyer après,
          c&apos;est cadrer un projet déjà chiffré à l&apos;aveugle.
        </p>

        <h2 id="declinaisons">9. E-commerce, refonte, SaaS : ce qui change</h2>
        <h3>Pour un site e-commerce</h3>
        <p>
          Ajoutez : le catalogue (volumétrie, variantes, filtres), le tunnel
          de commande, les moyens de paiement, la gestion des stocks et de la
          livraison, les KPI (panier moyen, taux de conversion) et les
          intégrations logistique/comptabilité. Les repères de prix sont dans
          notre guide du{" "}
          <Link href="/guides/prix-site-e-commerce">prix d&apos;un site
          e-commerce</Link> et l&apos;offre{" "}
          <Link href="/services/ecommerce">e-commerce sur mesure</Link>.
        </p>
        <h3>Pour une refonte</h3>
        <p>
          Les sections que tous les modèles génériques oublient :
          l&apos;audit de l&apos;existant (trafic, pages qui positionnent),
          l&apos;inventaire des URLs, le <strong>plan de redirections
          301</strong> et le suivi SEO post-migration. Une refonte sans plan
          de redirections peut effacer en un déploiement trois ans de
          référencement — exigez cette section dans tout devis de refonte.
        </p>
        <h3>Pour un SaaS ou une application</h3>
        <p>
          Le CDC devient un document produit : user stories, rôles et
          permissions, modèle de données, API, sécurité. C&apos;est un autre
          exercice — nos guides{" "}
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
          d&apos;abord, la <strong>clause d&apos;ordre de priorité des
          documents</strong> — certains prestataires font prévaloir leur
          proposition commerciale sur votre CDC en cas de contradiction ;
          lisez cette clause avant de signer. Ensuite, l&apos;enseignement du
          jugement Oopet c/ Dual (T. com. Paris, 2020) : sans spécifications
          formalisées, même un projet visiblement décevant ne donne
          quasiment aucune prise juridique. Chez Hagnéré Code, le périmètre
          écrit du Discovery Sprint est annexé au devis — c&apos;est lui qui
          fait foi, dans les deux sens.
        </p>

        <h2 id="cas-particuliers">11. Mairies, associations, marchés publics</h2>
        <p>
          Les structures publiques et associatives ont trois spécificités à
          écrire dès le CDC : l&apos;<strong>accessibilité RGAA
          obligatoire</strong> (organismes publics, avec déclaration de
          conformité publiée), la <strong>communication du budget</strong>{" "}
          (condition d&apos;opposabilité en commande publique) et les
          critères de sélection pondérés annoncés aux candidats. Le modèle de
          ce guide reste valable — ajoutez-y le cadre réglementaire de votre
          consultation.
        </p>

        <h2 id="methode">12. Méthode : rédiger votre CDC en 5 étapes</h2>
        <ol>
          <li>
            <strong>Écrivez d&apos;abord les objectifs et les cibles</strong>{" "}
            (sections 2-3) — tout le reste en découle.
          </li>
          <li>
            <strong>Listez les fonctionnalités, puis coupez</strong> — tout ce
            qui n&apos;est pas indispensable passe en « souhaitable ».
          </li>
          <li>
            <strong>Faites l&apos;inventaire de l&apos;existant</strong> —
            outils, contenus, contraintes, nom de domaine.
          </li>
          <li>
            <strong>Chiffrez vos exigences</strong> — performance, délais,
            budget en fourchette (aidez-vous de nos guides de prix).
          </li>
          <li>
            <strong>Faites-le challenger</strong> — par un pair, puis par les
            prestataires : un bon prestataire pose des questions qui
            dérangent ; celui qui chiffre sans rien demander est un signal
            d&apos;alerte.
          </li>
        </ol>

        <p>
          Avant d&apos;envoyer, passez la checklist finale — chaque « non »
          est un avenant en puissance :
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
            ["La propriété du code et la réversibilité sont exigées", "☐"],
            ["Un interlocuteur unique et des délais de validation sont définis", "☐"],
            ["Le même document part chez tous les prestataires consultés", "☐"],
          ]}
        />

        <h2 id="du-cdc-au-devis">13. Du cahier des charges au devis ferme</h2>
        <p>
          Voici comment nous lisons un CDC reçu : objectifs d&apos;abord
          (sont-ils mesurables ?), périmètre ensuite (est-il priorisé ?),
          existant enfin (qu&apos;est-ce qui va nous surprendre ?). Puis nous
          posons les questions qui manquent — et il en manque toujours.
          C&apos;est le rôle du <strong>Discovery Sprint (1 500 €,
          2 jours)</strong> : transformer votre expression de besoin en
          spécifications écrites, prototype cliquable et{" "}
          <strong>devis au forfait fixe</strong>, déduit à 100 % si le projet
          se lance. Le périmètre validé est annexé au contrat, les dates sont
          contractuelles — c&apos;est notre{" "}
          <Link href="/methode">méthode Sprint Fixe™</Link>.
        </p>
        <p>
          Vous avez déjà votre cahier des charges — ou juste une idée
          claire ?{" "}
          <Link href="/demarrer-un-projet">Décrivez votre projet en
          3 minutes</Link> : notre équipe vous répond personnellement sous
          24 h ouvrées, gratuitement et sans engagement.
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
          juin 2025) ; jugement T. com. Paris, 7 octobre 2020 (Oopet c/
          Dual), relayé par{" "}
          <a href="https://www.lemondeinformatique.fr/" target="_blank" rel="noopener noreferrer">Le Monde Informatique</a> ;
          baromètres TJM AMOA (Portageo, Free-Work).
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
