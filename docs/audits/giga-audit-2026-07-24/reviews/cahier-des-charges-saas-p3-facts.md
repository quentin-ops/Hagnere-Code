# Cahier des charges SaaS — revalidation P3 factuelle finale

Date du contrôle : 24 juillet 2026  
Type : revalidation indépendante en lecture seule du snapshot corrigé.  
Verdict : **GO**  
Score : **97/100 — 19,4/20**  
Anomalies résiduelles : **P0 = 0 · P1 = 0 · P2 = 1 non bloquante**

Les trois P1 du contrôle précédent sont fermés : les rôles du cas DossierClair
sont désormais cohérents, les trois devis décrivent le même lot de migration et
les zéros sont justifiés, et la page ne classe plus l'offre B tant que les
inconnus restent ouverts. Les calculs, exports, sources et portes d'indexation
ont été rejoués sur ce snapshot.

## 1. Hashes du snapshot revalidé

| Fichier | SHA-256 |
|---|---|
| `src/app/guides/cahier-des-charges-saas/page.tsx` | `25c518d6ae4c4fe3638b5f751b516a30d33fb8a7cf50ad42a0204dd37b0816ed` |
| `src/app/guides/cahier-des-charges-saas/opengraph-image.tsx` | `2685d5601220734d3b379a7725e965311d477b703de5e9106397f9363734aad4` |
| `src/components/guides/SaasSpecificationKit.tsx` | `6b80c2fff119806ce383f8b0afe722c504eae8645f6111891862fcc707834aa1` |
| `src/components/guides/SaasSpecificationKit.test.tsx` | `67037e46c011f9fa01c853b684d1d6a028de44121653cabec3d51904e97a72fc` |
| `src/lib/saas-specification-kit.ts` | `0653ca8695ce8381aa652f84a6564d3b85931962f4720ff73069ca1945eeb587` |
| `src/lib/saas-specification-kit.test.ts` | `c122e84f2dc6ae3e145fa31cf81cf537066ba6361627874cbddef4cf2b06426b` |
| `src/lib/guides.ts` | `d8b6d8bae8873aafd4daae265067d3523aef5a2a1aaa02f246b3c888ce74e45e` |
| `src/lib/guide-human-language.test.ts` | `bb10c76df7a76af76628723573057e710c9290fa32548e1e7542c0182a591500` |
| `docs/research/cahier-des-charges-saas.md` | `35739b70e09cca2f2cf229e876a9480b5ccfe2715882ec400919082d322003ab` |
| `docs/audits/giga-audit-2026-07-24/research/cahier-des-charges-saas-deep-dive.md` | `30b4d1e5fc75ddffa66364138ad3df014e482c097255dba205fb483d33311de6` |

Note : le hash du registre est celui fourni pour le snapshot gelé. Les hashes
des fichiers de production et du kit ont été relus localement avant ce verdict.

## 2. Recalculs indépendants

La formule utilisée par le code est :

`étude + construction + migration + sortie + horizon × (maintenance et assistance mensuelles + infrastructure mensuelle + licences mensuelles)`.

Le coût C utilise volontairement **583,33 €/mois** d'infrastructure, soit
13 999,92 € sur 24 mois. Les valeurs affichées sont donc arrondies à deux
décimales, et non présentées à tort comme 14 000 € exacts.

| Horizon | Offre A | Offre B | Offre C |
|---:|---:|---:|---:|
| 12 mois | 94 100 € | 89 350 € | 95 449,96 € |
| 24 mois | 123 200 € | 111 700 € | 120 899,92 € |
| 36 mois | 152 300 € | 134 050 € | 146 349,88 € |

Recalculs :

- A : `65 000 + 2 425 × horizon` ;
- B : `67 000 + 1 862,50 × horizon` ;
- C : `70 000 + 2 120,83 × horizon`, arrondi au centime à chaque horizon.

Les neuf résultats du tableau sont reproduits par le code et par un calcul
indépendant. La sortie n'est comptée qu'une fois ; chaque poste mensuel est
compté une fois ; aucun double comptage mathématique n'a été trouvé.

Autres calculs vérifiés :

- préparation : `8×75 + 6×45 + 3×60 + 4×50 = 1 250 €` pour 21 h ;
- inconnue : `3×900 = 2 700 €`, perte tardive `9×900 + 4 000 = 12 100 €`,
  seuil théorique `2 700/12 100 = 22,314... %` ;
- sensibilités : 1 815/−885 €, 3 630/+930 €, 6 050/+3 350 € ;
- recette : `30×12 min + 8×10 min + 2 h = 9 h 20`, soit 513,33 € à 55 €/h ;
- pilote manuel : `8×6×55 + 600 = 3 240 €`.

## 3. Fermeture des trois anciens P1

### P1-1 — rôles Claire / Léa / fondatrice : FERMÉ

La page et l'export utilisent maintenant la même convention :

- la fondatrice de DossierClair décide, consulte, finance et récupère le code ;
- Claire administre l'espace Atelier Nord, crée et affecte les dossiers, puis
  renvoie ou valide ;
- Léa complète les dossiers qui lui sont affectés ;
- Studio Rivage sert de seconde entreprise fictive pour le test d'isolement.

La préparation, la règle commerciale, la double sortie et le parcours DC-01
emploient cette même répartition. Aucun ancien texte ne présente Claire comme
fondatrice et cliente dans le même scénario.

### P1-2 — périmètre de migration et zéros : FERMÉ

La page et le Markdown téléchargé décrivent le même lot limité : 240 dossiers
historiques, trois CSV documentés, sans pièces jointes, cartographie, import à
blanc, comptage avant/après, échantillon de 30 dossiers, lignes refusées et
retour arrière. Les champs libres non cartographiés et nouvelles sources sont
explicitement exclus.

La ventilation des offres est désormais écrite :

- A : étude incluse dans la construction ; migration séparée à 12 000 € ;
- B : étude et migration limitée incluses dans les 62 000 € de construction ;
- C : étude à 8 000 € et migration à 4 000 € séparées.

Le générateur impose une justification textuelle dès qu'un poste vaut zéro.
L'exemple et l'export donnent les justifications correspondantes, tandis que
la case « coûts importants inconnus » continue de suspendre le classement.

### P1-3 — classement de B malgré les inconnus : FERMÉ

La page emploie désormais « somme arithmétique saisie la plus basse, sans
classement » et rappelle que les inconnus de l'exemple restent ouverts. Le
composant et l'export n'affichent « coût renseigné le plus faible » qu'après
levée de toutes les cases d'inconnus et justification des zéros. Le test
interactif vérifie les deux états.

## 4. Point P2 restant, non bloquant

Le pilote manuel est maintenant reproductible dans la page avec sa formule
`8 × 6 × 55 + 600 = 3 240 €`. Il ne reste qu'une amélioration éditoriale
facultative : l'exemple de préparation valorise le temps de Léa, alors que la
page le décrit comme contributrice métier ; si le projet réel change de rôle,
la ligne doit être renommée, mais cela ne crée aucune incohérence dans le cas
fictif actuel.

## 5. Sources primaires et actualité au 24 juillet 2026

| Sujet | Vérification | Verdict |
|---|---|---|
| Habilitations | [CNIL — Gérer les habilitations](https://www.cnil.fr/fr/securite-gerer-les-habilitations), fiche du 13 mars 2024 : validation, revue régulière et retrait au départ ou changement de fonction | Exact |
| Sécurité applicative | [OWASP ASVS](https://github.com/OWASP/ASVS) : dernière version stable 5.0.0, datée de mai 2025 ; citer ASVS ne constitue pas une certification | Exact et correctement limité |
| Accessibilité | [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/), Recommendation du 12 décembre 2024 : critères testables, mais pas une preuve de toutes les obligations juridiques | Exact |
| Propriété intellectuelle | [Légifrance, article L. 131-3](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958) : droits distincts et domaine d'exploitation délimité | Exact, avec renvoi prudent au spécialiste |
| Changement de fournisseur | [Commission européenne — Data Act](https://digital-strategy.ec.europa.eu/en/factpages/data-act-explained) et [règlement (UE) 2023/2854](https://eur-lex.europa.eu/eli/reg/2023/2854/oj/eng) : application depuis le 12 septembre 2025 ; frais réduits encore possibles jusqu'au 12 janvier 2027 | Exact au 24/07/2026 |

Les affirmations juridiques restent qualifiées comme informations générales ; le
guide ne promet ni conformité globale, ni certification, ni gratuité de sortie.

## 6. SEO, métadonnées et environnement

- `<title>` : 58 caractères ; meta description : 138 caractères.
- Canonical, `og:url` et Article :
  `https://hagnere-code.ai/guides/cahier-des-charges-saas`.
- JSON-LD valide : `Article` + `BreadcrumbList`, dates 2026-07-22 et
  2026-07-24, auteur, organisation et image cohérents.
- OG : HTTP 200, PNG 1200 × 630.
- En local ou preview : `noindex, nofollow`.
- En production : `index, follow`, via la fonction d'indexation centralisée.
- Les sept liens internes du guide existent et répondent HTTP 200 sur le
  serveur local.
- Le guide est présent dans `PUBLISHED_GUIDES`, donc dans le sitemap lorsqu'il
  est déployé en production.

## 7. Vérifications exécutées

- Vitest ciblé : **7 fichiers, 57 tests, 57 réussis** ;
- TypeScript `--noEmit` : **réussi** ;
- ESLint ciblé page, composant, calculs, tests et registre : **réussi** ;
- `git diff --check` ciblé : **réussi** ;
- page locale : HTTP 200 ;
- liens internes : 7/7 HTTP 200 ;
- image OG : HTTP 200, PNG 1200 × 630.

Les tests couvrent désormais les horizons 12/24/36, le centime C, les zéros
non justifiés, les exports, les tied results, le refus de classement avec un
inconnu, les valeurs invalides, l'absence de requête réseau et la cohérence du
texte visible.

## Conclusion

Les trois P1 identifiés lors de la première passe sont fermés et vérifiés sur le
snapshot courant. Le guide peut passer la porte P3 avec un **GO**, sous réserve
que le contrôle P4 humain et la validation de publication utilisent exactement
les hashes de la présente passe.
