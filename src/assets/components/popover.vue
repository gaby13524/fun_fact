<script setup lang="ts">
import { ref } from "vue";
const props = defineProps<{
  facts: string[];
}>();

// TODO: do this tmr when we resutrcutre to use pinia
// const saved = ref<string[]>([]);
// const saveFact = () => {
//   saved.value.push(props.fact);
// };
</script>

<template>
  <div v-for="fact in facts" :key="fact">
    <p>{{ fact }}</p>
    <button class="bg-red-500 hover:bg-red-600">x</button>
  </div>
</template>
