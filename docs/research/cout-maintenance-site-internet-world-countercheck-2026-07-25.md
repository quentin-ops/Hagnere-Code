# Contre-vérification mondiale — `cout-maintenance-site-internet`

Date : **25 juillet 2026**  
Recherche : agent indépendant `maintenance_world_counter`  
Consolidation : orchestrateur, sans modifier la page auditée  
Périmètre : dossier P1, audit initial, calculs, sources primaires et offres
commerciales françaises et internationales

## Verdict

```text
P0 ouverts dans la recherche : 0
P1 trouvés : 6
P2 trouvés : 2
Verdict : recherche très riche, mais l'ancien PASS « 0 P1 » était trop indulgent
Usage autorisé : P2 après intégration explicite des corrections ci-dessous
```

Le dossier P1 principal est nettement supérieur à la page actuelle : il part
de la criticité, normalise le périmètre, distingue promesse et preuve, puis
calcule incident et TCO. Ses tableaux centraux ont été recalculés et sont
cohérents.

La contre-vérification a néanmoins trouvé six angles matériels que le précédent
PASS ne pouvait pas laisser implicites : un ancien jeu de TCO faux, la période
réelle d'un SLA, le double comptage possible entre TCO et incident, la reprise
après compromission, la défaillance du mainteneur et la fraîcheur de plusieurs
références.

## 1. Ce que le benchmark mondial confirme

Les pages commerciales relues en France, aux États-Unis, au Royaume-Uni, dans
la zone DACH, au Canada et en Australie ne donnent aucune moyenne mondiale
transposable. Elles vendent des services différents sous un même mot.

| Marché | Exemples relus | Apport réellement utile | Limite |
| --- | --- | --- | --- |
| France | Grain de Site, TYTAE, Studio HTTP, Harsene, Palmsquare, Pulsar | prix publics, niveaux et inclusions visibles | périmètres, engagements et modèles de facturation différents |
| États-Unis | WP Buffs et offres de support WordPress | staging, niveaux e-commerce/code et assistance continue | déclarations de fournisseur, pas preuve de résultat ni standard national |
| Royaume-Uni | WP Maintain et fournisseurs de support | séparation maintenance, petits changements et urgences | « support 24/7 » ne dit pas quand le service revient |
| Allemagne / DACH | Shop Wartung et offres de Wartung | chaîne sauvegarde, staging, contrôle transactionnel et rollback | prix et délais propres au vendeur |
| Canada | offres locales de maintenance | contrôle des fonctions silencieuses : formulaire, e-mail, DNS, SSL, paiement | aucun échantillon représentatif du pays |
| Australie | care plans et contrats publics | frais de prise en charge, limites de contenu, récupération et exclusions | conditions contractuelles propres à chaque prestataire |

La saturation est atteinte : les meilleures offres commerciales détaillent
plus ou moins bien la cadence, les contrôles, les limites et la réponse
humaine. Aucune ne résout simultanément :

1. la qualification du site par impact métier ;
2. la comparaison de deux offres sur les mêmes obligations ;
3. la preuve de restauration et de parcours métier ;
4. le coût d'un incident résiduel ;
5. le TCO avec inconnues bloquantes ;
6. la défaillance ou la compromission du mainteneur.

Le gain d'information défendable pour la page française est donc un **dossier
de maintenance prouvée**, pas une fourchette de prix supplémentaire.

## 2. Sources primaires décisives et fraîcheur

| Source | Ce qu'elle permet d'affirmer | Correction de fraîcheur ou de portée |
| --- | --- | --- |
| [ANSSI — Sauvegarde des systèmes d'information, v1.1](https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf) | politique, copies protégées et exercices de restauration participent à la résilience | utiliser la version **1.1 du 27 novembre 2025**, pas l'ancienne date 2023 |
| [ANSSI — MonServiceSécurisé](https://monservicesecurise.cyber.gouv.fr/referentiel-mesures) | formaliser copie, restauration, interruption et perte admissibles | les objectifs restent à adapter au métier |
| [NCSC — Choosing an MSP](https://www.ncsc.gov.uk/guidance/choosing-a-managed-service-provider-msp) | contrat clair, rôles, sauvegardes testées, logs, incident, SLA et sortie | page publiée/revue le **24 novembre 2025** ; ses ordres de grandeur ne sont pas des clauses françaises |
| [GOV.UK — Monitoring the status of your service](https://www.gov.uk/service-manual/technology/monitoring-the-status-of-your-service) | surveiller métriques utilisateur, techniques et sécurité, attribuer les alertes et documenter l'exploitation | méthode de service public à proportionner à une TPE |
| [BSI — changements de l'édition 2023](https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Grundschutz/IT-GS-Kompendium/FD_Aenderungen2023.pdf?__blob=publicationFile&v=3) | le module OPS.1.1.3 de patch/change management a été révisé en 2023 | l'édition anglaise 2021 reste une traduction utile mais doit être datée comme plus ancienne |
| [NIST SP 800-34 Rev. 1](https://www.nist.gov/publications/contingency-planning-guide-federal-information-systems) | l'analyse d'impact détermine criticité, RTO, fréquence de sauvegarde et stratégie de reprise | rattacher RPO/RTO à la publication source, pas seulement au glossaire mutable |
| [CISA — StopRansomware Guide](https://www.cisa.gov/stopransomware/ransomware-guide) | copies hors ligne, exercices, systèmes propres, rotation des accès et prudence contre la réinfection | une restauration courante n'est pas une reprise saine après compromission |
| [WordPress — Updating](https://wordpress.org/documentation/article/updating-wordpress/) et [Backups](https://developer.wordpress.org/advanced-administration/security/backup/) | sauvegarder avant changement ; une reprise complète requiert généralement fichiers et base | ne prouve pas qu'une copie donnée est cohérente ni restaurable |
| [Next.js — Support policy](https://nextjs.org/support-policy) | versions actives, en maintenance et non supportées | donnée volatile à rouvrir au jour de la P2 ; Node, paquets et plateforme restent séparés |
| [Vercel — SLA](https://vercel.com/legal/sla) | un vrai SLA nomme période, mesure, exclusions, réclamation et crédits | exemple contractuel d'un fournisseur Enterprise, pas SLA universel |

## 3. Ancien tableau TCO à mettre en quarantaine

L'audit initial
`docs/audits/giga-audit-2026-07-24/guides/cout-maintenance-site-internet.md`
présente un ancien jeu d'hypothèses dont les totaux publiés dans ce document
sont faux. Cet audit reste un artefact historique immuable ; ses totaux ne
doivent jamais être repris dans la page.

### Recalcul exact de cet ancien jeu d'hypothèses

```text
Vitrine
récurrent annuel = 12 × 79 + 240 + 180 + 18 × 45 + 300 = 2 478 €
12 mois = 250 + 2 478 = 2 728 €
36 mois = 250 + 3 × 2 478 = 7 684 €
60 mois = 250 + 5 × 2 478 = 12 640 €

Boutique
récurrent annuel = 12 × 249 + 600 + 900 + 60 × 55 + 1 500 = 9 288 €
12 mois = 600 + 9 288 = 9 888 €
36 mois = 600 + 3 × 9 288 = 28 464 €
60 mois = 600 + 5 × 9 288 = 47 040 €

Application critique
récurrent annuel = 12 × 1 200 + 3 600 + 2 400 + 144 × 65 + 6 000
                  = 35 760 €
12 mois = 2 500 + 35 760 = 38 260 €
36 mois = 2 500 + 3 × 35 760 = 109 780 €
60 mois = 2 500 + 5 × 35 760 = 181 300 €
```

Les valeurs `2 418 / 6 354 / 10 290`, `7 980 / 22 140 / 36 300` et
`37 660 / 105 980 / 174 300` de cet ancien document sont invalidées.

Le dossier P1 principal utilise un **autre modèle**, plus complet, avec sortie
et scénarios distincts. Ses totaux `5 620 / 14 260`, `33 570 / 92 110` et
`155 800 / 413 400 €` à 12/36 mois ont été recalculés séparément et sont
cohérents. Les deux modèles ne doivent pas être fusionnés.

## 4. Règle « chaque coût une seule fois »

La future page doit imposer une origine unique à chaque coût.

```text
Coût économique à comparer pour une option
= TCO certain de l'option
+ fréquence attendue des incidents sous cette option
  × impact résiduel moyen sous cette option
```

Règles :

- une heure corrective déjà incluse dans le forfait n'est pas ajoutée une
  seconde fois comme reprise externe ;
- une réserve d'incident déjà incluse dans le TCO ne doit pas être rajoutée
  après le total ;
- le coût de la couverture n'est jamais soustrait de l'impact : il appartient
  au TCO ;
- une compensation n'est soustraite que si elle est contractuelle, applicable
  au cas et raisonnablement récupérable ; sinon elle reste `ND` ;
- comparer la situation de référence et l'option renforcée exige deux
  fréquences et deux impacts résiduels, pas la totalité du sinistre présentée
  comme un « gain » automatique ;
- sans historique ou hypothèse défendable sur la baisse de fréquence/durée,
  le ROI de la couverture reste `ND`.

## 5. Décodeur SLA à rendre visible

`99,9 %` n'a aucun sens comparable sans période. Par exemple :

| Engagement arithmétique | Sur 30 jours continus | Sur 365 jours continus |
| --- | ---: | ---: |
| 99,9 % | 43 min 12 s | 8 h 45 min 36 s |
| 99,99 % | 4 min 19,2 s | 52 min 33,6 s |

Un contrat doit encore préciser :

- le mois civil réel ou la période glissante ;
- la source et le parcours mesurés ;
- le fuseau et les heures couvertes ;
- la maintenance planifiée et les dépendances exclues ;
- détection, accusé humain, intervention, contournement, rétablissement et
  correction définitive ;
- les pauses d'horloge ;
- le délai et la procédure de réclamation ;
- le crédit ou l'indemnité, son plafond et son caractère éventuellement
  exclusif ;
- les preuves conservées et la personne qui peut agir.

La disponibilité, la correction et la **durabilité** sont trois qualités
différentes. Un ping HTTP vert ne prouve ni paiement, ni e-mail, ni capacité à
restaurer la semaine suivante.

## 6. Deux scénarios absents à ajouter

### Restauration courante contre reprise propre

Une restauration courante vérifie qu'une suppression, une régression ou une
panne peut être annulée. Après compromission, remettre la même copie, les mêmes
secrets ou la même persistance malveillante en production peut réinfecter le
service.

La reprise propre doit donc vérifier :

1. isolation de l'environnement atteint ;
2. point de restauration et image réputés sains ;
3. reconstruction dans un environnement propre ;
4. correction de la porte d'entrée ;
5. rotation des mots de passe, clés, jetons et certificats concernés ;
6. analyse des données, comptes, tâches et dépendances ;
7. validation des parcours métier ;
8. reconnexion graduelle et surveillance renforcée ;
9. décision explicite de fin d'incident.

### Mainteneur indisponible ou compromis

Le plan de sortie ne doit pas couvrir seulement une résiliation paisible. Il
doit aussi fonctionner si le prestataire :

- ne répond plus ;
- perd un collaborateur clé ;
- subit lui-même une compromission ;
- conserve le seul compte administrateur ;
- ne peut plus accéder à ses outils ou licences ;
- devient juridiquement ou financièrement indisponible.

Preuves minimales : comptes au nom du client, second administrateur, privilèges
limités, sauvegarde hors du compte du mainteneur, documentation hors ligne,
contacts d'escalade, procédure de révocation, rotation des secrets et exercice
de reprise par un tiers autorisé.

## 7. Quatre familles, six lignes budgétaires

Le titre P1 « quatre couches » et son tableau de six lignes sont
contradictoires. La structure pédagogique recommandée est :

1. **Maintenance logicielle** : préventive/adaptive, corrective et évolutive
   restent trois lignes de budget séparées.
2. **Opérations de service** : hébergement, observation, sauvegarde,
   restauration et incident.
3. **Entretien éditorial et assurance** : contenu, consentement,
   accessibilité et indexation technique.
4. **Gouvernance et sortie** : comptes, licences, preuves, transfert et
   reprise.

Le lecteur retient quatre familles ; le devis conserve six lignes pour ne pas
masquer le prix.

## 8. Incidents de contre-vérification

| ID | Gravité | Défaut | Correction P1/P2 testable |
| --- | --- | --- | --- |
| WC-P1-01 | P1 | anciens TCO faux non explicitement quarantainés | publier le recalcul ci-dessus dans la recherche ; ne reprendre que le modèle P1 principal et le tester |
| WC-P1-02 | P1 | SLA sans période, procédure de réclamation ni plafond | intégrer le décodeur mensuel/annuel et les clauses manquantes |
| WC-P1-03 | P1 | TCO, réserve et incident peuvent être comptés deux fois | appliquer la règle « chaque coût une seule fois » dans calculs, affichage et export |
| WC-P1-04 | P1 | restauration courante confondue avec reprise saine | ajouter un scénario de compromission et une preuve de clean recovery |
| WC-P1-05 | P1 | sortie paisible sans défaillance/compromission du mainteneur | ajouter comptes client, révocation, secrets, sauvegarde indépendante et reprise tierce |
| WC-P1-06 | P1 | fraîcheur ANSSI/BSI/NIST insuffisamment précise | corriger version/date/portée et rattacher les termes NIST à SP 800-34r1 |
| WC-P2-01 | P2 | titre « quatre couches » pour six lignes | utiliser quatre familles et six lignes budgétaires |
| WC-P2-02 | P2 | coût de fin de support et durabilité peu visibles | inclure version/support/migration probable dans le registre et le TCO ou marquer `ND` |

Après intégration : P0 restant `0`, P1 restant `0`, P2 restant `0` au niveau du
dossier de recherche. La page et son outil devront encore être rédigés et
contre-audités séparément.

## Conclusion exploitable pour P2

La future page doit être meilleure que les offres internationales non par la
quantité de tarifs, mais parce qu'elle rend quatre choses simultanément
opposables :

```text
criticité → obligations identiques → preuves → coût certain + risque résiduel
```

Le calculateur devra refuser un total si une ligne obligatoire manque, ne
jamais compter deux fois l'incident, distinguer restauration courante et
reprise propre, et tester la continuité même si le mainteneur disparaît. Cette
architecture constitue un avantage éditorial mondial défendable ; elle ne
constitue aucune promesse de classement Google.
