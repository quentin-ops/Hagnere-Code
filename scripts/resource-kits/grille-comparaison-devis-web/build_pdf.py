#!/usr/bin/env python3
"""Generate the public quote-comparison white paper PDF.

The PDF is deliberately generated from versioned source so figures, labels and
layout can be reviewed. All monetary examples are fictional and validated by
assertions before the document is built.
"""

from __future__ import annotations

import argparse
from dataclasses import dataclass
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    KeepTogether,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


PUBLICATION_DATE = "19 juillet 2026"
VERSION = "1.0"
ORGANISATION = "Hagnéré Code"
SITE = "hagnere-code.ai"
EMAIL = "quentin@hagnere-patrimoine.fr"

INK = colors.HexColor("#18181B")
MUTED = colors.HexColor("#5B6472")
LIGHT = colors.HexColor("#F4F4F5")
LINE = colors.HexColor("#E4E4E7")
WHITE = colors.white
VIOLET = colors.HexColor("#6D28D9")
VIOLET_DARK = colors.HexColor("#4C1D95")
VIOLET_LIGHT = colors.HexColor("#F5F3FF")
BLUE_LIGHT = colors.HexColor("#EFF6FF")
GREEN = colors.HexColor("#047857")
GREEN_LIGHT = colors.HexColor("#ECFDF5")
AMBER = colors.HexColor("#A16207")
AMBER_LIGHT = colors.HexColor("#FFFBEB")

PAGE_W, PAGE_H = A4
MARGIN_X = 18 * mm
MARGIN_TOP = 19 * mm
MARGIN_BOTTOM = 18 * mm


@dataclass(frozen=True)
class Offer:
    name: str
    initial: int
    options: int
    year1: int
    year2: int
    year3: int
    internal_hours: int
    internal_hour_cost: int
    exit_cost: int
    risk_reserve: int
    scope_score: int
    evidence_score: int
    seo_score: int
    ops_score: int
    ownership_score: int
    governance_score: int
    eligible: bool

    @property
    def internal_cost(self) -> int:
        return self.internal_hours * self.internal_hour_cost

    @property
    def recurring(self) -> int:
        return self.year1 + self.year2 + self.year3

    @property
    def tco(self) -> int:
        return (
            self.initial
            + self.options
            + self.recurring
            + self.internal_cost
            + self.exit_cost
            + self.risk_reserve
        )

    @property
    def weighted_score(self) -> float:
        return (
            self.scope_score * 0.25
            + self.evidence_score * 0.20
            + self.seo_score * 0.15
            + self.ops_score * 0.15
            + self.ownership_score * 0.15
            + self.governance_score * 0.10
        )


OFFERS = [
    Offer(
        "A - abonnement",
        8900,
        3600,
        4680,
        4980,
        5280,
        48,
        55,
        2500,
        1800,
        55,
        40,
        35,
        50,
        30,
        45,
        False,
    ),
    Offer(
        "B - forfait",
        17900,
        900,
        2160,
        2280,
        2400,
        28,
        55,
        800,
        900,
        90,
        85,
        88,
        82,
        95,
        88,
        True,
    ),
    Offer(
        "C - premium",
        24800,
        0,
        1800,
        1900,
        2000,
        20,
        55,
        500,
        600,
        96,
        92,
        90,
        90,
        96,
        92,
        True,
    ),
]


CRITERIA = [
    ("Périmètre", "Objectifs métier et indicateurs de départ", 4),
    ("Périmètre", "Inventaire des pages et gabarits", 4),
    ("Périmètre", "Fonctionnalités et cas limites", 4),
    ("Périmètre", "Exclusions explicites", 3),
    ("Périmètre", "Options séparées du socle", 2),
    ("Périmètre", "Critères de recette mesurables", 3),
    ("Périmètre", "Appareils et responsive couverts", 2),
    ("Périmètre", "Navigateurs supportés", 2),
    ("Contenus", "Responsable de la rédaction", 2),
    ("Contenus", "Migration et intégration des contenus", 2),
    ("Contenus", "Images, droits et optimisation", 1),
    ("Contenus", "Langues et traductions", 1),
    ("SEO et données", "Inventaire des URL existantes", 4),
    ("SEO et données", "Plan de redirections", 3),
    ("SEO et données", "Métadonnées et données structurées", 2),
    ("SEO et données", "Sitemap, robots et indexabilité", 2),
    ("SEO et données", "Analytics, consentement et plan de marquage", 3),
    ("Design", "Écrans réellement conçus", 3),
    ("Design", "États vides, erreurs et chargements", 2),
    ("Design", "Objectif d'accessibilité et preuves", 3),
    ("Design", "Composants et règles réutilisables", 2),
    ("Technique", "Hébergement et environnements", 3),
    ("Technique", "Budget de performance et mesure", 3),
    ("Technique", "Correctifs de sécurité et dépendances", 3),
    ("Technique", "Sauvegardes et restauration testée", 2),
    ("Technique", "Supervision et alertes", 2),
    ("Gouvernance", "Planning, jalons et dépendances client", 3),
    ("Gouvernance", "Livrables à chaque jalon", 2),
    ("Gouvernance", "Procédure de changement et prix", 2),
    ("Gouvernance", "Rôles, interlocuteurs et sous-traitance", 2),
    ("Exploitation", "Maintenance corrective", 3),
    ("Exploitation", "Évolutions et taux/jours inclus", 2),
    ("Exploitation", "Délais de prise en charge et SLA", 3),
    ("Exploitation", "Tous les coûts récurrents", 2),
    ("Propriété et sortie", "Dépôt du code source", 3),
    ("Propriété et sortie", "Comptes et identifiants au nom du client", 3),
    ("Propriété et sortie", "Licences et droits cédés", 2),
    ("Propriété et sortie", "Export des données et contenus", 2),
    ("Propriété et sortie", "Clause et coût de réversibilité", 2),
    ("Propriété et sortie", "Documentation et formation", 2),
]


def validate_model() -> None:
    assert len(CRITERIA) == 40
    assert sum(weight for _, _, weight in CRITERIA) == 100
    assert [offer.tco for offer in OFFERS] == [34380, 28880, 32700]
    assert abs(OFFERS[1].weighted_score - 88.05) < 0.001
    assert round(OFFERS[2].weighted_score, 1) == 93.0


def register_fonts() -> tuple[str, str]:
    candidates = [
        (
            Path("/System/Library/Fonts/Supplemental/Arial.ttf"),
            Path("/System/Library/Fonts/Supplemental/Arial Bold.ttf"),
        ),
        (
            Path("/System/Library/Fonts/Supplemental/Helvetica.ttf"),
            Path("/System/Library/Fonts/Supplemental/Helvetica Bold.ttf"),
        ),
    ]
    for regular, bold in candidates:
        if regular.exists() and bold.exists():
            pdfmetrics.registerFont(TTFont("HCRegular", str(regular)))
            pdfmetrics.registerFont(TTFont("HCBold", str(bold)))
            return "HCRegular", "HCBold"
    return "Helvetica", "Helvetica-Bold"


FONT, FONT_BOLD = register_fonts()


def euro(value: int) -> str:
    return f"{value:,}".replace(",", " ") + " €"


def para(text: str, style: ParagraphStyle) -> Paragraph:
    return Paragraph(text, style)


def make_styles() -> dict[str, ParagraphStyle]:
    base = getSampleStyleSheet()
    styles: dict[str, ParagraphStyle] = {}
    styles["body"] = ParagraphStyle(
        "HCBody",
        parent=base["BodyText"],
        fontName=FONT,
        fontSize=9.5,
        leading=14,
        textColor=INK,
        spaceAfter=7,
    )
    styles["small"] = ParagraphStyle(
        "HCSmall",
        parent=styles["body"],
        fontSize=7.7,
        leading=10.5,
        textColor=MUTED,
        spaceAfter=0,
    )
    styles["tiny"] = ParagraphStyle(
        "HCTiny",
        parent=styles["small"],
        fontSize=6.7,
        leading=8.5,
    )
    styles["h1"] = ParagraphStyle(
        "HCH1",
        parent=base["Heading1"],
        fontName=FONT_BOLD,
        fontSize=24,
        leading=28,
        textColor=INK,
        spaceAfter=10,
    )
    styles["h2"] = ParagraphStyle(
        "HCH2",
        parent=base["Heading2"],
        fontName=FONT_BOLD,
        fontSize=15.5,
        leading=19,
        textColor=INK,
        spaceBefore=8,
        spaceAfter=8,
        keepWithNext=True,
    )
    styles["h3"] = ParagraphStyle(
        "HCH3",
        parent=base["Heading3"],
        fontName=FONT_BOLD,
        fontSize=11.2,
        leading=14,
        textColor=VIOLET_DARK,
        spaceBefore=6,
        spaceAfter=5,
        keepWithNext=True,
    )
    styles["eyebrow"] = ParagraphStyle(
        "HCEyebrow",
        parent=styles["small"],
        fontName=FONT_BOLD,
        fontSize=7.3,
        leading=9,
        textColor=VIOLET,
        spaceAfter=5,
        uppercase=True,
    )
    styles["cover_eyebrow"] = ParagraphStyle(
        "HCCoverEyebrow",
        parent=styles["eyebrow"],
        fontSize=9,
        leading=12,
        textColor=colors.HexColor("#C4B5FD"),
        alignment=TA_LEFT,
        spaceAfter=12,
    )
    styles["cover_title"] = ParagraphStyle(
        "HCCoverTitle",
        parent=styles["h1"],
        fontSize=29,
        leading=34,
        textColor=WHITE,
        spaceAfter=16,
    )
    styles["cover_sub"] = ParagraphStyle(
        "HCCoverSub",
        parent=styles["body"],
        fontSize=12,
        leading=18,
        textColor=colors.HexColor("#D4D4D8"),
        spaceAfter=16,
    )
    styles["cover_meta"] = ParagraphStyle(
        "HCCoverMeta",
        parent=styles["small"],
        fontSize=8.5,
        leading=12,
        textColor=colors.HexColor("#A1A1AA"),
    )
    styles["table_head"] = ParagraphStyle(
        "HCTableHead",
        parent=styles["small"],
        fontName=FONT_BOLD,
        fontSize=7.2,
        leading=9,
        textColor=WHITE,
        alignment=TA_LEFT,
    )
    styles["table"] = ParagraphStyle(
        "HCTable",
        parent=styles["small"],
        fontSize=7.2,
        leading=9.3,
        textColor=INK,
    )
    styles["table_center"] = ParagraphStyle(
        "HCTableCenter",
        parent=styles["table"],
        alignment=TA_CENTER,
    )
    styles["quote"] = ParagraphStyle(
        "HCQuote",
        parent=styles["body"],
        fontName=FONT_BOLD,
        fontSize=11,
        leading=16,
        textColor=VIOLET_DARK,
        leftIndent=7 * mm,
        rightIndent=7 * mm,
        spaceBefore=6,
        spaceAfter=6,
    )
    return styles


STYLES = make_styles()


def draw_cover(canvas, doc) -> None:
    canvas.saveState()
    canvas.setFillColor(colors.HexColor("#09090B"))
    canvas.rect(0, 0, PAGE_W, PAGE_H, stroke=0, fill=1)
    canvas.setFillColor(colors.HexColor("#24123F"))
    canvas.circle(PAGE_W + 20 * mm, PAGE_H - 5 * mm, 78 * mm, stroke=0, fill=1)
    canvas.setFillColor(VIOLET)
    canvas.roundRect(MARGIN_X, PAGE_H - 36 * mm, 13 * mm, 13 * mm, 3 * mm, stroke=0, fill=1)
    canvas.setFillColor(WHITE)
    canvas.setFont(FONT_BOLD, 8.5)
    canvas.drawCentredString(MARGIN_X + 6.5 * mm, PAGE_H - 31.6 * mm, "HC")
    canvas.setFillColor(colors.HexColor("#D4D4D8"))
    canvas.setFont(FONT_BOLD, 10)
    canvas.drawString(MARGIN_X + 17 * mm, PAGE_H - 31.4 * mm, ORGANISATION)
    canvas.setStrokeColor(colors.HexColor("#3F3F46"))
    canvas.line(MARGIN_X, 25 * mm, PAGE_W - MARGIN_X, 25 * mm)
    canvas.setFont(FONT, 7.5)
    canvas.setFillColor(colors.HexColor("#A1A1AA"))
    canvas.drawString(MARGIN_X, 18 * mm, f"Version {VERSION} - {PUBLICATION_DATE}")
    canvas.drawRightString(PAGE_W - MARGIN_X, 18 * mm, SITE)
    canvas.restoreState()


def draw_content_page(canvas, doc) -> None:
    canvas.saveState()
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.4)
    canvas.line(MARGIN_X, PAGE_H - 12.5 * mm, PAGE_W - MARGIN_X, PAGE_H - 12.5 * mm)
    canvas.setFont(FONT_BOLD, 7.3)
    canvas.setFillColor(INK)
    canvas.drawString(MARGIN_X, PAGE_H - 9.5 * mm, ORGANISATION)
    canvas.setFont(FONT, 7.1)
    canvas.setFillColor(MUTED)
    canvas.drawRightString(
        PAGE_W - MARGIN_X,
        PAGE_H - 9.5 * mm,
        "Comparer des devis web sur 36 mois",
    )
    canvas.line(MARGIN_X, 12.5 * mm, PAGE_W - MARGIN_X, 12.5 * mm)
    canvas.setFont(FONT, 6.8)
    canvas.drawString(MARGIN_X, 8 * mm, "Exemple fictif - à adapter à votre consultation")
    canvas.drawRightString(PAGE_W - MARGIN_X, 8 * mm, f"{doc.page}")
    canvas.restoreState()


def table(
    data,
    widths,
    *,
    header=True,
    font_size=7.2,
    repeat_rows=1,
    row_backgrounds=False,
    extra_style=None,
):
    converted = []
    for row_index, row in enumerate(data):
        converted.append(
            [
                cell
                if isinstance(cell, Paragraph)
                else para(
                    str(cell),
                    STYLES["table_head"]
                    if header and row_index == 0
                    else ParagraphStyle(
                        f"Table{font_size}",
                        parent=STYLES["table"],
                        fontSize=font_size,
                        leading=font_size + 2,
                    ),
                )
                for cell in row
            ]
        )
    result = Table(
        converted,
        colWidths=widths,
        repeatRows=repeat_rows if header else 0,
        hAlign="LEFT",
    )
    commands = [
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 5),
        ("RIGHTPADDING", (0, 0), (-1, -1), 5),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
        ("GRID", (0, 0), (-1, -1), 0.35, LINE),
    ]
    if header:
        commands.append(("BACKGROUND", (0, 0), (-1, 0), INK))
    if row_backgrounds:
        for idx in range(1 if header else 0, len(data)):
            if idx % 2 == 0:
                commands.append(("BACKGROUND", (0, idx), (-1, idx), LIGHT))
    if extra_style:
        commands.extend(extra_style)
    result.setStyle(TableStyle(commands))
    return result


def callout(title: str, text: str, kind: str = "violet"):
    palette = {
        "violet": (VIOLET_LIGHT, VIOLET_DARK),
        "green": (GREEN_LIGHT, GREEN),
        "amber": (AMBER_LIGHT, AMBER),
        "blue": (BLUE_LIGHT, colors.HexColor("#1D4ED8")),
    }
    background, foreground = palette[kind]
    content = Table(
        [[para(f"<b>{title}</b><br/>{text}", STYLES["body"])]],
        colWidths=[PAGE_W - 2 * MARGIN_X],
    )
    content.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), background),
                ("BOX", (0, 0), (-1, -1), 0.7, foreground),
                ("LEFTPADDING", (0, 0), (-1, -1), 10),
                ("RIGHTPADDING", (0, 0), (-1, -1), 10),
                ("TOPPADDING", (0, 0), (-1, -1), 8),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
            ]
        )
    )
    return content


def bullet(text: str):
    return para(f"<font color='#6D28D9'>●</font>&nbsp;&nbsp;{text}", STYLES["body"])


def section(story, number: str, title: str, intro: str | None = None):
    story.append(para(f"SECTION {number}", STYLES["eyebrow"]))
    story.append(para(title, STYLES["h2"]))
    if intro:
        story.append(para(intro, STYLES["body"]))


def build_story():
    story = []

    story.extend(
        [
            Spacer(1, 42 * mm),
            para("LIVRE BLANC - GRILLE OPÉRATIONNELLE", STYLES["cover_eyebrow"]),
            para("Comparer trois devis de site internet sur trois ans", STYLES["cover_title"]),
            para(
                "Coût total sur 36 mois, 40 critères pondérés, critères éliminatoires et exemple fictif entièrement rempli.",
                STYLES["cover_sub"],
            ),
            Spacer(1, 6 * mm),
            Table(
                [
                    [
                        para("3 offres", STYLES["cover_meta"]),
                        para("36 mois", STYLES["cover_meta"]),
                        para("40 critères", STYLES["cover_meta"]),
                        para("Excel / Sheets", STYLES["cover_meta"]),
                    ]
                ],
                colWidths=[35 * mm, 35 * mm, 35 * mm, 42 * mm],
                style=TableStyle(
                    [
                        ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#18181B")),
                        ("BOX", (0, 0), (-1, -1), 0.5, colors.HexColor("#3F3F46")),
                        ("INNERGRID", (0, 0), (-1, -1), 0.5, colors.HexColor("#3F3F46")),
                        ("ALIGN", (0, 0), (-1, -1), "CENTER"),
                        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                        ("TOPPADDING", (0, 0), (-1, -1), 9),
                        ("BOTTOMPADDING", (0, 0), (-1, -1), 9),
                    ]
                ),
            ),
            Spacer(1, 22 * mm),
            para(
                "Pour les dirigeants, responsables marketing, DSI et chefs de projet qui veulent choisir une offre vérifiable - pas seulement le plus petit total affiché.",
                STYLES["cover_meta"],
            ),
            PageBreak(),
        ]
    )

    section(
        story,
        "01",
        "La décision que cette grille doit rendre possible",
        "Trois devis peuvent afficher 8 900 €, 17 900 € et 24 800 € sans acheter la même chose. La comparaison devient utile seulement lorsque chaque colonne décrit le même résultat, sur le même horizon et avec des preuves de livraison comparables.",
    )
    story.append(para("La méthode en six mouvements", STYLES["h3"]))
    for text in [
        "Écrire le socle commun : objectif, pages, fonctions, migrations et recette.",
        "Ajouter à chaque offre le coût des éléments indispensables qu'elle exclut.",
        "Calculer création, récurrents, temps interne, risques et sortie sur 36 mois.",
        "Éliminer les offres qui échouent sur un critère non négociable.",
        "Noter les offres restantes de 0 à 3, avec une preuve pour chaque note.",
        "Choisir en demandant ce que chaque écart de prix achète réellement.",
    ]:
        story.append(bullet(text))
    story.append(
        callout(
            "La règle centrale",
            "Ne faites jamais une moyenne entre un prix bas et un risque critique. Une offre non recevable sort du classement. Le coût total ne départage que les offres qui passent le filtre.",
            "amber",
        )
    )
    story.append(Spacer(1, 5 * mm))
    story.append(para("Pourquoi 36 mois ?", STYLES["h3"]))
    story.append(
        para(
            "Douze mois favorisent les offres à faible mise de départ. Cinq ans donnent souvent une fausse précision sur les volumes et les besoins futurs. Trois ans font apparaître abonnements, maintenance, licences, travail interne et réversibilité tout en gardant des hypothèses documentables.",
            STYLES["body"],
        )
    )
    story.append(
        table(
            [
                ["Horizon", "Ce qu'il montre", "Ce qu'il masque"],
                ["Lancement", "Acompte et cash initial", "Récurrents, travail interne et sortie"],
                ["12 mois", "Budget de la première année", "Effet cumulé des abonnements"],
                ["36 mois", "Coût d'usage et écarts structurels", "Transformations lointaines du besoin"],
                ["60 mois", "Trajectoire longue", "Précision souvent fictive"],
            ],
            [27 * mm, 66 * mm, 66 * mm],
            row_backgrounds=True,
        )
    )

    story.append(PageBreak())
    section(
        story,
        "02",
        "Normaliser les offres avant d'ouvrir Excel",
        "Une option indispensable n'est pas une option dans la comparaison. Elle est ajoutée au coût de l'offre qui l'exclut. Un point indéterminé devient une question écrite, identique pour tous les candidats.",
    )
    story.append(
        table(
            [
                ["Poste", "Offre A", "Offre B", "Offre C", "Ajustement"],
                ["Migration de 120 pages", "Exclue", "Incluse", "Incluse", "Ajouter un prix à A"],
                ["Plan de redirections", "Non précisé", "Inclus + recette", "Inclus", "Question à A, preuve à C"],
                ["Rédaction", "Client", "Client + 6 pages", "Agence, 20 pages", "Valoriser le temps restant"],
                ["Hébergement", "390 €/mois", "90 €/mois", "12 mois inclus", "Projeter chaque contrat"],
                ["Code et comptes", "Licence d'usage", "Dépôt client", "Dépôt client", "A peut être éliminatoire"],
            ],
            [35 * mm, 28 * mm, 31 * mm, 31 * mm, 36 * mm],
            font_size=6.8,
            row_backgrounds=True,
        )
    )
    story.append(Spacer(1, 5 * mm))
    story.append(para("Le socle minimum à rendre commun", STYLES["h3"]))
    for text in [
        "quantités : pages, langues, formulaires, imports, utilisateurs et volumes ;",
        "responsabilités : textes, images, arbitrages, recettes et accès ;",
        "livrables : maquettes, code, configuration, documentation et formation ;",
        "preuves : critères de recette, mesures, exports, sauvegardes et redirections ;",
        "exploitation : hébergement, licences, maintenance, support et évolutions ;",
        "sortie : comptes, dépôts, contenus, données, documentation et coût de reprise.",
    ]:
        story.append(bullet(text))
    story.append(
        callout(
            "Base fiscale",
            "Comparez toutes les offres sur la même base. Une entreprise qui récupère intégralement la TVA raisonne généralement en HT ; sinon, utilisez le coût réellement supporté et validez le traitement avec votre comptable.",
            "blue",
        )
    )

    story.append(PageBreak())
    section(
        story,
        "03",
        "La formule du coût total sur 36 mois",
        "La formule reste volontairement simple. Chaque terme doit correspondre à une ligne visible et à une hypothèse que l'on peut expliquer en réunion.",
    )
    formula = Table(
        [
            [para("TCO 36 mois", STYLES["table_head"]), para("= création + options nécessaires + récurrents A1/A2/A3 + temps interne + sortie + risques - crédits certains", STYLES["table_head"])],
        ],
        colWidths=[38 * mm, 121 * mm],
    )
    formula.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), INK),
                ("BOX", (0, 0), (-1, -1), 0.8, VIOLET),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("LEFTPADDING", (0, 0), (-1, -1), 9),
                ("RIGHTPADDING", (0, 0), (-1, -1), 9),
                ("TOPPADDING", (0, 0), (-1, -1), 10),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
            ]
        )
    )
    story.append(formula)
    story.append(Spacer(1, 6 * mm))
    story.append(para("Les neuf lignes du calcul", STYLES["h3"]))
    story.append(
        table(
            [
                ["Ligne", "Contenu", "Règle de saisie"],
                ["Création", "Cadrage, design, développement, recette", "Prix ferme ou hypothèse explicitée"],
                ["Options nécessaires", "Exclusions nécessaires au socle", "Ajouter à l'offre concernée"],
                ["Récurrents A1-A3", "Hébergement, licences, maintenance", "Appliquer l'indexation prévue"],
                ["Heures internes", "Contenus, coordination, recette", "Même coût horaire pour tous"],
                ["Sortie", "Exports, accès, documentation, migration", "Prix ou estimation documentée"],
                ["Risques", "Probabilité x impact", "Un risque concret par ligne"],
            ],
            [34 * mm, 72 * mm, 53 * mm],
            row_backgrounds=True,
        )
    )
    story.append(Spacer(1, 4 * mm))
    story.append(
        callout(
            "Provision de risques",
            "N'entrez pas 10 % 'au cas où'. Exemple : 30 % de probabilité de devoir reprendre 40 pages à 60 € = 720 €. Si le risque n'est pas formulable, laissez-le hors du calcul et notez-le comme incertitude.",
            "violet",
        )
    )

    story.append(PageBreak())
    section(
        story,
        "04",
        "Exemple rempli : trois offres fictives",
        "Cas : PME B2B, remplacement d'un site de 120 URL, CMS, formulaire relié au CRM, analytics, migration SEO, formation et maintenance. Les montants servent uniquement à expliquer la méthode.",
    )
    example_data = [["Poste sur 36 mois"] + [offer.name for offer in OFFERS]]
    example_data.extend(
        [
            ["Création"] + [euro(offer.initial) for offer in OFFERS],
            ["Options nécessaires"] + [euro(offer.options) for offer in OFFERS],
            ["Récurrents cumulés"] + [euro(offer.recurring) for offer in OFFERS],
            ["Temps interne"] + [euro(offer.internal_cost) for offer in OFFERS],
            ["Sortie"] + [euro(offer.exit_cost) for offer in OFFERS],
            ["Risques identifiés"] + [euro(offer.risk_reserve) for offer in OFFERS],
            ["TCO 36 mois"] + [euro(offer.tco) for offer in OFFERS],
            ["Écart vs B"] + [euro(offer.tco - OFFERS[1].tco) for offer in OFFERS],
        ]
    )
    story.append(
        table(
            example_data,
            [48 * mm, 37 * mm, 37 * mm, 37 * mm],
            row_backgrounds=True,
            extra_style=[
                ("BACKGROUND", (0, 7), (-1, 7), VIOLET_LIGHT),
                ("TEXTCOLOR", (2, 7), (2, 7), GREEN),
                ("FONTNAME", (0, 7), (-1, 7), FONT_BOLD),
            ],
        )
    )
    story.append(Spacer(1, 5 * mm))
    story.append(para("Lecture économique", STYLES["h3"]))
    story.append(
        para(
            "A est la moins chère au lancement mais coûte 34 380 € sur trois ans, soit 5 500 € de plus que B. C coûte 3 820 € de plus que B. La question utile devient : quels livrables ou niveaux de service ces 3 820 € achètent-ils, et valent-ils cet écart pour ce projet ?",
            STYLES["body"],
        )
    )
    score_data = [["Lecture qualitative"] + [offer.name for offer in OFFERS]]
    score_data.extend(
        [
            ["Score pondéré"] + [f"{offer.weighted_score:.1f} / 100" for offer in OFFERS],
            ["Éligibilité"] + ["Non" if not offer.eligible else "Oui" for offer in OFFERS],
            ["Décision"] + ["Écartée", "Rapport coût/couverture", "Option premium à justifier"],
        ]
    )
    story.append(
        table(
            score_data,
            [48 * mm, 37 * mm, 37 * mm, 37 * mm],
            extra_style=[
                ("BACKGROUND", (0, 2), (-1, 2), GREEN_LIGHT),
                ("TEXTCOLOR", (1, 2), (1, 2), AMBER),
                ("TEXTCOLOR", (2, 2), (3, 2), GREEN),
            ],
        )
    )

    story.append(PageBreak())
    section(
        story,
        "05",
        "Éliminer d'abord, noter ensuite",
        "Un score moyen ne doit jamais compenser une défaillance critique. Le filtre d'éligibilité protège la décision contre les offres séduisantes mais impossibles à exploiter ou à quitter.",
    )
    story.append(para("Huit motifs de clarification ou d'élimination", STYLES["h3"]))
    for text in [
        "le périmètre indispensable n'est pas chiffré ;",
        "les comptes critiques ne sont pas au nom du client ;",
        "le sort du code, des maquettes ou des licences est flou ;",
        "aucun export exploitable des données et contenus n'est prévu ;",
        "la migration des URL est absente lors d'une refonte ;",
        "la recette, les sauvegardes ou la restauration ne produisent aucune preuve ;",
        "la procédure de changement autorise un prix ou un délai indéterminé ;",
        "un sous-traitant essentiel reste non identifié malgré vos contraintes.",
    ]:
        story.append(bullet(text))
    story.append(Spacer(1, 4 * mm))
    story.append(para("Barème de preuve", STYLES["h3"]))
    story.append(
        table(
            [
                ["Note", "Lecture", "Exemple"],
                ["0", "Absent", "Le sujet n'apparaît ni dans le devis ni dans l'annexe"],
                ["1", "Affirmé", "'Le site sera rapide' sans mesure ni seuil"],
                ["2", "Décrit", "Méthode, responsabilité et résultat attendus"],
                ["3", "Décrit et prouvé", "Clause, livrable, démonstration ou critère de recette"],
            ],
            [20 * mm, 38 * mm, 101 * mm],
            row_backgrounds=True,
        )
    )
    story.append(Spacer(1, 5 * mm))
    story.append(
        callout(
            "Formule de score",
            "Score pondéré = somme(note / 3 x poids). Seuil de travail : clarifier sous 75/100 ; comparer seulement les offres recevables. Adaptez les poids avant de lire les devis.",
            "green",
        )
    )

    story.append(PageBreak())
    section(
        story,
        "06",
        "Checklist pondérée - 40 critères",
        "Pondération proposée pour un site public de PME orienté acquisition. Total : 100 %. Notez chaque offre de 0 à 3 et conservez la preuve dans une colonne voisine.",
    )
    criteria_header = ["Famille", "Critère", "Poids", "A", "B", "C", "Preuve / note"]
    criteria_rows_a = [criteria_header]
    for category, criterion, weight in CRITERIA[:20]:
        criteria_rows_a.append([category, criterion, f"{weight} %", "", "", "", ""])
    story.append(
        table(
            criteria_rows_a,
            [29 * mm, 63 * mm, 14 * mm, 9 * mm, 9 * mm, 9 * mm, 26 * mm],
            font_size=6.4,
            repeat_rows=1,
            row_backgrounds=True,
            extra_style=[
                ("ALIGN", (2, 1), (5, -1), "CENTER"),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
            ],
        )
    )
    story.append(Spacer(1, 5 * mm))
    story.append(
        callout(
            "Sous-total des critères 1 à 20 : 52 %",
            "Le périmètre, les contenus, le SEO, les données et l'accessibilité sont évalués avant les choix d'exploitation et de sortie.",
            "blue",
        )
    )

    story.append(PageBreak())
    section(
        story,
        "06 - SUITE",
        "Checklist pondérée - critères 21 à 40",
        "Notez chaque ligne de 0 à 3. Une note sans preuve reste provisoire. Les vingt critères ci-dessous représentent les 48 % restants.",
    )
    criteria_rows_b = [criteria_header]
    for category, criterion, weight in CRITERIA[20:]:
        criteria_rows_b.append([category, criterion, f"{weight} %", "", "", "", ""])
    story.append(
        table(
            criteria_rows_b,
            [29 * mm, 63 * mm, 14 * mm, 9 * mm, 9 * mm, 9 * mm, 26 * mm],
            font_size=6.4,
            repeat_rows=1,
            row_backgrounds=True,
            extra_style=[
                ("ALIGN", (2, 1), (5, -1), "CENTER"),
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
            ],
        )
    )
    story.append(Spacer(1, 5 * mm))
    story.append(
        callout(
            "Total de la grille : 100 %",
            "Adaptez les poids avant de consulter les offres. Un e-commerce renforcera l'exploitation ; une application métier renforcera les données, la sécurité et la continuité.",
            "green",
        )
    )

    story.append(PageBreak())
    section(
        story,
        "07",
        "Les coûts presque toujours oubliés",
        "Un coût oublié ne disparaît pas : il réapparaît dans le travail interne, un avenant, une dépendance ou une sortie difficile. Le bon tableau rend ces transferts visibles.",
    )
    story.append(
        table(
            [
                ["Coût", "Signal dans le devis", "Traitement dans la grille"],
                ["Contenus", "'Fournis par le client'", "Heures internes ou prestation externe"],
                ["Migration", "Nombre d'URL non chiffré", "Quantité x coût + recette"],
                ["SEO de refonte", "Aucun inventaire/redirection", "Forfait nécessaire à périmètre égal"],
                ["Licences", "Prix hors renouvellement/utilisateur", "Prix exact par année et volume"],
                ["Maintenance", "Correctif et évolution mélangés", "Séparer couverture et hors-forfait"],
                ["Coordination", "Arbitrages et recette invisibles", "Heures internes x coût chargé"],
                ["Trafic", "Hébergement limité à un seuil", "Scénario documenté"],
                ["Sortie", "Exports et accès absents", "Coût ou critère éliminatoire"],
            ],
            [40 * mm, 58 * mm, 61 * mm],
            row_backgrounds=True,
        )
    )
    story.append(Spacer(1, 6 * mm))
    story.append(para("Valoriser le temps interne sans fausse précision", STYLES["h3"]))
    story.append(
        para(
            "Comptez les heures de rédaction, collecte d'images, arbitrage, validation, import, recette et coordination. Utilisez un coût horaire chargé commun aux trois offres. L'objectif n'est pas d'obtenir une comptabilité analytique parfaite, mais de rendre visible une charge qui varie selon la promesse du prestataire.",
            STYLES["body"],
        )
    )
    story.append(
        callout(
            "Même hypothèse, trois colonnes",
            "Ne valorisez pas le temps interne uniquement sur l'offre qui le mentionne honnêtement. Estimez la charge réelle pour chaque offre, sur la même base.",
            "amber",
        )
    )

    story.append(PageBreak())
    section(
        story,
        "08",
        "Les 15 questions à renvoyer aux candidats",
        "Envoyez la même liste et demandez une réponse écrite. La qualité de la réponse fait partie de l'évaluation : précision, délai, reconnaissance des inconnues et preuve proposée.",
    )
    questions = [
        "Quel document fait foi si le devis et l'annexe se contredisent ?",
        "Quelles lignes de notre périmètre ne sont pas incluses dans votre prix ?",
        "Quelles hypothèses de quantité avez-vous utilisées ?",
        "Quels livrables recevons-nous à chaque jalon ?",
        "Quels critères déclenchent l'acceptation de la recette ?",
        "Qui produit, intègre et valide chaque famille de contenu ?",
        "Comment les anciennes URL seront-elles inventoriées et testées ?",
        "Quels comptes seront créés directement au nom de notre entreprise ?",
        "Où sera hébergé le dépôt de code et quand y aurons-nous accès ?",
        "Quelles briques restent sous licence et lesquelles nous sont cédées ?",
        "Quels coûts récurrents sont obligatoires, indexés ou liés au volume ?",
        "Que couvre précisément la maintenance corrective ?",
        "Comment une demande hors périmètre modifie-t-elle prix et calendrier ?",
        "Comment récupérons-nous contenus, données, code et documentation ?",
        "Quel risque important voyez-vous et comment le réduisez-vous ?",
    ]
    question_rows = [["#", "Question", "Réponse / pièce à conserver"]]
    for idx, question in enumerate(questions, 1):
        question_rows.append([str(idx), question, ""])
    story.append(
        table(
            question_rows,
            [10 * mm, 96 * mm, 53 * mm],
            font_size=6.9,
            row_backgrounds=True,
        )
    )

    story.append(PageBreak())
    section(
        story,
        "09",
        "Comparer trois devis en 90 minutes",
        "Le premier passage ne doit pas tout résoudre. Il doit isoler les écarts, les inconnues et les questions qui changeraient réellement la décision.",
    )
    story.append(
        table(
            [
                ["Temps", "Action", "Sortie"],
                ["0-15 min", "Relire le périmètre et les indispensables", "Liste des non-négociables"],
                ["15-35 min", "Normaliser inclusions, exclusions et quantités", "Trois colonnes comparables"],
                ["35-50 min", "Saisir les neuf postes du TCO", "Coût total et hypothèses"],
                ["50-65 min", "Appliquer les critères éliminatoires", "Offres recevables et blocages"],
                ["65-80 min", "Noter les preuves à fort poids", "Score provisoire documenté"],
                ["80-90 min", "Écrire les écarts et le mail commun", "Décision provisoire"],
            ],
            [25 * mm, 72 * mm, 62 * mm],
            row_backgrounds=True,
        )
    )
    story.append(Spacer(1, 6 * mm))
    story.append(para("Ce qui doit rester 'à confirmer'", STYLES["h3"]))
    story.append(
        para(
            "Ne remplacez jamais un manque par une hypothèse silencieuse. Écrivez 'à confirmer', estimez l'impact possible et envoyez la question. Un bon candidat peut répondre 'inconnu à ce stade' à condition d'expliquer quand l'inconnu sera levé, par qui et avec quel effet sur le prix.",
            STYLES["body"],
        )
    )
    story.append(
        callout(
            "La réponse fait partie de l'offre",
            "Un délai raisonnable, une réponse précise et la capacité à produire une preuve sont des signaux plus utiles qu'une présentation commerciale bien répétée.",
            "blue",
        )
    )

    story.append(PageBreak())
    section(
        story,
        "10",
        "Synthèse de décision - modèle d'une page",
        "Archivez la grille avec la version des devis et les réponses écrites. Si le périmètre évolue avant signature, mettez à jour les hypothèses et datez la nouvelle décision.",
    )
    decision_rows = [
        ["Bloc", "À renseigner"],
        ["Besoin et horizon", "Résultat attendu, périmètre de référence, 36 mois, base HT ou TTC"],
        ["Offres recevables", "Critères éliminatoires, clarifications reçues et pièces associées"],
        ["TCO", "Total de chaque offre, trois principaux écarts et hypothèses sensibles"],
        ["Couverture", "Score pondéré, forces et manques prouvés"],
        ["Risques", "Risque, propriétaire, mesure de réduction, probabilité et impact"],
        ["Recommandation", "Offre retenue, alternative et valeur achetée par l'écart de prix"],
        ["Conditions avant signature", "Points à intégrer au devis, contrat ou annexe"],
    ]
    story.append(table(decision_rows, [43 * mm, 116 * mm], row_backgrounds=True))
    story.append(Spacer(1, 8 * mm))
    story.append(para("Formulation utile", STYLES["h3"]))
    story.append(
        para(
            "'Nous recommandons B, dont le coût total estimé est inférieur de 3 820 € à C sur 36 mois. Les deux offres passent nos critères indispensables. C obtient un score supérieur grâce au design et au service, mais ces livrables ne sont pas nécessaires à la V1. La signature de B reste conditionnée à l'ajout du plan de redirections, de la procédure de restauration et du calendrier de remise des accès.'",
            STYLES["quote"],
        )
    )
    story.append(
        callout(
            "Ce document n'est pas un contrat",
            "La grille documente une décision. Le devis, le contrat et leurs annexes fixent les engagements, responsabilités, droits, prix et procédure de changement. Pour une clause sensible, demandez un conseil adapté.",
            "amber",
        )
    )

    story.append(PageBreak())
    story.extend(
        [
            Spacer(1, 18 * mm),
            para("PRÊT À COMPARER VOS OFFRES", STYLES["eyebrow"]),
            para("Gardez les colonnes honnêtes.", STYLES["h1"]),
            para(
                "1. Copiez la grille disponible sur la page du livre blanc.<br/>2. Envoyez les mêmes questions aux candidats.<br/>3. Éliminez les offres non recevables.<br/>4. Demandez ce que chaque écart de prix achète vraiment.",
                STYLES["body"],
            ),
            Spacer(1, 6 * mm),
            callout(
                "La version interactive",
                "hagnere-code.ai/livres-blancs/comparer-devis-site-internet - modifiez l'exemple et copiez les formules dans Excel ou Google Sheets.",
                "violet",
            ),
            Spacer(1, 6 * mm),
            callout(
                "Faire relire vos devis",
                f"Décrivez le projet sur {SITE}/demarrer-un-projet ou écrivez à {EMAIL}. Une lecture contradictoire doit pouvoir conclure qu'une autre offre est meilleure pour votre cas.",
                "green",
            ),
            Spacer(1, 16 * mm),
            para(
                "Hagnéré Code - studio de développement web à Bassens, près de Chambéry. Ce livre blanc est gratuit, sans formulaire et peut être partagé avec les parties prenantes de votre consultation.",
                STYLES["small"],
            ),
        ]
    )
    return story


def build_pdf(output: Path) -> None:
    validate_model()
    output.parent.mkdir(parents=True, exist_ok=True)
    doc = BaseDocTemplate(
        str(output),
        pagesize=A4,
        leftMargin=MARGIN_X,
        rightMargin=MARGIN_X,
        topMargin=MARGIN_TOP,
        bottomMargin=MARGIN_BOTTOM,
        title="Comparer trois devis de site internet sur trois ans",
        author=ORGANISATION,
        subject="Grille de comparaison de devis web - TCO 36 mois et 40 critères",
        creator=ORGANISATION,
    )
    cover_frame = Frame(
        MARGIN_X,
        27 * mm,
        PAGE_W - 2 * MARGIN_X,
        PAGE_H - 62 * mm,
        leftPadding=0,
        rightPadding=0,
        topPadding=0,
        bottomPadding=0,
        id="cover",
    )
    body_frame = Frame(
        MARGIN_X,
        MARGIN_BOTTOM,
        PAGE_W - 2 * MARGIN_X,
        PAGE_H - MARGIN_TOP - MARGIN_BOTTOM,
        leftPadding=0,
        rightPadding=0,
        topPadding=0,
        bottomPadding=0,
        id="body",
    )
    doc.addPageTemplates(
        [
            PageTemplate(id="Cover", frames=[cover_frame], onPage=draw_cover, autoNextPageTemplate="Body"),
            PageTemplate(id="Body", frames=[body_frame], onPage=draw_content_page),
        ]
    )
    doc.build(build_story())


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--output",
        type=Path,
        default=Path(
            "public/ressources/grille-comparaison-devis-web/"
            "livre-blanc-comparer-devis-site-internet-3-ans.pdf"
        ),
    )
    args = parser.parse_args()
    build_pdf(args.output)
    print(args.output)


if __name__ == "__main__":
    main()
