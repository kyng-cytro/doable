<template>
  <NuxtLink to="/" v-if="props.isLogin">
    <div
      class="rounded-lg border-2 border-blue-500 bg-transparent py-2.5 text-center text-black transition duration-200 ease-in-out hover:bg-blue-500 hover:text-slate-100 focus:bg-blue-500 focus:text-slate-100 dark:text-slate-100"
    >
      Log in
    </div>
  </NuxtLink>
  <NuxtLink to="/" v-else>
    <div
      class="rounded-lg border-2 border-blue-600 bg-blue-600 py-2.5 text-center text-slate-100 transition duration-200 ease-in-out hover:bg-transparent hover:text-black focus:bg-transparent focus:text-black dark:hover:text-slate-100 dark:focus:text-slate-100"
    >
      Get Started
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  isLogin: {
    type: Boolean,
    required: true,
  },
});
</script>
