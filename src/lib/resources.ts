import { SITE_URL } from "./seo";

export type DownloadFormat = "zip" | "docx" | "pdf" | "xlsx";

export interface DownloadableFile {
  id: string;
  label: string;
  description: string;
  format: DownloadFormat;
  formatLabel: string;
  href: string;
  downloadName: string;
  sizeBytes: number;
  sizeLabel: string;
}

export interface DownloadableResource {
  id: string;
  slug: string;
  path: string;
  guideSlug: string;
  title: string;
  cardTitle: string;
  description: string;
  audience: string;
  version: string;
  publishedAt: string;
  updatedAt: string;
  updatedLabel: string;
  primary: DownloadableFile;
  files: DownloadableFile[];
  compatibility: string;
  socialImage: {
    href: string;
    width: number;
    height: number;
    alt: string;
  };
}

const BASE_PATH = "/ressources/kit-cahier-des-charges-site-internet";
const APP_CDC_BASE_PATH =
  "/ressources/kit-cahier-des-charges-application-metier";

export const SITE_CDC_KIT: DownloadableResource = {
  id: "kit-cdc-site",
  slug: "kit-cahier-des-charges-site-internet",
  path: "/ressources/kit-cahier-des-charges-site-internet",
  guideSlug: "cahier-des-charges-site-internet",
  title: "Kit cahier des charges — 4 fichiers",
  cardTitle: "Kit cahier des charges de site internet",
  description:
    "Cadrez le besoin, comparez les offres puis préparez la recette sans repartir d'une page blanche.",
  audience:
    "Dirigeants, indépendants et responsables de projet qui préparent une création ou une refonte de site internet.",
  version: "1.0",
  publishedAt: "2026-07-19",
  updatedAt: "2026-07-19",
  updatedLabel: "19 juillet 2026",
  primary: {
    id: "kit_complet",
    label: "Kit complet",
    description: "Les quatre fichiers réunis dans une archive.",
    format: "zip",
    formatLabel: "ZIP",
    href: `${BASE_PATH}/kit-cahier-des-charges-site-internet.zip`,
    downloadName: "kit-cahier-des-charges-site-internet.zip",
    sizeBytes: 351_578,
    sizeLabel: "343 Ko",
  },
  files: [
    {
      id: "modele_word",
      label: "Modèle éditable",
      description:
        "18 rubriques guidées, champs à compléter, exclusions, preuves et réponse attendue du prestataire.",
      format: "docx",
      formatLabel: "DOCX",
      href: `${BASE_PATH}/modele-cahier-des-charges-site-internet.docx`,
      downloadName: "modele-cahier-des-charges-site-internet.docx",
      sizeBytes: 56_496,
      sizeLabel: "55 Ko",
    },
    {
      id: "exemple_rempli",
      label: "Exemple entièrement rempli",
      description:
        "Un cas PME B2B explicitement fictif, complété de bout en bout pour montrer le niveau de précision utile.",
      format: "pdf",
      formatLabel: "PDF",
      href: `${BASE_PATH}/exemple-rempli-cahier-des-charges-site-internet.pdf`,
      downloadName: "exemple-rempli-cahier-des-charges-site-internet.pdf",
      sizeBytes: 457_429,
      sizeLabel: "447 Ko",
    },
    {
      id: "grille_recette",
      label: "Grille de recette",
      description:
        "56 tests préremplis, 12 lignes libres, preuves, anomalies, retests et synthèse calculée.",
      format: "xlsx",
      formatLabel: "XLSX",
      href: `${BASE_PATH}/grille-de-recette-site-internet.xlsx`,
      downloadName: "grille-de-recette-site-internet.xlsx",
      sizeBytes: 23_722,
      sizeLabel: "23 Ko",
    },
    {
      id: "mode_emploi",
      label: "Mode d'emploi",
      description:
        "Quatre pages pour choisir les rubriques, compléter le kit et le partager sans données sensibles.",
      format: "pdf",
      formatLabel: "PDF",
      href: `${BASE_PATH}/lisez-moi-kit-cahier-des-charges-site-internet.pdf`,
      downloadName: "lisez-moi-kit-cahier-des-charges-site-internet.pdf",
      sizeBytes: 116_029,
      sizeLabel: "113 Ko",
    },
  ],
  compatibility:
    "DOCX et XLSX vérifiés avec LibreOffice ; leurs formats OOXML sont destinés aux versions récentes de Word et Excel. Les deux PDF sont lisibles sans logiciel payant.",
  socialImage: {
    href: "/images/ressources/kit-cahier-des-charges/opengraph-kit-cahier-des-charges-site-internet.png",
    width: 1200,
    height: 630,
    alt: "Kit cahier des charges de site internet — Word, PDF et Excel",
  },
};

export const APP_CDC_KIT: DownloadableResource = {
  id: "kit-cdc-application-metier",
  slug: "kit-cahier-des-charges-application-metier",
  path: "/ressources/kit-cahier-des-charges-application-metier",
  guideSlug: "cahier-des-charges-application-metier",
  title: "Kit cahier des charges — 3 fichiers",
  cardTitle: "Kit cahier des charges d'une application métier",
  description:
    "Cadrez le besoin métier, comparez les solutions et préparez la recette sans imposer trop tôt une technologie.",
  audience:
    "Dirigeants, indépendants et responsables de projet qui préparent un outil interne, une application métier ou le remplacement d'un fichier Excel.",
  version: "1.0",
  publishedAt: "2026-07-20",
  updatedAt: "2026-07-20",
  updatedLabel: "20 juillet 2026",
  primary: {
    id: "kit_complet",
    label: "Kit complet",
    description: "Les trois fichiers réunis dans une archive.",
    format: "zip",
    formatLabel: "ZIP",
    href: `${APP_CDC_BASE_PATH}/kit-cahier-des-charges-application-metier.zip`,
    downloadName: "kit-cahier-des-charges-application-metier.zip",
    sizeBytes: 419_023,
    sizeLabel: "409 Ko",
  },
  files: [
    {
      id: "modele_word",
      label: "Modèle éditable",
      description:
        "14 rubriques guidées et 6 matrices éditables pour les scénarios, les données, les droits, les intégrations, la recette et les responsabilités.",
      format: "docx",
      formatLabel: "DOCX",
      href: `${APP_CDC_BASE_PATH}/modele-cahier-des-charges-application-metier.docx`,
      downloadName: "modele-cahier-des-charges-application-metier.docx",
      sizeBytes: 52_516,
      sizeLabel: "51 Ko",
    },
    {
      id: "exemple_rempli",
      label: "Exemple entièrement rempli",
      description:
        "Un cas de PME de maintenance explicitement fictif, complété de bout en bout avec ses 6 matrices de travail.",
      format: "pdf",
      formatLabel: "PDF",
      href: `${APP_CDC_BASE_PATH}/exemple-rempli-cahier-des-charges-application-metier.pdf`,
      downloadName: "exemple-rempli-cahier-des-charges-application-metier.pdf",
      sizeBytes: 629_310,
      sizeLabel: "615 Ko",
    },
    {
      id: "mode_emploi",
      label: "Mode d'emploi et sources",
      description:
        "Trois pages pour commencer par les bonnes rubriques, comparer à périmètre constant et protéger les données sensibles.",
      format: "pdf",
      formatLabel: "PDF",
      href: `${APP_CDC_BASE_PATH}/mode-emploi-cahier-des-charges-application-metier.pdf`,
      downloadName: "mode-emploi-cahier-des-charges-application-metier.pdf",
      sizeBytes: 137_434,
      sizeLabel: "134 Ko",
    },
  ],
  compatibility:
    "Le DOCX a été vérifié avec LibreOffice et utilise le format OOXML destiné aux versions récentes de Word. Les deux PDF sont lisibles sans logiciel payant.",
  socialImage: {
    href: "/images/ressources/kit-cahier-des-charges-application-metier/opengraph-kit-cahier-des-charges-application-metier.png",
    width: 1200,
    height: 630,
    alt: "Kit cahier des charges d'une application métier — Word et PDF",
  },
};

export const DOWNLOADABLE_RESOURCES: DownloadableResource[] = [
  SITE_CDC_KIT,
  APP_CDC_KIT,
];

export const resourceDownloadPaths = DOWNLOADABLE_RESOURCES.flatMap(
  (resource) => [
    resource.primary.href,
    ...resource.files.map((file) => file.href),
  ],
);

export function resourceKitUrl(resource: DownloadableResource): string {
  return `${SITE_URL}${resource.path}`;
}

export const SITE_CDC_EXAMPLE_FILE = (() => {
  const file = SITE_CDC_KIT.files.find(({ id }) => id === "exemple_rempli");
  if (!file) {
    throw new Error("Le fichier exemple_rempli manque au manifeste du kit.");
  }
  return file;
})();
