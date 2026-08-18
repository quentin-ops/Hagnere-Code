# Audit approfondi — `audit-google-ads-que-verifier`

Date : 24 juillet 2026

Auditeur concurrentiel : agent indépendant, lecture seule

Snapshot du guide :

```text
Page : src/app/guides/audit-google-ads-que-verifier/page.tsx
Registre : src/lib/guides.ts:954-966
Image sociale : src/app/guides/audit-google-ads-que-verifier/opengraph-image.tsx
Recherche : docs/research/audit-google-ads-que-verifier.md
Date visible des sources : 20/07/2026 ; dateModified du registre : 21/07/2026
SHA-256 page.tsx : bd502be096bf5a36b4be88e66a4667a025118f1f6be44b9ce8f85725ddc0fcef
SHA-256 opengraph-image.tsx : 9826057316e5c81ce3449f5d2d95585511a90ebf2530eb4e4b2e22bd45f2d580
SHA-256 guides.ts : 8663e6e84352121ec854393e049492a1c2b72f242166141e5d31e0911b43cb09
SHA-256 recherche : 1ffab41eb043cc4906e5f752e0d334ab63c01b0d620ba863349407509023428b
```

## 1. Verdict exécutif

```text
Lecteur exact : dirigeant ou responsable acquisition d'une TPE/PME française qui possède déjà un compte Google Ads et hésite à corriger, tester ou augmenter.
Question réelle : les chiffres affichés par Google mesurent-ils une demande utile, et quelles preuves faut-il avant de remettre du budget ?
Décision attendue : attendre faute de données, corriger la chaîne, tester une hypothèse isolée ou augmenter progressivement avec un plafond et une condition d'arrêt.
Réponse actuelle en une phrase : vérifier l'objectif, les accès et la période, puis suivre la chaîne conversion → contact → qualification → vente → marge avant d'interpréter recherches, annonces, pages et enchères.
Défaut qui coûte le plus de valeur : le guide décrit très bien les contrôles, mais ne convertit pas la chaîne 42 → 17 → 6 → 2 en décision financière reproductible et ne compare pas les formats de revue à périmètre, effort et livrable égaux.
Niveau actuel : B (excellent socle de diagnostic, approfondissement décisionnel encore nécessaire)
Priorité : haute
Statut : audité — à réécrire
P0 : 0 ; P1 : 5 ; P2 : 8
```

### Score avant correction

| Axe | Note /10 | Preuve localisable | Manque décisif |
| --- | ---: | --- | --- |
| Intention | 9 | Ouverture `page.tsx:323-356` et quatre sorties `:337-345` | La question de budget est claire, mais la phrase de décision ne fournit pas encore de seuil économique. |
| Décision | 8 | Intro, tableau des formats `:960-986`, décisions `:961-965` | La conclusion est qualitative ; aucun calcul ne dit quand une hausse est acceptable ou combien coûte l'attente. |
| Pédagogie | 9 | Parcours suivi → recherches → annonces → pages → contacts → budget `:443-849` | Les notions sont bien traduites ; le pont chiffres → marge demande encore un exemple guidé. |
| Profondeur | 7 | Consentement, CRM, PMax, AI Max, imports, expériences et passation `:526-607`, `:849-912`, `:915-986` | Pas de scénarios simple/central/exigeant, sensibilité ni priorité chiffrée ; l'audit reste une excellente liste, pas une démonstration d'impact. |
| Preuve | 9 | Liens Google Ads/Tag Platform/CNIL près des affirmations `:401-441`, `:445-607` | Les évolutions 2026 (Data Manager/API pour imports et enhanced leads) imposent une revalidation actuelle ; le dossier historique n'est pas une preuve de production. |
| Comparaison | 7 | Revue interne, audit ciblé, complet `:967-986` | Périmètres, temps, coût et critères de recette ne sont pas égalisés ; aucun troisième scénario économique « ne rien changer ». |
| Originalité | 9 | Registre à double entrée et séparation Observé/Hypothèse/Test/Limite `:205-253` | Angle fort, mais le registre n'est pas copiable comme tableau complet et la priorisation n'a pas de méthode reproductible. |
| Style | 9 | Ton dirigeant, refus du score global et des promesses `:348-356`, `:742-751` | Quelques passages très denses sur Consent Mode, PMax et imports peuvent être relégués ou mieux signalés comme optionnels. |
| Conversion | 8 | Mauvais fit, formats de mission et CTA après le livrable `:988-1017` | Hagnéré Code vend audit et pilotage ; l'intérêt commercial n'est pas nommé explicitement dans le comparatif. |
| SEO/produit | 7 | Article + Breadcrumb JSON-LD, metadata, OG source, registre `guides.ts:954-966` | Readtime 404 sans serveur ; QA responsive de la restructuration non exécutée ; `dateModified` et sources sont antérieurs à l'audit. |

Total : **82/100**

Le seuil de publication est 90/100, aucun axe sous 8 et les axes Intention,
Décision, Pédagogie, Profondeur, Preuve et Comparaison à 9 ou 10. Le guide est
nettement au-dessus d'une checklist SEO ordinaire, mais il n'a pas encore la
preuve chiffrée nécessaire pour autoriser une hausse de budget.

## 2. Ce que le guide dit réellement

- L'ouverture est excellente pour un chef d'entreprise : elle part de la facture, des clics et des conversions, puis demande combien sont devenus appels utiles, devis et ventes (`page.tsx:323-345`).
- L'exemple fictif central affiche 42 actions formulaire dans Google, 17 contacts uniques dans le CRM, 6 qualifiés et 2 ventes, avec marge et lien campagne inconnus (`:205-253`). Il explique la bonne question — l'écart entre systèmes — mais ne calcule aucun CPL, CPA, taux de transformation ou seuil de hausse parce que la dépense et la marge restent absentes.
- Le parcours de contrôle est complet : objectifs/accès/période (`:388-441`), conversion et doublons (`:443-524`), Consent Mode et CNIL (`:543-607`), termes/zones (`:610-659`), annonces/Quality Score (`:661-694`), pages (`:696-716`), CRM/ventes/marge (`:718-751`), budget/historique/expériences (`:753-847`), fonctions complexes (`:849-913`) et livrable (`:915-986`).
- Le guide distingue correctement constat, hypothèse, test et limite, et refuse le score global. C'est préférable aux checklists qui additionnent des cases « oui/non ».
- La chaîne est bien nommée mais pas réceptionnable telle quelle : le lecteur doit encore créer son propre registre avec question, chiffre Ads, CRM, inconnue, priorité, correction, responsable, résultat attendu et arrêt (`:733-740`).
- Le tableau des formats indique ce que doit contenir une revue interne, un audit ciblé ou un audit complet (`:967-986`), mais aucun format n'est décrit sur une période, un nombre de campagnes, un volume d'outils, un nombre d'heures ou un critère de recette commun.
- Le CTA arrive après les mauvais fits et le livrable. Il laisse honnêtement la possibilité qu'une revue interne suffise (`:988-1017`), mais ne dit pas « Hagnéré Code vend cette prestation et n'est pas un arbitre neutre ».
- Le bloc avancé est bien conditionnel : PMax, AI Max, Shopping et imports ne doivent être audités que s'ils sont actifs (`:849-857`). C'est une bonne protection contre l'audit encyclopédique inutile.

### Divergence du dossier de recherche

Le dossier de recherche se décrit comme « publiable » et reprend un score interne
19/20, une publication en production et un parcours mobile contrôlé, tout en
indiquant que le rendu responsive de la restructuration restait à recontrôler.
Dans le présent audit, aucune de ces affirmations n'est reprise comme preuve :
la commande de mesure retourne HTTP 404 et aucun navigateur n'a été piloté.
Le dossier est donc un historique de travail, non une preuve actuelle de route,
de rendu, de déploiement ou d'indexation.

## 3. Benchmark France et international

Requêtes observées le 24 juillet 2026, sans données de volume :

```text
FR : audit Google Ads checklist 2026 conversions CRM consentement Performance Max
US : Google Ads audit checklist 2026 conversion tracking CRM offline conversions
UK : Google Ads audit checklist UK 2026 conversion tracking account audit
Australie : Google Ads audit checklist Australia 2026 PPC audit
```

Les pages commerciales servent à identifier ce qui est couvert et ce qui est
oublié ; elles ne prouvent ni gaspillage moyen, ni résultat, ni durée universelle.
Les fonctions et règles de Google viennent de la documentation Google Ads/Tag
Platform. Le périmètre juridique français vient de la CNIL.

| Ressource et URL directe | Marché | Réponse utile | Artefact/preuve | Limite | Apport à adapter |
| --- | --- | --- | --- | --- | --- |
| [Make Sense — checklist compte Google Ads 2026](https://make-sense.fr/blog/audit-compte-google-ads-checklist-2026) | France | 8 blocs : tracking, structure, exclusions, AI Max, enchères, Merchant Center, landing, reporting | Signaux d'alerte et ordre de revue ; publié 03/07/2026 | Agence intéressée, ses seuils ne sont pas universels | Conserver l'ordre tracking d'abord ; exiger preuves et conséquences métier. |
| [ScaleCity — audit Google Ads 15 points](https://scalecity.fr/audit-google-ads/) | France | Commence par tracking puis structure, gaspillage et annonces | Checklist 15 points ; donne des durées 2–4 h / journée multi-campagnes | Durées et seuil « écart CRM >20 % » non sourcés comme norme | Reprendre un ordre, pas le délai ni le seuil sans hypothèse. |
| [Vincent Duquesne — audit gratuit, ce qu'il doit contenir](https://www.vincentduquesne.net/audit-google-ads-gratuit-quoi-attendre.html) | France | Distingue audit sérieux et script commercial | Met en avant constats vérifiables et limites | Moins de contrôles techniques détaillés, consultant vendeur | Renforcer la distinction audit/recommandation commerciale. |
| [Convertix — ce qui bloque réellement](https://convertix.fr/google-ads/audit-google-ads-analyser-ce-qui-bloque-reellement-la-performance-de-vos-campagnes/) | France | Aligne tracking, métier et rentabilité | Chaîne métier et lecture des blocages | Causalités et solutions propres à l'agence | Garder la chaîne et imposer limite/contre-cas. |
| [Konvertable — audit 2026](https://konvertable.com/blog/google-ads-audit-checklist) | États-Unis | 8 étapes, tracking avant structure, search terms, enchères, landing, pacing | Promet une version 30 min et hiérarchise les contrôles | « 80 % des fuites » issu d'une revendication propriétaire | Ajouter une revue courte/longue sans reprendre les pourcentages. |
| [The Snow Media — 47 points](https://thesnowmedia.com/resources/google-ads-audit-checklist/) | États-Unis | 7 catégories, scorecard et priorisation des fixes | Checklist 47 points, e-commerce/home services/B2B | Affirme 20–35 % de gaspillage et 60 %+ d'incidents sans méthode publique | Adapter la priorisation mais supprimer les benchmarks non prouvés. |
| [BTB Audits — 12 sections](https://www.btbaudits.com/blog/complete-google-ads-audit-checklist-2026) | États-Unis | Ajoute coût dollar de l'erreur et post-click/unit economics | Oui/non, PDF et checklist interactive | Basé sur dépenses gérées par le vendeur | Apporter coût d'erreur sous forme d'hypothèse, pas de statistique. |
| [Byte Digital — checklist UK SMEs](https://bytedigital.io/resources/google-ads-account-audit-checklist-uk-smes/) | Royaume-Uni | Formulaire, appels, CRM, soft conversions, consentement | Contrôles de lead et consentement orientés PME | Agence et marché UK | Ajouter ces contrôles à la chaîne, en français et sans transposer le droit UK. |
| [LaunchedIn10 Law — 12-point audit](https://law.launchedin10.co.uk/resources/ads-audit-checklist/) | Royaume-Uni | Vérifie call duration, formulaire, géographie, landing et pacing | Rapport écrit + appel de revue, exemple legal | Seuils 60 s et 50–70 % revendiqués pour un secteur | Présenter la durée d'appel comme hypothèse à adapter au métier. |
| [Adgenix — senior operator audit](https://adgenix.com.au/blog/google-ads-audit-checklist/) | Australie | Distingue audit de réglages et audit de stratégie, effort 2–8 h | Cadre 10 sections et limites AI/search | Agence, durée non universelle | Ajouter effort relatif et risque de réglage automatique. |
| [Adstralis — 45 points](https://adstralis.agency/en/blog/google-ads-audit-checklist/) | Australie | Couvre les 45 contrôles et évoque le prix d'un audit | Checklist et repère AUD 500–1 500 | Tarif propre, pas un benchmark international | Ne reprendre que les lignes de livrable et la devise contextualisée. |
| [Google — checklist enhanced conversions for leads](https://support.google.com/google-ads/answer/16782203?hl=fr) | Source primaire | Conditions préalables, capture, hachage, import, surveillance et migration 2026 | Checklist officielle ; Data Manager/API et migration à partir d'avril/juin 2026 | Documentation produit, pas conformité CNIL ni qualité CRM | Ajouter un contrôle de chemin d'import actuel et une date de revalidation. |
| [Google — mesure des conversions](https://support.google.com/google-ads/answer/1722022?hl=en_us_us) | Source primaire | Website, appels, offline, conversion actions et migration API | Documentation officielle ; changement du 15/06/2026 signalé | Page en anglais et règles susceptibles d'évoluer | Ne pas laisser « import hors connexion » sans vérifier l'API/outil réellement utilisé. |

### Saturation

La SERP est saturée sur les listes de réglages : structure, mots-clés,
annonces, ciblage, enchères, landing pages, tracking, PMax et reporting
reviennent partout. Les pages les plus utiles ajoutent quatre éléments :

1. l'ordre de dépendance — tracking et définition du lead avant optimisation ;
2. une vraie hiérarchie d'impact plutôt qu'un score global ;
3. la chaîne CRM et le coût de l'erreur ;
4. un livrable écrit, une revue et une passation.

Le gain d'information de Hagnéré est déjà bon avec son registre Observé /
Hypothèse / Test / Limite. Il devient difficilement remplaçable seulement s'il
ajoute la preuve financière 42 → 17 → 6 → 2, une priorisation simple/centrale/
exigeante et des formats de mission à périmètre égal. Les statistiques de
« gaspillage moyen » des concurrents ne sont pas réutilisables sans méthode.

## 4. Matrice de gain d'information

| Question décisive | Meilleure réponse française | Apport international | Couverture actuelle | Manque | Réponse supérieure à produire |
| --- | --- | --- | --- | --- | --- |
| Par quoi commencer ? | Make Sense/ScaleCity commencent par tracking et structure | Konvertable et Byte Digital confirment tracking avant les réglages | Suivi en premier `:443-524` | Pas de règle de blocage mesurable | Si conversion primaire non testée, suspendre toute conclusion de performance. |
| 42 actions Ads deviennent-elles des leads ? | Les guides commerciaux parlent de CRM, sans recette complète | Byte/Google enhanced leads détaillent champs/import | Exemple 42→17→6→2 `:205-253` | Déduplication, identifiants, dates et attribution sans calcul | Donner taux, inconnues et formule, puis refuser une hausse sans marge. |
| Consent Mode est-il conforme ? | France/CNIL sépare consentement et traceurs | Google documente états, UK couvre EUUCP | Table avant/accepté/refus/retrait `:543-607` | Aucun test de fournisseur/CMP ni validation juridique | Définir ce qui est observé, modélisé et hors périmètre. |
| Quel terme/lieu gaspille ? | Checklists couvrent termes, négatifs, zones, horaires | US/Australie ajoutent geo/offshore et search-term limits | `:610-659` | Pas d'échantillon chiffré ni issue métier | Registre 30 lignes : coût, intention, qualification, action et contrôle inverse. |
| Le score d'annonce/Quality Score suffit-il ? | Pages françaises les relativisent | US scorecards les utilisent parfois comme pass/fail | `:661-694` | Priorisation par impact économique absente | Conserver diagnostic, calculer coût/risque par action. |
| Quelle page corriger ? | Landing et cohérence annoncées | UK ajoute call/form confirmation | `:696-716` | Pas de test mobile/formulaire réceptionné décrit comme recette | Ajouter test évènement → réception → CRM → confirmation. |
| PMax/AI Max sont-ils auditables ? | Make Sense et la page couvrent les rapports disponibles | US/Australie insistent sur limites algorithmiques | Bloc optionnel `:849-913` | Pas de migration/transition produit 2026 dans le texte | Ajouter date de fonctionnalité, configuration observée et angles morts. |
| Quel audit acheter ? | Revue interne/ciblé/complet | UK décrit rapport + appel ; Australie décrit effort | `:967-986` | Scope, effort, prix et critères d'acceptation non égaux | Comparer trois formats sur même compte/horizon et livrable. |
| Quand augmenter ? | Quatre décisions et limite de retour | US scorecards chiffrent parfois coût d'erreur | `:961-965` | Aucun budget, seuil de marge ou sensibilité | Donner un exemple fictif avec valeur attendue, sans promesse de gain. |
| Que vend Hagnéré ? | CTA orienté cadrage et mauvais fit | Tous les concurrents sont intéressés | `:988-1017` | Conflit d'intérêt non explicite | Déclarer la vente du service et le cas où Hagnéré recommande une revue interne. |

## 5. Faits et fraîcheur

| Affirmation du guide | Verdict | Source primaire actuelle | Périmètre et date | Correction |
| --- | --- | --- | --- | --- |
| Les accès Google Ads comprennent notamment lecture, facturation, standard et administration | confirmé sous revalidation | [Niveaux d'accès](https://support.google.com/google-ads/answer/9978556?hl=fr) | Produit Google Ads ; consulté dans le dossier le 20/07, page vivante | Conserver « notamment » et ne pas déduire les droits Analytics/CRM. |
| Le client doit conserver accès et comprendre la propriété manager/client | confirmé et recommandation | [Propriété comptes client](https://support.google.com/google-ads/answer/7456532?hl=fr) | Organisation des comptes Google ; situation exacte à observer | Distinguer fait Google de la recommandation Hagnéré. |
| Principales/secondaires influencent rapports/enchères | confirmé sous revalidation | [Objectifs de conversion](https://support.google.com/google-ads/answer/10993988?hl=fr) | Configuration d'objectifs, plusieurs actions possibles | Conserver ; exiger campagne → objectif → résultat attendu. |
| Diagnostics de balise/conversions améliorées exposent un état technique | confirmé avec limite | [Diagnostics](https://support.google.com/google-ads/answer/14681508?hl=fr), [enhanced conversions](https://support.google.com/google-ads/answer/11956168?hl=fr) | Technique Google, pas qualité métier ni conformité | Ajouter un événement réel et un rapprochement CRM. |
| Enhanced conversions for leads / imports suivent une évolution API 2026 | à mettre à jour | [Checklist Google 2026](https://support.google.com/google-ads/answer/16782203?hl=fr), [mesure](https://support.google.com/google-ads/answer/1722022?hl=en_us_us) | Migration Data Manager/API signalée à partir d'avril/juin 2026 | Vérifier chemin actuel, dates, consentement et outil ; ne pas publier une procédure ancienne. |
| Consent Mode transmet des états mais ne fournit pas bannière/conformité | confirmé | [Google Tag Platform](https://developers.google.com/tag-platform/security/guides/consent?hl=fr) | Produit de transmission, pas conseil juridique | Conserver et compléter par test CMP + avis compétent si nécessaire. |
| Consentement préalable pour traceurs publicitaires en France | confirmé avec périmètre | [CNIL — FAQ cookies](https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/FAQ) | Exceptions, finalités et configuration réelles | Garder « dans le périmètre décrit » et dater la doctrine. |
| Le rapport de termes n'est pas exhaustif | confirmé sous revalidation | [Rapport termes](https://support.google.com/google-ads/answer/2472708?hl=fr) | Requêtes peu actives masquées | Conserver ; aucune conclusion sur toute la demande. |
| Correspondance exacte peut couvrir un même sens | confirmé sous revalidation | [Types de correspondance](https://support.google.com/google-ads/answer/7478529?hl=fr) | Règles de correspondance évolutives | Conserver date/interface et tester requêtes observées. |
| Géolocalisation n'est pas exacte à cent pour cent ; présence/intérêt diffèrent | confirmé sous revalidation | [Ciblage géographique](https://support.google.com/google-ads/answer/1722038?hl=fr) | Options de ciblage et type de campagne | Ne pas transformer en précision garantie. |
| Force d'annonce ne calcule pas Ad Rank/Quality Score/gain | confirmé dans le dossier | [Force d'annonce](https://support.google.com/google-ads/answer/9921843?hl=fr) | Annonces responsives et indicateur Google | Conserver la distinction diagnostic/résultat. |
| Quality Score est un diagnostic, pas KPI métier ni entrée directe | confirmé dans le dossier | [Quality Score](https://support.google.com/google-ads/answer/6167118?hl=fr) | Mots-clés Search | Aucun seuil universel. |
| Performances récentes peuvent être faibles avant conversion | confirmé sous revalidation | [Délai de conversion](https://support.google.com/google-ads/answer/14545572?hl=fr) | Fenêtre de conversion et cycle réel | Choisir période selon métier, pas règle 90 jours. |
| Score d'optimisation est une estimation liée aux recommandations | confirmé | [Score d'optimisation](https://support.google.com/google-ads/answer/9061546?hl=fr) | Compte Google Ads, pas rentabilité | Ne pas le traiter comme verdict. |
| Expériences permettent base/variante avec répartition | confirmé sous revalidation | [Expériences Google Ads](https://support.google.com/google-ads/answer/10682377?hl=fr) | Fonctionnalités disponibles selon campagne | Définir population, période, métrique et interférences. |
| Un audit peut conclure à 42 actions, 17 contacts, 6 qualifiés, 2 ventes | exemple illustratif fictif | `page.tsx:205-253` | Volumes inventés, aucune dépense/marge | Conserver les étiquettes et ajouter formules, jamais en preuve client. |
| Le compte a été contrôlé en production, mobile et dans 43 URLs | historique non prouvé ici | `docs/research/...`, sections 8–10 | Aucun navigateur ni production exécuté le 24/07 | Retirer comme preuve actuelle ou joindre artefacts datés. |

### Contradictions

- La recherche affirme un score interne 19/20 et un statut de production, alors
  qu'elle dit aussi que le responsive de la restructuration restait à contrôler.
- Le guide sépare bien les quatre statuts Observé/Hypothèse/Test/Limite, mais
  le livrable demandé ne fournit pas le registre lui-même : l'artefact signature
  est décrit plutôt que livré.
- Les fonctions enhanced leads et imports hors connexion sont présentées comme
  contrôlables, mais la documentation Google a changé en 2026 : le chemin API
  et la date de migration doivent devenir une ligne de preuve obligatoire.

### Faits à retirer plutôt qu'à affaiblir

- Toute durée universelle d'audit ou seuil d'écart CRM.
- Tout pourcentage de gaspillage moyen repris des concurrents.
- Toute conformité déduite de Consent Mode, du hachage ou d'un diagnostic vert.
- Toute décision de hausse sans dépense, marge, délai de conversion et statut
  qualifié disponibles.
- Toute preuve de production, mobile ou indexation provenant uniquement du
  dossier de recherche historique.

## 6. Scénarios et calculs à construire

### 6.1 Trois profondeurs d'audit à périmètre égal

Le guide doit comparer ses trois formats sur le même compte fictif : génération
de prospects, une campagne Search et une campagne Performance Max, période de
90 jours, objectif « prospect qualifié », CRM disponible, marge non encore
rapprochée. Les nombres ci-dessous sont des **hypothèses illustratives** et ne
constituent pas les tarifs Hagnéré Code.

Hypothèse temps interne : 50 €/h ; coût externe non renseigné tant qu'aucun
devis daté n'est établi. Le lecteur peut remplacer ce coût par ses propres
heures ou utiliser le devis de l'auditeur.

| Variable | Revue interne | Audit ciblé | Audit complet | Hypothèse/limite |
| --- | ---: | ---: | ---: | --- |
| Périmètre | 1 question, Search | conversion + CRM | Search + PMax + CRM + consentement | Même compte fictif, profondeur différente explicitée. |
| Période | 90 jours | 90 jours + délai de vente | 12 mois + saisonnalité | Une période n'est pas universelle ; elle suit le cycle réel. |
| Heures internes | 4 h | 8 h | 20 h | Hypothèse d'effort de coordination, non promesse. |
| Temps interne valorisé | 200 € | 400 € | 1 000 € | 50 €/h, à remplacer par coût d'opportunité. |
| Livrable | contrôle daté + test + décision | cause/explication + correction + recette | résumé, registre, plan de test, passation | Une revue interne n'apporte pas de regard indépendant. |
| Coût externe | à demander | à demander | à demander | Ne pas inventer un prix de marché ou Hagnéré. |

```text
Formule de coût interne = heures de coordination × coût horaire réel
Formule de valeur attendue = probabilité d'une erreur décisive × perte évitable − coût de la revue
Horizon : 90 jours pour un test ; 12 mois ou cycle complet si vente longue/saisonnière
Inclus : accès, photographie, événements réels, CRM, rapport, recette, responsable et retour arrière selon le format
Exclus : implémentation non commandée, certification juridique, garantie de ROAS, données non accessibles
Variable de bascule : probabilité que la décision de budget soit faussée × coût d'une hausse erronée
Contrôle inverse : chaque constat doit retrouver sa source, son responsable, sa preuve de recette et sa condition d'arrêt
```

### 6.2 Chaîne 42 → 17 → 6 → 2

Le scénario visible peut produire une démonstration sans transformer les volumes
en résultat client :

```text
42 actions Ads « formulaire envoyé »
17 contacts uniques CRM → 17 / 42 = 40,5 % de correspondance apparente
6 prospects qualifiés → 6 / 17 = 35,3 %
2 ventes → 2 / 6 = 33,3 % ; 2 / 42 = 4,8 % des actions Ads
Sans dépense média, délai, marge et règle d'attribution, CPL/CPA et rentabilité restent inconnus.
```

Si un exemple pédagogique ajoute 1 500 € de média, 300 € d'honoraires et
1 200 € de marge contributive par vente, il faut le déclarer fictif : coût
complet = 1 800 €, CPA client = 900 €, marge contributive = 2 400 €, résultat
illustratif = 600 €. À 50 % de correspondance CRM ou une seule vente, le même
coût devient 1 800 € de CPA et le résultat devient –600 €. Ce calcul ne prouve
pas l'incrémentalité : il montre pourquoi l'absence de marge et de règle
d'attribution bloque une hausse.

### 6.3 Priorisation et sensibilité

Ajouter une matrice courte plutôt qu'un score global :

| Scénario | Probabilité d'erreur décisive | Perte évitable hypothétique | Coût interne | Valeur attendue | Décision illustrée |
| --- | ---: | ---: | ---: | ---: | --- |
| Simple — une conversion non dédupliquée | 20 % | 1 500 € | 200 € | 100 € | revue interne si accès et compétence présents |
| Central — CRM non rapproché avant hausse | 40 % | 5 000 € | 600 € | 1 400 € | audit ciblé avant toute augmentation |
| Exigeant — PMax/CRM/consentement multi-outils | 60 % | 15 000 € | 1 200 € | 7 800 € | audit complet ou décision de gel |

Ces valeurs sont des **exemples illustratifs**, pas des benchmarks. Faire varier
la probabilité de 10/40/70 % et la perte de 50/100/200 % de la hausse envisagée.
Le guide doit laisser le lecteur remplacer les valeurs par son coût réel.

## 7. Comparaison et position professionnelle

```text
Options réellement comparables : revue interne ; audit ciblé ; audit complet ; gel des dépenses et collecte de données ; correction puis expérience isolée.
Périmètre et horizon communs : même compte fictif, mêmes 90 jours, mêmes objectifs Ads/CRM, même définition de lead qualifié ; seule la profondeur et le nombre d'outils changent.
Option la moins chère : revue interne si une personne compétente peut accéder aux données et exécuter un test ; sinon le prix minimal est celui d'une décision fausse évitée, pas un forfait affiché.
Option la moins risquée : audit ciblé sur le maillon qui bloque si le problème est localisé ; audit complet si plusieurs systèmes ou formats interviennent ; gel si les données sont insuffisantes.
Option qui demande le moins de temps interne : audit complet externalisé, mais validation de l'offre, CRM, marge et recette restent côté entreprise.
Position Hagnéré Code pour le cas fréquent : ne jamais conseiller une hausse sur un coût par conversion non rapproché d'un lead qualifié et d'une vente ; commencer par la plus petite preuve qui peut invalider l'hypothèse.
Faits qui la fondent : conversions principales/secondaires, limites des termes, délais de conversion, historique et expériences sont documentés par Google ; marge, qualification et attribution appartiennent au métier.
Cas où l'option opposée gagne : revue interne pour une campagne simple et une question unique ; audit ciblé pour une conversion cassée ; audit complet pour PMax/CRM/consentement multi-outils ; gel quand personne ne peut expliquer la marge ou traiter les leads.
Signal de révision : une action corrigée reçue une fois, un rapprochement CRM fiable, une vente avec marge, ou une nouvelle automatisation/consentement qui change la donnée.
Ce que nous déconseillons même si nous pourrions le vendre : audit complet par défaut, score global, application automatique des recommandations, hausse « limitée par le budget » sans seuil d'arrêt, ou certification juridique implicite.
```

Hagnéré Code vend des audits et du pilotage Google Ads. Cette information doit
figurer avant le CTA, avec la phrase : « nous pouvons donc être intéressés par
la suite ; si une revue interne ou un audit ciblé suffit, nous devons aussi le
dire ». C'est une recommandation professionnelle, pas un fait Google.

## 8. Objections et cas limites

| Objection loyale | Réponse prouvée | Incertitude restante | Conséquence |
| --- | --- | --- | --- |
| « Google affiche 42 conversions, je peux augmenter. » | Une conversion est une action configurée ; l'exemple montre 17 contacts, 6 qualifiés et 2 ventes. | Dépense, marge, attribution, doublons. | Gel et rapprochement avant hausse. |
| « Le score d'optimisation est à 95 %. » | Google le présente comme une estimation liée à ses recommandations, pas comme rentabilité. | Effet de chaque recommandation dans ce compte. | Examiner une recommandation à la fois. |
| « Consent Mode règle le RGPD. » | Google transmet des états ; la CMP, l'information, la base légale et la conservation restent distinctes. | Traitements réels et exemptions. | Impliquer le responsable compétent ; aucune certification dans l'audit. |
| « L'audit doit vérifier absolument tout. » | Le bloc PMax/AI Max/Shopping est conditionnel ; la portée doit suivre le compte et la décision. | Fonctions actives et accès. | Choisir revue, ciblé ou complet et l'écrire. |
| « Un audit gratuit suffit. » | Un livrable doit nommer source, limite, responsable, test, recette et passation ; une checklist de vendeur n'est pas une preuve d'exécution. | Qualité du fournisseur. | Demander un exemple de livrable anonymisé et la propriété des données. |
| « Je ne veux pas donner le CRM. » | Sans qualification/vente, le CPL de plateforme ne répond pas à la question commerciale. | Confidentialité, accès minimal, données absentes. | Partager un export minimal ou conclure honnêtement que la rentabilité ne peut pas être validée. |
| « Je veux un audit complet en une heure. » | Les concurrents proposent 15 minutes à 8 heures selon périmètre ; aucun temps universel. | Complexité réelle du compte. | Faire chiffrer le périmètre, pas promettre une couverture totale. |
| « Une seule vente prouve la campagne. » | Le lien temporel est une piste ; Google et CRM ont fenêtres, attribution et modèles différents. | Incrémentalité, autres canaux, saison. | Répliquer ou tester isolément avant d'augmenter. |

## 9. Plan de réécriture

| Ordre | Section proposée | Question résolue | Preuve/scénario/outil | Décision produite | À conserver / créer / couper |
| ---: | --- | --- | --- | --- | --- |
| 1 | Ouverture « le tableau vert ne suffit pas » | Pourquoi auditer avant une hausse ? | 42→17→6→2, étiquette fictive | Gel tant que marge/attribution inconnues | Conserver ouverture ; ajouter dépense/marge comme variables manquantes. |
| 2 | Objectif, accès, période | Quel audit est possible ? | Fenêtre liée au cycle de vente, lecture seule, snapshot | Périmètre daté | Conserver `:388-441`; ajouter checklist copiable des fichiers/accès. |
| 3 | Suivi et Consent Mode | L'action mesurée est-elle réelle et permise ? | Événement réel, déduplication, CMP, CNIL, migration 2026 | Corriger avant interprétation | Conserver ; déplacer API/Data Manager dans une note de fraîcheur. |
| 4 | Recherches, zones, annonces, pages | Le clic est-il cohérent avec l'offre ? | Termes partiels, correspondance, géo, annonce, destination | Exclure, corriger ou tester | Conserver six questions ; ajouter exemple 30 lignes et recette mobile. |
| 5 | Contacts et économie | Une conversion devient-elle une vente rentable ? | Chaîne 42→17→6→2, CPL/CPA/marge | Refuser faux succès | Créer calcul et sensibilité ; couper toute conclusion sans dépense. |
| 6 | Budget et expérience | Quelle variation est causale ? | Historique, délai, test isolé, seuil d'arrêt | Tester ou augmenter plafonné | Conserver table ; ajouter « limitée par budget » chiffré et décision. |
| 7 | Formats d'audit | Que dois-je acheter/faire ? | Revue interne/ciblé/complet, 90 jours, heures, livrables | Choisir un format | Créer comparaison à périmètre égal, pas de prix inventé. |
| 8 | Livrable réceptionnable | Que doit-on recevoir ? | Résumé, registre, plan, recette, passation | Accepter/refuser le rapport | Créer modèle de registre copiable dans la page ou ressource réellement testée. |
| 9 | Position Hagnéré et CTA | Qui est intéressé et quel mauvais fit ? | Conflit explicite, cas revue interne | Contact ou autonomie | Conserver CTA ; ajouter transparence commerciale. |
| 10 | Sources et fraîcheur | Qu'est-ce qui peut changer ? | Google migration/API, CNIL, date d'observation | Revalider à chaque audit | Garder sources proches ; retirer historique de production non prouvé. |

### Contrat des 150 premiers mots

Proposition à valider :

> Votre compte affiche peut-être des conversions et un coût par conversion qui
> semblent rassurants. Cela ne dit pas encore combien de personnes ont réellement
> répondu, combien correspondaient à votre cible, combien sont devenues des
> clients et quelle marge elles ont laissée. Avant d'augmenter le budget, un
> audit doit donc suivre la chaîne entière : action mesurée, contact unique,
> prospect qualifié, vente, marge et délai de transformation. Dans ce guide,
> vous verrez quoi contrôler dans Google Ads, les recherches, les annonces, les
> pages, le CRM et les automatisations. Vous pourrez ensuite choisir entre
> attendre faute de preuve, corriger un maillon, tester une hypothèse ou
> augmenter progressivement avec une limite. Les chiffres de l'exemple sont
> explicitement fictifs : ils montrent comment décider, pas ce que votre compte
> doit obtenir.

### Éléments à supprimer

- les assertions de production, mobile ou indexation issues du dossier de recherche sans artefact actuel ;
- toute durée d'audit, seuil CRM ou taux de gaspillage présenté comme universel ;
- toute conclusion de rentabilité sans dépense, marge, délai et attribution ;
- une procédure enhanced leads/import qui ignore la transition Data Manager/API 2026 ;
- toute formulation laissant croire que le guide certifie le RGPD.

### Éléments à conserver

- la distinction Observé / Hypothèse / Test / Limite ;
- la chaîne conversion → contact → qualification → vente → marge ;
- l'ordre tracking avant optimisation ;
- le test réel d'envoi, d'appel, de doublon et de CRM ;
- la prudence sur termes non exhaustifs, géolocalisation, Quality Score, score d'optimisation, PMax et attribution ;
- le livrable en cinq éléments, les quatre décisions et les mauvais fits.

## 10. Contre-audit après correction

| Problème | Priorité | Correction appliquée | Revalidation indépendante |
| --- | --- | --- | --- |
| P1-01 — chaîne 42→17→6→2 non reliée à dépense/marge/décision | P1 | Aucune : guide non modifié dans cet audit | Refaire les taux, CPA/CPL illustratifs et sensibilité, sans les présenter comme résultats. |
| P1-02 — pas de scénarios simple/central/exigeant ni coût du statu quo | P1 | Aucune | Vérifier trois profondeurs et formule de valeur attendue. |
| P1-03 — formats revue/ciblé/complet non comparés à périmètre égal | P1 | Aucune | Contrôler période, accès, outils, heures, livrables et recette communs. |
| P1-04 — migration 2026 enhanced leads/imports non intégrée au contrôle | P1 | Aucune | Rouvrir Google au jour de rédaction et documenter API/Data Manager réellement utilisé. |
| P1-05 — conflit d'intérêt Hagnéré non explicite | P1 | Aucune | Lire l'encadré avant CTA et contre-vérifier le mauvais fit. |
| P2-01 — registre décrit mais non copiable/livré | P2 | Aucune | Fournir une table ou une ressource réellement testée. |
| P2-02 — priorisation sans méthode impact/effort/confiance | P2 | Aucune | Refaire la matrice et les conditions d'arrêt. |
| P2-03 — sources/produits très volatils datés 20/07 | P2 | Aucune | Revalider AI Max, PMax, Consent Mode, API et rapports avant `dateModified`. |
| P2-04 — pas de coût externe ni de temps de mission vérifiable | P2 | Aucune | Ne pas inventer de tarif ; afficher périmètre et demander devis daté. |
| P2-05 — benchmark international absent de la page publiée | P2 | Aucune | Ajouter un encadré de couverture, sans importer des seuils étrangers. |
| P2-06 — bloc optionnel encore dense sur mobile | P2 | Aucune | Contrôle navigateur et cartes/listes aux largeurs requises. |
| P2-07 — readtime non vérifié ; recherche historique annonce 16 min, registre actuel 14 min | P2 | Aucune | Mesurer depuis serveur actif et corriger uniquement après snapshot. |
| P2-08 — production/indexation non prouvées dans cet audit | P2 | Aucune | Route/HTML/OG/sitemap/robots et Search Console séparément, sans conclure au classement. |

### Score après correction

Non applicable : aucune réécriture de la page n'a été effectuée dans ce rapport.
La cible après correction est **93/100 ou plus**, aucun axe sous 8 et les six
axes obligatoires à 9 ou 10. Cette cible ne constitue pas un résultat observé.

## 11. Preuves techniques et visuelles

```text
Manifeste : hashes ci-dessus ; worktree déjà modifié sur de nombreux fichiers par d'autres travaux ; ce rapport est le seul fichier ajouté par cet audit.
Calculs refaits : chaîne 42→17→6→2 (40,5 %, 35,3 %, 33,3 %, 4,8 %) ; exemple 1 500 € média + 300 € honoraires + 1 200 € marge/client explicitement fictif ; valeur attendue des trois profondeurs recalculée.
Sources rouvertes : Google Ads conversion measurement et checklist enhanced leads (migration Data Manager/API 2026), Google Tag/Consent, CNIL, Make Sense, ScaleCity, Konvertable, Snow Media, Byte Digital, LaunchedIn10, Adgenix et Adstralis consultés le 24/07/2026.
Liens vérifiés : URLs directes du guide inspectées au niveau source ; les pages Google Support instables devront être revalidées avant publication d'une nouvelle date.
Commandes : `npm run check:seo` = 35 fichiers, 229 tests passés ; `npm run measure:guide-readtime -- audit-google-ads-que-verifier` = HTTP 404 faute de serveur local.
Rendu 320 / 390 / 768 / 1024 / 1440 : non exécuté ; la recherche historique dit elle-même que la restructuration responsive devait encore être contrôlée.
Image sociale : opengraph-image.tsx inspecté ; PNG non généré/inspecté visuellement.
Statut maximal prouvé : audit éditorial/concurrentiel et tests SEO globaux verts dans l'état partagé ; pas de preuve de build, déploiement, production ou indexation actuelle.
Réserve publication / indexation : réécrire, revalider les fonctionnalités Google/CNIL, contrôler navigateur et artefact, puis contre-auditer. Un 200, un sitemap ou un `index,follow` ne prouvent ni exploration, ni classement, ni conversion.
```
