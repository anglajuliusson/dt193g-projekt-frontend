# Lundbergs Bryggeri - Frontend

Detta är frontend-delen av Lundbergs Bryggeri-projektet. Byggd som en SPA (Single Page Application) med Vue.js.

## Teknologier
- Vue 3 (Composition API)
- Vue Router
- Bulma (CSS-ramverk)
- Fetch API för kommunikation med backend

## Funktioner
- Inloggning och JWT-autentisering
- Visa och uppdatera användarprofil
- Hantera produkter (lista, lägga till, uppdatera, ta bort)
- Hantera produktkategorier
- Responsiv design
- Anpassad färgpalett (#B87333, #8B5E3C)

## Starta servern
- Kommando: npm run dev
- Frontend körs på http://localhost:5173

## Struktur
- src/components - Vue-komponenter (t.ex. formulär, tabeller)
- src/views - Sidor (login, profil, produkter, kategorier)
- src/router - Vue Router-konfiguration
- src/assets - CSS, bilder, typsnitt

## Konfiguration
- Frontend kommunicerar med backend på http://localhost:3000
- JWT-token sparas i localStorage efter login
- Användaren sparas i localStorage för profilvisning

## Slutsatser
Frontend använder Bulma för enkel styling och layout. Alla formulär och tabeller är responsiva och fungerar bra på både desktop och mobil.
