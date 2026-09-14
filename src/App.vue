<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'

</script>

<template>
  <Header />

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  padding: 1rem;
  width: calc(100% - 180px);
  position: fixed;
  right: 0;
  top: 0;
}
</style>
