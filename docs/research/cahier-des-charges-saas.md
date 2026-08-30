# Dossier de recherche — cahier des charges SaaS

Date de travail : **30 août 2026**
Objet : **socle de preuves de l'article réellement publié**, reconstitué après la
réécriture, le contre-audit et la relecture du guide, puis **mis à jour le même
jour après correction des sept écarts de traçabilité** qu'il avait relevés.
Portée : ce fichier décrit `src/app/guides/cahier-des-charges-saas/page.tsx` dans
l'état où il se trouve le 30 août 2026 au soir (`dateModified` au registre :
`2026-08-30T23:35:00+02:00`).

Ce dossier n'est pas une préparation de rédaction : la page existe déjà et fait
foi. Il remonte de la page vers ses sources, source par source et calcul par
calcul, pour qu'un lecteur extérieur puisse refaire seul la vérification. Toutes
les URL listées en section D ont été **rouvertes le 30 août 2026** ; celles qui
n'ont pas pu l'être sont nommées comme telles, sans substitut.

---

## 0. Les sept écarts relevés, et ce qui a été fait de chacun

Sept points avaient été relevés en refaisant les calculs et en rouvrant les
sources. Aucun n'était une erreur d'arithmétique : les vingt calculs de l'article
tombaient juste, et tombent toujours juste (section G). Ils portaient sur la
**traçabilité** et sur la **portée** de certaines affirmations. Les sept ont été
traités le 30 août 2026, chacun après réouverture de la source concernée.

| #   | Écart tel qu'il était relevé                                                                                                                                                                                       | Issue retenue                                                                                                                                                                                                                                                                                                                                                                                        |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| É1  | Deux des dix sources ne portaient **aucune date de consultation** : OWASP ASVS et le guide sécurité de la CNIL. Charte §4.1.                                                                                       | **CORRIGÉ.** Les **douze** sources (dix d'origine + deux ajoutées) ont été rouvertes une par une le 30 août 2026 et portent toutes cette date. Les mentions « 28 août 2026 » ont disparu de la page — y compris du corps et du bloc de transparence. Un test le vérifie entrée par entrée.                                                                                                           |
| É2  | Le délai de 72 h était écrit avec la formulation de l'**article 33(1) du RGPD**, mais le seul localisateur était la page CNIL, qui écrit « à la suite de la constatation » et « ne présente pas de risque ».       | **LOCALISATEUR CHANGÉ.** L'article 33 du RGPD est cité en propre (F31b), rouvert sur EUR-Lex le 30 août 2026, et la section 06 le **nomme** dans la phrase même. Le texte européen écrit « personnes **physiques** » : l'article publiait « personnes concernées ». Corrigé, et le test qui verrouillait ce mot aussi.                                                                               |
| É3  | Art. 25 du Data Act : les « 30 jours calendaires » étaient publiés sans dire qu'ils **ne courent qu'au terme du préavis** de l'art. 25(2)(d), plafonné à deux mois.                                                | **CORRIGÉ aux trois endroits** : corps du §05, tableau de sortie, réponse de FAQ. Les deux points sont cités mot pour mot dans `legalSources`. Calcul C-22.                                                                                                                                                                                                                                          |
| É4  | « environ 350 exigences réparties en dix-sept chapitres » : la page projet OWASP ne porte **aucun décompte**.                                                                                                      | **CORRIGÉ + LOCALISATEUR AJOUTÉ.** Décompte refait le 30 août 2026 sur le fichier officiel de la branche figée `v5.0.0` : **345** exigences, 17 chapitres (C-21). La page publie 345, dit d'où vient le chiffre, et une entrée de sources donne le fichier. **Le décompte de 346 annoncé par la version antérieure de ce dossier était faux d'une unité** : il comptait la ligne vide de fin du CSV. |
| É5  | État `incomplete` réduit à une cause sur trois.                                                                                                                                                                    | **CORRIGÉ.** La ligne du tableau porte les trois causes documentées ; la citation intégrale, en français, est dans `legalSources`.                                                                                                                                                                                                                                                                   |
| É6  | État `paused` publié sans sa condition de réglage.                                                                                                                                                                 | **CORRIGÉ.** La ligne porte « et fin d'essai réglée sur pause » ; le nom exact du paramètre est dans `legalSources`.                                                                                                                                                                                                                                                                                 |
| É7  | Deux affirmations sans localisateur : « Aucun seuil publié n'existe pour cette densité » (négation universelle) et « La portée exacte de ce formalisme sur un logiciel se plaide encore » (aucune décision citée). | **RETIRÉES toutes les deux.** La première devient « Nous ne publions aucun seuil pour cette densité » — une affirmation sur nous, vérifiable. La seconde est remplacée par un fait relu sur Légifrance : L131-3 siège au chapitre « Dispositions générales », et non parmi les articles qui visent le logiciel.                                                                                      |

### Deux défauts trouvés en cours de correction, et corrigés aussi

| #   | Défaut                                                                                                                                                                                                                                                                                                                                                                                      | Issue                                                                                                                                                                                             |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| É8  | **Citation altérée entre guillemets.** `legalSources` publiait, entre « », pour L131-3 : « Chacun des droits cédés fait l'objet d'une mention distincte… est délimité… ». Légifrance écrit « La transmission des droits de l'auteur est subordonnée à la condition que chacun des droits cédés **fasse** l'objet… **soit** délimité… ». La subordonnée avait été transformée en principale. | **CORRIGÉ** : le premier alinéa est reproduit mot pour mot, avec sa subdivision. Un test interdit le retour de la reformulation.                                                                  |
| É9  | **Renvoi interne faux.** Le §02 affirmait « la quatrième question aurait suffi à faire remonter la saisie sans réseau », et le §06 le répétait. Les cinq questions de la relecture croisée sont : rôles, création du premier compte, abonné impayé, sortie du client, réception. **Aucune** ne porte sur le lieu de saisie ; la quatrième porte sur la résiliation.                         | **CORRIGÉ** : le §02 dit désormais « il manquait une sixième question : où l'inspecteur saisit-il son rapport ? », et le §06 renvoie à cette sixième question. Le conseil devient juste et utile. |

---

## A. Identité de l'article publié

```text
Slug : cahier-des-charges-saas
URL canonique : https://hagnere-code.ai/guides/cahier-des-charges-saas
Fichier : src/app/guides/cahier-des-charges-saas/page.tsx
Modules importés : ./saas-specification-engine.ts, ./saas-specification-tool.tsx
Tests colocalisés : content-quality.test.ts, saas-specification-engine.test.ts,
                    saas-specification-tool.test.tsx
Registre : src/lib/guides.ts, entrée « cahier-des-charges-saas »
Section : Préparer son projet
editorialStatus : published
datePublished : 2026-07-22T07:29:32+02:00
dateModified : 2026-08-30T23:35:00+02:00
readTimeMin : 21
Requête cible : cahier des charges SaaS
Route de service : /services/saas-applications-metier
CTA final : /demarrer-un-projet
Images : cahier-saas-16x9.webp, cahier-saas-4x3.webp, cahier-saas-1x1.webp
         (les trois SVG sources sont présents dans public/guides/<slug>/)
```

### Ce que l'article promet, dans ses propres termes

Le H1 publié : « Cahier des charges SaaS : écrire les exigences avant de comparer
les prix ». La promesse tient en trois livrables annoncés dès la section 01 : la
relecture à faire sur son propre document, la façon d'écrire une exigence qu'on
ne peut pas lire de deux façons, et la grille de dépouillement à joindre aux
candidats.

### Les huit sections, et ce que chacune engage comme preuve

| Section             | Titre publié                                                         | Temps annoncé | Nature de ce qu'elle avance                            |
| ------------------- | -------------------------------------------------------------------- | ------------- | ------------------------------------------------------ |
| 01 `reponse-courte` | Deux devis ne se comparent que s'ils portent la même liste de postes | 2 min         | Hypothèses du cas construit, aucune source externe     |
| 02 `ecart`          | Combien votre cahier des charges coûte-t-il en écart de devis ?      | 4 min         | Hypothèses + calculs + une source interne (`/tarifs`)  |
| 03 `exigence`       | Comment écrire une exigence qu'on ne peut pas lire de deux façons ?  | 3 min         | WCAG 2.2, OWASP ASVS 5.0.0, une commande reproductible |
| 04 `abonnement`     | Les huit situations qu'un abonnement traverse                        | 3 min         | Deux pages de documentation Stripe                     |
| 05 `sortie`         | Que récupérez-vous exactement si vous partez ?                       | 3 min         | Data Act art. 25 et 29, CPI art. L131-3 et L113-9      |
| 06 `incidents`      | Ce qui rate, et ce que ça coûte                                      | 2 min         | Hypothèses + calculs + délai CNIL                      |
| 07 `depouillement`  | Comment comparer trois réponses sans se faire piéger par le prix ?   | 2 min         | Méthode, aucune donnée chiffrée externe                |
| 08 `trame`          | La trame à remplir, et ce qu'elle refuse de faire                    | 2 min         | Le moteur local, vérifiable dans le dépôt              |

Somme des huit badges : 2 + 4 + 3 + 3 + 3 + 2 + 2 + 2 = **21 min**, égal au
`readTimeMin` du registre. Vérifié à la main le 30 août 2026 ; le test
« fait tomber la somme des temps de section sur le temps annoncé » impose la même
égalité.

---

## B. Ce que ce dossier remplace

L'ancien dossier était daté du **1er août 2026** et décrivait un état antérieur du
guide : plan en dix sections (`01. Réponse immédiate` … `10. Consultation`),
journaux de passes P1 à P4, BAT et « GO Q 94/100 » sur un instantané qui n'est
plus celui de la page. La page publiée compte **huit** sections aux `id`
suivants : `reponse-courte`, `ecart`, `exigence`, `abonnement`, `sortie`,
`incidents`, `depouillement`, `trame`. Aucune correspondance simple n'existe
entre les deux plans.

Ce qui a été **repris** de l'ancien dossier : sa structure de sections lettrées,
sa fiche de preuves en tableau, sa distinction fait / hypothèse / décision, son
registre d'affirmations, et sa manière de nommer les raccourcis interdits.

Ce qui a été **écarté** : tout son contenu factuel. Les identifiants F01 à F11 et
A01 à A10 de l'ancienne fiche ne sont pas repris ; les faits de la page publiée
ont été retracés depuis la page, puis vérifiés à la source, sans passer par
l'ancien dossier. Le gel d'entrée
`docs/research/cahier-des-charges-saas-input-freeze.md` n'a pas été rouvert comme
source : il décrit une intention de rédaction, pas un article publié.

---

## C. Méthode de reconstitution, et ce qu'elle ne prouve pas

1. Lecture intégrale de `page.tsx` (1 263 lignes), de
   `saas-specification-engine.ts` (589 lignes) et du tableau des huit états.
2. Lecture des trois fichiers de tests colocalisés, pour savoir quels chiffres
   sont verrouillés et par quel contrôle.
3. Recensement de chaque énoncé vérifiable de la page, classé en trois natures
   qui ne sont jamais mélangées : **fait sourcé**, **hypothèse du cas construit**,
   **calcul**.
4. Réouverture de chaque source citée, avec relevé du passage exact qui porte
   l'affirmation (section D).
5. Refonte à la main de tous les calculs de l'article, étapes écrites
   (section G).
6. Exécution des tests : `npx vitest run src/app/guides/cahier-des-charges-saas`
   → **3 fichiers, 89 tests, tous passants**, le 30 août 2026 à 23 h 29, après
   correction. Les deux tests ajoutés couvrent la datation des sources (É1) et
   la précision des états `incomplete` et `paused` (É5, É6).
7. Contrôle du calibre : `npx tsx scripts/measure-guide-readtime.mjs --check
cahier-des-charges-saas` → **4 147 mots, 21 min mesurées pour 21 publiées**,
   le 30 août 2026 à 23 h 30.

### Ce que cette méthode ne prouve pas

- Elle ne prouve pas la justesse éditoriale du cas construit : un cas construit
  n'est ni vrai ni faux, il est **posé**. Section F.
- Elle n'inclut **aucune recherche de jurisprudence**, aucun avis juridique,
  aucune mesure de marché. C'est précisément la raison pour laquelle la phrase
  « la portée exacte de ce formalisme sur un logiciel se plaide encore » a été
  retirée de la page plutôt que sourcée : elle supposait un état du contentieux
  que personne ici n'a vérifié.
- Elle ne remplace pas une relecture humaine. Section I.

### Ce qu'elle prouve désormais, et qu'elle ne prouvait pas

La version antérieure de ce dossier ne pouvait ni confirmer ni infirmer la date
de consultation du **28 août 2026** affichée par la page. Cette date n'est plus
affichée : les douze sources ont été rouvertes le **30 août 2026**, et c'est
cette date-là que la page publie. Une date de consultation vaut désormais un
relevé daté, ligne par ligne, en section D.1.

---

## D. Corpus officiel et fiche de preuves

**Douze** sources sont citées par l'article dans son bloc `legalSources` —
dix d'origine, plus deux ajoutées le 30 août 2026 pour porter des affirmations
qui n'avaient pas de localisateur : l'**article 33 du RGPD** (É2) et le
**fichier officiel de la version figée d'ASVS 5.0.0** (É4). Les douze ont été
rouvertes le **30 août 2026**, et la page affiche cette date pour chacune.

Une réserve de méthode antérieure est levée, et c'est important pour un lecteur
qui suivra le lien : l'URL ELI du Data Act citée par l'article **sert bien le
règlement en entier**, articles compris. Détail en section D.3.

### D.1 Ce que chaque source dit exactement

| ID   | Fait tel que l'article le publie                                                                                                  | Localisateur exact                                                                                                                                                                                                                                                                               | Passage relevé le 30 août 2026                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Portée et limite                                                                                                                                                                                            |
| ---- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| F01  | Le Data Act encadre le changement de fournisseur au chapitre VI, articles 23 à 31                                                 | Règlement (UE) 2023/2854, chapitre VI. URL ELI citée par l'article, `https://eur-lex.europa.eu/eli/reg/2023/2854/oj?locale=fr`                                                                                                                                                                   | Intitulé : « CHAPITRE VI — CHANGEMENT DE SERVICES DE TRAITEMENT DE DONNEES ». Le chapitre s'ouvre à l'article 23 et se ferme à l'article 31 ; l'article 32 ouvre le chapitre VII. Relevé sur la page ELI elle-même le 30 août 2026.                                                                                                                                                                                                                                                                                        | Le chapitre ne vise que les _services de traitement de données_                                                                                                                                             |
| F02  | Période transitoire maximale de 30 jours calendaires, **qui ne court qu'au terme d'un préavis de deux mois au plus** (article 25) | Art. 25, § 2, points a) et d)                                                                                                                                                                                                                                                                    | a) : « […] pas après la période transitoire maximale obligatoire de trente jours calendaires **prenant effet au terme du délai de préavis maximal visé au point d)** […] » — d) : « un délai de préavis maximal pour le lancement du processus de changement de fournisseur, **qui ne dépasse pas deux mois** ».                                                                                                                                                                                                           | Les deux délais s'ajoutent (C-22). L'article publié le dit désormais dans son corps, dans le tableau de sortie et dans la FAQ — É3 traité                                                                   |
| F03  | Période alternative « qui ne peut excéder sept mois » si l'impossibilité technique est justifiée dans les 14 jours ouvrables      | Art. 25, § 4                                                                                                                                                                                                                                                                                     | « Lorsqu'il est techniquement impossible de respecter la période transitoire maximale obligatoire prévue au paragraphe 2, point a), le fournisseur […] en informe le client dans un délai de quatorze jours ouvrables […], motive dûment l'impossibilité technique et indique une autre période transitoire, qui ne peut excéder sept mois. »                                                                                                                                                                              | Citation reprise mot pour mot par l'article, y compris les guillemets                                                                                                                                       |
| F04  | Les frais de changement sont supprimés à partir du 12 janvier 2027 (article 29)                                                   | Art. 29, § 1                                                                                                                                                                                                                                                                                     | « À compter du 12 janvier 2027, les fournisseurs de services de traitement de données ne peuvent imposer aucun frais de changement de fournisseur au client pour le processus de changement de fournisseur. »                                                                                                                                                                                                                                                                                                              | Le § 2 autorise des frais **réduits** du 11 janvier 2024 au 12 janvier 2027 ; l'article ne le dit pas, sans le contredire                                                                                   |
| F05  | Le règlement est applicable depuis le 12 septembre 2025                                                                           | Art. 50, dispositions finales                                                                                                                                                                                                                                                                    | « Il est applicable à partir du 12 septembre 2025. »                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Le chapitre IV connaît un régime différé pour les contrats antérieurs (12 septembre 2027)                                                                                                                   |
| F06  | Le règlement vise les « services de traitement de données », et non tout abonnement appelé SaaS                                   | Art. 2, définition n° 8                                                                                                                                                                                                                                                                          | « “service de traitement de données” : un service numérique […] qui permet un accès par réseau en tout lieu et à la demande à un ensemble partagé de ressources informatiques configurables, modulables et variables […] »                                                                                                                                                                                                                                                                                                 | La qualification d'un produit donné reste à faire ; l'article le dit                                                                                                                                        |
| F07  | Le Data Act ne dit rien du code source ni des droits d'exploitation                                                               | Même texte, recherche plein texte + considérant sur la propriété intellectuelle                                                                                                                                                                                                                  | Zéro occurrence de « code source » dans le texte français intégral. Et : « Le présent règlement n'a pas d'incidence sur les actes juridiques de l'Union et nationaux prévoyant la protection des droits de propriété intellectuelle […] »                                                                                                                                                                                                                                                                                  | Négation vérifiable par recherche exhaustive, donc rare : elle est ici démontrable                                                                                                                          |
| F08  | Chaque droit cédé fait l'objet d'une mention distincte ; étendue, destination, lieu et durée délimités                            | Code de la propriété intellectuelle, art. L131-3, al. 1er. `https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958`                                                                                                                                                                | « La transmission des droits de l'auteur est subordonnée à la condition que chacun des droits cédés fasse l'objet d'une mention distincte dans l'acte de cession et que le domaine d'exploitation des droits cédés soit délimité quant à son étendue et à sa destination, quant au lieu et quant à la durée. » Subdivision affichée : livre Ier, titre III « Exploitation des droits », chapitre Ier « Dispositions générales ».                                                                                           | Version en vigueur depuis le 3 juillet 1992. **La page publiait une reformulation à l'indicatif entre guillemets ; elle publie désormais le texte** — É8. La subdivision remplace « se plaide encore » — É7 |
| F09  | L'article L113-9 vise le salarié, pas une société extérieure                                                                      | CPI, art. L113-9, al. 1er. `https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039279818`                                                                                                                                                                                                | « Sauf dispositions statutaires ou stipulations contraires, les droits patrimoniaux sur les logiciels et leur documentation créés par un ou plusieurs **employés** dans l'exercice de leurs fonctions ou d'après les instructions de leur employeur sont dévolus à l'employeur […] »                                                                                                                                                                                                                                       | Version en vigueur au 1er janvier 2020. Le 3e alinéa étend aux agents publics — l'article publié ne le mentionne pas                                                                                        |
| F10  | L'ordre de remise des événements n'est pas garanti                                                                                | Stripe Docs, `https://docs.stripe.com/webhooks`, section « Ordre des événements »                                                                                                                                                                                                                | « Stripe ne garantit pas la remise des événements dans l'ordre dans lequel ils ont été générés. »                                                                                                                                                                                                                                                                                                                                                                                                                          | Comportement d'un fournisseur donné ; l'article le présente comme tel                                                                                                                                       |
| F11  | Un doublon se reconnaît à l'identifiant de l'objet et au type d'événement                                                         | Même page, section sur les événements en double                                                                                                                                                                                                                                                  | « Dans certains cas, deux objets Event distincts sont générés et envoyés. Pour identifier ces doublons, utilisez l'ID de l'objet dans `data.object` ainsi que le type d'événement (`event.type`). »                                                                                                                                                                                                                                                                                                                        | Idem                                                                                                                                                                                                        |
| F12  | Nouvelles tentatives pendant trois jours au maximum en production, trois tentatives en quelques heures en test                    | Même page, section « Retentatives automatiques »                                                                                                                                                                                                                                                 | « Stripe tente de livrer des événements à votre destination pendant un maximum de trois jours avec un recul exponentiel en mode production. […] Les livraisons d'événements créées dans un environnement de test sont relancées trois fois en l'espace de quelques heures. »                                                                                                                                                                                                                                               | Idem                                                                                                                                                                                                        |
| F13  | Huit états d'abonnement : `trialing`, `active`, `incomplete`, `incomplete_expired`, `past_due`, `canceled`, `unpaid`, `paused`    | Stripe Docs, `https://docs.stripe.com/billing/subscriptions/webhooks`, tableau « Capturer les changements d'état des abonnements »                                                                                                                                                               | Le tableau porte exactement ces huit lignes, dans cet ordre : `trialing`, `active`, `incomplete`, `incomplete_expired`, `past_due`, `canceled`, `unpaid`, `paused`.                                                                                                                                                                                                                                                                                                                                                        | Repère de dénombrement chez un fournisseur, pas modèle universel ; l'article l'écrit deux fois                                                                                                              |
| F14  | Trois causes documentées de l'état `incomplete`, dont le délai de 23 heures                                                       | Même tableau, ligne `incomplete`, page en français                                                                                                                                                                                                                                               | « Le client doit effectuer un paiement dans les 23 heures suivant la création de l'abonnement pour l'activer. **Ou** une action est requise pour le paiement, telle que l'authentification du client. Les abonnements peuvent également être à l'état `incomplete` si un paiement est en attente et que l'état du PaymentIntent est défini sur `processing`. »                                                                                                                                                             | Les trois causes sont maintenant dans la ligne du tableau publié, et la citation entière dans `legalSources` — É5 traité                                                                                    |
| F15  | `incomplete_expired` : les 23 heures sont passées sans paiement abouti                                                            | Même tableau, ligne `incomplete_expired`                                                                                                                                                                                                                                                         | « Le paiement initial de l'abonnement a échoué et le client n'a pas effectué de paiement dans les 23 heures suivant la création de l'abonnement. Ces abonnements ne facturent pas les clients. »                                                                                                                                                                                                                                                                                                                           | —                                                                                                                                                                                                           |
| F16  | `active` ne signifie pas que toutes les factures ont été réglées                                                                  | Même tableau, ligne `active`                                                                                                                                                                                                                                                                     | « L'état `active` ne signifie pas que toutes les factures impayées associées à l'abonnement ont été réglées. Vous pouvez laisser les autres factures impayées ouvertes en attente de paiement […] »                                                                                                                                                                                                                                                                                                                        | Soutient l'encadré « Actif ne veut pas dire payé »                                                                                                                                                          |
| F17  | `past_due` : les factures continuent d'être émises                                                                                | Même tableau, ligne `past_due`                                                                                                                                                                                                                                                                   | « Le paiement de la dernière facture finalisée a échoué ou n'a pas été tenté. L'abonnement continue de générer des factures. »                                                                                                                                                                                                                                                                                                                                                                                             | —                                                                                                                                                                                                           |
| F18  | `unpaid` : la documentation recommande de retirer l'accès                                                                         | Même tableau, ligne `unpaid`                                                                                                                                                                                                                                                                     | « Révoquez l'accès à votre produit lorsque l'abonnement passe à l'état `unpaid`, car des tentatives de paiement ont déjà été effectuées à plusieurs reprises lorsqu'il était à l'état `past_due`. »                                                                                                                                                                                                                                                                                                                        | —                                                                                                                                                                                                           |
| F19  | `canceled` : état définitif qui ne bouge plus                                                                                     | Même tableau, ligne `canceled`                                                                                                                                                                                                                                                                   | « L'abonnement a été annulé. […] Cet état est définitif et ne peut pas être mis à jour. »                                                                                                                                                                                                                                                                                                                                                                                                                                  | —                                                                                                                                                                                                           |
| F20  | `paused` : essai terminé sans moyen de paiement **et** fin d'essai réglée sur `pause` ; plus aucune facture n'est créée           | Même tableau, ligne `paused`, page en français                                                                                                                                                                                                                                                   | « L'abonnement a terminé sa période d'essai sans moyen de paiement par défaut **et le paramètre `trial_settings.end_behavior.missing_payment_method` est défini sur `pause`**. Les factures ne sont plus créées pour l'abonnement. »                                                                                                                                                                                                                                                                                       | La condition est dans la ligne publiée, le nom exact du paramètre dans `legalSources` — É6 traité                                                                                                           |
| F21  | Un avertissement part trois jours avant la fin de l'essai                                                                         | Même page, tableau des événements d'abonnement, ligne `customer.subscription.trial_will_end`                                                                                                                                                                                                     | « Envoyé 3 jours avant la fin de la période d'essai. »                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | C'est un événement adressé à l'intégrateur, pas un message envoyé au client : l'article demande justement de trancher lequel                                                                                |
| F22  | WCAG 2.2 est une recommandation du W3C datée du 12 décembre 2024                                                                  | `https://www.w3.org/TR/WCAG22/`, en-tête                                                                                                                                                                                                                                                         | « W3C Recommendation 12 December 2024 »                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | —                                                                                                                                                                                                           |
| F23  | Neuf critères ajoutés à la version précédente, dont six aux niveaux A et AA                                                       | Même page, section « New Features in WCAG 2.2 »                                                                                                                                                                                                                                                  | Liste publiée : 2.4.11 (AA), 2.4.12 (AAA), 2.4.13 (AAA), 2.5.7 (AA), 2.5.8 (AA), 3.2.6 (A), 3.3.7 (A), 3.3.8 (AA), 3.3.9 (AAA). Soit 9 critères ; 2 de niveau A + 4 de niveau AA = **6**, et 3 de niveau AAA.                                                                                                                                                                                                                                                                                                              | Décompte refait à la main sur la liste normative                                                                                                                                                            |
| F24  | Le critère 4.1.1 est déclaré obsolète                                                                                             | Même page, table des matières et section « Comparison with WCAG 2.1 »                                                                                                                                                                                                                            | Sommaire : « 4.1.1 Parsing (Obsolete and removed) ». Corps : « WCAG 2.2 has removed one success criterion, 4.1.1 Parsing. »                                                                                                                                                                                                                                                                                                                                                                                                | —                                                                                                                                                                                                           |
| F25  | Le critère 2.5.8 fixe la taille minimale d'une cible à 24 × 24 pixels CSS                                                         | Même page, « Success Criterion 2.5.8 Target Size (Minimum) », niveau AA                                                                                                                                                                                                                          | « The size of the target for pointer inputs is at least 24 by 24 CSS pixels, except when: […] »                                                                                                                                                                                                                                                                                                                                                                                                                            | Le critère porte cinq exceptions que l'article ne détaille pas — il ne prétend pas le faire                                                                                                                 |
| F26  | ASVS 5.0.0 a été publiée le 30 mai 2025                                                                                           | `https://owasp.org/www-project-application-security-verification-standard/`, fil des annonces                                                                                                                                                                                                    | « [30 May 2025] ASVS Version 5.0.0 is released LIVE at Global AppSec EU Barcelona 2025! » ; plus loin : « Stable Release 5.0.0 »                                                                                                                                                                                                                                                                                                                                                                                           | —                                                                                                                                                                                                           |
| F27  | ASVS 5.0.0 compte **345** exigences réparties en dix-sept chapitres                                                               | **Non porté par la page projet OWASP**, qui ne publie aucun décompte. Fichier officiel de la branche figée, cité par l'article : `…/OWASP/ASVS/blob/v5.0.0/5.0/docs_en/OWASP_Application_Security_Verification_Standard_5.0.0_en.json`. Export tabulé du même dossier utilisé en contre-comptage | 346 lignes non vides, dont l'en-tête, soit **345 exigences** ; 17 valeurs distinctes de `chapter_id`, V1 à V17. Le JSON officiel de la même version donne 345 également. Détail par chapitre en C-21.                                                                                                                                                                                                                                                                                                                      | **La version antérieure de ce dossier écrivait 346 : elle comptait la ligne vide de fin de fichier.** La page publie 345, dit d'où vient le chiffre, et le fichier est cité — É4 traité                     |
| F28  | Habilitations reliées aux besoins d'accès                                                                                         | CNIL, _Guide pratique RGPD — Sécurité des données personnelles_, version 2024 mise à jour 2026, fiche n° 5 « Gérer les habilitations », p. 14. `https://www.cnil.fr/sites/default/files/2026-05/cnil_guide_securite_personnelle.pdf`                                                             | « Limiter les accès aux seules données dont un utilisateur a besoin. » ; « Faire valider toute demande d'habilitation par un responsable » ; « Réaliser une revue régulière, au moins annuelle, des habilitations […] »                                                                                                                                                                                                                                                                                                    | Recommandation de sécurité pour données personnelles, pas modèle produit                                                                                                                                    |
| F29  | Encadrement des interventions de maintenance                                                                                      | Même guide, fiche n° 15 « Encadrer la maintenance et la fin de vie », p. 35                                                                                                                                                                                                                      | « Ouvrir les accès nécessaires à la télémaintenance à la demande du prestataire, pour une durée adaptée à l'intervention et définie à l'avance. Ces accès doivent être refermés à l'issue de cette durée. »                                                                                                                                                                                                                                                                                                                | Idem                                                                                                                                                                                                        |
| F30  | Sauvegardes et tests de restauration                                                                                              | Même guide, fiche n° 17 « Sauvegarder », p. 40                                                                                                                                                                                                                                                   | « Tester régulièrement l'intégrité des sauvegardes et la capacité de les restaurer. »                                                                                                                                                                                                                                                                                                                                                                                                                                      | Le guide ne fixe aucune fréquence universelle ; l'article n'en publie aucune                                                                                                                                |
| F31  | La page CNIL renvoie elle-même à l'article 33 du RGPD                                                                             | CNIL, `https://www.cnil.fr/fr/notifier-une-violation-de-donnees-personnelles` (page datée du 24 mai 2018)                                                                                                                                                                                        | « Une notification initiale dans un délai de 72 heures si possible **à la suite de la constatation de la violation** » ; procédure clôturable si « la violation ne porte pas atteinte aux données personnelles ou **ne présente pas de risque** pour les droits et libertés des personnes » ; et : « L'obligation de notifier à la CNIL les violations de données à caractère personnel est prévue à l'**article 33** du règlement général sur la protection des données (RGPD). »                                         | La page emploie « constatation » ; l'article publié emploie « prise de connaissance ». Le localisateur a donc été changé pour F31b — É2 traité                                                              |
| F31b | Délai de 72 heures après la **prise de connaissance**, sauf violation non susceptible d'engendrer un risque                       | Règlement (UE) 2016/679, art. 33, § 1. `https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=CELEX:32016R0679`                                                                                                                                                                               | « […] le responsable du traitement en notifie la violation en question à l'autorité de contrôle compétente conformément à l'article 55, dans les meilleurs délais et, si possible, 72 heures au plus tard **après en avoir pris connaissance**, à moins que la violation en question ne soit pas susceptible d'engendrer un risque pour les droits et libertés des **personnes physiques**. Lorsque la notification à l'autorité de contrôle n'a pas lieu dans les 72 heures, elle est accompagnée des motifs du retard. » | Le texte écrit « personnes physiques » : la page publiait « personnes concernées », et un test verrouillait ce mot. Les deux sont corrigés                                                                  |
| F32  | Grille Hagnéré Code : 15 000 € HT pour 3–5 écrans ; 30 000 à 60 000 € HT pour 10–15 écrans, bande libellée « 10–15 écrans + IA »  | Page publique `/tarifs`, et sa source de vérité `src/components/tarifs/body.ts`, lignes 623-624                                                                                                                                                                                                  | Dans le dépôt : `<b>15 k€ HT</b><span>Essentiel — MVP 3–5 écrans</span>` et `<b>30–60 k€ HT</b><span>Standard — 10–15 écrans + IA</span>`. Sur la page en ligne, rouverte le 30 août 2026 : mêmes libellés.                                                                                                                                                                                                                                                                                                                | Repère de l'agence qui vend la prestation. L'article le dit explicitement                                                                                                                                   |
| F33  | Discovery Sprint à 1 500 € HT sur deux jours ; cadrage payé systématique au-delà de 8 000 € HT de projet                          | Même page, `body.ts` lignes 214 et 447                                                                                                                                                                                                                                                           | « 2 jours, 1 500 € HT, livrables réutilisables selon les droits prévus au devis. » ; « Au-delà de **8 k€ HT** de projet, un cadrage payé est systématique […] Jamais les deux. »                                                                                                                                                                                                                                                                                                                                           | Idem                                                                                                                                                                                                        |

### D.2 Sources canoniques, sous une forme réutilisable

- Règlement (UE) 2023/2854 (Data Act), URL citée par l'article, et qui sert bien
  le texte des articles :
  `https://eur-lex.europa.eu/eli/reg/2023/2854/oj?locale=fr`
- Même règlement, version CELEX utilisée en contre-lecture :
  `https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=CELEX:32023R2854`
- Règlement (UE) 2016/679 (RGPD), art. 33 :
  `https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=CELEX:32016R0679`
- CPI art. L131-3 :
  `https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958`
- CPI art. L113-9 :
  `https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039279818`
- Stripe, réception des événements : `https://docs.stripe.com/webhooks`
- Stripe, webhooks et abonnements :
  `https://docs.stripe.com/billing/subscriptions/webhooks`
- W3C, WCAG 2.2 : `https://www.w3.org/TR/WCAG22/`
- OWASP ASVS, page projet :
  `https://owasp.org/www-project-application-security-verification-standard/`
- OWASP ASVS 5.0.0, fichier de la branche figée, seul porteur du décompte F27,
  et seul cité par l'article :
  `https://github.com/OWASP/ASVS/blob/v5.0.0/5.0/docs_en/OWASP_Application_Security_Verification_Standard_5.0.0_en.json`
  (l'export tabulé du même dossier a servi de contre-comptage ; il n'est pas cité
  dans la page, `src/lib/guides.test.ts` interdisant toute mention d'un fichier
  tableur dans un guide)
- CNIL, guide sécurité :
  `https://www.cnil.fr/sites/default/files/2026-05/cnil_guide_securite_personnelle.pdf`
- CNIL, notifier une violation :
  `https://www.cnil.fr/fr/notifier-une-violation-de-donnees-personnelles`
- Hagnéré Code, grille publique : `https://hagnere-code.ai/tarifs`, source
  `src/components/tarifs/body.ts`

### D.3 La réserve sur l'URL du Data Act est levée — et comment

La version antérieure de ce dossier déclarait que l'URL ELI citée par l'article,
`https://eur-lex.europa.eu/eli/reg/2023/2854/oj?locale=fr`, ne rendait que les
considérants, et que le texte des articles avait dû être lu ailleurs, sur la
version CELEX. **Ce constat était un artefact de l'outil de récupération, pas une
propriété de la page.**

Contrôle refait le 30 août 2026, sans outil de résumé, par téléchargement direct
de la page ELI puis recherche de chaînes littérales dans le HTML rendu en texte
(354 779 caractères). Une occurrence de chacune de ces chaînes :

- « Article 25 », « Article 29 », « Article 50 » ;
- « prenant effet au terme du délai de préavis maximal visé au point d) » ;
- « qui ne dépasse pas deux mois » ;
- « qui ne peut excéder sept mois » ;
- « À compter du 12 janvier 2027 » ;
- « Il est applicable à partir du 12 septembre 2025 ».

Et zéro occurrence de « code source » sur cette même page, ce qui adosse F07 à
l'URL publiée elle-même. **Le lecteur qui suit le lien de l'article trouve donc
bien les articles cités.** La version CELEX
(`https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=CELEX:32023R2854`) a
été relue en parallèle et donne les mêmes passages, mot pour mot : elle sert
désormais de contre-lecture, plus de substitut.

Ce qui reste hors de portée de ce dossier, sans substitut : **aucune
jurisprudence n'a été recherchée ni ouverte**. C'est la raison pour laquelle
l'affirmation « se plaide encore » a été retirée de la page (É7) plutôt que
sourcée. Aucune source n'a été remplacée par une source approchante pour combler
un trou.

### D.4 Raccourcis interdits, tenus par la page

Contrôlés un par un dans le rendu HTML le 30 août 2026, et par les tests
correspondants :

- « conforme RGPD », « conforme WCAG », « certifié OWASP », « nous garantissons »,
  « zéro risque » : aucune occurrence.
- « Stripe est le standard » : aucune occurrence ; la page écrit deux fois que la
  documentation est citée « comme repère de dénombrement ».
- « droit universel d'export », « tout SaaS est couvert » : aucune occurrence.
- Score global sur le document produit par la trame : aucun. Le bandeau publie
  `{ label: "Score global", value: "Aucun" }`.
- Témoignage, logo, nom de client, métrique client, historique d'exploitation :
  aucun. Le mot « client » n'apparaît que pour désigner _les clients du lecteur_
  ou l'organisation cliente du produit décrit.
- Durée d'effort inventée : aucune. Les seules durées publiées sont celles des
  sources (23 h, 72 h, 30 jours calendaires, préavis de deux mois, 14 jours
  ouvrables, sept mois, trois jours de relance).

---

## E. Registre des affirmations de l'article publié

Trois natures, jamais mélangées : **F** = fait sourcé (localisateur en section D),
**H** = hypothèse du cas construit (aucune source, posée à découvert, section F),
**C** = calcul (étapes en section G).

| Réf | Affirmation telle qu'elle est lue                                                                                                                                                                                           | Nature  | Appui                                              | Verrouillée par un test ?                                                                               |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| A01 | Deux devis ne se comparent que s'ils portent la même liste de postes                                                                                                                                                        | Méthode | Raisonnement, aucune donnée                        | Non — c'est la thèse, pas un chiffre                                                                    |
| A02 | Trois devis à 34 000, 58 000 et 129 000 € HT sur le même document                                                                                                                                                           | H       | H-13 à H-15                                        | Oui : totaux reconstruits poste par poste depuis le rendu                                               |
| A03 | Le total de chaque colonne est la somme de ses postes                                                                                                                                                                       | C       | C-01 à C-03                                        | Oui                                                                                                     |
| A04 | Quatre postes sur sept ne portent aucun montant chez la société A                                                                                                                                                           | C       | C-04                                               | Oui, et les quatre sont nommés                                                                          |
| A05 | Trois d'entre eux devront être payés ; le quatrième attend un arbitrage                                                                                                                                                     | Méthode | Déduction du tableau                               | Oui, à la phrase près                                                                                   |
| A06 | Amplitude des trois totaux : 3,8 pour 1, calculée sur trois listes différentes                                                                                                                                              | C       | C-05                                               | Oui, et la disqualification est exigée par le test                                                      |
| A07 | Couple B–C : 2,2 pour 1 avant décompte, 1,5 pour 1 après                                                                                                                                                                    | C       | C-06 à C-08                                        | Oui                                                                                                     |
| A08 | Il subsiste 27 000 € entre B et C ; la phrase pèse 1,6 fois cette somme                                                                                                                                                     | C       | C-09, C-10                                         | Oui                                                                                                     |
| A09 | La saisie sans réseau vaut 34 % du devis le plus élevé                                                                                                                                                                      | C       | C-11                                               | Oui                                                                                                     |
| A10 | La phrase de la page 6 compte dix mots                                                                                                                                                                                      | C       | C-12                                               | Oui : le test recompte la citation                                                                      |
| A11 | Le total C dépasse la borne haute de la grille maison ; ramené à 85 000 € il reste 25 000 € au-dessus                                                                                                                       | C       | C-13, C-14                                         | Oui                                                                                                     |
| A12 | La bande 30–60 k€ HT est libellée « 10–15 écrans + IA », le portail n'a pas d'IA                                                                                                                                            | F       | F32                                                | Oui : le test relit `body.ts`                                                                           |
| A13 | Une exigence est testable quand on sait écrire son échec                                                                                                                                                                    | Méthode | Raisonnement                                       | Non                                                                                                     |
| A14 | La commande `grep -onEi` liste les mots qui repoussent une décision                                                                                                                                                         | F       | Commande reproductible                             | Oui : présence de la commande et du nom de fichier                                                      |
| A15 | Nous ne publions aucun seuil pour cette densité                                                                                                                                                                             | Aveu    | Fait interne, vérifiable sur la page               | Oui : le test exige la nouvelle formule et interdit le retour de la négation universelle → É7 traité    |
| A16 | WCAG 2.2 : 12 décembre 2024, neuf critères dont six A et AA, 4.1.1 obsolète, 2.5.8 à 24 × 24 px CSS                                                                                                                         | F       | F22 à F25                                          | Oui, fait par fait                                                                                      |
| A17 | ASVS 5.0.0 : 30 mai 2025, 345 exigences, dix-sept chapitres, comptées sur le fichier de la version figée                                                                                                                    | F       | F26, F27                                           | Oui : le test exige 345, la mention de provenance, et le nom du fichier dans `legalSources` → É4 traité |
| A18 | La documentation publique décrit huit états d'abonnement                                                                                                                                                                    | F       | F13                                                | Oui : huit lignes comptées dans le tableau rendu                                                        |
| A19 | Trois de ces états décrivent un paiement non abouti sans fermeture d'accès                                                                                                                                                  | F       | F14, F17, F18                                      | Oui, et les trois sont nommés                                                                           |
| A20 | Trois décisions par état font vingt-quatre lignes à écrire                                                                                                                                                                  | C       | C-15                                               | Oui                                                                                                     |
| A21 | Ordre non garanti, doublons possibles, relances jusqu'à trois jours                                                                                                                                                         | F       | F10 à F12                                          | Oui                                                                                                     |
| A22 | `active` ne veut pas dire payé                                                                                                                                                                                              | F       | F16                                                | Oui                                                                                                     |
| A23 | Quatre objets à récupérer à la sortie, dont deux adossés à un texte                                                                                                                                                         | C + F   | C-16, F01-F09                                      | Oui : les cellules du tableau sont recomptées                                                           |
| A24 | Data Act : applicable au 12 septembre 2025 ; 30 jours à l'art. 25, ouverts au terme d'un préavis de deux mois au plus ; sept mois au plus en cas d'impossibilité technique ; frais supprimés au 12 janvier 2027 à l'art. 29 | F       | F02 à F05                                          | Oui, fait par fait, plus le préavis dans le corps, le tableau et la FAQ → É3 traité                     |
| A25 | Le Data Act ne dit rien du code source                                                                                                                                                                                      | F       | F07                                                | Oui                                                                                                     |
| A26 | L131-3 : mention distincte, étendue, destination, lieu, durée                                                                                                                                                               | F       | F08                                                | Oui, et l'identifiant Légifrance est contrôlé                                                           |
| A27 | L113-9 vise le salarié, pas une société extérieure                                                                                                                                                                          | F       | F09                                                | Oui, idem                                                                                               |
| A28 | L131-3 figure aux dispositions générales du code, et non parmi les articles qui visent le logiciel                                                                                                                          | F       | F08, subdivision affichée par Légifrance           | Oui : le test exige la phrase et interdit le retour de « se plaide encore » → É7 traité                 |
| A29 | Onze accès ouverts, 16 390 € HT non facturés sur quarante-trois organisations                                                                                                                                               | C sur H | C-17, C-18, H-07, H-20, H-21                       | Oui                                                                                                     |
| A30 | L'article 33 du RGPD impose une notification à la CNIL dans les meilleurs délais et, si possible, 72 heures au plus tard après la prise de connaissance, sauf absence de risque pour les personnes physiques                | F       | F31b, avec F31 pour le renvoi de la CNIL elle-même | Oui : le test exige que la phrase nomme l'article 33 et porte les deux réserves → É2 traité             |
| A31 | La trame compte neuf blocs, cinq champs, quarante-cinq zones                                                                                                                                                                | C       | C-19                                               | Oui : le test importe `specificationBlocks`                                                             |
| A32 | La trame n'envoie rien, n'enregistre rien, ne produit aucun fichier                                                                                                                                                         | F       | Code du dépôt                                      | Oui : le test interdit `fetch`, `localStorage`, `Blob`, `download`                                      |
| A33 | L'exemple DossierClair est entièrement fictif                                                                                                                                                                               | H       | H-23 à H-31                                        | Oui : l'étiquette doit précéder l'affichage                                                             |
| A34 | Hagnéré Code fait partie des sociétés qu'un tel document met en concurrence                                                                                                                                                 | Aveu    | Fait interne                                       | Oui : un seul bloc de transparence, un seul CTA en ligne                                                |

---

## F. Les hypothèses du cas construit, posées à découvert

**Trente et une hypothèses.** Aucune ne vient d'une source, d'un relevé de marché
ni d'un dossier client. Elles sont choisies pour la démonstration. C'est ce que
l'article écrit lui-même, en quatre endroits distincts : le badge du hero
(« Exemple construit · aucun dossier client »), la première phrase du
`heroDescription`, l'italique qui ouvre l'encadré du fil rouge, et le
`disclaimer` de bas de page.

### F.1 Fil rouge « Sonia » — un bureau de contrôle technique

| Réf  | Hypothèse                                                                                                                           | Où elle apparaît        |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| H-01 | Le métier : un bureau de contrôle technique de bâtiments                                                                            | §01                     |
| H-02 | L'effectif : 46 salariés                                                                                                            | §01                     |
| H-03 | L'implantation : Nantes                                                                                                             | §01                     |
| H-04 | Sonia, directrice générale — personne fictive                                                                                       | §01, §02, §03, §06, §07 |
| H-05 | Karim, qui gère l'informatique — personne fictive                                                                                   | §01                     |
| H-06 | Les clients visés sont des bailleurs                                                                                                | §01, §06                |
| H-07 | L'abonnement annuel par organisation cliente vaut 1 490 € HT                                                                        | §01, §06                |
| H-08 | Le document envoyé fait quatorze pages                                                                                              | §01, FAQ                |
| H-09 | Onze écrans                                                                                                                         | §01, §02                |
| H-10 | Six rôles                                                                                                                           | §01, §07                |
| H-11 | 12 000 dossiers à reprendre                                                                                                         | §01, §02, §06           |
| H-12 | Trois sociétés consultées, A, B et C, saisies le même jour                                                                          | §01                     |
| H-13 | Ventilation du devis A : 26 000 + 5 000 + 3 000, quatre postes non chiffrés                                                         | §02, tableau            |
| H-14 | Ventilation du devis B : 27 500 + 9 000 + 6 000 + 7 500 + 5 000 + 3 000, un poste non chiffré                                       | §02, tableau            |
| H-15 | Ventilation du devis C : 33 000 + 12 000 + 9 000 + 11 000 + 44 000 + 12 000 + 8 000, aucun poste non chiffré                        | §02, tableau            |
| H-16 | La phrase ambiguë se trouve page 6                                                                                                  | §02, §03, §06           |
| H-17 | A et B ont lu « un écran responsive » ; C a lu « une application hors ligne avec synchronisation »                                  | §02                     |
| H-18 | Exigence R-14 : dossier 2 481, organisation « Bailleur Nord », douze champs, trois photos, synchronisation en quatre heures au plus | §03                     |
| H-19 | La décision ouverte sur le conflit d'écriture est tranchée par Sonia avant le 15 septembre                                          | §03                     |
| H-20 | Dix-huit mois plus tard, quarante-trois organisations sont abonnées                                                                 | §06                     |
| H-21 | Onze d'entre elles ont vu leur prélèvement annuel échouer sans fermeture d'accès                                                    | §06                     |
| H-22 | Jeu de données fictives de consultation : deux organisations, six rôles, une centaine de dossiers                                   | §07                     |

### F.2 Exemple DossierClair — un second cas, entièrement fictif

Produit par `createDossierClairExample()` dans
`saas-specification-engine.ts`, dont le `projectName` porte l'étiquette dans son
propre libellé : `"DossierClair — exemple entièrement fictif"`.

| Réf  | Hypothèse                                                                                   |
| ---- | ------------------------------------------------------------------------------------------- |
| H-23 | DossierClair, un suivi de pièces pour de petits cabinets de conseil                         |
| H-24 | Deux organisations : Atelier Nord et Studio Rivage                                          |
| H-25 | Deux personnes : Claire, responsable de mission, et Léa                                     |
| H-26 | Quatre rôles : propriétaire, administratrice, contributrice, contact externe                |
| H-27 | Une offre nommée « Équipe »                                                                 |
| H-28 | Cinq états produit : `à_activer`, `active`, `régularisation`, `résiliée`, `sortie_terminée` |
| H-29 | Volume de référence : 20 organisations, 100 personnes internes, 2 000 dossiers              |
| H-30 | Volume doublé pour le second passage : 40 organisations, 200 personnes, 4 000 dossiers      |
| H-31 | Lisibilité retenue à 320 px, en thèmes clair et sombre                                      |

### F.3 Ce que les hypothèses n'autorisent pas

Aucune de ces trente et une hypothèses ne peut être citée hors de l'article
comme une observation. En particulier : **les trois devis ne mesurent pas un
marché**, l'abonnement de 1 490 € HT n'est le prix de rien, et les 46 salariés ne
décrivent aucune société. L'article le dit dans son propre corps —
« Refaites la colonne avec vos devis réels — la méthode ne dépend pas des
nombres. » — et son `disclaimer` le répète.

Ces hypothèses sont d'autant plus à surveiller que la page est destinée à des
campagnes payantes : c'est exactement la configuration où un chiffre construit se
met à circuler comme un chiffre relevé. Les tests colocalisés en tiennent compte :
ils imposent que l'étiquette « Exemple construit » précède les montants dans le
hero, et interdisent les montants 34 000 / 58 000 / 129 000 / 44 000 et les
ratios 3,8 / 2,2 / 1,5 dans le H1, la description SERP, la description de carte et
l'image OpenGraph — c'est-à-dire sur toutes les surfaces qui se lisent sans le
corps de l'article.

---

## G. Les calculs de l'article, refaits à la main

Aucune formule de la page n'est rejouée ici : les opérandes sont relevés dans le
tableau et les étapes sont posées à la main, comme un lecteur les poserait.

### G.1 Le tableau des trois devis, tel qu'il est publié

| Poste                                  | Société A | Société B | Société C |
| -------------------------------------- | --------- | --------- | --------- |
| Onze écrans du parcours principal      | 26 000 €  | 27 500 €  | 33 000 €  |
| Portail multi-organisation             | 5 000 €   | 9 000 €   | 12 000 €  |
| Reprise des 12 000 dossiers existants  | —         | 6 000 €   | 9 000 €   |
| Abonnement et facturation récurrente   | —         | 7 500 €   | 11 000 €  |
| Saisie sur le terrain sans réseau      | —         | —         | 44 000 €  |
| Recette et corrections                 | 3 000 €   | 5 000 €   | 12 000 €  |
| Hébergement et maintenance, douze mois | —         | 3 000 €   | 8 000 €   |
| **Total annoncé**                      | 34 000 €  | 58 000 €  | 129 000 € |

### G.2 Les dix-neuf calculs

**C-01 — Total A.** 26 000 + 5 000 = 31 000 ; 31 000 + 3 000 = **34 000**.
Égal au total annoncé. ✔

**C-02 — Total B.** 27 500 + 9 000 = 36 500 ; + 6 000 = 42 500 ; + 7 500 =
50 000 ; + 5 000 = 55 000 ; + 3 000 = **58 000**. Égal au total annoncé. ✔

**C-03 — Total C.** 33 000 + 12 000 = 45 000 ; + 9 000 = 54 000 ; + 11 000 =
65 000 ; + 44 000 = 109 000 ; + 12 000 = 121 000 ; + 8 000 = **129 000**.
Égal au total annoncé. ✔

**C-04 — Postes non chiffrés.** Colonne A : reprise, abonnement, saisie sans
réseau, hébergement → **4** sur 7. Colonne B : saisie sans réseau seule → **1**.
Colonne C : **0**. L'article écrit « Quatre postes sur sept ». ✔

**C-05 — Amplitude A → C.** 129 000 ÷ 34 000. 34 000 × 3 = 102 000, reste
27 000. 27 000 ÷ 34 000 = 0,794. Soit 3,794 → **3,8 pour 1**. ✔
L'article ajoute aussitôt que ce rapport est « calculé sur trois listes de postes
différentes » — ce qui est vrai : A nomme 3 postes, B en nomme 6, C en nomme 7.

**C-06 — Couple B–C, avant décompte.** 129 000 ÷ 58 000. 58 000 × 2 = 116 000,
reste 13 000. 13 000 ÷ 58 000 = 0,224. Soit 2,224 → **2,2 pour 1**. ✔

**C-07 — Total C rendu comparable.** 129 000 − 44 000 = **85 000**. ✔

**C-08 — Couple B–C, après décompte.** 85 000 ÷ 58 000. 58 000 × 1 = 58 000,
reste 27 000. 27 000 ÷ 58 000 = 0,4655. Soit 1,4655 → **1,5 pour 1** à une
décimale. ✔ (Un lecteur qui arrondit à deux décimales lira 1,47 ; l'article
publie une décimale partout, ce qui est cohérent avec les 3,8 et 2,2.)

**C-09 — Écart résiduel.** 85 000 − 58 000 = **27 000 €**. ✔

**C-10 — Poids de la phrase non tranchée.** 44 000 ÷ 27 000. 27 000 × 1 = 27 000,
reste 17 000. 17 000 ÷ 27 000 = 0,6296. Soit 1,6296 → **1,6 fois**. ✔

**C-11 — Part du poste dans le devis le plus élevé.** 44 000 ÷ 129 000 = 0,34108
→ 34,1 % → **34 %**. ✔

**C-12 — Longueur de la phrase citée.** « Les inspecteurs doivent pouvoir saisir
leur rapport depuis le terrain. » → Les (1), inspecteurs (2), doivent (3),
pouvoir (4), saisir (5), leur (6), rapport (7), depuis (8), le (9), terrain (10).
**Dix mots.** ✔ L'article annonce « Dix mots page 6 » en section 06.

**C-13 — « Plus du double de sa borne haute ».** Borne haute de la grille
maison : 60 000 (F32). 60 000 × 2 = 120 000. 129 000 > 120 000. ✔

**C-14 — Dépassement une fois le poste retiré.** 85 000 − 60 000 = **25 000 €**
au-dessus. ✔

**C-15 — Décisions imposées par les états d'abonnement.** 8 états × 3 décisions
(ce que l'utilisateur peut faire, le message qu'il voit, l'action qui remet en
ordre) = **24**. L'article écrit « vingt-quatre lignes à écrire » et
« vingt-quatre décisions écrites » dans la FAQ. ✔

**C-16 — Objets de la sortie.** Le tableau de la section 05 porte quatre lignes.
Deux d'entre elles nomment un texte : le règlement européen pour les données, les
articles L131-3 et L113-9 pour le code source. Deux portent la mention « Aucun
texte général » : les accès et secrets, la documentation d'exploitation.
2 + 2 = **4**. L'article ouvre la section sur « quatre objets […] Deux d'entre eux
sont adossés à un texte ». ✔

**C-17 — Manque à facturer de l'incident d'abonnement.** 11 × 1 490 :
1 490 × 10 = 14 900 ; + 1 490 = **16 390 €** HT. ✔

**C-18 — Part des organisations concernées.** 11 ÷ 43 = 0,25581 → 25,58 % →
**26 %**. ✔

**C-19 — Taille de la trame locale.** `specificationBlocks` contient **9** blocs
(`productBoundary`, `organizationLifecycle`, `accessLifecycle`,
`offerAndEntitlements`, `subscriptionLifecycle`, `failureAndOperations`,
`dataAndSupport`, `resilienceAndExit`, `nonFunctionalAndAcceptance`) ;
`specificationEntryFields` contient **5** champs (`decision`, `owner`,
`evidence`, `exclusion`, `blockingUnknown`). 9 × 5 = **45 zones de texte**.
L'article écrit « Neuf blocs, cinq champs par bloc, quarante-cinq zones de
texte ». ✔ Vérifié dans le code, pas seulement dans la prose.

**C-20 — Temps de lecture.** 2 + 4 + 3 + 3 + 3 + 2 + 2 + 2 = **21 min**, égal au
`readTimeMin` du registre. ✔ Mesure sur l'article rendu le 30 août 2026 :
**4 147 mots**, 4 147 ÷ 200 = 20,7 → **21 min**. ✔

### G.2 bis Les deux calculs ajoutés par la correction du 30 août 2026

**C-21 — Décompte ASVS 5.0.0.** Deux fichiers officiels de la branche figée
`v5.0.0`, téléchargés le 30 août 2026 : l'export tabulé (105 100 octets) et le
fichier JSON (149 407 octets), ce dernier étant celui que l'article cite.
L'export tabulé compte 347 fins de ligne, dont une ligne vide en fin de fichier :
**346 lignes non vides**, moins l'en-tête, soit **345 exigences**. Addition par
chapitre, refaite à la main :

V1 30 · V2 13 · V3 31 · V4 16 · V5 13 · V6 47 · V7 19 · V8 13 · V9 7 · V10 36 ·
V11 24 · V12 12 · V13 21 · V14 13 · V15 21 · V16 17 · V17 12.

30 + 13 = 43 ; 43 + 31 = 74 ; 74 + 16 = 90 ; 90 + 13 = 103 ; 103 + 47 = 150 ;
150 + 19 = 169 ; 169 + 13 = 182 ; 182 + 7 = 189 ; 189 + 36 = 225 ;
225 + 24 = 249 ; 249 + 12 = 261 ; 261 + 21 = 282 ; 282 + 13 = 295 ;
295 + 21 = 316 ; 316 + 17 = 333 ; 333 + 12 = **345**. ✔
**17 chapitres**, V1 à V17. Le fichier JSON de la même version, parcouru
séparément chapitre par chapitre et section par section, donne **17 chapitres et
345 exigences** lui aussi. ✔
C'est ce calcul qui corrige le **346** de la version antérieure de ce dossier :
elle avait compté la ligne vide de fin de fichier comme une exigence.

**C-22 — Le délai de sortie du Data Act, bout à bout.** L'art. 25, § 2, d) fixe
un préavis « qui ne dépasse pas deux mois » ; l'art. 25, § 2, a) fixe une période
transitoire de trente jours calendaires « prenant effet au terme » de ce préavis.
Les deux s'ajoutent : **deux mois + 30 jours au maximum**, et non 30 jours de
bout en bout. Le § 4 ne s'ajoute pas à ces trente jours, il les remplace par une
période « qui ne peut excéder sept mois ». Aucune addition n'est publiée par
l'article : il publie les deux bornes et laisse le lecteur les poser dans son
contrat. ✔

### G.3 Verdict arithmétique

**Vingt-deux calculs vérifiés, vingt-deux justes.** Aucun écart d'arrondi, aucun
opérande introuvable, aucun dénominateur qui change en silence. Le point qui
avait été signalé lors d'un audit antérieur — un rapport « 3,8 » comparé à un
rapport « 1,5 » sans dire que le premier divisait par A et le second par B — ne
subsiste pas : l'article nomme le couple comparé (« Sur ce couple B et C ») et
disqualifie explicitement le 3,8 comme mesure.

La correction du 30 août 2026 n'a touché **aucun opérande** : les trois totaux,
les quatre ratios, les 34 %, les 26 %, les 16 390 €, les 25 000 €, les 24
décisions, les 45 zones et les 21 minutes sont inchangés. Une phrase du §02 a été
retirée pour tenir le calibre après les ajouts sourcés — « Avant cela, son total
de 34 000 € HT n'a aucun équivalent en face. » — et elle ne portait aucun calcul :
le montant qu'elle rappelait figure au tableau et en section 01.

---

## H. Ce que la trame locale garantit, et ce qu'elle refuse

Le moteur `saas-specification-engine.ts` est vérifiable dans le dépôt ; ce sont
des faits de code, pas des affirmations éditoriales.

- **Aucun réseau, aucune persistance.** Le composant ne contient ni `fetch`, ni
  `XMLHttpRequest`, ni `localStorage`, ni `sessionStorage`, ni `indexedDB`, ni
  `document.cookie`. Aucun `Blob`, aucun `URL.createObjectURL`, aucun attribut
  `download` : la sortie se copie par `navigator.clipboard.writeText`, elle ne se
  télécharge pas. L'article annonce exactement cela.
- **Trois états, aucun score.** `STOP_REQUIRED_INPUTS_UNKNOWN`,
  `CLARIFY_BEFORE_COMPARISON`, `CANDIDATE_FOR_VENDOR_COMPARISON`. Aucune note,
  aucune pondération, aucun total sur 100 : un STOP n'est compensé par rien.
- **Le marqueur d'inconnue est conservateur.** Une déclaration d'inconnue
  bloquante vide, ou différente de la chaîne exacte « Aucune identifiée » après
  normalisation, force un STOP. Le champ `decision` laissé vide ou contenant
  `tbd`, `unknown`, `inconnu`, `stop`, `à décider`, `à confirmer` ou
  `non renseigné` force un STOP ; les autres champs produisent une simple
  demande de complément.
- **Le texte de sortie déclare sa propre portée.** Le Markdown généré porte, en
  tête : « Document de travail généré localement. Il ne choisit ni architecture,
  ni prestataire de paiement, ni prix, ni délai, ni niveau de service contractuel
  (SLA), et ne vaut pas validation juridique, sécurité ou conformité. »
- **Ce que l'outil ne fait pas**, et que l'article écrit : « l'outil ne vérifie
  jamais si ce que vous écrivez est vrai — seulement si une réponse manque à un
  endroit qui empêcherait deux sociétés de chiffrer la même chose ».

### Ce que les tests colocalisés verrouillent

`content-quality.test.ts` compte 1 554 lignes et 56 contrôles, dont deux ajoutés
le 30 août 2026 : la datation des douze sources, et la fidélité des lignes
`incomplete` et `paused`. Quatre contrôles existants ont été **récrits**, chacun
avec la raison au-dessus : ils verrouillaient une formule que la source ne portait
pas — « se plaide encore », « 350 exigences », « Aucun seuil publié n'existe »,
« personnes concernées ». Un test qui verrouille une phrase fausse la rend plus
difficile à corriger que si personne ne l'avait écrite.

Trois familles méritent d'être connues d'un vérificateur extérieur :

1. **Les contrôles arithmétiques reconstruisent** les totaux depuis le HTML rendu
   et posent les constantes à la main, avec leurs étapes en commentaire. Ils ne
   rejouent aucune formule de la page : si la page se trompait, le test ne se
   tromperait pas avec elle.
2. **Les contrôles d'étiquetage** vérifient que « Exemple construit » précède le
   premier montant du hero, que la mention « non un dossier client » précède
   « 34 000 », et que ni le H1, ni la description SERP, ni la carte, ni l'image
   OpenGraph ne portent un montant ou un ratio du cas construit.
3. **Les contrôles de style** portent la mémoire des tics nommés par un
   contre-audit antérieur — antithèses « pas X, c'est Y », chutes aphoristiques,
   triplettes en « trois » — et les interdisent dans les termes exacts où ils
   avaient été relevés.

Une **requalification de calibre** est écrite et motivée dans le test lui-même :
la page rend environ 8 500 mots visibles, dont **4 147** seulement sont comptés,
parce que deux sous-arbres portent `data-read-time-exclude` — le formulaire de
45 zones de texte, et le dump Markdown de DossierClair (près de 4 500 mots). Le
commentaire du test qualifie cette exclusion de « décision éditoriale à confirmer
par le propriétaire du site », et non de règle acquise.

**Ce point n'a pas été tranché le 30 août 2026, et il ne pouvait pas l'être
ici :** décider qu'un temps de lecture publié décrit la prose et non la page
entière est un arbitrage d'éditeur, pas un constat de vérification. Il reste
donc ouvert, écrit à deux endroits — dans le commentaire du test et dans ce
paragraphe — pour qu'il soit révocable d'un seul geste. En l'état : **le temps
de lecture publié décrit la prose, pas la page entière.**

---

## I. Relecture humaine — déclaration explicite (charte §13)

**Aucun lecteur humain extérieur n'a relu cet article, à ma connaissance.**

Ce que j'ai cherché, le 30 août 2026, et ce que j'ai trouvé :

- aucune trace de test lecteur dans l'ancien dossier de recherche : les termes
  « lecteur test », « lecteur humain », « test lecteur » et « revue humaine » n'y
  apparaissent pas ;
- les journaux de passes de l'ancien dossier (sections J, K, L) décrivent des
  passes d'agents — vérification contradictoire, polish rédactionnel, antipasse
  IA — et non une lecture par une personne extérieure ;
- l'ancien dossier se clôt sur « contre-audit du snapshot stagé : à réaliser ».

La passe de correction du 30 août 2026, elle aussi, est une passe d'agent : elle
a rouvert douze sources et refait vingt-deux calculs, elle n'a fait lire le
guide à personne. La page ne revendique aucune relecture humaine, et aucune de
ses mentions de date — « Mis à jour le 30 août 2026 », « relevés le 30 août
2026 » — n'en suppose une.

En conséquence, et conformément à la charte §13 : les passes de relecture menées
sur ce guide sont des contre-relectures par agents. Elles **ne doivent jamais
être présentées comme l'avis d'un dirigeant, d'un lecteur test ou d'un panel**.
Le statut maximal que ce dossier peut soutenir de lui-même est **« prêt pour
revue humaine »** — la validation éditoriale reste à acquérir, soit par un test
lecteur suivi de ses corrections, soit par une instruction explicite du
commanditaire déléguant la décision de publication. Le registre affiche
`editorialStatus: "published"` ; ce dossier constate cet état sans le valider,
la publication n'étant pas de son ressort.

Ce que demanderait un test lecteur utile, si quelqu'un le mène : donner l'article
à une personne non technique et lui demander ce qu'elle a compris de la
différence entre « 3,8 pour 1 » et « 1,5 pour 1 », si elle a vu que les trois
devis sont inventés, et à quel moment elle a commencé à survoler.

---

## J. Fraîcheur : quand chaque fait devra être revérifié

L'article annonce lui-même « à revérifier tous les douze mois ». Les échéances
réelles ne sont pas toutes annuelles.

| Fait                                                  | Échéance de revérification                                                      | Pourquoi                                                                                       |
| ----------------------------------------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Data Act, frais supprimés au 12 janvier 2027          | **Avant le 12 janvier 2027**, puis au passage de la date                        | Le verbe change de temps : « supprime à partir du » deviendra « supprime depuis le »           |
| Data Act, régime différé du chapitre IV               | 12 septembre 2027                                                               | Les contrats conclus avant le 12 septembre 2025 basculent                                      |
| Huit états d'abonnement, 23 h, trois jours de relance | À chaque révision majeure de la documentation éditeur, au moins une fois par an | Documentation éditeur : elle change sans préavis et sans numéro de version                     |
| ASVS 5.0.0, 345 exigences, 17 chapitres               | À la sortie d'une version 5.1 ou 6.0                                            | Le décompte est attaché à une branche figée                                                    |
| WCAG 2.2                                              | À la publication de WCAG 3.0 ou d'un errata                                     | Recommandation stable, faible volatilité                                                       |
| CPI L131-3 et L113-9                                  | Annuelle, et à toute décision notable sur le formalisme appliqué au logiciel    | Le guide ne conclut pas sur la portée du formalisme ; une décision notable la fixerait         |
| Délai CNIL de 72 h                                    | Annuelle                                                                        | Art. 33 du RGPD, stable ; la page pratique de la CNIL, elle, bouge sans préavis                |
| Grille `/tarifs`                                      | **À chaque modification de `src/components/tarifs/body.ts`**                    | Le guide cite quatre montants maison ; un changement de grille rend le guide faux le jour même |
| Les trente et une hypothèses                          | Jamais — elles ne périment pas, elles ne sont pas des faits                     | Elles doivent seulement rester étiquetées comme telles                                         |

---

## K. Ce que ce dossier ne couvre pas

- **Ce qui a été modifié le 30 août 2026 :** `page.tsx` (corps, tableaux,
  `legalSources`, FAQ), `content-quality.test.ts` (deux contrôles ajoutés, quatre
  récrits avec leur motif) et la seule entrée `cahier-des-charges-saas` de
  `src/lib/guides.ts` (`dateModified`). Rien d'autre : ni les autres guides, ni
  les manifestes, ni le moteur de la trame, ni les images.
- **Aucune jurisprudence n'a été consultée** : c'est la raison pour laquelle
  l'affirmation « se plaide encore » a été retirée de la page. Elle ne figure
  plus ni dans l'article, ni dans ce dossier, ni dans les tests.
- **Aucun relevé de marché n'a été fait** : ni sur les prix de développement SaaS,
  ni sur la longueur usuelle d'un cahier des charges, ni sur la fréquence des
  écarts entre devis. L'article n'en publie aucun ; ce dossier n'en fournit
  aucun.
- **L'exclusion du calibre reste une décision d'éditeur non prise** : section H.
- **Le rendu en navigateur n'a pas été observé** ; le rendu HTML a été lu deux
  fois — celui produit par les tests, et celui servi par le serveur local, dont
  chaque passage corrigé a été relu mot à mot le 30 août 2026.
- **Les trois illustrations n'ont pas été relues sur le fond.** Leur présence en
  SVG et en WebP est vérifiée par test ; ce qu'elles montrent ne l'est pas.

---

## L. Comment refaire cette vérification en une heure

Pour un lecteur extérieur qui voudrait tout recontrôler seul, dans l'ordre :

1. `npx vitest run src/app/guides/cahier-des-charges-saas` — 89 tests doivent
   passer. Un échec désigne exactement le chiffre qui a bougé.
2. Ouvrir la page, relever les huit lignes du premier tableau, refaire les trois
   additions de G.2 (C-01 à C-03).
3. Refaire les quatre divisions qui portent les ratios : 129 000 ÷ 34 000,
   129 000 ÷ 58 000, 85 000 ÷ 58 000, 44 000 ÷ 27 000.
4. Ouvrir les URL de la section D.2 et retrouver les passages relevés en D.1.
   Aucune ne demande de manœuvre : l'URL du Data Act publiée par l'article sert
   bien les articles 25, 29 et 50 (D.3).
5. Télécharger le fichier ASVS 5.0.0 de la branche `v5.0.0` et compter : 345
   exigences, 17 chapitres (C-21). Sur l'export tabulé, attention à la ligne
   vide de fin de fichier, qui a déjà produit un 346 fautif.
6. Ouvrir `src/components/tarifs/body.ts` et vérifier que les quatre montants
   maison cités par le guide y figurent encore.
7. Lire la section F et se demander, pour chacune des trente et une hypothèses,
   si l'article la présente bien comme choisie et non comme observée.

Le point le plus fragile n'est ni un calcul ni une source : c'est la frontière
entre les deux. Un lecteur pressé peut repartir avec « les devis SaaS varient de
1 à 3,8 » comme s'il s'agissait d'une mesure. Ce n'en est pas une, et la page le
dit six fois.
