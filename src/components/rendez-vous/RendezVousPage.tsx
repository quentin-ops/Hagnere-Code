"use client";

import { useRef } from "react";
import Link from "next/link";
import { MainNav } from "@/components/design-shared/MainNav";
import { SiteFooter } from "@/components/design-shared/SiteFooter";
import { CalendlyEmbed } from "@/components/design-shared/CalendlyEmbed";
import { useDesignInteractive } from "@/components/design-shared/useDesignInteractive";
import "@/components/homepage/homepage.css";
import "@/components/homepage/sections/sections.css";
import "@/components/design-shared/nav-dropdown.css";
import "@/components/design-shared/responsive.css";
import "@/components/design-shared/site-footer.css";
import "@/components/contact/page.css";
import "@/components/design-shared/calendly.css";
import "./page.css";

export function RendezVousPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  useDesignInteractive(rootRef);

  return (
    <div ref={rootRef} className="hc-design">
      <MainNav />
      <main id="main-content">
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
                30 minutes en visio ou par téléphone avec <b>un associé qui code</b> —
                pas un commercial. On écoute, on challenge, on vous dit franchement
                si c&apos;est pour nous. Si oui, vous repartez avec une <b>fourchette
                de budget</b> et un calendrier réaliste.
              </p>
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
                  Disponible lun–ven · 9 h – 19 h
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="rdv-calendly-heading"
          className="rdv-calendly-section"
        >
          <div className="wrap">
            <div className="rdv-calendly-head">
              <p className="rdv-calendly-eyebrow">— Choisissez votre créneau</p>
              <h2 id="rdv-calendly-heading">
                Réservez directement ci-dessous.
              </h2>
              <p className="rdv-calendly-sub">
                Sélectionnez la date et l&apos;heure qui vous conviennent. Vous recevrez
                une confirmation par e-mail avec le lien de visio et un rappel 24 h avant.
              </p>
            </div>
            <div className="rdv-calendly-frame">
              <CalendlyEmbed height={780} />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter showContact={false} />
    </div>
  );
}
