<template>
  <div class="font-poppins h-screen" :class="{ dark: darkMode }">
    <div class="z-[10] h-full bg-slate-200 dark:bg-slate-800">
      <!-- Nav bar -->
      <NavBar class="sticky top-0 z-[10000]" />
      <!-- Main Content-->
      <HomeContent class="relative z-20 mt-6" />
      <!-- Footer -->
    </div>
    <HomeContentBackdrop
      class="dark:opacity- z-[5] opacity-75 dark:opacity-5"
    />
  </div>
</template>

<script setup lang="ts">
const darkMode = ref(true);
</script>
