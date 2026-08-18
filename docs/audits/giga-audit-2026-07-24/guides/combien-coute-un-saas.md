# Giga-audit — « Combien coûte un SaaS en 2026 ? »

**Date de l’audit :** 24 juillet 2026  
**Mode :** audit éditorial, chiffrage, concurrence, conformité et SEO — lecture seule  
**Route auditée :** `/guides/combien-coute-un-saas`  
**Fichier inspecté :** `src/app/guides/combien-coute-un-saas/page.tsx`  
**Empreinte au contrôle :** `3c205b3f92f02493e2582aef48bf6c3f7e4420049161e29d784b07174611a`  
**Registre :** publié le 17 juillet 2026, modifié le 21 juillet 2026  
**Dossier de recherche dédié trouvé :** non (`docs/research/combien-coute-un-saas.md` absent).

> **Périmètre.** Aucun guide, registre, manifeste, configuration ou fichier de production n’a été modifié. Les montants de ce rapport sont des scénarios d’audit à documenter et à recalculer en P1 ; ils ne constituent ni un tarif Hagnéré Code, ni une moyenne de marché, ni une promesse de financement.

## 1. Verdict exécutif

Le guide est déjà une bonne base pour un dirigeant : il commence par la décision commerciale (« quel problème un premier client doit-il payer ? »), distingue prototype, preuve technique, première version exploitable et version commerciale, déconseille de développer lorsqu’un outil existant suffit, explique multi-tenant, abonnements, rôles, intégrations, support, sauvegardes, sécurité et réversibilité, puis donne un exemple de devis à 30 500 €.

La faiblesse principale est exactement celle que le titre promet de résoudre : **il donne des fourchettes de construction, mais pas encore un coût total comparable pour faire vivre le produit**. La page dit de modéliser trois volumes et de comparer le coût total, sans publier un tableau 12/36/60 mois comprenant acquisition, ventes, support, churn, maintenance, paiement et conformité. Le lecteur voit 15 000–40 000 € dans le hero et la FAQ, mais ne peut pas savoir si le produit doit ensuite absorber 2 000, 8 000 ou 30 000 € par mois avant le premier euro de marge.

La comparaison « SaaS, outil interne ou logiciel existant » est une orientation qualitative, pas une décision à périmètre produit égal. Il manque explicitement **MVP manuel/concierge, no-code, logiciel existant configuré et sur-mesure**, avec les mêmes utilisateurs, workflows, intégrations, niveau de support et horizon. Le lecteur doit aussi voir que le manuel n’est pas « gratuit » : il convertit le budget de développement en temps d’exploitation et en risque de service.

La section sécurité/RGPD est saine mais trop courte pour un produit multi-entreprises. Les sources actuelles ne donnent que la qualification CNIL et les pages de prix Vercel/Supabase/Stripe. Il faut ajouter CNIL cloud 2026, RGPD article 28/32/35, TVA OSS pour B2C UE, résiliation en trois clics pour abonnements consommateurs, facturation électronique 2026 et Data Act pour la sortie du cloud, chacun avec une portée clairement limitée.

**Score actuel : 79/100 — NO-GO au standard renforcé tant que les P1 restent
ouverts ; base d'orientation utile, pas encore référence chiffrée.**

- **P0 bloquant : 0** — aucune erreur critique démontrée sur le contenu inspecté.
- **P1 avant version étalon : 13** — TCO, comparatif à périmètre égal, unit economics, preuves et conformité insuffisamment actionnables.
- **P2 pour dépasser 90 : 9** — sensibilité, vente, financement, ressources et QA technique à approfondir.

## 2. Ce qui fonctionne déjà

### Pédagogie humaine

- L’ouverture parle à une personne qui a identifié un problème métier et veut savoir quoi financer, non à un architecte logiciel.
- Le texte explique qu’un SaaS doit être vendu, facturé, surveillé, sauvegardé et amélioré ; c’est le bon antidote au fantasme « je paie le développement puis tout est terminé ».
- Les questions du MVP sont excellentes : qui paie, quel problème coûte aujourd’hui, quelle promesse, quel parcours et que peut-on garder manuel.
- L’exemple fictif du contrôle de sécurité des entreprises du bâtiment nomme précisément les inclusions et exclusions, sans fabriquer un faux client.
- Les fonctions qui font monter le prix sont bien choisies : isolation des données, abonnements, permissions, intégrations, documents et IA.
- Le terme API est traduit dans la phrase où il est utile ; le lecteur n’est pas envoyé vers un glossaire abstrait.

### Décision et conversion

- Le guide ose dire « en général, non » lorsqu’un logiciel existant couvre l’essentiel : opinion professionnelle utile, qui évite une vente forcée.
- Le CTA demande qui paiera et ce que le produit doit prouver, ce qui correspond au service de cadrage Hagnéré Code.
- Les liens vers MVP, no-code, logiciel sur mesure, tarifs et démarrage construisent un parcours naturel.
- La propriété du code, les comptes administrateurs, les sauvegardes et la procédure de sortie sont mentionnés ; c’est un avantage concurrentiel important.

### Chiffrage déjà présent

- Fourchettes par maturité : prototype 2–8 k€, preuve technique 5–15 k€, première version 15–40 k€, version commerciale 40–100 k€, produit complexe 100 k€+.
- Exemple de devis lisible : clarification/prototype 3 500 €, design 3 000 €, comptes/rôles 6 500 €, contrôles/exports 8 000 €, administration 3 500 €, tests/sécurité 4 500 €, documentation 1 500 €, total 30 500 €.
- Formule clients nécessaires = coûts mensuels à couvrir / marge réellement conservée par client.
- Avertissement répété que les repères sont éditoriaux, non contractuels.

## 3. Manques constatés

1. **TCO absent.** Aucun tableau 12/36/60 mois intégrant construction, cloud, outils, support, sécurité, maintenance, acquisition et ventes.
2. **Périmètre non comparable.** L’exemple du contrôle de sécurité n’est pas utilisé comme cas identique pour comparer manuel, no-code, outil existant et sur-mesure.
3. **MVP manuel/concierge absent.** Le texte admet que certaines opérations peuvent rester manuelles, mais ne chiffre pas le salaire/temps, la limite de capacité, le risque d’erreur et le coût de passage à l’automatisation.
4. **No-code non chiffré.** Les risques sont bons, mais aucune ligne de plateforme, d’utilisateurs actifs, de workflows, de stockage, d’export ou de migration.
5. **Logiciel existant non chiffré.** Le coût d’abonnement, de configuration, des contournements, de la double saisie et d’une éventuelle sortie n’apparaît pas.
6. **Sur-mesure trop central.** Les 15–40 k€ et 40–100 k€ sont visibles comme estimation Hagnéré ; sans périmètre détaillé, un lecteur peut les prendre pour des prix d’entrée garantis.
7. **Discovery et design sous-pondérés dans la promesse.** Le devis les chiffre, mais ne montre pas les livrables, les décisions qu’ils évitent et le coût d’un pivot après développement.
8. **Exploitation sans scénario numérique.** Vercel, Supabase et Stripe Billing sont liés, mais aucune combinaison de MAU, requêtes, stockage, e-mails, logs, backups et support n’est calculée.
9. **Paiement et facturation incomplets.** Stripe Billing est cité sans afficher son 0,7 % du volume Billing (tarif observé le 24 juillet 2026), ni les frais de paiement, remboursements, litiges ou taxes.
10. **Acquisition et vente absentes du calcul.** Le guide dit de préparer le canal, mais ne chiffre pas prospection, démonstrations, onboarding, contenu, publicité, commission, délai de vente ou coût d’acquisition.
11. **Churn et LTV absents.** Sans attrition mensuelle, durée de vie, ARPA et payback CAC, « 100 clients à 80 € de marge » n’indique pas si le modèle tient.
12. **Financement et trésorerie absents.** Aucun calendrier acompte/soldes, runway, réserve post-lancement, aides possibles à vérifier, ni scénario de retard commercial.
13. **Conformité trop générale.** RGPD, sécurité, données sensibles, IA, TVA OSS, résiliation, e-invoicing, Data Act et obligations sectorielles ne sont pas regroupés par déclencheur, coût, responsable et preuve.
14. **Sécurité sans niveau de service.** MFA, chiffrement, secrets, journalisation, restauration testée, RPO/RTO, réponse à incident, revue des sous-traitants et SLA ne sont pas traduits en travaux ou enveloppes.
15. **Absence de dossier de recherche.** Les hypothèses et relevés de prix ne sont pas archivés avec date, portée et niveau de confiance.
16. **QA technique non exécutée dans cet audit.** Article/Breadcrumb JSON-LD, canonical et métadonnées sont visibles dans le code ; aucun build, navigateur, test de route, tableau mobile, sitemap ou production n’a été vérifié.

## 4. Benchmark de couverture — France et international

Les pages concurrentes servent ici à repérer les questions couvertes par la SERP. Leurs montants ne sont pas transposables à la France sans adapter devise, TVA, droit, contrats, taux horaires et coûts de support.

| Marché / ressource | Apport utile observé | Correctif à intégrer au guide |
|---|---|---|
| **France — Manuel Coffin, 21 avril 2026** | Compare agence, freelance, no-code et infrastructure ; insiste sur la différence entre code et produit. | Ajouter les quatre voies demandées et le temps de décision/maintenance, sans reprendre ses tarifs comme vérité générale. |
| **France — sources CNIL** | La qualification cloud 2026 explique client responsable du traitement et fournisseur sous-traitant ; les articles 28, 32 et 35 imposent contrat, garanties et analyse des risques selon le cas. | Relier chaque exigence à un livrable de devis : DPA/AV, registre, DPIA, sécurité, export et suppression. |
| **US — Cesar Ayala, 22 juin 2026** | Décompose simple MVP, B2B avec billing/rôles et multi-tenant ; montre l’effet du choix de fournisseur et du coût des edge cases Stripe. | Ajouter les scénarios par workflow et les cas d’échec de facturation ; ne pas importer les salaires US/nearshore. |
| **US — Devs & Logics, guide 2026** | Propose des niveaux avec authentification, Stripe, admin, PostgreSQL, déploiement et handoff dans le périmètre. | Rendre l’inclusion des livrables et de la remise des accès obligatoire dans le comparatif. |
| **UK — GuruSoftwares, 12 mars 2026** | Chiffre discovery, UX/UI, frontend, multi-tenancy et intégration Billing ; rappelle que le SaaS n’est jamais fini. | Répartir la fourchette Hagnéré par phases et inclure l’exploitation à partir du jour 1. |
| **UK — SaaS Development Agency, 11 mars 2026** | Explique qu’un MVP peut être produit avec composant UI, puis design personnalisé après preuve de traction. | Ajouter le compromis composant/design et son effet sur conversion, dette et rework. |
| **Australie — DecipherZone, 24 avril 2026** | Couvre coût local/offshore, coûts mensuels et conformité australienne (APRA/ASIC/Privacy Act). | Ajouter un encadré « réglementation et coût » par secteur, sans réduire la conformité à une option décorative. |
| **Australie — ChainZ, 29 juin 2026** | Reformule l’objectif MVP comme « combien faut-il dépenser pour apprendre ? ». | Transformer la question du budget en hypothèses à invalider et métriques de décision. |
| **DACH — Zulbera, 30 avril 2026** | Donne une définition production-ready du MVP : auth, isolation tenant, billing, admin, consent, monitoring ; chiffre des écarts de taux régionaux. | Utiliser cette checklist fonctionnelle et séparer prototype, MVP réellement exploitable et produit réglementé. |
| **DACH — IT Studio Rech, guide 2026** | Présente frais cloud, base, auth, e-mail, monitoring et coût par utilisateur ; relie multi-tenancy, billing et intégrations aux postes. | Ajouter un budget variable par client actif et une sensibilité de consommation. |

**Gain d’information visé :** les concurrents donnent des fourchettes et des phases, mais rarement une comparaison française complète qui relie **même produit → même volume → même niveau de service → TCO 12/36/60 → acquisition/churn → seuil de décision**. C’est le territoire éditorial à occuper.

## 5. Cas principal à périmètre égal

Pour ne plus comparer des produits différents sous le mot « MVP », geler un exemple illustratif : **SaaS B2B de contrôle de sécurité**, 20 entreprises clientes, 200 utilisateurs actifs, un workflow (créer chantier → inviter équipe → remplir contrôle → exporter PDF), authentification, rôles administrateur/chef d’équipe, facturation mensuelle, deux intégrations, support ouvré, données hébergées dans l’UE, 500 rapports/mois, horizon 12/36/60 mois.

| Option | Ce que le client obtient dans ce périmètre | Coût que le lecteur doit voir | Limite à dire franchement |
|---|---|---|---|
| **MVP manuel / concierge** | Formulaire simple + traitement humain des exports et du support | cadrage, prototype, outils, temps d’opération, salaire chargé, contrôle qualité, incident et migration | Ce n’est pas un SaaS scalable ; il teste le problème et le prix. |
| **No-code** | Parcours, comptes, droits simples, workflow et export dans une plateforme | abonnement par usage, plugins, stockage, workflows, support, sécurité, propriété/export et coût de migration | Le prix bas peut devenir élevé lorsque les utilisateurs, automatisations ou données augmentent. |
| **Outil existant configuré** | Logiciel du marché couvrant la majorité du workflow | licences par siège/client, paramétrage, import, formation, double saisie, adaptation, intégration et sortie | Le coût peut être inférieur au build mais le processus et l’expérience restent contraints. |
| **Sur-mesure** | Produit multi-tenant avec règles, billing, intégrations, admin, export et tests | discovery, UX, développement, cloud, paiement, sécurité, support, maintenance, vente et réversibilité | Le code n’est rationnel que si une valeur mesurable justifie la différence. |

### TCO illustratif 12/36/60 mois

Hypothèses transparentes, **non tarifaires** : temps fondateur valorisé à 45 €/h ; acquisition et vente communes de 2 000 €/mois pendant la phase de lancement ; support ouvré ; 20 entreprises clientes ciblées ; hors salaires de l’équipe cliente, TVA et rémunération du fondateur. Les lignes doivent être recalculées dans le dossier P1.

| Option | Année 1 | 36 mois | 60 mois | Postes principaux inclus |
|---|---:|---:|---:|---|
| MVP manuel / concierge | 51 000 € | 105 000 € | 159 000 € | discovery, prototype, outils, opérateur, support, acquisition/vente |
| No-code | 61 000 € | 138 000 € | 216 000 € | build, abonnements/usage, plugins, support, sécurité de base, acquisition/vente |
| Outil existant configuré | 87 000 € | 237 000 € | 387 000 € | licences hypothétiques, configuration, intégration, formation, support, acquisition/vente |
| Sur-mesure | 132 000 € | 228 000 € | 324 000 € | discovery, UX, code, cloud, sécurité, maintenance, support, acquisition/vente |

Ces totaux ne disent pas que l’outil existant ou le no-code sont mauvais : ils montrent que **le prix de licence devient dominant** lorsque l’on facture par siège, tandis que le sur-mesure concentre le coût au démarrage et demande une vraie traction. Les chiffres ne doivent jamais être publiés sans la fiche d’hypothèses, le nombre de sièges, le volume de support et la distinction coûts fixes/variables.

### Coûts officiels à utiliser comme variables, pas comme forfait éternel

- Vercel affiche un plan Pro à 20 $/mois avec 20 $ de crédit inclus, puis une facturation à l’usage selon requêtes, transfert et calcul ; le plan Enterprise ajoute SLA, sécurité et support personnalisés.
- Supabase affiche Pro à 25 $/mois, avec quotas puis consommation (MAU, stockage, egress, compute) ; Team démarre à 599 $/mois et ajoute SSO, sauvegardes et SLA.
- Stripe Billing affiche 0,7 % du volume Billing en paiement à l’usage, hors frais de paiement et certains cas de factures ponctuelles ; la grille doit être relue pour le pays, le moyen et le contrat.

Exemple de consommation à publier : 200 utilisateurs actifs, 500 rapports/mois, 20 entreprises et 500 factures mensuelles ne correspondent pas au même coût qu’un million d’utilisateurs ou 10 000 e-mails. Le lecteur doit saisir ses volumes et voir quand les paliers basculent.

## 6. Unit economics : montrer ce que « rentable » veut dire

Exemple illustratif : abonnement moyen (ARPA) 149 €/entreprise/mois, coûts variables 20 % (paiement, cloud, e-mails, support variable), marge de contribution 119,20 €, churn mensuel 2,5 %, CAC 1 200 €, coûts fixes de lancement et équipe 8 000 €/mois.

- clients nécessaires pour couvrir les coûts fixes : `8 000 / 119,20 = 68 clients`, pas 100 ; le résultat change avec les hypothèses ;
- durée de vie simplifiée : `1 / 2,5 % = 40 mois` ; LTV de contribution simplifiée : `119,20 × 40 = 4 768 €` ;
- payback CAC : `1 200 / 119,20 ≈ 10,1 mois` ; une période de vente longue ou un churn plus élevé peut rendre le modèle impossible à financer ;
- si le support humain passe de 2 à 8 heures par client et par mois, la marge disparaît sans modifier une ligne de code.

Ce sont des **exemples illustratifs**, pas des benchmarks. Le guide doit faire varier au moins : ARPA 49/149/499 €, churn 1/2,5/5 %, CAC 400/1 200/3 000 €, 20/100/500 clients, et support 1/4/8 heures par client.

## 7. Corrections de conformité et d’exploitation à documenter

1. **RGPD et cloud.** Qualifier responsable/sous-traitant, conclure les contrats, lister sous-traitants ultérieurs, données, durées, droits, sauvegardes, incidents et transferts. Une DPIA n’est pas systématique : elle dépend du risque élevé (article 35).
2. **Sécurité.** Chiffrer MFA, gestion des secrets, rôles, journaux, sauvegardes immuables, restauration testée, patching, réponse à incident, RPO/RTO et revue annuelle.
3. **SaaS B2C.** Ajouter informations précontractuelles, rétractation, résiliation en trois clics et confirmation ; ne pas appliquer automatiquement ces règles à un pur contrat B2B.
4. **TVA.** Si le service électronique est vendu à des consommateurs dans l’UE, vérifier lieu de consommation, taux et OSS avec un professionnel fiscal ; ne pas confondre TVA et marge SaaS.
5. **Facturation électronique.** Vérifier le calendrier français 2026 et l’éditeur/plateforme agréée adapté au B2B ; prévoir données de facture et e-reporting dans le budget.
6. **Data Act.** Pour les services de traitement de données/cloud concernés, prévoir portabilité, assistance au changement et coûts de sortie ; les frais de switching doivent disparaître à l’horizon réglementaire annoncé, mais l’effort de migration reste réel.
7. **IA et secteurs sensibles.** Documenter données envoyées, fournisseur de modèle, conservation, supervision, erreur acceptable et obligations sectorielles ; aucune formule « IA = moitié prix » ne remplace ces travaux.

## 8. P0/P1/P2 numérotés

### P0 — bloquant

Aucun P0 prouvé au 24 juillet 2026. La porte deviendrait P0 si une prochaine vérification trouvait un calcul faux, une fourchette présentée comme tarif garanti, ou une obligation réglementaire affirmée sans portée correcte.

### P1 — avant version étalon

- **P1-SAAS-01 — cas égal.** Figer utilisateurs, entreprises, workflow, rôles, intégrations, volume, pays, support et horizon.
- **P1-SAAS-02 — quatre options.** Comparer MVP manuel, no-code, outil existant configuré et sur-mesure sur ce cas identique.
- **P1-SAAS-03 — TCO 12/36/60.** Publier coûts de discovery, design, développement, cloud, paiement, support, sécurité, RGPD, maintenance, ventes et acquisition.
- **P1-SAAS-04 — fourchettes protégées.** Ajouter une phrase de non-promesse dans hero, FAQ, tableau, CTA et métadonnées ; relier chaque fourchette à des inclusions/exclusions.
- **P1-SAAS-05 — devis par livrable.** Détailler discovery, parcours, design, code, tests, sécurité, transfert, documentation, données et réversibilité avec critères d’acceptation.
- **P1-SAAS-06 — consommation officielle.** Relever Vercel, Supabase, Stripe Billing et e-mails avec date, devise, quotas, dépassement et hypothèse ; ne pas écrire un coût mensuel universel.
- **P1-SAAS-07 — unit economics.** Ajouter ARPA, marge de contribution, churn, CAC, LTV, payback, clients nécessaires et scénarios bas/central/haut.
- **P1-SAAS-08 — vente et acquisition.** Chiffrer prospection, démonstration, onboarding, commission, SEO/Ads/contenu, cycle de vente et coût d’acquisition par canal.
- **P1-SAAS-09 — support et churn.** Relier volume de tickets et temps humain au coût par client ; montrer la sensibilité support 1/4/8 h et churn 1/2,5/5 %.
- **P1-SAAS-10 — conformité datée.** Ajouter CNIL cloud 2026, articles RGPD 28/32/35, TVA OSS, résiliation, e-invoicing et Data Act avec déclencheurs et limite de conseil.
- **P1-SAAS-11 — sécurité chiffrée.** Faire apparaître MFA, logs, backups/restauration, RPO/RTO, monitoring, incident et SLA comme lignes de budget et de responsabilité.
- **P1-SAAS-12 — financement/runway.** Ajouter calendrier de décaissement, réserve post-lancement, scénario de retard commercial et point de décision d’arrêt.
- **P1-SAAS-13 — dossier de recherche.** Créer le dossier absent avec sources, dates, portée, niveau de confiance, calculs et matrice de gain d’information.

### P2 — amélioration importante

- **P2-SAAS-01 — scénarios sectoriels.** Décliner B2B interne, SaaS B2C à abonnement et produit réglementé sans mélanger leurs obligations.
- **P2-SAAS-02 — financement français.** Vérifier Bpifrance, aides régionales et crédit d’impôt applicables auprès des sources officielles ; ne publier aucun montant non vérifié.
- **P2-SAAS-03 — effet de seuil.** Ajouter table utilisateurs actifs, stockage, e-mails, jobs, IA, support et coûts variables par palier.
- **P2-SAAS-04 — architecture.** Expliquer monolithe modulaire, services gérés, multi-tenant et sur-mesure selon risque, sans vendre une stack particulière.
- **P2-SAAS-05 — données de sortie.** Ajouter format d’export, délai, coûts d’assistance, redirections, migration et suppression des copies.
- **P2-SAAS-06 — recette produit.** Ajouter essais inscription, invitation, changement d’offre, échec carte, export, suppression, restauration et séparation tenant.
- **P2-SAAS-07 — lexique.** Traduire TCO, ARPA, CAC, LTV, churn, MAU, RPO et RTO à leur première occurrence.
- **P2-SAAS-08 — ressource autonome.** Proposer un tableur de budget SaaS avec hypothèses, scénarios, seuils et journal des décisions, réellement calculable.
- **P2-SAAS-09 — QA SEO/UX.** Tester build, route, canonical, JSON-LD, liens, tableau mobile 320–1600 px, vitesse et production réelle.

## 9. Portes P1–P4

- **P1 — recherche/cadrage :** brief du fondateur, cas produit égal, SERP FR + US/UK/AU/DACH, sources officielles datées, benchmark de couverture et dossier de recherche. **Fermée : dossier absent.**
- **P2 — rédaction/intégration :** TCO, calculs unit economics, scénarios de consommation, conformité contextualisée, options comparées et CTA. **À faire après P1.**
- **P3 — contre-audit indépendant :** ce rapport est présent, mais la porte reste **non validée** : il constate treize P1 et aucun snapshot corrigé n'existe encore à recontrôler.
- **P4 — plume humaine + QA complète :** lecture par dirigeant non technique, anti-jargon/anti-IA, responsive, build, liens, données structurées, route et production. **Non exécuté ici.**

## 10. Scorecard

| Axe | Note | Justification |
|---|---:|---|
| Intention et promesse | 9/10 | Problème métier, budget et décision avant technologie. |
| Pédagogie | 9/10 | Exemples clairs, exclusions, vocabulaire traduit. |
| Profondeur produit | 8/10 | Multi-tenant, billing, rôles, IA, sécurité et reprise présents. |
| Preuves | 7/10 | CNIL et pages de prix citées, mais pas de dates/dossier ni de preuve de coûts. |
| Comparaison | 6/10 | Orientation qualitative ; quatre voies et périmètre égal absents. |
| Chiffrage | 7/10 | Fourchettes et devis détaillé ; TCO et sensibilité absents. |
| Unit economics | 6/10 | Formule correcte, exemple trop court sans churn/CAC/LTV. |
| Risques/conformité | 7/10 | Bon socle RGPD, mais obligations B2C/cloud/fiscales et sécurité à détailler. |
| Conversion honnête | 9/10 | CTA de cadrage, pas de promesse de résultat ou de prix. |
| SEO/UX technique | 8/10 | Metadata/Article/Breadcrumb visibles ; QA de rendu non exécutée. |
| **Total** | **79/100** | Très bonne orientation ; insuffisant pour une réponse définitive à « combien coûte ». |

## 11. Conditions de sortie

Le guide pourra être qualifié de référence lorsque P1-SAAS-01 à P1-SAAS-13 seront traités, que les coûts seront recalculés indépendamment, que les obligations seront relues sur les sources officielles, et que P4 aura vérifié la lecture humaine, le rendu mobile, le build et la route réellement publiée. Tant que le tableau TCO et les unit economics ne sont pas publiés, la fourchette 15–40 k€ doit rester un repère de cadrage explicitement conditionnel.

## 12. Sources vérifiées le 24 juillet 2026

### Sources officielles

- CNIL, *Responsable du traitement, sous-traitants : comment bien identifier son rôle ?* : https://www.cnil.fr/fr/rgpd-comment-bien-identifier-son-role
- CNIL, *Quelles qualifications pour les acteurs de l’informatique en nuage (cloud) ?*, 28 mai 2026 : https://www.cnil.fr/fr/quelles-qualifications-pour-les-acteurs-de-linformatique-en-nuage-cloud
- CNIL, chapitre IV RGPD responsable/sous-traitant : https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4
- Vercel, tarification officielle (Hobby 0 $, Pro 20 $, Enterprise custom), consultée le 24 juillet 2026 : https://vercel.com/pricing
- Supabase, tarification officielle (Pro 25 $, Team 599 $, quotas et compute), consultée le 24 juillet 2026 : https://supabase.com/pricing
- Stripe Billing France, tarification officielle (0,7 % en paiement à l’utilisation), consultée le 24 juillet 2026 : https://stripe.com/fr/billing/pricing
- Commission européenne, *Data Act explained* : https://digital-strategy.ec.europa.eu/en/factpages/data-act-explained
- Service-Public Entreprendre, résiliation en trois clics : https://entreprendre.service-public.fr/actualites/A16599?lang=fr
- impots.gouv.fr, services électroniques et TVA/OSS : https://www.impots.gouv.fr/professionnel/je-minscris-au-service-du-guichet-unique-de-tva
- Your Europe, *EU VAT One Stop Shop* : https://europa.eu/youreurope/business/taxation/vat/one-stop-shop/index_en.htm
- impots.gouv.fr, facturation électronique et plateformes agréées : https://www.impots.gouv.fr/facturation-electronique-et-plateformes-agreees
- Règlement européen IA 2024/1689, EUR-Lex : https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689

### Benchmark concurrentiel — couverture seulement

- Manuel Coffin, France, *Prix développement SaaS 2026*, 21 avril 2026 : https://www.manuelcoffin.fr/fr/blog/cout-developpement-saas-2026
- GuruSoftwares, UK, *SaaS Development Cost UK 2026*, 12 mars 2026 : https://gurusoftwares.co.uk/blog/saas-development-cost-uk/
- Cesar Ayala, US/nearshore, *How Much Does It Cost to Build a SaaS MVP?*, 22 juin 2026 : https://cesarayala.dev/blog/how-much-does-it-cost-to-build-a-saas-mvp/
- Devs & Logics, US, *SaaS MVP Development Cost in 2026* : https://devsandlogics.com/guides/saas-mvp-development-cost-2026
- DecipherZone, Australie, *SaaS Product Development Cost in Australia 2026*, 24 avril 2026 : https://www.decipherzone.com/blog-detail/saas-product-development-cost-australia
- ChainZ, Australie, *MVP Development Cost in Australia*, 29 juin 2026 : https://chainz.tech/mvp-development-cost-australia/
- Zulbera, DACH, *SaaS Entwicklung Kosten 2026*, 30 avril 2026 : https://www.zulbera.com/de/blog/saas-entwicklung-kosten/
- IT Studio Rech, DACH, *SaaS Entwicklung Kosten: Preise & Budgets 2026* : https://www.software-entwickeln-lassen.com/ratgeber/saas-entwicklung-kosten
