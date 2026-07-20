import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Mail, ShieldCheck, UserRound } from "lucide-react";
import "@/components/project-funnel/project-funnel.css";
import { ConversionTracker } from "./ConversionTracker";
import { ThemeToggle } from "@/components/design-shared/ThemeToggle";
import { OG_BASE, DEFAULT_OG_IMAGE } from "@/lib/seo";
import { LegalLinksFooter } from "@/components/legal/LegalLinksFooter";
import { CALENDLY_URL } from "@/lib/calendly";

export const metadata: Metadata = {
  title: "Brief envoyé · Hagnéré Code",
  description: "Votre brief a bien été transmis. Nous visons une réponse personnelle le prochain jour ouvré, sans délai garanti.",
  robots: { index: false, follow: true },
  openGraph: {
    ...OG_BASE,
    title: "Brief envoyé · Hagnéré Code",
    description: "Votre brief a bien été transmis. Nous visons une réponse personnelle le prochain jour ouvré, sans délai garanti.",
    url: "/demarrer-un-projet/merci",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Page() {
  return (
    <div className="pf-root">
      <ConversionTracker />
      <header className="pf-topbar">
        <div className="pf-top-left">
          <Link href="/" className="pf-brand">
            <span className="pf-brand-mark">HC</span>
            <span><b>Hagnéré</b> Code</span>
          </Link>
          <div className="pf-breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <span>Brief envoyé</span>
          </div>
        </div>
        <nav className="pf-topnav" aria-label="Navigation secondaire">
          <ThemeToggle />
          <Link href="/" className="pf-site-return">
            <ArrowLeft size={16} strokeWidth={2} />
            <span>Retour au site vitrine</span>
          </Link>
        </nav>
      </header>

      <main id="main-content" tabIndex={-1} className="pf-shell pf-shell-success">
        <div className="pf-success-card">
          <div className="pf-success-icon">
            <Check size={28} strokeWidth={2.4} />
          </div>
          <h1>Brief bien reçu. Merci !</h1>
          <p>Voici ce qui se passe maintenant :</p>
          <ol className="pf-next-steps">
            <li>
              <UserRound size={16} />
              <span><b>Votre brief est lu personnellement</b> par notre équipe — pas d&apos;analyse automatique.</span>
            </li>
            <li>
              <Mail size={16} />
              <span><b>Nous visons une réponse argumentée le prochain jour ouvré</b>, sans engagement contractuel de délai : premières recommandations et prochaines étapes.</span>
            </li>
            <li>
              <ShieldCheck size={16} />
              <span><b>Si pertinent, on vous propose un créneau</b> d&apos;échange de 30 min, gratuit et sans engagement.</span>
            </li>
          </ol>
          <p>
            Pour gagner du temps, vous pouvez aussi réserver directement votre
            créneau d&apos;échange :
          </p>
          <div className="pf-success-actions">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="pf-primary"
            >
              Réserver 30 min d&apos;échange
              <ArrowRight size={16} />
            </a>
            <Link href="/realisations" className="pf-secondary">
              Voir les réalisations
            </Link>
          </div>
        </div>
      </main>
      <LegalLinksFooter />
    </div>
  );
}
