# Procédure de purge des données personnelles

> Document opérationnel interne. Cette procédure doit être exécutée au minimum
> une fois par trimestre tant qu'aucune tâche automatisée auditée ne la remplace.

## Périmètre

- `project_brief` : supprimer les demandes de prospects dont le dernier contact
  remonte à plus de 3 ans, après exclusion documentée des clients et obligations
  de conservation associées.
- `ai_call_log` : supprimer les lignes âgées de plus de 12 mois.
- Journaux Vercel, Neon, Resend, Google Workspace et Groq : vérifier séparément les politiques et
  réglages de rétention de chaque fournisseur ; ils ne sont pas purgés par les
  requêtes ci-dessous.

## Contrôles avant suppression

1. Utiliser une connexion à la bonne base et noter l'environnement visé.
2. Faire une sauvegarde vérifiée ou confirmer le point de restauration du fournisseur.
3. Exécuter d'abord les requêtes de comptage, puis faire relire le résultat par le
   responsable de traitement.
4. Ne jamais supprimer automatiquement un brief lié à un client, un litige, une
   obligation comptable ou une demande en cours.

```sql
SELECT COUNT(*) AS ai_logs_a_supprimer
FROM ai_call_log
WHERE created_at < now() - interval '12 months';

SELECT COUNT(*) AS briefs_prospects_a_revoir
FROM project_brief
WHERE updated_at < now() - interval '3 years';
```

## Exécution contrôlée

La suppression des logs peut être exécutée dans une transaction après validation :

```sql
BEGIN;
DELETE FROM ai_call_log
WHERE created_at < now() - interval '12 months';
-- Vérifier le nombre de lignes affectées avant COMMIT.
COMMIT;
```

La purge de `project_brief` exige d'abord une preuve externe distinguant prospects
et clients, car le schéma courant ne porte pas ce statut. Jusqu'à l'ajout d'un tel
champ ou d'un lien CRM fiable, elle reste une revue manuelle et ne doit pas être
remplacée par un `DELETE` aveugle.

## Traçabilité

Consigner la date, l'environnement, les comptages avant/après, la personne ayant
validé et les éventuelles exclusions, sans recopier les données personnelles.
