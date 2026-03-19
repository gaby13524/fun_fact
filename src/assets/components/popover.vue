<script setup lang="ts">
import { ref } from "vue";
import { savedFactsStore } from "@/others/savedFacts_store";

const { savedFacts, removeFact } = savedFactsStore();

const open = ref(false);

function toggle() {
  open.value = !open.value;
}
</script>

<template>
  <div v-if="savedFacts.length > 0" class="fixed top-3 right-3 z-50">
    <button
      @click="toggle"
      class="hover:bg-rose-400 bg-rose-300 rounded-full text-sm p-3 gray-600"
    >
      See your saved facts!
    </button>

    <transition name="popover">
      <div
        v-if="open"
        class="absolute mt-2 flex flex-col bg-white border-2 border-gray-300 rounded-lg p-3 z-10"
      >
        <p class="text-sm text-gray-700">Animated popover 👀</p>
        <div
          v-for="(fact, i) in savedFacts"
          :key="i"
          class="rounded-lg text-base"
        >
          {{ fact }}
          <button @click="removeFact(i)" class="bg-red-300 rounded-full">
            x
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.popover-enter-from {
  opacity: 0;
  transform: scale(0.95);
}
.popover-enter-active {
  transition: all 0.15s ease;
}
.popover-enter-to {
  opacity: 1;
  transform: scale(1);
}

.popover-leave-from {
  opacity: 1;
  transform: scale(1);
}
.popover-leave-active {
  transition: all 0.1s ease;
}
.popover-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
