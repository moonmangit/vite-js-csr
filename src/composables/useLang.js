import { useLocalStorage } from '@vueuse/core';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const DEFAULT_LANG_CODE = 'en';

export function useLang() {
  const isInit = ref(false);
  const { locale, availableLocales } = useI18n();
  const ls = useLocalStorage('lang', DEFAULT_LANG_CODE);
  function init() {
    if (isInit.value) return;
    locale.value = ls.value;
    document.querySelector('html').setAttribute('lang', ls.value);
    isInit.value = true;
  }
  function switchLang(target) {
    if (availableLocales.includes(target)) {
      locale.value = target;
      document.querySelector('html').setAttribute('lang', target);
      ls.value = target;
    }
  }
  return {
    init,
    switchLang,
  };
}
