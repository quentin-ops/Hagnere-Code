"use client";

import PhoneInputWithCountry from "react-phone-number-input";
import type { Country } from "react-phone-number-input";
import { getCountryCallingCode } from "react-phone-number-input";
import en from "react-phone-number-input/locale/en";
import "react-phone-number-input/style.css";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

// French country names mapping
const frenchCountryNames: Record<string, string> = {
  AF: "Afghanistan",
  ZA: "Afrique du Sud",
  AL: "Albanie",
  DZ: "Algérie",
  DE: "Allemagne",
  AD: "Andorre",
  AO: "Angola",
  AG: "Antigua-et-Barbuda",
  SA: "Arabie saoudite",
  AR: "Argentine",
  AM: "Arménie",
  AU: "Australie",
  AT: "Autriche",
  AZ: "Azerbaïdjan",
  BS: "Bahamas",
  BH: "Bahreïn",
  BD: "Bangladesh",
  BB: "Barbade",
  BE: "Belgique",
  BZ: "Belize",
  BJ: "Bénin",
  BT: "Bhoutan",
  BY: "Biélorussie",
  MM: "Birmanie",
  BO: "Bolivie",
  BA: "Bosnie-Herzégovine",
  BW: "Botswana",
  BR: "Brésil",
  BN: "Brunei",
  BG: "Bulgarie",
  BF: "Burkina Faso",
  BI: "Burundi",
  KH: "Cambodge",
  CM: "Cameroun",
  CA: "Canada",
  CV: "Cap-Vert",
  CF: "Centrafrique",
  CL: "Chili",
  CN: "Chine",
  CY: "Chypre",
  CO: "Colombie",
  KM: "Comores",
  KP: "Corée du Nord",
  KR: "Corée du Sud",
  CR: "Costa Rica",
  CI: "Côte d'Ivoire",
  HR: "Croatie",
  CU: "Cuba",
  DK: "Danemark",
  DJ: "Djibouti",
  DM: "Dominique",
  EG: "Égypte",
  AE: "Émirats arabes unis",
  EC: "Équateur",
  ER: "Érythrée",
  ES: "Espagne",
  EE: "Estonie",
  US: "États-Unis",
  ET: "Éthiopie",
  FJ: "Fidji",
  FI: "Finlande",
  FR: "France",
  GA: "Gabon",
  GM: "Gambie",
  GE: "Géorgie",
  GH: "Ghana",
  GR: "Grèce",
  GD: "Grenade",
  GT: "Guatemala",
  GN: "Guinée",
  GQ: "Guinée équatoriale",
  GW: "Guinée-Bissau",
  GY: "Guyana",
  HT: "Haïti",
  HN: "Honduras",
  HU: "Hongrie",
  IN: "Inde",
  ID: "Indonésie",
  IQ: "Irak",
  IR: "Iran",
  IE: "Irlande",
  IS: "Islande",
  IL: "Israël",
  IT: "Italie",
  JM: "Jamaïque",
  JP: "Japon",
  JO: "Jordanie",
  KZ: "Kazakhstan",
  KE: "Kenya",
  KG: "Kirghizistan",
  KI: "Kiribati",
  KW: "Koweït",
  LA: "Laos",
  LS: "Lesotho",
  LV: "Lettonie",
  LB: "Liban",
  LR: "Liberia",
  LY: "Libye",
  LI: "Liechtenstein",
  LT: "Lituanie",
  LU: "Luxembourg",
  MK: "Macédoine du Nord",
  MG: "Madagascar",
  MY: "Malaisie",
  MW: "Malawi",
  MV: "Maldives",
  ML: "Mali",
  MT: "Malte",
  MA: "Maroc",
  MU: "Maurice",
  MR: "Mauritanie",
  MX: "Mexique",
  FM: "Micronésie",
  MD: "Moldavie",
  MC: "Monaco",
  MN: "Mongolie",
  ME: "Monténégro",
  MZ: "Mozambique",
  NA: "Namibie",
  NR: "Nauru",
  NP: "Népal",
  NI: "Nicaragua",
  NE: "Niger",
  NG: "Nigeria",
  NO: "Norvège",
  NZ: "Nouvelle-Zélande",
  OM: "Oman",
  UG: "Ouganda",
  UZ: "Ouzbékistan",
  PK: "Pakistan",
  PW: "Palaos",
  PS: "Palestine",
  PA: "Panama",
  PG: "Papouasie-Nouvelle-Guinée",
  PY: "Paraguay",
  NL: "Pays-Bas",
  PE: "Pérou",
  PH: "Philippines",
  PL: "Pologne",
  PT: "Portugal",
  QA: "Qatar",
  DO: "République dominicaine",
  CZ: "République tchèque",
  CD: "RD Congo",
  CG: "République du Congo",
  RO: "Roumanie",
  GB: "Royaume-Uni",
  RU: "Russie",
  RW: "Rwanda",
  KN: "Saint-Kitts-et-Nevis",
  LC: "Sainte-Lucie",
  VC: "Saint-Vincent-et-les-Grenadines",
  SB: "Salomon",
  SV: "Salvador",
  WS: "Samoa",
  ST: "Sao Tomé-et-Príncipe",
  SN: "Sénégal",
  RS: "Serbie",
  SC: "Seychelles",
  SL: "Sierra Leone",
  SG: "Singapour",
  SK: "Slovaquie",
  SI: "Slovénie",
  SO: "Somalie",
  SD: "Soudan",
  SS: "Soudan du Sud",
  LK: "Sri Lanka",
  SE: "Suède",
  CH: "Suisse",
  SR: "Suriname",
  SZ: "Eswatini",
  SY: "Syrie",
  TJ: "Tadjikistan",
  TZ: "Tanzanie",
  TD: "Tchad",
  TH: "Thaïlande",
  TL: "Timor oriental",
  TG: "Togo",
  TO: "Tonga",
  TT: "Trinité-et-Tobago",
  TN: "Tunisie",
  TM: "Turkménistan",
  TR: "Turquie",
  TV: "Tuvalu",
  UA: "Ukraine",
  UY: "Uruguay",
  VU: "Vanuatu",
  VA: "Vatican",
  VE: "Venezuela",
  VN: "Vietnam",
  YE: "Yémen",
  ZM: "Zambie",
  ZW: "Zimbabwe",
};

// Get flag emoji from country code
function getFlagEmoji(countryCode: string | undefined): string {
  if (!countryCode || typeof countryCode !== "string") return "🌍";
  try {
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  } catch {
    return "🌍";
  }
}

// Get country name (French if available, fallback to English)
function getCountryName(countryCode: Country | string | undefined): string {
  if (!countryCode) return "";
  const code = String(countryCode);
  return frenchCountryNames[code] || en[code as Country] || code;
}

interface PhoneInputProps {
  value: string | undefined;
  onChange: (value: string | undefined) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

function getDefaultCountry(): Country {
  if (typeof navigator === "undefined") return "FR";

  const locale = navigator.language;
  if (locale && locale.includes("-")) {
    const countryCode = locale.split("-")[1]?.toUpperCase();
    if (countryCode && countryCode.length === 2) {
      return countryCode as Country;
    }
  }

  return "FR";
}

// Custom Country Select Component using shadcn DropdownMenu
interface CountryOption {
  value: Country;
  label: string;
}

function CountrySelect({
  value,
  onChange,
  options,
  disabled,
}: {
  value?: Country;
  onChange: (value: Country) => void;
  options: CountryOption[];
  disabled?: boolean;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // Sort countries: prioritize France and common countries, then alphabetically
  const priorityCountries: Country[] = ["FR", "US", "GB", "DE", "BE", "CH", "CA", "ES", "IT"];

  const sortedOptions = [...options].sort((a, b) => {
    const aCode = a.value;
    const bCode = b.value;
    const aIndex = priorityCountries.indexOf(aCode);
    const bIndex = priorityCountries.indexOf(bCode);

    if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
    if (aIndex !== -1) return -1;
    if (bIndex !== -1) return 1;

    const nameA = getCountryName(aCode);
    const nameB = getCountryName(bCode);
    return String(nameA).localeCompare(String(nameB), "fr");
  });

  const filteredOptions = searchQuery
    ? sortedOptions.filter((option) => {
        const name = String(getCountryName(option.value)).toLowerCase();
        const code = String(option.value).toLowerCase();
        const query = searchQuery.toLowerCase();
        return name.includes(query) || code.includes(query);
      })
    : sortedOptions;

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger
        disabled={disabled}
        className={cn(
          "flex items-center gap-2 px-3 h-10 rounded-md",
          "bg-white dark:bg-neutral-800",
          "border border-transparent",
          "hover:bg-neutral-50 dark:hover:bg-neutral-700",
          "focus:outline-none focus:ring-2 focus:ring-neutral-800 dark:focus:ring-neutral-600",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "transition-colors"
        )}
      >
        <span className="text-xl leading-none">{value ? getFlagEmoji(value) : "🌍"}</span>
        <span className="text-sm text-neutral-600 dark:text-neutral-300">
          {value ? `+${getCountryCallingCode(value)}` : ""}
        </span>
        <ChevronDown className="h-4 w-4 text-neutral-500" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-72 max-h-80 overflow-y-auto"
        align="start"
      >
        {/* Search input */}
        <div className="px-2 py-2 sticky top-0 z-10 bg-popover border-b shadow-sm">
          <input
            type="text"
            placeholder="Rechercher un pays..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3 py-2 text-sm rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-ring"
            onClick={(e) => e.stopPropagation()}
          />
        </div>

        {filteredOptions.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => {
              onChange(option.value);
              setSearchQuery("");
              setIsOpen(false);
            }}
            className={cn(
              "flex items-center gap-3 cursor-pointer",
              value === option.value && "bg-accent"
            )}
          >
            <span className="text-xl leading-none">{getFlagEmoji(option.value)}</span>
            <span className="flex-1 truncate">{getCountryName(option.value)}</span>
            <span className="text-sm text-muted-foreground">
              +{getCountryCallingCode(option.value)}
            </span>
          </DropdownMenuItem>
        ))}

        {filteredOptions.length === 0 && (
          <div className="px-3 py-4 text-sm text-muted-foreground text-center">
            Aucun pays trouvé
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function PhoneInput({
  value,
  onChange,
  placeholder,
  className,
  disabled,
}: PhoneInputProps) {
  const [defaultCountry, setDefaultCountry] = useState<Country>("FR");

  useEffect(() => {
    setDefaultCountry(getDefaultCountry());
  }, []);

  return (
    <PhoneInputWithCountry
      international
      countryCallingCodeEditable={false}
      defaultCountry={defaultCountry}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={cn("phone-input-container", className)}
      countrySelectComponent={CountrySelect}
    />
  );
}
