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
    <span>{{ props.name }}</span>
  </a>
</template>

<style scoped lang="scss">
a {
  display: flex;
  padding: 0.5rem 0.7rem;
  align-items: center;
  color: #858585;
  border-radius: 4px;
  font-weight: bold;
  
  &.selected {
    background: #f4f4f6;
    color: #060608;
  }
  
  span {
    font-size: 0.9rem; 
  }

  .icon {
    margin-right: 15px;
    min-width: fit-content;
  }

  &.short-version {
    width: 50px;

    span {
      display: none;
    }

    .icon {
      margin-right: 0px;
    }
  }
}
</style>