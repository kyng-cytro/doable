<template>
  <div>
    <Transition name="menu" mode="out-in">
      <SunIcon
        key="sd"
        class="h-7 w-7 cursor-pointer hover:text-blue-400 focus:text-blue-400"
        v-if="darkMode"
        @click="$emit('toggleMode')"
      />
      <CloudIcon
        key="md"
        class="h-7 w-7 cursor-pointer hover:text-blue-400 focus:text-blue-400"
        @click="$emit('toggleMode')"
        v-else
      />
    </Transition>
  </div>
</template>
<script setup lang="ts">
import { SunIcon, CloudIcon } from "@heroicons/vue/24/outline";
const props = defineProps({
  darkMode: {
    type: Boolean,
    required: true,
  },
});
</script>
<style scoped>
.menu-enter-active {
  animation: scale-up-center 0.25s ease 0s 1 normal none;
}
.menu-leave-active {
  animation: scale-down-center 0.25s ease 0s 1 normal none;
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
</style>
