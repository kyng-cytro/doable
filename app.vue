<template>
  <div class="h-screen" :class="{ dark: darkMode }">
    <div class="h-full bg-slate-200 dark:bg-slate-800">
      <NavBar class="sticky top-0" />
    </div>
  </div>
</template>

<script setup>
const darkMode = ref(true);
</script>
