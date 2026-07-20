#!/usr/bin/env python3
"""Validate, package and optionally publish the application-specification kit."""

from __future__ import annotations

import argparse
import hashlib
import json
import os
import re
import shutil
import subprocess
import tempfile
import uuid
import zipfile
from datetime import datetime, timezone
from pathlib import Path


SCRIPT_DIR = Path(__file__).resolve().parent
REPO_ROOT = SCRIPT_DIR.parents[2]
CONFIG = json.loads((SCRIPT_DIR / "kit_config.json").read_text(encoding="utf-8"))
QA_MANIFEST_PATH = SCRIPT_DIR / "qa_manifest.json"
PUBLIC_DIR = REPO_ROOT / "public/ressources/kit-cahier-des-charges-application-metier"

MODEL_NAME = "modele-cahier-des-charges-application-metier.docx"
EXAMPLE_NAME = "exemple-rempli-cahier-des-charges-application-metier.pdf"
README_NAME = "mode-emploi-cahier-des-charges-application-metier.pdf"
ARCHIVE_NAME = "kit-cahier-des-charges-application-metier.zip"

EXPECTED_RELEASE_NAMES = (MODEL_NAME, EXAMPLE_NAME, README_NAME, ARCHIVE_NAME)
LANDSCAPE_PAGES = tuple(range(15, 21))
QA_DOCUMENTS = {
    "model": {
        "source": MODEL_NAME,
        "rendered": (
            "render4-modele-cahier-des-charges-application-metier/"
            "modele-cahier-des-charges-application-metier.pdf"
        ),
        "a11y": f"{MODEL_NAME}.a11y.json",
        "pages": 22,
        "landscape_pages": LANDSCAPE_PAGES,
    },
    "example": {
        "source": "exemple-rempli-cahier-des-charges-application-metier-source.docx",
        "rendered": (
            "render4-exemple-rempli-cahier-des-charges-application-metier-source/"
            "exemple-rempli-cahier-des-charges-application-metier-source.pdf"
        ),
        "a11y": "exemple-rempli-cahier-des-charges-application-metier-source.docx.a11y.json",
        "pages": 22,
        "landscape_pages": LANDSCAPE_PAGES,
    },
    "readme": {
        "source": "mode-emploi-cahier-des-charges-application-metier-source.docx",
        "rendered": (
            "render4-mode-emploi-cahier-des-charges-application-metier-source/"
            "mode-emploi-cahier-des-charges-application-metier-source.pdf"
        ),
        "a11y": "mode-emploi-cahier-des-charges-application-metier-source.docx.a11y.json",
        "pages": 3,
        "landscape_pages": (),
    },
}


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--working-dir",
        type=Path,
        default=REPO_ROOT / "tmp/pdfs/cahier-des-charges-application-metier",
        help="Directory containing the generated DOCX and render4-* folders.",
    )
    parser.add_argument(
        "--output-dir",
        type=Path,
        help="Release destination. Defaults to <working-dir>/release.",
    )
    parser.add_argument(
        "--publish",
        action="store_true",
        help="Publish the validated four-file release through a staged directory swap.",
    )
    parser.add_argument(
        "--record-qa-manifest",
        action="store_true",
        help="Record hashes for the already rendered and reviewed QA evidence.",
    )
    parser.add_argument(
        "--confirm-visual-review",
        action="store_true",
        help="Explicitly confirm that every PNG page was visually inspected.",
    )
    parser.add_argument(
        "--reviewed-by",
        help="Reviewer recorded in the QA manifest; required with --record-qa-manifest.",
    )
    args = parser.parse_args()
    if args.record_qa_manifest and not args.confirm_visual_review:
        parser.error("--record-qa-manifest exige --confirm-visual-review")
    if args.record_qa_manifest and not args.reviewed_by:
        parser.error("--record-qa-manifest exige --reviewed-by")
    if (args.confirm_visual_review or args.reviewed_by) and not args.record_qa_manifest:
        parser.error(
            "--confirm-visual-review et --reviewed-by s'utilisent avec --record-qa-manifest"
        )
    return args


def require_file(path: Path) -> Path:
    if not path.is_file() or path.stat().st_size == 0:
        raise RuntimeError(f"Fichier absent ou vide : {path}")
    return path


def assert_signature(path: Path, signature: bytes) -> None:
    if path.read_bytes()[: len(signature)] != signature:
        raise RuntimeError(f"Signature invalide : {path}")


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as source:
        for chunk in iter(lambda: source.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def read_json(path: Path) -> dict:
    try:
        value = json.loads(require_file(path).read_text(encoding="utf-8"))
    except (json.JSONDecodeError, UnicodeDecodeError) as error:
        raise RuntimeError(f"JSON invalide : {path}") from error
    if not isinstance(value, dict):
        raise RuntimeError(f"Objet JSON attendu : {path}")
    return value


def validate_docx(path: Path) -> None:
    assert_signature(path, b"PK")
    with zipfile.ZipFile(path) as archive:
        names = set(archive.namelist())
        required = {"[Content_Types].xml", "word/document.xml", "docProps/core.xml"}
        missing = required - names
        if missing:
            raise RuntimeError(f"DOCX incomplet ({', '.join(sorted(missing))}) : {path}")
        bad_member = archive.testzip()
        if bad_member:
            raise RuntimeError(f"Membre DOCX corrompu ({bad_member}) : {path}")


def validate_pdf(
    path: Path,
    expected_pages: int,
    expected_landscape_pages: tuple[int, ...] = (),
) -> None:
    assert_signature(path, b"%PDF")
    result = subprocess.run(
        ["pdfinfo", str(path)],
        check=True,
        capture_output=True,
        text=True,
    )
    pages_line = next(
        (line for line in result.stdout.splitlines() if line.startswith("Pages:")),
        None,
    )
    if not pages_line or int(pages_line.split(":", 1)[1].strip()) != expected_pages:
        raise RuntimeError(
            f"Nombre de pages inattendu pour {path}; attendu : {expected_pages}"
        )
    page_details = subprocess.run(
        ["pdfinfo", "-f", "1", "-l", str(expected_pages), str(path)],
        check=True,
        capture_output=True,
        text=True,
    ).stdout
    size_lines = [
        line for line in page_details.splitlines()
        if line.startswith("Page ") and " size:" in line
    ]
    if len(size_lines) != expected_pages or any("(A4)" not in line for line in size_lines):
        raise RuntimeError(f"Toutes les pages doivent être au format A4 : {path}")

    size_pattern = re.compile(
        r"^Page\s+(\d+)\s+size:\s+([0-9.]+)\s+x\s+([0-9.]+)\s+pts\s+\(A4\)"
    )
    observed_landscape_pages = []
    for line in size_lines:
        match = size_pattern.match(line)
        if match is None:
            raise RuntimeError(f"Dimensions PDF illisibles : {line}")
        page, width, height = match.groups()
        if float(width) > float(height):
            observed_landscape_pages.append(int(page))
    if tuple(observed_landscape_pages) != expected_landscape_pages:
        raise RuntimeError(
            f"Pages paysage inattendues pour {path}; "
            f"attendu : {expected_landscape_pages}, observé : "
            f"{tuple(observed_landscape_pages)}"
        )


def validate_a11y_report(path: Path, source: Path) -> dict[str, int]:
    report = read_json(path)
    expected_counts = {"high": 0, "medium": 0, "low": 0}
    if report.get("counts") != expected_counts or report.get("findings") != []:
        raise RuntimeError(f"Alertes d'accessibilité non résolues : {path}")
    report_source = report.get("file")
    if not isinstance(report_source, str) or Path(report_source).name != source.name:
        raise RuntimeError(
            f"Le rapport d'accessibilité ne correspond pas à {source.name} : {path}"
        )
    return expected_counts


def resolve_qa_evidence(working_dir: Path) -> dict[str, dict]:
    evidence = {}
    for role, spec in QA_DOCUMENTS.items():
        source = require_file(working_dir / str(spec["source"]))
        rendered = require_file(working_dir / str(spec["rendered"]))
        a11y = require_file(working_dir / str(spec["a11y"]))
        validate_docx(source)
        validate_pdf(
            rendered,
            expected_pages=int(spec["pages"]),
            expected_landscape_pages=tuple(spec["landscape_pages"]),
        )
        counts = validate_a11y_report(a11y, source)

        render_dir = rendered.parent
        page_pngs = []
        for page_number in range(1, int(spec["pages"]) + 1):
            page = require_file(render_dir / f"page-{page_number}.png")
            assert_signature(page, b"\x89PNG\r\n\x1a\n")
            page_pngs.append(
                {
                    "path": page.relative_to(working_dir).as_posix(),
                    "sha256": sha256(page),
                }
            )

        expected_png_names = {
            f"page-{number}.png"
            for number in range(1, int(spec["pages"]) + 1)
        }
        actual_png_names = {path.name for path in render_dir.glob("page-*.png")}
        if actual_png_names != expected_png_names:
            raise RuntimeError(
                f"Jeu de pages PNG incohérent dans {render_dir}; "
                f"attendu : {sorted(expected_png_names)}, observé : "
                f"{sorted(actual_png_names)}"
            )

        evidence[role] = {
            "source": source,
            "rendered": rendered,
            "a11y": a11y,
            "counts": counts,
            "page_pngs": page_pngs,
            "pages": int(spec["pages"]),
            "landscape_pages": list(spec["landscape_pages"]),
        }
    return evidence


def build_qa_manifest(evidence: dict[str, dict], reviewed_by: str) -> dict:
    documents = {}
    for role, values in evidence.items():
        spec = QA_DOCUMENTS[role]
        documents[role] = {
            "sourceDocx": {
                "path": str(spec["source"]),
                "sha256": sha256(values["source"]),
            },
            "renderedPdf": {
                "path": str(spec["rendered"]),
                "sha256": sha256(values["rendered"]),
                "pages": values["pages"],
                "a4": True,
                "landscapePages": values["landscape_pages"],
            },
            "pagePngs": values["page_pngs"],
            "a11yReport": {
                "path": str(spec["a11y"]),
                "sha256": sha256(values["a11y"]),
                "counts": values["counts"],
            },
            "visualReview": {
                "confirmed": True,
                "reviewedPages": list(range(1, values["pages"] + 1)),
                "originalResolutionPages": values["landscape_pages"],
            },
        }
    return {
        "schemaVersion": 1,
        "kitVersion": CONFIG["version"],
        "publicationDate": CONFIG["publicationDate"],
        "reviewedAt": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        "reviewedBy": reviewed_by.strip(),
        "reviewMethod": "Rendu LibreOffice, rasterisation PNG et inspection page par page",
        "documents": documents,
    }


def write_qa_manifest(manifest: dict) -> None:
    serialized = json.dumps(manifest, ensure_ascii=False, indent=2, sort_keys=True) + "\n"
    temporary = QA_MANIFEST_PATH.with_name(
        f".{QA_MANIFEST_PATH.name}.tmp-{uuid.uuid4().hex}"
    )
    try:
        with temporary.open("x", encoding="utf-8") as destination:
            destination.write(serialized)
            destination.flush()
            os.fsync(destination.fileno())
        os.replace(temporary, QA_MANIFEST_PATH)
        fsync_directory(QA_MANIFEST_PATH.parent)
    finally:
        temporary.unlink(missing_ok=True)


def validate_qa_manifest(evidence: dict[str, dict]) -> None:
    manifest = read_json(QA_MANIFEST_PATH)
    if manifest.get("schemaVersion") != 1:
        raise RuntimeError("Version de schéma QA inattendue")
    if manifest.get("kitVersion") != CONFIG["version"]:
        raise RuntimeError("La version du manifeste QA ne correspond pas au kit")
    if manifest.get("publicationDate") != CONFIG["publicationDate"]:
        raise RuntimeError("La date du manifeste QA ne correspond pas au kit")
    if not isinstance(manifest.get("reviewedBy"), str) or not manifest["reviewedBy"].strip():
        raise RuntimeError("Le manifeste QA doit nommer le relecteur")
    reviewed_at = manifest.get("reviewedAt")
    if not isinstance(reviewed_at, str):
        raise RuntimeError("Le manifeste QA doit dater la revue")
    try:
        datetime.fromisoformat(reviewed_at.replace("Z", "+00:00"))
    except ValueError as error:
        raise RuntimeError("La date de revue du manifeste QA est invalide") from error

    documents = manifest.get("documents")
    if not isinstance(documents, dict) or set(documents) != set(QA_DOCUMENTS):
        raise RuntimeError("Le manifeste QA doit couvrir exactement les trois documents")

    for role, values in evidence.items():
        record = documents[role]
        spec = QA_DOCUMENTS[role]
        expected_source = {
            "path": str(spec["source"]),
            "sha256": sha256(values["source"]),
        }
        expected_rendered = {
            "path": str(spec["rendered"]),
            "sha256": sha256(values["rendered"]),
            "pages": values["pages"],
            "a4": True,
            "landscapePages": values["landscape_pages"],
        }
        expected_a11y = {
            "path": str(spec["a11y"]),
            "sha256": sha256(values["a11y"]),
            "counts": values["counts"],
        }
        expected_visual = {
            "confirmed": True,
            "reviewedPages": list(range(1, values["pages"] + 1)),
            "originalResolutionPages": values["landscape_pages"],
        }
        if record.get("sourceDocx") != expected_source:
            raise RuntimeError(f"Preuve source périmée dans le manifeste QA : {role}")
        if record.get("renderedPdf") != expected_rendered:
            raise RuntimeError(f"Preuve PDF périmée dans le manifeste QA : {role}")
        if record.get("pagePngs") != values["page_pngs"]:
            raise RuntimeError(f"Preuves PNG périmées dans le manifeste QA : {role}")
        if record.get("a11yReport") != expected_a11y:
            raise RuntimeError(f"Preuve accessibilité périmée dans le manifeste QA : {role}")
        if record.get("visualReview") != expected_visual:
            raise RuntimeError(f"Revue visuelle incomplète dans le manifeste QA : {role}")


def extract_text(path: Path, destination: Path) -> str:
    subprocess.run(
        ["pdftotext", "-layout", str(path), str(destination)],
        check=True,
        capture_output=True,
        text=True,
    )
    return destination.read_text(encoding="utf-8")


def validate_text(example: Path, readme: Path, temporary_dir: Path) -> None:
    example_text = extract_text(example, temporary_dir / "example.txt")
    readme_text = extract_text(readme, temporary_dir / "readme.txt")

    forbidden_example = ("[À compléter", "[A compléter", "PLACEHOLDER", "TODO")
    for marker in forbidden_example:
        if marker.casefold() in example_text.casefold():
            raise RuntimeError(f"Résidu interdit dans l'exemple : {marker}")

    fiction_markers = (
        "entièrement fictif",
        "objectifs sont inventés",
        "aucun lien avec un client réel",
    )
    if not all(marker in example_text for marker in fiction_markers):
        raise RuntimeError("Le caractère fictif de l'exemple n'est pas assez explicite")

    source_markers = ("France Num", "DesignGouv", "RGESN", "CNIL", "ANSSI")
    if not all(marker in readme_text for marker in source_markers):
        raise RuntimeError("Une source de méthode attendue manque au mode d'emploi")


def build_archive(output: Path, files: list[Path]) -> None:
    publication_date = datetime.strptime(CONFIG["publicationDate"], "%Y-%m-%d")
    timestamp = (
        publication_date.year,
        publication_date.month,
        publication_date.day,
        12,
        0,
        0,
    )

    with zipfile.ZipFile(
        output,
        "w",
        compression=zipfile.ZIP_DEFLATED,
        compresslevel=9,
    ) as archive:
        for source in files:
            info = zipfile.ZipInfo(source.name, timestamp)
            info.compress_type = zipfile.ZIP_DEFLATED
            info.external_attr = 0o100644 << 16
            archive.writestr(info, source.read_bytes())

    with zipfile.ZipFile(output) as archive:
        if sorted(archive.namelist()) != sorted(path.name for path in files):
            raise RuntimeError("La liste des fichiers du ZIP est incohérente")
        if archive.testzip() is not None:
            raise RuntimeError("Le ZIP publié est corrompu")
        for source in files:
            if archive.read(source.name) != source.read_bytes():
                raise RuntimeError(f"Le ZIP altère le fichier : {source.name}")


def fsync_directory(path: Path) -> None:
    descriptor = os.open(path, os.O_RDONLY)
    try:
        os.fsync(descriptor)
    finally:
        os.close(descriptor)


def durable_copy(source: Path, destination: Path) -> None:
    with source.open("rb") as input_file, destination.open("wb") as output_file:
        shutil.copyfileobj(input_file, output_file)
        output_file.flush()
        os.fsync(output_file.fileno())


def validate_release_directory(path: Path, exact: bool = True) -> None:
    if path.is_symlink() or not path.is_dir():
        raise RuntimeError(f"Dossier de release attendu : {path}")
    entries = {entry.name: entry for entry in path.iterdir()}
    unexpected = set(entries) - set(EXPECTED_RELEASE_NAMES)
    if unexpected:
        raise RuntimeError(
            f"Fichiers interdits dans {path} : {', '.join(sorted(unexpected))}"
        )
    if exact and set(entries) != set(EXPECTED_RELEASE_NAMES):
        missing = set(EXPECTED_RELEASE_NAMES) - set(entries)
        raise RuntimeError(
            f"Release incomplète dans {path} : {', '.join(sorted(missing))}"
        )
    for name, entry in entries.items():
        if not entry.is_file() or entry.is_symlink() or entry.stat().st_size == 0:
            raise RuntimeError(f"Entrée de release invalide : {name}")


def remove_private_staging(path: Path, parent: Path, prefix: str) -> None:
    if not path.exists():
        return
    resolved_path = path.resolve()
    resolved_parent = parent.resolve()
    if resolved_path.parent != resolved_parent or not resolved_path.name.startswith(prefix):
        raise RuntimeError(f"Refus de nettoyer un staging non reconnu : {path}")
    shutil.rmtree(resolved_path)


def replace_directory_with_rollback(staged: Path, destination: Path) -> None:
    validate_release_directory(staged)
    destination.parent.mkdir(parents=True, exist_ok=True)
    if destination.exists():
        validate_release_directory(destination, exact=False)

    backup = destination.parent / f".{destination.name}.backup-{uuid.uuid4().hex}"
    destination_moved = False
    try:
        if destination.exists():
            os.replace(destination, backup)
            destination_moved = True
            fsync_directory(destination.parent)
        os.replace(staged, destination)
        fsync_directory(destination.parent)
    except BaseException:
        if destination_moved and backup.exists() and not destination.exists():
            os.replace(backup, destination)
            fsync_directory(destination.parent)
        raise

    validate_release_directory(destination)
    if backup.exists():
        remove_private_staging(backup, destination.parent, f".{destination.name}.backup-")
        fsync_directory(destination.parent)


def create_release_staging(
    parent: Path,
    model: Path,
    example: Path,
    readme: Path,
) -> Path:
    parent.mkdir(parents=True, exist_ok=True)
    prefix = ".kit-cdc-app-release-"
    staged = Path(tempfile.mkdtemp(prefix=prefix, dir=parent))
    try:
        model_release = staged / MODEL_NAME
        example_release = staged / EXAMPLE_NAME
        readme_release = staged / README_NAME
        durable_copy(model, model_release)
        durable_copy(example, example_release)
        durable_copy(readme, readme_release)

        with tempfile.TemporaryDirectory(prefix="kit-cdc-app-audit-") as temporary:
            validate_text(example_release, readme_release, Path(temporary))

        build_archive(
            staged / ARCHIVE_NAME,
            [model_release, example_release, readme_release],
        )
        with (staged / ARCHIVE_NAME).open("rb") as archive:
            os.fsync(archive.fileno())
        validate_release_directory(staged)
        fsync_directory(staged)
        return staged
    except BaseException:
        remove_private_staging(staged, parent, prefix)
        raise


def copy_release_to_staging(release_dir: Path, destination_parent: Path) -> Path:
    validate_release_directory(release_dir)
    destination_parent.mkdir(parents=True, exist_ok=True)
    prefix = ".kit-cdc-app-publication-"
    staged = Path(tempfile.mkdtemp(prefix=prefix, dir=destination_parent))
    try:
        for name in EXPECTED_RELEASE_NAMES:
            durable_copy(release_dir / name, staged / name)
        validate_release_directory(staged)
        fsync_directory(staged)
        return staged
    except BaseException:
        remove_private_staging(staged, destination_parent, prefix)
        raise


def atomic_publish(release_dir: Path) -> None:
    staged = copy_release_to_staging(release_dir, PUBLIC_DIR.parent)
    try:
        replace_directory_with_rollback(staged, PUBLIC_DIR)
    except BaseException:
        remove_private_staging(staged, PUBLIC_DIR.parent, ".kit-cdc-app-publication-")
        raise


def main() -> None:
    args = parse_args()
    working_dir = args.working_dir.resolve()
    default_release_dir = (working_dir / "release").resolve()
    release_dir = (args.output_dir or default_release_dir).resolve()
    if (
        release_dir == PUBLIC_DIR
        or release_dir in PUBLIC_DIR.parents
        or PUBLIC_DIR in release_dir.parents
    ):
        raise RuntimeError(
            "Le dossier de release doit rester distinct du dossier public"
        )
    if release_dir != default_release_dir and (
        release_dir == working_dir
        or release_dir in working_dir.parents
        or working_dir in release_dir.parents
    ):
        raise RuntimeError(
            "Un dossier de release personnalisé ne doit pas chevaucher le dossier de travail"
        )

    evidence = resolve_qa_evidence(working_dir)
    if args.record_qa_manifest:
        write_qa_manifest(build_qa_manifest(evidence, args.reviewed_by))
        print(f"Manifeste QA enregistré : {QA_MANIFEST_PATH}")
    validate_qa_manifest(evidence)

    model = evidence["model"]["source"]
    example = evidence["example"]["rendered"]
    readme = evidence["readme"]["rendered"]

    staged_release = create_release_staging(
        release_dir.parent,
        model,
        example,
        readme,
    )
    try:
        replace_directory_with_rollback(staged_release, release_dir)
    except BaseException:
        remove_private_staging(
            staged_release,
            release_dir.parent,
            ".kit-cdc-app-release-",
        )
        raise

    validate_release_directory(release_dir)
    release_files = [release_dir / name for name in EXPECTED_RELEASE_NAMES]

    if args.publish:
        atomic_publish(release_dir)
        validate_release_directory(PUBLIC_DIR)
        for source in release_files:
            published = require_file(PUBLIC_DIR / source.name)
            if published.read_bytes() != source.read_bytes():
                raise RuntimeError(f"La copie publique diffère : {source.name}")

    destination = PUBLIC_DIR if args.publish else release_dir
    for filename in EXPECTED_RELEASE_NAMES:
        path = destination / filename
        print(f"{filename}\t{path.stat().st_size} octets")


if __name__ == "__main__":
    main()
