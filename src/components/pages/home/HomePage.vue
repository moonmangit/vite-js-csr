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
    </form>
    {{ $t('welcome') }}
    <PButton label="hello" />
  </div>
</template>

<script setup>
import { useLang } from '../../../composables/useLang';

const { switchLang } = useLang();
</script>

<style></style>
