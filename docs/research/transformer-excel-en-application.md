# Brief de rédaction — « Transformer un fichier Excel en application métier »

> **Avis d'autorité P1 v2 — 25 juillet 2026.** La section 16 constitue le
> dossier de recherche opposable pour la prochaine rédaction. Elle remplace les
> affirmations de différenciation, tarifs, limites, calculs, score local et plan
> de rédaction des sections 1 à 15 lorsqu'ils divergent. Ces sections restent
> conservées comme historique : leur mention « seul guide », leur score 20/20,
> leur statut de publication et tout fait daté du 19 ou du 20 juillet ne doivent
> pas être repris sans la preuve P1 v2 correspondante. La page publique n'a pas
> été modifiée pendant cette passe.

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

_(Personnage composite fictif, construit pour illustrer les calculs. À présenter comme tel dans le guide — jamais comme un client réel ni comme un témoignage.)_

Situation de départ, chiffrée et cohérente d'un bout à l'autre du guide :

| Élément                                 | Valeur retenue                                                          |
| --------------------------------------- | ----------------------------------------------------------------------- |
| Fichier                                 | `Suivi_interventions_2026_v7_FINAL.xlsx`, 6 onglets                     |
| Volume                                  | 38 000 lignes cumulées depuis 2019                                      |
| Personnes devant écrire dans le fichier | 12 (dont 5 techniciens en déplacement)                                  |
| Emplacement                             | NAS du bureau, partage réseau classique                                 |
| Symptôme quotidien                      | « fichier verrouillé par un autre utilisateur » plusieurs fois par jour |
| Temps de consolidation et de ressaisie  | ≈ 4 h par semaine, hypothèse de travail assumée                         |

Pourquoi ces chiffres et pas d'autres — chaque valeur sert un chapitre :

- **12 utilisateurs** : c'est exactement la base des calculs de licences à 4 ans du dossier (Airtable, Grist, Baserow, Power Apps, Glide, Retool).
- **38 000 lignes** : au-dessus du plafond gratuit de tous les outils (Airtable Free 1 000, Grist Free 5 000, Baserow Free 3 000), au-dessus du seuil d'affichage SharePoint (≈ 5 000 par vue), au-dessus des 25 000 lignes de tableur de Glide, mais dans le plan Airtable Team (50 000 par base). Le fil rouge tombe donc pile sur la zone où l'arbitrage est réellement difficile.
- **NAS du bureau** : c'est LA cause du verrouillage, et elle rend la co-édition techniquement impossible (voir §5). Le chapitre « option zéro » démarre là.
- **4 h/semaine** : sert au calcul du coût du statu quo au coût horaire INSEE — présenté comme une hypothèse à remplacer par la mesure du lecteur, jamais comme une donnée.

Trois moments où Nathalie revient dans le texte : le diagnostic (§2 du plan), le calcul à 4 ans (§8), l'arbre de décision final (§16). Ne pas la faire réapparaître à chaque H2, sinon le procédé s'use.

---

## 3. Les 15 trous du top 10 (ce que les concurrents ne traitent pas)

| #   | Trou                                                | Traité dans le H2 n° |
| --- | --------------------------------------------------- | -------------------- |
| 1   | Coût total sur 3 à 5 ans jamais additionné          | 8                    |
| 2   | Réversibilité et lock-in : comment on sort          | 13                   |
| 3   | Propriété du code et clauses contractuelles         | 12                   |
| 4   | Risque d'échec, signaux d'alerte, plan B            | 15                   |
| 5   | RGPD, localisation des serveurs, article 28         | 10                   |
| 6   | Coût interne caché en temps salarié                 | 9                    |
| 7   | Scénario « ne rien refaire »                        | 4                    |
| 8   | Vrai coût de Power Apps sous Microsoft 365          | 6                    |
| 9   | Qui maintient après la livraison, shadow IT no-code | 14                   |
| 10  | Qualité des données de départ                       | 2 et 9               |
| 11  | Migration de l'historique et conservation légale    | 11                   |
| 12  | Arbre de décision neutre                            | 16                   |
| 13  | Passage du no-code au sur-mesure                    | 5 et 13              |
| 14  | Sécurité d'exploitation, sauvegardes, reprise       | 14                   |
| 15  | Sources statistiques défaillantes sur toute la SERP | 3                    |

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
  - Fiabilité : **moyenne** — article non daté dans le résultat obtenu, non recoupé avec la page tarifs qui n'affiche pas l'option lisiblement. À revérifier avant toute reprise de cette affirmation dans le guide.

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

| Outil      | Plan                      | Tarif catalogue relevé le 19/07/2026                            | Devise / TVA                |
| ---------- | ------------------------- | --------------------------------------------------------------- | --------------------------- |
| Power Apps | Premium                   | 17,30 € / utilisateur / mois (annuel)                           | € **HT confirmé**           |
| Power Apps | Premium ≥ 2 000 postes    | 10,40 € / utilisateur / mois                                    | € HT confirmé               |
| Power Apps | Add-on capacité Dataverse | 34,70 € / Go / mois                                             | € HT confirmé               |
| Power Apps | Développeur               | Gratuit, environnements non productifs                          | —                           |
| Airtable   | Free                      | 0 $                                                             | —                           |
| Airtable   | Team                      | 20 $ / utilisateur / mois (annuel)                              | $, TVA non mentionnée       |
| Airtable   | Business                  | 45 $ / utilisateur / mois (annuel)                              | $, TVA non mentionnée       |
| Airtable   | Enterprise Scale          | Sur devis                                                       | —                           |
| Grist      | Pro                       | 10 $ / utilisateur / mois (mensuel), 8 $ (annuel)               | $, TVA non mentionnée       |
| Grist      | Business                  | 30 $ (mensuel), 24 $ (annuel), minimum 5 utilisateurs           | $, TVA non mentionnée       |
| Grist      | Community auto-hébergée   | Gratuite, open source via GitHub                                | —                           |
| Baserow    | Premium                   | 10 $ / utilisateur / mois (annuel), 12 $ (mensuel)              | $, TVA non mentionnée       |
| Baserow    | Advanced                  | 18 $ / utilisateur / mois (annuel), 22 $ (mensuel)              | $, TVA non mentionnée       |
| Glide      | Business                  | 199 $ / mois (annuel), 30 utilisateurs inclus, +5 $/utilisateur | $, TVA non mentionnée       |
| Retool     | Team                      | 9 € / builder / mois, 5 € / utilisateur interne / mois          | € — périodicité non établie |
| Retool     | Business                  | 46 € / builder / mois, 14 € / utilisateur interne / mois        | € — périodicité non établie |

Autres éléments relevés : Grist applique une réduction de 50 % sur le plan Pro pour les organismes à but non lucratif sur présentation d'une Letter of Determination. Retool : utilisateurs externes gratuits de 0 à 50, puis 7,33 € (51-250), 5,41 € (251-500), 3,60 € au-delà de 500. Baserow référence une option d'auto-hébergement sans tarif public sur la page.

### Coût de licence cumulé sur 4 ans à 12 utilisateurs

Calcul de l'auteur : prix catalogue officiels du 19/07/2026 × 12 utilisateurs × 48 mois. **Hors mise en œuvre, hors reprise de données, hors formation, hors temps salarié.**

| Outil et plan                                             | Licences seules sur 4 ans |
| --------------------------------------------------------- | ------------------------- |
| Airtable Business                                         | ≈ 25 920 $                |
| Grist Business (annuel)                                   | ≈ 13 824 $                |
| Airtable Team                                             | ≈ 11 520 $                |
| Retool Business (2 builders + 10 utilisateurs internes)   | ≈ 11 136 €                |
| Baserow Advanced (annuel)                                 | ≈ 10 368 $                |
| Power Apps Premium                                        | ≈ 9 965 € HT              |
| Glide Business (30 utilisateurs inclus, donc 12 couverts) | ≈ 9 552 $                 |

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

| Plateforme                    | Plafond de volume                                                                                                                                                         | Historique / traçabilité              | Point de bascule à signaler                                                                                                                             |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Excel (format)                | 1 048 576 lignes, 16 384 colonnes, 32 767 caractères/cellule, 65 490 styles, 64 niveaux d'imbrication, 255 arguments/fonction, 2 Go en 32 bits                            | Aucun historique par ligne nativement | Le blocage réel est le nombre d'écrivains simultanés, pas le volume                                                                                     |
| Excel (co-édition)            | —                                                                                                                                                                         | —                                     | 3 conditions cumulatives ; 0 co-édition sur SharePoint on-premises ou partage réseau ; 1 utilisateur non conforme bloque 100 % des autres               |
| SharePoint Online             | 30 000 000 d'éléments par liste                                                                                                                                           | —                                     | Seuil d'affichage ≈ 5 000 éléments, **non modifiable en ligne**                                                                                         |
| OneDrive / SharePoint Online  | 250 Go par fichier                                                                                                                                                        | —                                     | Rarement le vrai blocage                                                                                                                                |
| Airtable                      | 1 000 / 50 000 / 125 000 enregistrements **par base** ; pièces jointes 1 / 20 / 100 Go ; API 1 000 / 100 000 / illimité appels par mois                                   | 2 semaines / 1 an / 1 an              | Au-delà de 125 000 : Enterprise Scale, tarif non public                                                                                                 |
| Grist                         | 5 000 / 100 000 / 150 000 enregistrements **par document**                                                                                                                | Snapshots 30 jours / 3 ans / 5 ans    | Minimum 5 utilisateurs (Business), 50 (Enterprise) ; seule édition Community open source auto-hébergeable                                               |
| Baserow                       | 3 000 / 50 000 / 250 000 / 1 000 000 lignes **par espace de travail** ; stockage 2 / 20 / 100 / 1 000 Go ; crédits d'automatisation 2 000 / 100 000 / 500 000 / 2 000 000 | —                                     | Limite par espace de travail, **non comparable à Airtable** (par base)                                                                                  |
| Glide                         | 25 000 lignes de tableur tous plans ; high-scale 25 000 / 50 000 / 100 000                                                                                                | —                                     | Facturation à l'usage : 250 / 500 / 5 000 mises à jour incluses puis 0,02 $ l'unité → coût mensuel imprévisible                                         |
| Power Apps                    | 250 Mo Dataverse + 2 Go fichiers inclus dans Premium                                                                                                                      | —                                     | Dépassement à 34,70 € HT/Go/mois ; SQL Server et Dataverse absents des connecteurs Standard ; 1 connecteur premium = 100 % des utilisateurs à licencier |
| Power Apps pour M365 (inclus) | —                                                                                                                                                                         | —                                     | Exclut : données on-premises, connecteurs premium, connecteurs personnalisés                                                                            |

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

## 13. Registre des points écartés ou à revalider avant réutilisation

| #   | Point                                                                                                                           | Action requise                                                                                                                                                                                                                                                                                                                                                                                           |
| --- | ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | HTTP 404 sur la page canonique des limites SharePoint (`learn.microsoft.com/.../software-boundaries-and-limits-for-sharepoint`) | Les limites retenues (30 M d'éléments, seuil 5 000) viennent de deux autres pages Microsoft concordantes. Revérifier la page de référence.                                                                                                                                                                                                                                                               |
| 2   | FAQ de licences Power Apps                                                                                                      | Ouvrir et lire intégralement https://learn.microsoft.com/en-us/power-platform/admin/powerapps-licensing-faq (sans tiret) pour confirmer la règle « un connecteur premium = tous les utilisateurs à licencier ». URL avec tiret et `.../office/troubleshoot/excel/best-practices-open-save-excel` renvoient 404.                                                                                          |
| 3   | PDF du Baromètre France Num 2025 non exploité (retour vide)                                                                     | Confirmer les chiffres (11 021 entreprises, 88 %, 69 %, 75 %) sur le PDF primaire avec numéros de page. **Et compléter** : le baromètre contient probablement des données sur les freins (coût, temps, compétences) et sur le budget numérique moyen des TPE/PME, très utiles au guide et non récupérées.                                                                                                |
| 4   | Contradiction sur les tarifs Retool                                                                                             | Page officielle : 46 €/builder/mois (Business). Sources tierces : 65 $ mensuel, 50 $ annuel. Périodicité non établie. **Ne pas réintroduire ces montants dans le guide sans nouveau relevé, capture d'écran à l'appui, en basculant explicitement le sélecteur « Pay annually » puis « Pay monthly ».**                                                                                                  |
| 5   | Limite de co-édition simultanée (99 co-auteurs, recommandation de 10)                                                           | Non confirmée en source primaire ; la page Microsoft consultée ne mentionne aucun nombre maximal. Vérifier sur https://support.microsoft.com/en-us/sharepoint/get-started-with-sharepoint/document-collaboration-and-co-authoring — sinon ne pas citer.                                                                                                                                                  |
| 6   | Tarifs Airtable mensuels sans engagement                                                                                        | Non affichés sur la page publique (seuls 20 $ et 45 $ annuels le sont). Ne pas publier 24 $ / 54 $ en l'état.                                                                                                                                                                                                                                                                                            |
| 7   | Statut fiscal des tarifs en dollars inconnu                                                                                     | Airtable, Grist, Baserow, Glide et Retool n'affichent aucune mention HT/TTC. Le traitement de TVA dépend notamment du fournisseur, de sa localisation, du client et de son statut. **Ne pas présumer l'autoliquidation ni la récupération** : vérifier la facture, la situation et les sources officielles en vigueur ; seul Microsoft France affiche ici « La T.V.A. n'est pas comprise dans le prix ». |
| 8   | Étude 2024 sur les erreurs de tableur (Prof. Pak-Lok Poon, via phys.org)                                                        | Chiffre de 94 % identique à celui de Panko (< 2004). Forte suspicion de circularité. **Ne pas citer** tant que la publication académique originale n'a pas été identifiée, lue et datée.                                                                                                                                                                                                                 |
| 9   | Rapport CHAOS du Standish Group inaccessible (payant)                                                                           | Chiffres 31 / 50 / 19 issus uniquement de synthèses tierces. Aucune édition depuis 2020. Si cité : année, absence de méthodologie publiée, critiques académiques — obligatoires.                                                                                                                                                                                                                         |
| 10  | Article du Financial Times sur le fonds souverain norvégien non lu (paywall)                                                    | Rechercher le communiqué ou le rapport primaire NBIM (nbim.no) avant de qualifier l'incident d'« erreur Excel ».                                                                                                                                                                                                                                                                                         |
| 11  | Aucune source publique fiable sur le prix moyen d'un développement sur mesure en France                                         | Ni INSEE, ni France Num, ni Bpifrance, ni Syntec Numérique. **Ne pas publier de fourchette présentée comme une donnée de marché.** Publier une méthode de calcul.                                                                                                                                                                                                                                        |
| 12  | Aucune statistique sourçable sur le taux d'abandon des applications no-code en PME ni sur le shadow IT no-code                  | Traiter qualitativement, en assumant l'absence de chiffre. Écrire « aucune statistique publique ne mesure ce phénomène ».                                                                                                                                                                                                                                                                                |
| 13  | Aucune source institutionnelle proposant un arbre de décision neutre tableur / no-code / sur-mesure                             | Recherche complémentaire ciblée à mener sur bpifrance.fr et les publications de CCI France avant rédaction. Le Baromètre France Num reste la seule source institutionnelle exploitable.                                                                                                                                                                                                                  |
| 14  | Option d'auto-hébergement Retool (plans Free et Startup)                                                                        | Article de blog officiel non daté, non recoupé avec la page tarifs. Revérifier avant toute reprise de l'affirmation.                                                                                                                                                                                                                                                                                     |

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
Statut au 20 juillet 2026 : publié dans le registre éditorial, parmi les 40 `PUBLISHED_GUIDES` ; le hub, le sitemap et `llms.txt` sont alimentés automatiquement lors du build ; aucun test lecteur humain, déploiement actif ou état d'indexation Google n'est déduit de ce statut
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

| Page voisine                           | Intention                            | Différence du nouveau guide                       | Arbitrage                                            |
| -------------------------------------- | ------------------------------------ | ------------------------------------------------- | ---------------------------------------------------- |
| `prix-logiciel-sur-mesure`             | connaître un budget de développement | décider s'il faut quitter Excel et comment migrer | liens croisés ; aucune nouvelle fourchette de marché |
| `no-code-ou-sur-mesure`                | comparer deux modes de construction  | comparer quatre sorties depuis un tableur précis  | le nouveau guide renvoie au comparatif détaillé      |
| `/outils/calculateur-cout-excel`       | estimer un coût du statu quo         | diagnostic qualitatif et protocole de migration   | liens croisés ; le diagnostic ne calcule aucun prix  |
| `/services/outils-internes-sur-mesure` | acheter une prestation               | prendre une décision autonome avant contact       | CTA tardif et mauvais fits explicites                |

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

| Affirmation publiée                                                                     | Source primaire revalidée le 19/07/2026                |            Confiance | Conséquence                                          |
| --------------------------------------------------------------------------------------- | ------------------------------------------------------ | -------------------: | ---------------------------------------------------- |
| Excel : 1 048 576 lignes et 16 384 colonnes                                             | Microsoft Support, `excel-specifications-and-limits`   |               élevée | limite de format, non critère de migration           |
| Coédition : OneDrive/OneDrive Entreprise/SharePoint Online ; pas SharePoint on-premises | Microsoft Support, `collaborate-on-excel-workbooks...` |               élevée | tester l'option zéro avant le projet                 |
| Power Apps pour M365 : standard oui, on-premises/premium/personnalisé non               | Microsoft Learn, `pricing-billing-skus`                |               élevée | vérifier les connecteurs avant le calcul             |
| Power Apps Premium : 17,30 € HT/utilisateur/mois annuel ; Dataverse 34,70 € HT/Go/mois  | Microsoft France, page tarifs                          | élevée mais volatile | dater et archiver le tarif du devis                  |
| Résidence Airtable UE réservée à Enterprise ; certaines métadonnées restent aux US      | Airtable Support, `data-residency-at-airtable`         | élevée mais volatile | vérifier le plan réel, pas la promesse générale      |
| Obligations du sous-traitant dans le contrat                                            | CNIL, définition du sous-traitant                      |               élevée | le client reste responsable de traitement            |
| Conservation dix ans / six ans et forme informatique                                    | Légifrance, L123-22 et L102 B                          |               élevée | distinguer migration et archive légale               |
| Cession : droits distincts + étendue, destination, lieu, durée                          | Légifrance, L131-3                                     |               élevée | propriété, accès et réversibilité doivent se cumuler |

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

| Axe         | Note | Preuve                                                                                     | Réserve de maintenance                                     |
| ----------- | ---: | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------- |
| Intention   |    2 | réponse conditionnelle dès l'ouverture                                                     | aucune                                                     |
| Décision    |    2 | quatre sorties + diagnostic + plan 30 jours                                                | aucune ; les cinq familles de verdict ont été exercées     |
| Pédagogie   |    2 | termes définis à l'usage, tableaux et exemple                                              | revue humaine encore absente                               |
| Profondeur  |    2 | coût, données, adoption, sortie, contrat et archive                                        | aucune                                                     |
| Preuve      |    2 | sources primaires au plus près et section sources                                          | tarifs à revalider avant chaque modification substantielle |
| Comparaison |    2 | même périmètre et horizon de quatre ans                                                    | aucune                                                     |
| Originalité |    2 | diagnostic transparent, local et copiable                                                  | unicité SERP non revendiquée                               |
| Style       |    2 | architecture distincte et vendeur déconseillé                                              | lecture orale finale à faire                               |
| Conversion  |    2 | mauvais fits + action autonome + CTA tardif                                                | collecteur d'événements non ajouté                         |
| SEO/produit |    2 | registre, metadata, JSON-LD, OG, hub, sitemap, maillage, build et rendu navigateur validés | indexation réelle à contrôler après publication            |

**Score local : 20/20. Statut au 20 juillet 2026 : publié dans le registre
éditorial parmi les 40 `PUBLISHED_GUIDES`, sans validation par un lecteur non
technique et sans preuve d'indexation.**

### 15.9 Discipline de preuve après publication

Les anciens décomptes de tests et de pages de la build du 19 juillet ont été
retirés : ils ne prouvent rien sur un snapshot modifié. Pour chaque livraison,
il faut désormais rattacher les éléments suivants au commit et à l'artefact
exacts :

- batterie complète décrite au §11 de la règle d'or de vigilance ;
- rendu réel aux largeurs prévues par la charte, menu ouvert compris ;
- cinq familles de verdict du diagnostic, réinitialisation et copie du
  résultat ;
- absence de débordement horizontal et d'erreur console ;
- canonical, directive `index,follow`, H1, `Article`, `BreadcrumbList`, carte
  du hub, entrée sitemap et image Open Graph 1200 × 630 ;
- présence sur le déploiement actif après livraison.

Ces contrôles techniques ne remplacent pas une lecture humaine. La présence
dans le hub ou le sitemap ne prouve ni découverte, ni exploration, ni
indexation, ni classement.

---

## 16. Dossier P1 v2 — arbitrage mondial, exploitation et coût sur 48 mois

**Date de recherche :** 25 juillet 2026

**Branche observée :** `codex/giga-audit-guides`

**Périmètre de cette passe :** recherche et plan seulement ; aucun composant,
aucune page publique, aucune métadonnée et aucun registre de publication
modifiés.

**Point de départ contrôlé :** dossier de recherche
`608f58968688e6b855ec1ab722d8e3bb09a2feb84f3d45f7f620f945575919b5` ;
[audit indépendant du 24 juillet](../audits/giga-audit-2026-07-24/guides/transformer-excel-en-application.md)
à 70/100 et verdict NO-GO pour une promesse de guide de référence.

### 16.1 Journal des quatre passes et autorité du snapshot

**Propriétaire éditorial unique pour P2 :** l’agent racine `/root` a délégué
le 25 juillet 2026 l’édition de ce seul slug à
`/root/excel_p1_mondial`. Les sous-audits `excel_p2_sources` et
`excel_p2_contract` sont restés strictement en lecture et recommandation ;
`/root/excel_p1_mondial` est l’unique auteur des modifications P2.

| Passe                        | État                     | Date       | Responsable                                         | Snapshot                                                                           | Blocages                                       |
| ---------------------------- | ------------------------ | ---------- | --------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------- |
| 1. Recherche                 | Terminée — porte validée | 25/07/2026 | `excel_p1_mondial`                                  | `docs/research/manifests/transformer-excel-en-application-p1-2026-07-25-r1.sha256` | aucun blocage P1                               |
| 2. Rédaction et intégration  | Terminée — porte validée | 25/07/2026 | `/root/excel_p1_mondial`, par délégation de `/root` | `docs/research/manifests/transformer-excel-en-application-p2-2026-07-25-r1.sha256` | aucun blocage P2 ; revue humaine non effectuée |
| 3. Contre-audit indépendant  | Bloquée                  | —          | auditeur distinct de P2                             | —                                                                                  | contre-audit P3 non lancé                      |
| 4. Plume humaine et contrôle | Bloquée                  | —          | relecteur final                                     | —                                                                                  | P3 non validée                                 |

Le manifeste externe contient le hash final du présent dossier. Toute
modification matérielle ultérieure invalide cette porte P1 jusqu'à revue du
diff et nouveau manifeste. Les mentions historiques de score, publication ou
indexation des §1–15 n'ont aucune autorité sur l'état présent.

### 16.2 Fiche d'identité, décision unique et langage humain

```text
Slug : transformer-excel-en-application
Statut actuel : P1 v2 validée ; page existante à reprendre en P2
Requête principale : transformer un fichier Excel en application métier
Moment du parcours : décider puis sécuriser
Lecteur précis : dirigeant de PME/TPE ou responsable d'exploitation non
  technique, avec un fichier utilisé par plusieurs personnes et une décision
  d'investissement à prendre
Situation déclenchante : copies concurrentes, saisies mobiles, règles fragiles,
  droits insuffisants, historique introuvable ou dépendance à une seule personne
Décision principale : choisir entre conserver Excel, l'industrialiser, acheter
  un logiciel standard, configurer une plateforme nommée ou développer sur mesure
Niveau au départ : sait décrire son processus, mais pas auditer une plateforme
Action autonome : mesurer deux semaines de symptômes puis exécuter le test des
  dix opérations sur un échantillon non sensible
CTA possible : obtenir une note de décision à cinq voies, ses hypothèses de TCO
  et le plan de pilote ; pas une promesse automatique de développement
Hors périmètre : conseil juridique individualisé, audit RGPD complet,
  architecture détaillée, prix moyen du sur-mesure, promesse de classement Google
Date de recherche : 25/07/2026
Responsable de synthèse : agent de recherche P1 `excel_p1_mondial`
```

**Phrase réelle du lecteur :** « Mon Excel fait tourner l'entreprise, mais je
ne sais pas si je dois le fiabiliser, acheter un logiciel ou faire développer
quelque chose, ni combien chaque choix coûtera vraiment sur quatre ans. »

**Réponse attendue en une phrase :** ne remplacez pas Excel à cause d'un nombre
de lignes ou d'une démo séduisante ; éliminez d'abord les options qui échouent
sur vos dix opérations, puis comparez le coût complet des options restantes
sur 48 mois.

Les cinq questions indispensables sont :

1. quelles opérations et quelles exceptions doivent réellement fonctionner ;
2. qui peut lire, créer, modifier, approuver, exporter et administrer ;
3. comment prouver une modification, restaurer une erreur et continuer après
   le départ du créateur ;
4. que récupère-t-on à la sortie : données, pièces jointes, historiques,
   automatisations, configuration et code ;
5. quel est le coût complet sur 48 mois, temps interne et sortie compris.

Les trois craintes à traiter sans dramatiser sont la perte d'historique, la
dépendance à une personne ou à un éditeur et un projet plus coûteux que le
problème initial. Les termes à traduire au premier usage sont **coût total de
possession** (tout ce que le choix coûte sur la durée), **délégation** (requête
calculée par la source de données plutôt que sur un petit échantillon local),
**journal d'audit** (preuve de qui a changé quoi et quand), **RPO** (quantité de
données qu'on accepte de perdre) et **RTO** (temps maximal pour redémarrer).

Projet des 150 premiers mots pour P2 :

1. scène vécue : trois copies, une formule connue d'une seule personne et
   quatre heures de ressaisie ;
2. réponse courte : un développement n'est pas automatiquement la bonne suite ;
3. terme central : « application métier » = interface, données, règles,
   droits et exploitation, pas une simple copie visuelle du classeur ;
4. décision annoncée : cinq voies passées au même test, puis TCO à 48 mois ;
5. action immédiate : commencer par compter les symptômes pendant deux semaines.

### 16.3 Déduplication et frontière avec les pages voisines

| Page existante                                      | Intention propre                            | Ce que ce guide ne doit pas recopier      | Différence nécessaire et lien                                                                                    |
| --------------------------------------------------- | ------------------------------------------- | ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `/guides/power-apps-ou-application-sur-mesure`      | arbitrer deux architectures déjà envisagées | comparatif détaillé Power Apps/sur-mesure | ce guide intervient avant le choix de plateforme et compare cinq voies ; lien lorsque Power Apps reste candidate |
| `/guides/calculer-roi-application-metier`           | calculer la rentabilité d'un projet défini  | pédagogie générale du ROI                 | ici, calculer un TCO de sélection et des seuils de bascule ; lien pour approfondir les gains attribuables        |
| `/guides/application-gestion-interventions-terrain` | concevoir un cas d'usage terrain précis     | catalogue de fonctionnalités mobiles      | ici, le terrain n'est qu'un scénario de test ; lien si l'usage principal est l'intervention                      |
| `/services/outils-internes-sur-mesure`              | présenter une prestation                    | prouver la valeur d'une agence            | conserver un guide autonome, capable de conclure « ne pas acheter » ou « choisir un standard »                   |

**Justification de l'URL distincte :** elle répond à la décision située en amont
— faut-il transformer ce classeur et par quelle famille de solution ? — alors
que les pages voisines évaluent une architecture, un ROI ou un cas d'usage déjà
plus défini.

### 16.4 Recherche internationale, corpus et saturation

Recherche conduite les 24 et 25 juillet 2026. Les pages commerciales françaises
et anglophones observées par l'audit du 24 juillet servent à comprendre la
réponse concurrentielle ; les faits retenus ci-dessous proviennent de sources
primaires. Requêtes représentatives :

- France : `transformer fichier Excel en application métier PME coût`,
  `Excel Power Apps no-code logiciel standard ou sur mesure` ;
- États-Unis : `replace spreadsheet with business application lifecycle cost`,
  `Power Apps Excel delegation audit backup exit` ;
- Royaume-Uni : `spreadsheet quality assurance business model owner version
control`, `Excel model QA assumptions log` ;
- Allemagne : `BSI Datensicherungskonzept Wiederherstellung RPO` ;
- recherche produit internationale : documentations Microsoft Power Platform,
  Google AppSheet et Airtable sur limites, droits, audit, sauvegarde,
  propriété et export.

| Marché ou famille                                 | Réponse utile observée                                                                    | Ce qu'elle ajoute                                                         | Limite ou conflit d'intérêt                                                                      |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| France — pages d'agences et partenaires Microsoft | cas concrets, coédition, mobile, workflows et intégrations                                | mots et objections du dirigeant français                                  | chaque vendeur tend à faire gagner sa propre solution ; délais et gains non généralisables       |
| France/UE — CNIL, ANSSI, règlement Data Act       | sécurité, restauration, rôles, sortie et continuité                                       | cadre français/européen pour requalifier les conseils étrangers           | ne remplace pas un conseil juridique ni l'examen du contrat concret                              |
| États-Unis — Microsoft, Google, Airtable          | limites documentées des plateformes, prix publics, audit, versions et export              | tests produit reproductibles au lieu de promesses                         | documentation d'éditeur : exacte sur le produit, pas neutre sur l'opportunité d'achat            |
| États-Unis — GAO Cost Estimating Guide            | point de départ, cycle de vie, hypothèses, sensibilité, actualisation par les coûts réels | méthode robuste de TCO et de décision                                     | référentiel public américain ; principes transférables, aucune obligation pour une PME française |
| Royaume-Uni — AQuA Book et outils DESNZ           | rôles séparés, revue indépendante, journal d'hypothèses, journal QA, versionnement        | industrialiser Excel sans prétendre qu'un tableur devient une application | doctrine publique britannique ; à utiliser comme méthode, pas comme conformité française         |
| Allemagne — BSI CON.3                             | concept de sauvegarde, RPO, responsabilités et tests de restauration                      | distingue copie, sauvegarde et retour réellement vérifié                  | référentiel de sécurité ; les objectifs doivent être fixés par le métier français                |

**Critère de saturation :** la collecte s'arrête lorsque les nouvelles sources
n'ajoutent plus une nouvelle famille de réponse parmi : conserver ou fiabiliser
le tableur, sélectionner une solution par test métier, contrôler les limites de
données, attribuer les responsabilités, prouver audit/restauration/sortie,
calculer le cycle de vie et organiser un retour arrière. Les dernières sources
allemandes et britanniques ont confirmé les mêmes familles de contrôle sans
ajouter une sixième voie de décision. La saturation porte sur les **types
d'information utiles**, pas sur l'exhaustivité mondiale de toutes les pages.

### 16.5 Fiche de preuves primaires utilisables

Toutes les sources ont été consultées le 25 juillet 2026, sauf mention
contraire. Les prix sont volatils et doivent être rouverts en P2 puis à chaque
révision substantielle. Les principes étrangers sont explicitement
requalifiés pour une PME française.

| Affirmation utilisable                                                                                                                                                                                                                                           | Source primaire et passage utile                                                                                                                                                                                                                                                                                                | Nature et périmètre                                | Limite                                                                                                                      | Conséquence lecteur / emplacement P2                                                                             | Fraîcheur                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| Une formule Power Apps non délégable travaille sur les 500 premières lignes, plafond configurable à 2 000, et peut renvoyer un résultat faux au-delà.                                                                                                            | [Microsoft Learn — délégation Power Apps](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/delegation-overview), paragraphes « Query limitations »                                                                                                                                                                | fait produit mondial                               | 2 000 n'est pas la capacité totale d'une application ; cela dépend de la formule et de la source                            | faire chercher `X-2501` et recalculer un total dans le test des dix opérations ; lien au niveau de l'affirmation | page mise à jour le 13/01/2026                |
| Dataverse, SharePoint, SQL Server et Salesforce ont des opérations délégables documentées ; Excel en supporte moins.                                                                                                                                             | même source Microsoft, « Delegable data sources »                                                                                                                                                                                                                                                                               | fait produit                                       | chaque fonction et connecteur doit être vérifié                                                                             | ne jamais choisir la source uniquement parce qu'elle « se connecte »                                             | actuelle                                      |
| Le connecteur Excel Online (Business) limite le fichier à 25 Mo ; un fichier peut rester verrouillé jusqu'à six minutes ; les modifications simultanées manuelles et par connecteur ne sont pas prises en charge et risquent une incohérence.                    | [Microsoft Learn — Excel Online (Business)](https://learn.microsoft.com/en-us/connectors/excelonlinebusiness/), « General limits » et « Known issues and limitations »                                                                                                                                                          | fait produit                                       | concerne ce connecteur, pas tout usage d'Excel                                                                              | éliminer l'architecture « Excel comme pseudo-base multi-écriture » si la concurrence n'est pas maîtrisée         | actuelle                                      |
| Les réponses du connecteur peuvent être limitées par défaut et des écritures retentées peuvent produire des doublons.                                                                                                                                            | même source Microsoft, actions et limites                                                                                                                                                                                                                                                                                       | fait produit                                       | comportement à confirmer sur le flux réel                                                                                   | test d'import, d'idempotence et de rapprochement obligatoire                                                     | actuelle                                      |
| Power Apps Premium est affiché à 17,30 € HT par utilisateur et par mois, paiement annuel ; la page avertit que le prix réel peut varier.                                                                                                                         | [Microsoft France — tarification Power Apps](https://www.microsoft.com/fr-fr/power-platform/products/power-apps/pricing), offre Premium et avertissement tarifaire                                                                                                                                                              | prix public France                                 | hors mise en œuvre, migration, administration, capacités supplémentaires, variation contractuelle et TVA                    | exemple de licence seulement, daté ; ne jamais l'appeler « coût de Power Apps »                                  | relevé du 25/07/2026                          |
| L'offre Premium indique 250 Mo de droits de base et 2 Go de fichiers par utilisateur, regroupés au niveau du locataire ; des capacités supplémentaires sont vendues.                                                                                             | même page Microsoft, comparaison et notes 3 à 5                                                                                                                                                                                                                                                                                 | fait tarifaire                                     | consommation et droits réels du tenant à auditer                                                                            | inscrire capacité et journaux dans les inconnues du TCO                                                          | relevé du 25/07/2026                          |
| Les environnements Power Platform avec base sont sauvegardés automatiquement ; rétention par défaut sept jours, jusqu'à 28 jours pour certains environnements de production gérés ; une sauvegarde n'est pas téléchargeable hors ligne.                          | [Microsoft Learn — sauvegarder et restaurer les environnements](https://learn.microsoft.com/en-us/power-platform/admin/backup-restore-environments)                                                                                                                                                                             | fait produit                                       | couverture des apps/flows dépend notamment de leur présence dans une solution Dataverse ; restauration soumise à conditions | exiger un essai de restauration, un RPO/RTO et un export séparé                                                  | actuelle                                      |
| Le départ d'un créateur peut laisser apps et flux sans propriétaire effectif ; Microsoft recommande de détecter les ressources orphelines et d'attribuer un propriétaire/co-propriétaire.                                                                        | [Microsoft Learn — gestion de l'environnement par défaut](https://learn.microsoft.com/en-us/power-platform/guidance/adoption/manage-default-environment) et [gestion d'un flux orphelin](https://learn.microsoft.com/en-us/troubleshoot/power-platform/power-automate/flow-management/manage-orphan-flow-when-owner-leaves-org) | fait de gouvernance                                | ne garantit pas que chaque connexion survive au départ                                                                      | opération 10 du test : désactiver le créateur et vérifier app, flux et administration                            | actuelle                                      |
| L'audit Dataverse doit être activé ; il peut enregistrer utilisateur, date, ancienne/nouvelle valeur et accès, mais consomme du stockage de journal et sa suppression est irréversible.                                                                          | [Microsoft Learn — audit Dataverse](https://learn.microsoft.com/en-us/power-platform/admin/manage-dataverse-auditing)                                                                                                                                                                                                           | fait produit                                       | audit non automatique pour tous les périmètres                                                                              | préciser champs audités, durée, accès, export et coût de stockage                                                | actuelle                                      |
| Dataverse applique des rôles et privilèges distincts, dont lecture, création, écriture, suppression, ajout et export.                                                                                                                                            | [Microsoft Learn — sécurité des bases](https://learn.microsoft.com/en-us/power-platform/admin/database-security?view=dynamics-ce-odata-9) et [rôles/privilèges](https://learn.microsoft.com/en-us/power-platform/admin/security-roles-privileges)                                                                               | fait produit                                       | la qualité dépend du paramétrage réel                                                                                       | tester trois profils, y compris l'export, plutôt que cocher « gestion des droits »                               | actuelle                                      |
| Microsoft recommande solutions et contrôle de source pour le cycle de vie ; un import non géré peut écraser des personnalisations et ne s'annule pas simplement.                                                                                                 | [Microsoft Learn — import, mise à jour et export de solutions](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/import-update-export-solutions)                                                                                                                                                                 | fait produit                                       | concerne la gestion du cycle de vie Power Platform                                                                          | demander paquet de solution, source, version, procédure de déploiement et retour arrière                         | actuelle                                      |
| AppSheet affiche Starter à 5 $, Core à 10 $ et Enterprise Plus à 20 $ par utilisateur/mois ; Core est inclus dans la plupart des offres Google Workspace payantes.                                                                                               | [Google AppSheet — tarifs](https://about.appsheet.com/pricing/)                                                                                                                                                                                                                                                                 | prix public international en USD                   | devise, fiscalité, éligibilité Workspace et licences d'utilisateurs/invités à confirmer                                     | ne pas convertir en euros sans date et taux ; demander le rapport de licences réel                               | relevé du 25/07/2026                          |
| AppSheet Database est limité à 2 500 lignes en Starter/Core et 200 000 en Enterprise Plus.                                                                                                                                                                       | [Google Support — AppSheet Database limits](https://support.google.com/appsheet/answer/12653576?hl=en)                                                                                                                                                                                                                          | fait produit sur AppSheet Database                 | ce n'est pas le plafond de toutes les autres sources AppSheet                                                               | ne pas promettre qu'un plan Core stockera le cas central de 38 000 lignes dans AppSheet Database                 | actuelle                                      |
| AppSheet télécharge le jeu de données de travail ; avec un tableur, le filtrage côté serveur intervient après lecture de la feuille, alors qu'une base peut filtrer à la source.                                                                                 | [Google Support — scaling with data](https://support.google.com/appsheet/answer/10104705?hl=en) et [data size](https://support.google.com/appsheet/answer/10104789?hl=en)                                                                                                                                                       | fait produit                                       | performance dépend de la source, des colonnes, filtres et appareils                                                         | tester le jeu complet et le mobile, pas une démo de 30 lignes                                                    | actuelle                                      |
| Un filtre de sécurité AppSheet ne suffit pas à lui seul à sécuriser les opérations sensibles ; la source doit aussi les protéger et l'identification est nécessaire pour les règles par utilisateur.                                                             | [Google Support — security filters](https://support.google.com/appsheet/answer/10104488?hl=en)                                                                                                                                                                                                                                  | fait produit                                       | formulation Google, à appliquer au scénario testé                                                                           | vérifier les droits à la source et tenter un export/accès interdit                                               | actuelle                                      |
| L'historique d'audit AppSheet est conservé sept jours pour la plupart des comptes et 53 jours en Enterprise Plus ; l'identification est nécessaire pour attribuer les actions.                                                                                   | [Google Support — Audit History](https://support.google.com/appsheet/answer/10104794?hl=en)                                                                                                                                                                                                                                     | fait produit                                       | BigQuery/export et profondeur dépendent du plan                                                                             | comparer la durée métier requise, ne pas confondre historique et archive                                         | actuelle                                      |
| Une source partagée ou un compte de service réduit la dépendance à une personne ; transférer l'app sans transférer/partager ses sources peut l'arrêter.                                                                                                          | [Google Support — shared data sources](https://support.google.com/appsheet/answer/10104801?hl=en) et [transfer an app](https://support.google.com/appsheet/answer/10104991?hl=en)                                                                                                                                               | fait produit                                       | le compte de service doit lui-même être gouverné                                                                            | inscrire propriétaire, suppléant, coffre d'accès et test de départ                                               | actuelle                                      |
| La récupération de version AppSheet est de sept jours par défaut, configurable en Enterprise Plus ; l'historique AppSheet Database peut permettre un retour sur modification et la récupération de tables supprimées jusqu'à 30 jours.                           | [Google Support — app versions](https://support.google.com/appsheet/answer/10105387?hl=en) et [database change history](https://support.google.com/appsheet/answer/12726292?hl=en)                                                                                                                                              | fait produit                                       | version de l'app, données et export restent trois objets distincts                                                          | spécifier ce qui est restauré et dans quel délai                                                                 | actuelle                                      |
| Airtable Team est affiché à 24 $ par collaborateur/mois en mensuel ou 20 $ en annuel, avec 50 000 enregistrements par base et un an d'historique.                                                                                                                | [Airtable — plans](https://support.airtable.com/docs/en/airtable-plans)                                                                                                                                                                                                                                                         | prix/limite produit en USD                         | collaborateurs facturables, automatisations, API et autres limites à vérifier                                               | le cas de 38 000 lignes ne peut pas être validé sur le seul plafond d'enregistrements                            | page mise à jour le 09/07/2026                |
| Les snapshots Airtable sont conservés deux semaines en Free, un an en Team, deux ans en Business et trois ans en Enterprise ; restaurer crée une nouvelle base sans son historique de révision antérieur.                                                        | [Airtable — snapshots](https://support.airtable.com/docs/taking-and-restoring-base-snapshots)                                                                                                                                                                                                                                   | fait produit                                       | fréquence automatique non librement planifiable                                                                             | tester restauration, reconnexion des intégrations et bascule vers la base restaurée                              | page mise à jour le 08/07/2026                |
| Un export CSV Airtable contient les URL de pièces jointes, pas les fichiers ; l'interface ne fournit pas un téléchargement massif universel en un clic.                                                                                                          | [Airtable — attachment field](https://support.airtable.com/docs/attachment-field) et [attachment URL behavior](https://support.airtable.com/airtable-attachment-url-behavior)                                                                                                                                                   | fait produit                                       | scripts ou API peuvent compléter l'export                                                                                   | l'opération de sortie doit compter et télécharger réellement les pièces jointes                                  | pages mises à jour en juin 2026               |
| La résidence européenne Airtable relève d'Enterprise Scale ; certaines métadonnées, authentification, analyses et fonctions de support peuvent rester aux États-Unis.                                                                                            | [Airtable — data residency](https://support.airtable.com/docs/data-residency-at-airtable)                                                                                                                                                                                                                                       | fait produit                                       | ne vaut pas pour tous les plans ni tous les types de données                                                                | demander région, périmètre, sous-traitants et migration contractuelle                                            | page mise à jour le 14/07/2026                |
| Le Data Act encadre, pour les services de traitement de données entrant dans son champ, les informations de sortie, l'assistance, la continuité, le délai de transition et la récupération ; les frais de changement doivent disparaître à partir du 12/01/2027. | [Règlement (UE) 2023/2854, articles 25 et 29](https://eur-lex.europa.eu/eli/reg/2023/2854) et [Commission — Data Act explained](https://digital-strategy.ec.europa.eu/en/factpages/data-act-explained)                                                                                                                          | droit UE                                           | qualifier d'abord le service et le contrat ; ne pas donner de conseil juridique individualisé                               | transformer « réversibilité » en inventaire contractuel et test technique, puis faire vérifier le cas si décisif | règlement applicable ; date future explicitée |
| Une politique de sauvegarde doit identifier données vitales, fréquence, responsables, stockage et tests ; l'ANSSI recommande un exercice de restauration régulier et tracé.                                                                                      | [ANSSI — fondamentaux de la sauvegarde](https://messervices.cyber.gouv.fr/guides/fondamentaux-sauvegarde-systemes-dinformation) et [guide d'hygiène informatique](https://messervices.cyber.gouv.fr/documents-guides/guide_hygiene_informatique_anssi.pdf)                                                                      | recommandation française                           | fréquence et objectifs adaptés au risque réel                                                                               | exiger preuve datée de restauration, pas seulement l'icône « sauvegardé »                                        | guide de référence à revalider annuellement   |
| La CNIL recommande de tester régulièrement restauration et continuité, avec rôles, habilitations et traces.                                                                                                                                                      | [CNIL — guide de la sécurité des données personnelles 2024](https://www.cnil.fr/sites/default/files/2024-03/cnil_guide_securite_personnelle_2024.pdf)                                                                                                                                                                           | recommandation française pour données personnelles | obligations précises dépendantes du traitement et des rôles                                                                 | si données personnelles, associer responsable du traitement/DPO ou conseil compétent                             | édition 2024                                  |
| L'AQuA Book 2025 organise la qualité autour de rôles identifiés, d'une assurance indépendante, de versionnement, de documentation et de maintenance.                                                                                                             | [GOV.UK — The AQuA Book](https://www.gov.uk/guidance/the-aqua-book)                                                                                                                                                                                                                                                             | doctrine qualité britannique                       | pas une obligation française                                                                                                | reprendre comme méthode d'industrialisation Excel et de revue, sans label de conformité                          | édition 2025                                  |
| Les outils DESNZ fournissent journaux d'hypothèses, d'activité QA et documentation d'un modèle Excel pour réduire la dépendance et rendre les contrôles traçables.                                                                                               | [GOV.UK — modelling QA tools](https://www.gov.uk/government/publications/energy-security-and-net-zero-modelling-quality-assurance-qa-tools-and-guidance)                                                                                                                                                                        | ressource publique britannique                     | modèles à adapter au contexte PME                                                                                           | actif utile pour la voie « industrialiser Excel »                                                                | actuelle                                      |
| Un coût de cycle de vie robuste part d'un point de départ, d'hypothèses explicites, d'une structure de coûts, d'une analyse de sensibilité et se met à jour avec les coûts réels.                                                                                | [US GAO — Cost Estimating and Assessment Guide](https://www.gao.gov/products/gao-20-195g)                                                                                                                                                                                                                                       | méthode publique américaine                        | ne fixe aucun prix français                                                                                                 | structurer le TCO sur 48 mois et ses inconnues, pas produire un « prix moyen »                                   | guide 2020, méthode stable                    |
| Le référentiel BSI CON.3 distingue sauvegarde, miroir et capacité de restauration ; il demande responsabilités, fréquence, RPO et tests.                                                                                                                         | [BSI — CON.3 Datensicherungskonzept](https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Grundschutz/IT-GS-Kompendium_Einzel_PDFs_2023/03_CON_Konzepte_und_Vorgehensweisen/CON_3_Datensicherungskonzept_Edition_2023.pdf?__blob=publicationFile&v=3)                                                                            | référentiel allemand                               | principes à dimensionner, pas obligation française générale                                                                 | rendre la restauration mesurable et attribuée                                                                    | édition 2023                                  |

### 16.6 Faits, déductions et recommandations : frontière obligatoire

| Type                        | Exemple autorisé                                                                                              | Formulation interdite                                           |
| --------------------------- | ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| Fait vérifié                | « Une requête Power Apps non délégable traite 500 lignes par défaut et peut être portée à 2 000. »            | « Power Apps ne gère que 2 000 lignes. »                        |
| Déduction éditoriale        | « Pour 38 000 lignes, chercher `X-2501` et recalculer un total est un test de recette bloquant. »             | « Dataverse est toujours obligatoire au-delà de 2 000 lignes. » |
| Recommandation Hagnéré Code | « Éliminer une option qui échoue sur droits, rapprochement, restauration, sortie ou départ du propriétaire. » | « Le sur-mesure est forcément plus sûr. »                       |
| Hypothèse illustrative      | « 4 h × 48 semaines × 45 € × 4 ans = 34 560 €. »                                                              | « Votre entreprise économisera 34 560 €. »                      |
| Inconnue                    | « Capacité Dataverse supplémentaire : à confirmer sur le tenant et le devis. »                                | inscrire 0 € parce que le montant n'est pas connu               |

### 16.7 Contradictions, inconnues et données exclues

Les éléments suivants ne passent pas en P2 sans nouvelle preuve :

- « le seul guide du marché », « meilleur guide mondial » ou toute promesse de
  classement ; le corpus n'autorise qu'une différence observable et datée ;
- le score local historique de 20/20 et le statut « publié » des §15.8–15.9 ;
  ils ne décrivent ni la qualité actuelle, ni le déploiement, ni l'indexation ;
- le million de lignes d'Excel comme seuil de décision ; une limite de format
  ne prouve ni performance, ni concurrence, ni droits, ni auditabilité ;
- 2 000 lignes comme capacité de Power Apps ; c'est un plafond local pour une
  requête non délégable, susceptible de produire un résultat incomplet ;
- « Power Apps est inclus dans Microsoft 365 » comme coût nul ; licences,
  connecteurs, production, capacité et droits du tenant doivent être contrôlés ;
- « sauvegardé par le cloud » comme preuve de reprise ; version de l'app,
  données, pièces jointes, flux, connexions et export sont des objets différents ;
- « hébergé en Europe » comme raccourci de conformité ; région, catégories de
  données, métadonnées, sous-traitants, rôles et contrat restent à examiner ;
- un tarif moyen français du développement sur mesure, un délai moyen ou un
  taux d'échec ; le périmètre manque et la précision serait artificielle ;
- les pourcentages viraux d'erreurs Excel, les gains « 10 fois plus vite » et
  les ROI commandés par un éditeur comme preuve applicable à la PME ;
- une baisse de temps convertie automatiquement en économie de trésorerie :
  elle ne devient un gain que si le temps est réaffecté à une production utile
  ou évite un coût réel ;
- le Data Act comme garantie universelle de sortie : le champ du service et le
  contrat concret doivent être qualifiés, si besoin par un spécialiste ;
- tout coût inconnu — incident, connecteur, capacité, migration, support,
  change, export — remplacé par zéro.

Événements imposant une revalidation : changement de prix ou plan d'un éditeur,
modification des limites de délégation/stockage/audit, nouveau contrat,
évolution du Data Act applicable au service, changement du jeu de données ou
du nombre d'utilisateurs, et toute modification substantielle de la page.

### 16.8 Comparaison à périmètre égal : les cinq voies

Avant la démo, le décideur fige une **fiche d'exigences**. Les exigences
universelles sont appliquées à toutes les voies :

1. même jeu de données complet, mêmes règles de validation et mêmes totaux de
   rapprochement ;
2. propriétaire métier, propriétaire technique et suppléant nommés ;
3. sauvegarde, restauration et retour arrière réellement essayés, avec des
   objectifs décidés par le métier ;
4. export des données et pièces jointes, puis inventaire de l'historique, de la
   configuration et des automatisations récupérables ou non ;
5. mêmes 48 mois, mêmes utilisateurs, même coût horaire et mêmes **catégories**
   d'inconnues ; leurs montants restent propres à chaque voie ;
6. critères d'arrêt du pilote et fonctionnement pendant le retour arrière.

Les exigences conditionnelles sont décidées **avant** de voir les produits,
puis restent identiques pour les cinq voies du même scénario :

| Exigence                  | Simple                                                                                        | Central                                                                | Exigeant                                                                |
| ------------------------- | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| Profils à tester          | lecteur, opérateur, administrateur                                                            | lecteur, opérateur, approbateur, administrateur                        | rôles fins par équipe, approbateur, exporteur et administrateur séparés |
| Preuve d'une modification | version récupérable, acteur et date ; ancienne/nouvelle valeur souhaitable mais non bloquante | acteur, date, ancienne et nouvelle valeur obligatoires                 | même preuve, exportable et conservée pendant la durée métier décidée    |
| Édition simultanée        | tester deux opérateurs si plusieurs personnes écrivent ; sinon noter « non applicable »       | obligatoire                                                            | obligatoire avec charge et mode déconnecté si demandé                   |
| Droits                    | lecture/écriture et administration séparées                                                   | création, écriture, approbation, suppression, export et administration | droits fins à la source, séparation des tâches et revue périodique      |
| Volume du test            | 1 500 lignes réelles + paquet de contrôle à 3 050 lignes                                      | 38 000 lignes ou copie représentative complète                         | 150 000 lignes, pièces et pics de charge représentatifs                 |
| Audit/continuité          | versionnement et restauration suffisants au risque accepté                                    | audit détaillé, propriétaire de secours, RPO/RTO décidés               | audit durable, suppléance exercée et continuité selon criticité         |

Une option n'est donc jamais éliminée pour une exigence dont le scénario n'a
pas besoin, et aucune option ne bénéficie d'une exigence allégée. « Conserver
Excel » reste éligible dans le cas simple si ses limites sont explicitement
acceptées ; il est éliminé dès qu'une exigence centrale ou exigeante qu'il ne
peut pas prouver devient obligatoire.

| Voie                                                 | Elle gagne si…                                                                                                                                        | Elle perd si…                                                                                                                         | Gouvernance et données minimales                                                                                                                   | Audit, restauration et sortie                                                                                                                                           | Coût à inscrire                                                                                                                 |
| ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| 1. Conserver Excel sans projet applicatif            | processus stable, faible criticité, peu d'édition simultanée, aucun besoin de droit fin, risque mesuré et accepté                                     | copies, saisies concurrentes, règles critiques, rôle fin, historique opposable ou dépendance forte                                    | propriétaire et suppléant, emplacement unique, accès maîtrisés, dictionnaire minimal                                                               | versions et restauration testées ; export natif des données, mais limites d'audit assumées                                                                              | temps résiduel, contrôle, sauvegarde, incidents observés, sortie de crise                                                       |
| 2. Industrialiser Excel                              | le tableur reste adapté mais souffre de structure, coédition, documentation ou imports manuels                                                        | droits au niveau de l'enregistrement, circuit de validation complexe, audit durable, fortes intégrations ou concurrence non maîtrisée | tables structurées, validations, Power Query/import contrôlé, journal d'hypothèses, propriétaire/suppléant, ancien fichier en lecture seule        | versionnement, copie indépendante, restauration, rapprochement et journal QA ; ne pas utiliser le connecteur Excel pour des écritures concurrentes non prises en charge | nettoyage, temps de refonte, licence éventuellement existante mais à confirmer, administration, formation, contrôle, incidents  |
| 3. Acheter un logiciel standard                      | il réalise au moins 80 % des opérations applicables sans développement et tous les contrôles bloquants                                                | contournements fréquents, données dupliquées hors outil, export incomplet ou règles différenciantes stables non couvertes             | administrateur interne, rôles vérifiés, processus adapté au produit plutôt que l'inverse                                                           | démo sur données réelles, preuve de restauration et paquet de sortie ; SLA/assistance contractuels                                                                      | abonnement, comptes externes, modules, mise en place, reprise, formation, administration, écarts, support et sortie             |
| 4. Configurer une plateforme no-code/low-code nommée | processus assez stable, standard insuffisant sur quelques règles, équipe capable d'administrer la plateforme et limites testées sur le volume complet | créateur unique, formules non délégables, sécurité seulement dans l'interface, coûts de capacité inconnus ou sortie non répétée       | environnement dédié, source adaptée, droits par rôle, compte de service/co-propriétaire, inventaire, contrôle de source/solutions selon plateforme | audit activé, conservation dimensionnée, exercice de restauration, paquet de solution/export et test d'orphelin                                                         | licences par utilisateur, capacité, connecteurs, mise en œuvre, migration, gouvernance, support, maintenance et sortie          |
| 5. Développer sur mesure                             | règles stables et différenciantes, intégrations/droits/continuité critiques, standards et plateformes échouent au test ou coûtent plus cher en écarts | processus change chaque semaine, propriétaire métier absent, budget d'exploitation non financé, logiciel standard suffisant           | produit, données, dépôts, environnements et secrets détenus par l'entreprise ; responsables et support nommés                                      | audit conçu, sauvegardes testées, retour arrière de version, documentation, export, dépôt, procédure de reprise et clauses de propriété                                 | conception, développement, recette, migration, hébergement, observabilité, maintenance, évolutions, sécurité, support et sortie |

Le seuil « 80 % des opérations applicables », soit 8/10 lorsque les dix le
sont, est une **règle éditoriale Hagnéré Code**, pas une norme :
un logiciel standard reste candidat avec au plus deux écarts non critiques et
sans développement spécifique. Validation/rejet, résultat complet sur le
volume convenu, rapprochement, restauration, sortie et continuité après départ
du propriétaire sont toujours bloquants. Droits détaillés, audit détaillé et
concurrence deviennent bloquants lorsque la fiche du scénario les exige. Un
échec bloquant élimine l'option, quel que soit son score total.

#### Sous-matrice des plateformes nommées

| Plateforme candidate                       | Atout à tester                                                 | Point de rupture documenté                                                                                                   | Gouvernance exigée                                                                                      | Preuve de sortie                                                                                                                     |
| ------------------------------------------ | -------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Power Apps + Dataverse                     | intégration Microsoft, rôles Dataverse, solutions et audit     | délégation des formules ; capacité base/fichiers/journaux ; connexions du créateur ; rétention de sauvegarde                 | environnement dédié, rôles, co-propriétaire/connexion de service, solution versionnée, inventaire       | export de solution + données + pièces jointes + journaux utiles ; restauration dans un environnement de test                         |
| AppSheet avec source explicitement choisie | configuration rapide et sécurité par utilisateur possible      | AppSheet Database Core à 2 500 lignes ; jeu de données téléchargé ; filtre de sécurité non suffisant seul ; audit 7/53 jours | source partagée ou compte de service, identification, droits à la source, transfert testé               | copie/transfert de l'app et des sources, export complet, versions et historique testés séparément                                    |
| Airtable                                   | base, vues, interfaces et automatisations dans un même produit | plafond/plan, facturation des collaborateurs, export de pièces jointes, région Enterprise Scale                              | base propriétaire de l'organisation, administrateurs multiples, permissions et automations inventoriées | snapshot restauré en nouvelle base, CSV + téléchargement des pièces jointes + reconstruction documentée des éléments non exportables |

La plateforme ne se choisit jamais sur le nombre de lignes seul. Pour le cas
central de 38 000 lignes, AppSheet Database Core est hors périmètre, Airtable
Team reste sous son plafond d'enregistrements mais doit encore passer
performance, droits et sortie, et Power Apps doit démontrer chaque requête
déléguée ou changer de source/formule.

### 16.9 Modèle d'exploitation : propriétaire, droits, audit et orphelin

| Rôle                                | Responsabilité non délégable                                    | Preuve attendue                                                             |
| ----------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Propriétaire métier                 | règles, priorités, acceptation, arrêt et budget                 | nom, suppléant, date de revue et critères d'acceptation signés              |
| Propriétaire des données            | qualité, définitions, conservation et rapprochement             | dictionnaire, seuil de rejets, total de contrôle, responsable de correction |
| Propriétaire technique              | environnements, versions, connexions, sauvegarde et déploiement | inventaire, procédure, accès d'entreprise et journal des changements        |
| Suppléant technique                 | reprendre sans le créateur                                      | exercice semestriel où le créateur n'intervient pas                         |
| Administrateur/support              | utilisateurs, incidents, licences et capacité                   | file de support, temps mensuel mesuré, droits séparés                       |
| Référent sécurité/DPO si nécessaire | habilitations, traces, données personnelles et sous-traitants   | revue de rôles, durées, contrat et décisions documentées                    |
| Fournisseur                         | service contractuel, restitution et assistance                  | SLA, RACI, délais/coûts de sortie, interlocuteur et preuve d'exercice       |

Le « propriétaire » n'est pas la personne dont le compte a servi à créer
l'app. Le métier décide ; l'organisation possède les comptes, sources,
environnements et contrats ; une personne nommée administre ; un suppléant
prouve qu'il peut reprendre.

Politique minimale à préparer en P2 :

```text
RPO décidé par le métier : ____ heures de données au maximum
RTO décidé par le métier : ____ heures avant reprise
Source de vérité : ______________________________
Fréquence de sauvegarde : _______________________
Copie indépendante de l'éditeur : _______________
Dernier test de restauration réussi : ____________
Version/configuration incluse : oui / non / à confirmer
Pièces jointes incluses : oui / non / à confirmer
Automatisations et connexions incluses : oui / non / à confirmer
Responsable et suppléant : _______________________
Critère de retour arrière : ______________________
```

Une sauvegarde n'est pas une archive, un historique n'est pas un audit, un
snapshot n'est pas un export et un export CSV n'est pas une réversibilité
complète. Le guide doit illustrer ces quatre différences par le résultat du test
plutôt que par des définitions abstraites.

### 16.10 Actif signature — le test reproductible des dix opérations

**But :** remplacer une démo choisie par le vendeur par une recette courte sur
le processus du lecteur. L'actif P2 devra être utilisable localement, sans
collecte de coordonnées, et produire une note copiable « passer / bloquer / à
confirmer » avec preuves et prochaine action.

#### Jeu d'essai public et non sensible

- 3 050 lignes `X-0001` à `X-3050` ;
- montant de chaque ligne égal à son numéro : total initial
  `3 050 × 3 051 / 2 = 4 652 775 €` ;
- cinq identités d'essai : lecteur, opérateur A, opérateur B, approbateur et
  administrateur ; chaque scénario active uniquement les profils de sa fiche ;
- dix pièces jointes factices, un champ obligatoire, une date, un statut, un
  responsable et une ligne d'historique ;
- lot d'import de 100 lignes exactement :
  - 95 lignes valides `X-3052` à `X-3146`, montant 1 € chacune ;
  - 2 doublons de clés existantes `X-0042` et `X-2501` ;
  - `BAD-MISSING-AMOUNT`, sans montant ;
  - `BAD-DATE`, avec date invalide ;
  - `BAD-OWNER`, sans responsable obligatoire ;
  - résultat attendu : 95 acceptées, 5 rejetées avec leur motif.

|   # | Opération à faire devant le décideur                                                                                                                    | Résultat attendu                                                                                                                                                      | Preuve à conserver                                                                                                             |
| --: | ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
|   1 | créer `X-3051` avec montant 3 051 €, date, responsable et une pièce jointe                                                                              | compte 3 051 ; total 4 655 826 € ; pièce lisible                                                                                                                      | capture, export de la ligne et pièce jointe                                                                                    |
|   2 | tenter une création sans champ obligatoire, puis avec une date invalide                                                                                 | aucune ligne silencieusement créée ; message actionnable                                                                                                              | journal de rejet et compte inchangé                                                                                            |
|   3 | chercher `X-2501`, filtrer son statut et recalculer compte/total sur tout le jeu                                                                        | ligne trouvée et agrégats complets, y compris au-delà de 2 000                                                                                                        | résultat avec jeu complet ; pour Power Apps, limite de lignes réglée à 1 en recette afin d'exposer toute formule non délégable |
|   4 | modifier `X-0042` de 42 à 142 €                                                                                                                         | total +100 ; preuve conforme à la fiche : acteur/date au minimum, anciennes/nouvelles valeurs obligatoires en central et exigeant                                     | entrée d'audit ou de version et durée de conservation                                                                          |
|   5 | essayer les actions prévues avec tous les profils de la fiche : lecture, écriture, approbation, suppression, export et administration selon le scénario | seules les actions prévues sont permises ; refus côté source quand nécessaire                                                                                         | matrice des droits et traces de refus                                                                                          |
|   6 | faire modifier la même ligne par deux opérateurs au même moment lorsque plusieurs personnes écrivent                                                    | conflit signalé ou règle déterministe ; aucune écriture perdue silencieusement ; « non applicable » seulement si la fiche ne comporte qu'un rédacteur                 | scénario avant/après et journal                                                                                                |
|   7 | importer le lot de 100 lignes                                                                                                                           | 95 acceptées, 5 rejetées, motif par rejet ; compte 3 146 ; total 4 656 021 €                                                                                          | rapport d'import et rapprochement                                                                                              |
|   8 | créer un point de reprise après l'opération 7, supprimer `X-2501`, puis restaurer données et version/configuration                                      | après suppression : 3 145 lignes et 4 653 520 € ; après restauration : 3 146 et 4 656 021 €                                                                           | temps mesuré, RPO/RTO obtenu, éléments ou identifiants/partages/audits modifiés ou non restaurés                               |
|   9 | exporter puis réimporter dans un espace vide                                                                                                            | `COUNT=3146`, `COUNT_DISTINCT(id)=3146`, `SUM(montant)=4656021`, `ATTACHMENTS=11` ; inventaire explicite des audits, vues, automatisations et identités non récupérés | paquet de sortie, quatre contrôles attendus, temps et coût                                                                     |
|  10 | désactiver le compte de la personne qui a construit ou configuré la solution et confier l'administration au suppléant                                   | fichier/données, interface, automatisations et connexions essentielles continuent selon la voie ; suppléant peut administrer et restaurer                             | journal de l'exercice, ressources orphelines et corrections                                                                    |

Règle de décision :

- **bloquant universel** : échec aux opérations 2, 3, 7, 8, 9 ou 10 ;
- **bloquant conditionnel** : échec aux opérations 4, 5 ou 6 lorsque la fiche
  d'exigences les rend obligatoires ; une opération réellement non applicable
  est retirée du dénominateur, jamais comptée comme réussie ;
- **logiciel standard candidat** : au moins 80 % des opérations applicables
  sans développement spécifique — soit 8/10 lorsque les dix s'appliquent — et
  aucun bloquant ;
- **plateforme candidate** : tous les bloquants passent par configuration
  documentée, sans dépendre du compte personnel du créateur ;
- **sur-mesure candidat** : les écarts sont stables et différenciants, leur coût
  sur 48 mois dépasse le surcoût de construction/exploitation, et le propriétaire
  métier accepte l'exploitation ;
- **reporter** : processus instable, données non nettoyées, personne responsable
  absente ou bénéfice non mesuré.

Le test ne prétend pas homologuer la sécurité ou la conformité. Il élimine les
solutions qui échouent sur le processus minimal et produit la liste des points
à faire auditer.

### 16.11 Calcul du coût total sur 48 mois

Formule commune, sans poste caché :

```text
TCO48(option)
= mise en place
+ nettoyage et migration
+ temps interne de cadrage, recette et pilotage (heures) × coût horaire chargé
+ licences mensuelles × utilisateurs actifs × 48
+ hébergement mensuel × 48
+ administration interne (h/mois) × coût horaire chargé × 48
+ support/maintenance annuel × 4
+ formation et reformation
+ intégrations
+ temps de double fonctionnement
+ temps résiduel (h/semaine) × semaines travaillées/an × 4 × coût horaire
+ incidents observés ou scénario d'incident documenté
+ test de restauration, test de sortie et coût terminal de sortie
```

Règles :

- chaque option utilise le même nombre d'utilisateurs, le même horizon, le
  même coût horaire et les mêmes opérations ;
- un abonnement déjà payé reste une hypothèse à vérifier : son coût incrémental
  peut être nul, mais la capacité et le temps interne ne le sont pas ;
- `X_option` désigne toute capacité, connecteur, module, conduite du
  changement, temps projet interne, évolution de prix ou sortie inconnue ;
  `I_option` désigne les incidents non mesurés ; ni l'un ni l'autre ne vaut
  zéro ;
- le temps économisé reste un **gain de capacité** tant qu'une tâche facturée
  ou un coût réellement évité n'est pas identifié ;
- aucune moyenne de marché n'est déduite des chiffres ci-dessous.

#### Trois scénarios cohérents

| Variable                   |                   Simple |                           Central |                                                     Exigeant | Nature                                                                   |
| -------------------------- | -----------------------: | --------------------------------: | -----------------------------------------------------------: | ------------------------------------------------------------------------ |
| Utilisateurs actifs        |                        5 |                                12 |                                                           25 | hypothèse illustrative                                                   |
| Lignes actives/historiques |                    1 500 |                            38 000 |                                                      150 000 | hypothèse de recette ; aucune équivalence automatique avec la complexité |
| Temps résiduel initial     |              1 h/semaine |                       4 h/semaine |                                                  8 h/semaine | à remplacer par mesure sur deux semaines                                 |
| Rôles                      |      lecteur + opérateur | lecteur + opérateur + approbateur |               rôles fins, équipes et administration séparées | exigence métier                                                          |
| Intégrations               |                   aucune |                                 1 |                                                            3 | hypothèse                                                                |
| Usage                      | bureau, processus stable |       bureau + mobile, historique | mobile/offline à tester, données sensibles, continuité forte | hypothèse                                                                |
| Coût horaire chargé        |                   45 €/h |                            45 €/h |                                                       45 €/h | hypothèse éditoriale arrondie, à remplacer par la comptabilité           |
| Semaines travaillées/an    |                       48 |                                48 |                                                           48 | hypothèse explicite                                                      |
| Horizon                    |                  48 mois |                           48 mois |                                                      48 mois | commun                                                                   |

Les montants suivants sont un **jeu de démonstration Hagnéré Code**, non une
estimation de marché. Les devis fictifs servent à vérifier la mécanique du
calcul. Power Apps Premium reprend seul un prix public réel daté
(17,30 € HT/utilisateur/mois) ; il reste à revalider et n'inclut pas capacité,
connecteurs, mise en œuvre ou support.

Dans les trois tableaux, « Initial + reprise » agrège volontairement le devis
fictif et le temps projet interne valorisé. P2 devra les séparer dans les
champs éditables ; à défaut, ce temps reste dans `X_option` et interdit un
verdict définitif.

##### Scénario simple — entrées et résultats connus

| Option               | Initial + reprise |             Licence/hébergement |    Admin |        Maintenance | Formation + intégrations + sortie | Temps résiduel |          TCO48 connu |
| -------------------- | ----------------: | ------------------------------: | -------: | -----------------: | --------------------------------: | -------------: | -------------------: |
| Conserver Excel      |           1 000 € |                             0 € | 2 h/mois |                0 € |                               0 € |    1 h/semaine | **13 960 € + X + I** |
| Industrialiser Excel |           3 500 € | 0 € supposé si contrat existant | 2 h/mois |                0 € |                           1 800 € | 0,25 h/semaine | **11 780 € + X + I** |
| Logiciel standard    |           3 500 € |        150 €/mois, devis fictif | 1 h/mois | incluse, hypothèse |                           2 500 € |  0,2 h/semaine | **17 088 € + X + I** |
| Power Apps/low-code  |           9 500 € |                `5 × 17,30 × 48` | 2 h/mois |         1 000 €/an |                           4 000 € |  0,2 h/semaine | **27 700 € + X + I** |
| Sur-mesure           |          29 000 € |                      150 €/mois | 1 h/mois |         4 000 €/an |                           6 000 € | 0,15 h/semaine | **61 656 € + X + I** |

Contrôle : `1 000 + (2 × 45 × 48) + (1 × 48 × 4 × 45) =
13 960 €`. Dans ce scénario, industrialiser Excel est la première hypothèse à
tester ; une application n'est pas justifiée par le volume seul.

##### Scénario central — entrées et résultats connus

| Option               | Initial + reprise |             Licence/hébergement |     Admin |        Maintenance | Formation + intégrations + sortie | Temps résiduel |             TCO48 connu |
| -------------------- | ----------------: | ------------------------------: | --------: | -----------------: | --------------------------------: | -------------: | ----------------------: |
| Conserver Excel      |           2 000 € |                             0 € | 10 h/mois |                0 € |                               0 € |    4 h/semaine |    **58 160 € + X + I** |
| Industrialiser Excel |           7 000 € | 0 € supposé si contrat existant |  4 h/mois |           800 €/an |                           3 000 € |  1,5 h/semaine |    **34 800 € + X + I** |
| Logiciel standard    |           8 000 € |        300 €/mois, devis fictif |  3 h/mois | incluse, hypothèse |                           9 000 € |    1 h/semaine |    **46 520 € + X + I** |
| Power Apps/low-code  |          18 000 € |               `12 × 17,30 × 48` |  6 h/mois |         2 000 €/an |                           7 000 € | 0,75 h/semaine | **62 404,80 € + X + I** |
| Sur-mesure           |          43 000 € |                      250 €/mois |  2 h/mois |         6 000 €/an |                          10 000 € |  0,5 h/semaine |    **97 640 € + X + I** |

Contrôles :

```text
Temps actuel = 4 × 48 × 4 × 45 = 34 560 €
Licence Power Apps = 12 × 17,30 × 48 = 9 964,80 €
TCO Excel industrialisé
= 7 000 + (4 × 45 × 48) + (800 × 4) + 3 000
  + (1,5 × 48 × 4 × 45)
= 34 800 €
Contrôle inverse de la licence
= 9 964,80 / 48 / 12 = 17,30 € par utilisateur/mois
```

Le TCO connu ne décide pas seul : si droits fins, audit ou continuité sont
obligatoires et qu'Excel échoue au test, le logiciel standard devient la
première option éligible dans ce jeu illustratif. Low-code ou sur-mesure ne
gagnent que si les écarts du standard coûtent davantage que leur surcoût,
inconnues comprises.

##### Scénario exigeant — entrées et résultats connus

| Option               | Initial + reprise |             Licence/hébergement |     Admin | Maintenance | Formation + intégrations + sortie | Temps résiduel |           TCO48 connu |
| -------------------- | ----------------: | ------------------------------: | --------: | ----------: | --------------------------------: | -------------: | --------------------: |
| Conserver Excel      |           3 000 € |                             0 € | 20 h/mois |         0 € |                               0 € |    8 h/semaine | **115 320 € + X + I** |
| Industrialiser Excel |          14 000 € | 0 € supposé si contrat existant | 10 h/mois |  1 500 €/an |                           7 000 € |    4 h/semaine |  **83 160 € + X + I** |
| Logiciel standard    |          20 000 € |        900 €/mois, devis fictif |  6 h/mois |  2 000 €/an |                          23 000 € |    2 h/semaine | **124 440 € + X + I** |
| Power Apps/low-code  |          40 000 € |               `25 × 17,30 × 48` | 12 h/mois |  5 000 €/an |                          31 000 € |  1,5 h/semaine | **150 640 € + X + I** |
| Sur-mesure           |          85 000 € |                      500 €/mois |  4 h/mois | 12 000 €/an |                          38 000 € |    1 h/semaine | **212 280 € + X + I** |

Même ici, le sur-mesure n'est pas automatique. Il faut d'abord chiffrer les
écarts fonctionnels et risques des candidats standard/low-code. Si le standard
passe les opérations bloquantes, son coût connu reste inférieur ; s'il impose
plus de `21 960 €/an` de contournements supplémentaires, le sur-mesure rejoint
son niveau connu dans cet exemple, avant même d'ajouter les inconnues de chaque
voie : `(212 280 - 124 440) / 4 = 21 960`.

#### Sensibilité et seuils de bascule

| Variable changée, cas central                                 |         Bas |     Central |     Haut | Lecture                                                                   |
| ------------------------------------------------------------- | ----------: | ----------: | -------: | ------------------------------------------------------------------------- |
| Temps initial : 1 / 4 / 8 h par semaine                       |     8 640 € |    34 560 € | 69 120 € | valeur sur 48 mois à 45 €/h ; ne devient pas automatiquement une économie |
| Coût horaire : 30 / 45 / 60 € pour 4 h/semaine                |    23 040 € |    34 560 € | 46 080 € | le lecteur remplace par sa comptabilité                                   |
| Utilisateurs Power Apps : 5 / 12 / 25                         |     4 152 € |  9 964,80 € | 20 760 € | licence seule sur 48 mois au prix public daté                             |
| Admin low-code : 2 / 6 / 12 h par mois                        |     4 320 € |    12 960 € | 25 920 € | coût interne sur 48 mois à 45 €/h                                         |
| Horizon central : 24 / 48 mois, TCO connu Excel industrialisé |    22 400 € |    34 800 € |        — | les coûts initiaux ne se divisent pas par deux                            |
| Horizon central : 24 / 48 mois, logiciel standard             |    31 760 € |    46 520 € |        — | même hypothèse fictive                                                    |
| Horizon central : 24 / 48 mois, low-code                      | 43 702,40 € | 62 404,80 € |        — | avant capacités/connecteurs                                               |
| Horizon central : 24 / 48 mois, sur-mesure                    |    75 320 € |    97 640 € |        — | avant évolutions hors forfait                                             |

Seuils du cas central, utilisables seulement après les portes fonctionnelles :

- standard contre Excel industrialisé :
  `(46 520 - 34 800) / 4 = 2 930 €/an` ; si les lacunes d'Excel coûtent plus
  que `2 930 + [(X_standard - X_excel) + (I_standard - I_excel)] / 4` par an,
  le standard rattrape son surcoût ;
- low-code contre standard :
  `(62 404,80 - 46 520) / 4 = 3 971,20 €/an`, auquel ajouter
  `[(X_lowcode - X_standard) + (I_lowcode - I_standard)] / 4` ;
- sur-mesure contre standard :
  `(97 640 - 46 520) / 4 = 12 780 €/an`, auquel ajouter
  `[(X_custom - X_standard) + (I_custom - I_standard)] / 4` ;
- conserver contre industrialiser Excel : écart connu de `23 360 €` sur
  48 mois dans l'exemple, mais l'économie n'est encaissée que si le temps est
  réellement réaffecté ou si un coût est évité.

#### Cas où chacune des cinq voies gagne

Les conditions ci-dessous sont préparées en P1 pour éviter que P2 fasse gagner
la solution vendue par l'agence. Elles ne s'appliquent qu'après la même fiche
d'exigences et après remplacement des `X/I` décisifs par une mesure, un devis
ou une borne explicitement acceptée.

| Voie gagnante              | Conditions fonctionnelles                                                                                                                          | Condition chiffrée reproductible                                                                                                                                                                                                                             | Décision                                                                                                 |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| Conserver Excel            | cas simple, toutes les exigences simples passent, aucune correction structurelle nécessaire, risque accepté                                        | dans le jeu simple, `TCO_conserver = 5 320 + 8 640 × h_actuelles`. Il devient inférieur aux 11 780 € d'Excel industrialisé si `h_actuelles < (11 780 - 5 320) / 8 640 = 0,748 h/semaine`, soit environ 45 minutes                                            | conserver, documenter propriétaire/restauration et revoir si le seuil est dépassé                        |
| Industrialiser Excel       | cas simple ou central sans droit fin/audit durable, tableur propre après pilote et aucune perte concurrente                                        | avec les valeurs du scénario simple, `11 780 € < 13 960 €, 17 088 €, 27 700 €, 61 656 €` avant écarts propres ; les `X/I` doivent confirmer l'ordre                                                                                                          | industrialiser puis mesurer le temps réel pendant un mois                                                |
| Logiciel standard          | exigences centrales ; Excel éliminé par droits/audit/circuit ; standard passe au moins 80 % et tous les bloquants                                  | cas central : 46 520 € contre 62 404,80 € low-code et 97 640 € sur-mesure ; s'il reste face à Excel, les lacunes d'Excel doivent coûter plus de `2 930 €/an + [(X_standard - X_excel) + (I_standard - I_excel)] / 4`                                         | acheter seulement après démo sur les dix opérations et sortie testée                                     |
| Plateforme low-code nommée | Excel éliminé ; standard passe mal une règle stable ; plateforme passe délégation, droits, audit, orphelin et sortie                               | cas central : low-code rattrape le standard si les contournements du standard vérifiés dépassent `3 971,20 €/an + (X_lowcode - X_standard + I_lowcode - I_standard) / 4` ; il reste moins cher que le sur-mesure connu                                       | configurer la plateforme avec environnement, source et exploitation nommés                               |
| Sur-mesure                 | voies Excel éliminées ; standard et low-code échouent à une exigence obligatoire ou imposent des écarts stables ; produit et exploitation financés | cas exigeant : face au standard, seuil = `[87 840 + (X_custom - X_standard) + (I_custom - I_standard)] / 4` par an ; face au low-code, seuil = `[61 640 + (X_custom - X_lowcode) + (I_custom - I_lowcode)] / 4`, soit 21 960 € et 15 410 € avant différences | cadrer puis construire seulement si les deux inégalités ou les éliminations fonctionnelles sont prouvées |

**Aucune voie ne gagne** tant qu'une inconnue capable d'inverser l'ordre reste
vide. Le résultat est alors « à confirmer » ou « reporter », avec la donnée à
obtenir. Un coût connu inférieur ne compense jamais l'échec d'une exigence
bloquante.

### 16.12 Matrice de gain d'information

| Question décisive                             | Meilleure réponse française observée          | Apport international primaire                                                 | Réponse actuelle du guide                             | Manque réel                                           | Amélioration P2 vérifiable                                                          |
| --------------------------------------------- | --------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Puis-je ne rien changer ?                     | les pages sérieuses admettent Excel/coédition | AQuA/DESNZ montrent comment documenter et assurer un tableur                  | option zéro expliquée mais fusionnée dans le parcours | distinguer acceptation du risque et industrialisation | deux voies séparées avec critères et mesure sur deux semaines                       |
| Quel outil couvre vraiment mon travail ?      | cas d'usage et démos partenaires              | test produit sur limites Microsoft/Google/Airtable                            | quatre familles génériques                            | aucune recette de même périmètre                      | actif des dix opérations, bloquants et seuil de 80 %                                |
| Que signifie le seuil de 2 000 lignes ?       | rarement expliqué avec exactitude             | Microsoft documente requête non délégable et résultats faux                   | absent                                                | confusion capacité/requête                            | recherche `X-2501`, agrégat complet et limite de test à 1                           |
| Qui peut faire quoi ?                         | droits cités de façon générale                | Dataverse, AppSheet et Airtable permettent des tests précis                   | droits évoqués sans matrice                           | lecture/écriture/export/admin non séparés             | trois profils + administrateur et tentative d'action interdite                      |
| Puis-je prouver une modification ?            | historique souvent promis                     | durées et contenu d'audit documentés par éditeurs                             | notion générale                                       | activation, anciennes valeurs, conservation, export   | opération 4, durée et stockage explicités                                           |
| Que se passe-t-il au départ du créateur ?     | outil non gouverné évoqué sans exercice       | Microsoft/Google décrivent orphelins et transfert de sources                  | plan B abstrait                                       | aucun test de compte désactivé                        | opération 10 et suppléant nommé                                                     |
| La sauvegarde me permet-elle de repartir ?    | ANSSI/CNIL recommandent restauration          | Microsoft, Airtable, AppSheet distinguent environnements, versions et données | sauvegarde générique                                  | pas de RPO/RTO ni résultat                            | suppression/restauration chronométrée, inventaire des éléments manquants            |
| Que récupère-t-on à la sortie ?               | clause de réversibilité souvent citée         | Data Act + limites d'export des éditeurs                                      | export demandé au contrat                             | pièces, audit, automatisations et identité non testés | réimport dans espace vide, comptes/totaux/pièces et paquet de sortie                |
| Quelle option coûte le moins sur quatre ans ? | exemples de licence isolés                    | GAO fournit une méthode cycle de vie/sensibilité                              | un exemple Power Apps                                 | cinq options, trois scénarios et inconnues            | TCO48 reproductible, `X` et `I` visibles, seuils de bascule                         |
| Quand le sur-mesure devient-il rationnel ?    | argumentaires d'agence                        | méthodes de point de départ et comparaison du cycle de vie                    | verdict prudent mais non chiffré                      | coût des écarts et stabilité non reliés               | règle : test bloquant + écart annuel > surcoût + propriétaire/exploitation financée |

Le gain n'est donc pas « plus long ». Il est observable : le lecteur peut
reproduire dix opérations, éliminer une solution, refaire quinze TCO avec ses
valeurs et documenter propriétaire, restauration et sortie.

### 16.13 Position professionnelle, contre-cas et conflit d'intérêts

```text
Recommandation pour le cas le plus fréquent :
  mesurer deux semaines, industrialiser Excel si le problème est surtout
  structure/coédition/documentation, puis tester un logiciel standard avant
  de configurer une plateforme ou commander du sur-mesure.

Faits vérifiés qui la fondent :
  les limites produit, d'audit, de sauvegarde et d'export varient fortement ;
  un abonnement public ne couvre ni mise en œuvre ni exploitation ; les
  plateformes exigent propriétaire, suppléant et tests de sortie.

Raisonnement ou déduction :
  une option plus simple réduit les coûts fixes si elle passe tous les
  contrôles bloquants. Le développement devient rationnel seulement lorsque
  des écarts stables et coûteux subsistent.

Cas où l'option opposée est meilleure :
  un processus différenciant, stable, fortement intégré, avec droits et
  continuité critiques peut justifier le sur-mesure ; un logiciel standard
  peut gagner immédiatement s'il passe 80 % des opérations applicables et
  tous les bloquants.

Signal qui impose de réexaminer :
  nouvel effectif, volume ou règle ; incident ; départ du propriétaire ;
  coût d'administration supérieur au scénario ; évolution de prix/limite ;
  échec de restauration ou de sortie.

Ce que Hagnéré Code déconseille même s'il pourrait le vendre :
  développer pendant que le processus change chaque semaine, sans propriétaire
  métier, sans données nettoyées, sans budget de maintenance et sans candidat
  standard passé au test.

Prochaine vérification :
  ouverture de P2, puis avant publication et à chaque modification
  substantielle ou changement éditeur/contractuel.
```

**Conflit d'intérêts :** Hagnéré Code vend du développement sur mesure et peut
donc bénéficier d'une conclusion qui écarte Excel, le standard ou le low-code.
La défense est procédurale : l'option la moins complexe passe en premier, le
test et les calculs sont reproductibles, les mauvais fits sont visibles, et
les résultats favorables au standard ou au report doivent être conservés.
Microsoft, Google et Airtable documentent précisément leurs produits mais
vendent aussi la plateforme ; leurs statistiques marketing de ROI ne sont pas
utilisées.

### 16.14 Échec, mesure après décision et retour arrière

Mesure de départ sur deux semaines :

| Indicateur          | Définition                                         | Responsable              | Fréquence                      |
| ------------------- | -------------------------------------------------- | ------------------------ | ------------------------------ |
| copies concurrentes | nombre de versions créées hors source unique       | propriétaire métier      | quotidienne pendant 2 semaines |
| ressaisie           | minutes réelles, tâche et personnes                | responsable d'équipe     | quotidienne                    |
| rejets/erreurs      | nombre, cause, correction et impact                | propriétaire des données | hebdomadaire                   |
| délai de cycle      | création jusqu'à approbation                       | propriétaire métier      | hebdomadaire                   |
| incidents           | arrêt, personnes bloquées, durée et correction     | support                  | à chaque incident              |
| administration      | comptes, corrections, règles et capacité en heures | administrateur           | mensuelle                      |
| qualité de sortie   | compte, total, pièces et objets récupérés          | technique + métier       | à chaque pilote/semestre       |

Pilote limité à un processus et un échantillon réconcilié. Critères LANCER :
toutes les opérations bloquantes passent, 100 % des lignes acceptées/rejetées
sont expliquées, compte et total concordent, restauration et sortie sont
chronométrées, administrateur et suppléant savent agir, et le TCO reste sous
la limite décidée.

Critères ARRÊTER/RETOUR ARRIÈRE : écart inexpliqué, perte silencieuse, droit
contourné,
requête incomplète, restauration impossible dans le RTO, connexion personnelle
indispensable, paquet de sortie incomplet ou coût projeté supérieur au seuil
sans bénéfice démontré. Pendant le pilote, l'ancien fichier reste en lecture
seule comme référence ; le retour arrière est décidé par le propriétaire
métier, pas par le fournisseur.

Situation d'échec typique : un prototype fonctionne avec 30 lignes et le
compte du créateur, puis renvoie un total incomplet à 38 000 lignes ou arrête
une automatisation après son départ. Signal précoce : opération 3 ou 10
échoue. Correction : changer formule/source/gouvernance avant bascule, ou
abandonner la plateforme.

### 16.15 Empreinte éditoriale et plan P2 annoté

Différences imposées avec les guides voisins :

1. ouverture sur une décision mesurée, pas sur une liste de limites d'Excel ;
2. progression par élimination expérimentale, pas par catalogue de plateformes ;
3. même cas et mêmes dix opérations pour les cinq voies ;
4. calcul complet avec inconnues visibles, pas une grille de tarifs ;
5. conclusion sous forme de note LANCER/REPORTER/ARRÊTER avec propriétaire et
   date de
   révision, pas un verdict commercial.

```text
Tension : la démo fonctionne, mais personne n'a encore prouvé qu'elle
  retrouvera X-2501, restaurera une erreur et survivra au départ du créateur.
Ouverture : scène de trois copies + réponse courte + cinq voies.
Progression : mesure -> portes fonctionnelles -> plateformes -> exploitation
  -> sortie -> TCO -> décision et retour arrière.
Artefact signature : test des dix opérations, résultat copiable et scénario
  TCO éditable, sans envoi de données.
Rythme : prose courte, une mini-scène par rupture, tableaux uniquement pour
  comparer, calculs ouverts.
CTA : après la note de décision autonome.
Conclusion : choisir, piloter, reporter ou renoncer avec date de revue.
```

| Section P2 provisoire                                                    | Question résolue                         | Preuve ou exemple à intégrer                                             | Conséquence lecteur                         | Format                                     |
| ------------------------------------------------------------------------ | ---------------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------- | ------------------------------------------ |
| 1. Votre Excel doit-il vraiment devenir une application ?                | quelle est la réponse courte             | trois copies, quatre heures, propriétaire unique ; option de report      | mesure avant achat                          | ouverture narrative + verdict conditionnel |
| 2. Pendant deux semaines, mesurez le problème                            | quelles données collecter                | tableau copies/ressaisie/rejets/délai/incidents                          | point de départ exploitable                 | protocole numéroté                         |
| 3. Cinq voies, pas quatre produits                                       | quelles décisions existent               | matrice à périmètre égal                                                 | écarter les voies non éligibles             | cartes mobiles + tableau desktop           |
| 4. Industrialiser Excel sans le déguiser en base multi-utilisateur       | quand Excel reste rationnel              | AQuA/DESNZ, tables structurées, journal, connecteur Excel non concurrent | premier pilote peu coûteux                  | avant/après concret                        |
| 5. Faites passer dix opérations au logiciel standard                     | comment résister à une démo choisie      | jeu X-0001–X-3050, seuil de 80 %, bloquants                              | sélectionner ou éliminer                    | actif interactif + fiche imprimable        |
| 6. Power Apps, AppSheet, Airtable : les limites qui changent la décision | quel low-code nommer                     | prix/plan daté, source, audit, propriétaire, sauvegarde, sortie          | choisir une plateforme seulement après test | trois fiches homogènes, sans catalogue     |
| 7. Au-delà de 2 000 lignes, testez la requête, pas le logo               | pourquoi un résultat peut être incomplet | délégation Microsoft, jeu de données/source AppSheet, `X-2501`           | changer formule/source ou éliminer          | démonstration chiffrée                     |
| 8. Qui possède, administre et contrôle ?                                 | comment éviter l'orphelin                | RACI, rôles, audit, compte créateur désactivé                            | nommer propriétaire et suppléant            | matrice + mini-scène de départ             |
| 9. Sauvegarder, restaurer et revenir en arrière                          | comment reprendre après erreur           | ANSSI/CNIL/BSI, RPO/RTO, opération 8                                     | exiger une preuve datée                     | checklist d'acceptation                    |
| 10. Sortez avant d'entrer                                                | ce que réversibilité signifie            | Data Act prudent, export données/pièces/audit/automations, réimport vide | chiffrer sortie et contrat                  | inventaire de paquet                       |
| 11. Comparez 48 mois, pas un devis à un abonnement                       | quel choix coûte quoi                    | trois scénarios, inconnues `X/I`, sensibilités et seuils                 | refaire le calcul sans fausse économie      | calculateur/feuille lisible                |
| 12. Pilote, lancer, arrêter ou revenir en arrière                        | comment décider sans bascule aveugle     | opérations bloquantes, rapprochement, ancien fichier lecture seule       | limiter l'échec                             | chronologie 30 jours                       |
| 13. Note de décision et prochaine action                                 | que faire lundi                          | voie retenue, preuves, inconnues, propriétaire, prochaine revue          | décision transmissible                      | modèle copiable puis CTA unique            |

FAQ résiduelle seulement :

- Est-ce qu'Excel devient faux après 2 000 lignes ?
- Power Apps est-il vraiment inclus dans Microsoft 365 ?
- Une sauvegarde cloud suffit-elle ?
- Puis-je exporter les pièces jointes et automatisations ?
- Qui doit posséder l'application si le créateur quitte l'entreprise ?
- Quand demander un audit juridique, RGPD ou de sécurité ?

Les réponses doivent commencer par oui/non/« cela dépend de… », puis donner
le test ou la source. Aucun H2 de lexique, aucune liste de vingt outils, aucune
répétition du fil rouge à chaque section.

### 16.16 Ressource, conversion et tests P2 à prévoir

```text
Ressource nécessaire : oui
Problème résolu : comparer une démo et conserver une preuve de décision
Résultat autonome : score par opération, bloquants, option encore éligible,
  hypothèses TCO, inconnues et trois prochaines actions
Format : composant local responsive + version imprimable/copiable
Rubriques : scénario, dix opérations, preuves, droits, propriétaire,
  restauration, sortie, TCO 48 mois, verdict LANCER/REPORTER/ARRÊTER
Exemple rempli : cas central de Nathalie, explicitement fictif
Conclusion « ne pas investir » : obligatoire
Sources/hypothèses/limites : visibles près des champs concernés
Données saisies : état local uniquement, aucun envoi ni stockage
Processus reproductible : données publiques X-0001–X-3050 et formules §16.10–11
QA : toutes branches, calculs, arrondis, impression, clavier, lecteur d'écran,
  320/390/768/1024/1440 px, erreurs console
Limites : outil d'orientation, pas audit de sécurité/conformité ni devis
Maintenance : prix et limites revalidés à toute modification substantielle
Actif difficile à remplacer : recette complète + rapprochement + test d'orphelin
Bon fit Hagnéré Code : règles stables, écarts prouvés, propriétaire et exploitation financée
Mauvais fit : standard à 80 % sans bloquant, Excel fiabilisable, processus instable ou données non prêtes
Action non commerciale : exécuter le test et mesurer deux semaines
CTA : demander une note de décision cinq voies avec plan de pilote
```

Tests obligatoires de l'actif en P2 :

- calculs simple, central, exigeant et valeurs limites 0/1/2 000/2 001 ;
- chaque voie peut gagner et la conclusion « reporter/ne pas investir » existe ;
- une inconnue n'est jamais transformée en zéro ;
- aucun verdict de classement n'est rendu tant qu'un `X` ou `I` capable
  d'inverser la décision reste vide ;
- un bloquant élimine l'option malgré un score 9/10 ;
- copie et impression conservent hypothèses, date et sources ;
- aucune donnée n'est envoyée ; navigation clavier et libellés accessibles ;
- la matrice à cinq voies reste compréhensible à 390 px sans colonne cachée.

### 16.17 Porte de sortie P1

- [x] brief complet et décision unique ;
- [x] URL distincte justifiée ;
- [x] recherche actuelle et datée ;
- [x] benchmark français, américain, britannique et allemand arrivé à une
      saturation expliquée ;
- [x] matrice de gain d'information remplie avec un apport testable ;
- [x] fiche de preuves primaires exploitable et sources prévues au fil du texte ;
- [x] faits, déductions, recommandations, hypothèses et inconnues séparés ;
- [x] contradictions décisives et données retirées explicites ;
- [x] trois scénarios, quinze TCO, contrôles inverses et sensibilités préparés ;
- [x] position Hagnéré Code, contre-cas et signal de révision fondés ;
- [x] conflit d'intérêts éditorial identifié ;
- [x] actif signature défini avec jeu d'essai et critères d'acceptation ;
- [x] échec, mesure après décision, propriétaire et retour arrière préparés ;
- [x] plan annoté distinct des voisins ;
- [x] action autonome, bon fit et mauvais fit définis ;
- [x] dossier suffisant pour un autre rédacteur sans invention ;
- [x] snapshot consigné dans le manifeste externe ;
- [x] Passe 1 = Terminée — porte validée.

### 16.18 Rapport de sortie P1

```text
PASSE 1 TERMINÉE
Slug : transformer-excel-en-application
Lecteur et phrase réelle :
  dirigeant de PME dont Excel fait tourner l'activité ; « dois-je le
  fiabiliser, acheter, configurer ou développer, et à quel coût réel ? »
Décision :
  éliminer par le test des dix opérations, puis comparer les options éligibles
  sur 48 mois.
Angle et forme dominante :
  comparatif à cinq voies + recette reproductible + TCO/sensibilité.
Pages proches et différence :
  Power Apps vs sur-mesure, ROI application et interventions terrain ;
  ce guide reste en amont et autorise Excel, standard ou report de décision.
Sources décisives :
  Microsoft délégation/Excel connector/Power Platform ; Google AppSheet ;
  Airtable ; ANSSI/CNIL/Data Act ; AQuA/DESNZ ; GAO ; BSI.
Incertitudes exclues :
  prix moyen du sur-mesure, taux d'échec, gains automatiques, coût nul d'une
  licence existante, conformité/résidence globale, promesse de classement.
Action autonome et CTA possible :
  mesurer deux semaines et exécuter les dix opérations ; CTA vers une note de
  décision cinq voies et un plan de pilote.
Plan :
  mesure -> cinq voies -> Excel industrialisé -> test standard -> plateformes
  nommées -> données/délégation -> gouvernance -> restauration -> sortie ->
  TCO -> pilote/retour arrière -> note de décision.
Snapshot :
  docs/research/manifests/transformer-excel-en-application-p1-2026-07-25-r1.sha256
```

---

## 17. Rapport de sortie P2 — 25 juillet 2026

```text
PASSE 2 TERMINÉE
Responsable unique :
  /root/excel_p1_mondial, sur délégation explicite de /root pour ce seul slug.
Sous-audits :
  sources et contrat en lecture seule ; aucun autre éditeur P2.
Fichiers créés ou modifiés :
  page.tsx ; opengraph-image.tsx ; ExcelDecisionDiagnostic.tsx ;
  excel-decision-diagnostic.ts et son test ; entrée exacte GUIDES ;
  présent dossier de recherche ; manifeste P2.
Ouverture et réponse :
  cinq voies, même recette, même horizon ; un bloquant élimine et X/I peut
  imposer le report dès l’ouverture.
Forme propre au sujet :
  comparatif égal-scope + fixture reproductible de dix opérations +
  diagnostic local lancer/reporter/arrêter + TCO48 et sensibilités.
Exemples ou calculs :
  jeu d’essai X-0001–X-3050 ; trois scénarios ; quinze TCO connus ;
  sensibilités temps, coût horaire, utilisateurs, administration et horizon ;
  cinq seuils de bascule ; scène centrale fictive ; X/I jamais remplacés par
  zéro.
Sources visibles :
  Microsoft Power Apps/Excel connector/délégation/backup/audit/orphelins ;
  AppSheet ; Airtable ; CNIL ; ANSSI ; AQuA ; GAO ; Data Act.
Action autonome, bon fit et mauvais fit :
  mesurer deux semaines puis rejouer les dix opérations ;
  bon fit sur-mesure seulement après écarts stables et chiffrés ;
  Excel, rapport, standard, plateforme, report ou arrêt restent possibles.
CTA et destination :
  contre-audit des preuves vers /demarrer-un-projet ; aucune estimation
  automatique ni promesse de développement.
Contrôles rapides :
  33 tests Excel ciblés ; ESLint des fichiers code P2 ; TypeScript complet ;
  git diff --check ; mesure SSR 5 145 mots / 26 minutes.
Snapshot :
  docs/research/manifests/transformer-excel-en-application-p2-2026-07-25-r1.sha256
```

### 17.1 Arbitrages P2 opposables

- La recette publique et le moteur reprennent exactement le §16.10 :
  création ; rejet champ/date ; recherche et agrégats au-delà de 2 000 ;
  modification auditée ; droits ; concurrence ; import 95/5 ; restauration ;
  export-réimport ; départ du créateur.
- Les bloqueurs universels sont exactement `2, 3, 7, 8, 9, 10`. Les
  opérations `4, 5, 6` sont bloquantes seulement si la fiche d’exigences les
  active. Une opération universelle ne peut jamais être « non applicable ».
- Un seuil homogène d’au moins 80 % des opérations applicables s’ajoute aux
  bloqueurs et aux conditions propres à chaque voie. Le logiciel standard
  conserve en plus sa couverture d’au moins 80 % des exigences applicables.
- Les inconnues X/I disposent de minimums et maximums locaux pour chacune des
  cinq voies. Une base datée (devis, facture, mesure ou plafond accepté) est
  obligatoire : quatre zéros sans preuve restent inconnus.
- L’intervalle au plus petit minimum n’est comparable que si son maximum reste
  strictement inférieur au minimum des quatre autres voies. Les quatre
  intervalles plus élevés peuvent se chevaucher entre eux ; tout chevauchement
  avec le moins coûteux impose « reporter/à confirmer ».
- Le diagnostic stocke ses réponses localement. Les événements de copie et de
  CTA ne contiennent ni voie, ni scénario, ni verdict, ni opération, ni preuve.
- Chaque opération accepte une référence de preuve facultative, reprise dans
  le rapport copié et la version imprimable. Changer de scénario réinitialise
  opérations, preuves et préparation ; changer de voie invalide sa condition
  propre.

### 17.2 Sources revalidées et retraits

Revalidation officielle effectuée le 25 juillet 2026 :

- Power Apps Premium à 17,30 € HT/utilisateur/mois avec paiement annuel ;
  ce prix reste une licence, pas un TCO ;
- délégation : fenêtre locale 500 par défaut, réglable jusqu’à 2 000 pour les
  formules non délégables ; aucune phrase « Power Apps limité à 2 000 lignes » ;
- connecteur Excel Online Business : 25 Mo, verrouillage possible et écritures
  concurrentes non prises en charge dans ce périmètre ;
- prix et quotas AppSheet et Airtable attribués à leur plan exact et à leur
  devise ; aucune conversion inventée ;
- contradiction officielle Airtable sur l’historique Business signalée au
  lieu de choisir une valeur ;
- formulation Dataverse resserrée : audit à activer et historique supprimé
  ensuite non consultable, sans prétendre à une irréversibilité plus large ;
- sauvegarde et restauration distinguées ; CNIL/ANSSI utilisés comme
  recommandations, pas comme homologation ;
- Data Act borné aux frais de changement visés par le règlement, sans
  généraliser aux frais ordinaires, pénalités ou assistance supplémentaire.

### 17.3 Porte de sortie P2

- [x] guide complet, sans placeholder ;
- [x] décision et réponse visibles dès l’ouverture ;
- [x] cinq voies, contre-cas Excel/standard/rapport et conflit d’intérêt ;
- [x] fixture de dix opérations exacte, preuve copiable et impression dédiée ;
- [x] trois scénarios et quinze TCO reproductibles ;
- [x] X/I jamais transformés en zéro et aucun lancement si les cinq voies
      restent économiquement indécidables ;
- [x] propriétaire, suppléant, audit, restauration, sortie et critères d’arrêt ;
- [x] page, OG, entrée GUIDES et données structurées intégrées ;
- [x] `editorialStatus: "ready-for-human-review"` conservé ;
- [x] contrôles rapides sans défaut introduit ;
- [x] snapshot P2 consigné ;
- [x] Passe 2 = Terminée — porte validée.

### 17.4 Limites et passes suivantes

- P3 reste bloquée : aucun contre-audit indépendant n’a encore été exécuté.
- P4 reste bloquée : aucune relecture humaine finale, aucun contrôle navigateur
  multi-largeur et aucune décision de publication n’ont été effectués.
- Aucun commit, push, déploiement, publication, sitemap ou demande
  d’indexation n’a été réalisé en P2.

---

## 18. Journal correctif R2 après contre-audit P3 froid — 25 juillet 2026

Rapport opposable lu intégralement :
`docs/audits/giga-audit-2026-07-24/reviews/transformer-excel-en-application-p3-2026-07-25-r1.md`.

Empreinte SHA-256 contrôlée avant correction :
`7f7ca54fec2eb0b896e9ba9337a9b50b162d93e5e8a52cace070e6d1550ef576`.
Le rapport froid n’a pas été modifié.

### 18.1 Architecture de décision R2

Le diagnostic ne possède plus un état réutilisé d’une voie à l’autre. Il
conserve cinq dossiers indexés par identifiant :

```text
keep_excel
industrialize_excel
standard_software
named_platform
custom_development
```

Chaque dossier contient désormais :

- ses dix statuts d’opération ;
- une référence, une date ISO et un niveau `déclaré`, `documenté` ou
  `vérifié` pour chaque opération ;
- un motif et une date propres à toute non-applicabilité des opérations 4, 5
  ou 6 ;
- son critère propre, sa pièce, sa date et son niveau de preuve ;
- sa couverture standard bornée entre 0 et 100 quand elle s’applique ;
- son produit, son plan et ses populations internes/externes pour une
  plateforme ;
- dix postes de coût visibles et modifiables ;
- une base structurée : attestation, source, date, devise, horizon de 48 mois,
  couverture, responsable et exclusions ;
- ses bornes X/I et la justification explicite de tout zéro.

Changer de scénario recrée les cinq dossiers. Changer d’onglet conserve le
dossier concerné sans recopier ses réponses. Les opérations conditionnelles
relèvent du cas commun : une modification de leur applicabilité est propagée
aux cinq dossiers et le moteur refuse toute divergence résiduelle.

### 18.2 Fermeture des cinq P0

1. **P0-01 — robots.** `guideRobots(guide)` commande maintenant les
   métadonnées. Le statut reste `ready-for-human-review` et le SSR local expose
   bien `noindex`.
2. **P0-02 — prix Power Apps réutilisé.** Le produit est typé Power Apps,
   AppSheet, Airtable ou autre. Le preset 17,30 est accepté seulement avec le
   type Power Apps, le produit exact Microsoft Power Apps, le plan Premium, la
   devise EUR, une source Microsoft Power Apps et une date valide. Changer
   produit ou plan invalide tous les coûts et leur attestation.
3. **P0-03 — fuite d’état.** Les cinq dossiers, objets d’opération et bases de
   coût sont distincts. Un test modifie Excel puis vérifie que le dossier Excel
   industrialisé n’a changé ni statut ni responsable.
4. **P0-04 — preuves facultatives.** Une réussite ne devient admissible qu’avec
   une référence datée `documentée` ou `vérifiée`. Une déclaration reste
   insuffisante. Une non-applicabilité sans motif daté impose le report. Un
   critère propre non documenté ne peut ni retenir ni écarter une voie.
5. **P0-05 — base `"x"` et zéro implicite.** Le texte libre a disparu du
   contrat logique. Une base de coût requiert tous ses champs structurés, des
   nombres finis, quatre bornes, une attestation explicite et une justification
   pour X=0 ou I=0. Une date invalide, impossible ou future est refusée.

### 18.3 Fermeture des cinq P1

1. **P1-01 — coûts cachés et promesse excessive.** Les postes déterminants
   sont affichés et éditables : mise en place/migration, abonnement fixe,
   licence unitaire, utilisateurs licenciés, administration, coût horaire,
   maintenance, formation/intégrations/sortie, temps résiduel et semaines
   travaillées. La formule est visible. Le registre parle désormais de
   quinze estimations explicites, jamais de coûts complets.
2. **P1-02 — export incomplet.** La copie et l’impression utilisent exactement
   le même rapport texte. Il contient le cas commun, les cinq dossiers, toutes
   les opérations, preuves, dates, motifs N/A, critères propres, couverture,
   produit/plan/populations, postes de coût, base, bornes, attestation,
   résultats par voie, verdict final, version et date.
3. **P1-03 — deux CTA.** Le lien commercial intégré au diagnostic a été
   supprimé. Le guide conserve un seul `GuideInlineCTA`. Copier et imprimer
   restent les deux actions propres au diagnostic.
4. **P1-04 — ouverture abstraite.** Le premier écran commence par la situation
   du lecteur en « vous » : fichier critique, partagé ou difficile à reprendre.
   Il ne contient plus « protocole », « périmètre » ou « recette ».
5. **P1-05 — AppSheet incomplet.** Le guide relie plan et population licenciée,
   y compris externes/invités ; documente l’audit de sept jours et jusqu’à
   53 jours en Enterprise Plus ; rappelle la connexion nécessaire à
   l’attribution ; exige le transfert de l’application, des sources, fichiers
   et droits ; explique que les filtres ne suffisent pas et qu’une feuille peut
   être lue avant filtrage ; distingue enfin l’historique AppSheet Database de
   trente jours d’une sauvegarde ou d’un audit plus long.

### 18.4 Fermeture des trois P2

- La couverture standard rejette `NaN`, l’infini, les valeurs négatives et les
  valeurs supérieures à 100 ; 100 reste valide et le seuil utile est 80.
- Le plan dit désormais « dix jours ouvrés (deux semaines) ».
- L’export traduit les statuts et verdicts en français. Les tests refusent les
  codes anglais bruts, `undefined` et `NaN` dans le rapport lecteur.

### 18.5 Invariants ajoutés pendant la correction

- Deux voies admissibles exprimées dans des devises différentes ne sont jamais
  comparées. Elles doivent être recalculées dans une devise commune avec taux,
  source et date documentés.
- Les valeurs pédagogiques préremplies restent non décisionnelles tant qu’une
  attestation explicite ne confirme pas chaque poste contre une mesure, un
  devis ou une source applicable. Toute modification de coût retire
  l’attestation.
- La clé du tableau des dossiers doit être identique à `dossier.pathway`.
  Ranger un dossier Excel sous la plateforme impose le report.
- Les opérations 4, 5 et 6 restent identiques pour les cinq candidats. Une voie
  ne peut pas retirer seule une exigence.
- Toute opération applicable, y compris la création/réouverture n°1, doit
  réussir. Le seuil de 80 % ne concerne plus les opérations : il concerne
  seulement la couverture des exigences par un logiciel standard.
- Une entrée invalide impose le report et ne peut pas servir à éliminer une
  voie simple afin de lancer artificiellement une voie plus complexe.
- Le verdict global connaît quatre sorties distinctes : `lancer`,
  `reporter`, `arrêter` et `ne pas investir`. Si conserver Excel est la voie
  admissible la moins coûteuse, la sortie est explicitement « ne pas
  investir ».

### 18.6 Contrôles R2 exécutés

```text
Moteur R2 :
  62/62 tests ciblés réussis.
Moteur + gouvernance des guides :
  72/72 tests réussis.
Langue humaine :
  aucun échec propre à transformer-excel-en-application ;
  trois échecs globaux préexistants restent limités à securite-saas-b2b.
ESLint ciblé :
  réussi sur page, OG, composant, moteur, tests et registre.
TypeScript sans émission :
  réussi.
git diff --check ciblé :
  réussi.
SSR local :
  HTTP 200 ; hero R2, cinq dossiers, attestation de coût, compléments AppSheet,
  rapport imprimable et robots noindex présents.
```

Le rapport autonome est aussi testé avec plateforme changée et données
incomplètes : il affiche « non renseigné » au lieu de sérialiser `undefined` ou
`NaN`.

### 18.7 Résiduel volontaire et statut

- Le guide reste `ready-for-human-review`.
- Un nouveau P3 froid doit contrôler ce snapshot ; le présent journal n’est pas
  une auto-certification indépendante.
- La P4 navigateur réelle reste non exécutée : largeurs 320 à 1 600 px,
  thèmes, clavier, lecteur d’écran, focus, annonces dynamiques, débordements et
  impression/PDF visuelle.
- Déploiement, route de production, sitemap, indexation et autorisation humaine
  de publication restent non vérifiés.
- Aucun commit, push, déploiement ou demande d’indexation n’est effectué dans
  cette passe.
- Le snapshot R2 est gelé dans
  `docs/research/manifests/transformer-excel-en-application-p2-2026-07-25-r2.sha256`.

---

## 19. Journal correctif R3 après contre-audit P3 froid R2 — 25 juillet 2026

Rapport opposable lu intégralement et conservé sans modification :
`docs/audits/giga-audit-2026-07-24/reviews/transformer-excel-en-application-p3-2026-07-25-r2.md`.

Empreinte SHA-256 vérifiée avant correction :
`6a2d055e44f1a181131e254dd156dc7709144eeca99438c9c6dc9cd9dcf9c5e6`.

Verdict froid reçu : **84/100, NO-GO**, avec **0 P0, 5 P1 et 2 P2**.
Ce journal décrit les corrections R3 ; il ne remplace pas un nouveau
contre-audit indépendant.

### 19.1 Fermeture des cinq P1

1. **Langage lecteur.** Le lead s’adresse maintenant explicitement au lecteur
   avec `votre`, `vous` et `vos`, reste inférieur à 150 mots et évite le
   vocabulaire d’agence interdit. Le H2 contenant « preuve » est devenu
   « Testez dix opérations avant de choisir ». Un test autonome limité à cette
   route agrège ses propres défauts de lead, titres et tables sans pouvoir être
   masqué par l’échec antérieur d’un autre guide.
2. **Dates séparées.** La vérification éditoriale des sources reste fixée au
   `2026-07-25`. L’utilisateur doit fournir une date de décision ISO distincte,
   non future par rapport à une date courante injectée au moteur. Préparation,
   preuves, motifs de non-applicabilité, condition propre et source de coût
   doivent tous être antérieurs ou égaux à la date de décision. Les tests
   injectent leurs dates : aucun résultat ne dépend de l’horloge réelle.
3. **Documenté et vérifié distincts.** L’interface définit les trois niveaux.
   `déclaré` ne suffit jamais ; `documenté` exige référence et date ;
   `vérifié` exige en plus un vérificateur identifié avec son rôle. Ce champ
   existe pour les dix opérations et la condition propre, change le verdict et
   figure dans le rapport exporté.
4. **Devise cohérente.** Les unités monétaires viennent de la devise du
   dossier, tandis que `utilisateurs`, `h/mois`, `h/semaine` et `semaines/an`
   restent physiques. Les devises admises sont EUR, USD, GBP, CHF, CAD, AUD et
   JPY. Une valeur hors liste, notamment `BANANA`, impose le report et ne peut
   plus mener à un lancement.
5. **Jours 11 à 15.** Le seuil de 80 % est désormais attribué uniquement à la
   couverture des exigences applicables par un logiciel standard. Toute voie
   doit réussir toutes ses opérations applicables et sa condition propre.

### 19.2 Fermeture des deux P2

- La table de sensibilité comporte trois colonnes
  `Variable / Hypothèse / Valeur calculée`. Les scénarios bas, central et haut,
  ainsi que les horizons 24 et 48 mois, restent tous présents avec leurs
  valeurs antérieures.
- Le moteur défend son contrat à l’exécution. Statuts et niveaux de preuve hors
  enum, booléens remplacés par des chaînes, applicabilité `null`, critère propre
  non booléen, devise et type de plateforme hors liste, dates mal formées ou
  futures et identité de voie incohérente produisent un dossier à corriger,
  sans exception et sans sortie `eligible` ou `launch`.

### 19.3 Renforts pédagogiques et invariants

- Le paragraphe d’ouverture cite maintenant l’opération 1 universelle :
  création puis réouverture d’une fiche avec sa pièce jointe.
- Les trois niveaux de preuve sont expliqués avant les champs de la condition
  propre. Le formulaire conserve une progression numérotée et n’oblige à
  travailler que sur un dossier visible à la fois.
- La date éditoriale est affichée comme information en lecture seule ; la date
  de décision apparaît comme une donnée obligatoire du dossier.
- Le rapport autonome exporte séparément version R3, date éditoriale, date de
  décision, date courante de contrôle et vérificateurs.
- Un dossier postérieur au 25 juillet 2026 devient admissible lorsque sa date
  de décision et toutes ses pièces sont cohérentes et non futures.
- Le statut `ready-for-human-review` et la politique `noindex, nofollow` sont
  conservés.

### 19.4 Contrôles R3 exécutés

```text
Moteur R3 :
  78/78 tests ciblés réussis.
Route Excel + moteur + gouvernance des guides :
  93/93 tests réussis.
Test autonome de la route :
  5/5 garde-fous réussis.
Langue humaine globale :
  30/33 ; les trois échecs restent limités à securite-saas-b2b
  (lead, titre et table), sans échec propre à la route Excel.
ESLint ciblé :
  réussi sur page, composant, moteur, tests et registre.
TypeScript sans émission :
  réussi.
```

Les tests adversariaux vérifient explicitement l’absence d’exception et le
report pour les valeurs hors schéma. Les tests de date utilisent
`decisionDate` et `currentDate` injectées. Les tests de rapport couvrent dates,
vérificateurs, unités USD et unités physiques.

### 19.5 Résiduel volontaire et statut

- Un nouveau P3 froid doit noter le snapshot R3 ; la correction ne s’auto-note
  pas et ne promet aucun classement Google.
- La P4 navigateur réelle reste à exécuter : largeurs 320 à 1 600 px, clavier,
  focus, annonces dynamiques, thèmes, débordements, impression et PDF visuel.
- La date courante de l’interface est calculée localement dans le navigateur ;
  le contrat moteur reste déterministe et testé par injection.
- Déploiement, route de production, sitemap et indexation ne sont pas vérifiés
  dans cette passe.
- Aucun commit, push, déploiement, publication ou demande d’indexation n’est
  effectué.
- Les manifestes R1 et R2 restent inchangés. Le snapshot R3 est consigné dans
  `docs/research/manifests/transformer-excel-en-application-p2-2026-07-25-r3.sha256`.

---

## 20. Journal correctif R4 après contre-audit P3 froid R3 — 25 juillet 2026

Rapport opposable lu intégralement et conservé sans modification :
`docs/audits/giga-audit-2026-07-24/reviews/transformer-excel-en-application-p3-2026-07-25-r3.md`.

Empreinte SHA-256 vérifiée avant correction :
`14dd5dd4f3f725cfaca9953502ef275786517e7a3d075177aba8b3a2201d6de1`.

Verdict froid reçu : **GO P3 premium, 96/100**, avec **0 P0, 0 P1 et 2 P2**.
La présente passe ferme techniquement ces deux P2 avant la P4. Elle ne remplace
pas une relecture indépendante de ce nouveau snapshot.

### 20.1 Scénario runtime et cohérence du cas commun

`evaluateExcelComparison` refuse désormais le dossier avant toute évaluation de
voie lorsque l’entrée n’est pas un objet structuré ou que le scénario n’est pas
exactement l’un des trois scénarios canoniques. L’identifiant, le libellé, le
nombre d’utilisateurs, les lignes, le temps résiduel initial, les rôles, les
intégrations et l’usage doivent correspondre au scénario `simple`, `central` ou
`demanding` choisi.

Les opérations conditionnelles 4, 5 et 6 de chaque dossier doivent aussi
correspondre au scénario canonique. Leur simple égalité entre les cinq voies ne
suffit plus. Un scénario simple accompagné de dossiers centraux produit
`report`, ne sélectionne aucune voie, ne contient aucun candidat `eligible` et
ne lève aucune exception.

Les sondes suivantes sont maintenant explicitement couvertes :

```text
input = null ou {}
scenario = null ou {}
scenario.id = "banana"
scenario.users = "twelve"
scenario simple + dossiers centraux
```

Elles retournent toutes un report précoce avec `selectedPathway = null`,
`eligiblePathways = []` et aucun lancement.

### 20.2 Rapport défensif et verdict normalisé

Le constructeur de rapport valide profondément l’entrée et le résultat avant
tout accès imbriqué ou appel à `trim`. Il contrôle scénario, préparation, cinq
dossiers, opérations, conditions propres, plateformes, postes et bases de coût,
ainsi que les enums, tableaux et champs du résultat.

Une entrée ou un résultat hors schéma produit un rapport autonome minimal :

```text
RAPPORT DE CORRECTION
Décision : reporter la décision
Voie retenue : aucune
Aucun classement n’a été produit à partir de ces données.
```

Ce texte ne sérialise ni `undefined`, ni `NaN`, ni valeur de verdict étrangère.
Lorsque les objets sont valides, le rapport recalcule le résultat avec le
moteur au lieu de faire confiance au résultat fourni. Un objet bien formé mais
falsifié en `launch` ne peut donc pas inventer un lancement.

Les cas `null`, `{}`, scénario/préparation/dossiers nuls, référence d’opération
nulle, objets `costBasis`, `costInputs`, `criterion`, `platform` ou
`operations` absents ou mal formés, résultat nul, vide ou hors enum sont tous
testés sans exception. Le rapport exhaustif valide, ses cinq dossiers, ses
vérificateurs et ses unités multidevises restent inchangés.

### 20.3 Date locale après minuit et nettoyage

La date courante possède maintenant un setter. Un effet client :

- programme un rafraîchissement juste après le prochain minuit local ;
- recalcule la date au focus de la fenêtre ;
- la recalcule au retour d’un onglet visible ;
- reprogramme le prochain minuit après chaque réveil ;
- retire les écouteurs et annule le timer au démontage.

Le timer n’est créé que dans `useEffect`, jamais pendant le rendu serveur. Deux
fonctions pures testent le format ISO local et la durée jusqu’au prochain
minuit. Le moteur continue à recevoir une date injectée et reste indépendant de
l’horloge dans ses tests.

Le journal R3 indique maintenant le décompte froid exact de **78/78**, et non
77/77. La branche du logiciel standard sous 80 % contient deux actions
distinctes ; un test vérifie leur unicité et l’absence de répétition.

### 20.4 Contrôles R4 exécutés

```text
Moteur R4 :
  107/107 tests réussis.
Paquet Excel ciblé :
  125/125 tests réussis
  (107 moteur + 2 horloge locale + 6 route + 10 gouvernance).
Test autonome de la route :
  6/6 garde-fous réussis.
Horloge locale :
  2/2 tests réussis.
Langue humaine globale :
  30/33 ; les trois échecs restent limités à securite-saas-b2b
  (lead, titre et table), sans échec propre à la route Excel.
ESLint ciblé :
  réussi sur page, composant, moteur, tests, horloge et registre.
TypeScript sans émission :
  réussi.
git diff --check ciblé :
  réussi.
```

### 20.5 Résiduel volontaire et statut

- Les deux P2 du rapport R3 sont fermés par le code et les tests de cette passe,
  mais aucun nouveau P3 froid n’a encore audité le snapshot R4.
- La P4 navigateur réelle reste obligatoire : largeurs 320 à 1 600 px, clavier,
  focus, retour de veille, passage réel de minuit, thèmes, débordements,
  presse-papiers et impression/PDF.
- Le statut `ready-for-human-review`, la politique `noindex, nofollow` et
  l’unique CTA éditorial sont conservés.
- Déploiement, route de production, sitemap et indexation ne sont pas vérifiés.
- Aucun commit, push, déploiement, publication ou demande d’indexation n’est
  effectué.
- Les manifestes R1, R2 et R3 restent inchangés. Le snapshot R4 est consigné
  dans
  `docs/research/manifests/transformer-excel-en-application-p2-2026-07-25-r4.sha256`.

---

## 21. Journal correctif R5 après contrôle navigateur P4 — 25 juillet 2026

La porte P3 froide R4 reste documentée dans
`docs/audits/giga-audit-2026-07-24/reviews/transformer-excel-en-application-p3-2026-07-25-r4.md`.
Elle concluait à **98/100, 0 P0, 0 P1, 0 P2 et GO vers P4**. La présente passe
ne modifie pas le moteur de décision R4 : elle corrige uniquement cinq défauts
d’usage, d’accessibilité et d’impression observés dans le navigateur.

### 21.1 Temps de lecture cohérent avec le validateur

Le registre indiquait encore 26 minutes. Le contrôle P4 a mesuré environ
8 418 mots utiles. Avec la convention du validateur à 200 mots par minute,
`8 418 / 200 = 42,09` : `readTimeMin` vaut désormais **42 minutes**. Le statut
`ready-for-human-review`, la politique `noindex, nofollow` et l’unique CTA
éditorial restent inchangés.

### 21.2 Changement de scénario sans perte silencieuse

Le diagnostic distingue maintenant un formulaire vierge d’un formulaire
modifié. Une date de décision, une modification de la préparation commune ou
une différence dans l’un des cinq dossiers marque le diagnostic comme
« sale ».

- Si le diagnostic est vierge, le scénario change directement.
- S’il contient des données, le scénario courant reste actif et une
  confirmation inline est annoncée avec `role="alert"` et
  `aria-live="assertive"`.
- Le message indique explicitement que la préparation commune et les cinq
  dossiers seront effacés.
- Deux boutons non ambigus permettent soit d’« Effacer et changer de scénario »,
  soit d’« Annuler et conserver le diagnostic ».
- Aucun `window.confirm` ni dialogue bloquant du navigateur n’est utilisé.

Les tests d’interaction couvrent le changement direct, l’apparition de
l’avertissement, la conservation après annulation, l’effacement après
confirmation et la détection d’une modification interne à un dossier.

### 21.3 Noms et états accessibles

Les cinq boutons qui ouvrent les dossiers exposent maintenant leur état actif
avec `aria-pressed`. La synthèse latérale utilise la même information afin que
son état visuel et son état annoncé restent cohérents.

Les champs de justification associés à `X = 0` et `I = 0` possèdent désormais
des libellés visibles et accessibles :

```text
Justification pour X = 0
Justification pour I = 0
```

Le placeholder reste un exemple, mais n’est plus utilisé comme nom du champ.

### 21.4 Impression isolée du rapport

Le diagnostic porte l’identifiant scoped `excel-decision-diagnostic`. Une règle
`@media print` locale :

- masque le reste de la page ;
- place le diagnostic en haut de la feuille sur toute la largeur ;
- n’affiche que le rapport préformaté `.excel-print-report` ;
- masque explicitement boutons, champs et zone interactive ;
- force un fond blanc et un texte sombre pour le rapport.

Le bouton « Imprimer » continue d’appeler le dialogue natif, mais l’article
d’environ 8 400 mots n’est plus inclus dans la sortie préparée par le composant.
Le test DOM vérifie l’identifiant, la présence et la position du `<pre>`, les
sélecteurs d’isolation et l’appel à `window.print`.

### 21.5 Contrôles R5 exécutés

```text
Tests d’interaction P4 du composant :
  5/5 réussis.
Contrat qualité propre à la route :
  7/7 réussis.
Paquet Excel ciblé :
  131/131 réussis
  (107 moteur + 2 horloge + 7 route + 5 interaction + 10 gouvernance).
ESLint ciblé :
  réussi sur page, image sociale, composant, tests, moteur, horloge et registre.
TypeScript sans émission :
  réussi.
git diff --check ciblé :
  réussi avant création du manifeste.
```

### 21.6 Résiduel volontaire et statut

- Les comportements ont été testés dans un DOM navigateur simulé. Une
  revalidation P4 réelle reste nécessaire pour le parcours clavier complet,
  l’annonce avec les lecteurs d’écran ciblés et les largeurs 320 à 1 600 px.
- La règle d’impression est contractuellement testée, mais aucun nouveau PDF
  physique n’a été rendu ni inspecté après R5.
- Le moteur et les hypothèses de décision R4 n’ont pas changé.
- Le statut `ready-for-human-review`, la politique `noindex, nofollow` et
  l’unique CTA éditorial sont conservés.
- Déploiement, route de production, sitemap et indexation ne sont pas vérifiés.
- Aucun commit, push, déploiement, publication ou demande d’indexation n’est
  effectué.
- Les manifestes R1 à R4 restent inchangés. Le snapshot R5 est consigné dans
  `docs/research/manifests/transformer-excel-en-application-p2-2026-07-25-r5.sha256`.

---

## 22. Journal correctif R6 — impression PDF sans pages fantômes

Le contrôle Chrome réel de R5 a révélé un P1 que le test DOM ne pouvait pas
fermer : le rapport utile occupait 11 pages, mais l’article masqué produisait
encore 25 pages blanches. La règle `visibility: hidden` retirait les contenus
visuels sans retirer leurs boîtes du flux de mise en page.

La passe R6 est strictement limitée à ce défaut d’impression. Elle ne modifie
ni le contenu éditorial, ni le moteur de décision, ni les cinq dossiers.

### 22.1 Retrait réel du reste de la page

La règle d’impression ne repose plus sur un `body *` rendu invisible. Elle
retire désormais du flux chaque élément extérieur au diagnostic tout en
préservant le diagnostic, ses descendants et sa chaîne d’ancêtres :

```css
body
  *:not(#excel-decision-diagnostic):not(#excel-decision-diagnostic
    *):not(:has(#excel-decision-diagnostic)) {
  display: none !important;
}
```

Les autres règles restent bornées à `#excel-decision-diagnostic` :

- le diagnostic est placé en haut de la feuille, sur toute la largeur ;
- seul `.excel-print-report` est affiché dans le diagnostic ;
- la zone interactive, les boutons, champs, listes et zones de texte sont
  explicitement retirés ;
- le rapport conserve un fond blanc et un texte sombre.

Le pseudo-sélecteur `:has()` est nécessaire ici pour conserver les ancêtres du
diagnostic sans conserver leurs autres descendants. Le risque résiduel est un
moteur d’impression ancien ne prenant pas `:has()` en charge ; la sortie cible
Chrome utilisée par le contrôle P4 le prend en charge et a été vérifiée
physiquement.

### 22.2 Contrat anti-régression

Deux tests complémentaires, l’un sur le composant et l’autre sur la route,
exigent maintenant le sélecteur complet avec `display: none !important`. Ils
refusent aussi explicitement le retour à :

```css
@media print {
  body * {
    visibility: hidden;
  }
}
```

Ces contrats prouvent la présence de la règle, pas le résultat physique. La
porte R6 conserve donc séparément la preuve PDF Chrome ci-dessous.

### 22.3 Preuve PDF Chrome réelle

Après reconstruction locale en mode production et redémarrage, le contrôle
navigateur réalisé par l’agent racine a généré puis inspecté un PDF A4 réel :

```text
Taille : 83 204 octets.
Pages : 11.
Pages blanches détectées : aucune ([]).
Longueur de texte minimale par page : 429 caractères.
Occurrences DOSSIER : 5.
Intitulés DOSSIER 1 à DOSSIER 5 : tous présents.
H1 et article éditorial : absents.
Libellés Copier, Imprimer et Réinitialiser : absents.
```

Les pages 1 et 11 ont également été rendues en PNG et inspectées visuellement :
texte lisible, aucune page blanche artificielle et fin de rapport propre. R6
ramène donc la sortie de 36 pages, dont 25 vides, à **11 pages utiles sur 11**.

### 22.4 Contrôles R6 exécutés

```text
Paquet Excel ciblé :
  131/131 tests réussis
  (107 moteur + 2 horloge + 7 route + 5 interaction + 10 gouvernance).
Contrats impression :
  sélecteur display:none exact requis ;
  régression visibility-only interdite.
ESLint ciblé :
  réussi.
TypeScript sans émission :
  réussi.
Prettier ciblé :
  réussi.
git diff --check ciblé :
  réussi.
PDF Chrome A4 :
  11/11 pages utiles, aucune page blanche, 5/5 dossiers présents,
  aucun article, H1 ou contrôle interactif.
```

### 22.5 Statut et limites

- Le P1 impression de R5 est fermé par une preuve PDF réelle, pas seulement
  par un test DOM.
- Le moteur et les hypothèses de décision R4 n’ont pas changé.
- Le statut `ready-for-human-review`, la politique `noindex, nofollow` et
  l’unique CTA éditorial sont conservés.
- Déploiement, route de production publique, sitemap et indexation ne sont pas
  vérifiés.
- Aucun commit, push, déploiement, publication ou demande d’indexation n’est
  effectué.
- Les manifestes R1 à R5 restent inchangés. Le snapshot R6 est consigné dans
  `docs/research/manifests/transformer-excel-en-application-p2-2026-07-25-r6.sha256`.

---

## 23. Candidat R7 — audit mondial contradictoire et refonte du 28 juillet 2026

Cette passe reprend le guide successivement, sans modifier les deux guides
précédemment fermés. Trois audits indépendants, en lecture seule, ont évalué le
gel du 28 juillet avant correction :

| Audit | Note initiale | Porte | Principaux manques |
| --- | ---: | --- | --- |
| Exactitude et sources internationales | 89/100 | NO-GO | traduction Excel vers cible absente, jeu d’essai non livré, panorama trop étroit |
| Moteur et sécurité de décision | 77/100 | NO-GO | population non comparable, débordement numérique, CTA générique, tests hors porte de build |
| Pédagogie et expérience lecteur | 89/100 | NO-GO | pas de fil données-règles-écrans, migration incomplète, aucune reprise du diagnostic, recette utilisateur et suivi insuffisants |

Le candidat R7 résout l’union de ces constats. Il reste soumis à un nouveau
contre-audit indépendant ; les notes initiales ne sont donc pas présentées comme
notes finales.

### 23.1 Sources primaires rouvertes

Les pages suivantes ont été relues le 28 juillet 2026 :

- Microsoft Power Apps : tarification française, délégation, connecteur Excel
  Online Business, création à partir d’Excel, sauvegarde/restauration et audit
  Dataverse ;
- Google AppSheet : tarification, import d’un classeur, formules, filtres de
  sécurité, audit, transfert et limites d’AppSheet Database ;
- Airtable : plans, snapshots, comportement des URL de pièces jointes et
  résidence des données ;
- Retool, Grist et Baserow : tarification et architecture officielle, avec
  contrôle séparé des options d’auto-hébergement ;
- Union européenne : règlement 2023/2854, notamment l’article 29 et sa date
  d’application ;
- GOV.UK AQuA Book, CNIL, ANSSI et GAO pour les contrôles de modèle, sauvegardes
  et estimations.

Les prix et quotas restent des faits datés à revalider. La page conserve le
désaccord observé entre deux documents Airtable sur la durée Business au lieu de
trancher sans preuve.

### 23.2 Traduction Excel vers application

La page ne traite plus l’import comme une migration. Elle fournit maintenant un
registre explicite pour :

- onglets, tables, identifiants et relations ;
- formules et cellules calculées ;
- validations et formats conditionnels ;
- macros, VBA et scripts ;
- Power Query, liens externes et secrets ;
- noms définis, tableaux croisés et indicateurs ;
- dates, devises, locales et arrondis ;
- protections, rôles, commentaires et pièces jointes.

Un exemple continu relie trois onglets d’interventions aux données cibles, aux
règles versionnées, à trois écrans par rôle et aux preuves d’exploitation.
L’import Power Apps et l’import AppSheet sont distingués d’une connexion à la
source ou d’une reconstruction.

### 23.3 Migration, acceptation et exploitation

Le protocole couvre désormais huit étapes : inventaire, nettoyage, mapping,
migrations à blanc, rapprochement exhaustif, gel et delta, fonctionnement
parallèle, bascule ou retour. Les identifiants et pièces sont rapprochés
exhaustivement ; comptes, sous-totaux, relations, dates extrêmes et règles sont
contrôlés indépendamment. La procédure de retour nomme ses déclencheurs, son
décideur et le traitement des écritures effectuées dans la cible.

La recette associe cinq profils représentatifs : opérateur sur ordinateur,
technicien mobile, approbateur occasionnel, suppléant d’administration et
utilisateur clavier/zoom/lecteur d’écran. Elle mesure réussite de tâche, temps,
erreurs, demandes d’aide et récupération. Les revues J+30, J+60 et J+90
réexaminent usages, incidents, bénéfices et coûts réels.

Le seuil de couverture standard de 80 % est désormais qualifié comme règle
éditoriale interne de présélection Hagnéré Code, et non comme norme universelle.
Un besoin bloquant reste éliminatoire quel que soit le pourcentage.

### 23.4 Jeu d’essai réellement téléchargeable

Le générateur
`scripts/generate-excel-migration-test-kit.mjs` produit de manière
reproductible :

- 3 050 lignes de départ, totalisant 4 652 775 EUR ;
- un lot de 100 lignes avec exactement 95 acceptations et 5 rejets motivés ;
- onze pièces jointes factices, sans donnée personnelle ;
- les résultats attendus et les empreintes SHA-256 ;
- une archive ZIP de 15 fichiers.

Deux générations successives ont produit la même empreinte ZIP :

```text
939b4f2c90ef4a8a4c3b08bd2479c0b86287a1dd69e98865486620f29ed388a7
```

La page lie le ZIP, le jeu de départ et le lot d’import. Les ressources sont
servies avec `X-Robots-Tag: noindex`.

### 23.5 Moteur R5 et continuité du diagnostic

Le moteur refuse maintenant :

- une population licenciée différente des utilisateurs du scénario, même si
  les cinq candidats sous-déclarent tous la même population ;
- une borne supérieure à `Number.MAX_SAFE_INTEGER` ;
- un total, minimum ou maximum non fini, inversé ou hors domaine numérique sûr.

Les changements de produit ou de plan invalident leurs coûts spécifiques sans
perdre la population commune. Les tests couvrent 1/12, 12/12, les cinq dossiers
sous-déclarés, la borne maximale, la borne maximale + 1 et un produit fini dont
la multiplication dépasse le domaine sûr.

Le diagnostic offre maintenant, sans réseau :

- une sauvegarde locale explicite et versionnée, jamais automatique ;
- la reprise ou la suppression séparée du brouillon local ;
- l’export et l’import d’un JSON borné et contrôlé ;
- une confirmation avant changement destructif ou remise à zéro ;
- une zone de copie manuelle si le presse-papiers échoue ;
- le rafraîchissement réel de la date à minuit, au focus et au retour visible.

Le seul CTA dans l’article est contextualisé avec
`service=outils-internes&source=guide-excel-application`. Le CTA latéral est
désactivé et aucun lien téléphonique n’est présent dans l’article. La navigation
et le pied de page globaux restent hors du contenu éditorial.

### 23.6 Contrôles du candidat avant contre-audit

```text
Tests ciblés R7 :
  137/137 réussis sur les six suites moteur, composant, guide, horloge,
  brouillon et kit de migration.

Contrôle élargi incluant le registre :
  147/147 réussis.

ESLint ciblé :
  réussi.

Build Next direct :
  compilation et TypeScript réussis ;
  159/159 pages statiques générées ;
  route /guides/transformer-excel-en-application présente.

HTML de production local :
  HTTP 200 ;
  10 258 mots éditoriaux ;
  51 minutes mesurées ;
  1 H1, 11 H2, 19 H3 et 20 tableaux dans l’article ;
  aucun ID dupliqué ni ancre manquante ;
  un seul CTA article, contextualisé ; aucun téléphone article.

Ressources :
  ZIP, CSV, mode d’emploi et pièce 11 servis en HTTP 200 ;
  X-Robots-Tag: noindex sur ZIP et CSV.

Open Graph :
  HTTP 200, image/png, 177 889 octets.
```

La porte globale `npm run check:seo` reste rouge pour deux contrôles de
gouvernance antérieurs et hors de ce lot : des manifestes P4 ne correspondent
plus à l’arbre partagé, et des guides déjà placés en revue humaine sont encore
attendus comme publiés par l’ancien contrat. Le test de registre qui avait
relevé la formulation interdite « zéro perte » a été corrigé dans ce guide. Le
build Next direct est vert, mais ne transforme pas ces deux défauts de
gouvernance en GO global.

### 23.7 Limites de la preuve

- Le candidat reste `ready-for-human-review`, `noindex, nofollow`.
- Aucun commit, push, déploiement, publication ou demande d’indexation n’est
  effectué.
- Le navigateur intégré n’étant pas disponible pendant cette passe, aucun BAT
  visuel multi-largeur ni nouveau PDF d’impression n’est revendiqué.
- Le candidat ne devient fermé qu’après convergence des trois contre-audits
  indépendants sur le même gel.

---

## 24. Candidat R8 — union des contre-audits R7

Les trois contre-audits R7 ont relu le manifeste 19/19 sans modifier le lot.
Ils ont noté le candidat 94/100 sur les faits, 91/100 sur la technique globale
et 94/100 sur l’expérience, mais ont refusé un GO commun. Le refus factuel a
mis au jour un défaut réel du kit : le lot à importer contenait encore les
colonnes de l’oracle. L’audit UX a également relevé une date visible
contradictoire et un gel incomplet des dépendances partagées. L’audit technique
a confirmé les deux corrections moteur initiales, tout en montrant que le
contexte du CTA n’était pas encore reconnu par le formulaire.

Le candidat R8 corrige l’union de ces constats :

- `lot-import-100-lignes.csv` reprend exactement les sept colonnes métier du
  jeu de départ ;
- `oracle-import.csv` porte séparément le numéro de ligne, l’identifiant lu, la
  décision et le motif attendus ; le mode d’emploi interdit explicitement de
  l’importer ;
- le texte distingue l’import Excel vers AppSheet Database, encore en
  `Preview` et limité à une feuille, de l’application connectée à un classeur
  dont les feuilles supplémentaires peuvent être ajoutées comme tables ;
- une constante unique fournit la date ISO et son libellé français au moteur,
  à l’outil et à la page ;
- le formulaire reconnaît désormais
  `service=outils-internes&source=guide-excel-application`, présélectionne
  l’outil interne et explique que le sur-mesure n’est pas présumé ;
- un brouillon local corrompu peut être supprimé sans être restaurable ;
- les vrais gestes d’import JSON valide/invalide, téléchargement et suppression
  locale sont couverts par les tests du composant ;
- un parcours de triage en cinq minutes, un effort annoncé et une progression
  `préparation 0/7 + dossiers 0/5` réduisent la charge de lecture sans
  transformer le triage en décision ;
- le seuil de 80 % est annoncé comme règle fixe de ce diagnostic ; une autre
  gouvernance doit être documentée hors de l’outil ;
- le prochain gel inclut les composants partagés de layout et de contenu, ainsi
  que le funnel et son contrat de test.

Le kit R2 contient 16 fichiers dans le ZIP. Deux générations successives ont
produit la même empreinte :

```text
49e65ce2f10f96a38ff520706db815c57e909caaf3f22a9fb8e4415bd6197c3d
```

Avant le gel R8, les dix suites ciblées ont réussi 159 tests sur 159, ESLint
ciblé et `git diff --check` sont verts, et le build Next direct a compilé le
TypeScript puis généré 159 pages statiques. Le HTML local mesuré contient
10 506 mots éditoriaux, soit 53 minutes. Ces éléments restent des preuves
locales : le statut est toujours `ready-for-human-review`, la page demeure
`noindex, nofollow`, aucun BAT visuel n’est revendiqué et aucun
commit/push/déploiement n’est effectué.
