# RGPD SaaS B2B — revalidation P3 factuelle

Date : 24 juillet 2026  
Périmètre : page, composant local, moteur de préparation, tests, kit statique,
ZIP et dossier de recherche.  
Verdict : **GO éditorial local sous réserves de publication**  
Défauts : **P0 = 0 · P1 = 0 · P2 = 1**

Ce contrôle vérifie le contenu d’information générale. Il ne qualifie aucun
rôle, contrat, transfert, traitement, DPO, incident ou produit réel et ne
constitue pas un avis juridique.

## 1. Fermeture des quatre P1 du contre-audit

| P1   | Défaut observé                                      | Correction vérifiée                                                                                                                                                                                                | Verdict |
| ---- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| P1-1 | Le volet DPO s’arrêtait aux trois déclencheurs      | La page et le triage couvrent droit sectoriel, DPO interne/externe/mutualisé, connaissances, moyens, association précoce, indépendance, rattachement, missions, conflits, coordonnées et désignation CNIL          | fermé   |
| P1-2 | Les exemples Orbia ne décrivaient pas le même usage | La page, le questionnaire et le CSV suivent un SaaS fictif de formation ; facturation et IA sont séparées comme finalités distinctes                                                                               | fermé   |
| P1-3 | Les budgets pouvaient ressembler à des tarifs       | Chaque poste est une hypothèse supposée ; les additions sont des sous-totaux fictifs et incomplets ; tarifs, devis, amende, coût complet et comparaison d’offres sont explicitement exclus                         | fermé   |
| P1-4 | Le Data Act était trop général                      | La page reproduit le périmètre exact de l’article 31(1), la version d’essai de l’article 31(2), l’information de l’article 31(3) et le régime des frais de l’article 29 jusqu’au puis à compter du 12 janvier 2027 | fermé   |

## 2. Sources primaires rouvertes

| Sujet                             | Source officielle                                                                                                                                                                         | Fait retenu dans la page                                                                                                                    | Contrôle                 |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| Conception et réglages par défaut | [CNIL — chapitre IV du RGPD](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4), article 25                                                                          | mesures dès la conception ; quantité, étendue, durée et accessibilité limitées par défaut                                                   | exact                    |
| Collecte indirecte                | [CNIL — information et transparence](https://www.cnil.fr/fr/conformite-rgpd-information-des-personnes-et-transparence)                                                                    | information dès que possible, au plus tard dans un mois, sous réserve des événements plus précoces et exceptions                            | exact et borné           |
| DPO                               | [CNIL — articles 37 à 39](https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre4) et [guide du DPO](https://www.cnil.fr/fr/le-guide-du-delegue-la-protection-des-donnees) | trois déclencheurs, autres règles possibles, qualités, moyens, indépendance, missions, coordonnées, autorité et conflits                    | exact                    |
| Violations                        | [RGPD, articles 33 et 34](https://eur-lex.europa.eu/eli/reg/2016/679/oj)                                                                                                                  | rôle, prise de connaissance, contenu, notification échelonnée, documentation, risque élevé et exceptions                                    | exact                    |
| Changement de fournisseur         | [Data Act, articles 29 et 31](https://eur-lex.europa.eu/eli/reg/2023/2854/oj?locale=fr)                                                                                                   | frais réduits jusqu’au 12 janvier 2027 ; absence de frais de changement à compter de cette date ; régime particulier limité de l’article 31 | exact au 24 juillet 2026 |

La page demande de rouvrir les sources lorsqu’un fournisseur, un pays, une
finalité, une fonction IA, un contrat ou un texte change. Elle ne transforme
pas la date de revue en garantie de fraîcheur.

## 3. Recalculs indépendants

Les montants sont des hypothèses de construction, sans prétention de marché.

```text
PME 12 mois
3 900 + 2 500 + 2 000 + 3 000 = 11 400 €

Vente entreprise 36 mois
20 000 + 12 000 + 8 000 + (1 500 × 36) + (9 000 × 3)
+ (32 000 × 15 % × 3) = 135 400 €

Chaîne internationale 60 mois
35 000 + 20 000 + (2 000 × 60) + 15 000 = 190 000 €
Sensibilité fournisseur : 190 000 + 30 000 = 220 000 €
```

Trésorerie, temps interne, récurrent et inconnues restent séparés dans l’outil.
Une action incluse dans une autre n’est pas recomptée. Une inconnue n’est
jamais convertie en zéro.

## 4. Kit et parcours interactif

- ZIP : 12 entrées plates, 9 CSV et 3 Markdown ;
- test `unzip -t` : aucune erreur ;
- SHA-256 du ZIP :
  `bc5c70a600a7e259c8750c83c1f17bed9b90fc90e3eae9dacbd6f145d179ba5d` ;
- les neuf CSV restent rectangulaires, UTF-8 et sans cellule d’exemple
  commençant par un opérateur de formule ;
- le journal d’incident contient désormais prise de connaissance, périmètre,
  volumes, conséquences, mesures, rôle, point de contact, risque, notification,
  retard, compléments, article 34 et clôture ;
- le registre responsable contient minimisation, réglages par défaut, collecte
  directe/indirecte et preuve d’information article 13 ou 14 ;
- la remise à zéro exige deux actions et peut être annulée ;
- les erreurs des groupes radio sont nommées, reliées au groupe et décrites aux
  radios ;
- l’export interactif est un Markdown UTF-8 local, sans requête réseau ni
  stockage navigateur.

## 5. Vérifications exécutées

```text
Vitest ciblé : 5 fichiers, 98 tests, 98 réussis.
TypeScript --noEmit : réussi.
ESLint ciblé : réussi, 0 erreur et 0 avertissement.
Prettier ciblé : réussi.
git diff --check ciblé : réussi.
Route locale : HTTP 200.
Image sociale locale : HTTP 200, image/png.
ZIP local : HTTP 200.
Mesure du rendu : 7 018 mots, 35 min à 200 mots/min.
```

Le navigateur visuel réel n’a pas été utilisé pour ce gel. Les réponses HTTP
et le DOM testé ne remplacent pas une inspection 320–1440 px, clair/sombre et
clavier.

## 6. Hashes du noyau revalidé

| Fichier                                                 | SHA-256                                                            |
| ------------------------------------------------------- | ------------------------------------------------------------------ |
| `src/app/guides/rgpd-saas-b2b/page.tsx`                 | `4903475d0c0720cedf24f4bd03d5c6ad1dbe67decbe2b3377348275142a0caa7` |
| `src/app/guides/rgpd-saas-b2b/opengraph-image.tsx`      | `da204953aed7726844b20e5339bcf4303f459f76f1a9db1cc04d77d9c8e3496a` |
| `src/components/guides/RgpdSaasPreparationKit.tsx`      | `3c8943a090cc2b576a011171b1339f31cc64c505d8fe7347b2380e49f615cf6c` |
| `src/components/guides/RgpdSaasPreparationKit.test.tsx` | `d5acd35dd98481f2715e094161aae4110796461fc9c30618787cc37f99ec2ccc` |
| `src/lib/rgpd-saas-preparation-kit.ts`                  | `eb2548574347b75c7bc1660b38c13b0085ecbf3751ced6417f8f31f7484c1256` |
| `src/lib/rgpd-saas-preparation-kit.test.ts`             | `a36e737225e3227681853a4af7243ac33d5973a4147e1f6b64cbb8e72015cfe4` |
| `src/lib/rgpd-saas-guide-quality.test.ts`               | `df3ce394649244fb5d24eb9409b9e4c60ccd12fccf336a5046682e8528245701` |
| `public/ressources/kit-preparation-rgpd-saas-b2b.zip`   | `bc5c70a600a7e259c8750c83c1f17bed9b90fc90e3eae9dacbd6f145d179ba5d` |
| `docs/research/rgpd-saas-b2b.md`                        | `67f9b9dcfe916c45295c596484d49b39cfd08bcf7e11d949fc5bfd471edad86a` |

## 7. Réserve P2 et limites P3

Le rendu mesure 35 minutes et le registre partagé est aligné à 35 minutes. Le
seul P2 restant est le BAT navigateur exact.

Aucun rôle, DPA, transfert, AIPD, DPO, traceur, modèle IA, architecture,
incident, droit ou suppression réel n’est validé. Le verdict porte sur la
fidélité et l’utilité du contenu local, pas sur un cas client ni sur la
publication.
