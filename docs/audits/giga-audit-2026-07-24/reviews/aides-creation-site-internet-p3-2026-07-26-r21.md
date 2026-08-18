# Reprise P3 R21 → R22 — `aides-creation-site-internet`

Date de consolidation : 26 juillet 2026  
Périmètre : guide public, moteur local, parcours, prédiagnostic, tests,
recherche et benchmark mondial  
Statut : **candidat R22 sans note ni GO ; P4 non lancée**

## 1. Double verdict froid du gel R21

Le manifeste
`docs/research/manifests/aides-creation-site-internet-p3-2026-07-26-r20.sha256`
contient **66 fichiers**. Son SHA-256 est
`cdeeccb3fb6a93d58d5545daf57dcbba5a6214a5a541f62da823d1ddc2c6b87f`.
Les deux audits froids ont vérifié ce même gel **66/66 au début et à la fin**,
sans écriture.

Le contrôle factuel, juridique et financier a rendu
**86/100 — NO-GO P4** (`P0 : 0 ; P1 : 3 ; P2 : 0`). Le contrôle expérience,
pédagogie et accessibilité a rendu **86/100 — NO-GO P4**
(`P0 : 0 ; P1 : 1 ; P2 : 2`). **P4 n’a pas été lancée.** Ces deux notes
appartiennent uniquement au gel R21 ; elles ne sont ni reportées ni extrapolées
au candidat R22.

Les six écarts reproduits étaient :

1. les compensations de deux lignes relatives au même SIEG n’étaient pas
   rapprochées entre aide courante et registre, puis entre lignes du registre ;
2. un statut structuré SIEG pouvait contredire littéralement son propre texte de
   preuve sans bloquer le résultat ;
3. aucune trace structurée du registre central français 2026/2027 n’était
   demandée ;
4. les 54 champs du socle restaient simultanément montés, sans vraie progression
   ni reprise d’un brouillon ;
5. les syntaxes CELEX, ELI, URL et Unicode apparaissaient avant la règle métier
   normale ;
6. le prédiagnostic restait une liste statique au lieu d’adapter la conclusion,
   les preuves et la prochaine action.

## 2. Registre correctif intégré au candidat R22

| Clé                                                      | Défaut R21 reproduit                                                                                                             | Correction intégrée au candidat R22                                                                                                                                                                                                                                                                                                                                                                    | Preuve locale attendue avant tout GO                                                                                                                                                                                                                            |
| -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **R22-F-P1-01 — compensations interlignes du même SIEG** | Deux lignes SIEG validées séparément pouvaient produire un résultat favorable malgré un service déclaré identique.               | Le moteur rapproche aide courante ↔ registre et registre ↔ registre pour le même État membre, la même entreprise unique exacte et la fenêtre retenue. Une identité de service exacte bloque ; une graphie seulement proche suspend sans fusion automatique. Deux déclarations individuelles d’absence de compensation ne neutralisent jamais la présence de l’autre ligne.                             | Matrices dans les deux sens, permutation des lignes, identité exacte, proximité de casse, accents et compatibilité Unicode, groupes, États et fenêtres distincts ; limitations visibles et rapport TXT.                                                         |
| **R22-F-P1-02 — cohérence bornée statut/preuve**         | Des couples tels que `mandat = NON` + « acte écrit » ou `compensation = NON` + « autre compensation du même service » passaient. | Un filtre littéral borné détecte les contradictions directes concernant restructuration, mandat SIEG et compensation du même service. Il couvre négations et historiques résolus, mais ne comprend, ne qualifie et n’authentifie aucune pièce. Un texte ne promeut jamais un statut structuré.                                                                                                         | Cas affirmatifs et inverses, mandat oral régularisé par écrit, projet abandonné, ancienne compensation clôturée, accents, casse et espaces Unicode ; statut et preuve restent exportés séparément.                                                              |
| **R22-F-P1-03 — registre central français 2026/2027**    | L’aide courante et les lignes antérieures n’avaient ni statut ni référence de registre.                                          | `centralRegisterStatus` et `centralRegisterReference` existent sur l’aide courante et chaque ligne. Le contrôle commence en France au 1er janvier 2026 pour général, SIEG et pêche-aquaculture, puis au 1er janvier 2027 pour agriculture. `registered` exige une référence formelle ; les autres statuts applicables suspendent. L’outil ne consulte ni n’authentifie la Plateforme « Aides d’État ». | Frontières de dates, alias français bornés, pays hors France, cinq statuts, référence vide ou structurée, aide courante et chaque ligne, nettoyage des champs hors périmètre, messages et TXT séparés.                                                          |
| **R22-UX-P1-01 — parcours progressif et brouillon**      | Le dossier affichait tous ses champs ensemble et ne permettait pas une reprise explicite sans risque de faux verdict.            | Quatre étapes de saisie — profil/source, devis, contrôles/preuves, puis trésorerie/registre/restructuration — précèdent la revue/analyse. Un seul panneau est monté ; l’étape active porte `aria-current="step"`. Le brouillon JSON strict et versionné est exportable/importable localement avant analyse, sans stockage persistant ni réseau ; aucun verdict, TXT ou état imprimable n’est restauré. | SSR et hydratation sans avertissement, précédent/suivant, focus des titres et erreurs, revue avec retour aux quatre étapes, round-trip des lignes, version ancienne, JSON malformé, limite de taille, confirmation d’écrasement, absence de stockage et réseau. |
| **R22-UX-P2-01 — règle métier avant syntaxes avancées**  | Le lecteur rencontrait la grammaire informatique avant de comprendre la décision à prendre.                                      | Le guide explique d’abord le groupe, la période, les aides, le calcul normal et un exemple à 250 000 €. Les réparations CELEX, ELI, URL et Unicode sont regroupées ensuite dans un `<details>` fermé par défaut, explicitement présenté comme une aide de saisie et non comme une qualification juridique.                                                                                             | Ordre DOM et ordre de lecture ; résumé accessible ; panneau fermé dans l’HTML initial ; règle et exemple utilisables sans l’ouvrir.                                                                                                                             |
| **R22-UX-P2-02 — prédiagnostic personnalisé**            | La checklist courte ne produisait aucune réponse adaptée.                                                                        | `SiteAidPreDiagnosis` pose cinq questions tri-état initialisées à « à confirmer ». Progression, conclusion, preuves à obtenir et prochaine action évoluent à chaque réponse. La branche positive affiche seulement un lien vers le dossier complet après cinq « oui documenté », sans promettre l’éligibilité.                                                                                         | Trois branches, cinq groupes radio nommés, pluralisation, statut annoncé, confidentialité locale, aucune ancre positive dans l’état initial et lien au dossier uniquement après cinq preuves déclarées disponibles.                                             |

Le candidat conserve une frontière stricte entre faits structurés, texte
déclaré et droit applicable. Il n’interroge aucun registre, ne lit aucune pièce
et ne remplace ni l’autorité d’octroi, ni un conseil compétent.

## 3. Durcissements découverts pendant l’intégration

La migration réelle du parcours a révélé quatre écarts supplémentaires avant
gel :

- les boutons inactifs portaient initialement `aria-controls` vers des panneaux
  volontairement démontés ; seul le bouton actif référence désormais le panneau
  présent ;
- certaines aides `aria-describedby` du registre étaient définies dans une
  autre étape démontée ; des aides locales distinctes maintiennent maintenant
  tous les IDREF valides ;
- le décret fixe à son article 3 le délai de **transmission des données
  d’octroi** à la Plateforme. Le dossier et le TXT distinguent désormais cette
  transmission de la mise à disposition publique ; les anciennes formulations
  ambiguës sont interdites par test ;
- le temps de lecture affiché est passé de **21 à 37 minutes** après mesure de
  **7 371 mots visibles**. L’ancien chiffre ne décrivait plus la profondeur
  réelle du guide.

Le lien public du registre utilise également sa destination actuelle
`https://data.economie.gouv.fr/explore/assets/aides_minimis/` plutôt que
l’ancienne route redirigée.

## 4. Bornage primaire et apport international

| Source                                                                                                                                                                                    | Règle ou pratique retenue                                                                                                                                                                                                                                                        |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Règlement (UE) 2023/2832](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A32023R2832), article 5, paragraphe 2                                                               | Une aide de minimis SIEG n’est pas cumulable avec une compensation liée au même service, que cette compensation constitue ou non une aide d’État. Le moteur rapproche seulement les identités déclarées et suspend ; il ne qualifie pas le SIEG.                                 |
| [Décret n° 2025-1361](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000053177293), articles 1, 3, 5 et 7                                                                                 | Registre national tous secteurs ; transmission des données d’octroi dans les 20 jours ouvrables ; mise à disposition publique distincte ; entrée en vigueur 2026 pour général, SIEG et pêche-aquaculture, puis 2027 pour agriculture.                                            |
| [Circulaire du Premier ministre](https://agriculture.gouv.fr/telecharger/153667), signée le 3 mars 2026 et datée du 4 mars dans son en-tête                                               | Publication de toutes les aides de minimis, autorités d’octroi concernées, période transitoire, plateforme et responsabilités. Elle confirme que la donnée du registre reste déclarative : la Plateforme ne comporte pas alors de processus de validation des données importées. |
| [W3C WAI — formulaires multipages](https://www.w3.org/WAI/tutorials/forms/multi-page/) et [USWDS — indicateur d’étapes](https://designsystem.digital.gov/components/step-indicator/)      | Groupes logiques, étape et total compréhensibles, navigation précédent/suivant et étape courante programmatiquement identifiable. Aucun habillage étranger n’est copié comme preuve de conformité.                                                                               |
| [GOV.UK — vérifier les réponses](https://design-system.service.gov.uk/patterns/check-answers/) et [récupérer après une erreur](https://design-system.service.gov.uk/patterns/validation/) | Revue avant action finale, retour sans perte de données, résumé d’erreurs et focus sur le contrôle exact. Le dossier local n’effectue aucune soumission administrative.                                                                                                          |
| Corpus États-Unis, Royaume-Uni, Canada, Singapour, Allemagne, Australie et Union européenne consigné dans `docs/research/aides-creation-site-internet-world-benchmark-2026-07-26-r1.md`   | Budget viable sans aide, distinction subvention/prêt, recherche personnalisée, preuve ligne par ligne, ordre des actes, obligations post-attribution et décision soutenable. Aucun programme, montant, droit ou critère étranger n’est transposé à une entreprise française.     |

## 5. Validation consolidée du candidat R22

| Contrôle                                                    | Résultat                                                                                                                                                                                               |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Moteur décisionnel et matrices R22                          | **923/923 tests réussis**                                                                                                                                                                              |
| Parcours, scénarios historiques, SSR, axe-core et brouillon | **75/75 tests réussis** : 66 composant + 9 parseur de brouillon                                                                                                                                        |
| Prédiagnostic personnalisé et accessibilité                 | **6/6 tests réussis**                                                                                                                                                                                  |
| Contrat documentaire, factuel et pédagogique                | **42/42 tests réussis**                                                                                                                                                                                |
| Suite R22 consolidée                                        | **1 046/1 046 tests réussis**                                                                                                                                                                          |
| Métadonnées, catalogue, langage et indexation ciblés        | **104/104 tests réussis**                                                                                                                                                                              |
| TypeScript sans émission                                    | conforme                                                                                                                                                                                               |
| ESLint ciblé sans avertissement                             | conforme                                                                                                                                                                                               |
| Prettier ciblé                                              | conforme                                                                                                                                                                                               |
| Corpus SEO complet                                          | **491/492** ; seul échec : ancien gel P4 de `prioriser-fonctionnalites-mvp-saas` sur `src/lib/guides.ts`, attendu `8663e6…`, actuel `c4b7e0…`, hors clôture de ce guide                                |
| Construction Next.js directe                                | conforme ; TypeScript conforme et **159/159 pages statiques** générées                                                                                                                                 |
| Vérificateur de l’artefact d’indexation après correction    | `aides-creation-site-internet` ne produit plus d’erreur ; deux alertes globales subsistent sur les temps de lecture de `crm-sur-mesure-ou-hubspot` et `seo-local-pme`, hors périmètre de cette reprise |

La construction directe isole la preuve d’intégration de ce guide après
l’échec connu du gel SEO global. Elle ne transforme ni les trois alertes
externes — un manifeste historique et deux temps de lecture d’autres guides —
ni l’état global en succès.

## 6. Preuve sur l’HTML réellement construit

Le fichier local
`.next/server/app/guides/aides-creation-site-internet.html` pèse
**491 623 octets** au moment du contrôle. Il contient :

- le titre `Aides pour créer un site internet en 2026 · Hagnéré Code` ;
- un canonical unique
  `https://hagnere-code.ai/guides/aides-creation-site-internet` ;
- `noindex, nofollow`, cohérent avec le statut
  `ready-for-human-review` : aucune publication indexable n’est revendiquée ;
- une URL Open Graph identique au canonical, une image annoncée en
  `1200 × 630` et exactement deux blocs JSON-LD ;
- `Lecture : 37 min` ;
- le prédiagnostic avant le dossier : quinze radios, cinq réponses initiales
  « à confirmer », une conclusion suspendue et aucune ancre positive initiale ;
- cinq boutons d’étape, exactement un `aria-current="step"`, un seul
  `aria-controls` résolu et un seul panneau monté, `profile` ;
- dix-sept contrôles dans ce panneau initial, et non les 54 champs du socle
  simultanément visibles ;
- l’export et l’import du brouillon JSON dès l’ouverture, mais aucun bouton
  d’analyse, TXT ou impression, aucun résultat, résumé d’erreurs ou rapport
  imprimable tant que la revue n’est pas ouverte et l’analyse explicitement
  demandée ;
- l’exemple métier normal avant les formats avancés, dont le `<details>` est
  fermé par défaut ;
- le lien courant du registre public, la règle de transmission et la
  confidentialité locale sans stockage automatique ni réseau.

Les comportements après hydratation sont couverts séparément : les totaux
conditionnels 54, 57, 59, 62 et 64 sont reconstruits en visitant les quatre
étapes ; les champs français ajoutent deux contrôles par aide couverte ; les
erreurs ouvrent la bonne étape avant de focaliser le champ ; le TXT et
l’impression restent indisponibles avant analyse.

## 7. Empreintes centrales avant manifeste

```text
docs/research/aides-creation-site-internet.md
b530d618b3b4cc2c5b78ba7a837532ed7fd69c7b9d7a5e87538cdea4caec6a55

docs/research/aides-creation-site-internet-world-benchmark-2026-07-26-r1.md
f87955dbf408964581ba66e11610bd1ead5ee96bbe3ca877a3c767099bb615b6

docs/audits/giga-audit-2026-07-24/guides/aides-creation-site-internet.md
c38ded5f552304ecad56bf366b0b4735e82de04ffbd48a8eb0c70f410c3b7ac7

src/app/guides/aides-creation-site-internet/page.tsx
b703e32c79302520cdb2f4005bf3c9ea80d082c5add9b08f30cebdd3baffc4b2

src/lib/guides.ts
c4b7e02909818c0411035f297c06350187de6ee063e74b5dfc66d8a3f0d9c6ff

src/components/guides/SiteAidDecisionDossier.tsx
ca4dc61eeaa347588dd3f866f8c0f033cf4fa223a3bd47cb184ec6d4935c8908

src/components/guides/SiteAidDecisionDossier.test.tsx
1b98264467fd38f48fac68d027b1bd8d43e0d258d51e1d10c6e53e2cac5fd247

src/components/guides/SiteAidPreDiagnosis.tsx
131ff4279f57465fd1105dc4ab96dcf8e245c47ae610bd41f0f6bed6fedac3e6

src/components/guides/SiteAidPreDiagnosis.test.tsx
784cc92a85e92971857576cc8ad50a96da5fb2044b7be4b1f35621ad0da2cb19

src/lib/site-aid-decision.ts
ac55b645e3c65fbc771f1cbe4b0f7d7f90c52e961c34bb6b8ea19e8375c0211e

src/lib/site-aid-decision.test.ts
e0c204999d54489d2fa0cdd7fa508e10894eee314045bfc54e0ee6cd2cf1e5cb

src/lib/site-aid-draft.ts
342bc5dd454801e754b18a3e5b749643f7d00c037d3a9426fb73fb1140eeecb5

src/lib/site-aid-draft.test.ts
1a86756d511a8a13c610eb0104fa3411afe44399b9fe4323e00d175375f58f82

src/lib/site-aid-guide-quality.test.ts
bf6a4b5eae025450e1221c350293fca0312b7612770c8ed8b4f0031ce8d8ae76
```

## 8. Porte suivante

Les tests, la construction et l’inspection statique prouvent seulement les
comportements couverts. Le candidat R22 complet reçoit dans ce rapport
**aucune note et aucun GO**.

La suite autorisée est :

1. créer le manifeste commun R21 qui gèle ce candidat ;
2. faire relire ce même gel par deux axes froids indépendants ;
3. rouvrir une boucle corrective si un P0, un P1 ou un P2 bloquant est
   reproduit ;
4. lancer P4 dans un navigateur réel et en impression uniquement après un
   double GO.

Ni déploiement, ni disponibilité en production, ni traitement du sitemap, ni
indexation Google, ni classement ne sont prouvés ou revendiqués ici.
