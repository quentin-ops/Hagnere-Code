export const faqHtml = `
<!-- FAQ COMMERCIALE ADS -->
<section class="faq" id="faq">
  <div class="wrap">
    <div class="faq-grid">
      <div class="faq-intro reveal">
        <div class="eyebrow">— FAQ</div>
        <h2 style="margin-top:14px">Les 12 questions<br>qu'on nous pose<br>avant de signer.</h2>
        <p>Si la vôtre n'y est pas, <a href="#contact" style="color:var(--accent-ink);text-decoration:underline">écrivez-nous</a>. On répond sous 24 h ouvrées, par un consultant senior, sans détour.</p>
      </div>

      <div class="faq-list reveal reveal-d-1">
        <div class="faq-item open">
          <div class="faq-q">Combien de temps avant des résultats mesurables ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>Setup tracking + restructuration live à J+21</b>. Premier effet visible sur le CAC à 4-8 semaines (quand les algos se recalibrent sur les signaux propres). ROAS blended CRM stabilisé à 3-4 mois. On pose des jalons mensuels pour que vous puissiez juger la trajectoire avant d'avoir les résultats finaux.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">Le budget media reste sur nos comptes ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>Oui, toujours</b>. Le budget reste sur votre compte Google Ads / Meta / LinkedIn, facturé directement par les plateformes à votre entité. Notre forfait Hagnéré = prestation, point. Pas de commission sur le spend, pas de rebilling media.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">Pourquoi vous refusez le % du media ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Refus de principe&nbsp;: <b>conflit d'intérêt structurel</b>. Une agence rémunérée au pourcentage a intérêt à pousser votre budget, pas à faire baisser votre CAC. Le forfait fixe aligne nos objectifs sur les vôtres&nbsp;: efficacité, pas gonflette du spend.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">Si je ne suis pas satisfait au bout de 3 mois ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Revue de pilotage à 3 mois. Si les jalons ne sont pas atteints, on <b>ajuste la stratégie sans frais supplémentaire</b>. L'engagement contractuel est limité à 3 mois, puis reconductible mois par mois avec préavis de 30 jours. Comptes, pixels, creatives, GTM SS&nbsp;: tout reste chez vous.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">Vous garantissez un ROAS ou un CAC ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Non, et <b>personne de sérieux ne garantit un chiffre précis</b> sur Ads. Trop de variables&nbsp;: votre offre, votre landing, votre saisonnalité, la concurrence, les algos. Nous garantissons la méthode, la qualité des livrables, et des jalons mensuels documentés. Si à 3-4 mois la trajectoire n'est pas la bonne, on adapte sans facturer.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">Combien de temps prend le setup tracking server-side ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>3 semaines en moyenne</b> pour la stack complète&nbsp;: GTM Server déployé (Stape.io), Meta CAPI, Google Enhanced Conversions, LinkedIn Conv API, Consent Mode v2, webhook CRM, Looker Studio premier jet. Vos devs n'ont besoin que d'ajouter <b>un seul snippet</b> (ou une variable DNS) — on fait le reste.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">On a déjà un tracking, est-ce qu'il faut tout refaire ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Pas forcément. L'audit diagnostique ce qui est <b>sain, à patcher, à refaire</b>. 70 % des setups qu'on reprend ont&nbsp;: GTM client correct mais CAPI mal branchée, Consent Mode mal paramétré, dedupe absent, pas de webhook CRM. On récupère ce qui marche, on comble les trous, on ne refait pas pour refaire.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">Qui va s'occuper concrètement de mon compte ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>Un consultant senior dédié + un media buyer + un creative</b> selon le forfait. Pas de rotation, pas de chargé de compte entre vous et les exécutants. Vous avez leur ligne directe, réponse sous 4 h ouvrées en semaine. Nous limitons à <b>8 clients actifs par consultant</b> pour garantir du temps par compte.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">Quelle taille de budget media faut-il pour que ça vaille le coup ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            En dessous de <b>8 k€/mois de budget media</b>, notre forfait n'a pas un ROI évident — un freelance à la tâche suffit. Entre 8 et 20 k€ : forfait Starter pertinent. Entre 20 et 60 k€ : Scale. Au-delà de 60 k€ : Premium. C'est une règle empirique, pas une interdiction — on en discute en call.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">Vous produisez vraiment les creatives, ou c'est sous-traité ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            Tout <b>in-house</b>&nbsp;: motion design (After Effects), statics (Figma + AdKit), UGC (briefé par nous à des créateurs français vérifiés). Vous voyez les créateurs, vous validez les briefs, vous approuvez les livraisons avant mise en production. Pas de plateforme UGC low-cost qui livre de la bouillie.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">Si on part, on récupère quoi ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            <b>Tout</b>&nbsp;: vos comptes Ads (déjà chez vous), vos pixels, vos audiences 1P, votre conteneur GTM Server, vos templates Looker Studio, vos fichiers Figma / motion, votre Notion de pilotage, vos creatives validés. Passation de 2 semaines incluse&nbsp;: docs techniques + vidéos de transfert + 1 call avec le prestataire suivant si besoin.
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-q">C'est quoi exactement dans les 1 500 € de l'audit ?
            <div class="ic"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></div>
          </div>
          <div class="faq-a">
            2 semaines de travail&nbsp;: audit comptes Google + Meta + LinkedIn (ou Autres selon vos canaux), diagnostic tracking (signaux perdus, dedupe, Consent), décompte 12 mois du spend gaspillé, identification des 10 leviers à activer, roadmap 90 jours priorisée. Rapport 25-40 pages + restitution 90 min en visio. <b>Déduits à 100 % du 1er mois</b> si vous signez dans les 60 jours.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;
