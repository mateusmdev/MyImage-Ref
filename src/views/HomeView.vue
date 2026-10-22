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
.actions {
  margin-top: -0.557rem;
  height: fit-content;
}
</style>