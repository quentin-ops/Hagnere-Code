#!/usr/bin/env python3
"""Restore public organisation metadata after the privacy scrub."""

from __future__ import annotations

import argparse
import json
import tempfile
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET


NAMESPACES = {
    "cp": "http://schemas.openxmlformats.org/package/2006/metadata/core-properties",
    "dc": "http://purl.org/dc/elements/1.1/",
    "dcterms": "http://purl.org/dc/terms/",
    "xsi": "http://www.w3.org/2001/XMLSchema-instance",
}

CONFIG = json.loads(
    Path(__file__).with_name("kit_config.json").read_text(encoding="utf-8")
)

EXTENDED_NS = "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties"

for prefix, namespace in {
    "cp": NAMESPACES["cp"],
    "dc": NAMESPACES["dc"],
    "dcterms": NAMESPACES["dcterms"],
    "xsi": NAMESPACES["xsi"],
    "ep": EXTENDED_NS,
}.items():
    ET.register_namespace(prefix, namespace)


def finalize(source: Path, output: Path, title: str) -> None:
    with zipfile.ZipFile(source, "r") as src:
        entries = {info.filename: (info, src.read(info.filename)) for info in src.infolist()}

    core_name = "docProps/core.xml"
    root = ET.fromstring(entries[core_name][1])
    creator = root.find("dc:creator", NAMESPACES)
    modified_by = root.find("cp:lastModifiedBy", NAMESPACES)
    title_node = root.find("dc:title", NAMESPACES)
    if creator is None or modified_by is None or title_node is None:
        raise RuntimeError("Expected public core-property nodes are missing")
    creator.text = "Hagnéré Code"
    modified_by.text = "Hagnéré Code"
    title_node.text = title
    language = root.find("dc:language", NAMESPACES)
    if language is None:
        language = ET.SubElement(root, f"{{{NAMESPACES['dc']}}}language")
    language.text = "fr-FR"
    timestamp = CONFIG["metadataTimestamp"]
    for tag in ("created", "modified"):
        node = root.find(f"dcterms:{tag}", NAMESPACES)
        if node is None:
            node = ET.SubElement(root, f"{{{NAMESPACES['dcterms']}}}{tag}")
        node.set(f"{{{NAMESPACES['xsi']}}}type", "dcterms:W3CDTF")
        node.text = timestamp
    entries[core_name] = (
        entries[core_name][0],
        ET.tostring(root, encoding="utf-8", xml_declaration=True),
    )

    app_name = "docProps/app.xml"
    app_root = ET.fromstring(entries[app_name][1])
    for tag in (
        "Pages",
        "Words",
        "Characters",
        "CharactersWithSpaces",
        "Lines",
        "Paragraphs",
        "TotalTime",
    ):
        node = app_root.find(f"{{{EXTENDED_NS}}}{tag}")
        if node is not None:
            app_root.remove(node)
    for tag, value in (
        ("Application", "Hagnéré Code resource generator"),
        ("AppVersion", CONFIG["version"]),
        ("Company", "Hagnéré Code"),
    ):
        node = app_root.find(f"{{{EXTENDED_NS}}}{tag}")
        if node is None:
            node = ET.SubElement(app_root, f"{{{EXTENDED_NS}}}{tag}")
        node.text = value
    entries[app_name] = (
        entries[app_name][0],
        ET.tostring(app_root, encoding="utf-8", xml_declaration=True),
    )

    output.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.NamedTemporaryFile(suffix=".docx", delete=False, dir=output.parent) as tmp:
        tmp_path = Path(tmp.name)
    try:
        with zipfile.ZipFile(tmp_path, "w", compression=zipfile.ZIP_DEFLATED) as dest:
            for name, (info, payload) in entries.items():
                dest.writestr(info, payload)
        tmp_path.replace(output)
    finally:
        if tmp_path.exists():
            tmp_path.unlink()


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("source", type=Path)
    parser.add_argument("output", type=Path)
    parser.add_argument("--title", required=True)
    args = parser.parse_args()
    finalize(args.source, args.output, args.title)
    print(f"Finalized {args.output}")


if __name__ == "__main__":
    main()
