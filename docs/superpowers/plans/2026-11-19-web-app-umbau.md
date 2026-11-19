# Haushalts-Spielplatz als Web-App – Umbauplan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Die einzelne `index.html` (78 Spiele, 15 interaktive Werkzeuge, Filter, Favoriten, Sticker) wird zu einer typisierten, installierbaren Web-App, in der jedes Spiel eine eigene Datei ist – mit identischem Funktionsumfang.

**Architecture:** Vite-SPA mit React und TypeScript. Spiele sind reine Daten-Module (`src/games/<kategorie>/<id>.ts`), die per `import.meta.glob` automatisch eingesammelt werden – ein neues Spiel = eine neue Datei, keine Registrierung. Werkzeuge sind lazy geladene React-Komponenten, reine Logik (Filter, Sticker, Spiel des Tages) liegt testbar in `src/lib/`, Fortschritt in einem persistierten Zustand-Store.

**Tech Stack:** pnpm 10 · Vite (aktuelle stabile Major, mind. 7) · React 19 · TypeScript strict · React Router 7 (Library-Modus) · Zustand 5 (+ `persist`) · CSS Modules · `@fontsource/baloo-2` · `vite-plugin-pwa` · Vitest + Testing Library + jsdom · Playwright · ESLint + Prettier

**Spec:** Es gibt kein separates Spec-Dokument. Die Spezifikation ist das Verhalten der heutigen `index.html` (nach Task 1 unter `legacy/index.html`). Wo dieser Plan nichts anderes sagt, gilt: genau so wie dort.

## Global Constraints

- Sprache der Oberfläche: Deutsch (Schweizer Schreibweise: „ss“ statt „ß“, z. B. „Grösse“, „schliessen“). Alle Texte 1:1 aus `legacy/index.html` übernehmen.
- Node 26, pnpm 10. Versionen über `pnpm-lock.yaml` gepinnt.
- TypeScript `strict: true`, keine `any` in `src/`.
- Spiel-ID = Dateiname ohne `.ts` = bisherige `id` (z. B. `farben`). IDs ändern sich nicht, sonst geht Fortschritt verloren.
- Kategorien-Reihenfolge und -Farben unverändert: lernen `#3B82F6`, malen `#EC4899`, bewegung `#10B981`, basteln `#F59E0B`, musik `#A855F7`, forschen `#06B6D4`, ruhe `#64748B`, rollen `#EF4444`.
- Mobile first: max. Inhaltsbreite 680 px, untere Navigation fix, `env(safe-area-inset-bottom)` beachten, 2 Spalten < 560 px, sonst 3.
- Keine Netzwerk-Abhängigkeiten zur Laufzeit (Schrift selbst gehostet), damit die App offline läuft.
- Hosting: **GitHub Pages** als Projektseite unter `https://<user>.github.io/play-app/`. Vite `base` = `process.env.BASE_PATH ?? '/play-app/'`. Alle internen Pfade (Router, Manifest, Service Worker, Icons) hängen an `import.meta.env.BASE_URL`, nie an `/`.
- GitHub Pages hat keinen SPA-Fallback: Der Build kopiert `dist/index.html` nach `dist/404.html`, damit Direktaufrufe wie `/play-app/sticker` die App laden. Der Router nutzt `createBrowserRouter(routes, { basename: import.meta.env.BASE_URL })`.
- Auf `<user>.github.io` teilen sich alle Projektseiten dasselbe `localStorage`: Der Store-Key ist deshalb `play-app:progress`, nicht etwas Generisches.
- Deployment per GitHub Actions (`actions/upload-pages-artifact` + `actions/deploy-pages`) bei Push auf `main`. Das GitHub-Repo anlegen und pushen passiert nur nach ausdrücklicher Zustimmung des Users.

## Review Focus

1. **Bestehender Fortschritt:** Wer die alte Seite unter derselben Adresse benutzt hat, hat Sterne/Favoriten in `localStorage` unter `hs2` (oder ganz alt `hs_stars`). Erwartung: nach dem Umstieg ist alles noch da. → Test in Task 3 (`loadLegacy`).
2. **Sheet schliessen, während etwas läuft:** Stopptanz-Musik, Kommando-Automatik mit Sprachausgabe, Atem-Ballon oder Countdown laufen, und das Kind wischt das Sheet weg. Erwartung: sofort Stille, keine Timer mehr. → Test in Task 6.
3. **Unbekanntes Spiel:** Deep-Link `/?spiel=gibtsnicht` oder ein Verlaufseintrag eines später gelöschten Spiels. Erwartung: kein Absturz, Sheet bleibt zu, Verlauf überspringt den Eintrag. → Tests in Task 5 und 6.
4. **Zurück-Taste:** Auf dem Handy schliesst „Zurück“ das offene Spiel, statt die App zu verlassen. → E2E-Test in Task 9.
5. **Katalog wächst:** Nach dem Hinzufügen neuer Spiele rechnen Abzeichen „Legende“ und Gold-Sticker mit der aktuellen Anzahl, nicht mit 78. → Test in Task 2.

---

## Zielstruktur

```
package.json · vite.config.ts · tsconfig.json · playwright.config.ts · README.md
index.html                         # Vite-Einstieg (neu)
legacy/index.html                  # alte App, Referenz bis Task 9
public/icon.svg                    # Quelle für PWA-Icons
src/
  main.tsx · App.tsx · router.tsx
  styles/tokens.css · styles/global.css
  games/
    types.ts                       # Game, CategoryId, Tag, defineGame
    categories.ts                  # CATEGORIES (Name, Emoji, Farbe, Reihenfolge)
    items.ts                       # ITEM_NAMES (alle 37 Materialien) → type Item
    index.ts                       # GAMES via import.meta.glob
    games.test.ts                  # Katalog-Validierung
    lernen/farben.ts … rollen/post.ts   # 78 Dateien, eine pro Spiel
  tools/
    ids.ts                         # TOOL_IDS → type ToolId
    registry.ts                    # ToolId → lazy Komponente
    color/ColorTool.tsx + colors.ts  … (ein Ordner pro Werkzeug, Daten daneben)
  lib/ filter.ts · daily.ts · progress.ts · random.ts · audio.ts (+ *.test.ts)
  hooks/useTimers.ts
  store/progress.ts · store/filters.ts · store/legacy.ts
  components/ GameCard · GameGrid · CategoryChips · FilterPanel · TodayCard ·
              BottomNav · GameSheet · Countdown · Toast · Burst  (je .tsx + .module.css)
  pages/ GamesPage.tsx · FavoritesPage.tsx · StickerPage.tsx
e2e/app.spec.ts
```

---

### Task 0: Projektgerüst

**Files:**
- Create: `package.json`, `vite.config.ts`, `tsconfig*.json`, `index.html`, `src/main.tsx`, `src/App.tsx`, `src/styles/tokens.css`, `src/styles/global.css`, `src/test/setup.ts`, `.gitignore`, `eslint.config.js`, `.prettierrc`
- Move: `index.html` → `legacy/index.html`
- Test: `src/App.test.tsx`

**Interfaces:**
- Produces: `pnpm dev`, `pnpm build`, `pnpm test` (Vitest), `pnpm lint`; CSS-Variablen `--bg:#FFF8EC; --ink:#2b2a33; --muted:#6b6a75; --line:#0000000f` in `tokens.css`.

- [ ] **Step 1:** `git init`, alte Datei nach `legacy/index.html` verschieben, `pnpm create vite . --template react-ts`, danach `pnpm add react-router zustand @fontsource/baloo-2` und `pnpm add -D vitest jsdom @testing-library/react @testing-library/user-event @testing-library/jest-dom vitest-canvas-mock prettier`.
- [ ] **Step 2:** Vitest in `vite.config.ts` konfigurieren (`environment: 'jsdom'`, `setupFiles: ['src/test/setup.ts']`, Setup importiert `@testing-library/jest-dom/vitest` und `vitest-canvas-mock`). `tsconfig`: `strict: true`.
- [ ] **Step 3: Failing test** `App.test.tsx` → `it('zeigt den Titel')`: `render(<App/>)`, erwartet `getByRole('heading', { name: /Haushalts-\s*Spielplatz/ })`.
- [ ] **Step 4:** `pnpm test` → FAIL (Vite-Demo-Inhalt).
- [ ] **Step 5:** `App.tsx` rendert den Header `🏠 Haushalts-<br>Spielplatz` + Sterne-Pill (vorerst `0`). `global.css` übernimmt Body-, Button- und Header-Regeln aus `legacy/index.html` Zeilen 9–17; Schrift via `@fontsource/baloo-2/{500,600,700,800}.css`.
- [ ] **Step 6:** `pnpm test && pnpm build && pnpm lint` → alles grün.
- [ ] **Step 7:** Commit `chore: Vite/React/TS-Gerüst, alte App nach legacy/`.

---

### Task 1: Spiele in Einzeldateien

**Files:**
- Create: `src/games/types.ts`, `categories.ts`, `items.ts`, `index.ts`, `games.test.ts`, `src/tools/ids.ts`, 78 × `src/games/<kategorie>/<id>.ts`, `scripts/split-games.mjs` (wird im selben Task wieder gelöscht), `README.md`

**Interfaces:**
- Produces:
  ```ts
  type CategoryId = 'lernen'|'malen'|'bewegung'|'basteln'|'musik'|'forschen'|'ruhe'|'rollen'
  type Tag = 'allein'|'gruppe'|'leise'          // alt: A | P | L
  interface Game {
    id: string; title: string; emoji: string; category: CategoryId
    minAge: 3|4|5|6; minutes: number; items: Item[]; tags: Tag[]; order: number
    steps: string[]; learn: string; variants?: string; adultNote?: string; tool?: ToolId
  }
  defineGame(game: Game): Game                  // Identität, nur für Typprüfung
  CATEGORIES: Record<CategoryId, { name: string; emoji: string; color: string }>
  CATEGORY_IDS: readonly CategoryId[]           // feste Reihenfolge wie oben
  ITEM_NAMES: readonly [...] as const; type Item = typeof ITEM_NAMES[number]
  TOOL_IDS = ['color','number','letter','shape','animal','yoga','story','panto','dice','commands','dance','rhythm','breath','treasure','draw'] as const; type ToolId
  GAMES: readonly Game[]                        // sortiert: Kategorie-Reihenfolge, innerhalb Kategorie Reihenfolge wie in legacy
  getGame(id: string): Game | undefined
  ```
- Jede Spieldatei: `export default defineGame({ id: 'farben', … })`. `order` hält die Legacy-Reihenfolge innerhalb der Kategorie fest, in 10er-Schritten (10, 20, 30 …), damit man später dazwischen einfügen kann.

- [ ] **Step 1: Failing test** `games.test.ts`:
  - `GAMES.length === 78`
  - Anzahl je Kategorie: `{lernen:12, malen:11, bewegung:12, basteln:11, musik:7, forschen:10, ruhe:6, rollen:9}`
  - IDs eindeutig; jede ID entspricht dem Dateinamen (eigener `import.meta.glob('./*/*.ts', { eager: true })` im Test, Pfad `./<category>/<id>.ts` muss zu `game.category`/`game.id` passen)
  - `steps.length >= 1`, `minutes > 0`, `title`/`learn` nicht leer
  - Werkzeuge: jedes der 15 `TOOL_IDS` wird von genau einem Spiel verwendet (heutiger Stand)
  - `GAMES[28].id === 'kommando'` (Reihenfolge wie legacy, wichtig für „Spiel des Tages“)
- [ ] **Step 2:** `pnpm test games` → FAIL.
- [ ] **Step 3:** Typen, `categories.ts`, `ids.ts` schreiben. `items.ts` mit allen 37 Materialien aus legacy (alphabetisch).
- [ ] **Step 4:** `scripts/split-games.mjs`: liest `legacy/index.html`, schneidet das Array `const G=[…]` heraus, wertet es aus und schreibt pro Spiel eine Datei mit Feld-Mapping `t→title, e→emoji, c→category, a→minAge, m→minutes, i→items, f→tags (A→allein, P→gruppe, L→leise), s→steps, l→learn, v→variants, ad→adultNote, tool→tool` plus `order`. Ausgabe danach mit Prettier formatieren. Skript laufen lassen, Ergebnis stichprobenartig gegen legacy prüfen, Skript löschen.
- [ ] **Step 5:** `index.ts`: `import.meta.glob<{ default: Game }>('./*/*.ts', { eager: true })`, Testdateien ausschliessen, sortieren nach `CATEGORY_IDS`-Index, dann `order`.
- [ ] **Step 6:** `pnpm test && pnpm exec tsc --noEmit` → grün (Tippfehler in Materialien oder Werkzeug-IDs sind jetzt Typfehler).
- [ ] **Step 7:** `README.md` mit Abschnitt „Neues Spiel hinzufügen“: Datei in den Kategorie-Ordner kopieren, `id` = Dateiname, `order` wählen, neues Material zuerst in `items.ts` ergänzen, `pnpm test`.
- [ ] **Step 8:** Commit `feat: 78 Spiele als einzelne typisierte Dateien`.

---

### Task 2: Reine Logik (Filter, Spiel des Tages, Sticker)

**Files:**
- Create: `src/lib/filter.ts`, `daily.ts`, `progress.ts`, `random.ts` + je `*.test.ts`

**Interfaces:**
- Consumes: `Game`, `GAMES`, `CATEGORIES`, `Item` aus Task 1.
- Produces:
  ```ts
  interface Filters { cat: 'alle'|CategoryId; age: 0|3|4|5|6; dur: 0|10|20|99
    sit: Partial<Record<Tag|'ohne', true>>; have: Partial<Record<Item, true>>; q: string }
  EMPTY_FILTERS: Filters
  activeFilterCount(f: Filters): number        // age, dur, je sit, je have (cat und q zählen nicht)
  matchGame(g: Game, f: Filters): boolean
  itemsByFrequency(games: readonly Game[]): Item[]   // häufigste zuerst, Gleichstand alphabetisch (localeCompare)
  gameOfTheDay(games: readonly Game[], date: Date): Game
  type StickerKey = CategoryId | `${CategoryId}*` | `b${number}`
  badges(total: number): { min: number; emoji: string; name: string }[]  // [5 🥉 Entdecker, 15 🥈 Spiel-Profi, 30 🥇 Spiel-Meister, total 🏆 Legende]
  catProgress(games, done: Record<string, number>, cat: CategoryId): { done: number; all: number }
  stickerSet(games, done): StickerKey[]         // ≥3 in Kategorie → cat; alle → cat*; distinct ≥ min → b<min>
  pick<T>(arr: readonly T[], rng?: () => number): T
  ```

- [ ] **Step 1: Failing tests** (mit echten `GAMES`):
  - `itemsByFrequency(GAMES)` hat Länge 37 und beginnt mit `['Stifte','Papier','Klebeband','Socken','Becher','Karton']`
  - `matchGame`: Suche `'leise'` trifft `kim`; `'party'` trifft `reime`; `age:3` schliesst `buchstabe` aus; `dur:10` schliesst `collage` aus; `dur:99` trifft `karton`, nicht `farben`; `sit.ohne` trifft `farben`, nicht `kim`; `have:{Papier,Stifte}` trifft `faltmonster`, nicht `collage`; mit `sit.ohne` bleiben genau 19 Spiele
  - `gameOfTheDay(GAMES, new Date(2026,10,19)).id === 'kommando'` (Formel: `Math.floor(Date.UTC(y,m,d)/864e5) % games.length`, lokale Datumsteile)
  - `stickerSet`: 3 Lernspiele erledigt → enthält `'lernen'`, nicht `'lernen*'`; alle 6 Ruhe-Spiele → `'ruhe'` und `'ruhe*'`; 5 beliebige → `'b5'`
  - Review Focus 5: mit einer 4-Spiele-Fixture ergibt `badges(4).at(-1).min === 4`, und alle 4 erledigt → `'b4'` im Set
  - `pick(['a','b','c'], () => 0.99) === 'c'`
- [ ] **Step 2:** `pnpm test lib` → FAIL.
- [ ] **Step 3:** Implementieren nach `match()`, `catProgress()`, `stickerSet()` in legacy Zeilen 485–533. Suchtext wie legacy: Titel + Lernziel + Materialien + Kategoriename + `'leise ruhig'` bei Tag leise + `'party gruppe'` bei Tag gruppe.
- [ ] **Step 4:** `pnpm test lib` → PASS.
- [ ] **Step 5:** Commit `feat: Filter-, Tages- und Sticker-Logik`.

---

### Task 3: Fortschritts- und Filter-Store

**Files:**
- Create: `src/store/progress.ts`, `src/store/filters.ts`, `src/store/legacy.ts`, `src/store/progress.test.ts`

**Interfaces:**
- Consumes: `stickerSet`, `GAMES` (Task 1/2).
- Produces:
  ```ts
  interface Progress { stars: number; done: Record<string, number>; fav: Record<string, true>; hist: { id: string; t: number }[] }
  useProgress: Zustand-Store mit Progress & {
    markDone(id: string, now?: number): StickerKey[]   // gibt neu gewonnene Sticker/Abzeichen zurück
    toggleFav(id: string): boolean                     // true = jetzt Favorit
    reset(): void }
  loadLegacy(storage: Pick<Storage,'getItem'>): Progress | null   // liest 'hs2', sonst 'hs_stars'
  useFilters: Zustand-Store mit Filters & { set(patch: Partial<Filters>): void; toggleSit(k): void; toggleHave(i: Item): void; resetFilters(): void }
  ```
- `persist`-Key `play-app:progress`, `version: 1`. Fehlt der Key, wird beim ersten Laden `loadLegacy(localStorage)` übernommen. Alle `localStorage`-Zugriffe in try/catch (privater Modus).

- [ ] **Step 1: Failing tests:**
  - `markDone('farben', 1000)` → `stars 1`, `done.farben 1`, `hist[0] = {id:'farben', t:1000}`; Verlauf wird auf 30 Einträge gekappt
  - dritter verschiedener Lern-Erfolg → Rückgabe enthält `'lernen'`; fünfter verschiedener insgesamt → `'b5'`
  - `toggleFav('kim')` zweimal → `true`, dann `false`, `fav` wieder leer
  - Review Focus 1: `loadLegacy` mit `hs2 = '{"stars":7,"done":{"farben":2},"fav":{"kim":1},"hist":[]}'` → `stars 7`, `fav.kim true`; nur `hs_stars = '4'` → `stars 4`; kaputtes JSON → `null`
- [ ] **Step 2:** `pnpm test store` → FAIL.
- [ ] **Step 3:** Implementieren (`zustand/middleware` `persist` + `createJSONStorage`).
- [ ] **Step 4:** `pnpm test store` → PASS.
- [ ] **Step 5:** Commit `feat: persistenter Fortschritt mit Übernahme alter Daten`.

---

### Task 4: Audio und Timer-Hook

**Files:**
- Create: `src/lib/audio.ts`, `src/hooks/useTimers.ts`, `src/hooks/useTimers.test.ts`

**Interfaces:**
- Produces:
  ```ts
  audioContext(): AudioContext | null           // lazy, resume() falls suspended
  tone(freq: number, dur: number, type?: OscillatorType, vol?: number, when?: number): void
  noise(dur: number, vol?: number): void
  speak(text: string): void                     // de-DE, bricht laufende Ausgabe ab
  stopSpeech(): void
  fanfare(): void
  useTimers(): { every(fn: () => void, ms: number): number; later(fn: () => void, ms: number): number; clear(id: number): void; clearAll(): void }
  ```
- `audio.ts` übernimmt legacy Zeilen 554–558 unverändert in der Wirkung; alle Funktionen sind No-ops, wenn kein AudioContext existiert (jsdom).

- [ ] **Step 1: Failing test** (fake timers): Komponente startet `every(fn, 100)` und `later(fn2, 500)`, wird nach 250 ms unmounted → `fn` 2×, `fn2` 0× aufgerufen, auch nach weiteren 1000 ms.
- [ ] **Step 2:** FAIL → **Step 3:** implementieren (IDs in `useRef<Set<number>>`, Cleanup im `useEffect`-Return) → **Step 4:** PASS.
- [ ] **Step 5:** Commit `feat: Audio-Helfer und useTimers`.

---

### Task 5: Seiten, Navigation, Karten und Filter

**Files:**
- Create: `src/router.tsx`, `src/pages/GamesPage.tsx`, `FavoritesPage.tsx`, `StickerPage.tsx`, `src/components/{GameCard,GameGrid,CategoryChips,FilterPanel,TodayCard,BottomNav,Toast}.tsx` + `.module.css`, `src/pages/pages.test.tsx`
- Modify: `src/App.tsx`, `src/main.tsx`

**Interfaces:**
- Consumes: Stores (Task 3), `matchGame`, `gameOfTheDay`, `itemsByFrequency`, `catProgress`, `badges` (Task 2).
- Produces:
  - Routen (relativ zum `basename` = `import.meta.env.BASE_URL`): `/` Spiele, `/favoriten`, `/sticker`; unbekannte Pfade leiten auf `/` um. Ein offenes Spiel ist der Such-Parameter `?spiel=<id>` auf jeder Route (Sheet in Task 6).
  - `openGame(id)` = `navigate({ search: '?spiel=' + id }, { state: { fromApp: true } })` (push, damit Zurück schliesst); `closeGame()` = `navigate(-1)` wenn `location.state?.fromApp`, sonst Parameter per `replace` entfernen (Deep-Link soll die App nicht verlassen).
  - `useToast(): (msg: string) => void` (Context in `Toast.tsx`, 2600 ms sichtbar).
  - BottomNav: 🏠 Spiele · 🎲 Zufall · ❤️ Favoriten · 🏆 Sticker. Zufall öffnet ein zufälliges Spiel aus der sichtbaren Liste (auf `/favoriten` aus den Favoriten; leer → aus allen).
- CSS 1:1 aus legacy Zeilen 18–55 und 98–117 in die jeweiligen Module übertragen.

- [ ] **Step 1: Failing tests** (`MemoryRouter`):
  - `/` zeigt „78 Spiele“ und die Karte „⭐ Spiel des Tages“
  - Klick auf Chip „🌙 Ruhe“ → „6 Spiele“, Tageskarte verschwindet
  - Suche „socken“ → nur Spiele mit „socken“ im Suchtext; Suche „xyzxyz“ → Text „Keine Spiele passen.“
  - Filter-Button zeigt „⚙️ Filter (2)“ nach Alter 3 + Dauer „bis 10 Min.“; „✕ Alle Filter zurücksetzen“ → „⚙️ Filter“
  - `/favoriten` ohne Favoriten → „Noch keine Favoriten.“
  - `/sticker` zeigt „0/78“ und acht Kategorie-Sticker; Review Focus 3: Verlauf mit `{id:'gibtsnicht'}` rendert ohne Fehler und überspringt den Eintrag
  - „Fortschritt zurücksetzen“ löscht erst beim zweiten Tippen (Text dazwischen: „Wirklich alles löschen? Nochmal tippen“)
- [ ] **Step 2:** FAIL → **Step 3:** implementieren → **Step 4:** PASS, zusätzlich `pnpm dev` und auf 375 px Breite mit legacy vergleichen.
- [ ] **Step 5:** Commit `feat: Seiten, Navigation und Filter`.

---

### Task 6: Spiel-Sheet

**Files:**
- Create: `src/components/GameSheet.tsx` + `.module.css`, `Countdown.tsx`, `Burst.tsx`, `src/components/GameSheet.test.tsx`
- Modify: `src/App.tsx` (Sheet einmal global rendern)

**Interfaces:**
- Consumes: `getGame`, `useProgress.markDone/toggleFav`, `useToast`, `fanfare`, `stopSpeech`, `TOOLS` (Task 7, bis dahin Platzhalter `null`).
- Produces: `<GameSheet />` liest `?spiel`, rendert nichts bei unbekannter ID (und entfernt den Parameter). Werkzeug wird mit `key={game.id}` in `<Suspense>` gerendert, damit es beim Schliessen/Wechseln unmountet.
- Inhalt und Texte wie legacy `openG()` Zeilen 658–675: Kopf mit Emoji/Titel/Meta, ❤️/🤍, ✕, „Ihr braucht:“, Erwachsenen-Hinweis 👩‍👧, Schritte, „🔀 Varianten:“, „💡 Das lernt ihr:“, „Geschafft! ⭐“, Timer 1/5/10 Min.
- Schliessen per ✕, Hintergrund-Tipp, Escape und Zurück-Taste. Beim Schliessen: `stopSpeech()`; Countdown stoppt durch Unmount.
- „Geschafft!“: `markDone` → Burst + Fanfare → Toast (neuer Sticker: „🏆 Neuer Sticker: 🧠 Lernen!“, golden: „✨ Goldener Sticker: …“, Abzeichen: „🎖️ Neues Abzeichen: 🥉 Entdecker!“, sonst „⭐ Super gemacht! +1 Stern“) → nach 650 ms schliessen.

- [ ] **Step 1: Failing tests:**
  - `/?spiel=farben` zeigt Überschrift „Farben-Jagd“; `/?spiel=gibtsnicht` zeigt kein Dialogfenster
  - Escape schliesst; Klick auf 🤍 → Toast „❤️ Zu Favoriten hinzugefügt“ und Button zeigt ❤️
  - „Geschafft! ⭐“ → Sterne-Pill „1“, Toast „⭐ Super gemacht! +1 Stern“
  - Countdown (fake timers): „⏱ 1 Min.“ → „1:00“, nach 60 s „Zeit um! 🎉“
  - Review Focus 2 (Teil 1): Countdown starten, Sheet schliessen, 70 s weiterlaufen lassen → gemocktes `tone` wird nicht aufgerufen; `speechSynthesis.cancel` wurde beim Schliessen aufgerufen
- [ ] **Step 2:** FAIL → **Step 3:** implementieren → **Step 4:** PASS.
- [ ] **Step 5:** Commit `feat: Spiel-Detailansicht mit Timer und Belohnung`.

---

### Task 7: Werkzeuge ohne Zeitsteuerung

**Files:**
- Create: `src/tools/registry.ts`, `src/tools/ToolProps.ts`, Ordner `color/`, `number/`, `letter/`, `shape/`, `animal/`, `yoga/`, `story/`, `panto/`, `treasure/`, `dice/` je mit `<Name>Tool.tsx` und Datendatei (Daten aus legacy Zeilen 444–464), `src/tools/tools-simple.test.tsx`

**Interfaces:**
- Produces:
  ```ts
  interface ToolProps { game: Game; color: string }   // color = Kategorie-Farbe
  TOOLS: Record<ToolId, LazyExoticComponent<ComponentType<ToolProps>>>  // Record erzwingt Vollständigkeit
  ```
- Tiere bekommen in den Daten ein Feld `article: 'ein'|'eine'` statt der Sonderliste in legacy Zeile 573.
- Verhalten und Texte wie legacy `runTool` Zeilen 566–637.

- [ ] **Step 1: Failing tests** (`vi.spyOn(Math, 'random').mockReturnValue(0)`):
  - color: „Finde etwas in Rot!“; „🔄 Neue Aufgabe“ vorhanden
  - letter: zeigt „A“; shape: „Finde etwas mit der Form: Kreis!“
  - animal: „Bewegt euch wie ein Frosch!“; mit Krabbe-Index: „… wie eine Krabbe!“
  - panto: Wort „Elefant“ erst nach Tipp auf „🤫 Nur wer dran ist: hier tippen“ sichtbar
  - dice: „2 Würfel“ → Summe im Format `a + b = s`
  - treasure: genau 5 Hinweise, Lösungen in `<details>`
- [ ] **Step 2:** FAIL → **Step 3:** implementieren → **Step 4:** PASS.
- [ ] **Step 5:** Commit `feat: einfache Spiel-Werkzeuge`.

---

### Task 8: Werkzeuge mit Ton, Zeit oder Zeichnen

**Files:**
- Create: Ordner `commands/`, `dance/`, `rhythm/`, `breath/`, `draw/`, `src/tools/tools-timed.test.tsx`
- Modify: `src/tools/registry.ts`

**Interfaces:**
- Consumes: `useTimers`, `tone`, `noise`, `speak` (Task 4).
- Alle Intervalle ausschliesslich über `useTimers` (kein direktes `setInterval`), damit Review Focus 2 hält.

- [ ] **Step 1: Failing tests** (fake timers, `audio.ts` gemockt):
  - commands (random 0): „➡️ Nächster Befehl“ → „Kommando:“ und „Hüpf auf einem Bein!“; „▶ Automatisch“ → Text wechselt zu „⏸ Pause“, nach 4500 ms neuer Befehl
  - dance: „▶ Musik starten“ → „■ Stopp“, `tone` wird aufgerufen; erneut tippen → „▶ Musik starten“, keine weiteren `tone`-Aufrufe
  - Review Focus 2 (Teil 2): über `<GameSheet>` mit `/?spiel=stopptanz` Musik starten, Sheet schliessen, 5 s weiter → kein `tone`-Aufruf mehr; dasselbe für `/?spiel=kommando` mit „▶ Automatisch“ und `speak`
  - rhythm: Muster mit 3–6 Symbolen aus 👏🦶🥁
  - breath: „▶ Start“, 10 × 4000 ms → „Super entspannt! 🌟“, Button „▶ Nochmal“
  - draw: Canvas vorhanden, 10 Farbknöpfe, „🗑️ Neu“ vorhanden
- [ ] **Step 2:** FAIL → **Step 3:** implementieren → **Step 4:** PASS, dann im Browser Ton, Sprachausgabe und Zeichnen mit Finger/Maus prüfen.
- [ ] **Step 5:** Commit `feat: Werkzeuge mit Ton, Timer und Zeichenfläche`.

---

### Task 9: PWA, GitHub Pages, E2E und Abschluss

**Files:**
- Create: `public/icon.svg`, `playwright.config.ts`, `e2e/app.spec.ts`, `.github/workflows/deploy.yml`
- Modify: `vite.config.ts`, `package.json` (Scripts `build` inkl. 404-Kopie, `e2e`, `generate-pwa-assets`), `README.md`
- Delete: `legacy/index.html`

**Interfaces:**
- `vite-plugin-pwa` mit `registerType: 'autoUpdate'`, Manifest: `name 'Haushalts-Spielplatz'`, `short_name 'Spielplatz'`, `lang 'de'`, `display 'standalone'`, `start_url` und `scope` = Base-Pfad, `theme_color` und `background_color` `#FFF8EC`. Icons 192/512 + maskable aus `public/icon.svg` via `@vite-pwa/assets-generator`. Workbox `navigateFallback` = `index.html` (relativ zur Base).
- `build`-Script: `tsc -b && vite build && cp dist/index.html dist/404.html`.
- `deploy.yml`: Trigger `push` auf `main` + `workflow_dispatch`; Job `build` (pnpm-Setup, Node 26, `pnpm install --frozen-lockfile`, `pnpm test`, `pnpm build`, `actions/upload-pages-artifact` mit `dist`), Job `deploy` (`actions/deploy-pages`, `permissions: pages: write, id-token: write`, Environment `github-pages`).

- [ ] **Step 1:** `pnpm add -D vite-plugin-pwa @vite-pwa/assets-generator @playwright/test`, `pnpm exec playwright install chromium`.
- [ ] **Step 2: Failing E2E** (`pnpm build && pnpm preview`, Playwright `baseURL` = `http://localhost:4173/play-app/`, Viewport 375×812):
  - Startseite → Karte „Farben-Jagd“ antippen → Sheet offen → `page.goBack()` → Sheet zu, Pfad ist `/play-app/` (Review Focus 4)
  - Direktaufruf `/play-app/sticker` zeigt „🏆 Sticker-Album“
  - „Geschafft! ⭐“ → Reload → Sterne-Pill zeigt weiterhin 1
  - 🎲 Zufall öffnet ein Sheet
  - `/play-app/manifest.webmanifest` liefert `short_name: 'Spielplatz'` und `scope: '/play-app/'`; `dist/sw.js` und `dist/404.html` existieren
- [ ] **Step 3:** FAIL → **Step 4:** PWA, 404-Kopie und Workflow einrichten, Icons erzeugen → **Step 5:** PASS.
- [ ] **Step 6:** Abschlussvergleich: legacy und neue App nebeneinander auf 375 px; jede Kategorie, je ein Spiel mit Werkzeug öffnen. Danach `legacy/index.html` löschen, README um „Entwickeln / Testen / Bauen / Deployen (GitHub Pages: Settings → Pages → Source: GitHub Actions)“ ergänzen.
- [ ] **Step 7:** `pnpm lint && pnpm test && pnpm e2e && pnpm build` → alles grün.
- [ ] **Step 8:** Commit `feat: PWA, GitHub-Pages-Deployment, E2E-Tests, Legacy entfernt`. Kein Push – Repo-Anlage und Push erst nach Rückfrage beim User.

---

## Danach (nicht Teil dieses Plans)

- **Katalog massiv erweitern:** Separater Schritt nach Abschluss dieses Plans (vom User so entschieden). Mit Task 1 ist ein neues Spiel eine Datei plus `pnpm test`.
- Optional später: Filter in der URL, Teilen-Button pro Spiel, Synchronisation zwischen Geräten.
