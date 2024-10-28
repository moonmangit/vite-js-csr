import { defineStore } from 'pinia';
import { ref } from 'vue';

export const navLinkGroups = [
  {
    groupName: 'General',
    links: [
      { label: 'Home', icon: 'pi pi-home', to: '/' },
      { label: 'About', icon: 'pi pi-info', to: '/about' },
    ],
  },
  {
    groupName: 'Content',
    links: [
      { label: 'Product', icon: 'pi pi-shopping-cart', to: '/product' },
      { label: 'Category', icon: 'pi pi-list', to: '/category' },
      { label: 'Stock', icon: 'pi pi-box', to: '/stock' },
      { label: 'Order', icon: 'pi pi-shopping-cart', to: '/order' },
    ],
  },
];

export const useLayoutStore = defineStore('test', () => {
  // mobile nav
  const showMobileNav = ref(false);
  function toggleMobileNav() {
    showMobileNav.value = !showMobileNav.value;
  }
  function closeMobileNav() {
    showMobileNav.value = false;
  }
  function openMobileNav() {
    showMobileNav.value = true;
  }

  // minimize/maximize logic
  const minimized = ref(false);
  function toggleMinimized() {
    minimized.value = !minimized.value;
  }
  function minimize() {
    minimized.value = true;
  }
  function maximize() {
    minimized.value = false;
  }

  return {
    // mobile nav
    showMobileNav,
    toggleMobileNav,
    closeMobileNav,
    openMobileNav,
    // minimized
    minimized,
    toggleMinimized,
    minimize,
    maximize,
  };
});
