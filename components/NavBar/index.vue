<template>
  <div>
    <Transition name="fade">
      <div
        v-show="navOpen"
        class="fixed top-16 left-0 z-10 h-full w-full bg-transparent backdrop-blur-sm transition delay-150 ease-in-out sm:hidden"
        @click="navOpen = false"
      ></div>
    </Transition>
    <div
      class="flex flex-col gap-6 bg-slate-200 py-6 px-6 dark:bg-slate-800 dark:text-slate-200 sm:px-0"
    >
      <nav class="z-50 flex items-center justify-between sm:justify-around">
        <div class="flex items-center sm:gap-14 md:gap-40">
          <UILogo />
          <div
            class="hidden items-center gap-6 transition duration-200 ease-in-out sm:flex"
          >
            <UIButtonsNavItemDesktop
              v-for="(link, index) in links"
              :key="index"
              :link="link"
            />
          </div>
        </div>
        <div class="hidden items-center gap-6 sm:flex md:gap-10">
          <UIButtonsGetStartedDesktop :isLogin="true" />
          <UIButtonsGetStartedDesktop width="px-6" :isLogin="false" />
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
      </nav>
      <Transition name="shutter">
        <nav
          class="fixed left-0 top-16 z-[15000] w-full border-b border-slate-100 bg-slate-200 shadow-lg dark:border-slate-700 dark:bg-slate-800 sm:hidden"
          v-if="navOpen"
        >
          <div class="flex flex-col items-center gap-10 pt-3">
            <div class="flex w-4/5 flex-col gap-3">
              <UIButtonsNavItemMobile
                v-for="(link, index) in links"
                :key="index"
                :link="link"
                @click="navOpen = false"
              />
            </div>
            <div class="flex w-4/5 flex-col gap-3 pb-6">
              <UIButtonsGetStartedMobile :isLogin="true" />
              <UIButtonsGetStartedMobile :isLogin="false" />
            </div>
          </div>
        </nav>
      </Transition>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/vue/24/outline";
const links = ref([
  {
    name: "Features",
    url: "#features",
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
