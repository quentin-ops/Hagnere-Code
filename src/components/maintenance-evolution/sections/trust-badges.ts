import { TEAM_PUBLIC_COMPOSITION, TEAM_TOTAL_COUNT } from "@/lib/team";

export const trustBadgesHtml = `
<!-- TRUST BADGES M&E — points à contractualiser -->
<section class="me-trust">
  <div class="wrap">
    <div class="me-trust-head reveal">
      <div class="eyebrow">— Cadre contractuel</div>
      <h2>Ce qui doit être écrit<br>avant de commencer.</h2>
      <p>La page décrit un cadre de travail. <b>Le devis signé fait foi</b> pour le périmètre, les délais, les niveaux de service, les prix et les éventuelles pénalités.</p>
    </div>

    <div class="me-trust-grid">
      <div class="me-trust-card reveal">
        <div class="me-trust-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 22v-2a8 8 0 0116 0v2"/></svg></div>
        <h4>Intervenants identifiés</h4>
        <p>Le devis nomme les personnes mobilisées, leurs rôles et leur statut. Il précise aussi les modalités de continuité en cas d'indisponibilité.</p>
        <div class="me-trust-foot">— Équipe propre à chaque mission</div>
      </div>

      <div class="me-trust-card reveal reveal-d-1">
        <div class="me-trust-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18"/></svg></div>
        <h4>Niveaux de service mesurables</h4>
        <p>Disponibilité, prise en charge, résolution, plage d'astreinte et méthode de mesure ne sont opposables que s'ils figurent au contrat signé.</p>
        <div class="me-trust-foot">— Objectifs et exclusions explicites</div>
      </div>

      <div class="me-trust-card reveal reveal-d-2">
        <div class="me-trust-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg></div>
        <h4>Comptes sous contrôle client</h4>
        <p>Dépôt, cloud et outils tiers peuvent être ouverts au nom du client. Les livrables spécifiques sont transférés après paiement complet conformément aux CGV.</p>
        <div class="me-trust-foot">— Licences tierces et éléments préexistants réservés</div>
      </div>

      <div class="me-trust-card reveal reveal-d-3">
        <div class="me-trust-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg></div>
        <h4>Vulnérabilités priorisées</h4>
        <p>Le contrat définit les sources d'alerte, niveaux de sévérité, délais cibles, responsabilités de validation et cas dépendant d'un éditeur tiers.</p>
        <div class="me-trust-foot">— Pas de délai universel hors contrat</div>
      </div>

      <div class="me-trust-card reveal">
        <div class="me-trust-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
        <h4>Consommation lisible</h4>
        <p>Volume, suivi, report éventuel des jours et procédure de changement sont détaillés au devis. Aucun report automatique n'est présumé.</p>
        <div class="me-trust-foot">— Règles financières écrites</div>
      </div>

      <div class="me-trust-card reveal reveal-d-1">
        <div class="me-trust-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9 8.5 8.5 0 018.5 8.5z"/></svg></div>
        <h4>Réversibilité préparée</h4>
        <p>Les CGV prévoient les éléments nécessaires à la reprise. Le préavis, le contenu et la durée d'une passation sont fixés par le contrat applicable.</p>
        <div class="me-trust-foot">— Inventaire des accès et livrables</div>
      </div>

      <div class="me-trust-card reveal reveal-d-2">
        <div class="me-trust-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg></div>
        <h4>Données et sous-traitants cadrés</h4>
        <p>Rôles RGPD, catégories de données, hébergeurs, sous-traitants, transferts et durées sont documentés selon l'application et les choix du client.</p>
        <div class="me-trust-foot">— DPA lorsque nécessaire</div>
      </div>

      <div class="me-trust-card reveal reveal-d-3">
        <div class="me-trust-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22V15"/></svg></div>
        <h4>${TEAM_TOTAL_COUNT} profils présentés publiquement</h4>
        <p><b>${TEAM_PUBLIC_COMPOSITION}</b>. Le devis indique lesquels interviennent réellement sur votre mission, sans masquer leur statut.</p>
        <div class="me-trust-foot">— Composition transparente</div>
      </div>
    </div>
  </div>
</section>
`;
