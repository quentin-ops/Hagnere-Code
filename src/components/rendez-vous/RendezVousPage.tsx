import { OPENING_HOURS_DISPLAY } from "@/lib/contact-details";
import Link from "next/link";
import { MainNav } from "@/components/design-shared/MainNav";
import { SiteFooter } from "@/components/design-shared/SiteFooter";
import {
  CalendlyAuthorisationSwitch,
  CalendlyEmbed,
} from "@/components/design-shared/CalendlyEmbed";
import { InteractiveDesignRoot } from "@/components/design-shared/InteractiveDesignRoot";
import "@/components/homepage/homepage.css";
import "@/components/homepage/sections/sections.css";
import "@/components/design-shared/nav-dropdown.css";
import "@/components/design-shared/responsive.css";
import "@/components/design-shared/site-footer.css";
import "@/components/contact/page.css";
import "@/components/design-shared/calendly.css";
import "./page.css";

export function RendezVousPage() {
  return (
    <InteractiveDesignRoot className="hc-design">
      <MainNav />
      <main id="main-content" tabIndex={-1}>
        <section className="c-hero rdv-hero">
          <div className="wrap c-hero-inner">
            <div className="c-hero-left">
              <div className="c-crumb">
                <Link href="/">Accueil</Link>
                <span className="sep">/</span>
                <span>Rendez-vous</span>
              </div>
              <div className="eyebrow">— Réserver un rendez-vous</div>
              <h1>
                Choisissez un créneau :<br />
                30 min pour cadrer votre projet web.
              </h1>
              <p className="c-hero-lead">
                30 minutes en visio ou par téléphone avec <b>quelqu&apos;un qui code</b> —
                pas un commercial. On écoute, on challenge, on vous dit franchement
                si c&apos;est pour nous. Si oui, vous repartez avec une <b>fourchette
                de budget</b> et un calendrier réaliste.
              </p>
              {/* Le hero d'une page de réservation n'offrait aucun geste : le
                  premier contrôle — le bouton d'autorisation Calendly — est à
                  plus d'un écran en mobile (hero mesuré à 913 px pour une
                  fenêtre de 844 px). Deux voies, celles que la page tient
                  vraiment : descendre au calendrier, ou décrire le projet par
                  écrit pour qui ne veut pas d'appel. */}
              <div className="c-hero-cta">
                <a href="#creneaux" className="btn btn-accent btn-lg">
                  Voir les créneaux
                </a>
                <Link href="/demarrer-un-projet" className="btn btn-ghost btn-lg">
                  Plutôt décrire mon projet par écrit
                </Link>
              </div>
              <div className="c-hero-meta">
                <span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                  30 min · gratuit
                </span>
                <span className="sep"></span>
                <span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                  Sans engagement
                </span>
                <span className="sep"></span>
                <span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                  Visio ou téléphone
                </span>
              </div>
            </div>

            <div className="c-hero-right">
              <div className="rdv-side-card">
                <div className="rdv-side-kicker">CE QU&apos;ON COUVRE</div>
                <ul className="rdv-side-list">
                  <li>
                    <span className="rdv-side-num">01</span>
                    <div>
                      <b>Le contexte</b>
                      <span>Votre métier, vos contraintes, vos enjeux business.</span>
                    </div>
                  </li>
                  <li>
                    <span className="rdv-side-num">02</span>
                    <div>
                      <b>Le périmètre</b>
                      <span>Ce qu&apos;il faut absolument livrer vs. ce qui peut attendre.</span>
                    </div>
                  </li>
                  <li>
                    <span className="rdv-side-num">03</span>
                    <div>
                      <b>Le budget &amp; la timeline</b>
                      <span>Fourchette honnête, jalons réalistes, prochaines étapes.</span>
                    </div>
                  </li>
                </ul>
                <div className="rdv-side-foot">
                  <span className="rdv-side-dot"></span>
                  Disponible {OPENING_HOURS_DISPLAY}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="creneaux"
          aria-labelledby="rdv-calendly-heading"
          className="rdv-calendly-section"
        >
          <div className="wrap">
            {/* Le titre décrit l'écran, pas l'intention de la page : tant que le
                service externe n'est pas autorisé, le visiteur a sous les yeux
                une autorisation à donner, pas un calendrier. L'état « non
                autorisé » est aussi celui du rendu serveur, donc du premier
                affichage et du visiteur sans JavaScript.

                Ce que les deux états ne font PLUS : vendre le nom du
                prestataire. Le corps de cette page — la seule section sous le
                hero, sur la page de conversion la plus courte du site — ne
                parlait que d'un outil américain et de cookies, « Calendly »
                revenant huit fois avant qu'un créneau soit visible. Le nom
                reste là où il informe (le lien d'ouverture et la mention de
                repli, dans la carte de consentement), plus dans les titres.
                L'avertissement RGPD tient désormais en une phrase, ici, et la
                carte ci-dessous ne le répète plus (voir page.css). */}
            <div className="rdv-calendly-head">
              <CalendlyAuthorisationSwitch
                pending={
                  <>
                    <p className="rdv-calendly-eyebrow">— Choisissez votre créneau</p>
                    <h2 id="rdv-calendly-heading">
                      Affichez le calendrier pour réserver.
                    </h2>
                    <p className="rdv-calendly-sub">
                      Il est chargé depuis un service externe et dépose des
                      cookies : rien ne part avant votre accord, révocable à
                      tout moment depuis « Gérer mes cookies », en pied de page.
                    </p>
                  </>
                }
                ready={
                  <>
                    <p className="rdv-calendly-eyebrow">— Choisissez votre créneau</p>
                    <h2 id="rdv-calendly-heading">
                      Réservez directement ci-dessous.
                    </h2>
                    <p className="rdv-calendly-sub">
                      Sélectionnez la date et l&apos;heure qui vous conviennent : les
                      modalités de confirmation, le lien de visio et les éventuels
                      rappels s&apos;affichent au moment de la réservation.
                    </p>
                  </>
                }
              />
              {/* L'espace rendu par l'avertissement raccourci revient à ce que
                  la page vend réellement. Reprise de la promesse du hero, hors
                  de portée du regard une fois descendu jusqu'au calendrier. */}
              <p className="rdv-calendly-promise">
                30 minutes avec quelqu&apos;un qui code : le contexte, le périmètre,
                une fourchette de budget et un calendrier réaliste.
              </p>
            </div>
            <div className="rdv-calendly-frame">
              <CalendlyEmbed height={780} />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter showContact={false} />
    </InteractiveDesignRoot>
  );
}
