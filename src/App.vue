<template>
  <div
    class="bg-surface-0 text-surface-700 dark:text-surface-300 dark:bg-surface-900 w-screen h-screen duration-150"
  >
    <component :is="activeLayout">
      <RouterView />
    </component>
  </div>
</template>

<script setup>
import { onMounted, shallowRef, watch } from 'vue';
import DefaultLayout from './components/layouts/default/DefaultLayout.vue';
import BlankLayout from './components/layouts/BlankLayout.vue';
import { useRoute } from 'vue-router';
import { useLang } from './composables/useLang';
import { useTheme } from './composables/useTheme';

// layout
const activeLayout = shallowRef(DefaultLayout);
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

// i18n
const { init: initLang } = useLang();
onMounted(() => {
  initLang();
});

// dark-mode
const { init: initTheme } = useTheme();
onMounted(() => {
  initTheme();
});
</script>
