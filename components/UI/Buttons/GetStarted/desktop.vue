<template>
  <NuxtLink to="/" v-if="props.isLogin">
    <span
      class="transition duration-200 ease-in-out hover:text-blue-800 focus:text-blue-800 dark:hover:text-blue-400 dark:focus:text-blue-400 lg:text-xl"
      >Log in</span
    >
  </NuxtLink>
  <NuxtLink to="/" v-else>
    <span
      :class="props.width"
      class="rounded-lg bg-blue-500 py-3 text-slate-100 transition duration-200 ease-in-out hover:bg-blue-600 focus:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-800 dark:focus:bg-blue-800"
      >Get Started</span
    >
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
  width: {
    type: String,
    default: "px-6",
  },
  isLogin: {
    type: Boolean,
    required: true,
  },
});
</script>
