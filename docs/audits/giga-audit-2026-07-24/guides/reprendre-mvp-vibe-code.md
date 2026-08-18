# Giga-audit — « Reprendre un MVP créé avec Lovable, Bolt ou v0 »

**Date :** 24 juillet 2026  
**Mode :** audit renforcé en lecture seule  
**Route :** `/guides/reprendre-mvp-vibe-code`  
**Page SHA-256 :** `92711d6f5020bd5a210c36e17f1adbcb284d15412fd2241a3779c59799e68925`  
**Image sociale SHA-256 :** `a6379051f1108d40d8e93995b17b01ddc247c9b0fba0039deb3c642170d8a01d`  
**Recherche SHA-256 :** `56b9d4b87bc70834b389e5a267540481be9121f8893d474d00e690453ebe6ad8`  
**Registre SHA-256 au début de l’audit :** `833a303c150d4da4b0431c9a22b1a5b097313c3a0971139e96039a197e22b4c2`  
**Volume contrôlé :** 1 103 lignes et environ 4 918 mots dans `page.tsx` ; 373 lignes et environ 4 749 mots dans le dossier de recherche.  
**Limite :** audit source, documentaire, factuel, économique et concurrentiel. Aucun accès à un projet Lovable/Bolt/v0, aucune clé, donnée réelle, construction, restauration, attaque contrôlée, déploiement, consultation juridique, nouveau build du site ou contrôle d’indexation.

> Un dépôt qui compile n’est pas encore un produit reprenable. La preuve
> complète doit relier le code qui a produit le déploiement, les données qui
> peuvent être restaurées, les droits qui isolent les utilisateurs, les
> comptes que l’entreprise contrôle et le coût d’exploitation de la solution.

## 1. Verdict exécutif

Ce guide possède une excellente thèse, rare dans la concurrence : ne pas
condamner un MVP parce qu’il a été généré avec l’IA et ne pas le déclarer
exploitable parce qu’un ZIP ou un dépôt existe. Il demande cinq preuves
exécutées — reconstruire, redéployer, restaurer, tester les droits, inventorier
les comptes — puis autorise cinq décisions : conserver, stabiliser, migrer,
réécrire ou arrêter. La plume parle à un dirigeant et traduit les termes
techniques au moment où ils deviennent utiles.

Les distinctions entre code, hébergement, base, fichiers, utilisateurs,
services externes et exploitation sont solides. Le guide explique correctement
qu’un rollback du code ne restaure pas la base, qu’un backup Supabase n’inclut
pas les objets Storage, qu’une exportation d’utilisateurs ne transporte pas
nécessairement leurs mots de passe et qu’un secret découvert doit être remplacé.
Il préserve aussi l’option de rester sur la plateforme : prouver la sortie ne
signifie pas qu’il faut sortir.

La page reste pourtant incomplète pour servir de référence mondiale de reprise.
Les cinq preuves sont un très bon filtre initial, pas un audit de production.
Elles ne couvrent pas encore la composition logicielle et les licences, le
pipeline de construction, la provenance d’un artefact, les migrations de
schéma, fonctions, tâches, files, webhooks, intégrations, journaux, surveillance,
performance, charge, accessibilité, confidentialité, RGPD, réponse à incident,
RPO/RTO, continuité et support. Trois comptes manuels ne remplacent pas une
matrice d’autorisations et un référentiel de sécurité versionné.

La décision économique reste entièrement ouverte. Le guide demande les travaux
ponctuels et abonnements sans fournir de scénario TCO 12/36/60, de coût de
panne, de capacité d’équipe, de coût de migration ou de seuil à partir duquel
réécrire devient rationnel. Son benchmark ne comprend que quatre pages
francophones ou éditeurs. Les anciens P3/P4 ont produit une page propre, mais
ils ne ferment pas les nouvelles portes internationales, économiques,
opérationnelles et de sécurité.

**Score actuel : 86/100 — NO-GO au standard renforcé tant que quatorze P1 restent ouverts.**

- **P0 : 0** — aucune erreur critique ou recommandation manifestement
  dangereuse démontrée.
- **P1 : 14** — inventaire, reproductibilité, données, sécurité, production,
  conformité, économie, migration, benchmark et nouvelles portes.
- **P2 : 9** — enrichissements utiles après fermeture des blocages.

## 2. Scorecard

| Axe | Note /10 | Justification |
| --- | ---: | --- |
| Intention | 10 | La reprise est une décision prouvée, pas un jugement esthétique sur du code IA. |
| Décision | 10 | Conserver, stabiliser, migrer, réécrire ou arrêter. |
| Pédagogie | 10 | Les couches et preuves sont traduites sans infantiliser. |
| Profondeur | 8 | Excellent triage ; production, supply chain, données et conformité restent partiels. |
| Preuve | 9 | Documentation éditeur proche des faits ; standards indépendants et exécution réelle manquent. |
| Comparaison | 8 | Cinq options nommées ; aucun cas égal, TCO ou seuil. |
| Chiffrage | 5 | La page refuse sainement les faux prix, mais ne calcule aucune décision économique. |
| Risques et exploitation | 9 | Secrets, droits, données, comptes et rollback présents ; SLO, incident, continuité et sécurité complète manquent. |
| Conversion | 9 | Audit borné, première preuve et option simple ; livrable à rendre plus contractuel. |
| SEO et expérience | 8 | FAQ, sources, maillage et OG présents ; QA renforcée à rejouer. |
| **Total** | **86/100** | **Guide de triage exceptionnel, pas encore dossier complet de reprise.** |

## 3. Forces à sanctuariser

### Le refus des deux extrêmes

- « tout est à refaire » n’est pas une preuve ;
- « le code est disponible » n’est pas une preuve ;
- une erreur observée vaut plus qu’une opinion générale ;
- l’usage réel du produit reste une condition de la reprise ;
- arrêter est une décision possible.

### Les huit couches

Le découpage code, installation, hébergement, base, fichiers, utilisateurs,
services externes et exploitation rend enfin visible ce qu’un export ne
contient pas. Il doit rester l’ossature de l’inventaire.

### Les cinq preuves

1. installation et construction isolées ;
2. déploiement d’une copie ;
3. restauration et lecture de données/fichiers ;
4. vérification des droits avec plusieurs comptes ;
5. inventaire des comptes, contrats, clés et licences.

Ces preuves sont exécutables et ont plus de valeur qu’un score propriétaire.

### Les limites bien formulées

- un scanner n’est pas une certification ;
- un CSV n’est pas une restauration ;
- un rollback du code ne restaure pas automatiquement les données ;
- un export Git n’emporte pas domaine, variables, déploiement ou base ;
- pouvoir quitter une plateforme n’oblige pas à la quitter ;
- attaque, litige de propriété et récupération de compte exigent un autre
  premier intervenant.

## 4. Vérification factuelle

### v0 et GitHub

La documentation v0 consultée le 24 juillet 2026 confirme qu’un dépôt GitHub
connecté devient la source de vérité du code et que v0 ne conserve pas alors
une copie séparée. Elle confirme aussi qu’un Project agrège déploiements,
domaines, variables et intégrations. La page a raison de ne pas réduire le
projet au dépôt.

### Supabase

- Les backups de base n’incluent pas les objets Storage, seulement leurs
  métadonnées.
- Restaurer une base ne recrée donc pas un objet supprimé du stockage.
- Les nouvelles secret keys et les anciennes `service_role` sont des clés à
  privilèges élevés destinées aux composants backend ; elles contournent les
  politiques RLS.
- Les nouveaux mécanismes peuvent refuser certains usages depuis un navigateur,
  mais une clé exposée reste exploitable avec d’autres clients. La consigne
  « jamais côté navigateur » reste justifiée.

La page doit toutefois actualiser le vocabulaire `publishable/secret` et
`anon/service_role` pour ne pas figer uniquement les anciennes clés.

### npm

`npm ci` exige un lockfile cohérent et peut exécuter des scripts. L’isolement
avant installation est donc une bonne consigne. Une construction réussie ne
prouve ni la sécurité du package, ni la logique métier, ni la licence.

### Plateformes mouvantes

Les intégrations, architectures et modalités d’export de Lovable, Bolt, v0,
Vercel et Supabase peuvent changer rapidement. La mention très précise de
TanStack Start et du 13 mai 2026 doit être rouvrte le jour de chaque
publication. Le nom de la plateforme ne permet jamais de déduire la stack
réelle du dépôt.

## 5. Quatorze P1 à fermer

### P1-01 — Produire l’inventaire complet

Ajouter, pour chaque couche :

- actif et propriétaire ;
- compte, organisation et administrateurs ;
- environnement développement/test/production ;
- région et hébergeur ;
- dépendance, version et fin de support ;
- format d’export ;
- sauvegarde/restauration ;
- responsable et délai de reprise ;
- contrat, licence, facture et mode de récupération ;
- preuve exécutée et résultat.

### P1-02 — Relier source, build et artefact

Un clone et un `npm ci` ne suffisent pas. Documenter commit, lockfile, runtime,
variables attendues sans secrets, migrations, commande, tests, artefact,
pipeline CI/CD, signature/provenance si disponible, approbation et déploiement.
Le NCSC recommande notamment de pouvoir relier le logiciel déployé au code
source qui l’a produit.

### P1-03 — Auditer la supply chain et les licences

Inventorier dépendances directes/transitives, versions, mainteneurs, paquets
abandonnés, alertes, vulnérabilités, composants copiés, polices, images et
licences. Produire un SBOM ou inventaire équivalent et un plan de mise à jour.
Un `npm audit` isolé ne ferme pas cette porte.

### P1-04 — Restaurer tout le modèle de données

Tester :

- schéma, contraintes et relations ;
- migrations et données de référence ;
- fonctions, triggers et extensions ;
- politiques RLS ;
- utilisateurs et fournisseurs d’identité ;
- Storage, métadonnées et droits ;
- tâches planifiées, queues et workers ;
- webhooks, e-mails et paiements ;
- imports/exports et réconciliation.

Le résultat doit comparer nombre, totaux, relations, échantillons et erreurs.

### P1-05 — Définir RPO, RTO et continuité

Nommer la perte de données acceptable, le délai de retour, la durée maximale
d’interruption, la fréquence des backups, leur rétention, leur région et la
dernière restauration réussie. Tester une copie et enregistrer la durée. « Un
backup existe » n’est pas un objectif de continuité.

### P1-06 — Passer d’un test de trois comptes à une matrice d’accès

Construire rôles × ressources × actions × états. Tester accès horizontal,
vertical, API, fichiers, exports, administration, suppression, désactivation,
session, invitation et tenant. Utiliser un référentiel versionné, par exemple
OWASP ASVS 5.0 avec identifiants précis, sans prétendre qu’un scan automatique
équivaut à la vérification.

### P1-07 — Vérifier la logique métier

Rejouer les parcours qui créent une dette ou un droit :

- inscription et invitation ;
- paiement, webhook, remboursement et doublon ;
- changement de rôle ;
- import/export ;
- fichier privé ;
- abonnement et résiliation ;
- e-mail transactionnel ;
- action simultanée ;
- échec partiel et reprise.

Inclure idempotence, autorisation, journal et réconciliation.

### P1-08 — Tester production et observabilité

Ajouter performance, montée en charge proportionnée, quotas, disponibilité,
alertes, logs, traces, métriques, erreurs utilisateur, rétention, astreinte ou
escalade, patchs et incidents. Lancer une copie ne prouve pas que l’équipe sait
exploiter le service à 2 h du matin ou après une hausse de trafic.

### P1-09 — Couvrir RGPD, contrats et données

Qualifier responsables/sous-traitants, DPA, sous-traitants ultérieurs,
transferts, finalités, catégories, bases, information, droits, conservation,
suppression, violations et sécurité. Inventorier CGU, confidentialité,
consentement et licences. Faire intervenir DPO ou avocat lorsque la situation
le nécessite. Les conditions Vercel ne suffisent pas à établir les droits sur
un produit complet.

### P1-10 — Comparer cinq trajectoires à périmètre égal

Pour conserver, stabiliser, migrer, réécrire ou arrêter, utiliser le même
dossier :

- usages préservés ;
- données et interruptions ;
- travaux et dépendances ;
- risques ouverts ;
- délai et capacité ;
- coûts ponctuels/récurrents ;
- rollback ;
- sortie ;
- preuve de fin.

### P1-11 — Calculer TCO et coût de panne

Inclure licences/consommation, développement, revue, hébergement, base,
stockage, e-mail, paiement, logs, support, sécurité, conformité, sauvegarde,
restauration, incident, temps interne et sortie. Comparer 12/36/60 mois et
faire varier utilisateurs, stockage, trafic, e-mails, exécutions IA et
transactions.

### P1-12 — Écrire une migration progressive et son rollback

Définir propriétaire des écritures, synchronisation, gel, delta, validation,
coexistence, bascule, nouvelles écritures après bascule, retour arrière,
réconciliation, communication et hypercare. Une migration de données n’est pas
un simple export/import.

### P1-13 — Établir le benchmark international

Le dossier P1 actuel ne couvre que quatre pages de marché. Ajouter France,
États-Unis, Royaume-Uni, Australie et DACH avec NIST SSDF, OWASP ASVS/DSOVS,
NCSC, ACSC et BSI ou équivalents officiels. Les éditeurs restent sources de
capacités propres, pas juges de sécurité.

### P1-14 — Rejouer P3 et P4

Les anciens rapports 20/20 ont validé la page selon le processus précédent.
Ils ne couvrent pas les treize portes ci-dessus. Après correction, un autre
agent doit refaire faits, calculs et contrôles, puis un intervenant distinct
doit tester plume, build, HTML, liens, responsive, image sociale, route et
ressource sur le snapshot gelé.

## 6. Modèle économique à intégrer

### Cas commun fictif

SaaS B2B utilisé par 40 entreprises, 600 comptes, 80 000 documents, Stripe,
e-mail transactionnel, Supabase et un hébergement web. Valeurs strictement
illustratives, pas prix de marché.

| Trajectoire | Mise en place | Run annuel | TCO 12 mois | TCO 36 mois | TCO 60 mois |
| --- | ---: | ---: | ---: | ---: | ---: |
| Stabiliser sur stack actuelle | 28 000 € | 24 000 € | 52 000 € | 100 000 € | 148 000 € |
| Migrer progressivement | 75 000 € | 30 000 € | 105 000 € | 165 000 € | 225 000 € |
| Réécrire puis migrer | 145 000 € | 34 000 € | 179 000 € | 247 000 € | 315 000 € |
| Arrêt organisé / export | 22 000 € | 4 000 € d’archivage | 26 000 € | 34 000 € | 42 000 € |

```text
Stabiliser 36 mois = 28 000 + 3 × 24 000 = 100 000 €
Migrer 60 mois     = 75 000 + 5 × 30 000 = 225 000 €
Réécrire 36 mois   = 145 000 + 3 × 34 000 = 247 000 €
Arrêter 60 mois    = 22 000 + 5 × 4 000 = 42 000 €
```

Ces options n’ont de sens qu’avec les mêmes usages et exigences. L’arrêt doit
inclure coûts de remplacement, obligations de conservation et impact métier ;
sinon il paraît artificiellement peu cher.

### Coût d’une panne

```text
Coût observable de l’incident
= heures improductives × personnes × coût horaire chargé
+ marge réellement perdue
+ rattrapage
+ prestataires et communication
+ pénalités ou remboursements applicables
```

Exemple fictif :

```text
8 h × 25 personnes × 42 € = 8 400 €
20 ventes différées/perdues × 180 € de marge = 3 600 €
Intervention et rattrapage = 4 000 €
Total observable = 16 000 €
```

Ce total ne valorise pas automatiquement réputation, contentieux ou churn. Il
permet de comparer 16 000 € de perte observable à une dépense de continuité
sans inventer un risque illimité.

### Seuil réécrire/stabiliser

```text
Surcoût réécriture à 36 mois
= 247 000 - 100 000
= 147 000 €

La réécriture ne devient économiquement défendable que si elle réduit des
coûts/risques ou crée une marge prudente supérieure à ce surcoût, avec une
probabilité, un calendrier et un plan de migration explicités.
```

## 7. P2 à planifier

1. transformer le dossier copiable en classeur téléchargeable ;
2. fournir une matrice rôles/ressources/actions vierge ;
3. ajouter un onglet inventaire des services et propriétaires ;
4. ajouter un onglet TCO 12/36/60 et sensibilité usage ;
5. publier un exemple rempli anonymisé/fictif ;
6. ajouter un glossaire RPO, RTO, tenant, RLS, SBOM, CI/CD, webhook, idempotence ;
7. dater chaque vérification d’éditeur et prévoir son expiration ;
8. préciser format, durée et exclusions de l’audit Hagnéré Code ;
9. tester le pack dans un vrai dossier de reprise non sensible.

## 8. Benchmark France et international

| Marché / source | Angle utile | À reprendre | Limite |
| --- | --- | --- | --- |
| France — Noxcod, Shenrard, Algomax | reprise, prototype→production, risques | conserver les questions de transfert | vendeurs, fourchettes non transposables |
| Éditeurs — Lovable, Bolt, v0, Vercel, Supabase | capacités et limites du produit | maintenir la fraîcheur factuelle | juge de son produit, pas audit indépendant |
| États-Unis — [NIST SSDF](https://csrc.nist.gov/Projects/ssdf) | pratiques de développement sécurisé et chaîne de preuve | structurer reprise et exigences | cadre, pas audit du projet |
| International — [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/) | exigences testables de sécurité applicative | versionner la matrice de vérification | ne couvre pas toute l’exploitation |
| International — [OWASP DSOVS](https://owasp.org/www-project-devsecops-verification-standard/) | pipeline et maturité DevSecOps | auditer le processus de livraison | ne prouve pas la logique métier |
| Royaume-Uni — [NCSC secure development](https://www.ncsc.gov.uk/collection/developers-collection) | repository, build, dépendances, tests, défauts | relier code et artefact | guidance UK, non certification |
| Royaume-Uni — [NCSC cloud principle 7](https://www.ncsc.gov.uk/collection/cloud/the-cloud-security-principles/principle-7-secure-development) | séparation, CI/CD, supply chain, secrets | enrichir preuve de production | destiné à l’assurance cloud |
| Australie — ACSC secure-by-design et cloud guidance | gouvernance, vulnérabilités et fournisseurs | compléter exploitation | à rouvrir avant réécriture |
| DACH — BSI développement et cloud | exigences de sécurité et continuité | comparer les contrôles | contexte réglementaire distinct |

### Saturation

Les nouveaux résultats cessent d’ajouter des catégories après : actifs,
reproductibilité, supply chain, données, identité, tests métier, sécurité,
exploitation, conformité, économie, migration et sortie. La valeur suivante
vient d’une exécution sur un projet réel et non sensible, pas d’une liste
supplémentaire de plateformes.

## 9. Sources à maintenir

- [Lovable — GitHub](https://docs.lovable.dev/integrations/github),
  [déploiement externe](https://docs.lovable.dev/tips-tricks/external-deployment-hosting),
  [sécurité](https://docs.lovable.dev/features/security).
- [Bolt — fichiers projet](https://support.bolt.new/building/using-bolt/projects-files)
  et [intégration Supabase](https://support.bolt.new/integrations/supabase).
- [v0 — GitHub](https://v0.app/docs/github),
  [Projects](https://v0.app/docs/projects) et
  [Deployments](https://v0.app/docs/deployments).
- [Supabase — backups](https://supabase.com/docs/guides/platform/backups) et
  [clés API](https://supabase.com/docs/guides/getting-started/api-keys).
- [npm — `npm ci`](https://docs.npmjs.com/cli/commands/npm-ci/).
- [GitHub — secret scanning](https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning).
- [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/).
- [NCSC — Secure development](https://www.ncsc.gov.uk/collection/developers-collection).
- [NCSC — dépendances](https://www.ncsc.gov.uk/blogs/software-supply-chain-attacks-check-your-dependencies).

Chaque source éditeur doit être rouverte avant publication. Les versions,
fonctions, plans tarifaires et conditions ne sont pas des faits stables.

## 10. Plan de réécriture

| Ordre | Section | Question dirigeant | Dispositif | Décision |
| ---: | --- | --- | --- | --- |
| 1 | Réponse courte | faut-il tout refaire ? | cinq preuves actuelles | tester d’abord |
| 2 | Préserver | que ne faut-il surtout pas casser ? | gel, copie, comptes | urgence |
| 3 | Inventaire | de quoi le produit dépend-il ? | huit couches enrichies | périmètre |
| 4 | Code→artefact | peut-on reproduire la production ? | commit/build/CI/deploy | reprenable |
| 5 | Données | peut-on restaurer et réconcilier ? | matrice data | RPO/RTO |
| 6 | Accès/sécurité | un tenant voit-il l’autre ? | ASVS + matrice | risque |
| 7 | Usage réel | les fonctions critiques résistent-elles ? | parcours et échecs | valeur |
| 8 | Exploitation | qui détecte et répare ? | SLO/alertes/support | capacité |
| 9 | Droit/données | peut-on légalement exploiter/transférer ? | contrats/DPA/licences | avocat/DPO |
| 10 | Économie | stabiliser, migrer ou réécrire ? | TCO + panne | trajectoire |
| 11 | Migration | comment basculer et revenir ? | runbook | go/no-go |
| 12 | Dossier | que remet l’audit ? | kit téléchargeable | devis |

### Contrat des 150 premiers mots

> Votre MVP Lovable, Bolt ou v0 fonctionne, mais vous ne savez pas si une autre
> équipe peut le reprendre. Ne décidez pas de tout réécrire sur l’apparence du
> code, et ne concluez pas qu’il est exploitable parce qu’un ZIP ou un dépôt
> GitHub existe. Demandez d’abord cinq preuves : reconstruire la version exacte
> dans un environnement isolé, déployer une copie, restaurer les données et
> fichiers, tester les droits entre plusieurs comptes, puis inventorier les
> domaines, services, contrats, clés et licences. Dans ce guide, nous allons
> compléter ces preuves par le pipeline, les dépendances, les tests métier, la
> sécurité, les sauvegardes, le support et un TCO sur 12, 36 et 60 mois. Vous
> pourrez alors choisir entre conserver, stabiliser, migrer, réécrire ou
> arrêter. Aucun outil, scan ou score ne peut certifier seul la reprise ni la
> sécurité du produit.

## 11. Registre contradictoire

| ID | Défaut | Priorité | Correction | Revalidation |
| --- | --- | :---: | --- | --- |
| P1-01 | Inventaire incomplet | P1 | registre des huit couches | propriétaire |
| P1-02 | Source→build→artefact incomplet | P1 | chaîne et preuve | déploiement isolé |
| P1-03 | Supply chain/licences incomplet | P1 | SBOM, versions, plan | autre auditeur |
| P1-04 | Data restore trop étroit | P1 | schéma, jobs, auth, storage, réconciliation | restauration |
| P1-05 | RPO/RTO absents | P1 | objectifs et exercice | chronométrage |
| P1-06 | Autorisations non systématiques | P1 | matrice + ASVS versionné | tests |
| P1-07 | Logique métier incomplète | P1 | parcours/échecs/idempotence | recette |
| P1-08 | Production/observabilité incomplètes | P1 | SLO, alertes, capacité | exercice incident |
| P1-09 | RGPD/contrats/licences incomplets | P1 | dossier juridique/DPO | spécialiste |
| P1-10 | Trajectoires non égalisées | P1 | cas commun | revue décideur |
| P1-11 | TCO/coût panne absents | P1 | 12/36/60 + sensibilité | recalcul |
| P1-12 | Migration/rollback incomplets | P1 | runbook et réconciliation | répétition |
| P1-13 | International absent | P1 | FR/US/UK/AU/DACH | recherche distincte |
| P1-14 | Anciennes P3/P4 insuffisantes | P1 | nouvelles passes | hashes + preuves |
| P2-01 | Dossier non téléchargeable | P2 | classeur | test |
| P2-02 | Matrice rôles absente | P2 | onglet | sécurité |
| P2-03 | TCO non outillé | P2 | calculateur | recalcul |
| P2-04 | Exemple rempli absent | P2 | cas fictif | lecteur |
| P2-05 | Glossaire incomplet | P2 | huit termes | test humain |
| P2-06 | Fraîcheur éditeurs non pilotée | P2 | date d’expiration | veille |
| P2-07 | Livrable CTA insuffisamment borné | P2 | entrée/sortie/durée | conversion |
| P2-08 | Image/HTML/responsive à rejouer | P2 | QA | navigateur |
| P2-09 | Kit non testé sur dossier réel | P2 | pilote non sensible | retour utilisateur |

### Portes

```text
P1 — PRÉSENTE MAIS INCOMPLÈTE : excellente collecte éditeur ; standards,
     international, TCO, exploitation et conformité manquent.
P2 — À ENRICHIR : conserver les cinq preuves et la voix ; ajouter les
     dimensions manquantes sans catalogue technologique.
P3 — NON VALIDÉE AU STANDARD RENFORCÉ : aucune exécution réelle des preuves,
     aucun TCO ni contre-audit international n’est produit ici.
P4 — NON VALIDÉE AU STANDARD RENFORCÉ : le futur snapshot doit être relu,
     construit, rendu et testé indépendamment.
```

## 12. Preuves et reproductibilité

```text
Fichiers contrôlés :
  src/app/guides/reprendre-mvp-vibe-code/page.tsx
  src/app/guides/reprendre-mvp-vibe-code/opengraph-image.tsx
  docs/research/reprendre-mvp-vibe-code.md
  docs/research/manifests/reprendre-mvp-vibe-code-p1.sha256
  docs/research/manifests/reprendre-mvp-vibe-code-p2.sha256
  docs/research/manifests/reprendre-mvp-vibe-code-p3.sha256
  docs/research/manifests/reprendre-mvp-vibe-code-p4.sha256

Concordance :
  le hash P4 du dossier correspond au dossier courant ;
  l’ancien P4 prouve le snapshot documentaire, pas les nouvelles portes.

Présence :
  metadata, canonical/robots, Article/Breadcrumb, OG, 7 FAQ, 11 entrées TOC,
  huit couches, cinq preuves, cinq décisions, dossier copiable, CTA et sources.

Calculs proposés refaits :
  28 000 + 3 × 24 000 = 100 000.
  75 000 + 5 × 30 000 = 225 000.
  145 000 + 3 × 34 000 = 247 000.
  22 000 + 5 × 4 000 = 42 000.
  8 × 25 × 42 = 8 400.
  20 × 180 = 3 600.
  8 400 + 3 600 + 4 000 = 16 000.
  247 000 - 100 000 = 147 000.

Requêtes du 24/07/2026 :
  "NIST SSDF application takeover source build deployment data security"
  "OWASP ASVS access control application audit"
  "NCSC secure development software supply chain cloud"
  "ACSC secure by design application cloud migration backup"
  "Lovable external deployment user accounts passwords GitHub"
  "Bolt Supabase version history database restore project export"
  "v0 GitHub source of truth projects deployments domains"
  "Supabase backups storage objects service role browser"

Non exécuté :
  clone, install, scripts, build, tests, deploy, backup, restore, data,
  accounts, secrets, pentest, ASVS, load, incident, legal/DPO, TCO réel,
  route publique, build du site, navigateur, production, indexation.

Statut maximal :
  audit local renforcé et benchmark de référence ; guide non corrigé.
```

## Conclusion opérationnelle

Le guide tient déjà une idée éditoriale très forte : **testez le système, pas
seulement les écrans**. Les cinq preuves doivent rester son ouverture et sa
signature. Pour dépasser la concurrence internationale, il faut maintenant
aller jusqu’au produit exploitable : code traçable, supply chain, restauration
complète, autorisations, logique métier, production, conformité, TCO, migration
et sortie.

Le verdict professionnel n’est pas « l’IA produit du mauvais code » ni « tout
est portable ». C’est : **préservez, prouvez, chiffrez, puis choisissez la
trajectoire qui protège la valeur métier avec le risque et l’engagement les
plus explicites**.
