import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/design-shared/ComingSoonPage";

type Service = {
  name: string;
  shortDescription: string;
  metaDescription: string;
};

const SERVICES: Record<string, Service> = {
  "sites-vitrines": {
    name: "Sites vitrines & landings",
    shortDescription:
      "Sites qui convertissent, pas qui informent. SEO technique de série, design produit, livraison en 2 à 4 semaines.",
    metaDescription:
      "Sites vitrines et landing pages haute conversion. SEO technique, design produit, livraison 2-4 semaines.",
  },
  "referencement-google": {
    name: "SEO & référencement",
    shortDescription:
      "Stratégie, contenu, technique et netlinking. Trafic organique durable pour PME et ETI ambitieuses.",
    metaDescription:
      "SEO complet : audit technique, contenu, netlinking. Trafic organique durable, mesurable.",
  },
  "publicite-en-ligne": {
    name: "Publicité en ligne",
    shortDescription:
      "Google Ads, Meta, LinkedIn pilotés par les conversions réelles — pas les impressions. Reporting business, pas marketing.",
    metaDescription:
      "Gestion Google Ads, Meta, LinkedIn. Pilotage par conversions réelles et ROI business.",
  },
  "maintenance-evolution": {
    name: "Maintenance & évolution",
    shortDescription:
      "Forfait mensuel, support prioritaire, évolutions continues. On reste votre équipe tech, pas un prestataire ponctuel.",
    metaDescription:
      "Maintenance applicative forfaitaire, support prioritaire, évolutions continues. SLA 99,9%.",
  },
  "audit-technique": {
    name: "Audit technique",
    shortDescription:
      "Code review, performance, sécurité. Rapport livré en 10 jours ouvrés, recommandations priorisées et chiffrées.",
    metaDescription:
      "Audit technique complet : code review, performance, sécurité. Rapport en 10 jours ouvrés.",
  },
};

export function generateStaticParams() {
  return Object.keys(SERVICES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES[slug];
  if (!service) return { title: "Service — Hagnéré Code" };
  const url = `/services/${slug}`;
  return {
    title: `${service.name} — Hagnéré Code`,
    description: service.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${service.name} — Hagnéré Code`,
      description: service.metaDescription,
      url,
      type: "website",
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES[slug];
  if (!service) notFound();

  return (
    <ComingSoonPage
      serviceName={service.name}
      shortDescription={service.shortDescription}
    />
  );
}
