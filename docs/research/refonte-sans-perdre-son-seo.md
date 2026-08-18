# Dossier de recherche reconstitué — Refonte sans perdre son SEO

> Ce dossier documente l’état actuel sans reprendre la promesse du titre comme
> une garantie. Il s’appuie sur la page et l’audit du 24 juillet 2026. Les
> recherches, liens et observations internationales de cet audit n’ont pas été
> rejoués le 25 juillet.

**Statut réel : brouillon à reprendre — aucune garantie de trafic ou de
position.**

## Journal des quatre passes

| Passe                        | État        | Date       | Blocage                                                           |
| ---------------------------- | ----------- | ---------- | ----------------------------------------------------------------- |
| 1. Recherche                 | À reprendre | 2026-07-25 | Sources techniques, cas, Bing et benchmark non rouverts           |
| 2. Rédaction et intégration  | À reprendre | 2026-07-25 | Onze P1 et dix P2 hérités restent ouverts                         |
| 3. Contre-audit indépendant  | Bloquée     | 2026-07-25 | Aucun crawl ni test de bascule d’une version corrigée             |
| 4. Plume humaine et contrôle | Bloquée     | 2026-07-25 | Test dirigeant, rendu et production non vérifiés après correction |

Propriétaire éditorial : **à nommer**.

## Snapshot et provenance

| Élément                                                                   | Empreinte ou date                                                  | Portée                                                                 |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| `src/app/guides/refonte-sans-perdre-son-seo/page.tsx`                     | `d27eb4a2f3d73779e37945b7662283fa040e10557cf2cff6bee0c948afa9bfe5` | Même page que le snapshot audité ; route publique non revérifiée       |
| `docs/audits/giga-audit-2026-07-24/guides/refonte-sans-perdre-son-seo.md` | 24 juillet 2026                                                    | Manques et benchmark hérités ; aucune correction appliquée par l’audit |
| `docs/charte-qualite-guides.md`                                           | `5ee616faa4959dc8ad2b0eb19a5b19ffbf53299b62665700093c5c176b0b8491` | Contrat people-first et preuve                                         |
| `docs/workflow-maitre-guides-4-passes.md`                                 | `a3a8c8f1be5d5d60b096f251f22b27ae5526adb708c334c4d6f0b7b4270c60c4` | Portes P1 à P4 ; aucun manifeste créé                                  |

## 1. Lecteur, phrase et décision

| Champ            | Cadrage                                                                                                                                  |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Lecteur          | Dirigeant de PME, responsable marketing ou e-commerçant dont le site produit déjà des appels, devis ou ventes                            |
| Déclencheur      | Refonte visuelle, changement de CMS, d’URLs, de technologie ou de domaine                                                                |
| Phrase réelle    | « Comment savoir ce qui rapporte aujourd’hui, le protéger pendant la refonte et réagir vite si le trafic ou les conversions baissent ? » |
| Intention        | Réduire et piloter le risque SEO et commercial d’une migration                                                                           |
| Promesse honnête | Rendre le risque visible, testable et réversible ; ne jamais garantir zéro baisse                                                        |
| Décision         | Limiter la refonte, conserver des URLs, migrer progressivement, changer de domaine ou reporter le lancement                              |
| Action autonome  | Exporter les pages et conversions importantes, attribuer une décision à chaque ancienne URL et fixer des critères de go/no-go            |
| Hors périmètre   | Garantie de position, trafic ou conversion ; audit de migration réel ; validation juridique                                              |

## 2. Couverture observée

La page actuelle couvre déjà :

- les risques liés au design, aux URLs, à la plateforme et au domaine ;
- l’inventaire des pages avant chantier ;
- les redirections `301` et le refus d’envoyer toutes les pages vers
  l’accueil ;
- la protection de la préproduction et le retrait du `noindex` au lancement ;
- les tests de formulaires, achats, redirections et sitemap ;
- une surveillance à J+1, J+7, J+30 et J+90 ;
- un diagnostic urgent et des clauses à demander au prestataire ;
- une limite explicite : aucune position, aucun trafic et aucune conversion ne
  sont garantis.

Le socle est opérationnel. La promesse, la mesure avant/après et les critères
de lancement ne sont pas encore assez précis.

## 3. Défauts hérités

### P0

Aucun risque vital n’a été démontré. Le titre peut néanmoins induire une
garantie impossible ; l’audit le classe P1 tant que le corps du guide borne
clairement la promesse.

### P1

1. Reformuler la promesse « sans perdre » en réduction et gestion du risque.
2. Construire une référence quantitative avant chantier : URL, trafic,
   conversions, marge, performance, saisonnalité et incidents de mesure.
3. Croiser sitemap, Search Console, analytics, logs, liens externes, CMS et
   campagnes au lieu de dépendre d’un seul inventaire.
4. Produire une matrice URL par URL : maintien `200`, redirection `301`,
   suppression `404/410`, canonical, propriétaire et preuve.
5. Vérifier canonicals, hreflang et données structurées.
6. Tester contenu, liens et données structurées dans le rendu JavaScript final.
7. Rejouer formulaires, achats, CRM, consentement, événements et doublons.
8. Écrire un plan DNS/CDN, certificats, cache, sauvegarde et retour arrière.
9. Relier le suivi J+1/J+7/J+30/J+90 à des seuils et actions.
10. Formaliser critères de go/no-go, défauts acceptés, responsable et migration
    progressive.
11. Préciser le livrable, le délai et le périmètre du CTA.

### P2

- rendre visible le benchmark international et Bing, après revalidation ;
- préciser l’usage éventuel de logs sur une période suffisante ;
- enrichir la FAQ sur canonical, mesure et retour arrière ;
- recalculer le temps de lecture après réécriture ;
- vérifier image sociale et rendu mobile ;
- livrer une feuille de mapping, recette et suivi ;
- borner les cas Renault et Personio ;
- crawler les liens internes et externes ;
- contrôler médias, clavier, contraste et formulaires ;
- traiter multisites, sous-domaines, campagnes et mesure inter-domaines.

## 4. Sources réellement visibles

| Source présente                                                                                                         | Usage                                     | Limite                                                                    |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | ------------------------------------------------------------------------- |
| [Google — changement avec URLs](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) | Processus de migration d’URLs             | Documentation générale ; ne garantit aucun classement                     |
| [Google — changement sans URLs](https://developers.google.com/search/docs/crawling-indexing/site-move-no-url-changes)   | Refonte à URLs stables                    | Le contenu, le rendu et la mesure peuvent tout de même changer            |
| [Search Console — changement d’adresse](https://support.google.com/webmasters/answer/9370220)                           | Changement de domaine                     | Cas et prérequis précis à revérifier                                      |
| [Google — redirections 301](https://developers.google.com/search/docs/crawling-indexing/301-redirects)                  | Choix et mise en œuvre des redirections   | Une redirection ne garantit ni pertinence ni maintien de position         |
| [Google — page experience](https://developers.google.com/search/docs/appearance/page-experience)                        | Contexte expérience de page               | Ne permet pas de promettre une hausse SEO                                 |
| [web.dev — Web Vitals](https://web.dev/articles/vitals)                                                                 | Mesures de performance                    | Performance seule insuffisante pour prévoir trafic et ventes              |
| [web.dev — cas Renault](https://web.dev/case-studies/renault)                                                           | Étude de cas de performance et conversion | Cas non transposable ; attribution et contexte à expliciter               |
| [Vercel — cas Personio](https://vercel.com/blog/from-wordpress-monolith-to-vercel-personio-elevates-site-performance)   | Migration WordPress vers Next.js          | Source commerciale d’un fournisseur ; ne prouve pas un résultat universel |

L’audit dit avoir consulté Google sur JavaScript, données structurées et
analytics, Bing, la CNIL, Cloudflare et WordPress. Ces éléments sont **hérités
de l’audit** et **non rouverts**. Aucun crawl de production, export Search
Console ou données réelles du site d’un client ne sont présents ici.

## 5. Chiffres, scénarios et limites

La page n’invente pas de pourcentage de perte ou de gain. C’est une force à
conserver. Les fenêtres J+1, J+7, J+30 et J+90 sont un calendrier de contrôle,
pas une prédiction de récupération.

L’audit propose trois scénarios — petite vitrine, e-commerce plus volumineux et
changement de domaine avec Next.js — ainsi que des tailles illustratives. Ces
volumes sont des **hypothèses de travail non validées**.

La prochaine version doit demander au lecteur de calculer une baseline :

```text
URL
sessions organiques et requêtes
conversions utiles et valeur/marge si disponible
liens externes et campagnes
statut, canonical, indexabilité et rendu
destination prévue
résultat après lancement
écart, diagnostic, responsable et action
```

Aucun seuil universel de baisse ne sera publié. Les seuils doivent être définis
à partir de la variabilité historique, de la saisonnalité et du risque métier.

## 6. Comparaison à construire

| Situation                | Décision à comparer              | Éléments communs obligatoires                                          |
| ------------------------ | -------------------------------- | ---------------------------------------------------------------------- |
| Même domaine, mêmes URLs | Refonte globale ou progressive   | Baseline, parité de contenu, rendu, mesure, performance et rollback    |
| URLs restructurées       | Mapping, maintien ou suppression | 200/301/404/410, canonical, sitemap, liens internes et logs            |
| Changement de domaine    | Basculer maintenant ou reporter  | Search Console, DNS, certificats, double contrôle et communication     |
| E-commerce               | Big bang ou lots                 | Commandes, paiements, tracking, catalogue, pics et procédure de retour |
| Multilingue/multisite    | Migration ensemble ou séparément | hreflang, sous-domaines, canonicals, campagnes et attribution          |

Le verdict doit dépendre de la capacité à mesurer et revenir en arrière, pas du
prestige d’une technologie.

## 7. Pédagogie humaine et anti-IA

### À conserver

- ouverture sur appels, devis et ventes existants ;
- exemples concrets de redirections et de tests ;
- absence de promesse de position ;
- calendrier post-lancement facile à mémoriser.

### À améliorer

- faire commencer le guide par « ce que votre site vous apporte déjà » ;
- définir `301`, canonical, logs, rendu JavaScript et rollback dans des mots
  ordinaires ;
- remplacer les longues checklists par une feuille suivie de décisions ;
- présenter Renault et Personio comme cas bornés, pas comme preuves de la
  solution Hagnéré ;
- varier plan d’urgence, exemple URL, contrôle du lancement et décision finale.

Le test des 150 premiers mots par un dirigeant non SEO est **non réalisé**.

## 8. Conversion loyale

CTA possible :

> « Faire inventorier les pages qui produisent des demandes, obtenir le mapping
> de migration et les critères de go/no-go. »

La page doit annoncer le livrable, son périmètre, les données nécessaires et la
période de suivi. Elle doit également fournir une action sans contact :
télécharger ou copier la feuille d’URLs et la checklist de recette. Aucun CTA
ne doit suggérer que Hagnéré Code garantit l’absence de baisse.

## 9. Prochaine correction et critères de revalidation

1. Revalider les sources Google, Bing, analytics, consentement, DNS et export.
2. Construire la feuille de baseline, mapping, recette et monitoring.
3. Définir des critères de go/no-go et rollback pour les cinq situations.
4. Réécrire le titre, l’ouverture, les cas et le CTA sans garantie implicite.
5. Faire auditer le mapping et simuler une chute, un `noindex`, un tracking
   cassé et un rollback.
6. Contrôler crawl, rendu, liens, données structurées, mobile, accessibilité,
   production et suivi réel.

**Porte de sortie :** zéro P0/P1, P2 traités ou justifiés, sources primaires
rouvertes, scénario de bascule répété, test lecteur consigné et snapshot
corrigé contre-audité. Le présent dossier ne ferme aucun défaut.
