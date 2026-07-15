# Stijlgids — vv Noordwijk demo-website

## Concept
**"De trots van de Bollenstreek"** — een cinematische, donkere sportsite op het presentatieniveau van een BVO, maar onmiskenbaar Noordwijks. Geen generieke verenigingssite: het licht van de vuurtoren (uit het clublogo) is het signatuur-element dat door de hele site heen terugkomt als bewegende lichtbundel.

## Kleurpalet
| Rol | Kleur | Gebruik |
|---|---|---|
| Primair rood | `#DE0917` | CTA's, accenten, kickers, lijnen (huisstijlkleur van de site) |
| Logo-rood | `#E8362D` | Gradiënten samen met primair rood |
| Diep donker | `#0B0B0D` | Basisachtergrond (bijna zwart) |
| Paneel-donker | `#141417` | Kaarten, secties |
| Wit | `#FFFFFF` | Koppen |
| Gedempt grijs | `#A6A6AD` | Bodytekst op donker |
| Duinzand | `#E9DFC8` | Subtiel accent (vuurtorenlicht, details) |

## Typografie
- **Display**: Anton (Google Fonts) — condensed caps, voetbalposter-energie. Letterspacing 0.01em, uppercase.
- **Body**: Inter — schoon, goed leesbaar op donker.
- Kickers: Inter 700, uppercase, letterspacing 0.18em, rood of zand.

## Signatuur-element
De **vuurtorenlichtbundel**: een langzaam draaiende conische lichtsweep (duinzand-tint, lage opacity) achter de hero en in de afsluitende CTA-sectie, plus een SVG-vuurtorensilhouet. Daarnaast: de **rood-witte verticale strepen** van het thuisshirt als sectiescheiding (dunne streepmotief-rand).

## Componenten
- **Navigatie**: fixed, transparant → blur bij scroll; logo links, links in small caps; CTA-pill "Word lid" rechts (outlined → vult rood bij hover).
- **Hero**: 100vh, teamfoto full-bleed met donkere gradiënt, woord-voor-woord animerende kop, twee CTA's, scroll-indicator.
- **Countdown**: live aftellen naar de eerstvolgende wedstrijd (echte datum), grote Anton-cijfers.
- **Statistieken**: count-up bij inscrollen (1933, ±850 leden, 30+ jeugdteams, 2× landskampioen).
- **Nieuwskaarten**: donkere kaarten, categorielabel in rood, hover: translateY(-4px) + rode gloed.
- **Spelerskaarten**: portretfoto, rugnummer groot in Anton achter de foto, naam + positie; hover: foto scale 1.04.
- **Sponsormarquee**: oneindige horizontale scroll met echte partners (Horesca Lieferink, Robey, Troostwijk, Peut), pauzeert bij hover.

## Tone of voice
Warm, trots, toegankelijk — clubtaal, geen corporate jargon. "De roodwitte familie", "Sportpark Duinwetering", "mooi weer voetballers" (zelfspot uit hun eigen geschiedenis-tekst). Alle feitelijke teksten (geschiedenis, missie, erelijst, prijzen, selectie) letterlijk of nauwkeurig overgenomen van vvnoordwijk.nl.

## Anti-AI-look check
- ✅ Geen standaard blauw/wit — palet komt uit de huisstijl (rood/wit/donker + duinzand)
- ✅ Signatuur-element: vuurtorenlichtbundel (uniek voor déze club)
- ✅ Echte content: spelers, staf, agenda, prijzen, geschiedenis van de club zelf
- ✅ Echte foto's (© Kees Kuijt / vv Noordwijk) — geen stockbeelden
- ✅ Typografie met karakter (Anton condensed caps)

## Pagina's
1. `index.html` — hero, countdown volgende wedstrijd, nieuws, statistieken, geschiedenis-teaser (Van der Sar), agenda, sponsors
2. `club.html` — geschiedenis, erelijst, records, profvoetballers, missie & visie
3. `selectie.html` — selectie 1e elftal met foto's + technische staf
4. `wedstrijden.html` — oefenprogramma, competitiestart, entreeprijzen, seizoenkaarten
5. `jeugd.html` — jeugdopleiding, proeftraining, Superliga, ASS-voetbal
6. `steun.html` — Business Club, Club van 100, Supportersclub, vrijwilligers

## Bronvermelding
Demo gebouwd op basis van content en beeldmateriaal van vvnoordwijk.nl. Foto's: Kees Kuijt — © vv Noordwijk.
