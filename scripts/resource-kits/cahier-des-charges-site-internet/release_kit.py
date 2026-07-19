#!/usr/bin/env python3
"""Build, audit and optionally publish the complete cahier-des-charges kit.

This is the canonical release path. It prevents corrected generators from
drifting away from the public DOCX/PDF/XLSX files or their ZIP archive.
"""

from __future__ import annotations

import argparse
import hashlib
import importlib.util
import json
import os
import platform
import shlex
import shutil
import subprocess
import sys
import tempfile
import zipfile
import zlib
from importlib.metadata import PackageNotFoundError, version as package_version
from pathlib import Path
from urllib.parse import urlparse
from xml.etree import ElementTree as ET


SCRIPT_DIR = Path(__file__).resolve().parent
REPO_ROOT = SCRIPT_DIR.parents[2]
CONFIG_PATH = SCRIPT_DIR / "kit_config.json"
REQUIREMENTS_PATH = SCRIPT_DIR / "requirements.txt"
CONFIG = json.loads(CONFIG_PATH.read_text(encoding="utf-8"))
PUBLIC_DIR = REPO_ROOT / "public/ressources/kit-cahier-des-charges-site-internet"
PUBLIC_FILES = (
    "modele-cahier-des-charges-site-internet.docx",
    "exemple-rempli-cahier-des-charges-site-internet.pdf",
    "grille-de-recette-site-internet.xlsx",
    "lisez-moi-kit-cahier-des-charges-site-internet.pdf",
)
ZIP_NAME = "kit-cahier-des-charges-site-internet.zip"
REQUIRED_PYTHON_MODULES = ("docx", "lxml", "openpyxl", "pdf2image", "pypdf", "PIL")


def pinned_requirements() -> dict[str, str]:
    requirements: dict[str, str] = {}
    normalized_names: set[str] = set()
    for raw_line in REQUIREMENTS_PATH.read_text(encoding="utf-8").splitlines():
        line = raw_line.split("#", 1)[0].strip()
        if not line:
            continue
        if line.count("==") != 1:
            raise RuntimeError(
                "Chaque dépendance de requirements.txt doit être épinglée avec == : "
                f"{raw_line}"
            )
        distribution, expected = (part.strip() for part in line.split("==", 1))
        if not distribution or not expected:
            raise RuntimeError(f"Dépendance Python invalide : {raw_line}")
        normalized = distribution.lower().replace("_", "-").replace(".", "-")
        if normalized in normalized_names:
            raise RuntimeError(f"Dépendance Python déclarée deux fois : {distribution}")
        normalized_names.add(normalized)
        requirements[distribution] = expected
    if not requirements:
        raise RuntimeError("requirements.txt ne contient aucune dépendance épinglée")
    return requirements


def python_package_versions() -> dict[str, str]:
    versions: dict[str, str] = {}
    for distribution in pinned_requirements():
        try:
            versions[distribution] = package_version(distribution)
        except PackageNotFoundError:
            versions[distribution] = "absent"
    return versions


def ensure_python_dependencies() -> None:
    if sys.version_info < (3, 10):
        raise RuntimeError(
            "Python 3.10 ou plus récent est requis ; versions validées : 3.12 et 3.14."
        )
    missing = [
        module
        for module in REQUIRED_PYTHON_MODULES
        if importlib.util.find_spec(module) is None
    ]
    expected_versions = pinned_requirements()
    installed_versions = python_package_versions()
    mismatches = [
        f"{distribution} (attendu {expected}, installé {installed_versions[distribution]})"
        for distribution, expected in expected_versions.items()
        if installed_versions[distribution] != expected
    ]
    if missing or mismatches:
        command = (
            f"{shlex.quote(sys.executable)} -m pip install -r "
            f"{shlex.quote(str(REQUIREMENTS_PATH))}"
        )
        details = []
        if missing:
            details.append(f"imports absents : {', '.join(missing)}")
        if mismatches:
            details.append(f"versions incompatibles : {', '.join(mismatches)}")
        raise RuntimeError(
            "Dépendances Python non conformes ("
            f"{'; '.join(details)}). Installez l'environnement avec : {command}"
        )


def run(*args: str, env: dict[str, str] | None = None) -> None:
    printable = " ".join(args)
    print(f"[run] {printable}", flush=True)
    subprocess.run(args, cwd=REPO_ROOT, env=env, check=True)


def discover_documents_skill() -> Path:
    configured = os.environ.get("CODEX_DOCUMENTS_SKILL_DIR")
    if configured:
        candidate = Path(configured).expanduser()
        if (candidate / "render_docx.py").exists():
            return candidate
    candidates = sorted(
        Path.home().glob(
            ".codex/plugins/cache/openai-primary-runtime/documents/*/skills/documents"
        ),
        reverse=True,
    )
    for candidate in candidates:
        if (candidate / "render_docx.py").exists():
            return candidate
    raise RuntimeError(
        "Skill documents introuvable. Définissez CODEX_DOCUMENTS_SKILL_DIR."
    )


def discover_node_modules() -> Path:
    configured = os.environ.get("CODEX_NODE_MODULES_DIR")
    if configured:
        candidate = Path(configured).expanduser()
        if (candidate / "@oai/artifact-tool").exists():
            return candidate
    candidates = [REPO_ROOT / "node_modules"] + sorted(
        Path.home().glob(
            ".cache/codex-runtimes/*/dependencies/node/node_modules"
        ),
        reverse=True,
    )
    for candidate in candidates:
        if (candidate / "@oai/artifact-tool").exists():
            return candidate
    raise RuntimeError(
        "@oai/artifact-tool introuvable. Définissez CODEX_NODE_MODULES_DIR."
    )


def discover_node(node_modules: Path) -> Path:
    configured = os.environ.get("CODEX_NODE_BIN")
    if configured and Path(configured).expanduser().exists():
        return Path(configured).expanduser()
    bundled = node_modules.parent / "bin/node"
    if bundled.exists():
        return bundled
    resolved = shutil.which("node")
    if resolved:
        return Path(resolved)
    raise RuntimeError("Node.js introuvable. Définissez CODEX_NODE_BIN.")


def discover_soffice() -> Path:
    configured = os.environ.get("CODEX_SOFFICE_BIN")
    if configured and Path(configured).expanduser().exists():
        return Path(configured).expanduser()
    resolved = shutil.which("soffice")
    if resolved:
        return Path(resolved)
    candidates = sorted(
        Path.home().glob(
            ".cache/codex-runtimes/*/dependencies/bin/override/soffice"
        ),
        reverse=True,
    )
    candidates.extend(
        [
            Path("/Applications/LibreOffice.app/Contents/MacOS/soffice"),
            Path("/Applications/LibreOfficeDev.app/Contents/MacOS/soffice"),
        ]
    )
    for candidate in candidates:
        if candidate.exists():
            return candidate
    raise RuntimeError(
        "LibreOffice/soffice introuvable. Installez LibreOffice ou définissez "
        "CODEX_SOFFICE_BIN."
    )


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def command_version(executable: Path, *args: str) -> str:
    result = subprocess.run(
        [str(executable), *args],
        cwd=REPO_ROOT,
        check=False,
        capture_output=True,
        text=True,
        timeout=30,
    )
    output = "\n".join(part.strip() for part in (result.stdout, result.stderr) if part.strip())
    return output.splitlines()[0] if output else f"code {result.returncode}"


def validate_https_url(target: str, context: str) -> None:
    parsed = urlparse(target)
    if (
        parsed.scheme != "https"
        or not parsed.hostname
        or parsed.username is not None
        or parsed.password is not None
    ):
        raise RuntimeError(f"URL externe non HTTPS ou ambiguë dans {context} : {target}")


def audit_external_relationships(
    archive: zipfile.ZipFile, context: str, expected_count: int
) -> None:
    relationship_namespace = (
        "http://schemas.openxmlformats.org/package/2006/relationships"
    )
    hyperlink_type = (
        "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink"
    )
    external_count = 0
    for name in archive.namelist():
        if not name.endswith(".rels"):
            continue
        root = ET.fromstring(archive.read(name))
        for relationship in root.findall(f"{{{relationship_namespace}}}Relationship"):
            if relationship.get("TargetMode") != "External":
                continue
            external_count += 1
            target = relationship.get("Target", "")
            relation_type = relationship.get("Type", "")
            if relation_type != hyperlink_type:
                raise RuntimeError(
                    f"Relation externe non autorisée dans {context}/{name} : "
                    f"{relation_type}"
                )
            validate_https_url(target, f"{context}/{name}")
    if external_count != expected_count:
        raise RuntimeError(
            f"{context} doit contenir exactement {expected_count} hyperliens "
            f"externes HTTPS ; trouvé : {external_count}"
        )


def render_docx(python: Path, skill: Path, docx: Path, output: Path) -> Path:
    run(
        str(python),
        str(skill / "render_docx.py"),
        str(docx),
        "--output_dir",
        str(output),
        "--emit_pdf",
    )
    pdf = output / f"{docx.stem}.pdf"
    if not pdf.exists():
        raise RuntimeError(f"PDF attendu absent après rendu : {pdf}")
    return pdf


def audit_docx(python: Path, skill: Path, docx: Path, report: Path) -> None:
    run(
        str(python),
        str(skill / "scripts/a11y_audit.py"),
        str(docx),
        "--out_json",
        str(report),
    )
    payload = json.loads(report.read_text(encoding="utf-8"))
    counts = payload.get("counts", {})
    if any(counts.get(level, 0) for level in ("high", "medium", "low")):
        raise RuntimeError(f"Audit accessibilité DOCX non nul : {report}")


def finalize_docx(
    python: Path,
    skill: Path,
    raw: Path,
    output: Path,
    title: str,
    work: Path,
) -> None:
    scrubbed = work / f"{output.stem}-scrubbed.docx"
    run(
        str(python),
        str(skill / "scripts/privacy_scrub.py"),
        str(raw),
        "--out",
        str(scrubbed),
    )
    run(
        str(python),
        str(SCRIPT_DIR / "finalize_docx.py"),
        str(scrubbed),
        str(output),
        "--title",
        title,
    )


def create_zip(stage: Path) -> Path:
    output = stage / ZIP_NAME
    timestamp = tuple(CONFIG["archiveTimestamp"])
    with zipfile.ZipFile(output, "w", compression=zipfile.ZIP_DEFLATED, compresslevel=9) as archive:
        for name in PUBLIC_FILES:
            payload = (stage / name).read_bytes()
            info = zipfile.ZipInfo(name, timestamp)
            info.create_system = 3
            info.compress_type = zipfile.ZIP_DEFLATED
            info.external_attr = 0o100644 << 16
            archive.writestr(info, payload)
    return output


def audit_zip(stage: Path, archive_path: Path) -> None:
    with zipfile.ZipFile(archive_path) as archive:
        names = tuple(archive.namelist())
        if names != PUBLIC_FILES:
            raise RuntimeError(f"Contenu ZIP inattendu : {names}")
        for name in names:
            if archive.read(name) != (stage / name).read_bytes():
                raise RuntimeError(f"Le fichier ZIP diffère du fichier individuel : {name}")


def audit_office(stage: Path) -> None:
    forbidden_parts = ("vbaproject", "activex", "embeddings", "externallinks", "connections")
    model = stage / PUBLIC_FILES[0]
    with zipfile.ZipFile(model) as archive:
        lowered = [name.lower() for name in archive.namelist()]
        if any(marker in name for name in lowered for marker in forbidden_parts):
            raise RuntimeError("Composant actif ou externe inattendu dans le DOCX")
        core = archive.read("docProps/core.xml").decode("utf-8")
        settings = archive.read("word/settings.xml").decode("utf-8")
        styles = archive.read("word/styles.xml").decode("utf-8")
        document = archive.read("word/document.xml").decode("utf-8")
        if "fr-FR" not in core or "fr-FR" not in settings or "fr-FR" not in styles:
            raise RuntimeError("Langue fr-FR incomplète dans le DOCX")
        if "1. Identité, statut et contrôle du document" not in document:
            raise RuntimeError("Rubrique 1 absente du DOCX")
        audit_external_relationships(archive, "DOCX", expected_count=13)

    workbook = stage / PUBLIC_FILES[2]
    with zipfile.ZipFile(workbook) as archive:
        lowered = [name.lower() for name in archive.namelist()]
        if any(marker in name for name in lowered for marker in forbidden_parts):
            raise RuntimeError("Composant actif ou connexion inattendue dans le XLSX")
        recipe = ET.fromstring(archive.read("xl/worksheets/sheet2.xml"))
        summary = ET.fromstring(archive.read("xl/worksheets/sheet3.xml"))
        workbook_xml = ET.fromstring(archive.read("xl/workbook.xml"))
        namespace = {"x": "http://schemas.openxmlformats.org/spreadsheetml/2006/main"}
        pane = recipe.find("x:sheetViews/x:sheetView/x:pane", namespace)
        autofilter = recipe.find("x:autoFilter", namespace)
        if pane is None or pane.get("topLeftCell") != "D5":
            raise RuntimeError("Volets figés D5 absents du XLSX")
        if autofilter is None or autofilter.get("ref") != "A4:P72":
            raise RuntimeError("Filtre A4:P72 absent du XLSX")
        names = {
            node.get("name")
            for node in workbook_xml.findall("x:definedNames/x:definedName", namespace)
        }
        if not {"PriorityList", "StatusList", "SeverityList", "OwnerList"} <= names:
            raise RuntimeError("Listes nommées absentes du XLSX")
        validations = recipe.findall("x:dataValidations/x:dataValidation", namespace)
        if len(validations) != 4:
            raise RuntimeError("Le XLSX doit contenir exactement quatre validations")
        formulas = [node.text or "" for node in recipe.findall(".//x:f", namespace)]
        if not formulas or any("#REF!" in formula for formula in formulas):
            raise RuntimeError("Formules XLSX absentes ou invalides")
        first_decision = recipe.find(".//x:c[@r='P5']/x:f", namespace)
        if first_decision is None or not all(
            marker in (first_decision.text or "")
            for marker in ('K5=""', 'L5=""', 'M5=""', 'M5="—"', 'N5=""')
        ):
            raise RuntimeError(
                "La décision XLSX ne contrôle pas date, preuve, gravité vide/— "
                "et anomalie"
            )
        total_formula = summary.find(".//x:c[@r='B5']/x:f", namespace)
        total_value = summary.find(".//x:c[@r='B5']/x:v", namespace)
        if (
            total_formula is None
            or (total_formula.text or "") != "COUNTA('Recette'!A5:A72)"
            or total_value is None
            or total_value.text != "56"
        ):
            raise RuntimeError("Le total XLSX doit compter 56 tests et ignorer les lignes libres")
        first_custom_id = recipe.find(".//x:c[@r='A61']", namespace)
        if first_custom_id is not None:
            custom_value = first_custom_id.find("x:v", namespace)
            custom_formula = first_custom_id.find("x:f", namespace)
            if custom_formula is not None or (
                custom_value is not None and (custom_value.text or "") != ""
            ):
                raise RuntimeError("La première ligne libre XLSX possède un faux identifiant non vide")
        core = archive.read("docProps/core.xml").decode("utf-8")
        if "fr-FR" not in core or "Hagnéré Code" not in core:
            raise RuntimeError("Métadonnées publiques du XLSX absentes")
        audit_external_relationships(archive, "XLSX", expected_count=3)


def audit_pdfs(stage: Path) -> None:
    try:
        from pypdf import PdfReader
    except ImportError as error:  # pragma: no cover - explicit release dependency
        raise RuntimeError("pypdf est requis pour auditer la release") from error

    requirements = {
        PUBLIC_FILES[1]: {"min_links": 10, "pages": 17, "section_one": True},
        PUBLIC_FILES[3]: {"min_links": 5, "pages": 4, "section_one": False},
    }
    for name, expected in requirements.items():
        reader = PdfReader(stage / name)
        root = reader.trailer["/Root"]
        if str(root.get("/Lang")) != "fr-FR":
            raise RuntimeError(f"Langue PDF incorrecte : {name}")
        if not root.get("/StructTreeRoot") or not (root.get("/MarkInfo") or {}).get("/Marked"):
            raise RuntimeError(f"PDF non balisé : {name}")
        if root.get("/OpenAction") or root.get("/AA"):
            raise RuntimeError(f"Action automatique interdite dans le PDF : {name}")
        if root.get("/AcroForm"):
            raise RuntimeError(f"Formulaire PDF inattendu : {name}")
        if root.get("/AF"):
            raise RuntimeError(f"Pièce jointe PDF inattendue : {name}")
        names = root.get("/Names")
        if names:
            name_tree = names.get_object()
            if name_tree.get("/JavaScript") or name_tree.get("/EmbeddedFiles"):
                raise RuntimeError(f"Script ou pièce jointe interdits dans le PDF : {name}")
        if len(reader.pages) != expected["pages"]:
            raise RuntimeError(f"Nombre de pages anormal : {name}")
        if len((reader.pages[-1].extract_text() or "").strip()) < 300:
            raise RuntimeError(f"Dernière page anormalement vide : {name}")
        link_count = 0
        for page in reader.pages:
            width = float(page.mediabox.width)
            height = float(page.mediabox.height)
            if abs(width - 595.28) > 2 or abs(height - 841.89) > 2:
                raise RuntimeError(f"Page non A4 détectée dans le PDF : {name}")
            if page.get("/AA"):
                raise RuntimeError(f"Action de page interdite dans le PDF : {name}")
            if page.get("/AF"):
                raise RuntimeError(f"Pièce jointe de page interdite dans le PDF : {name}")
            for annotation_ref in page.get("/Annots") or []:
                annotation = annotation_ref.get_object()
                if annotation.get("/AA"):
                    raise RuntimeError(f"Action additionnelle d'annotation interdite : {name}")
                if annotation.get("/Subtype") != "/Link" or annotation.get("/FS"):
                    raise RuntimeError(
                        f"Annotation non autorisée ({annotation.get('/Subtype')}) : {name}"
                    )
                link_count += 1
                action_ref = annotation.get("/A")
                if not action_ref:
                    continue
                action = action_ref.get_object()
                action_type = str(action.get("/S"))
                if action_type == "/URI":
                    validate_https_url(str(action.get("/URI") or ""), f"PDF {name}")
                elif action_type != "/GoTo":
                    raise RuntimeError(
                        f"Action de lien non autorisée ({action_type}) dans le PDF : {name}"
                    )
        if link_count < expected["min_links"]:
            raise RuntimeError(f"Liens PDF insuffisants : {name}")
        titles = [
            getattr(item, "title", "")
            for item in reader.outline
            if not isinstance(item, list)
        ]
        if expected["section_one"] and not any(title.startswith("1. Identité") for title in titles):
            raise RuntimeError("Signet de la rubrique 1 absent du PDF exemple")


def file_records(stage: Path) -> dict[str, dict[str, object]]:
    return {
        name: {"sizeBytes": (stage / name).stat().st_size, "sha256": sha256(stage / name)}
        for name in (*PUBLIC_FILES, ZIP_NAME)
    }


def validate_release_manifest(manifest: dict[str, object], stage: Path) -> None:
    if manifest.get("version") != CONFIG["version"]:
        raise RuntimeError("Version canonique incohérente dans le manifeste")
    if manifest.get("date") != CONFIG["publicationDate"]:
        raise RuntimeError("Date canonique incohérente dans le manifeste")

    expected_files = file_records(stage)
    if manifest.get("files") != expected_files:
        raise RuntimeError("Le manifeste ne correspond pas aux octets du staging")

    requested = manifest.get("publicationRequested")
    status = manifest.get("publicationStatus")
    published = manifest.get("published")
    if requested is True:
        expected_published = status == "completed"
        if (
            status not in {"pending", "completed"}
            or not isinstance(published, bool)
            or published != expected_published
        ):
            raise RuntimeError("État de publication incohérent dans le manifeste")
    elif requested is False:
        if status != "not-requested" or published is not False:
            raise RuntimeError("État sans publication incohérent dans le manifeste")
    else:
        raise RuntimeError("Le manifeste doit indiquer si une publication a été demandée")

    toolchain = manifest.get("toolchain")
    if not isinstance(toolchain, dict):
        raise RuntimeError("Chaîne d'outils absente du manifeste")
    python_toolchain = toolchain.get("python")
    if not isinstance(python_toolchain, dict):
        raise RuntimeError("Chaîne Python absente du manifeste")
    if python_toolchain.get("packages") != pinned_requirements():
        raise RuntimeError("Versions Python du manifeste différentes des versions épinglées")
    zlib_toolchain = toolchain.get("zlib")
    expected_zlib = {
        "buildVersion": zlib.ZLIB_VERSION,
        "runtimeVersion": zlib.ZLIB_RUNTIME_VERSION,
    }
    if zlib_toolchain != expected_zlib:
        raise RuntimeError("Versions zlib absentes ou incohérentes dans le manifeste")
    if toolchain.get("requirementsSha256") != sha256(REQUIREMENTS_PATH):
        raise RuntimeError("Empreinte requirements.txt incohérente dans le manifeste")
    if toolchain.get("kitConfigSha256") != sha256(CONFIG_PATH):
        raise RuntimeError("Empreinte kit_config.json incohérente dans le manifeste")


def write_release_manifest(
    work: Path, stage: Path, manifest: dict[str, object]
) -> Path:
    validate_release_manifest(manifest, stage)
    destination = work / "release-manifest.json"
    temporary = work / ".release-manifest.json.tmp"
    payload = json.dumps(manifest, ensure_ascii=False, indent=2) + "\n"
    temporary.unlink(missing_ok=True)
    try:
        with temporary.open("w", encoding="utf-8") as handle:
            handle.write(payload)
            handle.flush()
            os.fsync(handle.fileno())
        if json.loads(temporary.read_text(encoding="utf-8")) != manifest:
            raise RuntimeError("Relecture du manifeste temporaire incohérente")
        temporary.replace(destination)
    finally:
        temporary.unlink(missing_ok=True)
    if json.loads(destination.read_text(encoding="utf-8")) != manifest:
        raise RuntimeError("Le manifeste écrit ne peut pas être validé")
    return destination


def publish(
    stage: Path,
    public_dir: Path,
    expected_files: dict[str, dict[str, object]],
) -> None:
    public_dir.mkdir(parents=True, exist_ok=True)
    names = (*PUBLIC_FILES, ZIP_NAME)
    temporaries = {name: public_dir / f".{name}.tmp" for name in names}
    try:
        # Préparer et vérifier tout l'ensemble contre le manifeste prépublication.
        for name, temporary in temporaries.items():
            expected = expected_files[name]
            source = stage / name
            if (
                source.stat().st_size != expected["sizeBytes"]
                or sha256(source) != expected["sha256"]
            ):
                raise RuntimeError(f"Le staging a divergé du manifeste : {name}")
            temporary.unlink(missing_ok=True)
            shutil.copy2(source, temporary)
            if (
                temporary.stat().st_size != expected["sizeBytes"]
                or sha256(temporary) != expected["sha256"]
            ):
                raise RuntimeError(f"Copie temporaire publique invalide : {name}")
        # os.replace est atomique pour chaque fichier, pas pour l'ensemble des cinq.
        for name, temporary in temporaries.items():
            temporary.replace(public_dir / name)
    finally:
        for temporary in temporaries.values():
            temporary.unlink(missing_ok=True)


def audit_published_files(
    public_dir: Path, expected_files: dict[str, dict[str, object]]
) -> None:
    for name, expected in expected_files.items():
        published = public_dir / name
        if not published.is_file():
            raise RuntimeError(f"Fichier public absent après remplacement : {name}")
        if (
            published.stat().st_size != expected["sizeBytes"]
            or sha256(published) != expected["sha256"]
        ):
            raise RuntimeError(f"Fichier public différent du manifeste : {name}")


def build(work: Path, *, publish_files: bool, public_dir: Path) -> dict[str, object]:
    ensure_python_dependencies()
    python = Path(sys.executable)
    skill = discover_documents_skill()
    node_modules = discover_node_modules()
    node = discover_node(node_modules)
    soffice = discover_soffice()
    raw = work / "raw"
    stage = work / "stage"
    renders = work / "renders"
    reports = work / "reports"
    runner = work / "node-runner"
    for directory in (raw, stage, renders, reports, runner):
        directory.mkdir(parents=True, exist_ok=True)

    run(str(python), str(SCRIPT_DIR / "build_documents.py"), "--output-dir", str(raw))
    doc_jobs = [
        (
            raw / "modele-cahier-des-charges-site-internet.docx",
            work / "modele-cahier-des-charges-site-internet.docx",
            "Modèle de cahier des charges de site internet",
        ),
        (
            raw / "exemple-rempli-cahier-des-charges-site-internet-source.docx",
            work / "exemple-rempli-cahier-des-charges-site-internet.docx",
            "Exemple fictif rempli — cahier des charges de site internet",
        ),
        (
            raw / "lisez-moi-kit-cahier-des-charges-site-internet-source.docx",
            work / "lisez-moi-kit-cahier-des-charges-site-internet.docx",
            "Mode d'emploi du kit cahier des charges de site internet",
        ),
    ]
    rendered_pdfs: dict[str, Path] = {}
    for raw_docx, final_docx, title in doc_jobs:
        finalize_docx(python, skill, raw_docx, final_docx, title, work)
        audit_docx(python, skill, final_docx, reports / f"a11y-{final_docx.stem}.json")
        rendered_pdfs[final_docx.stem] = render_docx(
            python, skill, final_docx, renders / final_docx.stem
        )

    shutil.copy2(doc_jobs[0][1], stage / PUBLIC_FILES[0])
    shutil.copy2(
        rendered_pdfs["exemple-rempli-cahier-des-charges-site-internet"],
        stage / PUBLIC_FILES[1],
    )
    shutil.copy2(
        rendered_pdfs["lisez-moi-kit-cahier-des-charges-site-internet"],
        stage / PUBLIC_FILES[3],
    )

    shutil.copy2(SCRIPT_DIR / "build_workbook.mjs", runner / "build_workbook.mjs")
    (runner / "node_modules").symlink_to(node_modules, target_is_directory=True)
    run(
        str(node),
        str(runner / "build_workbook.mjs"),
        str(raw),
        str(CONFIG_PATH),
    )
    run(
        str(python),
        str(SCRIPT_DIR / "finalize_workbook.py"),
        str(raw / PUBLIC_FILES[2]),
        str(stage / PUBLIC_FILES[2]),
    )
    run(
        str(python),
        str(SCRIPT_DIR / "verify_workbook_recalculation.py"),
        str(stage / PUBLIC_FILES[2]),
        "--soffice",
        str(soffice),
    )

    archive = create_zip(stage)
    audit_office(stage)
    audit_pdfs(stage)
    audit_zip(stage, archive)
    files = file_records(stage)
    artifact_package = node_modules / "@oai/artifact-tool/package.json"
    artifact_version = (
        json.loads(artifact_package.read_text(encoding="utf-8")).get("version", "inconnue")
        if artifact_package.exists()
        else "inconnue"
    )
    poppler_tools: dict[str, dict[str, str] | None] = {}
    for tool, args in (("pdfinfo", ("-v",)), ("pdftoppm", ("-v",))):
        resolved = shutil.which(tool)
        poppler_tools[tool] = (
            {"path": resolved, "version": command_version(Path(resolved), *args)}
            if resolved
            else None
        )
    manifest: dict[str, object] = {
        "version": CONFIG["version"],
        "date": CONFIG["publicationDate"],
        "publicationRequested": publish_files,
        "publicationStatus": "pending" if publish_files else "not-requested",
        "published": False,
        "publicDir": str(public_dir),
        "workDir": str(work),
        "toolchain": {
            "python": {
                "path": str(python),
                "version": platform.python_version(),
                "packages": python_package_versions(),
            },
            "zlib": {
                "buildVersion": zlib.ZLIB_VERSION,
                "runtimeVersion": zlib.ZLIB_RUNTIME_VERSION,
            },
            "node": {"path": str(node), "version": command_version(node, "--version")},
            "artifactTool": {
                "nodeModules": str(node_modules),
                "version": artifact_version,
            },
            "documentsSkill": str(skill),
            "sofficeRecalculation": {
                "path": str(soffice),
                "version": command_version(soffice, "--version"),
            },
            "popplerFromReleasePath": poppler_tools,
            "requirementsSha256": sha256(REQUIREMENTS_PATH),
            "kitConfigSha256": sha256(CONFIG_PATH),
        },
        "files": files,
    }
    write_release_manifest(work, stage, manifest)
    if publish_files:
        publish(stage, public_dir, files)
        audit_published_files(public_dir, files)
        manifest["publicationStatus"] = "completed"
        manifest["published"] = True
        write_release_manifest(work, stage, manifest)
    return manifest


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--work-dir",
        type=Path,
        help="Dossier de travail conservé pour la QA visuelle (sinon temporaire).",
    )
    parser.add_argument(
        "--publish",
        action="store_true",
        help="Copier dans public/ressources après tous les audits (remplacement atomique par fichier).",
    )
    parser.add_argument("--public-dir", type=Path, default=PUBLIC_DIR)
    args = parser.parse_args()

    if args.publish and not args.work_dir:
        parser.error("--publish requiert --work-dir afin de conserver le manifeste et les preuves de QA")

    if args.work_dir:
        work = args.work_dir.resolve()
        if work.exists() and any(work.iterdir()):
            parser.error(f"--work-dir doit être neuf ou vide : {work}")
        work.mkdir(parents=True, exist_ok=True)
        manifest = build(work, publish_files=args.publish, public_dir=args.public_dir.resolve())
    else:
        with tempfile.TemporaryDirectory(prefix="hagnere-kit-release-") as temporary:
            manifest = build(
                Path(temporary),
                publish_files=args.publish,
                public_dir=args.public_dir.resolve(),
            )
    print(json.dumps(manifest, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
