export const aiAutomationsHtml = `
<!-- AI AUTOMATIONS E-COMMERCE -->
<section class="ec-ai">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow on-dark">— Claude intégré nativement</div>
        <h2 style="margin-top:14px">Six agents IA<br>qui bossent pendant que vous dormez.</h2>
      </div>
      <div class="right">
        Pas un chatbot en façade. Pas un "magic AI button" qui fait semblant. Des <b>agents Claude typés</b>
        branchés dans le produit, qui gagnent 15 à 30 h/semaine à votre équipe e-com.
      </div>
    </div>

    <div class="ec-ai-grid">
      <div class="ec-ai-card reveal">
        <div class="ec-ai-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg></div>
        <h3>Descriptions produit auto</h3>
        <p>
          Vous importez un CSV de 500 produits depuis votre fournisseur ? Claude génère <b>titre SEO +
          description longue + bullet points + meta description + traductions</b> dans vos 6 langues, en respectant
          votre ton de marque. 2 heures de rédacteur économisées par produit.
        </p>
        <div class="ec-ai-tag">Titre · Desc · Meta · 6 langues</div>
      </div>

      <div class="ec-ai-card reveal reveal-d-1">
        <div class="ec-ai-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg></div>
        <h3>Recherche sémantique</h3>
        <p>
          <code style="font-family:var(--font-geist-mono);font-size:12px;background:rgba(255,255,255,0.08);padding:2px 6px;border-radius:4px">"canapé beige pour petit salon"</code>
          → résultats pertinents. Pas de matching de tags, pas de "aucun résultat". Embeddings Voyage
          ou OpenAI indexés dans pgvector. <b>+15 à 30 %</b> de conversion sur les requêtes longues.
        </p>
        <div class="ec-ai-tag">pgvector · embeddings · RAG</div>
      </div>

      <div class="ec-ai-card reveal reveal-d-2">
        <div class="ec-ai-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21"/></svg></div>
        <h3>Recommandations personnalisées</h3>
        <p>
          "Complément à cette tenue", "autres clients comme vous ont aimé", "nouveautés qui vous
          correspondent". Pas de blackbox — on explique pourquoi chaque produit est recommandé,
          et le merchandiser peut surcharger les règles IA.
        </p>
        <div class="ec-ai-tag">Cross-sell · Up-sell · Reco contextuelle</div>
      </div>

      <div class="ec-ai-card reveal reveal-d-3">
        <div class="ec-ai-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></div>
        <h3>SAV augmenté</h3>
        <p>
          Ticket client qui arrive : Claude lit la commande, l'historique, les avis, classe le ticket
          (retour / livraison / produit / autre), rédige une <b>réponse brouillon</b> que votre équipe
          SAV valide en 15 secondes. Volume traité × 3 à coût constant.
        </p>
        <div class="ec-ai-tag">Classification · Draft response · Context</div>
      </div>

      <div class="ec-ai-card reveal">
        <div class="ec-ai-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h3"/></svg></div>
        <h3>Extraction factures fournisseurs</h3>
        <p>
          Vous recevez 50 PDF factures par semaine de vos fournisseurs ? L'agent lit chaque PDF,
          extrait <b>fournisseur, date, TVA, lignes articles, montants</b>, propose le rapprochement
          avec votre bon de commande et pousse dans Sage / Pennylane. 0 ressaisie.
        </p>
        <div class="ec-ai-tag">OCR · Validation · Push ERP</div>
      </div>

      <div class="ec-ai-card reveal reveal-d-1">
        <div class="ec-ai-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
        <h3>Relances panier abandonné intelligentes</h3>
        <p>
          Pas "vous avez oublié quelque chose". Claude regarde le <b>parcours du client, ses achats passés,
          le produit abandonné, la saison, le stock restant</b> et rédige une relance email personnalisée.
          Taux de récupération doublé vs template générique.
        </p>
        <div class="ec-ai-tag">Context-aware · Brevo / Klaviyo · A/B</div>
      </div>
    </div>

    <div class="ec-ai-note reveal">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/></svg>
      Chaque agent est <b>human-in-the-loop par défaut</b> — il propose, vous validez. On active le mode
      auto seulement sur les tâches où vous êtes à l'aise.
    </div>
  </div>
</section>
`;
