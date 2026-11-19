# Play App

Spiele-App für Kinder (Vite, React, TypeScript).

## Neues Spiel hinzufügen

1. Eine bestehende Datei aus `src/games/<kategorie>/` kopieren und umbenennen.
2. `id` gleich dem Dateinamen (ohne `.ts`) setzen. IDs nie ändern, sonst geht der Fortschritt verloren.
3. `order` wählen (10er-Schritte, so lässt sich dazwischen einfügen).
4. Neues Material zuerst in `src/games/items.ts` ergänzen.
5. `pnpm test` ausführen.
