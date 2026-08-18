# Refonte R1 — Automatiser un processus métier

Date de travail : 28 juillet 2026  
Slug : `automatiser-processus-metier`  
Statut : candidat final local R3, revue humaine obligatoire, non indexable  
Périmètre : un seul guide ; aucune publication, aucun déploiement

## 1. Pourquoi ce guide passe en premier

Le guide était la priorité commerciale numéro 1 de la feuille de route et
n’avait pas encore bénéficié de la boucle premium. Le snapshot public-source
était lisible et prudent, mais ne permettait pas encore de décider avec un
niveau de preuve suffisant :

- faux sentiment de calcul économique complet ;
- capacité, économie de trésorerie, revenu et risque insuffisamment séparés ;
- six réponses comparées sans périmètre ni horizon identiques ;
- sensibilité et chronologie de retour trop faibles ;
- absence d’outil autonome, de suivi prévu/réalisé et de conditions d’arrêt ;
- recherche limitée à quatre sources françaises ;
- ancien dossier auto-noté 20/20 malgré l’absence de test lecteur réel.

## 2. Gel et audits froids

Le gel initial est conservé dans
`manifests/automatiser-processus-metier-r1-gel-2026-07-28.sha256`.

| Élément gelé | SHA-256 |
| --- | --- |
| Page | `0783546f8b415c5ef6fffe73b390082db9dd57050966c4e4fdca632e978cc69b` |
| Open Graph | `882fcdc049b1226a252a98b74ff1622c6ad40bca292d00bc193b2971dfdebaa0` |
| Dossier historique | `1e0cf472905a3f1fa208c568f0862495080a3ad8e0b4f5c360eb389a0b5f55cc` |
| Audit de corpus | `c05c7c9f52cdc19e478cb3ed63db6752938bae2efd3e50351e23314dfe15e540` |

Trois audits indépendants, strictement en lecture seule, ont jugé ce même
snapshot :

| Audit | Note | Verdict | P0 |
| --- | ---: | --- | ---: |
| Faits, calculs et sources | 72/100 | NO-GO premium | 0 |
| Technique, SEO et produit | 80/100 | NO-GO premium | 0 |
| Pédagogie, décision et UX | 79/100 | NO-GO premium | 0 |

Le registre de correction R1 reprend l’union des P1, et pas seulement les
constats communs.

Un premier contre-audit du candidat R1 a ensuite convergé à 86/100 sur les
trois axes, toujours sans P0 mais avec une union de P1 : base de coûts
incohérente pour les retours, résidus « une semaine », cas zéro, temps de
lecture, export en identifiants internes, calculateur générique à quatre
colonnes et perte du contexte dans le tunnel projet. Le candidat a donc été
refusé et rouvert ; aucune note de 86/100 n’a été présentée comme un GO.

## 3. Recherche mondiale retenue

Seules des sources publiques primaires ou institutionnelles sont utilisées pour
les affirmations structurantes. Le contexte de chaque pays est explicitement
limité : aucune règle administrative étrangère n’est transposée à une PME
française.

| Pays / organisme | Source | Apport retenu | Limite de transfert |
| --- | --- | --- | --- |
| France — France Num | <https://www.francenum.gouv.fr/guides-et-conseils/pilotage-de-lentreprise/numerisation-des-processus/lautomatisation-une-solution> | fréquence × durée × personnes ; carte des étapes, données, exceptions et rôles ; commencer petit, tester, maintenir et former | les promesses génériques et prix ne sont pas repris |
| France — Insee | <https://www.insee.fr/fr/statistiques/2381340> | 44,20 €/h comme moyenne illustrative des services marchands en 2025 | ni coût marginal évitable ni valeur universelle |
| France — Anact | <https://www.anact.fr/table-de-simulation-numerique> | associer direction, encadrement et salariés aux futurs usages | méthode de travail, pas certification |
| France — CNIL | <https://www.cnil.fr/fr/profilage-et-decision-entierement-automatisee> | champ et garanties de certaines décisions entièrement automatisées | le guide ne qualifie aucun cas juridique |
| États-Unis — GSA | <https://www.gsa.gov/system/files/Federal%20EOA%20Playbook%20-%20v1%20-%206.3.2026_0.pdf> | éliminer, optimiser puis automatiser ; données, volumes suffisamment stables et jugement humain | contexte fédéral, aucun rendement transposable |
| Royaume-Uni — Government Digital Service | <https://www.gov.uk/government/publications/digital-and-data-benefits-framework/digital-and-data-benefits-framework> | base de service, familles de bénéfices, coûts de fonctionnement, double comptage | ratios publics non repris |
| Australie — Digital Transformation Agency | <https://www.digital.gov.au/policy/benefits-management-policy/guidance> | baseline, cible, propriétaire, dépendances, effets négatifs et tolérances | discipline adaptée, seuils non repris |
| États-Unis — GAO | <https://www.gao.gov/products/gao-20-195g> | périmètre, hypothèses, alternatives, cycle de vie, sensibilité, risque et coûts réels | profondeur proportionnée au petit pilote |
| Canada — Gouvernement du Canada | <https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/responsible-use-ai/algorithmic-impact-assessment.html> | impact, réversibilité, données, journaux, recours et contrôle | outil public canadien, pas droit français |
| États-Unis — NIST | <https://airc.nist.gov/airmf-resources/airmf/> | gouverner, cartographier, mesurer et gérer les risques d’une IA | cadre volontaire, pas certification |
| Union européenne | <https://ai-act-service-desk.ec.europa.eu/en/ai-act/timeline/timeline-implementation-eu-ai-act> | calendrier officiel d’application du règlement IA | qualification à faire selon système et usage |

## 4. Décisions éditoriales R1

### Réponse et pédagogie

- réponse directe avant tout CTA ;
- observation d’un cycle représentatif, et non « sept jours » universels ;
- quatre STOP non compensables ;
- sept prérequis documentables ;
- distinction entre tâche, processus, résultat, règle et technique ;
- cas où supprimer, simplifier ou conserver l’humain est la meilleure réponse.

### Comparaison

Six réponses restent visibles, mais le guide rend leur comparaison opératoire :

- résultat, données, volume et erreurs identiques ;
- coût externe, temps interne, exploitation et sortie ;
- exemples fictifs à 132, 600 et 1 800 h/an ;
- cas identique de 600 h/an à 12, 36 et 60 mois ;
- préparation, mois réellement en service et montée en charge explicites.

### Valeur économique

Cinq registres sont séparés :

1. trésorerie effectivement libérée ;
2. capacité utile ;
3. embauche réellement évitée ;
4. marge additionnelle attribuable ;
5. perte attendue évitée.

Le même effet ne peut pas être compté dans deux registres. Le socle fictif de
16 114,40 € reste nommé « coûts connus », jamais TCO complet.

La charge de référence est :

```text
((30 cas × 12 min ÷ 60) + 1,5 h de rapprochement) × 46
= (6 h + 1,5 h) × 46
= 345 h/an
```

Les scénarios 0 %, 20 %, 40 %, 49 % et 70 % restent des proxys de capacité.
Les retours théoriques utilisent une seule base de 225 € de coûts récurrents par
mois depuis le premier euro engagé. À 20 %, le retour théorique arrive après
environ 274,9 mois : il est hors de l’horizon de 36 mois, mais n’est pas décrit
comme impossible. Les scénarios 40 %, 49 % et 70 % donnent respectivement
environ 28,3, 20,2 et 12,1 mois, avant coûts encore inconnus, retard ou rampe.

### Produit éditorial

- diagnostic interactif local, sans envoi de données ;
- quatre STOP prioritaires sur les preuves, sans score numérique ;
- raccourci dirigeant vers les cinq étapes essentielles ;
- nouveau candidat réellement vierge, sans reprendre les preuves de l’exemple ;
- dossier de tri en français, copiable et toujours visible en repli ;
- CSV simple de diagnostic à 18 colonnes nommées en français ;
- CSV séparé de comparaison économique à 20 colonnes, avec coût horaire,
  mois actifs, mois équivalents, capacité, coût et convention de rampe ;
- calculateur ROI avancé proposé par lien, mais retiré de la lecture principale ;
- contexte « dossier déjà mesuré » conservé jusque dans le tunnel projet ;
- suivi prévu/réalisé à 30 et 90 jours ;
- conditions de poursuite, correction, extension et arrêt ;
- avis commercial explicite, avec mauvais cas et possibilité de ne rien
  développer.

## 5. Contrats de qualité ajoutés

- `src/lib/process-automation-decision.test.ts`
- `src/lib/process-automation-economics.test.ts`
- `src/components/guides/ProcessAutomationDecisionWorksheet.test.tsx`
- `src/lib/process-automation-guide-quality.test.ts`
- `src/components/project-funnel/content-claims.test.ts`

Le contrat éditorial vérifie notamment la porte de revue humaine, le plan, la
réponse avant conversion, l’absence de centrage dans la page, les STOP, les
registres économiques, les calculs clés, les sources mondiales et le CSV.

## 6. Contre-audits R2 et fermeture de l’union

Trois contre-audits indépendants ont relu le même manifeste candidat de
32 fichiers, vérifié conforme au début et à la fin :

| Audit | Note | Verdict | P0 | P1 |
| --- | ---: | --- | ---: | ---: |
| Faits, calculs et sources | 96/100 | GO factuel borné | 0 | 0 |
| Technique, SEO et produit | 96/100 | GO technique borné | 0 | 0 |
| Pédagogie, décision et UX | 94/100 | GO UX borné | 0 | 0 |

Leurs P2 n’ont pas été enterrés après le GO :

- les trois fixtures ROI ont été corrigées à leur valeur non arrondie ;
- chaque ligne du CSV économique contient désormais toutes les hypothèses
  nécessaires et un test la recalcule depuis le moteur ;
- les 21 choix de préparation possèdent un focus visible sur leur carte ;
- le diagnostic peut repartir d’un candidat vierge ;
- le dossier vierge affiche « à renseigner ou corriger », jamais `NaN` ;
- un parcours essentiel en cinq étapes réduit la densité décisionnelle ;
- la CTA rappelle de copier le dossier, puisque son contenu local n’est jamais
  transmis automatiquement.

## 7. Reçus de validation

Reçus acquis sur le candidat R2 :

- [x] mesure officielle répétée deux fois : 4 831 mots visibles, 24 minutes,
  reflétées dans le registre ;
- [x] 85/85 tests ciblés ;
- [x] ESLint ciblé ;
- [x] TypeScript global ;
- [x] `git diff --check` ;
- [x] guide, image Open Graph, tunnel et deux CSV servis en HTTP 200 ;
- [x] build de production local : 159 pages générées, puis guide, image,
  tunnel et deux CSV servis en 200 par `next start` ;
- [x] sources institutionnelles rouvertes ; l’URL Anact peut opposer un 403
  anti-bot, son index officiel restant accessible ;
- [x] `check:seo` : 771/773 contrôles réussis ; les deux refus restants sont
  identifiés et non masqués : manifeste partagé historique de
  `prioriser-fonctionnalites-mvp-saas`, puis porte volontaire
  `ready-for-human-review` du présent guide ;
- [x] trois contre-audits indépendants à 96/96/94, sans P0 ni P1 ;
- [x] vérificateur de l’artefact SEO : aucun défaut sur ce guide ; deux refus
  globaux hors lot restent ouverts sur le temps de lecture de
  `crm-sur-mesure-ou-hubspot` et `seo-local-pme` ;

Reçus encore exigés avant clôture :

- [ ] BAT navigateur réel aux dix largeurs ;
- [ ] interaction STOP, entrée vide et restauration ;
- [ ] absence d’erreur console ;
- [x] relecture ciblée des corrections P2, 34/34 empreintes revérifiées par
  chacun des trois auditeurs, toujours sans P0/P1 ;
- [x] manifest final.

Le candidat R1 avait passé un BAT réel aux dix largeurs sans centrage ni
débordement. La connexion au navigateur intégré n’étant plus disponible au
moment du gel R2, ce reçu n’est pas recyclé en BAT R2 et reste volontairement
ouvert.

## 8. Frontière de publication

Une validation locale ne prouve ni commit, ni push, ni déploiement, ni
disponibilité publique, ni indexation. Le guide reste
`ready-for-human-review` jusqu’à décision éditoriale explicite, même si les
tests techniques et les contre-audits deviennent verts.
