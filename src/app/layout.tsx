import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { CookieBanner } from "@/components/cookies/CookieBanner";

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

const isProd = process.env.NEXT_PUBLIC_ENV === "production";

export const metadata: Metadata = {
  metadataBase: new URL("https://hagnere-code.fr"),
  title: {
    default: "Hagnéré Code — Studio produit · SaaS & outils métier",
    template: "%s",
  },
  description:
    "Studio produit à Chambéry. On conçoit, développe et maintient des sites, applications métier et SaaS sur mesure, avec forfait fixe et preuves internes assumées.",
  applicationName: "Hagnéré Code",
  authors: [{ name: "Hagnéré Code" }],
  keywords: [
    "studio développement SaaS",
    "Laravel Chambéry",
    "applications métier",
    "outils internes sur mesure",
    "AI-native",
    "Claude Code",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://hagnere-code.fr",
    siteName: "Hagnéré Code",
    title: "Hagnéré Code — Studio produit · SaaS & outils métier",
    description:
      "Studio produit à Chambéry. SaaS, applications métier, outils internes, forfait fixe, Laravel et workflows IA.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hagnéré Code — Studio produit · SaaS & outils métier",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hagnéré Code — Studio produit · SaaS & outils métier",
    description:
      "Studio de développement SaaS et applications métier, basé à Chambéry. Laravel 13, Claude Code.",
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
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
        <a href="#main-content" className="skip-to-content">
          Aller au contenu principal
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {/* Pré-installé, désactivé tant que NEXT_PUBLIC_COOKIE_BANNER!=1.
            Activer dès qu'un outil analytique sera ajouté (Plausible, GA, etc.). */}
        <CookieBanner />
      </body>
    </html>
  );
}
