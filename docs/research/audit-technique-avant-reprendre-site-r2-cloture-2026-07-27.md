# Clôture R2 — `audit-technique-avant-reprendre-site`

Date : **27 juillet 2026**  
Périmètre : guide, moteur de décision, dossier local, export TXT, impression,
parcours vers le formulaire projet, tests, build et rendu navigateur local

## 1. Verdict

```text
Note initiale du registre : 86/100
Note finale conservatrice : 98/100
Audit factuel et juridique indépendant : 98/100
Audit UX indépendant avant le dernier correctif : 99/100
Audit technique indépendant avant les derniers correctifs : 96/100
P0 ouverts : 0
P1 ouverts : 0
P2 ouverts : 0
Décision : GO premium local
```

Les deux derniers contre-audits ont rouvert successivement le contexte du CTA,
la protection des liens internes puis la navigation arrière/avant. Ces trois
points ont été corrigés, testés et reproduits dans un navigateur réel avant ce
gel. La note finale reste volontairement à 98/100 : elle mesure la qualité du
snapshot local et ne garantit ni première position Google, ni publication, ni
déploiement, ni indexation.

## 2. Valeur livrée au lecteur

Le guide répond désormais à une décision complète :

- cinq conditions de STOP avant toute manipulation ;
- quatre niveaux, de la pré-vérification publique au STOP ;
- dix-huit domaines de preuve, chacun avec faux vert, limite, action interdite
  et preuve de levée ;
- séparation explicite entre applicabilité du RGPD et facteurs imposant un
  audit complet ;
- quatre trajectoires comparables sur 12, 36 et 60 mois ;
- quatre cas fictifs, dont un GO sous réserves et un blocage P1 ;
- modèle de constat, responsabilités, chronologie et décision ;
- dossier local sans transmission ni sauvegarde automatique ;
- copie, TXT, JSON, CSV et rapport A4 après relecture ;
- chemin commercial contextualisé qui ne demande aucun secret.

Le moteur reste fail-closed : une preuve inconnue, une non-applicabilité non
justifiée, un impact non qualifié ou une condition P0 empêche le GO. Le code
source n'est pas traité comme une preuve suffisante sans historique, build,
dépendances et droits utiles.

## 3. Fermetures critiques

Les corrections principales sont :

1. suppression du faux GO lorsqu'une zone vérifiée ou non applicable conserve
   un impact bloquant vrai ou non qualifié ;
2. proratisation mensuelle exacte des coûts annuels et refus des devises dont
   la convention n'est pas prise en charge ;
3. TCO obligatoire uniquement pour l'audit complet ;
4. séparation des quatorze questions de qualification et des treize facteurs
   de bascule vers l'audit complet ;
5. preuve code étendue aux droits de reproduire, modifier et maintenir ;
6. export PDF regroupant les erreurs TCO sans perdre trajectoires ni champs ;
7. dix-huit raccourcis ouvrant et focalisant réellement leur zone ;
8. dialogue accessible avant effacement et avant navigation interne ;
9. garde `beforeunload` et garde d'historique `popstate` pour les dossiers non
   exportés ;
10. CTA vers
    `/demarrer-un-projet?service=audit&source=guide-audit-reprise-site`, avec
    contexte visible et « Audit technique » présélectionné ;
11. correction des contrastes du parcours projet en mode sombre ;
12. correction des références L131-3, RFC 9364 et RFC 9615.

## 4. Preuves automatisées et build

```text
Tests ciblés finaux : 109/109
Fichiers ciblés : 5/5
TypeScript : conforme
git diff --check ciblé : conforme
Build Next.js direct : réussi
Pages statiques générées : 159/159
BUILD_ID : ptpqdbUBuTm1KHx7v-KC-
Route guide : HTTP 200
Route formulaire contextualisé : HTTP 200
Ressource TXT : HTTP 200 + X-Robots-Tag noindex, nofollow
```

La suite SEO élargie reste à **709/710**. L'unique échec concerne l'empreinte
historique P4 de `prioriser-fonctionnalites-mvp-saas` sur le fichier partagé
`src/lib/guides.ts` :

```text
attendu : 8663e6e84352121ec854393e049492a1c2b72f242166141e5d31e0911b43cb09
observé : 6480bad69b0c1459f094a0cd77a4b33fe9cf9211c29bc1e272614af3b2545fcb
```

Cet écart préexistait hors du guide audité. Son manifeste n'a pas été réécrit
pour faire artificiellement passer la porte globale.

## 5. BAT navigateur exact

Le build final a été contrôlé aux dix largeurs :

```text
320, 360, 390, 430, 640, 768, 1024, 1280, 1440 et 1600 px
```

Pour chacune :

- largeur du document égale à celle de la fenêtre ;
- aucun débordement horizontal ;
- aucun paragraphe ni élément de liste de l'article centré ;
- CTA contextualisé présent.

Contrôles complémentaires :

- axe : zéro violation à 320 et 1280 px sur le guide ;
- axe : zéro violation à 320 px sur le formulaire contextualisé ;
- les dix-huit raccourcis ouvrent leur zone ;
- l'exemple fictif donne 17/18, un GO sous réserves et 95 300 EUR HT à
  60 mois pour la mise sous contrôle ;
- le clic CTA avec un dossier non exporté ouvre le dialogue ;
- « Rester et exporter » conserve la page et le focus ;
- « Quitter sans exporter » poursuit explicitement la navigation ;
- le bouton Retour du navigateur ouvre le même dialogue, puis permet soit
  d'annuler, soit de revenir à la page précédente ;
- le formulaire affiche le contexte d'entrée et
  `aria-pressed="true"` sur « Audit technique ».

## 6. BAT PDF

Deux PDF ont été regénérés depuis le build final puis inspectés page par page :

| Artefact | État | Pages | Format | Balisé | SHA-256 |
| --- | --- | ---: | --- | --- | --- |
| `audit-technique-avant-reprendre-site-bat-2026-07-27-r2.pdf` | exemple GO sous réserves | 8 | A4 | oui | `eb406c0039de97751bcdd5f692d297f6559802e4ad0c6b5aa632b18202361678` |
| `audit-technique-avant-reprendre-site-bat-incomplet-2026-07-27-r1.pdf` | dossier vide, erreurs regroupées | 8 | A4 | oui | `ff285797a92e8a8762381d388db8c4c9294c1ff78443957a4f9efd667d806925` |

Les deux rapports sont numérotés 1/8 à 8/8, non chiffrés, sans JavaScript,
sans page blanche, sans chevauchement ni texte coupé. Le rapport incomplet
conserve les familles d'erreurs et les champs exacts sans étaler quarante-trois
messages bruts.

## 7. Sources et limites

La recherche a été rapprochée de sources françaises et internationales :
ANSSI, CNIL, Legifrance, NIST, CISA, NCSC, BSI, INCIBE, OWASP, W3C, Google
Search Central et RFC Editor. Les référentiels étrangers sont utilisés comme
méthodes techniques, jamais comme droit français universel. Les procédures,
interfaces, versions et textes doivent être revérifiés à la date d'un audit
réel.

Le dossier ne remplace ni pentest exhaustif, ni audit juridique, ni audit
d'accessibilité complet, ni décision cyber. Il organise les preuves et les
conditions de décision dans le périmètre autorisé.

## 8. État de publication

```text
Commit : non réalisé
Push : non réalisé
Déploiement : non réalisé
Production : non vérifiée
Indexation : non vérifiée
```

Le verdict est donc **GO premium local**, pas une preuve de mise en ligne.
Le dossier R1 reste l'historique de recherche ; le présent document constitue
le reçu de clôture du snapshot final.

## 9. Guide suivant

La boucle suivante porte sur `prix-gestion-google-ads`, priorité commerciale
encore inchangée depuis le 22 juillet 2026. Son audit conserve quatre P1 :
promesse de budget complet malgré des exclusions, scénarios non comparables,
périmètre de travail non défini et seuil de CPL maximal absent de la page.
