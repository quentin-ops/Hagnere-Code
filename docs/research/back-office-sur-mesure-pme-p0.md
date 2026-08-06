# Gel P0 — Back-office sur mesure pour PME

Date du gel : 5 août 2026
Slug réservé : `back-office-sur-mesure-pme`
Roadmap : guide n° 7
Orchestrateur : `PRIMARY_ORCHESTRATOR`
Branche : `codex/back-office-sur-mesure-pme`
Worktree :
`/Users/quentinhagnere/Developpement/Hagnere-Code-wt-back-office-sur-mesure-pme`
Base exacte : `ffab025f5385ae4bb0289f54baf5cd1a55594a26` (`origin/main`,
snapshot public du guide n° 6)
État : P0 validé, entrée obligatoire de la passe 1

> Ce gel n’est ni une passe rédactionnelle, ni un verdict favorable au
> sur-mesure, ni une autorisation de publication. Il fixe la question à
> résoudre, les sorties honnêtes, les sources, les inconnues et le périmètre de
> fichiers. Chaque passe doit conserver les STOP et peut durcir le guide ; elle
> ne peut pas transformer une donnée inconnue en zéro, en seuil implicite ou en
> promesse commerciale.

## 1. Assainissement de l’ancien état

Le 5 août 2026, le slug ne possède aucune route source dans `src/app/guides/`.
Son URL publique répond `308` vers
`/services/outils-internes-sur-mesure`. Cette redirection reste en place
pendant P1 à P4.

L’ancien dossier et ses quatre manifestes ont été supprimés du nouveau
worktree avant P1. Ils restent récupérables dans Git, mais sont interdits comme
texte, plan, verdict ou preuve. Le manifeste P4 historique était
matériellement non rejouable :

- `page.tsx` et `opengraph-image.tsx` annoncés mais absents ;
- `guide-human-language.test.ts` annoncé mais absent ;
- empreintes de `src/lib/guides.ts` et d’un autre guide incompatibles avec la
  base actuelle.

Cette archive peut seulement signaler des thèmes à revérifier. Aucune phrase,
aucun exemple, aucun chiffre et aucune structure ne doit être repris par
inertie.

## 2. Mission éditoriale unique

Permettre à une direction de PME, un responsable des opérations ou un
responsable métier de répondre à deux questions liées mais distinctes :

1. de quels écrans l’équipe a-t-elle réellement besoin pour accomplir,
   contrôler et réparer son travail interne ;
2. ces besoins justifient-ils de conserver l’existant, d’acheter un standard,
   d’assembler des briques ou de développer un back-office dédié ?

La réponse courte à défendre dès le héros est la suivante :

> Un back-office dédié ne devient pas pertinent parce qu’un tableur est
> désagréable ou qu’un tableau de bord manque. Il devient une option lorsque
> des tâches récurrentes et suffisamment stables exigent des actions, des
> droits, des données, des preuves, des exceptions et des reprises qu’un outil
> existant ou standard ne couvre pas correctement. Le premier livrable utile
> est un contrat d’écran testable. Si le besoin, les volumes, les
> responsabilités ou le coût complet restent inconnus, la décision honnête est
> de différer.

Le guide doit autoriser cinq sorties sans favoriser la quatrième :

1. conserver et mieux configurer l’existant ;
2. adopter un module ou logiciel standard ;
3. assembler légèrement plusieurs briques existantes ;
4. cadrer un back-office dédié ;
5. différer ou abandonner le projet.

## 3. Intention SEO, lecteur et décision après lecture

- Requête principale : `back-office sur mesure PME`.
- Requêtes secondaires à intégrer seulement si elles servent le lecteur :
  `créer un back-office sur mesure`, `logiciel métier PME`, `outil interne sur
mesure`, `interface de gestion sur mesure`, `cahier des charges back-office`,
  `écrans logiciel métier`, `application de gestion interne PME`.
- H1 de travail : `Back-office sur mesure pour PME : quels écrans prévoir, et
faut-il vraiment le développer ?`
- Lecteurs : dirigeant ou dirigeante de PME, responsable opérations,
  administration/finance, responsable métier, DSI ou prestataire chargé du
  cadrage.
- Moment : un besoin d’outil est pressenti, mais le périmètre d’écran et le bon
  niveau de solution ne sont pas encore démontrés.
- Décision finale : une des cinq sorties, accompagnée des preuves présentes,
  manquantes et bloquantes.
- Action autonome : remplir le contrat d’un écran réel, rejouer deux échecs,
  confronter une solution standard au même contrat et nommer le propriétaire.

Le guide n’est pas un tutoriel de développement, un catalogue de technologies,
un comparatif Airtable/Notion/Power Apps, un audit ROI complet, un catalogue de
services ou un argumentaire automatique en faveur d’Hagnéré Code.

## 4. Définitions à rendre explicites

Le lecteur doit pouvoir distinguer sans jargon :

- tableau de bord : informe et aide à surveiller ;
- back-office métier : permet à des personnes autorisées de traiter, décider,
  corriger et prouver ;
- portail client : expose des actions à une personne externe ;
- console technique : sert à l’exploitation ou au support informatique ;
- CRM ou ERP : produit standard couvrant un ensemble de fonctions ;
- application métier : outil centré sur un processus ou une activité propre.

Un écran qui affiche des indicateurs n’est pas, à lui seul, un poste de travail
opérationnel. Cette distinction est un cadre éditorial du guide, pas une règle
de droit.

## 5. Frontières et cannibalisation

Le guide n° 7 ne doit pas refaire :

- `automatiser-processus-metier-pme` : déclencheurs, automatisations,
  intégrations et reprise d’incident ;
- `calculer-roi-application-metier` : calcul complet des bénéfices, du TCO et
  des scénarios économiques ;
- `signes-besoin-logiciel-metier` : diagnostic général de besoin ;
- `power-apps-ou-application-sur-mesure` : capacité et économie de Power Apps ;
- `airtable-notion-ou-application-metier` : limites de produits et charge
  organisationnelle ;
- les futurs guides Zapier/Make, CRM et ERP : choix détaillé de ces catégories ;
- les guides spécialisés sécurité, droits et recette : méthodes exhaustives de
  ces disciplines.

Sa propriété éditoriale exclusive est le **contrat d’écran** :
`rôle → action → données → preuve → exception → reprise`, appliqué au même
besoin quelle que soit l’option de solution.

Trois différences minimales avec les contenus voisins et l’archive :

1. le livrable central est un ensemble de contrats d’écran, pas le récit d’un
   dossier commercial ;
2. opérations de masse, succès partiels, conflits, modes dégradés et reprise
   sont de premier rang ;
3. droits, support, supervision et sortie sont traités au même niveau que la
   liste, le formulaire et la fiche.

## 6. Corpus primaire à rouvrir en P1 puis en P2

Chaque source doit être ouverte, datée, reliée à une affirmation précise et
accompagnée de sa limite. Les pages de prestataires servent uniquement à lire
la SERP, jamais à prouver un prix, un délai, un gain ou une bonne pratique.

### 6.1 Conception et travail réel

- DesignGouv, `Concevoir un service public numérique de qualité` :
  <https://design.numerique.gouv.fr/bien-concevoir/>
  - utile pour besoin avant solution, tests avec de vrais usagers, itération et
    rôles ;
  - portée : service public numérique ; toute transposition à une PME doit être
    annoncée comme méthodologique.
- DesignGouv, `Mémo design` :
  <https://design.numerique.gouv.fr/outils/memo-design/>
  - utile pour tableaux, libellés, erreurs et exemples de saisie ;
  - même limite de périmètre public.
- Anact, `Boîte à outils QVCT numérique` :
  <https://www.anact.fr/sites/default/files/2024-10/boite-a-outils-qvct-numerique.pdf>
- Anact, `Quelques clés pour réussir votre projet numérique` :
  <https://www.anact.fr/sites/default/files/2023-12/FSE%2520Nume%25CC%2581rique.pdf>
  - utiles pour observer le travail réel, éviter le technocentrisme et associer
    les personnes concernées ;
  - portée méthodologique et terrains bornés, jamais statistique nationale ni
    obligation générale.

### 6.2 Données, droits, traces et continuité

- CNIL, minimisation :
  <https://www.cnil.fr/fr/minimiser-les-donnees-collectees>
- CNIL, habilitations :
  <https://www.cnil.fr/fr/securite-gerer-les-habilitations>
- CNIL, journalisation :
  <https://www.cnil.fr/fr/securite-tracer-les-operations>
- CNIL, sauvegardes :
  <https://www.cnil.fr/fr/securite-sauvegarder>
- CNIL, continuité et reprise :
  <https://www.cnil.fr/fr/securite-prevoir-la-continuite-et-la-reprise-dactivite>
- CNIL, API :
  <https://www.cnil.fr/fr/securite-api-interfaces-de-programmation-applicative>
- CNIL, contrôle de l’activité des personnes employées, page du 9 juillet
  2026 :
  <https://www.cnil.fr/fr/controle-de-lactivite-des-personnes-employees>
  - source récente et juridique à rouvrir impérativement en P2 ;
  - nécessité, proportionnalité, information et instances représentatives
    doivent conserver leurs conditions exactes ;
  - la page borne notamment le CSE aux entreprises privées de 50 salariés et
    plus dans le passage concerné. Ne jamais généraliser cette phrase.
- RGPD officiel EUR-Lex, notamment articles 5, 25, 28 et 32 :
  <https://eur-lex.europa.eu/eli/reg/2016/679/oj?locale=FR>

### 6.3 Ingénierie et accessibilité

- OWASP Authorization Cheat Sheet :
  <https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html>
- OWASP Logging Cheat Sheet :
  <https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html>
  - recommandations d’ingénierie, pas textes légaux français ni preuve de
    conformité.
- RGAA, critères et tests :
  <https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/>
  - référence de conception et de test ; l’applicabilité juridique dépend de
    l’organisme et doit être qualifiée ;
  - version à revalider avant publication, RGAA 5 étant annoncé pour fin 2026.

### 6.4 Contrat, logiciel et réversibilité

- CPI L131-3 :
  <https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000006278958/2026-02-28>
  - les droits cédés et leur domaine d’exploitation doivent être délimités ;
  - ne pas en déduire une propriété automatique du client.
- CPI L113-9 :
  <https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000039279818>
  - portée limitée aux logiciels et documentations créés par des employés dans
    l’exercice de leurs fonctions ou d’après les instructions de l’employeur.

Exports, documentation, délais, support et réversibilité sont une checklist
contractuelle à négocier. Ils ne sont pas présentés comme obligations
universelles.

## 7. Registre des affirmations et statut attendu

P1 doit tenir un registre au moins aussi précis que celui-ci :

| Famille d’affirmation                                         | Statut à conserver                                            |
| ------------------------------------------------------------- | ------------------------------------------------------------- |
| Commencer par le besoin et tester avec de vrais utilisateurs  | Source DesignGouv, transposition PME signalée                 |
| Observer le travail réel et associer les personnes concernées | Source Anact, portée méthodologique                           |
| Un écran sert une tâche et un résultat                        | Cadre éditorial/inférence                                     |
| Confronter le standard au même contrat d’écran                | Méthode propre au guide                                       |
| Limiter les accès aux données nécessaires                     | CNIL/RGPD, contexte conservé                                  |
| Gérer arrivée, mobilité, départ et droits temporaires         | Recommandation CNIL                                           |
| Refuser par défaut et tester les autorisations                | Recommandation OWASP, non règle juridique française           |
| Journaliser des opérations pertinentes et proportionnées      | CNIL, limites et finalité conservées                          |
| Conservation de traces entre six mois et un an                | Recommandation CNIL avec exceptions, à revalider en P2        |
| Ne pas détourner des traces vers la surveillance              | CNIL, contexte professionnel exact                            |
| Minimisation dès la conception et par défaut                  | RGPD articles 5 et 25                                         |
| Encadrer un prestataire qui traite des données                | RGPD article 28, qualification réelle requise                 |
| Sécurité adaptée au risque                                    | RGPD article 32, aucune conformité promise                    |
| Prévoir mode dégradé, reprise et retour normal                | Recommandations CNIL                                          |
| Tester la restauration                                        | Recommandation CNIL                                           |
| Navigation clavier, libellés et erreurs accessibles           | Qualité de conception ; obligation à qualifier                |
| Idempotence, conflit et réparation partielle                  | Exigences d’ingénierie, pas loi                               |
| Cession de droits délimitée                                   | CPI L131-3, aucune propriété automatique                      |
| Logiciel d’un salarié                                         | CPI L113-9, périmètre salarié seulement                       |
| Prix, délai, gain ou client de marché                         | Interdit sans preuve primaire et périmètre comparable         |
| Donnée Hagnéré Code publique                                  | Marketing interne volatil, à vérifier mais hors preuve neutre |
| ROI ou recommandation finale                                  | Impossible si entrées ou TCO critiques inconnus               |

## 8. Artefact signature obligatoire : le contrat d’écran

Chaque écran étudié doit exposer au minimum :

1. tâche et résultat attendu ;
2. déclencheur d’entrée ;
3. rôle autorisé ;
4. actions disponibles ;
5. données strictement nécessaires ;
6. source de vérité de chaque donnée ;
7. preuve ou événement utile à conserver ;
8. erreur ou exception et message attendu ;
9. reprise, annulation ou compensation ;
10. responsable en cas de blocage ;
11. comportement si un tiers est indisponible ;
12. critère de recette observable.

Une case inconnue reste `à définir`. Elle ne vaut ni autorisation ni refus.

## 9. Bibliothèque minimale d’écrans à éprouver

### File de travail

Attribution, réattribution, filtres utiles, éléments incomplets, état vide,
surcharge, priorité métier et visibilité par rôle.

### Fiche de détail

Identité et source de vérité, données manquantes ou périmées, actions
autorisées, modification concurrente, pièces, prochain responsable.

### Création et modification

Champs nécessaires, brouillon, doublon, validation, abandon sans perte,
erreurs compréhensibles et accessibles.

### Action de masse

Portée de la sélection, aperçu, autorisation, confirmation proportionnée,
succès partiel, rapport des échecs, réparation ou annulation lorsqu’elle est
réaliste.

### Exception et reprise

Motif, état réellement atteint, responsable, nouvelle tentative sans double
traitement, mode manuel temporaire et retour contrôlé au mode normal.

### Historique et preuve

Événement utile, auteur ou système, date/heure, objet, motif si nécessaire,
accès et conservation proportionnés, aucune donnée sensible superflue.

### Administration des droits

Rôle, action, périmètre de données, arrivée, mobilité, départ, délégation,
droits temporaires, urgence encadrée, revue et séparation de l’administration.

### Supervision et support

Panne d’intégration, traitements en attente, dernière exécution, responsable,
procédure, restauration, reprise, export et éléments de diagnostic.

## 10. Matrice rôle–action–données–preuve

Le guide doit rendre manipulable une matrice qui croise :

- rôles : opérationnel, responsable, administration/finance, direction,
  support/IT, système tiers ;
- actions : voir, créer, modifier, valider, annuler, exporter, traiter en masse,
  administrer ;
- données : identité, métier, pièces, finance, traces, secrets techniques ;
- preuves : changement d’état, décision, export, droit, erreur, reprise.

L’équivalent HTML doit contenir toute l’information. La couleur seule ne doit
jamais porter le sens.

## 11. Situations difficiles obligatoires

Le contenu, l’atelier et les tests doivent couvrir des cas contradictoires :

- processus instable ou rarement exécuté ;
- module standard qui couvre déjà le vrai besoin ;
- succès partiel d’une action de masse ;
- doublon détecté après création ;
- deux personnes modifiant simultanément une fiche ;
- écriture locale réussie mais logiciel tiers en échec ;
- relance risquant deux commandes, deux écritures ou deux paiements ;
- propriétaire habituel absent ;
- compte administrateur utilisé pour une opération ordinaire ;
- donnée sensible visible au mauvais rôle ;
- export dépassant le périmètre autorisé ;
- journal de preuve dérivant vers la surveillance individuelle ;
- intégration indisponible plusieurs heures ;
- sauvegarde jamais restaurée ;
- changement de prestataire ou arrêt du service ;
- clavier, zoom, petit écran et thème sombre ;
- incident actif où la continuité prime sur une refonte.

## 12. Données demandées et calcul borné

Pour chaque tâche, demander : période observée, nombre de cas, temps actif,
attente, reprises, erreurs, rôles, actions, données et sources, sensibilité,
volumes, actions de masse, exceptions, dépendances, tolérance d’indisponibilité,
propriétaires et couverture testée d’une option standard.

Les unités sont toujours visibles. Une donnée inconnue reste inconnue.

Le guide peut calculer uniquement :

```text
charge active = nombre de cas × minutes actives par cas
charge de reprise = nombre de cas en reprise × minutes de reprise
charge totale observée = charge active + charge de reprise
```

Règles :

- ne pas doubler la reprise si elle est déjà incluse ;
- séparer temps actif et attente ;
- ne pas convertir chaque minute en économie ;
- ne pas inventer coût horaire, adoption, gain, prix moyen ou seuil ;
- ne pas calculer de rentabilité sans horizon et TCO documentés ;
- renvoyer au guide ROI pour le calcul complet.

Les coûts ne sont que recueillis par familles : cadrage, configuration ou
développement, licences, intégrations, migration, recette, formation,
hébergement, support, maintenance, sécurité, évolutions, sortie et
réversibilité.

## 13. Contrat de contenu P1

Le brouillon doit au minimum fournir :

1. une réponse directe et nuancée dès les premiers paragraphes ;
2. les définitions et les cinq issues possibles ;
3. une méthode pour observer une tâche réelle ;
4. les huit contrats d’écran ;
5. la matrice rôle–action–données–preuve ;
6. les cas difficiles et les modes de réparation ;
7. la comparaison des cinq issues avec le même contrat ;
8. le calcul borné et le renvoi au ROI ;
9. la sécurité, les données, les droits et les traces sans promesse de
   conformité ;
10. le prototype et la recette sur données fictives ;
11. les propriétaires après livraison et la sortie ;
12. un tableau final preuves présentes/manquantes/bloquantes ;
13. un plan d’action utilisable le lundi suivant ;
14. des sources visibles avec portée et date d’accès ;
15. une FAQ de questions résiduelles, non répétitive ;
16. un CTA unique et honnête.

Les exemples sont explicitement fictifs. Aucun client, devis, écran de
production, résultat ou retour d’expérience Hagnéré Code ne peut être inventé.

## 14. FAQ minimale à traiter

1. Qu’est-ce qu’un back-office dans une PME ?
2. Quelle différence avec un tableau de bord, un CRM ou un ERP ?
3. Quels écrans minimums prévoir ?
4. Comment savoir si un logiciel standard suffit ?
5. Airtable, Notion ou Power Apps peuvent-ils convenir ?
6. Comment cadrer les droits autrement qu’avec utilisateur/administrateur ?
7. Faut-il conserver l’historique de toutes les actions ?
8. Comment réparer une action de masse partiellement échouée ?
9. Comment tester avant de développer ?
10. Comment estimer le coût sans inventer un prix moyen ?
11. Qui maintient l’outil après livraison ?
12. Un journal d’activité peut-il devenir un outil de surveillance ?

## 15. Médias

Créer trois SVG originaux du même système visuel :

- `article-back-office-contrat-ecran-16x9.svg` ;
- `article-back-office-contrat-ecran-4x3.svg` ;
- `article-back-office-contrat-ecran-1x1.svg`.

Concept : une file mène vers une fiche, une action, une exception et une
reprise ; autour figurent rôle, données, preuve et support. Aucun logo produit,
client fictif, chiffre marketing ni pseudo-capture de production.

Tout visuel de scénario doit porter la mention visible `Maquette — données
fictives`. Les SVG doivent être valides, lisibles en petit, accessibles et
avoir un équivalent textuel complet.

## 16. CTA et réalité après le clic

- Contexte de service : `/services/outils-internes-sur-mesure`.
- CTA unique : `/demarrer-un-projet`.
- Le texte doit expliquer que le clic ouvre un brief guidé en six étapes,
  sans devis automatique et sans engagement.
- Toute promesse de délai actuellement visible sur la page de destination est
  volatile, à revalider à la publication et à ne pas présenter comme garantie
  contractuelle dans le guide.
- Le premier échange peut conclure qu’il faut garder, configurer, acheter,
  tester ou différer plutôt que développer.

## 17. Brouillon, SEO et données structurées

Pendant P1 à P4 :

- route locale `noindex, nofollow` ;
- absence du hub, sitemap, `llms.txt` et de tout maillage entrant partagé ;
- aucune date de publication ou de modification inventée ;
- canonical exact vers le futur slug ;
- données structurées limitées à `Article` et `BreadcrumbList`, fidèles au
  contenu visible et sans date pendant le brouillon ;
- FAQ visible sans `FAQPage` ;
- un seul H1, titre/H1/`Article.headline` identiques ;
- OG 1200 × 630 et trois images éditoriales ;
- sources visibles et liens externes sûrs ;
- CTA principal unique ;
- aucun téléchargement XLS, XLSX, CSV ou artefact trompeur.

La redirection historique reste intacte pendant les quatre passes. Son retrait,
le registre global, le hub, sitemap, LLM, le maillage, les dates et
l’indexabilité appartiennent uniquement à l’intégration sous mutex.

## 18. Fichiers autorisés pendant P1 à P4

Les agents de passe peuvent créer ou modifier uniquement :

- `docs/research/back-office-sur-mesure-pme.md` ;
- `docs/research/manifests/back-office-sur-mesure-pme-p1.sha256`, puis P2, P3
  et P4 au moment de leur passe respective ;
- `src/app/guides/back-office-sur-mesure-pme/page.tsx` ;
- `src/app/guides/back-office-sur-mesure-pme/guide-data.ts` ;
- `src/app/guides/back-office-sur-mesure-pme/opengraph-image.tsx` ;
- `src/app/guides/back-office-sur-mesure-pme/back-office-decision-model.ts` ;
- `src/app/guides/back-office-sur-mesure-pme/back-office-decision-model.test.ts` ;
- `src/app/guides/back-office-sur-mesure-pme/back-office-decision-workbench.tsx` ;
- `src/app/guides/back-office-sur-mesure-pme/back-office-decision-workbench.test.tsx` ;
- `src/app/guides/back-office-sur-mesure-pme/content-quality.test.ts` ;
- les trois SVG nommés en section 15 sous
  `public/guides/back-office-sur-mesure-pme/`.

Le présent P0 est immuable pour les agents de passe.

Interdictions :

- aucun fichier partagé, notamment `src/lib/guides.ts`, hub, sitemap,
  `llms.txt`, redirections, composants communs, styles globaux, package ou
  lockfile ;
- aucun fichier d’un autre guide ;
- aucun commit, push, merge, rebase, déploiement ou publication ;
- aucune mise en forme globale ;
- aucune modification du registre central par l’agent de passe.

## 19. Gates successifs

- P1 : création neuve, recherche, contenu, code, tests et manifeste par un
  premier agent ; validation racine obligatoire avant P2.
- P2 : vérification factuelle, calculs, droit, sécurité, contre-cas et sources
  par un deuxième agent distinct ; validation racine obligatoire avant P3.
- P3 : polish rédactionnel, clarté, rythme, transitions, répétitions, jargon et
  lecture humaine par un troisième agent distinct ; validation racine avant P4.
- P4 : anti-patterns IA, cohérence, rendu, médias, SEO, schémas, accessibilité,
  responsive, impression et qualité finale par un quatrième agent distinct.
- Q : contre-audit transversal en lecture seule par un cinquième agent distinct.

À chaque gate, l’orchestrateur relit le delta, rejoue le manifeste, les tests
pertinents et le rendu proportionné. Toute correction invalide le verdict du
snapshot affecté.

Seuils avant intégration :

- zéro P0 et zéro P1 ;
- score global au moins 90/100 ;
- chaque axe critique au moins 80 % ;
- manifeste exact et rejouable ;
- build et contrôles statiques verts ;
- navigateur réel aux largeurs 320, 360, 390, 430, 640, 768, 1024, 1280,
  1440 et 1600 px ;
- clavier, zoom 200 %, clair/sombre, overflow, console, réseau, axe, SVG, OG et
  PDF contrôlés ;
- décision et calculs reproductibles ;
- aucune date, publication ou preuve publique inventée.

## 20. STOP non négociables

- besoin seulement déclaré, jamais observé ;
- fréquence, charge ou unités inconnues ;
- processus encore instable ;
- option standard non testée ;
- propriétaire métier ou support absent ;
- droits, données sensibles ou export non qualifiés ;
- dépendance critique sans mode dégradé ;
- TCO ou horizon inconnus ;
- traces susceptibles de devenir de la surveillance ;
- propriété ou réversibilité contractuelle non relue ;
- prix, délai, gain, client ou expérience non prouvé ;
- date de publication sans snapshot réellement déployé ;
- URL publique, découverte, indexation, classement ou conversion sans preuve
  distincte.
