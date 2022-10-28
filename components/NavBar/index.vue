<template>
  <div
    class="flex items-center border-2 justify-between border-red-500 py-6 px-6"
  >
    <div class="flex items-center gap-10">
      <NuxtLink to="/">
        <h3 class="text-xl hover:text-blue-400 focus:text-blue-400">doAble</h3>
      </NuxtLink>
      <div class="hidden items-center gap-6 sm:flex">
        <NuxtLink to="/">
          <span class="hover:text-blue-400 focus:text-blue-400">Features</span>
        </NuxtLink>
        <NuxtLink to="/">
          <span class="hover:text-blue-400 focus:text-blue-400">Templates</span>
        </NuxtLink>
        <NuxtLink to="/">
          <span class="hover:text-blue-400 focus:text-blue-400">Pricing</span>
        </NuxtLink>
      </div>
    </div>
    <div class="hidden items-center gap-6 sm:flex">
      <NuxtLink to="/">
        <span class="hover:text-blue-400 focus:text-blue-400">Log in</span>
      </NuxtLink>
      <NuxtLink to="/">
        <span
          class="bg-blue-400 rounded-full px-6 py-3 text-white hover:bg-blue-600 focus:bg-blue-600"
          >Get Started</span
        >
      </NuxtLink>
    </div>
    <div></div>
  </div>
</template>
