# Reprise P3 R20 → R21 — `aides-creation-site-internet`

Date de consolidation : 26 juillet 2026  
Périmètre : guide public, moteur local, interface, tests, recherche et benchmark  
Statut : **candidat R21 sans note ni GO ; P4 non lancée**

## 1. Verdict froid du gel R20

Le manifeste
`docs/research/manifests/aides-creation-site-internet-p3-2026-07-26-r19.sha256`
contient **64 fichiers**. Son SHA-256 est
`e37ee2703b375f2bb0ff97c729d3c3dfe163798a0f2f1dfb1cd6a8f0a8232019`.
Le contrôle froid factuel, juridique et financier a vérifié ce même gel
**64/64 au début et à la fin**, sans écriture.

Son verdict est **72/100 — NO-GO P4** (`P0 : 0 ; P1 : 2 ; P2 : 1`). Les trois
écarts reproduits sont :

1. les fusions, acquisitions et scissions n’étaient pas modélisées ;
2. le mandat SIEG et l’existence d’une compensation relative au même service
   n’étaient pas établis séparément ;
3. la documentation active décrivait encore trois règlements reconnus alors
   que le moteur en reconnaissait quatre.

Le premier axe ayant bloqué P4, aucun audit UX R20 n’a été lancé. Cette note
appartient uniquement au gel R20 : elle n’est ni reportée ni extrapolée au
candidat R21.

## 2. Registre fermé dans le candidat R21

| Clé                                                   | Défaut R20 reproduit                                                                                                                             | Fermeture intégrée au candidat R21                                                                                                                                                                                                                                                                                                                                                                               | Preuve locale                                                                                                                                                                                                                                              |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **R21-F-P1-01 — fusions, acquisitions et scissions**  | Le registre d’aides antérieures pouvait rester inchangé après une restructuration et produire un cumul incomplet.                                | Le profil distingue désormais l’existence de l’événement, son type, sa preuve et le statut d’ajustement de l’historique. Le contrôle vaut pour les quatre familles reconnues. Une fusion ou acquisition reprend toutes les aides antérieures des entreprises participantes ; une scission suit d’abord le bénéficiaire ou l’activité, puis applique le repli réglementaire lorsque l’affectation est impossible. | Matrices des quatre règlements, trois types d’événement, statuts `unknown`/`no`/`yes`, preuve manquante, historique non ajusté et rapport TXT. Les aides régulièrement octroyées avant une fusion ou acquisition ne sont pas requalifiées rétroactivement. |
| **R21-F-P1-02 — mandat et compensation du même SIEG** | Une référence au règlement SIEG pouvait coexister avec un mandat absent ou inconnu et avec une autre compensation du même service non contrôlée. | Pour le seul règlement `2023/2832`, le moteur sépare le mandat écrit ou électronique, sa preuve, l’identité exacte du service, l’existence d’une autre compensation relative au même SIEG et sa preuve. Un mandat absent, inconnu ou non prouvé suspend le verdict. Une autre compensation du même SIEG bloque le cumul, qu’elle constitue ou non une aide d’État.                                               | Cas courant et lignes du registre ; service identique ou distinct ; compensation `unknown`/`no`/`yes` ; nettoyage des valeurs et preuves lors des bascules ; limitations visibles même si le cumul chiffré reste incomplet.                                |
| **R21-F-P2-01 — quatre règlements reconnus**          | Des formulations documentaires actives continuaient à annoncer trois règlements après l’ajout du régime SIEG.                                    | Le moteur et les documents actifs décrivent une liste syntaxique fermée de quatre règlements : général `2023/2831`, SIEG `2023/2832`, agriculture `1408/2013` et pêche/aquaculture `717/2014`. Les mentions de trois règlements ne subsistent que dans des snapshots historiques explicitement antérieurs à l’ajout SIEG.                                                                                        | Contrat qualité : chaque clé R21 apparaît exactement une fois dans chacun des trois documents de référence ; inventaire positif et négatif des formes numérotées, CELEX et ELI ; messages harmonisés dans le moteur, le formulaire, la page et le TXT.     |

Le moteur conserve une frontière stricte entre faits structurés et pièces
déclarées : il ne lit, ne parse, n’authentifie et ne qualifie juridiquement ni
un mandat, ni un acte de restructuration, ni une compensation, ni une autre
preuve. Une chaîne de texte ne peut pas promouvoir un statut structuré.

## 3. Bornage réglementaire primaire

| Source officielle                                                                                                                          | Règle intégrée et bornage                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Règlement (UE) 2023/2831](https://eur-lex.europa.eu/eli/reg/2023/2831/oj/fra/pdf), article 3(8)-(9)                                       | Fusion ou acquisition : reprendre les aides antérieures des entreprises participantes pour la nouvelle aide. Scission : affecter au bénéficiaire, en principe à l’activité reprise ; à défaut, répartir proportionnellement selon la valeur comptable du capital des nouvelles entreprises à la date effective. |
| [Règlement (UE) 2023/2832](https://eur-lex.europa.eu/eli/reg/2023/2832/oj/fra), considérant 9, article 3(8)-(9) et article 5(2)            | Même règle de restructuration ; service confié par écrit ou par voie électronique ; interdiction de cumuler avec toute autre compensation relative au même SIEG, qu’elle constitue ou non une aide d’État.                                                                                                      |
| [Règlement (UE) no 1408/2013 consolidé au 16 décembre 2024](https://eur-lex.europa.eu/eli/reg/2013/1408/2024-12-16/fra), article 3(9)-(10) | Même mécanique pour le régime agricole, avec ses propres paragraphes et sans importer les plafonds des autres familles.                                                                                                                                                                                         |
| [Règlement (UE) no 717/2014 consolidé au 25 octobre 2023](https://eur-lex.europa.eu/eli/reg/2014/717/2023-10-25/fra), article 3(8)-(9)     | Même mécanique pour la pêche et l’aquaculture, avec ses propres limites et sans reconnaissance de règlements hors liste.                                                                                                                                                                                        |

Le candidat ne déduit pas l’applicabilité réelle de ces textes à partir d’un
numéro de règlement. Il exige toujours que l’autorité, le bénéficiaire,
l’activité, l’ordre des actes, le cumul, les dates, l’entreprise unique et les
pièces pertinentes soient vérifiés séparément.

## 4. Validation consolidée du candidat R21

| Contrôle                                     | Résultat                                                                                                                                 |
| -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Moteur décisionnel R21                       | **870/870 tests réussis**                                                                                                                |
| Interface, scénarios et axe-core             | **62/62 tests réussis**                                                                                                                  |
| Contrat documentaire, factuel et pédagogique | **37/37 tests réussis**                                                                                                                  |
| Moteur + interface + contrat qualité         | **969/969 tests réussis**                                                                                                                |
| TypeScript sans émission                     | conforme                                                                                                                                 |
| ESLint ciblé                                 | conforme                                                                                                                                 |
| Prettier sur les neuf fichiers R21           | conforme                                                                                                                                 |
| Vérification des espaces Git                 | conforme                                                                                                                                 |
| Corpus SEO complet                           | **491/492** ; seul échec : gel P4 historique de `prioriser-fonctionnalites-mvp-saas` sur `src/lib/guides.ts`, hors périmètre de ce guide |
| Construction Next.js directe                 | conforme ; TypeScript conforme et **159/159 pages statiques** générées                                                                   |

La construction directe a été utilisée pour isoler la preuve d’intégration de
ce guide après l’échec connu du contrôle SEO global. Elle ne transforme pas ce
dernier en succès : le résultat global reste explicitement **491/492**.

## 5. Preuve sur l’HTML réellement construit

Le fichier local construit
`.next/server/app/guides/aides-creation-site-internet.html` pèse **504 159
octets** au moment du contrôle. Il contient :

- le titre `Aides pour créer un site internet en 2026 · Hagnéré Code` ;
- un canonical unique
  `https://hagnere-code.ai/guides/aides-creation-site-internet` ;
- `noindex, nofollow` ;
- une URL Open Graph identique au canonical et une image annoncée en
  `1200 × 630` ;
- exactement deux blocs JSON-LD ;
- le prédiagnostic avant le dossier complet, puis les explications publiques
  sur les restructurations et le SIEG, avant le formulaire de contact ;
- **54 champs initiaux hors boutons** : 38 `input`, 14 `select` et 2
  `textarea` ;
- huit boutons dans le dossier initial, dont les deux exports désactivés ;
- aucun rapport imprimable, aucun résumé d’erreurs et aucun verdict rendu dans
  l’état initial ;
- aucun bloc conditionnel restructuration ou SIEG dans cet état initial ;
- la règle complète de fusion ou acquisition, le repli de scission sur la
  « valeur comptable du capital des nouvelles entreprises à la date effective
  de la scission », le mandat écrit ou électronique et la compensation du même
  SIEG.

Les comptes conditionnels sont verrouillés par les tests de rendu :

| État du dossier                            | Champs visibles |
| ------------------------------------------ | --------------: |
| État initial, base encore inconnue         |              54 |
| De minimis ordinaire, sans restructuration |              57 |
| De minimis ordinaire, avec restructuration |              59 |
| De minimis SIEG, sans restructuration      |              62 |
| De minimis SIEG, avec restructuration      |              64 |

Il n’existe pas de maximum global fixe : les lignes de devis, les aides
antérieures, le versement et certaines preuves ajoutent des contrôles. Les
tests couvrent aussi le focus clavier vers chaque erreur, la réinitialisation,
l’exemple Bretagne, la cohérence du TXT et de l’impression, ainsi que
l’effacement des preuves devenues sémantiquement incompatibles après une
bascule.

La version `site-aid-decision-r21-2026-07-26` n’est pas injectée dans l’HTML
initial : elle apparaît dans le rapport seulement après une analyse explicite.
Son export et sa stabilité sont testés séparément.

## 6. Empreintes centrales avant manifeste

```text
docs/research/aides-creation-site-internet.md
33661d76d5bffa6c800f7195aa22d518a76f4bbdbed821a3e6989cf987a08113

docs/research/aides-creation-site-internet-world-benchmark-2026-07-26-r1.md
d57a6d5c3e31e1eea40b2b8fedf654918653eadbb76377a6d8dda55f134c2a79

docs/audits/giga-audit-2026-07-24/guides/aides-creation-site-internet.md
50a762f248965b43d90ef94fe22e661372021f2570d65795bcf0d67230a0e0ed

src/app/guides/aides-creation-site-internet/page.tsx
00ca617d62511baafb58bb4891a5ae2ff93b0b306068eb178f2cdb95d0202d56

src/components/guides/SiteAidDecisionDossier.tsx
a2eaebe32df0dbc3ce327f8f35c2eb86880b5293cb4bb6e7ed750d67c687a73f

src/components/guides/SiteAidDecisionDossier.test.tsx
bd90538068d494f1c0677a1c92f75b05a49ea3d8df1b7dcd97d7786fe592ac1e

src/lib/site-aid-decision.ts
92124c5bf8e564fbde89b95590e9aa4152d7d7640576455645c7175958ca2577

src/lib/site-aid-decision.test.ts
cea259a0817e34454d2349815bcbbb2682d02099bcff6de76861f4ee77cbe34f

src/lib/site-aid-guide-quality.test.ts
699bb5e8445db09081d37e3f7146cda36912abe6e06706ea1e09723b9d6114fa
```

## 7. Porte suivante

Les tests, la construction et l’inspection statique prouvent seulement les
comportements couverts. Le candidat R21 complet reçoit dans ce rapport
**aucune note et aucun GO**.

La suite autorisée est :

1. créer le manifeste commun R20 ;
2. faire relire ce même gel par deux axes froids indépendants ;
3. rouvrir une boucle corrective si un P0, un P1 ou un P2 bloquant est
   reproduit ;
4. lancer P4 dans un navigateur réel et en impression uniquement après un
   double GO.

Ni déploiement, ni disponibilité en production, ni traitement du sitemap, ni
indexation Google, ni classement ne sont prouvés ou revendiqués ici.
