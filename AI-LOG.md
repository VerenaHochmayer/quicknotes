# AI-LOG

## 1. useNotes

Prompt: Wie kann ich `addNote`, `deleteNote` und `filteredNotes` in `useNotes.js` umsetzen?

Übernommen: Die Logik zum Hinzufügen, Löschen und Filtern von Notizen.

Verstanden: Die Logik für die Notizen liegt im Composable und nicht direkt in den Komponenten.

## 2. Props und Events

Prompt: Wie kann `NoteCard` eine Notiz löschen, ohne die Prop direkt zu verändern?

Übernommen: `NoteCard` sendet ein `delete`-Event mit der ID an `App.vue`.

Verstanden: Props gehen vom Parent zum Child und Events können Informationen zurück an den Parent senden.

## 3. Suche

Prompt: Warum funktioniert die Suche nach Tags mit `tag.name` nicht?

Übernommen: `tag.name` wurde durch `tag` ersetzt.

Verstanden: Die Tags sind Strings und haben deshalb keine `name`-Eigenschaft.

## 4. CSS

Prompt: Wie kann ich die Eingabefelder im Formular untereinander statt nebeneinander anzeigen?

Übernommen: Das Formular wurde mit CSS als Grid aufgebaut und die Eingabefelder auf die volle Breite gesetzt.

Verstanden: Mit `display: grid` und `gap` können die Formularelemente einfach untereinander angeordnet werden.

## 5. Setup

Prompt: Wie starte ich das Projekt mit npm?

Übernommen: Zuerst `npm install` und danach `npm run dev`.

Verstanden: `npm install` installiert die benötigten Abhängigkeiten und `npm run dev` startet den Entwicklungsserver.

## 6. AI-LOG

Prompt: Wie kann ich den AI-LOG passend zur Aufgabenstellung formulieren?

Übernommen: Eine übersichtliche Struktur mit Prompt, Übernommen und Verstanden.

Verstanden: Im AI-LOG werden die verwendeten KI-Anfragen und die übernommenen bzw. verstandenen Inhalte dokumentiert.