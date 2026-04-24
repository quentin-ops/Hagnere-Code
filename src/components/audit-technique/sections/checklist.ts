export const checklistHtml = `
<!-- DELIVERABLES · Ce qu'il y a dans votre rapport (12 inclus + 6 extras) -->
<section class="at-check">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Ce qu'il y a dans votre rapport</div>
        <h2>Douze livrables inclus,<br>six extras facturables —<br>tarifs publics.</h2>
      </div>
      <div class="right">
        « Audit » chez Hagnéré ne veut pas dire « un PDF générique de 80 pages ». Voici la liste <b>exhaustive</b>
        des artefacts livrés dans chaque audit Standard — plus ce qui est en option si votre contexte le demande.
        <b>Sample anonymisé téléchargeable</b> avant signature.
      </div>
    </div>

    <div class="at-check-grid">
      <!-- INCLUS -->
      <div class="at-check-col at-check-in reveal">
        <div class="at-check-head">
          <div class="at-check-badge at-check-badge-in">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>
            INCLUS DANS L'AUDIT STANDARD · 18 k€
          </div>
          <h3>Douze livrables, à chaque audit.</h3>
        </div>
        <ul class="at-check-list">
          <li>
            <div class="at-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Rapport PDF 40-70 pages</b> — structuré par les 8 dimensions auditées, chaque recommandation chiffrée en jours/homme + priorité P1/P2/P3.</div>
          </li>
          <li>
            <div class="at-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Tech Debt P&amp;L · livrable signature</b> — dette technique traduite en euros, breakdown par dimension, coût de remédiation 6/12/18 mois. Le document que votre board va lire en premier.</div>
          </li>
          <li>
            <div class="at-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Deck exécutif 12-18 slides</b> — format 16:9, board-ready, éditable Keynote/Google Slides. Pensé pour être présenté en 20 min par votre CEO ou CTO.</div>
          </li>
          <li>
            <div class="at-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Version board-safe</b> — même contenu, mais <b>anonymisée</b> (sans noms de devs), no-blame, sans détails qui pourraient se retourner en négo salariale ou en M&amp;A.</div>
          </li>
          <li>
            <div class="at-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Backlog priorisé Notion / Linear</b> — 20 à 30 tickets actionnables, chiffrés en j/h et €, taggés par dimension et priorité. Votre CTO peut les injecter en sprint dès J+11.</div>
          </li>
          <li>
            <div class="at-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Matrice impact × effort 2×2</b> — les 28 tickets placés graphiquement&nbsp;: quick wins, strategic, fill-ins, back-burner. Aide à la décision pour les 90 jours suivants.</div>
          </li>
          <li>
            <div class="at-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Score /100 par dimension</b> — 8 scores + score global pondéré. Méthodologie ISO 19011 documentée, benchmark percentile vs. base propriétaire Hagnéré (47 audits comparables).</div>
          </li>
          <li>
            <div class="at-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Diagrammes archi C4 AS-IS + TO-BE</b> — system, container, component. Exportés SVG + PDF, réutilisables dans votre documentation long-terme.</div>
          </li>
          <li>
            <div class="at-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Loom de restitution 20-30 min</b> — asynchrone, partageable avec votre board, VC ou acquéreur. Signé Quentin + l'auditeur lead.</div>
          </li>
          <li>
            <div class="at-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Roadmap remédiation 6/12/18 mois</b> — 3 scenarios (conservateur, médian, ambitieux), chacun chiffré en j/h et capex. Votre CFO peut l'intégrer au budget N+1.</div>
          </li>
          <li>
            <div class="at-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>Exports techniques bruts</b> — SAST (SonarQube/Semgrep), dépendances CVE (Snyk), logs benchmarks, profils de performance. Vos devs peuvent creuser.</div>
          </li>
          <li>
            <div class="at-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg></div>
            <div><b>NDA mutuel + clause de non-conflit d'intérêt</b> — signés à J0. 100 % de l'audit déduit d'une mission de remédiation &gt; 50 k€ si vous nous la confiez (optionnel, aligne nos intérêts).</div>
          </li>
        </ul>
      </div>

      <!-- HORS SCOPE / EXTRAS -->
      <div class="at-check-col at-check-out reveal reveal-d-1">
        <div class="at-check-head">
          <div class="at-check-badge at-check-badge-out">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 6l12 12M6 18L18 6"/></svg>
            EXTRAS · FACTURÉS SÉPARÉMENT SI BESOIN
          </div>
          <h3>Six options<br>selon votre contexte.</h3>
        </div>
        <ul class="at-check-list at-check-list-out">
          <li>
            <div class="at-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
            <div><b>Pentest externe agréé CERT-FR · +8 à 15 k€</b> — partenaire spécialisé, OWASP top 10 complet, rapport CVSS, obligatoire pour SOC2 / ISO 27001 sérieuses.</div>
          </li>
          <li>
            <div class="at-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
            <div><b>Retest post-remédiation 60-90j · +3 à 6 k€</b> — 30 % du prix initial. Vérifie que les recos P1/P2 ont été implémentées correctement. Livrable "après / avant" chiffré.</div>
          </li>
          <li>
            <div class="at-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
            <div><b>Shadow CTO 1 mois post-audit · +8 à 15 k€</b> — un de nos seniors accompagne votre équipe (ou votre nouveau CTO) pendant 4 semaines pour embarquer les premières recommandations sans dérapage.</div>
          </li>
          <li>
            <div class="at-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
            <div><b>Restitution board physique · +1,5 à 3 k€</b> — demi-journée sur site à Paris/Lyon/Chambéry, Quentin + l'auditeur lead présentent au CA, répondent aux questions.</div>
          </li>
          <li>
            <div class="at-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
            <div><b>FinOps deep-dive cloud · +4 à 8 k€</b> — 3-5 j supplémentaires sur l'optimisation AWS/OVH/Scaleway/GCP. Économies typiques identifiées&nbsp;: 20-40 % du budget cloud annuel.</div>
          </li>
          <li>
            <div class="at-check-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
            <div><b>Couche IA / LLM · +3 à 6 k€</b> — si votre app utilise Claude / GPT / Gemini&nbsp;: audit des prompts, coût tokens, hallucination monitoring, observabilité IA, conformité Act AI.</div>
          </li>
        </ul>

        <div class="at-check-note">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
          Les extras sont <b>chiffrés à l'avance</b> dans le devis initial. Aucun extra facturé pendant l'audit sans votre accord écrit. <b>Pas de "petites précisions" déguisées en avenants</b>.
        </div>
      </div>
    </div>
  </div>
</section>
`;
