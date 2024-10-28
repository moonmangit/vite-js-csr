import './style.css';
import App from './App.vue';

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import Primevue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Button from 'primevue/button';
import { definePreset } from '@primevue/themes';
import { createPinia } from 'pinia';

const app = createApp(App);

// router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('./pages/home/HomePage.vue'),
    },
    {
      path: '/about',
      component: () => import('./pages/about/AboutPage.vue'),
    },
  ],
});
app.use(router);

// primevue
const customPrimevueTheme = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{orange.50}',
      100: '{orange.100}',
      200: '{orange.200}',
      300: '{orange.300}',
      400: '{orange.400}',
      500: '{orange.500}',
      600: '{orange.600}',
      700: '{orange.700}',
      800: '{orange.800}',
      900: '{orange.900}',
      950: '{orange.950}',
    },
    colorScheme: {
      light: {
        surface: {
          0: '#ffffff',
          50: '{neutral.50}',
          100: '{neutral.100}',
          200: '{neutral.200}',
          300: '{neutral.300}',
          400: '{neutral.400}',
          500: '{neutral.500}',
          600: '{neutral.600}',
          700: '{neutral.700}',
          800: '{neutral.800}',
          900: '{neutral.900}',
          950: '{neutral.950}',
        },
      },
      dark: {
        surface: {
          0: '#ffffff',
          50: '{neutral.50}',
          100: '{neutral.100}',
          200: '{neutral.200}',
          300: '{neutral.300}',
          400: '{neutral.400}',
          500: '{neutral.500}',
          600: '{neutral.600}',
          700: '{neutral.700}',
          800: '{neutral.800}',
          900: '{neutral.900}',
          950: '{neutral.950}',
        },
      },
    },
  },
});
app.use(Primevue, {
  theme: {
    preset: customPrimevueTheme,
    options: {
      darkModeSelector: '.dark',
    },
  },
  ripple: true,
});
app.component('PButton', Button);

// pinia
const pinia = createPinia();
app.use(pinia);

// mount
app.mount('#app');
