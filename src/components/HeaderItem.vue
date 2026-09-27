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
      :color="props.isActive ? '#060608' : '#858585'"
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
  color: #858585;
  border-radius: 4px;
  font-weight: bold;

  &.selected {
    background: #f4f4f6;
    color: #060608;
  }

  .icon {
    margin-right: 15px;
  }
}
</style>