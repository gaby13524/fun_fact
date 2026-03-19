import { defineStore } from "pinia";
import { ref } from "vue";

export const savedFactsStore = defineStore("savedFacts", () => {
  const savedFacts = ref<string[]>([]);

  function saveFact(fact: string) {
    if (!savedFacts.value.includes(fact)) {
      savedFacts.value.push(fact);
    }
  }

  function removeFact(i: number) {
    savedFacts.value.splice(i, 1);
  }

  return {
    savedFacts,
    saveFact,
    removeFact,
  };
});
