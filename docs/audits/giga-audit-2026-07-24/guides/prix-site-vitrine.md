# Giga-audit indépendant — Prix d’un site vitrine

**Date de l’audit : 24 juillet 2026**  
**URL auditée :** `/guides/prix-site-vitrine`  
**Périmètre :** intention dirigeant, fourchettes, comparaisons à périmètre égal, TCO, sources officielles et commerciales, pédagogie, conversion, SEO et limites UX.  
**Limite :** aucun guide, registre, manifeste ou fichier partagé n’a été modifié ; aucun build ni contrôle de production n’est déclaré comme exécuté.

## 1. Verdict exécutif

Le guide répond bien à la question que se pose un artisan ou un dirigeant de TPE : « combien dois-je prévoir pour être crédible en ligne et recevoir des demandes ? » Son ouverture est humaine, les fourchettes sont immédiatement visibles, la différence entre prix HT et TTC est expliquée, les contenus et la recette sont abordés, et le texte refuse de promettre du trafic ou des clients. L’opposition fait-soi-même / freelance / agence est lisible, tout comme la distinction Wix / WordPress / développement dédié.

Le guide n’est toutefois pas encore un comparatif économique de référence. Il annonce des coûts « comparés sur trois ans » mais ne publie aucun tableau TCO chiffré par option. Les fourchettes sont des scénarios éditoriaux Hagnéré, tandis que la seule source externe (France Num) relaie des estimations de contributeurs datant de 2021, mises à jour en juin 2025 ; il manque un relevé daté des offres actuelles ou une méthode reproductible. La valeur du temps du dirigeant, le coût des contenus, la maintenance, les licences, les migrations et le coût d’opportunité ne sont pas chiffrés dans un cas commun. Enfin, Hagnéré vend la création de sites et renvoie vers ses tarifs, mais le conflit commercial n’est mentionné qu’en fin de page.

**Score indépendant : 79/100.**  
**P0 : 0 · P1 : 11 · P2 : 8.**  
Décision : **bon guide d’orientation et de lecture de devis, insuffisant encore pour justifier un budget ou comparer quatre solutions au même résultat**.

## 2. Snapshot vérifiable

| Élément | Observation au 24/07/2026 | Preuve locale |
|---|---|---|
| Page | 783 lignes, 11 parties, FAQ, CTA et sources | `src/app/guides/prix-site-vitrine/page.tsx` |
| Empreinte page | `ea6d3f4a094bafb08888307ed3fd1da60ef8a91dedfc902f5196822d783846df` | SHA-256 calculé pendant l’audit |
| OG | Image dédiée | `src/app/guides/prix-site-vitrine/opengraph-image.tsx` |
| Empreinte OG | `80c50ee3d8d0a83338a4985f3e5975d9c1144d8466e845cad74e6b94dbb9471f` | SHA-256 calculé pendant l’audit |
| Registre | Titre et meta 2026, date publiée/modifiée à relever dans le registre au moment de la réécriture | `src/lib/guides.ts` |
| Sources visibles | France Num « combien payer » et Baromètre France Num 2025 ; les scénarios principaux sont explicitement Hagnéré | `page.tsx:751-778` |
| Dossier de recherche | Aucun `docs/research/prix-site-vitrine.md` trouvé dans le snapshot | Vérification locale |
| Données structurées | Article + Breadcrumb présents dans la page ; FAQ/SEO non vérifiés par build | Source locale uniquement |
| QA | Aucun navigateur 320–1600 px, build, formulaire, accessibilité, indexation ou production exécuté | Limite méthodologique |
| Worktree | `src/lib/guides.ts` déjà modifié par un autre travail, laissé intact | `git status --short` |

## 3. Forces constatées

- L’ouverture part d’usages concrets : rassurer avant un rendez-vous, présenter les services et recevoir des demandes.
- Les fourchettes sont lisibles : DIY 0–1 000 €, freelance 800–3 000 €, agence standard 2 000–6 000 €, conception personnalisée 6 000–15 000 €, site étendu 15 000–30 000 €.
- Le texte précise que ces montants sont des repères éditoriaux, pas une étude représentative, un tarif Hagnéré ou une promesse.
- La réponse simple est honnête : un site peut être bon marché pour exister, mais la conversion dépend surtout de l’offre, des pages utiles, de la preuve et du suivi des contacts.
- Les postes de devis sont bien listés : cadrage, rédaction, design, technique, SEO de base, mise en ligne et correction.
- La recette est expliquée avec des actions que le dirigeant peut comprendre : formulaire, mobile, administration, liens.
- Le guide rappelle une différence souvent cachée : un freelance ne fournit pas nécessairement rédaction, photo, design, développement et SEO au même niveau ; une agence n’est pas automatiquement plus créative ni plus fiable.
- Le tableau des outils distingue abonnement tout-en-un, CMS et développement dédié, avec leurs contreparties.
- Les coûts récurrents sont nommés : domaine, hébergement, licences, maintenance et contenus.
- Les délais sont présentés comme hypothèses conditionnées à la disponibilité des contenus, personnes et accès.
- La position commerciale en fin de page reconnaît qu’un outil tout-en-un ou un freelance peut être plus adapté qu’Hagnéré Code pour un besoin simple.

## 4. Benchmark FR / US / UK / Australie / DACH

| Marché / source | Observation actuelle | Leçon pour le guide |
|---|---|---|
| France, institutionnel | [France Num — Combien payer pour un site web](https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/combien-payer-pour-un-site-web-ou-un-site-e), publié 06/05/2021, mis à jour 20/06/2025 : recommandations de consultation et estimations de contributeurs, pas tarif public | Le signal est utile mais ne justifie pas à lui seul des fourchettes 2026. Afficher la date et distinguer estimation de contributeur, scénario Hagnéré et prix fournisseur. |
| France, institutionnel | [France Num — Baromètre 2025](https://www.francenum.gouv.fr/guides-et-conseils/strategie-numerique/comprendre-le-numerique/barometre-france-num-2025-le), consulté 24/07/2026 | 65 % des TPE-PME interrogées possèdent un site présentant leur activité ; cela ne mesure ni qualité, trafic ni conversion | Conserver la nuance déjà présente et éviter de relier équipement à retour sur investissement. |
| France, officiel plateforme | [WordPress.com tarifs](https://wordpress.com/fr/pricing/), page consultée 24/07/2026 : plans affichés en EUR/USD selon paramètre, domaine offert un an dans certaines offres, hébergement et fonctionnalités inclus selon plan | Ajouter un exemple de coût éditeur réellement daté, séparer WordPress.com managé de WordPress auto-hébergé et ne pas mélanger abonnement et développement. |
| France, source technique | [France Num — créer/acheter un site](https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-e-commerce/creer-ou-acheter-un-site-e-commerce), mise à jour 31/03/2026 | Rappelle que les délais et imprévus dépendent de la complexité | Ajouter un coût de retard et une réserve liée au contenu, pas un pourcentage universel. |
| États-Unis, test comparatif | [TechRadar — website cost](https://www.techradar.com/news/how-much-does-it-cost-to-build-a-website), publié 11/08/2025 | Compare builder, CMS et code sur mesure, ajoute hébergement, domaine, plugins et maintenance ; fourchettes en dollars et source média | Reprendre la structure « achat initial + récurrences + maintenance », convertir aucune devise sans date de change et afficher les limites de chaque scénario. |
| États-Unis, builders | [TechRadar — small business website builders 2026](https://www.techradar.com/best/best-small-business-website-builders), testé 2026 | Met en avant tests réels, outils et valeur ; prix d’appel à contextualiser | Le guide Hagnéré doit afficher les hypothèses d’usage et une vérification minimale, pas seulement un prix d’entrée. |
| Royaume-Uni, concurrent | [PageLaunch — small business website cost UK 2026](https://pagelaunch.co.uk/blog/cost-of-small-business-website-uk/), publié 2026 | Sépare one-off, hosting, freelance et agence ; distingue £ et mensualités | Ajouter un tableau initial/récurrent et signaler TVA, devise et périmètre propres au Royaume-Uni. |
| Royaume-Uni, concurrent | [1 Week Sites — UK costs 2026](https://1weeksites.com/writing/how-much-does-website-cost-uk), publié 2026 | Montre l’écart DIY, freelance, studio et agence selon délai et niveau de conception | Ajouter la dimension délai/validation/contenus aux fourchettes, avec contre-cas. |
| Australie, concurrent | [Clad — small business website cost Australia](https://getclad.au/blog/small-business-website-cost-australia), publié 2026 | Compare agency, freelance, abonnement et coûts récurrents en AUD | S’inspirer de la séparation build / récurrences, sans importer les montants en euros. |
| Australie, concurrent | [Small Business WA — website planning workbook](https://www.smallbusiness.wa.gov.au/sites/default/files/SBDC-Website-Planning-Workbook.pdf), consulté 24/07/2026 | Le prix n’est pas fixe ; il dépend du cahier des charges et de ce que le dirigeant gère lui-même | Ajouter une grille de périmètre et la valeur du temps interne. |
| DACH, média comparatif | [Find-Your-Software — guide logiciel/web 2026](https://find-your-software.de/software-kategorien/erp-software/erp-software-vergleich-2026/), publié 2026 | Montre l’importance des contraintes de marché local, conformité et langue | Pour un site multilingue, chiffrer traduction, validation, SEO local et maintenance de chaque langue. |

**Conclusion benchmark :** les meilleurs concurrents ne donnent pas seulement un prix ; ils relient le prix à un volume de pages, une méthode, un délai, un abonnement et un niveau d’autonomie. Le guide a déjà le bon vocabulaire mais pas encore la table de coûts et d’hypothèses qui rend la comparaison reproductible.

## 5. Comparaison à périmètre égal et TCO

### Périmètre canonique à fixer

Pour éviter de comparer une page avec un site complet, figer un cas : **site B2B de 5 pages**, une langue, 12 contenus fournis par l’entreprise, formulaire de contact, mesure d’audience, SEO de base (titres, métadonnées, sitemap), responsive, deux cycles de corrections, mise en ligne, formation d’une heure et garantie de correction 30 jours. Le même résultat doit être obtenu par DIY, freelance, agence et conception dédiée.

### Exemple TCO illustratif (hypothèses explicites)

Les montants suivants ne sont ni des prix de marché ni des tarifs Hagnéré. Ils servent à montrer la méthode. Hypothèses HT : domaine 15 €/an ; abonnement/hébergement 20 €/mois pour DIY, 300 €/an de maintenance/licences freelance, 1 200 €/an agence, 2 500 €/an conception dédiée ; valeur du temps du dirigeant 40 €/h ; temps interne respectif 3 h/mois, 3 h/mois, 1 h/mois, 1 h/mois.

| Option | Création | Récurrences externes | Temps interne sur 3 ans | TCO 12 mois | TCO 36 mois | TCO 60 mois |
|---|---:|---:|---:|---:|---:|---:|
| DIY | 500 € | 255 € | 1 440 € | 2 195 € | **5 585 €** | 8 975 € |
| Freelance | 2 000 € | 945 € | 4 320 € | 3 755 € | **7 265 €** | 10 775 € |
| Agence standard | 4 000 € | 3 615 € | 1 440 € | 5 695 € | **9 055 €** | 12 475 € |
| Conception dédiée | 9 000 € | 7 545 € | 1 440 € | 11 995 € | **17 985 €** | 26 475 € |

Convention : TCO = création + domaine/hébergement/licences/maintenance échus + temps interne valorisé. Les coûts de rédaction, photo, traduction, SEO continu, perte de demandes pendant un retard et sortie de plateforme sont exclus ici et doivent être ajoutés si le périmètre les exige. Le DIY n’est donc pas « gratuit » : il achète une partie du site avec du temps du dirigeant.

### Sensibilités à ajouter

- temps interne 20 / 40 / 80 heures sur trois ans ;
- maintenance 0 / 1 200 / 3 600 € par an ;
- création de contenus 0 / 2 000 / 6 000 € ;
- retard de lancement 0 / 4 / 8 semaines ;
- conversion mesurée : 5 / 15 / 30 demandes mensuelles supplémentaires ;
- marge prudente par client et taux de transformation, renseignés par l’entreprise.

Le guide doit montrer que le choix se renverse souvent sur le contenu et le suivi commercial, pas sur la seule facture de création. Un site à 2 000 € qui ne reçoit aucune demande peut coûter plus cher qu’un site à 8 000 € qui génère une marge mesurable ; inversement, une dépense de 8 000 € sans offre claire ne crée pas magiquement de trafic.

## 6. Audit de pédagogie, profondeur et rédaction

### Ce qui est humain et utile

Le texte parle comme à un dirigeant : « dans douze mois, ce site devra surtout nous aider à… ». Il explique le rôle des pages, les contenus, la recette, le délai et les coûts futurs sans jargon excessif. La position contre les promesses « ultra rapide » ou « optimisé SEO » est saine.

### Ce qui doit être enrichi

1. Remplacer la lecture de fourchettes par une décision « quel site pour quel usage, quel volume de pages et quelle autonomie ? ».
2. Ajouter un exemple de devis ligne par ligne avec inclusions/exclusions et montrer comment deux devis à 4 000 € deviennent différents.
3. Chiffrer le temps de validation, de rédaction et de photographie ; ce sont souvent les premiers retards d’une TPE.
4. Ajouter le coût de propriété des comptes, du domaine, de la sauvegarde et du changement de prestataire.
5. Distinguer WordPress.com, WordPress auto-hébergé, Wix/Squarespace et développement Next.js ; « WordPress » seul est trop large pour décider.
6. Inclure un scénario artisan local, un scénario PME multi-services et un scénario multilingue ; les fourchettes actuelles ne disent pas quand passer de 3 000 à 15 000 €.
7. Déclarer clairement que Hagnéré Code vend ce service, tout en laissant le diagnostic conclure à un builder ou à un freelance.

## 7. Conversion et conflit commercial

La page a un CTA de comparaison de devis et une position commerciale honnête en fin de guide. Pour convertir sans perdre la confiance, annoncer plus tôt : « Hagnéré Code vend aussi des sites vitrines ; nous pouvons donc conclure qu’un outil plus simple est préférable lorsque le projet le permet. »

Ressource recommandée : **grille “Prix d’un site vitrine : 24 lignes à comparer”** avec pages, contenus, design, intégrations, domaine, hébergement, licences, recette, formation, maintenance, propriété des comptes, coûts 12/36/60 et valeur du temps interne. Le formulaire peut demander objectif, nombre de pages, langues et devis reçus ; il ne doit pas promettre une rentabilité ou un positionnement Google.

## 8. P0/P1/P2 explicites

### P0 — 0

Aucun faux témoignage, aucune garantie de trafic/clients, aucun prix présenté comme tarif officiel et aucune manipulation de calcul critique n’a été repéré. Les scénarios sont explicitement qualifiés d’éditoriaux et la page refuse les promesses SEO.

### P1 — 11

1. **P1-01 — Fourchettes 2026 insuffisamment sourcées** : les montants principaux sont des scénarios Hagnéré ; afficher hypothèses, date, périmètre, devise/HT et distinguer les estimations France Num des prix observés.
2. **P1-02 — Périmètre égal absent** : comparer DIY, freelance, agence et dédié avec mêmes pages, contenus, responsive, SEO de base, recette, formation et garantie.
3. **P1-03 — TCO annoncé mais non calculé** : publier 12/36/60 mois avec création, abonnement, licences, maintenance, contenus, temps interne et sortie.
4. **P1-04 — Temps du dirigeant non valorisé** : distinguer rédaction, photos, collecte, validation, administration et suivi commercial.
5. **P1-05 — Coûts récurrents trop généraux** : relever fournisseur, renouvellement, licence, sauvegarde, maintenance, migration et changement de prestataire.
6. **P1-06 — Réserve sans sensibilité** : tester charge, contenu, retard, maintenance et demandes générées ; ne pas laisser le lecteur croire à une marge universelle.
7. **P1-07 — Comparaison outil incomplète** : distinguer Wix/Squarespace, WordPress.com, WordPress auto-hébergé, statique et développement dédié avec conditions de sortie.
8. **P1-08 — Valeur métier non calculée** : proposer une formule demandes × conversion × marge, sans promettre un résultat, et montrer le coût d’un retard ou d’un site non suivi.
9. **P1-09 — Contenu juridique/technique non auditable** : domaine, comptes, sauvegarde, RGPD, cookies, accessibilité et réversibilité doivent apparaître dans le périmètre ou être explicitement exclus.
10. **P1-10 — Conflit commercial tardif** : déclarer dès l’ouverture que Hagnéré Code vend des sites et peut néanmoins recommander une solution plus simple.
11. **P1-11 — Sources trop anciennes pour un guide 2026** : France Num est mis à jour en juin 2025 ; ajouter des pages tarifaires officielles actuelles et dater chaque relevé avant d’afficher « 2026 ».

### P2 — 8

1. **P2-01 — Ressource téléchargeable absente** : publier la grille de comparaison et le calculateur TCO.
2. **P2-02 — Benchmark international invisible** : ajouter un encadré France/US/UK/Australie/DACH avec devise, biais et date.
3. **P2-03 — Date de registre à synchroniser** : mettre à jour `dateModified` seulement après réécriture et contre-audit.
4. **P2-04 — JSON-LD/FAQ non vérifiés** : tester Article, Breadcrumb et FAQ dans le HTML généré ; aucune validation n’est accordée par le source seul.
5. **P2-05 — Scénarios de taille absents** : artisan local, PME multi-services, multilingue et refonte avec migration.
6. **P2-06 — UX mobile non testée** : vérifier tableaux de prix, encadrés, ancres et CTA à 320–1600 px.
7. **P2-07 — Accessibilité et conformité** : prévoir alt, contrastes, formulaires, politique cookies et obligations applicables au secteur ; renvoyer à un spécialiste si nécessaire.
8. **P2-08 — Conversion à mesurer** : distinguer demande de devis, rendez-vous, projet signé et valeur de marge ; aucun taux de conversion ne doit être inventé.

### État des portes

- **P1 : dossier historique absent et recherche à refaire.** Aucun dossier `docs/research/prix-site-vitrine.md` n’a été trouvé ; les sources visibles sont insuffisantes pour fermer le benchmark 2026.
- **P2 : contenu courant à corriger.** Le guide contient un bon socle, mais les tableaux TCO, scénarios et ressources ne sont pas encore livrés.
- **P3 : REJETÉE / non validée sur ce snapshot.** Aucun contre-audit des calculs, sources, SEO ou UX n’a été exécuté en build.
- **P4 : REJETÉE / non validée tant que le score reste inférieur à 90 et que la QA complète n’est pas exécutée.** Aucune conclusion de publication de référence, d’indexation ou de production.

## 9. Scorecard indépendante

| Axe | Note | Motif |
|---|---:|---|
| Intention de recherche | 9/10 | Répond directement au budget d’un site vitrine. |
| Décision dirigeant | 8/10 | Bonne orientation, mais pas de tableau de décision économique complet. |
| Pédagogie | 9/10 | Ton humain, exemples et vocabulaire adaptés aux TPE. |
| Profondeur | 7/10 | Beaucoup de sujets, peu de calculs/scénarios vérifiables. |
| Preuves | 6/10 | France Num attribuée, mais scénarios 2026 internes et absence de pages tarifaires actuelles. |
| Comparaison | 7/10 | Options nommées, pas comparées à résultat égal avec TCO. |
| Originalité | 8/10 | Rôle du site, recette et coûts oubliés bien traités. |
| Qualité rédactionnelle | 9/10 | Clair, concret, prudent et lisible. |
| Conversion | 8/10 | CTA devis et position commerciale ; ressource et déclaration plus tôt à ajouter. |
| SEO / produit | 8/10 | Structure, FAQ, Article/Breadcrumb et maillage ; QA non exécutée. |
| **Total** | **79/100** | Très bon guide de cadrage, pas encore comparatif de prix de référence. |

## 10. Plan P1–P4 conforme au workflow maître

### P1 — recherche et cadrage

Revalider France Num, WordPress.com et les fournisseurs réellement cités ; relever les dates, devises, renouvellements et limites ; figer le site canonique de 5 pages ; préparer TCO 12/36/60, scénarios artisan/PME/multilingue, sensibilité contenu/retard/maintenance et benchmark US/UK/AU/DACH.

### P2 — rédaction et intégration

Intégrer le tableau à périmètre égal, le TCO, les hypothèses et la formule de valeur métier ; distinguer les outils ; ajouter la déclaration commerciale, les coûts de sortie, la grille téléchargeable et les cas de taille.

### P3 — contre-audit indépendant

Recalculer chaque somme, vérifier que HT/TTC et récurrences ne sont pas mélangés, contrôler les sources/dates, tester les liens, les exclusions, le JSON-LD, les tableaux et l’absence de promesse SEO.

### P4 — plume humaine et QA complète

Relire avec un artisan et un dirigeant de PME, supprimer les abstractions, tester 320–1600 px, contraste, tableaux, formulaires et ancres, exécuter build et vérifier l’URL de production. Ne déclarer que les contrôles réellement exécutés.

## 11. Conditions de sortie « référence »

Le guide pourra viser 90+ lorsque :

- chaque fourchette est datée, contextualisée et clairement qualifiée ;
- le même site est comparé entre DIY, freelance, agence et dédié ;
- les TCO 12/36/60 et sensibilités sont visibles ;
- le temps interne, le contenu, la maintenance, la sortie et le risque de retard sont chiffrables ;
- la position commerciale Hagnéré est transparente dès le début ;
- une grille de devis téléchargeable est proposée ;
- les contre-audits et QA P3/P4 sont réellement exécutés.

## Sources consultées le 24/07/2026

- France Num — https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/combien-payer-pour-un-site-web-ou-un-site-e (mis à jour 20/06/2025).
- France Num, Baromètre 2025 — https://www.francenum.gouv.fr/guides-et-conseils/strategie-numerique/comprendre-le-numerique/barometre-france-num-2025-le.
- France Num, création/achat — https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-e-commerce/creer-ou-acheter-un-site-e-commerce (mis à jour 31/03/2026).
- WordPress.com tarifs — https://wordpress.com/fr/pricing/ (consulté 24/07/2026).
- TechRadar, website cost — https://www.techradar.com/news/how-much-does-it-cost-to-build-a-website (11/08/2025).
- TechRadar, builders 2026 — https://www.techradar.com/best/best-small-business-website-builders (02/02/2026).
- PageLaunch UK — https://pagelaunch.co.uk/blog/cost-of-small-business-website-uk/ (2026).
- 1 Week Sites UK — https://1weeksites.com/writing/how-much-does-website-cost-uk (2026).
- Clad Australia — https://getclad.au/blog/small-business-website-cost-australia (2026).
- Small Business WA workbook — https://www.smallbusiness.wa.gov.au/sites/default/files/SBDC-Website-Planning-Workbook.pdf (consulté 24/07/2026).
