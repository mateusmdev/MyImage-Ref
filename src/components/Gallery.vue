<script setup lang="ts">
import { reactive } from 'vue';

type ViewMode = 'mansory' | 'card' | 'grid'

type PropsDefinition = {
  currentViewMode: string
}

const props = defineProps<PropsDefinition>()
</script>

<template>
  <div class="image-area">
    <div class="container">
      <div 
        class="wrapper"
        :class="props.currentViewMode"
      >
        <slot 
          class="image-item"
        >
          Empty List
        </slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.image-area {
  flex: 1;
  min-height: 0;
  overflow: hidden;

  .container {
    height: 91%;
    overflow-y: auto;
    overflow-x: hidden;

    .wrapper {

      &.mansory {
        column-count: 5;
        column-gap: 0.5rem;
      }

      &.card {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }

      &.grid {

      }
    }
  }
}
</style>