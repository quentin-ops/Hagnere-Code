# Préparer les contenus d’un site vitrine — revalidation P3 factuelle et kit

Date du contrôle : **24 juillet 2026**  
Type : relecture indépendante en lecture seule du snapshot courant, avec
recalculs séparés, ouverture des sources officielles et vérifications locales.  
Périmètre : page, métadonnées, exemple visible, comparateur et kit Markdown.  
Verdict : **GO factuel sous réserve P4 navigateur et régénération des manifests**  
Score : **97/100 — 19,4/20**  
Anomalies : **P0 = 0 · P1 = 0 · P2 = 2 non bloquantes**

Le guide est substantiel et nettement plus utile qu’une checklist générique :
il part d’une situation de dirigeant, distingue `Prêt / À faire produire / À
confirmer`, montre une note métier transformée en page, sépare les preuves du
droit d’usage, traite les formulaires, compare trois modes de production et
fournit un kit local réellement exportable. Les calculs centraux sont justes.

Les deux défauts P1 de la première revalidation sont désormais fermés : le test
humain définit quatre tâches de sept minutes et le calcul `3×4×7 + 45 = 2 h 09`
est cohérent ; le comparateur demande et exporte une justification visible pour
toute heure à zéro avant d'autoriser le classement. Les réserves restantes sont
documentaires (manifests de recherche obsolètes) et SEO mineures (meta
description longue), sans blocage factuel ou de publication.

## 1. Hashes du snapshot contrôlé

| Fichier | SHA-256 |
|---|---|
| `src/app/guides/preparer-contenus-site-vitrine/page.tsx` | `b585ad8058cb9d47754a954d6d9304f27e5fa505fda6571a7f46ce0b12cf1007` |
| `src/app/guides/preparer-contenus-site-vitrine/opengraph-image.tsx` | `b5d978cac6425b2ece1894c9d7d6f8e2e2a330d61ffdc16a1c895b3d858841d5` |
| `src/components/guides/ContentPreparationKit.tsx` | `7afedf994ce569c1c14891f6c74b7aa9585aae8ed090b0890687cae6d5b455f7` |
| `src/components/guides/ContentPreparationKit.test.tsx` | `8ef83f5caa26c54b8e330cfcc7199bfd7e6169b3020ad94ac57f189a8e40e0a3` |
| `src/lib/content-preparation-kit.ts` | `9afb58316ab1515257740efd773323d332b5afcbbbae62be6288fa819544a75e` |
| `src/lib/content-preparation-kit.test.ts` | `0ba7bf57bdbe6e7cbc9664a94fc71a92b786446f9e4bbda3441a37a7e7ece02b` |
| `src/lib/guides.ts` | `d56d9408d111ccb9affe17320f4b1299c5888063a063b763f34d90f957b10a69` |
| `src/lib/guide-human-language.test.ts` | `bb10c76df7a76af76628723573057e710c9290fa32548e1e7542c0182a591500` |
| `docs/research/preparer-contenus-site-vitrine.md` | `0448dd7e10b5440704707581e11b2228be5fae9b88ef29b2ec3dd81428635527` |
| `docs/audits/giga-audit-2026-07-24/research/preparer-contenus-site-vitrine-deep-dive.md` | `12d2e0e729b3c3c6149e04ae42773a235ac5fd0f0e9adcd55bce7769d9e41604` |
| `docs/audits/giga-audit-2026-07-24/guides/preparer-contenus-site-vitrine.md` | `ac01c5a86fb72d94f69abe847b4982f86d83227b400dbd09d402e81d2b7e9d38` |

Les quatre manifestes `docs/research/manifests/preparer-contenus-site-vitrine-p*.sha256`
ne correspondent plus au hash actuel de `docs/research/preparer-contenus-site-vitrine.md`.
Ils contiennent respectivement `825a2026…`, `a29d4d9d…`, `7b98dfe1…` et
`bb214c38…`, tandis que le fichier courant vaut `0448dd7e…`. Il faut régénérer
ces manifestes dans la passe de correction ; ce n’est pas une modification
effectuée dans le présent audit.

## 2. Recalculs indépendants

### Comparateur de production

Le périmètre affiché est identique dans la page et dans le kit : huit pages,
quatre offres, mêmes preuves et photos, deux cycles de retours, intégration
technique exclue. Avec les valeurs illustratives `direction = 75 €/h`,
`équipe = 40 €/h`, `prestataire = 90 €/h` :

| Mode | Calcul indépendant | Résultat affiché | Verdict |
|---|---:|---:|---|
| Interne | `20×75 + 8×40 + 4×90` | 2 180 € | exact |
| Hybride | `8×75 + 4×40 + 14×90` | 2 020 € | exact |
| Délégué | `5×75 + 3×40 + 26×90` | 2 835 € | exact |

Écarts : hybride moins cher de `2 180 − 2 020 = 160 €` que l’interne ;
délégué plus cher de `2 835 − 2 020 = 815 €` que l’hybride ; hybride demande
`14 − 4 = 10 h` de prestataire supplémentaires. Le composant et les tests
reproduisent les trois totaux et suspendent le classement tant qu’une case
d’inconnue reste cochée.

La formule de sensibilité de la page est correcte :

`coût interne − coût hybride = 12×direction + 4×équipe − 10×prestataire`.

Avec les taux d’exemple, `12×75 + 4×40 = 1 060 €` contre `10×90 = 900 €` :
l’hybride est inférieur de 160 €. L’égalité serait un ex æquo ; le signe `>`
doit donc rester accompagné de cette réserve.

### Test de compréhension : P1 fermé

La page définit maintenant quatre tâches de compréhension à réaliser en sept
minutes chacune, sans annoncer une durée de lecture séparée (`page.tsx`, lignes
1110–1120). Le calcul est donc reproductible : `3 personnes × 4 tâches × 7
min + 45 min = 129 min = 2,15 h`, puis `2,15 × 90 = 193,50 €`. Le texte garde
la réserve correcte : il s'agit d'une capacité valorisée et non d'un taux de
conversion.

### Comparateur : P1 fermé

Le kit contient désormais un champ « Justification des heures à zéro » pour
chaque option (`ContentPreparationKit.tsx`, lignes 536–568). Le calcul invalide
une option qui contient un zéro sans justification (`content-preparation-kit.ts`,
lignes 182–205), l'export reprend les justifications et le classement reste
suspendu tant que la saisie est invalide ou qu'une inconnue est ouverte.
Les tests UI et de calcul couvrent zéro non justifié, justification fournie,
export et maintien de la porte d'inconnue.

## 3. Ce qui est factuellement solide

- Le cas ServiMeca est marqué comme fictif dans la table visible et dans le
  téléchargement Markdown ; ses 12 interventions et 10 comptes rendus ne sont
  donc pas présentés comme une référence Hagnéré Code.
- Le comparatif sépare bien « capacité interne valorisée » et décaissement
  prestataire ; la page refuse de transformer ces hypothèses en prix de marché,
  salaire ou économie comptable.
- Les preuves sont bornées par période et périmètre ; la page retire les
  superlatifs non démontrés et demande une autorisation pour les extraits.
- La recommandation hybride est explicitement une position professionnelle
  conditionnelle, avec contre-cas (rédacteur interne disponible, équipe
  marketing autonome, offre encore floue). Elle ne se présente pas comme une
  loi universelle.
- Le kit est local-only : aucune requête `fetch` lors de la copie, état gardé
  dans l’onglet, copie et téléchargement déclenchés par l’utilisateur ; les
  champs manquants restent des marqueurs et ne sont pas inventés.
- L’échappement des pipes, chevrons, retours à la ligne et antislashs protège la
  structure des tableaux Markdown ; les valeurs négatives, vides et non finies
  bloquent l’export.

## 4. Sources officielles rouvertes le 24 juillet 2026

| Affirmation | Source consultée | Verdict |
|---|---|---|
| Google privilégie un contenu utile au public et ne fixe pas de nombre de mots préféré | [Google Search Central — contenus utiles](https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=fr), sections d’auto-évaluation et contenu people-first | Exact ; la page ne promet pas de classement |
| Les images doivent être découvrables, placées dans du HTML et accompagnées d’un contexte pertinent | [Google Search Central — images](https://developers.google.com/search/docs/appearance/google-images) | Exact dans le guide ; ne pas confondre SEO image et accessibilité |
| L’alternative `alt` dépend de la fonction réelle de l’image | [W3C WAI — arbre de décision alt](https://www.w3.org/WAI/tutorials/images/decision-tree/) | Exact ; le dirigeant fournit le contexte, l’intégrateur tranche selon la page |
| Une photo visible en ligne n’est pas libre de reproduction ; licence et usages doivent être vérifiés | [APIE / economie.gouv.fr — photographies trouvées sur internet](https://www.economie.gouv.fr/apie/utilisation-de-photographies-trouvees-sur-internet-vigilance) | Exact ; article daté 2021 mais toujours accessible et pertinent |
| Droit d’auteur et droit à l’image exigent des vérifications distinctes | [Service-Public — droit à l’image](https://www.service-public.fr/particuliers/vosdroits/F32103) et APIE | Exact dans son principe ; exceptions et contexte doivent rester renvoyés au spécialiste |
| Un formulaire ne doit collecter que les données adéquates, pertinentes et nécessaires | [CNIL — minimiser les données](https://www.cnil.fr/fr/minimiser-les-donnees-collectees) | Exact ; la base juridique et la durée restent à qualifier par traitement |
| Les mentions d’information d’un formulaire sont des illustrations à adapter | [CNIL — exemples de formulaires](https://www.cnil.fr/fr/exemples-de-formulaire-de-collecte-de-donnees-caractere-personnel) | Exact et correctement prudent |
| Un site professionnel doit prévoir les informations d’identification, hébergeur et droits selon le statut et l’activité | [Bercy — mentions sur un site](https://www.economie.gouv.fr/entreprises/developper-son-entreprise/innover-et-numeriser-son-entreprise/mentions-sur-votre-site-internet-les-obligations-respecter), écrit le 11/12/2025 | Exact comme cadre général ; ne pas en faire un modèle universel |
| Une fiche Google Business Profile doit représenter fidèlement l’activité réelle | [Google Business Profile — guidelines](https://support.google.com/business/answer/3038177?hl=fr) | Exact ; aucune garantie de position locale n’est formulée |
| Une cession doit distinguer les droits et délimiter l’exploitation par étendue, destination, lieu et durée | [Légifrance — CPI, article L131-3](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958) | Exact ; la clause concrète ne doit pas être fournie comme conseil juridique personnalisé |

La prudence juridique du guide est donc validée : informations générales,
responsabilité des faits et des autorisations laissée à l’entreprise, renvoi au
conseil adapté pour les cas sensibles. Il faut seulement conserver la
distinction entre droit d’auteur, droit à l’image, RGPD, cookies et mentions
légales ; aucun de ces sujets ne se résume à une checklist universelle.

## 5. SEO, indexation et métadonnées

- `<title>` réel : 54 caractères (`Préparer les contenus d’un site vitrine ·
  Hagnéré Code`) ; cohérent avec l’intention.
- Meta description : 153 caractères. Elle est claire mais longue ; ce n’est
  pas une erreur d’indexation, mais elle peut être tronquée dans l’extrait.
- Canonical, `og:url`, image, `datePublished` (22/07/2026) et `dateModified`
  (24/07/2026) sont cohérents.
- JSON-LD visible : `Article` + `BreadcrumbList`, auteur, organisation, image
  et dates présents. Aucun `FAQPage` n’est injecté, ce qui évite une promesse
  d’enrichissement non vérifiée.
- Route locale observée : HTTP 200 ; image sociale HTTP 200, PNG 1200×630.
- Quatre liens internes distincts du guide ont répondu HTTP 200 sur le serveur
  local : cahier des charges, calendrier, prix du site vitrine et template ou
  sur-mesure.
- En environnement local, le HTML contient `noindex, nofollow`, conformément à
  la fonction centralisée `guideRobots`. La production devra être contrôlée avec
  `index, follow` après configuration de l’environnement ; ce contrôle n’est
  pas déclaré comme une preuve d’indexation Google.

## 6. Vérifications exécutées

- Vitest ciblé : **7 fichiers, 56 tests, 56 réussis** ;
- TypeScript `npx tsc --noEmit --pretty false` : **réussi** ;
- ESLint ciblé page, OG, composant et calculs : **réussi** ;
- page locale : **HTTP 200**, HTML contenant canonical, Article et
  BreadcrumbList ;
- image OG locale : **PNG 1200×630** ;
- liens internes distincts vérifiés : **4/4 HTTP 200** ;
- calcul indépendant Node.js : totaux, écarts, seuil et capacité de test
  reproduits ;
- vérification des quatre manifestes de recherche : **échec attendu**, hashes
  obsolètes par rapport au fichier de recherche courant.

## 7. Réserves résiduelles et porte de publication

1. Régénérer les quatre manifestes `preparer-contenus-site-vitrine-p*.sha256` :
   leur hash reste obsolète par rapport au fichier de recherche courant. C'est
   une dette de traçabilité documentaire, pas un défaut du guide.
2. La meta description de 153 caractères est claire mais peut être tronquée
   dans les extraits ; une version plus courte est une optimisation facultative.
3. Le contrôle P4 navigateur doit encore valider la lecture mobile, les états
   du kit et la compréhension réelle. Ce rapport ne remplace pas ce contrôle
   visuel et ne prétend pas prouver l'indexation Google.

Les deux P1 sont fermés sur le snapshot hashé ci-dessus. Le guide et son kit
peuvent donc recevoir le **GO factuel P3**, sous réserve du contrôle P4 et de la
régénération des manifests de recherche.
