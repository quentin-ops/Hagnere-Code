import type { Metadata } from "next";
import Link from "next/link";
import {
  FormulaBox,
  GuideInlineCTA,
  GuideTable,
  GuideToc,
  InfoBox,
} from "@/components/guides/guide-content-blocks";
import { GuideLayout } from "@/components/guides/guide-layout";
import { GuidesShell } from "@/components/guides/GuidesShell";
import { formatGuideDate, getGuide, guideRobots, guideUrl } from "@/lib/guides";
import { OG_BASE, SITE_URL } from "@/lib/seo";

const guide = getGuide("migrer-logiciel-metier-sans-interruption");

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
        alt: "Chronologie d’une migration de logiciel métier maîtrisée",
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
      name: "Migrer un logiciel métier sans interruption",
      item: guideUrl(guide),
    },
  ],
});

const faqItems = [
  {
    question: "Peut-on vraiment changer de logiciel sans aucune coupure ?",
    answer:
      "Parfois, mais personne ne peut le promettre avant d’avoir mesuré les opérations, les données et les dépendances. Une démarche sérieuse fixe la perte de données et la durée d’arrêt acceptables, prépare un fonctionnement temporaire, répète la bascule et garde assez de temps pour revenir ou corriger. Le bon objectif est une continuité maîtrisée, pas un slogan de zéro interruption.",
  },
  {
    question: "Faut-il faire fonctionner les deux logiciels en parallèle ?",
    answer:
      "Le parallèle peut être prudent si vous désignez une source d’écriture de référence pour chaque domaine et chaque période. Une architecture réellement multi-écriture reste possible, mais elle doit prouver la résolution des conflits, l’idempotence, le rapprochement et sa date de fin. Sans ces garanties, deux versions plausibles des clients, commandes ou factures finissent par coexister.",
  },
  {
    question: "Quelle différence entre RPO, RTO, MTD et SLA ?",
    answer:
      "Le RPO désigne le point ou la fenêtre temporelle jusqu’où l’entreprise doit pouvoir reprendre. L’écart avec l’incident correspond à l’âge maximal des écritures à reconstruire, que l’on peut ensuite traduire en nombre d’opérations. Le RTO est le délai visé pour rétablir l’opération. Le MTD est la durée maximale tolérable avant que l’arrêt devienne inacceptable. Le SLA est un engagement contractuel éventuel d’un fournisseur. Ces valeurs se décident par opération métier et se vérifient par des exercices.",
  },
  {
    question: "Combien de répétitions faut-il prévoir ?",
    answer:
      "Il n’existe pas de nombre universel. Répétez jusqu’à obtenir une séquence reproductible, des contrôles sans écart bloquant et un temps total qui laisse encore la marge nécessaire pour décider et revenir. Toute modification importante du mapping, du logiciel, des données ou du mécanisme de copie impose une nouvelle répétition.",
  },
  {
    question: "Comment éviter les doublons pendant une migration ?",
    answer:
      "Chaque lot ou événement doit posséder un identifiant stable. Le chargement doit pouvoir être rejoué sans recréer une commande, une facture ou un paiement déjà accepté. Testez volontairement le même lot deux fois, conservez les accusés accepté, rejeté ou à revoir, puis rapprochez volumes, montants, statuts et liens.",
  },
  {
    question: "Quand faut-il revenir à l’ancien logiciel ?",
    answer:
      "Lorsque l’un des critères bloquants écrits avant la bascule échoue : opération critique impossible, dossiers manquants, montant incohérent, droit excessif, intégration indispensable indisponible ou temps de retour consommé. Le retour ne suffit que si les écritures acceptées dans le nouveau système peuvent être rejouées dans l’ancien ; sinon il faut aussi un plan de correction en avant.",
  },
  {
    question: "Quand peut-on fermer l’ancien logiciel ?",
    answer:
      "Après le rapprochement des écritures de transition, la clôture des erreurs importantes, la réussite des opérations de fin de période et une décision sur l’archive, les licences, les comptes, les copies et les obligations de conservation. Le garder indéfiniment en écriture crée de la divergence ; le supprimer trop tôt détruit la réversibilité.",
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
          { label: "Migrer un logiciel métier sans interruption" },
        ]}
        heroTitle={guide.heroTitle}
        heroDescription="Vous devez remplacer un logiciel utilisé chaque jour, mais les commandes, interventions, stocks ou factures ne peuvent pas attendre ? Voici comment choisir la bonne façon de changer, reprendre les dernières écritures, tester le retour et décider sans mettre l’entreprise en danger."
        heroAction={{ href: "#verdict", label: "Voir la méthode de décision" }}
        author={{
          name: "Quentin Hagnéré",
          role: "fondateur de Hagnéré Code",
          href: "/equipe",
        }}
        updatedLabel={"Mis à jour le " + formatGuideDate(guide.dateModified)}
        keyPoints={[
          {
            number: "01",
            title: "4 décisions · 3 trajectoires",
            description: "",
            color: "violet",
          },
          {
            number: "02",
            title: "Cas Nova recalculable",
            description: "",
            color: "blue",
          },
          {
            number: "03",
            title: "Kit complet à télécharger",
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
            href: "/services/outils-internes-sur-mesure",
            label: "Applications métier et outils internes",
          },
          {
            href: "/services/maintenance-evolution",
            label: "Maintenance et évolution d’applications",
          },
          {
            href: "/guides/reprendre-logiciel-metier-existant",
            label: "Reprendre un logiciel métier existant",
          },
          {
            href: "/guides/transformer-excel-en-application",
            label: "Transformer Excel en application métier",
          },
          {
            href: "/guides/contrat-tma-application",
            label: "Préparer le contrat après la migration",
          },
          {
            href: "/guides/cahier-des-charges-application-metier",
            label: "Décrire les opérations à conserver",
          },
        ]}
        faqTitle="Migration d’un logiciel métier : les questions pratiques"
        faqItems={faqItems}
        showWhitePaperPromo={false}
        showSidebarCta={false}
      >
        <p className="lead">
          Vous voulez remplacer un ERP, un CRM, un logiciel de planning, de
          stock ou de facturation sans bloquer l’entreprise. Il est parfois
          possible d’éviter une coupure visible, mais personne ne peut le
          promettre avant d’avoir mesuré les opérations, les données et le temps
          nécessaire pour revenir. L’objectif réaliste est d’éviter un arrêt
          subi : préparer un fonctionnement temporaire, répéter toute la bascule
          et écrire les conditions qui imposent de reporter.
        </p>

        <p>
          Pour prendre cette décision, répondez à quatre questions :{" "}
          <strong>
            que doit encore pouvoir faire l’équipe lundi matin, qui a le droit
            d’écrire dans quel système pendant la transition, comment prouver
            qu’aucune donnée importante n’a disparu et combien de temps il reste
            pour revenir si un contrôle échoue
          </strong>
          . Vous saurez alors s’il faut reporter, migrer progressivement,
          basculer en une fois ou ne remplacer qu’un périmètre isolé.
        </p>

        <InfoBox variant="emerald" title="La décision en cinq minutes">
          <ol>
            <li>
              <strong>Protégez le travail, pas seulement le logiciel.</strong>{" "}
              Nommez trois à cinq opérations qui ne peuvent pas disparaître :
              préparer une commande, planifier une intervention, émettre une
              facture. Pour chacune, fixez un responsable, une durée maximale
              d’arrêt et un fonctionnement temporaire. Sans solution testée pour
              une opération critique, reportez.
            </li>
            <li>
              <strong>Choisissez selon les frontières réelles.</strong> La
              progressive convient si les domaines et leurs écritures sont
              isolables. La bascule complète peut gagner quand tout est très lié
              et que le retour tient dans la fenêtre. Le remplacement ciblé
              demande un module réellement séparable. Si ces conditions restent
              inconnues, stabilisez l’existant avant de fixer une date.
            </li>
            <li>
              <strong>Prouvez les données et le retour.</strong> Désignez par
              défaut une source d’écriture de référence, écrivez le mapping,
              rapprochez volumes, montants, relations et droits, puis restaurez
              l’ancien outil. Rejouez aussi les nouvelles écritures sans perte
              ni doublon : une sauvegarde seule ne suffit pas.
            </li>
            <li>
              <strong>Écrivez le STOP avant le jour J.</strong> Une opération
              critique impossible, un rejet sans responsable, un statut sans
              règle approuvée, un droit incohérent ou un retour devenu trop long
              imposent l’arrêt. La direction décide à une heure fixée à partir
              de ces preuves, jamais de l’envie de sauver le calendrier.
            </li>
            <li>
              <strong>Commencez avec trois fichiers.</strong> Remplissez
              l’inventaire des dépendances, les objectifs de continuité et la
              décision stop/go. Si ces documents restent vagues, le mapping, le
              journal des lots et le runbook seraient seulement des détails
              techniques sans décision métier.
            </li>
          </ol>
          Les sections suivantes donnent les comparaisons, calculs, exemples et
          modèles nécessaires pour contrôler chaque point.
        </InfoBox>

        <GuideToc
          items={[
            { id: "verdict", label: "1. Décider avant de migrer" },
            { id: "operations", label: "2. Protéger les opérations" },
            { id: "inventaire", label: "3. Inventorier les dépendances" },
            {
              id: "trajectoires",
              label: "4. Comparer un report et trois trajectoires",
            },
            { id: "ecritures", label: "5. Maîtriser les écritures" },
            { id: "donnees", label: "6. Mapper et rapprocher les données" },
            { id: "repetitions", label: "7. Répéter la bascule" },
            { id: "jour-j", label: "8. Décider le jour J" },
            { id: "retour", label: "9. Prévoir retour et correction" },
            { id: "nova", label: "10. Cas Nova Maintenance" },
            { id: "tco", label: "11. Comparer le coût à 12/36/60 mois" },
            { id: "apres", label: "12. Organiser la première semaine" },
            { id: "kit", label: "13. Télécharger le kit" },
            { id: "fermeture", label: "14. Fermer l’ancien outil" },
            { id: "sources", label: "Sources, glossaire et limites" },
          ]}
        />

        <p>
          Les nombres de ce guide appartiennent à Nova Maintenance, une PME
          entièrement fictive. Ils servent à montrer les calculs, jamais à
          annoncer un délai, un budget ou un seuil universel. Les repères
          temporels ordonnent le travail ; votre migration peut durer trois
          semaines comme douze mois selon les données, les intégrations et la
          possibilité d’isoler les opérations.
        </p>

        <InfoBox variant="amber" title="Une attaque en cours sort de ce cadre">
          Si vous soupçonnez une intrusion, un compte compromis ou une
          altération volontaire des données, ne poursuivez pas une migration
          ordinaire. Limitez les accès, préservez les éléments utiles et activez
          la réponse à incident. Déplacer rapidement des données dont
          l’intégrité est inconnue peut déplacer le problème avec elles.
        </InfoBox>

        <h2 id="verdict">
          1. Le premier verdict peut être de reporter — et c’est parfois la
          meilleure décision
        </h2>

        <p>
          Une direction n’a pas besoin d’un feu vert technique vague. Elle a
          besoin d’une décision parmi quatre : stabiliser l’existant et
          reporter, migrer progressivement, basculer en une fois ou remplacer
          seulement un périmètre bien isolé autour de l’ancien logiciel. Pour
          choisir, commencez par les preuves disponibles aujourd’hui.
        </p>

        <ul>
          <li>
            <strong>Stabilisez et reportez</strong> si le nouveau logiciel ne
            termine pas encore l’opération principale.
          </li>
          <li>
            <strong>Migrez progressivement</strong> si les domaines sont
            isolables et si les flux entre eux sont connus.
          </li>
          <li>
            <strong>Basculez en une fois</strong> si les opérations sont très
            liées, la fenêtre suffisante et le retour déjà répété.
          </li>
          <li>
            <strong>Remplacez un périmètre ciblé</strong> si un module bloque
            l’activité alors que le reste de l’ancien système peut tenir.
          </li>
        </ul>

        <p>
          Notre avis est tranché :{" "}
          <strong>
            une migration progressive mal découpée est plus dangereuse qu’une
            bascule complète bien répétée
          </strong>
          . Elle ajoute des mois de coexistence, des interfaces temporaires et
          des décisions ambiguës. À l’inverse, une bascule complète choisie
          seulement parce que le planning a glissé ne constitue pas une
          stratégie. Comparez les options à périmètre égal, puis choisissez
          celle dont les risques peuvent être observés et repris par votre
          équipe.
        </p>

        <p>
          Blue-green, canary et strangler sont utiles dans certains projets,
          mais ils ne constituent pas des talismans. Le blue-green maintient
          deux versions d’une application ; le canary envoie d’abord une petite
          partie des utilisateurs vers la nouvelle version ; le strangler
          remplace progressivement des fonctions. Aucun ne résout
          automatiquement le conflit de données lorsque les deux versions
          modifient la même facture ou le même stock.
        </p>

        <h2 id="operations">
          2. Écrivez ce que l’entreprise doit encore pouvoir faire, pas ce que
          le logiciel doit afficher
        </h2>

        <p>
          Une migration ne se juge pas au nombre de tables importées. Elle se
          juge sur les opérations que l’entreprise peut terminer : planifier une
          intervention urgente, préparer une commande, encaisser un paiement,
          émettre une facture ou retrouver un contrat. Nommez entre trois et
          cinq opérations dont l’échec ferait réellement arrêter, reporter ou
          revenir.
        </p>

        <p>
          Pour chacune, écrivez le volume, le responsable, les informations
          nécessaires, le fonctionnement temporaire et quatre repères. Le{" "}
          <strong>RPO</strong> désigne le point ou la fenêtre temporelle
          jusqu’où l’entreprise doit pouvoir reprendre. L’écart entre ce point
          et l’incident correspond à l’âge maximal des écritures à reconstruire
          ; vous pouvez ensuite le traduire en commandes, factures ou dossiers.
          Cette définition temporelle est celle du{" "}
          <a
            href="https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final"
            target="_blank"
            rel="noopener noreferrer"
          >
            NIST SP 800-34 Rev.1
          </a>
          , qui relie le choix des valeurs à l’analyse d’impact de l’entreprise.
          Le <strong>RTO</strong> est le délai visé pour rétablir l’opération.
          Le <strong>MTD</strong> est la durée maximale tolérable avant que
          l’arrêt devienne inacceptable. Le <strong>SLA</strong> est, le cas
          échéant, l’engagement contractuel d’un fournisseur : il ne remplace
          pas votre besoin métier.
        </p>

        <GuideTable
          caption="Exemple fictif de continuité par opération"
          headers={[
            "Opération",
            "RPO / RTO / MTD de discussion",
            "Mode temporaire et preuve",
          ]}
          rows={[
            [
              "Créer une intervention urgente — 40 par jour",
              "RPO 15 min · RTO 30 min · MTD 2 h",
              "Registre numéroté ; une écriture récente est reprise une seule fois après l’exercice.",
            ],
            [
              "Préparer une commande — 80 par jour",
              "RPO 1 h · RTO 2 h · MTD 4 h",
              "Liste contrôlée ; client, stock et adresse sont vérifiés avant expédition.",
            ],
            [
              "Émettre une facture — 220 par mois",
              "RPO 4 h · RTO 1 jour ouvré · MTD 2 jours ouvrés",
              "Émission suspendue ; nombre, somme TTC et statuts sont rapprochés sans doublon.",
            ],
            [
              "Consulter 8 000 dossiers historiques",
              "Snapshot âgé de 24 h maximum au gel · RTO 1 jour · MTD 2 jours",
              "Archive en lecture seule : après le gel, aucun RPO d’écriture ne s’applique ; restauration, recherche et droits sont essayés.",
            ],
          ]}
        />

        <p>
          Ces valeurs fictives n’ont de sens que parce qu’elles débouchent sur
          un test. Écrire « RTO : deux heures » sans avoir restauré
          l’application et ses dépendances mesure une ambition, pas une
          capacité. L’ANSSI recommande de partir des besoins métier pour
          déterminer la perte de données et la durée d’interruption admissibles,
          puis de tester la restauration dans l’ordre des dépendances. Cette
          recommandation est détaillée dans le guide{" "}
          <a
            href="https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            ANSSI sur les fondamentaux de la sauvegarde
          </a>
          .
        </p>

        <InfoBox variant="emerald" title="Le test qui change la discussion">
          Demandez à chaque responsable : « Si cette opération s’arrête à 10 h,
          que faisons-nous à 10 h 15, à midi et à 17 h ? » Les réponses révèlent
          les numéros de téléphone, fichiers, imprimantes, validations et
          personnes qui ne figuraient dans aucune architecture.
        </InfoBox>

        <h2 id="inventaire">
          3. Une imprimante, un export bancaire ou un compte de service oublié
          peut bloquer toute la journée
        </h2>

        <p>
          L’inventaire doit dépasser la liste des logiciels. Reliez chaque
          opération à ses données, interfaces, utilisateurs, équipements,
          contrats, secrets, fournisseurs et horaires. Une application peut être
          disponible alors que l’impression d’étiquettes, l’export comptable ou
          la connexion du portail client ne l’est plus.
        </p>

        <GuideTable
          caption="Inventaire de dépendances à faire valider par les métiers"
          headers={["Famille", "Questions à poser", "Preuve à conserver"]}
          rows={[
            [
              "Données",
              "Clients, dossiers, statuts, montants, pièces, historique, suppressions ?",
              "Propriétaire, volume, qualité, règle de reprise et de conservation.",
            ],
            [
              "Interfaces",
              "Comptabilité, banque, email, planning, portail, API, imports et exports ?",
              "Un flux entrant et sortant essayé, avec panne et reprise.",
            ],
            [
              "Automatismes",
              "Tâches planifiées, relances, facturation, sauvegardes, traitements de nuit ?",
              "Heure, compte utilisé, résultat attendu, alerte et personne qui répond.",
            ],
            [
              "Accès",
              "Annuaire, comptes de service, administrateurs, prestataires et terminaux ?",
              "Accès autorisé et refus attendu pour chaque rôle ; expiration des comptes temporaires.",
            ],
            [
              "Équipements",
              "Scanners, imprimantes, douchettes, signatures, postes mobiles ?",
              "Opération terminée sur l’équipement réellement utilisé.",
            ],
            [
              "Contrats et sortie",
              "Licence, export, hébergement, archive, réversibilité et destruction ?",
              "Coût, délai, format, responsable, date de fin et attestation attendue.",
            ],
          ]}
        />

        <p>
          Pour chaque ligne, ajoutez un propriétaire et un mode temporaire. «
          L’informatique s’en occupe » n’est pas un propriétaire. La personne
          qui connaît la règle métier doit valider le résultat ; la personne
          technique doit expliquer comment il a été obtenu et comment le
          reproduire.
        </p>

        <p>
          L’inventaire sert aussi à choisir ce qui ne migrera pas. Une donnée
          peut devenir active dans le nouveau logiciel, rester dans une archive
          consultable ou être supprimée selon une règle validée. « Copier tout »
          augmente le coût, transporte les doublons et conserve parfois des
          informations sans finalité. « Ne reprendre que le strict minimum »
          peut à l’inverse rendre impossible le service d’un client ou un
          contrôle.
        </p>

        <h2 id="trajectoires">
          4. Séparez le report des trois trajectoires qui livrent la migration
        </h2>

        <p>
          Quatre décisions restent possibles, mais elles ne produisent pas le
          même résultat. Stabiliser pendant quatre semaines achète du temps
          jusqu’à une nouvelle décision ; cela ne livre pas le nouveau système.
          Les trois trajectoires de migration — progressive, bascule complète et
          remplacement ciblé — doivent en revanche être comparées sur le même
          résultat : 2 400 clients, 300 dossiers ouverts, 220 factures
          mensuelles, cinq intégrations, dix rôles et huit mille dossiers
          historiques exploitables.
        </p>

        <GuideTable
          caption="Une décision de report et trois trajectoires de migration"
          headers={[
            "Trajectoire",
            "Quand elle peut gagner",
            "Risque à ne pas masquer",
          ]}
          rows={[
            [
              "Stabiliser et reporter quatre semaines",
              "Fonction critique absente, données non récupérables ou restauration non prouvée.",
              "Ce n’est pas une solution durable : écrire le résultat attendu et la nouvelle porte de décision.",
            ],
            [
              "Migration progressive par domaine ou population",
              "Frontières métier réelles, écritures isolables et intégrations temporaires supportables.",
              "Coexistence longue, divergence, doubles contrôles et coût d’exploitation de deux systèmes.",
            ],
            [
              "Bascule en une fois",
              "Domaines très liés, fenêtre mesurée, répétition complète et retour suffisamment rapide.",
              "Concentration du risque ; aucune improvisation n’est acceptable pendant la fenêtre.",
            ],
            [
              "Remplacement ciblé de type strangler",
              "Un module peut être placé autour de l’ancien logiciel avec une interface et un propriétaire clairs.",
              "Une base partagée ou une règle métier transversale peut rendre l’isolement fictif.",
            ],
          ]}
        />

        <p>
          Pour les trois trajectoires exécutables, ajoutez au même périmètre le
          nettoyage, les tests, la formation, la coexistence, l’archive, le
          retour et la sortie du prestataire. Chiffrez le report séparément :
          corrections indispensables, fonctionnement supplémentaire et nouvelle
          répétition jusqu’à la prochaine porte de décision.
        </p>

        <p>
          La période parallèle n’est pas une cinquième trajectoire. C’est une
          manière de faire coexister deux systèmes pendant l’une des
          trajectoires. Elle peut permettre de comparer, mais elle double
          parfois la charge et ouvre une question décisive : dans quel outil une
          modification est-elle autorisée ? Si la réponse varie selon la
          personne plutôt que selon le domaine, le parallèle n’est pas maîtrisé.
        </p>

        <p>
          De même, blue-green et canary portent d’abord sur l’acheminement des
          utilisateurs vers deux versions. Ils facilitent un retour de trafic,
          pas forcément un retour de données. Si dix commandes ont été créées
          dans la version verte avant le retour vers la bleue, ces dix commandes
          doivent encore être reprises. La réversibilité applicative et la
          réversibilité des écritures sont deux preuves différentes.
        </p>

        <h2 id="ecritures">
          5. Par défaut, une seule source écrit dans chaque domaine
        </h2>

        <p>
          La règle prudente de ce guide tient en une phrase :{" "}
          <strong>
            à un instant donné, pour un domaine donné, un seul système est
            autorisé à créer ou modifier l’information de référence
          </strong>
          . Les autres systèmes peuvent consulter une copie, recevoir des
          événements ou proposer une saisie temporaire, mais le contrat
          d’écriture reste explicite.
        </p>

        <p>
          Une architecture multi-écriture peut exister, mais elle doit prouver
          avant la migration comment elle ordonne les versions, résout les
          conflits, déduplique les événements, détecte une perte et rapproche le
          résultat. Sans ces preuves, « les deux logiciels peuvent écrire »
          transfère simplement le choix aux utilisateurs et aux incidents.
        </p>

        <GuideTable
          caption="Exemple de contrat d’écriture pendant la transition"
          headers={[
            "Domaine et période",
            "Source autorisée",
            "Comment l’autre système suit",
          ]}
          rows={[
            [
              "Clients avant la décision finale",
              "Ancien logiciel",
              "Lot incrémental identifié ; le nouveau reste en lecture pour l’équipe.",
            ],
            [
              "Dossiers de l’équipe pilote",
              "Nouveau logiciel",
              "Événements rejouables vers l’archive ; écriture bloquée dans l’ancien pour cette équipe.",
            ],
            [
              "Factures avant validation comptable",
              "Ancien logiciel",
              "Copie nocturne en lecture seule et rapprochement des montants.",
            ],
            [
              "Planning pendant la fenêtre",
              "Registre temporaire numéroté",
              "Chaque ligne est réintégrée une fois dans le système finalement retenu.",
            ],
          ]}
        />

        <p>
          Évitez la double écriture naïve : demander aux utilisateurs de saisir
          deux fois ne garantit pas deux résultats identiques. Cela crée des
          oublis, des inversions d’ordre et des conflits impossibles à résoudre
          automatiquement. Si une double saisie est indispensable pendant une
          période très courte, datez-la, nommez son auteur, définissez laquelle
          fait foi et rapprochez chaque ligne.
        </p>

        <p>
          Les dernières modifications peuvent rejoindre la cible par lot
          planifié, par journal d’événements ou par capture des changements de
          données, souvent appelée <strong>CDC</strong>. Un lot est simple à
          observer, mais agrandit la période entre deux copies. Le CDC réduit
          cette période, mais ajoute l’ordre des événements, la rétention du
          journal, les suppressions et les reprises après panne. Choisissez la
          méthode que l’équipe sait surveiller, arrêter et rejouer.
        </p>

        <FormulaBox>{`Exemple de chargement rejouable

1. Conserver le dernier point traité : heure + identifiant de départage
2. Lire les écritures postérieures à ce point
3. Donner à chacune une clé stable : source + type + identifiant + version
4. Transformer sans écraser l'original
5. Répondre : accepté, rejeté ou à revoir
6. Rejouer exactement le même lot
7. Vérifier qu'aucun doublon n'apparaît
8. Rapprocher le résultat avant d'avancer le point traité`}</FormulaBox>

        <p>
          La clé stable rend le traitement <strong>idempotent</strong> :
          exécuter deux fois le même événement doit produire le même état final,
          et non deux commandes ou deux paiements. Testez volontairement le
          rejeu. Une procédure dite idempotente mais jamais rejouée n’est qu’une
          intention. La documentation officielle{" "}
          <a
            href="https://learn.microsoft.com/en-us/azure/service-bus-messaging/duplicate-detection"
            target="_blank"
            rel="noopener noreferrer"
          >
            Microsoft Azure Service Bus sur la détection des doublons
          </a>{" "}
          illustre l’usage d’un identifiant stable pour reconnaître un message
          déjà traité. Elle soutient ce mécanisme, pas la réussite d’une
          migration donnée.
        </p>

        <h2 id="donnees">
          6. Un import terminé ne prouve ni les liens, ni les montants, ni les
          droits
        </h2>

        <p>
          Écrivez un mapping champ par champ : information source, information
          cible, transformation, valeur absente, règle de doublon, responsable
          et traitement du rejet. Conservez les identifiants d’origine pour
          pouvoir expliquer un écart. Les règles de statut, d’unité, de fuseau
          horaire, de montant et de suppression méritent une validation métier
          explicite.
        </p>

        <GuideTable
          caption="Contrôles de données qui répondent à des risques différents"
          headers={["Contrôle", "Ce qu’il détecte", "Exemple de seuil"]}
          rows={[
            [
              "Volume",
              "Lignes manquantes ou ajoutées",
              "300 dossiers ouverts dans la source et 300 dans la cible.",
            ],
            [
              "Somme",
              "Montants tronqués, signe ou unité incorrects",
              "220 factures et somme TTC identique au centime.",
            ],
            [
              "Répartition",
              "Transformation de statut incorrecte",
              "Même nombre de dossiers ouverts, planifiés et clos.",
            ],
            [
              "Relations",
              "Dossier rattaché au mauvais client",
              "300 dossiers ouverts reliés au client attendu, tolérance zéro.",
            ],
            [
              "Pièces",
              "Fichier absent, corrompu ou illisible",
              "Empreinte et ouverture d’un échantillon défini.",
            ],
            [
              "Droits",
              "Accès trop large ou blocage d’un rôle",
              "Pour dix rôles : action autorisée réussie et action interdite refusée.",
            ],
            [
              "Rejeu",
              "Doublon après panne ou retry",
              "Les cinquante écritures récentes existent une fois après deux exécutions.",
            ],
          ]}
        />

        <p>
          Un échantillon de dix dossiers connus aide à comprendre les écarts,
          mais ne remplace pas un contrôle de population. Les deux sont
          complémentaires : les totaux signalent qu’un problème existe ; les
          dossiers nommés aident à comprendre lequel. Pour les données
          financières ou critiques, fixez une tolérance explicite plutôt qu’un «
          écart faible » interprété sous pression.
        </p>

        <p>
          Ne corrigez pas silencieusement un rejet pendant la bascule. Chaque
          ligne doit être acceptée, rejetée ou envoyée à une revue avec un
          propriétaire. Un zéro dans la colonne des rejets n’est rassurant que
          si le logiciel ne transforme pas les erreurs en valeurs par défaut
          invisibles.
        </p>

        <h2 id="repetitions">
          7. Répétez la journée entière, y compris la décision et le retour
        </h2>

        <p>
          Une répétition commence dans l’ancien logiciel et se termine lorsque
          les utilisateurs ont accompli les opérations critiques dans le
          nouveau, que les données ont été rapprochées et que le retour a été
          chronométré. Copier une base dans un environnement de test n’est
          qu’une étape. Une sauvegarde n’est une preuve de retour que si une
          restauration a été testée avec les dépendances nécessaires.
        </p>

        <ol>
          <li>
            <strong>Restaurer avant de compter sur la sauvegarde.</strong>{" "}
            Redémarrez l’application, ses données et les dépendances nécessaires
            dans un espace séparé.
          </li>
          <li>
            <strong>
              Exécuter le mapping sur des cas ordinaires et difficiles.
            </strong>{" "}
            Incluez doublons, valeurs absentes, suppressions, pièces et statuts
            rares.
          </li>
          <li>
            <strong>Copier les dernières écritures.</strong> Utilisez exactement
            le lot ou le journal prévu pour le jour réel.
          </li>
          <li>
            <strong>Rapprocher avant les tests d’usage.</strong> Volumes,
            montants, relations, droits, pièces et rejets doivent être lisibles.
          </li>
          <li>
            <strong>Faire travailler les rôles réels.</strong> Chaque rôle
            réussit une action autorisée et échoue sur une action interdite.
          </li>
          <li>
            <strong>Provoquer une panne et un rejeu.</strong> Relancez le même
            lot, coupez une intégration et vérifiez le mode temporaire.
          </li>
          <li>
            <strong>Prendre une décision à l’heure prévue.</strong> Continuez,
            réduisez le périmètre, reportez ou revenez.
          </li>
          <li>
            <strong>Exécuter réellement le retour.</strong> Mesurez le
            redémarrage et le rejeu des écritures acceptées après le point de
            bascule.
          </li>
        </ol>

        <GuideTable
          caption="Deux répétitions fictives dans une fenêtre de six heures"
          headers={["Séquence", "Temps observé", "Verdict"]}
          rows={[
            [
              "A — copie complète 3 h 20 + contrôles 1 h 10 + retour 1 h 45",
              "6 h 15 avant même une marge de décision",
              "NO-GO : la fenêtre de 6 h est dépassée.",
            ],
            [
              "B — préchargement puis delta 20 min + contrôles 1 h 10 + décision 15 min + retour 45 min",
              "2 h 30 ; marge restante 3 h 30",
              "NO-GO : le temps, la relation et les rejets sont corrigés, mais le test TST-002 échoue encore — au moins un statut source n’a pas de règle cible approuvée.",
            ],
          ]}
        />

        <FormulaBox>{`Répétition A
3 h 20 + 1 h 10 + 1 h 45 = 6 h 15
Fenêtre disponible : 6 h
Marge : -15 min → report

Répétition B
20 min + 1 h 10 + 15 min + 45 min = 2 h 30
Fenêtre disponible : 6 h
Marge : 3 h 30 → les contrôles peuvent maintenant décider`}</FormulaBox>

        <p>
          Le préchargement ou le CDC ne rend pas la deuxième répétition
          supérieure par principe. Il réduit ici le volume à copier pendant la
          fenêtre. La répétition B prouve aussi que les cinquante dernières
          écritures sont toutes arrivées, que les deux suppressions sont
          comprises dans ces cinquante événements et que le rejeu ne crée aucun
          doublon. Elle reste pourtant en échec tant que la traduction de tous
          les statuts n’est pas approuvée.
        </p>

        <h2 id="jour-j">
          8. Le jour J, une feuille horaire vaut mieux qu’une salle pleine de
          personnes qui improvisent
        </h2>

        <p>
          Chaque ligne du runbook contient une heure, une durée maximale, un
          responsable, une action, une preuve attendue, une condition d’arrêt et
          l’action à prendre si elle échoue. La direction nomme une seule
          personne autorisée à annoncer continuer, réduire, reporter ou revenir.
        </p>

        <GuideTable
          caption="Extrait de runbook à adapter"
          headers={["Heure", "Action et preuve", "Arrêt si…"]}
          rows={[
            [
              "16 h 45",
              "Présence des responsables, ancien système disponible, aucun incident nouveau.",
              "Une personne critique manque ou un incident change l’intégrité des données.",
            ],
            [
              "17 h 00",
              "Gel des saisies annoncé ; registre temporaire ouvert et numéroté.",
              "Une équipe continue d’écrire sans contrôle.",
            ],
            [
              "17 h 10",
              "Dernier état sauvegardé, exporté, horodaté et identifiable.",
              "La restauration ou le point de départ ne sont pas prouvés.",
            ],
            [
              "17 h 30",
              "Dernière heure chargée ; chaque écriture acceptée ou expliquée.",
              "Un rejet bloquant n’a ni cause ni propriétaire.",
            ],
            [
              "18 h 00",
              "Volumes, sommes, liens, droits et cinq intégrations rapprochés.",
              "Un seuil bloquant n’est pas atteint.",
            ],
            [
              "18 h 30",
              "Opérations critiques terminées par les utilisateurs nommés.",
              "Une commande, intervention ou facture indispensable échoue.",
            ],
            [
              "18 h 50",
              "Décision datée et annoncée ; temps de retour encore disponible.",
              "Une preuve manque ou le retour ne tient plus dans la fenêtre.",
            ],
          ]}
        />

        <p>
          Ne modifiez pas le mapping pendant la fenêtre sauf procédure prévue.
          Une correction improvisée invalide la répétition et peut rendre le
          retour plus difficile. Si l’écart n’est pas compris, conservez les
          preuves, attribuez un propriétaire et reportez. Sauver la date ne vaut
          pas une nuit passée à reconstruire des données ambiguës.
        </p>

        <h2 id="retour">
          9. Un retour qui détruit les nouvelles commandes n’est pas un retour
        </h2>

        <p>
          Le rollback remet une version ou un système antérieur en service. Le
          roll-forward corrige la cible et poursuit la migration. Le choix
          dépend surtout des écritures acceptées depuis la bascule. Restaurer
          l’ancienne base à 17 h alors que le nouveau logiciel a accepté des
          commandes à 18 h peut rendre ces commandes invisibles.
        </p>

        <p>
          Le{" "}
          <a
            href="https://www.ncsc.gov.uk/guidance/decommissioning-assets"
            target="_blank"
            rel="noopener noreferrer"
          >
            NCSC britannique, dans sa recommandation sur le retrait des actifs
          </a>
          , rappelle que les éléments nécessaires au retour peuvent inclure les
          configurations, règles réseau et schémas applicatifs, et que le retour
          doit être testé avant le retrait. La conservation exactement une fois
          des écritures postérieures à la bascule est notre conséquence
          opérationnelle : elle doit être prouvée sur votre système, pas déduite
          de cette source.
        </p>

        <GuideTable
          caption="Choisir entre retour et correction en avant"
          headers={["Situation", "Réponse possible", "Preuve indispensable"]}
          rows={[
            [
              "Aucune écriture acceptée dans le nouveau système",
              "Retour de trafic et redémarrage de l’ancien système",
              "Restauration chronométrée et dépendances disponibles.",
            ],
            [
              "Quelques écritures identifiables et rejouables",
              "Retour puis replay vers l’ancien logiciel",
              "Journal exhaustif, clés stables et rapprochement sans doublon.",
            ],
            [
              "Écritures nombreuses ou transformations irréversibles",
              "Correction en avant ou réduction du périmètre",
              "Plan approuvé, fonctionnement temporaire et contrôle de chaque écart.",
            ],
            [
              "Intégration non critique indisponible",
              "Continuer en mode temporaire sous condition",
              "Responsable, durée maximale, rattrapage et seuil d’arrêt.",
            ],
          ]}
        />

        <p>
          Définissez aussi l’instant où le retour n’est plus raisonnable. Après
          plusieurs heures ou plusieurs jours d’activité dans le nouveau
          système, rejouer les écritures peut devenir plus risqué que corriger
          la cible. Ce point de non-retour n’est pas une fatalité technique :
          c’est une décision documentée qui tient compte des volumes, de la
          traçabilité et du métier.
        </p>

        <InfoBox variant="amber" title="Notre règle pratique">
          Si vous ne pouvez pas montrer comment une commande créée après la
          bascule revient dans l’ancien système une seule fois, ne présentez pas
          la sauvegarde comme un plan de retour complet. Vous avez une copie
          historique, pas encore une continuité opérationnelle.
        </InfoBox>

        <h2 id="nova">
          10. Nova Maintenance : un cas fictif qui oblige à compter jusqu’au
          résultat
        </h2>

        <p>
          Nova Maintenance est une PME fictive de 40 utilisateurs. Elle doit
          reprendre 2 400 clients, 8 000 dossiers historiques, 300 dossiers
          ouverts, 220 factures par mois, cinq intégrations et dix rôles. Durant
          la dernière heure avant le gel, cinquante écritures sont créées ou
          modifiées. La source contient aussi 20 lignes en doublon déjà
          identifiées : le lot lit donc 2 420 lignes pour produire 2 400 clients
          uniques. La fenêtre décidée par l’entreprise est de six heures.
        </p>

        <GuideTable
          caption="Seuils bloquants du cas Nova Maintenance"
          headers={["Contrôle", "Condition de GO", "Résultat de répétition"]}
          rows={[
            [
              "Dossiers ouverts",
              "300 sur 300 présents",
              "300 présents : conforme.",
            ],
            [
              "Lien entre dossier et client",
              "300 sur 300 corrects",
              "Porte A : 299, STOP · porte B après correction puis rejeu de contrôle : 300, conforme.",
            ],
            [
              "Factures du mois",
              "220 factures et somme TTC identique",
              "Conforme au centime.",
            ],
            [
              "Écritures de la dernière heure",
              "50 sur 50, zéro doublon après rejeu",
              "50 sur 50 au deuxième lot ; zéro doublon.",
            ],
            [
              "Intégrations",
              "5 sur 5 ou mode temporaire approuvé",
              "4 disponibles ; export comptable manuel approuvé pour 2 h.",
            ],
            [
              "Droits",
              "10 rôles autorisés et 10 refus attendus",
              "Conforme ; comptes temporaires à expirer.",
            ],
            [
              "Traduction des statuts — test TST-002",
              "Tous les statuts source possèdent une règle cible approuvée",
              "Porte A et porte B : échec, au moins un statut reste inconnu.",
            ],
            [
              "Rejets",
              "Chaque rejet expliqué, corrigé ou explicitement accepté",
              "Porte A : un sans propriétaire, STOP · porte B : zéro non attribué.",
            ],
            [
              "Temps de retour",
              "Copie, contrôles, décision et retour tiennent dans 6 h",
              "Porte A : 6 h 15, STOP · porte B : 2 h 30, conforme.",
            ],
          ]}
        />

        <p>
          La porte A donne quatre raisons de s’arrêter : 6 h 15 dans une fenêtre
          de six heures, 299 relations correctes sur 300, un rejet sans
          propriétaire et le test de traduction des statuts TST-002 en échec.
          Entre les deux portes, l’équipe attribue le rejet, corrige seulement
          le rattachement entre dossiers et clients, puis rejoue le même lot
          sans créer de doublon. Elle ne corrige pas encore la règle de statut
          manquante. La porte B mesure 2 h 30, obtient 300 relations sur 300 et
          zéro rejet non attribué, mais reste en STOP parce que TST-002 échoue
          encore.
        </p>

        <p>
          Le coût interne d’une journée d’indisponibilité peut être valorisé,
          sans prétendre mesurer le chiffre d’affaires perdu :
        </p>

        <FormulaBox>{`40 personnes × 7 heures × 55 € = 15 400 €

Ce montant représente une capacité interne chargée fictive.
Il n'inclut ni ventes perdues, ni pénalités, ni insatisfaction client.

Deux heures : 40 × 2 × 55 € = 4 400 €
Six heures : 40 × 6 × 55 € = 13 200 €`}</FormulaBox>

        <p>
          Cette valorisation ne justifie pas de continuer coûte que coûte. Elle
          permet de comparer une interruption préparée à une interruption subie.
          Une facture attribuée au mauvais client peut coûter moins d’heures le
          soir de la bascule mais davantage de corrections, de confiance et de
          contrôle ensuite.
        </p>

        <h2 id="tco">
          11. Comparez les coûts à 12, 36 et 60 mois, pas seulement le devis de
          migration
        </h2>

        <p>
          Le prix initial masque souvent la double exploitation, la formation,
          le nettoyage, l’archive et la sortie. Le{" "}
          <strong>coût total sur la durée (TCO)</strong> rassemble ces postes
          sur un même horizon. Le calcul suivant impose les mêmes hypothèses aux
          trois trajectoires exécutables. Il est fictif, hors taxes : ce n’est
          ni un devis ni un benchmark. Il exclut les pertes commerciales,
          pénalités, évolution du nombre d’utilisateurs et aléas non chiffrés.
        </p>

        <InfoBox variant="amber" title="Notre intérêt commercial est explicite">
          Hagnéré Code développe, reprend et maintient des applications métier,
          et peut donc être rémunéré pour une migration. Les nombres ci-dessous
          ne sont ni nos tarifs ni une raison de nous confier le projet. Une
          équipe interne, un autre prestataire, un périmètre plus petit ou un
          report peuvent être de meilleures décisions.
        </InfoBox>

        <p>
          Hypothèses communes : journée projet valorisée à 650 €, temps
          utilisateurs et hypercare à 13 200 €, cible à 3 000 € par mois, ancien
          logiciel à 2 000 € par mois pendant la coexistence, archive à 200 €
          par mois après fermeture et exercice de sortie à 12 000 € à l’horizon
          de 60 mois. Les 13 200 € ne représentent pas les six heures
          d’indisponibilité calculées plus haut, même si le total est
          fortuitement identique : ils se composent de{" "}
          <strong>40 utilisateurs × 4 h × 55 € = 8 800 €</strong> et de{" "}
          <strong>2 personnes d’hypercare × 40 h × 55 € = 4 400 €</strong>.
        </p>

        <GuideTable
          caption="Décomposition des jours projet fictifs"
          headers={["Trajectoire", "Postes en jours", "Total"]}
          rows={[
            [
              "Bascule en une fois",
              "Cadrage 15 · nettoyage/mapping 22 · intégrations 30 · tests/répétitions 25 · changement 15 · pilotage/sortie 10",
              "117 jours",
            ],
            [
              "Migration progressive",
              "Cadrage 18 · nettoyage/mapping 28 · intégrations 38 · tests/répétitions 30 · changement 20 · pilotage/sortie 12",
              "146 jours",
            ],
            [
              "Remplacement ciblé",
              "Cadrage 22 · nettoyage/mapping 34 · intégrations 50 · tests/répétitions 36 · changement 24 · pilotage/sortie 15",
              "181 jours",
            ],
          ]}
        />

        <p>
          Ces jours sont des hypothèses éditoriales, pas des durées observées
          sur le marché. Leur décomposition sert à voir quel poste change si vos
          données, vos intégrations ou votre accompagnement demandent davantage
          de travail.
        </p>

        <GuideTable
          caption="TCO fictif à périmètre égal"
          headers={["Trajectoire", "Hypothèse de projet", "Coût total"]}
          rows={[
            [
              "Bascule en une fois",
              "117 jours · ancien outil 4 mois",
              "12 mois : 134 850 € · 36 mois : 211 650 € · 60 mois : 300 450 €",
            ],
            [
              "Migration progressive",
              "146 jours · ancien outil 8 mois",
              "12 mois : 160 900 € · 36 mois : 237 700 € · 60 mois : 326 500 €",
            ],
            [
              "Remplacement ciblé de type strangler",
              "181 jours · ancien outil 11 mois",
              "12 mois : 189 050 € · 36 mois : 265 850 € · 60 mois : 354 650 €",
            ],
          ]}
        />

        <FormulaBox>{`Bascule en une fois — 12 mois
117 × 650 + 13 200 + 12 × 3 000 + 4 × 2 000 + 8 × 200
= 76 050 + 13 200 + 36 000 + 8 000 + 1 600
= 134 850 €

Migration progressive — 36 mois
146 × 650 + 13 200 + 36 × 3 000 + 8 × 2 000 + 28 × 200
= 237 700 €

Strangler — 60 mois
181 × 650 + 13 200 + 60 × 3 000 + 11 × 2 000 + 49 × 200 + 12 000
= 354 650 €`}</FormulaBox>

        <p>
          Avec ces seules hypothèses, la bascule complète coûte 26 050 € de
          moins que la migration progressive et 54 200 € de moins que le
          remplacement ciblé, quel que soit l’horizon affiché. Cet avantage
          vient de la charge projet et de la coexistence choisies pour l’exemple
          ; il ne mesure pas encore le risque concentré de la bascule.
        </p>

        <GuideTable
          caption="Seuils qui peuvent réellement renverser le classement fictif"
          headers={["Écart à tester", "Seuil calculé", "Conséquence"]}
          rows={[
            [
              "Bascule complète : charge projet non prévue",
              "41 jours × 650 € = 26 650 €",
              "À hypothèses inchangées, son TCO 12 mois atteint 161 500 € et dépasse de 600 € la migration progressive.",
            ],
            [
              "Bascule complète : indisponibilité supplémentaire par rapport à la progressive",
              "11 h 51 × 40 personnes × 55 €/h = 26 070 €",
              "La seule capacité interne consommée efface l’écart de 26 050 € ; ventes, pénalités et probabilité restent inconnues.",
            ],
            [
              "Remplacement ciblé : valeur créée ou risque évité face à la bascule complète",
              "Plus de 54 200 €",
              "Il devient économiquement défendable dans ce modèle, sans que ce seuil estime la probabilité d’un incident.",
            ],
            [
              "Coût d’archive inconnu",
              "Inconnu, jamais 0 € par défaut",
              "Demander format, recherche, sécurité, durée et export avant de comparer.",
            ],
          ]}
        />

        <p>
          Ces seuils servent à poser la question, pas à fabriquer une
          probabilité d’échec. Faites estimer séparément le coût d’un incident,
          sa vraisemblance et les conséquences que chaque trajectoire réduit
          réellement. Un risque non chiffré reste inconnu ; il ne devient ni nul
          ni certain.
        </p>

        <p>
          « Stabiliser et reporter » se chiffre à part : coûts des corrections
          indispensables, quatre semaines de fonctionnement supplémentaire et
          nouvelle répétition. Il évite parfois une perte bien supérieure, mais
          il ne doit pas devenir une attente sans porte de sortie. Écrivez ce
          qui devra être vrai à la prochaine date de décision.
        </p>

        <h2 id="apres">
          12. Pendant la première semaine, protégez l’activité avant d’ajouter
          des fonctions
        </h2>

        <p>
          L’hypercare est une période de soutien renforcé, pas une promesse
          d’assistance illimitée. Nommez les personnes, le canal, les niveaux de
          priorité, les délais visés et les conditions de sortie. Distinguez un
          blocage métier d’une préférence d’interface : « cette facture est
          fausse » n’a pas la même priorité que « le bouton était à gauche ».
        </p>

        <GuideTable
          caption="Pilotage de la première semaine"
          headers={["Signal", "Réponse", "Sortie attendue"]}
          rows={[
            [
              "Opération critique impossible",
              "Mode temporaire, responsable nommé et analyse immédiate.",
              "Opération testée de bout en bout par l’utilisateur concerné.",
            ],
            [
              "Donnée ou lien incohérent",
              "Suspendre le domaine concerné, mesurer la population et corriger par lot rejouable.",
              "Rapprochement conforme et preuve conservée.",
            ],
            [
              "Intégration instable",
              "Activer le flux manuel prévu et surveiller deux lots consécutifs.",
              "Accusés et totaux conformes pendant la durée décidée.",
            ],
            [
              "Question d’usage",
              "Consigne courte, formation ciblée ou amélioration planifiée.",
              "Aucun dossier client ne reste bloqué.",
            ],
            [
              "Demande d’évolution",
              "Sortir du canal d’incident et prioriser avec coût et bénéfice.",
              "La migration reste stabilisée avant d’élargir le périmètre.",
            ],
          ]}
        />

        <p>
          Suivez chaque jour les écritures temporaires non rapprochées, les
          rejets, les erreurs de droits, les intégrations dégradées, les temps
          de réponse et les opérations critiques terminées. Une réunion
          quotidienne ne remplace pas ces mesures. La sortie de l’hypercare
          intervient lorsque les incidents critiques sont clos, les modes
          temporaires arrêtés et la responsabilité transférée au support normal.
        </p>

        <p>
          Le guide sur le{" "}
          <Link href="/guides/contrat-tma-application">
            contrat de maintenance d’une application
          </Link>{" "}
          aide ensuite à écrire les responsabilités, les priorités et la sortie
          du prestataire. Pendant la migration, ces règles doivent déjà être
          provisoirement nommées : un contrat signé après l’incident n’organise
          pas la nuit de bascule.
        </p>

        <h2 id="kit">
          13. Téléchargez le kit de migration — sans formulaire ni adresse email
        </h2>

        <p>
          Le kit contient des matrices vierges et un exemple Nova Maintenance
          entièrement fictif : inventaire, mapping, contrat d’écriture, journal
          des lots, rapprochement, RPO/RTO/MTD, tests, runbook, décision
          stop/go, registre des copies et accès, hypercare, TCO et relevé de
          décision. Les CSV ne contiennent pas de formule active.
        </p>

        <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
          <a
            href="/ressources/kit-migration-logiciel-metier.zip"
            download
            className="rounded-2xl border border-emerald-300 bg-emerald-50 p-5 text-emerald-950 no-underline transition hover:border-emerald-500 dark:border-emerald-900 dark:bg-emerald-950/20 dark:text-emerald-200"
          >
            <span className="block text-xs font-bold uppercase tracking-widest">
              Kit complet · ZIP
            </span>
            <strong className="mt-2 block text-lg">
              Télécharger les matrices vierges et l’exemple Nova
            </strong>
            <span className="mt-2 block text-sm leading-relaxed opacity-80">
              Fichiers CSV et Markdown directement réutilisables, sans compte et
              sans transmission de données.
            </span>
          </a>
          <a
            href="/ressources/kit-migration-logiciel-metier/00-mode-emploi.md"
            className="rounded-2xl border border-zinc-200 bg-white p-5 text-zinc-950 no-underline transition hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
          >
            <span className="block text-xs font-bold uppercase tracking-widest text-zinc-500">
              Avant de remplir les fichiers
            </span>
            <strong className="mt-2 block text-lg">
              Lire le mode d’emploi et les limites
            </strong>
            <span className="mt-2 block text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Ordre conseillé, données à ne pas saisir, preuve de restauration
              et règles de sécurité.
            </span>
          </a>
        </div>

        <p>
          Commencez par les matrices vierges. Utilisez l’exemple uniquement pour
          comprendre le niveau de précision attendu. Ne copiez pas les seuils,
          volumes, délais ou coûts de Nova : ils décrivent une fiction. Gardez
          une version datée de chaque décision et conservez les données
          personnelles, secrets, mots de passe et jetons hors de ces fichiers.
        </p>

        <InfoBox variant="emerald" title="Commencez par trois fichiers">
          <ol>
            <li>
              <a href="/ressources/kit-migration-logiciel-metier/01-inventaire-dependances-vierge.csv">
                Inventaire des dépendances
              </a>{" "}
              : ce qui peut arrêter l’activité.
            </li>
            <li>
              <a href="/ressources/kit-migration-logiciel-metier/06-rpo-rto-mtd-vierge.csv">
                Objectifs de continuité
              </a>{" "}
              : perte de données, reprise et durée maximale acceptables.
            </li>
            <li>
              <a href="/ressources/kit-migration-logiciel-metier/09-decision-stop-go-vierge.csv">
                Décision stop/go
              </a>{" "}
              : preuves et seuils qui autorisent ou interdisent la bascule.
            </li>
          </ol>
          Si ces trois fichiers restent vagues, ne programmez pas encore la
          date. Le mapping, le journal des lots et le runbook viennent ensuite.
        </InfoBox>

        <h2 id="fermeture">
          14. L’ancien logiciel ne disparaît qu’après les données, les accès et
          la sortie
        </h2>

        <p>
          Maintenir deux logiciels en écriture sans date de fin entretient les
          divergences. Fermer trop tôt enlève la solution de secours, les
          historiques ou les preuves nécessaires. Décidez séparément de
          l’écriture, de la lecture, de l’archive, des licences, de
          l’infrastructure et des copies de test.
        </p>

        <ul>
          <li>
            <strong>Fermez l’écriture</strong> lorsque toutes les nouvelles
            opérations naissent dans la cible et que les saisies temporaires
            sont rapprochées.
          </li>
          <li>
            <strong>Gardez une lecture limitée</strong> si un historique utile
            n’a pas vocation à être réimporté, avec des droits et une durée
            décidés.
          </li>
          <li>
            <strong>Produisez une archive exploitable</strong> : format,
            recherche, chiffrement, sauvegarde, responsable et test de lecture.
          </li>
          <li>
            <strong>Retirez les comptes temporaires</strong>, faites tourner les
            secrets et contrôlez les comptes de service.
          </li>
          <li>
            <strong>Supprimez ou restituez les copies de test</strong> avec une
            preuve, selon le cadre applicable à l’entreprise.
          </li>
          <li>
            <strong>Testez la sortie</strong> avant de résilier l’accès qui
            permet encore d’exporter ou de comprendre les données.
          </li>
        </ul>

        <p>
          La durée de conservation ne se déduit pas d’une phrase universelle.
          Elle dépend de la finalité, des données, des obligations et des
          besoins de l’entreprise. Faites valider les cas juridiques ou
          sectoriels par les personnes compétentes. Le kit fournit un registre
          des copies et des accès ; il ne décide pas de la durée à votre place.
        </p>

        <InfoBox variant="blue" title="Le relevé final tient en six preuves">
          Les opérations critiques fonctionnent. Les volumes, montants, liens et
          droits sont rapprochés. Les dernières écritures existent une seule
          fois. Les modes temporaires sont fermés. Les incidents critiques ont
          un résultat vérifié. L’ancien logiciel et ses copies ont une décision
          de lecture, d’archive ou de suppression.
        </InfoBox>

        <GuideInlineCTA
          title="Faire relire votre trajectoire avant la répétition"
          description="Décrivez l’ancien logiciel, la cible, les opérations qui ne peuvent pas s’arrêter, les données et intégrations connues, la fenêtre envisagée et les inconnues restantes. Nous pouvons recommander une migration progressive, une bascule complète, un périmètre réduit ou un report."
          tags={[
            "Rapprochement chiffré",
            "Retour réellement rejouable",
            "TCO et coexistence",
          ]}
          ctaLabel="Faire examiner ma migration"
          ctaHref="/demarrer-un-projet"
          showPhone={false}
        />

        <h2 id="sources">Sources, glossaire et limites</h2>

        <p>
          Les sources suivantes soutiennent les principes de continuité,
          sauvegarde, sécurité et déploiement. Elles ne prouvent ni la durée, ni
          le prix, ni la garantie d’une migration donnée. Les choix de
          trajectoire, le cas Nova et les calculs sont une méthode éditoriale à
          remplacer par les données de l’entreprise.
        </p>

        <ul>
          <li>
            <a
              href="https://messervices.cyber.gouv.fr/documents-guides/anssi_essentiels_migration_1.0.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              ANSSI — Sécuriser une migration numérique, version 1.0 de janvier
              2026
            </a>
            , pour l’inventaire, l’implication des métiers, les procédures
            testées et le retrait raisonné de l’ancien système.
          </li>
          <li>
            <a
              href="https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              ANSSI — Sauvegarde des systèmes d’information, version 1.1 du 27
              novembre 2025
            </a>
            , pour les objectifs métier, la restauration et l’ordre des
            dépendances.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/securite-sauvegarder"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — Sécurité : sauvegarder, 14 mars 2024
            </a>
            , pour les tests d’intégrité et de restauration.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/securite-prevoir-la-continuite-et-la-reprise-dactivite"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — Prévoir la continuité et la reprise d’activité
            </a>
            , pour les responsables, alertes, fonctionnements temporaires et
            exercices.
          </li>
          <li>
            <a
              href="https://www.cnil.fr/fr/securite-encadrer-la-maintenance-et-la-destruction-des-donnees"
              target="_blank"
              rel="noopener noreferrer"
            >
              CNIL — Encadrer la maintenance et la destruction des données
            </a>
            , pour les accès prestataires, copies et fin d’intervention.
          </li>
          <li>
            <a
              href="https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/strangler-fig.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              AWS Prescriptive Guidance — Strangler fig pattern
            </a>
            , documentation d’un éditeur sur le remplacement incrémental et ses
            compromis ; ce pattern n’est pas une règle universelle.
          </li>
          <li>
            <a
              href="https://engineering.homeoffice.gov.uk/patterns/selecting-a-deployment-strategy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              UK Home Office — Selecting a deployment strategy
            </a>
            , pour les différences entre rolling, canary et blue-green et la
            prudence lorsque les données sont partagées.
          </li>
          <li>
            <a
              href="https://www.gov.uk/service-manual/technology/deploying-software-regularly"
              target="_blank"
              rel="noopener noreferrer"
            >
              GOV.UK Service Manual — Deploying software regularly
            </a>
            , pour les petits changements, tests de fumée, journaux et retour.
          </li>
          <li>
            <a
              href="https://learn.microsoft.com/en-us/azure/service-bus-messaging/duplicate-detection"
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft Learn — Azure Service Bus duplicate detection
            </a>
            , pour l’identifiant stable et la détection d’un message déjà reçu ;
            cette documentation ne prouve pas l’idempotence de votre traitement
            métier.
          </li>
          <li>
            <a
              href="https://www.ncsc.gov.uk/guidance/decommissioning-assets"
              target="_blank"
              rel="noopener noreferrer"
            >
              NCSC UK — Decommissioning assets
            </a>
            , pour les éléments de retour au-delà de la base et l’essai avant
            retrait.
          </li>
        </ul>

        <GuideTable
          caption="Glossaire en langage de direction"
          headers={["Terme", "Définition simple"]}
          rows={[
            [
              "Bascule ou cutover",
              "Moment où les écritures cessent dans l’ancien système et commencent dans le nouveau pour un périmètre.",
            ],
            [
              "Mapping",
              "Règles qui indiquent où va chaque donnée et comment elle est transformée.",
            ],
            [
              "Lot ou batch",
              "Ensemble identifié de données traité à un moment donné et conçu pour être rejoué.",
            ],
            [
              "CDC",
              "Mécanisme qui capte les créations, modifications et suppressions afin de les transmettre.",
            ],
            [
              "Idempotence",
              "Propriété d’un traitement qui peut être rejoué sans créer un doublon ni changer deux fois le résultat.",
            ],
            [
              "Rapprochement",
              "Comparaison des volumes, sommes, statuts, relations, pièces et droits entre source et cible.",
            ],
            [
              "Rollback",
              "Retour à l’ancienne version ou à l’ancien système, avec reprise des écritures récentes.",
            ],
            [
              "Roll-forward",
              "Correction de la cible puis poursuite lorsque le retour ferait perdre davantage d’informations.",
            ],
            [
              "Hypercare",
              "Période temporaire de soutien renforcé après la mise en service.",
            ],
            [
              "RPO / RTO / MTD",
              "Point ou fenêtre de reprise correspondant à l’âge maximal des écritures à reconstruire, délai de rétablissement visé et durée maximale tolérable.",
            ],
          ]}
        />

        <p>
          Aucun chiffre ne constitue un benchmark de marché. Aucun lien
          commercial ne prouve la qualité d’un prestataire. Une migration
          soumise à des règles sectorielles, à une intégrité contestée, à un
          conflit d’accès ou à une attaque exige une analyse spécifique. Une
          vérification technique locale et un kit complet ne remplacent ni une
          répétition sur votre système, ni la validation des métiers, ni un
          conseil juridique.
        </p>
      </GuideLayout>
    </GuidesShell>
  );
}
