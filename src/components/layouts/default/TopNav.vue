<template>
  <nav
    class="flex justify-between items-center border-b adapt-border h-[4rem] relative px-4"
  >
    <section>
      <section class="flex md:hidden gap-x-2 items-center">
        <i class="pi pi-box !text-2xl text-primary-500 dark:text-primary-400" />
        <section class="flex flex-col">
          <h1 class="leading-4">Foo System</h1>
          <p class="text-xs">Administration</p>
        </section>
      </section>
    </section>

    <section class="hidden md:flex gap-x-3">
      <!-- lang -->
      <label class="flex items-center gap-x-2">
        <PSelect
          :model-value="$i18n.locale"
          :options="$i18n.availableLocales"
          @update:model-value="switchLang($event)"
        />
      </label>
      <!-- theme -->
      <label class="flex items-center gap-x-2">
        {{ isDark ? 'Dark' : 'Light' }}
        <PToggleSwitch
          :model-value="isDark"
          @change="toggle"
        />
      </label>
    </section>

    <PButton
      icon="pi pi-bars "
      severity="secondary"
      class="!flex md:!hidden"
      @click.prevent="layoutStore.openMobileNav"
    />

    <button
      type="button"
      for="minimizer"
      class="w-8 h-8 aspect-square hidden md:inline-flex items-center justify-center rounded-full absolute bg-surface-0 dark:bg-surface-900 hover:!bg-primary-400 hover:text-surface-800 hover:!border-primary-400 border adapt-border -left-4 -bottom-4 duration-150"
      @click.prevent="layoutStore.toggleMinimized"
    >
      <i
        class="pi pi-angle-left duration-500"
        :class="{
          'rotate-180': layoutStore.$state.minimized,
        }"
      />
    </button>
  </nav>
</template>

<script lang="ts" setup>
import { useLang } from '../../../composables/useLang';
import { useTheme } from '../../../composables/useTheme';
import { useLayoutStore } from '../../../stores/layout';

const layoutStore = useLayoutStore();

const { isDark, toggle } = useTheme();
const { switchLang } = useLang();
</script>

<style></style>
