# Contre-audit P3 indépendant — `react-native-ou-flutter`

Date : 25 juillet 2026  
Auditeur : contre-audit indépendant, lecture à froid  
Snapshot : manifeste P2 R1  
Périmètre : recherche principale, benchmark mondial, audit initial, page,
image sociale, entrée du registre, moteur de décision, composant du dossier et
tests associés.  
Hors périmètre : correction des fichiers P2, validation humaine, tests sur
appareils mobiles, publication, déploiement, indexation et garantie de
classement.

## 1. Verdict exécutif

```text
Note : 90/100
Incidents ouverts : P0 = 0 ; P1 = 2 ; P2 = 3
Verdict : NO-GO P3
Suite requise : passe corrective P2 R2, nouveau manifeste immuable, puis
nouveau contre-audit P3 indépendant.
```

La réécriture change réellement de catégorie éditoriale. Elle répond vite,
compare six voies au même périmètre, date les technologies, explique les
fonctions éliminatoires, rend le TCO calculable, traite l’accessibilité, les
stores, l’équipe et la reprise, et déclare loyalement le biais React de
Hagnéré Code. Les faits 2026 décisifs et les calculs publics sont exacts dans le
snapshot audité.

Le NO-GO ne vient donc pas d’un manque de longueur. Il vient de deux défauts du
principal artefact de décision :

1. une option peut être déclarée « qualifiée » ou « éliminée » sans la moindre
   preuve ;
2. le dossier copié et imprimé conserve les totaux TCO mais perd toutes les
   hypothèses qui permettent de les reproduire.

Ces deux défauts contredisent directement la promesse « choisir par la preuve ».
Ils bloquent un verdict premium malgré la très nette progression du guide.

## 2. Intégrité du snapshot

Le manifeste
`docs/research/manifests/react-native-ou-flutter-p2-2026-07-25-r1.sha256`
a été contrôlé indépendamment avec `sha256sum -c`.

| Artefact | Empreinte attendue | Résultat |
| --- | --- | --- |
| `docs/research/react-native-ou-flutter.md` | `5c0392032c447abb021df71aed8cdf9139f059c1071d1058867de1cc34fee226` | conforme |
| `src/app/guides/react-native-ou-flutter/page.tsx` | `1981a1e710787884dd81e86699ff19474bc69596665d0afc24ad34aace308d3c` | conforme |
| `src/app/guides/react-native-ou-flutter/opengraph-image.tsx` | `ca977189a50ca9d9fd9b08855a89038b8f865090cb3fb2a3dbd618e32e6d3bfd` | conforme |
| `src/components/guides/MobileFrameworkDecisionDossier.tsx` | `3fe4a6c4dc618b6266e1bb78becf56e870241c370513c4b05522c635804d9e1f` | conforme |
| `src/components/guides/MobileFrameworkDecisionDossier.test.tsx` | `cfd84aadfabeaabdd749fdbb430f36c462f5a9ea0dffd6ec292364e4016372dd` | conforme |
| `src/lib/mobile-framework-decision.ts` | `4848756683ecb46c3d9e1caf9542c7bb8b8273309d262282a54a1765738e3d3e` | conforme |
| `src/lib/mobile-framework-decision.test.ts` | `ffd0e8b4fa7acaa05354d4c7fae26bf87ae0857a869dd6bd6cf48dae885fe9ea` | conforme |
| `src/lib/react-native-flutter-guide-quality.test.ts` | `b81f878131eaba10893edea8c96dd7c7863b3a4070d056bf1351565f9cfc4118` | conforme |
| `src/lib/guides.ts` | `405cb9c676acec59ec539b5842a7847aa818462d5463407f9761e6ef36ab955b` | conforme |

Résultat : **9 fichiers sur 9 conformes**. Le présent rapport porte bien sur
le snapshot P2 R1 annoncé.

## 3. Cotation sur dix axes

| Axe | Note /10 | Preuve positive | Limite retenue |
| --- | ---: | --- | --- |
| Intention | 10 | réponse directe dans le lead ; besoin d’app vérifié avant le duel | aucune limite bloquante |
| Décision | 8 | éliminatoires avant le prix, six issues, quatre scénarios | le statut « qualifiée » peut être obtenu sans preuve |
| Pédagogie | 9 | jargon défini au moment utile ; fil rouge hors ligne ; p50/p95 expliqués | quelques détails d’outil ne protègent pas encore le lecteur d’une saisie incohérente |
| Profondeur | 9 | modules, hors-ligne, accessibilité, CI, stores, support, migration et reprise | l’artefact exporté perd la décomposition du TCO |
| Preuve | 8 | sources primaires proches, faits datés, hypothèses fictives visibles | l’outil traite une déclaration `pass` vide comme une preuve |
| Comparaison | 10 | RN, Flutter, natif, KMP, PWA et aucune app au même périmètre | aucune limite bloquante dans le corps |
| Originalité et utilité | 9 | dossier local à deux options, TCO, sensibilité, copie, impression et remise à zéro | copie/impression non auditables sans les hypothèses brutes |
| Style | 9 | ton sobre, professionnel, lisible par un décideur non technique | densité élevée mais maîtrisée |
| Conversion | 9 | une seule CTA, après l’action autonome, avec bons et mauvais ajustements | aucune limite bloquante P3 |
| SEO et produit | 9 | métadonnées cohérentes, noindex de reprise, OG dédiée, données structurées sobres | temps de lecture surévalué d’une minute |

**Total : 90/100.**

La note élevée décrit la qualité du corps et de la méthode. Elle ne neutralise
pas les P1 : un artefact signature trompeur sur la qualification ou
irréversible dans son export suffit à maintenir le NO-GO.

## 4. Faits instables 2026 revérifiés

Les pages officielles décisives ont été rouvertes le 25 juillet 2026.

| Sujet | Résultat indépendant | État dans la page |
| --- | --- | --- |
| React Native | `0.86.x` est la stable la plus récente ; `0.86` et `0.85` sont actives, `0.84` est en fin de cycle et `0.87` reste future au 10/08/2026 | correct et correctement borné |
| New Architecture | depuis RN `0.82`, elle est la seule architecture ; les drapeaux de désactivation sont ignorés | correct |
| Expo | SDK `57.0.0` cible RN `0.86`, React `19.2.3`, Node `22.13.x`, Android API 36, iOS 16.4+ et Xcode 26.4+ | l’association publique SDK 57 / RN 0.86 est correcte |
| Flutter | la dernière branche stable listée est `3.44.0` ; la documentation consultée reflète `3.44.7` | correct |
| Apple | depuis le 28/04/2026, les uploads iOS/iPadOS requièrent un SDK 26 ou ultérieur ; Xcode 26 est l’outillage courant associé | correct |
| Google Play | à compter du 31/08/2026, nouvelles apps et mises à jour ordinaires ciblent Android 16/API 36 ; exceptions, règle des apps existantes et extension au 01/11 existent | correct et exceptions annoncées |
| Kotlin Multiplatform | partage possible de modules ou logique, UI native conservée ou UI Compose partagée | correct et sans taux universel |
| PWA | capacités et hors-ligne possibles, mais variables selon navigateur et plateforme | correct et conditionnel |
| Performance | RN doit être mesuré en release ; Flutter sur appareil physique en profile proche de release puis contrôle final | correct |
| Accessibilité | VoiceOver et TalkBack diffèrent par plateforme ; la présence d’API ne qualifie pas un parcours | correct |

Sources primaires principales :

- https://reactnative.dev/versions
- https://reactnative.dev/blog/2025/10/08/react-native-0.82
- https://reactnative.dev/blog/2024/06/25/use-a-framework-to-build-react-native-apps
- https://docs.expo.dev/versions/latest/
- https://docs.flutter.dev/release/release-notes
- https://docs.flutter.dev/platform-integration/platform-channels
- https://developer.apple.com/app-store/submitting/
- https://developer.android.com/google/play/requirements/target-sdk
- https://kotlinlang.org/docs/multiplatform/kmp-overview.html
- https://web.dev/learn/pwa/capabilities

Les liens factuels du corps ont tous répondu HTTP 200 au contrôle direct. Le
profil LinkedIn déclaré dans `sameAs` a renvoyé le code anti-robot `999` à
`curl` ; ce comportement ne constitue pas une preuve de lien cassé pour un
navigateur humain et n’est pas classé comme incident.

Conclusion factuelle : **aucun P0 de source ou de calcul n’a été trouvé**.
SILKHOM, TechCrunch, Shopify `86 %` et les autres preuves faibles du snapshot
initial ont disparu du raisonnement public.

## 5. Recalcul indépendant des montants

### 5.1 Exemple public intégré à la page et à l’outil

Décomposition indépendante :

| Élément | Option A | Option B |
| --- | ---: | ---: |
| initial, mise en place comprise | 78 400 € | 84 900 € |
| récurrent annuel | 33 500 € | 32 200 € |
| sortie appliquée à l’horizon | 7 800 € | 7 800 € |

| Horizon | Option A recalculée | Option B recalculée | Écart |
| --- | ---: | ---: | ---: |
| 12 mois | 119 700 € | 124 900 € | A : -5 200 € |
| 36 mois | 186 700 € | 189 300 € | A : -2 600 € |
| 60 mois | 253 700 € | 253 700 € | égalité |

Les six montants, les trois écarts et le seuil de rattrapage à cinq ans sont
exacts.

### 5.2 Exemple distinct du benchmark mondial

| Horizon | Candidat A recalculé | Candidat B recalculé |
| --- | ---: | ---: |
| 12 mois | 116 700 € | 115 400 € |
| 36 mois | 197 850 € | 199 800 € |
| 60 mois avec sortie | 295 250 € | 308 900 € |

Les six montants du benchmark mondial sont exacts.

### 5.3 Sensibilités et statu quo

```text
20 jours × 650 € = 13 000 €

15 min / 60
× 20 personnes
× 220 jours
× 32 €/h
× 70 %
= 24 640 €/an
```

Les deux calculs sont exacts et leurs limites sont visibles : le premier est
une hypothèse de module critique ; le second est une capacité potentiellement
réaffectable, pas une économie de trésorerie.

### 5.4 Cas ND

Pour chacun des dix postes TCO obligatoires, `undefined`, une valeur négative,
`NaN` ou `Infinity` produit bien un résultat `unknown`. Un zéro explicitement
saisi reste une valeur connue, ce qui est cohérent si ce zéro est réellement
justifié.

La sensibilité ne respecte pas complètement cette règle : une valeur négative
est conservée dans l’état, ignorée par `addCriticalModuleDays`, puis présentée
comme `+-5 jours` avec le TCO central inchangé. Ce défaut est classé P2-02.

## 6. Audit fonctionnel du dossier de décision

### 6.1 Comportements conformes

- deux options indépendantes ; une saisie dans A ne contamine pas B ;
- un seul bouton d’option porte `aria-pressed="true"` ;
- sept portes distinctes avec `pass`, `fail` et `unknown` ;
- tout poste TCO requis vide bloque les trois totaux ;
- les calculs 12/36/60 et la sensibilité positive sont exacts ;
- un `fail` passe avant le prix ;
- copie construite à partir des deux dossiers, sans désigner automatiquement
  React Native ou Flutter ;
- impression volontairement limitée au rapport ;
- réinitialisation protégée par une confirmation accessible ; annuler conserve
  les données et confirmer les efface ;
- 36 contrôles de formulaire présents dans le rendu initial, 36 libellés
  programmatiques, 0 contrôle non étiqueté ;
- `fieldset`/`legend`, régions `aria-live`, boutons nommés et tailles minimales
  de contrôle présents dans la source.

### 6.2 Limite de cette P3

La règle d’impression a été inspectée en source et son déclenchement est couvert
par test de composant. La pagination PDF physique, les pages blanches, les
largeurs 320 à 1600 px, les thèmes et le comportement de vrais lecteurs
d’écran relèvent de P4. Ils ne sont ni déclarés réussis, ni transformés en
incidents P3 sans observation.

## 7. Incidents ouverts

### P1-01 — Une déclaration sans preuve peut qualifier ou éliminer une option

**Preuve exacte**

- `src/lib/mobile-framework-decision.ts:247-263` ne regarde que
  `gate.status`. Le champ `gate.evidence` n’entre jamais dans la qualification.
- `src/components/guides/MobileFrameworkDecisionDossier.tsx:485-519` présente
  pourtant le statut « Pass — démontré » à côté d’un champ intitulé « Preuve,
  version, appareil et date ».
- `src/components/guides/MobileFrameworkDecisionDossier.test.tsx:117-130`
  passe les sept listes à `pass`, ne remplit aucune preuve et attend
  explicitement « Option qualifiée sur les portes ».
- Reproduction indépendante : les sept statuts `pass` et sept preuves vides
  renvoient `{"status":"qualified"}`. Le rapport copié juxtapose alors
  `Verdict des portes : QUALIFIÉE` avec sept lignes `PASS — preuve ND`.
- Le même mécanisme permet un `fail` vide et donc une élimination non étayée.

**Impact lecteur**

Le dirigeant peut croire qu’une fonction, le hors-ligne, l’accessibilité, la
publication ou la reprise a été démontrée alors qu’il n’existe ni build, ni
appareil, ni date, ni résultat. Le cœur du guide promet exactement l’inverse.

**Correction minimale**

Traiter tout statut `pass` ou `fail` dont la preuve est vide ou composée
d’espaces comme une porte incomplète, donc non qualifiée. Le rapport doit
utiliser un libellé cohérent, sans jamais associer `QUALIFIÉE` à `preuve ND`.
Ajouter des tests unitaires et composant pour :

1. `pass` vide ;
2. `pass` avec espaces ;
3. `fail` vide ;
4. sept preuves non vides ;
5. cohérence du rapport copié.

**Revalidation**

Rejouer la qualification et le rapport sur A et B, avec au moins un cas
qualifié, un cas non qualifié et un cas éliminé étayé.

### P1-02 — Le dossier copié ou imprimé perd les hypothèses TCO

**Preuve exacte**

- `src/lib/mobile-framework-decision.ts:354-360` exporte seulement les trois
  totaux et une sensibilité à 36 mois.
- Aucun des dix champs saisis — taux technique, taux interne, jours initiaux,
  coût fixe, maintenance, évolutions, incidents, temps interne, services,
  sortie — n’est inscrit dans `buildMobileDecisionReport`.
- Une reproduction avec les dix valeurs A remplies fournit bien
  `119 700 / 186 700 / 253 700 €`, mais aucune ligne ne contient les libellés
  ou unités des hypothèses.
- `src/app/guides/react-native-ou-flutter/page.tsx:1049-1052` demande pourtant
  au lecteur de transmettre « les hypothèses TCO ».
- Le même texte sert à la copie et au `<pre>` d’impression.

**Impact lecteur**

Un associé, un acheteur ou un prestataire reçoit des totaux impossibles à
recalculer. Deux dossiers peuvent afficher le même montant tout en cachant des
hypothèses incompatibles. L’artefact n’est donc pas encore une preuve
partageable ou auditable.

**Correction minimale**

Exporter, pour chaque option, les dix valeurs brutes avec leur libellé et leur
unité avant les totaux. Conserver `ND` champ par champ. Ajouter les trois
sensibilités 12/36/60, ou expliquer explicitement qu’un coût initial produit le
même delta aux trois horizons. Ajouter un test qui reconstruit le scénario A à
partir du seul texte copié.

**Revalidation**

Copier puis imprimer un dossier complet A/B ; une tierce personne doit pouvoir
refaire les six totaux sans rouvrir l’interface.

### P2-01 — Le temps de lecture compte un rapport invisible à l’écran

**Preuve exacte**

- `MobileFrameworkDecisionDossier.tsx:320-322` rend un `<pre>` avec
  `className="... hidden ... print:block"`.
- Le script de mesure n’exclut que les éléments marqués
  `data-read-time-exclude="true"`.
- Mesure officielle actuelle : `4 492 mots`, arrondi à `22 min`.
- Même extraction, après retrait du seul rapport réservé à l’impression :
  `4 179 mots`, arrondi à `21 min`.
- `src/lib/guides.ts:1464` affiche encore `22`.

**Impact lecteur**

La métadonnée ne correspond pas au volume réellement lisible à l’écran.

**Correction minimale**

Exclure explicitement le `<pre>` de la mesure, puis régler le registre sur la
nouvelle valeur calculée et tester l’écart.

### P2-02 — Une sensibilité négative produit un résultat trompeur

**Preuve exacte**

- `addCriticalModuleDays` ignore les nombres négatifs et retourne l’entrée
  centrale inchangée (`mobile-framework-decision.ts:266-276`).
- Le composant conserve néanmoins la valeur négative et affiche la
  sensibilité.
- Reproduction : `-5` donne `Sensibilité module critique (+-5 j) à 36 mois :
  186 700 € HT`, soit le total central.

**Impact lecteur**

Une saisie invalide ressemble à un scénario calculé au lieu de rester ND.

**Correction minimale**

Transformer toute sensibilité négative ou non finie en `undefined`/ND, afficher
un message d’erreur accessible et ajouter les cas `-1`, `NaN`, `Infinity` et
zéro aux tests.

### P2-03 — Le message d’échec de copie propose une action impossible

**Preuve exacte**

- `MobileFrameworkDecisionDossier.tsx:741-743` dit : « Utilisez l’impression
  ou sélectionnez le rapport ».
- Le seul rapport textuel complet est le `<pre>` caché à l’écran aux lignes
  320-322.

**Impact lecteur**

Si le presse-papiers et son repli échouent, le lecteur ne peut pas exécuter la
solution proposée.

**Correction minimale**

Soit afficher un rapport en lecture seule et sélectionnable après l’échec, soit
retirer cette instruction et orienter seulement vers l’impression. Couvrir le
cas `copyTextToClipboard=false`.

## 8. Métadonnées, robots et produit éditorial

Contrôle sur le rendu courant du snapshot :

| Élément | Résultat |
| --- | --- |
| route | HTTP 200 |
| title | `React Native ou Flutter : choisir par la preuve` |
| meta description | cohérente avec fonctions critiques, TCO, maintenance et reprise |
| canonical | `https://hagnere-code.ai/guides/react-native-ou-flutter` |
| robots de page | `noindex, nofollow` |
| statut registre | `ready-for-human-review` |
| H1 | 1, cohérent avec la décision |
| H2 visibles dans le rendu | 14, dont sections de mise en page |
| JSON-LD | `Article` + `BreadcrumbList` uniquement |
| schémas absents | `FAQPage`, `HowTo`, `Offer`, `wordCount` |
| CTA éditoriale | 1 |
| sitemap courant | route absente tant que la porte humaine reste active |
| image OG | HTTP 200, PNG 1 200 × 630, texte lisible et non tronqué |
| dateModified | `2026-07-25`, cohérente avec le snapshot |
| temps de lecture | 22 min déclaré ; 21 min de contenu écran après exclusion du rapport d’impression |

Le `noindex, nofollow` est cohérent avec la reprise. Ce rapport ne valide ni
publication, ni présence en sitemap de production, ni indexation.

## 9. Contrôles exécutés

```text
Manifeste :
  sha256sum -c
  9/9 fichiers conformes

Tests ciblés :
  8 fichiers
  66/66 tests réussis

Qualité de code :
  eslint ciblé : réussi
  tsc --noEmit : réussi
  git diff --check : réussi

Temps de lecture :
  rendu courant : 4 492 mots / 22 min
  hors rapport print caché : 4 179 mots / 21 min

Rendu et métadonnées :
  route HTTP 200
  title, description, canonical, noindex/nofollow contrôlés
  Article + BreadcrumbList contrôlés
  OG HTTP 200, PNG 1 200 × 630, inspection visuelle réussie

Calculs :
  12/36/60 des exemples public et mondial refaits
  sensibilité de 13 000 € refaite
  statu quo de 24 640 €/an refait
  ND : undefined, négatif, NaN, Infinity et zéro contrôlés

Outil :
  deux options, statuts, TCO, copie, impression source, remise à zéro,
  libellés et neutralité contrôlés
  qualification sans preuve reproduite indépendamment
```

Les tests verts prouvent que le code fait ce qu’ils décrivent. Pour P1-01,
ils confirment aussi que le comportement incorrect est actuellement inscrit
dans le contrat de test ; ils ne le rendent pas acceptable.

## 10. GO / NO-GO

| Porte | Verdict | Motif |
| --- | --- | --- |
| intégrité du snapshot P2 R1 | **GO** | 9/9 empreintes conformes |
| exactitude des faits 2026 | **GO** | aucune erreur décisive trouvée |
| exactitude des calculs publics | **GO** | tous les montants refaits |
| qualité du corps éditorial | **GO sous réserve de l’artefact** | profondeur et comparaison désormais premium |
| outil de décision | **NO-GO** | qualification sans preuve et export TCO non auditables |
| P3 vers P4 | **NO-GO** | 2 P1 et 3 P2 ouverts |
| publication/indexation | **NON ÉVALUÉE ET NON AUTORISÉE** | statut humain, P3 et P4 non franchis |

**Verdict final : NO-GO P3 — passe corrective P2 R2 requise.**

Une fois les deux P1 et trois P2 corrigés, produire un nouveau manifeste, faire
rejouer les calculs et relancer un contre-audit froid. Le classement Google ne
peut pas être garanti ; le présent verdict porte uniquement sur la qualité et
la défendabilité du guide.
