# Politique d'envoi d'emails marketing — HAGNERE CODE

> **Document interne — règles avant tout envoi marketing.**
> Couvre l'article L.34-5 du Code des postes et des communications
> électroniques (CPCE), le RGPD et la loi Informatique et Libertés.
> Dernière mise à jour : 2026-07-20.

## 1. État actuel

À la date de mise en ligne du site, **aucun email marketing** n'est envoyé. Seuls des emails **transactionnels** (confirmation de soumission de brief, notification interne) sont émis via Resend. Ils reposent sur les mesures précontractuelles lorsque le destinataire est lui-même partie au futur contrat (art. 6.1.b RGPD) ou sur l'intérêt légitime à répondre à un interlocuteur professionnel agissant pour une organisation (art. 6.1.f).

Cette politique s'applique au moment où une newsletter ou une campagne d'emailing sera envisagée.

## 2. Distinction transactionnel / marketing

| Type | Exemple | Consentement requis ? |
|---|---|---|
| Transactionnel | Confirmation d'envoi de formulaire, accusé de réception | Non au titre de la prospection ; art. 6.1.b si la personne est partie au futur contrat, ou art. 6.1.f pour répondre à l'interlocuteur d'une organisation |
| Service | Information nécessaire au contrat, alerte sécurité, rappel de facture | Non au titre de la prospection ; base à qualifier selon le message : contrat, obligation légale ou intérêt légitime |
| Marketing | Newsletter, annonce nouveau service, promotion, contenu éditorial | **Oui** ou opt-out B2B selon contexte |

## 3. Règles B2B (article L.34-5 du CPCE)

Le démarchage B2B par email peut être réalisé sans consentement préalable si le
message concerne directement la profession de la personne et si l'ensemble des
conditions de collecte, d'information et d'opposition est respecté. L'exception
ne découle ni du seul nom de domaine de l'adresse ni de la présence d'un champ
« entreprise ».

Conditions à documenter pour chaque source de contacts :

1. **Collecte licite et loyale** de l'adresse, avec source, date et contexte conservés.
2. **Information dès la collecte** sur l'identité de l'expéditeur, la finalité de
   prospection, la base légale, les destinataires, la durée et les droits.
3. **Objet en rapport direct avec la profession ou la fonction** réellement
   exercée par le destinataire.
4. **Possibilité de s'opposer gratuitement et simplement dès la collecte**, puis
   dans chaque message ; l'opposition est appliquée sans délai à la liste marketing.
5. **Identité non dissimulée** et objet du message non trompeur.
6. **Mise en balance documentée** lorsque le traitement repose sur l'intérêt
   légitime, avec prise en compte des attentes raisonnables et de la source.

### Application chez HAGNERE CODE

- Les formulaires actuels sont destinés à répondre à une demande, et non à
  inscrire automatiquement la personne à une prospection.
- Une adresse issue de `/demarrer-un-projet` ou `/contact` ne doit pas être
  importée automatiquement dans une campagne. Avant toute réutilisation pour
  une nouvelle finalité, fournir l'information requise par l'article 13.3 du
  RGPD et vérifier les conditions B2B ci-dessus.
- Le champ entreprise, une adresse nominative d'entreprise ou un domaine public
  comme `gmail.com` ne suffisent pas à qualifier seuls le destinataire. Le
  contexte, sa fonction et l'objet précis du message priment.
- En cas de doute sur le caractère professionnel ou la pertinence du message,
  ne pas envoyer sans consentement préalable valable.

## 4. Règles B2C (RGPD + article L.34-5 du CPCE)

Par choix de conformité interne, HAGNERE CODE exige un **consentement libre,
éclairé, spécifique, préalable et univoque** pour toute audience B2C, sauf si une
exception légale précise a été vérifiée, documentée et reflétée dans
l'information fournie à la personne.

- Case à cocher **non précochée** au moment de la collecte.
- Mention claire de la finalité marketing (distincte de la finalité de service).
- Possibilité de retrait du consentement aussi simple que celle de le donner.
- Preuve conservée : source, date, finalité, version du texte présenté et action positive.
- Aucun accès au service ne doit être conditionné à une prospection non nécessaire.

## 5. Informations et mentions à assurer

Chaque email marketing doit au minimum assurer :

1. **Identité claire de l'expéditeur** : HAGNERE CODE et une adresse de contact valide.
2. **Nature commerciale non trompeuse** du message et de son objet.
3. **Lien de désinscription** visible, gratuit, simple, fonctionnel et sans connexion obligatoire.
4. **Lien vers la politique de confidentialité** à jour.
5. **Traitement immédiat de l'opposition**, y compris son inscription dans une
   liste d'exclusion minimale empêchant une réimportation accidentelle.

L'origine, la date, le contexte de collecte et l'information fournie doivent
être traçables. Si les données n'ont pas été obtenues directement auprès de la
personne, l'information prévue à l'article 14 du RGPD doit être délivrée dans le
délai applicable et au plus tard lors de la première communication, sauf
exception légalement établie.

### Template minimum (footer email)

```
HAGNERE CODE — siège social : 82 impasse de Bellevue, 73000 Bassens
Vous recevez ce message dans le contexte suivant : {{origine_et_date}}.
Politique de confidentialité : https://hagnere-code.ai/legal/confidentialite
Se désinscrire : {{unsubscribe_link}}
```

## 6. Outil envisagé

Privilégier un outil ESP qui :
- gère automatiquement les listes de désinscription (suppression cross-campagne).
- propose un opt-in confirmé (double opt-in) pour les listes B2C.
- permet de désactiver les pixels d'ouverture et le suivi individuel des liens.
- fournit un DPA, une liste de sous-traitants, des durées de conservation et des
  mécanismes de transfert vérifiables pour l'entité contractante.
- permet l'export, la rectification, l'effacement et la conservation d'une liste
  d'opposition limitée aux informations strictement nécessaires.

**Aucun outil marketing n'est validé par le présent document.** Le choix et ses
garanties doivent être contrôlés et archivés avant le premier import.

## 7. Gestion des listes

- Liste **prospects B2B éligibles** : uniquement après vérification documentée du
  contexte professionnel, de la pertinence du message, de l'information et du droit d'opposition.
- Liste **clients** : ne pas présumer qu'un contrat autorise toute prospection ;
  appliquer la règle B2B ou l'exception client B2C seulement si ses conditions
  précises sont documentées.
- Liste **newsletter avec consentement** : consentement dédié et preuve associée.
- Liste **opposition** : données minimales nécessaires pour ne plus solliciter la
  personne ; accès restreint et aucune réutilisation commerciale.

Ne **jamais** mélanger les listes. Une opposition sur la newsletter ne doit pas couper les emails transactionnels client.

Les données de prospection sont supprimées ou anonymisées au plus tard trois ans
après la collecte ou le dernier contact actif pertinent du prospect. Une simple
ouverture technique ne prolonge pas automatiquement la durée. La preuve du
consentement et la liste d'opposition suivent une durée distincte, limitée à ce
qui est nécessaire pour démontrer le respect du choix et empêcher une nouvelle sollicitation.

## 8. Mesure d'ouverture et suivi des liens

Les pixels invisibles et certains liens individualisés peuvent constituer des
traceurs. Ils restent désactivés tant qu'une analyse documentée du régime de
l'article 82 de la loi Informatique et Libertés et, si nécessaire, un mécanisme
de consentement adapté à l'email n'ont pas été mis en place. La bannière cookies
du site ne constitue pas, à elle seule, la preuve d'un consentement au suivi des emails.

## 9. Avant le 1er envoi

Checklist :
- [ ] Finalité, audience et base légale qualifiées pour chaque segment
- [ ] Mise en balance de l'intérêt légitime archivée pour tout segment B2B concerné
- [ ] Texte d'information et opposition disponibles dès la collecte
- [ ] Preuves de consentement disponibles pour les segments qui l'exigent
- [ ] Outil ESP, entité contractante, DPA, sous-traitants et transferts vérifiés
- [ ] Politique `/legal/confidentialite` et registre des traitements mis à jour
- [ ] Page et lien de désinscription testés de bout en bout
- [ ] Liste d'opposition testée contre les imports et campagnes ultérieurs
- [ ] Pixels et suivi individuel désactivés, ou régime et consentement documentés
- [ ] Liste segmentée et source de chaque adresse traçable
- [ ] Test de l'email côté Litmus / Email on Acid pour rendu et a11y
- [ ] Test sur une liste interne avant tout envoi externe
- [ ] Preuve de la revue, du test et de la date de lancement archivée
