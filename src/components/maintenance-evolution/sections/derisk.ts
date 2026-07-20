import { TEAM_PUBLIC_COMPOSITION } from "@/lib/team";

export const deriskHtml = `
<!-- DE-RISK M&E : 4 peurs du dirigeant / CTO -->
<section class="me-derisk">
  <div class="wrap">
    <div class="section-head reveal">
      <div class="left">
        <div class="eyebrow">— Les 7 peurs qu'on désamorce</div>
        <h2>Ce qui vous empêche de signer<br>un contrat TMA — et ce<br>qu'on fait pour.</h2>
      </div>
      <div class="right">
        Sept risques méritent d'être cadrés avant une TMA. Voici les points à écrire
        <b>dans votre devis et votre contrat</b> selon le niveau de service retenu.
      </div>
    </div>

    <div class="me-derisk-grid">
      <!-- PEUR 01 : Payer pour rien certains mois -->
      <div class="me-derisk-card reveal">
        <div class="me-derisk-fear">
          « Et si je paye le forfait et que je <b>n'ai rien à faire faire</b> certains mois ? »
        </div>
        <h4>Consommation visible et règles de report explicites</h4>
        <p>Le devis définit l'unité de consommation, le suivi partagé et le sort des jours non utilisés.
        Un report, une baisse de forfait ou un ajustement n'est applicable que s'il est écrit dans le contrat signé.</p>
        <div class="me-derisk-proof">
          <span>✓ Règle de consommation</span>
          <span>✓ Suivi partagé</span>
          <span>✓ Révision cadrée</span>
        </div>
      </div>

      <!-- PEUR 02 : Vendor lock-in -->
      <div class="me-derisk-card reveal reveal-d-1">
        <div class="me-derisk-fear">
          « Je vais être <b>enfermé avec vous</b> sans pouvoir partir. »
        </div>
        <h4>Comptes client et réversibilité décrite avant signature</h4>
        <p>Les comptes d'hébergement et outils tiers peuvent être ouverts au nom du client. Les CGV prévoient la remise
        des éléments nécessaires à la reprise&nbsp;; le préavis, la durée de passation et son coût éventuel sont précisés au devis.</p>
        <div class="me-derisk-proof">
          <span>✓ Comptes identifiés</span>
          <span>✓ Passation chiffrée</span>
          <span>✓ Livrables inventoriés</span>
        </div>
      </div>

      <!-- PEUR 03 : Rotation équipe -->
      <div class="me-derisk-card reveal reveal-d-2">
        <div class="me-derisk-fear">
          « L'équipe va <b>tourner</b> et la qualité va baisser au bout de 6 mois. »
        </div>
        <h4>Intervenants et continuité définis au devis</h4>
        <p>Les personnes effectivement mobilisées et leur statut sont nommés au devis. Hagnéré Code présente publiquement
        <b>${TEAM_PUBLIC_COMPOSITION}</b>. Le contrat peut fixer un recouvrement, un délai d'information et les modalités de remplacement selon le service retenu.</p>
        <div class="me-derisk-proof">
          <span>✓ Rôles nommés</span>
          <span>✓ Continuité cadrée</span>
          <span>✓ Statuts transparents</span>
        </div>
      </div>

      <!-- PEUR 04 : Incidents hors horaires -->
      <div class="me-derisk-card reveal reveal-d-3">
        <div class="me-derisk-fear">
          « Un incident la nuit / le week-end — <b>personne ne va répondre</b>. »
        </div>
        <h4>Couverture, escalade et objectifs mesurables</h4>
        <p>Une astreinte, un outil d'escalade, un temps de prise en charge, un post-mortem ou une pénalité
        ne s'appliquent que s'ils figurent au contrat. Le devis indique aussi les exclusions, dépendances tierces et méthode de mesure.</p>
        <div class="me-derisk-proof">
          <span>✓ Plage de couverture</span>
          <span>✓ Escalade définie</span>
          <span>✓ Mesure opposable</span>
        </div>
      </div>

      <!-- PEUR 05 : Complémentarité avec CTO interne -->
      <div class="me-derisk-card reveal">
        <div class="me-derisk-fear">
          « On a déjà un <b>CTO / lead dev</b> en interne — à quoi bon vous ? »
        </div>
        <h4>On est votre multiplicateur, pas votre remplaçant</h4>
        <p>Votre CTO se concentre sur le <b>core product</b>. Le devis peut confier au dispositif de run la surveillance, les correctifs de sécurité, les dépendances, les incidents et le reporting. Couverture, rituels, outils et décisions partagées sont définis avec l'équipe interne.</p>
        <div class="me-derisk-proof">
          <span>✓ Binôme CTO interne</span>
          <span>✓ Revue hebdo partagée</span>
          <span>✓ Archi co-signée</span>
        </div>
      </div>

      <!-- PEUR 06 : Localisation Savoie -->
      <div class="me-derisk-card reveal reveal-d-1">
        <div class="me-derisk-fear">
          « Vous êtes en Savoie, pas à Paris — <b>vous tiendrez la distance</b> ? »
        </div>
        <h4>Fuseau FR, coûts maîtrisés, binôme nommé au contrat</h4>
        <p>Le studio est basé à Bassens, aux portes de Chambéry, et travaille sur le fuseau horaire français. Notre collectif rassemble <b>${TEAM_PUBLIC_COMPOSITION}</b>. Les intervenants, leur statut, les horaires de collaboration et les éventuels déplacements sont précisés au devis.</p>
        <div class="me-derisk-proof">
          <span>✓ Studio à Bassens</span>
          <span>✓ Composition publique</span>
          <span>✓ Organisation au devis</span>
        </div>
      </div>

      <!-- PEUR 07 : Et si faillite / rachat -->
      <div class="me-derisk-card reveal reveal-d-2">
        <div class="me-derisk-fear">
          « Et si vous <b>faites faillite</b> ou vous faites <b>racheter</b> ? »
        </div>
        <h4>Plan de continuité proportionné au risque</h4>
        <p>Les dépôts, comptes et sauvegardes sont inventoriés avec le client. Pour une application critique, le devis peut prévoir
        une copie de documentation, une procédure de reprise, un tiers séquestre ou un prestataire secondaire réellement identifié. Rien n'est présenté comme acquis sans contrat correspondant.</p>
        <div class="me-derisk-proof">
          <span>✓ Dépendances inventoriées</span>
          <span>✓ Procédure de reprise</span>
          <span>✓ Options contractualisées</span>
        </div>
      </div>
    </div>
  </div>
</section>
`;
