import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { CookieBanner } from "@/components/cookies/CookieBanner";
import { SkipToContent } from "@/components/design-shared/SkipToContent";
import { isSearchIndexingEnabled } from "@/lib/search-indexing";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const isProd = isSearchIndexingEnabled();

export const metadata: Metadata = {
  metadataBase: new URL("https://hagnere-code.ai"),
  title: {
    default: "Studio de développement web, SaaS & SEO · Hagnéré Code",
    template: "%s",
  },
  description:
    "Agence web à Bassens, aux portes de Chambéry : sites, e-commerce, SaaS, applications métier, référencement naturel et Google Ads. Forfait fixe.",
  applicationName: "Hagnéré Code",
  authors: [{ name: "Hagnéré Code" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://hagnere-code.ai",
    siteName: "Hagnéré Code",
    title: "Studio de développement web, SaaS & SEO · Hagnéré Code",
    description:
      "Agence web à Bassens, aux portes de Chambéry : développement sur mesure, référencement naturel et Google Ads. Forfait fixe.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hagnéré Code — agence web à Bassens, aux portes de Chambéry",
      },
    ],
  },
  // Pas de title/description twitter au niveau layout : ils écraseraient
  // ceux des pages (merge superficiel Next.js) — chaque page dérive sa carte
  // de son propre openGraph ; seuls card et l'image par défaut sont globaux.
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
  robots: isProd
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      }
    : { index: false, follow: false },
  // favicon.ico est servi par la convention de fichier src/app/favicon.ico ;
  // ne déclarer que l'apple-touch-icon évite les balises <link rel=icon> dupliquées.
  icons: {
    apple: "/apple-touch-icon.png",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${geist.variable} ${geistMono.variable}`}
    >
      <body className="antialiased">
        <SkipToContent />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {/* Pré-installé, désactivé tant que NEXT_PUBLIC_COOKIE_BANNER!=1.
            Les intégrations tierces existantes restent bloquées localement
            jusqu'à une action explicite, indépendamment de cette bannière. */}
        <CookieBanner />
      </body>
    </html>
  );
}
