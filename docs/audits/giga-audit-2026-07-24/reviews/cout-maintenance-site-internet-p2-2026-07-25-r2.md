# Rapport P2 R2 ciblé — `cout-maintenance-site-internet`

Date : **25 juillet 2026**  
Éditeur P2 : `/root/rn_flutter_r3_final`  
Déclencheur :
`docs/audits/giga-audit-2026-07-24/reviews/cout-maintenance-site-internet-p3-2026-07-25-r1.md`  
Périmètre : correction des incidents `CMI-P3-R1-P1-01` et
`CMI-P3-R1-P2-01`, tests adversariaux et export  
Étape suivante : nouveau contre-audit P3 formel, puis P4 seulement en cas de GO

## Statut exact

Les deux incidents du P3 R1 ont reçu une correction ciblée dans le moteur, le
dossier interactif, l’export et leurs tests. Un contre-contrôle indépendant de
la passe R2 n’a plus trouvé d’écart sur ces critères après correction de deux
cas de bord supplémentaires : la sentinelle littérale `ND` et l’affichage d’un
plafond de compensation comportant des centimes.

```text
Score P2 auto-attribué : aucun
P3 R1 : NO-GO 88/100, rapport conservé sans modification
Nouveau P3 formel : non réalisé
P4 navigateur réel et plume humaine : non réalisées
Build de production : non réalisé
Commit / push / déploiement / indexation : non réalisés
Statut éditorial conservé : ready-for-human-review
```

Ce rapport est un reçu d’exécution, pas une autorisation de publication ni une
promesse de classement Google.

## 1. Intégrité de l’autorité P3

Le rapport P3 R1 n’a jamais été modifié pendant cette passe.

```text
SHA-256 P3 R1 :
e9c649e02f6be29b549f9ef1eed5ac57acd39e90e1691cafb03961aba03833ca
```

Il est inclus dans le manifeste R2 afin que le prochain auditeur puisse
vérifier que les corrections répondent bien à une demande figée.

## 2. Fermeture de `CMI-P3-R1-P1-01`

### Qualification globale

`qualifyWebsiteMaintenanceOffer` reçoit maintenant le contexte commun et
l’offre complète. Une offre ne peut devenir `qualified` que si les quatre
groupes suivants sont simultanément complets :

1. les **6 champs communs** : classe du site, fonctions métier, fenêtre,
   RPO/RTO, dernier point restauré et responsable ;
2. les **4 descriptifs de l’offre** : mode, périmètre, exclusions et payeur du
   risque résiduel ;
3. les **9 portes**, toutes en Pass avec une preuve minimale complète ;
4. les **10 postes TCO**, tous connus et valides.

Un Fail réellement étayé reste éliminatoire. Sans Fail, toute donnée manquante
maintient l’offre `unqualified`.

Les chaînes vides, les espaces, une valeur d’un caractère et les sentinelles
`ND`, `N.D.`, `N/D`, `N/A`, `NA`, `inconnu` ou équivalentes ne satisfont pas
un champ obligatoire. L’export les normalise en `ND` au lieu de reproduire un
blanc trompeur.

### Preuve structurée et fidèle

L’ancien champ libre unique est remplacé, pour chaque porte, par cinq éléments
séparés :

- date ISO valide ;
- artefact ou référence ;
- périmètre vérifié ;
- résultat observé ;
- responsable.

Le sélecteur parle désormais de **conclusion déclarée**. L’interface affiche
séparément l’état effectif : Pass ou Fail n’est « démontré » que lorsque les
cinq éléments sont valides. `"x"`, espaces, date impossible, champ absent ou
sentinelle `ND` rendent la porte effectivement `ND`. L’export applique la même
règle et remplace l’élément invalide par `ND`.

### Comparaison et coûts

Tant que l’offre n’est pas globalement qualifiée :

- aucun état vert « offre qualifiée et comparable » n’apparaît ;
- le bloc de décision écrit **« Comparaison bloquée »** ;
- toute somme arithmétiquement calculable est libellée
  **« Sous-total non comparable »** dans l’interface et dans l’export.

Quand les deux offres sont complètes, elles peuvent toutes deux être
qualifiées sur le même besoin. Le remplissage de l’offre A ne remplit jamais
les descriptifs, preuves ou coûts de l’offre B.

## 3. Fermeture de `CMI-P3-R1-P2-01`

Le moteur renvoie maintenant, avec
`issues: ["recoverableCompensation"]`, le coût brut précis qui forme le
plafond. Le dossier :

- marque seulement le champ **Compensation récupérable** avec
  `aria-invalid="true"` ;
- relie le champ par `aria-describedby` à un message `role="alert"` ;
- nomme la compensation dans la synthèse ND ;
- affiche le plafond brut, sans perdre les centimes ;
- nomme le champ et le plafond dans l’export.

Le cas demandé est protégé : coût brut `100 €`, compensation `101 €`, puis
correction à `100 €`. Après correction, l’erreur et sa description
disparaissent et l’impact devient connu à `0 €`.

Le cas décimal `100,49 €` de coût brut contre `100,50 €` de compensation est
également testé afin d’empêcher un futur arrondi trompeur à `100 €`.

Les champs initialement vides restent neutres. Les valeurs négatives, non
finies et la part réaffectée supérieure à 100 restent localisées sans
`undefined`, `NaN` ou `Infinity` visible.

## 4. Fichiers modifiés par R2

- `src/lib/website-maintenance-decision.ts` ;
- `src/lib/website-maintenance-decision.test.ts` ;
- `src/components/guides/WebsiteMaintenanceDecisionDossier.tsx` ;
- `src/components/guides/WebsiteMaintenanceDecisionDossier.test.tsx` ;
- `src/lib/website-maintenance-guide-quality.test.ts` ;
- `src/app/guides/cout-maintenance-site-internet/page.tsx`, uniquement pour
  aligner le paragraphe de décision sur la preuve structurée et le
  sous-total non comparable ;
- ce rapport ;
- `docs/research/manifests/cout-maintenance-site-internet-p2-2026-07-25-r2.sha256`.

L’image sociale, le registre du guide et le dossier de recherche ne sont pas
réécrits dans cette passe ; leurs empreintes restent toutefois incluses dans
le snapshot.

## 5. Contrôles exécutés

```text
src/lib/website-maintenance-decision.test.ts                 22 tests
src/components/guides/WebsiteMaintenanceDecisionDossier...  14 tests
src/lib/website-maintenance-guide-quality.test.ts            12 tests

Total ciblé : 48/48 tests
TypeScript : npx tsc --noEmit — conforme
ESLint ciblé : 6 fichiers — conforme
git diff --check ciblé — conforme
Contre-contrôle indépendant R2 — aucun écart résiduel détecté
Manifeste R2 — 14/14 empreintes vérifiées
```

Les tests couvrent explicitement :

- champs communs et d’offre absents, composés d’espaces ou valant `ND` ;
- preuve `"x"`, espaces, date impossible, résultat ou responsable absent,
  sentinelle inconnue ;
- TCO connu mais non comparable ;
- dossier entièrement positif avec deux offres qualifiables ;
- indépendance A/B ;
- export positif et exports adversariaux ;
- compensation `101 > 100`, retour à `100`, et plafond décimal `100,49` ;
- accessibilité de l’erreur et neutralité de l’état initial.

## 6. Limites et remise

Cette passe n’a exécuté ni serveur local persistant, ni navigateur réel, ni
contrôle aux dix largeurs responsives, ni navigation clavier physique, ni
clair/sombre, ni zoom, ni impression réelle, ni rendu de l’image sociale.

Elle n’a réalisé aucun commit, push, build, déploiement, contrôle de route
publique, sitemap ou indexation. Ces états restent distincts et non vérifiés.

**Remise P2 R2 : prête pour un nouveau P3 formel ciblé, sans note ni
autorisation de publication.**
