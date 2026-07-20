export const problemsHtml = `
<!-- PROBLEMS -->
<section class="mob-problems">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Situations-types fictives</div>
        <h2>Six exemples pour cadrer<br>le besoin réel.</h2>
      </div>
      <div class="right">
        Ces exemples sont fictifs et ne décrivent ni un client ni une fréquence observée.
        Ils servent à identifier les hypothèses à vérifier avant tout chiffrage.
      </div>
    </div>

    <div class="mob-problems-grid">
      <div class="mob-problem-card reveal">
        <div class="mob-problem-ic">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
        </div>
        <h3>« Mes clients fidèles n'utilisent plus mon site web »</h3>
        <p>
          Vos meilleurs clients reviennent sur leur téléphone, taper l'URL est une friction.
          Vous voyez votre trafic baisser sur les visites récurrentes alors que les concurrents
          avec une app gardent un canal direct sur l'écran d'accueil.
        </p>
        <div class="mob-problem-foot">Ce qu'on construit : <b>une app mobile dédiée à la rétention</b> (push, fidélité, 1-tap).</div>
      </div>

      <div class="mob-problem-card reveal reveal-d-1">
        <div class="mob-problem-ic">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
        </div>
        <h3>« Les agences me proposent des devis disproportionnés pour un MVP »</h3>
        <p>
          Plusieurs offres peuvent reposer sur des hypothèses différentes de périmètre, d'équipe et de recette.
          Vous avez besoin d'un MVP priorisé et d'un planning réaliste, pas d'un calendrier présenté comme certain avant cadrage.
        </p>
        <div class="mob-problem-foot">Ce qu'on propose : <b>discovery payant puis devis forfaitaire selon le délai annoncé au cadrage</b>.</div>
      </div>

      <div class="mob-problem-card reveal reveal-d-2">
        <div class="mob-problem-ic">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
        </div>
        <h3>« J'ai payé une PWA / un site mobile, et personne n'installe »</h3>
        <p>
          On vous a vendu une PWA pour faire des économies, mais aucun client ne l'ajoute à son écran d'accueil,
          il n'y a pas de push iOS digne de ce nom, et votre concurrent avec une vraie app sur l'App Store
          paraît plus crédible. La PWA a sa place, pas pour de la rétention récurrente.
        </p>
        <div class="mob-problem-foot">Ce qu'on fait : <b>vraie app native React Native</b> publiée sur les 2 stores.</div>
      </div>

      <div class="mob-problem-card reveal">
        <div class="mob-problem-ic">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
        </div>
        <h3>« On a une app, elle a 3 étoiles et personne ne la maintient »</h3>
        <p>
          L'agence d'origine a disparu, les utilisateurs laissent des avis 1 étoile, l'app crashe
          au démarrage sur les iPhone récents. Vous payez l'abonnement Apple Developer chaque année pour une app fantôme.
          Vous savez qu'il faut décider : refondre ou enterrer.
        </p>
        <div class="mob-problem-foot">Ce qu'on fait : <b>audit honnête (gratuit) puis reprise ou refonte au forfait</b>.</div>
      </div>

      <div class="mob-problem-card reveal reveal-d-1">
        <div class="mob-problem-ic">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1z"/></svg>
        </div>
        <h3>« J'ai une idée d'app mobile, pas de CTO, pas le temps de recruter »</h3>
        <p>
          Vous avez identifié un besoin et peut-être obtenu de premiers signaux, sans disposer encore d'une équipe mobile interne.
          Vous voulez tester le concept avant de structurer durablement l'équipe. Le MVP, son niveau de finition et son calendrier se définissent après validation des hypothèses.
        </p>
        <div class="mob-problem-foot">Ce qu'on propose : <b>build + transfert</b> — ou co-build si vous recrutez ensuite.</div>
      </div>

      <div class="mob-problem-card reveal reveal-d-2">
        <div class="mob-problem-ic">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6"/></svg>
        </div>
        <h3>« Mes équipes terrain perdent 1 h / jour à recopier des Excels »</h3>
        <p>
          Commerciaux, livreurs, techniciens ou agents de service prennent encore des commandes et relevés
          sur papier ou Excel, puis les ressaisissent. Le temps réellement évitable doit être observé avant de chiffrer
          le gain attendu d'une app métier.
        </p>
        <div class="mob-problem-foot">Ce qu'on construit : <b>app B2B terrain offline-first</b> branchée à votre ERP.</div>
      </div>
    </div>
  </div>
</section>
`;
