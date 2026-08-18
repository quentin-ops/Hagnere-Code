# Contrôle qualité global des 101 audits

**Date du contrôle : 24 juillet 2026**  
**Type : passe indépendante de contrôle, en lecture seule**  
**Périmètre :** `docs/workflow-maitre-guides-4-passes.md`, le README du giga-audit,
`inventaire-corpus.md`, `registre-maitre-101-guides.md` et les rapports de
`docs/audits/giga-audit-2026-07-24/guides/`.

Ce document ne réécrit ni un rapport individuel, ni le registre, ni une page
publique. Il documente l'état observable et les corrections à faire par
l'orchestrateur.

## 1. Verdict global

Le corpus est maintenant exhaustif du point de vue **route ↔ fichier de
rapport** : 101 routes du registre, 101 rapports nommés par le slug, aucun
manquant et aucun fichier en trop. Les deux rapports qui étaient encore
attendus lors du premier comptage (`signes-besoin-logiciel-metier` et
`valider-idee-saas-avant-developper`) sont bien présents au second comptage.

Cela ne constitue toutefois pas une validation éditoriale ou une autorisation
de publication. Les 101 rapports comportent un score identifiable compris entre
65 et 89/100 ; aucun ne franchit le seuil de 90/100 prévu par le workflow. Le
registre consolidé décrit désormais 28 passes P3 à faire et 75 passes P4 à
faire. Le bon
verdict est donc :

> **Inventaire et audit individuel présents ; chaîne de qualité et preuve de
> publication non finalisées. Aucun des 101 guides ne doit être présenté comme
> la réponse de référence définitivement validée sur la seule base de ce
> dossier.**

La longueur et la présence d'un rapport ne remplacent pas une P3/P4 réellement
rejouée sur le snapshot courant. De même, un score est un outil de pilotage,
pas une preuve de position Google.

## 2. Méthode et limites de cette passe

J'ai lu le workflow maître, le README, l'inventaire, le registre et les 101
rapports. Des contrôles reproductibles ont été exécutés sur les fichiers :

- extraction des slugs du registre et comparaison aux noms de rapports ;
- détection de scores, marqueurs P0/P1/P2, dates, URL, hashes, benchmark
  international, requêtes/SERP, scénarios et calculs ;
- contrôle des statuts de passes et recherche de totaux contradictoires ;
- recherche des formulations de garantie de position ou de résultat.

Cette passe **n'est pas une relecture humaine ligne par ligne de chaque
phrase**. Elle ne rouvre pas chaque URL externe, ne refait pas chaque calcul
métier, ne lance pas de build ou de navigateur, et ne prouve pas l'état d'une
URL de production, de l'indexation ou de Search Console. Les résultats de
rendu HTTP 200, de build, de responsive ou d'indexation cités par des
rapports/anciens inventaires restent historiques tant qu'ils ne sont pas
rejoués et archivés sur le snapshot courant.

## 3. Exhaustivité route ↔ rapport

| Contrôle | Résultat observé | Verdict |
| --- | ---: | --- |
| Lignes guides du registre maître | 101 | OK |
| Slugs uniques du registre | 101 | OK |
| Fichiers `guides/*.md` | 101 | OK |
| Rapports sans entrée de registre | 0 | OK |
| Routes du registre sans rapport | 0 | OK |
| Fichiers de `reviews/` et `research/` comptés comme rapports individuels | 0 | OK : exclus volontairement |

Le contrôle a été refait après l'apparition des deux derniers fichiers. Les
rapports `reviews/` sont des passes spécialisées et les documents
`research/` sont des dossiers de recherche ; les assimiler aux 101 rapports
fausserait le suivi des passes.

### Consolidation du registre : correction appliquée

L'orchestrateur a depuis consolidé le registre : les 101 lignes ont désormais
un lien `[oui]`, et aucune ligne ne reste en `audit en cours` ou `non`. La
photographie d'ouverture `33/101` est correctement étiquetée comme un état
historique avant la première vague ; elle ne contredit pas l'avancement
consolidé `101/101`. Elle doit simplement rester séparée du compteur courant
dans les tableaux et exports futurs.

Cette anomalie de présence est donc **corrigée**. Il ne faut pas la rouvrir
comme défaut du registre. Le point qui reste à surveiller est la génération
reproductible des compteurs depuis les fichiers, afin d'éviter qu'un prochain
relevé réintroduise une photographie historique dans l'état courant.

## 4. Passes P1–P4 et gravités P0/P1/P2

Le workflow est juste sur le principe : P1 à P4 sont des passes, tandis que P0,
P1 et P2 sont des gravités. Il interdit explicitement de les confondre. Le
problème observé est l'absence d'un format de rapport assez uniforme pour
rejouer cette règle sans interprétation.

### État du registre

| Colonne | Répartition observée |
| --- | --- |
| Passe P1 | 5 `approfondie`, 83 `partielle`, 13 `à faire` |
| Passe P2 | 6 `réécrit à vérifier`, 95 `à faire` |
| Passe P3 | 73 variantes `rapport présent`, 28 `à faire` |
| Passe P4 | 26 variantes de rapport/contrôle, 75 `à faire` |

Les libellés `rapport présent — P1 ouverts`, `contrôles historiques, à
refaire`, `QA visuelle à faire` et `score à réconcilier` sont utiles pour
exprimer le risque, mais ne sont pas des états normalisés. Ils ne doivent pas
être interprétés comme `P3 validée` ou `P4 validée`.

### Corrections déjà intégrées et anomalies restantes

Déjà corrigé par l'orchestrateur : présence des 101 fiches et liens du registre,
statuts `Fiche URL` obsolètes, absence des deux derniers rapports, et
rectification documentée du score/URL Canada de
`calculer-roi-application-metier`. Ces points ne sont plus des anomalies
actuelles, même si leur historique reste utile.

Restent à consolider : les compteurs P0/P1/P2 non uniformes, les totaux de
score divergents, les portes P3/P4 encore ouvertes et la preuve technique du
snapshot courant. Le fichier
[`plan-corrections-corpus-101.md`](plan-corrections-corpus-101.md) est la
source de priorisation pour ces défauts ; ce rapport ne le remplace pas.

### Rejouabilité des gravités

Le contrôle textuel trouve des identifiants de gravité explicites (`P0-01`,
`P1-03`, etc.) dans 59 rapports seulement ; 42 rapports ne contiennent pas de
jeu d'identifiants stable permettant de recompter automatiquement les
incidents. Seuls 26 rapports exposent simultanément un compteur littéral
`P0 : n`, `P1 : n`, `P2 : n` dans leur synthèse. Les autres utilisent des
phrases, des « P1 × 10 », des tableaux non uniformes ou des références à la
charte.

Ce n'est pas une preuve que leurs comptes sont faux ; c'est une preuve qu'ils
ne sont pas indépendamment consolidables. Le workflow exige pourtant que les
comptes soient refaits et localisables.

### Points de normalisation prioritaires

- `prix-logiciel-sur-mesure` possède bien un registre canonique de six ID P1
  et trois ID P2, cohérent avec `P0 0 / P1 6 / P2 3`. Un comptage naïf trouve
  davantage d'occurrences parce qu'il confond les noms des passes avec les
  gravités : c'est un exemple du risque que le nouveau format doit éliminer,
  pas une contradiction de fond démontrée.
- `back-office-sur-mesure-pme` expose `P1 11` dans les identifiants mais ne
  laisse pas apparaître les huit P2 annoncés dans la synthèse.
- `dette-technique-cout-entreprise` annonce `P0 2 / P1 7 / P2 5` sans
  identifiants P0/P1/P2 rejouables.
- `combien-de-temps-developper-saas` et `portail-client-b2b-sur-mesure`
  annoncent des P2 dans leur synthèse sans blocs d'incidents correspondants.
- `sla-maintenance-applicative` mentionne P1/P2 mais pas de P0, ce qui est
  acceptable seulement si l'absence est explicitement déclarée dans un bloc
  de verdict normalisé.

**Action :** imposer un bloc machine-readable et humainement lisible dans les
101 rapports : `P0 ouverts`, `P1 ouverts`, `P2 ouverts`, puis une liste unique
`ID | preuve | conséquence | correction | revalidation`. Les mentions dans
les exemples et dans la charte ne doivent pas être comptées comme incidents.

## 5. Scores, totaux et verdicts

Un score courant peut être extrait des 101 rapports, avec une valeur comprise
entre 65 et 89/100 (médiane 80/100). Aucun score courant ne dépasse 89. Les
seuils de 90/100 trouvés dans le corpus sont des objectifs ou des critères de
sortie, pas des scores acquis.

Les lectures multiples suivantes doivent être normalisées avant toute synthèse
de publication :

- `preparer-contenus-site-vitrine` affiche 84/100 au début, puis 80/100 dans
  son score humain et son total final : le rapport doit nommer lequel est
  l'état courant et rattacher chacun à sa méthode et à son snapshot ;
- `crm-sur-mesure-ou-hubspot` affiche 74 officiel et 72 secondaire,
  `lovable-bolt-v0-ou-agence-saas` 70 officiel et 66 secondaire, et
  `zapier-make-ou-developpement-sur-mesure` 73 officiel et 67 secondaire.
  Ces paires sont déjà explicitement présentées comme deux méthodes, pas comme
  deux totaux du même barème ; le score officiel doit simplement être le seul
  repris par le registre et les extractions ;
- plusieurs rapports mélangent score actuel, score projeté et seuil dans la
  même table, sans colonne indiquant explicitement `acquis`, `cible` ou
  `historique`.

Une ambiguïté non étiquetée peut faire croire qu'une porte P4 est franchie
alors que le texte dit `NO-GO`. La synthèse du registre doit reprendre un seul
score actuel, la date du snapshot et le verdict de porte, puis conserver les
diagnostics secondaires, anciennes notes et cibles dans des sections
clairement séparées.

## 6. Sources, dates, international, calculs et hashes

Les contrôles de présence ne valent pas validation de fond. Ils donnent les
alertes suivantes :

| Élément contrôlé | Couverture structurelle | Lecture qualité |
| --- | ---: | --- |
| Une URL/source citée | 101/101 | Présence OK, fraîcheur et pertinence non rouvertes ligne par ligne |
| Date ou année identifiable | 101/101 | La date peut être celle du rapport, pas celle de chaque source |
| Couverture internationale | 101/101 | Le détecteur trouvait 99 tableaux/marqueurs ; la lecture des deux faux négatifs confirme des sections France/US/UK/Canada/Australie détaillées |
| Marqueur explicite SERP/requêtes | 84/101 | 17 rapports ne rendent pas la recherche de requêtes observable par un motif commun |
| Scénario ou calcul à construire/rejouer | 101/101 | Présence de l'angle confirmée ; un mot-clé ou un scénario proposé n'est pas encore un calcul P3 validé |
| Hash dans le rapport historique | 81/101 | 20 rapports n'en exposent aucun ; le manifeste central courant ferme la traçabilité présente, pas la preuve historique absente |

Les 20 rapports sans marqueur de hash sont :

`application-gestion-interventions-terrain`, `choisir-agence-seo`,
`combien-coute-un-crm`, `combien-coute-un-site-internet`,
`combien-coute-une-application-mobile`, `cout-maintenance-site-internet`,
`crm-sur-mesure-ou-hubspot`, `logiciel-gestion-stock-sur-mesure`,
`lovable-bolt-v0-ou-agence-saas`, `migrer-wordpress-vers-nextjs`,
`mvp-saas-quoi-inclure`, `nextjs-ou-wordpress`, `positions-google-baissent`,
`pourquoi-site-pas-visible-google`, `prioriser-fonctionnalites-mvp-saas`,
`prix-logiciel-sur-mesure`, `prix-refonte-site-internet`,
`reprendre-maintenance-site-autre-agence`, `template-ou-site-sur-mesure`,
`zapier-make-ou-developpement-sur-mesure`.

Un hash placé dans un rapport ne prouve pas qu'il correspond encore au
`page.tsx`, au composant, au registre ou au build. La consolidation doit donc
produire un manifeste unique `route → fichiers → sha256 → date → commande →
résultat`, et signaler les éléments absents plutôt que d'utiliser un hash
historique.

Cette action a depuis été appliquée pour l'état local courant dans
[`manifest-snapshots-101.md`](manifest-snapshots-101.md) : 101 pages et 101
rapports y sont rattachés, avec image sociale et recherche lorsqu'elles
existent. Ce manifeste ne reconstitue pas rétroactivement le snapshot
historique des 20 rapports et devra être régénéré après chaque correction.

## 7. Garantie de position et faux positifs éditoriaux

La recherche des 101 rapports ne fait pas apparaître de promesse directe de
première position formulée comme un résultat garanti au lecteur final. Les
occurrences de « meilleur guide », « référence » ou « meilleure réponse » sont
principalement des objectifs d'audit ou des comparaisons, pas des garanties de
classement.

La protection n'est cependant pas standardisée : seuls 43 rapports contiennent
un marqueur explicite du type « aucune garantie de position/résultat ». Les 58
autres peuvent être parfaitement prudents, mais cette prudence n'est pas
rejouable par un contrôle simple. Il faut ajouter une phrase courte et
contextuelle dans chaque guide destiné à la publication, sans transformer
toutes les pages en avertissement juridique répétitif.

À contrôler dans la passe humaine :

- ne pas transformer une estimation illustrative en économie ou ROI promis ;
- ne pas présenter une disponibilité, une conformité ou un délai comme garanti
  sans engagement contractuel et preuve correspondante ;
- distinguer « référence visée par l'audit » d'une affirmation de supériorité
  démontrée ;
- séparer information générale, choix de conception et conseil juridique,
  fiscal ou de sécurité personnalisé.

## 8. Ce qui reste à faire par ordre de priorité

### QC-0 — bloquer toute conclusion de publication de référence

1. Conserver l'état `NO-GO / à reprendre` pour les 101 guides tant que les
   P0/P1 ouverts, les scores et les portes P3/P4 ne sont pas consolidés.
2. Ne pas déduire `index,follow`, production ou indexation Google de la seule
   existence d'un rapport.

### QC-1 — rendre le corpus auditable automatiquement

1. Conserver séparément la photographie d'ouverture et l'état courant dans le
   registre et l'inventaire ; la présence 101/101 est désormais consolidée.
2. Normaliser le bloc de verdict et les identifiants P0/P1/P2 dans chaque
   rapport, puis refaire les comptes.
3. Réconcilier le score courant ambigu de
   `preparer-contenus-site-vitrine`, conserver les diagnostics secondaires
   explicitement étiquetés et séparer score actuel, historique et cible.
4. Conserver et régénérer
   [`manifest-snapshots-101.md`](manifest-snapshots-101.md) après chaque
   correction ; ajouter aux futurs reçus commande et résultat.

### QC-1 — refaire les preuves qui changent avec le temps

1. Rouvrir les sources prioritaires et archiver URL, titre, date de
   consultation, version et citation utilisée.
2. Normaliser les requêtes, pays, langues et critères de saturation des 17
   rapports sans marqueur SERP observable ; la couverture internationale des
   101 rapports est déjà présente, mais doit rester datée et bornée.
3. Rejouer chaque formule, unité, devise, hypothèse, sensibilité et scénario
   d'arrêt dans un artefact versionné.

### QC-2 — seulement après consolidation

1. P3 indépendante sur le snapshot corrigé.
2. P4 humaine : plume, lecture dirigeant, accessibilité, clavier, console,
   responsive 320–1600 px, OG, données structurées, maillage et parcours CTA.
3. Build/test puis vérification réelle locale, preview et production, avec
   séparation explicite de ces états.

## 9. Conclusion et périmètre non revu ligne par ligne

La demande d'exhaustivité est satisfaite pour la présence des rapports, pas
pour leur validation finale. Le principal risque n'est plus un guide absent :
c'est la possibilité de prendre un rapport long, daté ou chiffré comme une
preuve de qualité courante alors que le registre, les comptes d'incidents, les
totaux et les portes P3/P4 ne sont pas encore unifiés.

Cette passe a contrôlé la structure des 101 fichiers et les incohérences
prioritaires. Elle n'a pas revu ligne par ligne chaque formulation, chaque
source externe, chaque calcul ou chaque rendu navigateur. Ces contrôles doivent
être effectués par les nouvelles P3/P4 après consolidation, et leurs preuves
doivent être attachées au même snapshot. Aucun changement de rapport, registre,
page, commit, push ou déploiement n'a été effectué dans cette passe.
