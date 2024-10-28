<template>
  <div
    class="w-screen h-screen container mx-auto flex flex-col justify-between text-surface-600 dark:text-surface-400"
  >
    <nav class="flex justify-between items-center p-3">
      <section class="flex items-center gap-x-2">
        <i class="pi pi-box text-primary-400" />
        Foo System
      </section>
      <section class="flex items-center gap-x-2">
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
    </nav>

    <main
      class="border border-surface-300 dark:border-surface-700 p-5 rounded-xl w-[min(500px,95dvw)] mx-auto shadow-xl dark:shadow-none dark:bg-surface-800"
    >
      <form class="space-y-8">
        <section>
          <h1 class="text-2xl font-bold text-surface-700 dark:text-surface-0">
            Foo System Administration
          </h1>
          <p class="text-sm">login to continue</p>
        </section>

        <section class="space-y-3">
          <div class="flex flex-col gap-2">
            <label
              class="dark:text-surface-0 flex justify-between"
              for="username"
            >
              Username
              <i class="pi pi-user" />
            </label>
            <PInputText
              id="username"
              placeholder="Enter your username..."
            />
            <small class="text-red-500">
              Enter your username to reset your password.
            </small>
          </div>

          <div class="flex flex-col gap-2">
            <label
              class="dark:text-surface-0 flex justify-between"
              for="username"
            >
              Password
              <i class="pi pi-lock" />
            </label>
            <PInputText
              id="password"
              type="password"
              placeholder="Enter your password..."
            />
            <small class="text-red-500">
              Enter your username to reset your password.
            </small>
          </div>
        </section>

        <section class="flex justify-between items-center">
          <PButton
            label="Forgot Password?"
            link
          />
          <PButton label="Login" />
        </section>
      </form>
    </main>

    <footer>
      <p class="text-center text-surface-500 dark:text-surface-500 p-3">
        &copy; 2021 Foo System
      </p>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { useLang } from '../../../composables/useLang';
import { useTheme } from '../../../composables/useTheme';

const { isDark, toggle } = useTheme();
const { switchLang } = useLang();
</script>

<style></style>
