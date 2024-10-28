<template>
  <div class="bg-surface-0 dark:bg-surface-800 w-screen h-screen">
    <component :is="activeLayout">
      <RouterView />
    </component>
  </div>
</template>

<script setup>
import { onMounted, shallowRef, watch } from 'vue';
import DefaultLayout from './components/layouts/DefaultLayout.vue';
import BlankLayout from './components/layouts/BlankLayout.vue';
import { useRoute } from 'vue-router';
import { useLang } from './composables/useLang';

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

const { init: initLang } = useLang();
onMounted(() => {
  initLang();
});
</script>
