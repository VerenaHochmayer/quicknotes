import { computed } from 'vue'
import { useLocalStorage } from './useLocalStorage.js'

export function useNotes() {
    const notes = useLocalStorage('quicknotes', [])

    function addNote(note) {
        // TODO: neue Notiz mit eigener id an die Liste hängen
        notes.value.push({
            id: Date.now(),
            ...note
        })
    }

    function deleteNote(id) {
        // TODO: Notiz mit dieser id entfernen
        notes.value = notes.value.filter(note => note.id !== id)
    }

    function filteredNotes(term) {
        // TODO: nach Titel, Text/Content oder Tag filtern
        return computed(() => {
            return notes.value.filter( note =>
            note.title.toLowerCase().includes(term.value.toLowerCase()) ||
            note.content .toLowerCase().includes(term.value.toLowerCase()) ||
            note.tags.some( tag => tag.toLowerCase().includes(term.value.toLowerCase()))
            )
            })
    }

    return { notes, addNote, deleteNote, filteredNotes }
}
