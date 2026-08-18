# Reprise P3 R17 → R18 — `aides-creation-site-internet`

Date de consolidation : 26 juillet 2026  
Périmètre : guide, moteur local, interface, tests, recherche et benchmark  
Statut : **candidat R18 sans note ni GO ; P4 non lancé**

## 1. Double verdict du gel R17

Le manifeste
`docs/research/manifests/aides-creation-site-internet-p3-2026-07-26-r16.sha256`
contient **58 fichiers**. Son SHA-256 est
`550440f3e2d8bd798507782d7312eca572de53b06b93fbe13401e61eb87e8abc`.
Les deux contre-auditeurs ont vérifié ce même gel **58/58 au début et à la
fin**, sans aucune écriture.

Les verdicts indépendants sont :

| Axe froid                              | Note                          | Décision |
| -------------------------------------- | ----------------------------- | -------- |
| Factuel, juridique et financier        | **84/100** — P0 0, P1 1, P2 0 | NO-GO P4 |
| Expérience, pédagogie et accessibilité | **92/100** — P0 0, P1 0, P2 1 | GO P4    |

Le GO expérience reste propre à son axe. Le P1 factuel bloque la porte P4
globale. Ces notes appartiennent au gel R17 ; elles ne sont ni reportées ni
extrapolées au candidat R18.

## 2. Registre fermé dans le candidat R18

| Clé          | Défaut reproduit sur le gel R17                                                                                                                                                                       | Fermeture intégrée au candidat R18                                                                                                                                                                                                                                           | Preuve locale                                                                                                                                                                                         |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| R18-F-P1-01  | Seize séparateurs Unicode de catégorie Zs, placés aux douze positions de « à confirmer », formaient 192 cas. Le moteur R17 en laissait passer 128 lorsque le séparateur coupait le mot « confirmer ». | Le moteur R18 conserve une normalisation post-attribution dédiée, sans compactage global. Il construit un motif borné à partir de la liste fermée des marqueurs et autorise seulement Zs, espace, tabulation et retours entre leurs lettres. Le texte source n’est pas muté. | **192/192 cas Zs**, cinq cas espace, tabulation ou retours, cinq autres marqueurs d’incertitude, trois négatifs lexicaux et un contrôle de conservation de la source avec neutralisation dans le TXT. |
| R18-UX-P2-01 | La promesse « 5 à 10 minutes » pouvait être comprise comme la durée nécessaire pour remplir un dossier initial de 53 champs.                                                                          | La page réserve les 5 à 10 minutes au premier prédiagnostic qui trie les pistes. Elle distingue ensuite le dossier complet de 53 champs, avec devis, règlement, notification et preuves, estimé à 20 à 40 minutes ou davantage.                                              | Contrat éditorial, page source et HTML construit vérifient les deux temps et l’absence de promesse de complétion rapide.                                                                              |

## 3. Résultats froids conservés

Le contre-audit factuel n’a reproduit aucun autre défaut substantiel :

- le groupe de l’aide courante reste ancré à sa date juridique d’octroi, tandis
  que les autres groupes sont ancrés à la date de vérification du dossier ;
- les plafonds général, agricole et pêche, la période, l’octroi distinct du
  paiement et la qualification par régime restent bornés par les sources
  officielles ;
- prêt, garantie, ESB, contribution approuvée, paiement effectif et encaissement
  restent distincts ;
- TVA, base juridique, URL, document et identité non authentifiés restent
  inconnus ou soumis à validation externe ;
- la chronologie entre notification, octroi, facture finale, paiement direct et
  encaissement est contrôlée ;
- `.arpa`, les domaines réservés, les graphies Unicode exactes et la barrière
  interscripts restent traités de manière conservatrice ;
- les vingt et une lignes de tableaux Markdown contrôlées conservaient le bon
  nombre de cellules.

Le contre-audit expérience a confirmé l’exclusivité des confirmations, le focus
sûr, Échap, l’absence de mutation implicite, l’aide Unicode unique de 61 mots,
les références accessibles, axe-core, le découpage des trois blocs, les calculs
illustratifs, la profondeur décisionnelle et l’absence de jargon de régression
dans le contenu public.

## 4. Validation consolidée du candidat R18

| Contrôle                                             | Résultat                                                                                                                                 |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Suite ciblée sur sept fichiers                       | **916/916 tests réussis**                                                                                                                |
| Moteur R18 seul, sans cache                          | **773/773 tests réussis**                                                                                                                |
| Interface inchangée, axe-core inclus                 | **51/51 tests réussis**                                                                                                                  |
| Contrat documentaire et pédagogique                  | **30/30 tests réussis**                                                                                                                  |
| TypeScript sans émission                             | conforme                                                                                                                                 |
| ESLint ciblé                                         | conforme                                                                                                                                 |
| Prettier moteur et tests, version 3.6.2              | conforme                                                                                                                                 |
| Prettier page, interface et documents, version 3.9.6 | conforme                                                                                                                                 |
| Vérification des espaces et marqueurs Git            | conforme                                                                                                                                 |
| Corpus SEO complet                                   | **491/492** ; seul échec : gel P4 historique de `prioriser-fonctionnalites-mvp-saas` sur `src/lib/guides.ts`, hors périmètre de ce guide |
| Construction Next.js directe                         | conforme ; **159/159 pages statiques** générées                                                                                          |

La distinction de version Prettier évite une réécriture mécanique étendue des
types historiques du moteur. Elle n’affecte ni le comportement ni les tests.

La page construite contient :

- le titre `Aides pour créer un site internet en 2026 · Hagnéré Code` ;
- le canonical
  `https://hagnere-code.ai/guides/aides-creation-site-internet` ;
- `noindex, nofollow` ;
- une URL Open Graph identique au canonical ;
- deux blocs JSON-LD ;
- la version moteur R18 ;
- le premier prédiagnostic de 5 à 10 minutes, explicitement distinct du dossier
  complet de 53 champs en 20 à 40 minutes ou davantage ;
- les deux ancres temporelles et l’aide Unicode partagée unique ;
- aucune occurrence publique des trois noms artificiels relevés en R16.

Empreintes centrales du candidat :

```text
docs/research/aides-creation-site-internet.md
0daf216d4092edb8b04904d237e299e4c4864007982f839d6e85bbec0da089e3

docs/research/aides-creation-site-internet-world-benchmark-2026-07-26-r1.md
53691a82c166bf0d505091de55bf5168a482250565c838943afb51e69cd70911

docs/audits/giga-audit-2026-07-24/guides/aides-creation-site-internet.md
2fe82762f91afdc01c1f910472a4f6e87442d4f02fa0ae7d9771e6d88043b5d8

src/app/guides/aides-creation-site-internet/page.tsx
6cb57369d57c53158db4052a6441e63331f62ae2dc61c4f200a7d92f89512149

src/components/guides/SiteAidDecisionDossier.tsx
020db3299aba05e76f649ad22fa318e966d0ce6ef90dd9ac2f537d547561eb5b

src/components/guides/SiteAidDecisionDossier.test.tsx
8192632b2a6388898f85cd4f1177a308ae79f9be3ab3d96a62535e2a3d31e326

src/lib/site-aid-decision.ts
368e394b1f07849c3c4e76717a5102acc7144dadd3e98c77bc985a8b9023f831

src/lib/site-aid-decision.test.ts
c54daa033d6e9114f1dae2147d908c81e725ec229a0374383a31fd6444e1fee8

src/lib/site-aid-guide-quality.test.ts
a32949dfc96e431b29210aebd9f36480ebe8e57bf667313a3578c45c670d60d4
```

## 5. Porte suivante

Les contrôles intégrés prouvent seulement les comportements couverts. Le
candidat R18 reçoit dans ce rapport **aucune note et aucun GO**.

La suite autorisée est :

1. créer un nouveau manifeste commun immuable ;
2. faire relire ce même gel par deux axes froids indépendants ;
3. rouvrir une boucle corrective si un P0, un P1 ou un P2 bloquant est
   reproduit ;
4. lancer P4 en navigateur réel et en impression uniquement après un double
   GO.

Ni déploiement, ni disponibilité en production, ni traitement du sitemap, ni
indexation Google, ni classement ne sont prouvés ou revendiqués ici.
