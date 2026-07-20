/* eslint-disable react/no-unescaped-entities */
import type { LegalSection } from "../LegalPageLayout";

export const confidentialiteSections: LegalSection[] = [
  {
    id: "responsable",
    label: "Responsable",
    title: "Qui traite vos données ?",
    body: (
      <>
        <p>
          Pour les traitements décrits sur cette page, le responsable de
          traitement est <strong>HAGNERE CODE</strong>, SASU au capital de 10 €,
          SIREN 993 672 856, nom commercial Hagnéré Code.
        </p>
        <dl className="lp-facts">
          <dt>Contact vie privée</dt>
          <dd>Quentin Hagnéré, président</dd>
          <dt>Courriel</dt>
          <dd><a href="mailto:quentin@hagnere-patrimoine.fr">quentin@hagnere-patrimoine.fr</a></dd>
          <dt>Adresse de correspondance</dt>
          <dd>82 impasse de Bellevue, 73000 Bassens, France</dd>
          <dt>Téléphone</dt>
          <dd><a href="tel:+33374472018">+33 3 74 47 20 18</a></dd>
        </dl>
        <p>
          Aucun délégué à la protection des données (DPO) n'est désigné à ce
          jour. Quentin Hagnéré est le point de contact interne, sans porter le
          titre de DPO. Lorsque HAGNERE CODE traite des données pour le compte
          d'un client dans une prestation, les rôles et instructions sont
          précisés dans le contrat ou un accord de sous-traitance distinct.
        </p>
      </>
    ),
  },
  {
    id: "donnees",
    label: "Données traitées",
    title: "Quelles données sont traitées ?",
    body: (
      <>
        <p>Selon votre usage du site, nous pouvons traiter :</p>
        <ul>
          <li><strong>identité et coordonnées</strong> : prénom, nom, adresse électronique, téléphone ;</li>
          <li><strong>informations professionnelles</strong> : entreprise, rôle, SIREN et informations publiques associées ;</li>
          <li><strong>informations de projet</strong> : besoins, périmètre, budget, échéance, outils existants et messages saisis dans les champs prévus ;</li>
          <li><strong>données de relation</strong> : échanges, rendez-vous, devis, contrats, livrables et factures ;</li>
          <li><strong>données techniques et de sécurité</strong> : adresse IP, user-agent, date, route appelée, résultat d'un contrôle anti-abus et journaux nécessaires au diagnostic ;</li>
          <li><strong>dictée facultative</strong> : flux audio transmis pour transcription et texte obtenu.</li>
        </ul>
        <p>
          Les données proviennent directement de vous, de votre navigateur ou,
          pour la vérification d'une entreprise, de l'API publique Recherche
          Entreprises. N'insérez pas de données sensibles au sens de l'article 9
          du RGPD, de secrets, de mots de passe ou de données de tiers non
          nécessaires dans un champ libre ou une dictée.
        </p>
      </>
    ),
  },
  {
    id: "finalites",
    label: "Finalités et bases",
    title: "Pourquoi et sur quelle base ?",
    body: (
      <div className="lp-table-wrap">
        <table className="lp-table">
          <thead><tr><th>Finalité</th><th>Base légale</th></tr></thead>
          <tbody>
            <tr><td>Répondre à une demande, qualifier un projet, organiser un rendez-vous et préparer un devis</td><td>Mesures précontractuelles lorsque vous êtes personnellement partie au futur contrat (art. 6.1.b) ; sinon, intérêt légitime à répondre à une demande professionnelle et préparer un contrat avec votre organisation (art. 6.1.f)</td></tr>
            <tr><td>Exécuter une prestation, assurer le suivi, la facturation et la réversibilité</td><td>Exécution du contrat pour le cocontractant personne physique (art. 6.1.b) ; intérêt légitime au suivi des interlocuteurs représentant une personne morale (art. 6.1.f)</td></tr>
            <tr><td>Tenir la comptabilité, répondre aux autorités et conserver les pièces obligatoires</td><td>Obligation légale (art. 6.1.c)</td></tr>
            <tr><td>Prévenir les abus, sécuriser le site, diagnostiquer les erreurs et défendre nos droits</td><td>Intérêt légitime à protéger le service et établir la preuve (art. 6.1.f)</td></tr>
            <tr><td>Transcrire une dictée vocale facultative via Groq</td><td>Consentement exprimé par l'activation volontaire du bouton « Dicter » après l'information affichée à proximité (art. 6.1.a) ; la saisie clavier reste disponible</td></tr>
            <tr><td>Activer une mesure d'audience facultative ou un service tiers non nécessaire lorsqu'un choix est proposé</td><td>Consentement préalable (art. 6.1.a et art. 82 de la loi Informatique et Libertés)</td></tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    id: "obligatoire",
    label: "Caractère obligatoire",
    title: "Champs obligatoires et conséquences",
    body: (
      <>
        <p>
          Les champs signalés comme obligatoires sont nécessaires pour
          identifier l'interlocuteur, comprendre la demande et y répondre. Sans
          eux, le formulaire ne peut pas être transmis. Les autres champs sont
          facultatifs ; leur absence peut seulement réduire la précision de la
          première réponse.
        </p>
        <p>
          La case figurant au formulaire confirme que vous avez pris connaissance
          de cette information et demandez le traitement de votre demande. Elle
          ne constitue pas un consentement et ne modifie pas la base applicable :
          mesures précontractuelles lorsque vous êtes partie au futur contrat,
          ou intérêt légitime lorsque vous intervenez pour une organisation. Elle
          n'autorise ni newsletter, ni prospection sans rapport avec votre demande,
          ni vente de données.
        </p>
      </>
    ),
  },
  {
    id: "destinataires",
    label: "Destinataires",
    title: "Destinataires et services utilisés",
    body: (
      <>
        <p>
          Les données sont accessibles aux personnes habilitées de HAGNERE CODE
          et aux prestataires strictement nécessaires à la fonction utilisée.
          Leur qualification juridique dépend du service : sous-traitant agissant
          sur instructions, ou responsable distinct lorsque vous ouvrez un service
          tiers pour votre propre usage.
        </p>
        <div className="lp-table-wrap">
          <table className="lp-table">
            <thead><tr><th>Service</th><th>Rôle concret</th><th>Données concernées</th></tr></thead>
            <tbody>
              <tr><td>Vercel Inc.</td><td>Hébergement et acheminement de la version publique du site</td><td>Requêtes, IP, données techniques et données transmises aux routes serveur</td></tr>
              <tr><td>Neon, LLC (société affiliée à Databricks, Inc.)</td><td>Base PostgreSQL applicative ; région, entité contractuelle et garanties applicables selon la configuration réelle du compte</td><td>Brief envoyé, coordonnées, métadonnées de sécurité et journaux applicatifs</td></tr>
              <tr><td>Plus Five Five, Inc. (Resend)</td><td>Envoi des confirmations et notifications transactionnelles</td><td>Adresse électronique, identité et contenu nécessaire du message</td></tr>
              <tr><td>Google Workspace</td><td>Réception et gestion de la messagerie professionnelle</td><td>Adresses, en-têtes, contenu et pièces des courriels</td></tr>
              <tr><td>Groq, Inc.</td><td>Transcription vocale facultative</td><td>Audio envoyé et texte transcrit</td></tr>
              <tr><td>Calendly, LLC</td><td>Prise de rendez-vous après clic ou autorisation explicite</td><td>Données techniques puis informations saisies chez Calendly</td></tr>
              <tr><td>API Recherche Entreprises (service public)</td><td>Vérification facultative d'une entreprise</td><td>SIREN recherché</td></tr>
              <tr><td>WhatsApp / Meta</td><td>Communication externe uniquement après ouverture volontaire</td><td>Données de compte et message selon les conditions de WhatsApp</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Aucun de ces accès n'autorise le prestataire à vendre vos données pour
          le compte de HAGNERE CODE. Les fonctions Calendly et WhatsApp ne sont
          pas nécessaires pour envoyer un formulaire : vous pouvez utiliser le
          courriel ou le formulaire du site.
        </p>
      </>
    ),
  },
  {
    id: "transferts",
    label: "Transferts hors EEE",
    title: "Transferts en dehors de l'Espace économique européen",
    body: (
      <>
        <p>
          Vercel, Neon, Resend, Groq, Calendly, Google et Meta peuvent impliquer
          des entités, équipes ou sous-traitants établis hors de l'Espace
          économique européen, notamment aux États-Unis. Une région de stockage
          européenne ne suffit donc pas, à elle seule, à exclure tout transfert
          ou accès depuis un pays tiers.
        </p>
        <p>
          Lorsque le traitement l'exige, les garanties prévues par le chapitre V
          du RGPD reposent sur une décision d'adéquation applicable, notamment le
          cadre UE–États-Unis pour les organismes certifiés, et/ou les clauses
          contractuelles types de la Commission européenne intégrées aux
          engagements du prestataire. Des mesures complémentaires sont appréciées
          selon le service et les données.
        </p>
        <p>
          Le mécanisme pertinent doit être vérifié fournisseur par fournisseur,
          pour le compte et la configuration réellement utilisés. Vous pouvez
          demander les informations disponibles sur ces garanties au contact vie
          privée, sous réserve de la confidentialité contractuelle. Lorsqu'une
          garantie requise ne peut pas être établie, le traitement concerné ne
          doit pas être activé dans cette configuration.
        </p>
      </>
    ),
  },
  {
    id: "dictee",
    label: "Dictée et automatisation",
    title: "Dictée vocale et décisions automatisées",
    body: (
      <>
        <p>
          La dictée est <strong>facultative</strong>. En activant « Dicter » après
          l'information affichée à proximité du bouton, vous consentez au transfert
          de l'audio à Groq pour cette transcription. Vous pouvez abandonner la dictée
          et utiliser le clavier ; ce retrait n'affecte pas un traitement déjà effectué
          à votre demande. Lorsque vous utilisez la fonction,
          l'audio est transmis à Groq pour produire une transcription. HAGNERE
          CODE ne l'enregistre pas volontairement dans sa base applicative. Selon
          la documentation publique de Groq, les requêtes d'inférence ne sont pas
          conservées par défaut. Les entrées et sorties peuvent néanmoins être
          journalisées temporairement, jusqu'à 30 jours, lorsqu'elles sont
          nécessaires au diagnostic d'une défaillance ou à l'examen d'un abus
          suspecté, sauf option de non-conservation effectivement activée.
        </p>
        <p>
          Vous pouvez saisir le même texte au clavier et éviter ce transfert. Le
          texte transcrit rejoint ensuite le brouillon local et, si vous envoyez
          le formulaire, le brief transmis à HAGNERE CODE.
        </p>
        <p>
          Le site ne prend aucune décision produisant un effet juridique ou
          significatif exclusivement par traitement automatisé. Les calculateurs
          fournissent des estimations indicatives ; un devis, un refus de mission
          ou une proposition commerciale est décidé par une personne.
        </p>
      </>
    ),
  },
  {
    id: "conservation",
    label: "Conservation",
    title: "Durées de conservation",
    body: (
      <>
        <div className="lp-table-wrap">
          <table className="lp-table">
            <thead><tr><th>Catégorie</th><th>Durée ou critère</th></tr></thead>
            <tbody>
              <tr><td>Demande et brief de prospect sans contrat</td><td>Jusqu'à 3 ans après le dernier échange utile, sauf opposition, litige ou obligation de preuve</td></tr>
              <tr><td>Dossier client et échanges contractuels</td><td>Pendant la relation puis durée nécessaire à la preuve, en principe 5 ans</td></tr>
              <tr><td>Factures et pièces comptables</td><td>10 ans à compter de la clôture de l'exercice concerné</td></tr>
              <tr><td>Journaux applicatifs de sécurité et de limitation d'abus</td><td>12 mois maximum dans la base HAGNERE CODE</td></tr>
              <tr><td>Brouillon du formulaire dans votre navigateur, uniquement après activation volontaire</td><td>24 heures au plus après la dernière sauvegarde, sans dépasser la session de l'onglet ; les coordonnées et identifiants de contact ne sont pas enregistrés dans ce brouillon</td></tr>
              <tr><td>Préférence relative aux traceurs</td><td>6 mois, puis le choix est redemandé si la bannière est active</td></tr>
              <tr><td>Audio de dictée</td><td>Non stocké volontairement par HAGNERE CODE ; Groq annonce ne pas conserver les requêtes d'inférence par défaut, sous réserve de journaux temporaires pouvant aller jusqu'à 30 jours pour diagnostiquer une défaillance ou examiner un abus suspecté</td></tr>
            </tbody>
          </table>
        </div>
        <div className="lp-note is-warning">
          Les purges de la base sont actuellement contrôlées par une procédure
          périodique et non par une suppression aveugle entièrement automatisée.
          Une donnée peut être isolée plus longtemps lorsqu'une obligation
          légale, un contrat, un contentieux ou une demande de droit le justifie.
          Les journaux propres aux hébergeurs suivent aussi leurs réglages et
          politiques contractuelles.
        </div>
      </>
    ),
  },
  {
    id: "droits",
    label: "Vos droits",
    title: "Vos droits et leur exercice",
    body: (
      <>
        <p>
          Dans les conditions prévues par le RGPD, vous pouvez demander l'accès,
          la rectification, l'effacement, la limitation et la portabilité de vos
          données, vous opposer aux traitements fondés sur l'intérêt légitime,
          retirer un consentement pour l'avenir et définir des directives après
          votre décès. Ces droits ne sont pas absolus : une obligation légale ou
          la nécessité d'établir un droit peut justifier une conservation limitée.
        </p>
        <p>
          Écrivez à <a href="mailto:quentin@hagnere-patrimoine.fr">quentin@hagnere-patrimoine.fr</a>
          en précisant l'objet de votre demande. Une preuve d'identité n'est
          demandée qu'en cas de doute raisonnable. HAGNERE CODE répond en principe
          dans un délai d'un mois, prolongeable de deux mois pour une demande
          complexe ou nombreuse, avec information dans le premier mois.
        </p>
        <p>
          Si vous estimez que vos droits ne sont pas respectés, vous pouvez
          adresser une plainte à la
          <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener noreferrer"> Commission nationale de l'informatique et des libertés (CNIL)</a>,
          3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07.
        </p>
      </>
    ),
  },
  {
    id: "securite",
    label: "Sécurité et évolution",
    title: "Sécurité, incident et mise à jour",
    body: (
      <>
        <p>
          HAGNERE CODE met en œuvre des mesures techniques et organisationnelles
          proportionnées aux risques : limitation des accès, validation des
          entrées, protection contre les abus, chiffrement des échanges et mise à
          jour des composants. Aucune mesure ne garantit un risque nul.
        </p>
        <p>
          Une violation de données est documentée et, lorsqu'elle présente un
          risque pour les droits et libertés, notifiée à la CNIL dans les délais
          prévus par l'article 33 du RGPD. Les personnes sont informées sans délai
          indu lorsque le risque est élevé, conformément à l'article 34.
        </p>
        <p>
          Cette politique évolue avec les services réellement utilisés. Une
          modification substantielle est signalée par une nouvelle date de mise
          à jour et, lorsque la loi l'exige, par une information spécifique ou un
          nouveau recueil de choix.
        </p>
      </>
    ),
  },
];
