# Giga-audit indépendant — TJM développeur web

**Date de l’audit : 24 juillet 2026**  
**URL auditée :** `/guides/tjm-developpeur-web`  
**Périmètre :** compréhension dirigeant, tarifs, coût complet, comparaison des modes de ressource, sources sociales/fiscales, benchmark international, conversion et SEO.  
**Limite :** aucun avis comptable, fiscal ou juridique ; aucun build, rendu navigateur ou test de production exécuté.

## 1. Verdict exécutif

Le guide explique correctement la première erreur d’un dirigeant : comparer un TJM à un salaire ou choisir le tarif journalier le plus bas. L’ouverture est humaine (550 €/jour), le TJM est défini hors taxes, le texte demande de comparer les livrables, les jours, les exclusions, les tests et les coûts après livraison. Le tableau junior/confirmé/senior/lead, la distinction forfait/régie, la coordination interne et le rappel de la réversibilité sont utiles.

Le guide n’est toutefois pas encore une réponse complète à « combien me coûte réellement ce développeur ? ». Il compare surtout des profils de prestataires, pas quatre solutions au même périmètre : freelance, agence, salarié interne et prestation distante. Il ne chiffre pas la protection sociale, le recrutement, le management, les périodes non facturables, la continuité, le risque d’absence ou le coût de coordination dans un scénario commun. Les 15–25 % de réserve sont assumés comme hypothèse, mais aucune sensibilité ne montre quand elle devient insuffisante. Les repères 2026 proviennent uniquement de baromètres commerciaux hétérogènes, sans date précise, périmètre, géographie ou distinction tarif affiché / tarif signé. Enfin, l’intérêt commercial de Hagnéré Code n’est pas déclaré alors que la page renvoie vers sa méthode et son formulaire de projet.

**Score indépendant : 78/100.**  
**P0 : 0 · P1 : 11 · P2 : 8.**  
Décision : **bon guide de lecture d’un devis, pas encore comparatif de coût complet de référence**. Une réécriture P1 est nécessaire avant de présenter les fourchettes comme un repère 2026 suffisamment robuste.

## 2. Snapshot vérifiable

| Élément | Observation au 24/07/2026 | Preuve locale |
|---|---|---|
| Page | 753 lignes, 10 parties, FAQ et sources | `src/app/guides/tjm-developpeur-web/page.tsx` |
| Empreinte page | `83dbfcc0bf2e45083dfe90f00ab9af3283fc58dc15bdcc4ecc919c963ca873b0` | SHA-256 calculé pendant l’audit |
| OG | Image dédiée | `src/app/guides/tjm-developpeur-web/opengraph-image.tsx` |
| Empreinte OG | `13102d94eae5fcd69f9d70dc44c603de4f40077d54c9cf34d5411760e21f18c6` | SHA-256 calculé pendant l’audit |
| Registre | Titre 2026, meta sur tarifs/jours/résultat/coûts après livraison, publié 18/07/2026, modifié 21/07/2026, lecture 11 min | `src/lib/guides.ts` |
| Sources dans la page | Silkhom, Malt, Free-Work, TJMètre, Codeur.com ; toutes commerciales ou plateformes, sans source officielle sociale/fiscale | `page.tsx:699-749` |
| Dossier de recherche | Aucun `docs/research/tjm-developpeur-web.md` trouvé dans le snapshot | Vérification locale |
| QA | Aucun navigateur, build, Lighthouse, test de formulaire, accessibilité, indexation ou production exécuté | Limite de l’audit |
| Worktree | `src/lib/guides.ts` déjà modifié par un autre travail, laissé intact | `git status --short` |

## 3. Ce que le lecteur reçoit déjà

### Forces

- L’introduction part d’une situation concrète et répond immédiatement : 550 €/jour n’est ni un salaire ni un verdict de qualité.
- La distinction « prix de vente » / « salaire net » est essentielle et bien formulée.
- Le tableau de repères par ancienneté aide à repérer un devis atypique sans prétendre produire un barème opposable.
- Le calcul 20 jours × 550 € = 11 000 € HT, puis réserve interne de 15 % = 12 650 €, est simple et arithmétiquement exact.
- La page demande le même périmètre, les jours par étape, les exclusions, les règles de changement, les tests, la formation, les accès et la maintenance.
- La comparaison junior/senior est professionnelle : un junior supervisé peut être pertinent, un senior peut éviter des erreurs coûteuses.
- La section freelance/agence/équipe distante évoque la coordination, la langue, les horaires, la donnée, la continuité et le remplacement.
- Forfait, régie et lots sont expliqués avec des protections adaptées (recette, plafond, suivi, décision de poursuivre).
- La page rappelle que 20 jours de production ne sont pas 20 jours calendaires, ce qui évite un piège fréquent de planning.
- Les coûts après livraison (hébergement, licences, sauvegardes, mises à jour, évolutions) et la réversibilité sont bien signalés.

### Faiblesses décisives

- Le lecteur ne voit aucun budget complet comparable pour un même livrable entre freelance, agence, salarié et équipe distante.
- Le « salaire » est écarté, mais le coût d’un salarié n’est jamais calculé avec une source officielle ; il manque recrutement, congés, formation, management, matériel, charges patronales et capacité réellement disponible.
- La médiane TJMètre de 530 € et les fourchettes sont citées sans URL datée dans le texte, taille d’échantillon, zone, statut ou distinction prix demandé / contrat signé.
- Le guide parle d’agence mais ne chiffre pas l’équipe (chef de projet, design, QA, direction technique) qui explique souvent le TJM blended.
- Le coût complet est demandé sur douze mois seulement ; aucune vue 36/60 mois ni sensibilité au départ du freelance, à la hausse de licence ou à l’incident.
- La réserve de 15–25 % n’est pas reliée à une classe de risque mesurable.
- Le conflit commercial n’est pas déclaré. Hagnéré Code propose sa méthode et « décrire votre projet » ; un lecteur doit savoir qu’il lit aussi une page d’un prestataire.

## 4. Benchmark France / États-Unis / Royaume-Uni / Australie

Les benchmarks tarifaires ci-dessous sont des signaux de marché intéressés, pas des prix de référence. Les sources officielles servent à cadrer les coûts sociaux et la nature des engagements, pas à déterminer un TJM.

| Marché / source | Observation | Ce que la page doit améliorer |
|---|---|---|
| France, plateforme | [Malt — baromètre développeurs](https://www.malt.fr/t/barometre-tarifs/tech/), page 2026 consultée le 24/07/2026 : 576 € de moyenne pour développeurs expérimentés actifs ; 317 € (0–2 ans), 435 € (3–7), 576 € (8–15), 671 € (15+) ; front-end 536 €, back-end 562 €, webmasters 468 € | La page affiche une médiane TJMètre à 530 € et des fourchettes mais ne confronte pas ce repère primaire de plateforme, ni son biais (profils actifs Malt). Ajouter date, population et spécialité, sans moyenne nationale. |
| France, plateforme / sourcing | [TJMètre](https://tjmetre.fr/barometre), consulté 24/07/2026 | Médianes et quartiles annoncés, méthodologie à expliciter avant reprise | Afficher méthodologie, date de collecte et différence avec Malt ; éviter de mélanger TJM publié, demandé et signé. |
| France, officiel salarié | [Urssaf — simulateur salaire brut/net](https://mon-entreprise.urssaf.fr/simulateurs/salaire-brut-net), version 07/2026, simulations indicatives | Calcule coût total employeur, brut, net, avantages et mutuelle ; rappelle que conventions et aides ne sont pas toutes prises en compte | Ajouter ce simulateur à la méthode, avec hypothèses et avertissement, au lieu de laisser « charges » abstrait. |
| France, officiel indépendant | [Urssaf — réforme de l’assiette sociale des indépendants](https://www.urssaf.fr/accueil/independant/comprendre-payer-cotisations/reforme-cotisations-independants.html), page 2026 | Les règles 2026 des indépendants évoluent ; un TJM ne correspond donc pas à un revenu net stable | Ne jamais convertir 550 € en salaire net sans statut, dépenses, impôt et année ; demander le statut et orienter vers simulateur/comptable. |
| France, institutionnel | [Service Public — micro-entrepreneur](https://entreprendre.service-public.gouv.fr/vosdroits/F23961), vérifié 15/09/2025 | Statut en nom propre, obligations, assurance, régime fiscal/social et limites | Ajouter une réserve sur statut, TVA, assurance et seuils ; aucune hypothèse micro ne doit être généralisée au freelance en société. |
| France, concurrent | [Silkhom — baromètre TJM](https://www.silkhom.com/barometre-des-tjm-informatique-electronique-digital/), données 2019–2025 | Séries par métier/expérience et géographie | Citer l’année exacte de chaque fourchette et expliquer pourquoi une série historique ne suffit pas pour 2026. |
| États-Unis, freelance | [Upwork — hourly rates](https://www.upwork.com/resources/upwork-hourly-rates), publié 20/06/2025 | Rappelle que le taux minimum dépend des dépenses, du temps facturable et du profil ; marché de plateforme, pas contrat d’agence | Convertir par scénario en jour de 7 h, sans conversion EUR/USD implicite ; distinguer indépendant, W-2 et agence. |
| États-Unis, agence / nearshore | [Azterion — US vs nearshore developer rates](https://azterion.com/en-us/us-developer-hourly-rates-vs-nearshore/), publié 2026 | Compare environ 60 $/h mid-level interne à 200 $+/h agence et 28–50 $/h nearshore, source commerciale intéressée | L’utiliser seulement pour montrer les écarts de sourcing et le coût de coordination, jamais comme tarif moyen US. |
| Royaume-Uni, freelance/agence | [Osdire — web developer rates UK 2026](https://osdire.com/blog/web-developer-rates-in-the-uk-hourly-daily-and-website-costs), publié 2026 | Sépare freelance et agence, mais fourchettes commerciales | Ajouter UK comme comparaison de périmètre (day rate, VAT, IR35, continuité), pas comme prix transposable en France. |
| Royaume-Uni, officiel | [GOV.UK — off-payroll working / IR35](https://www.gov.uk/guidance/understanding-off-payroll-working-ir35), consulté 24/07/2026 | Le traitement peut changer selon le statut et la relation de travail | Introduire le risque juridique/administratif d’une prestation longue qui ressemble à un emploi, sans donner un avis transfrontalier. |
| Australie, freelance | [GoingSolo — freelance rate Australia](https://goingsolo.au/articles/freelance-rate-australia), publié 07/02/2026 | Méthode de calcul du tarif à partir du revenu cible, dépenses et heures facturables | Reprendre la logique de capacité facturable et de non-facturable ; afficher le pays et la devise séparément. |
| Australie, contrat | [Legal123 — guide legal web developers](https://legal123.com.au/how-to-guide/legal-guide-web-developers/), consulté 24/07/2026 | Distingue contrat, sous-traitance, code custom et propriété ; rappelle que le taux ne couvre pas la continuité automatiquement | Ajouter une ligne « contrat, handover et assurance » dans la comparaison de coût, pas seulement le TJM. |

## 5. Coût complet à périmètre identique

Le même livrable doit être défini avant de comparer les modèles. Scénario de travail proposé, **illustratif** : un site vitrine B2B de 12 pages, formulaire qualifié, CMS, mesure d’audience, responsive, accessibilité de base, migration de 30 pages, mise en ligne, documentation, formation d’une heure et garantie de correction de 30 jours. Le projet comprend 25 jours de production, mais le client exige le même résultat et les mêmes tests dans les quatre options.

### Formule

`Coût complet 12 mois = facture ou coût employeur + temps interne + pilotage/coordination + outils/licences + assurance/sécurité + migration + coût des retards + maintenance et corrections non incluses.`

### Exemple de comparaison, hypothèses visibles

| Option | Hypothèse de facture/coût | Temps interne de décision et recette | Coûts/risques à ajouter | Total illustratif avant coûts aléatoires |
|---|---:|---:|---|---:|
| Freelance confirmé | 25 j × 550 € = 13 750 € HT | 6 j × 400 € = 2 400 € | remplacement, congés/non-disponibilité, assurance, maintenance | **16 150 €** |
| Agence | 20 j dev × 650 € + 5 j PM/QA × 850 € = 17 250 € HT | 4 j × 400 € = 1 600 € | marge de coordination incluse mais équipe à vérifier, maintenance et licences | **18 850 €** |
| Salarié interne | coût employeur annuel calculé avec simulateur Urssaf, capacité projet équivalente à 25 jours | 3 j manager × 400 € = 1 200 € | recrutement/onboarding, matériel, congés, formation, capacité non productive, absence | **à calculer par entreprise** |
| Prestation distante | 25 j × 350 € = 8 750 € HT | 12 j × 400 € = 4 800 € | traduction, fuseau, contrôle, transfert, données, remplacement | **13 550 €** |

Ces montants ne sont pas des tarifs de marché ni un devis Hagnéré Code. Ils montrent qu’un TJM distant bas peut perdre son avantage avec 12 jours de coordination, et qu’un salarié ne peut pas être comparé à 25 jours × salaire annuel sans capacité disponible, recrutement et coûts employeur. La page actuelle n’offre pas encore cette comparaison explicite.

### Sensibilités à publier

- charge réelle : 20 / 25 / 35 jours ;
- coordination interne : 2 / 6 / 12 jours ;
- adoption des contenus : 0 / 2 / 6 semaines de retard ;
- absence ou remplacement : 0 / 5 / 15 jours ;
- correction post-livraison : 0 / 3 / 10 jours ;
- maintenance : 0 / 2 / 6 jours par trimestre ;
- risque de reprise : 0 / 10 / 25 % du budget initial.

## 6. Audit pédagogique et décisionnel

### À conserver

Le guide doit conserver la règle « acheter un résultat compréhensible, pas un TJM bas », la distinction forfait/régie et le rappel que 20 jours ne valent pas 20 jours calendaires.

### À ajouter

1. **Une réponse par profil de dirigeant.** Petit site très cadré : freelance ou forfait. Fonction métier critique : senior/lead et tests. Besoin évolutif : régie plafonnée. Besoin de continuité multi-compétences : agence ou équipe interne.
2. **Un tableau des coûts invisibles.** Congés, prospection et formation côté freelance ; PM, design, QA et continuité côté agence ; recrutement, management, matériel et absentéisme côté salarié ; traduction, fuseau et contrôle côté distant.
3. **Une règle de comparaison.** Même livrables, mêmes données, mêmes tests, même garantie, même transfert de code et mêmes exclusions.
4. **Une position tranchée.** Le meilleur TJM est celui qui minimise le coût du résultat à périmètre égal ; un tarif bas avec 50 % de reprises n’est pas une économie.
5. **Une nuance sociale/fiscale.** Aucun « TJM net » universel : statut, TVA, dépenses, impôt, protection sociale et capacité facturable changent le calcul.
6. **Un exemple d’agence.** Chiffrer le rôle de chef de projet, designer, développeur et QA au lieu de parler d’un TJM unique.
7. **Un cas de panne.** Comparer qui intervient le samedi, sous quel délai, avec quel accès et quel plafond ; le coût de continuité est une partie du prix.

## 7. Conflit commercial et conversion

La page renvoie vers la méthode Sprint Fixe™ et « Décrire votre projet ». Hagnéré Code vend donc potentiellement le service que le lecteur cherche à évaluer. L’absence de déclaration n’est pas une faute de fond, mais elle affaiblit la confiance. Ajouter : « Nous vendons aussi du développement ; ce guide peut conclure qu’un autre modèle, un freelance ou une embauche est préférable. »

Le CTA est utile mais doit proposer un livrable : **grille de comparaison d’un devis au TJM**, avec colonnes livrable, jours, rôle, hypothèse, inclusion, coût interne, maintenance et sortie. Le formulaire devrait demander périmètre, budget, délai et nombre de prestataires comparés, sans promettre de valider gratuitement un devis complexe.

## 8. P0/P1/P2 explicites

### P0 — 0

Aucun faux témoignage, aucune garantie de résultat et aucun chiffre présenté explicitement comme tarif légal ou opposable n’a été repéré. Les fourchettes sont présentées comme repères, ce qui évite un risque immédiat.

### P1 — 11

1. **P1-01 — Sources tarifaires hétérogènes non auditables** : dater chaque relevé, population, géographie, spécialité et différence entre tarif affiché, demandé et signé.
2. **P1-02 — Comparaison freelance/agence/salarié/distant absente à même périmètre** : ajouter un scénario commun et les mêmes livrables, tests, garantie et sortie.
3. **P1-03 — Coût employeur absent** : utiliser le simulateur Urssaf, avec salaire, statut, mutuelle, avantages, capacité disponible et hypothèses ; ne jamais convertir un TJM en net universel.
4. **P1-04 — Coûts invisibles non chiffrés** : recrutement, management, congés, formation, matériel, PM, design, QA, coordination, traduction, assurance et remplacement.
5. **P1-05 — Pas de TCO 12/36/60** : distinguer lancement, année normale, maintenance, licence, incidents, sortie et nouvelle équipe.
6. **P1-06 — Réserve 15–25 % non reliée à un risque** : publier une sensibilité charge, coordination, retard, reprise et changement avec seuil de bascule.
7. **P1-07 — Aucun scénario de panne/continuité** : comparer disponibilité, remplacement, délai d’intervention, accès et plafond par modèle.
8. **P1-08 — Agence décrite sans structure de coût** : détailler PM, design, développement, QA, marge, responsabilité et équipe réellement affectée.
9. **P1-09 — Prestation distante insuffisamment cadrée** : traiter langue, fuseau, droit applicable, données, assurance, transfert et coût de contrôle à périmètre égal.
10. **P1-10 — Conflit commercial non déclaré** : signaler que Hagnéré Code vend du développement et peut recommander un freelance, un salarié ou l’absence de projet.
11. **P1-11 — Évaluation de résultat trop qualitative** : ajouter critères d’acceptation, volume de pages/fonctions, données réelles, tests, documentation et preuve de mise en ligne.

### P2 — 8

1. **P2-01 — Ressource téléchargeable absente** : fournir une grille de lecture de devis et un calculateur de coût complet.
2. **P2-02 — Benchmark international non visible** : encadré France/US/UK/Australie avec devise, date et biais de source.
3. **P2-03 — Date de registre à mettre à jour après réécriture** : ne pas modifier dans cet audit, mais synchroniser `dateModified` avec la future version validée.
4. **P2-04 — FAQ/Article/Breadcrumb non vérifiés** : tester le HTML/JSON-LD en build, sans déduire un résultat de la source seule.
5. **P2-05 — Scénarios de taille absents** : petite mission, projet métier 2 mois, maintenance 12 mois et équipe interne 3 ans.
6. **P2-06 — Accessibilité et lecture mobile non testées** : vérifier tableaux, encadrés, ancres et densité 320–1600 px.
7. **P2-07 — Vocabulaire métier à renforcer** : disponibilité facturable, régie plafonnée, coût de capacité, SLA, TMA, forfait avec recette et coût d’opportunité.
8. **P2-08 — Références client non encadrées** : ajouter consentement, confidentialité et questions standardisées avant de conseiller un appel de référence.

### État des portes

- **P1 : dossier historique absent dans ce snapshot et cadrage incomplet.** La page possède un travail éditorial, mais aucun dossier `docs/research/tjm-developpeur-web.md` n’a été trouvé ; les sources commerciales ne suffisent pas à fermer les P1.
- **P2 : contenu courant à corriger.** Les ressources, benchmark, dates et QA sont prescrits, pas livrés.
- **P3 : REJETÉE / non validée sur ce snapshot.** Aucun contre-audit, recalcul ou test de rendu n’est validé par ce rapport.
- **P4 : REJETÉE / non validée tant que le score reste inférieur à 90 et que la QA complète n’est pas exécutée.** Aucune conclusion de publication de référence, d’indexation ou de production.

## 9. Scorecard indépendante

| Axe | Note | Motif |
|---|---:|---|
| Intention de recherche | 9/10 | Répond bien au dirigeant qui reçoit un tarif/jour. |
| Décision dirigeant | 7/10 | Bonne méthode, mais pas de comparaison complète ni de seuil économique. |
| Pédagogie | 8/10 | Exemple simple et vocabulaire expliqué ; coûts sociaux à rendre concrets. |
| Profondeur | 7/10 | 10 sections utiles, mais absence de TCO multi-horizons et de scénario commun. |
| Preuves | 7/10 | Plusieurs baromètres, mais sources commerciales et méthodologies peu détaillées. |
| Comparaison | 6/10 | Freelance/agence/distant décrits ; salarié, coût complet et même périmètre manquent. |
| Originalité | 8/10 | Coût du résultat, coordination et réversibilité sont de bons angles. |
| Qualité rédactionnelle | 9/10 | Ton humain, clair, concret et non technique. |
| Conversion | 8/10 | CTA cohérent et liens internes ; conflit commercial et ressource manquent. |
| SEO / produit | 9/10 | Intentions, titre, meta, maillage, Article/Breadcrumb et FAQ présents à vérifier en QA. |
| **Total** | **78/100** | Très bon guide de lecture, pas encore guide économique de référence. |

## 10. Plan P1–P4 conforme au workflow maître

### P1 — recherche et cadrage

Relever Malt, TJMètre, Silkhom et autres baromètres avec date, population et géographie ; récupérer les pages officielles Urssaf/Service Public ; figer un périmètre de site identique et les hypothèses de coordination, capacité, maintenance et risque ; préparer le benchmark US/UK/AU et les scénarios 12/36/60.

### P2 — rédaction et intégration

Réécrire les repères avec leurs limites ; ajouter le scénario freelance/agence/salarié/distant, le coût employeur via simulateur, les TCO, sensibilités, panne, délais, déclaration commerciale et grille téléchargeable.

### P3 — contre-audit indépendant

Recalculer toutes les formules, chercher les biais des baromètres, tester l’égalité de périmètre, vérifier les sources sociales/fiscales, les exclusions, les devis implicites, les liens, les dates et les données structurées.

### P4 — plume humaine et QA complète

Relire avec un dirigeant non technique, supprimer les abstractions, tester 320–1600 px, accessibilité des tableaux, build, JSON-LD, liens, formulaire et URL de production. Ne déclarer que les vérifications effectivement exécutées.

## 11. Conditions de sortie « référence »

Le guide pourra viser 90+ lorsque :

- les tarifs 2026 sont datés, segmentés et présentés comme signaux, non comme barème ;
- le même livrable est comparé entre freelance, agence, salarié et distant ;
- le coût employeur et la capacité interne sont calculables via des hypothèses officielles ;
- les TCO 12/36/60 et les sensibilités montrent les seuils de décision ;
- la page déclare l’intérêt commercial de Hagnéré Code ;
- une grille téléchargeable transforme le lecteur en comparateur autonome ;
- les contre-audits et QA P3/P4 sont réellement exécutés.

## Sources consultées le 24/07/2026

- Malt, baromètre développeurs 2026 : https://www.malt.fr/t/barometre-tarifs/tech/.
- TJMètre : https://tjmetre.fr/barometre.
- Silkhom : https://www.silkhom.com/barometre-des-tjm-informatique-electronique-digital/.
- Urssaf, simulateur salaire brut/net et coût employeur : https://mon-entreprise.urssaf.fr/simulateurs/salaire-brut-net (version 07/2026, calculs indicatifs).
- Urssaf, réforme de l’assiette sociale des indépendants : https://www.urssaf.fr/accueil/independant/comprendre-payer-cotisations/reforme-cotisations-independants.html (page 2026).
- Service Public Entreprendre, micro-entrepreneur : https://entreprendre.service-public.gouv.fr/vosdroits/F23961 (vérifié 15/09/2025).
- Upwork, hourly rates : https://www.upwork.com/resources/upwork-hourly-rates (20/06/2025).
- Azterion, US vs nearshore : https://azterion.com/en-us/us-developer-hourly-rates-vs-nearshore/ (2026).
- Osdire, UK web developer rates : https://osdire.com/blog/web-developer-rates-in-the-uk-hourly-daily-and-website-costs (2026).
- GOV.UK, IR35 : https://www.gov.uk/guidance/understanding-off-payroll-working-ir35 (consulté 24/07/2026).
- GoingSolo Australia : https://goingsolo.au/articles/freelance-rate-australia (07/02/2026).
- Legal123 Australia : https://legal123.com.au/how-to-guide/legal-guide-web-developers/ (consulté 24/07/2026).
