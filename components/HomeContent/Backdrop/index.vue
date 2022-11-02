<template>
  <div
    class="pointer-events-none absolute top-0 left-0 z-10 box-border flex h-full w-full items-center justify-center"
  >
    <img
      v-if="props.isDark"
      class="m-0 block h-full w-full md:w-3/4"
      src="~/assets/images/backdrop_dark.png"
      alt="backdrop"
    />
    <img
      class="m-0 block h-full w-full md:w-3/4"
      src="~/assets/images/backdrop.png"
      alt="backdrop"
      v-else
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  isDark: {
    required: true,
  },
});
</script>
