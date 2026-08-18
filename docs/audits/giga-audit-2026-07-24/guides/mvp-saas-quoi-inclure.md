# Audit approfondi — `mvp-saas-quoi-inclure`

Date : 24 juillet 2026

Auditeur concurrentiel : agent P3 indépendant (marchés France, États-Unis,
Royaume-Uni et Australie)

Snapshot du guide : page locale `http://localhost:3010/guides/mvp-saas-quoi-inclure`,
code `src/app/guides/mvp-saas-quoi-inclure/page.tsx` (instantané contrôlé le
24/07/2026), dossier de recherche `docs/research/mvp-saas-quoi-inclure.md`.

## 1. Verdict exécutif

```text
Lecteur exact : dirigeant, indépendant ou porteur d'un SaaS B2B ; un premier client est prêt à essayer, mais la liste de fonctions ne dit pas ce qui doit réellement être exploitable.
Question réelle : « Que puis-je repousser sans rendre le service invendable, dangereux ou dépendant de moi à chaque étape ? »
Décision attendue : prototype/POC, pilote accompagné, première version exploitable, achat d'un outil existant ou report ; puis construire, opérer manuellement, intégrer ou différer chaque capacité.
Réponse actuelle en une phrase : un MVP SaaS est un parcours de valeur court mais complet, avec accès, données, aide, continuité et mesure, plutôt qu'une liste arbitraire de fonctions.
Défaut qui coûte le plus de valeur : la page donne une excellente grille qualitative mais aucune enveloppe chiffrée ni coût du mauvais périmètre ; le dirigeant ne peut donc pas relier l'arbitrage à son budget, au temps de son équipe ou à un seuil go/no-go.
Niveau actuel : B
Priorité : haute
Statut : audité ; non corrigé et non contre-audité
P0 : 0 ; P1 : 5 ; P2 : 2
Verdict : NO-GO comme « guide de référence » au seuil de 90/100. Utile comme base éditoriale, mais aucune passe n'est validée sur le snapshot corrigé.
```

Le guide est nettement supérieur à la plupart des checklists repérées : il
commence par une situation humaine, distingue prototype/POC/pilote/MVP, assume
le manuel, teste les erreurs, couvre droits, données, paiement, support,
restauration et décision. Il répond déjà à « quoi inclure ? » avec plus de
bon sens que les pages qui imposent dix fonctions ou le multi-tenant à tous les
projets. Il ne mérite toutefois pas de passer le portail qualité : il manque
un exemple de budget et de charge interne à hypothèses identiques, un coût du
mauvais choix, des critères chiffrés de sortie, et plusieurs décisions
opérationnelles qui deviennent décisives dès qu'un deuxième client arrive.

### Score avant correction

| Axe | Note /10 | Preuve localisable | Manque décisif |
| --- | ---: | --- | --- |
| Intention | 9 | `page.tsx:348-369`, question du premier client et promesse du parcours | dire explicitement dans les 150 mots que le budget est arbitré par le mode de vente et le risque |
| Décision | 8 | `page.tsx:999-1158`, six tests et tableau prototype/pilote/version/report | aucun seuil de sortie, horizon ou coût qui déclenche vraiment « go » ou « stop » |
| Pédagogie | 9 | `page.tsx:372-419`, journée 09:00/11:20/16:40 ; termes traduits dans `:488-551` | expliquer davantage la différence entre capacité visible, procédure interne et responsabilité contractuelle |
| Profondeur | 8 | `page.tsx:577-886`, opérations, données, paiement, sécurité et sauvegarde | rétention/base légale, DPA/sous-traitants, récupération de compte, surveillance, renouvellement/impayé et séparation multi-organisation restent trop courts |
| Preuve | 8 | RGPD/CNIL/ANSSI/OWASP/WCAG/Stripe/PCI cités `:733-885`, sources `:1172-1283` | source snapshot daté du 20 juillet et plusieurs recommandations concurrentes non recoupées par une source primaire ; pas de preuve de seuils |
| Comparaison | 8 | format de livraison `:488-535`, manuel/automatisé `:588-620`, modes de vente `:733-798` | buy/no-code/outil existant, coût interne et risque comparés sur une même unité et un même horizon |
| Originalité | 9 | journée du premier client, grille en sept couches, déclencheur du manuel | l'artefact ne calcule pas encore le coût cumulé de l'opération manuelle |
| Style | 9 | ouverture directe, voix de conseil, avertissements honnêtes, cas inadapté `:1140-1158` | quelques formulations très normatives (« ne peuvent pas être improvisés ») méritent une condition par risque |
| Conversion | 8 | CTA unique après le verdict `:1160-1170`, contre-indication commerciale explicite | CTA ne donne pas de mini-outil chiffré et ne montre pas assez ce qu'un cadrage livré contient concrètement |
| SEO/produit | 8 | H1 unique, canonical, Article + BreadcrumbList définis dans la page, liens connexes `:259-343` | `guides.ts` indique `dateModified: 2026-07-21` ; page locale noindex attendue, production et traitement sitemap non prouvés |

**Total : 85/100.** Le total est volontairement exact (9+8+9+8+8+8+9+9+8+8).
La note est sous le seuil : elle ne justifie ni publication réputée finale ni
promesse de positionnement. Il faut un gain lecteur réel et vérifiable pour
atteindre au moins 90, sans fabriquer du contenu uniquement pour remonter une
note.

## 2. Ce que le guide dit réellement

### Réponse et progression

La réponse principale apparaît immédiatement (`page.tsx:348-369`) : le client
doit entrer, accomplir la tâche, retrouver son travail et être aidable ; le
dirigeant doit administrer, protéger les données et reprendre les erreurs. La
mini-journée (`:372-405`) rend cette règle mémorisable. L'encadré de contexte
(`:407-419`) évite de traiter une simple liste d'attente comme une validation.

La progression est saine : choisir la question à tester (`:445-552`), utiliser
la checklist (`:554-575`), organiser le manuel (`:577-732`), vendre et protéger
(`:733-886`), mesurer (`:888-997`), puis autoriser ou reporter (`:999-1170`).
Le tableau des formats ne confond pas prototype et service exploitable et le
tableau de décision accepte explicitement « acheter ou reporter ».

### Ce qui apporte déjà de la valeur

- la checklist distingue service, accès, données, vente, aide, sécurité et
  mesure ; elle ne présente pas le paiement ou l'application mobile comme
  universellement obligatoires ;
- le manuel est conditionnel et responsable : personne nommée, méthode, durée,
  limite et déclencheur (`:623-632`) ;
- les sept incidents (`:634-673`) et les six tests (`:1007-1042`) obligent à
  traiter l'échec, l'export, les droits, la restauration et la vente ;
- l'exemple fictif de 27 demandes (`:941-997`) est honnêtement signalé comme
  illustratif et montre ce qui est construit, manuel, intégré ou reporté ;
- le CTA est après la décision et annonce la possibilité d'un pilote, d'un
  budget concentré ou d'un refus de développer (`:1140-1170`).

### Ce qui semble complet mais ne permet pas encore de décider

La présence de « sauvegarde », « support », « paiement » ou « sécurité » n'est
pas encore une définition testable. Il manque par exemple : qui vérifie une
restauration par organisation, quelle perte de données est acceptable, qui
réconcilie un renouvellement échoué, quelle durée de conservation est choisie,
qui répond après le pilote, et combien coûte la procédure manuelle sur douze
mois. Les mots sont présents ; les critères de décision le sont moins.

Le document de recherche (`docs/research/mvp-saas-quoi-inclure.md`) est une
bonne base P1 : il interdit les prix/délais universels et les affirmations de
conformité. Il est toutefois daté du 20 juillet et déclare lui-même qu'il n'a
pas de ressource téléchargeable ni de benchmark chiffré. Le guide ne doit pas
importer des prix de prestataires comme des faits, mais il doit fournir des
calculs illustratifs reproductibles pour aider un dirigeant à arbitrer.

## 3. Benchmark France et international

Requêtes relancées le 24/07/2026 : `MVP SaaS quoi inclure premier client
checklist B2B sécurité paiement support`, puis équivalents anglais US, UK et
Australie. Les pages ci-dessous sont des benchmarks de couverture et de
positionnement, pas des preuves de prix, de délais ou de conformité. Beaucoup
vendent une prestation : leur biais commercial est signalé.

| Ressource et URL directe | Marché | Réponse utile | Preuve, outil ou exemple | Limite | Apport à vérifier ou adapter |
| --- | --- | --- | --- | --- | --- |
| [PayPro Global — MVP SaaS](https://payproglobal.com/fr/reponses/quest-ce-quun-mvp-saas/) | France/monde | définition, sélection, abonnement et métriques | checklist commerciale et monétisation | fournisseur de paiement ; aucun vrai test de reprise ou de support | ajouter la décision « contrat manuel vs achat autonome » sans reprendre ses affirmations commerciales |
| [Sparkier — MVP SaaS B2B](https://www.sparkier.io/articles/mvp-saas-b2b-arreter-le-feature-creep) | France | hypothèses, parcours critique et dérive du périmètre | atelier de cadrage lisible | vend un atelier ; socle d'exploitation peu détaillé | garder l'hypothèse et ajouter coût/charge interne |
| [Websual — MVP SaaS B2B](https://websual.fr/blog/mvp-saas-b2b-par-ou-commencer) | France | promesse, cinq questions, no-code/code, métriques | exemple accessible | l'offre vend une réalisation en quatre semaines ; ne prouve ni université ni résultat | comparer le délai comme hypothèse de projet, jamais comme garantie |
| [Inversify Media — checklist petite entreprise](https://www.inversifymedia.com/blog/mvp-development-checklist-for-small-businesses) | États-Unis | problème, groupe initial, workflow, droits/données, intégrations, succès 30–60 jours, support/hosting/monitoring | couverture explicite du post-lancement et budget d'exploitation | article d'agence, pas une norme ; seuils non justifiés | intégrer un horizon de mesure et les coûts support/monitoring |
| [GainHQ — SaaS MVP feature checklist](https://gainhq.com/blog/saas-mvp-feature-checklist/) | États-Unis | core workflow B2B, onboarding, analytics et safeguards | checklist produit plus large | fournisseur/outillage ; pas de seuil de périmètre ni de coût d'erreur | distinguer fonction qui apprend d'une fonction qui rend le service exploitable |
| [Krishna — SaaS MVP feature checklist](https://www.consultwithkrishna.com/blogs/saas-mvp-feature-checklist) | États-Unis/monde | paiements manuels au début, éviter tiers complexes, usage-based billing, essais trop tôt | avertissement monétisation pragmatique | contenu marketing ; aucune preuve de la bonne limite | ajouter les événements d'abonnement et la personne qui réconcilie |
| [BuildMVPFast — développement MVP](https://www.buildmvpfast.com/saas-mvp-development) | États-Unis | auth, billing, dashboards, livraison rapide | affiche 1 999–100 000 $ et 2–4 semaines | prix/délais du vendeur non comparables, sans périmètre ni preuve ; à ne pas citer comme benchmark | montrer au contraire une formule à remplir et une sensibilité, pas une fourchette universelle |
| [GOV.UK — alpha phase](https://www.gov.uk/service-manual/agile-delivery/how-the-alpha-phase-works) | Royaume-Uni | tester les risques, les contraintes légales/techniques et décider beta/stop | manuel public, décisions et risques explicités | services publics ; page dernière mise à jour ancienne, transposition à borner | ajouter une vraie porte « contraintes contractuelles/personnes/coût de l'exploitation » |
| [Supastarter — SaaS launch checklist 2026](https://supastarter.dev/blog/saas-launch-checklist-2026) | Monde anglophone (requête Australie ; pays de l'auteur non retenu) | paiements, RGPD, conditions, cookies, DPA, performance | checklist de lancement et de post-lancement | vendeur de starter kit ; pas de preuve juridique universelle | inclure DPA/mentions/retention en « à examiner selon le cas », sans déclarer conformité |
| [DesignRevision — SaaS launch checklist](https://designrevision.com/blog/saas-launch-checklist) | États-Unis/monde | pré-lancement, métriques, support | structure très visible | chiffres « 60 % », « 847 utilisateurs », « 8,2 mois », « 65 % » sans source primaire identifiable ; à écarter | démontrer notre discipline : aucun chiffre de marché sans méthode/source |

### Saturation et vraie opportunité

La SERP est saturée de listes de fonctions (authentification, dashboard,
paiement, analytics) et de pages d'agences qui transforment leur propre offre
en norme. Elle l'est beaucoup moins sur la question du dirigeant : « si je
garde l'import manuel, qui le fait, combien de temps, jusqu'à quand, avec quel
risque et quel coût total ? » La réponse supérieure doit unir valeur métier,
responsabilité interne, mode de vente, données et décision de sortie sur une
même unité : un premier client sur un horizon défini.

## 4. Matrice de gain d'information

| Question décisive | Meilleure réponse repérée | Apport international | Couverture actuelle | Manque | Réponse supérieure à produire |
| --- | --- | --- | --- | --- | --- |
| Combien faut-il construire ? | aucun nombre universel ; un parcours complet | Inversify ajoute groupe initial et succès 30–60 jours | forte, `:445-575` | pas de temps/coût par scénario | trois scénarios à hypothèses identiques, avec coût illustratif et limites |
| Qu'est-ce qui peut rester manuel ? | tâche faible volume, responsable et limite | Krishna recommande paiements manuels très tôt | bonne, `:577-632` | charge annuelle et risque de personne unique | calculer heures × coût interne × horizon et afficher le déclencheur |
| Quand le pilote devient-il un produit ? | quand plusieurs usages passent sans improvisation | GOV.UK formalise une décision beta/stop | partielle, `:999-1138` | critères et horizon écrits | matrice go/no-go avec résultat, support, incident, continuité et propriétaire |
| Le paiement est-il obligatoire ? | dépend du mode de vente | sources US détaillent essais, dunning, tiers et taxe | bonne, `:733-798` | renouvellement, impayé, réconciliation et facture | états de paiement + responsable + procédure de droit d'accès |
| Comment éviter la fuite entre clients ? | tester A/B et rôles | contenus US parlent RLS/multi-tenancy mais vendent souvent une architecture | partielle, `:854-871` | isolation, export, suppression, restauration par organisation | exigences de comportement, sans imposer une architecture |
| Quel socle RGPD minimal ? | finalité, minimisation, accès, durée, export | Supastarter mentionne DPA/conditions/cookies | bonne mais courte, `:800-836` | base légale, rôles responsables/sous-traitants, registre, incident | ajouter un encadré de questions à soumettre au DPO/juriste |
| Quel coût si je me trompe ? | non traité | concurrents affichent parfois des prix vendeur non comparables | absent | temps fondateur, support, reprise et mois perdu | formule de coût de dérive et contrôle inverse |
| Faut-il coder ? | pilote, achat, no-code, sur mesure selon question | pages US vendent packages ; aucune comparaison égale | mentionné, non développé | coût d'opportunité et dépendance | tableau achat/no-code/sur-mesure sur même parcours et horizon |
| Que remet-on au client ? | fiche d'une page et tests | launch checklists ajoutent monitoring et post-launch budget | bonne, `:1044-1078` | SLA/astreinte, export lisible et responsabilités | enrichir la fiche avec propriétaire, délai, preuve et date de sortie |

## 5. Faits et fraîcheur

| Affirmation du guide | Verdict | Source primaire actuelle | Périmètre et date | Correction |
| --- | --- | --- | --- | --- |
| Un MVP n'a pas de nombre universel de fonctions | confirmé comme doctrine, non comme loi | [Eric Ries, What is an MVP](https://leanstartup.co/resources/articles/what-is-an-mvp/) | méthode produit ; page consultée 24/07/2026 | garder, mais marquer « principe de cadrage » |
| Alpha peut conclure « ne pas construire » | confirmé dans son contexte | [GOV.UK alpha](https://www.gov.uk/service-manual/agile-delivery/how-the-alpha-phase-works) | manuel de service public britannique, page consultée 24/07/2026 | garder la transposition et préciser contraintes privées |
| Finalité, minimisation, privacy by design et mesures adaptées | confirmé | [RGPD, articles 5, 25, 32](https://eur-lex.europa.eu/eli/reg/2016/679/2016-05-04?locale=fr) | règlement UE ; analyse dépend des données et rôles | ajouter base légale, conservation et responsabilités à examiner |
| Comptes/habilitations, séparation code/config/secrets, données de test fictives | confirmé comme recommandation CNIL | [CNIL Guide développeur](https://www.cnil.fr/fr/guide-rgpd-du-developpeur) | guide pratique ; consulté 24/07/2026 | ajouter TLS, dépendances, documentation et tests de restauration de droits |
| Une sauvegarde doit être restaurée et testée | confirmé | [ANSSI sauvegarde v1.1](https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf) | recommandations SI ; version 1.1, consultée 24/07/2026 | ajouter dépendances, RTO/RPO propres au service et preuve datée |
| ASVS 5.0 est un référentiel, pas une certification | confirmé | [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/) | version 5.0.0 publiée 30/05/2025 ; page consultée 24/07/2026 | garder, donner un exemple de contrôle vérifiable plutôt que le sigle seul |
| Le retour navigateur ne prouve pas un paiement réconcilié | confirmé pour Checkout | [Stripe subscriptions Checkout](https://docs.stripe.com/payments/checkout/build-subscriptions) | si Stripe est utilisé ; docs consultées 24/07/2026 | expliciter webhook/événement, renouvellement échoué et propriétaire de la réconciliation |
| Externaliser les cartes ne supprime pas toute responsabilité PCI | confirmé et à préciser | [PCI SSC FAQ 1092](https://www.pcisecuritystandards.org/faqs/1092/) | marchand qui externalise ; responsabilités fournisseur, accord écrit, suivi et validation restent | remplacer le raccourci par obligations précises, sans prétendre déterminer le SAQ |
| WCAG 2.2 donne des critères techniques, pas à elle seule le droit français | confirmé | [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/) | recommandation internationale ; consultée 24/07/2026 | garder et demander test clavier/focus/erreurs avec périmètre |
| « le manuel devient dangereux si… » | plausible, non quantifié | doctrine opérationnelle, pas étude | dépend de la donnée, du risque et du volume | reformuler en critères observables : personne unique, accès direct, absence de journal ou dépassement de charge |

### Contradictions à corriger

- Le guide dit à juste titre que tout dépend du contexte, mais l'expression
  « socle qui ne peut pas être improvisé » doit être suivie de critères de risque
  pour éviter qu'un lecteur entende « authentification complexe et paiement
  automatique pour tout le monde ».
- La source listée « consultée le 20 juillet » est antérieure à l'audit du
  24 juillet ; revalider et dater la version avant toute republication.
- `src/lib/guides.ts` porte `dateModified: "2026-07-21"` pour ce slug ; cette date
  ne doit pas rester après une réécriture ultérieure.

### Faits à retirer plutôt qu'à affaiblir

- aucun prix, délai ou taux de conversion présenté comme moyenne de marché sans
  source primaire et périmètre ;
- aucun « conforme RGPD/PCI/OWASP/WCAG », « sécurisé » ou « disponible » sans
  obligation, version, périmètre, test et preuve ;
- aucun chiffre de la page concurrente DesignRevision ;
- le nombre fictif de 27 demandes doit rester explicitement fictif et ne jamais
  devenir un cas client ou une moyenne.

## 6. Scénarios et calculs à construire

Les chiffres ci-dessous sont des hypothèses pédagogiques à remplacer par les
données du projet. Ils ne sont ni tarifs Hagnéré Code, ni délais promis, ni
statistiques de marché. Leur intérêt est de rendre visible la décision.

| Variable | Simple : pilote accompagné | Central : première version B2B | Exigeant : libre-service et données sensibles | Hypothèse à confirmer |
| --- | ---: | ---: | ---: | --- |
| Organisations sur l'horizon | 1 | 3 à 5 | 10+ ou engagements contractuels | contrat et acquisition réels |
| Tâches métier de bout en bout | 1 | 1 à 2 | 2+ avec rôles et reprise | résultat vendu |
| Opérations manuelles | compte, import, facture, aide | import + onboarding + réconciliation | secours limité, procédures outillées | propriétaire et charge |
| Temps interne illustratif | 8 h de préparation + 2 h/mois | 24 h de préparation + 4 h/client/mois | 40 h de préparation + 2 h/client/mois | journal d'activité |
| Coût interne illustratif à 60 €/h | 8×60 + 2×60×6 = **1 200 € sur 6 mois** | 24×60 + 4×3×60×6 = **5 760 € sur 6 mois** | 40×60 + 2×10×60×12 = **16 800 € sur 12 mois** | taux chargé choisi par l'entreprise |
| Critère de sortie | un client obtient le résultat et accepte l'essai | trois parcours répétables, charge mesurée, droits/export/restore testés | tests par organisation, paiement réconcilié, continuité et support transmissible | à écrire avant le code |
| Ce qui n'est pas inclus par défaut | SSO, API publique, mobile, trois plans | marque blanche, dix rôles, reporting avancé | conformité sectorielle, SLA 24/7, haute disponibilité | dépend du contrat et du risque |

**Formule :** `coût de fonctionnement = heures de préparation × taux interne +
(heures par client × nombre de clients × fréquence × mois) × taux interne`.

**Horizon :** six mois pour un pilote et une première version ; douze mois pour
un service ouvert, afin d'inclure support, renouvellement et restauration.

**Inclus :** temps de l'équipe du porteur, opérations manuelles, support et
réconciliation explicitement listés. **Exclus :** coût de développement, TVA,
hébergement, outils tiers, coût commercial et coût d'un incident ; les ajouter
séparément au devis ou au business case.

**Coût du mauvais périmètre (exemple) :** si une automatisation repoussée trop
longtemps consomme 6 h/semaine pendant 13 semaines, à 60 €/h, le coût interne
est `6 × 13 × 60 = 4 680 €`, avant même la perte de délai ou la frustration
client. Si l'automatisation coûte moins que cette charge, elle mérite une
étude ; si elle ne réduit pas le risque ou le temps, elle ne mérite pas d'être
ajoutée par réflexe.

**Analyse de sensibilité :** le scénario central passe de 5 760 € à 9 360 € si
le support atteint 6 h/client/mois (`24×60 + 6×3×60×6`). Le nombre de clients,
le temps par client et le taux interne sont donc les variables qui font basculer
le choix, pas le nombre de cartes dans le menu.

**Contrôle inverse :** diviser le coût annuel de l'opération manuelle par le
coût réellement proposé de l'automatisation ; si le résultat dépend surtout de
la sécurité, des droits, d'un engagement contractuel ou d'une erreur coûteuse,
le seul calcul horaire ne suffit pas.

## 7. Comparaison et position professionnelle

### Options réellement comparables sur le même parcours

| Option | Ce qu'elle permet de tester | Coût/risque dominant | Quand elle gagne | Verdict professionnel |
| --- | --- | --- | --- | --- |
| Outil existant acheté | valeur et processus métier sans développement | adaptation, export, dépendance fournisseur | le besoin est standard et le client accepte le processus | toujours vérifier avant de coder |
| Pilote manuel | problème, résultat, données et vocabulaire | dépendance au fondateur, charge cumulée | 1 client, données contrôlées, hypothèse encore incertaine | meilleur premier test si la procédure est journalisée |
| No-code/low-code | parcours court et itératif | limites d'accès, coût récurrent, migration | schéma simple, faible risque, besoin de changer vite | bon moyen d'apprendre, pas une garantie de sécurité ou d'échelle |
| SaaS sur mesure resserré | contrôle du parcours, rôles et données nécessaires | investissement initial et responsabilité d'exploitation | résultat différenciant déjà confirmé, client réellement accessible | choix fréquent après le pilote, avec périmètre écrit |
| Libre-service complet dès le jour 1 | acquisition sans accompagnement, paiement et self-service | auth, dunning, support, observabilité, abuse, sécurité | volume attendu et capacité support déjà financée | déconseillé tant que ces responsabilités n'ont pas de propriétaire |

**Périmètre commun :** une organisation, un parcours de valeur, six mois (ou
douze pour self-service), même taux interne, mêmes exigences de données. Les
prix de prestataires vus dans la SERP ne sont pas comparables sans ces éléments.

**Position Hagnéré Code :** pour le cas fréquent du dirigeant qui dispose d'un
premier client B2B mais pas encore d'une preuve répétée, commencer par le test
le moins coûteux qui conserve les données et permet un verdict. Si la promesse
est confirmée et que la charge/risque dépassent le seuil écrit, construire un
SaaS resserré ; ne pas vendre un back-office, un mobile, un SSO ou une
facturation complexe simplement parce que le client les imagine.

**Cas où l'option opposée gagne :** secteur réglementé, données très sensibles,
contrat exigeant une traçabilité ou une disponibilité précise, multi-organisation
dès le premier jour, ou achat d'un outil standard qui fournit déjà résultat,
export et support. Dans ces cas, le pilote manuel peut être irresponsable et un
produit existant ou une architecture plus robuste gagne.

**Ce que nous déconseillons même si nous pourrions le vendre :** une version
« complète » sans client accessible, une promesse de conformité tirée d'une
checklist, ou un libre-service dont personne ne réconcilie les paiements,
incidents, droits et demandes de sortie.

## 8. Objections et cas limites

| Objection loyale | Réponse prouvée | Incertitude restante | Conséquence |
| --- | --- | --- | --- |
| « Un pilote manuel n'est pas professionnel. » | Il peut être professionnel si responsable, procédure, limite, journal, export et support sont définis ; `page.tsx:623-673`. | la charge et le risque doivent être mesurés | choisir pilote accompagné et date de revue, pas cacher le manuel |
| « Mon premier client exige le SSO et trois rôles. » | le guide classe une capacité selon le contrat et les risques, pas selon un nombre magique ; `:983-996`. | obligation exacte, fournisseur d'identité et population | reclasser en maintenant, chiffrer, tester ou refuser l'engagement |
| « Stripe règle la facturation. » | Stripe documente Checkout, mais PCI rappelle que le marchand garde des responsabilités ; le retour navigateur ne suffit pas | contrat acquéreur, taxes, factures et événements utilisés | écrire états, webhooks, dunning, droits et responsable |
| « Nous avons une sauvegarde verte. » | ANSSI demande stratégie, dépendances et restauration testée | RTO/RPO et périmètre à choisir | dater une restauration isolée et conserver sa preuve |
| « Les données sont chiffrées, donc anonymes. » | le guide dit correctement que chiffrement et anonymisation ne sont pas équivalents (`:816-819`) | qualification juridique dépend du contexte | faire qualifier données, base légale, durée et accès |
| « Il faut tout construire pour convaincre le marché. » | une fonction ne vaut que si elle sert l'hypothèse, le résultat ou le plancher d'exploitation | demande future non prouvée | transformer la demande en contrat, test ou déclencheur avant de l'ajouter |
| « Nous n'avons qu'une démo et des compliments. » | l'encadré `:407-419` renvoie à la validation de l'idée | engagement réel et accès utilisateur manquent | ne pas appeler cela MVP de production |
| « Nous devons lancer à tous les prospects. » | six vérifications et un essai accompagné réduisent l'exposition (`:999-1138`) | capacité de support et plan d'incident | limiter l'ouverture jusqu'aux critères de sortie |

## 9. Plan de réécriture localisable

| Ordre | Section proposée | Question résolue | Preuve, scénario ou outil | Décision produite | Action |
| ---: | --- | --- | --- | --- | --- |
| 1 | Introduction « premier client, budget, responsabilité » (`:348-419`) | pourquoi ce guide et pour qui ? | phrase cible + distinction validation/MVP + annonce de trois scénarios | poursuivre ou revenir à validation | conserver l'ouverture, ajouter budget interne et mode de vente |
| 2 | « Une fonction n'est pas un service » (`:445-552`) | que signifie minimum viable ? | prototype/POC/pilote/MVP avec question, données et sortie | format le moins coûteux | conserver, simplifier les parenthèses, expliciter coût de l'erreur |
| 3 | Checklist à sept couches (`:554-575`) | que doit couvrir une première version ? | chaque ligne reçoit construire/manual/acheter/report + propriétaire | fiche de périmètre | conserver l'artefact, ajouter conservation/suppression, restauration par organisation |
| 4 | « Le manuel a un prix » (`:577-732`) | quand automatiser ? | formule heures × taux × horizon + 1 200/5 760/16 800 € illustratifs | seuil d'automatisation | conserver exemples, créer une mini-feuille de calcul copiable |
| 5 | Vente et responsabilités (`:733-886`) | comment vendre sans fausse sécurité ? | tableau contrat/assisted/self-service ; PCI/Stripe/CNIL/ANSSI | mode de vente et propriétaires | ajouter renouvellement/impayé/webhook, base légale, DPA, RTO/RPO, logs et alertes |
| 6 | Mesurer une décision (`:888-997`) | quelles observations valent un lot 2 ? | résultat, délai, aide, erreurs, répétition, charge ; scénario fictif | corriger/automatiser/arrêter | garder 27 demandes, ajouter horizon, seuils propres au projet et intervalle de confiance verbal |
| 7 | Go/no-go et fiche client (`:999-1138`) | puis-je donner de vraies données ? | six tests avec attendu/observé/auteur/date + critères de sortie | lancer, piloter, reporter, acheter | ajouter critères quantifiés *propres au projet*, pas seuils universels |
| 8 | Conclusion/CTA (`:1140-1170`) | quelle prochaine action ? | aperçu de la fiche livrée par Hagnéré Code, ressource copiable | demander un cadrage ou ne pas développer | conserver honnêteté, montrer les livrables et responsabilités |
| 9 | Sources (`:1172-1283`) | que peut-on vérifier ? | date 24/07, URL primaires, limites par juridiction | confiance calibrée | revalider toutes les sources et `dateModified` après correction |

### Contrat des 150 premiers mots

Le texte à viser doit dire : « Vous avez un premier client, mais vous ne savez
pas si votre MVP doit contenir le paiement, le SSO, l'import, le mobile ou un
back-office. Dans cet article, vous allez classer chaque capacité selon le
résultat promis, la charge que votre équipe accepte et le risque des données.
Vous verrez trois scénarios — pilote, première version B2B, libre-service — avec
un calcul illustratif du temps interne. À la fin, vous saurez quoi construire,
faire à la main, acheter ou repousser, et avec quels tests autoriser le premier
client. Ce n'est ni un avis juridique ni un prix de marché. »

### À supprimer ou déplacer

- toute phrase qui pourrait être lue comme une obligation universelle de
  paiement, SSO, mobile, sauvegarde ou conformité ;
- les formulations qui répètent « complet » sans rendre le critère testable ;
- les dates de sources périmées après revalidation ;
- toute future fourchette de prix de concurrent sans périmètre commun.

### À conserver absolument

- la journée du premier client ;
- le classement construire/manuel/intégrer/report ;
- le cas fictif explicitement signalé ;
- les incidents, la restauration et la possibilité de « ne pas développer » ;
- la contre-indication commerciale qui protège le lecteur.

## 10. Contre-audit après correction

Ce contre-audit n'est pas encore exécuté : aucun fichier guide ou code n'a été
modifié dans cette passe. Il devra être rempli après réécriture et nouvelle
navigation indépendante.

| Problème | Priorité | Correction attendue | Revalidation indépendante |
| --- | --- | --- | --- |
| P1-01 — absence de scénarios et coût du mauvais périmètre | P1 | trois scénarios + formules + sensibilité, hypothèses explicites | refaire les calculs, vérifier unités/horizon/inclus/exclus |
| P1-02 — go/no-go qualitatif | P1 | critères propres au projet, propriétaire, date et preuve | relire avec un dirigeant non technique et tenter une décision |
| P1-03 — responsabilités paiement/RGPD/continuité trop condensées | P1 | états de paiement, conservation/base légale/DPA, dépendances/RTO-RPO | rouvrir Stripe, PCI, CNIL, RGPD, ANSSI et vérifier chaque lien |
| P1-04 — séparation multi-organisation et support | P1 | tests comportementaux, export/suppression/restauration, audit des interventions | cas A/B + demande de sortie + incident simulé |
| P1-05 — fraîcheur et registre | P1 | sources revalidées, `dateModified` synchronisée, manifest mis à jour après texte | `git diff`, extraction date, audit source/date |
| P2-01 — CTA et ressource | P2 | fiche chiffrée copiable et aperçu du livrable de cadrage | vérifier qu'une demande peut être envoyée sans promesse trompeuse |
| P2-02 — architecture et responsive | P2 | conserver layout si aucun débordement ; n'ajouter que les preuves utiles | navigateur aux cinq largeurs, clavier, focus, erreurs |

### Score après correction cible

| Axe | Cible /10 | Condition de passage |
| --- | ---: | --- |
| Intention | 9 | contrat des 150 mots lisible par un dirigeant |
| Décision | 9 | scénarios et porte go/no-go actionnable |
| Pédagogie | 9 | chaque terme expliqué au moment où il sert |
| Profondeur | 9 | exploitation, données, paiement et continuité testables |
| Preuve | 9 | sources primaires fraîches, bornées et proches des affirmations |
| Comparaison | 9 | achat/pilote/no-code/sur-mesure sur même horizon |
| Originalité | 9 | coût de l'opération manuelle + journée conservés |
| Style | 9 | humain, précis, sans faux absolus |
| Conversion | 9 | CTA utile, contre-indication et livrables visibles |
| SEO/produit | 9 | dates synchronisées, JSON-LD autorisé, QA réelle et statut explicite |

**Seuil : 90/100 et aucun axe sous 8.** La cible ne sera déclarée atteinte
qu'après une nouvelle lecture humaine, une nouvelle vérification des sources et
un test local indépendant.

## 11. Preuves techniques et visuelles

```text
Manifeste : src/lib/guides.ts entrée `mvp-saas-quoi-inclure`, non modifiée dans cet audit.
Calculs refaits : 4 411 mots visibles dans `main` ; lecture annoncée 20 min, cohérente à titre indicatif mais à revalider après toute réécriture.
Sources rouvertes : Eric Ries, GOV.UK, RGPD, CNIL, ANSSI v1.1, OWASP ASVS, Stripe Checkout subscriptions, PCI SSC FAQ 1092, W3C WCAG 2.2, le 24/07/2026.
Liens vérifiés : page locale, `/robots.txt` et `/sitemap.xml` répondent HTTP 200 ; les liens internes doivent être relancés après modification.
Commandes : `curl -sS -o /dev/null -w '%{http_code}'` sur page/robots/sitemap ; extraction JSON-LD ; `rg` sur registre ; inspection `page.tsx` et dossier de recherche.
Rendu 320 / 390 / 768 / 1024 / 1440 : HTTP local, 1 H1, CTA visible, aucun débordement horizontal, aucune table/pre/code tronqué aux cinq largeurs ; logs navigateur error/warning vides.
Image sociale : une image OG est déclarée dans le manifeste ; aucun défaut visuel n'a été observé, mais l'image doit être ouverte si le composant change.
Statut maximal prouvé : audit local et code source inspectés ; pas de preuve de build complet, déploiement production, traitement sitemap ou indexation Google dans cette passe.
Réserve publication/indexation : le `noindex, nofollow` local est attendu par l'environnement ; ne pas le confondre avec un état de production. Vérifier canonical, robots, sitemap et URL déployée après merge.
```

### Empreintes du snapshot contrôlé

```text
src/app/guides/mvp-saas-quoi-inclure/page.tsx
  8f3b4bb5f66e54b60656cc97afb9e52d267626b482771c37a946c35ce1cba4ce
src/lib/guides.ts
  8663e6e84352121ec854393e049492a1c2b72f242166141e5d31e0911b43cb09
docs/research/mvp-saas-quoi-inclure.md
  305cd25d2667020f0f8971f34c3976b56be27c3adac3708db4c3d410c96c87f1
docs/charte-qualite-guides.md
  5ee616faa4959dc8ad2b0eb19a5b19ffbf53299b62665700093c5c176b0b8491
docs/workflow-maitre-guides-4-passes.md
  91f6caabd28fdf90c33198594894955d175871d218987457af3a7aff5d593631
docs/regle-or-vigilance-seo-publication.md
  6109eec7f4b0cfedeffe8bd92efe0d5db31d4360d51dd8b7ebbd2b9bdc43a7f6
```

Ce rapport est un audit P3 autonome ; il ne prétend ni avoir corrigé la page,
ni avoir publié, déployé ou obtenu une indexation. La prochaine passe doit
modifier le guide uniquement après décision du parent et respecter le workflow
P1/P2/P3/P4 sans écraser les changements parallèles.
