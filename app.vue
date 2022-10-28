<template>
  <div :class="{ dark: darkMode }">
    <NavBar />
    <div class="text-red-500 dark:text-yellow-300">Test Text</div>
  </div>
</template>

<script setup>
const darkMode = ref(false);
</script>
