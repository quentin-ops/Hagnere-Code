// Section « ce qu'on refuse » propre au site vitrine.
// Attention : ce fichier était une copie mot pour mot de
// saas-applications/sections/refuse.ts (mêmes cas « clone de SaaS », « wrapper
// IA », « premier utilisateur payant »), qui n'ont aucun sens pour un prospect
// vitrine. refuse-not-duplicated.test.ts échoue si deux pages services
// repartagent le même texte.

export const refuseHtml = `
<!-- CE QU'ON REFUSE -->
<section class="sv-refuse">
  <div class="wrap">
    <div class="sv-refuse-grid">
      <div class="sv-refuse-intro reveal">
        <div class="eyebrow">— Les projets qu'on ne prend pas</div>
        <h2>Certains sites<br>ne peuvent pas se livrer.</h2>
        <p>
          On ne filtre ni sur le secteur, ni sur la taille du budget. On filtre sur ce qui
          rend un site vitrine <b>réellement livrable</b> : un arbitrage éditorial assumé,
          des contenus disponibles et des promesses tenables. Si votre dossier coche l'une
          des cases ci-contre, on le dit avant le devis plutôt qu'en cours de projet.
        </p>
        <div class="sv-refuse-foot">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>
          Écarter un cadrage impossible évite de livrer une vitrine que personne ne pourra ensuite faire vivre.
        </div>
      </div>

      <ul class="sv-refuse-list reveal reveal-d-1">
        <li>
          <div class="sv-refuse-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
          <div>
            <h3>Vitrines pour une activité non légale en France / UE</h3>
            <p>Allégations réglementées non autorisées, collecte de coordonnées sans base légale, revente de contacts sans consentement, activité non déclarée. On ne se pose même pas la question.</p>
          </div>
        </li>
        <li>
          <div class="sv-refuse-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
          <div>
            <h3>Refonte sans aucun arbitrage éditorial</h3>
            <p>"On refait tout, mais on ne supprime rien." Sans décision sur les pages qui disparaissent, fusionnent ou sont réécrites, une refonte reproduit l'ancien site avec une typographie plus récente.</p>
          </div>
        </li>
        <li>
          <div class="sv-refuse-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
          <div>
            <h3>Aucun contenu disponible, ni budget pour le produire</h3>
            <p>Ni textes, ni photos avec leurs droits, ni personne pour valider. Un site vitrine s'arrête toujours au même endroit : le contenu. Tant qu'il n'est ni fourni par vous, ni chiffré au devis, on ne signe pas.</p>
          </div>
        </li>
        <li>
          <div class="sv-refuse-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
          <div>
            <h3>Garantie de position ou de délai sur Google</h3>
            <p>"Première page sur ce mot-clé, sinon remboursé" — non. Personne ne maîtrise le classement d'un moteur. On s'engage sur des livrables techniques et éditoriaux, jamais sur une position ni sur une date d'indexation.</p>
          </div>
        </li>
        <li>
          <div class="sv-refuse-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
          <div>
            <h3>Réseaux de pages villes dupliquées</h3>
            <p>La même page déclinée sur des dizaines de communes avec le seul nom de ville changé. C'est une prise de risque côté moteur et une déception côté visiteur. On préfère moins de pages, réellement différentes.</p>
          </div>
        </li>
        <li>
          <div class="sv-refuse-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
          <div>
            <h3>Vitrines qui trompent le visiteur</h3>
            <p>Faux avis, compteurs d'urgence inventés, badges ou certifications non détenus, formulaires qui masquent ce qu'ils collectent. Une vitrine n'a pas à mettre en scène une réalité qui n'existe pas.</p>
          </div>
        </li>
        <li>
          <div class="sv-refuse-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
          <div>
            <h3>Cadrage qui change à chaque réunion, sans avenant</h3>
            <p>Arborescence rouverte après validation, gabarits ajoutés en cours de route, rabais redemandés à chaque jalon. On préfère le dire tôt et repartir sur un périmètre écrit.</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</section>
`;
