<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
  <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      placeholder="Suchen ..."
  >
</template>

<style scoped>
input {
  width: 200px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font: inherit;
  margin-bottom: 10px;
}
</style>