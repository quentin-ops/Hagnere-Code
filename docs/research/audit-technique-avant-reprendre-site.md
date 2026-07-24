# Recherche — audit-technique-avant-reprendre-site

> Dossier ouvert en passe 1 puis complété jusqu'à la validation P4. Il conserve
> la recherche historique et documente la rédaction, les contre-audits et les
> contrôles terminés le 24 juillet 2026. Le guide reste compréhensible par un
> dirigeant qui ne connaît ni l'hébergement, ni le code, ni le vocabulaire de
> la cybersécurité.

Le déroulement et les portes de sortie sont définis dans
[`docs/workflow-maitre-guides-4-passes.md`](../workflow-maitre-guides-4-passes.md).

## Journal des quatre passes

Propriétaire éditorial unique : équipe éditoriale Hagnéré Code.

| Passe | État | Date | Responsable | Snapshot | Blocages |
| --- | --- | --- | --- | --- | --- |
| 1. Recherche | Terminée — porte validée | 23 juillet 2026 | Agent recherche — audit de reprise | Manifeste P1 | Aucun |
| 2. Rédaction et intégration | Terminée — porte validée | 24 juillet 2026 | équipe éditoriale Hagnéré Code | Manifeste P2 | Aucun |
| 3. Contre-audit indépendant | Terminée — porte validée | 24 juillet 2026 | final_audit_marketing, anti_ia_final, seo_tech_final | Manifeste P3 | Aucun P0/P1 restant |
| 4. Plume humaine et contrôle | Terminée — porte validée | 24 juillet 2026 | orchestration éditoriale | Manifeste P4 | Aucun blocage éditorial |

États autorisés : `À faire`, `En cours`, `Bloquée`, `À reprendre` et
`Terminée — porte validée`. Une modification de ce dossier après sa reprise
par le propriétaire éditorial impose de relire les décisions de P1.

### Manifestes des snapshots

| Fichier contrôlé | Passe | Remarque |
| --- | --- | --- |
| `docs/research/manifests/audit-technique-avant-reprendre-site-p1.sha256` | P1 | Manifeste existant ; historique de recherche conservé. |
| `docs/research/manifests/audit-technique-avant-reprendre-site-p2.sha256` | P2 | Manifeste existant de rédaction et d'intégration. |
| `docs/research/manifests/audit-technique-avant-reprendre-site-p3.sha256` | P3 | Manifeste existant après contre-audit et corrections. |
| `docs/research/manifests/audit-technique-avant-reprendre-site-p4.sha256` | P4 | Manifeste final créé après les contrôles P4 ; son empreinte est intégrée au snapshot commun du lot. |

## 1. Fiche d'identité

```text
Slug : audit-technique-avant-reprendre-site
Statut actuel : publiable — validation éditoriale déléguée
Requête principale, encore hypothétique avant recherche : audit technique avant reprise site
Moment du parcours : décider puis sécuriser
Lecteur précis : dirigeant ou indépendant dont le site professionnel doit être repris par une nouvelle agence, un nouveau développeur ou une équipe interne
Situation déclenchante : l'ancien prestataire part, le contrat de maintenance arrive à échéance, ou un nouveau prestataire propose de « reprendre le site » sans que le dirigeant sache ce qui a réellement été vérifié
Décision principale après lecture : signer une reprise simple, signer sous conditions précises, ou suspendre la reprise tant qu'un risque bloquant n'est pas levé
Niveau de connaissance au départ : le lecteur sait ce que son site apporte à l'entreprise, mais ne sait pas nécessairement où sont le domaine, le code, les sauvegardes ou les accès
5 questions indispensables :
1. L'entreprise peut-elle prouver qu'elle contrôle le domaine, l'hébergement, les comptes et les éléments nécessaires au fonctionnement du site ?
2. Une copie exploitable peut-elle être restaurée et testée sans mettre le site public en danger ?
3. Les fonctions qui apportent des demandes ou des ventes fonctionnent-elles réellement après restauration ?
4. Quels accès aux données la nouvelle équipe recevra-t-elle, pour quelle durée et avec quelle traçabilité ?
5. Les inconnues restantes autorisent-elles un GO, un GO sous réserves ou imposent-elles un STOP temporaire ?
3 objections ou craintes :
1. « Le site fonctionne aujourd'hui, pourquoi payer ou attendre un audit ? »
2. « La nouvelle agence m'assure qu'elle peut le reprendre ; je ne sais pas quoi lui demander comme preuve. »
3. « Si l'audit trouve beaucoup de problèmes, va-t-on forcément me vendre une refonte ? »
Action utile sans contact commercial : remplir une grille de preuves et demander les éléments manquants à l'ancien et au nouveau prestataire
CTA possible : faire examiner les preuves disponibles pour savoir si la reprise paraît simple, conditionnelle ou trop risquée en l'état
Hors périmètre : audit juridique de la propriété intellectuelle, réponse à une attaque en cours, test d'intrusion exhaustif, certification de sécurité, migration complète, chiffrage universel d'une refonte
Date de la recherche : 23 juillet 2026
Responsable de la synthèse : Agent recherche — audit de reprise
```

### Décision éditoriale centrale

Le guide ne doit pas apprendre au dirigeant à devenir technicien. Il doit lui
donner une méthode pour exiger des preuves compréhensibles avant qu'une
nouvelle équipe obtienne des accès ou promette de maintenir le site.

La réponse ne sera pas un score magique. Elle prendra la forme d'un verdict
motivé :

- **GO** : la reprise peut commencer dans le périmètre testé ;
- **GO sous réserves** : elle peut commencer seulement si des conditions
  nommées, attribuées et datées sont inscrites dans la passation ou le contrat ;
- **STOP** : on suspend l'engagement ou les changements risqués jusqu'à la
  levée d'un blocage.

`STOP` ne signifie ni « abandonner le site » ni « refaire le site ». Il signifie
« ne pas laisser une nouvelle équipe modifier la production tant que l'action
ne peut pas être autorisée, testée ou annulée de façon raisonnablement sûre ».

## 1 bis. Contrat de langage humain

- **Phrase exacte que le lecteur pourrait dire au téléphone :** « Une nouvelle
  agence veut reprendre mon site, mais comment savoir si elle pourra vraiment
  le maintenir sans tout casser ? »
- **Réponse qu'il attend en une phrase :** « Avant de signer, demandez la preuve
  que l'entreprise contrôle le site, qu'une copie peut être restaurée et que
  ses fonctions importantes peuvent être testées sans toucher au public. »
- **Terme central expliqué sans jargon :** un audit technique de reprise est un
  examen limité et documenté de l'état d'un site avant qu'une nouvelle équipe
  accepte de le maintenir ; il décrit ce qui a été vérifié, ce qui reste
  inconnu et ce qui bloque éventuellement la reprise.
- **Mots ordinaires employés par le lecteur :** reprendre le site, récupérer
  les accès, changer d'agence, sauvegarde, formulaire, nom de domaine,
  hébergement, panne, mises à jour, devis, contrat, risque, mot de passe.
- **Mots d'agence ou de consultant à éviter :** audit 360, due diligence,
  onboarding technique, réversibilité applicative, remédiation, observabilité,
  pipeline, dette legacy, matrice de maturité, scoring propriétaire, quick win.
  Si un terme technique est indispensable, l'expliquer dans la même phrase.
- **Projet des 150 premiers mots :** partir du contrat que le lecteur s'apprête
  à signer, répondre immédiatement, puis expliquer les trois preuves décisives.
- **Ce que le lecteur saura décider après ces 150 mots :** qu'un site visible
  n'est pas encore un site dont la reprise est prouvée, et qu'il doit demander
  contrôle, restauration et test des fonctions importantes avant de signer sans
  réserve.
- **H2 relus isolément :** planifiés, à valider après P2.
- **Comparaison comprise à 390 px sans colonne masquée :** la décision
  GO/GO sous réserves/STOP devra être rendue en cartes empilées, pas dans un
  grand tableau horizontal.
- **FAQ dont la première phrase répond :** réponses planifiées ci-dessous, à
  valider après P2.
- **CTA formulé comme résultat pour le prospect :** « Savoir si votre site peut
  être repris simplement, sous conditions, ou pas encore. »

### Projet d'ouverture — garde-fou de P2

> Vous êtes sur le point de confier votre site à une nouvelle agence ou à un
> nouveau développeur. Le site est en ligne, mais personne ne vous a encore
> montré qu'il pouvait être sauvegardé, restauré et modifié sans mettre vos
> demandes de contact en danger. Faut-il signer la maintenance quand même ?
>
> La réponse est simple : pas sans trois preuves. Votre entreprise doit
> contrôler les comptes indispensables, une copie du site doit pouvoir être
> restaurée à l'écart du public, et ses fonctions importantes — formulaire,
> paiement, réservation ou envoi d'e-mails selon votre activité — doivent être
> rejouées sur cette copie.
>
> L'audit technique de reprise sert à réunir ces preuves. Il ne garantit pas
> qu'aucun bug ou incident n'arrivera. Il permet de classer la décision : GO,
> GO sous réserves précises, ou STOP temporaire tant qu'un blocage n'est pas
> levé.

Cette ouverture est une cible de sens, pas du texte automatiquement validé pour
publication. P2 devra vérifier qu'elle ne promet ni sécurité absolue ni absence
de panne.

### Test sujet, action, résultat

Les phrases initiales ci-dessous sont des formulations à bannir si elles
apparaissent pendant P2.

| Phrase initiale | Qui agit ? | Action concrète | Résultat pour le lecteur | Phrase réécrite |
| --- | --- | --- | --- | --- |
| La réversibilité doit être objectivée. | Le dirigeant et le prestataire entrant | Restaurer une copie et conserver le compte rendu du test | Le dirigeant sait si le site peut être récupéré après une erreur | Demandez au prestataire de restaurer une copie du site et de noter ce qui a réussi ou échoué. |
| La surface d'administration doit être maîtrisée. | L'entreprise | Recenser les comptes, limiter leur durée et refermer les accès | Moins de comptes permanents ou oubliés | Listez les personnes et services qui peuvent modifier le site, puis fermez les accès devenus inutiles. |
| Le périmètre critique doit être qualifié. | Le dirigeant | Nommer les fonctions qui créent une demande, une vente ou une obligation | Les tests portent sur ce qui compte vraiment pour l'activité | Indiquez quelles actions du site apportent des clients ou traitent des données, puis exigez un test de chacune. |
| Une remédiation conditionne l'onboarding. | Le prestataire entrant et le dirigeant | Corriger le blocage nommé avant de commencer la maintenance | Le contrat ne masque pas un risque déjà connu | Inscrivez la correction, son responsable et sa date limite avant d'autoriser les modifications du site. |
| L'exploitabilité de la stack reste incertaine. | Le prestataire entrant | Reproduire la construction ou l'installation du site sur une copie | Le dirigeant sait si l'équipe peut réellement intervenir | Tant que la nouvelle équipe n'a pas remis le site en route sur une copie, dites simplement que sa reprise n'est pas encore prouvée. |

### Test de l'ouverture

- [x] la situation vécue apparaît avant la méthode de l'agence ;
- [x] aucun sigle n'est nécessaire dans le projet d'ouverture ;
- [x] aucun lexique de masse ne retarde la réponse ;
- [x] aucune métaphore ne devient un système à apprendre ;
- [x] la réponse reste honnête sans accumuler les réserves avant
      l'explication.

## 2. Cannibalisation

| Page existante | Intention de cette page | Différence du nouveau guide | Lien ou arbitrage nécessaire |
| --- | --- | --- | --- |
| `/services/audit-technique` | Acheter un audit technique large d'application : due diligence, état du code, sécurité, dette et feuille de route | Le nouveau guide répond d'abord à la décision du propriétaire d'un **site professionnel** avant une reprise de maintenance ; il n'expose pas une offre complète d'audit d'application | Lien tardif et contextuel seulement si les inconnues justifient un audit plus large ; ne pas reprendre le langage « board-ready », le scoring sur 100 ni la promesse de service |
| `/guides/reprendre-maintenance-site-autre-agence` | Organiser la passation entre prestataires, service par service, sans couper domaine, e-mail ou hébergement trop tôt | Le nouveau guide se place juste avant : quelles preuves techniques faut-il examiner pour accepter la reprise, la conditionner ou l'arrêter ? | Lien naturel en fin de verdict GO vers le guide de passation ; lien inverse possible depuis l'étape « faire vérifier » |
| `/guides/cout-maintenance-site-internet` | Comprendre le contenu et le prix d'une maintenance | Le nouveau guide ne compare pas des forfaits ; il vérifie si un périmètre maintenable est démontré avant de contractualiser | Lien après la décision GO, pas dans l'ouverture |
| `/guides/proprietaire-site-internet-code-source` | Vérifier droits, contrats et contrôle des actifs numériques | Le nouveau guide vérifie l'état technique et la possibilité d'agir ; il ne tranche pas la propriété intellectuelle | Lien dans la frontière « droits et autorisations » ; renvoyer au contrat ou à un juriste en cas de litige |
| `/guides/dette-technique-cout-entreprise` | Mesurer l'effet métier d'une dette technique et prioriser sa réduction | Le nouveau guide ne chiffre pas une dette ; il distingue blocage de reprise, réserve et amélioration non bloquante | Lien uniquement si la reprise révèle un chantier durable distinct |
| `/guides/pourquoi-mon-site-est-lent` | Diagnostiquer un symptôme de performance | Un site lent peut rester reprenable ; la performance n'est qu'un élément du périmètre, pas le verdict entier | Pas de fusion ; lien seulement si la lenteur est observée et mesurée |
| `/guides/site-internet-en-panne` | Réagir à un incident déjà visible | Le nouveau guide se déroule avant une reprise planifiée et n'est pas une procédure d'urgence | Encadré d'orientation vers l'incident si le site est déjà compromis ou indisponible |
| `/services/maintenance` et pages de maintenance | Acheter une prestation de maintenance future | Le guide aide à savoir si le prestataire peut raisonnablement s'engager sur l'existant | CTA non agressif ; ne jamais laisser croire que tout site a besoin d'un audit complet avant maintenance |

**Justification d'une URL distincte :** les pages existantes expliquent comment
transférer les services, combien coûte la maintenance ou ce que couvre une
offre d'audit ; aucune ne donne au dirigeant le dossier de preuves qui permet
de prononcer, avant signature, un GO, un GO sous réserves ou un STOP temporaire
sur la reprise technique du site.

### Frontières de maillage obligatoires

- **Vers `reprendre-maintenance-site-autre-agence` :** le présent guide
  s'arrête au verdict et aux conditions ; le guide voisin prend le relais pour
  l'ordre concret de la passation.
- **Vers le service d'audit :** ne l'évoquer qu'après avoir donné la grille
  autonome. L'offre répond à un besoin d'examen plus poussé, pas à une
  obligation créée artificiellement par le guide.
- **Vers la propriété du site :** ne pas transformer une absence d'accès en
  conclusion juridique. Inviter à lire les contrats et à demander un avis
  juridique si les droits sont contestés.
- **Vers l'incident de sécurité :** si une compromission active est suspectée,
  sortir du parcours commercial ordinaire et recommander une réponse à
  incident adaptée.

## 3. Demande et vocabulaire du lecteur

### Questions réellement observées dans l'échantillon de résultats

- Comment reprendre un site existant sans le casser ?
- Que faut-il vérifier avant de changer d'agence web ?
- Peut-on maintenir un site sans avoir le code source ?
- Comment récupérer le nom de domaine, l'hébergement et les accès ?
- Faut-il auditer un site avant de signer sa maintenance ?
- Une sauvegarde automatique suffit-elle ?
- L'ancienne agence doit-elle transmettre les mots de passe ?
- Faut-il changer d'hébergeur pour changer de prestataire ?
- Comment savoir si une refonte est vraiment nécessaire ?

### Formulations à privilégier

- « reprendre mon site » plutôt que « assurer l'onboarding applicatif » ;
- « preuve que la sauvegarde se restaure » plutôt que « stratégie de
  réversibilité » ;
- « comptes qui permettent de modifier le site » plutôt que « surface
  d'administration » ;
- « test du formulaire de contact » plutôt que « recette fonctionnelle du
  parcours de conversion » ;
- « ce qui manque encore » plutôt que « inconnues résiduelles » ;
- « arrêter temporairement la reprise » plutôt que « no-go définitif ».

### Recherche principale et variantes utiles

La requête principale reste une hypothèse éditoriale :
`audit technique avant reprise site`.

Variantes à intégrer naturellement, sans répétition mécanique :

- audit avant reprise maintenance site ;
- reprendre un site existant ;
- changer d'agence web ;
- audit technique site internet ;
- vérifier site avant contrat de maintenance ;
- récupération accès site internet ;
- transfert maintenance site ;
- reprendre un site WordPress ;
- test sauvegarde site internet ;
- passation agence web.

### Ce qui n'est pas mesuré

Ce dossier ne dispose ni de données Search Console, ni de Keyword Planner, ni
d'un corpus d'appels commerciaux anonymisé et quantifié. Il ne faut donc
publier aucun volume de recherche, aucune tendance et aucune formule comme
« les dirigeants demandent souvent » à partir de ce seul échantillon. La
demande est inférée de la présence répétée de pages de services et de guides
sur des requêtes voisines ; cette inférence doit rester une hypothèse SEO.

### Date et mode d'observation

- observation manuelle du moteur et lecture des pages visibles ;
- revue des pages internes proches dans le dépôt ;
- consultation le 23 juillet 2026 ;
- résultats français, variables selon lieu, historique et date ;
- échantillon qualitatif, non classement exhaustif.

## 4. Carte concurrentielle

| Page | Réponse et angle | Preuves/artefacts | Bon point | Manque décisionnel | Conflit d'intérêt éventuel |
| --- | --- | --- | --- | --- | --- |
| [ZEDD — Reprendre un site existant : comprendre avant de modifier](https://www.zedd.fr/expertises/support/audit-technique) | Audit avant modification : hébergement, domaines, sauvegardes, CMS, sécurité, accessibilité et performance | Liste structurée des zones examinées | Le lecteur comprend qu'il faut inventorier avant d'agir | Dans l'échantillon lu, pas de grille propriétaire explicitant les preuves attendues ni un verdict GO/GO sous réserves/STOP | Page de service de l'agence |
| [CINS — Portage de sites internet](https://www.cins.fr/expertises/maintenance-et-securite/portage) | Audit puis portage et maintenance du site | Étapes de prise en charge | Relie audit et continuité de service | La reprise est déjà la destination commerciale ; peu d'aide pour conclure qu'il vaut mieux ne pas engager le portage en l'état | Prestataire proposant le portage |
| [Antadis — Audit technique de site e-commerce](https://www.antadis.com/audit-technique-de-site-e-commerce/) | Audit orienté e-commerce et maintenance évolutive | Expertise et périmètre e-commerce | Reconnaît les enjeux propres aux ventes en ligne | Moins adapté au dirigeant d'une TPE avec site vitrine, formulaire ou réservation ; pas de dossier minimal de reprise autonome observé | Agence e-commerce |
| [Web Studio — Audit, dépannage et maintenance WordPress](https://web-studio.fr/maintenance-site-internet/audit-depannage-wordpress/) | Diagnostic WordPress lié au dépannage et à la maintenance | Périmètre WordPress et offre associée | Parle d'une technologie fréquente chez les petites entreprises | Risque de confondre audit de reprise, dépannage et abonnement ; ne couvre pas tous les sites | Prestataire WordPress |

**Angle mort commun :** dans l'échantillon revu, les pages expliquent bien ce
que le prestataire peut examiner, mais elles donnent peu au propriétaire les
preuves qu'il doit recevoir et la règle de décision qui l'autorise à signer,
signer sous conditions ou suspendre la reprise.

Cette conclusion porte seulement sur les pages observées. Le guide ne devra
jamais écrire « aucun concurrent ne le fait » ou « première méthode ».

**Valeur originale que le guide apportera :** un dossier de reprise utilisable
par le dirigeant, avec pour chaque point une preuve attendue, un test, une
inconnue éventuelle, sa conséquence et le verdict correspondant — sans score
opaque et sans pousser automatiquement vers la refonte.

## 5. Fiche de preuves

| Affirmation utilisable | Source primaire, URL et passage utile | Nature | Périmètre | Date/consultation | Confiance | Emplacement du lien visible | Conséquence lecteur | Fraîcheur |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Lorsqu'un prestataire traite des données personnelles pour le compte de l'entreprise, le responsable de traitement doit choisir un sous-traitant présentant des garanties suffisantes et encadrer le traitement par un contrat conforme à l'article 28. | [CNIL — Gérer la sous-traitance](https://www.cnil.fr/fr/securite-gerer-la-sous-traitance), précautions élémentaires et « ce qu'il ne faut pas faire » | Fait réglementaire expliqué par l'autorité | Seulement si le prestataire est réellement sous-traitant de données personnelles ; le rôle dépend des traitements, pas du mot « maintenance » | Source datée du 14 mars 2024, consultée le 23 juillet 2026 | Haute | Section données et contrat, au niveau de l'affirmation | Vérifier les rôles et les clauses avant de donner accès aux données | À revérifier avant publication |
| Le contrat de sous-traitance peut devoir préciser responsabilités, confidentialité, authentification, restitution ou destruction, incidents, assistance et revue des mesures. | [CNIL — Gérer la sous-traitance](https://www.cnil.fr/fr/securite-gerer-la-sous-traitance), liste des dispositions | Fait réglementaire et recommandation de l'autorité | Données personnelles confiées à un sous-traitant | 23 juillet 2026 | Haute | Carte « ce que le contrat doit encadrer » | Le dirigeant transforme une réserve technique en condition contractuelle vérifiable | À revérifier avant publication |
| Les opérations de support doivent être encadrées afin de maîtriser l'accès des prestataires aux données ; la CNIL recommande notamment des accès ouverts pour une durée adaptée puis refermés. | [CNIL — Encadrer la maintenance](https://www.cnil.fr/fr/securite-encadrer-la-maintenance-et-la-fin-de-vie-des-materiels-et-logiciels), lignes « précautions élémentaires » | Recommandation officielle | Maintenance permettant l'accès à des données ; adapter au risque et au système | Source datée du 14 mars 2024, consultée le 23 juillet 2026 | Haute | Section sur les accès | Ne pas envoyer des identifiants permanents dans un formulaire ou un e-mail ordinaire | À revérifier avant publication |
| Un prestataire de maintenance n'est pas automatiquement un sous-traitant RGPD du seul fait de son métier. | Déduction bornée à partir de la [définition opérationnelle retenue par la CNIL](https://www.cnil.fr/fr/securite-gerer-la-sous-traitance) : le texte vise les traitements réalisés pour le compte du responsable | Déduction juridique prudente | Le rôle doit être qualifié selon l'accès et les traitements effectifs ; demander conseil si le cas est ambigu | 23 juillet 2026 | Moyenne à haute | Encadré « selon votre situation » | Évite de présenter une obligation conditionnelle comme universelle | À faire relire en P3 |
| Avant d'externaliser une activité informatique, l'organisation doit analyser les risques et formuler des exigences de sécurité adaptées. | [ANSSI — Externalisation et sécurité des systèmes d'information](https://messervices.cyber.gouv.fr/guides/externalisation-et-securite-des-systemes-dinformation-un-guide-pour-maitriser-les) | Recommandation officielle | Guide général d'externalisation ; il ne crée pas à lui seul une obligation pour chaque site vitrine | Consulté le 23 juillet 2026 | Haute sur le principe, moyenne sur l'application au cas | Section « définir ce que la nouvelle équipe pourra faire » | Dimensionner les preuves au risque métier au lieu d'imposer le même audit à tous | Source ancienne, principe encore référencé ; à revérifier |
| Les recommandations ANSSI sur l'administration sécurisée aident à penser les chemins et comptes d'administration, mais ne constituent pas une check-list obligatoire identique pour tous les sites. | [ANSSI — Administration sécurisée des systèmes d'information](https://messervices.cyber.gouv.fr/guides/recommandations-relatives-ladministration-securisee-des-si) | Recommandation officielle et limite éditoriale | Systèmes d'information ; transposition proportionnée au site et aux risques | 23 juillet 2026 | Haute | Note de méthode, pas argument d'autorité dans l'ouverture | Recenser les accès d'administration sans prétendre imposer une architecture lourde à une TPE | À revérifier avant publication |
| PAMS est un référentiel de qualification pour des prestataires d'administration et de maintenance sécurisées ; ce n'est pas une certification détenue par défaut ni une exigence universelle pour toute maintenance de site. | [ANSSI — Référentiels d'exigences pour la qualification](https://cyber.gouv.fr/offre-de-service/solutions-certifiees-et-qualifiees/comprendre-levaluation-de-securite/qualification-de-produit-et-services/referentiels-qualification/) | Fait sur un référentiel et limite de portée | Services qualifiés concernés ; ne jamais revendiquer une qualification sans preuve publiée et périmètre vérifié | 23 juillet 2026 | Haute | Éventuelle note « certifications », seulement si utile | Le lecteur ne confond pas bonnes pratiques, qualification et promesse commerciale | À revérifier avant publication |
| Le Web Security Testing Guide de l'OWASP couvre notamment collecte d'informations, configuration et déploiement, identité, authentification, autorisations, sessions, validation des entrées, erreurs, cryptographie, logique métier et côté client. | [OWASP WSTG — version stable](https://owasp.org/www-project-web-security-testing-guide/stable/) | Référentiel technique communautaire primaire | Guide de tests d'applications web ; ce n'est ni une certification ni la preuve qu'un site est « sécurisé » | Version stable consultée le 23 juillet 2026 | Haute | Section « ce que l'audit peut tester » | Permet de choisir des tests adaptés sans promettre l'exhaustivité | Vérifier la version stable avant publication |
| Un audit limité de reprise ne garantit ni l'absence de vulnérabilité, ni l'absence de bug futur. | Déduction nécessaire à partir de la profondeur et de la diversité des tests du [WSTG](https://owasp.org/www-project-web-security-testing-guide/stable/) | Déduction et limite de service | Tous sites ; la portée doit être écrite | 23 juillet 2026 | Haute | Dès la définition de l'audit et dans la FAQ | Le dirigeant sait ce que le verdict prouve et ce qu'il ne prouve pas | Stable, formulation à revalider |
| Pour restaurer complètement un site WordPress typique, il faut les fichiers et la base de données. | [WordPress Developer Resources — Backups](https://developer.wordpress.org/advanced-administration/security/backup/), « There are two parts… Database and Files » | Fait technique, spécifique à WordPress | Installation WordPress typique ; d'autres architectures demandent d'autres éléments | Page mise à jour le 4 juin 2026, consultée le 23 juillet 2026 | Haute | Exemple WordPress de la section restauration | Une archive de fichiers seule ne suffit pas nécessairement ; demander un test de restauration | À revérifier si la page évolue |
| La fréquence de sauvegarde ne peut pas être fixée universellement ; elle dépend de l'activité et de la perte acceptable. | [WordPress Developer Resources — Backups](https://developer.wordpress.org/advanced-administration/security/backup/), la fréquence dépend de l'activité ; généralisation bornée par la méthode de risque | Recommandation éditoriale appuyée par un exemple primaire | WordPress pour la source ; principe à présenter comme recommandation, pas règle générale chiffrée | 23 juillet 2026 | Moyenne à haute | FAQ « une sauvegarde suffit-elle ? » | L'audit vérifie fraîcheur, contenu et restauration plutôt que de réciter un nombre magique | À revalider en P3 |
| Pour les extensions gérées par l'Afnic, les coordonnées du titulaire doivent rester à jour et le renouvellement passe par le bureau d'enregistrement. | [Afnic — Gérer son nom de domaine](https://www.afnic.fr/noms-de-domaine/tout-savoir/gerer-son-nom-de-domaine/), coordonnées, renouvellement et changement de bureau | Fait du registre | `.fr`, `.re`, `.yt`, `.pm`, `.wf`, `.tf` ; ne pas généraliser à `.com` | 23 juillet 2026 | Haute | Carte de preuve « domaine » avec périmètre visible | Vérifier titulaire, contact joignable, échéance, compte du bureau et contrôle DNS | À revérifier avant publication |
| Changer de prestataire web ne signifie pas nécessairement transférer le nom de domaine ni déplacer l'hébergement. | Déduction pratique à partir des rôles distincts exposés par l'[Afnic](https://www.afnic.fr/noms-de-domaine/tout-savoir/gerer-son-nom-de-domaine/) et des procédures séparées de Google | Déduction | Dépend du contrat, du fournisseur et de l'architecture | 23 juillet 2026 | Haute | FAQ et frontière avec le guide de passation | Évite une migration inutile pendant une simple reprise de maintenance | Stable, à revalider |
| Sur GitHub, le transfert d'un dépôt conserve notamment les webhooks, services, secrets et clés de déploiement associés. | [GitHub Docs — Transferring a repository](https://docs.github.com/en/enterprise-cloud@latest/repositories/creating-and-managing-repositories/transferring-a-repository), « What's transferred with a repository? » | Fait fournisseur | GitHub Enterprise Cloud/GitHub.com selon la page ; ne pas généraliser à GitLab, Bitbucket ou un ZIP | 23 juillet 2026 | Haute | Exemple dans la carte « code et déploiement » | Lors d'un transfert GitHub, revoir intégrations, collaborateurs et identifiants au lieu de supposer qu'ils disparaissent | Documentation vivante, à revérifier |
| Si l'hébergement change sans modifier les URL, Google recommande de copier et tester la nouvelle infrastructure, de changer les DNS, de surveiller ancien et nouvel hébergement, puis de désactiver l'ancien seulement lorsque les utilisateurs et Googlebot reçoivent le contenu du nouveau. | [Google Search Central — Modifier l'hébergement Web et le SEO](https://developers.google.com/search/docs/crawling-indexing/site-move-no-url-changes?hl=fr), étapes de migration et « Copier et tester le nouveau site » | Recommandation officielle du moteur | Migration d'hébergement sans changement d'URL ; hors simple reprise sans migration | 23 juillet 2026 | Haute | Encadré conditionnel « si l'hébergement doit aussi changer » | Ne pas confondre audit de reprise et bascule immédiate ; tester avant coupure | À revérifier avant publication |
| Si les URL changent, le travail SEO comprend le mappage des anciennes vers les nouvelles URL, les redirections, les tests et la surveillance. | [Google Search Central — Migrations de sites avec changement d'URL](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes?hl=fr), préparation du mappage et lancement | Recommandation officielle du moteur | Uniquement quand les URL changent | 23 juillet 2026 | Haute | Note de frontière SEO, pas cœur du guide | Une reprise de maintenance n'autorise pas à modifier les URL sans plan de migration distinct | À revérifier avant publication |
| Une inconnue n'est pas automatiquement une défaillance, mais elle ne peut pas servir de preuve positive. | Règle de méthode du guide, dérivée de la séparation entre preuve, test et information absente | Recommandation éditoriale | Tous les audits ; expliquer l'effet de chaque inconnue sur la décision | 23 juillet 2026 | Haute | Introduction à la grille de décision | Le lecteur ne dramatise pas un document manquant et ne signe pas non plus sur une supposition | Stable |

### Contradictions et données à ne pas publier

- Ne pas présenter l'audit comme une garantie de sécurité, d'absence de bug,
  d'absence de panne, de conformité totale ou de maintien du référencement.
- Ne pas écrire qu'Hagnéré Code est « indépendant », certifié, qualifié PAMS,
  PASSI, ISO 27001 ou partenaire d'un fournisseur sans preuve publique actuelle
  et périmètre précis.
- Ne pas écrire qu'un score technique prédit un pourcentage de panne ou un coût
  de refonte. Aucun corpus ni modèle validé ne le permet ici.
- Ne pas publier de délai ou de prix universel. La durée dépend au minimum du
  nombre d'environnements, des accès, des fonctions critiques, de la technologie
  et de l'état de la documentation.
- Ne pas déduire qu'un WordPress ancien doit être refait. L'âge, une version ou
  la présence d'extensions appellent une vérification, pas un verdict
  automatique.
- Ne pas écrire que tout mainteneur est nécessairement sous-traitant au sens du
  RGPD. Qualifier le rôle selon les traitements et accès effectifs.
- Ne pas prétendre qu'il faut transférer le domaine, changer d'hébergeur ou
  modifier les URL pour changer d'agence.
- Ne pas écrire qu'un `build` réussi prouve qu'une sauvegarde est restaurable ou
  que tout le site est maintenable. Ce sont des preuves différentes.
- Ne pas conclure qu'une absence de journaux prouve une intrusion. Elle réduit
  seulement la capacité à expliquer certains événements.
- Ne pas conclure que l'absence de dépôt de code prouve l'absence de propriété
  intellectuelle, ou inversement. C'est une question distincte de contrats et
  de droits.
- Ne pas inventer de client, de citation, de nombre de problèmes « trouvés en
  moyenne », de taux de réussite, d'économie ou de cas catastrophe.
- Ne pas écrire que la méthode est la seule, la première, la plus complète ou
  meilleure que toutes les autres.

### Calculs reproductibles

Aucun calcul économique n'est nécessaire pour répondre à la décision centrale.
Un score pondéré serait ici trompeur : une seule absence d'autorisation ou une
compromission active peut bloquer la reprise, tandis que plusieurs documents
non critiques peuvent seulement créer des réserves.

- **Nature du résultat :** verdict qualitatif et motivé, pas ROI.
- **Horizon et périodicité :** situation observée à la date de l'audit ; à
  réexaminer après toute migration, changement majeur ou nouvel incident.
- **Postes inclus une seule fois :** sans objet en P1.
- **Postes exclus ou inconnus :** prix, délai, coût d'une refonte et pertes
  évitées restent « à confirmer » selon le périmètre.

### Modèle de décision GO / GO sous réserves / STOP

Le verdict doit toujours nommer le **périmètre testé**. Un GO sur un site
vitrine et son formulaire ne couvre pas automatiquement une boutique, un
extranet ou un logiciel métier relié.

#### GO

Le guide pourra proposer un GO lorsque les éléments suivants sont prouvés dans
le périmètre convenu :

- l'entreprise ou une personne autorisée contrôle les comptes indispensables ;
- une copie cohérente a été obtenue ou reconstruite sur un espace isolé ;
- la restauration, l'installation ou la construction nécessaire a abouti ;
- les fonctions importantes nommées par le dirigeant ont été rejouées ;
- les accès de la nouvelle équipe peuvent être créés, limités, tracés et
  retirés selon le risque ;
- aucun blocage critique connu n'empêche une intervention réversible.

Le texte doit dire « la reprise peut commencer dans le périmètre testé », et
non « le site est sûr ».

#### GO sous réserves

Le guide pourra proposer un GO sous réserves si le site public reste stable et
si les inconnues ou défauts sont non critiques pour la première intervention,
à condition que chaque réserve indique :

- l'élément manquant ou le test échoué ;
- la conséquence concrète ;
- la personne qui doit agir ;
- la preuve qui lèvera la réserve ;
- une date ou une étape limite ;
- les actions interdites tant que la réserve subsiste.

Exemple : la maintenance corrective peut commencer sur une copie, mais aucune
bascule ne sera faite avant le test concluant du formulaire et la création
d'un compte de déploiement appartenant à l'entreprise.

#### STOP temporaire

Le guide doit recommander de suspendre l'engagement ou les changements risqués
si l'un des cas suivants est constaté :

- personne ne peut démontrer l'autorisation d'accéder ou de modifier le site ;
- une action destructive serait nécessaire alors qu'aucune copie récupérable
  n'est prouvée ;
- une compromission active est suspectée et exige une réponse à incident ;
- le seul test possible mettrait directement en danger le site public ou ses
  données ;
- un conflit juridique ou contractuel sérieux interdit de présumer les droits ;
- une fonction critique ne peut pas être testée et aucune mesure de protection
  provisoire n'est acceptable.

Le STOP doit orienter : prestataire sortant, hébergeur, spécialiste de réponse à
incident, délégué à la protection des données ou juriste selon la cause. Il ne
doit jamais servir de levier anxiogène pour vendre une refonte.

### Dossier de preuves attendu

Le futur guide doit proposer des cartes lisibles sur mobile. Chaque carte
contient : **question**, **preuve**, **test**, **inconnue**, **conséquence**.

| Zone | Preuve attendue du propriétaire | Test ou observation | Conséquence si elle manque |
| --- | --- | --- | --- |
| Nom de domaine et DNS | Titulaire ou compte autorisé, contact à jour, échéance, bureau d'enregistrement, possibilité de gérer les DNS | Vérification en lecture seule puis, si nécessaire et autorisé, procédure de changement préparée sans l'exécuter | Réserve forte ; STOP si une bascule exige de modifier le DNS sans personne autorisée |
| Hébergement | Compte appartenant à l'entreprise ou mandat clair, offre, échéance, localisation pertinente des données, moyen d'export | Obtenir une copie et identifier comment revenir en arrière | Réserve ; STOP avant migration ou suppression si aucune copie exploitable |
| Code et chaîne de publication | Dépôt ou source, historique utile, instructions de construction, compte de déploiement, dépendances externes | Construire ou installer une version sur une copie ; publier une modification inoffensive sur cet environnement | Reprise non prouvée pour les évolutions ; une maintenance très limitée peut rester possible sous réserves |
| Base de données et fichiers | Export cohérent, date, méthode, chiffrement ou protection appropriée | Restaurer sur un environnement isolé avec des données minimisées si possible | Une archive présente mais jamais restaurée n'est qu'une sauvegarde déclarée, pas une reprise prouvée |
| Sauvegardes | Contenu, fréquence adaptée à l'activité, rétention, emplacement distinct, responsable | Test de restauration daté | STOP avant action destructive si aucune récupération raisonnable n'est disponible |
| Fonctions importantes | Liste donnée par le dirigeant : formulaire, paiement, réservation, espace client, e-mail, téléchargement, etc. | Rejouer des scénarios avec comptes ou moyens de test ; vérifier la réception finale | GO limité ou réserve selon l'importance ; STOP si la fonction critique doit être mise en danger pour être testée |
| CMS, extensions et licences | Versions, extensions, thèmes, licences, comptes d'achat, échéances | Identifier compatibilités et mises à jour possibles sur la copie | Réserve chiffrable après test ; jamais une refonte automatique |
| Comptes et secrets | Liste des comptes humains et techniques, propriétaires, droits, seconde authentification si disponible, procédure de retrait | Créer un accès nominatif limité puis vérifier sa révocation | STOP avant de partager un compte personnel ou permanent non maîtrisé |
| Journaux et surveillance | Sources disponibles, durée de conservation, personnes alertées | Provoquer un événement de test non risqué et vérifier qu'il est visible | Réserve sur la capacité de diagnostic ; l'absence de journal ne prouve pas une attaque |
| Données personnelles | Fonctions qui collectent ou exposent des données, rôles, contrat, sous-traitants ultérieurs | Vérifier qui peut accéder, comment les accès sont ouverts et refermés, et comment un incident est notifié | Réserve ou STOP selon la sensibilité et l'accès ; avis spécialisé si la qualification est ambiguë |
| SEO lors d'un changement | Propriété Search Console si disponible, liste des URL, règles d'indexation, redirections et DNS | Seulement si l'hébergement ou les URL changent : tester copie, exploration, redirections et surveillance | Aucun chantier SEO supplémentaire pour une simple reprise sans migration ; plan distinct si URLs modifiées |
| Documentation et prestataire sortant | Architecture simple, contacts, contrats, licences, incidents connus, changements récents | Confronter le document au site réellement restauré | Une documentation absente crée une inconnue ; les tests peuvent parfois la lever sans dramatiser |

### Scénario illustratif fictif

> **Cas fictif, créé pour expliquer la méthode — ce n'est pas un client ni un
> résultat Hagnéré Code.**

Une PME de services confie son site vitrine à une nouvelle agence. Le dirigeant
contrôle le compte du nom de domaine et l'hébergement. Il possède une archive
récente, mais personne ne l'a restaurée. Le dépôt de code n'est pas encore
transmis et le formulaire envoie les demandes grâce à un compte de messagerie
géré par l'ancien prestataire.

Sur un espace isolé, la restauration de l'archive aboutit. Les pages s'affichent,
mais l'envoi du formulaire échoue car l'ancien identifiant de messagerie n'est
pas disponible. Le verdict n'est ni « tout va bien » ni « il faut refaire le
site » : **GO sous réserves**.

Les réserves sont concrètes : créer un compte d'envoi appartenant à
l'entreprise, rejouer un formulaire jusqu'à sa réception, obtenir ou
reconstituer la source nécessaire aux futures modifications, puis retirer les
anciens accès. Tant que le test du formulaire échoue, aucune bascule n'est
autorisée. Ce scénario devra rester court et clairement étiqueté en P2.

### Risques sécurité et données personnelles à traiter sans dramatisation

- Demander des preuves ne signifie pas demander des secrets dans un formulaire
  public. Le premier contact doit contenir seulement le contexte et les
  inconnues.
- Un accès de diagnostic doit être autorisé, nominatif si possible, limité au
  besoin et retiré après usage.
- Une copie de test ne doit pas devenir une duplication publique de données
  personnelles. Préférer des données fictives, minimisées ou autrement
  protégées selon le cas.
- Une alerte de sécurité ne doit pas être exploitée commercialement. Si une
  attaque active est plausible, séparer la réponse à incident de l'audit de
  reprise ordinaire.
- Le guide n'est ni un conseil juridique personnalisé ni un référentiel de
  conformité complet. Il doit inviter à consulter le délégué à la protection
  des données ou un conseil compétent lorsque le rôle du prestataire, la
  sensibilité des données ou le contrat sont incertains.

## 6. Empreinte éditoriale à ne pas reproduire

| Guide | Type d'ouverture | Progression | Dispositif récurrent | Type d'exemple | Place du CTA | Type de conclusion |
| --- | --- | --- | --- | --- | --- | --- |
| `/guides/reprendre-maintenance-site-autre-agence` | Risque de coupure pendant un changement de prestataire | Séparer les services, réunir les preuves, transférer progressivement | Inventaire de huit services et séquence de passation | Situations de transfert | Après la méthode | Choisir passation, audit, stabilisation ou refonte |
| `/guides/proprietaire-site-internet-code-source` | Doute sur ce qui appartient réellement à l'entreprise | Contrats, comptes, code, preuves et récupération | Distinction juridique/technique | Cas de droits et d'accès | Après l'autodiagnostic | Reprendre le contrôle sans affirmer un droit non prouvé |
| `/guides/dette-technique-cout-entreprise` | Coût métier invisible d'un système fragile | Symptômes, coût, priorités | Calcul ou mise en ordre économique | Conséquences opérationnelles | Après la priorisation | Décider quoi corriger |
| `/guides/site-internet-en-panne` | Incident déjà vécu | Sécuriser, diagnostiquer, restaurer, prévenir | Ordre d'urgence | Panne concrète | Après les gestes autonomes | Revenir à une situation stable |
| `/guides/cout-maintenance-site-internet` | Question budgétaire | Périmètres et niveaux de service | Comparaison d'offres | Exemples de prestations | Près de la demande de chiffrage | Choisir un contrat adapté |

Choix du nouveau guide :

```text
Tension ou question motrice : la nouvelle agence dit pouvoir reprendre le site, mais personne n'a encore prouvé qu'elle peut le restaurer, le tester et le modifier sans risquer les demandes clients
Type d'ouverture retenu et pourquoi : une signature imminente et trois preuves à exiger ; le dirigeant reconnaît immédiatement sa décision
Progression retenue et pourquoi : partir du contrôle, passer à la restauration puis aux fonctions métier, traiter les accès et finir par un verdict ; chaque étape change la décision
Artefact signature : dossier de reprise composé de cartes « preuve / test / inconnue / conséquence » et d'un mémo GO / GO sous réserves / STOP
Rythme/registre de voix : phrases directes, mots ordinaires, alternance question-réponse, aucune longue métaphore
Place naturelle du CTA : après la grille autonome, le scénario et les cas où l'audit externe n'est pas nécessaire
Forme de conclusion : une décision écrite avec prochaine action, responsable et preuve attendue
Au moins trois différences avec les guides voisins :
1. le guide est organisé par preuves à accepter et non par services à transférer ;
2. la conclusion n'est pas un plan de migration mais un verdict borné ;
3. le cas central montre qu'un défaut peut conduire à une réserve plutôt qu'à une refonte ;
4. le support principal est un dossier de preuves lisible par le dirigeant, sans score sur 100 ;
5. le CTA admet explicitement qu'un site simple et bien documenté peut ne pas nécessiter d'audit approfondi.
```

## 7. Plan annoté

| Section provisoire | Question résolue | Preuve ou exemple | Conséquence/décision | Format choisi |
| --- | --- | --- | --- | --- |
| Introduction — « Ne signez pas la maintenance avant ces trois réponses » | Pourquoi un site en ligne n'est-il pas encore une reprise prouvée ? | Contrôle des comptes, restauration d'une copie, test des fonctions importantes | Le lecteur sait quoi demander avant de signer sans réserve | Ouverture directe en moins de 150 mots puis trois cartes |
| 1. « Ce que l'audit vérifie — et ce qu'il ne promet pas » | Qu'est-ce qu'un audit technique de reprise ? | Définition bornée et distinction avec audit de sécurité, audit juridique, migration et contrat de maintenance | Le lecteur n'attend ni garantie absolue ni diagnostic illimité | Réponse courte + bloc « vérifie / ne garantit pas » |
| 2. « Commencez par prouver qui contrôle le site » | L'entreprise peut-elle autoriser les actions nécessaires ? | Domaine, DNS, hébergement, dépôt, comptes techniques et contrats | GO impossible pour une action que personne ne peut autoriser | Cartes de preuves, sans identifiants sensibles |
| 3. « Vérifiez qu'une copie peut être restaurée sans toucher au public » | La sauvegarde est-elle réellement récupérable ? | Exemple WordPress fichiers + base ; compte rendu de restauration | Transformer « nous avons des sauvegardes » en résultat testé | Séquence simple : obtenir, isoler, restaurer, noter |
| 4. « Rejouez les fonctions qui apportent réellement des demandes » | Le site restauré fait-il ce qui compte pour l'entreprise ? | Formulaire, paiement, réservation, espace client selon l'activité | Un affichage correct ne suffit pas si le résultat métier n'arrive pas | Liste choisie par le dirigeant + fiche de test |
| 5. « Donnez des accès sans abandonner le contrôle » | Comment laisser intervenir la nouvelle équipe ? | CNIL : accès adaptés, encadrés et refermés ; rôles conditionnels au titre du RGPD | La reprise commence avec des comptes maîtrisés, pas par l'envoi de mots de passe personnels | Règles pratiques et encadré données personnelles |
| 6. « Classez le résultat : GO, GO sous réserves ou STOP » | Comment décider sans score arbitraire ? | Critères et scénario fictif de formulaire défaillant | Une inconnue devient soit une condition, soit un blocage expliqué | Trois cartes verticales + scénario fictif |
| 7. « Transformez chaque réserve en condition du contrat » | Que faire après un GO sous réserves ? | Élément manquant, conséquence, responsable, preuve, échéance, action interdite | Le contrat ne masque pas un risque connu | Mini-modèle copiable |
| 8. « Une reprise ne vous oblige pas à déplacer le site » | Faut-il changer domaine, hébergeur ou URL ? | Afnic et procédures Google limitées aux migrations concernées | Éviter de cumuler reprise, migration et refonte sans nécessité | Comparaison : reprise seule / changement d'hébergement / changement d'URL |
| 9. « Préparez votre dossier de reprise en trente minutes » | Que peut faire le lecteur aujourd'hui ? | Grille des douze zones et état connu/inconnu | Le lecteur envoie une demande précise à ses prestataires | Checklist visible et copiable, sans promesse de durée d'audit |
| Conclusion — « La bonne décision tient dans une page » | Quel résultat conserver ? | Mémo de décision et prochaine preuve attendue | Signer, signer sous conditions ou suspendre sans dramatiser | Résumé + bon fit/mauvais fit + CTA prudent |
| FAQ | Quelles objections restent après le guide ? | Réponses directes et bornées | Lever les doutes sans répéter le corps | Accordéons ou sections courtes accessibles |
| Sources | Où vérifier les affirmations décisives ? | CNIL, ANSSI, OWASP, WordPress, Afnic, GitHub, Google | Transparence et fraîcheur | Liens visibles près des affirmations + sélection finale |

### FAQ planifiée

Chaque réponse doit donner son verdict dans la première phrase.

1. **Un audit est-il obligatoire avant chaque reprise de site ?**

   Non. Un site simple, bien documenté, restauré récemment et transmis avec des
   accès maîtrisés peut parfois être repris après des vérifications limitées ;
   la profondeur dépend du risque et des inconnues.
2. **Une nouvelle agence peut-elle auditer le site sans aucun accès ?**

   Elle peut observer la partie publique, mais elle ne peut pas prouver la
   restauration, le déploiement ni la maîtrise des comptes sans accès autorisé
   aux éléments concernés.
3. **Dois-je envoyer mes mots de passe de production pour obtenir un devis ?**

   Non. Le devis initial doit être préparé à partir du contexte et des preuves
   disponibles ; les accès nécessaires viennent ensuite par un canal adapté,
   avec une autorisation et une durée définies.
4. **Un code ancien impose-t-il une refonte ?**

   Non. Seuls les tests, les risques et les besoins métier permettent de
   distinguer maintenance, stabilisation ciblée et refonte.
5. **L'audit garantit-il que le site ne sera jamais piraté ou en panne ?**

   Non. Il produit des constats dans un périmètre et à une date donnés ; il ne
   supprime pas le risque futur.
6. **Quelle différence entre l'audit et le contrat de maintenance ?**

   L'audit décrit l'état et les conditions d'une reprise ; le contrat définit
   les interventions, responsabilités et niveaux de service futurs.
7. **Combien coûte et combien de temps dure un audit de reprise ?**

   Il n'existe pas de réponse universelle : le périmètre, les accès, les
   technologies et les fonctions à tester doivent être connus avant un
   chiffrage.
8. **Que faire si je n'ai pas le code source ?**

   Commencez par inventorier ce qui existe et relire les contrats ; n'essayez
   pas de contourner un accès, et faites examiner les droits si la remise du
   code est contestée.
9. **Un GO signifie-t-il qu'il faut déplacer l'hébergement ?**

   Non. Une reprise de maintenance peut se faire sans déplacer le domaine,
   l'hébergement ni les URL.
10. **Le RGPD s'applique-t-il à la maintenance du site ?**

    Les règles relatives aux données personnelles s'appliquent selon les
    traitements et les accès réels ; si le prestataire traite ces données pour
    le compte de l'entreprise, la relation de sous-traitance doit être encadrée.

### Maillage interne prévu

- ancre vers `/guides/reprendre-maintenance-site-autre-agence` :
  « organiser ensuite la passation service par service » ;
- ancre vers `/guides/proprietaire-site-internet-code-source` :
  « vérifier les contrats et le contrôle des actifs numériques » ;
- ancre vers `/guides/cout-maintenance-site-internet` :
  « comparer le contenu d'un contrat de maintenance » ;
- ancre vers `/guides/site-internet-en-panne` :
  « traiter une panne ou un incident déjà en cours » ;
- ancre vers `/services/audit-technique` :
  « faire examiner un périmètre technique plus large », seulement après
  l'action autonome ;
- CTA vers `/demarrer-un-projet`, à confirmer en P2 après vérification de la
  route et du texte réel de la page.

## 8. Ressource et conversion

```text
Une ressource est-elle naturellement nécessaire ? non pour un téléchargement séparé ; oui pour une grille visible, imprimable et copiable dans la page
Problème qu'elle résout après la lecture : transformer une inquiétude vague en demandes de preuves précises
Résultat autonome produit : un dossier de reprise avec état « prouvé / à tester / inconnu », conséquence et responsable pour chaque zone
Format éditable et format de consultation : tableau HTML accessible et modèle texte copiable ; aucun PDF ne doit être promis tant qu'il n'existe pas et n'a pas été contrôlé
Rubriques, champs ou matrices réellement livrés : zone, propriétaire du compte, preuve disponible, test réalisé, résultat, inconnue, conséquence, responsable, échéance, verdict
Exemple rempli : scénario fictif de la PME de services et de son formulaire, clairement étiqueté
Conclusion « ne pas investir » possible : oui ; un site simple avec contrôle prouvé, restauration récente et fonctions testées peut ne pas justifier un audit approfondi
Sources, hypothèses et limites visibles : liens primaires près des affirmations ; périmètre et date du verdict ; aucune garantie absolue
Données saisies et destination de ces données : aucune saisie côté site prévue en P1 ; le modèle doit pouvoir être copié localement par le lecteur
Processus de génération reproductible : sans objet tant qu'aucun fichier téléchargeable n'est décidé
Journal de QA : à ouvrir seulement si P2 crée une ressource
Limites connues et niveau de revue humaine : grille générale, à adapter aux fonctions et risques du site ; revue humaine obligatoire avant publication
Mode de maintenance : contenu éditorial à revoir lorsque les sources primaires ou les services internes changent
Test du fichier ou outil : sans objet en P1
Bon fit Hagnéré Code : site important pour les demandes, ventes ou opérations de l'entreprise ; état technique incertain ; changement de mainteneur imminent ; besoin d'un verdict documenté
Mauvais fit : attaque active ; litige de propriété ; demande de test d'intrusion exhaustif ; ou site très simple déjà transmis avec preuves suffisantes
Action non commerciale : compléter la grille et demander les preuves manquantes à l'ancien et au nouveau prestataire
CTA principal et résultat après clic : décrire le site et les inconnues pour savoir si une passation simple suffit ou si un audit borné doit être chiffré ; aucun mot de passe demandé dans le formulaire public
```

### CTA prudent proposé pour P2

> **Savoir si votre site peut être repris simplement, sous conditions, ou pas
> encore**
>
> Décrivez le site, ce que vous contrôlez déjà et ce qui manque. Le premier
> échange sert à distinguer une passation simple d'un audit borné. N'envoyez
> aucun mot de passe dans le formulaire.

Cette formulation doit être confrontée au formulaire réellement disponible en
P2. Ne pas promettre un diagnostic gratuit, un délai de réponse ou un livrable
qui n'existe pas.

## 9. Rapports de sortie des quatre passes

### Rapport P1 — Recherche

```text
PASSE 1 TERMINÉE
Slug : audit-technique-avant-reprendre-site
Lecteur et phrase réelle : dirigeant ou indépendant changeant de mainteneur ; « Une nouvelle agence veut reprendre mon site, mais comment savoir si elle pourra vraiment le maintenir sans tout casser ? »
Décision : GO, GO sous réserves nommées, ou STOP temporaire dans un périmètre écrit
Angle et forme dominante : trois preuves avant signature, puis dossier de reprise « preuve / test / inconnue / conséquence »
Pages proches et différence : reprendre-maintenance traite la passation ; le service audit vend un examen plus large ; ce guide traite la preuve préalable et le verdict propriétaire
Sources décisives : CNIL sous-traitance et maintenance, ANSSI externalisation/administration, OWASP WSTG, WordPress backups, Afnic domaine, GitHub transfert, Google migrations
Incertitudes exclues : volumes SEO, prix, délai, score de risque, statistiques clients, garantie de sécurité, nécessité automatique d'une refonte ou migration
Action autonome et CTA possible : compléter la grille ; demander un examen borné seulement si les preuves ne suffisent pas
Plan : contrôle -> restauration -> fonctions métier -> accès et données -> verdict -> conditions du contrat -> frontière migration -> dossier autonome
Snapshot : ce dossier uniquement ; manifeste différé à l'orchestrateur sur instruction explicite
```

### Rapport P2 — Rédaction et intégration

```text
P2 TERMINÉE LE 24 JUILLET 2026.
Article rédigé et intégré ; rapport détaillé et snapshot en section 12.
```

### Rapport P3 — Contre-audit indépendant

```text
P3 TERMINÉE LE 24 JUILLET 2026.
Contre-audits final_audit_marketing, anti_ia_final et seo_tech_final consignés
en section 12, y compris les réserves RGPD et les limites des sources.
```

### Rapport P4 — Plume humaine et contrôle final

```text
P4 TERMINÉE LE 24 JUILLET 2026.
Plume, rendu, liens, route, tests, build et indexabilité contrôlés ; rapport
détaillé et réserve sur l'indexation Google en section 12.
```

## 10. Historique P1 — revue préparatoire du 23 juillet 2026

> Cette section conserve la photographie prise avant rédaction. Elle n’est pas
> le verdict courant : P2, P3 et P4 ont depuis été terminées et la validation
> de publication figure en section 12.

### Scorecard prévisionnelle historique de P1

| Axe | Note 0-2 | Preuve dans le dossier P1 | Correction éventuelle |
| --- | ---: | --- | --- |
| Intention | 2 | Lecteur, situation et requête bornés | Confirmer la demande avec les données SEO disponibles avant P2 |
| Décision | 2 | GO/GO sous réserves/STOP avec limites | Tester la compréhension auprès d'un dirigeant |
| Pédagogie | 2 | Ouverture directe et vocabulaire ordinaire | Vérifier le texte réellement rédigé, pas seulement le plan |
| Profondeur | 2 | Douze zones de preuves et critères de verdict | Couper toute zone qui deviendrait un inventaire technique |
| Preuve | 2 | Sources primaires et périmètres documentés | Revalider chaque URL et chaque phrase en P3 |
| Comparaison | 2 | Grille de concurrence et frontières internes | Rendre les trois verdicts lisibles sur mobile |
| Originalité | 2 | Dossier de reprise sans score magique | Contrôler que P2 ne reproduit pas la structure des guides voisins |
| Style | 1 | Contrat de langage et phrases réécrites | La plume finale n'existe pas encore |
| Conversion | 2 | Action autonome, bon fit, mauvais fit, CTA prudent | Vérifier la route et le formulaire réels |
| SEO/produit | 1 | Intention, vocabulaire, SERP et maillage cadrés | Métadonnées, schémas, rendu et intégration restent à faire |

**Total prévisionnel P1 : 18/20.** Ce total historique ne doit pas être repris
comme score final de l’article ; la note justifiée après P4 figure en section
12.

### Test lecteur non technique

```text
État historique P1 — test par une personne réelle : non
Profil du lecteur : à recruter — dirigeant ou indépendant qui dépend de son site sans gérer sa technique
Ce qu'il a compris comme réponse : à mesurer après P2
Décision qu'il prendrait : à mesurer après P2
Endroit où il a commencé à survoler : à mesurer après P2
Passage crédible ou trop commercial : à mesurer après P2
Termes ou passages bloquants : à mesurer après P2
Questions encore sans réponse : à mesurer après P2
Corrections appliquées : aucune avant test réel
```

### Contre-audit indépendant

```text
État historique P1 — auteur du contre-audit : non désigné à cette date
Indépendant de la rédaction : à garantir en P3
Réserves sur les sources et calculs : sources revues en P1 ; aucun calcul ; revalidation obligatoire
Réserves sur la clarté et le plan : le dossier de preuves pourrait devenir trop long ; P2 doit conserver la décision avant l'inventaire
Réserves sur la conversion : ne pas présenter l'audit payant comme passage obligé
Corrections ou justification : à compléter en P3
État au 23 juillet 2026 : P1 terminée — porte validée
```

### Vérifications historiques P1

- [x] le projet des 150 premiers mots passe le contrat de langage humain ;
- [x] les H2 provisoires sont compréhensibles hors contexte ;
- [x] cinq phrases abstraites ont passé le test sujet, action, résultat ;
- [x] aucun mur de lexique ne précède la réponse ;
- [ ] tableaux ou cartes testés à 390 px sans réponse masquée — P2 ;
- [x] FAQ planifiée avec réponses dès la première phrase et CTA formulé comme
      bénéfice concret ;
- [x] faits et fraîcheur revérifiés au 23 juillet 2026 ;
- [x] aucun calcul n'est utilisé pour fabriquer le verdict ;
- [x] le seul cas prévu est fictif et étiqueté ;
- [x] chaque obligation décisive planifiée dispose d'une source proche et d'un
      périmètre explicite ;
- [x] aucun incident extrême ne dramatise artificiellement la décision ;
- [ ] aucune note d'audit visible dans l'article — état P1, texte alors non
      rédigé ;
- [x] ouverture, progression et conclusion planifiées diffèrent des guides
      voisins ;
- [x] absence de ressource téléchargeable justifiée ; grille visible préférée ;
- [ ] CTA et route réellement disponibles et cohérents — à vérifier en P2 ;
- [ ] metadata, données structurées, registre, maillage et ancres cohérents —
      P2 à P4 ;
- [ ] TypeScript, ESLint, tests et build requis passés — non applicables à
      l’état P1 ;
- [ ] rendu observé aux largeurs requises — non disponible à l’état P1 ;
- [x] aucune publication, aucun déploiement et aucune indexation ne sont
      déclarés.

### Claims interdits — garde-fous conservés après P4

1. « Cet audit garantit que votre site est sécurisé / sans bug / toujours
   disponible. »
2. « Nous sommes certifiés, qualifiés PAMS/PASSI ou totalement indépendants »
   sans preuve publique actuelle et périmètre.
3. « Un score inférieur à X impose une refonte » ou toute statistique non
   démontrée.
4. « Un vieux WordPress est forcément dangereux ou irréparable. »
5. « Tout prestataire de maintenance est sous-traitant RGPD. »
6. « Changer d'agence impose de changer de domaine, d'hébergement ou d'URL. »
7. « Le build passe, donc la sauvegarde et la reprise sont validées. »
8. « Il n'y a pas de journaux, donc le site a été piraté. »
9. « Il n'y a pas de dépôt de code, donc vous n'êtes pas propriétaire. »
10. « Nous trouvons toujours X anomalies » ou tout résultat client inventé.
11. « L'audit dure X jours / coûte X euros » sans périmètre et estimation
    explicités.
12. « Cet audit protège votre référencement » ; il peut réduire certains
    risques d'une migration correctement préparée, jamais garantir un
    classement ou une indexation.

## 12. Validation finale P2, P3 et P4 — 24 juillet 2026

### Rapport P2 — Rédaction et intégration

- Article complet intégré sur
  `/guides/audit-technique-avant-reprendre-site`, avec ouverture destinée au
  dirigeant, preuves de contrôle/restauration/test, sources primaires, cas
  fictif, limites juridiques et de sécurité, FAQ, maillage et CTA unique.
- Métadonnées, données structurées `Article` et `BreadcrumbList`, image sociale
  dédiée et inscription au registre des guides contrôlées.
- Snapshot :
  `docs/research/manifests/audit-technique-avant-reprendre-site-p2.sha256`.

### Rapport P3 — Contre-audits et corrections

- `final_audit_marketing` : contre-audit indépendant des sources, de la portée
  des vérifications, des limites sécurité/RGPD et de la pédagogie dirigeant.
- `anti_ia_final` : passe de plume humaine, suppression des formulations
  mécaniques et vérification de la réponse dans l'ouverture.
- `seo_tech_final` : contrôle indépendant de l'intégration SEO et technique.
- Les verdicts GO, GO sous réserves et STOP restent limités aux éléments
  réellement testés ; aucun P0 ni P1 ne reste.
- Snapshot :
  `docs/research/manifests/audit-technique-avant-reprendre-site-p3.sha256`.

### Rapport P4 — Contrôle final du lot

- 55 tests ciblés, `check:seo` 228, suite générale 453, TypeScript, ESLint et
  `diff-check` : validés.
- Build : 159 pages générées.
- Audit d'artefact : 143 URLs, 126 liens, 143 pages, 101 temps de lecture et
  274 blocs JSON-LD contrôlés.
- Navigateur réel : 10 routes × 5 largeurs = 50 contrôles, thèmes clair et
  sombre compris.
- Images sociales : 10/10 au format 1200 × 630.
- Snapshot P4 :
  `docs/research/manifests/audit-technique-avant-reprendre-site-p4.sha256`.

### Verdict

**Score final : 19/20.** Le fond, la pédagogie, les sources, les limites, la
conversion et l'intégration sont validés. Un point reste volontairement retiré
car aucun lecteur humain réel indépendant n'a participé au test final.

Statut actuel : publiable — validation éditoriale déléguée

Décision de publication : autorisée explicitement par le commanditaire

Test réalisé par une personne réelle : non

Réserve SEO : la page est techniquement indexable ; indexable ne signifie pas
indexée par Google, et aucune indexation effective ni position n'est promise.
