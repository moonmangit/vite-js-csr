<script setup></script>

<template>
  <div class="bg-surface-200 dark:bg-surface-800 w-screen h-screen">
    <nav>
      <RouterLink to="/">Go to Home</RouterLink>
      <RouterLink to="/about">Go to About</RouterLink>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>
