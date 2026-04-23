// TODO: remplacer les 8 logos placeholder par vrais clients (PME tech FR/UE 10-500 salariés)
//       avec accord écrit, et vérifier les chiffres de l'attestation Hiscox + DPO certifié.
//       Tant que pas remplacé, le bandeau "logos illustratifs" reste affiché.

export const logoWallHtml = `
<!-- LOGO WALL · clients + signal de confiance discret -->
<section class="sr-logos">
  <div class="wrap">
    <div class="sr-logos-inner reveal">
      <div class="sr-logos-label">
        <span>Ils nous ont confié leur conformité</span>
        <span class="sr-logos-disclaimer">Logos illustratifs · références nominatives sur demande sous NDA</span>
      </div>
      <div class="sr-logos-row">
        <!-- 8 placeholder logos (SVG monochrome, prêts à remplacer) -->
        <div class="sr-logos-item">
          <svg viewBox="0 0 120 28" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect x="2" y="6" width="16" height="16" rx="3" fill="currentColor" opacity="0.25"/>
            <text x="24" y="20" font-family="Geist" font-size="14" font-weight="600" fill="currentColor">Linkura</text>
          </svg>
        </div>
        <div class="sr-logos-item">
          <svg viewBox="0 0 120 28" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="12" cy="14" r="8" fill="none" stroke="currentColor" stroke-width="1.6"/>
            <text x="26" y="20" font-family="Geist" font-size="14" font-weight="500" fill="currentColor" letter-spacing="0.02em">Orbeo</text>
          </svg>
        </div>
        <div class="sr-logos-item">
          <svg viewBox="0 0 120 28" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M2 22 L10 6 L18 22 Z" fill="none" stroke="currentColor" stroke-width="1.6"/>
            <text x="24" y="20" font-family="Geist Mono" font-size="13" font-weight="500" fill="currentColor" letter-spacing="0.04em">helix.fr</text>
          </svg>
        </div>
        <div class="sr-logos-item">
          <svg viewBox="0 0 120 28" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect x="2" y="9" width="6" height="10" fill="currentColor"/>
            <rect x="10" y="6" width="6" height="16" fill="currentColor" opacity="0.55"/>
            <text x="22" y="20" font-family="Geist" font-size="14" font-weight="600" fill="currentColor">Quaria</text>
          </svg>
        </div>
        <div class="sr-logos-item">
          <svg viewBox="0 0 120 28" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M2 14 Q8 4 14 14 T26 14" fill="none" stroke="currentColor" stroke-width="1.6"/>
            <text x="32" y="20" font-family="Geist" font-size="14" font-weight="500" fill="currentColor" letter-spacing="-0.01em">Wavebox</text>
          </svg>
        </div>
        <div class="sr-logos-item">
          <svg viewBox="0 0 120 28" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect x="2" y="6" width="16" height="16" rx="8" fill="none" stroke="currentColor" stroke-width="1.6"/>
            <circle cx="10" cy="14" r="3" fill="currentColor"/>
            <text x="24" y="20" font-family="Geist" font-size="14" font-weight="600" fill="currentColor">Nodel</text>
          </svg>
        </div>
        <div class="sr-logos-item">
          <svg viewBox="0 0 120 28" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M3 22 L10 6 L17 22 M5 17 L15 17" fill="none" stroke="currentColor" stroke-width="1.6"/>
            <text x="22" y="20" font-family="Geist" font-size="14" font-weight="500" fill="currentColor">Atomline</text>
          </svg>
        </div>
        <div class="sr-logos-item">
          <svg viewBox="0 0 120 28" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect x="2" y="6" width="6" height="16" fill="currentColor"/>
            <rect x="10" y="6" width="6" height="16" fill="currentColor" opacity="0.5"/>
            <rect x="18" y="6" width="6" height="16" fill="currentColor" opacity="0.25"/>
            <text x="30" y="20" font-family="Geist Mono" font-size="13" font-weight="500" fill="currentColor" letter-spacing="0.06em">PRISM</text>
          </svg>
        </div>
      </div>

      <!-- Trust strip : preuves dures, écritures discrètes -->
      <div class="sr-trust-strip">
        <div class="sr-trust-cell">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <path d="M9 12l2 2 4-4" stroke-width="2"/>
          </svg>
          <span><b>RC Pro DPO · Hiscox 2 M€</b></span>
        </div>
        <div class="sr-trust-sep" aria-hidden="true"></div>
        <div class="sr-trust-cell">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
            <path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1z"/>
          </svg>
          <span><b>DPO certifié AFNOR</b> · CIPP/E in-house</span>
        </div>
        <div class="sr-trust-sep" aria-hidden="true"></div>
        <div class="sr-trust-cell">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
            <circle cx="12" cy="12" r="9"/>
            <path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18"/>
          </svg>
          <span><b>Membre AFCDP</b> (assoc. DPO française)</span>
        </div>
        <div class="sr-trust-sep" aria-hidden="true"></div>
        <div class="sr-trust-cell">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
            <rect x="3" y="3" width="7" height="7" rx="1"/>
            <rect x="14" y="3" width="7" height="7" rx="1"/>
            <rect x="3" y="14" width="7" height="7" rx="1"/>
            <rect x="14" y="14" width="7" height="7" rx="1"/>
          </svg>
          <span><b>SMSI aligné ISO 27001</b> · certification en cours</span>
        </div>
      </div>
    </div>
  </div>
</section>
`;
