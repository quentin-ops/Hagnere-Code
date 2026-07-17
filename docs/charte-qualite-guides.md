# Charte qualité des guides Hagnéré Code

> **RÈGLE ZÉRO — LECTURE OBLIGATOIRE.** Avant d'écrire, de réécrire ou de
> modifier substantiellement un guide, ce fichier doit être lu **en
> intégralité, systématiquement**. Aucun article ne se rédige de mémoire ou
> par imitation approximative d'un guide existant : cette charte est la
> source de vérité du niveau exigé — « n°1 du web : parfait, complet, clair,
> pédagogique pour le lecteur ET optimisé pour Google ». Elle a été établie
> le 17 juillet 2026 après la production et la refonte des 8 premiers guides
> (validés 9/10+ par panels de lecteurs indépendants, audités 10/10 en
> production).

Fichiers liés : [roadmap des guides](roadmap-guides-seo.md) ·
registre `src/lib/guides.ts` · composants `src/components/guides/`.

---

## 1. Le standard visé, en une phrase

Chaque guide doit être **le meilleur contenu du web francophone sur sa
requête** : plus complet que tous les concurrents réunis, lisible par un
dirigeant de TPE de 55 ans sans culture web, sourcé au niveau d'un média de
référence, et techniquement irréprochable pour Google. Si un seul de ces
quatre piliers manque, l'article n'est pas publiable.

---

## 2. Le pipeline obligatoire (aucune étape optionnelle)

Toute production suit ces 10 étapes, dans l'ordre :

1. **Validation du sujet** — croiser la [roadmap](roadmap-guides-seo.md)
   avec un sweep Google Suggest réel (API
   `suggestqueries.google.com/complete/search?client=firefox&hl=fr&q=…`,
   20-25 amorces) : le cluster de requêtes réel décide des angles, des H2
   et de la FAQ. Jamais de sujet « au feeling ».
2. **Recherche multi-agents** (workflow, 4 agents parallèles minimum) :
   - *SERP & concurrents* — voir §3, c'est l'étape la plus importante ;
   - *Faits & chiffres* — uniquement sources officielles ou primaires
     (pages tarifs officielles, Légifrance, BOFiP, CNIL, FEVAD, W3Techs,
     Patchstack, études randomisées…), chaque fait avec source + URL +
     année + niveau de confiance ; **un fait non sourcé n'existe pas** ;
   - *Questions du public* — PAA verbatim, forums, variantes autocomplete ;
   - *Angle spécifique au sujet* (obligations légales, coûts cachés,
     benchmarks…).
3. **Rédaction** — depuis le pattern d'un guide existant (structure de
   `src/app/guides/<slug>/page.tsx`), en appliquant TOUTES les règles des
   §4 (pédagogie), §5 (SEO) et §6 (honnêteté/cohérence).
4. **Registre** — une entrée dans `src/lib/guides.ts` (title, cardTitle,
   metaDescription, cardDescription, heroTitle, section, dates,
   readTimeMin). Le hub, le sitemap et les métadonnées en découlent seuls.
5. **Image OG dédiée** — `opengraph-image.tsx` (ImageResponse, edge) :
   badge millésimé, titre, sous-titre, 3 puces différenciantes.
6. **Maillage** — au minimum **3 liens entrants** posés dans des guides
   existants à des ancres naturelles (jamais en pied de page), et des liens
   sortants vers les guides frères, la page service concernée, `/methode`
   et `/demarrer-un-projet`.
7. **Batterie de vérification locale** (§7) + `npx tsc --noEmit` +
   `npm run test` + `npx eslint` sur le périmètre — **0 erreur, 0 warning**.
8. **Contrôle visuel réel** — screenshot du rendu (hero, un tableau, un
   encadré) avant toute livraison. Jamais de mise en ligne sans avoir vu
   la page.
9. **Contre-vérification par panel** — pour tout guide neuf ou refondu :
   relecture par agents « lecteur néophyte » indépendants ; **seuil :
   ≥ 8,5/10 en pédagogie ET en complétude**, sinon corrections et nouveau
   passage. Les corrections signalées se traitent toutes (appliquées ou
   écartées avec justification écrite).
10. **Livraison** — commit scopé (message détaillé), push, attente du
    déploiement, **audit de production complet** (§7 sur l'URL réelle),
    puis remise du lien avec rapport. Rappeler l'inspection d'URL Search
    Console côté utilisateur.

---

## 3. L'étude des concurrents (obligatoire, avant d'écrire une ligne)

Le principe : **étudier tous les concurrents, prendre le meilleur de
chacun, et combler tous leurs manques.** Concrètement :

- Ouvrir et analyser les **6-10 pages les mieux positionnées** sur la
  requête (FR, et références EN quand la SERP FR est pauvre). Pour
  chacune : fourchettes/chiffres annoncés, structure H2, nombre de mots,
  date, auteur, CTA — et surtout **la liste de ses manques**.
- En déduire les **manques transversaux** : ce qu'AUCUN concurrent ne
  couvre. Ce sont les différenciateurs de l'article — il en faut au moins
  3, nommés explicitement avant la rédaction.
- Reprendre **le meilleur de chaque concurrent** (un format de tableau, un
  angle, une structure qui marche) sans jamais copier : réécrire, enrichir,
  sourcer mieux.
- Différenciateurs récurrents qui ont fait leurs preuves : **devis réel
  décortiqué ligne à ligne** (personne n'ose publier les siens), **coût
  total sur 3 ans / TCO** avec hypothèses affichées, **données officielles
  vérifiées à la source** (vs chiffres recopiés de blog en blog),
  **obligations légales millésimées** avec dates et sanctions, **section
  « ce qui n'existe plus »** quand la SERP recycle de l'obsolète,
  **verdict tranché par profil** quand les concurrents concluent « ça
  dépend ».
- Cible de longueur : se caler sur le haut de la SERP et le dépasser en
  densité utile — en pratique **4 300 à 5 300 mots de corps d'article**
  (hors FAQ/sources), jamais atteints par du remplissage. La longueur est
  une conséquence de la complétude, pas un objectif.

---

## 4. Charte pédagogique (le lecteur d'abord)

Le lecteur de référence est un **dirigeant de TPE français de 55 ans, 8
salariés, aucune culture web**. Chaque règle ci-dessous est bloquante :

1. **Tout terme technique est défini à sa PREMIÈRE apparition** — y compris
   dans les tableaux, les points clés du hero et la FAQ. Termes
   systématiquement piégeux : SEO, CMS, template, builder, MVP, POC, SaaS,
   TJM, HT/TTC, TCO, headless, API, CRM/ERP, back-office, plugin/extension,
   Lighthouse, Core Web Vitals, PWA, recette, 301, forfait/régie, churn,
   CMP, PSP, 3PL, PIM, AMOA, de minimis, FEDER… La définition tient en une
   proposition glissée dans la phrase, pas en note de bas de page.
2. **Lexique d'ouverture** — un encadré « les X mots de ce guide, traduits
   en français courant » (8-12 entrées) placé après le sommaire.
3. **Chaque chiffre est traduit en conséquence concrète pour le lecteur** :
   « 2,9 % de conversion » → « sur 100 visiteurs, à peine 3 vous
   contactent » ; un TJM → un prix de projet (jours × taux) ; un
   pourcentage de commission → des euros par an sur un CA réaliste. Un
   chiffre sans implication est un chiffre à retravailler.
4. **Analogies de la vie courante** pour les 3-5 concepts les plus durs
   (éprouvées : plat à la commande vs buffet pour dynamique/statique,
   cuisine et salle pour le headless, contrôle technique pour les Core Web
   Vitals, locataire/propriétaire pour les builders, taxi au compteur pour
   la régie, baignoire qui fuit pour le churn).
5. **Encadrés pédagogiques** (`InfoBox` blue/amber/emerald) : « En clair »,
   « Exemple concret », « À retenir », « Le cas classique ». Au moins 3-4
   par guide, rédigés — jamais décoratifs.
6. **Exemples incarnés / fil rouge** — un personnage ou une entreprise
   récurrente (Martin le plombier, la SARL de 8 salariés…) qui traverse le
   guide et rend la méthode actionnable.
7. **Phrases courtes.** Une phrase de plus de ~35 mots ou avec 3
   parenthèses chiffrées se découpe. Pas d'anglicismes gratuits (bannis :
   stack, ranke, DIY, bus factor, leads, monitoring… — leurs équivalents
   français existent).
8. **Progression** — chaque section prépare la suivante ; transitions
   explicites ; ouvertures de section orientées lecteur (« Votre site
   est-il rapide ? ») et non auto-centrées ; « À retenir » avant les
   sections denses.
9. **Cohérence interne absolue des chiffres** — tout chiffre présent à
   deux endroits (tableau + texte + FAQ) doit être identique ; toute
   fourchette différente entre deux sections doit être réconciliée par une
   phrase explicite. C'est le défaut n°1 détecté par les panels.
10. **Tableaux** pour tout ce qui se compare (3+ éléments), listes pour les
    étapes, prose pour les mécanismes. Un tableau sans phrase
    d'introduction est orphelin.

---

## 5. Charte SEO technique (non négociable, vérifiée par batterie)

- **Title** ≤ 60 caractères de préférence, mot-clé exact en tête, suffixe
  « · Hagnéré Code », si possible avec un accroche-clic (fourchette
  chiffrée, millésime). Défini dans `src/lib/guides.ts`, jamais en dur.
- **Meta description** ≤ 155 caractères, avec chiffre d'accroche et
  promesse différenciante.
- **H1 unique** (heroTitle du registre), contenant le mot-clé.
- **13 à 18 H2** avec `id` en kebab-case ; les ids sont des ANCRES
  PUBLIQUES : une fois publiés, ils ne changent **jamais** (les libellés,
  oui). La `GuideToc` liste toutes les sections.
- **Paragraphe « featured snippet »** : la section 1 ouvre par une réponse
  directe et complète à la requête en < 100 mots, chiffres en gras,
  suivie d'un tableau récapitulatif.
- **FAQ : 12 questions** (native `<details>/<summary>`, JAMAIS de
  composant qui démonte le DOM type Radix), questions reprises VERBATIM
  des PAA/autocomplete, réponses complètes (60-110 mots) strictement
  cohérentes avec le corps. Une 13e question est permise si elle comble un
  angle mort réel.
- **3 JSON-LD valides** par page : `Article` (headline, description, url,
  mainEntityOfPage, image = og-image, dates réelles, wordCount réel,
  articleSection, author `Person` Quentin Hagnéré avec jobTitle/knowsAbout/
  sameAs LinkedIn/worksFor → `#organization`, publisher avec logo),
  `BreadcrumbList` (3 niveaux), `FAQPage` (générée depuis `faqItems` —
  miroir exact du DOM).
- **Canonical** absolu sur `https://hagnere-code.ai/...` (le domaine est
  **.ai**, jamais .fr). Robots index,follow + googleBot max-*.
- **Image OG dédiée** par guide (`opengraph-image.tsx`), pas d'og:image
  dans le metadata (convention de fichier Next.js).
- **Dates** : datePublished/dateModified réelles dans le registre —
  affichées sur la page (« Mis à jour le … » + byline auteur) et reprises
  dans le JSON-LD et le sitemap (`lastModified`). Toute modification
  substantielle met à jour dateModified.
- **Maillage** : ≥ 3 liens entrants depuis des pages à autorité, à des
  ancres contextuelles ; liens sortants vers guides frères + service +
  méthode ; 2-4 liens externes vers les sources officielles citées
  (`target="_blank" rel="noopener noreferrer"`).
- **Sources** : bloc « Sources » en fin d'article, liens réels consultés,
  mention du mois de consultation, et disclaimer (« ne constitue pas un
  conseil juridique/fiscal personnalisé » quand pertinent).

---

## 6. Honnêteté éditoriale et cohérence commerciale

- **L'honnêteté est la stratégie** : dire quand l'offre concurrente est le
  bon choix (« les cas où WordPress reste le bon choix », « à ce CA, le
  sur-mesure ne se justifie pas »), assumer les limites de notre approche,
  démonter nos propres arguments faibles. C'est ce qui crédibilise tout le
  reste.
- **Jamais de chiffre inventé.** Un chiffre sans source officielle
  vérifiée est soit supprimé, soit présenté comme fourchette de marché avec
  prudence explicite. Les chiffres « qui circulent » (recopiés de blog en
  blog sans source primaire) sont signalés comme tels ou écartés.
- **Grille de prix publique — cohérence absolue sur tout le site** :
  site vitrine 6 900 € / 14 900 € / 22 000 €+ · e-commerce sur mesure
  15 000 – 120 000 € · SaaS MVP dès 15 000 € (3-6 semaines) · app mobile :
  MVP sur les stores dès 12 semaines · outils internes 8 000 – 80 000 € ·
  Discovery Sprint 1 500 € (2 jours, déduit à 100 % si le projet se
  lance) · Lighthouse 95+ garanti par contrat · méthode Sprint Fixe™ ·
  TMA/SEO sur devis.
- **Funnel lead-only, JAMAIS de tarification temps réel ou IA sur le
  site** : le CTA est toujours « décrivez votre projet en 3 minutes,
  réponse personnelle sous 24 h ouvrées, gratuite et sans engagement ».
  Aucun simulateur de prix interactif.
- **CTA mesurés** : un `GuideInlineCTA` en milieu d'article + un CTA final
  dans la section méthode. Pas plus. L'article éduque d'abord, vend
  ensuite.
- **Positionnement** : majorité React/Next.js, expertise Laravel
  secondaire ; équipe senior à Chambéry (l'angle territorial Savoie/AURA
  est un différenciateur à exploiter quand le sujet s'y prête).

---

## 7. La batterie de vérification (locale PUIS production)

Chaque check est bloquant. Script python (urllib) sur la page rendue :

| # | Check |
|---|-------|
| 1 | `<title>` identique au registre (et ≤ ~60 car.) |
| 2 | meta description ≤ 155 car. |
| 3 | canonical exact `https://hagnere-code.ai/guides/<slug>` |
| 4 | robots `index, follow` + googleBot |
| 5 | og:image = route `opengraph-image` dédiée (répond 200, PNG) |
| 6 | 3 JSON-LD parsables, Article complet (Person, image, logo, dates) |
| 7 | FAQ : 12 (ou 13) `<details>` natifs, réponses présentes dans le DOM |
| 8 | corps d'article ≥ 4 300 mots (zone `<article>`) |
| 9 | nombre de H2 attendu, tous les ids d'ancres présents |
| 10 | byline auteur + « Mis à jour le [date] » visibles |
| 11 | tous les liens internes attendus présents (sortants ET entrants depuis les autres guides) |
| 12 | sitemap : entrée présente avec `lastModified` du jour de modif |
| 13 | hub `/guides` liste le guide |
| 14 | `npx tsc --noEmit` 0 erreur · tests 28+/28 · eslint 0 erreur 0 warning |
| 15 | contrôle visuel (screenshot hero + un tableau + un encadré) |

La même batterie se rejoue sur l'URL de **production** après déploiement.
Un guide n'est « livré » qu'avec l'audit prod à 100 %.

---

## 8. Contraintes techniques du code

- Un guide = 1 entrée registre + 1 dossier `src/app/guides/<slug>/`
  (`page.tsx` + `opengraph-image.tsx`). Rien d'autre à synchroniser.
- `page.tsx` : composant serveur ; metadata et JSON-LD alimentés par
  `getGuide(slug)` ; composants de contenu : `GuideToc`, `InfoBox`
  (variants `blue`/`amber`/`emerald`), `GuideTable` (chaînes pures),
  `GuideInlineCTA`, `FormulaBox` (devis/exemples), `ComparisonGrid`.
- JSX : apostrophes `&apos;` (lint bloquant), guillemets « », espaces
  insécables où utile. Attention à la collapse JSX : après une balise en
  fin de ligne, insérer `{" "}` si un espace est requis.
- Le test structurel `sitemap.test.ts` échoue si une page existe sans
  entrée registre (et inversement) — le faire passer fait partie de la
  livraison.
- Commits scopés (uniquement les fichiers du guide + registre + ancres de
  maillage), messages détaillés en français décrivant les angles et les
  vérifications.

## 9. Rappels d'hygiène de production

- Les recherches et critiques se font par **agents parallèles**
  (workflows) ; la vérification finale et la livraison restent sous
  contrôle direct. Un agent interrompu se relance depuis son transcript.
- En cas de refonte d'un guide existant : les ids de H2, les questions de
  FAQ et les liens internes sont **intouchables** ; les libellés et les
  contenus s'améliorent librement ; `dateModified` se met à jour.
- Après chaque publication : rappeler l'inspection d'URL dans la Search
  Console (action côté propriétaire du site).
