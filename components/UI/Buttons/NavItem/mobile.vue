<template>
  <a
    class="cursor-pointer border-b-2 border-gray-500 p-3 transition duration-200 ease-in-out hover:border-blue-800 hover:text-blue-800 focus:border-blue-800 focus:text-blue-800 dark:hover:border-blue-400 dark:hover:text-blue-400 dark:focus:border-blue-400 dark:focus:text-blue-400"
    :href="link.url"
  >
    {{ link.name }}
  </a>
</template>
<script setup>
const props = defineProps({
  link: {
    type: Object,
    required: true,
  },
});

console.log(props.link);
</script>
