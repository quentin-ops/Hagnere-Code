# Dossier de recherche — `prix-referencement-naturel`

> **Statut au 25 juillet 2026 : reconstitution documentaire, passe 1 à
> reprendre.** Les sources, prix et concurrents mentionnés dans le giga-audit
> du 24 juillet 2026 sont **hérités de cet audit et non rouverts** dans cette
> passe. Ce dossier ne transforme pas des catalogues en prix de marché, ne
> valide aucun calcul, aucune règle juridique, aucun rendu, aucune indexation
> et ne ferme aucun défaut.

## Journal des quatre passes

Propriétaire éditorial unique : **à nommer avant reprise**.

| Passe                        | État        | Date       | Base examinée                     | Blocage réel                                                |
| ---------------------------- | ----------- | ---------- | --------------------------------- | ----------------------------------------------------------- |
| 1. Recherche                 | À reprendre | 2026-07-25 | Page + audit hérité du 24 juillet | Offres, prix, sources, concurrence et scénarios non rejoués |
| 2. Rédaction et intégration  | À reprendre | 2026-07-25 | Page existante                    | Périmètres, TCO, capacité interne et seuils à reconstruire  |
| 3. Contre-audit indépendant  | Bloquée     | 2026-07-25 | Audit du brouillon seulement      | Aucun snapshot corrigé à recalculer                         |
| 4. Plume humaine et contrôle | Bloquée     | 2026-07-25 | Non exécutée                      | P3 non validée, test lecteur et QA finale absents           |

Les états suivent
[`workflow-maitre-guides-4-passes.md`](../workflow-maitre-guides-4-passes.md).
Ils ne ferment aucun incident de l'audit.

## 1. Périmètre et cible dirigeant

| Élément     | Observation                                                                                 |
| ----------- | ------------------------------------------------------------------------------------------- |
| Page relue  | `src/app/guides/prix-referencement-naturel/page.tsx`                                        |
| Empreinte   | `d984788f90e8…`, identique au snapshot audité                                               |
| Audit       | `docs/audits/giga-audit-2026-07-24/guides/prix-referencement-naturel.md`                    |
| Référentiel | charte de qualité + workflow maître en quatre passes                                        |
| Lecteur     | dirigeant/indépendant qui reçoit des offres SEO et veut décider quoi financer               |
| Décision    | audit, sprint, forfait mensuel, production interne, Ads, report ou absence d'investissement |

**Phrase réelle à tester, non verbatim :** « On me propose 800 €, 1 500 € ou
5 000 € par mois pour du référencement naturel. Qu'est-ce que j'achète
vraiment, combien mon équipe devra travailler et à quel moment je dois
continuer, réduire ou arrêter ? »

**Réponse attendue :** un prix SEO ne vaut que par le périmètre, les
livrables, le temps, les actifs, la mesure et les conditions de sortie. Il faut
comparer le coût complet et décider sur des preuves à J30/J90, jamais sur une
position garantie.

**Promesse décisionnelle :** permettre de comparer des devis à périmètre égal,
choisir une première étape, calculer 6/12/18 mois et définir un seuil de pause.

**Promesses interdites :** « prix moyen 2026 » sans méthode, première position,
trafic ou ROI garanti, volume Keyword Planner comme trafic SEO, statistiques
US converties en résultat français, liens achetés comme garantie.

## 2. Couverture observée dans la page

La page :

1. donne trois repères initiaux : audit PME 800–3 000 €, local
   800–1 500 €/mois, national 2 500–5 000 €/mois ;
2. présente audits, accompagnement, articles, liens et TJM ;
3. explique quatre modèles de facturation ;
4. convertit budget en heures avec un TJM de 900 € ;
5. détaille technique, contenu, popularité et pilotage ;
6. cite des prix d'outils et de liens ;
7. traite délai, statistiques, promesses, droits et loi Sapin ;
8. propose sept actions « gratuites » estimées à 15–20 heures ;
9. donne une formule de ROI et le cas fictif de Nathalie ;
10. explique quand préférer Ads, prospection, audit ou report ;
11. conclut par un CTA Hagnéré Code.

### Forces à préserver

- L'ouverture parle budget et travail acheté.
- La page refuse la position garantie.
- L'exemple Nathalie est explicitement fictif.
- La conversion budget/TJM est compréhensible.
- Le calcul de rentabilité expose ses variables.
- Le guide reconnaît que SEO n'est pas toujours le bon premier choix.
- Les liens de manipulation sont déconseillés.

### Promesse non délivrée

- Les fourchettes n'ont pas de source directe près de chaque ligne.
- Les offres locales, nationales, audits et articles n'ont pas le même
  périmètre.
- « Prix 2026 » n'a ni échantillon, ni médiane, ni méthode publique.
- Le temps interne n'est pas intégré au TCO.
- Aucun TCO égalisé SEO/Ads/interne/sprint/report.
- Un seul scénario ROI, déficitaire, sans sensibilité.
- Aucun seuil J30/J90 ni coût du statu quo.
- Le CTA ne fournit pas de comparateur autonome.

## 3. Demande, concurrence et angle supérieur

L'audit rapporte des recherches France, États-Unis, Royaume-Uni et Australie
sur prix SEO, audit, forfait mensuel et modèles de facturation. La SERP est
saturée de fourchettes et de « cela dépend ».

Ce benchmark est **historique et non rejoué**. Les pages de vendeurs ne
prouvent pas un prix français. Les études étrangères doivent conserver pays,
devise, échantillon, date et méthode.

Angle supérieur :

- comparer des unités et livrables identiques ;
- distinguer catalogue, étude, devis et hypothèse ;
- intégrer temps interne, outils, production hors forfait et sortie ;
- calculer le coût du statu quo ;
- scénarios prudent/central/haut ;
- sensibilité ±25 % et seuil d'arrêt ;
- comparateur téléchargeable réel ;
- cas où Ads, prospection ou report gagne.

| Question                   | Couverture actuelle | Preuve supérieure                                             |
| -------------------------- | ------------------- | ------------------------------------------------------------- |
| Quel budget pour mon cas ? | trois repères       | questionnaire + trois scénarios                               |
| Que finance le forfait ?   | familles de travail | livré/non livré/quantité/owner/preuve                         |
| Audit ou mensuel ?         | juxtaposés          | règle : inconnues critiques et baseline d'abord               |
| Quel coût interne ?        | 15–20 h floues      | heures × coût chargé par volume                               |
| SEO ou Ads/report ?        | mention             | même horizon, actifs, vitesse, risque et sortie               |
| Quand arrêter ?            | absent              | J30/J90, preuve minimale, seuil de pause et responsable       |
| Quel ROI ?                 | formule + un cas    | scénarios, attribution, valeur résiduelle et contrôle inverse |

## 4. Preuves et sources réellement présentes

| Source dans la page                            | Usage                                   | Limite                                                          |
| ---------------------------------------------- | --------------------------------------- | --------------------------------------------------------------- |
| Google « Avez-vous besoin d'un référenceur ? » | tâches, prudence et absence de garantie | ne donne aucun prix                                             |
| Google spam policies                           | liens/manipulation                      | distinguer SEO et publicité                                     |
| Ahrefs : ranking, trafic, AI Overviews         | délais/observations                     | études propriétaires, contexte et causalité à borner            |
| Pew Research, AI summaries                     | comportement de clic aux États-Unis     | date, échantillon et transposition France à expliciter          |
| SRI France                                     | marché publicitaire                     | ne prouve pas un prix SEO                                       |
| DGCCRF aide aux démarches administratives      | alerte actuelle de la page              | sujet éloigné des prix SEO ; audit demande retrait/remplacement |
| Légifrance, deux articles                      | droits/loi Sapin                        | portée juridique à qualifier et séparation SEA/SEO nécessaire   |

Les pages SeoMix, Deux.io, SEO.fr, Axtracom, Whito, StudioHawk, Semrush et
Screaming Frog apparaissent dans l'audit, **pas dans la page actuelle**. Elles
doivent être rouvertes avant de soutenir un prix ou une méthode.

## 5. Chiffres, hypothèses et calculs

### Chiffres visibles

- audit PME 800–3 000 € ;
- SEO local 800–1 500 €/mois ;
- SEO national 2 500–5 000 €/mois ;
- TJM illustratif 900 €, journée de huit heures ;
- sept actions gratuites annoncées 15–20 h ;
- exemple Nathalie : 480 recherches, CTR 6 %, demandes 2,5 %, signature 1/3,
  marge 4 200 €, budget 1 400 €/mois.

Les conversions budget/TJM sont arithmétiquement cohérentes selon l'audit.
Le cas Nathalie donne :

```text
480 × 6 % = 28,8 visites/mois
28,8 × 2,5 % × 1/3 = 0,24 client/mois
0,24 × 4 200 × 12 = 12 096 €/an
1 400 × 12 = 16 800 €/an
écart = -4 704 € avant temps interne, outils et statu quo
```

Ce scénario est fictif et incomplet. Le CTR, la conversion, le délai, la
marge, l'attribution et la valeur résiduelle doivent varier. Le total
15–20 h n'est pas reproductible sans nombre de pages et villes.

### Modèle cible

```text
TCO SEO(H) = audit + technique + contenu + popularité autorisée
           + outils + temps interne + mesure + maintenance + sortie

Valeur prudente = marge incrémentale attribuable
                + coûts réellement évités
                + actifs encore utiles après l'arrêt
```

Comparer 6/12/18 mois ; sensibilité ±25 % sur forfait, heures, CTR,
conversion, marge et délai. Une visite ou une position n'est pas une vente.

## 6. Comparaison et position professionnelle

Options :

1. audit ponctuel ;
2. sprint correctif ;
3. forfait mensuel ;
4. équipe interne/dirigeant ;
5. Google Ads ;
6. prospection/autre canal ;
7. report.

Périmètre commun : marché, site/pages, pays/langues, livrables, mesure,
contenus, temps interne, outils, engagement, actifs, sortie et horizon.

Position :

- commencer par un audit quand les inconnues techniques ou éditoriales sont
  critiques ;
- ne financer un forfait qu'avec baseline, plan, propriétaire et preuves ;
- préférer Ads/test commercial quand la demande doit être testée vite ;
- arrêter ou réduire quand J30/J90 ne produit pas les preuves convenues ;
- refuser garanties de position et achat de liens manipulateurs.

Contre-cas : une PME avec faible volume de recherche et marge limitée peut
avoir intérêt à prospecter ou acheter un trafic très ciblé avant de financer
un programme SEO long.

## 7. Défauts ouverts hérités

### P0

L'audit constate **0 P0**. Cela ne valide pas la portée juridique ni les prix.

### P1 — douze défauts

| ID    | Défaut hérité                                        |
| ----- | ---------------------------------------------------- |
| P1-01 | sources de prix non localisées                       |
| P1-02 | périmètres incomparables                             |
| P1-03 | « prix 2026 » sans échantillon ni méthode            |
| P1-04 | Keyword Planner présenté comme seule source primaire |
| P1-05 | coût interne non intégré                             |
| P1-06 | total 15–20 h non reproductible                      |
| P1-07 | aucun TCO égalisé ni coût du statu quo               |
| P1-08 | pas de sensibilité ni porte d'arrêt                  |
| P1-09 | prix de liens et TJM exacts sans preuve par ligne    |
| P1-10 | loi Sapin et généralisation Hagnéré non étayées      |
| P1-11 | statistique DGCCRF ancienne/hors sujet               |
| P1-12 | aucun document de décision téléchargeable            |

### P2 — sept défauts

| ID    | Défaut hérité                                               |
| ----- | ----------------------------------------------------------- |
| P2-01 | temps de lecture à recalculer sur le texte rendu            |
| P2-02 | dossier de recherche absent au moment de l'audit            |
| P2-03 | FAQ Pew trop compacte et mal bornée                         |
| P2-04 | lexique CAC, TCO, attribution, CTR et coût d'opportunité    |
| P2-05 | tableaux à rendre réellement lisibles sur mobile            |
| P2-06 | date du registre seulement après correction livrée          |
| P2-07 | cohérence dates/titre/OG/FAQ/données structurées à vérifier |

Ce fichier ne ferme pas P2-02 : la vraie recherche P1 doit encore être
exécutée et contre-auditée.

## 8. Signaux humains, anti-IA et conversion

### À préserver

- question budget dès l'ouverture ;
- explication du travail acheté ;
- exemple fictif transparent ;
- décision SEO/Ads/report ;
- refus des garanties.

### À corriger

- succession de fourchettes qui ancre avant d'expliquer le périmètre ;
- accumulation de chiffres précis sans source proche ;
- détour DGCCRF anxiogène et hors intention ;
- acronymes sans traduction : CAC = coût pour obtenir un client ; TCO = tout
  ce que la décision coûte ; attribution = part du résultat qu'on peut
  raisonnablement relier au canal ;
- répétition de tableaux sans décision ou seuil.

La narration finale doit partir de trois devis incompatibles, les compléter
ligne par ligne, puis montrer lequel gagne selon marge, horizon et temps.

### Conversion

Le lecteur doit pouvoir télécharger un comparateur local et l'utiliser sans
contact : prix, livrables, temps, outils, actifs, preuves, engagement et
sortie. Le CTA peut proposer sa relecture avec livrable/délai/prix explicites.
Ni le comparateur ni son test ne sont prouvés ici.

## 9. État exact des quatre passes

L'audit décrit un plan en quatre passes mais n'en valide aucune :

| Passe                 | État documentaire                      | Motif                                                    |
| --------------------- | -------------------------------------- | -------------------------------------------------------- |
| P1 — recherche/preuve | **à reprendre**                        | sources/prix non localisés et benchmark non rejoué       |
| P2 — réécriture       | **page existante, non validée**        | douze P1 ouverts                                         |
| P3 — contre-audit     | **rapport présent, porte non validée** | aucun snapshot corrigé, aucun recalcul indépendant final |
| P4 — plume/QA         | **rejetée/non exécutée**               | score audit 77/100, lecteur et QA finale non prouvés     |

Production, sitemap, exploration, indexation, classement et conversion :
**non prouvés**.

## 10. Prochaine correction et critères de revalidation

1. Rouvrir chaque prix avec URL, date, pays, devise, HT/TTC, échantillon,
   méthode, engagement et périmètre.
2. Séparer SEO, SEA et loi Sapin ; retirer la statistique hors sujet.
3. Construire trois budgets et comparer sept options à horizon commun.
4. Recalculer formules, scénarios, sensibilité et seuils J30/J90.
5. Produire/tester le comparateur autonome.
6. P3 indépendante : prix, calculs, droits, contre-cas, décision.
7. P4 : dirigeant non auteur, mobile, tableaux, liens, OG, JSON-LD, build et
   route, puis production/indexation rapportées séparément.

Sortie possible seulement si chaque chiffre est traçable ou illustratif,
chaque budget achète le même périmètre, le temps interne et le statu quo sont
comptés, le verdict peut changer avec les hypothèses, aucun P1 ne reste ouvert et
le CTA remet réellement ce qu'il annonce.
