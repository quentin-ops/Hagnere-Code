# BAT local R3 — reprendre un SaaS développé par un freelance

Date de contrôle : 28 juillet 2026.

Statut : **CANDIDAT R3 GELÉ — contre-audit indépendant requis**.

Ce document décrit un état local. Il ne prouve ni commit, ni push, ni
déploiement, ni publication, ni indexation.

## Corrections issues du refus R2

- Le précontrôle ne repose plus sur une ancienne phrase : les assertions
  distinguent cinq mutations légitimes, onze entrées adversariales, huit
  sabotages et vingt-quatre contrôles.
- Le classeur ne confond plus fréquence de sauvegarde et restauration prouvée.
  Il demande un intervalle entre points restaurés et validés et une preuve de
  restauration datée `Oui / Non / Inconnu` pour les situations actuelle et
  améliorée. `Non` ou `Inconnu` produit `MODEL STATUS: FAIL`, puis `STOP`.
- Les résultats `TCO_36_MOIS!C21`, `RTO_RPO!C24`, `RTO_RPO!C28` et
  `RTO_RPO!C50` ont chacun un contrôle et un sabotage détectable.
- Modifier une hypothèse RPO, RTO, arrêt ou comptes efface désormais tout ancien
  message de copie ou téléchargement.
- La doctrine historique d'accès est harmonisée : préparation avant échéance,
  désactivation à la fin du contrat, sauf prolongation écrite, nominative,
  minimale, journalisée et bornée.
- Le sommaire est continu de 1 à 14. La limite de la moyenne RPO mentionne à la
  fois l'instant d'incident uniforme et un flux d'événements suffisamment
  régulier. Le benchmark britannique est présenté comme un benchmark de
  commande publique, pas comme une règle applicable à une PME française.

## Tests et compilation

- `npm run precheck:seo` : **33/33 tests passent**, trois fichiers de test.
- `npm run check:seo` : **962/964 tests corpus passent**. Les deux échecs sont
  extérieurs à ce guide et préexistent au lot :
  - ancien hash P4 de `src/lib/guides.ts` pour
    `prioriser-fonctionnalites-mvp-saas` ;
  - statut `ready-for-human-review` de `automatiser-processus-metier`.
- `npm run build` emprunte bien le prébuild, valide les 33 tests du guide, puis
  s'arrête sur ces deux mêmes dettes de gouvernance. Il ne constitue donc pas un
  build global vert.
- `npm run --ignore-scripts build` : compilation Next.js et TypeScript réussies,
  **159/159 pages statiques** générées. Ce contrôle isole la charge utile ; il
  ne remplace pas la porte globale rouge décrite ci-dessus.
- ESLint ciblé et `git diff --check` : aucun défaut.
- Mesure servie avec `scripts/measure-guide-readtime.mjs` :
  **6 523 mots, 33 minutes** ; le catalogue est aligné à 33 minutes.

## Classeur contrôlé

- Fichier public et copie de contrôle identiques :
  `0d7843ee8f5af2d00518248cd174dd4def8a075309f29d07452efd62c7ee448e`,
  **31 264 octets**.
- Téléchargement local : HTTP 200, type
  `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`,
  longueur 31 264 octets.
- Validation après deux imports :
  - 10 feuilles ;
  - 10 fonctions ;
  - 18 tests d'acceptation ;
  - 18 sources ;
  - 106 formules ;
  - 24 contrôles ;
  - 5 mutations légitimes ;
  - 11 entrées adversariales ;
  - 8 sabotages ;
  - 0 erreur de formule.
- Les quatre valeurs `Non / Inconnu` des preuves de restauration conduisent bien
  au STOP.
- Les dix feuilles ont été rendues en PNG ; `RTO_RPO`, `DECISION` et
  `CONTROLES` ont été revues visuellement après régénération.

Limite : le classeur n'a pas été recalculé dans Microsoft Excel. Les formules
exportées, les imports et le moteur local ont été contrôlés ; les deux valeurs
centrales `Oui` sont des exemples fictifs à remplacer, pas des preuves réelles.

## Page servie et BAT navigateur

- Route locale : HTTP 200, `text/html; charset=utf-8`, 481 975 octets.
- Sommaire : 14 entrées continues ; corps : 14 titres H2.
- Le hero, le texte, les tableaux et l'outil sont alignés à gauche, selon le
  système visuel premium utilisé pour les guides Hagnéré.
- Largeurs contrôlées après stabilisation du breakpoint :
  `320, 360, 390, 430, 640, 768, 1024, 1280, 1440, 1600` px.
  Pour chacune, `documentElement.scrollWidth`, `body.scrollWidth` et la largeur
  du viewport sont identiques ; aucun débordement horizontal de page.
- Les dix captures claires correspondantes sont gelées sous
  `output/reprendre-saas-developpe-par-freelance/bat/r3-<largeur>-light.png`.
- Le thème sombre a été capturé à 1440 px après 750 ms de stabilisation :
  `r3-1440-dark.png`. La capture ne contient plus le cercle de transition.
- À 320 px, le titre, les badges, l'auteur, le bouton et le sommaire restent
  lisibles et alignés à gauche.
- Les six groupes détaillés de l'outil sont fermés par défaut.
- Branche inconnue : `STOP` et exports désactivés.
- Branche normale valide : exports activés.
- Après copie du résumé, la modification du RPO de 24 h à 3 h supprime le
  message « résumé copié » et revient au message neutre. Le résumé et le CSV
  sont construits depuis l'état courant.
- La saisie intermédiaire `12,` reste visible et bloquante ; `12,5` est acceptée.
- Aucun appel réseau n'est réalisé par les calculs ou les exports.

## Porte de sortie

Le candidat R3 ne peut devenir `GO_LOCAL_DRAFT` qu'après :

1. vérification 100 % du manifeste R3 ;
2. contre-audit factuel, technique et UX indépendant ;
3. absence de P0/P1 sur ce périmètre ;
4. correction et nouveau gel si un auditeur refuse le candidat.
