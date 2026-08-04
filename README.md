# Officina Aversa

Landing page SPA (Vue 3 + Vite), solo frontend. Implementazione del progetto Claude Design
`Officina Aversa.dc.html`.

## Comandi

```bash
npm install
npm run dev      # server di sviluppo
npm run build    # build in dist/
npm run preview  # anteprima della build
```

## Struttura

```
index.html                 font + mount point
src/main.js                bootstrap Vue
src/App.vue                composizione delle sezioni
src/styles/main.css        design token (colori, tipografia) e tutti gli stili
src/data/content.js        contenuti: servizi, progetti, processo, testimonianze, dati officina
src/components/            una sezione per componente
public/img/                foto dell'officina, ottimizzate
```

La mappa dei contatti usa Leaflet con le tile scure di CARTO: nessuna API key, serve solo
connessione. Il pulsante "Come arrivare" apre le indicazioni su Google Maps.

## Foto

Le foto reali stanno in `public/img/` (ottimizzate a max 1400–2000px, JPEG progressivo).
Gli scatti originali sono archiviati in `foto-originali/`, che resta in locale ed è
esclusa dal versionamento (`.gitignore`) — non fare affidamento solo su quella copia.
Le foto ricavate da video avevano i comandi del player in basso: sono state ritagliate.

- `hero.jpg` → sezione hero
- `squadra.jpg` → sezione "Chi siamo"
- `progetto-*.jpg` → sezione "Progetti" (5 lavori)
- `g-*.jpg` → sezione "Dall'officina" (galleria con visore a schermo intero)

## Da completare

- **Descrizioni dei progetti**: titoli e testi in `src/data/content.js` sono ricavati dai
  nomi dei file e da quel che si vede nelle foto. Vanno sostituiti con i dati reali di
  ogni lavoro (tempi, lavorazioni, esito).
- **Coordinate mappa**: `officina.mappa` in `src/data/content.js` punta al centro di
  Piazza di Pandola (40.8064791, 14.7720486), non al civico esatto. Sostituire con le
  coordinate precise dell'ingresso officina.
- I numeri della sezione statistiche (18 anni, 900+, 640 CV, 42 one-off) vengono dal
  design: da confermare.

Testi, numeri e recapiti sono tutti in `src/data/content.js`: si modificano da lì senza
toccare i componenti.
