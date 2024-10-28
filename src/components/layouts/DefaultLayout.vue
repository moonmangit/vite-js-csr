<template>
  <div>
    <nav class="space-x-5">
      <RouterLink to="/">Go to Home</RouterLink>
      <RouterLink to="/about">Go to About</RouterLink>
      <RouterLink to="/login">Go to Login</RouterLink>
    </nav>
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script setup></script>

<style></style>
