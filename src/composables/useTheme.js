import { useLocalStorage } from '@vueuse/core';
import { computed, ref } from 'vue';

const DARK_VALUE = 'dark';
const LIGHT_VALUE = 'light';
const BODY_DARK_MODE_CLASS = DARK_VALUE;
const IS_DARK_LOCAL_STORAGE_KEY = 'isDark';

export function useTheme() {
  const isInit = ref(false);
  const isDark = useLocalStorage(IS_DARK_LOCAL_STORAGE_KEY, false);

  function init() {
    if (isDark.value) {
      document.body.classList.add(BODY_DARK_MODE_CLASS);
    } else {
      document.body.classList.remove(BODY_DARK_MODE_CLASS);
    }
    isInit.value = true;
  }

  function toggle() {
    if (isDark.value) {
      document.body.classList.remove(BODY_DARK_MODE_CLASS);
    } else {
      document.body.classList.add(BODY_DARK_MODE_CLASS);
    }
    isDark.value = !isDark.value;
  }

  function setToDark() {
    document.body.classList.add(BODY_DARK_MODE_CLASS);
    isDark.value = true;
  }

  function setToLight() {
    document.body.classList.remove(BODY_DARK_MODE_CLASS);
    isDark.value = false;
  }

  function setByName(value) {
    console.log(value);

    if (value === DARK_VALUE) {
      setToDark();
    } else if (value === LIGHT_VALUE) {
      setToLight();
    }
  }

  return {
    init,
    toggle,
    setToDark,
    setToLight,
    setByName,
    isDark: computed(() => isDark.value),
    currentTheme: computed(() => (isDark.value ? DARK_VALUE : LIGHT_VALUE)),
  };
}
