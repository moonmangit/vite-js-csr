<template>
  <div class="bg-surface-0 dark:bg-surface-800 w-screen h-screen">
    <component :is="activeLayout">
      <RouterView />
    </component>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import DefaultLayout from './components/layouts/DefaultLayout.vue';
import BlankLayout from './components/layouts/BlankLayout.vue';
import { useRoute } from 'vue-router';

const activeLayout = ref(DefaultLayout);
const blankLayoutPaths = ['/login']; // <- Add your paths here
const route = useRoute();

watch(
  () => route.path,
  (path) => {
    activeLayout.value = blankLayoutPaths.includes(path)
      ? BlankLayout
      : DefaultLayout;
  },
);
</script>
