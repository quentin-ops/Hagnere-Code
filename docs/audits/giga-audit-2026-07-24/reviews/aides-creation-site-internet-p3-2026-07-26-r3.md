# Contre-audit P3 R3 — `aides-creation-site-internet`

Date : **26 juillet 2026**  
Statut : **troisième candidat corrigé remis en double contre-audit à froid**  
Publication, déploiement et indexation : **non autorisés**

## 1. Pourquoi un R3

Le candidat R2 a été contrôlé sur le même manifeste immuable par deux
relecteurs indépendants :

```text
Audit pédagogie, logique et accessibilité : 90/100 — GO P4
P0 : 0 ; P1 : 0 ; P2 : 3

Audit factuel, juridique et financier : 82/100 — NO-GO P4
P0 : 0 ; P1 : 2 ; P2 : 5

Manifeste R2 au début et à la fin : 29/29 conforme pour les deux relecteurs
Décision retenue : NO-GO, conformément au verdict le plus sévère
```

Les deux P1 portaient sur le cumul de minimis. L'union des défauts à fermer
comprenait **2 P1 et 8 P2 distincts**.

## 2. Fermeture des défauts factuels et financiers

| Défaut R2                                                                       | Correction R3                                                                                                                                                                                                                                  | Preuve                                                    |
| ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| L'aide courante n'entrait pas dans le cumul.                                    | L'aide courante n'est ajoutée que si le règlement, l'État membre, l'entreprise unique, le montant notifié cohérent, le statut et la date d'octroi juridique sont documentés. Une théorie ou une demande n'est pas un octroi.                   | Tests à 299 000 € + 2 100 € et retrait de chaque preuve.  |
| Tout texte contenant « de minimis » devenait le régime général.                 | Classification explicite de 2023/2831, 1408/2013 et 717/2014. Un libellé générique reste non classé et déclenche une vigilance, jamais un faux plafond.                                                                                        | Contre-tests général, agricole, pêche et régime ambigu.   |
| Un seuil unique de 300 000 € masquait les plafonds sectoriels.                  | Général : 300 000 € sur trois années glissantes ; agriculture primaire : 50 000 € sur trois années glissantes ; pêche/aquaculture primaire : 40 000 € en France en 2026, seuil prudent de 30 000 € ailleurs sans preuve de l'option nationale. | Tests des seuils, de la France et d'un autre État.        |
| Les cumuls entre règlements n'étaient pas contrôlés.                            | Alerte séparée sur chaque sous-plafond, sur général + agriculture/pêche jusqu'à 300 000 €, et sur agriculture + pêche au plafond sectoriel combiné applicable.                                                                                 | Tests de cumul croisé et de séparation des groupes/États. |
| Le montant notifié disparaissait si le mode de paiement était inconnu.          | Le montant notifié prouvé reste visible ; aucune réduction de trésorerie n'est accordée tant que le mode et la part préalable ne sont pas documentés.                                                                                          | Notification 2 100 € avec mode inconnu.                   |
| Le total du registre dépendait de « même assiette ».                            | `registeredAidTotal` dépend seulement des montants valides ; seul `sameBaseAidTotal` devient indéterminé lorsque la même assiette reste inconnue ou invalide.                                                                                  | Entrée valide à 1 000 € avec état inconnu puis corrompu.  |
| Le montant du registre était ambigu pour un prêt ou une garantie.               | Le formulaire demande l'équivalent-subvention brut communiqué par l'autorité, ou le montant brut d'une subvention, jamais le nominal d'un prêt ou d'une garantie.                                                                              | Contrat visible et test de contenu.                       |
| Le paiement direct utilisait le vocabulaire d'un encaissement par l'entreprise. | Le fournisseur destinataire, le versement direct public, l'encaissement de l'entreprise à 0 € et le reste payé par l'entreprise sont séparés dans l'écran et le TXT.                                                                           | Scénarios remboursement, avance et paiement direct.       |

## 3. Fermeture des défauts d'accessibilité et d'état

| Défaut R2                                                              | Correction R3                                                                                                                                        | Preuve                                 |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| `notified → received` effaçait la preuve de notification.              | La preuve historique est conservée ; elle n'est effacée que lors du retour explicite à « aucune notification ».                                      | Test de transition dans les deux sens. |
| La région live restait sur l'ancien verdict après modification.        | Après une analyse demandée, toute modification qui change le résultat produit une annonce actualisée ; le formulaire initial ne parle pas en boucle. | Transition réelle entre deux verdicts. |
| Le focus tombait sur `body` après annulation ou confirmation du reset. | Le bouton déclencheur est mémorisé et reçoit de nouveau le focus après les deux sorties.                                                             | Tests annulation et confirmation.      |

## 4. Corrections documentaires et benchmark international

- La page et le dossier de recherche distinguent production primaire,
  transformation et commercialisation, fenêtres glissantes et exercices
  fiscaux, aide courante et aides antérieures.
- Le décret français établit le registre national ; la circulaire du Premier
  ministre du 3 mars 2026 est la preuve explicite du passage français de
  30 000 à 40 000 € pour la pêche.
- Les plafonds collectifs nationaux sont signalés comme hors du moteur.
- La ligne KfW ne dit plus que la justification de l'usage est facultative :
  seul le formulaire KfW cité est présenté comme une aide de travail
  facultative.
- Un contre-audit factuel froid de ces formulations a conclu
  **P0 = 0, P1 = 0, P2 = 0**.

Sources primaires principales :

- [règlement général (UE) 2023/2831](https://eur-lex.europa.eu/eli/reg/2023/2831/oj) ;
- [règlement agricole 1408/2013 consolidé](https://eur-lex.europa.eu/eli/reg/2013/1408/2024-12-16/fra) ;
- [règlement pêche et aquaculture 717/2014 consolidé](https://eur-lex.europa.eu/eli/reg/2014/717/2023-10-25/fra) ;
- [décret français 2025-1361](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000053177293) ;
- [circulaire du Premier ministre du 3 mars 2026](https://agriculture.gouv.fr/telecharger/153667) ;
- [KfW Digitalisierungs-Check](https://www.kfw.de/inlandsfoerderung/Unternehmen/Innovation-und-Digitalisierung/Digitalisierungs-Check/).

## 5. Vérifications du candidat R3

```text
Tests ciblés consolidés : 139/139, 7 fichiers
TypeScript global : conforme
ESLint ciblé : conforme
Prettier ciblé : conforme
Build Next.js direct : conforme
Pages statiques : 159/159
Suite SEO globale : 491/492
Défaut global restant : ancien manifeste P4 de
prioriser-fonctionnalites-mvp-saas sur src/lib/guides.ts
Défaut local aides-creation-site-internet : aucun
```

Le précontrôle global conserve cet unique écart historique hors périmètre. Le
build Next.js direct compile, contrôle TypeScript et génère les 159 pages.

## 6. Porte de sortie

Le présent rapport **ne s'auto-attribue aucune note**. R3 n'obtient un
**GO P4** que si deux relecteurs indépendants :

1. vérifient le nouveau manifeste commun au début et à la fin ;
2. rejouent les 2 P1 et les 8 P2 issus de R2 ;
3. contrôlent les corrections juridiques contre les sources primaires ;
4. recherchent de nouveaux contre-exemples ;
5. rendent chacun une note sur 100 avec `P0/P1/P2` ;
6. concluent séparément à `P0 = 0`, `P1 = 0` et à l'absence de P2 empêchant une
   expérience premium.

Un éventuel GO P3 n'autorise toujours ni publication ni indexation. La P4 doit
encore prouver le rendu réel aux dix largeurs, le clavier, les thèmes, les
scénarios du formulaire, le TXT, l'impression A4, l'image sociale, les
métadonnées, le statut robots et l'absence du sitemap.
