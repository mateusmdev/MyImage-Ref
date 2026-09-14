<script setup lang="ts">
import type { Component } from 'vue';

type PropsDefinition = {
  name: string,
  alt?: string,
  icon: Component,
  isActive: boolean
}

const props = defineProps<PropsDefinition>()
</script>

<template>
  <a 
    href="#"
    :class="{selected: props.isActive}"
  >
    <component 
      :is="props.icon" 
      class="icon" 
      :color="props.isActive ? '#09090B' : '#F4F4F6'"
    />
    {{ props.name }}
  </a>
</template>

<style scoped lang="scss">
a {
  display: flex;
  padding: 0.5rem 0.7rem;
  align-items: center;
  font-size: 0.9rem;
  color: #F4F4F6;

  &.selected {
    background: #F4F4F6;
    color: #09090B;
  }

  .icon {
    margin-right: 15px;
  }
}
</style>