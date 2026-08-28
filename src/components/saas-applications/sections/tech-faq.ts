export const techFaqHtml = `
<!-- TECH FAQ — pour CTO / décideurs techniques -->
<section class="sa-tfaq">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Pour les profils techniques</div>
        <h2>Les questions qu'un CTO<br>nous pose en call.</h2>
      </div>
      <div class="right">
        Huit décisions techniques à rendre explicites avant de confier un produit à une équipe.
        Les réponses ci-dessous décrivent notre méthode ; les choix finaux dépendent du contexte.
      </div>
    </div>

    <div class="sa-tfaq-list reveal reveal-d-1">
      <div class="faq-item">
        <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-saas-tech-1">
          Comment vous gérez les migrations de base en production ?
          <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
        </button>
        <div class="faq-a" id="faq-a-saas-tech-1" hidden>
          <b>Migrations SQL versionnées</b> + revue en pair avant merge. Déploiement
          zero-downtime (expand / migrate / contract) pour les schémas sensibles. Pour les
          grosses tables PostgreSQL, les données sont réécrites par lots avant de retirer l'ancien
          schéma. Le plan de retour arrière et la sauvegarde préalable font partie de la procédure de release.
        </div>
      </div>

      <div class="faq-item">
        <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-saas-tech-2">
          Quelle stratégie de queues et de jobs ?
          <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
        </button>
        <div class="faq-a" id="faq-a-saas-tech-2" hidden>
          Les tâches longues sortent du cycle HTTP : queue managée, workflow durable ou workers,
          selon l'infrastructure retenue. <b>Retries exponentiels</b>, idempotence, dead-letter queue,
          limites de débit et seuils d'alerte sont définis par type de tâche. Les traitements IA
          disposent de budgets, délais maximums et points de validation humaine quand le risque l'exige.
        </div>
      </div>

      <div class="faq-item">
        <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-saas-tech-3">
          Vos stratégies de backup et de disaster recovery ?
          <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
        </button>
        <div class="faq-a" id="faq-a-saas-tech-3" hidden>
          On commence par fixer le <b>RPO</b> (perte de données acceptable) et le <b>RTO</b>
          (durée maximale d'indisponibilité). Fréquence, rétention, réplication hors fournisseur
          et exercices de restauration sont ensuite inscrits dans le runbook. Une sauvegarde
          n'est considérée utile que si sa restauration est testée selon la fréquence contractuelle.
        </div>
      </div>

      <div class="faq-item">
        <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-saas-tech-4">
          Observabilité, logs, traces — qu'est-ce qu'on a ?
          <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
        </button>
        <div class="faq-a" id="faq-a-saas-tech-4" hidden>
          Erreurs front, back et mobile corrélées à une release ; logs structurés sans données
          sensibles ; métriques sur latence, jobs et base de données ; événements produit définis
          avec le métier. Les outils — Sentry, OpenTelemetry, PostHog ou équivalents — sont choisis
          avec l'hébergement. Les seuils et destinataires d'alerte sont documentés au runbook.
        </div>
      </div>

      <div class="faq-item">
        <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-saas-tech-5">
          Comment vous tenez la charge à 10 000+ users actifs ?
          <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
        </button>
        <div class="faq-a" id="faq-a-saas-tech-5" hidden>
          Le nombre d'inscrits ne suffit pas : on chiffre les utilisateurs simultanés, les pics,
          les volumes de données et les traitements coûteux. L'architecture reste stateless quand
          c'est pertinent ; PostgreSQL est indexé à partir des requêtes réelles ; cache et queues
          ne sont ajoutés que s'ils retirent un goulot mesuré. Des tests de charge valident le seuil cible.
        </div>
      </div>

      <div class="faq-item">
        <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-saas-tech-6">
          Votre stratégie de tests ?
          <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
        </button>
        <div class="faq-a" id="faq-a-saas-tech-6" hidden>
          <b>Pyramide classique</b>. Unit tests sur la logique métier (Vitest).
          Feature tests sur chaque route critique (billing, auth, permissions).
          <b>End-to-end Playwright</b> sur les 5 parcours utilisateurs principaux.
          Tests IA <b>déterministes</b> avec mocks de réponses LLM. CI GitHub Actions
          bloque le merge si la couverture des modules critiques baisse.
        </div>
      </div>

      <div class="faq-item">
        <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-saas-tech-7">
          SSO SAML / SCIM pour un plan entreprise — vous savez faire ?
          <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
        </button>
        <div class="faq-a" id="faq-a-saas-tech-7" hidden>
          <b>Oui, nativement</b>. SAML 2.0 via WorkOS ou intégration directe (Azure AD,
          Okta, Google Workspace, JumpCloud). SCIM pour le provisioning / deprovisioning auto.
          Audit logs conservés horodatés. C'est souvent un feature-flag réservé aux plans
          entreprise — on gère le pricing gating côté billing dès la livraison.
        </div>
      </div>

      <div class="faq-item">
        <button type="button" class="faq-q" aria-expanded="false" aria-controls="faq-a-saas-tech-8">
          Vous êtes auditables ? Pen test, SOC2, audit de code extérieur ?
          <span class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></span>
        </button>
        <div class="faq-a" id="faq-a-saas-tech-8" hidden>
          <b>Oui.</b> Le code et l'infrastructure peuvent être audités par un tiers choisi par le client.
          On prépare les environnements, fournit la documentation nécessaire et traite les écarts
          dans le périmètre convenu. Les contrôles automatisés (types, dépendances, analyse statique)
          complètent un pen test ; ils ne le remplacent pas et ne valent pas certification SOC 2.
        </div>
      </div>
    </div>
  </div>
</section>
`;
