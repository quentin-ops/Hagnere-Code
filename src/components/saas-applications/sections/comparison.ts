import { TEAM_PUBLIC_COMPOSITION } from "@/lib/team";

export const comparisonHtml = `
<!-- COMPARISON SAAS -->
<section class="sa-compare">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Pour vous situer (honnêtement)</div>
        <h2>Bubble, Retool, freelance,<br>ou un vrai SaaS ?</h2>
      </div>
      <div class="right">
        On ne prétend pas être la bonne option pour tout le monde. Comparatif centré
        sur <b>construire un SaaS vendable</b> — pas un prototype, pas un outil interne, pas un MVP jetable.
      </div>
    </div>

    <div class="sa-cmp-table reveal">
      <div class="sa-cmp-head">
        <div class="sa-cmp-col sa-cmp-col-label"></div>
        <div class="sa-cmp-col">
          <div class="sa-cmp-kind">Option A</div>
          <div class="sa-cmp-title">No-code SaaS (Bubble, Softr)</div>
          <div class="sa-cmp-price">Build initial + abonnement + usages</div>
        </div>
        <div class="sa-cmp-col">
          <div class="sa-cmp-kind">Option B</div>
          <div class="sa-cmp-title">Low-code interne (Retool)</div>
          <div class="sa-cmp-price">Outil dev, pas un SaaS vendable</div>
        </div>
        <div class="sa-cmp-col">
          <div class="sa-cmp-kind">Option C</div>
          <div class="sa-cmp-title">Freelance SaaS</div>
          <div class="sa-cmp-price">Selon TJM et périmètre</div>
        </div>
        <div class="sa-cmp-col sa-cmp-col-us">
          <div class="sa-cmp-kind">Nous</div>
          <div class="sa-cmp-title">Hagnéré Code</div>
          <div class="sa-cmp-price">Devis forfaitaire par périmètre</div>
        </div>
      </div>

      <div class="sa-cmp-row">
        <div class="sa-cmp-col sa-cmp-col-label">Séparation des espaces clients</div>
        <div class="sa-cmp-col">Possible selon la plateforme et le modèle de données</div>
        <div class="sa-cmp-col sa-cmp-bad">N/A (pas prévu pour)</div>
        <div class="sa-cmp-col">Dépend de sa spécialité</div>
        <div class="sa-cmp-col sa-cmp-col-us sa-cmp-good"><b>Conçue selon le modèle et les risques</b></div>
      </div>

      <div class="sa-cmp-row">
        <div class="sa-cmp-col sa-cmp-col-label">Facturation SaaS (Stripe, webhooks, proratas)</div>
        <div class="sa-cmp-col">Connecteur ou plugin selon la plateforme</div>
        <div class="sa-cmp-col sa-cmp-bad">À coder soi-même</div>
        <div class="sa-cmp-col">À scoper en option</div>
        <div class="sa-cmp-col sa-cmp-col-us sa-cmp-good"><b>Intégrée si l'achat autonome l'exige ; sinon contrat et facture</b></div>
      </div>

      <div class="sa-cmp-row">
        <div class="sa-cmp-col sa-cmp-col-label">SSO entreprise (SAML, Google, Microsoft)</div>
        <div class="sa-cmp-col">Souvent réservé aux offres supérieures</div>
        <div class="sa-cmp-col sa-cmp-good">Oui mais pour l'interne</div>
        <div class="sa-cmp-col">Variable</div>
        <div class="sa-cmp-col sa-cmp-col-us sa-cmp-good"><b>Selon le contrat, pas par défaut</b></div>
      </div>

      <div class="sa-cmp-row">
        <div class="sa-cmp-col sa-cmp-col-label">Propriété du code</div>
        <div class="sa-cmp-col sa-cmp-bad">Application rarement exportable comme code autonome</div>
        <div class="sa-cmp-col sa-cmp-bad">Dépendance licence</div>
        <div class="sa-cmp-col">Oui, après négociation</div>
        <div class="sa-cmp-col sa-cmp-col-us sa-cmp-good"><b>Droits, dépôt et réversibilité au devis</b></div>
      </div>

      <div class="sa-cmp-row">
        <div class="sa-cmp-col sa-cmp-col-label">Passage à l'échelle (10k+ users)</div>
        <div class="sa-cmp-col">À valider par test de charge et limites du plan</div>
        <div class="sa-cmp-col sa-cmp-bad">Pas fait pour public</div>
        <div class="sa-cmp-col">Dépend du dev</div>
        <div class="sa-cmp-col sa-cmp-col-us sa-cmp-good"><b>Objectif et preuves de charge définis au devis</b></div>
      </div>

      <div class="sa-cmp-row">
        <div class="sa-cmp-col sa-cmp-col-label">IA native (agents, RAG, extraction)</div>
        <div class="sa-cmp-col">Via API, plugins ou automatisations</div>
        <div class="sa-cmp-col">Pas l'objet</div>
        <div class="sa-cmp-col">Si c'est sa spécialité</div>
        <div class="sa-cmp-col sa-cmp-col-us sa-cmp-good"><b>Modèle choisi selon coût, données et niveau de contrôle</b></div>
      </div>

      <div class="sa-cmp-row">
        <div class="sa-cmp-col sa-cmp-col-label">App mobile iOS/Android</div>
        <div class="sa-cmp-col">PWA, wrapper ou outil mobile dédié</div>
        <div class="sa-cmp-col sa-cmp-bad">Non</div>
        <div class="sa-cmp-col">Un spécialiste à part</div>
        <div class="sa-cmp-col sa-cmp-col-us sa-cmp-good"><b>React Native, même équipe, même API</b></div>
      </div>

      <div class="sa-cmp-row">
        <div class="sa-cmp-col sa-cmp-col-label">Continuité (congés, arrêt, turnover)</div>
        <div class="sa-cmp-col">N/A (plateforme)</div>
        <div class="sa-cmp-col">N/A (plateforme)</div>
        <div class="sa-cmp-col">Dépend de sa documentation et de son relais</div>
        <div class="sa-cmp-col sa-cmp-col-us sa-cmp-good"><b>${TEAM_PUBLIC_COMPOSITION}, relais organisé</b></div>
      </div>

      <div class="sa-cmp-row sa-cmp-row-verdict">
        <div class="sa-cmp-col sa-cmp-col-label">À choisir si…</div>
        <div class="sa-cmp-col">
          Vous validez<br>vite un usage simple<br>et acceptez la dépendance plateforme
        </div>
        <div class="sa-cmp-col">
          Outil <b>interne</b><br>adossé à des sources maîtrisées,<br>pas vendu à l'extérieur
        </div>
        <div class="sa-cmp-col">
          Compétence précise,<br>vous pilotez le produit<br>et sécurisez la continuité
        </div>
        <div class="sa-cmp-col sa-cmp-col-us">
          <b>SaaS vendu ou outil critique,</b><br>règles métier fortes,<br>réversibilité et exploitation cadrées
        </div>
      </div>
    </div>

    <div class="sa-cmp-disclaimer reveal">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 9v4M12 17h.01"/><circle cx="12" cy="12" r="10"/></svg>
      Pour décider sans raccourci, lire le <a href="/guides/no-code-ou-sur-mesure">comparatif no-code ou sur-mesure</a>
      puis le <a href="/guides/combien-coute-un-saas">budget complet d'un SaaS</a>. Vous pouvez ensuite
      <a href="#contact">faire relire votre périmètre pendant 30 minutes</a>.
    </div>
  </div>
</section>
`;
