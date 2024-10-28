<template>
  <div
    class="grid grid-cols-1 md:grid-cols-[17rem_1fr] grid-rows-[max-content_1fr] w-screen h-screen duration-300"
    :class="{
      'grid-cols-1 md:grid-cols-[6rem_1fr]': layoutStore.$state.minimized,
    }"
  >
    <AsideNav class="hidden md:flex" />

    <TopNav />
    <MobileNav />

    <main>
      <div class="min-h-[calc(100dvh-2rem-4rem)] container mx-auto p-4">
        <slot></slot>
      </div>
      <footer
        class="h-[2rem] flex items-center justify-center text-surface-300 dark:text-surface-600"
      >
        All rights reserved &copy; {{ new Date().getFullYear() }}
      </footer>
    </main>
  </div>
</template>

<script setup>
import { useLayoutStore } from '../../../stores/layout';
import AsideNav from './AsideNav.vue';
import MobileNav from './MobileNav.vue';
import TopNav from './TopNav.vue';

const layoutStore = useLayoutStore();
</script>

<style scoped>
:deep(.adapt-border) {
  @apply border-surface-300 dark:border-surface-700;
}
</style>
