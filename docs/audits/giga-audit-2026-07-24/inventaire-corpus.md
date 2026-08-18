# Giga-audit 2026 — inventaire quantitatif du corpus de guides

Date du relevé : 24 juillet 2026  
Périmètre : tous les guides déclarés dans `src/lib/guides.ts` et leurs routes
`src/app/guides/<slug>/page.tsx`  
Nature de cette passe : audit interne du corpus, sans recherche concurrentielle
ni vérification web des affirmations

Les métriques constituent la **photographie initiale prise avant les
réécritures du giga-audit**. Elles servent de référence avant/après ; une page
modifiée en parallèle doit être remesurée dans sa propre fiche de validation.

## Verdict exécutif

- **101 guides sont déclarés, 101 routes existent et aucun écart n'a été
  trouvé** : zéro guide sans route et zéro route orpheline.
- Les **101 routes ont répondu en HTTP 200** lors du rendu local utilisé pour
  mesurer le contenu réellement visible.
- Le corpus représente **319 338 mots visibles**, soit une moyenne de
  **3 162 mots** et une médiane de **2 998 mots** par guide. La longueur n'est
  donc pas le défaut principal.
- La profondeur obtient 53 A, 39 B, 8 C et 1 D. La valeur décisionnelle obtient
  30 A, 40 B, 29 C et 2 D.
- En retenant par prudence la moins bonne des deux notes, le corpus compte
  **16 A, 49 B, 33 C et 3 D**.
- Le principal chantier n'est pas d'ajouter mécaniquement des paragraphes :
  **55 guides ont moins de trois blocs chiffrés décisionnels, 55 n'ont aucune
  formule ou calcul explicite, 25 n'ont aucun tableau, 13 n'ont ni tableau ni
  ensemble de cartes comparatives détectable et 22 n'expriment aucune position
  professionnelle explicite détectable**.
- Tous les guides contiennent au moins un lien externe et un CTA, mais cette
  homogénéité est aussi un risque de gabarit : 99 guides ont exactement un CTA
  détecté et 34 guides ont exactement six FAQ.
- Cette passe fournit une **ligne de base structurelle**. Elle ne permet pas
  d'affirmer qu'un guide est exact, à jour ou meilleur que ses concurrents :
  ces conclusions exigent les audits de recherche internationaux et les
  relectures thématiques prévus dans les passes suivantes.

## Contrôle d'exhaustivité

| Contrôle | Résultat |
|---|---:|
| Entrées dans `GUIDES` | 101 |
| Entrées dans `PUBLISHED_GUIDES` | 101 |
| Dossiers possédant un `page.tsx` | 101 |
| Slugs du registre sans route | 0 |
| Routes sans entrée dans le registre | 0 |
| Routes rendues en HTTP 200 | 101 |

## Méthode de mesure

Les mesures ont été calculées de manière identique pour les 101 guides.

- **Mots** : texte de l'élément `<article>` rendu depuis le TSX, balises,
  scripts, styles, SVG et éléments marqués `data-read-time-exclude` retirés.
  Il s'agit d'une estimation reproductible du contenu éditorial visible, pas
  d'un comptage linguistique parfait.
- **H2/H3** : titres réellement rendus dans l'article. Les H3 de cartes et de
  blocs pratiques sont inclus.
- **T/C** : tableaux rendus / ensembles de cartes décisionnelles détectés.
  Un ensemble de cartes est une collection TSX nommée comme cartes, options,
  scénarios, solutions, profils, décisions ou variantes, puis réellement
  parcourue avec `map`. Cette mesure est volontairement prudente.
- **Chif./fict.** : blocs contenant au moins deux nombres et un contexte
  décisionnel (euros, pourcentage, coût, durée, leads, clients, etc.) / blocs
  explicitement signalés comme fictifs, illustratifs ou hypothétiques. Un
  chiffre isolé n'est pas compté comme exemple.
- **Form.** : blocs contenant une formule ou une opération explicite avec `=`,
  `×` ou `÷`.
- **Ext./prim.** : liens externes distincts / sources primaires estimées. Le
  second nombre repose sur le domaine officiel d'une administration, d'un
  régulateur, d'une documentation technique ou du produit concerné. Il ne
  prouve ni la pertinence ni l'actualité de la source.
- **FAQ** : nombre d'objets de `faqItems`.
- **CTA** : composants CTA éditoriaux et liens directs de conversion détectés.
- **Sort./entr.** : slugs de guides distincts liés depuis la page / nombre
  d'autres guides qui lient vers cette page. Le hub global n'est pas compté.
- **Min reg./mes.** : temps déclaré dans le registre / estimation à 200 mots
  par minute à partir du corps visible.
- **P/V/G** : note de profondeur / valeur décisionnelle / note globale.

### Barème

La profondeur est notée sur 9 : volume utile (0 à 4), nombre de H2 (0 à 2),
présence de H3 (0 à 1) et sources primaires (0 à 2). A = 8–9, B = 6–7,
C = 4–5, D = 0–3.

La valeur décisionnelle est notée sur 11 : tableaux ou cartes (0 à 2), blocs
chiffrés (0 à 3), formules (0 à 2), FAQ (0 à 1), CTA (0 à 1), maillage sortant
(0 à 1) et marqueur de recommandation ou de verdict professionnel (0 à 1).
A = 9–11, B = 7–8, C = 4–6, D = 0–3.

La note globale est la **moins bonne** des deux notes. Ce choix empêche une page
très longue mais peu utile pour décider, ou une page très pratique mais trop
superficielle, d'obtenir artificiellement A.

## Inventaire exhaustif

| # | Guide | Section | Mots | H2/H3 | T/C | Chif./fict. | Form. | Ext./prim. | FAQ | CTA | Sort./entr. | Modifié | Min reg./mes. | P/V/G |
|---:|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|---:|---:|
| 1 | `audit-technique-avant-reprendre-site` | Maintenance & reprise | 3517 | 11/9 | 2/1 | 1/2 | 0 | 9/9 | 6 | 1 | 4/1 | 2026-07-24 | 16/18 | A/B/B |
| 2 | `site-indexe-sans-trafic` | Référencement naturel | 3532 | 10/7 | 4/1 | 1/2 | 1 | 7/7 | 6 | 1 | 4/1 | 2026-07-24 | 15/18 | A/B/B |
| 3 | `contrat-seo-duree-engagement` | Référencement naturel | 2103 | 10/6 | 2/0 | 5/1 | 1 | 5/5 | 6 | 1 | 4/1 | 2026-07-24 | 9/11 | B/B/B |
| 4 | `google-ads-commerce-local` | Google Ads & acquisition | 2109 | 9/7 | 3/1 | 2/1 | 0 | 5/5 | 6 | 1 | 4/1 | 2026-07-24 | 9/11 | B/B/B |
| 5 | `google-ads-saas-b2b` | Google Ads & acquisition | 2224 | 9/7 | 3/1 | 3/1 | 1 | 5/5 | 6 | 1 | 6/1 | 2026-07-24 | 9/11 | B/A/B |
| 6 | `logiciel-planning-sur-mesure` | Comparatifs & choix | 2635 | 11/25 | 2/1 | 2/3 | 1 | 8/5 | 6 | 1 | 4/1 | 2026-07-24 | 12/13 | A/B/B |
| 7 | `zapier-make-ou-developpement-sur-mesure` | Comparatifs & choix | 2076 | 9/19 | 1/0 | 2/3 | 2 | 8/8 | 6 | 1 | 4/1 | 2026-07-24 | 10/10 | B/B/B |
| 8 | `rgpd-saas-b2b` | Préparer son projet | 2777 | 10/12 | 2/0 | 2/3 | 0 | 8/8 | 6 | 1 | 3/1 | 2026-07-24 | 12/14 | A/C/C |
| 9 | `lovable-bolt-v0-ou-agence-saas` | Comparatifs & choix | 3150 | 9/17 | 3/1 | 2/3 | 0 | 15/13 | 6 | 1 | 4/1 | 2026-07-24 | 13/16 | A/C/C |
| 10 | `crm-sur-mesure-ou-hubspot` | Comparatifs & choix | 3391 | 9/14 | 3/0 | 6/6 | 6 | 6/5 | 6 | 1 | 4/1 | 2026-07-24 | 14/17 | A/A/A |
| 11 | `prise-rendez-vous-en-ligne-site-vitrine` | Sites vitrines | 1967 | 9/8 | 3/1 | 0/1 | 0 | 3/2 | 6 | 1 | 4/1 | 2026-07-23 | 9/10 | C/C/C |
| 12 | `dette-technique-cout-entreprise` | Maintenance et évolution | 1873 | 9/8 | 2/0 | 0/1 | 1 | 2/0 | 6 | 1 | 4/1 | 2026-07-23 | 8/9 | C/C/C |
| 13 | `sla-maintenance-applicative` | Maintenance et évolution | 2255 | 10/4 | 3/0 | 1/1 | 0 | 4/1 | 6 | 1 | 4/1 | 2026-07-23 | 10/11 | C/C/C |
| 14 | `google-ads-ou-meta-ads` | Publicité en ligne | 2421 | 10/6 | 2/1 | 1/1 | 1 | 6/6 | 6 | 1 | 5/1 | 2026-07-23 | 11/12 | A/B/B |
| 15 | `calculer-cout-par-lead-google-ads` | Google Ads | 2961 | 11/2 | 6/0 | 9/6 | 5 | 7/7 | 6 | 1 | 4/3 | 2026-07-23 | 11/15 | B/A/B |
| 16 | `seo-saas-b2b` | Référencement naturel | 2632 | 11/11 | 5/0 | 0/3 | 0 | 7/7 | 6 | 1 | 4/2 | 2026-07-23 | 10/13 | A/C/C |
| 17 | `securite-saas-b2b` | SaaS et applications métier | 2307 | 10/12 | 3/1 | 0/1 | 0 | 7/7 | 6 | 1 | 4/2 | 2026-07-23 | 10/12 | A/C/C |
| 18 | `facturation-abonnements-saas` | SaaS et applications métier | 1941 | 8/20 | 0/1 | 3/3 | 1 | 5/5 | 6 | 1 | 3/1 | 2026-07-23 | 10/10 | B/B/B |
| 19 | `logiciel-gestion-stock-sur-mesure` | Applications métier | 1617 | 6/27 | 0/1 | 1/2 | 0 | 4/1 | 6 | 1 | 3/1 | 2026-07-23 | 8/8 | D/C/D |
| 20 | `power-apps-ou-application-sur-mesure` | Applications métier | 1921 | 5/11 | 0/2 | 2/1 | 1 | 8/8 | 6 | 1 | 3/1 | 2026-07-23 | 10/10 | C/B/C |
| 21 | `site-one-page-ou-multipage` | Sites vitrines | 3478 | 10/19 | 2/1 | 0/7 | 0 | 5/4 | 7 | 1 | 4/2 | 2026-07-23 | 16/17 | A/C/C |
| 22 | `tma-ou-regie` | Maintenance et évolution | 4835 | 11/24 | 4/0 | 1/2 | 0 | 4/3 | 7 | 1 | 3/3 | 2026-07-23 | 20/24 | A/B/B |
| 23 | `seo-local-pme` | Référencement naturel | 4240 | 11/51 | 0/1 | 1/2 | 0 | 10/10 | 7 | 1 | 4/2 | 2026-07-23 | 21/21 | A/C/C |
| 24 | `google-search-ads-ou-performance-max` | Google Ads | 3851 | 10/43 | 0/1 | 2/1 | 0 | 14/14 | 7 | 1 | 4/3 | 2026-07-23 | 19/19 | A/C/C |
| 25 | `faire-evoluer-saas-apres-mvp` | Préparer son projet | 4490 | 13/42 | 0/3 | 1/6 | 0 | 12/3 | 7 | 1 | 6/2 | 2026-07-23 | 22/22 | A/B/B |
| 26 | `application-suivi-production-pme` | Applications métier | 5046 | 13/37 | 0/2 | 9/7 | 3 | 10/8 | 6 | 1 | 6/3 | 2026-07-23 | 25/25 | A/A/A |
| 27 | `portail-client-b2b-sur-mesure` | Applications métier | 5570 | 13/29 | 4/2 | 2/5 | 4 | 16/15 | 5 | 1 | 5/1 | 2026-07-23 | 24/28 | A/A/A |
| 28 | `digitaliser-bons-intervention` | Applications métier | 3199 | 11/34 | 0/1 | 2/1 | 3 | 11/11 | 6 | 1 | 4/1 | 2026-07-23 | 16/16 | A/B/B |
| 29 | `back-office-sur-mesure-pme` | Applications métier | 3221 | 11/18 | 0/1 | 2/2 | 1 | 8/7 | 5 | 1 | 7/2 | 2026-07-23 | 16/16 | A/B/B |
| 30 | `prioriser-fonctionnalites-mvp-saas` | Préparer son projet | 2847 | 10/10 | 0/0 | 1/2 | 0 | 5/0 | 4 | 1 | 7/3 | 2026-07-23 | 14/14 | B/D/D |
| 31 | `landing-page-ou-site-vitrine` | Comparatifs & choix | 3795 | 12/23 | 3/1 | 1/4 | 0 | 11/11 | 5 | 1 | 7/3 | 2026-07-22 | 18/19 | A/B/B |
| 32 | `combien-de-temps-resultats-seo` | Référencement naturel | 4032 | 10/20 | 5/0 | 9/2 | 7 | 9/9 | 5 | 1 | 4/4 | 2026-07-22 | 17/20 | A/A/A |
| 33 | `positions-google-baissent` | Référencement naturel | 2955 | 9/5 | 3/0 | 6/2 | 3 | 13/13 | 5 | 1 | 4/3 | 2026-07-22 | 13/15 | B/A/B |
| 34 | `combien-de-temps-developper-saas` | Préparer son projet | 3521 | 11/41 | 0/0 | 6/6 | 3 | 9/3 | 7 | 1 | 4/3 | 2026-07-22 | 18/18 | A/A/A |
| 35 | `connecter-erp-crm-logiciel-metier` | Préparer son projet | 3678 | 11/42 | 2/0 | 4/7 | 3 | 8/7 | 7 | 1 | 4/9 | 2026-07-22 | 17/18 | A/A/A |
| 36 | `automatiser-saisie-donnees-entreprise` | Préparer son projet | 3222 | 10/14 | 4/0 | 2/4 | 1 | 7/7 | 6 | 1 | 4/3 | 2026-07-22 | 14/16 | A/B/B |
| 37 | `mvp-prototype-ou-poc` | Comparatifs & choix | 2939 | 11/3 | 1/0 | 1/4 | 1 | 7/3 | 6 | 1 | 6/4 | 2026-07-22 | 14/15 | B/B/B |
| 38 | `site-internet-en-panne-que-faire` | Maintenance & reprise | 3264 | 11/2 | 3/0 | 7/3 | 0 | 9/9 | 10 | 1 | 5/2 | 2026-07-22 | 15/16 | A/A/A |
| 39 | `leads-google-ads-non-qualifies` | Google Ads & acquisition | 2827 | 9/2 | 3/0 | 5/4 | 1 | 11/11 | 9 | 1 | 5/2 | 2026-07-22 | 12/14 | B/A/B |
| 40 | `migrer-logiciel-metier-sans-interruption` | Préparer son projet | 3462 | 10/2 | 3/0 | 9/2 | 1 | 5/5 | 7 | 1 | 4/2 | 2026-07-22 | 16/17 | A/A/A |
| 41 | `choisir-agence-seo` | Référencement naturel | 2426 | 9/23 | 0/0 | 1/1 | 0 | 5/5 | 8 | 1 | 5/4 | 2026-07-22 | 12/12 | B/C/C |
| 42 | `choisir-agence-google-ads` | Google Ads & acquisition | 2461 | 9/23 | 0/0 | 1/0 | 0 | 6/6 | 8 | 1 | 4/1 | 2026-07-22 | 12/12 | B/C/C |
| 43 | `reprendre-maintenance-site-autre-agence` | Maintenance & reprise | 2942 | 10/24 | 0/0 | 0/0 | 0 | 7/7 | 8 | 1 | 4/5 | 2026-07-22 | 15/15 | A/D/D |
| 44 | `agence-saas-ou-freelance` | Comparatifs & choix | 2585 | 9/18 | 0/0 | 2/0 | 0 | 5/5 | 8 | 1 | 6/2 | 2026-07-22 | 13/13 | B/C/C |
| 45 | `application-gestion-interventions-terrain` | Préparer son projet | 2499 | 9/20 | 0/0 | 0/0 | 0 | 5/5 | 7 | 1 | 6/3 | 2026-07-22 | 12/12 | B/C/C |
| 46 | `landing-page-google-ads` | Google Ads & acquisition | 4314 | 8/9 | 0/0 | 1/2 | 0 | 20/17 | 3 | 1 | 4/5 | 2026-07-22 | 22/22 | A/C/C |
| 47 | `suivi-conversions-google-ads` | Google Ads & acquisition | 4433 | 8/7 | 6/0 | 11/6 | 1 | 11/11 | 4 | 1 | 4/8 | 2026-07-22 | 19/22 | A/A/A |
| 48 | `pourquoi-site-pas-visible-google` | Référencement naturel | 3139 | 8/7 | 2/0 | 3/3 | 2 | 7/7 | 4 | 1 | 5/5 | 2026-07-22 | 14/16 | A/B/B |
| 49 | `cout-maintenance-application-metier` | Budget & prix | 2627 | 8/2 | 2/0 | 7/2 | 1 | 5/5 | 8 | 1 | 4/8 | 2026-07-22 | 12/13 | B/B/B |
| 50 | `reprendre-saas-developpe-par-freelance` | Préparer son projet | 3315 | 9/5 | 0/0 | 0/3 | 0 | 9/9 | 9 | 1 | 4/5 | 2026-07-22 | 17/17 | A/C/C |
| 51 | `choisir-prestataire-application-metier` | Préparer son projet | 2473 | 8/8 | 0/0 | 0/1 | 0 | 5/5 | 9 | 1 | 5/6 | 2026-07-22 | 12/12 | B/C/C |
| 52 | `cahier-des-charges-saas` | Préparer son projet | 3198 | 10/2 | 0/0 | 5/4 | 0 | 12/11 | 8 | 1 | 7/8 | 2026-07-22 | 16/16 | A/C/C |
| 53 | `budget-google-ads-pme` | Google Ads & acquisition | 1883 | 8/3 | 0/0 | 8/2 | 3 | 8/7 | 8 | 1 | 7/7 | 2026-07-22 | 9/9 | C/B/C |
| 54 | `remplacer-microsoft-access-application-web` | Préparer son projet | 2715 | 8/4 | 3/0 | 2/1 | 0 | 11/11 | 8 | 1 | 5/2 | 2026-07-22 | 12/14 | B/C/C |
| 55 | `preparer-contenus-site-vitrine` | Préparer son projet | 2935 | 10/16 | 2/1 | 2/1 | 0 | 11/10 | 8 | 1 | 4/5 | 2026-07-22 | 14/15 | A/C/C |
| 56 | `pourquoi-google-ads-ne-convertit-pas` | Google Ads & acquisition | 2998 | 9/11 | 0/0 | 1/0 | 1 | 13/13 | 8 | 1 | 5/8 | 2026-07-21 | 15/15 | B/C/C |
| 57 | `reprendre-mvp-vibe-code` | Préparer son projet | 3123 | 11/10 | 0/1 | 0/0 | 0 | 15/10 | 8 | 1 | 4/4 | 2026-07-21 | 16/16 | A/C/C |
| 58 | `signes-besoin-logiciel-metier` | Préparer son projet | 2517 | 11/8 | 0/1 | 0/1 | 0 | 6/6 | 8 | 1 | 8/2 | 2026-07-21 | 13/13 | A/C/C |
| 59 | `template-ou-site-sur-mesure` | Comparatifs & choix | 2426 | 11/2 | 2/0 | 0/0 | 0 | 12/11 | 7 | 1 | 7/6 | 2026-07-21 | 11/12 | B/C/C |
| 60 | `seo-ou-google-ads` | Comparatifs & choix | 3428 | 12/22 | 0/1 | 5/3 | 1 | 11/11 | 6 | 1 | 6/11 | 2026-07-21 | 17/17 | A/B/B |
| 61 | `contrat-tma-application` | Préparer son projet | 4709 | 8/5 | 10/0 | 3/1 | 0 | 8/8 | 6 | 1 | 7/12 | 2026-07-21 | 17/24 | A/B/B |
| 62 | `audit-seo-que-contient-il` | Référencement naturel | 3880 | 13/2 | 7/0 | 2/1 | 0 | 12/11 | 8 | 1 | 4/8 | 2026-07-21 | 15/19 | A/B/B |
| 63 | `audit-google-ads-que-verifier` | Préparer son projet | 3241 | 10/4 | 4/0 | 1/0 | 0 | 21/21 | 8 | 1 | 7/9 | 2026-07-21 | 14/16 | A/B/B |
| 64 | `mvp-saas-quoi-inclure` | Préparer son projet | 4866 | 7/16 | 6/0 | 1/2 | 0 | 10/6 | 6 | 1 | 8/12 | 2026-07-21 | 20/24 | A/B/B |
| 65 | `reprendre-logiciel-metier-existant` | Préparer son projet | 3062 | 11/2 | 4/0 | 2/0 | 0 | 6/5 | 5 | 2 | 10/11 | 2026-07-21 | 13/15 | A/B/B |
| 66 | `calculer-roi-application-metier` | Budget & prix | 5610 | 8/8 | 7/0 | 34/18 | 14 | 5/3 | 5 | 1 | 5/8 | 2026-07-21 | 23/28 | B/A/B |
| 67 | `automatiser-processus-metier` | Préparer son projet | 3269 | 9/6 | 6/0 | 14/3 | 4 | 4/2 | 7 | 1 | 8/8 | 2026-07-21 | 13/16 | B/A/B |
| 68 | `valider-idee-saas-avant-developper` | Préparer son projet | 2777 | 10/6 | 4/0 | 8/2 | 0 | 13/4 | 6 | 1 | 6/7 | 2026-07-21 | 11/14 | B/A/B |
| 69 | `prix-gestion-google-ads` | Budget & prix | 4069 | 7/9 | 6/0 | 34/4 | 4 | 15/9 | 7 | 1 | 8/7 | 2026-07-21 | 17/20 | A/A/A |
| 70 | `transformer-excel-en-application` | Préparer son projet | 2859 | 11/3 | 6/0 | 1/2 | 1 | 10/9 | 6 | 1 | 5/12 | 2026-07-21 | 12/14 | B/B/B |
| 71 | `cahier-des-charges-application-metier` | Préparer son projet | 4540 | 10/12 | 7/0 | 3/5 | 0 | 10/10 | 5 | 1 | 8/21 | 2026-07-21 | 18/23 | A/B/B |
| 72 | `combien-coute-un-crm` | Budget & prix | 3573 | 10/7 | 8/0 | 17/1 | 6 | 7/2 | 6 | 1 | 5/3 | 2026-07-21 | 13/18 | A/A/A |
| 73 | `erp-ou-logiciel-sur-mesure` | Comparatifs & choix | 4527 | 11/3 | 8/0 | 10/4 | 2 | 12/12 | 6 | 1 | 8/13 | 2026-07-21 | 17/23 | A/A/A |
| 74 | `pourquoi-mon-site-ne-convertit-pas` | Préparer son projet | 2915 | 13/5 | 6/0 | 1/1 | 1 | 7/5 | 6 | 1 | 5/9 | 2026-07-21 | 12/15 | A/B/B |
| 75 | `proprietaire-site-internet-code-source` | Préparer son projet | 2495 | 11/6 | 2/0 | 1/0 | 0 | 12/10 | 8 | 1 | 7/9 | 2026-07-21 | 11/12 | A/C/C |
| 76 | `prix-referencement-naturel` | Budget & prix | 5391 | 10/9 | 6/0 | 32/2 | 2 | 10/5 | 7 | 1 | 7/7 | 2026-07-21 | 23/27 | A/A/A |
| 77 | `pourquoi-mon-site-est-lent` | Comparatifs & choix | 2610 | 9/2 | 6/0 | 1/1 | 1 | 3/1 | 6 | 1 | 4/4 | 2026-07-21 | 10/13 | C/B/C |
| 78 | `no-code-ou-sur-mesure` | Comparatifs & choix | 4093 | 11/2 | 6/0 | 12/0 | 1 | 10/2 | 7 | 1 | 6/17 | 2026-07-21 | 16/20 | B/A/B |
| 79 | `migrer-wordpress-vers-nextjs` | Comparatifs & choix | 4029 | 11/6 | 4/0 | 14/0 | 1 | 7/7 | 7 | 1 | 7/1 | 2026-07-21 | 17/20 | A/A/A |
| 80 | `tjm-developpeur-web` | Budget & prix | 2691 | 11/2 | 6/0 | 7/0 | 1 | 5/0 | 10 | 1 | 4/3 | 2026-07-21 | 11/13 | C/A/C |
| 81 | `choisir-son-agence-web` | Préparer son projet | 2313 | 11/2 | 4/0 | 1/0 | 0 | 4/4 | 10 | 1 | 3/7 | 2026-07-21 | 10/12 | B/C/C |
| 82 | `agence-web-ou-freelance` | Comparatifs & choix | 3061 | 11/6 | 6/0 | 6/1 | 0 | 8/5 | 8 | 1 | 6/5 | 2026-07-21 | 13/15 | A/A/A |
| 83 | `creer-un-site-avec-ia` | Comparatifs & choix | 3077 | 11/2 | 3/0 | 14/1 | 0 | 11/6 | 8 | 1 | 8/2 | 2026-07-21 | 13/15 | A/B/B |
| 84 | `combien-coute-un-site-internet` | Budget & prix | 3051 | 10/2 | 8/0 | 11/0 | 0 | 4/3 | 10 | 1 | 8/17 | 2026-07-21 | 11/15 | B/B/B |
| 85 | `combien-coute-une-application-mobile` | Budget & prix | 2808 | 11/2 | 7/0 | 11/2 | 0 | 3/3 | 7 | 1 | 2/4 | 2026-07-21 | 10/14 | B/B/B |
| 86 | `prix-site-vitrine` | Budget & prix | 2678 | 11/2 | 6/0 | 12/0 | 0 | 2/2 | 8 | 2 | 4/13 | 2026-07-21 | 11/13 | B/A/B |
| 87 | `prix-site-e-commerce` | Budget & prix | 3289 | 12/8 | 6/0 | 25/2 | 0 | 8/4 | 8 | 1 | 5/6 | 2026-07-21 | 14/16 | A/A/A |
| 88 | `nextjs-ou-wordpress` | Comparatifs & choix | 3527 | 11/3 | 6/0 | 0/0 | 0 | 11/3 | 10 | 1 | 11/10 | 2026-07-21 | 14/18 | B/C/C |
| 89 | `aides-creation-site-internet` | Financer son projet | 3034 | 9/7 | 6/0 | 7/2 | 0 | 10/8 | 10 | 1 | 2/0 | 2026-07-21 | 13/15 | A/B/B |
| 90 | `combien-coute-un-saas` | Budget & prix | 2880 | 12/2 | 6/0 | 11/3 | 1 | 4/3 | 7 | 1 | 4/11 | 2026-07-21 | 11/14 | B/A/B |
| 91 | `prix-logiciel-sur-mesure` | Budget & prix | 4147 | 9/6 | 6/0 | 24/1 | 4 | 9/2 | 7 | 1 | 9/15 | 2026-07-21 | 17/21 | B/A/B |
| 92 | `prix-refonte-site-internet` | Budget & prix | 2756 | 10/2 | 6/0 | 6/0 | 0 | 2/2 | 10 | 1 | 3/10 | 2026-07-21 | 11/14 | B/A/B |
| 93 | `shopify-ou-sur-mesure` | Comparatifs & choix | 2879 | 10/2 | 4/0 | 5/0 | 0 | 8/6 | 10 | 1 | 3/4 | 2026-07-21 | 12/14 | B/B/B |
| 94 | `cout-maintenance-site-internet` | Budget & prix | 3180 | 8/5 | 4/0 | 11/3 | 1 | 8/0 | 9 | 1 | 9/12 | 2026-07-21 | 14/16 | B/A/B |
| 95 | `woocommerce-ou-shopify` | Comparatifs & choix | 2931 | 11/4 | 7/0 | 2/2 | 1 | 8/4 | 6 | 1 | 4/4 | 2026-07-21 | 12/15 | B/B/B |
| 96 | `combien-de-temps-pour-creer-un-site` | Préparer son projet | 2561 | 11/2 | 6/0 | 4/1 | 0 | 1/1 | 7 | 1 | 4/6 | 2026-07-21 | 10/13 | C/B/C |
| 97 | `wix-ou-wordpress` | Comparatifs & choix | 2580 | 10/2 | 4/0 | 2/0 | 0 | 12/7 | 8 | 1 | 5/4 | 2026-07-21 | 11/13 | B/B/B |
| 98 | `react-native-ou-flutter` | Comparatifs & choix | 2529 | 10/2 | 4/0 | 3/0 | 0 | 6/2 | 10 | 1 | 4/1 | 2026-07-21 | 11/13 | B/B/B |
| 99 | `cahier-des-charges-application-mobile` | Préparer son projet | 3842 | 10/6 | 6/0 | 3/1 | 0 | 9/9 | 9 | 1 | 4/2 | 2026-07-21 | 15/19 | A/B/B |
| 100 | `refonte-sans-perdre-son-seo` | Préparer son projet | 2164 | 10/2 | 3/0 | 1/0 | 1 | 8/6 | 8 | 1 | 4/8 | 2026-07-21 | 10/11 | B/B/B |
| 101 | `cahier-des-charges-site-internet` | Préparer son projet | 2527 | 9/1 | 6/0 | 1/0 | 0 | 14/13 | 10 | 1 | 5/6 | 2026-07-21 | 10/13 | B/C/C |

## Les 20 guides structurellement les plus faibles

Ce classement ne dit pas que leur contenu est faux. Il désigne les guides qui
cumulent le plus de lacunes mesurables en profondeur ou en aide à la décision.
L'ordre tient compte des deux scores, puis du volume et du maillage entrant.

| Priorité | Guide | Diagnostic mesuré | Axe de reprise prioritaire |
|---:|---|---|---|
| 1 | `logiciel-gestion-stock-sur-mesure` | 1 617 mots, profondeur D, aucun tableau, un seul bloc chiffré, aucune formule, une seule source primaire estimée | Refaire autour de trois flux réels (achat, mouvement, inventaire), comparer tableur/ERP/WMS/sur-mesure, chiffrer erreurs, ruptures, coût de possession et seuil de bascule. |
| 2 | `prioriser-fonctionnalites-mvp-saas` | Valeur D, aucun tableau ni ensemble comparatif, une source primaire estimée nulle, aucune formule ni position explicite | Ajouter une vraie matrice de priorisation appliquée à un SaaS fictif, comparer RICE/MoSCoW/coût du retard, montrer les arbitrages budget-délai et conclure fermement. |
| 3 | `dette-technique-cout-entreprise` | 1 873 mots, profondeur C, zéro source primaire estimée et aucun cas chiffré complet | Construire un coût annuel reproductible (retards, incidents, temps de reprise, manque à gagner), puis comparer stabilisation, rénovation progressive et réécriture. |
| 4 | `prise-rendez-vous-en-ligne-site-vitrine` | 1 967 mots, aucun cas chiffré ni calcul, position professionnelle absente | Comparer outils, commissions et limites, calculer coût des absences et du temps administratif, traiter ressources multiples, acomptes, annulations et synchronisation. |
| 5 | `sla-maintenance-applicative` | Profondeur C, une seule source primaire estimée, un bloc chiffré et aucun calcul | Ajouter matrice de sévérité, RTO/RPO, horaires, escalade et exemples de coût d'arrêt ; expliquer précisément ce qu'une pénalité compense ou ne compense pas. |
| 6 | `application-gestion-interventions-terrain` | Aucun tableau, aucune carte comparative, aucun cas chiffré ou fictif détecté | Suivre une intervention complète hors ligne, comparer logiciel standard et sur-mesure, chiffrer ressaisie, déplacement évité, adoption et retour sur investissement. |
| 7 | `choisir-agence-seo` | Aucun tableau ou ensemble comparatif, un seul bloc chiffré, aucune formule | Fournir une grille pondérée de sélection, des devis fictifs comparables, les livrables par budget, les signaux d'alerte et un avis clair sur les engagements acceptables. |
| 8 | `template-ou-site-sur-mesure` | Aucun cas chiffré, aucune formule et aucune position explicite malgré onze sources primaires estimées | Comparer le coût total sur trois ans, les limites de migration, les performances et quatre profils d'entreprise ; donner des verdicts selon le rôle commercial du site. |
| 9 | `choisir-prestataire-application-metier` | Aucun tableau ou ensemble comparatif, aucun cas chiffré, aucune formule | Ajouter une consultation fictive de trois prestataires, une matrice prix-risque-compétences, les preuves à demander et les motifs professionnels d'élimination. |
| 10 | `reprendre-maintenance-site-autre-agence` | Profondeur A mais valeur D : aucun tableau, cas chiffré, calcul ou avis explicite | Transformer la passation en décision : scénarios de reprise, budget de sécurisation, liste de preuves, réserves contractuelles et verdict GO/GO sous conditions/STOP. |
| 11 | `power-apps-ou-application-sur-mesure` | 1 921 mots et profondeur C malgré de bonnes sources | Détailler trois scénarios de licences et de gouvernance, Dataverse, connecteurs, exploitation, sortie et point de bascule financier vers le sur-mesure. |
| 12 | `choisir-agence-google-ads` | Aucun tableau ou ensemble comparatif, un seul bloc chiffré et aucun calcul | Comparer forfait, pourcentage et régie, simuler budget média plus honoraires, fournir un scorecard d'agence et prendre position sur les promesses et durées. |
| 13 | `agence-saas-ou-freelance` | Aucun support comparatif détecté, deux blocs chiffrés, aucun calcul | Comparer équipe, continuité, propriété, maintenance et coût total sur douze mois à périmètre identique ; produire des verdicts selon stade et risque. |
| 14 | `remplacer-microsoft-access-application-web` | Deux blocs chiffrés seulement, aucune formule, profondeur B | Chiffrer licences, migration, double fonctionnement et maintenance ; traiter dépendances VBA, droits, mode hors ligne, reprise de données et critères de non-migration. |
| 15 | `choisir-son-agence-web` | 2 313 mots, un cas chiffré, aucune formule ou prise de position explicite | Mettre en concurrence trois devis réellement comparables, calculer coût total, noter contenus, SEO, propriété, maintenance et présenter des motifs de refus nets. |
| 16 | `cahier-des-charges-site-internet` | Un seul bloc chiffré, aucune formule ni position explicite malgré six tableaux et treize sources primaires estimées | Ajouter un cahier des charges entièrement annoté, un budget, un calendrier, des critères de recette et les erreurs qui rendent les devis incomparables. |
| 17 | `pourquoi-mon-site-est-lent` | Profondeur C, une seule source primaire estimée et un seul cas chiffré | Relier les Core Web Vitals à des parcours réels, mesurer coût commercial et effort correctif, puis prioriser images, scripts, serveur et architecture. |
| 18 | `pourquoi-google-ads-ne-convertit-pas` | Presque 3 000 mots mais aucun tableau, un cas chiffré et aucune position explicite | Dérouler un entonnoir complet clic-lead-vente-marge, comparer causes par symptômes, calculer le seuil de rentabilité et dire quand couper plutôt qu'optimiser. |
| 19 | `reprendre-saas-developpe-par-freelance` | Profondeur A mais aucun tableau, cas chiffré ou calcul | Ajouter trois scénarios de reprise budgétés, dette et dépendances, audit des accès, coût de stabilisation, alternatives et verdicts conditionnels. |
| 20 | `landing-page-google-ads` | 4 314 mots et 17 sources primaires estimées, mais aucun tableau, un seul bloc chiffré, aucune formule et seulement trois FAQ | Convertir la richesse documentaire en tests concrets : exemples avant/après, taux de transformation fictifs, coût par lead, matrice message-preuve-friction et ordre de priorité. |

## Risques structurels répétitifs

### 1. Beaucoup de longueur, trop peu de décisions chiffrées

- 21 guides restent sous 2 500 mots et 6 sous 2 000 mots.
- Surtout, 55 guides contiennent moins de trois blocs chiffrés décisionnels et
  13 n'en contiennent aucun.
- 55 guides ne présentent aucune formule explicite.

**Risque :** le lecteur comprend le sujet mais ne peut pas reproduire un calcul,
comparer deux devis ou savoir à partir de quel seuil agir. Ajouter du texte sans
modèle chiffré ne corrigera pas ce défaut.

### 2. Les comparatifs ne comparent pas toujours des options opérables

- 25 guides n'ont aucun tableau.
- 13 n'ont ni tableau ni ensemble de cartes comparatives détectable.
- Plusieurs guides de choix ont de nombreuses explications mais aucune mise en
  concurrence à hypothèses constantes.

**Risque :** les pages répondent à « que faut-il regarder ? » sans répondre
assez nettement à « que dois-je choisir dans mon cas ? ».

### 3. La position professionnelle reste trop souvent implicite

22 guides ne contiennent aucun marqueur détectable de verdict, recommandation,
avis ou réponse simple. Cela ne prouve pas l'absence de toute opinion, mais
signale une prudence rédactionnelle excessive.

**Risque :** le contenu paraît documenté mais interchangeable. Une position
utile doit rester conditionnelle et factuelle : « dans ce cas, nous
recommandons X parce que… ; nous déconseillons Y lorsque… ».

### 4. Les sources sont présentes, mais leur force varie fortement

- Tous les guides possèdent au moins un lien externe.
- 8 guides ont moins de deux sources primaires estimées.
- 4 n'en ont aucune selon la détection par domaine :
  `dette-technique-cout-entreprise`,
  `prioriser-fonctionnalites-mvp-saas`, `tjm-developpeur-web` et
  `cout-maintenance-site-internet`.

**Risque :** une bibliographie nombreuse peut mélanger documentation officielle,
pages commerciales, articles secondaires et preuves de valeur très différente.
Chaque reprise doit rattacher chaque affirmation sensible à la source qui la
prouve réellement.

### 5. Le maillage interne est dense en moyenne mais très inégal

La moyenne est de 5,1 liens sortants et 5,1 liens entrants par guide. Cependant,
23 guides ne reçoivent qu'un lien éditorial entrant ou aucun. Le guide
`aides-creation-site-internet` n'en reçoit aucun dans le corpus, hors hub.

**Risque :** certaines pages restent des extrémités de parcours au lieu de
s'insérer dans un chemin dirigeant : diagnostic, comparaison, budget, cahier
des charges, choix du prestataire, prise de contact.

### 6. Le temps de lecture n'est plus synchronisé

Pour 75 guides, le temps du registre diffère du temps obtenu en arrondissant le
corps visible à 200 mots par minute. Un écart d'une minute peut venir de la
méthode ; les écarts supérieurs doivent être recalculés après chaque réécriture.

**Risque :** la promesse de lecture perd en crédibilité et les prochaines passes
peuvent modifier fortement les pages sans mettre à jour le registre.

### 7. La taxonomie éditoriale est fragmentée

Le registre utilise notamment à la fois `Maintenance & reprise` et
`Maintenance et évolution`, ainsi que `Google Ads`,
`Google Ads & acquisition` et `Publicité en ligne`. Les deux catégories les
plus chargées sont `Préparer son projet` (30 guides) et
`Comparatifs & choix` (20).

**Risque :** les regroupements du hub et les parcours thématiques sont moins
lisibles, et des sujets proches peuvent se concurrencer au lieu de se soutenir.

### 8. La régularité du gabarit peut devenir reconnaissable

- 99 guides ont exactement un CTA détecté ; 2 en ont deux.
- 34 guides ont six FAQ, 21 en ont huit, 19 en ont sept et 10 en ont dix.
- 46 guides partagent la date de modification du 21 juillet, 25 celle du 22,
  20 celle du 23 et 10 celle du 24.

**Risque :** même avec un bon niveau moyen, une structure trop constante peut
donner une impression de production en série. Les prochains audits doivent
faire varier l'ouverture, l'ordre des preuves, le format des exemples et la
forme du verdict selon l'intention réelle.

## Séquence de reprise recommandée

1. **Traiter d'abord les trois D**, puis les 17 autres guides de la liste
   prioritaire.
2. Pour chaque guide, faire une recherche concurrentielle française et
   internationale séparée de cette mesure interne.
3. Écrire avant la révision une matrice « question du dirigeant / réponse
   actuelle / preuve / manque / ajout chiffré / décision ».
4. Ajouter au minimum un cas complet, reproductible et explicitement fictif
   lorsque les données ne proviennent pas d'une étude publiée.
5. Comparer les options à périmètre constant : coût initial, coût récurrent,
   temps interne, risque, propriété, réversibilité et conditions d'échec.
6. Formuler un avis professionnel explicite, avec ses hypothèses et le cas où
   l'avis s'inverse.
7. Recalculer le temps de lecture, renforcer le maillage entrant et faire une
   relecture humaine avant publication.

## Limites de cette passe

- Aucun résultat Google, concurrent français, américain ou étranger n'a été
  consulté ici, conformément au périmètre attribué à cet inventaire.
- Le comptage ne mesure pas la qualité de la prose, la justesse juridique, la
  fraîcheur tarifaire, l'originalité réelle ni l'adéquation exacte à
  l'intention de recherche.
- Une source officielle peut être mal employée ; une source secondaire peut
  être excellente. Le classement « primaire » n'est qu'un signal de tri.
- Les détections de cartes, exemples et positions professionnelles sont des
  proxys prudents. Chaque guide prioritaire doit encore faire l'objet d'un
  audit éditorial humain et thématique.
- La note A ne signifie pas « numéro 1 sur Google ». Elle signifie seulement
  que la page possède déjà une base structurelle plus forte selon cette grille.
