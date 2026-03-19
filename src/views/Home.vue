<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { savedFactsStore } from "@/others/savedFacts_store";

const { saveFact } = savedFactsStore();
const funFact = ref<string[]>([
  "I had kept pet worms once.",
  "My backpack has a hole.",
  "I like to wear dresses.",
  "I like to eat.",
  "My bike got stolen.",
  "The front light on my bike was stolen 10 days after I got it.",
  "I get headaches if I don't get enough caffeine.",
  "I like bread.",
]);
const currIndex = ref(0);
const stopped = ref(false);
let intervalId: ReturnType<typeof setInterval>;

const toggleStop = () => {
  if (stopped.value) {
    start();
  } else {
    stop();
  }
  stopped.value = !stopped.value;
};

const start = () => {
  intervalId = setInterval(() => {
    currIndex.value = (currIndex.value + 1) % funFact.value.length;
  }, 100);
};

const stop = () => {
  clearInterval(intervalId);
};

onMounted(() => {
  start();
});
onUnmounted(() => {
  stop();
});
</script>

<template>
  <main class="flex flex-col items-center justify-center gap-4 min-h-screen">
    <h1 class="text-7xl">Fun Facts About Me!</h1>
    <p class="text-3xl">{{ funFact[currIndex] }}</p>
    <div class="p-3 flex gap-3">
      <button
        class="hover:bg-green-400 bg-green-300 rounded-full min-w-20 text-sm p-3 gray-600"
        @click="toggleStop"
      >
        {{ stopped ? "Continue" : "Stop" }}
      </button>
      <button
        v-if="stopped"
        @click="saveFact(funFact[currIndex]!)"
        class="hover:bg-rose-400 bg-rose-300 rounded-full text-sm p-3 gray-600"
      >
        Save Fact
      </button>
    </div>
  </main>
</template>
