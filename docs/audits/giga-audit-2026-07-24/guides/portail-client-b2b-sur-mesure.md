# Giga-audit — « Portail client B2B sur mesure : par où commencer ? »

**Date de l’audit :** 24 juillet 2026  
**Mode :** contre-audit éditorial, factuel, économique, concurrentiel, sécurité et SEO  
**Route auditée :** `/guides/portail-client-b2b-sur-mesure`  
**Fichier inspecté :** `src/app/guides/portail-client-b2b-sur-mesure/page.tsx`  
**Empreinte SHA-256 de la page :** `3de8241f53b6ef328f7cf67b8c86d5a19befaaacde73c7e551e3d6fc47b4285b`  
**Empreinte SHA-256 de l’image sociale :** `4d82697c3c7b6ed1131e10c717600b2d3575a5eec24945af657201b6fb3936e0`  
**Empreinte SHA-256 du dossier de recherche :** `b67fdac17217f874d927e3e9d8e54a0d60891f4dd676fccee66759349b374abc`  
**Empreinte SHA-256 du registre au contrôle :** `8663e6e84352121ec854393e049492a1c2b72f242166141e5d31e0911b43cb09`  
**Date publiée/modifiée dans le registre :** 23 juillet 2026 / 23 juillet 2026  
**Build et déploiement :** non relancés dans ce contre-audit.  
**Production observée :** HTTP 200, canonical cohérente, `index, follow`, JSON-LD `Article` et `BreadcrumbList`, aucun lien éditorial déclaré cassé lors du contrôle automatisé. Le contrôle historique 320/390/767/1024/1440 ne remplace pas une nouvelle recette du snapshot corrigé.

> **Périmètre.** Le rapport juge la capacité du guide à faire prendre une décision à un dirigeant de PME : ne rien construire, corriger le processus, utiliser un lien sécurisé, activer un module existant, configurer une plateforme ou développer sur mesure. Il ne réécrit pas la page. Les prix éditeurs sont volatils et localisés ; les calculs proposés ci-dessous sont des simulations explicites, pas des devis ni des promesses de retour sur investissement.

## 1. Verdict exécutif

Le guide possède déjà une qualité rare : il ne vend pas un portail avant d’avoir
défini l’action que le client doit réussir. L’ouverture parle au dirigeant, le
scénario fictif suit une attestation de l’invitation à la clôture, et le texte
explique concrètement les droits serveur, la séparation entre entreprises, les
fichiers, la fraîcheur des données, le repli en cas de panne, le RGPD et les
tests négatifs. L’opinion professionnelle est nette et saine : **si le processus
ou la donnée sont mauvais, le portail ne doit pas être le premier achat**.

La page n’est toutefois pas encore le meilleur outil de décision économique
possible. Ses six réponses sont conceptuellement justes, mais elles ne sont pas
appliquées à un cas chiffré commun. La formule de coût total reste vide. Le
lecteur ne voit donc ni total à 12, 36 et 60 mois, ni seuil de volume ou
d’adoption, ni point de bascule entre module existant, low-code, produit
standard et développement spécifique. Il ne peut pas non plus rapprocher les
catégories de solutions de modèles de licence réels comme Power Pages,
Salesforce Experience Cloud ou un portail inclus dans son ERP/CRM.

La recherche canonique est très approfondie sur la France, OWASP, la CNIL et
Odoo. Son intitulé de benchmark international est cependant excessif : il
n’examine pas réellement un corpus États-Unis, Royaume-Uni, Australie et DACH.
La sécurité applicative est meilleure que celle de nombreux contenus
concurrents, mais la page ne transforme pas encore disponibilité, restauration,
réconciliation des intégrations, administration déléguée, accessibilité,
réversibilité et assurance sécurité en critères d’acceptation et en postes
budgétaires.

**Score actuel : 83/100 — NO-GO au standard renforcé tant que les neuf P1 ne
sont pas corrigés puis revérifiés indépendamment.**

- **P0 : 0** — aucune erreur critique ou promesse inexistante démontrée sur le
  snapshot.
- **P1 : 9** — le guide n’est pas encore un comparateur économique et
  opérationnel complet.
- **P2 : 8** — améliorations différenciantes nécessaires pour dépasser 90 et
  viser une référence internationale.

## 2. Scorecard justifiée

| Axe | Note /10 | Justification |
| --- | ---: | --- |
| Intention et adéquation dirigeant | 9 | Le problème est vécu, le jargon est expliqué et l’action précède la solution. |
| Réponse et décision | 9 | Six issues sont admises, dont ne rien construire et réparer l’organisation. |
| Pédagogie et plume | 9 | Scénario continu, limites honnêtes, explications concrètes des notions techniques. |
| Profondeur métier et technique | 8 | Très bon sur droits, fichiers, états et RGPD ; exploitation, intégrations et accessibilité restent sous-traitées. |
| Sources et fiabilité | 9 | Sources primaires solides ; prix et produits comparables absents de la page. |
| Comparaison à périmètre égal | 7 | Les critères sont annoncés, mais aucune confrontation complète de solutions réelles sur un cas commun. |
| Chiffrage et reproductibilité | 5 | Formules correctes, aucun scénario rempli, aucun TCO 12/36/60 ni sensibilité. |
| Risques, sortie et contre-cas | 9 | Excellents contre-cas et tests négatifs ; réversibilité contractuelle et reprise restent peu opérationnelles. |
| Conversion responsable | 9 | CTA humain, borné, sans diagnostic ou délai garanti ; intérêt commercial non déclaré explicitement. |
| SEO, structure et expérience | 9 | Intention claire, structure riche, schémas et canonical ; nouvelle QA mobile requise après correction. |
| **Total** | **83/100** | **Sous le seuil de 90 et avec neuf incidents P1 ouverts.** |

La note ne constitue ni une mesure Google, ni une estimation de position. Elle
sert seulement à localiser les écarts au contrat éditorial interne.

## 3. Ce que le guide fait déjà mieux que la moyenne

### Il part d’un travail réel

- Le lecteur n’est pas accueilli par « digitalisez votre relation client »,
  mais par un appel concret : le client demande où en est son dossier.
- La fiche autonome oblige à nommer la demande, le résultat, la source de
  vérité, les droits, le repli et les inconnues.
- Le scénario ne saute pas de l’idée à un tableau de bord. Il traite refus,
  correction, accusé de réception, panne, changement de contact et clôture.
- Les statuts sont expliqués du point de vue du client et du système. Cela
  évite la confusion classique entre « reçu », « vérifié » et « accepté ».

### Il sait recommander de ne pas développer

- « Ne pas créer de portail » est une conclusion admise.
- « Corriger d’abord les données et le travail » protège mieux le lecteur
  qu’un faux comparatif dont le sur-mesure serait le gagnant obligatoire.
- Le lien sécurisé, le module déjà payé, le produit standard/no-code et le
  spécifique sont présentés comme des degrés différents, pas comme une
  hiérarchie morale.
- Le guide reconnaît qu’une heure disponible n’est pas nécessairement une
  économie comptable.

### Il couvre des risques souvent absents des guides commerciaux

- L’autorisation est calculée à partir de la personne, de l’entreprise, du rôle,
  de l’objet et de l’action, puis revérifiée côté serveur.
- La page explique pourquoi un identifiant imprévisible ou un bouton caché ne
  suffit pas.
- Le dépôt de fichiers inclut contrôles de type, nom généré, stockage privé,
  quarantaine, analyse, refus, contrôle au téléchargement et conservation.
- Les tests négatifs utilisent deux entreprises, deux rôles et deux objets.
- La page distingue une source indisponible d’un état métier supposé.
- Les principes RGPD sont bornés et ne sont pas transformés en fausse
  certification de conformité.

## 4. Manques décisifs pour le dirigeant

### 4.1 La décision économique n’est pas démontrée

Le guide demande de calculer le coût total, mais ne remplit pas sa propre
méthode. Un dirigeant doit voir au moins deux situations où la conclusion
change :

1. faible volume et faible coût d’assistance : le portail spécifique ne se
   justifie pas ;
2. volume élevé, demandes répétitives et bonne adoption : un investissement
   peut devenir rationnel ;
3. règles déjà couvertes par l’ERP/CRM : le module existant gagne ;
4. règles très spécifiques, marge suffisante et intégrations maîtrisées : le
   sur-mesure peut gagner ;
5. données ou processus instables : toutes les solutions techniques perdent.

Sans ces cas, l’opinion est bonne mais le lecteur ne peut pas la reproduire.

### 4.2 Les six réponses ne sont pas des offres comparables

Chaque réponse doit recevoir le même dossier :

- 200 entreprises clientes actives ;
- 500 contacts autorisés ;
- 2 500 demandes mensuelles, dont 45 % potentiellement autonomes ;
- un ERP, un CRM et un stockage documentaire ;
- deux rôles côté client, trois rôles internes ;
- dépôt, consultation, décision, notification et export ;
- même disponibilité, même support, même conservation et même procédure de
  sortie.

Il faut alors comparer achat initial, licences, intégration, nettoyage des
données, exploitation, support, évolutions, temps interne et coût de sortie.
Aujourd’hui, les cartes ne permettent pas ce rapprochement.

### 4.3 Le marché réel reste hors champ

Les exemples de produits ne doivent pas devenir un catalogue, mais ils rendent
les modèles économiques concrets :

- **module inclus dans l’ERP ou le CRM** : faible coût marginal possible, mais
  périmètre, licence et données dépendants de la suite ;
- **Power Pages** : capacité d’utilisateurs authentifiés par site, Dataverse,
  environnement Microsoft et intégration à chiffrer ;
- **Salesforce Experience Cloud / Customer Community** : tarification par
  connexion ou membre, fonctions et limites selon licence, contrat annuel ;
- **plateforme de service client** : portail inclus ou optionnel, souvent lié
  à des sièges agents, au knowledge base et au ticketing ;
- **low-code/no-code** : abonnement et vitesse de configuration ne suppriment
  ni gouvernance, ni intégration, ni exploitation ;
- **sur-mesure** : pas de licence produit obligatoire, mais coût de conception,
  construction, sécurité, maintenance et reprise.

Les prix publics ne doivent être utilisés qu’avec devise, territoire, date,
taxe, minimum, contrat, unités et fonctions incluses.

### 4.4 La fiabilité de bout en bout n’est pas contractuelle

« Afficher le dernier état confirmé » est un excellent début. Pour chiffrer, il
faut aussi décider :

- sens de synchronisation et source maîtresse par champ ;
- fréquence, latence acceptable et horodatage ;
- idempotence des commandes et gestion des doublons ;
- reprise, retry, dead-letter queue ou file d’erreurs selon architecture ;
- réconciliation quotidienne et propriétaire des écarts ;
- journal d’audit, métriques, alertes et destinataires ;
- disponibilité, fenêtre de maintenance, RPO et RTO ;
- communication d’incident et canal de repli ;
- preuve de restauration et procédure de retour arrière.

Ces termes doivent être expliqués par leur effet métier, pas juxtaposés comme
une checklist technique.

### 4.5 Le cycle de vie d’un client B2B doit être entièrement testé

Le scénario traite le changement de contact, mais la matrice finale doit couvrir :

- création de l’entreprise cliente et validation de son domaine ;
- invitation initiale, expiration, réinvitation et récupération ;
- rattachement à plusieurs entreprises ;
- administration déléguée côté client ;
- changement de rôle et séparation lecture/validation/export ;
- départ, suspension, réactivation et suppression ;
- fusion, cession ou changement d’identifiant de l’entreprise ;
- clôture du contrat et export ;
- durée des journaux, dossiers, fichiers et sauvegardes.

### 4.6 L’accessibilité n’est pas une porte d’acceptation

Le lien DesignGouv ne remplace pas des exigences testables. La recette doit au
minimum vérifier clavier, focus visible, ordre logique, intitulés, messages
d’erreur, contraste, zoom, texte redimensionné, tableaux, lecteur d’écran et
déconnexion/expiration compréhensible. Le niveau WCAG visé, le périmètre et la
méthode de test doivent être écrits. Un test avec des personnes concernées
complète les outils automatiques.

### 4.7 La sortie est évoquée, pas prouvée

Le lecteur doit pouvoir demander :

- export complet et documenté des données, fichiers, comptes, droits et journaux
  nécessaires ;
- formats, dictionnaire, identifiants stables et test d’import chez un tiers ;
- propriété du code, des configurations, schémas et automatisations selon
  l’option ;
- liste des sous-traitants, transferts, DPA et conditions de suppression ;
- dépôt, CI/CD, secrets, sauvegardes, observabilité et documentation pour le
  spécifique ;
- délai, coût, assistance, preuve de suppression et continuité pendant la
  migration.

## 5. Benchmark international de couverture

Les concurrents servent à mesurer les angles traités. Leurs affirmations
commerciales et prix ne sont pas repris comme faits sans source primaire.

| Zone / ressource | Couverture utile observée | Ce que Hagnéré Code doit égaler ou dépasser |
| --- | --- | --- |
| France — Espaceclient.io, WeDevops, Dawap, ChannelDock | Fonctionnalités, cas d’usage, offre standard ou spécifique | Conserver la neutralité en ajoutant un cas économique égal et la preuve de sortie. |
| France — Odoo, documentation officielle | Portail déjà inclus dans une suite | Montrer comment vérifier droits, licence, personnalisation, API et limites avant d’acheter autre chose. |
| Royaume-Uni — SpotDev, *Build vs Buy a Customer Portal* | Cadre build/buy, intégrations, coût sur plusieurs années, logique mid-market | Publier les hypothèses, les options qui perdent et les seuils, sans transformer le tarif de l’agence en référence de marché. |
| États-Unis — Corevist, guide build/buy B2B self-service | Coût de construction, délai, maintenance, intégration ERP et spécialisation B2B | Distinguer couverture produit, coûts d’intégration et dépendance à l’écosystème ; éviter les statistiques marketing non primaires. |
| Australie — guides de portails membres/clients | Build/buy, conformité locale, support et exploitation | Ajouter exploitation, accessibilité, résidence/transferts et réversibilité dans la grille France/UE. |
| DACH — guides *Kundenportal entwickeln* | Architecture, sécurité, prix par composant, intégration et maintenance | Décomposer les composants et postes récurrents, puis montrer un TCO égal à 12/36/60 mois. |
| Microsoft Power Pages, source officielle | Prix par packs d’utilisateurs authentifiés, site, Dataverse et paiement annuel | Utiliser le modèle pour apprendre à lire une licence, jamais comme prix permanent ou TCO complet. |
| Salesforce Self-Service, source officielle | Prix par connexion ou membre, fonctions, contrat annuel et limites API/stockage | Expliquer que l’unité de licence et l’usage réel peuvent inverser le choix. |

### Angle « blue ocean » défendable

Le meilleur différenciateur n’est pas d’ajouter cent fonctions. C’est de fournir
un **dossier de décision reproductible** qui relie :

1. une demande réelle observée ;
2. la source et le droit d’agir ;
3. six réponses comparées sur le même périmètre ;
4. un modèle économique avec seuils ;
5. une recette de séparation entre entreprises ;
6. un test de restauration et de sortie ;
7. une décision datée : faire, piloter, reporter ou ne pas faire.

## 6. Scénarios chiffrés à intégrer

Les valeurs suivantes sont des **hypothèses pédagogiques**. Elles ne représentent
pas la productivité d’un client ni un prix de marché.

### Scénario A — faible volume : ne pas construire gagne

Hypothèses :

- 600 demandes dédoublonnées par mois ;
- 30 % éligibles à l’autonomie : `600 × 30 % = 180` ;
- 70 % de succès autonome après adoption : `180 × 70 % = 126` ;
- 6 minutes de travail interne réellement évitées par succès ;
- coût complet documenté : 42 € par heure.

Calcul :

```text
Heures rendues disponibles par mois = 126 × 6 ÷ 60 = 12,6 h
Valeur de capacité mensuelle = 12,6 × 42 € = 529,20 €
Valeur annuelle maximale modélisée = 529,20 × 12 = 6 350,40 €
```

Cette valeur n’est une économie que si la capacité est réellement supprimée ou
réaffectée à une activité utile. À ce niveau, un développement spécifique est
difficile à défendre sans autre bénéfice substantiel. Corriger le processus,
utiliser un lien sécurisé ou activer un module existant peut gagner.

### Scénario B — volume élevé : un investissement peut devenir rationnel

Hypothèses :

- 2 500 demandes dédoublonnées par mois ;
- 45 % éligibles : `2 500 × 45 % = 1 125` ;
- 75 % de succès autonome : `1 125 × 75 % = 843,75`, arrondi à 844 actions ;
- 8 minutes réellement évitées par succès ;
- coût complet documenté : 42 € par heure.

Calcul :

```text
Heures rendues disponibles par mois = 844 × 8 ÷ 60 = 112,53 h
Valeur de capacité mensuelle = 112,53 × 42 € = 4 726,40 €
Valeur annuelle modélisée = 4 726,40 × 12 = 56 716,80 €
```

Même ici, le portail ne « rapporte » pas automatiquement 56 716,80 €. Il faut
retrancher coûts, double fonctionnement, assistance résiduelle et effets
d’adoption, puis distinguer dépense évitée, capacité réaffectée, revenus
protégés et bénéfices qualitatifs.

### Sensibilité minimale

| Variable | Bas | Central | Haut | Effet à montrer |
| --- | ---: | ---: | ---: | --- |
| Demandes mensuelles | 600 | 1 500 | 2 500 | Le volume déplace le seuil économique. |
| Part éligible | 20 % | 35 % | 45 % | Une mauvaise sélection gonfle artificiellement le gain. |
| Succès autonome | 40 % | 60 % | 75 % | L’adoption et la qualité du parcours commandent le résultat. |
| Minutes évitées | 3 | 6 | 8 | Mesurer avant/après, ne pas choisir la valeur pour faire gagner le projet. |
| Coût complet horaire | 32 € | 42 € | 55 € | Utiliser le coût réel de l’entreprise. |
| Coût de double fonctionnement | à confirmer | à confirmer | à confirmer | L’ancien canal ne disparaît pas au premier jour. |

## 7. TCO illustratif à périmètre égal

Table pédagogique, entièrement fictive, à remplacer par contrats, licences,
devis et temps interne. Périmètre commun : une action client, 200 entreprises,
500 contacts, ERP + CRM + stockage, droits multi-entreprises, fichiers,
notifications, support en heures ouvrées et réversibilité.

| Réponse | Mise en place | Récurrent annuel | 12 mois | 36 mois | 60 mois |
| --- | ---: | ---: | ---: | ---: | ---: |
| Processus assisté amélioré | 4 000 € | 18 000 € | 22 000 € | 58 000 € | 94 000 € |
| Lien sécurisé limité | 8 000 € | 12 000 € | 20 000 € | 44 000 € | 68 000 € |
| Module existant | 12 000 € | 14 000 € | 26 000 € | 54 000 € | 82 000 € |
| Produit standard / low-code | 22 000 € | 15 000 € | 37 000 € | 67 000 € | 97 000 € |
| Portail spécifique | 60 000 € | 18 000 € | 78 000 € | 114 000 € | 150 000 € |

Contrôles :

```text
36 mois = mise en place + 3 × récurrent annuel
60 mois = mise en place + 5 × récurrent annuel

Exemple portail spécifique à 36 mois :
60 000 + (3 × 18 000) = 114 000 €
```

Le tableau doit aussi montrer ce qui n’est pas équivalent. Un lien sécurisé ne
gère peut-être ni états, ni administration déléguée, ni intégration. Un module
existant peut exiger des licences additionnelles. Une plateforme peut facturer
utilisateurs, connexions, stockage ou appels API. Le sur-mesure peut supporter
une règle introuvable ailleurs mais exige sa propre exploitation.

### Exemple de lecture d’une licence, à dater

Au 24 juillet 2026, la page française de Microsoft affichait un pack Power
Pages de 100 utilisateurs authentifiés par site et par mois à 187,20 € HT en
paiement annuel. Pour 200 utilisateurs actifs :

```text
2 packs × 187,20 € = 374,40 € HT/mois
374,40 × 12 = 4 492,80 € HT/an
```

Ce n’est **pas** le TCO : intégration, Dataverse, autres licences, configuration,
support, migration, dépassements, sécurité et sortie restent à ajouter. La page
est dynamique et d’autres surfaces Microsoft peuvent afficher une localisation
ou un prix différent ; une capture datée et un devis contractuel sont requis.

Salesforce affichait 2 € par connexion ou 5 € par membre pour Customer
Community, et 6 € par connexion ou 15 € par membre pour Community+, avec
contrat annuel et avertissement de variation. Le guide doit expliquer comment
comparer « connexion » et « membre » à partir des usages, pas recopier les prix
comme une recommandation.

## 8. Matrice de décision cible

| Critère commun | Ne rien construire / processus | Lien limité | Module existant | Standard / low-code | Sur-mesure |
| --- | --- | --- | --- | --- | --- |
| Action couverte de bout en bout | à prouver | souvent partielle | selon module | selon configuration | concevable sur mesure |
| Délai de mise en service | faible | faible à moyen | faible à moyen | moyen | moyen à élevé |
| Droits multi-entreprises | organisationnels | limités | à tester | à configurer/tester | à concevoir/tester |
| Intégrations | manuelles | faibles | natives ou API | connecteurs/API | API spécifiques |
| Coût initial | faible | faible/moyen | moyen | moyen | élevé |
| Coût récurrent | charge humaine | outil + charge | licences + support | licences + exploitation | cloud + maintenance |
| Dépendance fournisseur | faible | outil | forte suite | forte plateforme | prestataire/stack |
| Réversibilité | procédure | export fichiers | export suite | export/configuration | code+données+runbook |
| Quand elle gagne | volume faible/processus instable | échange simple | couverture déjà suffisante | standard adaptable | règle différenciante et durable |
| Signal d’arrêt | erreurs non résolues | états/droits complexes | couverture critique absente | contournements excessifs | TCO/adoption/équipe insuffisants |

## 9. Sécurité, données et accessibilité : portes à ajouter

### Identité et accès

- comptes nominatifs, politique de récupération et sessions ;
- MFA selon risque, SSO si le contexte le justifie ;
- administration déléguée et validation des domaines/entreprises ;
- refus par défaut, contrôle serveur, moindre privilège ;
- limitation de débit et protection des endpoints sensibles ;
- révocation, départ, suspension et revue des habilitations ;
- secrets, clés, chiffrement en transit et au repos selon risque.

### Assurance et exploitation

- modèle de menace et exigences inspirées d’OWASP ASVS selon périmètre ;
- analyse de dépendances et correction des vulnérabilités ;
- tests automatisés et manuels des frontières multi-tenant ;
- audit ou test d’intrusion selon risque, périmètre et budget ;
- sauvegarde, restauration testée, RPO/RTO et retour arrière ;
- supervision, alerte, journalisation proportionnée et incident ;
- preuve de correction, pas simple déclaration du prestataire.

### Accessibilité

- cible WCAG écrite et composants concernés ;
- parcours entièrement utilisable au clavier ;
- focus visible, ordre et intitulés compréhensibles ;
- erreurs reliées aux champs et instructions récupérables ;
- contraste, zoom, redimensionnement du texte, réactivité ;
- lecteur d’écran sur parcours nominal et refus ;
- session expirée, pièce refusée et source indisponible compréhensibles ;
- tests automatiques, manuels et utilisateurs.

## 10. Incidents P1 à fermer

| ID | Incident bloquant | Correction attendue | Preuve de fermeture |
| --- | --- | --- | --- |
| P1-01 | Benchmark dit international sans corpus international réel | Ajouter FR, US, UK, AU et DACH, intentions, dates, angles, conflits et saturation | Dossier de recherche mis à jour, URLs rouvertes par P3 |
| P1-02 | Aucun cas économique rempli | Ajouter baseline, deux scénarios contradictoires, coût du statu quo et adoption | Calculs refaits indépendamment, hypothèses visibles |
| P1-03 | Aucun TCO 12/36/60 à périmètre égal | Chiffrer six réponses, récurrences, temps interne, migration, exploitation et sortie | Table recalculée et exclusions communes vérifiées |
| P1-04 | Produits et modèles de licence réels absents | Comparer module, Power Pages, Salesforce/plateforme, low-code et spécifique sans catalogue | Sources éditeurs datées, unités et limites affichées |
| P1-05 | Intégration et fiabilité non transformées en critères | Ajouter source maîtresse, idempotence, reprise, réconciliation, monitoring, RPO/RTO | Matrice d’acceptation et test d’incident |
| P1-06 | Cycle de vie et assurance sécurité incomplets | Ajouter identité, admin déléguée, sessions, MFA/SSO selon risque, vulnérabilités et tests | Scénarios de sécurité et preuves P3 |
| P1-07 | Accessibilité non testable | Ajouter cible, critères et protocole clavier/lecteur d’écran/zoom/erreurs | Rapport d’accessibilité du snapshot corrigé |
| P1-08 | Sortie, contrat et transfert non testés | Ajouter exports, formats, délais, coûts, DPA/sous-traitants, reprise et suppression | Exercice d’export/restauration/reprise documenté |
| P1-09 | Anciennes P3/P4 non conformes au standard renforcé | Refaire P3 indépendante puis P4 /100 avec vrai lecteur et navigateur | 0 P0/P1, ≥90, aucun axe <8, axes critiques ≥9 |

## 11. Incidents P2 pour viser l’étalon

1. Publier un tableur ou calculateur autonome des six réponses, sans collecte
   obligatoire et avec hypothèses modifiables.
2. Ajouter une grille de découverte téléchargeable : demandes, canaux, doublons,
   sources, rôles, objets, droits, fichiers et repli.
3. Montrer un cas où l’adoption échoue et la décision raisonnable de fermer le
   pilote.
4. Ajouter une matrice « fonctionnalité / preuve / responsable / date » pour
   comparer les devis.
5. Déclarer explicitement que Hagnéré Code vend du développement sur mesure,
   puis expliquer pourquoi les autres issues sont conservées.
6. Relier le guide aux contenus sur cahier des charges, TMA, logiciel métier et
   reprise d’existant sans créer de boucle artificielle.
7. Ajouter un glossaire contextuel limité : multi-tenant, RPO, RTO, idempotence,
   réconciliation et administration déléguée.
8. Tester l’image sociale, le tableau de TCO et le calculateur sur 320 à 1600 px,
   thème clair/sombre, clavier et technologies d’assistance.

## 12. Sources primaires à conserver ou ajouter

### Sécurité, vie privée et accessibilité

- [OWASP — Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)
- [OWASP — Insecure Direct Object Reference Prevention](https://cheatsheetseries.owasp.org/cheatsheets/Insecure_Direct_Object_Reference_Prevention_Cheat_Sheet.html)
- [OWASP — File Upload Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html)
- [OWASP — Application Security Verification Standard](https://owasp.org/www-project-application-security-verification-standard/)
- [CNIL — Guide de la sécurité des données personnelles](https://www.cnil.fr/fr/guide-de-la-securite-des-donnees-personnelles)
- [CNIL — Gérer les habilitations](https://www.cnil.fr/fr/securite-gerer-les-habilitations)
- [CNIL — Gérer la sous-traitance](https://www.cnil.fr/fr/securite-gerer-la-sous-traitance)
- [Règlement (UE) 2016/679 — EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj?locale=fr)
- [W3C — Web Content Accessibility Guidelines](https://www.w3.org/TR/WCAG22/)

### Produits et modèles de licence

- [Microsoft — tarification Power Pages](https://www.microsoft.com/fr-fr/power-platform/products/power-pages/pricing)
- [Microsoft Learn — FAQ sur les licences Power Platform](https://learn.microsoft.com/fr-fr/power-platform/admin/powerapps-flow-licensing-faq)
- [Salesforce France — tarifs du Self-Service](https://www.salesforce.com/fr/service/customer-self-service/pricing/)
- [Odoo 19 — comptes clients et accès au portail](https://www.odoo.com/documentation/19.0/fr/applications/websites/ecommerce/customer_accounts.html)
- [ServiceNow — configuration d’un portail métier](https://www.servicenow.com/docs/r/customer-service-management/customer-self-service-and-omnichannel-engagement/configure-business-portal.html)

Les pages éditeurs prouvent leurs modèles et fonctions déclarées à la date
d’accès. Elles ne prouvent ni coût total, ni adéquation, ni performance chez un
client donné.

## 13. État des quatre passes

| Passe | Rapport ou trace présent | Validation au standard renforcé | Motif |
| --- | --- | --- | --- |
| P1 — Recherche | Oui, dossier canonique très riche | **Non** | Corpus international, marché réel et modèle économique incomplets |
| P2 — Rédaction/intégration | Oui, page et image sociale | **Non** | Neuf P1 éditoriaux/économiques/opérationnels restent ouverts |
| P3 — Contre-audit | Oui, présent rapport indépendant du rédacteur initial | **Non** | Un rapport qui conclut NO-GO ne ferme pas la passe |
| P4 — Plume/QA | Ancienne trace et contrôles historiques | **Non** | Ancienne échelle 20/20, aucun vrai lecteur prouvé et snapshot corrigé inexistant |

## 14. Ordre de correction recommandé

1. Compléter P1 avec benchmark international, produits officiels et grille de
   saturation.
2. Fixer le cas canonique, ses volumes, rôles, actions, intégrations, support et
   durée.
3. Construire baseline, scénarios, adoption, coût du statu quo, TCO et seuils.
4. Ajouter intégration, fiabilité, sécurité, accessibilité et sortie comme
   critères testables.
5. Réécrire seulement les sections touchées en conservant l’ouverture, le
   scénario et la neutralité qui fonctionnent déjà.
6. Produire le calculateur ou tableur autonome et vérifier son téléchargement.
7. Faire reprendre chaque fait, prix et calcul par un contre-auditeur.
8. Exécuter P4 avec lecture dirigeant, score /100, build, HTML, JSON-LD, liens,
   navigateur 320–1600 px, clavier et image sociale.

## 15. Critères de sortie

Le guide ne pourra être déclaré conforme au standard renforcé que lorsque :

- les neuf P1 seront fermés sur un snapshot identifié ;
- les scénarios et totaux seront reproductibles ;
- une solution différente gagnera selon des hypothèses visibles ;
- les prix volatils seront datés, localisés et bornés ;
- un lecteur pourra décider sans devoir contacter Hagnéré Code ;
- le CTA décrira un livrable observable sans fausse garantie ;
- un autre agent aura rouvert les sources et refait les calculs ;
- la P4 atteindra au moins 90/100, aucun axe sous 8 et les axes critiques à 9 ;
- le rendu réel, les liens, les schémas, le téléchargement et l’image sociale
  auront été inspectés sur le snapshot final.

**Verdict final de l’audit : NO-GO actuel, avec un socle éditorial et sécurité
exceptionnellement solide. La priorité n’est pas d’allonger le guide au hasard :
elle est de rendre sa décision économique, son exploitation, son accessibilité
et sa sortie aussi démontrables que son modèle d’autorisation.**
