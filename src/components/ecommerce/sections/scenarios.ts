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
        La quasi-totalité des projets e-commerce qu'on prend entrent dans l'un de ces trois cas.
        Cliquez sur le vôtre : livrables, équipe, durée et prix s'ajustent.
      </div>
    </div>

    <div class="ec-scen-tabs reveal" role="tablist">
      <button type="button" class="ec-scen-tab" data-scenario="new" role="tab" aria-selected="true">
        <span class="ec-scen-tab-k">SCÉNARIO 01</span>
        <span class="ec-scen-tab-t">Nouvelle boutique</span>
        <span class="ec-scen-tab-d">6–8 semaines</span>
      </button>
      <button type="button" class="ec-scen-tab" data-scenario="migration" role="tab" aria-selected="false">
        <span class="ec-scen-tab-k">SCÉNARIO 02</span>
        <span class="ec-scen-tab-t">Migration Shopify / Presta</span>
        <span class="ec-scen-tab-d">8–12 semaines</span>
      </button>
      <button type="button" class="ec-scen-tab" data-scenario="b2b" role="tab" aria-selected="false">
        <span class="ec-scen-tab-k">SCÉNARIO 03</span>
        <span class="ec-scen-tab-t">Refonte + B2B + multi-pays</span>
        <span class="ec-scen-tab-d">12–16 semaines</span>
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
            <b>démarrer sur de vraies bases</b> — sans Shopify pour éviter les % à vie, sans Prestashop
            pour éviter la dette technique.
          </p>
          <div class="ec-scen-deliv">
            <h4>Ce qu'on livre</h4>
            <ul>
              <li>Charte graphique + Figma complet</li>
              <li>Storefront Next.js (jusqu'à ~500 produits)</li>
              <li>Stripe + Alma + 2 transporteurs FR</li>
              <li>Back-office ops + 1 ERP au choix</li>
              <li>Factur-X + Chorus Pro 2026-ready</li>
              <li>Mise en ligne + formation équipe</li>
            </ul>
          </div>
        </div>
        <aside class="ec-scen-aside">
          <div class="ec-scen-meta">
            <div class="ec-scen-meta-row"><span class="k">Durée</span><span class="v">Sur devis</span></div>
            <div class="ec-scen-meta-row"><span class="k">Équipe</span><span class="v">1 gérant + 1 designer + 1 dev senior</span></div>
            <div class="ec-scen-meta-row"><span class="k">Prix</span><span class="v">Sur devis</span></div>
            <div class="ec-scen-meta-row"><span class="k">Démarrage</span><span class="v">Sous 2 semaines</span></div>
            <div class="ec-scen-meta-row"><span class="k">App mobile</span><span class="v">En option · sur devis</span></div>
          </div>
          <a href="#contact" class="btn btn-accent ec-scen-cta">
            Discuter de ce scénario
            <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <div class="ec-scen-ref">Référence : marque DTC bijouterie — première année 180 k€ de GMV sans budget média.</div>
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
            Vous êtes sur Shopify Plus à 4 000 €/mois (licence + apps + fees), ou sur un Prestashop 1.7
            qui bugge tous les mois. Vous voulez <b>reprendre le contrôle</b>, garder votre SEO, sortir
            l'app mobile, et arrêter de reverser 2 % à chaque vente.
          </p>
          <div class="ec-scen-deliv">
            <h4>Ce qu'on livre</h4>
            <ul>
              <li>Tout le scénario "Nouvelle boutique"</li>
              <li><b>App iOS + Android incluse</b> (React Native)</li>
              <li>Migration 5 000 produits + 10 000 clients</li>
              <li>Mapping 301 exhaustif (zéro perte SEO)</li>
              <li>1-2 marketplaces (Amazon, CDiscount…)</li>
              <li>Server-side tracking GA4 + Meta CAPI</li>
              <li>3 agents IA (reco, descriptions, SAV)</li>
            </ul>
          </div>
        </div>
        <aside class="ec-scen-aside">
          <div class="ec-scen-meta">
            <div class="ec-scen-meta-row"><span class="k">Durée</span><span class="v">Sur devis</span></div>
            <div class="ec-scen-meta-row"><span class="k">Équipe</span><span class="v">1 gérant + 1 designer + 2 devs + 1 mobile</span></div>
            <div class="ec-scen-meta-row"><span class="k">Prix</span><span class="v">Sur devis</span></div>
            <div class="ec-scen-meta-row"><span class="k">Démarrage</span><span class="v">Sous 3 à 4 semaines</span></div>
            <div class="ec-scen-meta-row"><span class="k">Break-even vs Shopify</span><span class="v">~12–18 mois</span></div>
          </div>
          <a href="#contact" class="btn btn-accent ec-scen-cta">
            Discuter de ce scénario
            <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <div class="ec-scen-ref">Typique : boutique mode à 2 M€ GMV / an, sort de Shopify Plus, économise ~80 k€/an de frais.</div>
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
            Votre marque fait déjà du B2C à 3-10 M€/an, vous voulez ouvrir un canal B2B (revendeurs,
            pros, grossistes) et vendre dans 3-5 pays UE. Shopify Plus n'a pas les bons outils B2B,
            et un ERP pur n'a pas l'UX d'un e-commerce moderne.
          </p>
          <div class="ec-scen-deliv">
            <h4>Ce qu'on livre</h4>
            <ul>
              <li>Tout le scénario "Migration"</li>
              <li>B2B complet : tarifs pro, paiement 30 j, devis</li>
              <li>Multi-pays + multi-devise + TVA OSS intracom</li>
              <li>Multi-entrepôt + ship-from-store</li>
              <li>Programme fidélité + abonnements</li>
              <li>SSO entreprise pour vos revendeurs</li>
              <li>Accompagnement 6 mois inclus</li>
            </ul>
          </div>
        </div>
        <aside class="ec-scen-aside">
          <div class="ec-scen-meta">
            <div class="ec-scen-meta-row"><span class="k">Durée</span><span class="v">Sur devis</span></div>
            <div class="ec-scen-meta-row"><span class="k">Équipe</span><span class="v">1 gérant + 1 designer + 3 devs + 1 mobile + 1 IA</span></div>
            <div class="ec-scen-meta-row"><span class="k">Prix</span><span class="v">Sur devis</span></div>
            <div class="ec-scen-meta-row"><span class="k">Démarrage</span><span class="v">Sous 4 à 6 semaines</span></div>
            <div class="ec-scen-meta-row"><span class="k">Accompagnement</span><span class="v">6 mois post-lancement inclus</span></div>
          </div>
          <a href="#contact" class="btn btn-accent ec-scen-cta">
            Discuter de ce scénario
            <svg class="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
          <div class="ec-scen-ref">Typique : marque cosmétique 5 M€ B2C + lancement B2B + ouverture DE/IT — GMV x1,8 en 12 mois.</div>
        </aside>
      </div>
    </div>
  </div>
</section>
`;
