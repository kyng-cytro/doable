<template>
  <div class="dark:text-slate-100">
    <div class="py-10">
      <UIBowOpen />
      <div class="bg-slate-300 pt-10 dark:bg-slate-700">
        <h1 class="text-center text-2xl md:pt-6 lg:text-3xl">
          Start free, pay as you grow
        </h1>
        <p class="py-3 text-center text-xs lg:text-sm">
          focused, organized, and calm at no cost
        </p>
      </div>

      <div
        class="grid grid-cols-1 items-center justify-items-center gap-3 bg-slate-300 px-3 pt-10 pb-6 dark:bg-slate-700 md:grid-cols-2 md:gap-6 md:pt-12 lg:gap-20"
      >
        <HomeContentPricingCard
          name="Starter"
          price="0"
          buttonText="Get Started"
          :benefits="[
            'Unlimited task',
            'Email notifications',
            '5 MB file uploads',
            'Reminders',
          ]"
          class="lg:justify-self-end"
        />
        <HomeContentPricingCard
          name="Pro"
          price="6"
          buttonText="Try for free"
          :benefits="[
            'Everything in Free',
            'SMS notifications',
            '100 MB file uploads',
            'Share events & calendar',
          ]"
          class="lg:justify-self-start"
        />
      </div>
      <UIBowClose />
    </div>
  </div>
</template>
