# Audit approfondi — `digitaliser-bons-intervention`

Date : 24 juillet 2026

Auditeur concurrentiel : audit P3 en lecture seule. Les ressources françaises et internationales sont utilisées pour vérifier des faits, des risques et des questions oubliées ; elles ne prouvent ni un tarif, ni un gain, ni une conformité universelle. Les prescriptions juridiques ou sectorielles doivent être confirmées pour le cas réel.

Snapshot du guide :

- Source : `src/app/guides/digitaliser-bons-intervention/page.tsx` (1 208 lignes, 4 052 mots visibles en rendu local).
- Registre : `src/lib/guides.ts:446-461`.
- Image Open Graph : `src/app/guides/digitaliser-bons-intervention/opengraph-image.tsx`.
- SHA-256 : `page.tsx` `3a3b7cac212a21a898429f58fa3ae85fb143c8e8f14f754140d679080938355e` ; `opengraph-image.tsx` `b994e7905103cf67412909f0c8477f35004e83ff5345253297f1c4310b00bfec` ; `guides.ts` `8663e6e84352121ec854393e049492a1c2b72f242166141e5d31e0911b43cb09`.
- Métadonnées du registre : publication et modification `2026-07-23`, lecture annoncée `16` minutes, rubrique « Applications métier ».
- Aucun dossier de recherche rejouable `docs/research/digitaliser-bons-intervention.md` n’a été trouvé. Cela ne prouve pas l’absence de recherche préalable ; cela empêche de rejouer précisément ses choix et ses exclusions.

## 1. Verdict exécutif

```text
Lecteur exact : dirigeant d’une entreprise de maintenance, de dépannage, d’installation ou de services techniques qui reçoit des bons papier/PDF tardifs et ne sait pas encore si le dossier est facturable.
Question réelle : « Comment obtenir une preuve exploitable du prévu, du réalisé, de la réaction du client et de la prochaine action, même sans réseau, sans surveiller mes techniciens et sans fabriquer un second outil administratif ? »
Décision attendue : améliorer le papier/PDF, utiliser un formulaire simple, assembler du low-code, acheter un logiciel FSM standard ou développer un parcours spécifique.
Réponse actuelle en une phrase : suivre BI-042 de la préparation à la version corrigée, tester huit échecs et comparer quatre réponses avant de choisir.
Défaut qui coûte le plus de valeur : l’histoire et les garde-fous sont solides, mais aucun scénario chiffré ne met à égalité photos, signature, GPS, hors-ligne, facturation et intégration ; le TCO, le gain et le go/no-go restent à inventer par le lecteur.
Niveau actuel : B
Priorité : haute
Statut : audité, non réécrit, non contre-audité après correction
P1–P4 : P1 recherche/cadrage = NON PASS (corpus non rejouable et comparaison internationale non tracée) ; P2 rédaction/intégration = NON PASS (preuves terrain, TCO, synchronisation et intégrations incomplètes) ; P3 contre-audit = RAPPORT PRÉSENT, VALIDATION NON PASS tant que les P1 ne sont pas corrigés et revérifiés ; P4 plume/UX/QA = CONTRÔLES DE BASE PRÉSENTS, VALIDATION NON PASS tant que le snapshot corrigé n’a pas passé toutes les portes humaines, techniques et visuelles.
Publication/indexation : non prouvées. En local, la page répond avec `noindex, nofollow`; production, sitemap, Search Console et conversions ne sont pas vérifiés.
Verdict : NO-GO éditorial pour un guide présenté comme décision complète. GO possible après correction des P1 et contre-audit indépendant.
```

### Score avant correction

| Axe | Note /10 | Preuve | Manque décisif |
| --- | ---: | --- | --- |
| Intention | 9 | Introduction et BI-042, `page.tsx:375-492` | Le dirigeant est bien visé ; son arbitrage financier, son SLA et le coût du délai sont peu chiffrés. |
| Décision | 7 | Quatre options, `page.tsx:652-750` | Il manque une cinquième option distincte et une matrice pondérée à périmètre égal. |
| Pédagogie | 9 | Voyage du bon, états, questions « à vérifier », `page.tsx:134-219`, `454-540` | Très lisible ; il faut définir FSM, ordre de travail, preuve de service, idempotence et MDM. |
| Profondeur | 7 | Hors-ligne, versions, huit échecs, mesure, `page.tsx:767-1028` | Photos, GPS, taille des pièces, signature probante, ERP/facturation, TCO 12/36/60 et reprise restent génériques. |
| Preuve | 7 | CNIL, Code civil, eIDAS, `page.tsx:500-648`, `1120-1198` | La version eIDAS citée doit être revalidée après le règlement 2024/1183 ; aucun test réel de terminal, preuve ou synchronisation. |
| Comparaison | 6 | Même BI-042 annoncé pour quatre solutions | Formulaire et low-code sont fusionnés ; pas de coûts ni de verdict conditionnel par cas d’usage. |
| Originalité | 8 | Réserve/refus/absence, version 2, contrôle de dénominateur | Pas de tableau copiable de preuve, de volume photo, d’événements GPS ou de contrat de synchronisation. |
| Style | 9 | Accroche humaine, prudence juridique, refus du sur-mesure automatique | Quelques concepts restent techniques sans lexique ; 4 052 mots peuvent gagner une réponse exécutive en tête. |
| Conversion | 8 | CTA centré sur le trajet et non sur une liste d’écrans | Le CTA ne remet ni scorecard, ni protocole pilote, ni première estimation TCO. |
| SEO/produit | 8 | H1, FAQ, maillage, Article + BreadcrumbList | Champ lexical incomplet : FSM, ordre de travail, preuve de service, photos, horodatage, GPS, ERP, facture, MDM, signature électronique. |

Total : **78/100**.

Priorités : **P0 = 0, P1 = 13, P2 = 6**. Aucun risque P0 n’a été constaté dans le texte. Les P1 sont bloquantes parce que le lecteur pourrait acheter ou développer sur la foi d’une comparaison sans coût, sans preuve juridique opérationnelle et sans garantie de reprise des données.

## 2. Ce que le guide fait réellement bien

Le guide parle enfin à une personne qui reconnaît son problème : le technicien a fini, mais l’administration ne sait pas si elle peut avancer. La phrase d’ouverture ne part pas d’une technologie ; elle part d’un dossier facturable. C’est une très bonne base de conversion pour un dirigeant.

La démonstration BI-042 est également une vraie force :

1. le bureau prépare ce qui était prévu ;
2. le technicien déclare le réalisé ;
3. le client accepte, réserve, refuse ou est absent ;
4. le bon reste en attente pendant une coupure ;
5. la réception est confirmée une seule fois ;
6. l’administration contrôle une version ;
7. une correction conserve l’ancienne valeur et son auteur ;
8. l’état facturable, incomplet ou contesté reste explicite.

Cette chaîne évite une erreur fréquente : confondre une signature avec une preuve complète. Les huit échecs sont utiles parce qu’ils testent les événements qui cassent réellement un formulaire : réserve, absence, coupure, double clic, pièce jointe interrompue, conflit de correction, terminal perdu, mauvais destinataire.

Autres points à conserver :

- les données personnelles ne sont pas demandées « au cas où » ;
- le guide distingue historique métier et journaux techniques ;
- il refuse de faire d’un refus une signature ;
- il demande un accusé serveur et une version unique avant d’effacer la copie locale ;
- il rappelle que dix bons ne décrivent pas une entreprise entière ;
- il dit explicitement qu’un PDF corrigé ou un outil déjà payé peut être préférable ;
- le CTA répond personnellement et ne promet ni avis juridique ni développement automatique.

## 3. Ce qui donne une illusion de complétude

Le scénario est riche en états, mais pauvre en grandeurs physiques. Un dirigeant ne peut pas encore répondre à ces questions :

- combien de bons par jour, par technicien et par mois ?
- combien de photos, quelle taille, quels formats, quelle rétention et quel plan de sauvegarde ?
- la photo est-elle prise avant/après, rattachée à une pièce, horodatée localement ou par le serveur, et peut-elle être remplacée sans trace ?
- la signature identifie-t-elle un signataire ou seulement une image de paraphe ?
- le GPS sert-il à trouver le technicien le plus proche, prouver une présence au site, optimiser une tournée ou contrôler un salarié ?
- que se passe-t-il après une journée hors ligne avec des photos, un téléphone plein ou une batterie vide ?
- quelle donnée revient vers l’ERP ou la facturation, qui est la source de vérité et que fait-on d’un rejet ?
- quel coût total sur 12, 36 et 60 mois, avec appareil, forfait, MDM, stockage, service de signature, intégration, support et sortie ?
- quel gain est réellement évité ou réaffecté, plutôt qu’un nombre de clics déplacé du terrain vers le bureau ?

Le guide propose quatre choix. Pour la décision demandée, il faut cinq options de même périmètre : papier/PDF corrigé, formulaire simple, low-code gouverné, FSM standard et sur-mesure ciblé. Le formulaire et le low-code n’ont pas la même dépendance fournisseur, le même volume, la même gouvernance ni la même possibilité d’évoluer ; les fusionner masque précisément le choix que le lecteur doit faire.

## 4. Benchmark France et international

Vérification au 24 juillet 2026. Les ressources ci-dessous sont officielles, standards primaires ou autorités publiques. Elles ne sont pas des comparatifs commerciaux de logiciels FSM et ne permettent pas de conclure qu’un produit est le meilleur.

| Ressource | Pays/zone | Ce qu’elle confirme | Limite | Ajout éditorial à faire |
| --- | --- | --- | --- | --- |
| [CNIL — géolocalisation et applications mobiles](https://www.cnil.fr/fr/geolocalisation-applications-mobiles-quelles-regles) | France, 07/07/2026 | GPS, IP, Wi-Fi et Bluetooth peuvent localiser ; précision, finalité, historique et réutilisation doivent rester nécessaires et contrôlables. | Recommandation générale, pas une validation de ce parcours. | Matrice GPS : finalité, précision, déclencheur, visibilité, conservation, accès, pause hors travail et alternative sans GPS. |
| [CNIL — contrôle de l’activité des personnes employées](https://www.cnil.fr/fr/controle-de-lactivite-des-personnes-employees) | France, 09/07/2026 | Justification, proportionnalité, consultation des représentants selon les règles applicables, information ; surveillance constante généralement excessive. | Le contexte exact de l’employeur et des représentants doit être examiné. | Distinguer preuve de visite, optimisation et contrôle individuel ; interdire les usages secondaires cachés. |
| [CNIL — sécuriser l’informatique mobile](https://www.cnil.fr/fr/securite-securiser-linformatique-mobile) | France | Protection du terminal, stockage local limité et procédure de perte. | Ne donne pas l’architecture d’une application FSM. | Ajouter chiffrement local, verrouillage, effacement, MDM, sauvegarde et scénario de perte. |
| [Code civil, article 1366](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032042461) et [article 1367](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032042456/2026-04-04) | France | Écrit et signature électroniques sont appréciés selon identification, intégrité et procédé fiable. | Le lien versionné daté doit être revérifié ; Légifrance peut bloquer les requêtes automatisées. | Replacer la prudence juridique par une preuve concrète : identité, événement, horodatage, intégrité, consentement/acceptation, audit et conservation. |
| [Règlement eIDAS et règlement modificatif 2024/1183](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1183) | Union européenne | L’article 25 et ses modifications ne doivent pas être résumés à « signature dessinée » contre « qualifiée » sans vérifier le texte en vigueur. | Le niveau de signature et la preuve admissible dépendent du contexte, du contrat et du droit applicable. | Afficher la date/version du texte et faire valider le niveau de signature par un spécialiste si l’enjeu est litigieux. |
| [NIST SP 800-124 Rev. 2 — Guidelines for Managing the Security of Mobile Devices in the Enterprise](https://csrc.nist.gov/pubs/sp/800/124/r2/final) | États-Unis | Synchronisation, stockage local, perte/vol, gestion des appareils, contrôle des applications et données doivent être traités comme une architecture de sécurité. | Guide américain général, pas une obligation française. | Ajouter au test : chiffrement, MDM, séparation BYOD/pro, synchronisation contrôlée et effacement à distance. |
| [NIST SP 1800-21 — mobile device security](https://www.nccoe.nist.gov/publication/1800-21/VolB/index.html) | États-Unis | Une stratégie mobile d’entreprise inclut appareils, gestion centralisée, authentification, applications et protection des données. | Référence de conception, non garantie d’un produit. | Faire porter les mêmes preuves au formulaire, au low-code, au FSM et au spécifique. |
| [NCSC UK — Mobile Device Management](https://www.ncsc.gov.uk/collection/device-security-guidance/getting-ready/mobile-device-management) | Royaume-Uni | MDM peut appliquer des politiques, gérer le statut, contrôler les apps, répondre à une perte et doit rester lui-même sécurisé ; cloud/on-premise ont des compromis. | Guidance de sécurité, pas guide de facturation terrain. | Demander support de versions, effacement rapide, séparation données personnelles/professionnelles, fiabilité et sortie MDM. |
| [NCSC UK — zero-touch enrolment](https://www.ncsc.gov.uk/collection/device-security-guidance/getting-ready/zero-touch-enrolment) | Royaume-Uni | Enrôlement automatique, réinscription après effacement et exceptions doivent être prévus. | Référence centrée sur le parc de terminaux. | Ajouter acquisition/remplacement d’appareil et reprise par un autre administrateur. |
| [ASD/ACSC — risk management of enterprise mobility](https://www.cyber.gov.au/business-government/protecting-devices-systems/remote-working-secure-mobility/secure-mobility/risk-management-of-enterprise-mobility-including-bring-your-own-device) | Australie, page actuelle | BYOD, données sensibles locales, applications non approuvées, séparation travail/personnel et ressources humaines sont des risques ; les contrôles doivent être proportionnés. | Le niveau de classification australien n’est pas une règle française. | Ajouter une décision BYOD ou terminal géré, avec données non conservées dans la galerie personnelle. |
| [ASD/ACSC — enterprise mobility controls](https://www.cyber.gov.au/business-government/asds-cyber-security-frameworks/ism/cyber-security-guidelines/guidelines-for-enterprise-mobility) | Australie, révisions 2026 | Les contrôles actuels traitent séparation données, accès des appareils personnels, maintien sous surveillance et perte/vol. | Le référentiel est calibré pour des environnements classifiés. | Utiliser les thèmes, pas les niveaux de classification, pour une PME. |
| [BSI — chiffrement des appareils mobiles](https://www.bsi.bund.de/EN/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Daten-sichern-verschluesseln-und-loeschen/Datenverschluesselung/Verschluesselung-auf-mobilen-Geraeten/verschluesselung-auf-mobilen-geraeten.html) | Allemagne/DACH | Verrouillage, chiffrement du stockage et activation raisonnée de GPS, Bluetooth, Wi-Fi et mobile data. | Page de conseil utilisateur, pas spécification FSM. | Ajouter un test de permissions et de chiffrement par modèle de terminal. |
| [BSI — minimum standard MDM](https://www.bsi.bund.de/DE/Themen/Oeffentliche-Verwaltung/Mindeststandards/Mobile_Device_Management/Mobile_Device_Management.html?nn=130746) | Allemagne/DACH | Un MDM doit couvrir des exigences fonctionnelles et non fonctionnelles de sécurité. | Standard de l’administration fédérale, pas certification d’un logiciel privé. | Exiger une matrice MDM, support/fin de vie et effacement, plutôt qu’une promesse « mobile sécurisé ». |

Conclusion benchmark : les sources étrangères convergent sur appareil géré, données locales protégées, synchronisation contrôlée, perte/vol, séparation des usages, support et reprise. Elles ne donnent pas de ROI comparable pour les bons d’intervention. Le prochain gain de qualité n’est donc pas un dixième article de fournisseur : c’est un scénario chiffré identique et une preuve de bout en bout.

## 5. Matrice de gain d’information

| Question du dirigeant | Couverture actuelle | Risque si elle reste ouverte | Réponse supérieure à construire |
| --- | --- | --- | --- |
| Que doit prouver le bon ? | Prévu, réalisé, réaction du client, version et état administratif. | Signature sans preuve du travail ou facture déclenchée à tort. | Carte des éléments : ordre de travail, intervention, pièces, photos avant/après, réserve, identité, horodatage, version et prochaine action. |
| Les photos servent-elles vraiment ? | Mention d’une pièce fictive, pas de politique photo. | Stockage massif, visage/plaque visible, photo perdue, remplacement silencieux, malware ou preuve contestable. | Test avec 0/1/2 photos, taille, compression, checksum, orientation, annotation, hors-ligne, rétention et accès. |
| Qui a signé, quoi, quand ? | Prudence sur le dessin au doigt et eIDAS. | Mauvaise identité, simple image, heure modifiable, document non intègre. | Niveau d’authentification, consentement/acceptation, horodatage serveur et local, empreinte de version, journal, export et procédure de contestation. |
| La position est-elle nécessaire ? | Le guide avertit de ne pas la demander par défaut. | Surveillance permanente, données hors travail, accès client excessif, non-respect de la finalité. | Trois parcours sans GPS, GPS à l’arrivée/départ, GPS continu ; comparer utilité et intrusivité. |
| Que se passe-t-il sans réseau ? | Test en huit étapes et état d’attente. | Perte, double bon, pièce non synchronisée, conflit ou téléphone plein. | Machine d’états `local → pending → sent → acknowledged/rejected`, idempotency key, reprise pièces, conflit et expiration. |
| Les données arrivent-elles à l’ERP/facturation ? | Lien vers un guide de connexion, états administratifs généraux. | Double facture, mauvaise TVA/client, version non facturable, reprise manuelle cachée. | Mapping, source de vérité, accusés, rejets, retries, déduplication, critères de déclenchement et export de secours. |
| Quelle réponse comparer ? | Quatre catégories ; formulaire et no-code fusionnés. | Le lecteur compare des étiquettes, pas des périmètres égaux. | Cinq options sur BI-042, photos, signature, GPS optionnel, hors-ligne, droits, ERP, export, support et sortie. |
| Combien cela coûte ? | « Comptez » sans nombres. | Sous-estimation des appareils, données, MDM, stockage, support, migration et sortie. | TCO 12/36/60 avec hypothèses explicites et coûts internes séparés. |
| Quel gain est crédible ? | Taux de complétude et délais, sans baseline chiffrée. | ROI annoncé avec dix bons ou déplacement du travail vers l’administration. | Baseline avant/après : reprise, temps de recherche, délai facturable, erreurs de version, appels, adoption et gain net. |
| Quand arrêter ? | Test de huit échecs, pas de seuil go/no-go. | Déploiement d’un outil qui échoue sur un vrai téléphone ou une vraie équipe. | Propriétaire, période, volume, seuil de synchronisation, complétude, doublons, perte de pièce, disponibilité et rollback. |

## 6. Faits, fraîcheur et points à corriger

| Affirmation ou implication | Verdict | Source actuelle | Correction éditoriale |
| --- | --- | --- | --- |
| Un écrit électronique ne vaut pas automatiquement preuve complète parce qu’il est électronique | Correct comme prudence. | Code civil 1366/1367 et eIDAS. | Conserver, mais faire contrôler les URL, la date du texte et la chaîne d’intégrité du dispositif concret. |
| Une signature dessinée au doigt n’est pas automatiquement incontestable | Correct. | eIDAS article 25 ; faits et contrat restent déterminants. | Remplacer l’opposition dessin/qualifiée par une échelle de preuve : identification, intention, intégrité, horodatage, audit, conservation, niveau de signature. |
| La signature qualifiée est la seule équivalence manuscrite à citer | À revalider. | Le règlement 2024/1183 a modifié eIDAS ; le lien consolidé 2024 utilisé par la page n’est pas une garantie du texte en vigueur en 2026. | Mettre une date de consultation, l’amendement, et une réserve claire ; ne pas donner de conseil juridique dans un guide général. |
| Les permissions GPS/photo doivent être nécessaires | Confirmé. | CNIL applications mobiles, 07/07/2026. | Ajouter précision, déclenchement, durée, accès, effacement et alternative ; permission technique ≠ base juridique. |
| La surveillance permanente d’un salarié est généralement excessive | Confirmé comme règle générale, sous conditions. | CNIL contrôle de l’activité, 09/07/2026. | Ajouter CSE/information selon le cas, finalité, moyen moins intrusif et interdiction d’un usage caché. |
| Un terminal perdu exige une procédure | Confirmé. | CNIL mobile, NIST SP 800-124 Rev.2, NCSC MDM, ASD/ACSC, BSI. | Ajouter effacement à distance, révocation, rotation de secrets, inventaire, reprise et preuve de restauration. |
| Un bon « facturable » peut être envoyé au système de facturation | Seulement comme règle interne proposée. | Aucune règle universelle. | Écrire « selon vos règles contractuelles, fiscales et métier » et prévoir revue comptable/juridique. |
| Dix bons servent à repérer un problème mais ne prouvent pas une moyenne | Correct. | Raisonnement statistique élémentaire ; pas besoin de présenter un échantillon de dix comme preuve de gain. | Ajouter taille de cohorte, biais de sélection et période avant/après. |

### Contradictions ou fragilités précises

1. La page annonce « quatre réponses possibles », alors que le cahier de décision doit distinguer papier/PDF, formulaire, low-code, FSM standard et sur-mesure. Le registre et les quatre cartes sont cohérents entre eux, mais le périmètre de comparaison est trop petit.
2. Le texte décrit une pièce jointe pendant l’envoi et un téléphone perdu, mais ne chiffre ni le volume, ni l’espace local, ni la taille maximale, ni le traitement d’une pièce partiellement reçue.
3. Le scénario utilise des heures (« 16 h 40 ») et des versions, sans distinguer systématiquement heure de l’événement, heure de saisie locale et heure de réception serveur. Pour une preuve, cette distinction est indispensable.
4. La formulation juridique est prudente, mais le lien eIDAS daté du 18 octobre 2024 et la modification 2024/1183 imposent une relecture par version avant publication. L’audit ne tranche pas le droit applicable.
5. Le guide déconseille de noter les techniciens, mais ne propose pas de tableau concret agrégeant par intervention/équipe/site et séparant les usages de preuve, d’organisation et de contrôle.
6. Le CTA demande « le trajet actuel » sans dire que le lecteur repartira avec une scorecard, un protocole d’essai ou un cadrage TCO. C’est honnête, mais moins convertissant qu’un livrable tangible et réellement tenable.

## 7. Scénarios et calculs à ajouter

### Scénario terrain commun

Déclarer toutes les hypothèses avant les chiffres : entreprise de maintenance de 12 techniciens, 5 interventions par jour et par technicien, 220 jours travaillés, 13 200 bons par an, 2 photos par bon, photo moyenne de 3 Mo, 42 €/h de coût interne chargé, 15 terminaux gérés, 50 utilisateurs potentiels de l’administration et du terrain. Ces nombres sont un exemple de méthode, pas une moyenne de marché ni un client Hagnéré.

```text
Bons annuels = 12 × 5 × 220 = 13 200
Photos annuelles = 13 200 × 2 = 26 400
Volume photo brut annuel = 26 400 × 3 Mo ≈ 79,2 Go
Avec 5 ans et une copie de sauvegarde : au moins 792 Go avant miniatures,
versions, logs et réplication. La politique de conservation doit donc être décidée.
```

Faire passer le même BI-042 dans cinq options, avec : ordre de travail, prévu/réalisé, 0/1/2 photos, réserve, refus, absence, signature/acceptation, GPS à l’arrivée seulement puis sans GPS, 24 heures hors ligne, deux corrections concurrentes, téléphone perdu, export vers ERP/facturation et reprise après rejet.

### Mesurer un coût de reprise sans promettre un ROI

Supposons que chaque bon demande aujourd’hui 5 minutes de recherche, de ressaisie ou de relance administrative. C’est une hypothèse à mesurer sur une période avant pilote :

```text
Temps annuel = 13 200 × 5 / 60 = 1 100 heures
Coût théorique = 1 100 × 42 = 46 200 € / an
```

Ce n’est pas un gain. Si le pilote prouve que 40 % de cette reprise disparaît sans hausse des réserves, doublons ou erreurs de facture, la capacité théorique libérée est `46 200 × 40 % = 18 480 €`. Il faut encore démontrer qu’elle est réellement réaffectée ou qu’un coût est évité. Un délai de facturation plus court peut améliorer la trésorerie sans être du chiffre d’affaires ; ne pas additionner les deux sans modèle comptable.

### GPS : rendre visible le choix de minimisation

Une collecte toutes les dix minutes pendant huit heures pour les 12 techniciens produirait environ `12 × 48 × 220 = 126 720` points par an, avant les métadonnées et l’historique. Ce calcul montre pourquoi « GPS activé » n’est pas une exigence fonctionnelle neutre. Tester trois parcours : aucune position, position au début/à la fin, et position continue. Mesurer la décision rendue possible, les personnes qui accèdent aux données, la précision et la durée de conservation. Le guide doit conclure par une préférence pour le parcours le moins intrusif qui suffit, pas par une prescription de GPS.

### Hors-ligne et pièces jointes

Avec 15 bons hors ligne par terminal, deux photos de 3 Mo par bon, le minimum brut de file locale est `15 × 2 × 3 = 90 Mo` par terminal, auquel s’ajoutent texte, versions, chiffrement, marge, miniature et éventuelle reprise. Tester téléphone plein, batterie vide, fermeture forcée, redémarrage, perte, changement d’utilisateur et réseau qui tombe pendant la seconde photo. Une réussite est une machine d’états observée et exportable, pas la présence du mot « offline » dans la brochure.

### Modèle TCO égal-scope

Hypothèses illustratives uniquement : taux interne de 650 €/jour, 15 terminaux et MDM initialement 6 000–8 000 €, hors TVA, prix fournisseur réel, salaires et coûts de déplacement. Les nombres ci-dessous ne sont pas des devis.

| Option | Jours cadrage/intégration | Jours formation/support interne | Matériel/MDM initial | Abonnement ou hébergement/an | Maintenance interne/an | TCO 12 mois illustratif | TCO 36 mois | TCO 60 mois |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Papier/PDF corrigé | 3 | 3 | 0 € | 600 € | 0 € | 4 500 € | 5 700 € | 6 900 € |
| Formulaire simple | 13 | 3 | 6 000 € | 2 160 € | 2 600 € | 21 160 € | 30 680 € | 40 200 € |
| Low-code gouverné | 25 | 5 | 6 000 € | 7 200 € | 7 800 € | 40 500 € | 70 500 € | 100 500 € |
| FSM standard | 50 | 8 | 8 000 € | 15 000 € | 5 000 € | 65 700 € | 105 700 € | 145 700 € |
| Sur-mesure ciblé | 80 | 10 | 8 000 € | 3 600 € | 11 700 € | 75 300 € | 105 900 € | 136 500 € |

Formules à afficher et à recalculer avec les devis :

```text
TCO 12 = cadrage + intégration + formation + matériel/MDM
          + licences/abonnements/hébergement + support/maintenance
          + migration + capacité interne.

TCO 36 = TCO 12 + 2 années de récurrence + mises à niveau
          + remplacement d’appareil + sécurité et sauvegardes.

TCO 60 = TCO 12 + 4 années de récurrence + renouvellement
          + migration, export, exercice de sortie et fin de vie.

Gain net prudent = coût réellement évité ou capacité effectivement réaffectée
                   − TCO incrémental − transition.
```

Le tableau est volontairement honnête : il exclut encore forfait data, stockage photo réel, service de signature, assurance, déplacement, TVA, coût d’arrêt et coût de migration. Chaque ligne doit donc être présentée comme un gabarit de calcul, jamais comme un prix de marché. Le papier peut perdre sur le temps de reprise tout en gagnant sur le TCO ; un FSM peut couvrir davantage tout en étant mauvais pour 15 techniciens si l’abonnement et la conduite du changement dépassent la valeur démontrée.

## 8. Comparaison et position professionnelle

### Les cinq options à mettre à périmètre égal

| Option | Quand elle gagne | Quand elle perd | Preuve à exiger |
| --- | --- | --- | --- |
| Papier/PDF corrigé | Peu de champs, peu d’exceptions, réception et classement déjà fiables. | Retard, recherche, versions et ressaisie récurrents. | BI-042 complet, photo, réserve, correction, archivage et temps administratif. |
| Formulaire simple | Besoin de saisie structurée, faible intégration, règles stables et peu de pièces. | Hors-ligne long, volumes photo, droits/versions complexes ou workflow multi-équipes. | Même bon, 24 h hors ligne, pièce jointe, export et destinataire erroné. |
| Low-code gouverné | Besoin de règles et flux plus riches, équipe capable d’administrer, intégrations limitées. | Dépendance à une plateforme, licences par utilisateur, offline ou export insuffisants. | Propriétaire, versioning, sauvegarde restaurée, API, idempotence et reprise par un tiers. |
| FSM standard | Interventions répétitives, planning/actifs/stock/facturation déjà proches du modèle produit. | Exceptions métier fortes, faible volume, coûts de licence et intégration disproportionnés. | Documentation et environnement d’essai sur les huit échecs, appareil réel et export. |
| Sur-mesure ciblé | Un seul écart stable bloque la décision et les quatre autres options échouent au même test. | Règles mouvantes, absence d’équipe pilote, besoin d’un ERP complet ou de garantie juridique. | Périmètre, propriété, sécurité mobile, tests, SLA, reprise par tiers, réversibilité et TCO. |

Position professionnelle Hagnéré Code : commencer par le trajet et la preuve, pas par l’application. Recommander le sur-mesure seulement pour un ajout limité, stable, testé et relié à la source de vérité. Dire « ne développez rien » si le papier/PDF ou l’outil déjà payé atteint les critères. Ne jamais reconstruire une facturation complète pour résoudre un bon incomplet.

### Signaux de révision ou d’arrêt

- moins de 98 % des bons testés arrivent avec un état de synchronisation explicite ;
- une pièce jointe ou une version peut disparaître sans alerte ;
- un double clic, un retry ou une reprise crée deux bons ou deux événements facturables ;
- plus de 5 % des bons nécessitent une correction manuelle non historisée ;
- le terminal n’est pas chiffré, géré ou effaçable après perte ;
- le GPS collecte plus que la finalité démontrée ou reste actif hors travail ;
- le pilote ne mesure pas l’adoption, la complétude, le délai facturable, les réserves et les erreurs ;
- le TCO 36/60 dépasse la valeur réellement observée ;
- personne n’accepte la responsabilité de la source de vérité, des incidents et de la sortie.

Ces seuils sont des propositions de gouvernance, pas des normes. Le guide doit les appeler « seuils à choisir » et faire signer le choix par le métier, l’administration, l’IT/sécurité et, si nécessaire, le conseil juridique ou les représentants du personnel.

## 9. Objections et échecs à traiter

| Objection loyale | Réponse actuelle | Angle manquant | Correction |
| --- | --- | --- | --- |
| « Une photo prouve le travail. » | Le guide demande une pièce, sans politique photo. | Date, auteur, original, modifications, localisation, compression, conservation et contexte. | Ajouter photo avant/après, métadonnées minimisées, hash/version et accès. |
| « Il faut le GPS pour prouver la présence. » | Le guide dit de ne pas demander par défaut. | Alternative arrivée/départ, précision, pause, hors travail, client et CSE. | Comparer trois niveaux et faire primer le moins intrusif. |
| « La signature au doigt suffit. » | Réponse juridique prudente. | Identité, authentification, intention, intégrité, horodatage et contestation. | Ajouter chaîne de preuve et revalidation eIDAS actuelle. |
| « Nous avons souvent zéro réseau. » | Huit tests utiles. | File locale, chiffrement, idempotence, conflit, téléphone plein, reprise pièce. | Diagramme et test sur appareil réel. |
| « Nous voulons la facture automatique. » | Trois états et réserve bloquante. | Mapping client/TVA/ligne, source de vérité, rejet, doublon et journal comptable. | Scénario ERP/facturation égal-scope. |
| « Le formulaire no-code est gratuit. » | Compter l’abonnement et l’entretien. | Licence, limites offline, quotas photo, sortie et personne responsable. | Séparer formulaire simple et low-code gouverné. |
| « Le FSM standard fait tout. » | Demander documentation et test. | Support version, appareil, SLA, intégration, export, coût et dépendance. | Exiger environnement d’essai et exercice de sortie. |
| « Nous voulons suivre les techniciens. » | Alerte CNIL et CSE. | Agrégation, finalités séparées et interdiction des usages cachés. | Grille de gouvernance des données et accès. |
| « Nous n’avons que dix bons pour tester. » | Le guide rappelle la limite. | Durée, sélection, biais et seuil de décision. | Baseline puis pilote plus long, avec arrêt explicite. |
| « Le client n’a pas de smartphone. » | Refus/absence traités. | Signature alternative, preuve de remise, tiers présent et envoi différé. | Ajouter voie sans smartphone, sans fabriquer un accord. |
| « Un appareil personnel est plus rapide. » | BYOD non détaillé. | Galerie personnelle, effacement sélectif, support, séparation des comptes. | Décision BYOD/terminal géré et test de perte. |
| « Nous devons garder toutes les photos. » | Minimisation textuelle seulement. | Rétention, sauvegarde, droit d’accès, stockage et sortie. | Politique de conservation par finalité et niveau de preuve. |

## 10. Plan de réécriture priorisé

| Ordre | Section | Question humaine | Preuve/outil à produire | Verdict |
| ---: | --- | --- | --- | --- |
| 1 | Réponse exécutive | Quel choix est probable pour mon entreprise ? | Tableau « si… alors… » avec cinq options et une sortie « ne rien développer ». | Décision initiale. |
| 2 | BI-042 enrichi | Que dois-je prouver de bout en bout ? | Ordre de travail, pièces, photos, réserve, acceptation, refus, absence, GPS optionnel, version et horodatage. | Données minimales. |
| 3 | Lexique dirigeant | Que veulent dire FSM, MDM, idempotence, preuve de service ? | Glossaire court, exemples sans jargon. | Compréhension. |
| 4 | Photos | Comment la pièce devient-elle exploitable ? | Matrice avant/après, taille, métadonnées, hash, retouche, accès, rétention et suppression. | Preuve et coût. |
| 5 | Signature et horodatage | Qu’est-ce qui est réellement accepté ? | Échelle d’authentification, événement local/serveur, intégrité, version et réserve. | Risque juridique visible. |
| 6 | GPS/RGPD | La position est-elle indispensable ? | Trois scénarios, finalité, précision, durée, personnes, accès et pause. | Minimisation. |
| 7 | Offline/synchronisation | Que se passe-t-il quand le réseau revient ? | États local/pending/sent/ack/rejected, idempotency key, conflits, perte et reprise pièce. | Robustesse. |
| 8 | ERP/facturation | Quelle donnée déclenche quoi ? | Mapping, source de vérité, rejet, retry, doublon, export et décision humaine. | Intégration. |
| 9 | Cinq options | Que compare-t-on réellement ? | Même BI-042, mêmes huit échecs, appareil réel et même grille de critères. | Buy/build/no-code/statu quo. |
| 10 | TCO 12/36/60 | Quel investissement puis-je assumer ? | Gabarit chiffré, hypothèses, coûts internes, stockage, MDM, signature, migration et sortie. | Budget. |
| 11 | Pilote | Quand arrêter ou généraliser ? | Baseline, durée, propriétaire, adoption, complétude, synchro, réversibilité et comité go/no-go. | Risque contrôlé. |
| 12 | CTA | Que vais-je obtenir après le contact ? | Scorecard du trajet, protocole de test et première liste de TCO, sans diagnostic automatique promis. | Conversion qualifiée. |

### Contrat d’ouverture proposé

« Votre technicien termine l’intervention à 16 h 40. Le client ajoute une réserve, le téléphone passe hors réseau et, le lendemain, le bureau reçoit deux PDF différents. Vous ne cherchez pas forcément une application de plus : vous cherchez à savoir ce qui était prévu, ce qui a été fait, ce qui a été accepté et ce qui reste à décider avant la facture. Nous allons faire passer le même bon fictif par cinq réponses : papier/PDF corrigé, formulaire simple, low-code, logiciel FSM standard et parcours sur mesure. Nous testerons deux photos, une réserve, un refus, une absence, un téléphone sans réseau pendant 24 heures, une correction concurrente, un terminal perdu et un export vers l’ERP. Nous comparerons ensuite les coûts à 12, 36 et 60 mois et mesurerons le délai réellement évité. Le meilleur choix peut être de conserver le PDF, de configurer un outil déjà payé ou de ne rien développer. Il doit seulement rendre le dossier plus fiable sans transformer un bon d’intervention en dispositif de surveillance. »

Éléments à conserver : l’accroche « dossier facturable », BI-042, les états réserve/refus/absence, la distinction historique/journaux, la prudence eIDAS, les huit échecs et la possibilité de ne rien développer.

Éléments à couper ou reformuler : « quatre réponses » après ajout de la cinquième, toute phrase pouvant laisser croire qu’un état « facturable » est universel, tout chiffre de taux sans cohorte, toute référence eIDAS sans version actuelle, et tout mot « hors ligne » qui ne renvoie pas à un test de reprise.

## 11. Contre-audit après correction

Aucun correctif n’a été appliqué à la source pendant cet audit. Une seconde passe doit vérifier les éléments suivants sans se contenter de compter les mots.

| ID | Priorité | Correction obligatoire | Test de relecture indépendant |
| --- | --- | --- | --- |
| P1-01 | P1 | Ajouter un scénario chiffré de volume, temps, photos, signatures et GPS optionnel. | Un dirigeant peut recalculer le volume annuel et distinguer hypothèse, mesure et promesse. |
| P1-02 | P1 | Décrire photo originale, métadonnées, compression, taille, hash, retouche, accès, rétention et suppression. | Une photo interrompue, remplacée ou reçue deux fois est détectée. |
| P1-03 | P1 | Revalider eIDAS 2026 et détailler identité, intention, intégrité, horodatage, version et contestation. | Aucun lecteur ne confond paraphe dessiné, signature électronique et garantie de litige. |
| P1-04 | P1 | Ajouter matrice GPS/RGPD et usage salarié/client. | Les parcours sans GPS, GPS ponctuel et GPS continu sont comparés avec une finalité et une durée. |
| P1-05 | P1 | Formaliser offline, idempotence, conflits, reprise des pièces, perte, chiffrement et terminal plein. | Un retry et une coupure pendant une photo ne créent ni doublon ni perte silencieuse. |
| P1-06 | P1 | Ajouter mapping ERP/facturation, source de vérité, rejet, retry, facture bloquée, export. | Une erreur client/TVA ou un refus ne produit pas une facture fantôme. |
| P1-07 | P1 | Distinguer les cinq options à périmètre égal. | Chaque option reçoit BI-042, les mêmes huit échecs, le même appareil et la même grille. |
| P1-08 | P1 | Ajouter TCO 12/36/60 avec appareils, MDM, data, stockage, signature, intégration, support, maintenance, sortie. | Un tiers recalcule sans modifier les hypothèses et voit les coûts exclus. |
| P1-09 | P1 | Ajouter baseline, gains de reprise, temps facturable, corrections, appels, adoption et capacité réaffectée. | Aucun ROI n’est déduit de dix bons ou d’un pourcentage fictif. |
| P1-10 | P1 | Définir pilote, propriétaire, durée, volume, seuils synchro/complétude/doublon, rollback et comité. | Le comité peut signer go, corriger, changer ou stop avec les mêmes données. |
| P1-11 | P1 | Ajouter MDM/BYOD, chiffrement local, MFA, rôles, effacement, sauvegarde restaurée, fin de vie. | Perte du téléphone et reprise par un autre administrateur sont démontrées. |
| P1-12 | P1 | Ajouter les limites de preuve et l’escalade secteur/contrat/litige. | Aucun texte ne promet valeur juridique ou facturation automatique universelle. |
| P1-13 | P1 | Créer un dossier de recherche daté et rejouable FR/US/UK/AU/DACH. | Un autre auditeur retrouve les sources, leurs dates, limites et décisions. |
| P2-01 | P2 | Ajouter lexique FSM, ordre de travail, preuve de service, MDM, idempotence, TCO et source de vérité. | Lecture testée auprès d’un dirigeant non technique. |
| P2-02 | P2 | Ajouter un livrable CTA : scorecard, protocole d’essai et canevas TCO. | Le livrable existe réellement et ne promet pas un devis automatique. |
| P2-03 | P2 | Rendre copiables fiche bon, matrice photo/GPS, contrat de synchronisation et stop/go. | Un responsable peut les remplir avec un bon anonymisé. |
| P2-04 | P2 | Afficher dates/version des sources juridiques et avertissement d’accès Légifrance. | Les liens sont réouverts manuellement, pas seulement validés par un curl 200. |
| P2-05 | P2 | Tester outdoor, luminosité, gants, une main, clavier, accessibilité, langue, appareil partagé et batterie. | Un opérateur peut terminer un bon sans ralentissement ni erreur masquée. |
| P2-06 | P2 | Détailler propriété, export, documentation, récupération par un tiers et sortie fournisseur. | Un pilote est repris sans l’auteur initial ni accès privilégié implicite. |

### Score projeté, non acquis

| Axe | Avant | Après correction visée | Preuve attendue |
| --- | ---: | ---: | --- |
| Intention | 9 | 10 | Contrat humain, flux et décision exécutive. |
| Décision | 7 | 10 | Cinq options, matrice et stop/go. |
| Pédagogie | 9 | 10 | Glossaire, BI-042 chiffré et cartes copiables. |
| Profondeur | 7 | 10 | Photos, GPS, offline, ERP/facture, TCO et mobile security. |
| Preuve | 7 | 10 | Sources actuelles et chaîne d’intégrité testable. |
| Comparaison | 6 | 10 | Même périmètre et coût à trois horizons. |
| Originalité | 8 | 9 | Gabarit de preuve et scénario photo/GPS. |
| Style | 9 | 9 | Réponse claire sans jargon non défini. |
| Conversion | 8 | 9 | CTA à livrable vérifiable. |
| SEO/produit | 8 | 10 | Champ lexical et maillage FSM/ERP/facturation/MDM. |

Total projeté : **97/100**, objectif conditionnel non acquis. Une note finale ne peut augmenter qu’après réécriture, test du parcours réel et contre-audit.

## 12. Preuves techniques et visuelles

```text
Manifeste : aucun guide source, registre, composant, package ou configuration modifié ; seul ce rapport est créé.
Calculs contrôlés : 12×5×220=13 200 bons/an ; 26 400 photos ; 79,2 Go bruts/an à 2×3 Mo ; 1 100 h de reprise à 5 min/bon ; 46 200 € théoriques à 42 €/h ; 126 720 points GPS/an à 10 min pendant 8 h ; 90 Mo de file locale pour 15 bons et 2×3 Mo.
TCO illustratif recalculé : taux interne 650 €/jour ; TCO 12/36/60 fournis comme hypothèses, hors TVA, forfait, stockage réel, assurance, sortie et coûts d’arrêt.
Liens de la source testés par curl : CNIL et eIDAS accessibles ; Légifrance a renvoyé 403 (blocage automatisé possible) et EUR-Lex 202 (réponse asynchrone). Ces codes ne suffisent pas à déclarer les liens cassés : réouverture manuelle obligatoire.
Rendu local : 4 052 mots visibles ; H1=1, H2=13, H3=34, JSON-LD=2, canonical `https://hagnere-code.ai/guides/digitaliser-bons-intervention`, 121 liens, CTA présent, robots local `noindex, nofollow`.
Responsive contrôlé à 1200 px : body/document scrollWidth=1200, aucune table débordante. Les largeurs 320–1600 et les états de chargement, erreur et formulaire restent à revalider avant release ; la session actuelle n’a pas fourni de réglage de viewport automatisable.
Image sociale : fichier Open Graph présent ; dimensions déclarées par le composant à vérifier visuellement après toute réécriture.
Console : non certifiée dans cette passe ; compléter avec un relevé console vide sur les largeurs cibles.
Statut maximal prouvé : lecture source, benchmark officiel, calculs déclarés, métadonnées et rendu local de base ; pas de test de terminal, offline réel, photo, signature, GPS, ERP/facturation, TCO réel, pilote ou indexation production.
```

Conclusion opérationnelle : c’est un bon guide de cadrage humain, probablement dans le haut du corpus pour la plume et la prudence. Il n’est pas encore le meilleur guide de décision pour une entreprise de terrain : les éléments qui font basculer un achat — photo, identité, GPS, synchronisation, facture, appareil, TCO et preuve de gain — sont nommés ou suggérés mais pas démontrés. Corriger les treize P1, faire rejouer BI-042 par un autre auditeur et seulement ensuite envisager la publication/indexation.
