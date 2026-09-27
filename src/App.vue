<script setup>
import {ref} from 'vue'
import NoteCard from "./components/NoteCard.vue";
import NoteForm from "./components/NoteForm.vue";
import SearchBar from "./components/SearchBar.vue";
import {useNotes} from "./composables/useNotes.js";

// Suchbegriff für die Live-Suche
const searchTerm = ref('')

// Funktionen für Notizen aus dem Composable
const { addNote, deleteNote, filteredNotes } = useNotes()

// Gefilterte Notizen abhängig vom Suchbegriff
const visibleNotes = filteredNotes(searchTerm)
</script>

<template>
  <main>
    <h1>QuickNotes</h1>

    <!-- Neue Notiz hinzufügen -->
    <NoteForm @add="addNote" />

    <!-- Suchbegriff mit v-model aktualisieren -->
    <SearchBar v-model="searchTerm" />

    <!-- Gefilterte Notizen anzeigen -->
    <NoteCard
      v-for="note in visibleNotes"
      :key="note.id"
      :note="note"
      @delete="deleteNote"
    />
  </main>
</template>

<style scoped>
main {
  width: 600px;
  max-width: 90%;
  margin: auto;
  padding: 50px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}
</style>
