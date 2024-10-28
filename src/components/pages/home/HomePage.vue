<template>
  <div>
    home page
    <form>
      <label for="locale-select">{{ $t('language') }}: </label>
      <select
        id="locale-select"
        :value="$i18n.locale"
        @input="switchLang($event.target.value)"
      >
        <option value="en">en</option>
        <option value="th">th</option>
      </select>
      <label for="theme-switch">{{ $t('theme') }}</label>
      <select
        id="locale-select"
        :value="currentTheme"
        @input="setByName($event.target.value)"
      >
        <option value="dark">dark</option>
        <option value="light">light</option>
      </select>
    </form>
    {{ $t('welcome') }}
    <PButton label="hello" />
  </div>
</template>

<script setup>
import { useLang } from '../../../composables/useLang';
import { useTheme } from '../../../composables/useTheme';

const { switchLang } = useLang();
const { currentTheme, setByName } = useTheme();
</script>

<style></style>
