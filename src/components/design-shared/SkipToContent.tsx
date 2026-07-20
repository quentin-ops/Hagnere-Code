/**
 * Lien d'évitement global (WCAG 2.4.1).
 * Toutes les pages publiques exposent une cible statique #main-content :
 * aucun JavaScript ni fallback DOM n'est nécessaire.
 */
export function SkipToContent() {
  return (
    <a href="#main-content" className="skip-to-content">
      Aller au contenu principal
    </a>
  );
}
