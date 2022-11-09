<template>
  <div class="dark:text-slate-100">
    <div class="flex flex-col items-center justify-center gap-6">
      <div class="px-3">
        <h3
          class="font-logo max-w-md text-center text-5xl sm:max-w-xl sm:text-6xl"
        >
          Let Us Help You,<br class="hidden sm:block" />
          Get Your Sh*t Together.
        </h3>
      </div>
      <div class="flex justify-center px-8">
        <p
          class="max-w-sm text-center tracking-tight sm:max-w-md sm:tracking-normal"
        >
          We'll determine what you should be doing and when. All you need to
          know is that it would be
          <span class="font-logo text-xl">do.Able</span>.
        </p>
      </div>
      <div class="pb-6 pt-3">
        <UIButtonsGetStartedDesktop :isLogin="false" width="px-10" />
      </div>
    </div>
  </div>
</template>
