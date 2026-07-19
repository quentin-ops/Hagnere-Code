# Recherche — proprietaire-site-internet-code-source
> Produit le 19/07/2026 par le pipeline de la charte qualité (SERP → faits sourcés → angle). Non publié : document de travail.

## Angle unique

La propriété du code est la mauvaise question — et poser la bonne fait basculer tout le guide. La thèse défendue, qu'aucune des dix pages du top 10 n'énonce : ce qui détermine votre liberté n'est pas la titularité des droits, c'est le triptyque titularité + accès + standardité technique. On peut être juridiquement propriétaire de son code et rester totalement prisonnier de son prestataire (pas de dépôt Git, domaine enregistré à son nom, secrets non transmis) ; on peut n'être propriétaire de rien et partir en une semaine (accès complets, technologie standard). Corollaire assumé et jamais écrit ailleurs : en 2026, une clause de « cession pleine et entière de tous les droits » est en partie inexécutable — le prestataire ne peut pas céder les briques tierces sous licence (thème premium, extensions, composants npm, polices, images), ne peut pas céder de droits sur une production générée par IA sans apport humain original (rien à céder faute d'œuvre protégeable), et ne peut céder que ce qu'il détient réellement dans sa chaîne de sous-traitance (freelance, offshore, alternant, stagiaire). Le guide en tire un livrable que personne ne fournit : un modèle de clause conforme au formalisme L131-3 avec son annexe des briques non cédables, une checklist des 14 accès à réclamer (qui vaut en pratique plus que le code), une grille de relecture du devis en trois minutes, et l'arbitrage chiffré « racheter les droits vs redévelopper à neuf » quand le conflit est déjà là. Deuxième différenciateur d'honnêteté : nous disons qu'aucun barème public du prix d'une cession n'existe — aucune étude sectorielle, aucune source primaire — et nous refusons d'inventer la fourchette que les concurrents auraient publiée ; nous publions à la place nos propres ordres de grandeur, en les identifiant comme tels. Troisième : nous déconseillons explicitement la négociation d'une cession dans les cas où elle ne vaut pas son surcoût (site sur plateforme SaaS, site vitrine standard de moins de 10 000 €, budget qui serait mieux employé à sécuriser les accès), y compris quand cela nous fait renoncer à une ligne de devis.

## Trous du top 10

- Le code écrit par IA (Copilot, Cursor, Claude) : en 2026 une part majoritaire du code d'un site est générée. Aucune page ne traite le fait qu'une production sans apport humain original n'est pas protégeable par le droit d'auteur, ni ce que devient une clause de cession portant sur du code que le prestataire n'a pas écrit et ne peut donc pas céder.
- Le cas SaaS / no-code (Wix, Shopify, Webflow, HubSpot, Squarespace) : il n'existe aucun code source cessible, la question ne se pose pas dans les mêmes termes. C'est pourtant la situation de la majorité des PME françaises. Angle mort total sur les 10 pages.
- Les briques tierces sous licence (thème WordPress premium, plugins, composants npm, polices, banques d'images) : une clause de 'cession pleine et entière de tous les droits' est en partie inexécutable sur ces éléments. Aucune page ne le dit, ni n'explique comment lister les briques non cédables en annexe du contrat.
- La distinction entre posséder le code et pouvoir changer de prestataire. C'est le vrai besoin du dirigeant et aucune page ne l'énonce : on peut être bloqué avec la cession (sans les accès) et parfaitement libre sans elle (avec les accès et une stack standard). Les dix pages traitent la question de droit et ignorent la question de dépendance opérationnelle.
- La checklist de passation technique : registrar du nom de domaine, zone DNS, accès hébergeur, base de données, dépôt Git, comptes tiers (Analytics, Search Console, Stripe, mailer), variables d'environnement et secrets. Une seule page effleure le domaine ; aucune ne fournit la liste des accès à réclamer, qui vaut en pratique plus que le code lui-même.
- Le prix. Combien coûte une cession négociée à la commande, combien coûte un rachat de droits a posteriori, quels ordres de grandeur, et de combien la cession renchérit le devis initial. Zéro chiffre sur les dix pages, alors que c'est la première question d'un dirigeant.
- La marche à suivre quand le conflit est déjà là : mise en demeure, référé, délais réels, coût d'une procédure, probabilité de succès, et l'arbitrage chiffré contre l'option 'redévelopper à neuf'. Les dix pages s'arrêtent à 'il aurait fallu prévoir une clause', ce qui est inutile pour qui lit la page justement parce qu'il ne l'a pas fait.
- La chaîne de titularité en sous-traitance : freelance mandaté par l'agence, développeur offshore, alternant, stagiaire. Une agence ne peut céder que ce qu'elle détient. Aucune page n'explique comment exiger une garantie de titularité couvrant toute la chaîne.
- Le sort du code si le prestataire disparaît : liquidation judiciaire, cessation d'activité, décès du freelance, agence rachetée. Aucune page ne traite ce scénario ; l'entiercement (APP, escrow) n'est mentionné que par une seule page, sans coût ni modalité de déclenchement.
- Le statut des apports du client (textes, photos, logo, maquettes, données clients) : ils restent sa propriété même sans cession du code. Aucune page ne le dit clairement, alors que cela change nettement le rapport de force en négociation.
- L'articulation avec le RGPD : la fin d'un contrat de prestation déclenche des obligations de restitution et de suppression des données (art. 28), levier de négociation totalement absent des dix pages.
- Un modèle de clause de cession réellement copiable, conforme au formalisme L131-3 (droits énumérés un par un, étendue, destination, territoire, durée, supports), avec une version courte insérable dans un devis. Deux pages ont 'contrat' ou 'rédiger' dans leur titre et aucune ne fournit le texte.
- La grille de relecture avant signature : les formules exactes à chercher dans un devis d'agence et les red flags ('tous droits réservés', 'licence d'utilisation', 'droit d'usage non exclusif', absence de clause d'accès). Aucune page ne transforme la règle de droit en test de trois minutes sur son propre devis.
- L'angle repreneur : ce qu'un acquéreur ou un fonds vérifie sur la chaîne de titularité en due diligence, et donc ce qu'un dirigeant doit sécuriser des années avant de vendre. Une seule page l'aborde, et du point de vue de l'éditeur de logiciel, pas de la PME propriétaire d'un site.

## Faits sourcés

- **4 éléments de délimitation obligatoires (étendue, destination, lieu, durée) + mention distincte de chaque droit** — Le formalisme de la cession de droits d'auteur est d'ordre public : chaque droit cédé doit faire l'objet d'une mention distincte, et le domaine d'exploitation doit être délimité quant à l'étendue, la destination, le lieu et la durée. Une clause de « cession pleine et entière de tous les droits » sans énumération est donc attaquable.
  - Source : Légifrance, article L131-3 du Code de la propriété intellectuelle, version en vigueur depuis le 3 juillet 1992 — https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278958 (consulté le 19/07/2026)
  - Fiabilité : **solide**
  - Texte de loi consulté sur la source primaire officielle (Légifrance), texte intégral vérifié.
- **Dévolution automatique, sauf stipulation contraire (art. L113-9)** — Pour les logiciels créés par un SALARIÉ dans l'exercice de ses fonctions, les droits patrimoniaux sont dévolus automatiquement à l'employeur, sans clause ni acte de cession. C'est une exception au droit d'auteur commun, propre au logiciel.
  - Source : Légifrance, article L113-9 CPI, version en vigueur depuis le 1er janvier 2020 — https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039279818 (consulté le 19/07/2026)
  - Fiabilité : **solide**
  - Source primaire officielle, texte intégral vérifié. Point clé pour la chaîne de titularité : l'agence détient les droits sur le code de ses salariés, mais PAS sur celui de ses freelances.
- **Ordonnance n° 2021-1658 du 15 décembre 2021** — L'ordonnance n° 2021-1658 du 15 décembre 2021 a étendu la dévolution automatique des droits sur logiciel aux personnes non salariées accueillies par convention (stagiaires, doctorants, personnes en mission de recherche). Elle ne couvre PAS le prestataire indépendant classique.
  - Source : Seban Avocats / Matthieu Berguig, commentaires de l'ordonnance n° 2021-1658 — https://www.seban-associes.avocat.fr/extension-du-regime-des-logiciels-crees-par-des-salaries-ou-des-agents-publics-a-toutes-les-personnes-exercant-une-mission-de-recherche-notamment-les-stagiaires-et-doctorants/ (consulté le 19/07/2026)
  - Fiabilité : **moyenne**
  - Commentaires doctrinaux concordants de deux cabinets ; la référence de l'ordonnance est vérifiable mais je n'ai pas ouvert le texte sur Légifrance. À contre-vérifier avant publication.
- **Article L111-1 alinéa 3 CPI** — L'existence d'un contrat de commande ou de louage d'ouvrage n'emporte AUCUNE cession automatique des droits d'auteur au client. Le freelance ou l'agence reste titulaire à défaut d'écrit conforme au L131-3.
  - Source : Légifrance, article L111-1 CPI — https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278868 ; synthèses concordantes (Village de la Justice, ITLAW Avocats), consulté le 19/07/2026
  - Fiabilité : **solide**
  - Règle constante et non contestée en doctrine ; texte de loi. C'est le socle du guide.
- **Article L122-7 CPI ; jurisprudence constante (ex. Cass. 1re civ., 9 oct. 1991, n° 90-12.476 ; Cass. 1re civ., 12 juill. 2006, n° 05-15.472)** — L'interprétation des cessions de droits d'auteur est restrictive : tout ce qui n'est pas expressément cédé reste à l'auteur. La cession du droit de représentation n'emporte pas celle du droit de reproduction et inversement.
  - Source : Légifrance, article L122-7 CPI — https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006278922 ; Occitanie Livre & Lecture, fiche juridique sur la rédaction des clauses de cession (consulté le 19/07/2026)
  - Fiabilité : **solide**
  - Texte de loi + jurisprudence citée avec numéros de pourvoi. Les numéros de pourvoi mériteraient une vérification directe sur Légifrance avant citation dans le guide.
- **Cass. Ass. plén., 7 mars 1986, Babolat c/ Pachot, pourvoi n° 83-10.477** — Un logiciel (et par extension le code d'un site) n'est protégé par le droit d'auteur QUE s'il est original, l'originalité s'entendant d'un « apport intellectuel » de l'auteur et d'un effort personnalisé dépassant la mise en œuvre d'une logique automatique et contraignante.
  - Source : Cour de cassation, Assemblée plénière, 7 mars 1986 — repris par Lexing Avocats, Féral Avocats et APP (https://www.app.asso.fr/centre-information/base-de-connaissances/code-logiciels/la-titularite-des-droits/en-droit-specifique-des-logiciels), consulté le 19/07/2026
  - Fiabilité : **solide**
  - Arrêt fondateur, universellement cité et concordant sur plusieurs sources doctrinales indépendantes. Pilier de l'angle « code généré par IA ».
- **Cass. 1re civ., 17 octobre 2012, pourvoi n° 11-21.641 (Codix c/ Alix), Inédit** — La Cour de cassation exige un examen CONCRET de l'originalité : les juges du fond ne peuvent pas la déduire de l'existence de contrats de licence ou de dépôts administratifs (type dépôt APP), ni du fait que le logiciel apporte « une solution particulière ». Ils doivent caractériser les choix révélant l'apport intellectuel propre et l'effort personnalisé.
  - Source : Légifrance — https://www.legifrance.gouv.fr/juri/id/JURITEXT000026516632 ; également Juricaf https://juricaf.org/arret/FRANCE-COURDECASSATION-20121017-1121641 (consulté le 19/07/2026)
  - Fiabilité : **solide**
  - Décision disponible sur Légifrance (source primaire) avec numéro de pourvoi confirmé par deux bases indépendantes. Essentielle : elle explique pourquoi un dépôt APP ne « prouve » pas l'originalité.
- **CJCE, 16 juillet 2009, Infopaq International, aff. C-5/08, point 35** — En droit de l'Union, une œuvre n'est protégée que si elle est une « création intellectuelle propre à son auteur », ce qui suppose des choix libres et créatifs reflétant la personnalité de l'auteur. Critère autonome du droit de l'Union.
  - Source : Cour de justice de l'Union européenne, arrêt Infopaq, 16 juillet 2009 — repris par IREDIC (https://iredic.fr/2025/05/20/la-notion-doriginalite-en-droit-dauteur/) et Droit & Technologies, consulté le 19/07/2026
  - Fiabilité : **solide**
  - Arrêt de principe, référence et point de l'arrêt concordants sur plusieurs sources doctrinales. Fonde l'exigence d'une intervention humaine créative — clé de l'angle IA.
- **Rapport « Copyright and Artificial Intelligence, Part 2: Copyrightability », publié le 29 janvier 2025** — Aux États-Unis, le Copyright Office a conclu qu'une production entièrement générée par IA en réponse à un prompt n'est pas protégeable, et que la seule sélection de prompts, même détaillés et fruit d'un effort humain, ne suffit pas à créer une œuvre protégeable. Seule l'expression humaine perceptible est couverte.
  - Source : U.S. Copyright Office — https://www.copyright.gov/newsnet/2025/1060.html ; analyses concordantes Jones Day, Skadden, Library of Congress (blogs.loc.gov/copyright/2025/02/), consulté le 19/07/2026
  - Fiabilité : **solide**
  - Rapport officiel d'une autorité publique, daté, confirmé par au moins quatre analyses juridiques indépendantes. ATTENTION : droit américain — à présenter comme un indicateur de convergence, pas comme du droit applicable en France.
- **84 % d'usage ou intention ; 51 % d'usage quotidien ; 33 662 répondants dont 26 004 développeurs professionnels** — 84 % des développeurs utilisent ou prévoient d'utiliser des outils d'IA ; 51 % des développeurs professionnels en utilisent quotidiennement. Mais la défiance progresse : 46 % se méfient de l'exactitude des sorties contre 33 % qui leur font confiance, et 3 % seulement déclarent une confiance élevée.
  - Source : Stack Overflow Developer Survey 2025, section AI — https://survey.stackoverflow.co/2025/ai (publiée le 29 décembre 2025 selon le blog Stack Overflow), consulté le 19/07/2026
  - Fiabilité : **moyenne**
  - Taille d'échantillon publiée et données brutes diffusées sous licence ODbL (bon point). MAIS échantillon auto-sélectionné, recruté sur Stack Overflow : non représentatif de la population des développeurs. Ne pas présenter comme une mesure de la part de code IA — l'enquête mesure l'usage déclaré, pas le volume de code produit.
- **« More than a quarter » (> 25 %)** — Le PDG d'Alphabet a déclaré que « plus d'un quart » du nouveau code chez Google est généré par IA, puis relu et accepté par des ingénieurs.
  - Source : Sundar Pichai, conférence de résultats Alphabet du 3e trimestre 2024 (29 octobre 2024) — relayé par Fortune, The Hill, Slashdot ; consulté le 19/07/2026
  - Fiabilité : **faible**
  - Déclaration orale d'un dirigeant en earnings call, sans définition publiée de la métrique (qu'est-ce qu'une « ligne de nouveau code » ? autocomplétion incluse ?), sans méthodologie ni audit externe. Source intéressée : Alphabet vend des outils d'IA. À citer comme une déclaration, jamais comme une mesure.
- **Article L611-10 CPI (exclusion des programmes d'ordinateur « en tant que tels »)** — Le logiciel « en tant que tel » n'est pas brevetable en France. Un dirigeant ne peut donc pas « déposer son site à l'INPI » comme un brevet. La protection passe par le droit d'auteur (automatique, sans formalité) et, en preuve, par un dépôt probatoire.
  - Source : Légifrance, article L611-10 CPI — https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006279404 ; INPI, « Cas particulier : les logiciels » — https://www.inpi.fr/realiser-demarches/propriete-intellectuelle/cas-particulier-logiciels (consulté le 19/07/2026)
  - Fiabilité : **solide**
  - Texte de loi + page officielle de l'INPI lui-même (l'organisme concerné confirme la limite de son propre titre). Nuance à conserver : une invention à effet technique mise en œuvre par logiciel reste brevetable.
- **Tribunal de commerce de Besançon, 23 mars 2016** — En l'absence de cession des droits, le refus du prestataire de remettre les codes sources des sites qu'il a développés a été jugé légalement fondé — le client ne disposant que d'un droit d'usage limité dans le temps.
  - Source : Nicolas Herzog, Droit du Numérique — https://www.nicolas-herzog.net/2016/04/sans-cession-de-droits-pas-de-remise-des-codes-sources-des-sites-commandes.html ; commentaire concordant Deleporte Wentz Avocat (dwavocat.blogspot.com, déc. 2016), consulté le 19/07/2026
  - Fiabilité : **moyenne**
  - Décision de première instance rapportée par deux cabinets d'avocats indépendants et concordants, mais numéro de RG non publié et décision non retrouvée en base primaire (Légifrance/Judilibre). Décision de tribunal de commerce : autorité limitée. À citer avec la mention « tribunal de commerce » et sans en faire une règle générale.
- **Cour d'appel de Douai, 7 avril 2022 — transmission sous 8 jours sous astreinte de 100 €/jour** — À l'inverse, un éditeur a été contraint de transmettre le code source à son client à des fins de maintenance : le contrat d'adhésion, insuffisamment clair, a été interprété en faveur du client, et la communication du code a été jugée indispensable à l'utilisation du logiciel conformément à sa destination (art. L122-6-1 CPI).
  - Source : Matthieu Berguig, analyse de l'arrêt — https://www.berguig.fr/actus/2022/4/21/un-diteur-contraint-de-fournir-le-code-source-de-son-logiciel-un-client-des-fins-de-maintenance (21 avril 2022), consulté le 19/07/2026
  - Fiabilité : **moyenne**
  - Analyse détaillée par un avocat spécialisé, avec le dispositif chiffré (8 jours, 100 €/jour), mais numéro de RG non publié et arrêt non vérifié en base primaire. Décision d'espèce fondée sur un contrat d'adhésion ambigu : ne pas généraliser. Contrepoint utile à Besançon 2016.
- **7,3 mois (moyenne) ; 3,7 mois (référés) ; 8,1 mois (fond) ; 18,3 mois (âge du stock)** — En 2023, les tribunaux judiciaires ont traité les affaires au fond et les référés en 7,3 mois en moyenne (hors activité commerciale et rupture d'union). Les référés durent 3,7 mois en moyenne, les affaires au fond 8,1 mois. 25 % des affaires sont terminées en moins de 2 mois, 50 % en moins de 4,4 mois. L'âge du stock au 31/12/2023 est de 18,3 mois.
  - Source : Ministère de la justice, SG/SSER, « Références Statistiques Justice », édition 2024, fiche 4.1 Les tribunaux judiciaires, données 2023 — https://www.justice.gouv.fr/sites/default/files/2025-01/RSJ2024%20Chapitre%204.pdf (consulté et extrait du PDF le 19/07/2026)
  - Fiabilité : **solide**
  - Source primaire : statistique publique du ministère de la justice, exploitation du Répertoire général civil, champ et méthode explicités. J'ai extrait les chiffres du PDF lui-même, pas d'un relais. C'est LE chiffre à utiliser pour l'angle « le conflit est déjà là ».
- **14,3 mois (prud'hommes, toutes affaires) ; 16,7 mois au fond ; 2,7 mois en référé** — Le délai moyen devant les conseils de prud'hommes est de 14,3 mois en 2023 (16,7 mois au fond, 2,7 mois en référé) — chiffre souvent attribué à tort aux tribunaux judiciaires.
  - Source : Ministère de la justice, SG/SSER, « Références Statistiques Justice », édition 2024, fiche 4.4 Les conseils de prud'hommes, données 2023 — https://www.justice.gouv.fr/sites/default/files/2025-01/RSJ2024%20Chapitre%204.pdf (consulté le 19/07/2026)
  - Fiabilité : **solide**
  - Source primaire, extrait du PDF. Signalé ici parce que je l'ai vu mal attribué dans les résultats de recherche : à ne PAS utiliser pour un litige de propriété du code, qui relève du tribunal judiciaire ou de commerce.
- **69 % (entreprises de 10 salariés ou plus)** — En 2023, 69 % des entreprises françaises de 10 salariés ou plus possèdent un site web, en propre ou partagé.
  - Source : INSEE, « Sites et réseaux sociaux des entreprises », Économie et société à l'ère du numérique, enquête TIC entreprises 2023 — https://www.insee.fr/fr/statistiques/8616835?sommaire=8616883 (consulté le 19/07/2026)
  - Fiabilité : **solide**
  - Statistique publique, champ explicite (entreprises de 10 salariés et plus des secteurs principalement marchands hors agricole, financier et assurance). ATTENTION au champ : ce chiffre EXCLUT les TPE de moins de 10 salariés, qui sont le cœur de cible du guide. Ne pas le présenter comme « 69 % des PME ».
- **0 export de code possible** — Wix ne permet pas d'exporter le site ni son code source vers un autre hébergeur : l'architecture SaaS repose sur une technologie propriétaire et le site doit tourner sur les serveurs de Wix. Wix reconnaît en revanche que le contenu appartient au client.
  - Source : Wix Help Center, « Exporting or Embedding Your Wix Site Elsewhere » — https://support.wix.com/en/article/exporting-or-embedding-your-wix-site-elsewhere (consulté le 19/07/2026)
  - Fiabilité : **solide**
  - Source primaire : documentation officielle de l'éditeur, qui reconnaît lui-même la limitation. Preuve directe que sur Wix la question de la « cession du code source » est sans objet.
- **Export réservé aux Workspace plans payants ; 5 catégories exclues de l'export** — Webflow autorise l'export du code (HTML, CSS, JS, assets) mais uniquement sur les Workspace plans payants. L'export EXCLUT le contenu CMS, les comptes utilisateurs, le e-commerce, les composants de code et leurs fonctionnalités, ainsi que les pages et contenus localisés.
  - Source : Webflow Help Center, « How do I export my Webflow site code? » — https://help.webflow.com/hc/en-us/articles/33961386739347 (page renvoyant un HTTP 403 en accès automatisé le 19/07/2026 ; contenu obtenu via l'extrait indexé du Help Center officiel)
  - Fiabilité : **moyenne**
  - Le contenu provient de la documentation officielle Webflow, mais je n'ai pas pu ouvrir la page directement (403 sur l'accès automatisé) — le détail vient de l'extrait indexé et de sources secondaires concordantes. À revérifier manuellement dans un navigateur avant publication, notamment la liste exacte des exclusions.
- **1 licence = 1 « End Product »** — La licence Regular de ThemeForest/Envato n'est en principe PAS transférable, avec une exception : le freelance ou l'agence qui utilise l'élément pour un seul produit final destiné à un client transfère de fait la licence à ce client. Un même thème acheté une fois ne couvre qu'UN site.
  - Source : Envato, ThemeForest Regular License — https://themeforest.net/licenses/terms/regular et License FAQ https://themeforest.net/licenses/faq (consulté le 19/07/2026)
  - Fiabilité : **solide**
  - Conditions de licence officielles de l'éditeur. Illustre concrètement pourquoi une clause de « cession pleine et entière de tous les droits » est partiellement inexécutable : l'agence ne peut pas céder plus que sa propre licence.
- **Licence GPLv2 ou ultérieure** — WordPress est sous licence GPL et, selon WordPress.org, les thèmes et extensions constituent des œuvres dérivées dont le code PHP est automatiquement placé sous GPL. Le prestataire ne peut donc pas céder de droits exclusifs sur ces briques, ni empêcher le client de les modifier.
  - Source : WordPress.org, page License — https://wordpress.org/about/license/ (consulté le 19/07/2026)
  - Fiabilité : **moyenne**
  - La licence GPL de WordPress est un fait établi et officiel (fiabilité solide). En revanche, la qualification des thèmes/plugins en « œuvres dérivées » est la POSITION de la fondation WordPress et du Software Freedom Law Center, pas une décision de justice française. À présenter comme une position, pas comme du droit établi.
- **Article 28.3, point g) du RGPD** — À la fin de la prestation, le sous-traitant doit, selon le choix du responsable de traitement, supprimer ou renvoyer toutes les données à caractère personnel, et détruire les copies existantes, sauf obligation légale de conservation. C'est une obligation contractuelle imposée par le RGPD, indépendante de toute clause de propriété intellectuelle.
  - Source : Règlement (UE) 2016/679 (RGPD), article 28.3 g) — texte consolidé EUR-Lex https://eur-lex.europa.eu/eli/reg/2016/679/oj ; synthèses concordantes (CNIL, Leto, Legiscope), consulté le 19/07/2026
  - Fiabilité : **solide**
  - Texte réglementaire européen. Levier de négociation réel : même sans cession de droits, le client peut exiger la restitution des données. NB : les délais souvent cités (30 jours pour restituer, 60 jours pour certifier) ne figurent PAS dans le RGPD — ils viennent de modèles de DPA commerciaux et ne doivent pas être présentés comme légaux.
- **Risque identifié par le registre lui-même** — L'AFNIC identifie explicitement comme situation à risque le cas où « un prestataire informatique a enregistré le nom de domaine en son nom en lieu et place de son client sans que ce dernier ne le lui ait demandé, par souci de simplicité ou de facilité ». Le titulaire déclaré détient les droits, indépendamment de qui paie la facture.
  - Source : AFNIC, « Guide pratique du titulaire d'un nom de domaine en .fr », édition 2024 — https://www.afnic.fr/wp-media/uploads/2024/07/Afnic-Guide-pratique-du-Titulaire.pdf (PDF extrait le 19/07/2026)
  - Fiabilité : **solide**
  - Source primaire : le registre officiel du .fr documente lui-même le risque. Citation extraite du PDF. Pièce maîtresse de l'angle « checklist de passation ».
- **1 code auth-info requis** — Pour changer de bureau d'enregistrement, le titulaire doit obtenir un code « auth-info » auprès de son bureau actuel, qui est tenu de le lui communiquer à la création ou de le mettre à disposition dans un espace dédié. Le changement de bureau d'enregistrement est généralement payant.
  - Source : AFNIC, « Guide pratique du titulaire d'un nom de domaine en .fr », édition 2024 — https://www.afnic.fr/wp-media/uploads/2024/07/Afnic-Guide-pratique-du-Titulaire.pdf (PDF extrait le 19/07/2026)
  - Fiabilité : **solide**
  - Source primaire, citation directe extraite du PDF officiel. Élément concret et actionnable de la checklist de passation.
- **Adhésion 830 €/an HT ; entiercement de 450 à 1 200 €/an HT selon la formule** — L'APP propose un service d'entiercement (escrow) qui répond au scénario de disparition du prestataire, avec trois formules distinctes selon que l'APP est ou non cosignataire de l'accord. L'adhésion annuelle est un préalable obligatoire au dépôt et à l'entiercement.
  - Source : APP (Agence pour la Protection des Programmes), « Price list – Legal entities », référence FormFR18b-R18, applicable au 17 juin 2024 — https://www.app.asso.fr/wp-content/uploads/APP-price-legal-entities.pdf (PDF lu le 19/07/2026)
  - Fiabilité : **solide**
  - Tarifs officiels de l'organisme, document daté et référencé, lu directement dans le PDF. Répond exactement au trou identifié : « l'entiercement n'est mentionné que par une seule page, sans coût ni modalité ».

## Chiffres à démonter

- **« GitHub Copilot écrit 46 % du code » (parfois « 46 % de tout le code », « l'IA écrit la moitié du code »)**
  - Répété par : Des dizaines de sites de « statistiques SEO » (axis-intelligence.com, wearetenet.com, aboutchromebooks.com, affiliatebooster.com, quantumrun.com), des articles de presse tech, et de nombreux consultants
  - En remontant : Le chiffre provient de la télémétrie interne de GitHub (Microsoft), c'est-à-dire du VENDEUR de l'outil. Je n'ai trouvé aucun billet officiel du blog GitHub publiant ce chiffre avec sa méthodologie. Ce que mesure la télémétrie, d'après les déclarations du PDG de GitHub, c'est la fréquence d'appui sur la touche Tab dans les fichiers où Copilot est actif — pas la part de code d'un projet livré. Deux biais majeurs : (1) le périmètre est restreint aux utilisateurs actifs de Copilot dans les fichiers où il est sollicité, pas à l'ensemble du code écrit ; (2) le taux d'acceptation réel des suggestions est de l'ordre de 27-30 %, ce qui est incompatible avec une lecture naïve du « 46 % ». Pour un guide juridique, ce chiffre ne peut pas fonder l'affirmation « une part majoritaire du code d'un site est générée par IA ». Utiliser plutôt l'usage déclaré (Stack Overflow 2025, échantillon publié) et présenter le sujet comme un risque juridique émergent, pas comme un fait mesuré.
- **« Plus de 25 % du nouveau code de Google est généré par IA »**
  - Répété par : Fortune, The Hill, Slashdot, Business Today, Futurism, puis toute la sphère des consultants IA
  - En remontant : Déclaration orale de Sundar Pichai lors de la conférence de résultats du 3e trimestre 2024 d'Alphabet (29 octobre 2024). Aucune définition publiée de la métrique, aucun périmètre, aucune méthodologie, aucun audit. Alphabet vend des outils d'IA : source intéressée par construction. C'est une déclaration de dirigeant en communication financière, à citer comme telle et jamais comme une mesure. À ne pas transformer en « en 2026 une part majoritaire du code d'un site est générée » — cette extrapolation n'est étayée par aucune source.
- **« Prix médian d'un site internet : 5 200 € », « 63 % des sites coûtent moins de 10 000 € », « le cœur de marché va de 3 000 à 15 000 € »**
  - Répété par : La Fabrique du Net, repris par de nombreux comparateurs et blogs d'agences
  - En remontant : La Fabrique du Net est une plateforme de MISE EN RELATION entre entreprises et agences web : elle est rémunérée sur les projets qu'elle apporte, donc directement intéressée au niveau de prix affiché. La page (https://www.lafabriquedunet.fr/agences/pages/agences-site-internet/tarifs) renvoie un HTTP 403 en accès automatisé et je n'ai pas pu vérifier la méthodologie, la taille d'échantillon ni la date de collecte. Ces chiffres reposent probablement sur les devis transitant par la plateforme — un échantillon auto-sélectionné et non représentatif. À ne pas reprendre. Sur le prix d'une cession de droits en particulier : je n'ai trouvé AUCUN barème public, aucune étude sectorielle et aucune source primaire. C'est en soi un constat exploitable pour le guide — dire honnêtement qu'aucun barème public n'existe est plus crédible et plus différenciant que d'inventer une fourchette.
- **« 77 % des entreprises ont un site web », « 48 % des TPE-PME n'ont pas de site », « 35 % des PME sans site en 2026 », « une entreprise sur deux n'a pas de site », « un tiers des PME n'ont toujours pas de site »**
  - Répété par : Sortlist (plateforme de mise en relation avec des agences), e-monsite (créateur de sites), digitalgagnant.fr, blitzweb.fr, tool-advisor.fr, beaboss.fr, et une longue chaîne de reprises
  - En remontant : Ces chiffres sont mutuellement incompatibles et circulent sans champ ni date. La seule statistique publique solide est celle de l'INSEE (enquête TIC entreprises 2023) : 69 % des entreprises de 10 salariés ou plus possèdent un site web, en propre ou partagé. Deux pièges : (1) le champ INSEE exclut les entreprises de moins de 10 salariés, donc l'immense majorité des TPE ; (2) la plupart des chiffres concurrents émanent de vendeurs de sites ou de plateformes d'apport d'affaires, dont le modèle économique repose sur l'idée qu'il reste un large marché non équipé. Ne citer que l'INSEE, avec son champ explicite.
- **« Le délai moyen d'une procédure est de 14,3 mois » appliqué à un litige sur la propriété d'un site**
  - Répété par : Repris de façon générique par des articles juridiques et des blogs d'agences pour évoquer « la lenteur de la justice »
  - En remontant : Les 14,3 mois (données 2023) sont le délai moyen des CONSEILS DE PRUD'HOMMES, pas des tribunaux judiciaires. Un litige de propriété intellectuelle sur un site relève du tribunal judiciaire (ou du tribunal de commerce entre commerçants). Les bons chiffres, extraits du même document du ministère de la justice : 7,3 mois en moyenne devant les tribunaux judiciaires, dont 3,7 mois pour les référés et 8,1 mois pour les affaires au fond, avec un âge du stock de 18,3 mois au 31/12/2023. J'ai moi-même trouvé cette confusion dans les résultats de recherche : c'est un piège actif.
- **« Un constat d'huissier sur internet coûte entre 200 et 500 € HT » présenté comme un tarif réglementé**
  - Répété par : Blogs de commissaires de justice, cabinets d'avocats, sites de vulgarisation juridique
  - En remontant : Double erreur. D'abord, les constats ne relèvent PAS du tarif réglementé : ils font partie des prestations à honoraires LIBRES, contrairement aux significations, commandements et mesures d'exécution qui sont tarifés aux articles A444-10 à A444-52 du Code de commerce. La fourchette annoncée est donc une observation de marché, pas un barème opposable, et elle varie fortement selon la complexité du constat (nombre de pages, captures, environnement technique). Ensuite, aucune des sources trouvées ne remonte à un relevé de prix documenté. Pour le guide : dire qu'il s'agit d'un honoraire libre à négocier et à faire chiffrer au cas par cas, et renvoyer au tarif réglementé uniquement pour les actes qui en relèvent.
- **« Le dépôt d'un logiciel à l'APP coûte 45 € et est valable 4 ans »**
  - Répété par : Articles de vulgarisation juridique et blogs d'entrepreneuriat, encore en ligne en 2026
  - En remontant : Chiffre obsolète. La grille tarifaire officielle de l'APP pour les personnes morales (référence FormFR18b-R18, applicable au 17 juin 2024) indique : adhésion annuelle obligatoire préalable à tout dépôt et à tout entiercement 830 €/an HT ; dépôt standard 195 € HT par dépôt (jusqu'à 10 Go et 1 000 fichiers, données stockées en France) ; dépôt vérifié 800 € HT ; dépôt contrôlé à partir de 3 800 € HT. Côté entiercement : clause d'accès 450 €/an HT (jusqu'à 5 bénéficiaires), accord d'entiercement bipartite 900 €/an HT, maintien d'un accord d'entiercement avec l'APP cosignataire 1 200 €/an HT. L'écart avec les 45 € cités partout est d'un facteur 20 à 30 — et le coût réel d'entrée est en fait de 830 € + 195 € la première année.
- **« Protégez votre site / votre logiciel en le déposant à l'INPI » (sous-entendu : par un brevet)**
  - Répété par : Agences web, blogs entrepreneuriaux, certains prestataires dans leurs argumentaires commerciaux
  - En remontant : Le programme d'ordinateur « en tant que tel » est exclu de la brevetabilité par l'article L611-10 du CPI, et l'INPI le confirme sur sa propre page consacrée aux logiciels. Déposer une demande de brevet portant sur un logiciel en tant que tel expose au rejet par l'INPI ou l'OEB, avec perte des taxes de dépôt. La protection du code est celle du droit d'auteur, acquise SANS formalité dès la création si l'œuvre est originale ; un dépôt (APP, enveloppe Soleau, huissier) ne crée aucun droit, il ne constitue qu'un élément de PREUVE de date et de contenu. La Cour de cassation a d'ailleurs jugé (1re civ., 17 oct. 2012, n° 11-21.641) que les juges ne peuvent pas déduire l'originalité de l'existence de dépôts administratifs. Nuance à conserver : une invention à effet technique mise en œuvre par un logiciel reste brevetable.
- **« À la fin du contrat, le prestataire doit restituer les données sous 30 jours et certifier leur suppression sous 60 jours » présenté comme une obligation RGPD**
  - Répété par : Modèles de DPA commerciaux, éditeurs de solutions de conformité, blogs juridiques
  - En remontant : Ces délais ne figurent NULLE PART dans le RGPD. L'article 28.3 g) impose que le contrat prévoie que le sous-traitant, selon le choix du responsable de traitement, supprime ou renvoie toutes les données à caractère personnel au terme de la prestation et détruise les copies existantes, sauf obligation légale de conservation — sans fixer aucun délai chiffré. Les 30 et 60 jours proviennent de modèles de contrats commerciaux et sont devenus des « standards » par répétition. Pour le guide : présenter le principe comme légal et les délais comme un point à NÉGOCIER dans le contrat, ce qui est justement le levier utile pour le dirigeant.
- **« Une clause de cession pleine et entière de tous les droits vous rend propriétaire de l'intégralité de votre site »**
  - Répété par : Devis et contrats d'agences web, modèles de contrats en ligne, articles de vulgarisation
  - En remontant : Affirmation en partie inexécutable, pour deux raisons documentées. (1) Sur le formalisme : l'article L131-3 du CPI exige une mention distincte de chaque droit cédé et une délimitation de l'étendue, de la destination, du lieu et de la durée ; une formule globale sans énumération est fragile, et l'article L122-7 impose une interprétation restrictive au profit de l'auteur. (2) Sur l'objet : le prestataire ne peut céder que ce qu'il détient. Les briques tierces échappent à la cession — la licence Regular de ThemeForest n'est en principe pas transférable au-delà d'un produit final unique, les thèmes et extensions WordPress sont considérés par WordPress.org comme des œuvres dérivées sous GPL, et les composants open source restent régis par leur licence d'origine. Un contrat sérieux doit donc lister en annexe les briques NON cédées et leur régime de licence. Aucune des pages du top 10 ne le fait.

## Prix relevés

- APP (Agence pour la Protection des Programmes) — grille officielle « Price list – Legal entities », référence FormFR18b-R18, applicable au 17 juin 2024, PDF lu le 19/07/2026 : adhésion annuelle (préalable obligatoire à tout dépôt et à tout entiercement) 830 €/an HT.
- APP — dépôt standard 195 € HT par dépôt (scellement de tous types de fichiers, archivage physique ou numérique jusqu'à 10 Go et 1 000 fichiers, données stockées en France). Relevé le 19/07/2026 sur https://www.app.asso.fr/wp-content/uploads/APP-price-legal-entities.pdf
- APP — dépôt vérifié 800 € HT par dépôt (examen du contenu déposé, inventaire des fichiers, empreinte cryptographique de chaque fichier, rapport d'opérations). Relevé le 19/07/2026.
- APP — dépôt contrôlé à partir de 3 800 € HT par dépôt (examen approfondi, installation et configuration des environnements d'exécution, rapport d'opérations). Relevé le 19/07/2026.
- APP — entiercement, clause d'accès 450 €/an HT par création, jusqu'à 5 bénéficiaires (l'APP n'est pas cosignataire de l'accord). Relevé le 19/07/2026.
- APP — accord d'entiercement bipartite 900 €/an HT par contrat (l'APP n'est pas cosignataire). Relevé le 19/07/2026.
- APP — maintien d'un accord d'entiercement 1 200 €/an HT par contrat, l'APP étant cosignataire de l'accord. Relevé le 19/07/2026. C'est la seule formule où le tiers de confiance est partie à l'accord et peut donc déclencher la remise.
- APP — réduction de 50 % sur les frais d'adhésion pendant trois ans pour les start-up (page officielle https://www.app.asso.fr/en/prices, relevée le 19/07/2026).
- Shopify France — page officielle https://www.shopify.com/fr/tarifs relevée le 19/07/2026, engagement MENSUEL : Basic 36 €/mois, Grow 105 €/mois, Advanced 384 €/mois, Plus à partir de 2 100 €/mois.
- Shopify France — même page, engagement ANNUEL : Basic 25 €/mois (économie annoncée 132 €/an), Grow 66 €/mois (468 €/an), Advanced 289 €/mois (1 140 €/an), Plus sur devis. Offre d'entrée : 3 jours d'essai gratuit puis 1 €/mois pendant 3 mois. POS Pro 79 €/mois par point de vente. Relevé le 19/07/2026.
- Webflow — l'export du code (HTML, CSS, JS, assets) est réservé aux Workspace plans payants ; les Site plans seuls ne l'incluent pas. Source : Webflow Help Center, article « How do I export my Webflow site code? » (https://help.webflow.com/hc/en-us/articles/33961386739347). LIMITE DE VÉRIFICATION : la page a renvoyé un HTTP 403 en accès automatisé le 19/07/2026 ; le montant exact du plan et la liste des exclusions doivent être revérifiés manuellement dans un navigateur avant publication.
- Wix — AUCUN prix relevé sur page officielle. Les pages fr.wix.com/plans (HTTP 404), fr.wix.com/upgrade/website et fr.wix.com/premium-purchase-plan/dynamo n'exposent pas leurs tarifs en HTML statique (rendu JavaScript). Tentatives du 19/07/2026. Les tarifs Wix doivent être relevés manuellement dans un navigateur, avec capture datée, avant toute publication — ne pas reprendre de comparateur.
- Squarespace — AUCUN prix relevé sur page officielle. La page https://www.squarespace.com/pricing n'expose pas les montants en HTML statique (tentative du 19/07/2026). Les seuls chiffres trouvés (Basic 16 $, Core 23 $, Plus 39 $, Advanced 99 $ par mois en facturation annuelle, nouvelle nomenclature déployée fin 2025) proviennent de comparateurs tiers dont plusieurs sont affiliés — À NE PAS UTILISER. Relevé manuel requis, en euros, sur la page officielle.
- HubSpot Content Hub — AUCUN prix relevé. L'URL https://www.hubspot.fr/pricing/content-hub renvoie un HTTP 404 le 19/07/2026. Relevé manuel requis sur la page tarifaire officielle en vigueur.
- Coût d'une cession de droits négociée à la commande, et coût d'un rachat de droits a posteriori — AUCUNE source primaire trouvée. Aucun barème public, aucune étude sectorielle, aucun organisme professionnel ne publie de fourchette. Les seuls chiffres en circulation proviennent de plateformes de mise en relation rémunérées à l'apport d'affaires. Recommandation : traiter honnêtement cette absence de barème dans le guide (c'est en soi un angle différenciant), ou construire des ordres de grandeur à partir de devis réels anonymisés de Hagnéré Code, en les présentant explicitement comme des observations propres et datées, jamais comme une statistique de marché.
- Constat de commissaire de justice sur internet — PAS un tarif réglementé. Les constats relèvent des honoraires LIBRES ; seuls les significations, commandements et mesures d'exécution sont tarifés (articles A444-10 à A444-52 du Code de commerce). La fourchette de 200 à 500 € HT qui circule est une observation de marché non sourcée : à faire chiffrer au cas par cas et à présenter comme telle.

## Cadre légal

- Article L111-1 CPI — l'auteur jouit d'un droit de propriété incorporelle exclusif du seul fait de sa création ; alinéa 3 : l'existence ou la conclusion d'un contrat de louage d'ouvrage ou de service n'emporte aucune dérogation à cette jouissance. Fondement de la règle « la commande n'emporte pas cession ».
- Article L112-2, 13° CPI — les logiciels, y compris le matériel de conception préparatoire, figurent parmi les œuvres de l'esprit protégées. Base légale visée par le Tribunal de commerce de Besançon (23 mars 2016).
- Article L113-9 CPI — dévolution automatique à l'employeur des droits patrimoniaux sur les logiciels créés par les salariés dans l'exercice de leurs fonctions, sauf stipulation contraire ; applicable aussi aux agents publics. Clé de la chaîne de titularité : couvre les salariés de l'agence, PAS ses freelances.
- Ordonnance n° 2021-1658 du 15 décembre 2021 — extension de la dévolution automatique aux personnes non salariées accueillies par convention (stagiaires, doctorants, personnes en mission de recherche). Ne couvre pas le prestataire indépendant classique.
- Article L122-6 CPI — définition du droit d'exploitation du logiciel : reproduction permanente ou provisoire, traduction/adaptation/arrangement/modification, mise sur le marché. Ce sont les droits à énumérer un par un dans une clause de cession portant sur du code.
- Article L122-6-1 CPI — actes que l'utilisateur légitime peut accomplir sans autorisation lorsqu'ils sont nécessaires à l'utilisation du logiciel conformément à sa destination, y compris la correction des erreurs ; encadrement de la décompilation. Fondement retenu par la Cour d'appel de Douai (7 avril 2022) pour contraindre un éditeur à livrer le code source à des fins de maintenance.
- Article L122-7 CPI — la cession du droit de représentation n'emporte pas celle du droit de reproduction et inversement ; la cession totale de l'un est limitée aux modes d'exploitation prévus au contrat. Fonde l'interprétation restrictive : ce qui n'est pas expressément cédé reste à l'auteur.
- Article L131-1 CPI — la cession globale des œuvres futures est nulle. Point d'attention pour les contrats-cadres de maintenance ou de TMA qui prétendraient céder par avance tout développement à venir.
- Article L131-3 CPI — formalisme impératif de la cession : mention distincte de chaque droit cédé et délimitation du domaine d'exploitation quant à l'étendue, la destination, le lieu et la durée. C'est le texte à respecter pour un modèle de clause réellement opposable.
- Article L131-4 CPI — principe de la rémunération proportionnelle de l'auteur et cas limitativement énumérés de recours au forfait. À vérifier lorsqu'une cession est consentie à titre gratuit ou pour un euro symbolique.
- Article L611-10 CPI — exclusion de la brevetabilité des programmes d'ordinateur « en tant que tels ». Interdit de « déposer son site à l'INPI » comme un brevet ; la protection passe par le droit d'auteur.
- Article L335-3 CPI — la violation des droits de l'auteur d'un logiciel constitue le délit de contrefaçon. Fonde l'action pénale et l'action civile en contrefaçon.
- Article L332-1 et suivants CPI — saisie-contrefaçon, mesure probatoire déterminante lorsque le litige porte sur du code que le demandeur ne détient pas.
- Article 835 du Code de procédure civile — pouvoirs du juge des référés (mesures conservatoires ou de remise en état pour prévenir un dommage imminent ou faire cesser un trouble manifestement illicite ; obligation non sérieusement contestable). Voie de la demande de remise des accès ou du code en urgence.
- Articles 1188 à 1192 du Code civil — interprétation des contrats ; article 1190 : le contrat d'adhésion s'interprète contre celui qui l'a proposé. Raisonnement retenu par la Cour d'appel de Douai (7 avril 2022) en faveur du client.
- Article 1112-1 du Code civil — devoir précontractuel d'information sur toute information dont l'importance est déterminante pour le consentement. Support de l'obligation d'information et de conseil du prestataire informatique sur le régime des droits.
- Article 28 du RGPD (Règlement UE 2016/679), notamment le 3 g) — obligation contractuelle pour le sous-traitant, au choix du responsable de traitement, de supprimer ou de renvoyer toutes les données à caractère personnel au terme de la prestation et de détruire les copies existantes. Levier de restitution indépendant de toute cession de droits.
- Article 82 de la loi n° 2004-575 du 21 juin 2004 (LCEN) et article 6 — obligations d'identification de l'éditeur d'un site, utile pour établir qui exploite le site en cas de conflit.
- Jurisprudence — Cass. Ass. plén., 7 mars 1986, Babolat c/ Pachot, n° 83-10.477 : critère de l'originalité du logiciel (apport intellectuel, effort personnalisé dépassant la mise en œuvre d'une logique automatique et contraignante).
- Jurisprudence — Cass. 1re civ., 17 octobre 2012, n° 11-21.641 (Codix c/ Alix), Inédit, disponible sur Légifrance : l'originalité ne peut se déduire ni de l'existence de contrats de licence, ni de dépôts administratifs, ni du fait que le logiciel apporte une solution particulière ; examen concret exigé.
- Jurisprudence — CJCE, 16 juillet 2009, Infopaq International, aff. C-5/08, pt 35 : l'œuvre protégée est la « création intellectuelle propre à son auteur », notion autonome du droit de l'Union supposant des choix libres et créatifs. Socle de l'exigence d'une intervention humaine créative, déterminante pour le code généré par IA.
- Jurisprudence — Tribunal de commerce de Besançon, 23 mars 2016 : à défaut de cession, le refus du prestataire de remettre les codes sources est légalement fondé (décision de première instance, RG non publié — à citer avec prudence).
- Jurisprudence — Cour d'appel de Douai, 7 avril 2022 : éditeur condamné à transmettre le code source exploitable sous 8 jours sous astreinte de 100 €/jour, à des fins de maintenance (RG non publié — à vérifier avant citation).

## Plan proposé

1. 1. La réponse en 90 secondes : ce que vous possédez déjà, ce que vous ne possédez pas, et ce qui compte vraiment
2. 2. Les six choses qu'on appelle « le site » — et à qui appartient chacune (domaine, hébergement, code, contenus, données, comptes tiers)
3. 3. Ce que dit vraiment la loi française : payer une prestation ne transfère aucun droit (L111-1, L131-3, et l'exception salariés/logiciel)
4. 4. Ce qui vous appartient déjà sans aucune clause : textes, photos, logo, données clients — et le levier RGPD de fin de contrat (article 28)
5. 5. Wix, Shopify, Webflow, HubSpot, Squarespace : le cas majoritaire où il n'existe aucun code source à céder
6. 6. Thème premium, extensions, composants npm, polices, banques d'images : les briques que votre prestataire ne peut pas vous céder
7. 7. Le code écrit par une IA (Copilot, Cursor, Claude) : ce qu'une clause de cession peut encore couvrir en 2026
8. 8. Freelance, offshore, alternant, stagiaire : la chaîne de titularité que personne ne vérifie, et la garantie à exiger
9. 9. Posséder le code ou pouvoir changer de prestataire : la distinction qui décide réellement de votre liberté
10. 10. La checklist de passation : les 14 accès à réclamer, dans l'ordre, avec le message type à envoyer
11. 11. Combien coûte une cession de droits : à la commande, a posteriori — et pourquoi aucun barème public n'existe
12. 12. Le modèle de clause de cession conforme à L131-3 : version contrat et version courte insérable dans un devis
13. 13. Relisez votre devis en trois minutes : les formules à chercher, les cinq mentions qui doivent vous alerter
14. 14. Le conflit est déjà là : mise en demeure, référé, délais et coûts réels, et l'arbitrage chiffré contre le redéveloppement à neuf
15. 15. Si le prestataire disparaît : liquidation, cessation d'activité, décès du freelance, agence rachetée — entiercement et clauses de survie
16. 16. Sécuriser sa titularité : la méthode en 5 étapes, et ce qu'un repreneur vérifiera en due diligence dans cinq ans

## Fil rouge

Sandrine Béchet, 46 ans, dirigeante d'Alp'Isolation, bureau d'études thermiques de 11 salariés installé à Rumilly (Haute-Savoie), 1,4 M€ de chiffre d'affaires. En mars 2023, elle a payé 21 600 € HT à une agence lyonnaise pour un site vitrine et un configurateur d'audit énergétique en ligne qui génère 40 à 60 demandes de devis par mois — sa première source de contacts. Le devis signé, deux pages, comportait la ligne « livraison d'un droit d'usage du site » et aucune clause de cession, aucune clause d'accès. En juin 2026, elle veut confier la maintenance à une autre agence : la première refuse de livrer le dépôt Git, facture 9 000 € HT « le rachat des droits », et Sandrine découvre trois choses au passage — le nom de domaine alpisolation.fr est enregistré au nom de l'agence, le configurateur repose sur un thème premium sous licence annuelle à 79 €/an rattachée au compte de l'agence, et une partie du code a été écrite par un freelance de Cluses sous-traité par l'agence, le reste étant en partie généré par un assistant de développement. Le devis de redéveloppement à neuf que lui propose la nouvelle agence : 14 500 € HT en six semaines. Son arbitrage — payer 9 000 €, engager une procédure, ou repartir de zéro pour 14 500 € — traverse tout le guide et se tranche en section 14.

## Lexique

- Droit d'auteur — la protection automatique d'une création originale, sans dépôt ni formalité : le développeur en est titulaire dès qu'il écrit le code, même si c'est vous qui payez
- Droits patrimoniaux et droit moral — les premiers (exploiter, modifier, revendre) se cèdent ; le second (être cité comme auteur) reste au développeur et ne se vend pas, même contre de l'argent
- Cession de droits — le transfert écrit de la propriété des droits d'exploitation, qui doit énumérer un par un les droits cédés, leur étendue, leur destination, le territoire et la durée (article L131-3)
- Licence, ou « droit d'usage » — l'autorisation d'utiliser sans devenir propriétaire : c'est la mention que l'on trouve dans la majorité des devis d'agence, et ce n'est pas une cession
- Titularité — le fait de détenir réellement les droits : une agence ne peut vous céder que ce qu'elle détient, d'où la question de ses freelances et de ses stagiaires
- Code source — le texte écrit par le développeur, lisible et modifiable ; par opposition au site en ligne, qui n'en est que le résultat affiché
- Dépôt de code (ou dépôt Git) — l'armoire où vit l'historique complet du code, chez GitHub ou GitLab : sans accès à ce dépôt, la cession des droits ne vous sert à rien en pratique
- Bureau d'enregistrement du nom de domaine (registrar) — la société chez qui votre adresse en .fr ou .com est réservée (OVH, Gandi…) : le titulaire déclaré dans son fichier est le vrai propriétaire du domaine
- Zone DNS — l'annuaire qui indique à Internet vers quel serveur pointe votre nom de domaine : celui qui la contrôle peut faire disparaître votre site en dix minutes
- Variables d'environnement et secrets — les clés d'accès confidentielles qui relient votre site à vos outils (paiement, messagerie, base de données) : elles ne sont jamais dans le code et se transmettent séparément
- Licence open source (MIT, GPL) — les conditions gratuites d'utilisation de briques logicielles publiques : elles restent la propriété de leurs auteurs et ne peuvent jamais vous être cédées
- Entiercement (escrow) — le dépôt du code chez un tiers de confiance, comme l'Agence pour la protection des programmes, qui vous le remet si le prestataire disparaît
- Sous-traitant au sens du RGPD — le statut juridique de votre prestataire quand il touche à vos données clients : il l'oblige à vous les restituer puis à les supprimer à la fin du contrat (article 28)
- Référé — la procédure d'urgence devant le tribunal, jugée en quelques mois au lieu de plus d'un an, pour obtenir une mesure immédiate comme la remise des accès

## Pièges à éviter

- Ne jamais écrire « en 2026, une part majoritaire du code d'un site est générée par IA » : aucune source ne l'établit. La section 7 se rédige comme un risque juridique émergent, pas comme un fait mesuré.
- Ne pas reprendre le « 46 % du code écrit par GitHub Copilot » : télémétrie interne du vendeur (Microsoft), sans méthodologie publiée, mesurant la fréquence d'acceptation de suggestions dans les fichiers où l'outil est actif — incompatible avec un taux d'acceptation réel de l'ordre de 27-30 %. Si le chiffre est cité, c'est pour le démonter.
- Ne pas présenter les « plus de 25 % du nouveau code de Google » comme une mesure : c'est une déclaration orale de Sundar Pichai lors de la conférence de résultats d'Alphabet du 29 octobre 2024, sans définition ni périmètre, par un vendeur d'outils d'IA. À citer comme déclaration de dirigeant en communication financière, jamais comme statistique.
- Ne pas utiliser les chiffres de La Fabrique du Net (« prix médian 5 200 € », « 63 % des sites sous 10 000 € ») : plateforme de mise en relation rémunérée sur les projets qu'elle apporte, page inaccessible en vérification automatisée, méthodologie et échantillon non publiés.
- Ne pas inventer de fourchette pour le prix d'une cession de droits : aucun barème public, aucune étude sectorielle, aucune source primaire n'existe. Le dire explicitement est plus crédible et plus différenciant, puis assumer nos propres ordres de grandeur en les identifiant comme observations d'agence et non comme un barème.
- Ne pas écrire « 14,3 mois de délai moyen » pour un litige de propriété intellectuelle : ce chiffre 2023 est celui des conseils de prud'hommes. Les bons chiffres du même document du ministère de la justice sont 7,3 mois en moyenne devant les tribunaux judiciaires, dont 3,7 mois en référé et 8,1 mois au fond, avec un âge du stock de 18,3 mois au 31/12/2023. Ce piège est actif dans les résultats de recherche.
- Ne pas présenter le constat d'huissier (commissaire de justice) sur internet comme un tarif réglementé à 200-500 € HT : les constats relèvent des honoraires libres, contrairement aux significations et mesures d'exécution tarifées aux articles A444-10 à A444-52 du Code de commerce. Écrire qu'il s'agit d'un honoraire libre à faire chiffrer au cas par cas.
- Ne pas citer de statistique d'équipement des entreprises en site web hors INSEE : seule l'enquête TIC 2023 est solide (69 % des entreprises de 10 salariés ou plus disposent d'un site, en propre ou partagé), et son champ exclut les TPE de moins de 10 salariés — le préciser à chaque emploi. Les chiffres concurrents (77 %, 48 %, 35 %…) émanent de vendeurs de sites ou de plateformes d'apport d'affaires et sont mutuellement incompatibles.
- Ne pas confondre cession et licence exclusive dans le modèle de clause : une licence, même exclusive et perpétuelle, n'est pas un transfert de propriété et ne survit pas toujours à une liquidation. La section 12 doit nommer la différence.
- Ne pas promettre qu'une clause de cession « pleine et entière » couvre tout : rappeler à chaque occurrence que les briques tierces sous licence, le code non protégeable et les apports non détenus par le prestataire en sortent, et renvoyer à l'annexe des éléments non cédables plutôt que de recopier la liste.
- Ne pas donner de conseil juridique personnalisé : disclaimer explicite en fin d'article, renvoi à un avocat en propriété intellectuelle pour la rédaction définitive et pour toute procédure, et prudence sur les questions non tranchées (protégeabilité du code généré par IA, notamment).
- Cohérence des chiffres du fil rouge : 21 600 € HT payés en 2023, 9 000 € HT demandés pour le rachat des droits, 14 500 € HT de redéveloppement, 11 salariés, 40 à 60 demandes par mois, licence de thème à 79 €/an. Ces montants doivent être identiques dans le texte, les tableaux, les encadrés et la FAQ, et l'arbitrage final doit rester le même d'un bout à l'autre.
- Pitch IA limité à 2-3 occurrences sur toute la page, formulées différemment : le sujet du guide est juridique, pas commercial, et la section 7 en consomme déjà une.
- Ne pas transformer la section 5 (SaaS et no-code) en argumentaire anti-plateforme : elle répond à une question de droit (il n'y a pas de code source cessible) et doit rester utile au lecteur qui reste sur sa plateforme, avec sa propre checklist d'export et de réversibilité.
- Ne pas laisser le guide s'arrêter à « il aurait fallu prévoir une clause » : le lecteur arrive précisément parce qu'il ne l'a pas fait. Les sections 10, 13 et 14 doivent être actionnables sans contrat préexistant.

## Questions utilisateurs relevées

- J'ai payé mon site 15 000 euros à une agence : est-ce qu'il est à moi, oui ou non ?
- Mon agence refuse de me donner les accès et le code source, elle en a le droit ?
- Je veux changer de prestataire l'an prochain : qu'est-ce que je peux emporter avec moi, concrètement ?
- Dans mon devis il n'y a rien d'écrit sur les droits. Je fais quoi maintenant ?
- Comment je repère, en lisant mon contrat, si les droits m'ont été cédés ou pas ?
- Combien ça coûte de racheter les droits sur mon site après coup, si l'agence accepte ?
- Le nom de domaine a été déposé par l'agence à son nom : comment je le récupère ?
- Mes textes, mes photos et mon logo m'appartiennent quand même, non ?
- Si mon agence dépose le bilan ou disparaît du jour au lendemain, je perds mon site ?
- Mon site est sur Shopify (ou Wix) : est-ce que la question de la propriété se pose pareil ?
- Le développeur m'a dit qu'il avait fait le site en grande partie avec l'IA : qui est propriétaire dans ce cas ?
- L'agence me dit que le site m'appartient mais qu'elle garde le code : c'est possible, ça ?
- Est-ce que je peux faire modifier mon site par un autre prestataire sans l'accord de celui qui l'a créé ?
- Qu'est-ce que je dois exiger noir sur blanc avant de signer le prochain devis ?
- Si je vends mon entreprise, est-ce que le site part avec, ou l'acheteur va découvrir un problème ?
- C'est mon salarié qui a développé le site en interne : il appartient à lui ou à ma société ?
- Mon prestataire a fait appel à un freelance à l'étranger : est-ce que la cession qu'il me propose tient vraiment ?

## Concurrents analysés

### Qui est propriétaire du code source développé par un prestataire ? (guide 2026)

https://atiasavocats.com/propriete-code-source-prestataire/

- Mots estimés : 5500
- Forces : La page la plus complète du top 10 et la seule datée 2026. Seule à traiter le L113-9 (salarié), les composants open source et l'angle due diligence / M&A. Tableau de risques et méthodologie en 5 étapes réellement actionnables. Bonne FAQ.
- Faiblesses : Zéro jurisprudence référencée (arrêts évoqués sans juridiction ni date) alors que c'est le seul argument qui convainc un dirigeant. Aucun modèle de clause conforme L131-3 copiable. Rien sur le nom de domaine, l'hébergement, les accès admin, le code généré par IA, la chaîne de sous-traitance, le prix d'une cession ni la procédure concrète de récupération. Bloc auto-promotionnel inséré au milieu du contenu éditorial.
- Conflit d'intérêt : Cabinet d'avocats vendant précisément la rédaction de contrats IT et l'audit de cession : la page conclut mécaniquement 'consultez un avocat'. Conflit modéré et transparent (pas d'affiliation), mais oriente vers le rendez-vous plutôt que vers l'autonomie du lecteur.

### Code source et propriété intellectuelle : le guide complet pour protéger vos créations logicielles

https://www.victorisavocat.com/blog/code-source-et-propriete-intellectuelle-le-guide-complet-pour-proteger-vos-creations-logicielles

- Mots estimés : 7800
- Forces : Le plus volumineux du top 10. Seule page à couvrir l'entiercement (escrow), la contamination copyleft GPL, le dépôt APP, la décompilation (L122-6-1) et le secret des affaires. Couvre L112-2, L122-6, L131-3, salarié vs prestataire.
- Faiblesses : Titre et angle orientés 'protéger VOS créations' : la page s'adresse à l'éditeur de logiciel, pas au dirigeant qui a commandé un site et se fait retenir son code. Aucun arrêt cité en 7 800 mots. Les sections Python/JavaScript/Java sont du remplissage SEO sans valeur juridique. Rien sur nom de domaine, hébergement, accès admin, code IA, sous-traitance offshore, coût du dépôt APP ou de l'escrow, ni procédure de récupération.
- Conflit d'intérêt : Cabinet d'avocats d'affaires parisien ; contenu de lead generation B2B avec CTA 'Prendre rendez-vous'. Le volume sert visiblement le positionnement SEO autant que le lecteur.

### Création de site web et propriété intellectuelle : les bons réflexes

https://www.village-justice.com/articles/creation-site-web-les-bons-reflexes,36558.html

- Mots estimés : 2700
- Forces : Une des rares pages à relier la propriété du code au nom de domaine (enregistrement, Whois, renouvellement, DNS). Cite L113-1 CPI, un arrêt de la Cour de cassation du 12 mai 2011 (vente-privee.com) et le parasitisme (art. 1240 c. civ.). Rappelle l'interdiction de céder des œuvres futures.
- Faiblesses : Publié en 2020 et jamais actualisé : rien sur l'IA, rien sur le SaaS/no-code. Mélange trois sujets sans rapport (PI, sécurité, mentions légales) ce qui dilue la réponse à la question posée. L131-3 n'est pas traité comme tel alors que c'est le cœur du problème. Aucun modèle de clause, aucun prix, aucune procédure de conflit, aucun escrow. Vocabulaire de juriste pour juristes, illisible pour un dirigeant de PME.
- Conflit d'intérêt : Autrice conseil en propriété industrielle chez Novagraaf, cabinet vendant dépôts et audits PI. Village de la Justice est une plateforme d'autopromotion pour professionnels du droit : chaque article est un outil d'acquisition client.

### Clients de web-agency : un site Web appartient à celui qui l'a développé

https://www.journaldunet.com/adtech/1123543-clients-de-web-agency-un-site-web-appartient-a-celui-qui-l-a-developpe/

- Mots estimés : 1050
- Forces : Titre le plus honnête et le plus percutant de la SERP : il énonce directement la contre-intuition qui fait mal. Cite une décision précise (TGI Paris, 10 novembre 2011, Victoriaa / Linkeo.com) et expose correctement le formalisme L131-3 (étendue, destination, lieu, durée) et l'interprétation stricte.
- Faiblesses : 1 050 mots : pose le problème, ne le résout pas. Aucune clause type, aucune marche à suivre pour le dirigeant déjà pris au piège. Rien sur nom de domaine, hébergement, accès admin, salarié, open source, IA, escrow, coût, litige. Jurisprudence de 2011 sur une page servie en 2026. Média généraliste business : pas de mise à jour, pas de responsabilité éditoriale juridique.
- Conflit d'intérêt : Rédigé par le cabinet Romain Darriere (avocat) en tribune sur un média tiers : format de notoriété professionnelle. Aucune affiliation, mais l'article est une vitrine de compétence contractuelle.

### La propriété des codes sources d'un logiciel, d'un site ou d'une application internet

https://www.legavox.fr/blog/maitre-anthony-bem/propriete-codes-sources-logiciel-site-9621.htm

- Mots estimés : 1200
- Forces : La page la mieux sourcée du top 10 en jurisprudence : T. com. Paris 15/10/2004 (Conex c/ Tracing Server), TGI Paris 3e ch. 05/03/2008 (n° 05/18627), Cass. com. 15/11/2011 (n° 10-26617). Numéros de pourvoi vérifiables, ce que ne fait aucune autre page.
- Faiblesses : Publié en 2012, dernière retouche 2018 : huit ans de retard sur un sujet où le contexte technique a changé du tout au tout (SaaS, no-code, IA, dépôts Git). Aucune structure Hn, mur de texte juridique sans traduction pour un non-juriste. Aucun des sujets opérationnels : domaine, hébergement, accès, salarié, open source, sous-traitance, escrow, prix, récupération.
- Conflit d'intérêt : Blog d'avocat hébergé sur Legavox, annuaire juridique monétisé. Se termine par une offre explicite de consultation ('je suis à votre disposition pour toute action') avec téléphone et adresse.

### Pas de cession de droits, pas de remise des codes sources

https://www.baldassari-avocats.com/pas-de-cession-de-droits-pas-de-remises-des-codes-sources/

- Mots estimés : 850
- Forces : Cas concret daté et nommé, exactement le format qui parle à un dirigeant ('une PME a perdu, voilà pourquoi'). Court et lisible.
- Faiblesses : Simple commentaire d'arrêt de 850 mots signé par une stagiaire : ce n'est pas un guide, c'est une brève de veille recyclée en page SEO. Une seule décision, de première instance, de 2016. Aucune réponse à 'et moi, je fais quoi ?'. Zéro contenu sur domaine, hébergement, accès, salarié, open source, IA, escrow, clause type, prix, procédure.
- Conflit d'intérêt : Cabinet d'avocats marseillais, CTA 'Prendre rendez-vous' et capture newsletter en pied de page. Contenu de veille servant l'acquisition.

### La simple commande d'un site web n'emporte pas la cession des codes sources au client

https://dwavocat.blogspot.com/2016/12/la-simple-commande-dun-site-web.html

- Mots estimés : 900
- Forces : Analyse plus fine que Baldassari sur la même décision, par une avocate reconnue en droit du numérique (Bénédicte Deleporte). Titre parfaitement aligné sur l'intention de recherche.
- Faiblesses : Page de décembre 2016 sur un Blogspot, jamais actualisée, sans structure ni design : signal de fraîcheur et de crédibilité très faible en 2026. Doublon éditorial avec Baldassari (même jugement, même angle) : la SERP contient deux fois la même information. Recommandations finales génériques ('prévoyez une clause') sans jamais donner le texte de la clause. Aucun des angles opérationnels manquants ailleurs.
- Conflit d'intérêt : Blog de cabinet (Deleporte Wentz Avocat), notoriété professionnelle. Pas d'affiliation ni d'offre tarifée.

### Contrat de cession de code source : comment le rédiger ?

https://www.captaincontrat.com/protection-des-creations/proteger-ses-creations/redaction-dun-contrat-de-cession-de-logiciel

- Mots estimés : 1300
- Forces : Angle 'comment rédiger' correspondant à une intention transactionnelle réelle. Aborde la livraison du logiciel et les garanties, que les pages d'avocats survolent. Relecture éditoriale affichée (auteur + relecteur nommés).
- Faiblesses : Défaut rédhibitoire : la page promet un contrat de cession et ne cite même pas l'article L131-3 CPI, c'est-à-dire la règle dont dépend la validité de ce contrat. Aucune jurisprudence. Aucun modèle de clause complet malgré le titre 'comment le rédiger'. Rien sur domaine, hébergement, accès admin, IA, open source, salarié, escrow, prix.
- Conflit d'intérêt : Le plus marqué du top 10. Legaltech qui vend exactement la prestation décrite dans l'article : le contenu est calibré pour rendre la rédaction en autonomie anxiogène et pousser vers l'abonnement / la mise en relation avocat. Rédigé par une juriste junior, pas par l'avocat relecteur. CTA commerciaux multiples, dont une offre 'création d'entreprise 0 €' sans aucun rapport avec le sujet.

### Nos droits d'auteurs pour la création de site internet

https://stephenson.agency/nos-droits-dauteurs-pour-la-creation-de-site-internet/

- Mots estimés : 2700
- Forces : Aborde deux points concrets ignorés ailleurs : la propriété du nom de domaine et la signature de l'agence en pied de page. Ton accessible.
- Faiblesses : Ce n'est pas un contenu d'information, c'est la justification par une agence de ses propres conditions générales. La page énumère cinq obligations qui protègent le prestataire, compare le code source à un tableau de Picasso pour légitimer l'interdiction de retirer la signature, puis conclut 'nous, nous précisons que vous êtes propriétaire'. Aucune mention de L131-3, aucune jurisprudence propre, rien sur la résiliation, le litige post-livraison ou la passation technique — précisément les sujets où l'agence aurait quelque chose à perdre.
- Conflit d'intérêt : Majeur et non déclaré. Agence web vendant la création de sites, qui rédige la page expliquant qui possède les sites qu'elle vend, en reprenant un article d'avocat tiers pour s'emprunter une autorité qu'elle n'a pas. Position structurellement favorable au prestataire, présentée comme neutre. CTA contact et téléphone direct.

### Qui détient la propriété intellectuelle de votre site web ?

https://poyesis.fr/blogs/qui-detient-la-propriete-intellectuelle-de-votre-site-web/

- Mots estimés : 1800
- Forces : La liste des 7 éléments d'un site à sécuriser est le format le plus concret de la SERP pour un dirigeant. Une décision citée.
- Faiblesses : Article de 2023 s'appuyant sur une seule décision de 2011. Ne cite pas L131-3. Argumentation en deux temps typique du contenu de vente : dramatiser le risque que l'agence garde les droits, puis se présenter comme l'agence qui les cède. Rien sur domaine, hébergement, accès, IA, open source, escrow, clause type, coût, litige.
- Conflit d'intérêt : Majeur. Agence de développement web produisant un contenu qui décrit un risque agence pour vendre ses propres services comme la solution, avec CTA de prise de contact projet en fin d'article.

### À qui appartient un site web ?

https://www.tyseo.net/qui-est-proprietaire-site-web.php

- Mots estimés : 480
- Forces : Répond en 480 mots à la question posée, sans détour. Position affichée pro-client.
- Faiblesses : 480 mots sur un sujet à fort enjeu financier : contenu de remplissage. Aucune référence légale (ni L131-3, ni L113-1, ni L113-9), aucune jurisprudence, aucune procédure. Surtout, la thèse centrale — 'il est normal que le client qui a payé détienne les droits d'exploitation' — est juridiquement fausse en droit français par défaut : la page rassure au lieu d'alerter, ce qui est le pire service à rendre à un dirigeant sur ce sujet.
- Conflit d'intérêt : Agence de marketing digital (Annecy) vendant création de sites et SEO. CTA 'contactez-nous pour un second avis' : le contenu sert d'accroche de prospection.

