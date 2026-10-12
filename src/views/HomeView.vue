<script setup lang="ts">
import Gallery from '@/components/Gallery.vue'; 
import ImageItem from '@/components/ImageItem.vue';
import Dock from '@/components/Dock.vue';
import mockData from './../../mockedData.json'
import { reactive } from 'vue';

const states = reactive({
  currentViewMode: 'mansory'
})
</script>

<template>
  <div class="layout-area">

    <div class="header-area">
      <h1>Imagens</h1>

      <div class="actions">
        <Dock @changeViewMode="(value) => states.currentViewMode = value"/>
      </div>
    </div>
    <Gallery :currentViewMode="states.currentViewMode">
      <ImageItem 
        :src="src" 
        v-for="(src, index) in mockData || []" 
        :key="index"
        class="image-item"
        :viewMode="states.currentViewMode"
      />
    </Gallery>
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
    margin: 3rem 0 1.2rem;
    display: flex;
    justify-content: space-between;
    
    .actions {
      margin-top: -0.557rem;
      height: fit-content;
    }

    h1 {
      font-size: 1.4rem;
      flex-shrink: 0;
    }
  }
}
</style>