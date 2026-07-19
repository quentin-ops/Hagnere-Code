export const techFaqHtml = `
<!-- TECH FAQ e-commerce -->
<section class="ec-tfaq">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Pour les profils techniques</div>
        <h2>Les questions à documenter<br>avec votre lead tech.</h2>
      </div>
      <div class="right">
        Huit sujets à trancher avant signature. Les réponses ci-dessous décrivent notre méthode ;
        l'architecture, les niveaux de service et les outils retenus figurent dans le dossier du projet.
      </div>
    </div>

    <div class="ec-tfaq-list reveal reveal-d-1">
      <div class="faq-item">
        <div class="faq-q">
          Quelle stack préconisez-vous pour ce projet ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          Il n'existe pas de stack unique. Next.js et React peuvent porter le storefront ; TypeScript, PostgreSQL,
          Redis, Meilisearch ou pgvector sont retenus seulement si le besoin les justifie. React Native peut couvrir
          l'app mobile. Le moteur e-commerce, le fournisseur IA, le cloud et les services tiers sont comparés puis
          consignés dans une décision d'architecture avec leurs versions, coûts, limites et responsabilités.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Combien de commandes/minute votre infra tient-elle sous charge ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          Il n'y a pas de capacité générique : panier, promotions, stock, PSP, ERP et base de données n'ont pas les
          mêmes limites. On part de votre pic attendu, on définit un scénario k6, les jeux de données, seuils et
          services inclus, puis on livre le rapport. La capacité annoncée ne vaut que pour cette configuration et ce test.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Vous gérez comment la PCI-DSS côté paiement ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          Les composants hébergés ou tokenisés du prestataire de paiement peuvent réduire le périmètre PCI, mais le
          questionnaire et les obligations exactes dépendent de l'intégration et doivent être validés avec l'acquéreur
          ou un conseil compétent. Les données carte ne doivent pas être stockées ni journalisées par l'application ;
          les webhooks sont authentifiés, 3DS2/SCA gérés et le parcours de refus testé.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Migration depuis Shopify / Prestashop — procédure exacte ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          <b>Shopify</b> : export via Admin API (produits, collections, commandes, clients, metafields,
          redirections existantes). <b>Prestashop</b> : dump SQL + API webservice pour les attachements.
          L'import est conçu pour être rejouable. Le mapping 301 combine inventaire, règles automatiques et revue
          humaine : il ne se déduit pas correctement des seuls slugs. Le plan de recette précise les volumes,
          échantillons, contrôles de données et parcours à comparer avant la bascule.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Backup, DR, RTO/RPO ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          Le RPO et le RTO sont fixés selon le coût d'une perte de données et d'une indisponibilité. Le devis décrit
          les sauvegardes, leur chiffrement, la rétention, l'éventuelle copie chez un second fournisseur et la
          fréquence des tests de restauration. Un runbook identifie les responsables, accès et critères de succès.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Observabilité : logs, traces, alertes, dashboards ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          Logs, erreurs, métriques et traces sont choisis selon l'architecture. Les données personnelles et secrets
          sont minimisés ou masqués, les durées de conservation documentées et les accès limités. Le devis fixe les
          signaux utiles — erreurs 5xx, files, paiements, stock, disponibilité — ainsi que les seuils et canaux d'alerte.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          Tests : coverage, E2E, régression ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          Le plan de test part des risques : règles métier en unitaire, intégrations en tests de contrat, parcours
          critiques en E2E et contrôles de migration sur données représentatives. Les seuils de couverture ne remplacent
          pas les scénarios. Les fonctions IA sont testées avec jeux de référence, mocks et critères d'acceptation explicites.
        </div>
      </div>

      <div class="faq-item">
        <div class="faq-q">
          SLA maintenance, temps de déploiement, rollback ?
          <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
        </div>
        <div class="faq-a">
          Le SLA dépend du forfait de maintenance : plage de service, sévérités, délai de réponse, délai cible de
          rétablissement et exclusions sont écrits. Le pipeline prévoit staging, contrôles avant production et retour
          arrière ; ses durées sont mesurées sur l'infrastructure retenue, pas promises avec un chiffre générique.
        </div>
      </div>
    </div>
  </div>
</section>
`;
