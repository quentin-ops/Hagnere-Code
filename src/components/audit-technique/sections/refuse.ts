export const refuseHtml = `
<!-- REFUSE · 6 missions d'audit qu'on décline (audit technique) -->
<section class="at-refuse">
  <div class="wrap">
    <div class="at-refuse-grid">
      <div class="at-refuse-intro reveal">
        <div class="eyebrow">— Les audits qu'on ne prend pas</div>
        <h2>Certaines missions d'audit<br>ne nous intéressent pas.</h2>
        <p>
          On ne filtre pas sur le secteur — on filtre sur <b>l'intention de l'audit et les conditions d'exécution</b>.
          Si votre demande coche une de ces cases, on déclinera honnêtement — quel que soit le budget annoncé.
          Ces exclusions servent à rendre notre indépendance vérifiable et à signaler les conflits potentiels avant la mission.
        </p>
        <div class="at-refuse-foot">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>
          Refuser une mission mal cadrée est un moyen concret de protéger la qualité de celles qu'on accepte.
        </div>
      </div>

      <ul class="at-refuse-list reveal reveal-d-1">
        <li>
          <div class="at-refuse-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
          <div>
            <h3>Audits politiques · pour valider une position interne</h3>
            <p>« Notre CTO veut refondre, j'ai besoin d'un rapport qui confirme que c'est la bonne idée. » Non. Un audit se paye pour trancher honnêtement, pas pour valider une conclusion déjà décidée. Si vous voulez un avis orienté, achetez un consultant, pas un auditeur.</p>
          </div>
        </li>
        <li>
          <div class="at-refuse-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
          <div>
            <h3>Audits "boîte noire" · sans accès code ni entretiens</h3>
            <p>Certains acheteurs en M&A demandent un audit "externe uniquement" sans accès au repo ni entretiens. C'est un OSINT, pas un audit tech. On ne signe pas un rapport Hagnéré là-dessus&nbsp;: trop de risque d'être à côté, et <b>méthodologie ISO 19011 impossible à appliquer</b>.</p>
          </div>
        </li>
        <li>
          <div class="at-refuse-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
          <div>
            <h3>Audits suivis d'une refonte qu'on aurait chiffrée pendant l'audit</h3>
            <p>Si vous voulez que l'audit débouche sur une mission refonte chez nous, <b>on vous prévient dès le cadrage</b>&nbsp;: on ne chiffre pas cette refonte pendant l'audit. Le chiffrage est fait post-livraison par une autre équipe, indépendamment du rapport. Sinon, conflit d'intérêt évident.</p>
          </div>
        </li>
        <li>
          <div class="at-refuse-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
          <div>
            <h3>Audits anonymes contre un client existant ou ex-client</h3>
            <p>On ne signe jamais un audit sur une société qu'on a accompagnée en TMA ou en dev dans les <b>24 derniers mois</b>. Même si le demandeur est un acquéreur légitime. La relation historique biaise forcément — et c'est trahir la confiance accordée par l'ancien client.</p>
          </div>
        </li>
        <li>
          <div class="at-refuse-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
          <div>
            <h3>White-label pour d'autres cabinets de conseil ou ESN</h3>
            <p>On travaille en direct avec le client final et les intervenants sont identifiés dans le devis. <b>Pas de mission présentée comme indépendante sous la marque d'un tiers</b> sans transparence sur les responsabilités, les accès et la confidentialité.</p>
          </div>
        </li>
        <li>
          <div class="at-refuse-ic"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 6l12 12M6 18L18 6"/></svg></div>
          <div>
            <h3>Missions sans cadre de confidentialité avant les accès sensibles</h3>
            <p>Les règles de confidentialité figurent au contrat et un NDA spécifique peut être signé avant le partage de code ou de documents sensibles. <b>Aucun accès sensible n'est demandé tant que ce cadre n'est pas accepté.</b></p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</section>
`;
