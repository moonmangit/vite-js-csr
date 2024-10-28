import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTestStore = defineStore('test', () => {
  const data = ref('test data');

  return {
    data,
  };
});
