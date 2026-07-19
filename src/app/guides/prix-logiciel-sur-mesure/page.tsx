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

const guide = getGuide("prix-logiciel-sur-mesure");

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
      "Logiciels métier sur mesure",
      "Next.js",
      "React",
      "Automatisation d'entreprise",
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
      name: "Prix d'un logiciel sur mesure",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Quel est le prix d'un logiciel sur mesure ?",
    answer:
      "À titre indicatif, notre recoupement éditorial de guides tarifaires français situe un outil interne simple entre 5 000 et 15 000 € (un processus digitalisé, quelques écrans), un logiciel métier entre 15 000 et 60 000 € (rôles, circuits de validation, connexions à vos outils), et une plateforme complète entre 60 000 et 250 000 €. Ce recoupement n'est pas un corpus statistique de budgets clients et ne permet pas d'établir une médiane. Chez Hagnéré Code, un outil interne sur mesure va de 8 000 à 80 000 € au forfait fixe contractuel.",
  },
  {
    question: "Combien coûte le développement d'un logiciel de gestion ?",
    answer:
      "Selon ce qu'il gère : un suivi de stock ou de commandes simple se situe entre 8 000 et 20 000 €, une gestion complète (clients, devis, planning, facturation connectée) entre 20 000 et 60 000 €, un ERP sur mesure au-delà de 80 000 €. Le facteur qui fait le plus varier le prix n'est pas le nombre d'écrans : ce sont les connexions à vos logiciels existants (comptabilité, paie, banque), qui représentent 2 000 à 15 000 € chacune.",
  },
  {
    question: "Comment est calculé le prix d'un logiciel ?",
    answer:
      "Presque toujours par la même multiplication : nombre de jours de travail × taux journalier (le « TJM »). En France en 2026, un développeur confirmé facture 450 à 600 € par jour, un senior 600 à 800 €. Un outil simple représente 10 à 30 jours de travail, un logiciel métier 40 à 120 jours. Faites la multiplication sur tout devis reçu : un « logiciel complet à 3 000 € » représente 5 jours de travail — demandez-vous ce qu'on peut réellement construire en une semaine.",
  },
  {
    question: "Logiciel sur mesure ou SaaS : comment choisir ?",
    answer:
      "La règle simple : on s'abonne pour ce qui est commun à toutes les entreprises (paie, comptabilité, messagerie), on construit ce qui fait sa différence. Un abonnement est imbattable au démarrage ; mais il se paie par siège, pour toujours, avec une inflation moyenne de 11 % par an sur les prix SaaS. Dès ~10 utilisateurs sur un outil central, le cumul des licences croise souvent le coût d'un développement amorti entre 2 et 4 ans — faites le calcul sur 5 ans avant de décider, il est dans ce guide.",
  },
  {
    question: "Combien coûte la maintenance d'un logiciel sur mesure ?",
    answer:
      "Comme hypothèse de planification, ce guide retient 10 à 25 % du coût initial par an pour correctifs, sécurité et évolutions. Ce n'est pas une règle statistique : le montant dépend du niveau de service, des dépendances et du rythme d'évolution. Pour un outil à 30 000 €, la simulation donne 3 000 à 7 500 €/an, auxquels s'ajoute un hébergement chiffré selon l'usage. Exigez les prestations, délais d'intervention et exclusions plutôt qu'un simple pourcentage.",
  },
  {
    question: "Peut-on créer un logiciel de gestion avec Excel ou Access ?",
    answer:
      "On peut — c'est même souvent la bonne première étape. Mais connaissez les limites : une synthèse académique reliée dans les sources de ce guide rapporte que 88 % des feuilles de calcul étudiées contiennent au moins une erreur. Les signaux qu'il est temps de passer à un vrai outil : le fichier ne marche que pour son auteur, les versions se contredisent, les macros cassent à chaque mise à jour, et la ressaisie mange des heures chaque semaine.",
  },
  {
    question: "Combien coûte le remplacement d'un vieux logiciel (Access, VB6, WinDev) ?",
    answer:
      "Trois niveaux d'intervention : une reprise-stabilisation, une modernisation progressive module par module, ou une refonte avec reprise des données. Les durées et budgets de ce guide sont des ordres de grandeur à cadrer. Une bascule générale concentre données, formation et continuité métier le même jour ; une migration progressive réduit souvent cette concentration de risques, sans être obligatoire dans tous les contextes.",
  },
  {
    question: "Combien de temps faut-il pour développer un logiciel sur mesure ?",
    answer:
      "Avec une équipe expérimentée : 3 à 8 semaines pour un outil interne simple, 2 à 6 mois pour un logiciel métier complet, 6 mois et plus pour une plateforme. Le vrai facteur de délai n'est pas le code : c'est la disponibilité de vos équipes pour montrer leurs processus réels, tester les versions intermédiaires et trancher les décisions. Un interlocuteur qui répond en 24 h fait gagner des semaines.",
  },
  {
    question: "L'IA permet-elle de créer un logiciel moins cher ?",
    answer:
      "Oui pour certaines tâches de code standard, pas automatiquement pour un projet complet — et méfiez-vous des promesses de division par dix. Les essais reliés dans les sources de ce guide mesurent aussi bien une accélération sur une tâche cadrée qu'un ralentissement sur du code complexe. Ce que l'IA ne réduit pas automatiquement : comprendre votre métier, concevoir les bons écrans, connecter vos outils et fiabiliser. Chez Hagnéré Code, elle reste un outil de production avec revue humaine ; nous ne présentons pas ce gain interne comme la preuve causale d'une remise commerciale systématique.",
  },
  {
    question: "À qui appartient le code d'un logiciel développé par un prestataire ?",
    answer:
      "Pour un logiciel commandé à un prestataire externe, payer les factures ne transfère pas automatiquement tous les droits. En droit français, il faut identifier les auteurs, l'éventuel employeur titulaire et les licences tierces. Le contrat organise ensuite une cession ou une licence adaptée à l'usage attendu ; l'article L.131-3 encadre notamment la cession. Faites inventorier cette chaîne de droits et valider la clause juridiquement avant de signer.",
  },
  {
    question: "Quel est le retour sur investissement d'un logiciel sur mesure ?",
    answer:
      "Il se calcule en heures gagnées : heures économisées par semaine × 47 semaines × coût horaire chargé (43,50 €/h en moyenne en France, donnée publique reliée dans les sources du guide). Exemple illustratif : un outil qui fait gagner 5 h par semaine à 3 salariés économise environ 30 700 €/an — avant vérification de ces gains après livraison. Ajoutez les gains moins directement quantifiables : moins d'erreurs de saisie et des données plus fiables pour décider.",
  },
  {
    question: "Combien coûte une connexion entre deux logiciels (intégration) ?",
    answer:
      "Chaque connexion (« intégration ») entre votre nouvel outil et un logiciel existant représente 1 à 4 semaines de travail : comptez 2 000 à 5 000 € pour un système de paiement, 3 000 à 8 000 € pour un CRM, 5 000 à 15 000 € pour un ERP. Pour des besoins simples, les outils d'automatisation font le pont pour 500 à 5 000 € de mise en place plus un petit abonnement — une bonne solution intermédiaire avant le sur-mesure complet.",
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
          { label: "Prix d'un logiciel sur mesure" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="La grille 2026 par type d'outil et la méthode jours × taux journalier pour vérifier un devis. Comparez sur 3 ans le sur-mesure, les logiciels loués par abonnement (SaaS) et Excel, puis calculez le retour sur investissement. Un exemple de devis et la propriété du code sont expliqués ligne à ligne."
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={`Mis à jour le ${formatGuideDate(guide.dateModified)}`}
        keyPoints={[
          { number: "01", title: "Outil simple : 5 000 – 15 000 €", description: "", color: "violet" },
          { number: "02", title: "Logiciel métier : 15 000 – 60 000 €", description: "", color: "blue" },
          { number: "03", title: "ROI : en heures gagnées", description: "", color: "emerald" },
          { number: "04", title: `Lecture : ${guide.readTimeMin} min`, description: "", color: "amber" },
        ]}
        relatedLinks={[
          { href: "/guides/transformer-excel-en-application", label: "Transformer Excel en application" },
          { href: "/guides/combien-coute-un-site-internet", label: "Combien coûte un site internet ?" },
          { href: "/guides/combien-coute-un-saas", label: "Combien coûte un SaaS ?" },
          { href: "/ressources/kit-cahier-des-charges-site-internet", label: "Modèle de cahier des charges" },
          { href: "/services/outils-internes-sur-mesure", label: "Outils internes sur mesure" },
          { href: "/methode", label: "Notre méthode Sprint Fixe™" },
          { href: "/tarifs", label: "Nos tarifs détaillés" },
        ]}
        faqTitle="Prix d'un logiciel sur mesure : vos questions"
        faqItems={faqItems}
      >
        <p className="lead">
          Pour le même besoin, une agence vous répond 5 000 € et une autre
          150 000 €. Les deux sont sérieuses. Ce guide explique cet écart,
          donne <strong>les fourchettes indicatives 2026, la méthode pour
          vérifier un devis en une multiplication, et le calcul qui compte
          vraiment : ce que l&apos;absence d&apos;outil vous coûte déjà</strong>.
        </p>

        <GuideToc
          items={[
            { id: "reponse-rapide", label: "1. La réponse rapide : les fourchettes 2026" },
            { id: "de-quoi-parle-t-on", label: "2. Sur mesure, SaaS, no-code, Excel : de quoi parle-t-on" },
            { id: "cout-actuel", label: "3. Ce que l'absence d'outil vous coûte déjà" },
            { id: "prix-par-type", label: "4. Les prix 2026 par type de logiciel" },
            { id: "ecart-devis", label: "5. Pourquoi les devis vont de 5 000 à 150 000 €" },
            { id: "methode-tjm", label: "6. La méthode jours × TJM pour vérifier un devis" },
            { id: "devis", label: "7. Un exemple de devis, décortiqué ligne à ligne" },
            { id: "tco", label: "8. Le vrai coût sur 3 ans (maintenance, hébergement, coûts cachés)" },
            { id: "match", label: "9. Sur mesure, SaaS ou Excel : le match chiffré" },
            { id: "ia", label: "10. Ce que l'IA change vraiment aux prix (2026)" },
            { id: "legacy", label: "11. Remplacer un vieux logiciel (Access, Excel, WinDev…)" },
            { id: "juridique", label: "12. À qui appartient le code ? La question à 100 000 €" },
            { id: "methode", label: "13. Méthode : payer le juste prix en 5 étapes" },
          ]}
        />

        <h2 id="reponse-rapide">1. La réponse rapide : les fourchettes 2026</h2>
        <p>
          À titre de repères indicatifs, notre recoupement éditorial de
          guides tarifaires français situe en 2026 un logiciel sur mesure à{" "}
          <strong>5 000 à 15 000 € pour un outil interne simple</strong>{" "}
          (un processus digitalisé, quelques écrans),{" "}
          <strong>15 000 à 60 000 € pour un logiciel métier
          complet</strong> (rôles, planning, connexions à vos outils), et{" "}
          <strong>60 000 à 250 000 € pour une plateforme</strong> (ERP sur
          mesure, portail multi-services). Ce recoupement n&apos;est pas un
          corpus statistique de budgets clients et ne permet pas d&apos;établir
          une médiane. S&apos;y ajoutent la
          maintenance (10 à 25 % du coût initial par an) et
          l&apos;hébergement (40 à 100 €/mois). Chez Hagnéré Code, un outil
          interne va de 8 000 à 80 000 €, au forfait fixe.
        </p>
        <GuideTable
          headers={["Type de logiciel", "Budget 2026", "Délai typique", "Exemples"]}
          rows={[
            ["Outil interne simple", "5 000 – 15 000 €", "3 – 8 semaines", "Suivi de commandes, registre, formulaires métier"],
            ["Logiciel métier complet", "15 000 – 60 000 €", "2 – 6 mois", "Gestion clients + devis + planning + facturation"],
            ["Portail client / extranet", "18 000 – 70 000 €", "2 – 4 mois", "Espace où vos clients suivent leurs dossiers"],
            ["Plateforme / ERP sur mesure", "60 000 – 250 000 €", "6 – 18 mois", "Tous les processus de l'entreprise reliés"],
            ["Automatisation entre outils existants", "500 – 5 000 € par flux", "1 – 4 semaines", "Devis signé → facture créée → client prévenu"],
          ]}
        />

        <InfoBox variant="blue" title="Les 10 mots de ce guide, traduits en français courant">
          <ul className="list-disc pl-4 space-y-1.5">
            <li><strong>Logiciel sur mesure</strong> : un programme construit pour vos processus à vous ; le contrat décide des droits qui vous sont cédés.</li>
            <li><strong>SaaS</strong> : un logiciel loué par abonnement, souvent facturé par utilisateur.</li>
            <li><strong>No-code</strong> : des outils pour assembler une application sans programmer ; son fonctionnement reste dépendant de la plateforme.</li>
            <li><strong>TJM</strong> : le taux journalier d&apos;un développeur — son « taux horaire d&apos;artisan », à la journée.</li>
            <li><strong>Intégration</strong> : la connexion entre deux logiciels pour qu&apos;ils échangent leurs données sans ressaisie.</li>
            <li><strong>API</strong> : la « prise » standardisée sur laquelle se branche une intégration.</li>
            <li><strong>MVP</strong> : une première version volontairement réduite à l&apos;essentiel, pour démarrer vite.</li>
            <li><strong>Maintenance (ou TMA)</strong> : l&apos;entretien du logiciel après sa mise en service — correctifs, sécurité, petites évolutions.</li>
            <li><strong>Reprise de données</strong> : le transfert de vos données actuelles (Excel, ancien logiciel) vers le nouveau.</li>
            <li><strong>Cession de code</strong> : la clause écrite qui vous transfère les droits sur les développements créés pour vous ; les briques tierces gardent leurs licences (section 12).</li>
          </ul>
        </InfoBox>

        <h2 id="de-quoi-parle-t-on">2. Sur mesure, SaaS, no-code, Excel : de quoi parle-t-on</h2>
        <p>
          Quatre façons d&apos;outiller une entreprise, quatre logiques
          économiques. <strong>Excel</strong> : gratuit en apparence, il se
          paie en heures et en erreurs (section 3).{" "}
          <strong>Le SaaS</strong> — un logiciel loué par abonnement — est
          une location meublée : on emménage en un jour, mais on paie un
          loyer par personne, pour toujours, et on ne pousse pas les murs.{" "}
          <strong>Le no-code</strong> est une location aménageable : plus
          souple, mais toujours chez un bailleur.{" "}
          <strong>Le sur-mesure</strong>, c&apos;est construire sa maison :
          plus cher à l&apos;entrée, dessinée pour vos processus exacts, et
          à la fin — si le contrat est bien écrit — elle vous appartient.
        </p>
        <p>
          Prenons un cas illustratif que nous suivrons tout au long du
          guide : <strong>les Transports Bréban, entreprise fictive de 14
          salariés en Savoie</strong>. Ce personnage pédagogique ne décrit
          pas un client identifiable.
          Leur planning de tournées vit dans un classeur Excel que seule
          l&apos;assistante de direction sait manipuler, les bons de
          livraison se ressaisissent dans la facturation, et deux versions
          du fichier circulent en permanence. Aucun logiciel de transport
          du marché ne colle à leur activité mixte (messagerie + bennes).
          C&apos;est le cas d&apos;école du sur-mesure — et nous allons le
          chiffrer de bout en bout.
        </p>

        <h2 id="cout-actuel">3. Ce que l&apos;absence d&apos;outil vous coûte déjà</h2>
        <p>
          Avant de demander « combien coûte un logiciel ? », posez la
          question inverse : <strong>combien coûte le fait de ne pas en
          avoir ?</strong> Les études convergent. Les employés de bureau
          passent en moyenne 1,8 heure par jour à chercher et rassembler de
          l&apos;information selon le{" "}
          <a href="https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/the-social-economy" target="_blank" rel="noopener noreferrer">McKinsey Global Institute</a>. Plus de 40 % des
          salariés consacrent au moins un quart de leur semaine à des
          tâches manuelles répétitives — ressaisie en tête selon{" "}
          <a href="https://www.smartsheet.com/content-center/product-news/automation/workers-waste-quarter-work-week-manual-repetitive-tasks" target="_blank" rel="noopener noreferrer">Smartsheet</a>.
          Et la synthèse académique de{" "}
          <a href="http://panko.shidler.hawaii.edu/SSR/Mypapers/whatknow.htm" target="_blank" rel="noopener noreferrer">Ray Panko (Université d&apos;Hawaï)</a> rapporte que{" "}
          <strong>88 % des feuilles de calcul contiennent au moins une
          erreur</strong>.
        </p>
        <p>
          Traduisons en euros, avec la seule formule à retenir de cette
          section :
        </p>
        <FormulaBox>
          <strong>ROI = heures gagnées par semaine × 47 semaines travaillées
          (l&apos;année, congés et jours fériés déduits) × coût horaire
          chargé</strong>
          <br />
          Le coût horaire moyen de la main-d&apos;œuvre en France :
          43,50 € (<a href="https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Hourly_labour_costs" target="_blank" rel="noopener noreferrer">Eurostat, 2025</a>).
          <br />
          <br />
          Chez Bréban : l&apos;assistante passe 6 h/semaine sur le planning
          et 4 h sur la ressaisie des bons ; deux exploitants perdent
          chacun 3 h de coordination.
          <br />
          (6 + 4 + 3 + 3) h × 47 semaines × 43,50 € ={" "}
          <strong>≈ 32 700 € par an</strong> — chaque année, sans compter
          les erreurs.
        </FormulaBox>
        <p>
          Les erreurs, justement, coûtent généralement plus cher lorsqu&apos;elles
          sont détectées après propagation : correction de plusieurs fichiers,
          nouvelle facture, reprise du stock ou mauvaise décision. Nous ne
          retenons pas ici le multiplicateur « 1-10-100 », faute de source et
          de périmètre suffisamment traçables. Un logiciel qui valide la donnée
          à la saisie et la propage ensuite réduit surtout le nombre de reprises
          possibles.
        </p>
        <InfoBox variant="amber" title="Quand Excel dérape : trois incidents documentés">
          En 2003, l&apos;électricien canadien{" "}
          <a href="https://www.theregister.com/2003/06/19/excel_snafu_costs_firm_24m/" target="_blank" rel="noopener noreferrer">TransAlta</a> a perdu 24
          millions de dollars à cause d&apos;un décalage de lignes dans un
          copier-coller Excel. Ce montant est souvent présenté comme 10 %
          de son résultat annuel, mais la source contemporaine accessible
          confirme le montant et l&apos;erreur, pas ce ratio. En 2012,
          l&apos;affaire « London Whale » de{" "}
          <a href="https://elischolar.library.yale.edu/ypfs-documents/454/" target="_blank" rel="noopener noreferrer">JPMorgan</a> (plus de 6 milliards
          de dollars de pertes) impliquait une erreur de formule — une
          somme à la place d&apos;une moyenne — dans un modèle de risque
          sous Excel. Elle n&apos;explique pas, à elle seule, toute la perte.
          Et en 2020, le service de santé anglais a « perdu » près de 16
          000 cas positifs de Covid parce que le fichier de consolidation
          avait atteint sa limite de lignes.
          Votre entreprise ne joue pas à cette échelle — mais votre
          classeur de devis obéit aux mêmes lois.
        </InfoBox>

        <h2 id="prix-par-type">4. Les prix 2026 par type de logiciel</h2>
        <p>
          Voici la grille détaillée par usage — les fourchettes croisent
          les guides publics du marché français (plusieurs agences
          concurrentes, pour neutraliser le biais commercial de chacune) et
          notre grille tarifaire publique. Cette dernière est une donnée
          commerciale assumée, pas une étude indépendante. Ce recoupement
          éditorial ne constitue pas un échantillon statistique :
        </p>
        <GuideTable
          headers={["Ce que vous voulez", "Budget création", "Récurrent / an", "Le poste qui fait varier"]}
          rows={[
            ["Suivi clients / devis (CRM léger)", "8 000 – 25 000 €", "1 500 – 4 000 €", "Connexion à la facturation existante"],
            ["Gestion de stock / commandes", "8 000 – 30 000 €", "1 500 – 5 000 €", "Codes-barres, multi-dépôts, inventaires"],
            ["Planning / interventions terrain", "15 000 – 45 000 €", "2 500 – 8 000 €", "Application mobile pour les équipes"],
            ["Portail client (suivi de dossiers)", "18 000 – 70 000 €", "3 000 – 10 000 €", "Volume d'utilisateurs, documents, paiement"],
            ["ERP simplifié (tout relié)", "50 000 – 120 000 €", "8 000 – 25 000 €", "Nombre de processus et d'intégrations"],
            ["Automatisations entre outils", "500 – 5 000 € par flux", "300 – 1 500 €", "Complexité des règles métier"],
          ]}
        />
        <p>
          Une lecture honnête de cette grille : le prix suit moins le
          nombre d&apos;écrans que <strong>trois multiplicateurs</strong> —
          le nombre de rôles différents (qui voit quoi, qui valide quoi),
          les connexions à l&apos;existant (chaque intégration : 2 000 à
          15 000 € selon le logiciel à brancher), et l&apos;exigence de
          fiabilité. Une panne sur un outil de consultation gêne ; une
          erreur sur un outil qui facture crée immédiatement un risque
          financier et client. C&apos;est pour cela qu&apos;un « simple outil de
          planning » peut légitimement coûter 15 000 € : le planning est
          simple, le brancher sur la paie et l&apos;app mobile des équipes
          ne l&apos;est pas (le choix de la technologie mobile a son
          comparatif dédié : notre{" "}
          <Link href="/guides/react-native-ou-flutter">guide React
          Native ou Flutter</Link>). Par secteur, les cas les plus
          fréquents que
          nous voyons passer : le BTP (suivi multi-chantiers, matériel,
          pointages), le transport (tournées, bons de livraison), la
          santé (avec une contrainte en plus : les données de patients
          imposent un hébergement certifié « HDS », qui renchérit le
          projet) et l&apos;industrie (ordres de fabrication,
          traçabilité). Ce sont exactement les périmètres que couvre
          notre offre
          d&apos;<Link href="/services/outils-internes-sur-mesure">outils
          internes sur mesure</Link>, au forfait fixe contractuel.
        </p>

        <h2 id="ecart-devis">5. Pourquoi les devis vont de 5 000 à 150 000 €</h2>
        <p>
          C&apos;est la vraie question derrière votre recherche : les pages
          que vous avez ouvertes annoncent des prix qui vont du simple au
          décuple. Cet écart a quatre explications rationnelles — les
          connaître vous permet de classer n&apos;importe quel devis en
          cinq minutes :
        </p>
        <ul>
          <li>
            <strong>Le périmètre supposé.</strong> « Un CRM » peut vouloir
            dire 3 écrans ou 30. Sans cahier des charges commun, chaque
            agence chiffre le projet qu&apos;elle imagine — et toutes ont
            raison. C&apos;est l&apos;écart n° 1, de très loin.
          </li>
          <li>
            <strong>Le positionnement du prestataire.</strong> Les agences
            seniors parisiennes annoncent 80 000 à 400 000 € là où les
            studios positionnés PME travaillent entre 5 000 et 60 000 €.
            Les taux journaliers vont de 300 € (junior) à 800 € et plus
            (senior parisien) — pour des vitesses et des niveaux de
            fiabilité différents.
          </li>
          <li>
            <strong>Le niveau de finition.</strong> Un outil utilisé par 3
            personnes formées tolère une interface rugueuse ; un portail
            ouvert à vos clients exige le soin d&apos;un produit public.
            Même fonction, budget du simple au double.
          </li>
          <li>
            <strong>L&apos;usage — ou l&apos;affichage — de l&apos;IA.</strong>{" "}
            L&apos;IA peut réduire l&apos;effort sur certaines tâches, mais
            son effet sur un devis complet ne se déduit pas sans comparer
            le même périmètre et les mêmes garanties. La section 10 sépare
            les résultats publiés de l&apos;argument commercial.
          </li>
        </ul>
        <p>
          Le statut du prestataire change aussi ce que vous achetez, même
          à périmètre égal :
        </p>
        <GuideTable
          headers={["Modèle", "Bon choix lorsque", "Compromis à contrôler"]}
          rows={[
            ["Freelance senior", "Un périmètre net peut être porté par une personne", "Continuité, renfort en cas d'absence et couverture du design"],
            ["Studio ou agence senior", "Le projet exige produit, design, développement et livraison coordonnés", "Équipe réellement affectée et sous-traitance éventuelle"],
            ["Entreprise de services du numérique (ESN)", "Le projet doit s'insérer dans une grande organisation ou mobiliser une équipe étendue", "Frais de structure, rotation des intervenants et vitesse de décision"],
            ["Équipe interne", "Le logiciel appelle une évolution continue et devient stratégique", "Recrutement, management technique et charge durable"],
          ]}
        />
        <InfoBox variant="emerald" title="À retenir">
          Un devis ne se juge jamais dans l&apos;absolu, mais à périmètre
          égal. Envoyez le même{" "}
          <Link href="/guides/cahier-des-charges-site-internet">cahier des
          charges</Link> à trois prestataires, exigez le détail en jours
          par poste. Dans de nombreux cas, l&apos;écart apparent 1-à-10
          se rapproche alors d&apos;un écart 1-à-2. Vous pouvez enfin
          distinguer ce qui vient du périmètre, de la séniorité et de la
          finition — sans attribuer la différence à une méthode magique.
        </InfoBox>

        <h2 id="methode-tjm">6. La méthode jours × TJM pour vérifier un devis</h2>
        <p>
          Tout devis de logiciel se ramène à une multiplication :{" "}
          <strong>nombre de jours de travail × taux journalier (TJM)</strong>.
          Les taux France 2026 sont situés à partir du{" "}
          <a href="https://www.silkhom.com/barometre-des-tjm-informatique-electronique-digital/" target="_blank" rel="noopener noreferrer">baromètre SILKHOM</a>{" "}
          cité dans les sources : développeur
          junior 300-400 €/jour, confirmé 450-600 €, senior 600-800 €,
          designer 400-600 €, chef de projet 500-700 €. La médiane
          nationale tourne autour de 520-535 €/jour.
        </p>
        <p>
          Appliquez la multiplication dans les deux sens. Dans un sens :
          un outil simple = 10 à 30 jours ≈ 5 000 à 18 000 € ; un logiciel
          métier = 40 à 120 jours ≈ 20 000 à 70 000 €. Ces produits
          retombent sur les fourchettes de la section 1, à quelques
          milliers d&apos;euros près — deux méthodes indépendantes, même
          ordre de grandeur : bon signe. Dans
          l&apos;autre sens : un « logiciel de gestion complet à
          4 900 € », c&apos;est 8 jours de travail d&apos;un profil
          confirmé. Huit jours pour comprendre votre métier, concevoir,
          développer, connecter, tester et livrer ? La multiplication est
          le détecteur d&apos;anomalie le plus simple du marché — dans les
          deux directions, car un devis à 90 000 € sans détail des jours
          n&apos;est pas plus sérieux. Notre{" "}
          <Link href="/guides/tjm-developpeur-web">guide du tarif
          journalier</Link> détaille cette méthode : nombre de jours par
          livrable, poids relatif de chaque poste et calcul du tarif
          implicite d&apos;un devis.
        </p>

        <h2 id="devis">7. Un exemple de devis, décortiqué ligne à ligne</h2>
        <p>
          Voici un <strong>exemple illustratif</strong>, construit pour le
          cas fictif de notre fil rouge : la gestion de tournées des
          Transports Bréban — planning, bons de livraison numériques sur
          mobile et facturation connectée. Il sert à vérifier le calcul,
          pas à laisser croire qu&apos;un document client est publié.
          Taux journalier retenu : 650 € HT.
        </p>
        <FormulaBox>
          <strong>Devis « gestion de tournées » — 50 jours, 32 500 € HT</strong>
          <br />
          Cadrage : ateliers sur vos processus réels (2 j) —
          1 300 €
          <br />
          Maquettes des écrans clés, validées par les utilisateurs (5 j) —
          3 250 €
          <br />
          Planning interactif : tournées, affectations, absences (10 j) —
          6 500 €
          <br />
          Application mobile chauffeurs : bons, photos, signatures (12 j)
          — 7 800 €
          <br />
          Connexion facturation existante + exports comptables (7 j) —
          4 550 €
          <br />
          Reprise des données Excel (3 ans d&apos;historique) (4 j) —
          2 600 €
          <br />
          Rôles, droits d&apos;accès, RGPD (3 j) — 1 950 €
          <br />
          Tests avec les équipes, corrections, formation (5 j) — 3 250 €
          <br />
          Mise en production + transfert de propriété du code (2 j) —
          1 300 €
        </FormulaBox>
        <p>
          Cet exemple valorise le cadrage au taux journalier : sa ligne
          ressort donc à 1 300 €. Le Discovery Sprint forfaitaire
          présenté en section 13 est l&apos;offre actuelle à 1 500 €,
          déduite si le projet se lance. Les deux montants correspondent à
          des cadres commerciaux différents, pas à deux prix simultanés
          pour le même cadrage.
        </p>
        <p>
          Trois enseignements. D&apos;abord, <strong>le planning visible
          ne pèse qu&apos;un cinquième du budget</strong> : le gros du
          devis, c&apos;est le mobile, les connexions et la fiabilité —
          exactement ce que les devis low-cost escamotent, puis facturent
          en suppléments. Ensuite, chaque ligne est en jours : vous pouvez
          contester, prioriser, retirer (« la reprise des 3 ans
          d&apos;historique, gardons juste l&apos;année en cours :
          -1 300 € »). Enfin, la dernière ligne regroupe la mise en
          production, la remise du code et des accès sur 2 jours. La clause
          de cession n&apos;est pas une option facturée à part : elle doit
          déjà figurer dans le contrat et la liste des briques tierces doit
          être annexée (section 12).
        </p>

        <InfoBox variant="blue" title="Rendre deux devis réellement comparables">
          <p>
            Exigez pour chacun la même liste : cadrage, maquettes,
            développement, tests, reprise de données, formation, mise en
            production, garantie et maintenance. Faites écrire séparément
            les exclusions et les coûts qui dépendront d&apos;un service
            tiers. Enfin, chaque lot doit avoir un résultat observable, la
            personne qui le valide et ce qui vous est remis en cas
            d&apos;arrêt du projet.
          </p>
          <p className="mt-2">
            Sans ces éléments, le détail en jours donne une impression de
            précision, mais vous comparez encore des produits différents.
          </p>
        </InfoBox>

        <GuideInlineCTA
          title="Un chiffrage honnête pour votre outil métier ?"
          description="Décrivez votre processus en 3 minutes : nous vous répondons personnellement sous 24 h ouvrées avec une fourchette argumentée en jours × postes — et notre avis franc si un abonnement du marché suffit."
          tags={["Réponse sous 24 h ouvrées", "Outils internes 8 000 – 80 000 €", "Forfait fixe contractuel"]}
          ctaLabel="Cadrer mon outil"
        />

        <h2 id="tco">8. Le vrai coût sur 3 ans (maintenance, hébergement, coûts cachés)</h2>
        <p>
          Le devis de création n&apos;est pas le coût total. Voici ce qui
          s&apos;ajoute — et ce que les prestataires sérieux vous disent
          d&apos;emblée :
        </p>
        <GuideTable
          headers={["Poste", "Ordre de grandeur", "En clair"]}
          rows={[
            ["Maintenance corrective", "5 – 10 % du coût initial / an", "Bugs, mises à jour de sécurité — obligatoire"],
            ["Maintenance évolutive", "5 – 15 % du coût initial / an", "Les améliorations demandées à l'usage"],
            ["Hébergement + sauvegardes", "40 – 100 €/mois", "Infrastructure moderne, sauvegardes automatiques"],
            ["Reprise de données", "souvent sous-estimée", "Nettoyer et migrer l'existant — chiffrez-la au devis"],
            ["Formation & accompagnement", "1 – 3 jours", "Un outil non adopté est un outil perdu"],
            ["Intégrations découvertes en route", "2 000 – 15 000 € chacune", "L'oubli n° 1 — listez vos outils AVANT (cahier des charges)"],
          ]}
        />
        <p>
          Pour notre fil rouge Bréban : 32 500 € de création + environ
          4 900 €/an de maintenance (15 %) + 900 €/an
          d&apos;hébergement ≈ <strong>50 000 € sur 3 ans</strong>. Face
          aux ~32 700 €/an que coûtait le statu quo (section 3),
          l&apos;outil est amorti avant la fin de la deuxième année — à
          condition que la ligne « maintenance » soit tenue par
          quelqu&apos;un, ce qui est l&apos;objet d&apos;un contrat de{" "}
          <Link href="/services/maintenance-evolution">maintenance et
          d&apos;évolution</Link> au périmètre écrit. Et
          c&apos;est un calcul que nous vous recommandons d&apos;exiger de
          tout prestataire : pas de devis sans regard sur ce que
          l&apos;absence d&apos;outil coûte déjà.
        </p>
        <p>
          Un mot sur le risque, honnêtement : les statistiques d&apos;échec
          des projets informatiques sont réelles (les grands projets
          dépassent leur budget de 45 % en moyenne selon{" "}
          <a href="https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/delivering-large-scale-it-projects-on-time-on-budget-and-on-value" target="_blank" rel="noopener noreferrer">McKinsey-Oxford</a>).
          Mais lisez-les bien : elles portent sur de <em>grands</em>{" "}
          projets. Un outil de PME cadré serré et livré par étapes réduit
          cette exposition ; il ne supprime pas le risque. Les échecs plus
          discrets viennent d&apos;un processus mal compris, de données
          impossibles à reprendre, d&apos;utilisateurs indisponibles pour
          tester ou d&apos;une adoption laissée pour la fin. Un critère de
          succès mesurable à chaque palier permet de les voir tôt, au lieu
          de les découvrir après un projet-cathédrale de 18 mois.
        </p>

        <p>
          Un mot de trésorerie, enfin : un forfait sérieux se règle{" "}
          <strong>par jalons</strong> — un acompte au démarrage (souvent
          30 %), puis un paiement à chaque étape livrée et vérifiable,
          jamais 100 % d&apos;avance. Et avant de signer, jetez un œil aux
          dispositifs publics de financement de la numérisation : notre{" "}
          <Link href="/guides/aides-creation-site-internet">guide des
          aides</Link> recense ceux qui s&apos;appliquent aussi aux
          logiciels métier — plusieurs régions financent précisément les
          « outils numériques à forte valeur ajoutée ».
        </p>

        <h2 id="match">9. Sur mesure, SaaS ou Excel : le match chiffré</h2>
        <p>
          La règle de décision tient en une phrase :{" "}
          <strong>on s&apos;abonne pour ce qui est commun à toutes les
          entreprises, on construit ce qui fait sa différence.</strong> La
          paie, la comptabilité, la messagerie : des SaaS excellents
          existent, n&apos;y touchez pas. Votre façon unique de gérer les
          tournées, les chantiers ou les dossiers clients : c&apos;est là
          que le sur-mesure crée un avantage. Entre les deux, une troisième
          voie mérite d&apos;être chiffrée avant de trancher : notre{" "}
          <Link href="/guides/no-code-ou-sur-mesure">comparatif no-code ou
          sur-mesure</Link> donne les tarifs affichés des plateformes et le
          point où leur courbe de coût croise celle d&apos;un développement.
        </p>
        <p>Le calcul sur 5 ans, pour un outil central à 10 utilisateurs :</p>
        <GuideTable
          headers={["Option", "Coût sur 5 ans (10 utilisateurs)", "Ce qu'on oublie"]}
          rows={[
            ["Rester sur Excel", "« 0 € »… + heures perdues et erreurs", "~30 000 €/an de temps chez Bréban (section 3)"],
            ["SaaS type CRM Pro (~100 €/utilisateur/mois)", "≈ 60 000 € + hausses de prix", "Coût récurrent lié au nombre de comptes ; auditez les sièges régulièrement"],
            ["No-code (~20 €/utilisateur/mois, hypothèse illustrative)", "≈ 12 000 € + votre temps d'assemblage", "Limites structurelles, données chez un tiers"],
            ["Sur mesure (30 000 € + 15 %/an + hébergement)", "≈ 58 000 €, puis ~5 800 €/an", "Droits cédés si le contrat le prévoit ; coût stable, pas par siège"],
          ]}
        />
        <p>
          (Hypothèses illustratives à partir de tarifs affichés en dollars,
          convertis au pair
          pour simplifier la lecture.) Lecture honnête : à 3 utilisateurs,
          l&apos;abonnement gagne presque toujours au démarrage. Le
          point de bascule apparaît <strong>vers 10 utilisateurs et un
          horizon de 2 à 4 ans</strong>, quand le loyer par siège cumulé
          croise le coût d&apos;un développement amorti — et il arrive
          d&apos;autant plus vite que les prix SaaS augmentent d&apos;environ
          11 % par an selon l&apos;<a href="https://www.vertice.one/blog/mitigating-2025-saas-inflation-stats" target="_blank" rel="noopener noreferrer">indice Vertice 2025</a>. Le
          signal d&apos;alerte typique : votre équipe
          passe de 20 à 80 personnes, la facture SaaS est multipliée par 4,
          et personne n&apos;utilise mieux l&apos;outil. Si un produit du
          marché couvre 80 % de votre besoin : prenez-le, et ne construisez
          que les 20 % qui vous différencient. Si vous hésitez avec un
          produit à vendre par abonnement, notre guide{" "}
          <Link href="/guides/combien-coute-un-saas">« combien coûte un
          SaaS »</Link> traite ce cas.
        </p>
        <InfoBox variant="amber" title="Les cas où nous déconseillons le sur-mesure">
          <p>
            Restez sur le produit du marché si votre besoin est standard.
            Automatisez seulement le passage entre vos outils si la
            difficulté vient d&apos;une ressaisie. Gardez Excel si le
            processus est rare, maîtrisé et sans donnée critique. Enfin,
            reportez le projet si personne dans l&apos;entreprise ne peut
            décider, tester et porter l&apos;adoption : le meilleur code
            ne remplace pas ce responsable interne.
          </p>
        </InfoBox>

        <h2 id="ia">10. Ce que l&apos;IA change vraiment aux prix (2026)</h2>
        <p>
          Vous croiserez deux discours : « l&apos;IA divise les coûts par
          dix » et « l&apos;IA ne change rien ». Les études publiées
          racontent une histoire plus utile. Sur des tâches de code
          standard et bien cadrées, l&apos;<a href="https://arxiv.org/abs/2302.06590" target="_blank" rel="noopener noreferrer">essai contrôlé de GitHub</a> a
          mesuré des développeurs <strong>55 % plus rapides</strong> avec
          l&apos;assistance IA. Sur du code complexe et mature,
          l&apos;<a href="https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/" target="_blank" rel="noopener noreferrer">essai randomisé METR (2025)</a> a mesuré l&apos;inverse :{" "}
          <strong>19 % plus lents</strong> — tout en se croyant plus
          rapides. Et le <a href="https://dora.dev/ai/gen-ai-report/" target="_blank" rel="noopener noreferrer">rapport DORA de Google</a> conclut que l&apos;IA est
          un <em>amplificateur</em> : elle décuple les bonnes équipes
          comme les mauvaises. Aucune des études citées ne documente une
          division par dix du coût d&apos;un logiciel métier complet.
        </p>
        <p>
          Traduction pour votre budget : l&apos;IA peut réduire l&apos;effort
          consacré aux écrans et au code standard — une part d&apos;un outil
          métier — mais ne réduit ni la compréhension de votre métier, ni
          la conception des bons écrans, ni les connexions à vos
          logiciels, ni la fiabilité. Les études citées ne permettent ni
          de convertir directement la vitesse d&apos;une tâche en remise
          sur un projet complet, ni d&apos;établir une baisse générale de
          20 à 30 %. Le montant d&apos;un devis doit donc être justifié par
          le périmètre et les jours de chaque poste, pas par un gain interne
          annoncé. Chez Hagnéré Code, l&apos;IA est un outil de production
          encadré dans une équipe senior, avec revue humaine ; ce choix
          n&apos;est pas présenté comme la preuve causale d&apos;une remise
          commerciale systématique. Posez une seule question aux
          prestataires « 100 % IA » : <strong>qui relit chaque ligne, et
          qui maintient le code dans deux ans ?</strong>
        </p>

        <h2 id="legacy">11. Remplacer un vieux logiciel (Access, Excel, WinDev…)</h2>
        <p>
          Cas extrêmement fréquent en PME : l&apos;entreprise tourne sur un
          logiciel Access, VB6 ou WinDev écrit il y a quinze ans — souvent
          par un prestataire aujourd&apos;hui injoignable — ou sur un
          classeur Excel devenu monstrueux. Les risques s&apos;accumulent
          en silence : incompatibilités avec les Windows récents,
          impossibilité d&apos;évoluer, failles de sécurité, conformité
          RGPD non documentée ou difficile à démontrer, et une seule
          personne qui « sait faire ».
        </p>
        <p>Trois niveaux d&apos;intervention, du plus léger au plus lourd :</p>
        <ul>
          <li>
            <strong>Stabiliser</strong> (2 à 6 semaines, quelques milliers
            d&apos;euros) : documenter, sauvegarder, corriger le critique.
            On achète du temps, on ne modernise pas.
          </li>
          <li>
            <strong>Moderniser progressivement</strong> (1 à 6 mois) :
            remplacer module par module, en commençant par le plus
            douloureux, pendant que l&apos;ancien système continue de
            tourner. C&apos;est la méthode recommandée.
          </li>
          <li>
            <strong>Refondre avec reprise des données</strong> (3 à 12
            mois, généralement 15 000 à 80 000 € pour une migration vers
            le web — c&apos;est le cœur de notre métier
            d&apos;<Link href="/agence-react">agence React pour
            applications métier</Link>) : le nouveau système reprend
            l&apos;historique et
            l&apos;ancien s&apos;éteint.
          </li>
        </ul>
        <InfoBox variant="amber" title="Le piège du « big bang »">
          Le réflexe naturel — « on refait tout d&apos;un coup, bascule le
          1er janvier » — concentre les risques : données, formation,
          fonctionnement métier et technique doivent tous réussir le même
          jour. Les retours d&apos;échec cités dans ce guide associent
          justement les projets-tunnels à un périmètre trop large et à des
          utilisateurs peu impliqués. La refonte progressive, dite
          « Strangler Fig », enveloppe l&apos;ancien système et le remplace
          branche par branche. Visez une première brique en production en
          2 à 4 mois plutôt que 18 mois de développement dans le noir.
        </InfoBox>

        <h2 id="juridique">12. À qui appartient le code ? La question à 100 000 €</h2>
        <p>
          Voici la surprise juridique que presque aucun guide de prix ne
          mentionne : pour un logiciel commandé à un prestataire externe,
          <strong> payer toutes les factures ne vous transfère pas
          automatiquement les droits patrimoniaux</strong>. L&apos;auteur
          détient les droits selon l&apos;article L.111-1 ; lorsque le code
          est créé par un salarié dans ses fonctions, ils sont dévolus à
          son employeur par l&apos;article L.113-9. Le contrat doit donc
          organiser une <strong>cession ou une licence adaptée à l&apos;usage
          attendu</strong>, avec un périmètre précis ; l&apos;article L.131-3
          encadre notamment la cession. Faites valider ce montage au regard
          de votre projet. Les bibliothèques libres ou
          commerciales restent régies par leurs propres licences et doivent
          être listées à part. Notre guide{" "}
          <Link href="/guides/proprietaire-site-internet-code-source">qui est
          propriétaire de votre site et de son code source</Link> fournit un
          exemple de clause à adapter et à faire valider juridiquement,
          l&apos;annexe des briques soumises à des licences tierces, et les 14
          accès à réclamer.
        </p>
        <p>
          Ce n&apos;est pas de la théorie de juriste. Une chaîne de droits
          incomplète peut compliquer la reprise du logiciel, une levée de
          fonds ou la vente de l&apos;entreprise. La « due diligence » —
          l&apos;audit de l&apos;acheteur — vérifie qui détient quoi. Sans
          exclusivité ni périmètre clair, le prestataire peut aussi
          conserver des droits de réutilisation sur ses composants
          génériques, sous réserve de ses engagements de confidentialité.
          Les quatre clauses à exiger avant de signer :
        </p>
        <ul>
          <li>
            <strong>Cession de propriété intellectuelle</strong> conforme à
            l&apos;article L.131-3, effective à la réception des livrables,
            sans paiement complémentaire ;
          </li>
          <li>
            <strong>Réversibilité</strong> : remise du code source, de la
            documentation et des accès en fin de contrat, quoi qu&apos;il
            arrive ;
          </li>
          <li>
            <strong>Maîtrise et portabilité des données</strong> : le
            contrat garantit un export complet à tout moment, dans un
            format standard, sans confondre ce droit d&apos;usage avec une
            propriété générale sur les données personnelles ;
          </li>
          <li>
            Pour les logiciels critiques : l&apos;<strong>entiercement</strong>{" "}
            (le dépôt du code chez un tiers de confiance comme{" "}
            <a href="https://www.app.asso.fr/nos-solutions/entiercement-app" target="_blank" rel="noopener noreferrer">l&apos;Agence pour la Protection des Programmes</a>), qui vous
            garantit l&apos;accès au code même si le prestataire disparaît.
          </li>
        </ul>
        <p>
          Chez Hagnéré Code, le contrat de base cède les développements
          créés spécifiquement pour le projet et annexe les briques tierces
          qui gardent leur licence — c&apos;est le sens de la ligne
          « transfert de propriété » de l&apos;exemple en section 7. Un
          prestataire doit pouvoir expliquer cette frontière sans
          ambiguïté avant la signature.
        </p>

        <InfoBox variant="emerald" title="À retenir : les 5 chiffres de ce guide">
          <ul className="list-disc pl-4 space-y-1.5">
            <li><strong>15 000 – 60 000 €</strong> : la fourchette indicative retenue dans ce guide pour un logiciel métier, sans médiane statistique revendiquée.</li>
            <li><strong>450 – 600 €/jour</strong> : le taux d&apos;un développeur confirmé — multipliez par les jours pour vérifier tout devis.</li>
            <li><strong>10 – 25 %/an</strong> : l&apos;hypothèse de maintenance de nos simulations, à remplacer par un contrat chiffré.</li>
            <li><strong>Aucun seuil universel d&apos;utilisateurs</strong> : comparez abonnement et sur-mesure sur vos prix, votre durée et votre besoin.</li>
            <li><strong>43,50 €/heure</strong> : le coût moyen d&apos;une heure de travail en France — la base de votre calcul de ROI.</li>
          </ul>
        </InfoBox>

        <h2 id="methode">13. Méthode : payer le juste prix en 5 étapes</h2>
        <ol>
          <li>
            <strong>Chiffrez d&apos;abord le statu quo</strong> — heures
            perdues × 47 × 43,50 € (section 3). C&apos;est votre budget de
            référence : un outil qui coûte moins que deux ans de statu quo
            devient un investissement possible, à condition de mesurer les
            gains après livraison et de faire adopter l&apos;outil.
          </li>
          <li>
            <strong>Vérifiez qu&apos;un produit du marché ne suffit
            pas</strong> — la règle des 80 % (section 9). Demandez un avis
            écrit sur l&apos;option abonnement et sur une simple
            automatisation avant d&apos;accepter du sur-mesure.
          </li>
          <li>
            <strong>Décrivez vos processus, pas des écrans</strong> — qui
            fait quoi, avec quels outils existants à connecter. Notre{" "}
            <Link href="/ressources/kit-cahier-des-charges-site-internet">modèle
            de cahier des charges</Link> s&apos;adapte en version logiciel
            — et envoyez-le à l&apos;identique à 3 prestataires. Nommez
            aussi le responsable interne, la situation de départ et le
            résultat observable qui prouvera le gain.
          </li>
          <li>
            <strong>Comparez en jours par poste et en coût sur 3 ans</strong>{" "}
            — jamais en prix de création seul (sections 6 et 8). Exigez le
            calcul du ROI dans le devis.
          </li>
          <li>
            <strong>Exigez une chaîne de droits claire et un démarrage par
            étapes</strong> — cession L.131-3 sur les développements
            spécifiques, inventaire des licences tierces, réversibilité et
            une première brique en production en quelques semaines plutôt
            qu&apos;un projet-tunnel.
          </li>
        </ol>
        <p>
          C&apos;est le déroulé exact de notre méthode : un{" "}
          <strong>Discovery Sprint (1 500 €, 2 jours, déduit à 100 % si le
          projet se lance)</strong> qui produit le périmètre écrit, les
          maquettes des écrans clés et un devis au forfait fixe — puis un
          outil livré par étapes, dates contractuelles (méthode{" "}
          <Link href="/methode">Sprint Fixe™</Link>), développements
          spécifiques cédés et briques tierces inventoriées.{" "}
          <Link href="/demarrer-un-projet">Décrivez votre processus en
          3 minutes</Link> : réponse personnelle sous 24 h ouvrées,
          gratuite et sans engagement. Et pour situer ce budget dans
          l&apos;ensemble de votre présence numérique, notre{" "}
          <Link href="/guides/combien-coute-un-site-internet">panorama
          des prix d&apos;un site internet</Link> complète ce guide.
        </p>

        <hr />
        <p className="text-sm">
          <strong>Sources</strong> — références citées dans ce guide
          (consultées en juillet 2026) : baromètre TJM France (
          <a href="https://www.silkhom.com/barometre-des-tjm-informatique-electronique-digital/" target="_blank" rel="noopener noreferrer">SILKHOM</a>) ;{" "}
          <a href="https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Hourly_labour_costs" target="_blank" rel="noopener noreferrer">Eurostat, coût horaire de la main-d&apos;œuvre 2025</a> ;{" "}
          <a href="http://panko.shidler.hawaii.edu/SSR/Mypapers/whatknow.htm" target="_blank" rel="noopener noreferrer">R. Panko (Université d&apos;Hawaï), erreurs des feuilles de calcul</a> ;{" "}
          <a href="https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/the-social-economy" target="_blank" rel="noopener noreferrer">McKinsey Global Institute (recherche d&apos;information)</a> ;{" "}
          <a href="https://www.smartsheet.com/content-center/product-news/automation/workers-waste-quarter-work-week-manual-repetitive-tasks" target="_blank" rel="noopener noreferrer">Smartsheet, tâches manuelles répétitives</a> ;{" "}
          <a href="https://arxiv.org/abs/2302.06590" target="_blank" rel="noopener noreferrer">essai contrôlé GitHub Copilot (Peng et al., 2023)</a> ;{" "}
          <a href="https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/" target="_blank" rel="noopener noreferrer">essai randomisé METR (2025)</a> ;{" "}
          <a href="https://dora.dev/ai/gen-ai-report/" target="_blank" rel="noopener noreferrer">rapport DORA (Google) sur l&apos;IA générative</a> ;{" "}
          <a href="https://www.vertice.one/blog/mitigating-2025-saas-inflation-stats" target="_blank" rel="noopener noreferrer">Vertice, SaaS Inflation Index 2025</a> ;{" "}
          <a href="https://www.mckinsey.com/capabilities/tech-and-ai/our-insights/delivering-large-scale-it-projects-on-time-on-budget-and-on-value" target="_blank" rel="noopener noreferrer">McKinsey-Oxford, grands projets IT</a> ;{" "}
          <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039279818" target="_blank" rel="noopener noreferrer">Légifrance, article L.113-9 CPI</a> ;{" "}
          <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958" target="_blank" rel="noopener noreferrer">Légifrance, article L.131-3 CPI</a> ;{" "}
          <a href="https://www.inpi.fr/realiser-demarches/propriete-intellectuelle/cas-particulier-logiciels" target="_blank" rel="noopener noreferrer">INPI, protection des logiciels</a> ;{" "}
          <a href="https://atiasavocats.com/propriete-code-source-prestataire/" target="_blank" rel="noopener noreferrer">analyse juridique de la propriété du code source (L.111-1 / L.131-3 CPI)</a> ;{" "}
          <a href="https://www.app.asso.fr/nos-solutions/entiercement-app" target="_blank" rel="noopener noreferrer">APP, entiercement de logiciel</a> ;
          fourchettes de marché : recoupement éditorial de guides tarifaires
          français 2025-2026 et de tarifs publics d&apos;éditeurs ; ce
          recoupement n&apos;est pas un corpus statistique et aucune médiane
          de budgets clients n&apos;en est déduite. Les
          incidents documentés :{" "}
          <a href="https://www.theregister.com/2003/06/19/excel_snafu_costs_firm_24m/" target="_blank" rel="noopener noreferrer">TransAlta</a>,{" "}
          <a href="https://elischolar.library.yale.edu/ypfs-documents/454/" target="_blank" rel="noopener noreferrer">rapport JPMorgan</a>,{" "}
          <a href="https://www.soa.org/49349c/globalassets/assets/library/newsletters/the-modeling-platform/2016/april/mp-2016-iss3-campbell.pdf" target="_blank" rel="noopener noreferrer">analyse de l&apos;erreur de formule</a> et{" "}
          <a href="https://researchbriefings.files.parliament.uk/documents/CBP-8897/CBP-8897.pdf" target="_blank" rel="noopener noreferrer">Public Health England</a>. Les prix évoluent : vérifiez avant de signer.
        </p>
        <p className="text-sm">
          <em>
            Les fourchettes de ce guide sont des repères éditoriaux issus
            du recoupement décrit ci-dessus, donnés à titre indicatif : seul
            un devis établi sur votre
            périmètre vous engage. Ce guide ne constitue pas un conseil
            juridique personnalisé — pour une cession de droits ou un
            contrat, consultez un avocat.
          </em>
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
