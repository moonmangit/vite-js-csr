import './style.css';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

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

app.mount('#app');
