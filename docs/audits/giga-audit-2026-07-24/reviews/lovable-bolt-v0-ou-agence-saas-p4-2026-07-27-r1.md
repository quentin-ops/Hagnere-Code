# Contre-audit P4 R1 — `lovable-bolt-v0-ou-agence-saas`

Date : **27 juillet 2026**  
Révision : **R1**  
Périmètre : guide, recherche internationale, moteur de décision, interface,
tests, build local, rendu navigateur et impression

## 1. Verdict exécutif

```text
Score du snapshot antérieur : 70/100
Score R1 final après contre-audits froids : 98/100
P0 ouverts : 0
P1 ouverts : 0
P2 ouvert : 1
Décision : GO premium méthodologique local, sans classement expérimental
```

Le P2 conservé est substantiel mais honnête : Hagnéré Code n’a pas exécuté le
même SaaS trois fois dans chacun des trois outils. Le guide fournit le brief,
les critères, les preuves et le modèle économique permettant ce futur banc
d’essai ; il ne prétend pas posséder les résultats.

Cette note mesure la profondeur, la pédagogie, la traçabilité et la robustesse
du snapshot local. Elle ne promet ni première position Google, ni
publication, ni déploiement, ni indexation.

## 2. Progression vérifiable

| Mesure | Snapshot antérieur | Snapshot R1 |
|---|---:|---:|
| Score éditorial froid | 70/100 | 98/100 final |
| Audit UX indépendant | 68/100 | refonte puis contre-audit froid rejoué |
| Audit technique-économie | 56/100 | exigences intégrées et testées |
| Mots visibles hors outil | environ 2 600 | 5 623 |
| Temps de lecture déclaré | 14 min | 28 min |
| H2 | 8 | 13 |
| Verdict par profil | absent | 6 situations |
| Responsabilités comparables | principe narratif | 14 lignes par option |
| Preuves | 8 cartes statiques | 12 preuves datées par option |
| TCO | absent | 12, 36 et 60 mois |
| Issues possibles | builder ou agence | reporter, seul, revue, construction responsable |
| Export autonome | absent | copie, JSON local réimportable et impression A4 |
| Limite expérimentale | discrète | section entière, sans faux vainqueur |

## 3. Réponse éditoriale finale

Le lecteur reçoit désormais :

- une réponse en une phrase dès l’ouverture ;
- six verdicts conditionnels selon son profil et son risque ;
- le biais commercial d’Hagnéré Code explicitement déclaré ;
- la différence entre démonstration et exploitation ;
- une matrice actuelle Lovable, Bolt, v0 et agence ;
- les contradictions officielles Lovable et Bolt ;
- un brief commun fictif Alba/Noro ;
- douze portes de preuve ;
- une décomposition d’une mission d’agence ;
- un calcul de coût économique à 12, 36 et 60 mois ;
- deux scénarios chiffrés entièrement fictifs ;
- un dossier local à remplir ;
- trois cas décisionnels ;
- une section expliquant précisément le benchmark non exécuté ;
- des sources primaires datées et une prochaine date de revue.

La page conserve les quatre sorties utiles :

1. prototype fictif autonome ;
2. prototype ou pilote avec revue indépendante ;
3. construction portée par une équipe responsable ;
4. report du développement pour retourner valider le problème.

## 4. Fermeture des défauts factuels

### Lovable

La page ne décrit plus toutes les applications comme React/Vite. Elle distingue
les nouvelles applications TanStack Start avec SSR créées depuis le
13 mai 2026 des anciennes applications React/Vite.

La portabilité est décomposée : frontend et code ne valent pas migration
automatique de l’authentification, du stockage, des fonctions, du schéma, des
données et des identités.

### Bolt

La FAQ ne répond plus « oui » sans condition à l’usage commercial. Elle expose
la tension entre :

- la documentation Bolt affirmant que le code peut être exploité
  commercialement ;
- les conditions StackBlitz réservant l’usage commercial des Services à
  certains plans professionnels.

La décision exige le plan, la date et une confirmation écrite applicable au
compte.

La page sépare également :

- téléchargement du projet ;
- export de tables ;
- historique des versions du code ;
- restauration de la base.

### v0

Le guide utilise les URL actuelles `v0.app`. Il précise que le dépôt GitHub
devient la source de vérité du code, tandis que déploiements, domaines,
variables et intégrations restent des objets du projet à inventorier.

### Méthode

NIST SSDF est cité comme cadre de développement sécurisé, jamais comme
certification. SWE-WebDevBench sert d’inspiration méthodologique avec ses
limites d’échantillon et d’affiliation.

## 5. Moteur et dossier local

Le moteur `saas-build-path-decision-r1-2026-07-27` gère :

- onze entrées de contexte ;
- quatre recommandations minimales ;
- deux options indépendantes ;
- quatorze lignes de responsabilités par option ;
- douze preuves par option ;
- onze postes de coût ;
- trois horizons TCO ;
- les statuts `inconnu`, `inclus`, `exclu` et `N/A` justifié ;
- les statuts de preuve non vérifiée, réussie, échouée et non applicable.

Une preuve réussie exige :

- une date non future ;
- un environnement ;
- un propriétaire ;
- un relecteur distinct ;
- une référence exploitable.

Les règles `N/A` sont liées au contexte. L’isolation entre clients ne peut pas
devenir non applicable lorsque plusieurs organisations sont déclarées. Les
preuves de paiement, export, identité ou restauration ne disparaissent pas
arbitrairement.

Le TCO reste `ND` lorsque :

- une responsabilité manque ;
- une preuve manque ou échoue ;
- une valeur de coût manque, est négative ou non finie ;
- l’option ne peut pas être comparée au même résultat.

Le dossier ne sauvegarde ni ne transmet les réponses. Il propose un exemple
fictif, une copie dans le presse-papiers, un export JSON local réimportable,
une impression et une réinitialisation confirmée. L’import est limité à
512 Ko, refuse les versions et valeurs hors schéma, reconstruit une structure
sur liste blanche et borne les chaînes et les montants avant de modifier
l’interface.

## 6. Défauts découverts par le premier contre-audit R1

Le premier contrôle du snapshot réécrit a refusé la note proposée de 94/100 et
l’a ramenée à **87/100, P0 0, P1 4, P2 4**. Quatre failles reproductibles ont
donc été corrigées avant le gel :

1. un contexte entièrement vide pouvait coexister avec une option qualifiée et
   un TCO numérique ;
2. une date de décision future permettait de rendre des preuves futures
   valides ;
3. la copie et l’impression omettaient la preuve commerciale, les onze
   hypothèses brutes et le motif précis d’une preuve invalide ;
4. la date de consultation des conditions StackBlitz était présentée comme
   leur date de publication.

Les nouveaux garde-fous :

- intègrent le diagnostic de contexte dans la qualification ;
- maintiennent aussi la recommandation « ne construisez pas » hors
  comparaison chiffrée ;
- exigent outil, plan, version, devis ou snapshot ;
- exigent une référence pour chaque livrable déclaré ;
- refusent décision et tests futurs par rapport à la date du contrôle ;
- exportent les onze valeurs brutes avant les agrégats ;
- ajoutent `INVALIDE` et la raison exacte à chaque preuve concernée ;
- indiquent que les CGU StackBlitz ont été consultées le 27 juillet 2026 et
  affichent une dernière mise à jour au 10 janvier 2024.

Le contrôle incrémental de l’import/export a ensuite découvert deux derniers
cas limites avant gel :

1. un texte de 20 001 caractères pouvait être exporté sous 512 Ko puis refusé
   par l’importeur ;
2. un coût fini proche de la limite numérique JavaScript pouvait faire
   déborder les agrégats vers `Infinity`.

La fermeture finale borne les 79 champs texte rendus à 500 caractères, refuse
à l’export tout dossier que l’importeur ne pourrait pas relire, expose le motif
exact au lieu d’accuser le navigateur et plafonne chaque saisie TCO à
10¹². Le contre-audit indépendant rejoué attribue **98/100, P0 0, P1 0,
P2 1**. Le seul P2 restant est le banc d’essai empirique non exécuté.

## 7. Contrôles automatisés

```text
Tests dédiés finaux : 65/65
Fichiers de tests dédiés : 4/4
Tests SEO globaux : 543/544
TypeScript : conforme via le build
ESLint ciblé : conforme
git diff --check ciblé : conforme
Build Next.js de production : réussi
Pages statiques générées : 159/159
```

L’unique test global en échec ne vise pas ce guide. Il s’agit d’une empreinte
P4 périmée de `prioriser-fonctionnalites-mvp-saas` sur le fichier partagé
`src/lib/guides.ts`. Le défaut est conservé visible ; aucun manifeste n’a été
réécrit pour masquer l’écart.

Le vérificateur post-build conserve deux écarts de temps de lecture sur :

- `crm-sur-mesure-ou-hubspot` ;
- `seo-local-pme`.

Ces défauts globaux existaient hors du périmètre du guide traité.

## 8. Artefact et liens

Le build contient la route statique :

```text
/guides/lovable-bolt-v0-ou-agence-saas
```

Le rendu local a répondu :

```text
HTTP : 200
HTML statique de build : 589 442 octets
Mots visibles hors dossier : 5 623
Temps de lecture : 28 min
H2 : 13
```

Les **26 URL externes uniques** présentes dans la page ont été suivies avec
redirections et ont toutes répondu HTTP 200 le 27 juillet 2026. Les sept routes
internes référencées directement ou dans les liens associés existent dans
l’artefact de build.

## 9. BAT navigateur

La page a été contrôlée dans le navigateur intégré aux largeurs CSS :

```text
320, 360, 390, 430, 640, 768, 1024, 1280, 1440 et 1600 px
```

À chaque largeur :

- largeur du document égale à celle de la fenêtre ;
- aucun débordement horizontal ;
- navigation et hero lisibles ;
- tables contenues ;
- outil utilisable.

Le parcours interactif a confirmé :

- chargement de l’exemple fictif ;
- recommandation « Prototype ou pilote avec revue indépendante » ;
- maintien des résultats à `ND · option non qualifiée` ;
- ouverture d’une boîte de confirmation pour la remise à zéro ;
- annulation sans perte des données ;
- restitution du focus au bouton d’origine après annulation ;
- effacement confirmé puis restitution du focus ;
- bascule claire/sombre fonctionnelle ;
- absence d’erreur dans la console.

L’export et la réimportation JSON ont ensuite été couverts dans le test de
composant et le moteur pur. Cette couche a été ajoutée après le parcours
navigateur ; elle n’est donc pas présentée comme un clic navigateur manuel.

## 10. Impression

Le dossier a été imprimé depuis la route locale puis rendu en images.

```text
Format : A4
Pages : 2
PDF balisé : oui
Chiffrement : non
JavaScript embarqué : non
```

La version finale ajoute une règle A4 explicite, resserre l’interligne du
rapport et conserve les titres avec leur contenu. Le clic appelle réellement
`window.print()` dans le test de composant. Aucun texte tronqué, chevauchement
ou contrôle interactif parasite n’a été observé sur les deux pages rendues en
images.

## 11. P2 conservé et chemin vers le plafond mondial

Le guide devient un protocole de décision premium, pas un banc d’essai
empirique. Pour fermer le dernier P2, une future révision devra réellement :

1. figer le brief Alba/Noro ;
2. ouvrir des comptes et plans datés ;
3. exécuter trois répétitions par outil ;
4. appliquer le même temps et le même nombre de corrections ;
5. conserver prompts, crédits, temps humain et versions ;
6. publier les preuves autorisées ;
7. faire contre-tester build, accès, restauration et reprise ;
8. publier les résultats négatifs et l’incertitude.

Jusqu’à cette exécution, aucune note fournisseur et aucun classement absolu ne
doivent être ajoutés.

## 12. État de publication

**GO local pour revue humaine finale.**

Le snapshot a été modifié, testé, construit, servi et imprimé localement.
Aucun commit, push, déploiement, contrôle de l’URL publique ou constat
d’indexation Google n’a été effectué dans cette boucle.
