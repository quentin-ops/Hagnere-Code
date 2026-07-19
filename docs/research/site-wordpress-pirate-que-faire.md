# Recherche — site-wordpress-pirate-que-faire

> Produit le 19/07/2026 par le pipeline de la charte qualité (SERP → faits sourcés → angle).
> Document de travail interne, non publié. Cible de rédaction : 4 500 à 5 500 mots de corps
> d'article, hors FAQ et sources.

---

## Angle unique

Les douze pages qui se disputent la requête « site WordPress piraté » sont écrites par des
agences, des freelances ou des hébergeurs qui vendent le nettoyage. Elles répondent toutes à la
même question — *comment désinfecter* — et toutes s'arrêtent au même endroit : la remise en ligne.
Or un dirigeant dont le site vient d'être piraté n'a pas un problème technique, il a **quatre
horloges qui tournent en même temps** et dont trois ne sont mentionnées nulle part.

**L'angle du guide : le nettoyage est la seule chose qui n'est pas urgente.** Deux délais de
72 heures ont démarré à la seconde où vous avez pris connaissance de l'incident — la notification
à la CNIL (article 33 du RGPD) et le dépôt de plainte qui conditionne l'indemnisation de votre
assurance cyber (article L. 12-10-1 du code des assurances). Ces deux compteurs courent
week-ends et jours fériés compris, ils ne s'arrêtent pas pendant que votre prestataire travaille,
et **aucune des douze pages du SERP ne les met côte à côte**. Le SERP « WordPress piraté » et le
SERP « violation de données CNIL » sont deux univers disjoints qui ne se citent jamais. Pire :
la doctrine publique française (Cybermalveillance.gouv.fr) impose de **préserver les preuves
avant de nettoyer**, ce qui contredit frontalement l'ordre implicite de tout le marché — nettoyer
vite, remettre en ligne vite. Un nettoyage rapide détruit simultanément la preuve pénale et la
preuve assurantielle.

Le guide fait donc six choses qu'aucun concurrent ne fait :

1. **Il commence par le triage gratuit.** Distinguer en dix minutes un vrai piratage d'une
   extension cassée, d'un certificat SSL expiré ou d'une suspension pour impayé — parce qu'un
   faux positif fait payer une prestation d'urgence pour un problème à quinze minutes. Aucune
   page ne le propose : un faux positif, c'est zéro vente.
2. **Il met les quatre horloges dans un même calendrier** (CNIL 72 h, plainte 72 h, déclaration
   assureur ≥ 5 jours ouvrés, préservation des preuves avant nettoyage) avec les textes, les
   formulaires et les plafonds de sanction exacts — 10 M€ ou 2 % du CA mondial, pas 20 M€ / 4 %,
   erreur que même des publications juridiques commettent.
3. **Il donne la grille de lecture d'un devis.** Un facteur 4 entre 199 € HT et 790 € HT sur des
   prestations nommées à l'identique, relevé sur les pages officielles, et les sept variables qui
   l'expliquent. Sans cette grille, un dirigeant ne peut ni comparer deux propositions, ni repérer
   un prix d'appel destiné à être révisé.
4. **Il pose le calcul nettoyer vs reconstruire** — et déclare le conflit d'intérêt de Hagnéré
   Code en toutes lettres, parce que nous sommes exactement dans la position que nous reprochons
   aux douze autres : nous vendons du développement sur mesure. La reconstruction n'est donc
   jamais présentée comme la conclusion par défaut.
5. **Il démonte les chiffres à la source.** « 83 % des sites piratés pas à jour depuis 6 mois »,
   « 93 % des piratages via un plugin », « 30 000 sites piratés par jour », « 90 000 attaques
   par minute », « désindexation Google » : cinq statistiques qui structurent tout le marché et
   dont pas une seule ne résiste à une remontée à la source primaire. La donnée réelle dit
   l'inverse : **près de 61 % des sites infectés étaient à jour** au moment de l'infection.
6. **Il va jusqu'à J+30.** Protocole de contrôle différé, rotation des secrets tiers (Stripe,
   SMTP, Brevo, CRM, webhooks) que personne ne traite, et l'aveu qu'**aucun taux de réinfection
   général et sourçable n'existe publiquement** — ce qui est en soi l'information.

Ligne de conduite : dire ce que les concurrents cachent, démonter les chiffres bidon à la source,
assumer de déconseiller notre propre offre quand elle n'est pas le bon choix, et écrire pour un
dirigeant non technique sans jamais le prendre de haut.

---

## Trous du top 10

Quinze manques transversaux relevés sur les douze pages analysées. Les six premiers sont les
différenciateurs structurants du guide.

1. **L'obligation RGPD de notifier la CNIL sous 72 h (article 33).** Absente de 11 pages sur 12 ;
   la douzième (moncoachwp) s'en tient à une phrase sans délai, sans procédure, sans sanction. Un
   WordPress piraté avec un simple formulaire de contact, une newsletter ou des comptes clients
   WooCommerce constitue une violation de données personnelles. Le compteur démarre à la **prise
   de connaissance** — pas à l'intrusion, pas à la résolution — et court week-ends et jours fériés
   compris. Un dirigeant qui suit scrupuleusement le top 10 nettoie son site, se croit tiré
   d'affaire, et ignore qu'un délai légal a expiré.
2. **L'obligation d'informer les personnes concernées (article 34)** quand le risque est élevé —
   typiquement une boutique dont la base clients a fuité. Aucune page ne donne le critère de
   déclenchement, ni le contenu minimal du message, ni un modèle d'e-mail client. C'est pourtant
   l'action la plus redoutée et la plus mal exécutée par les dirigeants.
3. **La responsabilité contractuelle de l'hébergeur.** Aucune page n'explique ce que le client
   peut exiger (journaux d'accès, restauration, délais d'intervention, préservation des preuves),
   ce que l'hébergeur peut lui imposer (suspension unilatérale du site infecté — scénario fréquent
   et brutal), ni où passe la frontière de responsabilité en mutualisé. Les deux hébergeurs
   présents dans le top 10 sont précisément ceux qui ne peuvent pas traiter ce sujet sans
   s'exposer.
4. **L'assurance cyber et la RC Pro.** Zéro mention dans les douze pages. Beaucoup de PME
   disposent d'une extension cyber dans leur multirisque professionnelle sans le savoir, avec des
   clauses de déclaration à délai court et une exigence de conservation des preuves. Nettoyer et
   écraser l'état infecté avant de déclarer peut faire tomber la garantie. Une page (KaoriWeb) va
   jusqu'à employer le mot « assurance » pour vendre un abonnement de maintenance, sans jamais
   évoquer l'assurance qui indemnise réellement.
5. **Le recours contre le prestataire ou l'agence** qui a construit et/ou maintenait le site :
   obligation de moyens ou de résultat, clauses de maintenance, portée de la garantie,
   prescription. Aucune page ne l'aborde — et pour cause, les douze éditeurs sont eux-mêmes des
   agences, des freelances ou des hébergeurs. C'est le conflit d'intérêt le plus systématique du
   SERP, parce qu'il est invisible.
6. **L'arbitrage nettoyer vs reconstruire.** Les douze pages proposent le nettoyage, parce que
   c'est ce qu'elles vendent. Aucune ne pose le calcul économique : sur un site ancien, sans
   sauvegarde saine, avec quarante extensions dont plusieurs abandonnées, une reconstruction
   propre est parfois moins chère qu'un nettoyage suivi de deux réinfections — et définitive.
   Aucune n'évoque non plus la sortie de WordPress comme option.
7. **Le triage gratuit en amont** : distinguer en dix minutes un vrai piratage d'une panne bénigne
   (extension cassée après mise à jour, certificat SSL expiré, DNS mal propagé, blocage hébergeur
   pour impayé). Toutes les pages présupposent que le piratage est avéré, parce qu'un faux positif
   signifie zéro vente. Un dirigeant paniqué paie donc parfois une prestation d'urgence pour un
   problème à quinze minutes.
8. **La rotation des secrets tiers.** Toutes les pages disent « changez vos mots de passe »
   (WordPress, FTP, base, hébergement). Aucune ne traite les identifiants stockés dans la base ou
   dans `wp-config` : clés API Stripe/PayPal, identifiants SMTP, jetons Mailchimp/Brevo,
   connecteurs CRM, webhooks. Ce sont eux qui permettent la fraude en aval et la persistance de
   l'attaquant longtemps après un site déclaré propre.
9. **La vérification à J+30 et le taux réel de réinfection.** Toutes les pages s'arrêtent à la
   livraison « site propre ». Aucune ne donne de protocole de contrôle différé, ni de statistique
   de récidive, ni de critère objectif permettant au client de constater que la prestation a
   échoué. L'intérêt du vendeur s'arrête à la remise en ligne, pas à la persistance du résultat —
   et une seule page (EasyHoster) affiche une garantie écrite.
10. **La quantification honnête du dommage.** Une seule page chiffre la perte de CA, et c'est le
    chiffre du vendeur de l'abonnement qui l'évite. Aucune méthode n'est donnée pour qu'un
    dirigeant calcule sa propre exposition : CA quotidien du canal web, durée d'indisponibilité,
    profondeur de la perte de trafic, coût de la reconquête. Sans ce calcul, il ne peut ni
    arbitrer entre les devis ni justifier la dépense.
11. **Ce qui fait varier un devis de 149 € à 990 € HT** pour une prestation nommée à l'identique —
    un facteur 6,6 constaté à l'intérieur même de ce top 10. Aucune page ne donne la grille de
    lecture : avec ou sans sauvegarde saine, ancienneté de l'infection, base de données touchée ou
    non, e-commerce, multisite, blacklist Google en cours, urgence.
12. **Le dépôt de plainte** : utilité réelle, compétence (commissariat, gendarmerie, THESEE,
    PHAROS), pièces à conserver, articulation avec la déclaration d'assurance et la notification
    CNIL. Deux pages y font une allusion d'une demi-phrase, aucune n'explique la démarche ni si
    elle sert à quelque chose.
13. **La chronologie de la sanction Google.** Les délais annoncés vont de « 24-72 h » à
    « 1-3 jours » à « 4-6 mois » selon les pages, sans jamais distinguer trois choses différentes :
    la levée de l'avertissement Safe Browsing, la désindexation des pages spam injectées, et la
    récupération du positionnement. Le dirigeant sort de ces lectures avec une attente calibrée
    sur le chiffre le plus optimiste.
14. **Les statistiques circulantes non corroborées.** « 83 % des sites piratés pas mis à jour
    depuis plus de 6 mois » et « 93 % des piratages via un plugin ou thème non à jour », attribués
    à une « étude Sucuri 2025 », apparaissent dans plusieurs pages et n'ont pas pu être retrouvés
    dans les rapports Sucuri ni Patchstack. Aucune page du SERP ne source de manière vérifiable, et
    aucune ne distingue une vulnérabilité d'une exploitation.
15. **Le volet humain et organisationnel** : que dire aux salariés, aux clients qui appellent, aux
    partenaires ; qui décide de couper le site ; que faire si le dirigeant n'a pas les accès
    (agence injoignable, ancien prestataire fâché, nom de domaine chez un tiers). Ce dernier cas —
    perte de contrôle administratif — bloque en pratique une intervention sur deux et n'est traité
    nulle part.

---

## Faits sourcés

Chaque fait porte son chiffre exact, sa source primaire, son URL, sa date de relevé et son niveau
de fiabilité. **Un fait non sourcé n'existe pas.** Les commentaires de fiabilité sont à intégrer
au guide quand ils changent la lecture du chiffre.

### Volumétrie des vulnérabilités WordPress

- **11 334 nouvelles vulnérabilités en 2025, soit +42 % en un an**
  - Source : Patchstack, « State of WordPress Security in 2026 » —
    https://patchstack.com/whitepaper/state-of-wordpress-security-in-2026/ — données mises à jour
    le 25/02/2026
  - Fiabilité : **solide**
  - Source primaire, méthodologie explicitée, cohérente avec la tendance Wordfence (+68 % en
    2024). **Attention** : Patchstack est un vendeur de sécurité qui opère lui-même une base de
    vulnérabilités — il a un intérêt direct à ce que le nombre paraisse élevé. Le chiffre reste
    utilisable parce qu'il compte des *divulgations* (fait objectif et vérifiable), pas des
    piratages.

- **91 % des vulnérabilités 2025 dans les extensions, 9 % dans les thèmes, 6 vulnérabilités dans
  le cœur de WordPress (toutes de faible priorité)**
  - Source : Patchstack, « State of WordPress Security in 2026 » —
    https://patchstack.com/whitepaper/state-of-wordpress-security-in-2026/ — 25/02/2026
  - Fiabilité : **solide**
  - C'est LA donnée de répartition à citer, et elle est exacte. Point pédagogique décisif : elle
    porte sur des **vulnérabilités divulguées**, pas sur des sites effectivement piratés. Une
    vulnérabilité n'est pas une exploitation. C'est cette confusion qui alimente le faux chiffre
    « 93 % des piratages viennent d'un plugin ».

- **1 966 vulnérabilités de sévérité haute (17 % du total 2025) — plus qu'en 2023 et 2024
  cumulées**
  - Source : Patchstack, « State of WordPress Security in 2026 » —
    https://patchstack.com/whitepaper/state-of-wordpress-security-in-2026/ — 25/02/2026
  - Fiabilité : **solide**
  - Chiffre primaire, cohérent avec le total. Utile pour relativiser : **83 % des vulnérabilités
    divulguées ne sont pas de sévérité haute**, ce que les pages alarmistes omettent
    systématiquement.

- **46 % des vulnérabilités sans correctif au moment de leur divulgation publique**
  - Source : Patchstack, « State of WordPress Security in 2026 » —
    https://patchstack.com/whitepaper/state-of-wordpress-security-in-2026/ — 25/02/2026
  - Fiabilité : **moyenne**
  - Chiffre primaire mais directement au service de l'argumentaire commercial de Patchstack, qui
    vend du « correctif virtuel » censé combler exactement ce trou. La méthodologie de
    qualification « pas de patch » n'est pas détaillée. **À citer en l'attribuant explicitement à
    Patchstack.**

- **Environ la moitié des vulnérabilités à fort impact exploitées dans les 24 h suivant la
  divulgation ; médiane pondérée de 5 heures avant première exploitation sur les failles les plus
  ciblées**
  - Source : Patchstack, « State of WordPress Security in 2026 » —
    https://patchstack.com/whitepaper/state-of-wordpress-security-in-2026/ — 25/02/2026
  - Fiabilité : **moyenne**
  - Donnée issue de la télémétrie propriétaire de Patchstack, non reproductible par un tiers, et
    qui sert son offre. La notion de « médiane pondérée » n'est pas définie dans le document
    public. Utilisable pour illustrer l'urgence des mises à jour, **à condition de l'attribuer** et
    de ne pas la présenter comme une mesure indépendante.

### Ce qu'on observe sur les sites réellement infectés

- **95,5 % des infections détectées sur WordPress, sur une base de 39 594 sites nettoyés en 2023**
  - Source : Sucuri (GoDaddy), « 2023 Hacked Website & Malware Threat Report » —
    https://sucuri.net/reports/2023-hacked-website-report/ — publié en juin 2024
  - Fiabilité : **moyenne**
  - Chiffre primaire avec taille d'échantillon annoncée, **mais** l'échantillon est composé des
    clients Sucuri et des utilisateurs de son scanner — pas d'un échantillon représentatif du web.
    Sucuri étant historiquement l'outil de référence de l'écosystème WordPress, sa clientèle est
    mécaniquement sur-WordPressée. Ce chiffre mesure la clientèle de Sucuri, pas le web. **Ne
    jamais l'écrire sous la forme « 95 % des sites piratés dans le monde sont sous WordPress ».**

- **39,1 % des CMS étaient dans une version obsolète au moment de l'infection — donc près de 61 %
  des sites infectés étaient à jour**
  - Source : Sucuri (GoDaddy), « 2023 Hacked Website & Malware Threat Report » —
    https://sucuri.net/reports/2023-hacked-website-report/ — juin 2024
  - Fiabilité : **solide**
  - **C'est le chiffre le plus important du guide** et le contre-pied exact du discours dominant.
    Il démonte le « 83 % des sites piratés pas à jour depuis 6 mois ». Cohérent dans le temps :
    Sucuri mesurait 39,3 % en 2017 et 36,7 % en 2018. La mise à jour est nécessaire mais ne suffit
    pas — message honnête, et vendeur de personne.

- **49,21 % des sites compromis contenaient au moins une porte dérobée ; 20,30 % du spam SEO ;
  47,97 % un logiciel malveillant générique**
  - Source : Sucuri (GoDaddy), « 2023 Hacked Website & Malware Threat Report » —
    https://sucuri.net/reports/2023-hacked-website-report/ — juin 2024
  - Fiabilité : **solide**
  - Donnée primaire, essentielle pour expliquer à un dirigeant pourquoi « supprimer le fichier
    infecté » ne suffit pas : **une compromission sur deux laisse un moyen de retour**. C'est le
    fondement technique de l'arbitrage nettoyer/reconstruire et de la vérification à J+30.

- **WordPress équipe 41,2 % de l'ensemble des sites web et 59,1 % des sites dont le CMS est
  identifié**
  - Source : W3Techs — https://w3techs.com/technologies/details/cm-wordpress — relevé du 19/07/2026
  - Fiabilité : **solide**
  - Source de référence indépendante (ne vend pas de sécurité), mise à jour quotidienne. Le chiffre
    **décroît lentement** : il était de 43 % en 2023-2024, valeur encore recopiée partout en 2026.
    **Toujours dater ce chiffre dans le guide.**

### Le cadre CNIL et la réalité des notifications

- **6 167 notifications de violations de données en 2025, +9,5 % sur un an, plus haut niveau jamais
  atteint**
  - Source : CNIL, Rapport annuel 2025 — https://www.cnil.fr/fr/rapport-annuel-2025 — publié le
    18/05/2026
  - Fiabilité : **solide**
  - Source primaire, autorité publique, aucun intérêt commercial. **Chiffre décisif** : il prouve
    que la notification est une démarche courante et normale, pas un aveu exceptionnel — argument
    qui lève le principal frein psychologique du dirigeant.

- **Un incident déclaré sur deux en 2025 relève d'un piratage**
  - Source : CNIL, Rapport annuel 2025 — https://www.cnil.fr/fr/rapport-annuel-2025 — 18/05/2026
  - Fiabilité : **solide**
  - Établit le lien direct entre « site piraté » et « violation de données notifiable » —
    exactement le pont que les douze pages du top 10 ne font jamais.

- **83 sanctions, 487 millions d'euros d'amendes, 20 150 plaintes reçues (+10 %) en 2025**
  - Source : CNIL, Rapport annuel 2025 — https://www.cnil.fr/fr/rapport-annuel-2025 — 18/05/2026
  - Fiabilité : **solide**
  - Permet de calibrer honnêtement le risque : **83 sanctions pour 6 167 violations notifiées**. La
    probabilité d'être sanctionné après une notification de bonne foi est faible. C'est un argument
    POUR notifier, pas un épouvantail.

- **5 000 000 € — sanction CNIL contre France Travail, décision du 22/01/2026, pour manquement à
  l'obligation de sécurité (article 32 RGPD)**
  - Source : CNIL —
    https://www.cnil.fr/fr/violation-de-donnees-sanction-5millions-france-travail — décision du
    22/01/2026
  - Fiabilité : **solide**
  - Griefs retenus : authentification insuffisamment robuste, journalisation insuffisante,
    habilitations trop larges, après usurpation de comptes de conseillers CAP EMPLOI. Cas d'école
    pour une PME : **la sanction porte sur les mesures de sécurité en amont** (mots de passe,
    journaux, droits d'accès), pas sur le piratage lui-même. Le défaut de notification n'était pas
    un grief ici — **à ne pas surinterpréter**.

- **72 heures à compter de la prise de connaissance pour notifier la CNIL (article 33 RGPD) ;
  au-delà, la notification doit être motivée**
  - Source : CNIL, « Notifier une violation de données personnelles » —
    https://www.cnil.fr/fr/notifier-une-violation-de-donnees-personnelles — formulaire :
    https://notifications.cnil.fr/notifications/
  - Fiabilité : **solide**
  - Trois points que le guide doit expliciter et qu'aucune page du SERP ne donne : le compteur part
    de la **prise de connaissance** (ni de l'intrusion, ni de la résolution) ; il court **week-ends
    et jours fériés inclus** ; une **notification initiale incomplète est expressément prévue** et
    doit être complétée ensuite.

- **Registre interne obligatoire dans 100 % des cas, même sans notification (article 33.5 RGPD)**
  - Source : CNIL, « Notifier une violation de données personnelles » —
    https://www.cnil.fr/fr/notifier-une-violation-de-donnees-personnelles
  - Fiabilité : **solide**
  - Une notification n'est pas obligatoire si la violation n'est pas susceptible d'engendrer un
    risque pour les droits et libertés. Mais le responsable de traitement doit **dans tous les
    cas** documenter la violation dans un registre interne : nature, catégories et nombre de
    personnes concernées, conséquences probables, mesures prises. Obligation totalement absente du
    SERP et pourtant systématique. C'est l'action à recommander même au dirigeant qui conclut à
    l'absence de risque : elle est **gratuite, prend vingt minutes**, et constitue la seule preuve
    de sa diligence si la CNIL contrôle plus tard.

- **Information des personnes concernées obligatoire en cas de risque élevé (article 34 RGPD) —
  contenu minimal : nature de la violation, contact du DPO ou point de contact, conséquences
  probables, mesures prises et recommandations**
  - Source : CNIL, « Violations de données personnelles : les règles à suivre » —
    https://www.cnil.fr/fr/violations-de-donnees-personnelles-les-regles-suivre
  - Fiabilité : **solide**
  - Base juridique du modèle d'e-mail client à fournir dans le guide. Le message doit décrire la
    violation **en termes clairs et simples**. Trois exceptions (art. 34.3) : données
    chiffrées/incompréhensibles, mesures ultérieures neutralisant le risque élevé, effort
    disproportionné (auquel cas une communication publique se substitue). La CNIL peut par ailleurs
    **imposer** l'information si le responsable a conclu à tort qu'elle n'était pas nécessaire
    (art. 34.4).

- **Plafond de sanction : 10 millions d'euros ou 2 % du CA annuel mondial (article 83.4 a RGPD) —
  PAS 20 M€ / 4 %**
  - Source : RGPD art. 83.4 a), qui vise « les articles 8, 11, 25 à 39, 42 et 43 » — texte
    consolidé : https://www.privacy-regulation.eu/fr/83.htm
  - Fiabilité : **solide**
  - Vérifiable directement dans le texte : les articles 32, 33 et 34 étant compris dans la
    fourchette « 25 à 39 », ils relèvent du **plafond bas**. Le plafond de 20 M€ / 4 % (art. 83.5)
    vise les principes, les bases légales et les droits des personnes — pas la sécurité ni la
    notification. Erreur répandue jusque dans des publications juridiques.

### Plainte, assurance, sanction pénale

- **72 heures pour déposer plainte, sous peine de perte de la garantie d'assurance cyber — en
  vigueur depuis le 24/04/2023**
  - Source : Article L. 12-10-1 du code des assurances, créé par la loi n° 2023-22 du 24 janvier
    2023 (LOPMI), art. 5 — analyse :
    https://adaltys.com/la-lopmi-introduit-le-nouvel-article-l12-10-1-du-code-des-assurances-prevention-des-risques-en-cybercriminalite-et-gestion-de-crise/
  - Fiabilité : **moyenne** — voir vérifications bloquantes
  - Le versement d'une indemnité au titre d'une cyberattaque est subordonné au dépôt d'une plainte
    auprès des autorités compétentes **dans les 72 heures suivant la connaissance de l'atteinte**.
    Ne s'applique qu'aux personnes morales et aux personnes physiques agissant à titre
    professionnel. Le contenu de la règle est constant et concordant sur toutes les sources
    juridiques consultées (cabinets d'avocats, courtiers), **mais la page Légifrance n'a pas pu
    être ouverte** (404 sur trois identifiants testés). **C'est LE fait qui manque à 12 pages sur
    12 : il existe deux compteurs de 72 h distincts (CNIL et plainte/assurance), qui partent au
    même moment et qu'aucun prestataire de nettoyage ne mentionne.**

- **3 ans d'emprisonnement et 100 000 € d'amende pour accès ou maintien frauduleux ; 5 ans et
  150 000 € en cas de suppression, modification de données ou altération du fonctionnement**
  - Source : Article 323-1 du code pénal, version en vigueur depuis le 26/01/2023 (loi n° 2023-22
    du 24 janvier 2023, art. 6) —
    https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000030939438/
  - Fiabilité : **solide**
  - Vérifié sur Légifrance, source primaire. **Attention** : de nombreuses pages françaises citent
    encore 30 000 € ou 60 000 €, montants antérieurs à la réforme de 2023. Fonde la qualification
    pénale des faits pour le dépôt de plainte.

- **THESEE : 0 % accessible aux personnes morales**
  - Source : Ministère de l'Intérieur, Ma Sécurité —
    https://www.masecurite.interieur.gouv.fr/fr/demarches-en-ligne/thesee-arnaques-internet-plainte-en-ligne
    — « Pour les professionnels, vous devrez vous déplacer en commissariat ou en brigade de
    gendarmerie »
  - Fiabilité : **solide**
  - Formulation officielle explicite. Corrige une erreur que le guide risquait de commettre : un
    dirigeant qui perdrait 48 h à tenter une plainte en ligne inaccessible **manquerait le délai de
    72 h de l'article L. 12-10-1 et perdrait sa garantie d'assurance**. La plainte physique est la
    seule voie pour une entreprise.

- **PHAROS : signalement ≠ plainte**
  - Source : Ministère de l'Intérieur — https://www.internet-signalement.gouv.fr/
  - Fiabilité : **solide**
  - PHAROS est un service de signalement de contenus illicites qui centralise, recoupe et oriente
    vers les services d'enquête. Distinction opérationnelle décisive et jamais faite dans le SERP :
    un dirigeant qui « signale à PHAROS » et croit avoir porté plainte n'a satisfait **ni**
    l'exigence de l'assureur (art. L. 12-10-1) **ni** aucune démarche pénale.

### Google : les trois délais qu'on vous vend comme un seul

- **Instruction d'une demande de réexamen : environ 1 jour pour le hameçonnage, quelques jours pour
  un logiciel malveillant, jusqu'à plusieurs semaines pour un site piraté avec du spam. Retrait des
  avertissements sous 72 h APRÈS validation.**
  - Source : Google Search Console Help — https://support.google.com/webmasters/answer/9044101 et
    Google web.dev, « Request a review » — https://web.dev/articles/request-a-review — consultés le
    19/07/2026
  - Fiabilité : **solide**
  - Source primaire (Google lui-même). **C'est la donnée qui règle le désordre du SERP** (« 24-72 h »
    vs « 1-3 jours » vs « 4-6 mois »). Elle permet de distinguer les trois choses que les douze
    pages confondent : (1) la levée de l'avertissement Safe Browsing, (2) la désindexation des
    pages spam injectées, (3) la récupération du positionnement — **ces deux dernières n'étant
    couvertes par aucun engagement de délai de Google**.

- **Une seule demande de réexamen à la fois ; risque de classement en « récidiviste »**
  - Source : Google Search Console Help — https://support.google.com/webmasters/answer/9044101 —
    consulté le 19/07/2026
  - Fiabilité : **solide**
  - Google avertit qu'il ne faut pas soumettre une nouvelle demande avant d'avoir reçu la décision
    sur la précédente : une demande déposée alors que le problème n'est pas corrigé **allonge le
    délai de traitement suivant** et peut faire classer le site comme récidiviste. Contre-intuitif
    et opérationnellement critique : le réflexe du dirigeant paniqué (redemander toutes les douze
    heures) aggrave sa situation. Absent de tout le SERP.

### L'hébergeur : ce que dit vraiment le contrat

- **Suspension de plein droit et sans préavis (clause 5.3.4)**
  - Source : OVHcloud, « Conditions particulières d'hébergement web », version du 19/11/2020 —
    https://www.ovh.com/fr/support/documents_legaux/conditions_particulieres_hebergement_web.pdf —
    clause 5.3.4, extraite du PDF le 19/07/2026
  - Fiabilité : **solide**
  - Citation verbatim : une utilisation non conforme « peut exposer le Client à une suspension du
    Service totale ou partielle, de plein droit et sans préavis afin de garantir une qualité de
    service acceptable à l'ensemble des clients de la plate-forme ». Répond exactement au trou
    n° 3 : **en mutualisé, l'hébergeur peut couper le site infecté unilatéralement et sans préavis,
    et c'est contractuellement prévu.** Les deux hébergeurs du top 10 ne peuvent pas traiter ce
    sujet.

- **100 % de la charge de sauvegarde sur le client (clauses 2.6 et 5.1.4)**
  - Source : OVHcloud, « Conditions particulières d'hébergement web », version du 19/11/2020 —
    https://www.ovh.com/fr/support/documents_legaux/conditions_particulieres_hebergement_web.pdf —
    clauses 2.6 et 5.1.4, extraites le 19/07/2026
  - Fiabilité : **solide**
  - Citations verbatim : « Il appartient au Client de prendre toutes mesures nécessaires à la
    sauvegarde de ses Données afin d'être en mesure de les restaurer en cas de perte ou de
    détérioration » (2.6) ; le client « confirme posséder l'ensemble des connaissances techniques
    nécessaires pour assurer une administration correcte des ressources » (5.1.4). **Détruit
    l'illusion la plus coûteuse du dirigeant de PME** (« mon hébergeur a des sauvegardes, je suis
    couvert ») : les sauvegardes commerciales de l'hébergeur sont un service annexe, souvent limité
    à quelques jours ou quelques semaines glissantes — donc potentiellement déjà infectées quand
    l'intrusion est ancienne. Détermine directement l'arbitrage nettoyer vs reconstruire.

- **Injection SQL, force brute et exploitation de failles explicitement hors périmètre de
  protection (clause 7.3) ; obligation de moyens (7.4)**
  - Source : OVHcloud, « Conditions particulières d'hébergement web », version du 19/11/2020 —
    https://www.ovh.com/fr/support/documents_legaux/conditions_particulieres_hebergement_web.pdf —
    clauses 7.3, 7.4 et 7.11, extraites le 19/07/2026
  - Fiabilité : **solide**
  - Citations verbatim. La clause 7.11 précise que la protection « ne dispense en aucun cas le
    Client de procéder à la sécurisation de son Service ». Autrement dit : **les vecteurs qui
    piratent réellement un WordPress sont nommément exclus de la protection de l'hébergeur.** Trace
    la frontière de responsabilité que le trou n° 3 réclame.

### Le recours contre le prestataire

- **Prescription de 5 ans (art. 2224 du code civil) ; régime de principe : obligation de moyens
  (art. 1231-1)**
  - Source : Articles 1231-1 et 2224 du code civil —
    https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000032010123/
  - Fiabilité : **moyenne**
  - Le régime légal est solide et vérifié : l'action se prescrit par cinq ans à compter du jour où
    le titulaire a connu ou aurait dû connaître les faits lui permettant de l'exercer, et le
    prestataire de services intellectuels est en principe tenu d'une obligation de moyens, ce qui
    impose au client de prouver sa négligence. **Mais la qualification moyens/résultat dépend au
    cas par cas de la rédaction du contrat de maintenance** : une clause promettant « la sécurité
    du site » ou « les mises à jour mensuelles » peut faire basculer vers une obligation de
    résultat sur ce point précis. **À faire relire par un avocat avant publication, et à formuler
    comme une grille de lecture et non comme un pronostic.**

### La doctrine publique française

- **Ordre officiel : isoler → préserver les preuves → qualifier les données → plainte → corriger →
  remettre en ligne**
  - Source : Cybermalveillance.gouv.fr, fiche réflexe « Défiguration de site Internet » —
    https://www.cybermalveillance.gouv.fr/tous-nos-contenus/fiches-reflexes/defiguration-de-site-internet
    — consultée le 19/07/2026
  - Fiabilité : **solide**
  - Recommandations officielles : déconnecter la machine d'Internet, préserver les preuves
    (journaux du pare-feu, du serveur, du proxy ; copies physiques complètes des machines et de la
    mémoire), identifier les données susceptibles d'avoir été copiées, puis déposer plainte — la
    remise en service n'intervenant qu'après correction des failles et changement de tous les mots
    de passe. Doctrine publique française, sans intérêt commercial. **Contredit frontalement
    l'ordre implicite du SERP** (nettoyer d'abord, remettre en ligne vite) : la préservation des
    preuves précède le nettoyage. Un nettoyage qui écrase l'état infecté détruit à la fois la
    preuve pénale et la preuve assurantielle.

- **17Cyber : assistance gratuite en ligne, accessible 24/7, y compris aux TPE et PME**
  - Source : https://www.cybermalveillance.gouv.fr/ et https://www.17cyber.gouv.fr/ ; annuaire de
    prestataires de proximité : https://www.cybermalveillance.gouv.fr/diagnostic
  - Fiabilité : **solide**
  - Ressource publique gratuite **systématiquement omise par les douze pages du SERP** — et pour
    cause : elle constitue une alternative gratuite au premier diagnostic qu'elles facturent.
    Répond au trou n° 7 (triage gratuit en amont).

### Réinfection : ce qui n'existe pas

- **40 % de réinfection — famille WP-VCD uniquement**
  - Source : Sucuri, « 2019 Hacked Website Trend Report » —
    https://sucuri.net/reports/2019-hacked-website-report/
  - Fiabilité : **faible**
  - **À manier avec précaution et surtout à ne pas généraliser.** Trois réserves : le chiffre ne
    vaut que pour une seule famille de logiciel malveillant, il date de 2019 (sept ans), et le
    sous-échantillon exact de calcul n'est pas publié. C'est néanmoins la **seule** statistique de
    réinfection publiée retrouvée. **Le constat honnête à écrire dans le guide est qu'aucun taux de
    réinfection général et sourçable n'existe** — ce qui est en soi le fait marquant du trou n° 9.
    S'appuyer à la place sur la donnée solide des 49,21 % de sites compromis porteurs d'au moins
    une porte dérobée (Sucuri 2023).

---

## Chiffres à démonter

Dix statistiques qui structurent le marché et qui ne résistent pas à une remontée à la source.
À traiter dans une section dédiée du guide, avec l'origine réelle de chacune.

1. **« 83 % des sites piratés n'étaient pas mis à jour depuis plus de 6 mois » — attribué à une
   prétendue « étude Sucuri 2025 »**
   - Répété par : plusieurs pages du top 10 « WordPress piraté », reprises en cascade par des
     agences et freelances français.
   - En remontant : **cette étude n'existe pas.** Aucun rapport Sucuri ne contient ce chiffre, et
     Sucuri n'a publié aucun rapport annuel en 2025. Le 83 % provient très probablement d'une
     déformation du *Sucuri Hacked Website Report 2017*, où 83 % désignait la **part de WordPress
     parmi les sites infectés nettoyés par Sucuri** (contre 74 % au T3 2016) — une donnée de parc,
     sans aucun rapport avec l'ancienneté des mises à jour. La donnée réelle de Sucuri sur
     l'obsolescence est de **39,1 %** de CMS obsolètes au moment de l'infection en 2023 (39,3 % en
     2017 ; 36,7 % en 2018). Le chiffre circulant est donc **plus de deux fois supérieur à la
     réalité mesurée**, et il inverse le message : près de 61 % des sites infectés étaient à jour.
   - Rectification : https://sucuri.net/reports/2023-hacked-website-report/

2. **« 93 % des piratages se font via un plugin ou un thème non à jour »**
   - Répété par : plusieurs pages du top 10 ; repris par des agences vendant de la maintenance
     mensuelle.
   - En remontant : confusion entre deux notions distinctes. Le chiffre réel, publié par Patchstack,
     porte sur la **répartition des vulnérabilités divulguées** : 91 % dans les extensions et 9 %
     dans les thèmes en 2025 (93 % / 6,7 % / 0,6 % sur un exercice antérieur). Il ne dit rien du
     nombre de piratages réels : une vulnérabilité divulguée n'est pas une vulnérabilité exploitée,
     et la majorité des 11 334 vulnérabilités de 2025 n'ont jamais été exploitées — Patchstack n'en
     a jugé que **4 124, soit 36 %**, dignes d'une règle de mitigation. S'y ajoute le glissement
     « non à jour », absent de la donnée d'origine. Les vecteurs réels incluent aussi les mots de
     passe faibles, les accès FTP/SFTP compromis, les postes de travail infectés et les comptes
     d'anciens prestataires.
   - Source : https://patchstack.com/whitepaper/state-of-wordpress-security-in-2026/

3. **« 30 000 sites web sont piratés chaque jour »**
   - Répété par : circule depuis treize ans dans quasiment toutes les pages françaises et
     anglophones sur la sécurité web.
   - En remontant : chiffre de **2013**, issu de Sophos — un éditeur d'antivirus, donc un vendeur
     de sécurité — relayé par Forbes le 06/09/2013 par un auteur qui déclarait travailler pour
     Sophos. L'énoncé d'origine était en outre différent : environ 30 000 nouveaux sites étaient
     **identifiés chaque jour comme distribuant du code malveillant**, ce qui n'est ni « piratés »,
     ni « nouveaux piratages ». Aucune méthodologie n'a jamais été publiée, et le chiffre n'a jamais
     été réactualisé en treize ans alors que le web a été multiplié par plusieurs. **À ne pas
     citer.**
   - Source : https://www.forbes.com/sites/jameslyne/2013/09/06/30000-web-sites-hacked-a-day-how-do-you-host-yours/

4. **« WordPress subit 90 000 attaques par minute »**
   - Répété par : blogs d'agences et pages de vente de plugins de sécurité.
   - En remontant : attribué à Wordfence — c'est-à-dire à l'éditeur du pare-feu WordPress qui vend
     la solution censée bloquer ces attaques. Aucun rapport Wordfence daté, avec méthodologie et
     périmètre, n'a pu être retrouvé pour étayer ce chiffre précis, qui circule sans référence
     primaire depuis au moins 2020. Surtout, le mot « attaque » recouvre ici l'immense majorité de
     tentatives automatisées inoffensives (scans, tests de mots de passe) qui échouent : **le
     compteur mesure du bruit de fond Internet, pas des compromissions**. Un chiffre qui ne se
     convertit en aucune décision pour un dirigeant. **À écarter.**

5. **« WordPress représente 43 % du web »**
   - Répété par : quasiment toutes les pages françaises, y compris récentes.
   - En remontant : **valeur périmée.** Le 43 % correspond au pic de 2023-2024. Au relevé du
     19/07/2026, W3Techs mesure **41,2 %** de l'ensemble des sites et **59,1 %** des sites dont le
     CMS est identifié. La part de WordPress décroît lentement et continûment depuis 2023. Ce
     chiffre doit toujours être daté et relevé au jour de la publication.
   - Source : https://w3techs.com/technologies/details/cm-wordpress

6. **« Un défaut de notification à la CNIL est passible de 20 millions d'euros ou 4 % du chiffre
   d'affaires mondial »**
   - Répété par : de nombreux articles juridiques et pages de cabinets, ainsi que des contenus de
     sensibilisation à la cybersécurité — **l'erreur figure jusque dans des sources
     professionnelles**.
   - En remontant : faux. C'est le **plafond haut** (article 83.5), qui vise les principes du
     traitement, les bases légales et les droits des personnes. Les manquements aux articles 32
     (sécurité), 33 (notification) et 34 (information des personnes) relèvent de l'**article
     83.4 a)**, qui vise explicitement « les articles 8, 11, 25 à 39, 42 et 43 » — donc du **plafond
     bas : 10 millions d'euros ou 2 % du chiffre d'affaires annuel mondial**. Le guide doit être
     exact sur ce point, sous peine de se disqualifier auprès d'un lecteur averti tout en étant plus
     alarmiste que la loi.
   - Source : https://www.privacy-regulation.eu/fr/83.htm

7. **« Les défenses des hébergeurs ne bloquent que 12 % des attaques »**
   - Répété par : reprise médiatique du rapport Patchstack 2026 dans la presse spécialisée
     WordPress.
   - En remontant : chiffre produit par Patchstack, qui vend précisément la solution positionnée en
     remplacement des défenses d'hébergeur qu'il teste — **conflit d'intérêt direct**. Le premier
     test ne portait que sur **11 vulnérabilités**, échantillon trop petit pour généraliser. Le
     second test, au périmètre élargi, donne **26 %** et non 12 %, et Patchstack reconnaît une
     dispersion considérable entre hébergeurs : le meilleur hébergeur non-Patchstack bloquait
     **60,7 %**. Présenter « 12 % » comme la performance des hébergeurs revient à retenir la valeur
     la plus défavorable d'une étude commanditée par leur concurrent.
   - Source : https://patchstack.com/articles/myth-of-secure-hosting-only-26-percent-of-vulnerability-exploits-blocked-by-hosts/

8. **« 95 % des sites piratés dans le monde sont sous WordPress » (ou 90 %, ou 83 % selon les
   versions)**
   - Répété par : pages de vente de solutions de sécurité et articles anxiogènes sur WordPress.
   - En remontant : le chiffre réel de Sucuri (**95,5 % en 2023**) mesure la part de WordPress
     parmi les infections détectées **dans sa propre clientèle** et parmi les utilisateurs de son
     scanner — un échantillon de 39 594 sites nettoyés, structurellement sur-représentatif de
     WordPress puisque Sucuri est historiquement l'outil de référence de l'écosystème WordPress.
     **Ce n'est pas une mesure du web.** Rapporté à la part de marché réelle (59,1 % des CMS
     connus), l'écart apparent tient d'abord à la composition de l'échantillon, non à une fragilité
     intrinsèque de WordPress.
   - Source : https://sucuri.net/reports/2023-hacked-website-report/

9. **« Sortie de la liste noire Google en 24 à 72 heures »**
   - Répété par : pages commerciales de nettoyage, comme argument de vente.
   - En remontant : confusion entre **trois événements distincts** que Google documente séparément.
     (1) Le délai d'**instruction** de la demande de réexamen : « A review can take from a few days
     to a few weeks to complete » — environ un jour pour le hameçonnage, quelques jours pour un
     logiciel malveillant, **jusqu'à plusieurs semaines** pour un site piraté avec du spam. (2) Le
     **retrait effectif des avertissements**, qui intervient sous 72 h **après** que le site a été
     jugé propre — c'est de là que vient le « 72 h », mais il ne démarre qu'à la fin de
     l'instruction. (3) La **désindexation des pages spam injectées et la récupération du
     positionnement**, pour lesquelles Google ne donne **aucun** engagement de délai. Vendre
     « 24-72 h » revient à annoncer l'étape 2 en taisant les étapes 1 et 3.
   - Sources : https://support.google.com/webmasters/answer/9044101 et
     https://web.dev/articles/request-a-review

10. **« Un site piraté est désindexé de Google » / « vous perdez tout votre référencement »**
    - Répété par : argumentaire commercial récurrent des prestations d'urgence.
    - En remontant : aucune source Google ne décrit une désindexation automatique d'un site
      compromis. Les mesures documentées sont un **avertissement Safe Browsing** dans le navigateur
      et un libellé « Ce site est peut-être piraté » dans les résultats, ce qui écrase le taux de
      clic **sans supprimer l'indexation**. La désindexation concerne les **pages de spam
      injectées**, pas les pages légitimes. La perte de trafic est réelle mais elle est d'abord
      **comportementale**, et c'est pourquoi elle est largement réversible — ce que l'argumentaire
      de l'urgence a intérêt à taire.

---

## Prix relevés

Tous les montants ci-dessous proviennent de **pages officielles des éditeurs ou prestataires**,
relevées le 19/07/2026. Les montants en dollars n'incluent ni la TVA française ni le risque de
change.

### Solutions logicielles (prévention, surveillance, nettoyage inclus ou non)

- **Sucuri (GoDaddy) — plateforme complète** : Basic Platform 229 $/site/an ; Pro Platform
  339 $/site/an ; Business Platform 549 $/site/an. **Nettoyages manuels illimités inclus sur tous
  les plans.** Délai de prise en charge annoncé : 30 h (Basic), 12 h (Pro), 6 h (Business).
  Garantie satisfait ou remboursé 30 jours. Prix en USD, hors taxes françaises.
  Relevé sur https://sucuri.net/website-security-platform/signup/ le 19/07/2026.
- **Sucuri (GoDaddy) — pare-feu seul** : Basic Firewall 9,99 $/site/mois ; Pro Firewall
  19,98 $/site/mois, nettoyages manuels illimités inclus. Prix en USD.
  Relevé sur https://sucuri.net/website-security-platform/signup/ le 19/07/2026.
- **Wordfence** : Free 0 $ ; Premium 149 $/an (**pas de réponse à incident**) ; Care 590 $/an,
  incluant la réponse à incident (investigation, suppression du logiciel malveillant, sortie de
  liste noire, nettoyage SEO) **en heures ouvrées** ; Response 1 250 $/an, réponse à incident
  24/7/365 avec engagement de prise en charge sous 1 heure et objectif de résolution sous 24 h.
  Prix en USD. Relevé sur https://lp.wordfence.com/en/wordfence-plans-pricing-ga le 19/07/2026.
  **Voir vérifications bloquantes.**
- **Wordfence — supplément préproduction/développement** : 199 $ par site en supplément, pour un
  site de préproduction ou de développement rattaché à une licence Care ou Response. Relevé sur
  https://www.wordfence.com/help/incident-response-services/ le 19/07/2026. **À revérifier, voir
  vérifications bloquantes.**
- **Patchstack — plan Developer** : 69 $/mois en facturation mensuelle, ou 828 $/an en facturation
  annuelle ; 5 sites supplémentaires pour 12,50 $/mois ; 3 sièges inclus, 24 $/siège/mois au-delà.
  **IMPORTANT : ni le nettoyage de logiciel malveillant ni la réponse à incident ne sont inclus** —
  c'est une solution de prévention, pas de désinfection. Pas d'offre gratuite (premier mois offert).
  Prix en USD. Relevé sur https://patchstack.com/pricing/ le 19/07/2026.

### Prestations françaises de nettoyage

- **WPServeur — « Nettoyage & désinfection WordPress piraté » : 199,00 € HT.** Comprend le
  nettoyage, les vérifications, les mises à jour, la mise en sécurité **et la migration vers
  l'hébergement WPServeur**. Délai annoncé : 96 h maximum hors week-end. **Aucune garantie de
  reprise en cas de réinfection n'est mentionnée sur la page.** À signaler au lecteur : le tarif
  est adossé à une migration d'hébergement — c'est un prix d'appel lié à la souscription d'un
  hébergement, non une prestation de désinfection isolée.
  Relevé sur https://www.wpserveur.net/produit/wordpress-pirate-hacke/ le 19/07/2026.
- **WP Protection — trois formules** : Essentiel **349 € HT** (délai 72 h) ; Standard **490 € HT**
  (délai 48 h, avec pare-feu applicatif et double authentification) ; Urgence **790 € HT** (délai
  24 h, 7j/7). Nettoyage complet, rapport forensique et garantie « nettoyé ou remboursé » sur les
  trois formules.
  Relevé sur https://www.wp-protection.fr/agence-nettoyage-wordpress-pirate.html le 19/07/2026.

### Le constat de dispersion (cœur de la section « prix » du guide)

À partir des seules pages officielles relevées le 19/07/2026 : **de 199 € HT** (WPServeur, adossé à
une migration d'hébergement) **à 790 € HT** (WP Protection, formule Urgence 24 h) pour des
prestations nommées de façon quasi identique, **soit un facteur 4** — et le facteur atteint **6,6**
en intégrant les offres d'appel à 149 € HT relevées dans le top 10.

La variable la plus visible et la mieux documentée est le **délai d'intervention** (96 h → 72 h →
48 h → 24 h/7j), qui est aussi la principale justification des écarts affichés par les prestataires
eux-mêmes. Les six autres variables (à expliquer dans le guide, elles ne sont affichées par
personne) : présence ou non d'une sauvegarde saine, ancienneté de l'infection, base de données
touchée ou non, site e-commerce, installation multisite, blacklist Google en cours.

---

## Limites techniques et délais chiffrés

Tableau de référence pour la section « les quatre horloges ». Tous ces délais sont opposables ou
documentés par leur émetteur.

| Horloge | Durée | Point de départ | Conséquence si dépassé |
|---|---|---|---|
| Notification CNIL (art. 33 RGPD) | **72 h** | Prise de connaissance de la violation | Notification à motiver ; manquement passible de 10 M€ / 2 % du CA mondial |
| Dépôt de plainte (art. L. 12-10-1 c. assurances) | **72 h** | Connaissance de l'atteinte | Perte du droit à indemnisation cyber |
| Déclaration à l'assureur (art. L. 113-2 c. assurances) | **≥ 5 jours ouvrés** (délai contractuel, plancher légal) | Connaissance du sinistre | Déchéance de garantie selon les conditions du contrat |
| Information des personnes (art. 34 RGPD) | « Dans les meilleurs délais » — **aucun délai chiffré** | Constat d'un risque élevé | La CNIL peut imposer la communication (art. 34.4) |

Détail des points bloquants :

- **72 heures CNIL** — à compter de la **prise de connaissance**, **week-ends et jours fériés
  inclus**. Au-delà, la notification doit être motivée. Une notification initiale incomplète est
  expressément prévue et doit être complétée ensuite. Formulaire :
  https://notifications.cnil.fr/notifications/ — source :
  https://www.cnil.fr/fr/notifier-une-violation-de-donnees-personnelles (RGPD art. 33).
- **72 heures plainte** — condition légale du versement de l'indemnité d'assurance cyber,
  applicable aux **personnes morales et personnes physiques agissant à titre professionnel** —
  article L. 12-10-1 du code des assurances, créé par la loi n° 2023-22 du 24 janvier 2023
  (LOPMI), en vigueur depuis le 24/04/2023. **Disposition d'ordre public** : ni l'assureur ni
  l'assuré ne peuvent y déroger.
- **Information des personnes concernées** — « dans les meilleurs délais » lorsque la violation est
  susceptible d'engendrer un **risque élevé** ; aucun délai chiffré n'est fixé par le texte (RGPD
  art. 34). Trois exceptions : données rendues incompréhensibles (chiffrement), mesures ultérieures
  neutralisant le risque élevé, ou effort disproportionné justifiant une communication publique de
  substitution.
- **Plafond de sanction RGPD** — 10 millions d'euros ou 2 % du chiffre d'affaires annuel mondial
  total, le montant le plus élevé étant retenu (art. 83.4 a). **Ce n'est pas** le plafond de
  20 M€ / 4 % (art. 83.5).
- **Sanctions pénales de l'intrusion** — 3 ans d'emprisonnement et 100 000 € d'amende ; 5 ans et
  150 000 € en cas de suppression ou modification de données ou d'altération du fonctionnement du
  système (art. 323-1 du code pénal, version en vigueur depuis le 26/01/2023) —
  https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000030939438/
- **Délais Google** — instruction d'une demande de réexamen « de quelques jours à quelques
  semaines » : environ 1 jour (hameçonnage), quelques jours (logiciel malveillant), jusqu'à
  plusieurs semaines (site piraté avec spam) ; retrait des avertissements navigateurs et résultats
  de recherche sous **72 h après validation**. **Aucun engagement de délai** sur la désindexation
  des pages spam ni sur la récupération du positionnement. Sources :
  https://support.google.com/webmasters/answer/9044101 et https://web.dev/articles/request-a-review
- **Une seule demande de réexamen Google à la fois** — une nouvelle demande déposée avant la
  décision, ou alors que le problème n'est pas corrigé, allonge le délai de traitement suivant et
  expose au classement en « récidiviste ». https://support.google.com/webmasters/answer/9044101
- **Prescription du recours contre un prestataire** — 5 ans à compter du jour où le titulaire a
  connu ou aurait dû connaître les faits lui permettant de l'exercer (art. 2224 du code civil) ;
  fondement de l'action : art. 1231-1 du code civil.
- **Voie de plainte** — THESEE est réservée aux **particuliers majeurs**. Les professionnels et
  personnes morales doivent se déplacer en commissariat ou en brigade de gendarmerie
  (https://www.masecurite.interieur.gouv.fr/fr/demarches-en-ligne/thesee-arnaques-internet-plainte-en-ligne).
  PHAROS ne reçoit que des signalements de contenus illicites et **ne vaut pas dépôt de plainte**.
- **Suspension d'hébergement** — chez OVHcloud, une utilisation non conforme « peut exposer le
  Client à une suspension du Service totale ou partielle, de plein droit et sans préavis »
  (clause 5.3.4) ; la sauvegarde des données incombe **intégralement au client** (clauses 2.6 et
  5.1.4) ; injection SQL, force brute et exploitation de failles sont **explicitement hors du
  périmètre de protection** (clause 7.3), OVHcloud n'étant tenu que d'une **obligation de moyens**
  (7.4). Conditions particulières d'hébergement web, version du 19/11/2020 —
  https://www.ovh.com/fr/support/documents_legaux/conditions_particulieres_hebergement_web.pdf

---

## Cadre légal

- **RGPD (règlement UE 2016/679), article 33** — notification d'une violation de données à
  l'autorité de contrôle dans les meilleurs délais et, si possible, 72 heures au plus tard après en
  avoir pris connaissance. **Article 33.5** — obligation de documenter **toute** violation dans un
  registre interne, y compris celles qui ne sont pas notifiées.
- **RGPD, article 34** — communication de la violation aux personnes concernées dans les meilleurs
  délais lorsqu'elle est susceptible d'engendrer un risque élevé pour leurs droits et libertés.
  **Article 34.3** — trois exceptions (données incompréhensibles, mesures neutralisant le risque,
  effort disproportionné). **Article 34.4** — la CNIL peut imposer la communication.
- **RGPD, article 32** — obligation de sécurité du responsable de traitement et du sous-traitant ;
  fondement de la majorité des sanctions CNIL pour fuite de données (ex. France Travail, 5 M€,
  22/01/2026).
- **RGPD, article 83.4 a)** — plafond de 10 millions d'euros ou 2 % du chiffre d'affaires annuel
  mondial total pour les manquements aux articles 8, 11, 25 à 39, 42 et 43, ce qui inclut les
  articles 32, 33 et 34. À distinguer du plafond de l'article 83.5 (20 M€ / 4 %).
- **RGPD, article 28** — contrat de sous-traitance : encadre les obligations de l'agence web, de
  l'infogérant et de l'hébergeur agissant comme sous-traitants, notamment l'obligation d'assister
  le responsable de traitement dans la notification des violations.
- **Loi n° 78-17 du 6 janvier 1978 modifiée** (Informatique et Libertés) — cadre national
  d'application et pouvoirs de contrôle et de sanction de la CNIL.
- **Code pénal, articles 323-1 à 323-7** — atteintes aux systèmes de traitement automatisé de
  données : accès et maintien frauduleux (323-1 : 3 ans et 100 000 € ; 5 ans et 150 000 € en cas
  d'altération), entrave au fonctionnement (323-2), introduction ou modification frauduleuse de
  données (323-3), mise à disposition de moyens (323-3-1). **Qualification à viser lors du dépôt de
  plainte.**
- **Code des assurances, article L. 12-10-1** — créé par la loi n° 2023-22 du 24 janvier 2023
  (LOPMI), article 5, en vigueur depuis le 24 avril 2023 : le versement d'une indemnité au titre
  des pertes et dommages causés par une atteinte à un système de traitement automatisé de données
  est **subordonné au dépôt d'une plainte dans les 72 heures** suivant la connaissance de
  l'atteinte. Applicable aux personnes morales et aux personnes physiques agissant à titre
  professionnel. **Disposition d'ordre public.**
- **Code des assurances, article L. 113-2** — obligation générale de l'assuré de déclarer le
  sinistre à l'assureur dans le délai fixé au contrat, **qui ne peut être inférieur à cinq jours
  ouvrés** (souvent réduit contractuellement à 2 jours pour le vol). À vérifier dans les conditions
  particulières du contrat de l'entreprise : la déclaration à l'assureur est **distincte** du dépôt
  de plainte de l'article L. 12-10-1.
- **Code civil, article 1231-1** — responsabilité contractuelle du prestataire (agence, freelance,
  infogérant) : dommages et intérêts en cas d'inexécution ou de retard, sauf cause étrangère. La
  distinction obligation de moyens / obligation de résultat dépend de la rédaction du contrat de
  maintenance.
- **Code civil, article 2224** — prescription quinquennale de l'action en responsabilité
  contractuelle, courant du jour où le titulaire a connu ou aurait dû connaître les faits lui
  permettant de l'exercer.
- **Code civil, articles 1112-1, 1170 et 1171** — devoir d'information précontractuel ;
  appréciation des clauses limitatives de responsabilité et des clauses créant un déséquilibre
  significatif. Pertinents pour l'examen des contrats de maintenance et d'hébergement.

---

## Plan proposé (16 H2)

1. **Piratage ou simple panne ? Le triage gratuit en dix minutes, avant de payer quoi que ce soit**
   Les cinq faux positifs classiques (extension cassée après mise à jour, certificat SSL expiré,
   DNS mal propagé, suspension pour impayé, quota d'hébergement dépassé) et les cinq signes qui ne
   trompent pas. Outils gratuits, dont 17Cyber.gouv.fr et l'annuaire Cybermalveillance. Assumer que
   cette section fait perdre des ventes.

2. **Les six premières heures, dans l'ordre — et l'erreur qui détruit vos preuves**
   L'ordre officiel de Cybermalveillance.gouv.fr : isoler → préserver les preuves → qualifier les
   données → plainte → corriger → remettre en ligne. Pourquoi il contredit l'ordre implicite du
   marché. Qui décide de couper le site, quoi dire aux salariés et aux clients qui appellent.

3. **Vous n'avez plus les accès, l'agence ne répond pas : débloquer avant tout le reste**
   Le cas qui bloque une intervention sur deux et que personne ne traite : ancien prestataire
   injoignable ou fâché, nom de domaine chez un tiers, hébergement au nom de quelqu'un d'autre.
   Reprendre la main sur le domaine, l'hébergement, la zone DNS, la Search Console.

4. **Les deux compteurs de 72 heures qui ont démarré sans vous prévenir**
   Le cœur du guide. CNIL (art. 33) et plainte/assurance (art. L. 12-10-1) : même point de départ,
   deux destinataires, deux conséquences. Frise chronologique avec les quatre horloges. Pourquoi
   « prise de connaissance » ne veut pas dire « résolution ».

5. **Notifier la CNIL : le formulaire, ce qu'on y écrit, et ce que vous risquez vraiment**
   Qui est concerné (dès un formulaire de contact ou une newsletter), comment décider, le registre
   interne obligatoire même sans notification, la notification initiale incomplète. Calibrer le
   risque : 83 sanctions pour 6 167 notifications en 2025. Rectifier le plafond 10 M€ / 2 %.

6. **Prévenir vos clients (article 34) : quand c'est obligatoire, et quoi écrire**
   Le critère de « risque élevé », les trois exceptions, le contenu minimal imposé. Modèle
   d'e-mail client commenté ligne à ligne. Ce qu'il ne faut pas écrire. Le cas de la boutique en
   ligne dont la base clients a fuité.

7. **Porter plainte : où, comment, et est-ce que ça sert à quelque chose**
   THESEE est fermé aux professionnels — le piège qui coûte la garantie d'assurance. PHAROS n'est
   pas une plainte. Commissariat ou gendarmerie, pièces à apporter, qualification pénale à viser
   (art. 323-1), articulation avec CNIL et assureur.

8. **Votre assurance vous couvre peut-être déjà — et un nettoyage trop rapide peut vous en priver**
   Extension cyber dans la multirisque professionnelle ou la RC Pro. Comment vérifier en dix
   minutes. Le délai de déclaration contractuel (plancher légal de cinq jours ouvrés). Pourquoi
   écraser l'état infecté avant de déclarer fait tomber la garantie.

9. **Hébergeur, agence, ancien prestataire : qui est responsable, et de quoi**
   Lecture d'un contrat d'hébergement mutualisé, clauses à l'appui : suspension de plein droit sans
   préavis, sauvegarde à la charge exclusive du client, exploitation de failles hors périmètre,
   obligation de moyens. Ce que vous pouvez exiger malgré tout (journaux d'accès, préservation).
   Puis le recours contre l'agence : moyens ou résultat, ce que dit votre contrat de maintenance,
   prescription de cinq ans. Grille de lecture, pas pronostic.

10. **Nettoyer ou reconstruire : le calcul économique — et notre conflit d'intérêt, déclaré**
    Les quatre variables qui décident (sauvegarde saine ou non, ancienneté de l'infection, nombre
    et état des extensions, base de données touchée). Pourquoi 49,21 % des sites compromis
    contiennent au moins une porte dérobée change le calcul. Déclaration explicite : Hagnéré Code
    vend du développement — la reconstruction n'est pas la conclusion par défaut, et les cas où
    nous la déconseillons.

11. **De 199 à 790 € HT pour la même prestation : les sept variables qui font le prix**
    Le facteur 4 relevé sur pages officielles, le facteur 6,6 avec les prix d'appel. Le délai
    d'intervention comme variable affichée. Les six variables cachées. Repérer un prix d'appel
    destiné à être révisé. Ce que « garantie nettoyé ou remboursé » veut dire et ne veut pas dire.

12. **Chiffrer votre propre perte en quatre lignes**
    CA quotidien du canal web × jours d'indisponibilité, profondeur de la perte de trafic, coût de
    la reconquête, coût interne du temps passé. Méthode applicable au fil rouge, avec le calcul
    fait devant le lecteur. Sans ce chiffre, aucun arbitrage entre devis n'est possible.

13. **L'écran rouge de Google : trois délais différents qu'on vous vend comme un seul**
    Instruction de la demande de réexamen (jusqu'à plusieurs semaines pour du spam) ≠ retrait des
    avertissements (72 h après validation) ≠ récupération du positionnement (aucun engagement). Le
    piège de la demande de réexamen répétée. Pourquoi « désindexé de Google » est faux.

14. **Les identifiants que personne ne pense à changer**
    Au-delà de WordPress, FTP, base et hébergement : clés Stripe/PayPal, identifiants SMTP, jetons
    Brevo/Mailchimp, connecteurs CRM, webhooks, comptes de service. Où ils sont stockés, dans quel
    ordre les faire tourner, et pourquoi ce sont eux qui permettent la fraude en aval.

15. **J+30 : le contrôle différé, et pourquoi le taux de réinfection n'existe pas**
    Protocole de vérification à trente jours, critères objectifs permettant de constater que la
    prestation a échoué, ce qu'il faut exiger par écrit dans le devis. Constat honnête : aucun taux
    de réinfection général et sourçable n'est publié — la seule donnée existante vaut pour une
    famille de logiciel malveillant et date de 2019.

16. **Éviter la prochaine fois : cinq chiffres à oublier et ce qui marche vraiment**
    Le démontage des statistiques (83 %, 93 %, 30 000/jour, 90 000/minute, 43 % du web). La donnée
    qui compte : près de 61 % des sites infectés étaient à jour. Ce qui réduit réellement
    l'exposition, et les cas où sortir de WordPress est le bon choix — comme ceux où ce ne l'est
    pas.

---

## Fil rouge

**Thierry Dumollard, 56 ans**, gérant d'une SARL de **9 salariés à Saint-Jean-de-Maurienne
(Savoie)**, spécialisée dans la vente et la location de matériel de randonnée et d'alpinisme.
Aucune culture technique : il sait envoyer un devis et lire ses statistiques de vente, c'est tout.

**Son site.** WordPress + WooCommerce, mis en ligne en 2018, jamais refait. 240 pages,
38 extensions dont 6 sans mise à jour depuis plus de deux ans. Hébergement mutualisé, sauvegardes
automatiques glissantes incluses dans l'offre. L'agence qui a construit le site a cessé son activité
en 2023 ; depuis, personne ne s'en occupe formellement.

**Ses chiffres.** CA total **1,9 M€**, dont **365 000 € réalisés en ligne** (19 % du CA), soit
**1 000 € de chiffre d'affaires web par jour calendaire** en moyenne — chiffre rond assumé, choisi
pour que le lecteur puisse refaire chaque calcul de tête. Panier moyen **125 €**, soit **2 920
commandes par an**, environ **8 par jour**. Base clients WooCommerce : **4 200 comptes** (nom,
adresse postale, e-mail, téléphone, historique de commandes) et **3 100 inscrits à la newsletter**.
Les paiements passent par une page hébergée chez son prestataire de paiement : **aucune donnée de
carte bancaire n'est stockée sur son site** — nuance décisive pour l'évaluation du risque élevé de
l'article 34.

**L'incident.** **Mardi 3 mars 2026, 9 h 10** : un client l'appelle, son navigateur affiche un
avertissement rouge devant le site. C'est le point de départ des deux compteurs de 72 heures —
échéance **vendredi 6 mars à 9 h 10**, week-end inclus s'il avait découvert le problème un vendredi.
Les journaux du serveur montrent une première modification de fichier le **dimanche 11 janvier
2026**, soit **51 jours avant la détection** : toutes les sauvegardes glissantes disponibles sont
postérieures à l'intrusion. Il n'a donc **aucune sauvegarde saine**.

**Ses trois devis**, reçus en 48 heures, tous intitulés « nettoyage de site WordPress piraté » :
**199 € HT** (adossé à une migration d'hébergement, délai 96 h hors week-end), **490 € HT** (délai
48 h, avec pare-feu applicatif et double authentification), **790 € HT** (urgence 24 h, 7j/7). Un
facteur 4 pour le même intitulé.

**Son arbitrage.** S'il coupe son site quatre jours, il perd **4 000 €** de CA web — soit plus de
cinq fois le devis le plus cher. Sa multirisque professionnelle comporte une extension cyber qu'il
ignore, avec un délai de déclaration de cinq jours ouvrés. Sa base de 4 200 clients pose la question
de l'article 34. Et son site de 2018, avec 38 extensions dont 6 abandonnées et aucune sauvegarde
saine, est exactement le profil où le calcul nettoyer/reconstruire mérite d'être posé — sans que la
réponse soit écrite d'avance.

**Le guide le suit de bout en bout** : le triage du mardi matin, les quatre horloges, les deux
notifications, la plainte à la gendarmerie de Saint-Jean-de-Maurienne, la déclaration à l'assureur,
la lecture de son contrat d'hébergement, le calcul de sa perte, l'arbitrage sur ses trois devis, la
rotation de ses clés Stripe et de son connecteur Brevo, et le contrôle du 2 avril 2026.

> **Cohérence obligatoire** : 9 salariés, Saint-Jean-de-Maurienne, 1,9 M€ de CA dont 365 000 € en
> ligne, 1 000 €/jour, panier moyen 125 €, 2 920 commandes/an, 4 200 comptes clients, 3 100
> inscrits newsletter, 38 extensions dont 6 abandonnées, 240 pages, site de 2018, intrusion le
> 11/01/2026, détection le 03/03/2026 à 9 h 10, 51 jours d'écart, échéance 06/03/2026 à 9 h 10,
> devis 199 / 490 / 790 € HT. **Chaque montant qui le concerne se recalcule à la main à chaque
> réapparition.**

---

## FAQ — 15 questions

Toutes issues des questions réellement relevées, reformulées en langage de dirigeant. À placer en
fin de guide, chacune avec une réponse autonome de 60 à 120 mots.

1. Mon site affiche n'importe quoi depuis ce matin : est-ce qu'on m'a vraiment piraté, ou c'est
   juste une panne ?
2. Est-ce que je suis obligé de prévenir quelqu'un, et est-ce que je risque une amende si je ne le
   fais pas ?
3. Mes clients ont commandé chez moi avec leur carte bancaire : est-ce que leurs coordonnées sont
   dans la nature, et est-ce que je dois les prévenir ?
4. Concrètement, ça va me coûter combien, tout compris, sans mauvaise surprise ?
5. Pourquoi un prestataire me demande 199 € et un autre 790 € pour exactement la même chose ?
6. Combien de temps mon site va rester inaccessible, et je perds combien pendant ce temps-là ?
7. Google a mis un message rouge « site dangereux » devant mon site : ça part quand, et comment ?
8. Est-ce que je vais retrouver ma place dans Google, ou mon référencement est définitivement
   perdu ?
9. Mon hébergeur est-il responsable ? Est-ce que je peux me retourner contre lui, ou au moins lui
   demander de m'aider gratuitement ?
10. L'agence qui m'a fait le site il y a trois ans est-elle en tort ? Est-ce qu'elle doit payer la
    réparation ?
11. Est-ce que mon assurance professionnelle couvre ce genre de problème ?
12. Faut-il porter plainte, et est-ce que ça sert vraiment à quelque chose ?
13. Une fois le site nettoyé, comment je peux être sûr que c'est bien fini et qu'ils ne vont pas
    revenir dans trois semaines ?
14. Est-ce que ça vaut le coup de réparer, ou je ferais mieux de faire refaire le site à neuf ?
15. Je n'ai plus les accès de mon site et l'agence ne répond pas : je fais quoi ?

---

## Lexique d'ouverture (encadré après le sommaire)

- **Violation de données** — tout incident qui expose, modifie ou détruit des informations
  personnelles ; un site piraté avec un simple formulaire de contact en est une
- **Notification CNIL** — le signalement obligatoire de cette violation à l'autorité française de
  protection des données, via un formulaire en ligne gratuit
- **Responsable de traitement** — celui qui décide pourquoi et comment les données sont
  collectées : c'est vous, le dirigeant, pas votre agence
- **Sous-traitant** — celui qui traite les données pour votre compte : agence, hébergeur,
  infogérant ; il vous assiste, mais l'obligation reste la vôtre
- **Porte dérobée (backdoor)** — un accès caché laissé par l'attaquant pour revenir plus tard,
  même après que le site a été nettoyé
- **Vulnérabilité** — une faille découverte dans un logiciel ; ce n'est pas un piratage, c'est une
  porte mal fermée que personne n'a forcément poussée
- **Extension (plugin)** — un module ajouté à WordPress pour lui donner une fonction :
  formulaire, boutique, réservation, statistiques
- **Safe Browsing** — le service de Google qui affiche l'avertissement rouge « site dangereux »
  dans les navigateurs
- **Demande de réexamen** — la démarche par laquelle vous demandez à Google de reconstater que
  votre site est propre et de retirer l'avertissement
- **Désindexation** — la disparition d'une page des résultats de recherche ; elle concerne les
  pages de spam injectées, pas votre site entier
- **Journaux (logs)** — l'enregistrement automatique de qui s'est connecté, quand et depuis où ;
  c'est la preuve principale, et elle s'efface
- **Hébergement mutualisé** — votre site partage un serveur avec des centaines d'autres, ce qui
  limite ce que vous pouvez exiger et ce que l'hébergeur peut supporter
- **Obligation de moyens / de résultat** — promettre de bien travailler, ou promettre un résultat
  précis ; la nuance décide de ce que vous pouvez réclamer à votre prestataire
- **Rotation des secrets** — le remplacement de toutes les clés et mots de passe techniques, y
  compris ceux de vos outils tiers, pas seulement ceux de WordPress
- **HT / TTC** — hors taxes / toutes taxes comprises ; une entreprise assujettie récupère la TVA,
  donc seul le montant HT lui coûte réellement

---

## Pièges à éviter

- **Ne jamais présenter le nettoyage comme l'urgence n° 1.** L'angle entier du guide repose sur
  l'inverse : les deux délais de 72 heures et la préservation des preuves priment. Une section qui
  ouvrirait sur « la première chose à faire est de nettoyer » annulerait le différenciateur
  principal.
- **Ne pas confondre une vulnérabilité et une exploitation.** 91 % des vulnérabilités divulguées
  sont dans les extensions ; cela ne dit rien du nombre de piratages réels. Toute phrase du guide
  qui glisse de l'une à l'autre reproduit exactement l'erreur reprochée au SERP.
- **Ne pas écrire « 95 % des sites piratés sont sous WordPress ».** Le 95,5 % de Sucuri mesure la
  clientèle de Sucuri, pas le web. Toujours accompagner ce chiffre de sa limite d'échantillon, ou
  ne pas l'utiliser.
- **Ne jamais écrire 20 M€ / 4 % pour un défaut de notification.** Le plafond applicable aux
  articles 32, 33 et 34 est de 10 M€ ou 2 % du CA mondial (art. 83.4 a). Se tromper ici, c'est être
  à la fois faux et plus alarmiste que la loi — et perdre le lecteur averti.
- **Ne pas recommander THESEE à un professionnel.** La plateforme est réservée aux particuliers
  majeurs. Un dirigeant qui perdrait 48 h à tenter une plainte en ligne inaccessible manquerait le
  délai de 72 h de l'article L. 12-10-1 et perdrait sa garantie. PHAROS n'est pas non plus une
  plainte.
- **Ne pas dater le chiffre de part de marché de WordPress.** 41,2 % au 19/07/2026, en baisse
  continue depuis 2023. Le relever à nouveau au jour de la publication et l'écrire avec sa date.
- **Ne pas fusionner les trois délais Google.** Instruction de la demande de réexamen ≠ retrait des
  avertissements sous 72 h ≠ récupération du positionnement, sur laquelle Google ne s'engage pas.
  C'est le trou n° 13 : le guide le comble ou il n'apporte rien.
- **Ne pas laisser la section 10 devenir un argumentaire pour notre offre.** Hagnéré Code vend du
  développement sur mesure : le conflit d'intérêt doit être déclaré nommément, la reconstruction ne
  doit jamais être la conclusion par défaut, et les cas où nous la déconseillons doivent être
  écrits noir sur blanc. C'est précisément le biais reproché aux douze concurrents.
- **Ne pas inventer de prix de reconstruction.** Aucun tarif de refonte n'a été relevé dans cette
  recherche. La section 10 donne une **méthode** d'arbitrage appliquée aux devis que le lecteur a
  réellement reçus, jamais une fourchette de refonte non sourcée.
- **Ne pas extrapoler un taux de réinfection.** Le seul chiffre publié (40 %) vaut pour une famille
  de logiciel malveillant, date de 2019 et n'expose pas son sous-échantillon. Écrire explicitement
  qu'aucun taux général sourçable n'existe, et s'appuyer sur les 49,21 % de sites porteurs d'une
  porte dérobée.
- **Ne pas citer la clause OVHcloud « piratage ».** Cette formulation est introuvable dans le PDF
  contractuel. Seules les clauses 5.3.4, 2.6, 5.1.4, 7.3, 7.4 et 7.11 sont vérifiées verbatim et
  citables.
- **Ne pas transformer la section 9 en pronostic juridique.** Obligation de moyens ou de résultat :
  grille de lecture, conditionnel, renvoi à un avocat. Aucune promesse de résultat d'un recours.
- **Ne pas faire dériver les chiffres du fil rouge.** Recalculer à la main chaque montant
  concernant Thierry Dumollard à chaque réapparition : perte quotidienne, jours d'indisponibilité,
  écart entre devis, ancienneté de l'infection.
- **Ne pas oublier la mention HT.** Le sujet est budgétaire et le lecteur est un dirigeant : un
  prix sans unité fiscale explicite est une erreur de première ligne. Les tarifs Sucuri, Wordfence
  et Patchstack sont en dollars, hors TVA française — le dire à chaque occurrence.
- **Ne pas prendre le lecteur de haut.** Porte dérobée, injection SQL, journaux, DNS, Safe
  Browsing, webhook : chaque terme se définit à sa première apparition, y compris dans les tableaux
  et la FAQ, sans note de bas de page et sans condescendance.
- **Aucun simulateur, aucune tarification dynamique ou générée.** Funnel lead-only : la grille est
  publique et statique, le CTA reste « décrivez votre situation, réponse personnelle sous 24 h
  ouvrées ». Deux CTA maximum sur toute la page.
- **Toujours le domaine hagnere-code.ai**, jamais .fr, dans les liens comme dans le canonical.

---

## Vérifications bloquantes avant publication

### Bloquant — à trancher avant toute mise en ligne

1. **Article L. 12-10-1 du code des assurances.** La page Légifrance n'a pas pu être ouverte (404
   sur trois identifiants d'article testés). Le contenu de la règle (plainte sous 72 h, personnes
   morales et professionnels, entrée en vigueur le 24/04/2023, caractère d'ordre public) est
   concordant sur l'ensemble des sources juridiques secondaires consultées, mais **le texte primaire
   n'a pas été lu**. À ouvrir sur Légifrance et à citer verbatim — c'est un des faits les plus
   structurants du guide, il ne peut pas reposer sur des sources secondaires.
2. **Prix Wordfence.** Les pages officielles https://www.wordfence.com/products/,
   https://www.wordfence.com/products/pricing/ et
   https://www.wordfence.com/products/wordfence-response/ ont toutes renvoyé un contenu **vide**
   (blocage probable du récupérateur). Les tarifs retenus (Premium 149 $, Care 590 $, Response
   1 250 $) proviennent de https://lp.wordfence.com/en/wordfence-plans-pricing-ga — domaine
   Wordfence, mais **landing page marketing** susceptible de porter des prix promotionnels. Le
   supplément de 199 $/site pour les environnements de préproduction n'a pas pu être vérifié sur la
   page officielle. **À revérifier manuellement dans un navigateur.**
3. **wptrigone.fr.** https://wptrigone.fr/intervention-wordpress-pirate-hacke/ a renvoyé un HTTP
   403. Le tarif de ce prestataire français n'est pas intégré à la fourchette. Si le guide prétend
   établir une grille de lecture du marché français, cette page doit être consultée manuellement.
4. **Clause OVHcloud relative au piratage.** Une source secondaire affirmait qu'OVHcloud peut
   « interrompre la connexion pour maintenir la sécurité de la plateforme à la suite d'un piratage
   ou d'une non-installation des mises à jour applicatives ». Cette formulation est **introuvable**
   dans le PDF des conditions particulières version du 19/11/2020, extrait et parcouru intégralement
   (aucune occurrence du mot « piratage »). Seules les clauses 5.3.4, 2.6, 5.1.4, 7.3, 7.4 et 7.11
   sont vérifiées verbatim et citables. **Vérifier aussi s'il existe une version des CP postérieure
   à novembre 2020.**
5. **Sanction CNIL Nexpublica France** (1 700 000 €, 22/12/2025, manquement à l'article 32) :
   chiffre et date relevés uniquement sur une source secondaire (cabinet d'avocats). La délibération
   n'a pas été consultée sur cnil.fr ni sur Légifrance. **À confirmer sur la source primaire ou à
   retirer du guide.**

### Non recoupé — à signaler au lecteur ou à compléter

6. **Aucune statistique générale et sourçable de réinfection après nettoyage** n'a pu être trouvée,
   ni chez Sucuri, ni chez Patchstack, ni chez Wordfence. Seule donnée publiée : 40 % dans le
   rapport Sucuri 2019, limité à la famille WP-VCD, sans sous-échantillon détaillé, vieux de sept
   ans. **Le guide doit dire explicitement que ce taux n'existe pas publiquement** plutôt que
   d'extrapoler.
7. **Méthodologie des délais d'exploitation Patchstack** (« la moitié sous 24 h », « médiane
   pondérée de 5 heures ») : la notion de médiane pondérée n'est pas définie dans le document
   public, la télémétrie sous-jacente est propriétaire et non reproductible. Aucune source
   indépendante ne confirme ces ordres de grandeur. **À attribuer explicitement à Patchstack ou à
   ne pas utiliser comme argument central.**
8. **Rapport annuel Wordfence 2025 : introuvable.** Seuls le rapport annuel 2024
   (https://www.wordfence.com/wp-content/uploads/2025/04/2024-Annual-WordPress-Security-Report-by-Wordfence.pdf)
   et des rapports trimestriels sont disponibles. La contre-vérification des chiffres Patchstack
   2025 par une seconde base de vulnérabilités indépendante **n'a pas pu être faite** : le guide
   repose sur une source unique pour toute la volumétrie. **Le dire au lecteur**, ou compléter via
   le rapport trimestriel Q4 2025 de Wordfence
   (https://www.wordfence.com/blog/2026/02/quarterly-wordpress-threat-intelligence-report-q4-2025/),
   non consulté.
9. **Page CNIL sur l'information des personnes concernées (article 34).** L'URL testée
   https://www.cnil.fr/fr/informer-les-personnes-concernees-par-une-violation-de-donnees a renvoyé
   un 404. Le contenu de l'obligation a été reconstitué à partir de
   https://www.cnil.fr/fr/violations-de-donnees-personnelles-les-regles-suivre et du texte du RGPD.
   **Retrouver la page CNIL à jour avant de publier un modèle d'e-mail client**, et vérifier si la
   CNIL propose un modèle officiel.
10. **Google Transparency Report** (https://transparencyreport.google.com/safe-browsing/search) :
    la page n'a renvoyé aucun contenu exploitable (rendu JavaScript). L'outil est bien la
    vérification gratuite de référence de l'état Safe Browsing d'un domaine, mais ses limites
    (fraîcheur des données, portée) n'ont pas pu être documentées à partir de la source officielle.
    **À vérifier manuellement avant de le recommander comme outil de triage gratuit.**

### À trancher éditorialement

11. **Qualification obligation de moyens / obligation de résultat du prestataire web en matière de
    sécurité.** Le régime légal (art. 1231-1 et 2224 du code civil) est vérifié, mais la
    qualification dépend au cas par cas de la rédaction du contrat de maintenance, et **aucune
    jurisprudence française récente et directement transposable** au cas d'un site WordPress piraté
    n'a été identifiée. Faire relire cette section par un avocat, et la formuler comme une grille
    de lecture, pas comme un pronostic de solution.
12. **Point de déontologie.** Hagnéré Code est une agence de développement web. Le guide traite
    explicitement du recours contre l'agence qui a construit ou maintenait le site (trou n° 5) et
    de l'arbitrage nettoyer / reconstruire / quitter WordPress (trou n° 6) : **l'éditeur est en
    conflit d'intérêt exactement au même titre que les douze pages du SERP.** Ce conflit doit être
    déclaré en clair dans le guide, et l'option « reconstruire » ne doit pas être présentée comme
    la conclusion par défaut — c'est précisément le biais reproché aux concurrents.
