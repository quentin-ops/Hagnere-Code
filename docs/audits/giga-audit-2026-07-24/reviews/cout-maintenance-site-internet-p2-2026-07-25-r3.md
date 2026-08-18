# Rapport P2 R3 ciblé — `cout-maintenance-site-internet`

Date : **25 juillet 2026**  
Éditeur P2 : `/root/rn_flutter_r3_final`  
Déclencheur :
`docs/audits/giga-audit-2026-07-24/reviews/cout-maintenance-site-internet-p3-2026-07-25-r2.md`  
Incident traité : **`CMI-P3-R2-P2-01` uniquement**  
Étape suivante : nouveau contre-audit P3 formel avant toute P4

## Statut exact

La cohérence temporelle des preuves est maintenant contrôlée dans le moteur
pur, l’interface et l’export. Le contre-contrôle indépendant de cette passe ne
relève plus d’écart sur l’incident ciblé.

```text
Score P2 auto-attribué : aucun
P3 R2 : NO-GO 92/100, rapport conservé sans modification
Nouveau P3 formel : non réalisé
P4 navigateur réel et plume humaine : non réalisées
Build de production : non réalisé
Commit / push / déploiement / indexation : non réalisés
```

Ce rapport atteste une correction et ses tests. Il ne constitue ni une
autorisation de publication, ni une promesse de positionnement Google.

## 1. Intégrité des rapports P3

Les rapports P3 R1 et R2 n’ont jamais été modifiés pendant cette passe.

```text
P3 R1 :
e9c649e02f6be29b549f9ef1eed5ac57acd39e90e1691cafb03961aba03833ca

P3 R2 :
6bfeb786d0d1b9d426da37d067b496c1feccc1127d4168f608119468afd04377
```

Le manifeste R3 inclut les deux rapports, le snapshot R2 et tous les fichiers
pertinents du guide.

## 2. Date d’évaluation explicite et moteur déterministe

La version du moteur devient
`website-maintenance-decision-r3-2026-07-25`.

Les fonctions pures reçoivent désormais explicitement la date d’évaluation :

- `qualifyWebsiteMaintenanceOffer(context, offer, evaluationDate)` ;
- `buildWebsiteMaintenanceDecisionReport(context, evaluationDate)` ;
- les fonctions de statut effectif et de preuve reçoivent un contexte
  `{ evaluationDate, decisionDate }`.

Le moteur ne consulte jamais l’heure courante. La validité calendaire est
calculée sans horloge, y compris pour les années bissextiles.

Une date de preuve est valide seulement si :

1. elle respecte `AAAA-MM-JJ` ;
2. elle décrit une vraie date du calendrier ;
3. elle est antérieure ou égale à la date d’évaluation ;
4. si une date de décision valide existe, elle est aussi antérieure ou égale à
   cette décision.

La date maximale autorisée est donc la plus ancienne des dates valides
d’évaluation et de décision. Une date d’évaluation invalide ferme les portes
par prudence.

## 3. Interface, accessibilité et stabilité

La date locale ISO est calculée dans le navigateur après montage, puis stockée
une seule fois pour toute la durée du dossier. L’état initial est identique
côté serveur et côté client, ce qui évite une divergence d’hydratation autour
de minuit.

Le test avance ensuite l’horloge simulée du 25 au 26 juillet : la date
d’évaluation affichée, les qualifications, l’export et les bornes restent
figés au **25 juillet**.

La date d’évaluation est visible dans le dossier et dans son export. Chaque
champ « Date de la preuve » reçoit :

- un attribut `max` égal à
  `min(date d’évaluation, date de décision valide)` ;
- `aria-invalid="true"` lorsque la date saisie dépasse une borne ;
- un `aria-describedby` résolu ;
- un message visible `role="alert"` qui nomme les bornes et la date maximale.

Une violation temporelle empêche l’état `PASS démontré` ou `FAIL démontré`,
maintient l’offre non qualifiée, bloque la comparaison et transforme le coût
calculable en **sous-total non comparable**.

L’export rend la date fautive `ND`, explique si elle est postérieure à
l’évaluation ou à la décision, puis conserve le verdict
`NON QUALIFIÉE`.

## 4. Revalidations exactes du P3 R2

| Évaluation | Décision | Preuve | Résultat |
| --- | --- | --- | --- |
| 25/07/2026 | 25/07/2026 | 24/07/2026 | Pass possible |
| 25/07/2026 | 25/07/2026 | 25/07/2026 | Pass possible |
| 25/07/2026 | 25/07/2026 | 26/07/2026 | porte ND, offre non qualifiée |
| 25/07/2026 | vide | 01/01/2099 | porte ND, offre non qualifiée |

Deux offres complètes restent indépendantes : si seule l’offre B contient une
preuve future, A demeure qualifiée et B seule est bloquée.

Le moteur, l’export et l’interface couvrent tous ces scénarios. Le test
d’interface contrôle aussi le retour au vert après remplacement du 26 juillet
par le 25 juillet.

## 5. Fichiers modifiés par R3

- `src/lib/website-maintenance-decision.ts` ;
- `src/lib/website-maintenance-decision.test.ts` ;
- `src/components/guides/WebsiteMaintenanceDecisionDossier.tsx` ;
- `src/components/guides/WebsiteMaintenanceDecisionDossier.test.tsx` ;
- `src/lib/website-maintenance-guide-quality.test.ts`, uniquement pour
  verrouiller la version R3 ;
- ce rapport ;
- `docs/research/manifests/cout-maintenance-site-internet-p2-2026-07-25-r3.sha256`.

La page éditoriale, l’image sociale, le registre et les recherches n’ont pas
été réécrits dans cette micro-correction.

## 6. Contrôles exécutés

```text
src/lib/website-maintenance-decision.test.ts                 25 tests
src/components/guides/WebsiteMaintenanceDecisionDossier...  16 tests
src/lib/website-maintenance-guide-quality.test.ts            12 tests
src/lib/guides.test.ts + src/lib/structured-data.test.ts     14 tests

Total : 67/67 tests sur 5 fichiers
TypeScript : npx tsc --noEmit — conforme
ESLint ciblé : 8 fichiers — conforme
git diff --check ciblé — conforme
Contre-contrôle indépendant R3 — aucun écart résiduel
Manifeste R3 — 17/17 empreintes vérifiées
```

Aucun échec externe n’a été rencontré dans ce périmètre ciblé.

## 7. Limites et remise

Cette passe n’a exécuté ni navigateur réel, ni contrôle aux dix largeurs
responsives, ni navigation clavier physique, ni clair/sombre, ni zoom, ni
impression réelle, ni rendu de l’image sociale.

Elle n’a réalisé aucun commit, push, build, déploiement, contrôle de route
publique, sitemap ou indexation. Tous ces états restent distincts et non
vérifiés.

**Remise P2 R3 : prête pour un nouveau P3 formel ciblé, sans note ni
autorisation de publication.**
