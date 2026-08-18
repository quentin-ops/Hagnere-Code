# Dossier de recherche — Cahier des charges SaaS

> Journal du guide `cahier-des-charges-saas`. La page publique ne peut être
> rédigée qu'après validation de P1 et la clôture du guide précédent.

## Journal des quatre passes

Propriétaire éditorial unique : Codex, agent racine du lot du 21 juillet 2026.

| Passe                        | État                                        | Date       | Responsable | Snapshot                            | Blocages                         |
| ---------------------------- | ------------------------------------------- | ---------- | ----------- | ----------------------------------- | -------------------------------- |
| 1. Recherche                 | Terminée — porte validée                    | 2026-07-21 | Codex       | `cahier-des-charges-saas-p1.sha256` | Aucun                            |
| 2. Rédaction et intégration  | Terminée — porte validée                    | 2026-07-21 | Codex       | `cahier-des-charges-saas-p2.sha256` | Aucun                            |
| 3. Contre-audit indépendant  | Terminée — porte validée                    | 2026-07-24 | Agent P3    | `cahier-des-charges-saas-p3.sha256` | Aucun                            |
| 4. Plume humaine et contrôle | Terminée localement — publication **NO-GO** | 2026-07-24 | Agent P4    | `cahier-des-charges-saas-p4.sha256` | BAT navigateur du snapshot exact |

## 1. Fiche d'identité

```text
Slug : cahier-des-charges-saas
Requête principale : cahier des charges SaaS
Moment : idée validée et premier parcours choisi, avant consultation ou devis
Lecteur : fondateur ou dirigeant non technicien préparant un SaaS B2B
Phrase téléphone : « Je sais ce que le premier client doit réussir, mais je ne
sais pas quoi écrire pour que les développeurs chiffrent tous le même SaaS,
surtout pour les comptes, l'abonnement, le support et le départ d'un client. »
Décision : demander un chiffrage, faire préciser les hypothèses ou reprendre le
cadrage avant de consulter
Action autonome : raconter la vie complète d'une entreprise cliente et écrire,
pour chaque étape, décision, exclusion, échec, test et responsable
CTA : faire relire le cahier des charges SaaS
Hors périmètre : validation d'idée, choix du MVP, budget, architecture détaillée,
audit juridique, fiscalité de la facturation ou certification sécurité
Date de recherche : 2026-07-21
```

### Score de lancement historique de P1

Cette auto-évaluation de cadrage date du 21 juillet. Elle n'est ni la note P4
du cycle premium ni un verdict de publication.

| Critère            |       Note | Justification                                   |
| ------------------ | ---------: | ----------------------------------------------- |
| Offre vendue       |      25/25 | Conception et développement de SaaS             |
| Proximité du devis |      25/25 | Le lecteur prépare une consultation             |
| Demande observée   |      11/15 | SERP qualitative, sans volume ni Search Console |
| Outil original     |      15/15 | Exemple rempli sur toute la vie du client       |
| Différenciation    |      10/10 | Pas une liste générique de rubriques            |
| Maillage et CTA    |      10/10 | Suite naturelle des guides validation et MVP    |
| **Total**          | **96/100** | Porte franchie                                  |

## 1 bis. Contrat de langage humain

- **Réponse en une phrase :** un cahier des charges SaaS raconte ce que vit une
  entreprise cliente depuis l'achat jusqu'à la récupération de ses données, et
  rend visibles les décisions, exclusions, erreurs, tests et responsables.
- **Mots ordinaires :** entreprise cliente, compte, invitation, droit d'accès,
  paiement refusé, dossier, support, sauvegarde, récupération des données.
- **Traductions :** espace client plutôt que tenant ; confirmation de paiement
  plutôt que webhook ; action répétée sans doublon plutôt qu'idempotence.
- **Mots à éviter :** multi-tenancy, provisioning, entitlement, dunning, RACI,
  scalabilité, architecture cloud-native.
- **150 premiers mots :** montrer que trois prestataires imaginent trois produits
  si inscription, impayé, support et sortie restent implicites ; annoncer la vie
  complète d'un client et le résultat concret.
- **Décision après 150 mots :** continuer le cahier des charges si l'idée et le
  premier parcours sont déjà validés ; sinon revenir aux guides adaptés.
- **Mobile :** chaque étape en carte ; aucun tableau de cinq colonnes.
- **CTA :** « Faire relire mon cahier des charges SaaS ».

### Test de l'ouverture

- [x] situation de devis avant jargon ;
- [x] SaaS expliqué comme logiciel en ligne vendu à plusieurs entreprises ;
- [x] aucune technologie imposée ;
- [x] aucune promesse de prix ou délai ;
- [x] aiguillage idée, MVP, coût et application métier visible.

## 2. Cannibalisation

| Page                                    | Intention détenue                        | Frontière du nouveau guide                              |
| --------------------------------------- | ---------------------------------------- | ------------------------------------------------------- |
| `valider-idee-saas-avant-developper`    | Problème, acheteur, prix et test manuel  | L'idée est déjà validée                                 |
| `mvp-saas-quoi-inclure`                 | Fonctions de la première version         | Le parcours choisi devient règles, échecs et recette    |
| `combien-coute-un-saas`                 | Budget initial et récurrent              | Aucun prix ni fourchette                                |
| `cahier-des-charges-application-metier` | Processus interne d'une seule entreprise | Plusieurs entreprises clientes, abonnement et sortie    |
| `contrat-tma-application`               | Support et maintenance après lancement   | Ici, seulement les responsabilités à cadrer avant devis |
| futur `facturation-abonnements-saas`    | Plans, essais, prorata et relances       | Une seule offre fictive et états influençant le scope   |
| futur `architecture-multitenant-saas`   | Choix d'isolation et architecture        | Besoin d'étanchéité et test, sans solution imposée      |

**Propriété éditoriale :** faire chiffrer et tester le même produit vendu à
plusieurs entreprises, avec comptes, abonnement, exploitation et sortie.

## 3. Demande et carte concurrentielle

Observation qualitative du 21 juillet 2026. Les résultats vus proposent surtout :

- des modèles universels en contexte, périmètre, fonctionnalités et planning ;
- des générateurs résumant le SaaS à abonnement, administration et montée en charge ;
- des listes techniques : hébergement, SLA, RGPD, sécurité et architecture ;
- des cahiers des charges de logiciel interne sans vie complète d'un client SaaS.

Pages observées : DocuSign, Nocode Factory, CahierPro, ARDNTECH, KERN-IT et
Digital Unicorn. Elles confirment la question, pas une norme de longueur ou de
contenu. Aucun volume, aucune difficulté SEO et aucune position future ne sont
revendiqués.

**Angle mort :** suivre un seul client de l'achat au départ et relier chaque
décision à une exclusion, un échec prévisible, un test et une personne responsable.

## 4. Fiche de preuves

Sources consultées le 21 juillet 2026.

| Affirmation utilisable                                                                    | Source primaire                                                                                                                                                          | Limite                                                     | Conséquence lecteur                               |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------- | ------------------------------------------------- |
| Paiement, facture et abonnement ont plusieurs états transmis par événements               | [Stripe](https://docs.stripe.com/billing/subscriptions/webhooks?locale=en-GB)                                                                                            | Fournisseur illustratif, pas choix obligatoire             | Écrire activation, répétition et refus            |
| Les comptes doivent être individuels, les droits différenciés et les départs gérés        | [CNIL](https://www.cnil.fr/fr/gerer-les-utilisateurs)                                                                                                                    | Données personnelles et sécurité, pas architecture imposée | Tester invitation et révocation                   |
| L'autorisation doit être contrôlée sur chaque requête                                     | [OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)                                                                                   | Bonne pratique, pas certification                          | Tester Atelier Nord contre Studio Rivage          |
| Les sauvegardes doivent être testées et la restauration vérifiée                          | [CNIL](https://www.cnil.fr/fr/securite-sauvegarder)                                                                                                                      | Fréquence à adapter au risque                              | Exiger une preuve de restauration                 |
| ASVS 5.0.0 fournit des exigences de sécurité testables et référencées                     | [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/)                                                                                  | Sous-ensemble et méthode à préciser ; pas une attestation  | Nommer exigences, preuve et personne qui vérifie  |
| Les données doivent être limitées au nécessaire et leurs durées documentées               | [CNIL minimisation](https://www.cnil.fr/fr/minimiser-les-donnees-collectees), [durées](https://www.cnil.fr/fr/passer-laction/les-durees-de-conservation-des-donnees)     | Analyse au cas par cas                                     | Relier chaque donnée à une utilité et une durée   |
| La sous-traitance doit cadrer garanties, incidents, restitution et suppression            | [CNIL](https://www.cnil.fr/fr/securite-gerer-la-sous-traitance)                                                                                                          | Seulement si le rôle de sous-traitant est établi           | Qualifier les rôles et prestataires               |
| WCAG 2.2 contient des critères testables                                                  | [W3C](https://www.w3.org/TR/WCAG22/)                                                                                                                                     | Référentiel choisi, pas conformité légale automatique      | Cadrer clavier, focus, erreurs et états           |
| Le RGAA public courant est 4.1.2 et son champ légal n'englobe pas toute petite entreprise | [RGAA](https://accessibilite.numerique.gouv.fr/), [champ](https://accessibilite.numerique.gouv.fr/obligations/champ-application/)                                        | Vérification juridique nécessaire                          | Ne pas promettre une conformité universelle       |
| Le Data Act s'applique depuis le 12 septembre 2025 et traite la portabilité cloud         | [Commission](https://digital-strategy.ec.europa.eu/en/factpages/data-act-explained), [règlement](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A32023R2854) | Portée, exceptions et contrat à vérifier                   | Décrire précisément l'export et la sortie         |
| Les droits cédés doivent être énumérés et leur périmètre délimité                         | [Code de la propriété intellectuelle, article L131-3](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958)                                              | Clauses à faire vérifier selon les intervenants            | Séparer export de l'abonné et remise au fondateur |

### Faits, déductions et recommandations

**Faits :** les états de paiement ne se résument pas à une page de succès ; les
droits, sauvegardes, données et sorties nécessitent des décisions et tests ; les
référentiels ne valent pas certification.

**Déductions :** « inscription + tableau de bord + abonnement » ne permet pas de
chiffrer les doublons, impayés, révocations, support, restauration et départ d'un
client ; un bouton Export sans contenu, format, droit, délai et suppression ne
prouve pas la réversibilité.

**Recommandation :** imposer le résultat à prouver, pas une architecture. Toute
décision fictive de DossierClair reste un choix d'exemple, jamais une norme.

### Affirmations interdites

- cahier des charges garantissant prix, délai ou succès ;
- architecture multi-tenant, Stripe, essai gratuit ou plusieurs offres obligatoires ;
- hébergement français toujours imposé par le RGPD ;
- fournisseur SaaS toujours sous-traitant ;
- RGAA applicable à tout SaaS privé ou WCAG AA égal à conformité légale ;
- RGAA 5 déjà applicable ;
- Data Act imposant sans exception un export gratuit de toute donnée ;
- export CSV suffisant à lui seul ;
- client possédant automatiquement le code source ;
- sauvegarde prouvant une restauration ;
- ASVS cité équivalant à certification ;
- cahier des charges automatiquement contractuel ;
- prix, délai, disponibilité ou taux sans hypothèses ;
- ressource téléchargeable inexistante ou test humain non réalisé.

## 5. Exemple fil rouge — DossierClair

**Exemple entièrement fictif, sans client ni résultat Hagnéré Code.** DossierClair
est vendu à de petites sociétés de conseil. Claire, responsable des opérations
d'Atelier Nord, achète et administre ; Léa contribue aux dossiers. Studio Rivage
sert uniquement à tester qu'une autre entreprise reste inaccessible.

Parcours : Claire souscrit ; son espace est créé ; elle invite Léa ; Claire crée
un dossier ; Léa le complète ; Claire le valide et l'exporte ; l'équipe exploite
le service ; Atelier Nord résilie et récupère ses données.

### Exclusions de la version décrite

- pas d'essai gratuit, de plusieurs offres ou de changement de formule ;
- pas de SSO, de rôles personnalisables ni d'application mobile ;
- pas de portail ouvert au client final, de pièces jointes libres ni de CRM ;
- pas de données de santé, d'identité, bancaires ou de carte stockées ;
- pas de support téléphonique permanent ni de disponibilité arbitraire garantie.

### Décisions, échecs et tests

1. **Achat :** vente accompagnée, une offre, paiement hébergé ; la confirmation
   valable crée exactement un espace même si elle arrive deux fois. L'exemple
   fixe aussi attente, vérification supplémentaire, mise à jour du paiement,
   deux nouvelles tentatives, lecture seule, régularisation, remboursement et
   contestation.
2. **Comptes :** administratrice et contributrice ; Léa ne peut jamais ouvrir le
   dossier de Studio Rivage et perd son accès après révocation.
3. **Action vendue :** créer, affecter, compléter, corriger, valider et exporter
   un dossier structuré avec auteur et date.
4. **Échecs :** invitation expirée renvoyable ; chaque état de paiement possède
   message, droit, action et responsable, sans suppression automatique.
5. **Exploitation :** support par courriel, responsable d'incident, perte maximale
   de 24 heures et remise en service visée en 8 heures ouvrées pour l'exemple ;
   base, fichiers et configuration sauvegardés, copies isolées, restauration
   trimestrielle et compte rendu.
6. **Données, sécurité et accessibilité :** utilité, durée, accès support et
   prestataires ; même annexe ASVS 5.0.0 référencée remise à chaque candidat,
   avec preuves et contrôles supplémentaires chiffrés séparément ; critères
   WCAG 2.2 utilisés pour tester le processus complet sans revendiquer AA.
7. **Sortie de l'abonné :** utilisateurs, rôles, identifiants, relations, statuts,
   commentaires, historique, réglages, fichiers structurés documentés et PDF ;
   accès, assistance, archives et suppression explicités.
8. **Remise au commanditaire :** dépôt, droits réellement consentis,
   documentation, dictionnaire, procédures, comptes tiers et licences distingués
   de l'export remis à l'abonné.

### Hypothèses communes de consultation

L'exemple fixe pour tous les prestataires : 3 entreprises au lancement et 30
envisagées la première année ; 5 utilisateurs par entreprise ; 2 000 dossiers
actifs et 20 000 archivés ; aucun fichier libre ni reprise existante ; navigateurs
récents sur ordinateur, tablette et téléphone ; environnement de test séparé ;
comptes tiers contrôlés par le fondateur ; coûts récurrents isolés ; dépôt,
installation, dictionnaire et exploitation remis ; stabilisation distincte de la
maintenance. La connexion utilise courriel et mot de passe via un service externe,
avec vérification et réinitialisation ; connexion unique d'entreprise et double
authentification sont exclues ou chiffrées séparément. Toutes ces valeurs sont
fictives et servent seulement à comparer les chiffrages.

### Protocole commun d'acceptation

La recette utilise un environnement et des données fictives connus. Chaque test
écrit la situation de départ, l'action, le résultat et la preuve. Le fondateur
accepte ; le prestataire corrige et rejoue. Les scénarios obligatoires couvrent :
séparation Atelier Nord/Studio Rivage, confirmation de paiement répétée, parcours
vendu, cycle invitation-activation-réinitialisation-révocation, restauration,
export reconstructible et parcours complet au clavier.

Une anomalie de données entre clients, paiement, parcours vendu, restauration ou
sortie bloque la mise en ligne. Une gêne mineure n'est tolérée que si elle est
consignée, datée et attribuée.

Chaque partie de la page publique doit montrer quatre cartes : **décision**,
**exclusion**, **preuve attendue** et **responsable**. Les durées fictives, dont
sept ou trente jours, doivent être clairement annoncées comme choix d'exemple.

## 6. Empreinte éditoriale et plan

```text
Tension : pourquoi trois prestataires chiffrent-ils trois produits différents ?
Ouverture : confusion concrète avant devis, réponse immédiate.
Progression : la vie d'Atelier Nord, pas un catalogue de modules.
Artefact : cahier des charges rempli sur un seul client de bout en bout.
Exemple : DossierClair, fictif et volontairement limité.
Rythme : histoire, décision, erreur, test et responsable.
CTA : après la liste de ce que la réponse du prestataire doit rendre visible.
Conclusion : consulter, préciser ou revenir au cadrage.
```

| Section                     | Question résolue                               | Preuve                      | Décision                        | Format         |
| --------------------------- | ---------------------------------------------- | --------------------------- | ------------------------------- | -------------- |
| Un SaaS n'est pas une liste | Que faut-il raconter ?                         | parcours client             | suivre la vie complète          | prose          |
| DossierClair                | Quel périmètre ?                               | personnages et exclusions   | figer la version                | fiche          |
| Achat et activation         | Quand l'accès commence-t-il ?                  | Stripe                      | écrire états et répétitions     | quatre cartes  |
| Comptes et droits           | Qui voit quoi ?                                | CNIL, OWASP                 | tester l'étanchéité             | quatre cartes  |
| Action vendue               | Que réussit le client ?                        | recette de bout en bout     | éviter le catalogue             | récit          |
| Erreur et impayé            | Que se passe-t-il quand tout ne va pas bien ?  | états choisis               | rendre les échecs chiffrables   | chronologie    |
| Exploitation                | Qui garde le service utilisable ?              | CNIL, ASVS                  | cadrer support/restauration     | carnet de bord |
| Données et accessibilité    | Quelles preuves demander ?                     | CNIL, W3C, RGAA             | choisir tests et propriétaires  | décisions      |
| Départ du client            | Que récupère-t-il ?                            | Data Act prudent            | écrire sortie et suppression    | scénario       |
| Réponse du prestataire      | Comment comparer sans imposer la technologie ? | hypothèses/exclusions/tests | demander une réponse vérifiable | liste finale   |

## 7. FAQ et conversion

FAQ : différence avec application métier ; faut-il imposer multi-tenant ; choisir
Stripe ; contenu de l'export ; contrat/RGPD ; longueur ; support avant développement ;
réutiliser le kit application métier.

```text
Ressource téléchargeable : non pour cette première publication.
Justification : l'exemple HTML rempli suffit ; aucun modèle inexistant annoncé.
Résultat autonome : un parcours client dont chaque étape possède décision,
exclusion, erreur, test et responsable.
Conclusion « ne pas investir » : oui, si idée ou premier parcours non validés.
Données saisies : aucune.
Bon fit : idée validée, premier parcours choisi, consultation à préparer.
Mauvais fit : idée sans prospects, business plan, avis juridique, certification
ou demande de prix garanti sans périmètre.
CTA : « Faire relire mon cahier des charges SaaS » vers /demarrer-un-projet.
Promesse : repérer les hypothèses cachées, y compris recommander un retour au
cadrage, sans audit gratuit ni chiffrage instantané.
```

### Maillage

Sortants : validation d'idée, MVP, coût SaaS, cahier des charges application
métier, TMA, service SaaS et démarrer un projet.

Entrant prioritaire : `mvp-saas-quoi-inclure`, après la fixation du premier
parcours. Un second lien peut venir du cahier des charges application métier pour
les produits vendus à plusieurs entreprises.

### Metadata

```text
Title : Cahier des charges SaaS : exemple complet · Hagnéré Code
Card title : Rédiger un cahier des charges SaaS sans jargon
Meta : Suivez un exemple rempli de cahier des charges SaaS : comptes clients,
abonnement, droits, support, données, tests et sortie du service.
H1 : Cahier des charges SaaS : comment cadrer le produit de l'abonnement à la
sortie du client ?
Section : Préparer son projet
Canonical : https://hagnere-code.ai/guides/cahier-des-charges-saas
JSON-LD : Article et BreadcrumbList uniquement
Statut initial : ready-for-human-review
```

## 8. Rapport P1 — Recherche

```text
PASSE 1 TERMINÉE
Slug : cahier-des-charges-saas
Lecteur : fondateur ayant validé l'idée et choisi le premier parcours.
Décision : consulter, faire préciser ou reprendre le cadrage.
Angle : suivre une entreprise cliente de l'achat à la sortie.
Pages proches : validation, MVP, coût, application métier et TMA ; aucune ne
remplit le cahier des charges d'un produit vendu à plusieurs entreprises.
Sources : Stripe, CNIL, OWASP, W3C, RGAA, Commission européenne, EUR-Lex et
Légifrance, consultés le 21 juillet 2026.
Incertitudes exclues : prix, délai, architecture, conformité et disponibilité.
Action : écrire décision, exclusion, erreur, test et responsable à chaque étape.
CTA : faire relire le cahier des charges SaaS.
Snapshot : docs/research/manifests/cahier-des-charges-saas-p1.sha256
```

## 9. Rapport P2 — Rédaction et intégration

```text
PASSE 2 TERMINÉE
Fichiers créés : page, image Open Graph et dossier de recherche.
Fichiers modifiés : registre des guides, icône du hub et guide MVP pour le lien
entrant contextuel.
Ouverture : trois prestataires imaginent trois produits lorsque inscription,
impayé, support et sortie restent implicites ; SaaS défini dès l'introduction.
Forme propre : DossierClair suit une entreprise cliente de l'achat à la sortie ;
les étapes alternent cartes, récit, recette, chronologie et carnet d'exploitation.
Exemple : DossierClair, Atelier Nord, Studio Rivage, Claire et Léa sont annoncés
comme entièrement fictifs ; les délais de sept et trente jours sont des choix
d'exemple, jamais des normes.
Sources visibles : Stripe, CNIL, OWASP, W3C, RGAA, Commission européenne et
Légifrance sont placés au voisinage des affirmations concernées avec leurs
limites.
Action autonome : rendre explicites décision, exclusion, erreur, preuve attendue
et responsable pour toute la vie du client.
Bon fit / mauvais fit : consulter après validation de l'idée et du MVP, sinon
revenir au cadrage ; aucune architecture, conformité, disponibilité ou prix garanti.
CTA : un seul, « Faire relire mon cahier des charges SaaS », vers
/demarrer-un-projet.
Contrôles rapides : Prettier, ESLint, TypeScript, SEO 184/184 et git diff --check
passent.
Snapshot : docs/research/manifests/cahier-des-charges-saas-p2.sha256
```

## 10. Rapport P3 — Contre-audit indépendant

```text
PASSE 3 TERMINÉE
Relecteur : agent p3_contenus_site, strictement en lecture seule.
Premier verdict : FAIL provisoire, 0 P0 et 6 groupes P1.
Corrections de consultation : volumes, appareils, reprise, environnements,
comptes tiers, livrables, stabilisation et coûts récurrents rendus communs.
Corrections produit : authentification décidée et testée ; états de premier
paiement, impayé, régularisation, remboursement et droits de lecture explicités.
Corrections d'exploitation : perte acceptable, délai de remise en service,
périmètre des copies, isolement, restauration et compte rendu rendus vérifiables.
Corrections de sortie : export de l'abonné séparé des droits et livrables remis
au commanditaire ; contenu, assistance, archives et suppression détaillés.
Corrections de recette : scénarios communs, environnement, preuves, responsable
d'acceptation, anomalies bloquantes et nouveau test après correction.
Sécurité et accessibilité : même annexe ASVS 5.0.0 pour tous les candidats ;
critères WCAG testés sur le processus complet sans revendiquer une conformité AA.
Revalidation finale : PASS, 0 P0/P1/P2.
Profondeur : 3 186 mots visibles, sans section recommandée à couper.
Temps de lecture exact : 16 minutes à 200 mots/minute.
Contrôles indépendants : manifeste P2 6/6, git diff --check, SEO 184/184,
un H1, ancres et identifiants valides, Article et BreadcrumbList uniquement.
Sources rouvertes : Stripe, CNIL, OWASP, W3C, RGAA, Commission européenne,
EUR-Lex et Légifrance, le 21 juillet 2026.
Snapshot : docs/research/manifests/cahier-des-charges-saas-p3.sha256
```

## 11. Rapport P4 — Plume humaine et contrôle final

```text
PASSE 4 TERMINÉE
Passages humanisés : toutes les décisions techniques sont traduites par leur
effet pour Claire, Léa, le fondateur ou le prestataire ; chaque valeur fictive
est présentée comme hypothèse de comparaison et non comme norme.
Coupe : dix H2 et 3 186 mots visibles. Les ajouts issus de P3 corrigent des
écarts de chiffrage et de recette ; aucune section de remplissage conservée.
Retour P3 : oui ; les six groupes P1, puis l'authentification et les finitions
documentaires, ont été appliqués et revalidés avec 0 P0/P1/P2.
Validation humaine réelle : non ; lecture froide indépendante et navigateur
réel, sans les présenter comme un test par un lecteur extérieur.
Autorisation : route conservée en ready-for-human-review jusqu'au gel global
des dix guides.
Commandes : Prettier PASS ; ESLint PASS ; TypeScript PASS ; SEO 184/184 ;
tests 338/338 ; build production PASS ; postbuild PASS sur 88 URL, 50 temps de
lecture et 164 JSON-LD ; git diff --check PASS.
Responsive : métriques exactes à 320, 390, 768, 1 024 et 1 440 px ; largeur
du document égale à la fenêtre, un H1, aucune ancre manquante ni ID dupliqué.
Visuel : héros observé à 390 et 1 440 px ; fiche de consultation observée sur
mobile ; textes, cartes et CTA restent lisibles.
FAQ : huit questions ; ouverture et fermeture au clic vérifiées.
Route : HTTP 200, canonical exact, noindex/nofollow conforme à la porte locale,
Article et BreadcrumbList parsables, aucun écran d'erreur détecté.
Image sociale : HTTP 200 image/png, 1 200 × 630 ; marque, titre et parcours
Achète → Invite → Réalise → Exploite → Récupère visibles sans coupe.
Verdict historique du 21 juillet : PASS — publiable sous délégation,
publication différée au gel du lot. Ce verdict est remplacé par le cycle
premium documenté en section 13.
Snapshot : docs/research/manifests/cahier-des-charges-saas-p4.sha256
```

## 12. Revue finale

Score historique du snapshot remplacé : **19/20**.

Intention, décision, pédagogie, profondeur, preuve, comparaison, originalité,
conversion et SEO/produit obtiennent 2/2. Le style obtient 1/2 parce que la
lecture froide indépendante et le navigateur réel ne constituent pas un test
avec un lecteur extérieur recruté.

Le contre-audit final a été réalisé en lecture seule par l'agent
`p3_contenus_site`. Il a trouvé six groupes P1 puis deux derniers écarts précis,
tous corrigés. Son verdict final est PASS avec 0 P0, 0 P1 et 0 P2.

Vérifications closes : réponse utile et définition dans les 150 premiers mots ;
hypothèses communes de chiffrage ; cas fictif annoncé ; paiements,
authentification, restauration, recette et sortie acceptables ; sources
sensibles rouvertes ; CTA unique ; maillage, metadata, JSON-LD, ancres et temps
de lecture cohérents ; tests, build, responsive, FAQ, route et image sociale
validés ; publication et indexation explicitement distinguées.

## 13. Cycle premium du 24 juillet 2026 — reprise après audit global

Les sections 8 à 12 décrivent le premier cycle de publication. Elles restent
conservées comme historique, mais leur verdict `19/20` ne s'applique plus au
snapshot audité le 24 juillet 2026. La charte renforcée demande désormais une
décision économique, un actif autonome, des comparaisons à horizon commun, une
position professionnelle contradictoire et une boucle de mesure après
livraison.

### 13.1. Nouvelle recherche et verdict d'entrée

```text
Snapshot public relu : b577065d8226bcbcbff8e58102f999b03955029d6d94c8ff49b1593a5cc06da0
Audit d'entrée sur l'ancien snapshot : 79/100, soit 16/20, verdict NO-GO.
Benchmark : France, Union européenne, Royaume-Uni, États-Unis, Canada et
Australie.
Dossier de recherche : docs/audits/giga-audit-2026-07-24/research/
cahier-des-charges-saas-deep-dive.md
Volume de recherche : 13 271 mots, 53 URL, calculs refaits indépendamment.
Manques bloquants : ressource non autonome, absence de coûts renseignés sur un
horizon commun, aucune mesure de départ et de succès, changements non gouvernés.
```

La reprise conserve DossierClair, les tests d'isolement, de paiement, de
restauration et de sortie. Elle change le produit final : le lecteur doit
désormais pouvoir décider de construire ou non, réserver le temps de son
entreprise, remplir un dossier, comparer trois réponses et organiser la décision
à 30 et 90 jours.

### 13.2. Passe P2 réécrite et intégrée

```text
Ouverture : le lecteur choisit d'abord entre outil existant, assemblage, test
manuel, sur-mesure et attente ; le mauvais moment est dit dans les 150 premiers
mots.
Position : Hagnéré Code déclare son intérêt économique à vendre du développement
et recommande l'option sans développement lorsque les faits la rendent
préférable.
Cas DossierClair : 24 dossiers observés fictivement sur quatre semaines,
52 minutes actives médianes, 5 retours sur 24 et deux heures hebdomadaires de
consolidation ; les cibles à 90 jours et les règles d'arrêt sont explicites.
Temps interne : 21 heures et 1 250 euros de capacité, avec formule et rôles.
Étude ciblée : 2 700 euros contre 12 100 euros de reprise tardive ; ancien seuil
brut remplacé par 22,3 %, puis par la formule fondée sur la réduction effective
du risque.
Comparaison : offres A, B et C à contenu et horizon communs, respectivement
123 200, 111 700 et 120 900 euros de coûts renseignés sur 24 mois.
Recette : 30 tests, 8 nouveaux essais après correction, 9 h 20 et environ
513 euros de capacité interne dans l'exemple.
Gouvernance : version de référence, inconnues, changement, impact, décideur et
date d'effet.
Sortie : récupération des données par l'abonné distinguée du transfert du
produit au fondateur.
Conversion : un seul CTA après l'outil ; diagnostic autorisé à conclure outil
existant, test manuel, report ou arrêt.
```

### 13.3. Actif autonome réellement fourni

Le guide intègre un outil local, sans formulaire commercial et sans envoi de
données :

- six champs simples pour personnaliser la première page ;
- une trame Markdown complète, copiable ou téléchargeable ;
- un exemple DossierClair rempli, avec références, cibles, tests, changements,
  coûts et double sortie ;
- un comparateur A/B/C à 12, 24 ou 36 mois ;
- un export Markdown du comparatif avec formule, inclusions, exclusions et
  inconnues ;
- aucun classement tant qu'un coût important reste inconnu ;
- la mention « coût renseigné le plus faible », jamais « meilleure offre ».

Le format Markdown a été retenu pour fournir immédiatement une ressource
modifiable et transparente sans prétendre livrer un classeur Excel ou un PDF qui
n'aurait pas été réellement construit et contrôlé. Les exports sont créés sur
l'appareil du lecteur par `Blob`, sans `fetch`, compte ou captation d'adresse.

### 13.4. Contrôles P2 disponibles avant contre-audit

```text
Route locale : HTTP 200.
Contenu visible mesuré : 4 490 mots, soit 22 minutes à 200 mots/minute.
Tests ciblés : 51/51.
TypeScript : PASS.
ESLint : PASS.
Prettier : PASS.
git diff --check : PASS.
SEO global : 228/229 ; unique échec connu et extérieur au présent guide :
manifeste P4 historique de prioriser-fonctionnalites-mvp-saas non encore gelé.
Calculs indépendants : 1 250 ; 123 200 ; 111 700 ; 120 900 ; écart 11 500 ;
seuil 22,314... % ; sensibilités -885, +930 et +3 350 ; recette 9,333... h et
513,333... ; pilote manuel 3 240.
Metadata : title 58 caractères, meta description 138, canonical exact, Article
et BreadcrumbList.
Image sociale source : promesse alignée sur modèle, exemple et comparaison.
```

La connexion au navigateur de l'application n'était plus disponible après la
réécriture. Aucun contrôle visuel du nouveau snapshot n'est donc revendiqué à ce
stade. Les anciens contrôles responsive de la section 11 concernent l'ancienne
version.

### 13.5. Fermeture locale après P3, P4 et QA du kit

```text
P3 factuelle : GO local sur le contenu et les calculs.
P4 humaine : 90/100 sur le snapshot relu avant les quatre corrections P2.
P0 : 0.
P1 : 0.
P2 appliqués : accord de « ce coût » ; explication du format .md ; parseur
décimal strict avec erreurs reliées aux champs ; piste Excel marquée abandonnée.
Actif livré : trame, exemple rempli et comparatif au format Markdown.
Contrôles locaux : 28/28 tests dédiés ; 61/61 avec la suite de langage humain ;
TypeScript, lint ciblé et git diff --check PASS.
Gouvernance ciblée : PASS — P1 à P4 présents, 14/14 empreintes P4 exactes et
slug ajouté au lot gelé.
Gouvernance globale : encore rouge avant d'atteindre ce slug, car le manifeste
P4 d'un autre guide conserve un ancien hash du registre partagé guides.ts ; il
n'a volontairement pas été rafraîchi dans ce chantier.
Manifeste : P4 exhaustif du snapshot local corrigé.
Publication : NO-GO tant que le BAT navigateur du snapshot exact n'est pas
réalisé.
```

Le score de **90/100** est la seule note éditoriale revendiquée pour ce cycle :
il a été attribué avant les quatre corrections P2. Aucun score supérieur n'est
inventé après correction. Le manifeste P4 fige l'état local pour rendre le
futur BAT rejouable ; il ne prouve ni un rendu réel, ni un déploiement, ni une
indexation.
