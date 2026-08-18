# Reprise P3 R15 → R16 — `aides-creation-site-internet`

Date de consolidation : 26 juillet 2026  
Périmètre : guide, moteur local, interface, tests, recherche et benchmark  
Statut : **candidat R16 sans note ni GO ; P4 non lancé**

## 1. Double verdict du gel R15

Le manifeste
`docs/research/manifests/aides-creation-site-internet-p3-2026-07-26-r14.sha256`
contient **54 fichiers**. Son SHA-256 est
`5cfc1131e0d0ed42723b6869cf21123dfcc58cdc9998baaeae723aa6760c5a18`.
Les deux contre-auditeurs ont vérifié ce même gel **54/54 au début et à la
fin**, sans aucune écriture.

Les verdicts indépendants sont :

| Axe froid                              | Note                          | Décision |
| -------------------------------------- | ----------------------------- | -------- |
| Factuel, juridique et financier        | **84/100** — P0 0, P1 1, P2 2 | NO-GO P4 |
| Expérience, pédagogie et accessibilité | **86/100** — P0 0, P1 1, P2 2 | NO-GO P4 |

Ces notes appartiennent au gel R15. Elles ne sont ni reportées ni extrapolées
au candidat R16.

## 2. Défauts R15 et contrats du candidat R16

| Priorité      | Défaut reproduit                                                                                                                                                     | Fermeture intégrée au candidat R16                                                                                                                                                                                                                                                                                                                                                                                                   | Preuve locale                                                                                                                                                                |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| P1 factuel    | Des graphies latines face à des graphies grecques ou cyrilliques cohérentes pouvaient échapper au signal de proximité et supprimer l’alerte potentielle à 300 001 €. | Barrière conservatrice entre profils Latin, grec et cyrillique, limitée au même État membre et à la fenêtre pertinente. Elle suspend tous les groupes exacts concernés jusqu’à décision et preuve, sans jamais fusionner deux clés. Une identité cohérente seule ou répétée exactement reste calculable. La barrière peut sur-signaler ; elle ne prétend pas implémenter intégralement Unicode UTS #39 ni authentifier une identité. | Matrice `ha`/`һа`, `data`/`ԁата`, `wm`/`ԝм`, `co`/`ϲο`, recopie exacte, distinction documentée, même script, États différents, hors fenêtre et dates d’ancrage asymétriques. |
| P2 factuel    | Une barre verticale saisie par l’utilisateur pouvait fabriquer un pseudo-champ dans l’export TXT.                                                                    | Chaque barre verticale saisie est encodée `\u{007C}` et chaque antislash `\\`. Les séparateurs créés par le système restent distinguables.                                                                                                                                                                                                                                                                                           | Matrice de valeurs libres dans le profil, la source, le devis, les preuves, l’aide et le registre.                                                                           |
| P2 factuel    | Plusieurs domaines d’infrastructure ou à usage spécial sous `.arpa` restaient qualifiés de publics non vérifiés.                                                     | `.arpa` et tous ses sous-domaines sont refusés comme source d’autorité. Un faux voisin tel que `example.arpa.gouv.fr` reste recevable au seul niveau syntaxique ; un domaine public inconnu reste explicitement non authentifié.                                                                                                                                                                                                     | Cas `in-addr.arpa`, `ip6.arpa`, `6tisch.arpa`, `eap.arpa`, `ipv4only.arpa`, `resolver.arpa`, `service.arpa`, sous-domaines et faux voisins.                                  |
| P1 expérience | Les messages locaux reliés par `aria-errormessage` échouaient au contrôle axe-core complet et le résumé portait une relation ARIA non valide.                        | Chaque champ invalide référence son propre message par `aria-describedby`, en plus de son aide éventuelle. Le résumé est une région nommée et focalisable.                                                                                                                                                                                                                                                                           | axe-core complet sur dossier vide, exemple Bretagne incomplet et état dynamique avec aides antérieures ; IDREF et focus conservés.                                           |
| P2 expérience | Les confirmations mélangeaient `alert`, `alertdialog` et comportement non modal ; l’effacement focalisait d’abord l’action destructive.                              | Deux groupes non modaux nommés, Échap pour annuler, focus initial sur l’action sûre et retour au déclencheur. Aucune mutation avant confirmation explicite.                                                                                                                                                                                                                                                                          | Parcours chargement, annulation, remplacement, réinitialisation et retour de focus.                                                                                          |
| P2 expérience | Trois blocs visibles de 303, 307 et 240 mots étaient trop denses, dont un exposait le contrat de test interne au lecteur.                                            | Réécriture en étapes, exemples, listes et paragraphes courts. La valeur métier, le prochain geste et la réserve restent visibles sans vocabulaire de test.                                                                                                                                                                                                                                                                           | Contrôle des trois zones : au moins cinq unités visibles, profondeur conservée et aucune unité supérieure à 90 mots.                                                         |

Un durcissement supplémentaire, non scoré par les auditeurs, ferme l’ambiguïté
post-attribution : si le champ conserve « à confirmer » ou un autre marqueur
d’incertitude, le dossier reste incomplet jusqu’à l’obtention d’une réponse
écrite.

## 3. Références normatives utilisées

- [Unicode UTS #39](https://www.unicode.org/reports/tr39/) distingue notamment
  les confusables entre scripts entiers et rappelle qu’un squelette sert à la
  détection, pas à normaliser ou afficher une identité.
- Le [registre IANA des noms à usage
  spécial](https://www.iana.org/assignments/special-use-domain-names/special-use-domain-names.xhtml)
  précise que le statut spécial s’étend aux sous-domaines des noms listés.
- Les techniques W3C [ARIA21](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA21)
  et [notifications de
  formulaire](https://www.w3.org/WAI/tutorials/forms/notifications/) relient
  l’erreur au champ par une description accessible.

Ces références bornent une méthode de prudence. Elles ne prouvent aucune
identité, aucune autorité éditrice ni l’applicabilité juridique d’une aide.

## 4. Validation consolidée du candidat R16

| Contrôle                                 | Résultat                                                                                                                                 |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Suite ciblée sur sept fichiers           | **557/557 tests réussis**                                                                                                                |
| Moteur R16 seul, sans cache              | **420/420 tests réussis**                                                                                                                |
| Interface seule, axe-core complet inclus | **50/50 tests réussis**                                                                                                                  |
| Contrat documentaire et pédagogique      | **25/25 tests réussis**                                                                                                                  |
| TypeScript `--noEmit`                    | conforme                                                                                                                                 |
| ESLint ciblé                             | conforme                                                                                                                                 |
| Prettier ciblé                           | conforme après formatage final                                                                                                           |
| Corpus SEO complet                       | **491/492** ; seul échec : gel P4 historique de `prioriser-fonctionnalites-mvp-saas` sur `src/lib/guides.ts`, hors périmètre de ce guide |
| Construction Next.js directe             | conforme ; **159/159 pages statiques** générées                                                                                          |

La page construite contient :

- le titre `Aides pour créer un site internet en 2026 · Hagnéré Code` ;
- le canonical
  `https://hagnere-code.ai/guides/aides-creation-site-internet` ;
- `noindex, nofollow` ;
- une URL Open Graph identique au canonical ;
- deux blocs JSON-LD ;
- le champ post-attribution, sa FAQ et les explications R16 dans le HTML final.

Empreintes centrales du candidat :

```text
docs/research/aides-creation-site-internet.md
7bedea9e9c00d5cbf45bb42bfe6ab138a2dee2e85876db47194091aa1a0595a6

docs/research/aides-creation-site-internet-world-benchmark-2026-07-26-r1.md
f5cef9da195f1f2c754ceee289ba24a4b977247fe884a72c9ee97e0d1a9d6582

docs/audits/giga-audit-2026-07-24/guides/aides-creation-site-internet.md
f1c461b020a5b74fd67a8888a1db89a35608b6e493c590cee2564e8507d4f5b6

src/app/guides/aides-creation-site-internet/page.tsx
dcfa42df701ed25c821adf041ac1abb7f87f35fc84d9f71446da557b7e24b093

src/components/guides/SiteAidDecisionDossier.tsx
ca2f40a0f04912048dd63d4f7f09add8e18b81a40eb5d824fb5d9b38a0b1ef6a

src/components/guides/SiteAidDecisionDossier.test.tsx
001de98871d708742dad2d04deff6886bb883a5ff5c4bc757e86439ee2012469

src/lib/site-aid-decision.ts
cda9995077d8784c3235bc6f167fa42e971ff67dc1b1671e41ea096e0ada53e8

src/lib/site-aid-decision.test.ts
68a644f0826013bc3ac4cf5e18f2d56026ee3ac041e454e87dd4552b5ed76a7a

src/lib/site-aid-guide-quality.test.ts
a4357f9619b83b72734fb31ea4e4b076bf6e03a1abf2221dcb76c3a36db2e56c
```

## 5. Porte suivante

Les contrôles intégrés prouvent seulement les comportements couverts. Le
candidat R16 reçoit dans ce rapport **aucune note et aucun GO**.

La suite autorisée est :

1. créer un nouveau manifeste commun immuable ;
2. faire relire ce même gel par deux nouveaux axes froids indépendants ;
3. rouvrir une boucle corrective si un P0, un P1 ou un P2 bloquant est
   reproduit ;
4. lancer P4 en navigateur réel uniquement après un double GO.

Ni déploiement, ni disponibilité en production, ni traitement du sitemap, ni
indexation Google, ni classement ne sont prouvés ou revendiqués ici.
