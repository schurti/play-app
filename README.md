# Play App

Spiele-App für Kinder (Vite, React, TypeScript).

## Neues Spiel hinzufügen

1. Eine bestehende Datei aus `src/games/<kategorie>/` kopieren und umbenennen.
2. `id` gleich dem Dateinamen (ohne `.ts`) setzen. IDs nie ändern, sonst geht der Fortschritt verloren.
3. `order` wählen (10er-Schritte, so lässt sich dazwischen einfügen).
4. Neues Material zuerst in `src/games/items.ts` ergänzen.
5. `pnpm test` ausführen.

## Entwickeln / Testen / Bauen / Deployen

```sh
pnpm install
pnpm dev        # Dev-Server unter http://localhost:5173/play-app/
pnpm lint       # ESLint
pnpm test       # Vitest (Unit- und Komponententests)
pnpm e2e        # Playwright (baut die App und startet pnpm preview auf Port 4173)
pnpm build      # tsc, Vite-Build, Kopie dist/index.html -> dist/404.html
```

Für `pnpm e2e` muss einmalig Chromium installiert werden: `pnpm exec playwright install chromium`.
Die E2E-Tests laufen bewusst nicht in der CI (Browser-Installation ist langsam); `pnpm lint`, `pnpm test` und `pnpm build` schon.

PWA-Icons werden aus `public/icon.svg` erzeugt: `pnpm generate-pwa-assets` (die PNGs liegen eingecheckt in `public/`).

### Deployen (GitHub Pages)

Die App läuft als Projektseite unter `https://<user>.github.io/play-app/`. Bei jedem Push auf `main` baut
`.github/workflows/deploy.yml` die App und veröffentlicht `dist`.

Einmalig im Repository: **Settings → Pages → Source: GitHub Actions**.

GitHub Pages kennt keinen SPA-Fallback; deshalb kopiert der Build `index.html` nach `404.html`, damit Direktaufrufe wie `/play-app/sticker` funktionieren.

Heisst das Repository anders, den Basis-Pfad beim Build überschreiben, z. B. `BASE_PATH=/mein-repo/ pnpm build`
(in der CI als `env: BASE_PATH` am Build-Schritt setzen). Bei einer Seite auf der Wurzel einer Domain: `BASE_PATH=/`.

## Bildnachweis

Die Spielbilder unter `public/img/emoji/` stammen aus
[Microsoft Fluent Emoji](https://github.com/microsoft/fluentui-emoji) (3D-Stil, MIT-Lizenz, siehe `public/img/emoji/LICENSE.txt`).
Neue Spiele mit einem Emoji ohne Bild zeigen automatisch das normale Emoji an.
