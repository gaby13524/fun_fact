<script setup lang="ts">
import { RouterView } from "vue-router";
import Popover from "@/assets/components/Popover.vue";
// TODO: add the popover here, on the top right corner
</script>

<template>
  <main class="flex flex-col items-center justify-center gap-4 min-h-screen">
    <Popover />
    <RouterView />
  </main>
</template>
