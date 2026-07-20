# Procédure d'incident RGPD — HAGNERE CODE

> **Document interne — articles 33 et 34 du RGPD.**
> Notification à la CNIL au plus tard 72 heures après avoir pris connaissance
> de la violation lorsqu'elle est susceptible d'engendrer un risque ;
> communication aux personnes sans délai indu lorsqu'un risque élevé subsiste.
> Dernière mise à jour : 2026-07-20.

## 1. Définitions

**Violation de données à caractère personnel** (art. 4.12 RGPD) :
> Une violation de la sécurité entraînant, de manière accidentelle ou illicite, la destruction, la perte, l'altération, la divulgation non autorisée de données à caractère personnel transmises, conservées ou traitées d'une autre manière, ou l'accès non autorisé à de telles données.

Trois types de violation :
- **Confidentialité** : divulgation, accès non autorisé.
- **Intégrité** : modification non autorisée.
- **Disponibilité** : perte ou destruction.

## 2. Détection — qui peut détecter ?

- Équipe interne (alerte technique, journal anormal, revue de code ou signalement).
- Prestataire (notamment Vercel, Neon, Resend, Google Workspace ou Groq) qui notifie HAGNERE CODE.
- Personne concernée elle-même (formulaire contact, droits RGPD).
- Tiers (chercheur en sécurité, journaliste, autorité).

## 3. Chaîne d'alerte — qui contacter immédiatement ?

| Rôle | Personne | Contact |
|---|---|---|
| Référent RGPD | Quentin Hagnéré (président) | quentin@hagnere-patrimoine.fr · +33 3 74 47 20 18 |
| Référent sécurité technique | Nicolas Wallerand (désignation à confirmer) | canal interne à confirmer |
| Backup référent | (à définir) | — |
| Responsable de traitement client, si HAGNERE CODE agit comme sous-traitant | contact incident prévu au DPA de la mission | à compléter et tester avant traitement |

**Activation minimale : email à quentin@hagnere-patrimoine.fr et appel au
président si l'incident est urgent. Les coordonnées du backup et le canal
technique doivent être complétés et testés avant utilisation opérationnelle.**

## 4. Qualification du rôle avant la décision de notification

Le dossier d'incident indique immédiatement le rôle de HAGNERE CODE pour chaque
traitement et chaque population concernée :

- **responsable de traitement** pour les données du site, la relation commerciale
  ou tout traitement dont HAGNERE CODE détermine les finalités et moyens essentiels :
  HAGNERE CODE évalue le risque et décide des notifications des articles 33 et 34 ;
- **sous-traitant d'un client** pour des données traitées uniquement sur ses
  instructions : HAGNERE CODE alerte ce responsable **sans délai indu après avoir
  pris connaissance de la violation**, par le contact et le canal du DPA. Elle lui
  transmet les informations disponibles, les complète progressivement, préserve
  les preuves et l'assiste. Le client responsable décide de la notification à
  l'autorité et de la communication à ses personnes, sauf obligation légale propre
  ou qualification différente documentée ;
- **périmètre mixte** : séparer les données, personnes, rôles, horloges, décisions
  et destinataires. Une même cause technique peut produire deux circuits juridiques.

Le DPA de chaque mission renseigne avant tout traitement le contact d'incident,
son suppléant, le canal urgent et le délai opérationnel compatible avec
l'obligation « sans délai indu ». Une adresse générique non testée ne suffit pas.

## 5. Timeline réglementaire lorsque HAGNERE CODE est responsable

```
T+0     Moment où HAGNERE CODE dispose d'un degré raisonnable de certitude
        qu'un incident de sécurité a compromis des données personnelles
Sans délai indu
        Confinement, ouverture du registre et évaluation documentée du risque
Au plus tard T+72h
        Notification CNIL si la violation est susceptible d'engendrer un risque
        pour les droits et libertés ; motif documenté si notification tardive
Sans délai indu
        Communication claire aux personnes si la violation est susceptible
        d'engendrer un risque élevé, sauf exception de l'article 34.3
Après incident
        Clôture documentée, mesures correctives et retour d'expérience
```

Lorsque HAGNERE CODE agit comme sous-traitant, le jalon prioritaire est l'alerte
sans délai indu du responsable client ; l'horloge de 72 heures de ce responsable
ne repart pas à la réception d'un dossier complet. Les repères internes de 2, 12
ou 24 heures peuvent servir d'objectifs de
réaction, mais ne remplacent ni le point de départ légal ni l'analyse au cas par
cas. Un sous-traitant alerte HAGNERE CODE **sans délai indu** après avoir pris
connaissance d'une violation, afin de préserver le délai propre du responsable.

## 6. Procédure étape par étape

### Étape 1 — Alerte, conservation des preuves et confinement

1. Identifier le périmètre exact : quel système, quelles données, combien de personnes affectées.
2. Stopper l'écoulement : révoquer les accès compromis, fermer le service incriminé si critique, isoler les sauvegardes.
3. Préserver les preuves : snapshot DB, logs, captures d'écran.
4. Ouvrir un dossier d'incident à accès restreint et horodaté ; ne pas recopier
   inutilement les données affectées dans les outils de discussion.
5. Noter séparément l'heure de détection technique et l'heure à laquelle
   HAGNERE CODE a acquis un degré raisonnable de certitude sur la violation.

### Étape 2 — Évaluation documentée du risque

Évaluer ensemble la vraisemblance et la gravité des conséquences pour les
personnes. Le volume n'est qu'un facteur : aucune taille minimale ne dispense
automatiquement de notifier.

Documenter au minimum :

- nature, sensibilité, volume et intelligibilité des données ;
- nombre et catégories de personnes, notamment leur éventuelle vulnérabilité ;
- facilité d'identification et possibilité de recouper les données ;
- origine, durée, étendue et caractère intentionnel ou accidentel de l'accès ;
- conséquences plausibles : fraude, usurpation, perte financière, atteinte à la
  réputation, discrimination, perte de confidentialité ou indisponibilité ;
- efficacité réelle du chiffrement, de la pseudonymisation, de la révocation
  d'accès et des mesures prises après l'incident ;
- vraisemblance que les conséquences se produisent et gravité si elles surviennent.

Décision à motiver dans le registre :

- **violation non susceptible d'engendrer un risque** : pas de notification à
  la CNIL, mais documentation obligatoire au titre de l'article 33.5 ;
- **violation susceptible d'engendrer un risque** : notification à la CNIL ;
- **violation susceptible d'engendrer un risque élevé** : notification à la
  CNIL et communication aux personnes sans délai indu, sauf exception valable ;
- **informations encore incomplètes** : ne pas attendre artificiellement ;
  notifier en plusieurs temps lorsque le seuil de notification est atteint.

### Étape 3 — Notification CNIL par le responsable (avant T+72h)

Lorsque HAGNERE CODE est responsable et que le seuil de risque est atteint, elle
utilise le formulaire en ligne CNIL : https://www.cnil.fr/fr/notifier-une-violation-de-donnees-personnelles

Lorsqu'elle est sous-traitante, elle fournit ces éléments au responsable client
et suit ses instructions licites ; elle ne se substitue pas à lui dans la décision
de notifier ou de communiquer, sauf obligation légale propre documentée.

Contenu minimum, dans la mesure où les informations sont disponibles :

- nature de la violation ; catégories et nombre approximatif de personnes ;
- catégories et nombre approximatif d'enregistrements concernés ;
- coordonnées du point de contact pouvant fournir des informations ;
- conséquences probables ;
- mesures prises ou envisagées pour remédier à la violation et en atténuer les effets ;
- dates de détection et de prise de connaissance ; motif de tout dépassement du délai.

⚠️ Si tous les éléments ne sont pas connus à T+72h, faire une **notification initiale** puis compléter au fur et à mesure (notification en plusieurs temps autorisée).

### Étape 4 — Communication aux personnes concernées (si risque élevé)

La communication individuelle n'est pas exigée si **l'une** des exceptions de
l'article 34.3 est établie et documentée :

- des mesures antérieures, telles qu'un chiffrement effectivement protecteur,
  rendent les données incompréhensibles à toute personne non autorisée ; **ou**
- des mesures ultérieures garantissent que le risque élevé n'est plus
  susceptible de se matérialiser ; **ou**
- la communication individuelle exigerait des efforts disproportionnés ; une
  communication publique ou une mesure aussi efficace doit alors informer les
  personnes.

L'autorité de contrôle peut exiger la communication ou constater qu'une
exception est remplie. La simple présence d'un chiffrement, sans vérification
de sa portée et de la compromission éventuelle des clés, ne suffit pas.

Si aucune exception ne s'applique, contacter individuellement les personnes par
un canal approprié ; une page dédiée peut compléter mais non remplacer cette
communication, hors cas d'efforts disproportionnés. Le message comprend :
- description claire de la violation (langue accessible)
- conséquences possibles
- mesures prises
- recommandations à la personne (changer mot de passe, surveiller son compte, etc.)
- coordonnées du référent RGPD

### Étape 5 — Documentation interne (obligatoire art. 33.5)

Un registre interne des violations doit être tenu, **même pour les violations non notifiées à la CNIL**.

Champs minimaux :
- Date et heure de la détection
- Nature de la violation
- Catégories et nombre de personnes / données concernées
- Conséquences
- Mesures prises
- Décision de notification (et justification si non)
- Liens vers les preuves (logs, captures, rapports)

Conserver le registre dans un espace sécurisé à accès restreint. Un éventuel
fichier de synthèse dans le dépôt ne doit contenir aucune donnée personnelle,
aucun secret et aucun élément facilitant une attaque.

### Étape 6 — Post-mortem (T+1 mois)

Réunion interne :
- Cause racine
- Maillons faibles identifiés
- Plan d'action correctif (court / moyen / long terme)
- Mise à jour de la procédure si besoin

## 7. Cas concrets typiques pour HAGNERE CODE

### Cas A — Fuite de la base via Neon

- **Action immédiate** : révoquer la chaîne de connexion, rotater le mot de passe, vérifier les logs Neon pour identifier l'accès non autorisé.
- **Évaluation** : qualifier les données réellement accessibles, l'exploitabilité,
  les personnes touchées et les conséquences plausibles ; le seul volume ne décide pas.
- **Décision** : notifier la CNIL si un risque est susceptible de résulter de la
  fuite ; informer aussi les personnes si ce risque est élevé.

### Cas B — Email Resend envoyé au mauvais destinataire

- **Action immédiate** : demander la suppression au destinataire, révoquer l'email s'il est encore récupérable côté Resend.
- **Évaluation** : examiner le contenu, le destinataire, la possibilité de
  récupération ou de réutilisation et les conséquences pour chaque personne.
- **Décision** : même une violation concernant une seule personne peut devoir
  être notifiée ; documenter l'absence de notification si aucun risque n'est susceptible d'en résulter.
- **Documentation interne** : oui systématique.

### Cas C — Brief exposé ou partagé avec une personne non autorisée

- **Action immédiate** : désactiver ou remplacer le lien concerné, révoquer les
  accès et vérifier les journaux réellement disponibles chez l'hébergeur utilisé.
- **Évaluation** : violation de confidentialité ; gravité dépend des données contenues dans le brief.
- **Notification** : décision fondée sur le risque, y compris lorsque l'accès
  non autorisé est confirmé ; documenter les éléments établissant l'accès et ses conséquences possibles.

### Cas D — Fuite côté sous-traitant (ex: Groq)

- **Action** : exiger du sous-traitant une alerte **sans délai indu**, les
  informations de l'article 33.3 disponibles et des mises à jour progressives.
- Pour ses traitements en qualité de responsable, HAGNERE CODE reste chargée de
  l'analyse et notifie la CNIL ou les personnes lorsque les critères légaux sont remplis.

Si l'audio ou la transcription appartenait à un traitement réalisé pour le
compte d'un client, HAGNERE CODE active en plus le circuit sous-traitant : alerte
sans délai indu du contact client prévu au DPA, transmission progressive des
informations et assistance. Le client décide des démarches liées à son rôle de
responsable.

## 8. Contact CNIL

- **Site** : https://www.cnil.fr
- **Téléphone (heures ouvrées)** : 01 53 73 22 22
- **Formulaire de notification** : https://www.cnil.fr/fr/notifier-une-violation-de-donnees-personnelles
