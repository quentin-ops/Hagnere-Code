import { TEAM_PUBLIC_COMPOSITION, TEAM_TOTAL_COUNT } from "@/lib/team";

export const proofStripHtml = `
<!-- PROOF STRIP · pages publiques, profils publics, engagements à cadrer
     Aucune statistique client ici : Hagnéré Code n'a pas encore de client externe. -->
<section class="me-proof-strip">
  <div class="wrap">
    <div class="me-proof-strip-inner reveal">
      <div class="me-proof-item">
        <div class="me-proof-n">4<span>pages</span></div>
        <div class="me-proof-k">Disponibilité et fonctions<br>visibles publiquement</div>
      </div>
      <div class="me-proof-sep"></div>
      <div class="me-proof-item">
        <div class="me-proof-n">${TEAM_TOTAL_COUNT}<span>profils</span></div>
        <div class="me-proof-k">Présentés publiquement,<br>statut transparent</div>
      </div>
      <div class="me-proof-sep"></div>
      <div class="me-proof-item">
        <div class="me-proof-n">Au<span>devis</span></div>
        <div class="me-proof-k">Disponibilité cible<br>selon la criticité</div>
      </div>
      <div class="me-proof-sep"></div>
      <div class="me-proof-item">
        <div class="me-proof-n">P1<span>cadré</span></div>
        <div class="me-proof-k">Canal, horaires et<br>délai cible écrits</div>
      </div>
    </div>
    <div class="me-proof-strip-note reveal reveal-d-1">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
      Ces pages publiques ne prouvent ni leur conception, ni leur exploitation, ni leurs résultats. ${TEAM_PUBLIC_COMPOSITION}. Les personnes mobilisées et les objectifs de service sont confirmés dans le devis.
    </div>
  </div>
</section>
`;
