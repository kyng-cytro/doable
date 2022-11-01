<template>
  <a :href="link.url">
    <span
      class="hover:text-blue-800 focus:text-blue-800 dark:hover:text-blue-400 dark:focus:text-blue-400"
      >{{ link.name }}</span
    >
  </a>
</template>

<script setup lang="ts">
const props = defineProps({
  link: {
    type: Object,
    required: true,
  },
});
</script>
