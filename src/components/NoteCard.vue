<script setup lang="ts">
import BaseCard from "./BaseCard.vue"
import type {Note} from '../types/note'

// Notiz wird von App.vue übergeben
defineProps<{
    note: Note
}>()

// Sendet die ID der zu löschenden Notiz an App.vue
const emit = defineEmits<{
  delete: [id: number]
}>()
</script>

<template>
  <BaseCard>
    <!-- Titel wird im Header-Slot von BaseCard angezeigt -->
    <template #header>
      {{note.title}}
    </template>

    <p>{{note.content}}</p>

    <!-- Tags der Notiz anzeigen -->
    <div class="tags">
      <span v-for="tag in note.tags" :key="tag" class="tag">{{ tag }}
      </span>
    </div>

    <!-- Lösch-Event an App.vue senden -->
    <button @click="emit('delete', note.id)">
      Delete
    </button>
  </BaseCard>
</template>

<style scoped>
.tags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 16px;
}

.tag {
  background-color: #2e303a;
  border-radius: 12px;
  padding: 2px 4px;
  font-size: 12px;
}
</style>