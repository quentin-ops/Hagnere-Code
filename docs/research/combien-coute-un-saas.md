# Dossier de recherche — `combien-coute-un-saas`

> **Statut au 25 juillet 2026 : reconstitution documentaire, P1 à
> reprendre.** La page explique correctement qu'un SaaS n'est pas seulement du
> code. Elle ne fournit pas encore le coût total ni l'économie unitaire qui
> permettent à un dirigeant de décider. Les montants repris ici sont ceux du
> guide ou des simulations de l'audit ; ils ne sont ni tarifs Hagnéré Code, ni
> moyennes de marché.

## Journal des quatre passes

Propriétaire éditorial unique : à désigner.

| Passe                        | État            | Date                        | Responsable            | Snapshot           | Blocages                                                                      |
| ---------------------------- | --------------- | --------------------------- | ---------------------- | ------------------ | ----------------------------------------------------------------------------- |
| 1. Recherche                 | **À reprendre** | 24/07/2026                  | à désigner             | page + audit       | Rejouer intention, concurrence, prix officiels, conformité et hypothèses TCO. |
| 2. Rédaction et intégration  | **À reprendre** | page existante              | à désigner             | page `3c205b…11a`  | Treize P1 : comparaison, TCO, unit economics, ventes, support, conformité.    |
| 3. Contre-audit indépendant  | **À reprendre** | audit initial du 24/07/2026 | autre agent            | audit `e762df…46b` | Aucun snapshot corrigé ; calculs de l'audit non intégrés.                     |
| 4. Plume humaine et contrôle | **Bloquée**     | —                           | lecteur dirigeant + QA | —                  | P3, puis calculateur, langage, tableaux, liens, responsive, build et route.   |

### Manifeste documentaire observé

| Fichier                                                             | SHA-256 recalculé le 24/07/2026                                    | Usage              |
| ------------------------------------------------------------------- | ------------------------------------------------------------------ | ------------------ |
| `src/app/guides/combien-coute-un-saas/page.tsx`                     | `3c205b3f92f02493e2582aef48bf6c3f7e4420048049161e29d784b07174611a` | Page courante.     |
| `docs/audits/giga-audit-2026-07-24/guides/combien-coute-un-saas.md` | `e762df11885486eaadefdae1587193a46c3276b3b990720d6b34eee25f68146b` | Audit historique.  |
| `docs/charte-qualite-guides.md`                                     | `5ee616faa4959dc8ad2b0eb19a5b19ffbf53299b62665700093c5c176b0b8491` | Contrat éditorial. |
| `docs/workflow-maitre-guides-4-passes.md`                           | `a3a8c8f1be5d5d60b096f251f22b27ae5526adb708c334c4d6f0b7b4270c60c4` | Portes P1–P4.      |

L'empreinte abrégée portée dans l'en-tête de l'audit ne correspond pas
exactement à l'empreinte recalculée du fichier courant. Cela peut être une
coquille documentaire ; ce dossier utilise le hash réellement recalculé et ne
prétend pas que l'audit constitue un manifeste stable.

## 1. Brief fondateur/dirigeant

```text
Slug : combien-coute-un-saas
Statut : page existante, score historique 79/100, P1 non validée
Requête principale hypothétique : combien coûte un SaaS
Moment : explorer puis décider avant financement ou développement
Lecteur : dirigeant, porteur de projet B2B ou responsable métier qui veut
          savoir combien dépenser pour apprendre et combien coûtera l'exploitation
Déclencheur : une idée semble vendable, mais le budget de construction est
              confondu avec le coût du produit et de sa commercialisation
Question : « Quel budget faut-il pour valider, construire, vendre et exploiter
            le produit, et à quelles conditions faut-il renoncer ? »
Décision : MVP manuel, no-code, logiciel existant, sur-mesure ou report
Action sans contact : remplir un TCO 12/36/60 et des économies unitaires
CTA : cadrage du problème, du payeur, du périmètre et des hypothèses à tester
Hors périmètre : levée de fonds garantie, prévision de vente certaine,
                 conseil fiscal/juridique, tarif ferme sans brief
```

### Phrase réelle et réponse attendue

- **Phrase téléphone :** « On me dit qu'un MVP coûte 20 ou 30 k€, mais combien
  faut-il réellement avoir en trésorerie avant les premiers clients ? »
- **Réponse en une phrase :** le coût à prévoir est la construction plus
  cloud, paiement, support, sécurité, maintenance, vente et acquisition jusqu'à
  une traction suffisante ; comparez ce total au manuel, au no-code et au
  logiciel existant.
- **Décision promise :** identifier le chemin qui achète le plus
  d'apprentissage au coût et au risque acceptables.

### Contrat de langage

| Terme        | Traduction immédiate                                                             |
| ------------ | -------------------------------------------------------------------------------- |
| SaaS         | logiciel utilisé en ligne et payé le plus souvent par abonnement                 |
| multi-tenant | plusieurs entreprises utilisent le même produit sans voir les données des autres |
| ARPA         | revenu moyen mensuel par entreprise cliente                                      |
| churn        | part des clients qui partent pendant une période                                 |
| CAC          | coût moyen pour acquérir un client                                               |
| LTV          | marge de contribution attendue pendant la durée de vie d'un client               |
| payback      | nombre de mois nécessaires pour récupérer le CAC ou l'investissement             |
| TCO          | tout ce que le produit coûte sur l'horizon                                       |
| RPO/RTO      | perte de données acceptable et délai de remise en service                        |

Le hero ne doit pas laisser 15–40 k€ agir comme prix public. Il doit annoncer
les inclusions, l'horizon et le fait que la vente/exploitation peut dépasser le
développement.

## 2. Couverture actuelle

La page traite :

1. budgets selon maturité ;
2. SaaS, outil interne ou logiciel existant ;
3. première version utile ;
4. fonctions qui augmentent le prix ;
5. devis fictif ;
6. frais après mise en ligne ;
7. modèle économique ;
8. IA et no-code ;
9. données, sécurité et conformité ;
10. calendrier ;
11. comparaison de devis et reprise.

### Forces

- Le problème et le payeur précèdent la technologie.
- Prototype, preuve technique, première version et produit commercial sont
  distingués.
- La page déconseille le développement si un outil existant suffit.
- Elle traite comptes, rôles, multi-tenant, abonnements, intégrations,
  documents, IA, sauvegardes et sortie.
- L'exemple du contrôle de sécurité est déclaré fictif et borné.
- La propriété du code, les comptes administrateurs et les données sont
  présents.
- L'exemple de devis totalise 30 500 € et détaille plusieurs livrables.
- La formule « clients nécessaires = coûts fixes / marge conservée » est
  pédagogiquement juste.

### Manques

- Aucun TCO 12/36/60 dans la page.
- Manuel/concierge, no-code, logiciel configuré et sur-mesure ne sont pas
  comparés sur le même produit.
- Coût du travail manuel, capacité et erreurs ne sont pas chiffrés.
- Prix des plateformes no-code et logiciels ne sont pas modélisés par volume.
- Les fourchettes Hagnéré manquent d'effort, équipe, scope et exclusions.
- Cloud, base, e-mails, logs, sauvegardes et support ne forment pas un
  scénario de consommation.
- Paiement, facturation, remboursement et litige restent incomplets.
- Acquisition, vente, onboarding et cycle commercial ne sont pas dans le
  calcul.
- Churn, LTV, CAC et payback sont absents.
- Financement, décaissements et réserve après lancement sont absents.
- Conformité et sécurité ne sont pas reliées à des déclencheurs, livrables et
  budgets.

## 3. Pages voisines et frontières

| Page                                           | Intention                              | Frontière                                                       |
| ---------------------------------------------- | -------------------------------------- | --------------------------------------------------------------- |
| `/guides/mvp-saas-quoi-inclure`                | choisir les fonctions et limites de V1 | ici, traduire cette V1 en coût complet et seuil économique      |
| `/guides/combien-de-temps-developper-saas`     | construire le calendrier               | ici, budgéter construction, run et vente                        |
| `/guides/no-code-ou-sur-mesure`                | choisir une voie technique/produit     | ici, comparer les quatre options à TCO égal                     |
| `/guides/cahier-des-charges-saas`              | formaliser les exigences               | ici, chiffrer et tester la viabilité                            |
| `/guides/combien-coute-une-application-mobile` | budgéter une app distribuée sur stores | ici, produit SaaS, abonnement, acquisition et économie unitaire |

**Justification :** la décision centrale est financière et produit :
combien dépenser pour apprendre, vendre et tenir jusqu'à l'équilibre.

P1 doit vérifier les requêtes proches « prix développement SaaS », « coût MVP
SaaS », « budget SaaS », « coût mensuel SaaS » et « rentabilité SaaS ».

## 4. Benchmark et preuves documentés

### Benchmark historique de couverture

L'audit rapporte une recherche au 24 juillet 2026 en France, États-Unis,
Royaume-Uni, Australie et DACH.

| Ressource rapportée         | Apport                                     | Limite                           |
| --------------------------- | ------------------------------------------ | -------------------------------- |
| Manuel Coffin, France       | agence/freelance/no-code/infrastructure    | source commerciale               |
| Cesar Ayala, US             | niveaux de MVP et edge cases Stripe        | prix/salaires non transposables  |
| Devs & Logics, US           | livrables inclus et handoff                | source commerciale               |
| GuruSoftwares, UK           | phases discovery/UX/frontend/multi-tenancy | coûts UK                         |
| SaaS Development Agency, UK | composants UI puis design après traction   | agence                           |
| DecipherZone, Australie     | coûts mensuels et conformité sectorielle   | droit australien                 |
| ChainZ, Australie           | dépenser pour apprendre                    | méthode, pas baromètre           |
| Zulbera, DACH               | checklist production-ready                 | prix régionaux non transposables |
| IT Studio Rech, DACH        | coûts par usage/utilisateur                | source commerciale               |

Ces pages servent à cartographier les questions, pas à soutenir une
fourchette française. P1 doit rouvrir les URLs exactes, dater les passages,
noter le conflit d'intérêts et déterminer si de nouvelles pages ajoutent une
nouvelle décision.

### Sources officielles rapportées

| Sujet                              | Source                                                                                                                                                                                                              | Nature et portée                                               |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| responsable/sous-traitant et cloud | [CNIL — identifier son rôle](https://www.cnil.fr/fr/rgpd-comment-bien-identifier-son-role) et [qualification cloud](https://www.cnil.fr/fr/quelles-qualifications-pour-les-acteurs-de-linformatique-en-nuage-cloud) | autorité française ; revalidation nécessaire                   |
| contrat, sécurité et DPIA          | [chapitre IV du RGPD via la CNIL](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4)                                                                                                           | obligations selon rôle et risque ; DPIA non systématique       |
| hébergement/front                  | `https://vercel.com/pricing`                                                                                                                                                                                        | prix officiels en dollars, quotas et usage volatils            |
| base/auth                          | `https://supabase.com/pricing`                                                                                                                                                                                      | plans, quotas, compute ; non coût universel                    |
| facturation                        | `https://stripe.com/fr/billing/pricing`                                                                                                                                                                             | l'audit rapporte 0,7 % Billing, hors paiement/cas particuliers |
| portabilité cloud                  | [Commission européenne — Data Act explained](https://digital-strategy.ec.europa.eu/en/factpages/data-act-explained)                                                                                                 | portée à qualifier selon service                               |
| résiliation en trois clics         | [Service Public Entreprendre](https://entreprendre.service-public.fr/actualites/A16599?lang=fr)                                                                                                                     | contexte consommateurs, pas tout B2B                           |
| TVA OSS                            | [impots.gouv.fr](https://www.impots.gouv.fr/professionnel/je-minscris-au-service-du-guichet-unique-de-tva) et [Your Europe](https://europa.eu/youreurope/business/taxation/vat/one-stop-shop/index_en.htm)          | ventes électroniques B2C UE à qualifier                        |
| facturation électronique           | [impots.gouv.fr](https://www.impots.gouv.fr/facturation-electronique-et-plateformes-agreees)                                                                                                                        | calendrier et solution à revalider                             |
| IA                                 | [règlement UE 2024/1689](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689)                                                                                                                      | obligations selon rôle et usage                                |

**Règle :** relever date, devise, pays, taxes, quotas et niveau de service.
Ne jamais transformer le prix d'entrée d'un outil en budget mensuel du produit.

## 5. Gain d'information

| Question                               | Page actuelle           | Manque                       | Réponse supérieure                               |
| -------------------------------------- | ----------------------- | ---------------------------- | ------------------------------------------------ |
| Combien pour construire ?              | paliers et devis fictif | effort et inclusions         | trois scopes avec rôles/jours/inconnues          |
| Combien pour tenir 12/36/60 mois ?     | liste de frais          | aucun total                  | TCO complet par option                           |
| Quel chemin teste le besoin ?          | outil existant évoqué   | quatre options non égalisées | manuel, no-code, logiciel, sur-mesure sur un cas |
| Combien coûte chaque client ?          | formule courte          | consommation/support         | marge de contribution par volume                 |
| Combien de clients faut-il ?           | exemple 100 clients     | churn/CAC/LTV absents        | scénarios ARPA/churn/CAC/support                 |
| Comment financer le retard de ventes ? | absent                  | runway                       | calendrier de décaissement et arrêt              |
| Quel niveau de conformité ?            | général                 | déclencheurs                 | B2B/B2C, données, pays, secteur, IA              |
| Quand faut-il renoncer ?               | outil existant parfois  | contrôle inverse             | seuil de support, churn, payback et cash         |

## 6. Cas commun et calculs historiques

### Périmètre commun proposé par l'audit

SaaS B2B de contrôle de sécurité : 20 entreprises, 200 utilisateurs actifs, un
workflow, rôles administrateur/chef d'équipe, facturation mensuelle, deux
intégrations, support ouvré, données UE, 500 rapports/mois, horizon
12/36/60.

### TCO illustratif de l'audit

| Option             |   12 mois |   36 mois |   60 mois | Postes inclus annoncés                                   |
| ------------------ | --------: | --------: | --------: | -------------------------------------------------------- |
| manuel/concierge   |  51 000 € | 105 000 € | 159 000 € | prototype, outils, opérateur, support, vente             |
| no-code            |  61 000 € | 138 000 € | 216 000 € | build, usage, plugins, support, sécurité, vente          |
| logiciel configuré |  87 000 € | 237 000 € | 387 000 € | licences, configuration, intégration, support, vente     |
| sur-mesure         | 132 000 € | 228 000 € | 324 000 € | discovery, UX, code, cloud, sécurité, maintenance, vente |

Hypothèses historiques : temps fondateur à 45 €/h ; acquisition/vente
2 000 €/mois au lancement ; 20 entreprises ; hors salaires de l'équipe
cliente, TVA et rémunération du fondateur. Ces chiffres doivent être
reconstruits ligne par ligne avant usage : le tableau de l'audit ne suffit pas
comme preuve comptable.

### Économie unitaire illustrative

```text
ARPA : 149 €/entreprise/mois
Coûts variables : 20 %
Marge de contribution : 119,20 €
Churn mensuel : 2,5 %
CAC : 1 200 €
Coûts fixes : 8 000 €/mois

Clients pour couvrir coûts fixes = 8 000 / 119,20 = 67,11, donc 68
Durée de vie simplifiée = 1 / 2,5 % = 40 mois
LTV simplifiée = 119,20 × 40 = 4 768 €
Payback CAC = 1 200 / 119,20 ≈ 10,1 mois
```

Ce modèle simplifié ignore expansion, contraction, cohortes, temps de vente,
impôts, financement et coût du capital. Il doit être présenté comme outil
d'orientation et testé avec :

- ARPA 49/149/499 € ;
- churn 1/2,5/5 % ;
- CAC 400/1 200/3 000 € ;
- 20/100/500 clients ;
- support 1/4/8 heures par client ;
- retard commercial de 3/6/12 mois.

### Contrôle inverse

Le lecteur doit pouvoir conclure « ne pas construire » si :

- le manuel teste le besoin à moindre risque ;
- le support par client détruit la marge ;
- le payback dépasse la trésorerie disponible ;
- le churn rend l'acquisition non récupérable ;
- le logiciel existant couvre le workflow ;
- les obligations ou données dépassent le niveau de financement.

## 7. Conformité, risques et limites

| Déclencheur              | Travail à chiffrer                                          | Limite                             |
| ------------------------ | ----------------------------------------------------------- | ---------------------------------- |
| données personnelles B2B | rôles, DPA, sous-traitants, droits, suppression             | validation DPO/juriste selon enjeu |
| risque élevé             | analyse de risques et éventuelle DPIA                       | non automatique                    |
| service B2C              | information, rétractation/résiliation selon cas             | ne pas appliquer à tout B2B        |
| B2C UE                   | TVA/OSS                                                     | avis fiscal                        |
| factures B2B France      | calendrier e-invoicing/e-reporting                          | règles à revalider                 |
| cloud/portabilité        | export, migration, assistance, suppression                  | portée Data Act à qualifier        |
| IA                       | données, fournisseur, conservation, supervision, erreur     | obligations selon usage            |
| niveau de service        | MFA, secrets, logs, backup, restauration, RPO/RTO, incident | coût selon criticité               |

## 8. Position, ressource et conversion

```text
Position fréquente : commencer par la façon la moins chère de valider le
problème et le prix ; automatiser après preuve d'usage.
Cas sur-mesure gagnant : différence métier mesurable, volumes suffisants,
propriété/sortie importante et économie unitaire défendable.
Cas opposé : outil existant ou concierge si le workflow n'est pas différenciant.
Signal de révision : churn, support, CAC, délai de vente ou coût cloud sort de
l'hypothèse ; règle réglementaire ou intégration change.
Ce que nous déconseillons : financer uniquement le code sans vente, support et
réserve ; présenter l'IA comme division automatique du coût.
Conflit d'intérêts : Hagnéré Code développe des SaaS ; le calcul doit pouvoir
conclure à ne pas développer.
```

### Ressource autonome

Un tableur public avec :

- hypothèses datées ;
- quatre options ;
- coûts fixes, variables et temps interne ;
- TCO 12/36/60 ;
- volume et paliers d'outils ;
- ARPA, marge, churn, CAC, LTV et payback ;
- besoins de trésorerie mois par mois ;
- scénarios simple/central/exigeant ;
- règle d'arrêt et décision « ne pas investir » ;
- exemple rempli et contrôle des formules.

La donnée saisie doit rester locale ou sa destination être expliquée. Le
fichier doit être ouvert, recalculé, testé et versionné avant tout CTA.

### CTA honnête

Le CTA doit promettre au plus une restitution de cadrage : hypothèses
manquantes, périmètre d'apprentissage, premier TCO et questions de vente. Il ne
doit promettre ni prix ferme, ni clients, ni financement, ni rentabilité.

## 9. Empreinte humaine et anti-IA

### À conserver

- question « qui paiera ? » ;
- cas bâtiment fictif ;
- possibilité de garder du manuel ;
- opinion « outil existant peut gagner » ;
- exemples qui parlent d'exploitation et non de stack.

### À corriger

- éviter une avalanche d'acronymes financiers ;
- faire vivre un fondateur et ses décisions mois 0, 3, 6 et 12 ;
- présenter le cas de renoncement avant les tableaux de sophistication ;
- faire suivre chaque métrique d'une décision ;
- ne pas répéter la fourchette 15–40 k€ dans hero, FAQ et tableau sans scope.

P4 doit faire reformuler par un dirigeant :

1. ce qu'il faut financer avant la première vente ;
2. l'option qu'il testerait d'abord ;
3. le nombre de clients et le payback dans le cas central ;
4. le signal qui lui ferait arrêter ;
5. ce qu'il recevrait après le CTA.

## 10. Registre des défauts hérités

### P0

Aucun P0 démontré. Un calcul faux, un tarif garanti ou une obligation mal
qualifiée deviendrait bloquant.

### P1

1. **P1-SAAS-01** — cas égal.
2. **P1-SAAS-02** — quatre options.
3. **P1-SAAS-03** — TCO 12/36/60.
4. **P1-SAAS-04** — protéger les fourchettes.
5. **P1-SAAS-05** — devis par livrable.
6. **P1-SAAS-06** — consommations officielles datées.
7. **P1-SAAS-07** — unit economics.
8. **P1-SAAS-08** — vente et acquisition.
9. **P1-SAAS-09** — support et churn.
10. **P1-SAAS-10** — conformité datée.
11. **P1-SAAS-11** — sécurité chiffrée.
12. **P1-SAAS-12** — financement et runway.
13. **P1-SAAS-13** — dossier de recherche reproductible.

### P2

- scénarios B2B interne, B2C abonnement et réglementé ;
- financement français vérifié ;
- effets de seuil ;
- architecture expliquée par risque ;
- sortie et suppression ;
- recette produit ;
- lexique au fil du texte ;
- tableur autonome ;
- QA SEO/UX et production.

## 11. Ordre de reprise

1. Rejouer la demande, le benchmark et les prix officiels.
2. Figer le cas commun et reconstruire chaque TCO.
3. Construire les économies unitaires et le runway dans le tableur.
4. Relier conformité/sécurité à des déclencheurs et livrables.
5. Réécrire autour d'une trajectoire de décision, pas d'un catalogue de
   fonctions.
6. Faire recalculer par un autre agent et rouvrir chaque source volatile.
7. Exécuter P4 : humain, anti-jargon, mobile, calculateur, liens, JSON-LD,
   build et route.
8. Traiter déploiement, indexation et conversion comme preuves séparées.

**Porte de sortie :** aucun statut « référence chiffrée » avant TCO
reproductible, unit economics, cas négatif, ressource testée et P3/P4
manifestées sur le snapshot final.
