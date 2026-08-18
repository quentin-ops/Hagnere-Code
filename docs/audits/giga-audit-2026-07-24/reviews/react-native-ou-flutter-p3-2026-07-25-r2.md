# Contre-audit P3 indépendant R2 — `react-native-ou-flutter`

Date : 25 juillet 2026  
Auditeur : contre-audit indépendant, lecture à froid  
Snapshot : manifeste P2 R2  
Périmètre : recherche principale, rapport P3 R1, page, image sociale,
registre, moteur de décision, composant du dossier et tests associés.  
Hors périmètre : correction des artefacts, P4 navigateur/PDF, tests sur
appareils mobiles, validation humaine, publication, déploiement, indexation et
garantie de classement.

## 1. Verdict exécutif

```text
Note : 98/100
Incidents ouverts : P0 = 0 ; P1 = 0 ; P2 = 0
Verdict : GO P3 vers P4
Publication/indexation : non évaluées et non autorisées
```

Le snapshot P2 R2 ferme réellement les deux P1 et les trois P2 du
contre-audit R1. La correction ne se contente pas d'ajouter des tests :

- un `pass` ou un `fail` sans preuve, y compris une chaîne composée d'espaces,
  redevient effectivement `ND` à l'écran et dans le rapport ;
- les dix hypothèses de coût sont exportées pour chaque option avec leurs
  unités, puis permettent de refaire les six TCO et les six sensibilités ;
- le rapport caché réservé à l'impression est exclu du temps de lecture ;
- une sensibilité négative ou non finie reste `ND`, tandis que zéro reste une
  hypothèse connue ;
- l'échec de copie ne propose plus une sélection impossible.

Le guide peut donc passer à P4. Ce GO n'atteste ni les largeurs responsives, ni
la pagination d'un PDF physique, ni le rendu de l'image sociale, ni une
relecture humaine. Ces contrôles restent obligatoires avant toute décision de
publication.

## 2. Intégrité du snapshot

Le manifeste
`docs/research/manifests/react-native-ou-flutter-p2-2026-07-25-r2.sha256`
a été contrôlé indépendamment.

| Artefact | Empreinte attendue | Résultat |
| --- | --- | --- |
| `docs/research/react-native-ou-flutter.md` | `ad2fd3ff654f0b9fe24670fd9df9e177afa616ed6c35c405e44beb87d8eb0e6d` | conforme |
| `docs/audits/giga-audit-2026-07-24/reviews/react-native-ou-flutter-p3-2026-07-25-r1.md` | `4c003ef5d1001f1729e3c517af6c7636b647d983c519108e88209cb01e31c2be` | conforme |
| `src/app/guides/react-native-ou-flutter/page.tsx` | `1981a1e710787884dd81e86699ff19474bc69596665d0afc24ad34aace308d3c` | conforme |
| `src/app/guides/react-native-ou-flutter/opengraph-image.tsx` | `ca977189a50ca9d9fd9b08855a89038b8f865090cb3fb2a3dbd618e32e6d3bfd` | conforme |
| `src/components/guides/MobileFrameworkDecisionDossier.tsx` | `e519f9f5ac742f4351f95503f67015ba2a09584db9cb27f88afb851d6075343d` | conforme |
| `src/components/guides/MobileFrameworkDecisionDossier.test.tsx` | `9ad0f10fa52d6464637821e3d452d117066a460b796e53fb9ae88c80c7f94112` | conforme |
| `src/lib/mobile-framework-decision.ts` | `0dd47a778dcecb699a51bb330f274a0964a6d407eacd050bd63728a9bb29f370` | conforme |
| `src/lib/mobile-framework-decision.test.ts` | `55d3b59dd5a485cc0117bdf43dedc74d17a8084adc99d950594fbd5c96cee597` | conforme |
| `src/lib/react-native-flutter-guide-quality.test.ts` | `7a83e3cd40adeafbcfc1218428ffd09a0b6f653e0c1e6c9eda61ad4a0fb8a414` | conforme |
| `src/lib/guides.ts` | `b32e92d3dc582bcc019319fd7254b07740355bda6bb618bb97cd510c94477990` | conforme |

Résultat : **10 fichiers sur 10 conformes**. Le rapport porte donc sur le
snapshot R2 annoncé.

Le manifeste P2 R1 n'a pas été réécrit : son empreinte SHA-256 reste
`83294ce7c7187add7f0ce437b5f02f880dcddf36db5a366f2eb27595df52e9ae`.
Les fichiers de travail qu'il gelait ont logiquement évolué en R2 ; c'est le
manifeste historique lui-même et le rapport R1, inclus dans le gel R2, qui ont
été contrôlés comme pièces immuables.

## 3. Cotation sur dix axes

| Axe | Note /10 | Preuve retenue | Limite non bloquante |
| --- | ---: | --- | --- |
| Intention | 10 | réponse immédiate ; besoin d'application vérifié avant tout framework | aucune |
| Décision | 10 | six voies, éliminatoires avant coût, report et renoncement possibles | aucune |
| Pédagogie | 10 | jargon traduit au moment utile, fil rouge concret, p50/p95 et TCO expliqués | validation par lecteur non spécialiste encore en P4 |
| Profondeur | 10 | modules, hors-ligne, appareils, accessibilité, stores, équipe, support, migration et reprise | aucune dans le périmètre P3 |
| Preuve | 10 | sources primaires proches, faits datés, inconnues conservées, qualification et export désormais cohérents | authenticité d'une preuve saisie à relire humainement |
| Comparaison | 10 | RN, Flutter, natif, KMP, PWA et aucune app au même périmètre | aucune |
| Originalité et utilité | 10 | dossier local à deux options, TCO reproductible, sensibilités, copie, impression et reset | rendu physique à contrôler en P4 |
| Style | 9 | ton sobre, calculs lisibles, limites visibles | guide volontairement dense à éprouver en lecture humaine |
| Conversion | 9 | une seule CTA après l'action autonome ; bons et mauvais ajustements visibles | modalités commerciales finales renvoyées au parcours de contact |
| SEO et produit | 10 | métadonnées cohérentes, noindex de reprise, données structurées sobres, temps écran exact | aucune promesse de classement |

**Total : 98/100.**

Les deux points non attribués décrivent des plafonds de validation humaine et
de parcours commercial. Ils ne correspondent pas à un défaut P0, P1 ou P2 du
snapshot.

## 4. Revalidation des cinq incidents R1

### 4.1 P1-01 fermé — une porte exige désormais une preuve

La fonction `effectiveMobileGateStatus` traite toute preuve vide ou composée
d'espaces comme `unknown`, même si le statut déclaré est `pass` ou `fail`.
`qualifyMobileCandidate`, le résumé d'écran et
`buildMobileDecisionReport` utilisent tous cette même valeur effective.

Reproduction indépendante :

| Cas | Résultat moteur | Résultat écran | Résultat rapport |
| --- | --- | --- | --- |
| un `pass` vide | non qualifiée | « Option non qualifiée » | `NON QUALIFIÉE` + `PASS non étayé` |
| un `pass` avec espaces | non qualifiée | « Option non qualifiée » | `NON QUALIFIÉE` + preuve requise |
| un `fail` vide, six autres portes étayées | non qualifiée, 1 porte ND | « Option non qualifiée » | aucune élimination |
| sept `pass` avec preuves | qualifiée | « Option qualifiée sur les portes » | `QUALIFIÉE` |
| un `fail` avec preuve, six `pass` avec preuves | éliminée | « Option éliminée » | `ÉLIMINÉE — Fonction éliminatoire` |

Le rapport ne produit plus la contradiction `QUALIFIÉE` / `preuve ND`.
Une simple chaîne non vide ne prouve évidemment pas son authenticité : le
guide demande build, commit, appareil, scénario, date et responsable, puis une
relecture. Il serait trompeur qu'un formulaire prétende certifier
automatiquement la valeur factuelle d'une pièce saisie.

**État : fermé.**

### 4.2 P1-02 fermé — les hypothèses TCO sont exportées et rejouables

Pour chaque option, le rapport contient avant les totaux les dix entrées :

1. taux des journées techniques ;
2. coût du temps interne ;
3. construction initiale ;
4. appareils, comptes et mise en place ;
5. maintenance technique annuelle ;
6. évolutions métier annuelles ;
7. incidents et sécurité annuels ;
8. temps interne annuel ;
9. services récurrents annuels ;
10. sortie et reprise.

Chaque ligne conserve son unité et affiche `ND` si la valeur n'est pas connue.
Les valeurs ont été extraites du texte exporté, puis recalculées sans réutiliser
les totaux affichés.

| Horizon | A recalculée depuis l'export | A exportée | B recalculée depuis l'export | B exportée |
| --- | ---: | ---: | ---: | ---: |
| 12 mois | 119 700 € | 119 700 € | 124 900 € | 124 900 € |
| 36 mois | 186 700 € | 186 700 € | 189 300 € | 189 300 € |
| 60 mois | 253 700 € | 253 700 € | 253 700 € | 253 700 € |

Avec vingt journées techniques ajoutées à 650 € HT :

| Horizon | A sensibilisée recalculée/exportée | B sensibilisée recalculée/exportée |
| --- | ---: | ---: |
| 12 mois | 132 700 € | 137 900 € |
| 36 mois | 199 700 € | 202 300 € |
| 60 mois | 266 700 € | 266 700 € |

Les douze rapprochements sont exacts. Une tierce personne peut refaire les
montants à partir du seul rapport copié ou imprimé.

**État : fermé.**

### 4.3 P2-01 fermé — temps de lecture limité au contenu écran

Le `<pre>` du rapport d'impression porte maintenant
`data-read-time-exclude="true"`.

La mesure indépendante du rendu serveur donne :

```text
rapport print exclu : 1 bloc
mots visibles du corps : 4 179
convention : 200 mots/minute
arrondi : 21 minutes
registre : 21 minutes
```

Sans l'exclusion, le rendu R2 compterait aussi les hypothèses et résultats
répétés dans le rapport caché. Le marqueur retire bien ce doublon, sans retirer
l'outil visible ni la FAQ.

**État : fermé.**

### 4.4 P2-02 fermé — sensibilités invalides en ND

La normalisation accepte seulement un nombre fini supérieur ou égal à zéro.

| Entrée | Moteur/rapport | Écran |
| --- | --- | --- |
| `-1` | `ND` | valeur effacée, `aria-invalid=true`, alerte accessible |
| `NaN` | `ND` | aucun scénario calculé |
| `Infinity` | `ND` | aucun scénario calculé |
| `0` | valeur connue | sensibilité `+0 jours` autorisée |
| `20` | valeur connue | trois horizons calculés |

Le rapport invalide ne contient ni `NaN`, ni `Infinity`, ni `+-`. Pour chacun
des dix postes TCO, `undefined`, une valeur négative, `NaN` ou `Infinity`
produit aussi un résultat inconnu. Un scénario dont les dix valeurs sont zéro
reste connu et vaut bien zéro aux trois horizons : le moteur distingue donc un
zéro explicite d'une donnée absente.

**État : fermé.**

### 4.5 P2-03 fermé — échec de copie actionnable

La copie réussie produit un rapport neutre, complet et sans
`undefined`/`NaN`/`Infinity`, puis annonce « Dossier copié ».

Lorsque le presse-papiers et son repli échouent, le message devient :

> La copie a échoué dans ce navigateur. Utilisez le bouton « Imprimer le
> dossier ».

Il ne propose plus de sélectionner un rapport caché. Les deux branches ont été
reproduites.

**État : fermé.**

## 5. Contrôle fonctionnel et accessibilité statique

### 5.1 Cohérence générale

- les dossiers A et B conservent des états indépendants ;
- les sept portes existent séparément ;
- un échec étayé passe avant le coût ;
- un poste TCO invalide ou absent bloque tous les totaux concernés ;
- les TCO centraux ne changent pas quand une sensibilité est affichée ;
- le rapport reste neutre et ne désigne automatiquement ni React Native, ni
  Flutter ;
- la copie et l'impression utilisent le même rapport ;
- annuler la remise à zéro conserve les données ;
- confirmer la remise à zéro efface le besoin, les preuves, les portes et les
  coûts des deux options.

### 5.2 Structure accessible observée

| Contrôle | Résultat |
| --- | --- |
| contrôles de formulaire dans l'état initial | 36 |
| contrôles avec libellé programmatique | 36 |
| contrôles sans libellé | 0 |
| boutons de choix A/B | 2 |
| boutons avec `aria-pressed="true"` | exactement 1 |
| `fieldset` / `legend` | 4 / 4 |
| régions de statut `aria-live="polite"` | 2 |
| confirmation destructive | `role="alert"` + `aria-live="assertive"` |
| erreur de sensibilité | `role="alert"`, reliée par `aria-describedby` |
| boutons d'action | nom visible et hauteur minimale de 44 px |

Ce contrôle porte sur le DOM et les relations programmatiques. Le focus réel,
les contrastes rendus, le zoom, la navigation clavier complète et les
technologies d'assistance doivent encore être éprouvés en P4.

## 6. Faits instables 2026 revérifiés

Les affirmations décisives restent conformes aux sources primaires ouvertes le
25 juillet 2026 :

| Sujet | Résultat |
| --- | --- |
| React Native | `0.86` est la stable la plus récente ; `0.86` et `0.85` sont actives ; `0.84` est en fin de cycle ; `0.87` reste future au 10/08/2026 |
| New Architecture | depuis RN `0.82`, elle est la seule architecture |
| Expo | SDK `57.0.0` cible RN `0.86`, React `19.2.3`, Node `22.13.x`, Android API 36, iOS 16.4+ et Xcode 26.4+ |
| Flutter | la branche stable listée est `3.44.0` ; la documentation consultée reflète `3.44.7` |
| Apple | depuis le 28/04/2026, les uploads iOS/iPadOS exigent le SDK 26 ou ultérieur ; Xcode 26 est l'outillage courant lié |
| Google Play | à compter du 31/08/2026, nouvelles apps et mises à jour ordinaires ciblent Android 16/API 36, avec exceptions, règle distincte des apps existantes et extension possible au 01/11/2026 |

Sources principales :

- https://reactnative.dev/versions
- https://reactnative.dev/blog/2025/10/08/react-native-0.82
- https://docs.expo.dev/versions/latest/
- https://docs.flutter.dev/release/release-notes
- https://developer.apple.com/app-store/submitting/
- https://developer.android.com/google/play/requirements/target-sdk

La page publique borne ces faits à sa date de vérification et demande de
revérifier les exigences avant chaque soumission. Elle ne transforme aucune
version actuelle en promesse de support futur.

## 7. Métadonnées, robots et produit éditorial

| Élément | Résultat P3 R2 |
| --- | --- |
| titre | `React Native ou Flutter : choisir par la preuve` |
| description | fonctions critiques, équipe, appareils, TCO, maintenance et reprise |
| canonical | `/guides/react-native-ou-flutter` |
| robots | `noindex, nofollow` |
| statut registre | `ready-for-human-review` |
| présence dans la liste des guides publiés/sitemap | absente |
| date de modification | `2026-07-25` |
| temps de lecture | 21 min pour 4 179 mots écran |
| H1 | 1 |
| FAQ visible | oui |
| JSON-LD | `Article` + `BreadcrumbList` uniquement |
| schémas absents | `FAQPage`, `HowTo`, `Offer`, `wordCount` |
| CTA éditoriale | 1 |
| source OG | 1 200 × 630, alt dédié |

Le code de l'image sociale est cohérent. Son rendu pixel réel n'est pas validé
ici : il appartient à P4.

## 8. Contrôles exécutés

```text
Snapshot :
  manifeste P2 R2 : 10/10 empreintes conformes
  manifeste P2 R1 : empreinte historique inchangée
  rapport P3 R1 : conforme à l'empreinte incluse dans R2

Reproductions indépendantes :
  pass vide, pass espaces, fail vide
  sept pass étayés, fail étayé
  cohérence écran / rapport pour les cinq cas
  extraction des dix hypothèses A et B depuis le rapport
  recalcul indépendant de 6 TCO et 6 sensibilités
  ND pour undefined, négatif, NaN et Infinity sur les dix postes
  zéro connu aux trois horizons
  aucune chaîne "+-", "NaN", "Infinity" ou "undefined" dans l'export
  copie succès / échec
  reset annuler / confirmer
  36/36 contrôles étiquetés

Temps de lecture :
  rendu serveur du snapshot R2
  un bloc print exclu
  4 179 mots visibles
  21 min à 200 mots/minute

Tests ciblés :
  8 fichiers réussis sur 8
  72 tests réussis sur 72

Qualité de code :
  eslint ciblé : réussi
  tsc --noEmit : réussi
  git diff --check : réussi

Métadonnées :
  noindex/nofollow et statut humain contrôlés
  route absente des guides publiés
  Article + BreadcrumbList uniquement
  une CTA et un H1
```

Les tests P4 n'ont pas été lancés et ne sont pas revendiqués :

- aucune matrice navigateur 320 à 1 600 px ;
- aucun contrôle de thème clair/sombre rendu ;
- aucun test physique clavier ou lecteur d'écran ;
- aucun PDF Chrome du dossier ;
- aucune inspection visuelle de l'OG ;
- aucun build de production attribué à ce contre-audit.

## 9. Registre d'incidents R2

### P0

Aucun.

### P1

Aucun.

### P2

Aucun.

### Limites conservées, non classées comme incidents P3

1. une preuve saisie doit être contrôlée humainement ; le formulaire vérifie sa
   présence et la cohérence du verdict, pas son authenticité ;
2. le guide attend encore la passe humaine prévue : décideur non spécialiste,
   spécialiste mobile, spécialiste ou personne utilisatrice des technologies
   d'assistance, et contre-lecture sans intérêt React ;
3. le rendu responsive, l'impression physique et l'image sociale restent à
   contrôler en P4 ;
4. les versions, plugins, règles de stores et coûts restent datés et doivent
   être revalidés au projet ;
5. aucun audit éditorial ne peut garantir une première place dans Google.

## 10. GO / NO-GO

| Porte | Verdict | Motif |
| --- | --- | --- |
| intégrité du snapshot P2 R2 | **GO** | 10/10 empreintes conformes |
| fermeture des 2 P1 R1 | **GO** | qualification avec preuve et export TCO rejouable |
| fermeture des 3 P2 R1 | **GO** | temps écran, sensibilité et copie corrigés |
| exactitude des calculs | **GO** | 6 TCO + 6 sensibilités refaits depuis l'export |
| cohérence écran / rapport | **GO** | cinq états de porte reproduits |
| qualité éditoriale P3 | **GO** | 98/100, aucun P0/P1/P2 |
| P3 vers P4 | **GO** | porte froide franchie |
| P4 navigateur/PDF | **À FAIRE** | expressément hors de ce contre-audit |
| publication/indexation | **NON ÉVALUÉE ET NON AUTORISÉE** | revue humaine et P4 non franchies |

**Verdict final : GO P3 vers P4 — 98/100, 0 P0, 0 P1, 0 P2.**

