<template>
  <div class="font-poppins h-screen" :class="{ dark: darkMode }">
    <div class="h-full bg-slate-200 dark:bg-slate-800">
      <!-- Nav bar -->
      <NavBar class="sticky top-0" />
      <!-- Main Content-->
      <HomeContent class="mt-6" />
      <!-- Footer -->
      <div></div>
    </div>
  </div>
</template>

<script setup>
const darkMode = ref(false);
</script>
