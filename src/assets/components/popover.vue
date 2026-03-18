<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  facts: string[];
}>();

const open = ref(false);

function toggle() {
  open.value = !open.value;
}
// TODO: do this tmr when we resutrcutre to use pinia
// const saved = ref<string[]>([]);
// const saveFact = () => {
//   saved.value.push(props.fact);
// };
</script>

<template>
  <div class="relative inline-block">
    <button
      @click="toggle"
      class="hover:bg-rose-400 bg-rose-300 rounded-full text-sm p-3 gray-600"
    >
      See your saved facts!
    </button>

    <transition name="popover">
      <div
        v-if="open"
        class="absolute mt-2 w-48 bg-white border-2 border-gray-300 rounded-lg p-3 z-10"
      >
        <p class="text-sm text-gray-700">Animated popover 👀</p>
      </div>
    </transition>
  </div>
</template>

<style scoped>
/* Enter (opening) */
.popover-enter-from {
  opacity: 0;
  transform: scale(0.95) translateY(-5px);
}
.popover-enter-active {
  transition: all 0.15s ease;
}
.popover-enter-to {
  opacity: 1;
  transform: scale(1) translateY(0);
}

/* Leave (closing) */
.popover-leave-from {
  opacity: 1;
  transform: scale(1) translateY(0);
}
.popover-leave-active {
  transition: all 0.1s ease;
}
.popover-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(-5px);
}
</style>
