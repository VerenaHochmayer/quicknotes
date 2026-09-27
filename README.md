# QuickNotes

## Setup

Abhängigkeiten installieren:

npm install

Projekt starten:

npm run dev

Danach die angezeigte localhost-Adresse im Browser öffnen.

## Struktur

Die Logik für die Notizen liegt im Composable `useNotes.js`, damit sie von den Komponenten getrennt ist. Die Komponenten sind hauptsächlich für die Darstellung und den Datenfluss über Props und Events zuständig. Die Speicherung im localStorage wird separat in `useLocalStorage.js` behandelt.

## Reflexionsfragen

### Warum darf NoteCard die Notiz-Prop nicht selbst verändern, und wie lösen wir das stattdessen?

Props werden vom Parent an das Child übergeben und sollen im Child nicht direkt verändert werden. `NoteCard` sendet deshalb beim Löschen ein `delete`-Event mit der ID der Notiz an `App.vue`. Dort wird anschließend `deleteNote()` aufgerufen.

### Was passiert, wenn zwei Komponenten dasselbe useNotes() aufrufen — teilen sie sich die Notizen oder nicht?

Nein. `useNotes()` wird für jede Komponente neu ausgeführt, deshalb bekommt jede ihre eigenen Notizen.

### Wozu dient das Note-Interface, wenn der Code auch ohne liefe?

Das `Note`-Interface legt fest, wie eine Notiz aufgebaut ist und hilft TypeScript, Fehler zu erkennen.