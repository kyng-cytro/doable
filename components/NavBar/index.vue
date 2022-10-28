<template>
  <div>
    <Transition name="fade">
      <div
        v-show="navOpen"
        class="fixed top-16 left-0 z-10 h-full w-full bg-transparent backdrop-blur-sm transition delay-150 ease-in-out"
        @click="navOpen = false"
      ></div>
    </Transition>
    <div
      class="flex flex-col gap-6 bg-slate-200 py-6 px-6 dark:bg-slate-800 dark:text-slate-200 sm:px-0"
    >
      <header class="z-50 flex items-center justify-between sm:justify-around">
        <div class="flex items-center sm:gap-14 md:gap-20">
          <NuxtLink to="/">
            <h3
              class="font-logo text-4xl leading-4 tracking-tight transition duration-200 ease-in-out hover:text-blue-800 focus:text-blue-800 dark:hover:text-blue-400 dark:focus:text-blue-400 md:text-5xl"
            >
              do.Able
            </h3>
          </NuxtLink>
          <div
            class="hidden items-center gap-6 transition duration-200 ease-in-out sm:flex md:text-xl"
          >
            <a :href="link.url" v-for="(link, index) in links" :key="index">
              <span
                class="hover:text-blue-800 focus:text-blue-800 dark:hover:text-blue-400 dark:focus:text-blue-400"
                >{{ link.name }}</span
              >
            </a>
          </div>
        </div>
        <div class="hidden items-center gap-10 sm:flex">
          <NuxtLink to="/">
            <span
              class="transition duration-200 ease-in-out hover:text-blue-800 focus:text-blue-800 dark:hover:text-blue-400 dark:focus:text-blue-400 md:text-xl"
              >Log in</span
            >
          </NuxtLink>
          <NuxtLink to="/">
            <span
              class="rounded-lg bg-blue-500 px-6 py-3 text-slate-100 transition duration-200 ease-in-out hover:bg-blue-600 focus:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-800 dark:focus:bg-blue-800"
              >Get Started</span
            >
          </NuxtLink>
        </div>
        <div class="sm:hidden">
          <Transition name="menu" mode="out-in">
            <Bars3BottomRightIcon
              key="m"
              class="h-8 w-8 cursor-pointer hover:text-blue-400 focus:text-blue-400"
              @click="navOpen = !navOpen"
              v-if="!navOpen"
            />
            <XMarkIcon
              key="x"
              class="h-8 w-8 cursor-pointer hover:text-blue-400 focus:text-blue-400"
              @click="navOpen = !navOpen"
              v-else="navOpen"
            />
          </Transition>
        </div>
      </header>
      <Transition name="shutter">
        <header
          class="fixed left-0 top-16 z-[15000] w-full border-b border-slate-100 bg-slate-200 shadow-lg dark:border-slate-700 dark:bg-slate-800 sm:hidden"
          v-if="navOpen"
        >
          <div class="flex flex-col items-center gap-10 pt-3">
            <div class="flex w-4/5 flex-col gap-3">
              <a
                class="cursor-pointer border-b-2 border-gray-500 p-3 transition duration-200 ease-in-out hover:border-blue-800 hover:text-blue-800 focus:border-blue-800 focus:text-blue-800 dark:hover:border-blue-400 dark:hover:text-blue-400 dark:focus:border-blue-400 dark:focus:text-blue-400"
                :href="link.url"
                v-for="(link, index) in links"
                :key="index"
              >
                {{ link.name }}
              </a>
            </div>
            <div class="flex w-4/5 flex-col gap-3 pb-6">
              <NuxtLink to="/">
                <div
                  class="rounded-lg border-2 border-blue-500 bg-transparent py-2.5 text-center text-black transition duration-200 ease-in-out hover:bg-blue-500 hover:text-slate-100 focus:bg-blue-500 focus:text-slate-100 dark:text-slate-100"
                >
                  Log in
                </div>
              </NuxtLink>
              <NuxtLink to="/">
                <div
                  class="rounded-lg border-2 border-blue-600 bg-blue-600 py-2.5 text-center text-slate-100 transition duration-200 ease-in-out hover:bg-transparent hover:text-black focus:bg-transparent focus:text-black dark:hover:text-slate-100 dark:focus:text-slate-100"
                >
                  Get Started
                </div>
              </NuxtLink>
            </div>
          </div>
        </header>
      </Transition>
    </div>
  </div>
</template>
<script setup>
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/vue/24/outline";
const links = ref([
  {
    name: "Features",
    url: "#",
  },
  {
    name: "Pricing",
    url: "#",
  },
  {
    name: "About",
    url: "#",
  },
]);

const navOpen = ref(false);
</script>
<style scoped>
.shutter-enter-active {
  animation: shutter-in-top 0.25s ease 0s 1 normal none;
}
.shutter-leave-active {
  animation: shutter-out-top 0.25s ease 0s 1 normal none;
}
.menu-enter-active {
  animation: scale-up-center 0.25s ease 0s 1 normal none;
}
.menu-leave-active {
  animation: scale-down-center 0.25s ease 0s 1 normal none;
}
.fade-enter-active {
  animation: fade-in-top 0.25s ease 0s 1 normal none;
}

@keyframes shutter-in-top {
  0% {
    transform: rotateX(-100deg);
    transform-origin: top;
    opacity: 0;
  }
  100% {
    transform: rotateX(0deg);
    transform-origin: top;
    opacity: 1;
  }
}
@keyframes shutter-out-top {
  0% {
    transform: rotateX(0deg);
    transform-origin: top;
    opacity: 1;
  }
  100% {
    transform: rotateX(70deg);
    transform-origin: top;
    opacity: 0;
  }
}
@keyframes scale-up-center {
  0% {
    transform: scale(0.2);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes scale-down-center {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.2);
  }
}
@keyframes fade-in-top {
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
