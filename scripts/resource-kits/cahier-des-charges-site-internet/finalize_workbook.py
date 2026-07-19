#!/usr/bin/env python3
"""Finalize the generated XLSX with features not preserved by artifact-tool.

The workbook generator remains the source of content and styling. This pass
adds stable OOXML metadata, named validation lists, frozen panes, an autofilter
and clickable official-source links, then fails if any expected structure is
missing.
"""

from __future__ import annotations

import argparse
import json
import tempfile
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET


CONFIG = json.loads(
    Path(__file__).with_name("kit_config.json").read_text(encoding="utf-8")
)


NS_MAIN = "http://schemas.openxmlformats.org/spreadsheetml/2006/main"
NS_REL_DOC = "http://schemas.openxmlformats.org/officeDocument/2006/relationships"
NS_REL_PKG = "http://schemas.openxmlformats.org/package/2006/relationships"
NS_CT = "http://schemas.openxmlformats.org/package/2006/content-types"
NS_CP = "http://schemas.openxmlformats.org/package/2006/metadata/core-properties"
NS_DC = "http://purl.org/dc/elements/1.1/"
NS_DCTERMS = "http://purl.org/dc/terms/"
NS_XSI = "http://www.w3.org/2001/XMLSchema-instance"
NS_EP = "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties"
NS_VT = "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"

for prefix, uri in {
    "": NS_MAIN,
    "r": NS_REL_DOC,
    "cp": NS_CP,
    "dc": NS_DC,
    "dcterms": NS_DCTERMS,
    "xsi": NS_XSI,
    "ep": NS_EP,
    "vt": NS_VT,
}.items():
    ET.register_namespace(prefix, uri)


def qn(namespace: str, tag: str) -> str:
    return f"{{{namespace}}}{tag}"


def parse(entries: dict[str, bytes], name: str) -> ET.Element:
    if name not in entries:
        raise RuntimeError(f"Entrée XLSX attendue absente : {name}")
    return ET.fromstring(entries[name])


def serialize(root: ET.Element) -> bytes:
    return ET.tostring(root, encoding="utf-8", xml_declaration=True)


def add_frozen_pane(sheet: ET.Element, *, x_split: int = 0, y_split: int = 0, top_left: str) -> None:
    view = sheet.find(f"{qn(NS_MAIN, 'sheetViews')}/{qn(NS_MAIN, 'sheetView')}")
    if view is None:
        raise RuntimeError("sheetView absent : impossible de figer les volets")
    for old in list(view.findall(qn(NS_MAIN, "pane"))):
        view.remove(old)
    attrs = {"topLeftCell": top_left, "state": "frozen"}
    if x_split:
        attrs["xSplit"] = str(x_split)
    if y_split:
        attrs["ySplit"] = str(y_split)
    if x_split and y_split:
        attrs["activePane"] = "bottomRight"
    elif x_split:
        attrs["activePane"] = "topRight"
    else:
        attrs["activePane"] = "bottomLeft"
    view.insert(0, ET.Element(qn(NS_MAIN, "pane"), attrs))


def add_autofilter(sheet: ET.Element, ref: str) -> None:
    old = sheet.find(qn(NS_MAIN, "autoFilter"))
    if old is not None:
        sheet.remove(old)
    node = ET.Element(qn(NS_MAIN, "autoFilter"), {"ref": ref})
    merge_cells = sheet.find(qn(NS_MAIN, "mergeCells"))
    if merge_cells is not None:
        sheet.insert(list(sheet).index(merge_cells), node)
        return
    sheet_data = sheet.find(qn(NS_MAIN, "sheetData"))
    if sheet_data is None:
        raise RuntimeError("sheetData absent : impossible d'ajouter le filtre")
    sheet.insert(list(sheet).index(sheet_data) + 1, node)


def add_defined_names(workbook: ET.Element) -> None:
    old = workbook.find(qn(NS_MAIN, "definedNames"))
    if old is not None:
        workbook.remove(old)
    names = ET.Element(qn(NS_MAIN, "definedNames"))
    for name, formula in [
        ("PriorityList", "'Listes'!$A$5:$A$7"),
        ("StatusList", "'Listes'!$B$5:$B$9"),
        ("SeverityList", "'Listes'!$C$5:$C$8"),
        ("OwnerList", "'Listes'!$D$5:$D$8"),
    ]:
        node = ET.SubElement(names, qn(NS_MAIN, "definedName"), {"name": name})
        node.text = formula
    sheets = workbook.find(qn(NS_MAIN, "sheets"))
    if sheets is None:
        raise RuntimeError("workbook/sheets absent")
    workbook.insert(list(workbook).index(sheets) + 1, names)


def connect_validations(sheet: ET.Element) -> None:
    expected = {
        "C5:C72": "PriorityList",
        "I5:I72": "OwnerList",
        "J5:J72": "StatusList",
        "M5:M72": "SeverityList",
    }
    found: set[str] = set()
    for validation in sheet.findall(f".//{qn(NS_MAIN, 'dataValidation')}"):
        ref = validation.get("sqref", "")
        if ref not in expected:
            continue
        formula = validation.find(qn(NS_MAIN, "formula1"))
        if formula is None:
            raise RuntimeError(f"formula1 absente pour la validation {ref}")
        formula.text = expected[ref]
        validation.set("allowBlank", "1")
        validation.set("showErrorMessage", "1")
        validation.set("errorStyle", "stop")
        validation.set("errorTitle", "Valeur non prévue")
        validation.set("error", "Choisissez une valeur dans le menu associé.")
        validation.set("showInputMessage", "1")
        found.add(ref)
    missing = set(expected) - found
    if missing:
        raise RuntimeError(f"Validations attendues absentes : {sorted(missing)}")


def add_hyperlinks(entries: dict[str, bytes], sheet: ET.Element) -> None:
    links = [
        ("B13", "https://www.francenum.gouv.fr/guides-et-conseils/developpement-commercial/site-web/batir-le-cahier-des-charges-du-site-internet"),
        ("B14", "https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/comment-mettre-mon-site-web-en-conformite"),
        ("B15", "https://accessibilite.numerique.gouv.fr/obligations/champ-application/"),
    ]
    old = sheet.find(qn(NS_MAIN, "hyperlinks"))
    if old is not None:
        sheet.remove(old)
    hyperlinks = ET.Element(qn(NS_MAIN, "hyperlinks"))
    rels = ET.Element(qn(NS_REL_PKG, "Relationships"))
    for index, (cell, target) in enumerate(links, start=1):
        rel_id = f"rIdHyperlink{index}"
        ET.SubElement(
            hyperlinks,
            qn(NS_MAIN, "hyperlink"),
            {"ref": cell, qn(NS_REL_DOC, "id"): rel_id, "tooltip": "Ouvrir la source officielle"},
        )
        ET.SubElement(
            rels,
            qn(NS_REL_PKG, "Relationship"),
            {
                "Id": rel_id,
                "Type": f"{NS_REL_DOC}/hyperlink",
                "Target": target,
                "TargetMode": "External",
            },
        )
    page_margins = sheet.find(qn(NS_MAIN, "pageMargins"))
    if page_margins is not None:
        sheet.insert(list(sheet).index(page_margins), hyperlinks)
    else:
        sheet.append(hyperlinks)
    entries["xl/worksheets/_rels/sheet4.xml.rels"] = serialize(rels)


def add_metadata(entries: dict[str, bytes], content_types: ET.Element, root_rels: ET.Element) -> None:
    timestamp = CONFIG["metadataTimestamp"]
    core = ET.Element(qn(NS_CP, "coreProperties"))
    fields = [
        (NS_DC, "title", "Grille de recette de site internet"),
        (NS_DC, "subject", "56 tests adaptables et 12 lignes libres pour préparer une recette de site"),
        (NS_DC, "creator", "Hagnéré Code"),
        (NS_CP, "lastModifiedBy", "Hagnéré Code"),
        (NS_DC, "description", "Kit cahier des charges de site internet — grille de recette opérationnelle."),
        (NS_DC, "language", "fr-FR"),
        (NS_CP, "version", CONFIG["version"]),
    ]
    for namespace, tag, value in fields:
        ET.SubElement(core, qn(namespace, tag)).text = value
    for tag in ("created", "modified"):
        node = ET.SubElement(core, qn(NS_DCTERMS, tag), {qn(NS_XSI, "type"): "dcterms:W3CDTF"})
        node.text = timestamp

    app = ET.Element(qn(NS_EP, "Properties"))
    ET.SubElement(app, qn(NS_EP, "Application")).text = "Hagnéré Code resource generator"
    ET.SubElement(app, qn(NS_EP, "AppVersion")).text = CONFIG["version"]
    ET.SubElement(app, qn(NS_EP, "Company")).text = "Hagnéré Code"
    ET.SubElement(app, qn(NS_EP, "DocSecurity")).text = "0"
    entries["docProps/core.xml"] = serialize(core)
    entries["docProps/app.xml"] = serialize(app)

    overrides = {
        item.get("PartName") for item in content_types.findall(qn(NS_CT, "Override"))
    }
    for part_name, content_type in [
        ("/docProps/core.xml", "application/vnd.openxmlformats-package.core-properties+xml"),
        ("/docProps/app.xml", "application/vnd.openxmlformats-officedocument.extended-properties+xml"),
    ]:
        if part_name not in overrides:
            ET.SubElement(
                content_types,
                qn(NS_CT, "Override"),
                {"PartName": part_name, "ContentType": content_type},
            )

    rel_types = {item.get("Type") for item in root_rels.findall(qn(NS_REL_PKG, "Relationship"))}
    for rel_id, rel_type, target in [
        ("rIdCoreProperties", f"{NS_REL_PKG}/metadata/core-properties", "docProps/core.xml"),
        ("rIdExtendedProperties", f"{NS_REL_DOC}/extended-properties", "docProps/app.xml"),
    ]:
        if rel_type not in rel_types:
            ET.SubElement(
                root_rels,
                qn(NS_REL_PKG, "Relationship"),
                {"Id": rel_id, "Type": rel_type, "Target": target},
            )


def finalize(source: Path, output: Path) -> None:
    with zipfile.ZipFile(source, "r") as archive:
        entries = {info.filename: archive.read(info.filename) for info in archive.infolist()}

    workbook = parse(entries, "xl/workbook.xml")
    recipe = parse(entries, "xl/worksheets/sheet2.xml")
    mode = parse(entries, "xl/worksheets/sheet1.xml")
    summary = parse(entries, "xl/worksheets/sheet3.xml")
    lists = parse(entries, "xl/worksheets/sheet4.xml")
    content_types = parse(entries, "[Content_Types].xml")
    root_rels = parse(entries, "_rels/.rels")

    add_defined_names(workbook)
    calc_pr = workbook.find(qn(NS_MAIN, "calcPr"))
    if calc_pr is None:
        calc_pr = ET.SubElement(workbook, qn(NS_MAIN, "calcPr"))
    calc_pr.attrib.update({"calcMode": "auto", "fullCalcOnLoad": "1", "forceFullCalc": "1", "calcId": "0"})
    add_frozen_pane(mode, y_split=2, top_left="A3")
    add_frozen_pane(recipe, x_split=3, y_split=4, top_left="D5")
    add_frozen_pane(summary, y_split=2, top_left="A3")
    add_frozen_pane(lists, y_split=2, top_left="A3")
    add_autofilter(recipe, "A4:P72")
    connect_validations(recipe)
    add_hyperlinks(entries, lists)
    add_metadata(entries, content_types, root_rels)

    entries["xl/workbook.xml"] = serialize(workbook)
    entries["xl/worksheets/sheet1.xml"] = serialize(mode)
    entries["xl/worksheets/sheet2.xml"] = serialize(recipe)
    entries["xl/worksheets/sheet3.xml"] = serialize(summary)
    entries["xl/worksheets/sheet4.xml"] = serialize(lists)
    entries["[Content_Types].xml"] = serialize(content_types)
    entries["_rels/.rels"] = serialize(root_rels)

    output.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.NamedTemporaryFile(suffix=".xlsx", delete=False, dir=output.parent) as handle:
        temporary = Path(handle.name)
    try:
        with zipfile.ZipFile(temporary, "w", compression=zipfile.ZIP_DEFLATED) as archive:
            for name in sorted(entries):
                archive.writestr(name, entries[name])
        temporary.replace(output)
    finally:
        temporary.unlink(missing_ok=True)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("source", type=Path)
    parser.add_argument("output", type=Path)
    args = parser.parse_args()
    finalize(args.source, args.output)
    print(f"Finalized {args.output}")


if __name__ == "__main__":
    main()
