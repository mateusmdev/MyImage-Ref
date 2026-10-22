<script setup lang="ts">
import Gallery from '@/components/Gallery.vue'; 
import AlbumItem from '@/components/AlbumItem.vue';
import mockData from './../../mockedData.json'

</script>

<template>
  <div class="layout-area">
    <div class="header-area">
      <h1>Album</h1>
    </div>

    <Gallery currentViewMode="grid" class="album">
      <AlbumItem 
        :src="src" 
        v-for="(src, index) in mockData || []" 
        :key="index"
        class="image-item"
      />
    </Gallery>
  </div>
</template>

<style scoped lang="scss">
</style>