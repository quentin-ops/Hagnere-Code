# Procédure de purge des données personnelles

> Document opérationnel interne. Cette procédure doit être exécutée au minimum
> une fois par trimestre tant qu'aucune tâche automatisée auditée ne la remplace.

**Responsable de validation : Quentin Hagnéré.** L'exécution peut être déléguée
à une personne habilitée, mais la date, le périmètre, les résultats et les
exceptions doivent être revus et conservés. Ce document ne prouve pas qu'une
purge a été exécutée.

## Périmètre

- `project_brief` : supprimer les demandes de prospects dont le dernier contact
  remonte à plus de 3 ans, après exclusion documentée des clients et obligations
  de conservation associées.
- `ai_call_log` : supprimer les lignes âgées de plus de 12 mois.
- `funnel_analytics_event` : supprimer les événements âgés de plus de 13 mois.
- IP et user-agent éventuellement présents dans les colonnes historiques de
  `project_brief` : supprimer ou mettre à null au
  plus tard après 12 mois, sans attendre la suppression du brief, sauf nécessité
  précisément documentée liée à un incident ou un contentieux.
- Messageries, exports, fichiers locaux, environnements de test et éventuels CRM :
  appliquer la même durée que le dossier auquel ils se rattachent.
- Journaux et copies Vercel, Neon, Resend, Google Workspace, Zoho Mail, Groq, Calendly et — dès activation — la mesure Google (Ads/Analytics) :
  vérifier séparément le contrat, les paramètres et les procédures de suppression ;
  ils ne sont pas purgés par les requêtes ci-dessous.
- Sauvegardes : documenter leur cycle d'expiration, empêcher leur usage courant
  et réappliquer les suppressions si une sauvegarde est restaurée.

## Contrôles avant suppression

1. Utiliser une connexion à la bonne base et noter l'environnement visé.
2. Faire une sauvegarde vérifiée ou confirmer le point de restauration du fournisseur.
3. Exécuter d'abord les requêtes de comptage, puis faire relire le résultat par le
   responsable de traitement.
4. Ne jamais supprimer automatiquement un brief lié à un client, un litige, une
   obligation comptable ou une demande en cours.
5. Vérifier les demandes d'accès, rectification, opposition ou effacement en cours
   et les éventuels gels de conservation. Un gel doit être limité aux données et
   à la durée strictement nécessaires, avec accès restreint.
6. Vérifier que `updated_at` correspond réellement au dernier contact pertinent :
   une mise à jour purement technique ne doit pas prolonger artificiellement la durée.

```sql
SELECT COUNT(*) AS ai_logs_a_supprimer
FROM ai_call_log
WHERE created_at < now() - interval '12 months';

SELECT COUNT(*) AS evenements_parcours_a_supprimer
FROM funnel_analytics_event
WHERE created_at < now() - interval '13 months';

SELECT COUNT(*) AS briefs_prospects_a_revoir
FROM project_brief
WHERE updated_at < now() - interval '3 years';

SELECT COUNT(*) AS briefs_ip_ua_a_minimiser
FROM project_brief
WHERE created_at < now() - interval '12 months'
  AND (ip IS NOT NULL OR user_agent IS NOT NULL);
```

## Exécution contrôlée

La suppression des logs peut être exécutée dans une transaction après validation :

```sql
BEGIN;
DELETE FROM ai_call_log
WHERE created_at < now() - interval '12 months';

DELETE FROM funnel_analytics_event
WHERE created_at < now() - interval '13 months';
-- Vérifier le nombre de lignes affectées avant COMMIT.
COMMIT;
```

La minimisation des métadonnées techniques peut être exécutée séparément après
validation du comptage et des éventuelles exclusions documentées :

```sql
BEGIN;
UPDATE project_brief
SET ip = NULL,
    user_agent = NULL
WHERE created_at < now() - interval '12 months'
  AND (ip IS NOT NULL OR user_agent IS NOT NULL);
-- Vérifier le nombre de lignes affectées avant COMMIT.
COMMIT;
```

La requête ne modifie pas explicitement `updated_at`, afin de ne pas transformer
cette opération de minimisation en nouveau « contact » commercial. Vérifier le
comportement réel des déclencheurs de base avant la première exécution.

La purge de `project_brief` exige d'abord une preuve externe distinguant prospects
et clients, car le schéma courant ne porte pas ce statut. Jusqu'à l'ajout d'un tel
champ ou d'un lien CRM fiable, elle reste une revue manuelle et ne doit pas être
remplacée par un `DELETE` aveugle.

## Fournisseurs et autres emplacements

À chaque contrôle trimestriel, compléter la fiche suivante à partir du compte et
du contrat réellement utilisés. Ne pas recopier une durée non vérifiée depuis
une page commerciale.

| Emplacement | Données concernées | Durée/réglage vérifié | Action ou mécanisme | Preuve et date |
|---|---|---|---|---|
| Vercel | Requêtes, journaux, données transitant par les routes | [à vérifier] | [à compléter] | [à compléter] |
| Neon | Briefs, journaux applicatifs, sauvegardes | [à vérifier] | [à compléter] | [à compléter] |
| Resend | Messages transactionnels et métadonnées | [à vérifier] | [à compléter] | [à compléter] |
| Google Workspace | Courriels, pièces et corbeilles (domaine hagnere-patrimoine.fr, MX aspmx.l.google.com) | [à vérifier] | [à compléter] | [à compléter] |
| Zoho Mail (Zoho Corporation) | Courriels du domaine hagnere-code.ai, expéditeur des messages du site (MX mx.zoho.eu) | [à vérifier] | [à compléter] | [à compléter] |
| Google Ads / Google Analytics | Mesure de conversion, uniquement après consentement analytics et si `NEXT_PUBLIC_GOOGLE_ADS_ID` est posé. Aucun script n'est chargé sans ces deux conditions. | [à vérifier à l'activation] | [à compléter] | [à compléter] |
| Groq | Audio et journaux éventuels | [réglage réel à vérifier] | [à compléter] | [à compléter] |
| Calendly | Rendez-vous et métadonnées | [à vérifier] | [à compléter] | [à compléter] |
| Postes, exports et tests | Copies locales ou temporaires | [à vérifier] | [à compléter] | [à compléter] |

Si un fournisseur ne permet pas une suppression immédiate des sauvegardes, noter
le cycle d'expiration, les restrictions d'accès et l'engagement empêchant toute
réutilisation. Une demande de droit doit être propagée aux destinataires et
sous-traitants concernés dans le délai permettant à HAGNERE CODE de répondre en
principe sous un mois.

## Cas d'une demande d'effacement ou d'opposition

1. Vérifier l'identité uniquement en cas de doute raisonnable.
2. Recenser tous les emplacements à partir de la source, du compte et des échanges.
3. Distinguer suppression, anonymisation, restriction et conservation légalement nécessaire.
4. Propager l'action aux fournisseurs et destinataires concernés.
5. Informer la personne des actions, limites et voies de recours dans le délai applicable.
6. Conserver une preuve minimale de traitement de la demande sans recréer le dossier supprimé.

## Traçabilité

Pour chaque exécution, consigner dans un registre sécurisé :

- date, heure, environnement et version de la procédure ;
- personne ayant exécuté et personne ayant validé ;
- requêtes ou réglages utilisés et comptages avant/après ;
- fournisseurs et emplacements contrôlés ;
- exceptions, fondement, périmètre, responsable et date de réexamen ;
- incidents, erreurs, corrections et résultat final ;
- référence vers les preuves, sans recopier les données personnelles supprimées.

Une synthèse sans PII peut être conservée dans le dépôt. Les exports, captures ou
journaux contenant des identifiants restent dans un espace chiffré à accès
restreint. L'absence de trace d'exécution signifie que la purge n'est pas démontrée.
