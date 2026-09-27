<script setup lang="ts">
import {ref} from 'vue'

// Eingabefelder
const title = ref('')
const content = ref('')
const tags = ref('')

// sendet eine neue Notiz an App.vue
const emit = defineEmits(['add'])

function submitNote() {
  // Leeren Inhalt oder Titel verhindern
  const newNote = {
    title: title.value,
    content: content.value,

    // tags bei Komma trennen und Leerzeichen entfernen
    tags: tags.value
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag !== '')
  }
  emit('add', newNote)

  // Eingabefelder zurücksetzen
  title.value = ''
  content.value = ''
  tags.value = ''
}

</script>

<template>
<form @submit.prevent="submitNote">
  <input v-model="title" placeholder="Title" required/>
  <textarea v-model="content" placeholder="Content" required/>
  <input v-model="tags" placeholder="Tags (separated with comma)" required/>

  <button type="submit">Add Note</button>
</form>
</template>

<style scoped>
input,
textarea {
  width: 100%;
  padding: 10px;

  border-radius: 10px;
  border: 1px solid #ccc;
  font: inherit;
}

textarea {
  min-height: 150px;
  resize: vertical;
}

button {
  padding: 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}
</style>