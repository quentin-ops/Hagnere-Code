# Giga-audit indépendant — Propriété du site et du code source

**Date de l’audit : 24 juillet 2026**  
**URL auditée :** `/guides/proprietaire-site-internet-code-source`  
**Périmètre :** intention dirigeant, pédagogie, droit, preuve, continuité technique, comparaison internationale, conversion et SEO.  
**Limite :** ce rapport ne constitue ni un avis juridique, ni une validation de mise en production, ni une preuve d’indexation.

## 1. Verdict exécutif

Ce guide est l’un des plus prometteurs du corpus. Il répond à une vraie peur de dirigeant — « j’ai payé mon site, mais pourrai-je partir ? » — et reformule correctement le problème : la liberté dépend de la combinaison **droits + accès + technologie reprenable**, pas d’un mot vague comme « propriété ». La page distingue contenu, données, code, licences, domaine et comptes, traite Wix/Shopify, la chaîne de sous-traitance, les briques tierces, l’IA, le RGPD, les sauvegardes et l’entiercement. Le ton reste humain et le disclaimer juridique est visible.

Elle n’est cependant pas encore la meilleure réponse décisionnelle. Le dossier de recherche prévoyait un fil rouge chiffré, un arbitrage rachat des droits / procédure / redéveloppement et un modèle de clause ; la page publiée ne montre ni les montants, ni l’arbitrage, ni le modèle copiable. Le lecteur comprend ce qu’il doit contrôler, mais ne peut pas encore calculer le coût de son risque ni repartir avec un document complet à faire relire par son avocat. La titularité du domaine est formulée de manière trop proche de « propriété », alors que le titulaire registrant, le contrat et les règles du registre doivent être distingués. Les sources sont nombreuses mais la page n’expose pas leur date/version, et les plateformes évoluent.

**Score indépendant : 82/100.**  
**P0 : 0 · P1 : 11 · P2 : 8.**  
Décision : **excellent socle éditorial, mais réécriture P1 nécessaire avant de le présenter comme guide de référence ou comme conseil de négociation complet**.

## 2. Snapshot vérifiable

| Élément | Observation au 24/07/2026 | Preuve locale |
|---|---|---|
| Route | Page React de 861 lignes, organisée en 10 parties, FAQ et sources | `src/app/guides/proprietaire-site-internet-code-source/page.tsx` |
| Empreinte page | `a208df5e3c59ca37de08d1cf1afc29e085a1270cfb609a3653ef08e4413fd2b1` | SHA-256 calculé pendant l’audit |
| OG | Image dédiée | `src/app/guides/proprietaire-site-internet-code-source/opengraph-image.tsx` |
| Empreinte OG | `d282c2543f6dd95274a792f0616d589e94a4254ff8952494865be452d60a48c7` | SHA-256 calculé pendant l’audit |
| Registre | Titre « Qui est propriétaire… », meta orientée 14 accès, publiée 19/07/2026, modifiée 21/07/2026, lecture 11 min | `src/lib/guides.ts` |
| Données structurées | Article + BreadcrumbList dans la page ; FAQ rendue par `GuideLayout`, mais aucune vérification indépendante de JSON-LD FAQPage dans cet audit | Source locale, non buildée |
| Recherche | Dossier de recherche de 384 lignes, angle, trous top 10, sources légales, fil rouge et pièges ; plus riche que la page finale sur les chiffres et le modèle de clause | `docs/research/proprietaire-site-internet-code-source.md` |
| État du worktree | `src/lib/guides.ts` déjà modifié par un autre travail ; laissé intact | `git status --short` |
| QA | Aucun build, navigateur, rendu 320–1600 px, test de restauration, test d’export, test d’indexation ou contrôle production exécuté | Limite de l’audit |

## 3. Forces constatées

- L’ouverture répond à une situation réelle avant de parler de droit : vouloir changer de prestataire après avoir payé le site.
- Le guide donne la réponse simple et juste : contenus, données, code, licences et comptes ne suivent pas la même règle.
- La phrase « être titulaire de droits ne suffit pas toujours pour changer de prestataire » est une excellente thèse commerciale et opérationnelle.
- Le tableau des éléments est utile : contenus, données, code, extensions, domaine et comptes ont chacun un contrôle immédiat.
- La checklist des 14 accès est concrète : registrar, DNS, hébergement, dépôt, base, backups, analytics, Search Console, cookies, paiement, extensions, documentation, facturation et exports.
- Les étapes « site déjà bloqué » sont prudentes : rassembler les pièces, sécuriser les accès, demander par écrit, faire examiner techniquement, puis consulter un avocat.
- Le guide explique correctement, en français courant, le formalisme de cession et la différence entre droits moraux et patrimoniaux.
- La séparation entre propriété intellectuelle et restitution des données au titre du RGPD est pédagogique et évite une confusion fréquente.
- Le cas Wix est correctement borné par la documentation éditeur : le contenu peut appartenir au client mais l’architecture SaaS doit rester chez Wix. Le cas Shopify est présenté comme un export de données, pas comme la remise du code de la plateforme.
- Les briques tierces et la sous-traitance sont bien identifiées comme des trous de chaîne de titularité.
- L’IA est traitée avec une prudence inhabituelle : le rapport américain est présenté comme indice, pas comme droit français, et la page ne prétend pas qu’une juridiction française a déjà tout tranché.
- Le CTA technique promet un contrôle des accès et sauvegardes, tout en excluant une conclusion juridique : bonne séparation des rôles et bonne protection contre la surpromesse.

## 4. Benchmark FR / US / UK / Australie

Les sources ci-dessous servent à comparer la couverture et à vérifier des règles. Les sources commerciales ne doivent jamais être transformées en vérité juridique ou tarifaire.

| Marché / source | Constat | Manque ou opportunité pour Hagnéré Code |
|---|---|---|
| France, Service Public | [Contrat de cession de droits d’auteur](https://entreprendre.service-public.gouv.fr/vosdroits/F22667), vérifié 03/05/2024 : écrit, œuvre exacte, droits énumérés, destination, territoire, durée, prix et exclusivité ; rappelle que les droits moraux ne se cèdent pas | La page reprend la logique mais doit renvoyer aussi à cette synthèse institutionnelle, dater la consultation et donner un mini-modèle à faire relire. |
| France, Légifrance | [Article L131-3 CPI](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958), texte primaire | Faire correspondre chaque champ du modèle de clause à un article et à une preuve de livraison. |
| France, AFNIC | [Guide pratique du titulaire .fr](https://www.afnic.fr/wp-media/uploads/2024/07/Afnic-Guide-pratique-du-Titulaire.pdf), édition 2024 | Remplacer « vrai propriétaire du domaine » par titulaire/registrant, contact administratif et contrôle du compte ; prévoir un test de transfert. |
| France, APP | [Cession, licence, transfert de droit](https://www.app.asso.fr/depot/cession-licence-et-transfert-de-droit-tout-comprendre.html), publié 2026 | Ajouter une explication courte logiciel : reproduction, adaptation, mise sur le marché, et distinguer licence d’exploitation et cession. |
| France, concurrence éditoriale | [Guide DGCCRF e-commerce](https://www.economie.gouv.fr/files/files/directions_services/dgccrf/documentation/fiches_pratiques/2015/guide_ecommerce.pdf) et [APP bonnes pratiques](https://www.app.asso.fr/wp-content/uploads/APP-Bonnes-pratiques-cession-de-droits.pdf) | Le guide est plus opérationnel sur les accès, mais doit récupérer le formalisme et les exemples de clause de ces sources publiques. |
| États-Unis, autorité | [U.S. Copyright Office — AI Part 2](https://www.copyright.gov/newsnet/2025/1060.html), 29/01/2025 : protection seulement lorsque l’auteur humain détermine des éléments expressifs suffisants ; prompts seuls insuffisants | Décrire l’IA comme question de preuve et de chaîne de droits, jamais comme règle française importée ; demander journal des apports humains et licences des dépendances. |
| États-Unis, pratique marché | [LegalClarity — source code escrow](https://legalclarity.org/what-is-source-code-escrow/), publié 2026 ; [Escode — escrow](https://www.escode.com/resources/what-is-source-code-escrow/), consulté 24/07/2026 | Ajouter déclencheurs mesurables : faillite, arrêt de support, violation grave, non-remédiation et format de remise. L’entiercement n’est pas une sauvegarde automatique. |
| Royaume-Uni, officiel | [GOV.UK — copyright](https://www.gov.uk/using-somebody-elses-intellectual-property/copyright), consulté 24/07/2026 : transfert par accord écrit signé ; licence limitée par objet, durée, territoire ; droits moraux séparés | Le guide français peut comparer en encadré : même intuition pratique, mais le formalisme L131-3 français reste différent. Ne pas généraliser entre pays. |
| Royaume-Uni, officiel achats | [GOV.UK — IP Rights Guidance Note](https://www.gov.uk/government/publications/the-digital-data-and-technology-playbook/intellectual-property-rights-guidance-note-html), consulté 24/07/2026 : distingue Background/Third Party/Foreground IP et recommande d’assurer les droits de réutiliser ou de changer de fournisseur | C’est le meilleur axe à importer : une annexe « préexistant / créé pour le projet / tiers / réutilisable » et une licence de continuité si le fournisseur conserve le fond. |
| Royaume-Uni, concurrence éditoriale | [TechRadar Pro — Do you really own your website?](https://www.techradar.com/pro/do-you-really-own-your-website), publié 29/09/2025 | Couvre code, développeur indépendant, OSS et risque de vente d’entreprise ; Hagnéré Code doit gagner par son tableau d’accès, ses sources primaires et un calcul d’arbitrage. |
| Australie, autorité | [IP Australia — Who owns IP?](https://www.ipaustralia.gov.au/understanding-ip/who-owns-ip), consulté 24/07/2026 : employeur propriétaire des créations salariées ; contractor propriétaire sauf contrat contraire ; contrat avant travaux et obligation de retour | Confirme la chaîne freelance/sous-traitant et la nécessité de clauses de retour. Ajouter une comparaison pays, sans exporter la règle australienne en France. |
| Australie, droit pratique | [Arts Law — Website development](https://www.artslaw.com.au/information-sheet/website-development/), consulté 24/07/2026 : si contrat silencieux, le développeur peut conserver la PI ; sans code et accès, maintenance difficile | Le guide couvre déjà l’idée, mais doit montrer une fiche de passation et un test restauré ; éviter une simple liste de mots-clés. |
| Australie, contrat | [Sprintlaw — software development contracts](https://sprintlaw.com.au/articles/software-development-contracts-in-australia-what-to-include/), consulté 24/07/2026 : IP, escrow, étapes, confidentialité, maintenance et sortie | Ajouter un tableau de clauses par phase : avant commande, livraison, maintenance, fin de contrat. |
| SaaS éditeur, preuve technique | [Wix — export / hébergement externe](https://support.wix.com/en/article/exporting-or-embedding-your-wix-site-elsewhere), consulté 24/07/2026 : SaaS doit fonctionner sur l’infrastructure Wix ; le contenu construit appartient au client selon Wix | Le guide est juste mais doit dater le forfait et séparer contenu, design, configuration, domaine et hébergement. |
| SaaS éditeur, preuve technique | [Shopify — export CSV produits](https://help.shopify.com/fr/manual/products/import-export/using-csv), consulté 24/07/2026 | Ajouter clients, commandes et métadonnées dans une matrice de migration ; le CSV ne prouve pas la migration de thème, apps et automatisations. |

## 5. Audit de la pédagogie dirigeant

### Ce qui fonctionne

La page utilise une langue accessible et donne une action immédiate. Un dirigeant comprend pourquoi « j’ai payé » ne suffit pas, puis peut commencer par le domaine et les comptes. L’encadré juridique évite d’écraser le lecteur sous les articles de loi. Le message type à envoyer au prestataire est une vraie aide opérationnelle.

### Ce qui doit changer

1. **Afficher le verdict en 30 secondes.** Ajouter un tableau à six lignes : contenu, données, domaine, comptes, code spécifique, briques tierces, avec « ce que vous pouvez demander maintenant ».
2. **Donner un cas chiffré.** Le dossier propose Sandrine/Alp’Isolation (21 600 € de site, 9 000 € de rachat, 14 500 € de redéveloppement, 79 €/an de thème, 40–60 leads mensuels), mais ces chiffres ne figurent pas dans la page. Sans eux, le lecteur n’apprend pas à arbitrer.
3. **Distinguer “propriété”, “titularité”, “contrôle” et “droit d’usage”.** Le titre parle de propriété ; l’ouverture doit expliquer que le dirigeant cherche surtout trois libertés : continuer à exploiter, faire maintenir et changer de fournisseur.
4. **Ne pas présenter le droit du domaine comme un droit d’auteur.** Écrire « titulaire/registrant et contrôle du compte » ; renvoyer à l’AFNIC pour le .fr et au registrar concerné pour les autres extensions.
5. **Montrer le livrable.** La page annonce « ce qu’il faut écrire » mais ne fournit pas de modèle de clause. Publier un exemple court explicitement non juridique, avec champs à faire valider.
6. **Illustrer les briques tierces.** Un tableau « cédable / licenciable / non transférable / à remplacer » rendrait l’idée immédiatement compréhensible.
7. **Ajouter les décisions de sortie.** Pour un site vitrine standard, racheter les droits peut coûter plus cher que reconstruire ; pour un configurateur qui génère des demandes, la continuité peut justifier une négociation ou un escrow. Le lecteur doit voir la logique, pas seulement la prudence.
8. **Séparer la procédure et la technique.** Les délais de référé, la mise en demeure et la contrefaçon exigent un avocat ; l’export, la sauvegarde, la restauration et le changement DNS exigent un technicien. Les deux parcours doivent être visuellement séparés.

## 6. Audit de profondeur, preuves et comparaison

### Gaps importants

- Le fil rouge et ses trois options (payer 9 000 €, agir, redévelopper pour 14 500 €) sont décrits dans le dossier de recherche mais absents de la page. C’est le principal manque de valeur économique.
- Aucun TCO 12/36/60 n’est calculé : coût de cession, audit technique, migration, indisponibilité, nouvelle maintenance, licence de thème et risque commercial restent qualitatifs.
- Le modèle de clause promis par le dossier de recherche n’est pas livré. Une checklist n’a pas la même valeur qu’un exemple annoté.
- La liste des 14 accès ne comporte pas de propriétaire, statut, date de dernière sauvegarde, test de restauration ou coût de renouvellement.
- La page ne compare pas explicitement cession complète, licence perpétuelle, licence exclusive, licence de continuité et licence des briques préexistantes.
- La chaîne de titularité est nommée mais aucun exemple de garantie contractuelle « salariés / freelance / offshore / alternant / stagiaire » n’est analysé.
- Le cas IA est prudemment écrit, mais aucun contrôle de provenance n’est proposé : dépendances, licences, code généré, revue humaine, secrets absents du dépôt et journal de contributions.
- Wix et Shopify sont utiles, mais Webflow, HubSpot et Squarespace sont absents alors que le dossier de recherche les avait identifiés. Le lecteur risque d’extrapoler à tort.

### Grille de preuve à ajouter

| Question | Preuve minimale | Échec à traiter |
|---|---|---|
| Le domaine est-il contrôlable ? | compte registrant au nom de l’entreprise, MFA, récupération testée | registrar inaccessible ou contact agence |
| Le site peut-il être relancé ? | dépôt, variables documentées hors secrets, build et restauration testés | code incomplet, clé manquante, version non reproductible |
| Les données peuvent-elles partir ? | export daté, schéma, pièces jointes, liens, test d’import | CSV sans relations ni historique |
| Le nouveau prestataire peut-il maintenir ? | documentation, CI/CD, hébergeur, accès, licences | dépendance à un compte personnel ou à un plugin non transférable |
| Les droits sont-ils exploitables ? | clause identifiant œuvre, droits, territoire, durée, destination, rémunération | formule « tous droits » ou « droit d’usage » ambiguë |
| La chaîne est-elle couverte ? | garanties et cessions des salariés, freelances et sous-traitants | agence incapable de produire ses propres titres |
| La plateforme est-elle reprenable ? | export officiel et limites documentées | design, automatisations, apps et SEO non exportables |
| La sortie est-elle économiquement rationnelle ? | coûts rachat, audit, redéveloppement, délai et perte de leads | arbitrage intuitif |

## 7. Calculs et scénarios à intégrer

Le dossier fournit un cas très utile, mais il doit être publié en distinguant faits, hypothèses et décision.

### Cas Alp’Isolation (illustratif, à identifier comme fictif)

- 21 600 € HT déjà payés en 2023 ; 11 salariés ; 40 à 60 demandes de devis par mois.
- L’agence demande 9 000 € HT pour un rachat de droits.
- Une nouvelle agence propose 14 500 € HT pour repartir de zéro en six semaines.
- Un thème premium coûte 79 €/an sur le compte de l’agence ; une partie du code vient d’un freelance et une autre a été assistée par IA.

| Option | Coût direct initial | Coûts additionnels à chiffrer | Risque à mesurer |
|---|---:|---|---|
| Négocier la remise | 9 000 € | audit technique, licences, transfert, maintenance, garantie de chaîne | paiement sans code exploitable ou droits incomplets |
| Procédure | devis avocat/commissaire de justice à obtenir | délai, référé/fond, maintien de l’acquisition de leads, expertise | issue et délai non garantis |
| Redévelopper | 14 500 € | migration SEO, formulaires, contenu, tests, hébergement, maintenance | perte de conversion, délai, nouvelle clause mal rédigée |

La décision ne doit pas être « 9 000 < 14 500 ». Il faut calculer :

`Coût de sortie = facture + audit + migration + licences + temps interne + perte de marge pendant l’interruption + maintenance à 12/36/60 mois.`

Pour une activité qui reçoit 50 demandes mensuelles, une baisse temporaire de 20 % pendant deux mois représente 20 demandes non reçues ; la marge unitaire doit être renseignée par le dirigeant. Cet exemple montre la méthode, pas une perte universelle.

### Sensibilités obligatoires

Tester au moins : 0/2/6 semaines d’interruption, 0/20/50 % de baisse des leads, 0/3/10 jours d’audit, 79 €/an transférable ou non, 0/25/50 % de dépassement de redéveloppement, et maintenance 12/36/60 mois. Le guide doit montrer à quel seuil l’option « repartir de zéro » devient rationnelle.

## 8. Position professionnelle et contre-cas

**Position recommandée :** sécuriser d’abord le domaine, les comptes, les sauvegardes et l’export ; contractualiser ensuite les droits sur le spécifique, en séparant clairement le préexistant, les briques tierces et les créations du projet. Pour un site vitrine peu différenciant, il est souvent plus rationnel de rendre la sortie techniquement possible que de payer une cession exhaustive. Pour un configurateur, un espace client ou un tunnel qui porte le chiffre d’affaires, la preuve de restauration, la licence de continuité et éventuellement l’escrow peuvent valoir plus qu’un titre juridique difficile à exploiter.

**Contre-cas à dire franchement :**

- Sur Wix/Shopify, acheter « le code » de la plateforme n’est pas possible ; il faut négocier export, domaine, données et reconstruction.
- Une cession ne couvre pas automatiquement une police, un thème ou une extension tierce ; la licence peut devoir être rattachée au compte du client.
- Le code peut être juridiquement cessible mais techniquement inutilisable sans secrets, historique, build, base et documentation.
- Une licence de continuité peut suffire si le prestataire conserve un framework réutilisable ; exiger tout le background IP peut renchérir inutilement le projet.
- Une clause ne remplace jamais un test de restauration et un administrateur interne.

## 9. Conversion et ressource téléchargeable

Le CTA de contrôle technique est crédible et bien borné. Pour convertir sans faire de promesse juridique, ajouter une ressource gratuite : **« Grille de propriété et de réversibilité d’un site — 14 accès, 8 preuves, 5 questions contractuelles »**. Elle devrait contenir :

- un tableau de comptes avec propriétaire, MFA, secours, facturation, dernière sauvegarde et test ;
- une annexe Background / Foreground / Third Party / licence ;
- un mini-modèle de clause explicitement soumis à validation d’un avocat ;
- le calculateur rachat / procédure / redéveloppement avec hypothèses ;
- un message de passation et une checklist de restauration.

Le formulaire peut demander entreprise, URL, CMS/stack, prestataire actuel et urgence. Il ne faut pas promettre une qualification juridique gratuite : proposer un audit technique borné et recommander l’avocat pour les droits.

## 10. P0/P1/P2 explicites

### P0 — 0

Aucun faux témoignage présenté comme client, aucune garantie de résultat, aucun tarif de cession présenté comme barème de marché et aucun conseil juridique personnalisé n’a été repéré dans la page. Les formulations prudentes et le disclaimer réduisent le risque immédiat.

### P1 — 11

1. **P1-01 — Fil rouge chiffré absent** : intégrer l’arbitrage Alp’Isolation annoncé dans le dossier (21 600 €, 9 000 €, 14 500 €, 79 €/an) en le marquant illustratif et en séparant faits/hypothèses.
2. **P1-02 — Aucun TCO de sortie** : calculer coût de cession, procédure, redéveloppement, migration, maintenance, interruption et valeur des leads à 12/36/60 mois.
3. **P1-03 — Modèle de clause promis mais absent** : ajouter un exemple court, annoté et non juridique, couvrant œuvre, droits, destination, territoire, durée, prix, préexistant et tiers.
4. **P1-04 — Licence/cession/exclusivité insuffisamment comparées** : créer un tableau des droits obtenus, de la possibilité de changer de prestataire et des limites de chaque formule.
5. **P1-05 — Titularité du domaine à nuancer** : parler de registrant, compte et contrôle du transfert ; ne pas assimiler automatiquement titulaire .fr et propriété générale du site.
6. **P1-06 — 14 accès non auditables** : ajouter propriétaire, administrateur de secours, MFA, sauvegarde, test de restauration, facturation et statut pour chaque accès.
7. **P1-07 — Chaîne de sous-traitance sans preuve contractuelle** : fournir la garantie à demander sur salariés, freelances, offshore, stagiaires et sous-traitants, avec distinction des règles françaises.
8. **P1-08 — Plateformes incomplètes** : couvrir ou borner Webflow, HubSpot et Squarespace ; dater les limites d’export et ne pas extrapoler Wix/Shopify.
9. **P1-09 — IA sans protocole de provenance** : ajouter revue humaine, dépendances, licences, secrets hors dépôt, journaux et clause de garantie, sans affirmer un taux de code IA.
10. **P1-10 — Continuité technique non prouvée** : ajouter un test de build/restauration, versions, documentation, variables, base et scénario de changement de prestataire.
11. **P1-11 — Coût de l’entiercement et déclencheurs non chiffrés** : distinguer dépôt, vérification, mises à jour, frais annuels et conditions de remise ; l’APP n’est pas une référence de prix éternelle.

### P2 — 8

1. **P2-01 — Benchmark international invisible** : ajouter une courte boîte « ce qui varie selon les pays » avec France/UK/Australie/États-Unis et renvoi aux sources datées.
2. **P2-02 — Sources non datées dans la page** : afficher date de consultation/édition pour lois, AFNIC, Wix, Shopify et APP ; surveiller les changements de forfait.
3. **P2-03 — Ressource téléchargeable absente** : publier la grille 14 accès / 8 preuves / 5 questions et la versionner.
4. **P2-04 — SEO FAQ à vérifier** : vérifier en build la présence effective du balisage attendu et la cohérence Article/Breadcrumb/FAQ ; aucun claim n’est validé ici.
5. **P2-05 — Cas de taille manquant** : ajouter TPE sans code, PME multi-sites et application critique pour éviter que le cas 11 salariés ne paraisse universel.
6. **P2-06 — CTA à qualifier** : distinguer audit technique, accompagnement de reprise et avis juridique ; réduire tout risque de confusion dans le formulaire.
7. **P2-07 — Accessibilité des longues listes** : tester tableaux, listes, ancres et contraste en 320–1600 px ; l’audit ne l’a pas exécuté.
8. **P2-08 — Date de registre** : mettre à jour `dateModified` seulement après la réécriture vérifiée, sans toucher au registre dans cet audit.

### État des portes

- **P1 : dossier historique présent mais incomplet au regard du benchmark.** Le dossier de recherche est substantiel et signale déjà les trous, mais plusieurs livrables annoncés n’existent pas dans la page.
- **P2 : contenu courant à corriger.** Les corrections sont prescrites, pas livrées par ce rapport.
- **P3 : REJETÉE / non validée sur ce snapshot.** Aucune validation de réécriture, build, données structurées, exports ou restauration n’est accordée.
- **P4 : REJETÉE / non validée tant que le score reste inférieur à 90 et que la QA n’est pas exécutée.** Ne pas conclure à la publication de référence, à l’indexation ou à la production.

## 11. Scorecard indépendante

| Axe | Note | Motif |
|---|---:|---|
| Intention de recherche | 9/10 | Répond au besoin juridique et opérationnel de sortir d’une relation prestataire. |
| Décision dirigeant | 7/10 | Bon plan d’action mais aucun arbitrage chiffré ni TCO de sortie. |
| Pédagogie | 9/10 | Langue humaine, tableaux, message type et disclaimer clair. |
| Profondeur | 8/10 | Droit, technique, SaaS, licences, IA et accès ; livrables annoncés manquants. |
| Preuves | 9/10 | Nombreuses sources primaires et prudence sur les sources secondaires ; dates absentes dans la page. |
| Comparaison | 7/10 | Plateformes comparées qualitativement, cession/licence et scénarios économiques non comparés. |
| Originalité | 9/10 | Triptyque droits + accès + standardité, très pertinent pour un dirigeant. |
| Qualité rédactionnelle | 8/10 | Ton professionnel et lisible ; densité juridique à alléger par cas et tableaux. |
| Conversion | 8/10 | CTA borné et liens internes ; ressource téléchargeable et preuve de valeur manquantes. |
| SEO / produit | 8/10 | Intentions, maillage, Article/Breadcrumb et FAQ visible ; dates et QA restent à vérifier. |
| **Total** | **82/100** | Socle fort, mais trois livrables décisionnels essentiels absents. |

## 12. Plan P1–P4 conforme au workflow maître

### P1 — recherche et cadrage

Revalider AFNIC, Service Public, Légifrance, Wix, Shopify et les tarifs APP ; dater toutes les conditions ; compléter le benchmark international ; figer le cas Alp’Isolation, le TCO 12/36/60, les sensibilités, la matrice des accès et le plan de clause. Cette passe produit le dossier de preuves et les hypothèses, sans encore réécrire la page.

### P2 — rédaction et intégration

Intégrer le cas chiffré et le TCO ; publier le modèle de clause annoté ; créer les matrices cession/licence, accès, composants et chaîne de sous-traitance ; compléter les plateformes ; formaliser le protocole IA et la restauration ; publier la grille téléchargeable et clarifier le CTA technique/juridique.

### P3 — contre-audit indépendant

Recalculer les scénarios, chercher les coûts et limites oubliés, tester les liens, vérifier chaque formulation de droit, comparer le rendu aux sources et contrôler Article/Breadcrumb/FAQ dans le HTML généré. Cette passe doit être effectuée par un regard indépendant de l’auteur de la réécriture.

### P4 — plume humaine et QA complète

Relire par un dirigeant non juriste, supprimer les abstractions et répétitions, tester navigateur 320–1600 px, tableaux, ancres et accessibilité, puis effectuer le test de sauvegarde/restauration et de changement de prestataire sur un environnement de démonstration. Vérifier ensuite l’URL de production et ne déclarer comme indexé que ce qui est constaté dans les outils concernés.

## 13. Conditions de sortie « référence »

Le score peut viser 90+ lorsque :

- le cas Alp’Isolation est présenté comme exemple, avec TCO et sensibilités ;
- la clause courte et son annexe des briques non cédables sont visibles ;
- les 14 accès sont testables et chaque plateforme expose ses limites datées ;
- la cession, la licence et la continuité sont comparées sans promesse juridique ;
- les sources primaires et leurs dates sont affichées ;
- la ressource téléchargeable et le CTA borné sont en place ;
- la QA P3/P4 est réellement exécutée et documentée séparément.

## Sources consultées le 24/07/2026

- Service Public Entreprendre — https://entreprendre.service-public.gouv.fr/vosdroits/F22667 (vérifié 03/05/2024).
- Légifrance, art. L131-3 CPI — https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958.
- Légifrance, art. L111-1 CPI — https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278868.
- Légifrance, art. L113-9 CPI — https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039279818.
- AFNIC, Guide pratique du titulaire .fr — https://www.afnic.fr/wp-media/uploads/2024/07/Afnic-Guide-pratique-du-Titulaire.pdf (édition 2024).
- APP, cession/licence/transfert — https://www.app.asso.fr/depot/cession-licence-et-transfert-de-droit-tout-comprendre.html (consulté 24/07/2026).
- U.S. Copyright Office, AI Part 2 — https://www.copyright.gov/newsnet/2025/1060.html (29/01/2025).
- GOV.UK copyright — https://www.gov.uk/using-somebody-elses-intellectual-property/copyright (consulté 24/07/2026).
- GOV.UK IP Rights Guidance Note — https://www.gov.uk/government/publications/the-digital-data-and-technology-playbook/intellectual-property-rights-guidance-note-html (consulté 24/07/2026).
- IP Australia — https://www.ipaustralia.gov.au/understanding-ip/who-owns-ip (consulté 24/07/2026).
- Arts Law Australia — https://www.artslaw.com.au/information-sheet/website-development/ (consulté 24/07/2026).
- Sprintlaw Australia — https://sprintlaw.com.au/articles/software-development-contracts-in-australia-what-to-include/ (consulté 24/07/2026).
- Wix Help Center — https://support.wix.com/en/article/exporting-or-embedding-your-wix-site-elsewhere (consulté 24/07/2026).
- Shopify Help Center — https://help.shopify.com/fr/manual/products/import-export/using-csv (consulté 24/07/2026).
- TechRadar Pro — https://www.techradar.com/pro/do-you-really-own-your-website (29/09/2025).
- Escode — https://www.escode.com/resources/what-is-source-code-escrow/ (consulté 24/07/2026).
