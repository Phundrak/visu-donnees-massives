<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <nav class="flex-row flex-centered gap">
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/day-1">Day 1</RouterLink>
    </nav>
    <h1>Datavis 2023</h1>
  </header>

  <RouterView />
</template>

<style scoped></style>
