<script setup lang="ts">
import ImageItem from '@/components/ImageItem.vue';
import mockData from './../../mockedData.json'
</script>

<template>
  <div class="layout-area">

    <h1>Imagens</h1>

    <div class="image-area">
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
</template>

<style scoped lang="scss">
.layout-area {
  //border: 1px solid red;

  h1 {
    font-size: 1.4rem;
    margin: 1.2rem 0;
  }

  .image-area {
    height: 500px;
    overflow-y: auto;

    .wrapper {
      column-count: 5;
      column-gap: 0.5rem;
      overflow-y: auto;
      break-inside: avoid;
      page-break-inside: avoid;

      .image-item {
        margin-bottom: 0.5rem
      }
    }
  }
}
</style>