<template>
  <div class="font-poppins m-0" :class="{ dark: darkMode }">
    <div class="z-[10] bg-slate-200 dark:bg-slate-800">
      <!-- Nav bar -->
      <NavBar class="sticky top-0 z-[10000]" />
      <!-- Main Content-->
      <HomeContent class="relative z-20 py-6" />
      <!-- Footer -->
      <Footer class="relative z-20 pt-6" />
      <!-- TODO: make a button for theme -->
      <div
        class="cursor-pointer text-center dark:text-slate-100"
        @click="darkMode = !darkMode"
      >
        Toggle theme
      </div>
    </div>
    <HomeContentBackdrop
      :isDark="darkMode"
      class="z-[5] opacity-75 dark:opacity-5"
    />
  </div>
</template>

<script setup lang="ts">
const darkMode = ref(false);
</script>
