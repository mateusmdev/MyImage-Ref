<script setup lang="ts">
import ImageItem from '@/components/ImageItem.vue';
import Dock from '@/components/Dock.vue';
import mockData from './../../mockedData.json'
</script>

<template>
  <div class="layout-area">

    <div class="header-area">
      <h1>Imagens</h1>

      <div class="actions">
        <Dock />
      </div>
    </div>

    <div class="image-area">
      <div class="container">
        <div class="wrapper">
          <ImageItem 
            :src="src" 
            v-for="(src, index) in mockData || []" 
            :key="index"
            class="image-item"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout-area {
  height: 100%;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .header-area {
    // border: 1px solid red;
    margin: 3rem 0 1.2rem;
    display: flex;
    justify-content: space-between;
    
    .actions {
      // border: 1px solid red;
      margin-top: -0.557rem;
      height: fit-content;
    }

    h1 {
      font-size: 1.4rem;
      flex-shrink: 0;
    }
  }

  .image-area {
    flex: 1;
    min-height: 0;
    overflow: hidden;

    .container {
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;

      .wrapper {
        column-count: 5;
        column-gap: 0.5rem;

        .image-item {
          display: block;
          width: 100%;
          margin-bottom: 0.5rem;
          break-inside: avoid;
        }
      }
    }
  }
}
</style>