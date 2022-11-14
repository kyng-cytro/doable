<template>
  <div class="mb-4 overflow-hidden rounded-lg shadow-lg">
    <div class="bg-slate-200 px-6 py-8 dark:bg-gray-800 sm:p-10 sm:pb-6">
      <div class="flex justify-center">
        <span
          class="inline-flex rounded-full px-4 py-1 text-sm font-semibold uppercase leading-5 tracking-wide dark:text-white"
        >
          {{ name }}
        </span>
      </div>
      <div
        class="mt-4 flex justify-center text-6xl font-extrabold leading-none dark:text-white"
      >
        <span
          class="ml-1 mr-3 text-xl font-medium leading-8 text-gray-500 dark:text-gray-400"
        >
          from
        </span>
        ${{ price }}
        <span
          class="ml-1 pt-8 text-2xl font-medium leading-8 text-gray-500 dark:text-gray-400"
        >
          /month
        </span>
      </div>
    </div>
    <div class="bg-slate-200 px-6 pt-6 pb-8 dark:bg-gray-800 sm:p-10 sm:pt-6">
      <ul>
        <li
          class="mt-4 flex items-start"
          v-for="(item, index) in benefits"
          :key="index"
        >
          <div class="flex-shrink-0">
            <svg
              class="h-6 w-6 text-green-500"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <p class="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">
            {{ item }}
          </p>
        </li>
      </ul>
      <div class="mt-6 rounded-md shadow">
        <a
          href="#"
          class="focus:shadow-outline flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-indigo-500 focus:outline-none"
        >
          {{ buttonText }}
        </a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  buttonText: {
    type: String,
    required: true,
  },
  benefits: {
    type: Array,
  },
});
</script>
