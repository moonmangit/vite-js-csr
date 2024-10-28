<template>
  <Transition name="mobile-nav">
    <section
      v-if="layoutStore.$state.showMobileNav"
      class="fixed inset-y-0 right-0 w-[min(350px,85dvw)] bg-surface-0 dark:bg-surface-800 z-30 overflow-y-auto overflow-x-hidden flex flex-col"
    >
      <div class="flex justify-between p-2 pr-4">
        <PButton
          icon="pi pi-times"
          severity="secondary"
          text
          @click.prevent="layoutStore.closeMobileNav"
        />
        <div class="flex items-center gap-x-2">
          <section>
            <h1>admin@mail.com</h1>
            <p
              class="p-1 px-2 bg-primary-500 dark:bg-primary-400 rounded-md w-fit text-surface-0 dark:text-surface-800 text-xs font-bold ml-auto"
            >
              admin
            </p>
          </section>
          <div class="rounded-full w-fit relative">
            <div class="w-12 h-12 aspect-square rounded-full overflow-hidden">
              <img
                class="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div class="flex gap-x-3 px-3 border-b adapt-border py-3">
        <!-- lang -->
        <label class="flex flex-1 items-center gap-x-2">
          <PSelect
            class="w-full"
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
      </div>

      <div class="flex-1">
        <section
          v-for="group in navLinkGroups"
          :key="group.groupName"
        >
          <label class="flex p-3 text-surface-400 dark:text-surface-500">{{
            group.groupName
          }}</label>
          <ul class="flex flex-col">
            <li
              v-for="link in group.links"
              :key="link.label"
              class="flex p-3 items-center gap-x-3 justify-between"
              :class="{
                'text-surface-0 bg-primary-500 dark:bg-primary-400 dark:text-surface-800 duration-150':
                  $route.path === link.to,
              }"
              @click.prevent="changePage(link.to)"
            >
              <span>{{ link.label }}</span>
              <i :class="link.icon" />
            </li>
          </ul>
        </section>
      </div>

      <div class="flex justify-between items-center p-3">
        <PButton
          text
          icon="pi pi-cog"
          severity="secondary"
        />
        <PButton
          label="Logout"
          icon="pi pi-sign-out"
          icon-pos="right"
        />
        <PButton
          text
          icon="pi pi-question-circle"
          severity="secondary"
        />
      </div>
    </section>
  </Transition>
  <!-- backdrop -->
  <Transition>
    <div
      v-if="layoutStore.$state.showMobileNav"
      class="fixed inset-0 bg-black/50 dark:bg-black/80 z-20"
      @click.prevent="layoutStore.closeMobileNav"
    ></div>
  </Transition>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useLang } from '../../../composables/useLang';
import { useTheme } from '../../../composables/useTheme';
import { useLayoutStore, navLinkGroups } from '../../../stores/layout';

const layoutStore = useLayoutStore();

const { isDark, toggle } = useTheme();
const { switchLang } = useLang();

const router = useRouter();

function changePage(to) {
  router.push(to);
  layoutStore.closeMobileNav();
}
</script>

<style scoped>
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  @apply duration-300;
}
.mobile-nav-enter-from,
.mobile-nav-leave-to {
  @apply translate-x-full;
}

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  @apply duration-300;
}

.v-enter-from,
.v-leave-to {
  @apply opacity-0;
}
</style>
