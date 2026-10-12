<script setup lang="ts">
import { reactive } from 'vue';

type ViewMode = 'mansory' | 'card' | 'grid'

const states = reactive({
  viewMode: 'card'
  // viewMode: 'mansory'
})
</script>

<template>
  <div class="image-area">
    <div class="container">
      <div 
        class="wrapper"
        :class="states.viewMode"
      >
        <slot 
          :viewMode="states.viewMode"
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
    height: 100%;
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