<template>
  <aside
    class="row-span-2 border-r adapt-border flex flex-col gap-4 p-3 relative overflow-y-auto overflow-x-hidden group/aside-nav"
    :class="{
      '!px-0': layoutStore.$state.minimized,
    }"
  >
    <!-- banner -->
    <section
      for="banner"
      class="flex items-center gap-x-2"
      :class="{
        'flex-col text-center text-xs ': layoutStore.$state.minimized,
      }"
    >
      <i
        class="pi pi-box text-primary-500 dark:text-primary-400 !text-2xl duration-300"
      ></i>
      <section>
        <h1>Foo System</h1>
        <p
          v-if="!layoutStore.$state.minimized"
          class="text-xs leading-3"
        >
          Administration
        </p>
      </section>
    </section>

    <!-- profile -->
    <section
      for="profile"
      class="flex gap-x-2"
    >
      <div
        class="rounded-full w-fit relative"
        :class="{
          'mx-auto': layoutStore.$state.minimized,
        }"
      >
        <div class="w-14 h-14 aspect-square rounded-full overflow-hidden">
          <img
            class="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <p
          v-if="layoutStore.$state.minimized"
          class="p-1 px-2 bg-primary-500 dark:bg-primary-400 rounded-md w-fit text-surface-0 dark:text-surface-800 text-xs font-bold absolute -bottom-2 scale-75"
        >
          admin
        </p>
      </div>
      <section v-if="!layoutStore.$state.minimized">
        <h1>admin@mail.com</h1>
        <p
          class="p-1 px-2 bg-primary-500 dark:bg-primary-400 rounded-md w-fit text-surface-0 dark:text-surface-800 text-xs font-bold"
        >
          admin
        </p>
      </section>
    </section>

    <!-- links -->
    <section class="space-y-2 flex-1">
      <div
        v-for="{ groupName, links } in navLinkGroups"
        :key="groupName"
        class="flex flex-col gap-y-2"
      >
        <label
          class="truncate"
          :class="{
            'text-xs text-surface-400 dark:text-surface-500 text-center':
              layoutStore.$state.minimized,
          }"
        >
          {{ groupName }}
        </label>
        <ul>
          <li
            v-for="link in links"
            :key="link.label"
            class="flex items-center gap-x-2 border-l-[3px] dark:border-surface-700 p-2 px-4 ml-2 hover:border-surface-600 dark:hover:border-surface-100 cursor-pointer duration-150"
            :class="{
              'flex-col border-none text-xs text-center p-2 ml-0 truncate gap-y-1 hover:bg-surface-100 dark:hover:bg-surface-800':
                layoutStore.$state.minimized,
              'bg-primary-400 text-surface-800  hover:!bg-primary-400':
                $route.path === link.to && layoutStore.$state.minimized,
              'border-primary-500 dark:!border-primary-400':
                $route.path === link.to && !layoutStore.$state.minimized,
            }"
            @click.prevent="$router.push(link.to)"
          >
            <i :class="link.icon"></i>
            <span>{{ link.label }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- footer -->
    <section
      v-if="!layoutStore.$state.minimized"
      class="flex justify-between items-center"
    >
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
    </section>
    <div
      v-if="layoutStore.$state.minimized"
      class="flex items-center justify-center"
    >
      <PButton
        type="button"
        icon="pi pi-ellipsis-v"
        aria-haspopup="true"
        aria-controls="overlay_tmenu"
        severity="secondary"
        rounded
        @click="toggle"
      />
      <PTieredMenu
        id="overlay_tmenu"
        ref="menu"
        :model="items"
        popup
      />
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue';
import { useLayoutStore, navLinkGroups } from '../../../stores/layout';

const layoutStore = useLayoutStore();

// minimize 'more' menu
const menu = ref();
const items = ref([
  {
    label: 'Setting',
    icon: 'pi pi-cog',
  },
  {
    label: 'Help',
    icon: 'pi pi-question-circle',
  },
  {
    separator: true,
  },
  {
    label: 'Logout',
    icon: 'pi pi-sign-out',
  },
]);
const toggle = (event) => {
  menu.value.toggle(event);
};
</script>

<style></style>
