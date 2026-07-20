# Brief de rédaction — « Transformer un fichier Excel en application métier »

- **Sujet** : passer d'un classeur Excel à un outil métier — limites réelles d'Excel, no-code (Airtable, Power Apps, Retool, Glide, Grist, Baserow), ou développement sur mesure.
- **Format cible** : guide de 4 500 à 5 500 mots, `src/app/guides/transformer-excel-en-application/`.
- **Éditeur** : Hagnéré Code, agence web full-stack, 82 impasse de Bellevue, 73000 Bassens (près de Chambéry, Savoie).
- **Lecteur** : dirigeant ou gérant de PME/TPE non technique, 5 à 30 salariés, qui a déjà reçu au moins un devis ou vu une démo.
- **Date de collecte des données** : 19/07/2026. Tous les tarifs et limites ci-dessous sont datés de ce relevé.
- **Conformité projet** : lire `docs/charte-qualite-guides.md` en intégralité avant d'écrire. Funnel lead-only : aucune tarification temps réel ni estimation automatique sur la page. Domaine `https://hagnere-code.ai`.

---

## 1. Angle unique

**Le seul guide de la SERP qui pose le calcul à 4 ans, nomme le pays d'hébergement de chaque outil, et explique ce qu'il faut faire signer pour posséder réellement son code — y compris quand la conclusion est « ne rien refaire ».**

Le top 10 est composé à 100 % d'acteurs qui vendent la conclusion : agences sur-mesure qui concèdent poliment le no-code aux « petits besoins », ou sites affiliés qui présupposent le no-code. Aucun n'additionne un coût total, aucun ne dit où partent les données, aucun n'envisage l'échec, et aucun ne défend l'option la moins chère — améliorer l'existant.

Trois promesses tenues dans le guide, qui n'existent nulle part ailleurs sur cette requête :

1. **Comparer des chiffres comparables.** Un abonnement par siège et par mois n'est pas un devis de développement. Le guide donne la structure du calcul sur 4 ans, licences officielles à l'appui, et laisse le lecteur y mettre ses propres montants.
2. **Dire où sont les données.** Glide : 100 % États-Unis, aucune option hors États-Unis. Airtable et Notion : États-Unis par défaut, résidence UE réservée aux plans Enterprise. Ce sont des faits vérifiables dans la documentation des éditeurs, absents de 10 pages sur 10.
3. **Se déconseiller quand c'est justifié.** Le guide dit explicitement dans quels cas Hagnéré Code recommande de ne PAS faire de développement sur mesure : Power Query et une table structurée sur SharePoint Online, ou une base no-code, suffisent à une partie réelle des cas.

**Positionnement de ton** : on parle à un dirigeant qui sait lire un bilan mais pas un schéma de base de données. Zéro jargon non défini, zéro condescendance, zéro dramatisation. On ne fait jamais peur avec des statistiques : on donne des méthodes de vérification que le lecteur peut appliquer seul, en trente secondes, sur le devis qu'il a sous les yeux.

---

## 2. Fil rouge éditorial

**Nathalie, gérante d'une PME de maintenance industrielle à Montmélian (Savoie), 14 salariés.**

*(Personnage composite fictif, construit pour illustrer les calculs. À présenter comme tel dans le guide — jamais comme un client réel ni comme un témoignage.)*

Situation de départ, chiffrée et cohérente d'un bout à l'autre du guide :

| Élément | Valeur retenue |
| --- | --- |
| Fichier | `Suivi_interventions_2026_v7_FINAL.xlsx`, 6 onglets |
| Volume | 38 000 lignes cumulées depuis 2019 |
| Personnes devant écrire dans le fichier | 12 (dont 5 techniciens en déplacement) |
| Emplacement | NAS du bureau, partage réseau classique |
| Symptôme quotidien | « fichier verrouillé par un autre utilisateur » plusieurs fois par jour |
| Temps de consolidation et de ressaisie | ≈ 4 h par semaine, hypothèse de travail assumée |

Pourquoi ces chiffres et pas d'autres — chaque valeur sert un chapitre :

- **12 utilisateurs** : c'est exactement la base des calculs de licences à 4 ans du dossier (Airtable, Grist, Baserow, Power Apps, Glide, Retool).
- **38 000 lignes** : au-dessus du plafond gratuit de tous les outils (Airtable Free 1 000, Grist Free 5 000, Baserow Free 3 000), au-dessus du seuil d'affichage SharePoint (≈ 5 000 par vue), au-dessus des 25 000 lignes de tableur de Glide, mais dans le plan Airtable Team (50 000 par base). Le fil rouge tombe donc pile sur la zone où l'arbitrage est réellement difficile.
- **NAS du bureau** : c'est LA cause du verrouillage, et elle rend la co-édition techniquement impossible (voir §5). Le chapitre « option zéro » démarre là.
- **4 h/semaine** : sert au calcul du coût du statu quo au coût horaire INSEE — présenté comme une hypothèse à remplacer par la mesure du lecteur, jamais comme une donnée.

Trois moments où Nathalie revient dans le texte : le diagnostic (§2 du plan), le calcul à 4 ans (§8), l'arbre de décision final (§16). Ne pas la faire réapparaître à chaque H2, sinon le procédé s'use.

---

## 3. Les 15 trous du top 10 (ce que les concurrents ne traitent pas)

| # | Trou | Traité dans le H2 n° |
| --- | --- | --- |
| 1 | Coût total sur 3 à 5 ans jamais additionné | 8 |
| 2 | Réversibilité et lock-in : comment on sort | 13 |
| 3 | Propriété du code et clauses contractuelles | 12 |
| 4 | Risque d'échec, signaux d'alerte, plan B | 15 |
| 5 | RGPD, localisation des serveurs, article 28 | 10 |
| 6 | Coût interne caché en temps salarié | 9 |
| 7 | Scénario « ne rien refaire » | 4 |
| 8 | Vrai coût de Power Apps sous Microsoft 365 | 6 |
| 9 | Qui maintient après la livraison, shadow IT no-code | 14 |
| 10 | Qualité des données de départ | 2 et 9 |
| 11 | Migration de l'historique et conservation légale | 11 |
| 12 | Arbre de décision neutre | 16 |
| 13 | Passage du no-code au sur-mesure | 5 et 13 |
| 14 | Sécurité d'exploitation, sauvegardes, reprise | 14 |
| 15 | Sources statistiques défaillantes sur toute la SERP | 3 |

Détail des trous les plus structurants :

- **Coût total (n°1)** — un seul concurrent (Genee) donne un coût de run (100 à 400 €/mois) mais ne le multiplie jamais par 36 ou 60 mois. Résultat : le dirigeant compare un devis de 15 k€ à un abonnement à 9 €/mois. Deux chiffres non comparables.
- **Réversibilité (n°2)** — sortir de Glide, d'Airtable ou de Power Apps signifie perdre l'interface, les automatisations et les vues. On n'exporte que des données brutes, c'est-à-dire qu'on revient à un tableur. Aucune page ne mentionne la clause de réversibilité, le format d'export ni le délai de restitution.
- **Propriété du code (n°3)** — Genee cite « propriété du code » comme argument commercial ; aucune page n'explique ce qu'il faut signer. C'est le point le plus coûteux à découvrir après coup, absent de 10 pages sur 10.
- **Risque d'échec (n°4)** — pas une page n'envisage que le projet rate. Toutes les études de cas sont des succès. Un dirigeant ressort de cette SERP en croyant à un risque nul.
- **Maintenance et shadow IT (n°9)** — le mode d'échec le plus fréquent du no-code en PME : l'application montée par un salarié qui quitte l'entreprise et que plus personne ne sait modifier. Zéro page l'évoque.
- **Arbre de décision neutre (n°12)** — aucune source institutionnelle (CCI, Bpifrance, France Num) dans la SERP, aucun retour de dirigeant non sponsorisé.

---

## 4. Faits solides — chiffre exact, source, URL, date, fiabilité

> Règle absolue : ne publier aucun chiffre absent de cette section. Toute donnée citée dans le guide doit être datée et attribuée dans le corps du texte, pas seulement en note.

### 4.1 Excel — limites de format

- **1 048 576 lignes et 16 384 colonnes par feuille ; 32 767 caractères par cellule ; 65 490 formats de cellule uniques par classeur ; 64 niveaux d'imbrication de fonctions ; 255 arguments par fonction. Excel 32 bits : 2 Go d'espace d'adressage virtuel partagé, le modèle de données consommant 500 à 700 Mo.**
  - Source : Microsoft Support, « Excel specifications and limits » — https://support.microsoft.com/en-us/office/excel-specifications-and-limits-1672b34d-7043-467e-8e27-269d656771c3 — page produit maintenue en continu, consultée le 19/07/2026.
  - Fiabilité : **solide** (source primaire éditeur).
  - Précaution d'usage impérative : ce sont des limites de **format**, pas des limites d'usage. Un fichier de PME devient ingérable très en deçà. **Ne jamais citer « 1 million de lignes » comme preuve qu'Excel suffit.**

### 4.2 Excel — co-édition

- **Trois conditions cumulatives pour la co-édition : abonnement Microsoft 365 + format .xlsx/.xlsm/.xlsb (le format Strict Open XML est exclu) + stockage sur OneDrive, OneDrive Entreprise ou SharePoint Online. SharePoint on-premises ne supporte PAS la co-édition. Zéro co-édition sur un partage réseau classique.**
  - Source : Microsoft Support, « Collaborate on Excel workbooks at the same time with co-authoring » — https://support.microsoft.com/en-us/office/collaborate-on-excel-workbooks-at-the-same-time-with-co-authoring-7152aa8b-b791-414c-a3bb-3024e46fb104 — consultée le 19/07/2026.
  - Fiabilité : **solide**.
  - Pourquoi c'est décisif : la majorité des PME qui se plaignent du verrouillage stockent leur Excel sur un serveur de fichiers local ou un NAS, cas où la co-édition est techniquement impossible. **Le problème n'est pas Excel, c'est l'emplacement du fichier.** C'est le point d'entrée du chapitre « option zéro ».

- **Si UNE SEULE personne ouvre le fichier avec une version d'Excel incompatible, tous les autres reçoivent l'erreur « verrouillé », même s'ils utilisent tous une version compatible. 1 utilisateur non conforme = 100 % des autres bloqués.**
  - Source : même page Microsoft Support, consultée le 19/07/2026.
  - Fiabilité : **solide** (formulation explicite de la documentation éditeur).
  - Explique le vécu réel des PME (« ça marche parfois »), cause jamais donnée par le top 10.

### 4.3 SharePoint Online et OneDrive

- **Une liste ou bibliothèque SharePoint accepte jusqu'à 30 millions d'éléments, mais le seuil d'affichage de liste (List View Threshold) est fixé à environ 5 000 éléments et Microsoft indique qu'il ne peut PAS être modifié sur SharePoint Online.**
  - Sources : Microsoft Support, « List View Threshold for large lists and libraries » — https://support.microsoft.com/en-us/sharepoint/lists/data-and-lists/list-view-threshold-for-large-lists-and-libraries — et Microsoft Learn — https://learn.microsoft.com/en-us/troubleshoot/sharepoint/lists-and-libraries/items-exceeds-list-view-threshold — consultées le 19/07/2026.
  - Fiabilité : **solide** (deux pages Microsoft concordantes).
  - C'est LA limite qui condamne le scénario « on migre juste vers une liste SharePoint » au-delà de quelques milliers de lignes actives. Absente de toutes les pages concurrentes. Le fil rouge (38 000 lignes) tombe très au-dessus.

- **250 Go maximum par fichier unique sur OneDrive et SharePoint Online.**
  - Sources : Microsoft, « Restrictions and limitations in OneDrive and SharePoint » ; Microsoft Tech Community, « Gain more flexibility with 250 GB file size support in Microsoft 365 » — https://techcommunity.microsoft.com/blog/onedriveblog/gain-more-flexibility-with-250-gb-file-size-support-in-microsoft-365/1847728 — consultées le 19/07/2026.
  - Fiabilité : **solide**.
  - Usage : désamorcer un faux argument. La taille de fichier n'est presque jamais le blocage réel d'un Excel de PME ; le blocage est le nombre d'utilisateurs simultanés et l'absence d'historique par ligne.

### 4.4 Airtable

- **Enregistrements par BASE : 1 000 (Free), 50 000 (Team), 125 000 (Business). Appels API par espace de travail et par mois : 1 000 (Free), 100 000 (Team), illimité (Business). Pièces jointes par base : 1 Go / 20 Go / 100 Go. Free : 5 créateurs-éditeurs et 50 commentateurs.**
  - Source : Airtable Support, « Airtable plans » — https://support.airtable.com/docs/airtable-plans — relevé le 19/07/2026.
  - Fiabilité : **solide**.
  - Chiffre décisif jamais cité dans le top 10 : un Excel de PME de 200 000 lignes ne rentre dans **aucun** plan Airtable en libre-service — il faut passer en Enterprise Scale, dont le tarif n'est pas public.

- **Historique de révision limité dans le temps : 2 semaines (Free), 1 an (Team), 1 an (Business).**
  - Source : idem, relevé le 19/07/2026.
  - Fiabilité : **solide**.
  - Contredit frontalement l'argument marketing « traçabilité complète » : une PME soumise à une conservation comptable de dix ans ne peut pas s'appuyer sur l'historique Airtable comme piste d'audit. À croiser avec §4.11 (article L123-22 du Code de commerce).

### 4.5 Grist

- **Enregistrements par DOCUMENT : 5 000 (Free), 100 000 (Pro), 150 000 (Business). Snapshots : 30 jours / 3 ans / 5 ans. Minimum 5 utilisateurs sur Business, 50 sur Enterprise.**
  - Source : Grist Labs, page tarifs officielle — https://www.getgrist.com/pricing/ — relevé le 19/07/2026.
  - Fiabilité : **solide**.

- **Grist est la seule des plateformes examinées à proposer une édition Community entièrement open source et auto-hébergeable gratuitement, publiée sur GitHub, avec support communautaire. 1 plateforme sur 5.**
  - Source : idem, section « Self-Hosted ».
  - Fiabilité : **solide**.
  - Rôle dans le guide : contre-exemple factuel du chapitre lock-in. L'auto-hébergement d'un outil open source est la seule configuration où le lock-in de plateforme est structurellement nul, au prix d'un coût d'exploitation interne à assumer. À traiter sans en faire une recommandation par défaut.

### 4.6 Baserow

- **Lignes par ESPACE DE TRAVAIL : 3 000 (Free), 50 000 (Premium), 250 000 (Advanced), 1 000 000 (Enterprise). Stockage : 2 Go / 20 Go / 100 Go / 1 000 Go. Crédits d'automatisation mensuels : 2 000 / 100 000 / 500 000 / 2 000 000.**
  - Source : Baserow, page tarifs officielle — https://baserow.io/pricing — relevé le 19/07/2026.
  - Fiabilité : **solide**.
  - Piège à signaler au lecteur : la limite Baserow porte sur l'espace de **travail**, celle d'Airtable sur la **base**. Deux plafonds qui ne se comparent pas directement — piège classique des comparatifs affiliés.

### 4.7 Glide

- **25 000 lignes de tableur sur tous les plans ; lignes « high-scale » : 25 000 (Explorer), 50 000 (Maker), 100 000 (Business). Mises à jour incluses : 250 / 500 / 5 000, puis 0,02 $ par mise à jour supplémentaire. Business : 199 $/mois en facturation annuelle, 30 utilisateurs inclus puis 5 $ par utilisateur supplémentaire en annuel (6 $ en mensuel), 500 Go de stockage.**
  - Source : Glide, page tarifs officielle — https://www.glideapps.com/pricing — relevé le 19/07/2026.
  - Fiabilité : **moyenne** — les tarifs des plans Explorer et Maker ne s'affichaient pas au relevé ; devise non confirmée en euros ; aucune mention HT/TTC.
  - À souligner : le modèle de facturation à l'usage (0,02 $ par mise à jour au-delà du quota) rend le coût mensuel **imprévisible**. C'est précisément le type de tarification qu'un dirigeant ne peut pas budgéter à trois ans.

### 4.8 Retool

- **Trois populations facturées distinctement : « builders » (qui construisent), « internal users » (salariés qui utilisent), « external users » (hors organisation, gratuits jusqu'à 50 puis dégressifs). Sur le plan Business, un builder coûte plus de trois fois le prix d'un utilisateur interne : 46 € par builder/mois contre 14 € par utilisateur interne/mois.**
  - Source : Retool, page tarifs officielle — https://retool.com/pricing — relevé le 19/07/2026 depuis la France, affichage en euros.
  - Fiabilité : **moyenne** — la page comporte un sélecteur « Pay annually / Pay monthly » et la périodicité correspondant aux montants relevés n'a pas pu être établie ; des sources tierces annoncent 65 $/builder mensuel et 50 $/builder annuel. **Incohérence non résolue : voir §10, ne pas publier sans nouveau relevé.**

- **Retool propose une option d'auto-hébergement sur ses plans Free et Startup, permettant un déploiement dans l'infrastructure du client, derrière son VPN et dans son propre VPC.**
  - Source : Retool, blog officiel, « Introducing a self-hosted option for our Free and Startup plans » — https://retool.com/blog/self-hosted-retool-plans — consulté le 19/07/2026.
  - Fiabilité : **moyenne** — article non daté dans le résultat obtenu, non recoupé avec la page tarifs qui n'affiche pas l'option lisiblement. À revérifier avant publication.

### 4.9 Power Apps — le chapitre le plus différenciant

- **Power Apps Premium : 17,30 € HT par utilisateur et par mois (engagement annuel) sur le site Microsoft France. 10,40 € HT par utilisateur/mois à partir de 2 000 postes. Capacité Dataverse supplémentaire : 34,70 € HT par Go et par mois. Plan Développeur : gratuit, environnements non productifs uniquement.**
  - Source : Microsoft France, page tarifs Power Apps — https://www.microsoft.com/fr-fr/power-platform/products/power-apps/pricing — relevé le 19/07/2026. Mention affichée textuellement : « La T.V.A. n'est pas comprise dans le prix ».
  - Fiabilité : **solide**.
  - **C'est le seul tarif de tout le dossier dont le caractère HT et la devise euro sont explicitement confirmés par l'éditeur.**

- **Le plan Power Apps Premium n'inclut que 250 Mo de base de données Dataverse et 2 Go de stockage de fichiers.**
  - Source : Microsoft, pages tarifs Power Apps US et FR — https://www.microsoft.com/en-us/power-platform/products/power-apps/pricing — relevé le 19/07/2026.
  - Fiabilité : **solide**.
  - 250 Mo, c'est très peu. C'est le vrai piège budgétaire de Power Apps, jamais mentionné dans les pages du top 10.

- **Les connecteurs SQL Server et Dataverse n'apparaissent PAS dans la liste officielle Microsoft des connecteurs Standard, alors que SharePoint et Excel Online (Business) y figurent. Toute application qui utilise un seul connecteur premium oblige CHAQUE utilisateur de cette application à détenir une licence Power Apps payante. Zéro occurrence de SQL Server ou Dataverse dans la liste Standard ; 1 connecteur premium = 100 % des utilisateurs à licencier.**
  - Sources : Microsoft Learn, « List of all Standard tier connectors » — https://learn.microsoft.com/en-us/connectors/connector-reference/connector-reference-standard-connectors — page mise à jour le 17/07/2026, vérifiée par recherche exhaustive dans la liste le 19/07/2026 ; complété par Microsoft Learn, « Power Apps licensing FAQs » — https://learn.microsoft.com/en-us/power-platform/admin/powerapps-licensing-faq
  - Fiabilité : **solide** (vérification faite en recherchant directement « SQL » et « Dataverse » dans la liste Standard complète : zéro occurrence).
  - **C'est la réponse au trou n°8.** Une PME sous Microsoft 365 peut construire gratuitement une app sur SharePoint ou Excel Online, mais dès qu'elle touche à SQL ou Dataverse, la facture bascule à 17,30 € HT × tous les utilisateurs.

- **La licence « Power Apps pour Microsoft 365 » incluse dans un abonnement M365 permet de créer, exécuter et partager des applications sur les données Microsoft 365 et les connecteurs standard, mais exclut explicitement trois choses : l'accès aux données on-premises, les connecteurs premium, les connecteurs personnalisés.**
  - Source : Microsoft Learn, « Licensing overview for Microsoft Power Platform » — https://learn.microsoft.com/en-us/power-platform/admin/pricing-billing-skus — page mise à jour le 11/07/2026, consultée le 19/07/2026.
  - Fiabilité : **solide** (tableau de capacités officiel, ligne par ligne).
  - Permet enfin de répondre à la question qui décide pour un dirigeant déjà équipé Microsoft : ce qui est gratuit, et où commence la facture.

### 4.10 Hébergement et RGPD — les faits que personne ne publie

- **Glide héberge la totalité des données de ses clients aux États-Unis (Google Cloud, Iowa) et ne propose AUCUNE option d'hébergement hors des États-Unis. 0 option hors États-Unis.**
  - Sources : Glide, Centre d'aide, « GDPR, EU Compliance, and Glide Servers » — https://help.glideapps.com/en/articles/9528015-gdpr-eu-compliance-and-glide-servers — et https://www.glideapps.com/legal/subprocessors — consultées le 19/07/2026.
  - Fiabilité : **solide**.
  - Fait majeur absent des 10 pages concurrentes : une PME qui migre un Excel RH ou clients vers Glide transfère des données personnelles hors UE, ce qui impose une base légale de transfert et un contrat article 28.

- **Airtable héberge par défaut aux États-Unis (AWS). La résidence européenne (AWS Francfort, sauvegardes Dublin) n'est disponible QUE sur le plan Enterprise Scale, dont le tarif n'est pas public — et même dans ce cas, les données d'authentification, les métadonnées et les données de support restent stockées aux États-Unis.**
  - Sources : Airtable Support, « European data residency at Airtable » — https://support.airtable.com/docs/european-data-residency-at-airtable — « Data residency at Airtable » — https://support.airtable.com/docs/data-residency-at-airtable — liste des sous-traitants https://www.airtable.com/company/subprocessors — consultées le 19/07/2026.
  - Fiabilité : **solide** (trois pages officielles concordantes).
  - La nuance « même en résidence UE, une partie des données reste aux US » est exactement le type d'information qu'aucun comparatif affilié ne relaie.

- **Notion héberge par défaut les espaces de travail aux États-Unis (AWS). La résidence européenne (Francfort, Dublin) est réservée au plan Enterprise, et la migration d'un espace existant des États-Unis vers l'UE n'est pas en libre-service : elle exige de passer par l'équipe commerciale.**
  - Sources : Notion, Centre d'aide, « Data residency for Notion » — https://www.notion.com/help/data-residency — et « Security practices » — https://www.notion.com/help/security-and-privacy — consultées le 19/07/2026.
  - Fiabilité : **solide**.
  - Conclusion à écrire noir sur blanc : **les trois outils no-code les plus cités en France (Airtable, Notion, Glide) hébergent par défaut hors UE.**

### 4.11 Coût du travail et contexte français

- **Coût horaire du travail en France : 45,6 € dans les secteurs marchands au 1er trimestre 2026 (+2,3 % sur un an) ; 44,7 € en moyenne 2025 dans le secteur marchand non agricole.**
  - Sources : INSEE, Informations Rapides n°142, « Au premier trimestre 2026, les salaires horaires augmentent de 2,0 % sur un an, le coût horaire du travail de 2,3 % » — https://www.insee.fr/fr/statistiques/9006840 — publié en 2026 ; INSEE, « Salaires et coût du travail en Europe » — https://www.insee.fr/fr/statistiques/8733109 — consultées le 19/07/2026.
  - Fiabilité : **solide** (organisme public, publication datée, méthodologie Eurostat, entreprises de 10 salariés et plus, secteur marchand non agricole).
  - **C'est LA base de calcul honnête** du coût réel du fichier Excel et du coût interne caché du projet. Au lieu d'un chiffre inventé, on multiplie des heures observées par un coût horaire officiel. **Utiliser 45,6 € comme coût employeur, jamais comme salaire net.**

- **Baromètre France Num 2025 : 11 021 entreprises interrogées dont 7 878 PME ; 88 % des PME équipées d'au moins une solution de gestion ; 69 % disposant d'un logiciel de facturation (86 % pour les PME de plus grande taille) ; 75 % exploitant leurs données pour piloter leur activité.**
  - Sources : France Num / Direction générale des Entreprises, Baromètre France Num 2025, 6e édition — https://www.francenum.gouv.fr/guides-et-conseils/strategie-numerique/comprendre-le-numerique/barometre-france-num-2025-le — rapport PDF https://www.francenum.gouv.fr/files/2025-09/Barometre%20France%20Num%202025%20-%20Rapport.pdf — publié le 29/09/2025 ; repris par https://www.economie.gouv.fr/actualites/transformation-numerique-des-tpepme-les-enseignements-du-barometre-2025-de-france-num
  - Fiabilité : **moyenne** — le PDF primaire n'a pas pu être ouvert ; les chiffres proviennent des pages HTML de francenum.gouv.fr et economie.gouv.fr, deux sources gouvernementales concordantes mais secondaires. Voir §10.
  - Rôle : **seule source neutre et institutionnelle du dossier**, ce qui répond directement au trou n°12.

### 4.12 Erreurs de tableur — la seule formulation publiable

- **Travaux de Raymond R. Panko (université de Hawaï), audits menés entre 1995 et 2004 : taux d'erreur PAR CELLULE de 3,9 % en moyenne sur 14 études de laboratoire et 5,2 % sur 13 études de terrain ; 94 % des 88 tableurs des audits les plus récents contenaient au moins une erreur, contre 24 % sur 367 tableurs dans les audits antérieurs à 1995, méthodologiquement moins rigoureux.**
  - Source : Raymond R. Panko, « What We Know About Spreadsheet Errors », Journal of End User Computing — http://panko.shidler.hawaii.edu/SSR/Mypapers/whatknow.htm et https://panko.com/ssr/ — consulté le 19/07/2026.
  - Fiabilité : **moyenne** — trois réserves : données vieilles de vingt à trente ans ; petits échantillons (88 tableurs pour le chiffre de 94 %) ; écart énorme entre audits anciens (24 %) et récents (94 %) montrant que le résultat dépend fortement de la méthode.
  - **Formulation autorisée dans le guide, mot pour mot** : « des travaux universitaires menés entre 1995 et 2004 sur de petits échantillons montrent qu'une majorité de tableaux opérationnels comportent au moins une erreur de formule ». Daté, quantifié, sans faire passer une donnée de trente ans pour un constat de 2026.

- **Fonds souverain norvégien (Norges Bank Investment Management), février 2024 : perte de 980 millions de couronnes norvégiennes (environ 92 millions de dollars, environ 86 millions d'euros) due à une erreur de calcul dans la composition de son indice de référence, ayant créé une surpondération marginale de l'obligataire américain.**
  - Sources : annonce NBIM reprise par le Financial Times, février 2024 — https://www.i-nth.com/connexion/the-norwegian-sovereign-wealth-funds-92mn-excel-error — version française : CNews, 14/02/2024 — https://www.cnews.fr/monde/2024-02-14/une-erreur-faite-sur-un-tableau-excel-fait-perdre-pres-de-86-millions-deuros-au
  - Fiabilité : **moyenne** — l'article primaire du FT est payant et n'a pas pu être lu ; la qualification « erreur Excel » vient de la presse, NBIM parlant d'une « erreur de calcul » dans la composition de l'indice.
  - Usage strict : **exemple d'ordre de grandeur, jamais une statistique**, et surtout **ne pas transposer à une PME**. Si le guide le cite, il doit citer la nuance dans la même phrase.

### 4.13 Taux d'échec des projets

- **Rapport CHAOS 2020 du Standish Group, environ 50 000 projets : 31 % de projets réussis, 50 % en difficulté, 19 % d'échecs ; taux de succès inférieur à 10 % pour les grands projets contre environ 90 % pour les petits.**
  - Sources : The Standish Group, CHAOS Report 2020 « Beyond Infinity » — https://www.standishgroup.com/ — synthèses publiques https://hennyportman.wordpress.com/2021/01/06/review-standish-group-chaos-2020-beyond-infinity/ et https://opencommons.org/CHAOS_Report_on_IT_Project_Outcomes — consultées le 19/07/2026.
  - Fiabilité : **faible**. Trois raisons : rapport primaire payant, tous les chiffres viennent de synthèses tierces ; méthodologie et sélection d'échantillon jamais publiées, critiques académiques documentées ; aucune édition depuis 2020.
  - **Ce qui est exploitable n'est pas le taux global mais la corrélation taille/échec** : les petits projets réussissent, les grands échouent. C'est un argument de **cadrage** (découper le projet), pas une statistique de peur. Si le guide le cite, il doit mentionner l'année, l'absence de méthodologie publiée et les critiques — sans quoi il reproduirait exactement le défaut qu'il dénonce.

---

## 5. Chiffres à démonter (et ce qu'il faut écrire à la place)

### 5.1 « 88 % des fichiers Excel comportent des erreurs » — attribué à « Gartner 2024 »

- **Qui le répète** : Johan Iavarone (attribution « Gartner 2024 »), Genee (attribution université de Hawaï), FP&A Trends, 4castplus, ZenQMS, Cassotis, Salesforce via Forbes BrandVoice (2014), et une grande partie des pages de vendeurs de logiciels de gestion en France et à l'international.
- **La vérité** : l'attribution à Gartner est **inventée** — aucune publication Gartner portant ce chiffre n'a pu être identifiée, et le chiffre circulait déjà largement en 2014, dix ans avant la date invoquée. La source réelle est Raymond Panko, université de Hawaï, audits 1995-2004. Surtout, le chiffre ne dit pas ce qu'on lui fait dire : Panko mesure la proportion de tableurs présentant un taux d'erreur de formule d'au moins 1 %, pas la proportion de fichiers comportant des « erreurs significatives » ou des erreurs à impact métier. Ses propres données sont très dispersées selon la méthode d'audit : 24 % sur 367 tableurs avant 1995, 94 % sur 88 tableurs après.
- **À écrire à la place** : voir la formulation autorisée en §4.12.

### 5.2 « Les erreurs de tableur coûtent en moyenne 6 000 € par incident (KPMG) »

- **Qui le répète** : Genee (genee.tech), repris de page en page dans l'écosystème français des éditeurs de logiciels métier.
- **La vérité** : aucune publication KPMG traçable ne porte ce chiffre. Aucun rapport, aucun titre, aucune date, aucun périmètre géographique, aucune définition de ce qu'est un « incident ». Le seul résultat qui remonte est la page de l'éditeur qui le cite. Un chiffre en euros ronds attribué à un grand cabinet sans référence de publication est le signal typique d'une statistique fabriquée ou déformée.
- **Consigne** : **ne pas le reprendre du tout, même pour le nuancer.** Le citer, fût-ce pour le démentir, contribue à sa circulation. Le guide peut en revanche décrire le **motif** (« un chiffre rond, un grand cabinet, aucune référence de publication ») comme signal d'alerte général.

### 5.3 « 95 % d'erreurs en moins », « 12 heures par semaine gagnées », « ROI en 30 jours »

- **Qui le répète** : l'ensemble des agences et éditeurs du top 10, dans leurs études de cas.
- **La vérité** : résultats auto-déclarés par le vendeur, sur un client choisi par lui, sans mesure avant/après documentée, sans méthodologie, sans périmètre, sans échantillon. Aucune de ces pages ne publie de cas d'échec. Valeur réelle : celle d'un témoignage commercial.
- **Contre-test à donner au lecteur** : demander au prestataire **comment le chiffre a été mesuré, sur combien de clients, et combien de projets n'ont PAS produit ce résultat.** Trois questions, trente secondes.

### 5.4 « Excel gère 1 048 576 lignes »

- **Qui le répète** : les deux camps — les défenseurs d'Excel comme les vendeurs de solutions de remplacement (« votre fichier a atteint les limites d'Excel »).
- **La vérité** : le chiffre est exact (Microsoft, spécifications officielles) mais hors sujet dans la quasi-totalité des cas de PME. Un fichier de PME devient ingérable bien avant le million de lignes, pour des raisons sans rapport avec le nombre de lignes : impossibilité d'éditer à plusieurs (verrouillage), absence d'historique par ligne, absence de contrôle d'accès par champ, règles métier enfouies dans des formules que plus personne ne sait expliquer, multiplication des copies « v3_final_VRAIE.xlsx ».
- **À écrire à la place** : **le vrai diagnostic ne se fait pas en comptant les lignes.** Il se fait en comptant les personnes qui doivent écrire dans le fichier en même temps, et en cherchant qui sait encore expliquer les formules.

### 5.5 « 70 % des projets informatiques échouent » (ou 66 %, ou 69 %) — Standish Group

- **Qui le répète** : innombrables pages de conseil, agences, cabinets, généralement sans mention de l'année ni de la méthodologie.
- **La vérité** : le chiffre existe (CHAOS 2020 : 31 % de succès, 50 % en difficulté, 19 % d'échecs, environ 50 000 projets), mais trois réserves jamais mentionnées. **Un** : méthodologie et sélection d'échantillon jamais publiées, critiques académiques documentées et répétées. **Deux** : la définition du succès est extrêmement stricte — livré dans les délais, au budget initial ET avec le périmètre convenu ; tout projet qui a bougé sur l'un des trois est classé « en difficulté », ce qui gonfle mécaniquement l'échec. **Trois** : aucune édition depuis 2020, présenter ce taux comme actuel en 2026 est faux.
- **À écrire à la place** : la ventilation par taille (petits projets ≈ 90 % de succès, grands projets < 10 %) comme argument de **découpage**, pas comme statistique anxiogène.

### 5.6 « Airtable à partir de 9 € par mois » comparé à un devis de 15 000 €

- **Qui le répète** : sites affiliés et comparatifs no-code, et par ricochet tous les dirigeants qui construisent leur arbitrage sur cette base.
- **La vérité** : deux chiffres qui ne se comparent pas. Le prix d'appel est un tarif **par siège et par mois**, hors taxes, avec un plafond d'enregistrements qui exclut la plupart des cas réels de PME. Le prix de développement est un **investissement unique**. Le seul chiffre comparable est le coût total sur la même durée et pour le même nombre d'utilisateurs. Sur les tarifs officiels du 19/07/2026 : à 12 utilisateurs sur 4 ans, Airtable Business (45 $/siège/mois) représente environ **25 920 $ de licences seules**, hors mise en œuvre, hors reprise de données, hors temps salarié. À ce niveau, l'écart avec un développement sur mesure amorti n'est plus évident du tout.
- **Piège de la même famille à signaler** : le tarif Power Apps Premium à 17,30 € est affiché HT sur le site Microsoft France, tandis qu'Airtable, Grist, Baserow et Glide affichent des dollars **sans aucune mention de TVA**.

### 5.7 « 94 % des tableurs contiennent des erreurs critiques », présenté comme une étude de 2024

- **Qui le répète** : phys.org (août 2024), Hacker News, puis de nombreuses pages commerciales qui l'utilisent comme « la preuve récente ».
- **La vérité** : le chiffre de 94 % est exactement celui des audits de terrain de Panko sur 88 tableurs, données antérieures à 2004. Une publication de 2024 associée au Prof. Pak-Lok Poon existe, mais le lien entre son résultat propre et le chiffre repris par la presse n'a pas pu être vérifié en source primaire.
- **Consigne** : **ne pas citer** tant que l'article original n'a pas été identifié, lu et daté. Forte suspicion de circularité — un chiffre ancien recyclé sous une date neuve.

### 5.8 « Le no-code, c'est 10 fois plus rapide » / « développez sans code en quelques jours »

- **Qui le répète** : l'ensemble des éditeurs no-code et des sites affiliés.
- **La vérité** : aucune de ces affirmations n'est adossée à une mesure publiée. Elles ne comparent jamais des périmètres équivalents : la démonstration porte sur un prototype à écran unique, pas sur une application avec règles métier, droits par profil, reprise de l'existant et intégrations. Elles omettent systématiquement le **point de bascule** : le no-code est effectivement rapide jusqu'au moment où le besoin sort du cadre de l'outil, moment où il devient plus lent et plus cher que le développement, parce qu'il faut contourner la plateforme puis en sortir.
- **À écrire à la place** : tout argument de vitesse doit être accompagné du plafond auquel il s'arrête — 50 000 enregistrements par base sur Airtable Team, environ 5 000 éléments par vue sur SharePoint Online, 250 Mo de Dataverse inclus sur Power Apps Premium.

### 5.9 « Vos données sont hébergées en Europe » / « solution conforme RGPD »

- **Qui le répète** : comparatifs affiliés et pages produit, souvent sans distinguer l'éditeur du plan souscrit.
- **La vérité** : vérifiable, et souvent faux **pour le plan que la PME va réellement acheter**. Glide : 100 % États-Unis, aucune option hors États-Unis. Airtable et Notion : États-Unis par défaut, résidence UE réservée aux plans Enterprise dont le tarif n'est pas public ; chez Airtable, même avec la résidence UE activée, données d'authentification, métadonnées et données de support restent aux États-Unis. Par ailleurs **« conforme RGPD » n'est pas une propriété du logiciel** : c'est le responsable de traitement, donc la PME, qui doit tenir son registre, signer un contrat article 28 et vérifier la certification Data Privacy Framework du destinataire sur la liste du Département du Commerce américain.

---

## 6. Tarifs relevés le 19/07/2026 (tableau de référence)

> **Avertissement à reproduire dans le guide** : les devises sont hétérogènes et le statut fiscal des tarifs en dollars est inconnu. Ces montants **ne sont pas directement comparables entre eux**. Ils servent à établir un ordre de grandeur face à un investissement de développement amorti, pas à classer les outils.

| Outil | Plan | Tarif catalogue relevé le 19/07/2026 | Devise / TVA |
| --- | --- | --- | --- |
| Power Apps | Premium | 17,30 € / utilisateur / mois (annuel) | € **HT confirmé** |
| Power Apps | Premium ≥ 2 000 postes | 10,40 € / utilisateur / mois | € HT confirmé |
| Power Apps | Add-on capacité Dataverse | 34,70 € / Go / mois | € HT confirmé |
| Power Apps | Développeur | Gratuit, environnements non productifs | — |
| Airtable | Free | 0 $ | — |
| Airtable | Team | 20 $ / utilisateur / mois (annuel) | $, TVA non mentionnée |
| Airtable | Business | 45 $ / utilisateur / mois (annuel) | $, TVA non mentionnée |
| Airtable | Enterprise Scale | Sur devis | — |
| Grist | Pro | 10 $ / utilisateur / mois (mensuel), 8 $ (annuel) | $, TVA non mentionnée |
| Grist | Business | 30 $ (mensuel), 24 $ (annuel), minimum 5 utilisateurs | $, TVA non mentionnée |
| Grist | Community auto-hébergée | Gratuite, open source via GitHub | — |
| Baserow | Premium | 10 $ / utilisateur / mois (annuel), 12 $ (mensuel) | $, TVA non mentionnée |
| Baserow | Advanced | 18 $ / utilisateur / mois (annuel), 22 $ (mensuel) | $, TVA non mentionnée |
| Glide | Business | 199 $ / mois (annuel), 30 utilisateurs inclus, +5 $/utilisateur | $, TVA non mentionnée |
| Retool | Team | 9 € / builder / mois, 5 € / utilisateur interne / mois | € — périodicité non établie |
| Retool | Business | 46 € / builder / mois, 14 € / utilisateur interne / mois | € — périodicité non établie |

Autres éléments relevés : Grist applique une réduction de 50 % sur le plan Pro pour les organismes à but non lucratif sur présentation d'une Letter of Determination. Retool : utilisateurs externes gratuits de 0 à 50, puis 7,33 € (51-250), 5,41 € (251-500), 3,60 € au-delà de 500. Baserow référence une option d'auto-hébergement sans tarif public sur la page.

### Coût de licence cumulé sur 4 ans à 12 utilisateurs

Calcul de l'auteur : prix catalogue officiels du 19/07/2026 × 12 utilisateurs × 48 mois. **Hors mise en œuvre, hors reprise de données, hors formation, hors temps salarié.**

| Outil et plan | Licences seules sur 4 ans |
| --- | --- |
| Airtable Business | ≈ 25 920 $ |
| Grist Business (annuel) | ≈ 13 824 $ |
| Airtable Team | ≈ 11 520 $ |
| Retool Business (2 builders + 10 utilisateurs internes) | ≈ 11 136 € |
| Baserow Advanced (annuel) | ≈ 10 368 $ |
| Power Apps Premium | ≈ 9 965 € HT |
| Glide Business (30 utilisateurs inclus, donc 12 couverts) | ≈ 9 552 $ |

Fiabilité : **moyenne**. L'arithmétique est simple et vérifiable, et chaque prix unitaire renvoie à une page officielle datée, mais trois réserves doivent être écrites explicitement dans le guide :

1. Les prix catalogue évoluent et aucun éditeur ne garantit un tarif sur quatre ans.
2. Les devises sont hétérogènes (dollars sans mention de TVA pour Airtable, Grist, Baserow, Glide ; euros HT confirmés pour Power Apps seulement).
3. Ces montants excluent tout coût de mise en œuvre — ce qui est précisément le biais que le guide dénonce.

C'est le calcul absent des 10 pages du top 10, mais **il ne vaut que présenté avec ces trois réserves**.

### Point de comparaison méthodologique — à publier comme MÉTHODE, jamais comme résultat

Un développement facturé 15 000 € HT et amorti sur 48 mois représente **312,50 € HT par mois**, à comparer aux **207,60 € HT mensuels** de licences Power Apps Premium pour 12 utilisateurs (12 × 17,30 €), auxquels s'ajoutent le coût d'administration interne et les éventuels dépassements de capacité Dataverse à 34,70 € HT/Go/mois.

Fiabilité : **faible**, à dessein. **Le montant de 15 000 € est une hypothèse de travail non sourcée.** Il n'existe aucune statistique publique fiable du prix moyen d'un développement sur mesure en France, et toute page qui en avance un le fait sans source vérifiable. Ce que le guide apporte, c'est la **structure du calcul** : mensualiser l'investissement, ajouter le run des deux côtés, intégrer le temps salarié au coût horaire INSEE de 45,6 €. Le lecteur y met ses propres montants.

### Coût interne caché — la formule honnête

10 jours-homme de cadrage, recette et nettoyage de données représentent environ **70 heures**, soit environ **3 192 €** au coût horaire INSEE du T1 2026 (70 × 45,6 €).

Fiabilité : **moyenne** — le coût horaire est solide et institutionnel, le volume de 10 jours est une hypothèse de travail à présenter comme telle. C'est la seule façon honnête de traiter le trou n°6 : plutôt que d'affirmer « le coût interne représente 20 à 40 % du projet » — chiffre qui circule sans source — on donne au dirigeant **la formule pour l'estimer sur son propre cas**.

---

## 7. Limites techniques chiffrées — mémo de rédaction

| Plateforme | Plafond de volume | Historique / traçabilité | Point de bascule à signaler |
| --- | --- | --- | --- |
| Excel (format) | 1 048 576 lignes, 16 384 colonnes, 32 767 caractères/cellule, 65 490 styles, 64 niveaux d'imbrication, 255 arguments/fonction, 2 Go en 32 bits | Aucun historique par ligne nativement | Le blocage réel est le nombre d'écrivains simultanés, pas le volume |
| Excel (co-édition) | — | — | 3 conditions cumulatives ; 0 co-édition sur SharePoint on-premises ou partage réseau ; 1 utilisateur non conforme bloque 100 % des autres |
| SharePoint Online | 30 000 000 d'éléments par liste | — | Seuil d'affichage ≈ 5 000 éléments, **non modifiable en ligne** |
| OneDrive / SharePoint Online | 250 Go par fichier | — | Rarement le vrai blocage |
| Airtable | 1 000 / 50 000 / 125 000 enregistrements **par base** ; pièces jointes 1 / 20 / 100 Go ; API 1 000 / 100 000 / illimité appels par mois | 2 semaines / 1 an / 1 an | Au-delà de 125 000 : Enterprise Scale, tarif non public |
| Grist | 5 000 / 100 000 / 150 000 enregistrements **par document** | Snapshots 30 jours / 3 ans / 5 ans | Minimum 5 utilisateurs (Business), 50 (Enterprise) ; seule édition Community open source auto-hébergeable |
| Baserow | 3 000 / 50 000 / 250 000 / 1 000 000 lignes **par espace de travail** ; stockage 2 / 20 / 100 / 1 000 Go ; crédits d'automatisation 2 000 / 100 000 / 500 000 / 2 000 000 | — | Limite par espace de travail, **non comparable à Airtable** (par base) |
| Glide | 25 000 lignes de tableur tous plans ; high-scale 25 000 / 50 000 / 100 000 | — | Facturation à l'usage : 250 / 500 / 5 000 mises à jour incluses puis 0,02 $ l'unité → coût mensuel imprévisible |
| Power Apps | 250 Mo Dataverse + 2 Go fichiers inclus dans Premium | — | Dépassement à 34,70 € HT/Go/mois ; SQL Server et Dataverse absents des connecteurs Standard ; 1 connecteur premium = 100 % des utilisateurs à licencier |
| Power Apps pour M365 (inclus) | — | — | Exclut : données on-premises, connecteurs premium, connecteurs personnalisés |

**Hébergement** : Glide → 100 % États-Unis (Google Cloud, Iowa), aucune option hors US. Airtable → AWS, US par défaut, résidence UE (Francfort, sauvegardes Dublin) réservée à Enterprise Scale, authentification/métadonnées/support restant aux US même alors. Notion → AWS, US par défaut, résidence UE (Francfort, Dublin) réservée à Enterprise, migration non self-service.

---

## 8. Cadre légal — mémo de rédaction

### 8.1 Conservation

- **Article L123-22 du Code de commerce** : documents comptables et pièces justificatives conservés **dix ans**. https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006219327/ (consulté le 19/07/2026).
- **Article L102 B du Livre des procédures fiscales** : livres, registres, documents et pièces sur lesquels l'administration peut exercer ses droits de communication, d'enquête et de contrôle conservés **six ans** à compter de la date de la dernière opération. Un document établi ou reçu sous forme électronique doit être conservé sous cette forme pendant toute la durée. https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000041471233/ — doctrine : BOFiP BOI-CF-COM-10-10-30-10, https://bofip.impots.gouv.fr/bofip/8877-PGP.html
- **Impact rédactionnel direct** : une application dont l'historique est purgé au bout d'un an (Airtable Team et Business) ne peut pas porter seule la conservation des pièces comptables. La question « que fait-on des anciens fichiers Excel après la bascule ? » est une **question de conformité, pas de confort**.

### 8.2 Propriété du code

- **Article L131-3 du Code de la propriété intellectuelle** : la transmission des droits d'auteur exige que **chacun** des droits cédés fasse l'objet d'une mention distincte dans l'acte, et que le domaine d'exploitation soit délimité quant à son **étendue, sa destination, son lieu et sa durée** (4 délimitations obligatoires). https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958 (consulté le 19/07/2026).
- **Conséquence pratique décisive, absente de tout le top 10** : sans acte écrit respectant ce formalisme, **le prestataire reste titulaire des droits patrimoniaux sur le code, même après paiement intégral de la facture**. Pour le logiciel, la rémunération de l'auteur peut être forfaitaire, par dérogation.
- **Articles L112-2 et L113-9 du CPI** : le logiciel est une œuvre protégée ; les droits sur un logiciel créé par un **salarié** dans l'exercice de ses fonctions sont dévolus à l'employeur, mais **cette dévolution automatique ne s'applique pas à un prestataire externe**, freelance ou agence. Ressource institutionnelle : Agence pour la Protection des Programmes (APP) — https://www.app.asso.fr/centre-information/base-de-connaissances/code-logiciels/la-titularite-des-droits/la-modification-de-la-titularite-le-contrat-de-cession

### 8.3 Données personnelles

- **Article 28 du RGPD** : contrat de sous-traitance obligatoire avec tout éditeur SaaS hébergeant des données personnelles. La CNIL détaille quatre blocs d'obligations minimales : transparence et traçabilité ; protection des données dès la conception et par défaut ; garantie de sécurité ; obligation d'assistance, d'alerte et de conseil avec procédure de notification des violations. https://www.cnil.fr/fr/definition/sous-traitant (consulté le 19/07/2026).
- **Article 30 du RGPD** : registre des activités de traitement. Toute PME qui migre un fichier Excel contenant des données clients, salariés ou RH doit mettre à jour son registre — nouvelle finalité, nouveau sous-traitant, nouvelle localisation d'hébergement, nouvelles durées de conservation. https://www.cnil.fr
- **Chapitre V du RGPD (articles 44 à 50)** : transferts hors UE. La décision d'adéquation **Data Privacy Framework du 10 juillet 2023** couvre les États-Unis, mais **uniquement pour les organisations effectivement certifiées** : la CNIL indique qu'il faut vérifier l'inscription du destinataire sur la liste publiée par le Département du Commerce américain avant tout transfert. https://www.cnil.fr/fr/adequation-des-etats-unis-les-premieres-questions-reponses et https://www.cnil.fr/fr/les-outils-de-la-conformite/transferer-des-donnees-hors-de-lue (consultés le 19/07/2026). **Applicable directement à Airtable, Notion et Glide.**
- **Arrêt Schrems II (CJUE, 16 juillet 2020)** : impose une analyse d'impact du transfert (Transfer Impact Assessment) pour vérifier l'effectivité des garanties dans le pays de destination lorsque le transfert repose sur des clauses contractuelles types. https://www.cnil.fr/fr/invalidation-du-privacy-shield-les-consequences-pour-les-organismes-souhaitant-transferer-des
- **Action concrète à donner au lecteur** : la certification DPF d'Airtable, Notion ou Glide se vérifie en trente secondes sur `dataprivacyframework.gov`. Aucune page du top 10 ne le mentionne.

### 8.4 Les six clauses à exiger dans un contrat de développement sur mesure

Aucune n'est mentionnée dans les 10 pages du top 10 :

1. **Cession expresse des droits patrimoniaux** conforme à l'article L131-3 du CPI (étendue, destination, lieu, durée mentionnés distinctement).
2. **Dépôt du code sur un dépôt Git appartenant au client** dès le premier jour, pas à la livraison.
3. **Livraison de la documentation technique et des procédures de déploiement.**
4. **Clause de réversibilité** précisant le format d'export, le périmètre exporté et le délai de restitution.
5. **Convention de séquestre du code (escrow)** pour couvrir la défaillance du prestataire.
6. **Contrat de maintenance distinct** précisant délai de prise en charge, délai de rétablissement, tarif horaire hors forfait et durée d'engagement.

---

## 9. Plan détaillé — 16 H2

### H2 1 — Ce que ce guide fait, et ce que les dix pages que vous venez de lire ne font pas
Contrat de lecture. Annonce des trois promesses (coût à 4 ans, pays d'hébergement, contrat). Présentation de Nathalie, Montmélian, 14 salariés, 38 000 lignes, 12 écrivains, NAS. Avertissement de méthode : tous les chiffres sont datés au 19/07/2026 et sourcés ; quand une donnée manque, on le dit. Mention explicite que Hagnéré Code vend du développement sur mesure et que ce guide déconseille le sur-mesure dans plusieurs cas.

### H2 2 — Le vrai diagnostic : votre problème n'est presque jamais le nombre de lignes
Démontage du chiffre « 1 048 576 lignes » (§5.4). Les cinq symptômes qui comptent vraiment : verrouillage, absence d'historique par ligne, absence de droits par champ, règles métier enfouies dans des formules, prolifération des copies. Grille d'auto-diagnostic en 6 questions, dont la seule qui tranche : **combien de personnes doivent écrire dans le fichier en même temps, et qui sait encore expliquer les formules ?** Amorce du chapitre qualité des données : doublons, dates en texte, unités mélangées, lignes fantômes.

### H2 3 — D'où viennent vraiment les statistiques qu'on vous montre
Le « 88 % » et sa fausse attribution Gartner (§5.1). Le « 6 000 € par incident KPMG » introuvable — traité comme motif, sans reprendre le chiffre (§5.2). Le « 94 % étude 2024 » et la circularité (§5.7). Panko, 1995-2004, ce qu'il mesure vraiment (§4.12). L'exemple du fonds souverain norvégien avec sa nuance. Livrable pour le lecteur : **quatre questions à poser à n'importe quel prestataire devant n'importe quelle statistique** (qui l'a publiée, quand, sur quel échantillon, avec quelle définition).

### H2 4 — Option zéro : réparer l'Excel existant, l'option que personne ne vous proposera
Le scénario absent de 10 pages sur 10. Les cinq leviers : déplacer le fichier sur OneDrive ou SharePoint Online pour débloquer la co-édition ; convertir en table structurée ; Power Query pour fiabiliser les imports ; validation de données ; verrouillage de cellules. Les trois conditions cumulatives de la co-édition, et le fait qu'un seul utilisateur non conforme bloque tout le monde (§4.2). La limite : seuil d'affichage SharePoint ≈ 5 000 éléments non modifiable (§4.3) — donc pour Nathalie et ses 38 000 lignes, l'option zéro règle le verrouillage mais pas le reste. Coût : quelques jours, pas 15 000 €.

### H2 5 — Ce que le no-code sait faire, et le plafond exact de chaque plateforme
Ce qu'on achète réellement : une base de données + une interface + des automatisations, sans écrire de code. Tableau des plafonds Airtable / Grist / Baserow / Glide (§7). Le piège de comparaison base vs espace de travail. Le modèle de facturation à l'usage de Glide et son imprévisibilité. Démontage du « 10 fois plus rapide » (§5.8) : vrai jusqu'au point de bascule, faux après. Où se situe Nathalie sur chaque plafond.

### H2 6 — Power Apps quand on paie déjà Microsoft 365 : ce qui est inclus, où commence la facture
Le chapitre le plus différenciant du guide. Ce que la licence « Power Apps pour Microsoft 365 » autorise, et ses trois exclusions (§4.9). Le mur des connecteurs premium : SQL Server et Dataverse absents de la liste Standard, un seul connecteur premium = tous les utilisateurs à licencier à 17,30 € HT. Les 250 Mo de Dataverse inclus et le rachat à 34,70 € HT/Go/mois. Règle simple à retenir pour le lecteur : **tant qu'on reste sur SharePoint et Excel Online, c'est compris ; dès qu'on touche à SQL ou Dataverse, la facture démarre.**

### H2 7 — Le développement sur mesure : à quelles conditions il devient l'option rationnelle
Ce qu'on achète : un logiciel dont on possède le code et qui n'a pas de plafond d'éditeur. Les quatre situations où il devient rationnel : volumes au-dessus des plafonds no-code, règles métier que l'outil ne sait pas exprimer, intégrations avec l'existant (ERP, compta, machines), contraintes de conformité ou d'hébergement. Les trois situations où Hagnéré Code le déconseille explicitement : besoin non stabilisé, moins de 5 utilisateurs, processus qui va changer dans l'année. Absence assumée de fourchette de prix — voir §10, aucune source publique fiable n'existe.

### H2 8 — Le seul calcul qui décide : quatre ans, douze utilisateurs, tout compris
Cœur du guide. Pourquoi 9 €/mois et 15 000 € ne se comparent pas (§5.6). Tableau des licences cumulées à 4 ans pour 12 utilisateurs, avec les trois réserves obligatoires (§6). La méthode de comparaison : mensualiser l'investissement, ajouter le run des deux côtés, intégrer le temps salarié. Exemple chiffré : 15 000 € / 48 mois = 312,50 € HT/mois face à 12 × 17,30 € = 207,60 € HT/mois de licences, plus administration interne et dépassements Dataverse. **Insister : c'est une méthode, pas un verdict.** Grille vierge que le lecteur remplit avec ses propres devis.

### H2 9 — Le coût que personne ne facture : le temps de vos équipes
Ce que le projet coûte en interne : ateliers de cadrage, arbitrages, recette et tests, correction des données sales, double saisie pendant la bascule, baisse de productivité des premières semaines. Refus explicite de reprendre le « 20 à 40 % » qui circule sans source. Méthode : compter les heures, multiplier par 45,6 € (coût horaire INSEE T1 2026). Exemple : 10 jours-homme ≈ 70 heures ≈ 3 192 €. Le nettoyage des données comme premier poste et première cause de dérapage : doublons, dates en texte, unités mélangées, lignes fantômes, formules que plus personne n'explique. **À faire avant tout devis, pas après.**

### H2 10 — Où vont dormir vos données clients et salariés
Glide : 100 % États-Unis, aucune option. Airtable et Notion : États-Unis par défaut, résidence UE réservée aux plans Enterprise, et chez Airtable authentification, métadonnées et support restant aux US même en résidence UE (§4.10). Ce que la PME doit faire, en tant que responsable de traitement : contrat article 28, registre article 30, base légale de transfert, vérification de la certification DPF sur la liste du Département du Commerce. Rappel Schrems II. Phrase clé : **« conforme RGPD » n'est pas une propriété du logiciel, c'est une obligation qui reste la vôtre.**

### H2 11 — Vos dix ans d'historique : ce qu'on reprend, ce qu'on archive, ce qu'on est obligé de garder
Dix ans (article L123-22 du Code de commerce), six ans (article L102 B du LPF), conservation sous forme électronique si le document a été établi ou reçu ainsi. Confrontation directe avec l'historique Airtable limité à 1 an (§4.4) : une application ne porte pas seule la conservation légale. Les trois stratégies de reprise : tout migrer, migrer l'actif et archiver le reste, repartir à blanc avec archivage. Que deviennent les anciens fichiers, où, sous quel format, et comment retrouver un dossier de 2019 après la bascule.

### H2 12 — Le logiciel vous appartient-il vraiment ? Ce qu'il faut faire signer
Article L131-3 du CPI et ses quatre délimitations obligatoires. La conséquence brutale : **sans acte écrit conforme, le prestataire reste titulaire des droits patrimoniaux même après paiement intégral**. La différence salarié / prestataire externe (L113-9). Les six clauses à exiger (§8.4). Encadré pratique : trois phrases à chercher dans un devis avant de le signer.

### H2 13 — Comment on sort : réversibilité, lock-in, et le jour où le no-code ne suffit plus
Ce qu'on récupère vraiment en quittant une plateforme : des données brutes, donc un tableur. On perd l'interface, les automatisations et les vues. Grist Community comme contre-exemple factuel d'auto-hébergement open source, avec son coût d'exploitation interne. L'option auto-hébergée de Retool, à vérifier. Le parcours réel que personne ne décrit : démarrer sur Airtable ou Glide, grandir, migrer. Les signaux du moment de bascule : plafond d'enregistrements approché, contournements qui s'accumulent, coût par siège qui dépasse l'amortissement d'un développement, besoin d'une intégration que la plateforme ne fait pas. Ce que coûte la sortie et ce qui se récupère.

### H2 14 — Le jour d'après : qui maintient, sous quel délai, à quel prix
Qui corrige un bug, en combien de temps, à quel tarif, avec quel engagement. Le shadow IT no-code : l'application montée par un salarié qui quitte l'entreprise et que plus personne ne sait modifier — **aucune statistique publique ne mesure ce phénomène, on l'écrit** (§10). Le risque prestataire : si l'agence ferme, que reste-t-il ? (dépôt Git côté client, séquestre, documentation). Sécurité d'exploitation : sauvegardes, fréquence, rétention, **test de restauration**, plan de reprise, disponibilité, ce qui se passe si le service tombe un jour de facturation. Le transfert de risque : un fichier Excel est copiable sur une clé, une application hébergée ne l'est pas.

### H2 15 — Quand ça dérape : les signaux, le plan B, la clause de sortie
Le chapitre que personne n'écrit. Le CHAOS Report avec ses trois réserves complètes (§4.13 et §5.5) — et ce qu'on en retient : **découper**. Les six signaux d'alerte en cours de projet : périmètre qui s'élargit sans avenant, recette repoussée, interlocuteur unique côté prestataire, absence de démonstration intermédiaire, données non nettoyées à l'entrée, aucune date de bascule écrite. Le plan B : jalons de paiement, livrable utilisable à chaque étape, code déposé dès le premier jour, possibilité d'arrêter à un jalon. Démarrer petit sur un seul processus.

### H2 16 — Arbre de décision : trancher en huit questions, sans être informaticien
Huit questions binaires menant à quatre issues : réparer l'existant / no-code / Power Apps sur socle Microsoft / développement sur mesure. Questions : combien d'écrivains simultanés ; où est stocké le fichier aujourd'hui ; combien de lignes actives ; y a-t-il des données personnelles ou RH ; êtes-vous déjà sous Microsoft 365 et touchez-vous à SQL ; le processus est-il stabilisé ; combien d'utilisateurs dans quatre ans ; avez-vous quelqu'un en interne pour administrer l'outil. **Position honnête de Hagnéré Code** : dans quels cas nous vous dirons de ne pas nous acheter de développement, et dans quels cas le sur-mesure se défend. Contact lead-only, réponse manuelle sous 24 h ouvrées, agence à Bassens près de Chambéry.

---

## 10. FAQ — 15 questions (issues des questions réellement posées par les dirigeants)

1. **Mon fichier Excel fonctionne depuis huit ans, tout le monde le connaît. Qu'est-ce qui me dit que je ne vais pas casser quelque chose qui marche ?** → Rien ne vous y oblige. Commencer par l'option zéro (H2 4) et ne changer d'outil que sur un symptôme mesuré, pas sur une démo.
2. **Concrètement, ça coûte combien ? Je vois 12 000 € chez l'un, 60 000 € chez l'autre, et 9 € par mois chez un troisième. Je compare quoi avec quoi ?** → Renvoi H2 8. Aucune fourchette de marché fiable n'existe publiquement ; on donne la méthode de comparaison à 4 ans.
3. **Une fois que c'est livré et payé, je paie encore quelque chose tous les mois ? Combien, et pour quoi ?** → Hébergement, maintenance corrective, évolutions, support, montées de version. Renvoi H2 8 et H2 14.
4. **Combien de temps mes équipes et moi allons devoir y passer ?** → Méthode de chiffrage au coût horaire INSEE (45,6 €/h, T1 2026). Renvoi H2 9.
5. **Est-ce que je récupère mes dix ans d'historique, ou est-ce que je repars de zéro ? J'ai des données comptables que je suis obligé de garder.** → Dix ans (L123-22 Code de commerce), six ans (L102 B LPF). Trois stratégies de reprise. Renvoi H2 11.
6. **Si je passe par une agence et qu'elle met la clé sous la porte dans deux ans, il me reste quoi ?** → Dépôt Git à votre nom dès le premier jour, séquestre, documentation technique, clause de réversibilité. Renvoi H2 12 et H2 14.
7. **Le logiciel m'appartient vraiment ? Qu'est-ce que je dois faire signer ?** → Article L131-3 du CPI : sans acte écrit conforme, le prestataire reste titulaire des droits patrimoniaux même après paiement intégral. Renvoi H2 12.
8. **Airtable, Power Apps, du sur-mesure… je ne suis pas informaticien. Comment je tranche sans me faire embarquer par le premier qui me fait une démo ?** → Arbre de décision en huit questions. Renvoi H2 16.
9. **J'ai déjà payé des licences Microsoft 365 pour toute l'équipe. Power Apps est compris dedans ou c'est un abonnement en plus ?** → Compris tant que vous restez sur les connecteurs standard (SharePoint, Excel Online) ; 17,30 € HT par utilisateur et par mois dès qu'un connecteur premium (SQL Server, Dataverse) est utilisé. Renvoi H2 6.
10. **Si je commence avec un outil pas cher type Airtable et que ça marche bien, je fais quoi quand on sera 30 au lieu de 8 ?** → Plafonds par plan, coût par siège qui grimpe linéairement, signaux de bascule et coût de sortie. Renvoi H2 5 et H2 13.
11. **Mes données de clients et de salariés vont être stockées où, et qui est responsable si ça fuite ?** → Glide 100 % États-Unis ; Airtable et Notion États-Unis par défaut. Vous restez responsable de traitement : article 28, article 30, vérification DPF. Renvoi H2 10.
12. **Franchement, mes équipes vont l'utiliser ou elles vont continuer à faire leur Excel dans leur coin ?** → Le mode d'échec le plus fréquent. Aucune statistique publique ne le mesure — on l'écrit, et on donne les parades (une seule source de vérité, saisie plus rapide que dans Excel, un référent identifié).
13. **Et si le projet se passe mal ? Je le vois venir comment, et je peux arrêter les frais à quel moment ?** → Six signaux d'alerte, jalons de paiement, livrable utilisable à chaque étape. Renvoi H2 15.
14. **Une fois en place, qui s'en occupe chez moi ? Je n'ai personne à l'informatique et je ne veux pas dépendre du seul gars qui a compris comment ça marche.** → Shadow IT no-code, contrat de maintenance, documentation, double compétence interne. Renvoi H2 14.
15. **Est-ce qu'un logiciel du commerce ne ferait pas l'affaire pour moins cher ? Et je peux commencer petit sur un seul fichier, sans engager tout le budget ?** → Oui aux deux, et c'est souvent la bonne réponse. Baromètre France Num 2025 : 88 % des PME sont déjà équipées d'au moins une solution de gestion, 69 % d'un logiciel de facturation. Commencer par un seul processus est la meilleure protection contre l'échec (corrélation taille/succès du CHAOS Report).

---

## 11. Lexique à intégrer (définitions courtes, dans le corps du texte ou en encadré)

- **Co-édition (co-authoring)** — capacité pour plusieurs personnes de modifier le même fichier en même temps. Exige Microsoft 365, un format .xlsx/.xlsm/.xlsb et un stockage sur OneDrive ou SharePoint Online.
- **Table structurée Excel** — plage de données déclarée comme table, avec en-têtes fixes et formules propagées automatiquement. Base de toute fiabilisation d'un classeur.
- **Power Query** — outil intégré à Excel qui automatise l'import et le nettoyage de données depuis une source externe, sans macro.
- **Seuil d'affichage de liste (List View Threshold)** — limite d'environ 5 000 éléments affichables dans une vue SharePoint, non modifiable sur SharePoint Online.
- **Connecteur standard / connecteur premium** — dans Power Apps, un connecteur relie l'application à une source de données. Les standard sont inclus dans Microsoft 365 ; les premium (SQL Server, Dataverse) déclenchent une licence payante pour chaque utilisateur.
- **Dataverse** — base de données managée de Microsoft pour Power Platform. 250 Mo inclus dans Power Apps Premium, puis 34,70 € HT par Go et par mois.
- **Enregistrement (record) / ligne** — unité de données dans une base no-code, équivalent d'une ligne de tableur. C'est l'unité sur laquelle portent les plafonds des éditeurs.
- **Siège (seat) / licence par utilisateur** — mode de facturation où le prix est multiplié par le nombre de personnes. Le coût grandit avec l'équipe, contrairement à un investissement amorti.
- **Coût total de possession (TCO)** — somme de l'achat, de l'hébergement, de la maintenance, des évolutions, du support et du temps interne sur une durée donnée. Seul chiffre comparable entre deux options.
- **Lock-in (verrouillage fournisseur)** — situation où quitter un outil coûte plus cher que d'y rester, parce que l'interface, les automatisations et les vues ne s'exportent pas.
- **Réversibilité** — clause contractuelle définissant le format d'export, le périmètre exporté et le délai de restitution des données en fin de relation.
- **Cession des droits patrimoniaux** — acte écrit par lequel le prestataire vous transfère les droits d'exploitation du code. Sans lui, payer ne suffit pas à posséder.
- **Séquestre de code (escrow)** — dépôt du code chez un tiers de confiance, restitué au client si le prestataire défaille.
- **Responsable de traitement / sous-traitant** — vous êtes responsable de traitement, l'éditeur SaaS est sous-traitant. Le contrat article 28 encadre la relation.
- **Data Privacy Framework (DPF)** — décision d'adéquation UE/États-Unis du 10 juillet 2023, valable uniquement pour les organisations certifiées, vérifiables sur la liste du Département du Commerce américain.
- **Shadow IT** — outil monté par un salarié en dehors de tout cadre, que personne d'autre ne sait maintenir quand il part.
- **Recette (tests d'acceptation)** — phase où vos équipes vérifient que le logiciel fait ce qui était prévu, avant la mise en production. Poste de coût interne systématiquement oublié.

---

## 12. Pièges à éviter en rédaction

1. **Ne jamais citer « 6 000 € par incident (KPMG) »**, même pour le démentir. Le mentionner le fait circuler. Décrire le motif, pas le chiffre.
2. **Ne jamais présenter le « 88 % » ou le « 94 % » comme une donnée de 2026.** Toujours écrire « travaux menés entre 1995 et 2004 » dans la même phrase que le chiffre.
3. **Ne jamais publier de fourchette de prix pour un développement sur mesure** comme si c'était une donnée de marché. Aucune source publique fiable n'existe. Publier une méthode.
4. **Ne pas comparer les montants cumulés à 4 ans entre eux** sans rappeler que les devises sont hétérogènes et que seul Power Apps est confirmé HT en euros.
5. **Ne pas publier de tarif Retool** tant que la périodicité (annuel/mensuel) n'a pas été confirmée par un nouveau relevé — contradiction non résolue avec des sources tierces.
6. **Ne pas citer le chiffre de 99 co-auteurs maximum** en co-édition Excel : non confirmé en source primaire.
7. **Ne pas publier les tarifs mensuels Airtable sans engagement** (24 $ / 54 $) : non confirmés sur la page officielle.
8. **Ne pas utiliser le CHAOS Report comme statistique de peur.** Si cité : année 2020, méthodologie non publiée, critiques académiques, et n'en retenir que la corrélation taille/succès.
9. **Ne pas transposer l'erreur du fonds souverain norvégien à une PME.** Ordre de grandeur illustratif, avec la nuance « erreur de calcul dans la composition d'un indice » et non « erreur Excel » au sens strict.
10. **Ne pas inventer de pourcentage sur l'abandon des applications no-code ni sur le shadow IT.** Écrire explicitement « aucune statistique publique ne mesure ce phénomène » — c'est précisément ce qui différencie ce guide.
11. **Ne pas utiliser 45,6 €/h comme un salaire.** C'est un coût employeur INSEE, T1 2026, secteurs marchands, entreprises de 10 salariés et plus.
12. **Ne pas laisser croire que « conforme RGPD » est une propriété du logiciel.** La conformité reste une obligation du responsable de traitement.
13. **Ne pas comparer le plafond Airtable (par base) au plafond Baserow (par espace de travail)** sans signaler que les deux périmètres diffèrent.
14. **Ne pas présenter Nathalie comme une cliente réelle.** Personnage composite explicitement annoncé comme tel.
15. **Aucune estimation tarifaire automatique ni simulateur sur la page** (règle projet : funnel lead-only, réponse manuelle sous 24 h ouvrées).
16. **Ne pas oublier de dater chaque relevé dans le corps du texte** (« relevé le 19 juillet 2026 »), y compris dans les tableaux — c'est le défaut central reproché à toute la SERP.

---

## 13. Vérifications bloquantes avant publication

| # | Point | Action requise |
| --- | --- | --- |
| 1 | HTTP 404 sur la page canonique des limites SharePoint (`learn.microsoft.com/.../software-boundaries-and-limits-for-sharepoint`) | Les limites retenues (30 M d'éléments, seuil 5 000) viennent de deux autres pages Microsoft concordantes. Revérifier la page de référence. |
| 2 | FAQ de licences Power Apps | Ouvrir et lire intégralement https://learn.microsoft.com/en-us/power-platform/admin/powerapps-licensing-faq (sans tiret) pour confirmer la règle « un connecteur premium = tous les utilisateurs à licencier ». URL avec tiret et `.../office/troubleshoot/excel/best-practices-open-save-excel` renvoient 404. |
| 3 | PDF du Baromètre France Num 2025 non exploité (retour vide) | Confirmer les chiffres (11 021 entreprises, 88 %, 69 %, 75 %) sur le PDF primaire avec numéros de page. **Et compléter** : le baromètre contient probablement des données sur les freins (coût, temps, compétences) et sur le budget numérique moyen des TPE/PME, très utiles au guide et non récupérées. |
| 4 | Contradiction sur les tarifs Retool | Page officielle : 46 €/builder/mois (Business). Sources tierces : 65 $ mensuel, 50 $ annuel. Périodicité non établie. **Ne rien publier sans nouveau relevé, capture d'écran à l'appui, en basculant explicitement le sélecteur « Pay annually » puis « Pay monthly ».** |
| 5 | Limite de co-édition simultanée (99 co-auteurs, recommandation de 10) | Non confirmée en source primaire ; la page Microsoft consultée ne mentionne aucun nombre maximal. Vérifier sur https://support.microsoft.com/en-us/sharepoint/get-started-with-sharepoint/document-collaboration-and-co-authoring — sinon ne pas citer. |
| 6 | Tarifs Airtable mensuels sans engagement | Non affichés sur la page publique (seuls 20 $ et 45 $ annuels le sont). Ne pas publier 24 $ / 54 $ en l'état. |
| 7 | Statut fiscal des tarifs en dollars inconnu | Airtable, Grist, Baserow, Glide et Retool n'affichent aucune mention HT/TTC. Pour une PME française, la TVA s'applique via autoliquidation. **Signaler l'asymétrie plutôt que la présumer** : seul Microsoft France affiche « La T.V.A. n'est pas comprise dans le prix ». |
| 8 | Étude 2024 sur les erreurs de tableur (Prof. Pak-Lok Poon, via phys.org) | Chiffre de 94 % identique à celui de Panko (< 2004). Forte suspicion de circularité. **Ne pas citer** tant que la publication académique originale n'a pas été identifiée, lue et datée. |
| 9 | Rapport CHAOS du Standish Group inaccessible (payant) | Chiffres 31 / 50 / 19 issus uniquement de synthèses tierces. Aucune édition depuis 2020. Si cité : année, absence de méthodologie publiée, critiques académiques — obligatoires. |
| 10 | Article du Financial Times sur le fonds souverain norvégien non lu (paywall) | Rechercher le communiqué ou le rapport primaire NBIM (nbim.no) avant de qualifier l'incident d'« erreur Excel ». |
| 11 | Aucune source publique fiable sur le prix moyen d'un développement sur mesure en France | Ni INSEE, ni France Num, ni Bpifrance, ni Syntec Numérique. **Ne pas publier de fourchette présentée comme une donnée de marché.** Publier une méthode de calcul. |
| 12 | Aucune statistique sourçable sur le taux d'abandon des applications no-code en PME ni sur le shadow IT no-code | Traiter qualitativement, en assumant l'absence de chiffre. Écrire « aucune statistique publique ne mesure ce phénomène ». |
| 13 | Aucune source institutionnelle proposant un arbre de décision neutre tableur / no-code / sur-mesure | Recherche complémentaire ciblée à mener sur bpifrance.fr et les publications de CCI France avant rédaction. Le Baromètre France Num reste la seule source institutionnelle exploitable. |
| 14 | Option d'auto-hébergement Retool (plans Free et Startup) | Article de blog officiel non daté, non recoupé avec la page tarifs. Revérifier avant publication. |

---

## 14. Rappels d'intégration technique

- Enregistrer l'entrée dans `src/lib/guides.ts` (source de vérité : title, description, dates, alimente hub, sitemap, metadata et JSON-LD).
- Constantes SEO dans `src/lib/seo.ts` (SITE_URL, OG_BASE) — domaine `https://hagnere-code.ai`.
- Composants dans `src/components/guides/`.
- Lancer `npm run test` (inclut le test structurel sitemap ↔ pages).
- Maillage interne pertinent depuis ce guide : `no-code-ou-sur-mesure`, `prix-logiciel-sur-mesure`, `proprietaire-site-internet-code-source`, `cahier-des-charges-site-internet`, `combien-coute-un-saas`, `cout-maintenance-site-internet`, `choisir-son-agence-web`.

---

## 15. Addendum d'exécution après la charte du 19/07/2026

Cet addendum décrit la page réellement produite. Il prévaut sur les consignes
préparatoires incompatibles plus haut, notamment le plan figé en seize H2, le
quota de mots et l'interdiction générale d'un outil interactif. La charte
actuelle autorise une ressource autonome si sa logique est transparente, si
elle ne collecte rien par défaut et si elle peut recommander de ne pas acheter.

### 15.1 Brief lecteur et décision

```text
Slug : transformer-excel-en-application
Statut actuel : batterie technique validée, prêt pour revue humaine
Requête principale : transformer un fichier Excel en application métier
Moment du parcours : explorer puis décider
Lecteur : dirigeant ou indépendant dont un processus repose déjà sur Excel
Déclencheur : verrouillage, copies, ressaisie, mobilité, droits ou règle fragile
Décision principale : choisir entre fiabiliser Excel, acheter, prototyper ou développer
Action sans contact : diagnostic local copiable + plan d'action sur 30 jours
CTA : faire vérifier le diagnostic dans /demarrer-un-projet
Hors périmètre : conseil juridique personnalisé et estimation automatique de devis
Date de recherche et revalidation : 19 juillet 2026
```

### 15.2 Cannibalisation

| Page voisine | Intention | Différence du nouveau guide | Arbitrage |
|---|---|---|---|
| `prix-logiciel-sur-mesure` | connaître un budget de développement | décider s'il faut quitter Excel et comment migrer | liens croisés ; aucune nouvelle fourchette de marché |
| `no-code-ou-sur-mesure` | comparer deux modes de construction | comparer quatre sorties depuis un tableur précis | le nouveau guide renvoie au comparatif détaillé |
| `/outils/calculateur-cout-excel` | estimer un coût du statu quo | diagnostic qualitatif et protocole de migration | liens croisés ; le diagnostic ne calcule aucun prix |
| `/services/outils-internes-sur-mesure` | acheter une prestation | prendre une décision autonome avant contact | CTA tardif et mauvais fits explicites |

**Porte de sortie :** la nouvelle URL répond à la décision « que faire de mon
processus Excel ? », absente des pages de prix, de service et du comparatif de
technologies.

### 15.3 Demande et SERP observées le 19/07/2026

Requêtes observées : « transformer fichier Excel en application métier »,
« remplacer Excel par une application métier », « passer d'Excel à une
application Power Apps Airtable » et « Excel en application sans code PME ».
Les résultats visibles mêlaient pages Microsoft, pages d'agences vendant le
sur-mesure et générateurs promettant une conversion en quelques minutes.

Questions dominantes : peut-on convertir automatiquement ; comment choisir
Excel/Power Apps/no-code/sur-mesure ; combien coûte la bascule ; que deviennent
les formules, l'historique et les données personnelles ; qui possède le code ;
comment éviter de bloquer l'équipe.

Angle mort conservé comme différenciation : les pages observées répondent
principalement « comment construire ». La page Hagnéré Code commence par
« faut-il construire » et fournit une conclusion négative possible.

### 15.4 Sources effectivement revalidées

| Affirmation publiée | Source primaire revalidée le 19/07/2026 | Confiance | Conséquence |
|---|---|---:|---|
| Excel : 1 048 576 lignes et 16 384 colonnes | Microsoft Support, `excel-specifications-and-limits` | élevée | limite de format, non critère de migration |
| Coédition : OneDrive/OneDrive Entreprise/SharePoint Online ; pas SharePoint on-premises | Microsoft Support, `collaborate-on-excel-workbooks...` | élevée | tester l'option zéro avant le projet |
| Power Apps pour M365 : standard oui, on-premises/premium/personnalisé non | Microsoft Learn, `pricing-billing-skus` | élevée | vérifier les connecteurs avant le calcul |
| Power Apps Premium : 17,30 € HT/utilisateur/mois annuel ; Dataverse 34,70 € HT/Go/mois | Microsoft France, page tarifs | élevée mais volatile | dater et archiver le tarif du devis |
| Résidence Airtable UE réservée à Enterprise ; certaines métadonnées restent aux US | Airtable Support, `data-residency-at-airtable` | élevée mais volatile | vérifier le plan réel, pas la promesse générale |
| Obligations du sous-traitant dans le contrat | CNIL, définition du sous-traitant | élevée | le client reste responsable de traitement |
| Conservation dix ans / six ans et forme informatique | Légifrance, L123-22 et L102 B | élevée | distinguer migration et archive légale |
| Cession : droits distincts + étendue, destination, lieu, durée | Légifrance, L131-3 | élevée | propriété, accès et réversibilité doivent se cumuler |

Les tarifs Retool, les taux d'erreurs de tableurs, le rapport CHAOS, les
prétendus coûts moyens d'incident et la valeur absolue de coût horaire INSEE
n'ont pas été publiés. Leur preuve ou leur pertinence restait insuffisante pour
la décision couverte par la page.

### 15.5 Empreinte éditoriale retenue

```text
Tension : le lecteur pense chercher une application ; il doit d'abord prouver qu'il en a besoin
Ouverture : verdict conditionnel suivi de l'ordre des options les moins complexes
Progression : test de l'option zéro -> diagnostic -> comparaison -> traduction -> coût -> migration -> contrat
Artefact signature : diagnostic local à règles visibles et résultat copiable
Rythme : prose courte, tableaux de décision, protocole et exemple fictif ponctuel
CTA : une seule carte après la démonstration et le plan sur 30 jours
Conclusion : note de décision possible « faire, tester, reporter ou renoncer »
```

Différences intentionnelles avec les guides voisins : aucun lexique massif en
ouverture ; aucun chapitre de démolition statistique ; aucun verdict binaire ;
aucune grille de tarifs multi-éditeurs ; exemple fictif limité à une décision
et non répété à chaque section ; diagnostic avant toute exposition commerciale.

### 15.6 Ressource et conversion

- ressource : composant `ExcelDecisionDiagnostic`, inclus dans le guide ;
- résultat autonome : recommandation parmi Excel fiabilisé, logiciel existant,
  prototype Power Apps/no-code, plateforme encadrée ou cadrage sur mesure ;
- règle : huit signaux observables, stabilité du processus, couverture d'un
  logiciel existant et environnement Microsoft 365 ;
- données : état React local, aucun stockage ni envoi ;
- sortie : texte copiable avec signaux et trois prochaines actions ;
- mauvais fit : peu de symptômes, processus instable ou logiciel existant
  couvrant au moins 80 % ;
- événements déclarés : copie du résultat et clic CTA, sans installation d'un
  nouveau collecteur ;
- maintenance : revalider la logique lors d'un changement de l'offre de service
  ou après retours de lecteurs ; les tarifs restent dans le guide, pas dans le
  diagnostic.

### 15.7 Calculs réconciliés

- temps fictif : `4 h × 48 semaines × 45 € = 8 640 € / an` ;
- horizon fictif : `8 640 € × 4 = 34 560 €` ;
- Power Apps fictif : `12 × 17,30 € × 48 = 9 964,80 € HT` ;
- ces montants sont étiquetés comme exemple illustratif, hors mise en œuvre,
  reprise, administration, hébergement et sortie ;
- aucun ROI ni prix de développement n'en est déduit.

### 15.8 Scorecard après rendu navigateur local

| Axe | Note | Preuve | Réserve avant publication |
|---|---:|---|---|
| Intention | 2 | réponse conditionnelle dès l'ouverture | aucune |
| Décision | 2 | quatre sorties + diagnostic + plan 30 jours | aucune ; les cinq familles de verdict ont été exercées |
| Pédagogie | 2 | termes définis à l'usage, tableaux et exemple | revue humaine encore absente |
| Profondeur | 2 | coût, données, adoption, sortie, contrat et archive | aucune |
| Preuve | 2 | sources primaires au plus près et section sources | tarifs à revalider après publication |
| Comparaison | 2 | même périmètre et horizon de quatre ans | aucune |
| Originalité | 2 | diagnostic transparent, local et copiable | unicité SERP non revendiquée |
| Style | 2 | architecture distincte et vendeur déconseillé | lecture orale finale à faire |
| Conversion | 2 | mauvais fits + action autonome + CTA tardif | collecteur d'événements non ajouté |
| SEO/produit | 2 | registre, metadata, JSON-LD, OG, hub, sitemap, maillage, build et rendu navigateur validés | indexation réelle à contrôler après publication |

**Score local : 20/20. Statut maximal : prêt pour revue humaine ; pas encore
publié, indexé ni validé par un lecteur non technique.**

### 15.9 Preuves de vérification locale du 19/07/2026

- `npm test` : 15 fichiers, 71 tests réussis ;
- ESLint ciblé sur les fichiers TypeScript/TSX modifiés : réussi ;
- `npx tsc --noEmit` : réussi ;
- `npm run build` : réussi, 82 pages statiques, route du guide générée ;
- `git diff --check` : réussi ;
- rendu réel contrôlé à 320, 360, 390, 430, 640, 768, 1024, 1280,
  1440 et 1600 px : aucun débordement horizontal après chargement complet ;
- menu ouvert contrôlé à 320 et 1280 px : panneau contenu dans le viewport ;
- diagnostic contrôlé sur les verdicts Excel fiabilisé, logiciel existant,
  prototype Power Apps, Power Apps/low-code et cadrage sur mesure ;
- réinitialisation et confirmation visuelle de la copie du résultat contrôlées ;
- aucune erreur ni alerte dans la console du navigateur ;
- canonique, `index, follow`, un seul H1, données structurées `Article` et
  `BreadcrumbList` valides ; FAQ visible sans schéma `FAQPage` ;
- carte présente sur `/guides`, URL présente dans `/sitemap.xml`, image Open
  Graph servie en PNG 1200 × 630 avec un statut HTTP 200.

La capture mobile a été relue en thème sombre, de même que le hero bureau, le
diagnostic et l'image de partage. La validation éditoriale par un dirigeant ou
un indépendant reste volontairement distincte de cette QA technique.
