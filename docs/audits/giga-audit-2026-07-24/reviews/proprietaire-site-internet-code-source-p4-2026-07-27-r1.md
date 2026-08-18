# Contre-audit P4 final — `proprietaire-site-internet-code-source`

Date : **27 juillet 2026**  
Révision : **R1**  
Périmètre : guide, moteur de dossier, export TXT, impression A4, métadonnées,
build local de production et rendu navigateur

## 1. Verdict exécutif

**Verdict P4 local : GO pour revue humaine et juridique.**

```text
Score éditorial et pédagogique final : 98/100
Score contre-audit technique : 99/100
Score contre-audit UX : 99/100
Score de fermeture factuelle : 100/100
P0 ouverts : 0
P1 ouverts : 0
P2 ouverts : 0
Décision : snapshot local premium, prêt pour revue humaine
```

Le score mesure la profondeur, la pédagogie, la traçabilité et la robustesse du
snapshot local. Il ne garantit ni première position Google, ni publication, ni
déploiement, ni indexation.

## 2. Progression vérifiable

| Mesure | Snapshot audité le 24/07 | Snapshot R1 du 27/07 |
|---|---:|---:|
| Score indépendant | 82/100 | 98/100 |
| P1 / P2 | 11 / 8 | 0 / 0 |
| Mots visibles | 2 495 | 7 627 à 7 779 selon le rendu responsive |
| Source React | 861 lignes | 2 077 lignes |
| Accès testables | checklist statique | 14 lignes probantes |
| Preuves d’exécution | aucune matrice complète | 8 |
| Questions contractuelles | dispersées | 6 |
| TCO | absent | 3 voies × 12/36/60 mois |
| Export | absent | copie, TXT et impression A4 |

Le rapport initial reste l’état historique du snapshot du 24 juillet. Le
présent rapport clôt le snapshot courant sans réécrire rétroactivement cet
audit.

## 3. Livrables du guide final

### Corps éditorial

Le guide répond désormais successivement à :

- ce que l’entreprise contrôle réellement ;
- la différence entre droits, titulaire, accès et portabilité ;
- les limites de la remise du code ;
- le droit français en langage courant ;
- la différence entre transmission du domaine et transfert de registrar ;
- les cas Wix, Shopify, Webflow, HubSpot et Squarespace ;
- la chaîne salariés, freelances, sous-traitants et IA ;
- la preuve de continuité technique ;
- quatre scénarios de sortie ;
- l’entiercement et ses limites ;
- les méthodes officielles britanniques, américaines et australiennes.

La page cite les sources primaires ou officielles, affiche leur date de
consultation et rappelle que les règles étrangères sont méthodologiques.

### Dossier local

Le composant `site-ownership-exit-r3-2026-07-27` fournit :

- 14 accès ;
- 8 preuves d’exécution ;
- 6 questions contractuelles ;
- 3 voies de sortie ;
- des résultats à 12, 36 et 60 mois ;
- un exemple entièrement fictif ;
- une synthèse priorisée par gravité ;
- une copie locale, un TXT et une impression A4 ;
- aucune sauvegarde automatique ni transmission de données.

Les garde-fous refusent les références factices, dates futures, preuves trop
anciennes, `N/A` critiques, contrôles hors entreprise et devis juridiques nuls
ou non datés.

## 4. Boucle de contre-audit successive

### Axe technique

Le premier verdict était **95/100**, avec deux P2 :

- agrégats économiques affichés à tort en `€ HT` alors qu’ils incluaient temps
  interne et marge ;
- absence de preuve build/navigateur sur le snapshot exact.

Les unités ont été corrigées, l’export écrit désormais le temps interne en
`€ /j`, et la preuve build/navigateur a été renouvelée. Verdict final de
l’auditeur : **99/100, P0/P1/P2 = 0**.

### Axe UX et accessibilité

Le premier verdict était **97/100**, puis la boucle a détecté et fermé :

- statuts techniques bruts et doublons dans les points critiques ;
- focus perdu lors de la confirmation d’effacement ;
- contrôles critiques `unknown` ou `not-supported` non nommés ;
- dangers cachés après cinq simples incomplétudes ;
- compteurs ne montrant ni preuves en échec ni réponses négatives ;
- libellé abrégé `nd` remplacé par « non documenté ».

Verdict final de l’auditeur : **99/100, P0/P1/P2 = 0**.

### Axe factuel

Le premier verdict était **96/100**, avec :

- un P1 sur les conditions et limites exactes du transfert/export Webflow ;
- un P2 sur la checklist du DPA.

Le guide précise maintenant :

- les configurations Webflow réinitialisées ;
- les conditions de transfert du Site plan et des domaines ;
- l’exception Ecommerce et la réactivation du checkout ;
- l’exigence d’un Workspace plan payant pour exporter le code ;
- les limites du ZIP et des fonctions CMS, comptes, e-commerce, localisation,
  formulaires et recherche ;
- les éléments structurants de l’article 28 du RGPD.

Contre-preuve finale du point Webflow : **100/100, P0/P1/P2 = 0**.

## 5. Contrôles automatisés

```text
Tests ciblés : 70/70
Fichiers de tests ciblés : 4/4
TypeScript : conforme
ESLint ciblé : conforme
git diff --check : conforme
Build Next.js de production : réussi
Pages statiques générées : 159/159
Route locale servie : HTTP 200
HTML servi : 813 809 octets
```

Le build final contient :

- un H1 unique ;
- 16 H2 ;
- 38 panneaux `details` ;
- une canonical
  `https://hagnere-code.ai/guides/proprietaire-site-internet-code-source` ;
- `robots: index, follow` dans l’artefact configuré production ;
- un schéma `Article` ;
- un schéma `BreadcrumbList` ;
- 78 liens externes dans l’article.

Cette configuration d’artefact n’est pas une preuve d’indexation réelle.

## 6. BAT navigateur final

Le build local de production a été servi puis contrôlé aux dix largeurs :

```text
320, 360, 390, 430, 640, 768, 1024, 1280, 1440 et 1600 px
```

À chaque largeur :

- largeur du document égale à celle de la fenêtre ;
- aucun overflow horizontal ;
- contenu, Data Act, avertissement de non-sauvegarde et contrôles entreprise
  présents ;
- title, canonical, robots et JSON-LD cohérents.

Le parcours interactif confirme :

- chargement de l’exemple fictif ;
- statut danger visible ;
- voie juridique `ND` ;
- cinq priorités ordonnées par gravité ;
- compteurs d’échec et de réponses négatives ;
- agrégats économiques sans fausse étiquette HT ;
- focus déplacé sur « Oui, effacer », puis restauré ;
- rechargement de la page sans persistance locale ;
- aucune exception runtime ni erreur de console.

## 7. Impression

La version imprimable a été générée depuis le build final puis inspectée page
par page :

```text
Format : A4
Pages : 6
PDF balisé : oui
Chiffrement : non
JavaScript embarqué : non
```

Chaque accès, preuve et question contractuelle reste dans un bloc indivisible.
Aucun texte coupé entre deux pages, aucun chevauchement, aucune glyphe cassée
et aucun élément interactif parasite n’ont été observés.

## 8. Défauts globaux hors périmètre

La suite SEO globale reste à **491/492**. L’unique échec est le manifeste P4
périmé de `prioriser-fonctionnalites-mvp-saas` sur le fichier partagé
`src/lib/guides.ts`.

Le vérificateur de l’artefact final conserve deux écarts de temps de lecture
sur :

- `crm-sur-mesure-ou-hubspot` ;
- `seo-local-pme`.

Ces trois écarts ne visent pas le guide audité. Ils restent visibles et ne sont
pas présentés comme résolus.

## 9. État de publication

**GO P4 local pour revue humaine et juridique.**

Le snapshot a été modifié, testé, construit et servi localement. Aucun commit,
push, déploiement, contrôle de l’URL publique ou constat d’indexation Google
n’a été effectué dans cette boucle.

