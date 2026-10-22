<script setup lang="ts">

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
        column-gap: 0.1rem;
      }

      &.card {
        display: grid;
        grid-template-columns: repeat(
          auto-fit,
          minmax(min(100%, 300px), 1fr)
        );

        gap: 0.125rem;
        max-width: 100%;
      }

      &.grid {
        display: grid;
        grid-template-columns: repeat(
          auto-fit,
          minmax(min(100%, 250px), 1fr)
        );

        gap: 0.125rem;
        max-width: 100%;

        &.image-item.card {
          width: 100%;
          min-width: 0;
        }
      }
    }
  }

  &.album .wrapper.grid {
    gap: 3vw;
  }
}
</style>