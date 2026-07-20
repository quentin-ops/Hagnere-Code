export const scenariosHtml = `
<!-- SCÉNARIOS PROJET E-COMMERCE (toggle interactif) -->
<section class="ec-scenarios" data-active="new">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Votre point de départ</div>
        <h2>Trois situations,<br>trois chemins clairs.</h2>
      </div>
      <div class="right">
        Ces trois points de départ servent à structurer la discussion. Cliquez sur le plus proche du vôtre :
        les livrables, l'équipe, la durée et le prix restent à confirmer après cadrage.
      </div>
    </div>

    <div class="ec-scen-tabs reveal" role="tablist">
      <button type="button" class="ec-scen-tab" data-scenario="new" role="tab" aria-selected="true">
        <span class="ec-scen-tab-k">SCÉNARIO 01</span>
        <span class="ec-scen-tab-t">Nouvelle boutique</span>
        <span class="ec-scen-tab-d">Durée sur devis</span>
      </button>
      <button type="button" class="ec-scen-tab" data-scenario="migration" role="tab" aria-selected="false">
        <span class="ec-scen-tab-k">SCÉNARIO 02</span>
        <span class="ec-scen-tab-t">Migration Shopify / Presta</span>
        <span class="ec-scen-tab-d">Durée sur devis</span>
      </button>
      <button type="button" class="ec-scen-tab" data-scenario="b2b" role="tab" aria-selected="false">
        <span class="ec-scen-tab-k">SCÉNARIO 03</span>
        <span class="ec-scen-tab-t">Refonte + B2B + multi-pays</span>
        <span class="ec-scen-tab-d">Durée sur devis</span>
      </button>
    </div>

    <!-- PANEL NEW -->
    <div class="ec-scen-panel" data-panel="new" role="tabpanel" aria-hidden="false">
      <div class="ec-scen-cols">
        <div class="ec-scen-col-main">
          <div class="ec-scen-kind">POUR QUI</div>
          <h3>Marque qui lance sa boutique<br>pour la première fois.</h3>
          <p>
            Vous avez des produits, une marque naissante ou une identité déjà posée, et vous voulez
            <b>démarrer sur des bases documentées</b>. Le cadrage compare une plateforme standard et le sur-mesure
            selon le besoin, le délai, les coûts tiers et le TCO sur 36 mois.
          </p>
          <div class="ec-scen-deliv">
            <h3>Ce qu'on livre</h3>
            <ul>
              <li>Charte graphique + Figma complet</li>
              <li>Storefront Next.js (jusqu'à ~500 produits)</li>
              <li>Stripe + Alma + 2 transporteurs FR</li>
              <li>Back-office ops + 1 ERP au choix</li>
              <li>Factur-X + Plateforme Agréée si le périmètre le requiert</li>
              <li>Mise en ligne + formation équipe</li>
            </ul>
          </div>
        </div>
        <aside class="ec-scen-aside">
          <div class="ec-scen-meta">
            <div class="ec-scen-meta-row"><span class="k">Durée</span><span class="v">Sur devis</span></div>
            <div class="ec-scen-meta-row"><span class="k">Équipe</span><span class="v">Dimensionnée au devis</span></div>
            <div class="ec-scen-meta-row"><span class="k">Prix</span><span class="v">Sur devis</span></div>
            <div class="ec-scen-meta-row"><span class="k">Démarrage</span><span class="v">Selon capacité et cadrage</span></div>
            <div class="ec-scen-meta-row"><span class="k">App mobile</span><span class="v">En option · sur devis</span></div>
          </div>
          <a href="#contact" class="btn btn-accent ec-scen-cta">
            Discuter de ce scénario
            <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <div class="ec-scen-ref">Décision attendue : plateforme, périmètre MVP, coûts tiers et critères de succès documentés.</div>
        </aside>
      </div>
    </div>

    <!-- PANEL MIGRATION -->
    <div class="ec-scen-panel" data-panel="migration" role="tabpanel" aria-hidden="true" hidden>
      <div class="ec-scen-cols">
        <div class="ec-scen-col-main">
          <div class="ec-scen-kind">POUR QUI</div>
          <h3>Boutique existante qui sature<br>son Shopify ou son Presta.</h3>
          <p>
            Votre coût Shopify contractuel (licence, apps et frais variables) devient significatif, ou votre Prestashop 1.7
            qui bugge tous les mois. Vous voulez <b>reprendre le contrôle</b>, garder votre SEO, sortir
            l'app mobile, et comparer objectivement vos coûts sur 36 mois.
          </p>
          <div class="ec-scen-deliv">
            <h3>Ce qu'on livre</h3>
            <ul>
              <li>Tout le scénario "Nouvelle boutique"</li>
              <li>App iOS + Android si retenue au devis (React Native)</li>
              <li>Migration 5 000 produits + 10 000 clients</li>
              <li>Mapping 301 contrôlé + suivi SEO post-bascule</li>
              <li>1-2 marketplaces (Amazon, CDiscount…)</li>
              <li>Server-side tracking GA4 + Meta CAPI</li>
              <li>3 agents IA (reco, descriptions, SAV)</li>
            </ul>
          </div>
        </div>
        <aside class="ec-scen-aside">
          <div class="ec-scen-meta">
            <div class="ec-scen-meta-row"><span class="k">Durée</span><span class="v">Sur devis</span></div>
            <div class="ec-scen-meta-row"><span class="k">Équipe</span><span class="v">Dimensionnée au devis</span></div>
            <div class="ec-scen-meta-row"><span class="k">Prix</span><span class="v">Sur devis</span></div>
            <div class="ec-scen-meta-row"><span class="k">Démarrage</span><span class="v">Selon capacité et cadrage</span></div>
            <div class="ec-scen-meta-row"><span class="k">Écart vs Shopify</span><span class="v">Calculé avec vos coûts réels</span></div>
          </div>
          <a href="#contact" class="btn btn-accent ec-scen-cta">
            Discuter de ce scénario
            <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <div class="ec-scen-ref">Le simulateur ci-dessus documente le scénario sur 36 mois ; aucun gain ni délai n'est présumé avant saisie des contrats.</div>
        </aside>
      </div>
    </div>

    <!-- PANEL B2B -->
    <div class="ec-scen-panel" data-panel="b2b" role="tabpanel" aria-hidden="true" hidden>
      <div class="ec-scen-cols">
        <div class="ec-scen-col-main">
          <div class="ec-scen-kind">POUR QUI</div>
          <h3>Marque qui vend pros + particuliers,<br>dans plusieurs pays.</h3>
          <p>
            Vous voulez ouvrir un canal B2B (revendeurs, pros, grossistes) et vendre dans plusieurs pays.
            Les fonctions natives d'une plateforme, ses extensions et un développement dédié sont comparés
            avant de retenir l'architecture ; aucun moteur n'est écarté par principe.
          </p>
          <div class="ec-scen-deliv">
            <h3>Ce qu'on livre</h3>
            <ul>
              <li>Tout le scénario "Migration"</li>
              <li>B2B complet : tarifs pro, paiement 30 j, devis</li>
              <li>Multi-pays + multi-devise + TVA OSS intracom</li>
              <li>Multi-entrepôt + ship-from-store</li>
              <li>Programme fidélité + abonnements</li>
              <li>SSO entreprise pour vos revendeurs</li>
              <li>Accompagnement et durée définis au devis</li>
            </ul>
          </div>
        </div>
        <aside class="ec-scen-aside">
          <div class="ec-scen-meta">
            <div class="ec-scen-meta-row"><span class="k">Durée</span><span class="v">Sur devis</span></div>
            <div class="ec-scen-meta-row"><span class="k">Équipe</span><span class="v">Dimensionnée au devis</span></div>
            <div class="ec-scen-meta-row"><span class="k">Prix</span><span class="v">Sur devis</span></div>
            <div class="ec-scen-meta-row"><span class="k">Démarrage</span><span class="v">Selon capacité et cadrage</span></div>
            <div class="ec-scen-meta-row"><span class="k">Accompagnement</span><span class="v">Durée définie au devis</span></div>
          </div>
          <a href="#contact" class="btn btn-accent ec-scen-cta">
            Discuter de ce scénario
            <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <div class="ec-scen-ref">Décision attendue : pays, règles B2B, fiscalité, logistique et indicateurs de succès validés.</div>
        </aside>
      </div>
    </div>
  </div>
</section>
`;
