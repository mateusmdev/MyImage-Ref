<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './../components/Header.vue'
import { reactive } from 'vue'

const states = reactive({
  isOpen: false
})

const methods = {
  updateLayout(stateValue: boolean) {
    states.isOpen = stateValue
  }
}

</script>

<template>
  <Header @toggleMenu="methods.updateLayout"/>

  <main :class="{ 'is-open':states.isOpen }">
    <RouterView />
  </main>
</template>

<style scoped>
main {
  padding: 1rem;
  height: 100%;
  position: fixed;
  right: 0;
  top: 0;
  width: calc(100% - 4.688rem);
  transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1);
  
  &.is-open {
    width: calc(100% - 11.25rem);
  }
}
</style>