# Digitalt CV – Frontend (Uppgift 2)

En webbplats byggd i TypeScript för att visa och hantera arbetserfarenheter genom att kommunicera med ett externt API jag själv skapat i del 1.

## Teknikval

- **Språk:** TypeScript
- **Build-tool:** Vite

## Funktioner

- Visning av arbetserfarenheter i en lista.
- Formulär för att lägga till nya erfarenheter.
- Möjlighet att radera erfarenheter.
- Responsiv design för mobil och desktop.

## Installation & Körning

1. Installera beroenden: `npm install`
2. Starta utvecklingsservern: `npm run dev`

## Reflektion

Största fokus lades på att hantera asynkrona anrop (`fetch`) och att säkerställa att gränssnittet uppdateras direkt när användaren lägger till eller raderar data. En utmaning var att jag slarvade med att använda samma termer databas vs frontend vilket tog mig tid att lista ut och lösa. Lärde mig också hur mycket problem som kan uppstå om man råkat starta servern flera gånger från olika terminaler.
