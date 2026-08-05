# Gel P0 — Airtable, Notion ou application métier

Date du gel : 4 août 2026  
Slug réservé : `airtable-notion-ou-application-metier`  
Orchestrateur : `PRIMARY_ORCHESTRATOR`  
État : P0 validé, entrée obligatoire de la passe 1

> Ce gel n’est ni une passe rédactionnelle, ni une autorisation de publication.
> Il fixe l’intention, les inconnues, les frontières et les fichiers que la
> passe 1 peut modifier. Tout prix, quota, fonctionnalité ou engagement de
> service reste volatil et doit être rouvert sur sa source primaire en P1 puis
> revérifié indépendamment en P2.

## 1. Mission éditoriale unique

Permettre à un dirigeant, responsable métier, DSI ou responsable des
opérations de décider jusqu’où pousser Airtable ou Notion avant qu’un processus
critique ne justifie une application métier, sans partir du principe que le
sur-mesure est la meilleure issue.

La réponse doit distinguer cinq sorties :

1. conserver l’outil et documenter les conditions qui le rendent encore sûr ;
2. renforcer gouvernance, modèle de données, droits, automatisations et
   exploitation ;
3. isoler une contrainte dans une architecture hybride ;
4. sortir progressivement un ou plusieurs modules vers une application dédiée ;
5. laisser la décision en attente (`STOP`) tant qu’une preuve critique manque.

Le guide doit traiter séparément Airtable et Notion. Airtable ne doit pas être
réduit à « un Excel en ligne » ; Notion ne doit pas être présenté comme une base
de données transactionnelle générique. Une préférence d’équipe ou une interface
jugée agréable ne suffit pas à trancher.

## 2. Intention, lecteur et décision après lecture

- Requête principale : `Airtable, Notion ou application métier`.
- Variantes à qualifier par la recherche : `Airtable ou Notion`, `limites
Airtable`, `limites Notion entreprise`, `remplacer Airtable`, `remplacer
Notion`, `Airtable application métier`, `Notion application métier`,
  `alternative Airtable sur mesure`, `migrer Airtable`, `migrer Notion`.
- Lecteur : PME ou ETI française dont un processus opérationnel est déjà porté
  par Airtable ou Notion, ou qui hésite à y construire un nouveau système.
- Situation déclenchante : utilisateurs plus nombreux, règles plus fines,
  automatisations silencieuses, données dupliquées, droits difficiles à
  expliquer, intégrations fragiles, incidents, coûts ou sortie mal compris.
- Décision attendue : choisir l’outil encore défendable, nommer les preuves à
  recueillir, identifier la première frontière à extraire et préparer un plan
  de sortie réversible.
- Action autonome : exécuter un test de charge organisationnelle sur un vrai
  processus et produire un inventaire de sortie partageable.
- CTA : décrire le processus à diagnostiquer sur `/demarrer-un-projet` ; le
  premier échange peut conclure qu’il faut conserver ou renforcer l’existant.

## 3. Frontières et cannibalisation

Le guide ne doit pas dupliquer :

- `power-apps-ou-application-sur-mesure` : limites, licences et TCO propres à
  Microsoft Power Platform ;
- `signes-besoin-logiciel-metier` : prise de conscience générale ;
- `calculer-roi-application-metier` : méthode générique de ROI ;
- `transformer-excel-en-application` s’il revient au corpus : sortie d’Excel et
  des classeurs partagés ;
- `zapier-make-ou-developpement-sur-mesure` : arbitrage sur les chaînes
  d’automatisation ;
- `back-office-sur-mesure-pme` : conception d’un back-office dédié ;
- les anciens comparatifs génériques `no-code ou sur mesure` : catégories sans
  contrat produit ni test de sortie.

La spécificité obligatoire porte sur les différences Airtable/Notion et sur la
charge organisationnelle réelle : structure des données, relations, droits,
identités, concurrence d’écriture, volume, automatisations, API, erreurs,
mobile et mode dégradé, audit, propriété, support, résidence, export et reprise.

## 4. Historique public et dates

Recherche Git du 4 août 2026 :

- le slug apparaît dans la roadmap depuis le commit
  `c42fb1b9cc7b4bbbf524a086de43cb5baee61e89` du 20 juillet 2026 ;
- aucun fichier de route ni artefact public dédié n’existe dans ce commit ou
  dans les autres commits inspectés ;
- la présence dans une roadmap ne prouve ni déploiement, ni publication, ni
  indexation.

Conséquences :

- `datePublished` reste `<instant réel de première publication>` ;
- `dateModified` reste `<instant réel de la version publiée>` ;
- aucun `Article.datePublished` ne doit être inventé pendant le brouillon ;
- le guide reste privé ou `noindex, nofollow` tant que l’intégration et le BAT
  public ne sont pas terminés ;
- publication, découverte, indexation, classement et conversion restent des
  états distincts.

## 5. Corpus primaire initial à rouvrir

Ces pages ne sont que le point de départ. P1 doit les ouvrir, dater, lire et
relier chaque fait visible à son passage utile. P2 doit refaire le contrôle.

### 5.1 Airtable

- Plans et limites : <https://support.airtable.com/docs/airtable-plans>
- Paramètres d’espace et limites :
  <https://support.airtable.com/docs/workspace-settings-page-overview>
- API Web :
  <https://support.airtable.com/getting-started-with-airtables-web-api>
- Limites d’appels API :
  <https://support.airtable.com/managing-api-call-limits-in-airtable>
- Résidence des données :
  <https://support.airtable.com/docs/data-residency-at-airtable>
- Documentation des automatisations, permissions, interfaces, sync,
  sauvegardes et export : retrouver les pages officielles actuelles depuis le
  centre d’aide, pas depuis un blog d’intégrateur.

Constats provisoires relevés le 4 août 2026, à ne publier qu’après relecture :

- les quotas de lignes, stockage, historique, automatisations et appels API
  varient selon le plan ;
- la limite API documentée est distincte d’un plafond mensuel éventuel ;
- la résidence européenne documentée est liée à une offre Enterprise Scale et
  ne signifie pas que tous les traitements, métadonnées ou sous-traitants sont
  nécessairement localisés en France ;
- Airtable documente lui-même des effets possibles de latence pour certaines
  opérations en région non américaine.

### 5.2 Notion

- Index de documentation API : <https://developers.notion.com/llms.txt>
- Introduction API : <https://developers.notion.com/reference/intro>
- Limites de requêtes :
  <https://developers.notion.com/reference/request-limits>
- Codes d’erreur : <https://developers.notion.com/reference/status-codes>
- Plans, permissions, teamspaces, bases de données, formulaires,
  automatisations, export, historique, journal d’audit, sécurité, sous-traitants
  et résidence : utiliser exclusivement les pages officielles `notion.com/help`
  et les documents contractuels ou sécurité Notion à jour.

Constats provisoires relevés le 4 août 2026, à ne publier qu’après relecture :

- l’API Notion documente une limite moyenne et exige de traiter les réponses
  `429` avec `Retry-After` ;
- des limites de taille et de profondeur s’appliquent aux requêtes et propriétés ;
- ces limites d’API ne prouvent pas à elles seules qu’un processus métier doit
  migrer ; elles doivent être rapportées aux appels, files, erreurs et reprises
  du cas réel.

### 5.3 Données, sécurité et sous-traitance

- CNIL, gestion de la sous-traitance :
  <https://www.cnil.fr/fr/securite-gerer-la-sous-traitance>
- CNIL, guide de la sécurité des données personnelles 2024 :
  <https://www.cnil.fr/sites/default/files/2024-03/cnil_guide_securite_personnelle_2024.pdf>
- RGPD, article 28 :
  <https://eur-lex.europa.eu/eli/reg/2016/679/oj?locale=fr>

Le guide ne doit pas promettre conformité, souveraineté ou sécurité par le seul
choix d’un produit ou d’une région. Il doit faire vérifier contrat, rôles,
sous-traitants, transferts, export, suppression, sauvegarde, continuité et
responsabilités effectives.

## 6. Artefact décisionnel obligatoire

Créer un diagnostic local, sans stockage ni envoi réseau, qui demande au
lecteur de qualifier au minimum :

1. criticité et coût d’un arrêt ;
2. nombre de rôles et finesse des droits ;
3. modèle de données, relations et règles d’intégrité ;
4. simultanéité, conflits et concurrence d’écriture ;
5. volume actuel, croissance et archivage ;
6. automatisations, dépendances et gestion des erreurs ;
7. intégrations, API, quotas et reprises ;
8. mobile, hors-ligne ou fonctionnement dégradé ;
9. audit, traçabilité, accès et conformité ;
10. propriété, administration et départ des créateurs ;
11. export des données, pièces, schémas, règles et historique ;
12. support, restauration, test et continuité.

Règles du moteur :

- réponses `oui`, `non`, `à vérifier` ou valeurs factuelles selon la question ;
- aucune moyenne opaque ne remplace les conditions bloquantes ;
- une inconnue critique produit `STOP`, jamais zéro ;
- le résultat peut recommander Airtable, Notion, un renforcement, un hybride ou
  une sortie progressive ;
- les raisons et preuves manquantes restent visibles et exportables à l’écran ;
- aucune expérience client Hagnéré Code n’est inventée ;
- les scénarios illustratifs sont explicitement fictifs.

Le guide doit aussi fournir une grille de sortie : objets à inventorier,
propriétaires, exports, pièces jointes, identités, automatisations,
intégrations, règles, historiques, recette, coexistence, bascule et retour
arrière. Aucun XLS, XLSX ou CSV ne sera proposé au téléchargement.

## 7. Contrat de contenu P1

Le guide doit au minimum couvrir :

1. réponse directe dans les premiers paragraphes ;
2. différence entre Airtable, Notion et application métier ;
3. cas où conserver chaque outil est rationnel ;
4. test de charge organisationnelle ;
5. droits, données, automatisations, API et exploitation ;
6. prix et quotas uniquement s’ils sont datés, sourcés et contextualisés ;
7. sécurité, RGPD, résidence et sous-traitants sans promesse de conformité ;
8. cas fictifs contradictoires, dont un cas où rester sur l’outil est préférable ;
9. architecture hybride et extraction d’un seul module ;
10. grille de sortie, coexistence, recette et retour arrière ;
11. actions réalisables dès lundi ;
12. sources visibles, limites, FAQ et CTA honnête.

La FAQ doit répondre aux vraies questions résiduelles et rester visible sans
`FAQPage`. Les seules données structurées finales autorisées sont `Article` et
`BreadcrumbList`, fidèles au contenu visible.

## 8. Empreinte éditoriale

Le guide reprend le gabarit premium et les composants partagés, mais pas la
progression narrative du guide Power Apps. Son artefact signature est un
« test de charge organisationnelle » qui commence par une journée de travail
réelle, puis remonte vers les preuves techniques et contractuelles.

Différences obligatoires avec le guide #5 :

- ouverture par un processus qui fonctionne encore mais que personne n’ose
  modifier, pas par une préférence de plateforme ;
- comparaison asymétrique Airtable/Notion/application, pas quatre TCO ;
- sortie construite objet par objet et propriétaire par propriétaire ;
- cas fictifs centrés sur exploitation, erreurs et relève ;
- conclusion sous forme de décision et premier test, pas de verdict de marque.

## 9. Fichiers autorisés pendant P1 à P4

Les agents éditoriaux peuvent créer ou modifier uniquement :

- `docs/research/airtable-notion-ou-application-metier.md` ;
- `docs/research/manifests/airtable-notion-ou-application-metier-p1.sha256`
  puis les manifestes P2, P3 et P4 de même préfixe ;
- `src/app/guides/airtable-notion-ou-application-metier/page.tsx` ;
- `src/app/guides/airtable-notion-ou-application-metier/guide-data.ts`, limité
  aux métadonnées privées et au graphe JSON-LD fidèle du brouillon, sans date
  de publication inventée ;
- `src/app/guides/airtable-notion-ou-application-metier/opengraph-image.tsx` ;
- `src/app/guides/airtable-notion-ou-application-metier/airtable-notion-decision-model.ts` ;
- `src/app/guides/airtable-notion-ou-application-metier/airtable-notion-decision-model.test.ts` ;
- `src/app/guides/airtable-notion-ou-application-metier/airtable-notion-decision-workbench.tsx` ;
- `src/app/guides/airtable-notion-ou-application-metier/airtable-notion-decision-workbench.test.tsx` ;
- `src/app/guides/airtable-notion-ou-application-metier/content-quality.test.ts` ;
- trois illustrations éditoriales dédiées dans
  `public/guides/airtable-notion-ou-application-metier/` aux ratios 16:9, 4:3
  et 1:1.

Interdictions pendant les quatre passes :

- aucun fichier partagé (`src/lib/guides.ts`, hub, sitemap, `llms.txt`,
  redirections, composants communs, package, lockfile) ;
- aucun commit, push, merge, déploiement ou publication ;
- aucune suppression ou reprise d’un fichier d’un autre guide ;
- aucune modification du gel P0 par un agent de passe.

Les raccordements partagés seront décidés sous `integration.lock` après P4 et
contre-audit indépendant.

## 10. Gates

- quatre agents distincts pour P1, P2, P3 et P4 ;
- validation orchestrateur du snapshot et du manifeste avant la passe suivante ;
- toute correction invalide le verdict affecté et impose un nouveau contrôle ;
- après P4 : contrôle transversal par un cinquième agent distinct ;
- zéro P0/P1, score global au moins 90/100, chaque axe au moins 80 % ;
- build, navigateur, accessibilité, structured data, PDF et preuve publique
  requis avant le statut `PUBLIE`.
